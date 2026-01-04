import { Container, Box, Typography, Divider } from "@mui/material";
import ProcessInfoAvatarComponent from "./ProcessInfoAvatarComponent";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GroupsIcon from '@mui/icons-material/Groups';
import PaidIcon from '@mui/icons-material/Paid';

export default function ProcessInfo(){
    return(
        <Box sx={{backgroundColor:"#F8F8F8", paddingY:15}}>
            <Container maxWidth="xl">
                <Box sx={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
                    <Box sx={{ marginBottom:"10vh",display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
                        <Typography variant="h3" color="initial" marginBottom={2} sx={{textAlign:"center"}}>
                            Proven Process for Smarter HR
                        </Typography>
                        <Typography variant="subtitle1" color="initial" sx={{textAlign:"center"}}>
                            We simplify your HR journey, so you can focus on people, not paperwork.
                        </Typography>
                    </Box>
                    <Box sx={{ display:"flex", justifyContent:"center", alignItems:"center", flexWrap:"wrap"}}>
                        <ProcessInfoAvatarComponent avatarName="Create your account" avatarDescription="Create your free Trendex account and take control of your HR processes. No credit card needed... get started under a minute." avatarImage={<AccountCircleIcon color="primary" fontSize="large" />} />
                        <Divider orientation="vertical" sx={{display:{lg:"block", xs:"none"}}} variant="middle" flexItem />
                        <ProcessInfoAvatarComponent avatarName="Initial Assessment" avatarDescription="Start with a quick assessment to grasp your teams's HR needs. Gain insights to enhance your workflow." avatarImage={<GroupsIcon color="primary" fontSize="large" />} />
                        <Divider orientation="vertical" sx={{display:{lg:"block", xs:"none"}}} variant="middle" flexItem />
                        <ProcessInfoAvatarComponent avatarName="Customize Plan" avatarDescription="Get a tailored HR solution for your company's needs. We adapt to your size, structure and goals --no-one-size-fits-all." avatarImage={<PaidIcon color="primary" fontSize="large" />} />
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}