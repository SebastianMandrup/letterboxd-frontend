import Backdrop from './components/backdrop/Backdrop'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import SectionFeaturedMovies from './components/sectionFeaturedMovies/SectionFeaturedMovies'
import SectionGetStarted from './components/sectionGetStarted/SectionGetStarted'
import SectionJustReviewed from './components/sectionJustReviewed/SectionJustReviewed'
import SectionLetterboxLetsYou from './components/sectionLetterboxLetsYou/SectionLetterboxLetsYou'
import './index.css'

function Index() {

  return (
    <>
      <Header />
      <Backdrop src="./backdrop.png" alt="backdrop" caption="FILMMAKERS ON FILMMAKERS (2025)" />
      <main>
        <SectionGetStarted />
        <SectionFeaturedMovies />
        <SectionLetterboxLetsYou />
        <SectionJustReviewed />
      </main>
      <Footer />
    </>
  )
}

export default Index
