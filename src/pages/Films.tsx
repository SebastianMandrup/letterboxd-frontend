import SectionBrowseBy from '../components/films/SectionBrowseBy'
import Footer from '../components/shared/footer/Footer'
import Header from '../components/shared/header/Header'
import './films.css'

function FilmsPage() {

    return (
        <>
            <Header />
            <main>
                <SectionBrowseBy />
            </main>
            <Footer />
        </>
    )
}

export default FilmsPage
