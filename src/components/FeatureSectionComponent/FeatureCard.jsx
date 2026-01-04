import { Card, Box, CardMedia, CardContent, Typography } from "@mui/material";

export default function FeatureCard({featureImage, featureTitle, featureDescription}){
    return(
        <Box sx={{width:{md:"45%", xs:"100%"}, marginBottom:4, display:"flex", justifyContent:"center", alignItems:"center"}}>
            <Card sx={{width:"90%", height:"55vh", padding:2, display:"flex", flexDirection:"column", justifyContent:"space-evenly"}}>
                <CardMedia title={featureTitle} component="img" image={featureImage} sx={{height:"60%", marginBottom:2}} />
                <CardContent sx={{height:"40%"}}>
                    <Typography variant="h5" color="initial" marginBottom={2}>{featureTitle}</Typography>
                    <Typography variant="caption" color="initial">{featureDescription}</Typography>
                </CardContent>
            </Card>
        </Box>
    )
}