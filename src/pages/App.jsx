import '../style/global.scss'
import { Helmet } from 'react-helmet'
import { Banner } from '../components/Banner'
import { Content } from '../components/Content'
import { BannerInfo } from '../components/BannerInfo'
import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'
import { ContentReverse } from '../components/Content/indexReverse'

export function App() {
      return (
            <>
                  <Helmet>
                        <title>Parallax | Dashboard</title>
                  </Helmet>

                  <BannerInfo />
                  <Nav />
                  <Banner />
                  <Content />
                  <ContentReverse />
                  <Footer />
            </>
      )
}