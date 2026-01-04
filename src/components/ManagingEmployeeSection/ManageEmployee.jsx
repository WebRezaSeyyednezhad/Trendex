import { Container, Box, Typography, Card, CardMedia } from "@mui/material";
export default function ManageEmployee(){
    return(
        <Box sx={{backgroundColor:"#e6f7fc", paddingY:15, margin:0}}>
            <Container maxWidth="xl">
                <Box sx={{display:"flex", justifyContent:"space-around", alignItems:"center", flexWrap:"wrap"}}>
                    <Box sx={{width:{lg:"38%", xs:"100%", marginBottom:"10vh"},display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
                        <Typography variant="h4" color="initial" marginBottom={2} sx={{textAlign:{xs:"center", lg:"start"}}}>
                            Smart Tools for Managing Your Employees
                        </Typography>
                        <Typography variant="caption" color="initial">
                            Trendex gives you everything you need to manage employee data, track attendance, monitor performance and support growth - all from one easy-to-use dashboard.
                        </Typography>
                    </Box>
                    <Box sx={{width:{lg:"55%", xs:"100%"}, display:"flex", justifyContent:"center", alignItems:"center"}}>
                        <Card sx={{width:"90%", height:"65vh", padding:2, display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                            <CardMedia title="employees data list in table" component="img" image="../../../employees data list in table.png" sx={{height:"90%", marginBottom:2}} />
                        </Card>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
    

}