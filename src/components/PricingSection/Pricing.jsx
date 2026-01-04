import { Container, Box, Typography, ButtonGroup, Button } from "@mui/material";
import React, {useState} from "react";
import PricingCardComponent from "./PricingCardComponent";
export default function Pricing() {
    const [isMonthly, setIsMonthly] = useState(true);
    function handleToggle() {
        setIsMonthly(!isMonthly);
    }
    return(
        <Box sx={{backgroundColor:"#F8F8F8", paddingY:15, margin:0, width:"100%"}}>
            <Container maxWidth="xl">
                <Box sx={{display:"flex", justifyContent:"space-around", alignItems:"center", flexDirection:"column"}}>
                    <Box sx={{marginBottom:4,display:"flex", justifyContent:"center", alignItems:"center"}}>
                        <Typography variant="h4" sx={{padding:2, textAlign:{xs:"center", lg:"start"}}} color="initial">Flexible Pricing for Teams of All Sizes</Typography>
                    </Box>
                    <Box sx={{marginBottom:4,display:"flex", justifyContent:"center", alignItems:"center"}}>
                        <Typography variant="subtitle1" sx={{padding:2, textAlign:{xs:"center", lg:"start"}}} color="initial">
                            Choose a plan that fits your team's needs -- no hidden fees, no long-term contracts.
                        </Typography>
                    </Box>
                    <Box sx={{marginBottom:4,display:"flex", justifyContent:"center", alignItems:"center"}}>
                        <ButtonGroup variant="outlined" aria-label="Basic button group">
                            <Button color="primary" variant={isMonthly ? "contained" : "outlined"} onClick={handleToggle} sx={{textTransform:"capitalize"}}>Monthly</Button>
                            <Button color="primary" variant={!isMonthly ? "contained" : "outlined"} onClick={handleToggle} sx={{textTransform:"capitalize"}}>Yearly</Button>
                        </ButtonGroup>
                    </Box>
                    
                </Box>
                {isMonthly ? (
                    <Box sx={{display:"flex", justifyContent:"center", alignItems:"flex-start", flexWrap:{ lg:"nowrap", xs:"wrap"}}}>
                        <PricingCardComponent
                            planName="Starter Plan"
                            planDescription="A basic plan for small teams."
                            planPrice="0"
                            planFeatures={["Up to 5 team members", "Basic employee records", "Leave & attendance tracking", "Email support", "Community access"]}
                            isPopular={false}
                            planYearlyOrMonthly="month"
                        />
                        <PricingCardComponent
                            planName="Professional Plan"
                            planDescription="A pro plan for larger teams."
                            planPrice="49"
                            planFeatures={["Unlimited team members", "Basic employee records", "Leave & attendance tracking", "Email support", "Community access"]}
                            isPopular={true}
                            planYearlyOrMonthly="month"
                        />
                        <PricingCardComponent
                            planName="Enterprise Plan"
                            planDescription="An enterprise plan for big organizations."
                            planPrice="100"
                            planFeatures={["All Professional Plan features", "Dedicated account manager", "API access & integrations", "Advanced Security & Compliance", "SLA & onboarding support"]}
                            isPopular={false}
                            planYearlyOrMonthly="month"
                        />
                    </Box>
                ):(
                    <Box sx={{display:"flex", justifyContent:"center", alignItems:"flex-start", flexWrap:{ lg:"nowrap", xs:"wrap"}}}>
                        <PricingCardComponent
                            planName="Starter Plan"
                            planDescription="A basic plan for small teams."
                            planPrice="0"
                            planFeatures={["Up to 5 team members", "Basic employee records", "Leave & attendance tracking", "Email support", "Community access"]}
                            isPopular={false}
                            planYearlyOrMonthly="year"
                        />
                        <PricingCardComponent
                            planName="Professional Plan"
                            planDescription="A pro plan for larger teams."
                            planPrice="540"
                            planFeatures={["Unlimited team members", "Basic employee records", "Leave & attendance tracking", "Email support", "Community access"]}
                            isPopular={true}
                            planYearlyOrMonthly="year"
                        />
                        <PricingCardComponent
                            planName="Enterprise Plan"
                            planDescription="An enterprise plan for big organizations."
                            planPrice="999"
                            planFeatures={["All Professional Plan features", "Dedicated account manager", "API access & integrations", "Advanced Security & Compliance", "SLA & onboarding support"]}
                            isPopular={false}
                            planYearlyOrMonthly="year"
                        />
                    </Box>
                )}
                
            </Container>
        </Box>
    )
}