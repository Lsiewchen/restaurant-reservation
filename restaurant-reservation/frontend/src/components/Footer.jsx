import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import '@fontsource/montserrat/200';

const Footer = () => {
    return (
        <Box sx={{ height: 70, display: 'flex', alignItems: 'center', bgcolor: '#F37021' }}>
            <Typography sx={{ px: { xs: 2, sm: 5, md: 10, lg: 20 }, fontFamily: 'Montserrat', fontSize: 15, color:'#ffffff' }}>
                ©2025 ChopChop.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;All Rights Reserved.
            </Typography>
        </Box>
    );
}

export default Footer