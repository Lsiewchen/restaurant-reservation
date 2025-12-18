import { Fragment, useState, useEffect, useReducer } from 'react';
import { useParams } from 'react-router';
import axios from "axios";
import Cuisine from './Cuisine.jsx';
import New from './New.jsx';
import Search from './Search.jsx';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const initState = { restaurant: [], error: '' };

const searchReduccerFunc = (prev, action) => {
  if (action.type === 'SEARCH_RESULT') {
    return { restaurant: action.val, error: '' };
  }
  if (action.type === 'NO_RESULT') {
    return { restaurant: [], error: action.val };
  }
  if (action.type === 'NO_SEARCH') {
    return { restaurant: [], error: '' }
  }
}

const Home = () => {
  const [restCuis, setRestCuis] = useState(null);
  const [restNew, setRestNew] = useState([]);
  const [searchState, dispatchSearch] = useReducer(searchReduccerFunc, initState);
  const {keyword} = useParams();

  useEffect(() => {
    if (keyword != undefined) {
      axios.get(`http://localhost:8080/restaurant/search/${keyword}`)
      .then((response) => { dispatchSearch({ type: 'SEARCH_RESULT', val: response.data }) })
      .catch((e) => { dispatchSearch({ type: 'NO_RESULT', val: e.response.data }) });
    }
    else {
      dispatchSearch({ type: 'NO_SEARCH' })
    }
  }, [keyword]);

  useEffect(() => {
    axios.get("http://localhost:8080/restaurant/cuisine")
    .then((response) => { setRestCuis(response.data); })
    .catch((e) => { console.log(e.response.data); });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:8080/restaurant/new")
    .then((response) => { setRestNew(response.data); })
    .catch((e) => { console.log(e.response.data); });
  }, []);

  return (
    <Box sx={{ py:3, pb:5, width:'100%', height:'100%' }}>
      {searchState.restaurant.length > 0 ?
        <Search restMatch={searchState.restaurant}/>
        :
        <Fragment>
        {searchState.error != '' && 
          <Typography align="center" sx={{py:2, my:3, mx: { xs: 2, sm: 5, md: 10, lg: 20, xl:40 }, borderStyle:'solid', borderColor:'#c4c4c4ff'}}>{searchState.error}</Typography>
        }
        {restCuis != null && restNew.length > 0 && (
          <Fragment>
            <New restNew={restNew} />
            {Object.entries(restCuis).map(([cuis, rest]) => (
              <Box key={cuis} sx={{ py: 1, px: { xs: 2, sm: 5, md: 10, lg: 20, xl:40 }, display: 'flex', flexDirection: 'column' }}>
                <Typography sx={{ py: 1, fontFamily: 'Montserrat', fontSize: 23 }}>{cuis}</Typography>
                <Cuisine rest={rest} />
              </Box>
            ))}
          </Fragment>
        )}
        </Fragment>
      }
    </Box>
  )
}

export default Home