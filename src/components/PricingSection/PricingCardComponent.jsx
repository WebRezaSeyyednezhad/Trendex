import {Box, Card, Typography, CardContent, CardActions, Button, Checkbox, Chip, FormControlLabel, FormGroup} from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
export default function PricingCardComponent({planName, planDescription, planPrice, planFeatures, isPopular, planYearlyOrMonthly}) {
    const borderStyle = isPopular ? { border: "2px solid #1565C0" } : {};
    const bgColor = isPopular ? "#f0f8ff" : "#fff";
    return(
        <Card sx={{width:{ xs: "100%", lg: "30%" }, height:"80vh", display:"flex", flexDirection:"column", justifyContent:"space-around", alignItems:"flex-start", padding:2 , margin:2, boxShadow:3, borderRadius:4, backgroundColor:bgColor, ...borderStyle}}>
            <CardContent>
                <Box sx={{width:"100%", display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                    <Typography variant="h5" color="initial" sx={{display:"flex", justifySelf:"flex-start"}}>{planName}</Typography>
                    {isPopular && <Chip label="Popular" color="primary" size="small" sx={{display:"flex"}} />}
                </Box>
                
                <Typography variant="subtitle2" color="initial">{planDescription}</Typography>
                <Box sx={{display:"flex", justifyContent:"flex-start", alignItems:"baseline"}}>
                    <Typography variant="h3" color="initial" sx={{marginY:"1.5rem"}}>${planPrice}</Typography>
                    <Typography variant="body2" color="initial" sx={{marginLeft:1}}>/per {planYearlyOrMonthly}</Typography>
                </Box>
                
                <Box>
                    <Typography variant="h6" color="initial">Features:</Typography>
                    <FormGroup>
                        {planFeatures.map((feature, index) => (
                            <FormControlLabel key={index} control={<Checkbox readOnly checked={true} />} label={feature}  />
                        ))}
                    </FormGroup>
                </Box>
            </CardContent>
            <CardActions sx={{width:"100%"}}>
                    <Button variant={isPopular ? "contained" : "outlined"} sx={{textTransform:"capitalize", fontWeight:"600"}} fullWidth color="primary" endIcon={<ArrowForwardIcon />}>Choose Plan</Button>
            </CardActions>
        </Card>
    )
}