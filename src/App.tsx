import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';
import { Showcase } from './components/Showcase';
import { Stats } from './components/Stats';
import { Pricing } from './components/Pricing';
import { Contact } from './components/Contact';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <Navbar />
      <Hero />
      <Features />
      <Showcase />
      <Stats />
      <Testimonials />
      <Pricing />
      <Contact />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;