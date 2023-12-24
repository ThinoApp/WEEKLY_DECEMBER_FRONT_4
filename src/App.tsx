import './App.css';
import Content from './components/Content/Content';
import Cta from './components/Cta/Cta';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import Gallery from './components/Gallery/Gallery';

import Hero from './components/Hero/Hero';
import Partner from './components/Partner/Partner';
import Testimonials from './components/Testimonials/Testimonials';

function App() {
    return (
        <div className="App">
            <div className="progress1" />
            <div className="progress2" />
            <Hero />
            <Features />
            <Content />
            <Gallery />
            <Partner />
            <Testimonials />
            <Cta />
            <Footer />
        </div>
    );
}

export default App;
