import Box from '@mui/material/Box';
import Cuisine from './Cuisine.jsx'
import New from './New.jsx'

const restaurants = [
    {
        rtId: 1,
        name: 'Restaurant1',
        email: 'abc@gmail.com',
        phone: '87654321',
        intro: 'Michellin food',
        description: 'The best food...',
        capacity: 100,
        streetAddress: '65 Street',
        unitNumber: '01-05',
        postalCode: '050065',
        restaurantImage: 'https://static.chope.co/uploads/2025/10/s-700x350x70xw_4-1760502537.jpg?date=20251013',
        operation: "",
        cuisine: 'French',
        reservation: '',
        dateCreated: 'feb1,2025'
    },
    {
        rtId: 2,
        name: 'Restaurant2',
        email: 'abc@gmail.com',
        phone: '87654321',
        intro: 'Michellin food',
        description: 'The best food...',
        capacity: 100,
        streetAddress: '65 Street',
        unitNumber: '01-05',
        postalCode: '050065',
        restaurantImage: 'https://static.chope.co/uploads/2025/10/s-700x350x70xw_4-1760502537.jpg?date=20251013',
        operation: "",
        cuisine: 'French',
        reservation: '',
        dateCreated: 'jan1,2025'
    },
    {
        rtId: 3,
        name: 'Restaurant3',
        email: 'abc@gmail.com',
        phone: '87654321',
        intro: 'Michellin food',
        description: 'The best food...',
        capacity: 100,
        streetAddress: '65 Street',
        unitNumber: '01-05',
        postalCode: '050065',
        restaurantImage: 'https://static.chope.co/uploads/2025/10/s-700x350x70xw_4-1760502537.jpg?date=20251013',
        operation: "",
        cuisine: 'French',
        reservation: '',
        dateCreated: 'apr1,2025'
    },
    {
        rtId: 4,
        name: 'Restaurant4',
        email: 'abc@gmail.com',
        phone: '87654321',
        intro: 'Michellin food',
        description: 'The best food...',
        capacity: 100,
        streetAddress: '65 Street',
        unitNumber: '01-05',
        postalCode: '050065',
        restaurantImage: 'https://static.chope.co/uploads/2025/10/s-700x350x70xw_4-1760502537.jpg?date=20251013',
        operation: "",
        cuisine: 'French',
        reservation: '',
        dateCreated: 'mar1,2025'
    }
]

const newRestaurants = [
        {
        rtId: 1,
        name: 'Restaurant1',
        email: 'abc@gmail.com',
        phone: '87654321',
        intro: 'Michellin food',
        description: 'The best food...',
        capacity: 100,
        streetAddress: '65 Street',
        unitNumber: '01-05',
        postalCode: '050065',
        restaurantImage: 'https://static.chope.co/uploads/2025/10/s-700x350x70xw_4-1760502537.jpg?date=20251013',
        operation: "",
        cuisine: 'French',
        reservation: '',
        dateCreated: 'feb1,2025'
    },
    {
        rtId: 2,
        name: 'Restaurant2',
        email: 'abc@gmail.com',
        phone: '87654321',
        intro: 'Michellin food',
        description: 'The best food...',
        capacity: 100,
        streetAddress: '65 Street',
        unitNumber: '01-05',
        postalCode: '050065',
        restaurantImage: 'https://static.chope.co/uploads/2025/10/s-700x350x70xw_4-1760502537.jpg?date=20251013',
        operation: "",
        cuisine: 'French',
        reservation: '',
        dateCreated: 'jan1,2025'
    },
    {
        rtId: 3,
        name: 'Restaurant3',
        email: 'abc@gmail.com',
        phone: '87654321',
        intro: 'Michellin food',
        description: 'The best food...',
        capacity: 100,
        streetAddress: '65 Street',
        unitNumber: '01-05',
        postalCode: '050065',
        restaurantImage: 'https://static.chope.co/uploads/2025/10/s-700x350x70xw_4-1760502537.jpg?date=20251013',
        operation: "",
        cuisine: 'French',
        reservation: '',
        dateCreated: 'apr1,2025'
    },
    {
        rtId: 4,
        name: 'Restaurant4',
        email: 'abc@gmail.com',
        phone: '87654321',
        intro: 'Michellin food',
        description: 'The best food...',
        capacity: 100,
        streetAddress: '65 Street',
        unitNumber: '01-05',
        postalCode: '050065',
        restaurantImage: 'https://static.chope.co/uploads/2025/10/s-700x350x70xw_4-1760502537.jpg?date=20251013',
        operation: "",
        cuisine: 'French',
        reservation: '',
        dateCreated: 'apr1,2025'
    },
    {
        rtId: 5,
        name: 'Restaurant5',
        email: 'abc@gmail.com',
        phone: '87654321',
        intro: 'Michellin food',
        description: 'The best food...',
        capacity: 100,
        streetAddress: '65 Street',
        unitNumber: '01-05',
        postalCode: '050065',
        restaurantImage: 'https://static.chope.co/uploads/2025/10/s-700x350x70xw_4-1760502537.jpg?date=20251013',
        operation: "",
        cuisine: 'French',
        reservation: '',
        dateCreated: 'apr1,2025'
    }
]

const Home = () => {
    return (
        <Box sx={{ py:5, bgcolor:'#FAFAFA' }}>
            <New newRests={newRestaurants} />
            <Cuisine rests={restaurants} />
            <Cuisine rests={restaurants} />
        </Box>
    )
}

export default Home;