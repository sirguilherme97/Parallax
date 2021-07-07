import './style/global.scss'
import { Banner } from './components/Banner'
import { Content } from './components/Content'
import { BannerInfo } from './components/BannerInfo'
import { Nav } from './components/Nav'
import { Footer } from './components/Footer'
import { ContentReverse } from './components/Content/indexReverse'

export function App() {
      return (
            <>
                  <BannerInfo />
                  <Nav />
                  <Banner />
                  <Content />
                  <ContentReverse />
                  <Footer />
            </>
      )
}