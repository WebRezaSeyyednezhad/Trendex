import { Container, Box, Typography } from "@mui/material";
import FeatureCard from "./FeatureCard";
export default function FeatureSection(){
    return(
        <Box sx={{backgroundColor:"#F8F8F8", paddingY:15, margin:0}}>
            <Container maxWidth="xl">
                <Box sx={{display:"flex", justifyContent:"space-around", alignItems:"center", flexWrap:"wrap"}}>
                    <Box sx={{width:{lg:"45%", xs:"80%"}, marginBottom:4,display:"flex", justifyContent:"center", alignItems:"center"}}>
                        <Typography variant="h4" sx={{padding:2, textAlign:{xs:"center", lg:"start"}}} color="initial">Powerful Features to Simplify HR Management</Typography>
                    </Box>
                    <Box sx={{width:{lg:"45%", xs:"80%"}, marginBottom:4,display:"flex", justifyContent:"center", alignItems:"center"}}>
                        <Typography variant="subtitle1" sx={{padding:2, textAlign:{xs:"center", lg:"start"}}} color="initial">
                            Manage onboarding attendance, performance and more from one smart dashboard. Trendex helps your HR team works faster, smarter and with total clarity.
                        </Typography>
                    </Box>
                    <FeatureCard featureImage="../../../Smart Onboarding.jpg" featureTitle="Smart Onboarding" featureDescription="Seamlessly welcome new hires with automated checklists and document flows. Ensure a smooth, consistent experience for every team member." />
                    <FeatureCard featureImage="../../../Time & Attendance Tracking (2).jpg" featureTitle="Time & Attendance Tracking" featureDescription="Track employee hours, absences and time-off requests in real time. Gain complete visibility and reduce manual errors." />
                    <FeatureCard featureImage="../../../Performance Management.jpg" featureTitle="Performance Management" featureDescription="Set goals, conduct reviews and track progress all in one place. Empower teams with transparent feedback and clear growth path." />
                    <FeatureCard featureImage="../../../Leave & Attendance (2).jpg" featureTitle="Leave & Attendance" featureDescription="Easily manage time-off requests, holidays and sick leaves in one place. automated tracking reduces admin work and keeps teams in sync." />
                </Box>
            </Container>
        </Box>
    )
}