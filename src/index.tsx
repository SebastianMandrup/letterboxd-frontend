import Backdrop from './components/index/backdrop/Backdrop'
import SectionFeaturedMovies from './components/index/sectionFeaturedMovies/SectionFeaturedMovies'
import SectionGetStarted from './components/index/sectionGetStarted/SectionGetStarted'
import SectionJustReviewed from './components/index/sectionJustReviewed/SectionJustReviewed'
import SectionLetterboxLetsYou from './components/index/sectionLetterboxLetsYou/SectionLetterboxLetsYou'
import RecentStories from './components/index/sectionRecentStories/RecentStories'
import Footer from './components/shared/footer/Footer'
import Header from './components/shared/header/Header'
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
        <RecentStories />
      </main>
      <Footer />
    </>
  )
}

export default Index
