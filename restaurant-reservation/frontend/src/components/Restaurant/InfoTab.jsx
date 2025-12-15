import * as React from 'react';
import About from './About';
import Menu from './Menu';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import '@fontsource/montserrat/300';

const theme = createTheme ( {
  palette: {
    primary: {
      main: "#F37021"
    }
  },
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          fontWeight: 'bold'
        }
      }
    }
  }
})

const InfoTab = ({restaurant}) => {
    const [tab, setTab] = React.useState('About');

    const handleChange = (event, newValue) => {
        setTab(newValue);
    };

    return (
        <Box sx={{ borderRadius: 2 }}>
            <TabContext value={tab}>
                <ThemeProvider theme={theme}>
                <TabList onChange={handleChange} variant="fullWidth" textColor='primary' indicatorColor='primary'>
                    <Tab label='About' value='About'/>
                    <Tab label='Menu' value='Menu'/>
                </TabList>
                </ThemeProvider>
                <TabPanel value="About" sx={{ p: 0, py: 3 }}><About restaurant={restaurant}/></TabPanel>
                <TabPanel value="Menu" sx={{ p: 0, py: 3 }}><Menu restaurant={restaurant}/></TabPanel>
            </TabContext>
        </Box>
    )
}

export default InfoTab