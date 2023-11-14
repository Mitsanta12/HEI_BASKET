import ClubObjectif from "../organs/ObjectifClub"
import HeroSection from "../organs/HeroSection"
import InscripptionMembre from "../organs/Inscription"
import Ordres from "../organs/MotDOrdre"
import ClubLead from "../organs/Leader"
import ClubPhoto from "../organs/Galleries"


const Home = () => {
    return (
        <>
            <HeroSection />
            <Ordres />
            <ClubPhoto />
            <ClubObjectif />
            <ClubLead />
            <InscripptionMembre />
        </>
    )
}

export default Home