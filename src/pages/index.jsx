import "../index.css"
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Mostread from "../components/Mostread";
import PiggyBank from "../images/piggy-bank.svg";
import Delivery from "../images/delivery.svg";
import Percent from "../images/percent.svg";
import Visit from "../components/Visit";
import Benefits from "../components/Benefits";
import Post from "../components/Post";
import Footer from "../components/Footer";
function Index(){

    return(
        <>
        <Navbar />
        <Hero />
        <Benefits 
        imgOne={ Delivery}
        imgTwo={ PiggyBank}
        imgThree={Percent} />
        <Mostread />
        <Visit />
        <Post />
        <Footer />
        </>
        
    )

}

export default Index;