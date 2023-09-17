import Navigation from './component/Navigation'
import Home from './component/Home'
import AboutUs from './component/AboutUs'
import Services from './component/Services'
import ContactUs from './component/ContactUs'
import Footer from './component/Footer'
const App = () => {

  return (

    <div className='bg-primary-400 overflow-x-hidden'>
      
      <Navigation />
      <Home />
      <AboutUs />
      <Services />
      <ContactUs/>
      <Footer />
      
    </div>
  )
}

export default App
