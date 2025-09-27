import Backdrop from './components/backdrop/Backdrop.tsx'
import Footer from './components/footer/Footer.tsx'
import Header from './components/header/Header.tsx'
import SectionFeaturedMovies from './components/sectionFeaturedMovies/SectionFeaturedMovies'
import SectionJustReviewed from './components/sectionJustReviewed/SectionJustReviewed'
import SectionLetterboxLetsYou from './components/sectionLetterboxLetsYou/SectionLetterboxLetsYou'
import './index.css'

function Index() {

  return (
    <>
      <Header />
      <Backdrop src="./backdrop.jpg" alt="backdrop" caption="FILMMAKERS ON FILMMAKERS (2025)" />
      <main>
        <SectionFeaturedMovies />
        <SectionLetterboxLetsYou />
        <SectionJustReviewed />
      </main>
      <Footer />
    </>
  )
}

export default Index
