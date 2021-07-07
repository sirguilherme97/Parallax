import '../style/global.scss'
import { Helmet } from 'react-helmet'
import { Content } from '../components/Content'
import { BannerInfo } from '../components/BannerInfo'
import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'
import { ContentReverse } from '../components/Content/indexReverse'

export function Blog() {
      return (
            <>
                  <Helmet>
                        <title>Parallax | Blog</title>
                  </Helmet>
                  <BannerInfo />
                  <Nav />
                  <Content />
                  <ContentReverse />
                  <Footer />
            </>
      )
}