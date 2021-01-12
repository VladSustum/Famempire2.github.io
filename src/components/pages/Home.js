import react from 'react'
import '../../App.css';
import HeroSection from '../HeroSection';
import Portfolio from '../Portfolio';
import Onama from '../Onama'
import { homeObjOne } from '../Onama/OnamaData';
import Usluge from '../Usluge';
import Footer from '../Footer';
import Kontakt from '../Kontakt/Kontakt';

function Home(){
    return (
        <div id="home">
        
        <HeroSection></HeroSection>
        <Onama {...homeObjOne} />
        <Usluge/>
        <Portfolio></Portfolio>
        <Kontakt/>
     
    
        

        </div>

    )
}

export default Home;