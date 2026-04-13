import Header from "./components/Header/Header"
import NavBar from "./components/NavBar/NavBar"
import Hero from "./components/Hero/Hero"
import Benefits from "./components/Benefits/Benefits"
import TestimonialsSection from "./components/Testimonials/Testimonials"
import FAQ from "./components/FAQ/FAQ"
import Footer from "./components/Footer/Footer"
import Pages from "./components/Explore/Explore"

function App(){
    return (
        <>
        <Header>
            <NavBar
            logo = "/assets/images/Logo.png"
            items={[
                "Home",
                "About Us",
                "Academics",
                "Admissions",
                "Student Life",
                "Contact",
            ]}
            btn="Contact"
            />
            <Hero/>
            <Benefits/>
            <TestimonialsSection/>
            <FAQ/>
            <Pages/>
            <Footer/>
        </Header>
        </>
    )
}
export default App