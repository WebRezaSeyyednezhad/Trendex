import { Container, Box, Typography, Button, Divider } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
export default function Footer() {
    return(
        <Box sx={{backgroundColor:"#F8F8F8", paddingY:5, margin:0, width:"100%"}}>
            <Container maxWidth="xl">
                <Box sx={{width:"100%", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                    <Box sx={{width:"100%",display:"flex", flexDirection:{lg:"row", xs:"column"}, justifyContent:"space-between", alignItems:"flex-start"}}>
                        <Box sx={{width:{ lg:"45%", xs:"100%"}, display:"flex",flexDirection:"column" ,justifyContent:{lg:"flex-start", xs:"center"}, alignItems:{lg:"flex-start", xs:"center"}, marginBottom:2}}>
                            <Typography variant="h4" color="initial" sx={{textAlign:{xs:"center", lg:"start"}}}>Trendex</Typography>
                            <Typography variant="subtitle2" color="initial" sx={{textAlign:{xs:"center", lg:"start"}}}>Trendex is a modern HR management platform designed to simplify people operations for growing teams. </Typography>
                        </Box>
                        <Box sx={{width:{lg:"45%", xs:"100%"}, display:"flex",flexDirection:"row" ,justifyContent:{lg:"flex-start", xs:"space-evenly"}, alignItems:"flex-start"}}>
                            <Box sx={{display:"flex", flexDirection:"column", justifyContent:"flex-start", alignItems:"flex-start", margin:2}}>
                                <Typography variant="body1" color="initial">Navigation</Typography>
                                <Button variant="text" sx={{textTransform:"capitalize", display:"flex", justifyContent:"flex-start", alignItems:"flex-start"}}><Typography variant="body2" color="initial" textAlign="start">Home</Typography></Button>
                                <Button variant="text" sx={{textTransform:"capitalize", display:"flex", justifyContent:"flex-start", alignItems:"flex-start"}}><Typography variant="body2" color="initial" textAlign="start">About</Typography></Button>
                                <Button variant="text" sx={{textTransform:"capitalize", display:"flex", justifyContent:"flex-start", alignItems:"flex-start"}}><Typography variant="body2" color="initial" textAlign="start">Service</Typography></Button>
                                <Button variant="text" sx={{textTransform:"capitalize", display:"flex", justifyContent:"flex-start", alignItems:"flex-start"}}><Typography variant="body2" color="initial" textAlign="start">Blog</Typography></Button>
                                <Button variant="text" sx={{textTransform:"capitalize", display:"flex", justifyContent:"flex-start", alignItems:"flex-start"}}><Typography variant="body2" color="initial" textAlign="start">Contact</Typography></Button>
                            </Box>
                            <Box sx={{display:"flex", flexDirection:"column", justifyContent:"flex-start", alignItems:"flex-start", margin:2}}>
                                <Typography variant="body1" color="initial">Company</Typography>
                                <Button variant="text" sx={{textTransform:"capitalize", display:"flex", justifyContent:"flex-start", alignItems:"flex-start"}}><Typography variant="body2" color="initial" textAlign="start">About Us</Typography></Button>
                                <Button variant="text" sx={{textTransform:"capitalize", display:"flex", justifyContent:"flex-start", alignItems:"flex-start"}}><Typography variant="body2" color="initial" textAlign="start">Careers</Typography></Button>
                                <Button variant="text" sx={{textTransform:"capitalize", display:"flex", justifyContent:"flex-start", alignItems:"flex-start"}}><Typography variant="body2" color="initial" textAlign="start">Blog</Typography></Button>
                                <Button variant="text" sx={{textTransform:"capitalize", display:"flex", justifyContent:"flex-start", alignItems:"flex-start"}}><Typography variant="body2" color="initial" textAlign="start">Help Center</Typography></Button>
                                <Button variant="text" sx={{textTransform:"capitalize", display:"flex", justifyContent:"flex-start", alignItems:"flex-start"}}><Typography variant="body2" color="initial" textAlign="start">FAQs</Typography></Button>
                            </Box>
                            <Box sx={{display:"flex", flexDirection:"column", justifyContent:"flex-start", alignItems:"flex-start", margin:2}}>
                                <Typography variant="body1" color="initial">Product</Typography>
                                <Button variant="text" sx={{textTransform:"capitalize", display:"flex", justifyContent:"flex-start", alignItems:"flex-start"}}><Typography variant="body2" color="initial" textAlign="start">Features</Typography></Button>
                                <Button variant="text" sx={{textTransform:"capitalize", display:"flex", justifyContent:"flex-start", alignItems:"flex-start"}}><Typography variant="body2" color="initial" textAlign="start">Pricing</Typography></Button>
                                <Button variant="text" sx={{textTransform:"capitalize", display:"flex", justifyContent:"flex-start", alignItems:"flex-start"}}><Typography variant="body2" color="initial" textAlign="start">Integration</Typography></Button>
                                <Button variant="text" sx={{textTransform:"capitalize", display:"flex", justifyContent:"flex-start", alignItems:"flex-start"}}><Typography variant="body2" color="initial" textAlign="start">Free Trials</Typography></Button>
                            </Box>
                        </Box>
                    </Box>
                    <Divider style={{width:'100%'}}></Divider>
                    <Box sx={{width:"100%", display:"flex", flexDirection:"column"}}>
                        <Box sx={{width:"100%",display:"flex", justifyContent:"space-between", alignItems:"center", marginY:2}}>
                            <Typography variant="caption" color="initial">&#169; 2025 Trendex. Developed by <Typography fontWeight="bold" variant="caption" color="primary">Reza Seyyednezhad</Typography> </Typography>
                            <Box sx={{display:"flex", justifyContent:"space-around"}}>
                                <Button variant="contained" fullWidth endIcon={<GitHubIcon />} href="https://github.com/Reza-Seyyednezhad">GitHub</Button>
                            </Box>
                        </Box>
                        <Box sx={{width:"100%",display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                            <Typography variant="caption" color="initial">&#169; 2025 Trendex. Designed by <Typography fontWeight="bold" variant="caption" color="primary"> Ilias Miah </Typography> </Typography>
                            <Box sx={{display:"flex", justifyContent:"space-around"}}>
                                <Button variant="contained" fullWidth endIcon={<DesignServicesIcon />} href="https://dribbble.com/shots/26068073-HR-Management-SAAS-Website-Design-Features-Page?utm_source=Clipboard_Shot&utm_campaign=ilias000&utm_content=HR%20Management%20SAAS%20Website%20Design-%20Features%20Page&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=ilias000&utm_content=HR%20Management%20SAAS%20Website%20Design-%20Features%20Page&utm_medium=Social_Share">Design Page</Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}