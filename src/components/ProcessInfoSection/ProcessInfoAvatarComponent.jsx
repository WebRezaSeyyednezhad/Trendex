import { Box, Typography, Avatar } from "@mui/material";

export default function ProcessInfoAvatarComponent({ avatarName, avatarDescription, avatarImage }) {
    return (
        <Box sx={{ width: { lg: "30%", sm: "80%" }, marginBottom: 4, display: "flex", justifyContent: "space-around", alignItems: {lg:"flex-start", xs:"center"}, flexDirection:"column", padding: 3 }}>
            <Avatar variant="rounded" alt={avatarName} sx={{ width: "75px", height: "75px", marginBottom: 2, backgroundColor:"#fff", border:"1px solid #e5e5e5" }}>
                {avatarImage}
            </Avatar>
            <Typography variant="h5" color="initial" sx={{ marginBottom: 2 }}>
                {avatarName}
            </Typography>
            <Typography variant="subtitle2" color="initial" sx={{ marginBottom: 2, textAlign:{lg:"justify", xs:"center"} }}>
                {avatarDescription}
            </Typography>
        </Box>
    );
}