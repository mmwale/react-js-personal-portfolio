import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import MyPortfolio from "../MyPortfolio";
import MySkills from "../MySkills";

//Main function that incorporates/imports all the sections of the main page as functions
export default function Home(){
    return (
        <>
        <HeroSection />
        <AboutMe/>
        <MySkills/>
        <MyPortfolio/>
        <ContactMe/>
        <Footer/>
        </>
    );
}