import { Layout } from './components/Layout';
import { Hero } from './components/sections/Hero';
import { Brands } from './components/sections/Brands';
import { Services } from './components/sections/Services';
import { AboutUs } from './components/sections/AboutUs';
import { Pricing } from './components/sections/Pricing';
import { CTA } from './components/sections/CallToAction';
import { TrippyScroll } from './components/sections/ScrollOptical';
import { BackgroundVideo } from "./components/sections/BackgroundVideo";
import { ContentSplit } from './components/sections/ContentSplit';
import { TwoDroids } from './components/sections/TwoDroids';
import { DroidAssasin } from './components/sections/DroidAssasin';
import { DroidVideo } from './components/sections/DroidVideo';
import { ThreeDroids } from './components/sections/Three-container';


function App() {
  return (
    <Layout title="EdgeAI">
      <Hero />
      <BackgroundVideo />
      <ContentSplit />
      <DroidVideo />
      <ThreeDroids />
      <Brands />
      <Services />
      <AboutUs />
      <Pricing />
      <CTA />
    </Layout>
  );
}

export default App;
