import {Container, Box, Typography, Button, Accordion, AccordionDetails, AccordionSummary} from "@mui/material";
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React, {useState} from "react";
export default function FAQ() {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return(
        <Box sx={{backgroundColor:"#F8F8F8", paddingY:15, margin:0, width:"100%"}}>
            <Container maxWidth="xl">
                <Box sx={{display:"flex", flexDirection:{lg:"row", xs:"column"}, justifyContent:"space-between", alignItems:"flex-start"}}>
                    <Box sx={{width:{lg:"45%", xs:"100%"}, height:{lg:"70vh", xs:"auto"}, display:"flex", justifyContent:{lg:"space-between", xs:"flex-start"}, alignItems:{lg:"flex-start", xs:"center"}, flexDirection:"column", marginBottom:{lg:0, xs:5}}}>
                        <Box sx={{textAlign:{lg:"left", xs:"center"}, marginBottom:3}}>
                            <Typography variant="h4" color="initial">Frequently Asked Questions</Typography>
                            <Typography variant="caption" color="initial">Got questions? We've got answers. Here are some of the most common things people ask about Trendex and how we help simplify HR.</Typography>
                        </Box>
                        <Box sx={{marginTop:{lg:"auto", xs:5}}}>
                            <Button variant="contained" color="primary" size="large" sx={{textTransform:"capitalize"}} endIcon={<HelpCenterIcon />}>Ask Any Questions</Button>
                        </Box>
                    </Box>
                    <Box sx={{width:{lg:"45%", xs:"100%"}, height:"70vh", display:"flex", flexDirection:"column", justifyContent:"space-evenly", alignItems:"flex-start", marginBottom:{lg:0, xs:5}}}>
                        <Accordion sx={{marginBottom:2, borderRadius:2, padding:1, width:"100%"}} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header">
                                <Typography variant="body1">What is Trendex?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography variant="subtitle2">
                                    Trendex is a comprehensive HR management platform designed to streamline and simplify HR processes for businesses of all sizes.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion sx={{marginBottom:2, borderRadius:2, padding:1, width:"100%"}} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2bh-content" id="panel2bh-header">
                                <Typography variant="body1">Is there a free trial available?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography variant="subtitle2">
                                    Yes, Trendex offers a free trial for new users to explore the platform and its features before committing to a subscription.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion sx={{marginBottom:2, borderRadius:2, padding:1, width:"100%"}} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3bh-content" id="panel3bh-header">
                                <Typography variant="body1">How Secure is my data with Trendex?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography variant="subtitle2">
                                    Trendex takes data security seriously and implements robust measures to protect user information, including encryption, access controls, and regular security audits.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion sx={{marginBottom:2, borderRadius:2, padding:1, width:"100%"}} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel4bh-content" id="panel4bh-header">
                                <Typography variant="body1">Do you support remote or hybrid teams?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography variant="subtitle2">
                                    Yes, Trendex fully supports remote and hybrid teams, providing the necessary tools and features to facilitate collaboration and communication regardless of location.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion sx={{marginBottom:2, borderRadius:2, padding:1, width:"100%"}} expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel5bh-content" id="panel5bh-header">
                                <Typography variant="body1">Can I integrate Trendex with other tools?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography variant="subtitle2">
                                    Absolutely! Trendex offers integrations with various third-party applications and services to enhance your HR management experience.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion sx={{marginBottom:2, borderRadius:2, padding:1, width:"100%"}} expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel6bh-content" id="panel6bh-header">
                                <Typography variant="body1">How long does it take to set up Trendex?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography variant="subtitle2">
                                    Setting up Trendex is quick and easy, typically taking just a few hours to configure your account and import existing data.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Box>
                </Box>
                
            </Container>
        </Box>
        
    )
}