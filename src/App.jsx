import 'bootstrap/dist/css/bootstrap.min.css';
import AppHeader from './components/header';
import AppHero from './components/hero';
import AppAbout from './components/about';
import AppWorks from './components/work';
import AppTeams from './components/team';
import AppTestimonials from './components/testimonial';
import AppPricing from './components/pricing';
import AppLatest from './components/Latest';
import ContactPage from './components/contact';
import AppFooter from './components/footer';
function App() {
  return (

      <div className='App'>
            <header id='header'>
              <AppHeader/>
              </header> 
              <main>
              <AppHero/>
              <AppAbout/>
              <AppWorks/>
              < AppTeams/>
              < AppTestimonials/>
             <AppPricing />
             <AppLatest />
             <ContactPage/>
               <AppFooter/>



              </main>
      </div>
      
 
  )
}

export default App
