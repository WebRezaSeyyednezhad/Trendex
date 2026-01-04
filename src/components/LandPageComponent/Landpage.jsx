import { Container, Box, Divider, Typography, Button } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home'
export default function Landpage(){
    return(
        <div style={{width:"100%", minHeight:"95vh", display:"flex", justifyContent:"center", alignItems:"center", backgroundImage:"url(../../../public/landpageBG.jpg)", backgroundSize:"cover", backgroundPosition:"center"}}>
            <Container maxWidth="sm" sx={{textAlign:"center"}}>
                <Typography variant="h6" color="initial" gutterBottom sx={{display:"flex", justifyContent:"center", alignItems:"center", marginBottom:1.5}}>
                    <HomeIcon sx={{marginX:0.3}} /> Home/ <span style={{fontWeight:"600", marginLeft:2}}> Feature</span>
                </Typography>
                <Typography textAlign="center" variant="h2" color="#1a1fbc" gutterBottom>
                    Powerful Feature To Streamline Your HR
                </Typography>
                <Typography textAlign="center" variant="subtitle1" gutterBottom sx={{color:"grey"}}>
                    Explore the tools that make Trendex your all-in-one HR solution. From automated onboarding to real-time performance tracking. 
                </Typography>
                <Divider sx={{display:"flex", marginY:5, backgroundColor:"#282828"}} />
                <Button size="large" variant="contained" color="primary" sx={{textTransform:"capitalize", fontWeight:600}}> Get Started </Button>
            </Container>
        </div>
    )
}