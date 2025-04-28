import AboutUs from "./Components/AboutUs"
import Contacts from "./Components/Contacts"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import Navbar from "./Components/navbar"
import Pricing from "./Components/Pricing"
import ResumeBuilding from "./Components/ResumeBuilding"
import TestimonialsAndWhyChooseUs from "./Components/Testimonial"
import HowWeWork from "./Components/Work"


function App() {

  return (<>
    <div className="bg-[url('./assets/Gradient.png')] bg-cover bg-no-repeat min-h-full">
 <Navbar/>
 <Header/>
 </div>
 <HowWeWork/>
 <AboutUs/>
 <TestimonialsAndWhyChooseUs/>
 <Pricing/>
 <ResumeBuilding/>
 <Contacts/>
 <Footer/>
 </>
  )
}

export default App
