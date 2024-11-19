import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { InoveSection } from './components/InoveSection/InoveSection'
import { InterfaceSection } from './components/InterfaceSection/InterfaceSection'
import { MainSection } from './components/MainSection/MainSection'
import { VideoSection } from './components/VideoSection/VideoSection'
import { WhySection } from './components/WhySection/WhySection'
import './global.css'

function App() {

  return (
      <div>
        <Header/>
        <MainSection/>
        <VideoSection/>
        <WhySection/>
        <InoveSection/>
        <InterfaceSection/>
        <Footer/>
      </div>
  )
}

export default App
