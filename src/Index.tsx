import Backdrop from './components/backdrop/backdrop'
import Header from './components/header/header'
import SectionFeaturedMovies from './components/sectionFeaturedMovies/SectionFeaturedMovies'
import SectionLetterboxLetsYou from './components/sectionLetterboxLetsYou/SectionLetterboxLetsYou'
import './index.css'

function Index() {

  return (
    <>
      <Header />
      <main>
        <Backdrop src="./backdrop.jpg" alt="backdrop" caption="FILMMAKERS ON FILMMAKERS (2025)" />
        <SectionFeaturedMovies />
        <SectionLetterboxLetsYou />
      </main>
    </>
  )
}

export default Index
