import Header from "./HeaderComponent/Header"
import Landpage from "./LandPageComponent/Landpage"
import FeatureSection from "./FeatureSectionComponent/FeatureSection"
import ManageEmployee from "./ManagingEmployeeSection/ManageEmployee"
import ProcessInfo from "./ProcessInfoSection/ProcessInfo"
import Pricing from "./PricingSection/Pricing"
import FAQ from "./FAQSection/FAQ"
import Footer from "./FooterSection/Footer"
import { Divider } from "@mui/material"
export default function FullPage(){
    return(
        <>
            <Header />
            <Divider/>
            <Landpage />
            <Divider/>
            <FeatureSection />
            <Divider/>
            <ManageEmployee />
            <Divider/>
            <ProcessInfo />
            <Divider />
            <Pricing />
            <Divider/>
            <FAQ />
            <Divider/>
            <Footer />
        </>
    )
}
