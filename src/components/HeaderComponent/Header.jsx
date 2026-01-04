import React, {useState} from "react";
import { Container, Box,IconButton, Typography, Divider, Button, AppBar, Toolbar, Drawer, List, ListItem, useTheme, useMediaQuery } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu'
import HomeIcon from '@mui/icons-material/Home'
import InfoIcon from '@mui/icons-material/Info'
import BuildIcon from '@mui/icons-material/Build'
import BookIcon from '@mui/icons-material/Book'
import PhoneIcon from '@mui/icons-material/Phone'
export default function Header(){
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))
    return(
        <Container maxWidth="lg">
            <AppBar position="fixed" sx={{backgroundColor:"#ededed"}}>
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    <Typography variant="h4" sx={{color:"black"}}> Trendex </Typography>
                    {
                        isMobile ? (
                            <Box gap={1} sx={{display: "flex"}}>
                                <IconButton aria-label="hamburgerIcon" onClick={()=>setIsDrawerOpen(true)}>
                                    <MenuIcon color="gray"/>
                                </IconButton>
                                <Drawer variant="temporary" anchor="left" open={isDrawerOpen} onClose={()=>setIsDrawerOpen(false)}>
                                    <Box sx={{width:250}} role="presentation" onClick={()=>{setIsDrawerOpen(false)}}>
                                        <List sx={{padding:2}}>
                                            <ListItem>
                                                <Typography textAlign="center" variant="h4">
                                                    Trendex
                                                </Typography>
                                            </ListItem>
                                            <Divider sx={{marginY:2}} />
                                            <ListItem>
                                                <Button startIcon={<HomeIcon/>} variant="text" sx={{textTransform:"capitalize", fontSize:"1.1rem", color:"#282828", display:"flex", justifyContent:"flex-start"}} fullWidth>
                                                    Home
                                                </Button>
                                            </ListItem>
                                            <ListItem>
                                                <Button startIcon={<InfoIcon />} variant="text" sx={{textTransform:"capitalize", fontSize:"1.1rem", color:"#282828", display:"flex", justifyContent:"flex-start"}} fullWidth>
                                                    About
                                                </Button>
                                            </ListItem>
                                            <ListItem>
                                                <Button startIcon={<BuildIcon />} variant="text" sx={{textTransform:"capitalize", fontSize:"1.1rem", color:"#282828", display:"flex", justifyContent:"flex-start"}} fullWidth>
                                                    Service
                                                </Button>
                                            </ListItem>
                                            <ListItem>
                                                <Button startIcon={<BookIcon />} variant="text" sx={{textTransform:"capitalize", fontSize:"1.1rem", color:"#282828", display:"flex", justifyContent:"flex-start"}} fullWidth>
                                                    Blog
                                                </Button>
                                            </ListItem>
                                            <ListItem>
                                                <Button startIcon={<PhoneIcon />} variant="text" sx={{textTransform:"capitalize", fontSize:"1.1rem", color:"#282828", display:"flex", justifyContent:"flex-start"}} fullWidth>
                                                    Contact
                                                </Button>
                                            </ListItem>
                                            <Divider sx={{marginY:2}} />
                                            <ListItem>
                                                <Button variant="contained" color="primary" fullWidth sx={{textTransform:"capitalize", fontWeight:600}}> Get Started </Button>
                                            </ListItem>
                                            
                                        </List>
                                    </Box>
                                </Drawer>
                            </Box>
                        ):(
                            <>
                                <Box sx={{display:"flex", gap:2}}>
                                    <Button variant="text" sx={{textTransform:"capitalize", fontSize:"1.1rem", color:"#282828"}}> Home </Button>
                                    <Button variant="text" sx={{textTransform:"capitalize", fontSize:"1.1rem", color:"#282828"}}> About </Button>
                                    <Button variant="text" sx={{textTransform:"capitalize", fontSize:"1.1rem", color:"#282828"}}> Service </Button>
                                    <Button variant="text" sx={{textTransform:"capitalize", fontSize:"1.1rem", color:"#282828"}}> Blog </Button>
                                    <Button variant="text" sx={{textTransform:"capitalize", fontSize:"1.1rem", color:"#282828"}}> Contact </Button>
                                </Box>
                                <Button variant="contained" color="primary" sx={{textTransform:"capitalize", fontWeight:600}}> Get Started </Button>
                            </>
                            
                        )
                    }
                </Toolbar>
            </AppBar>
        </Container>
        
    )
}