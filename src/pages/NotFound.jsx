import '../style/global.scss'
import { Helmet } from 'react-helmet'
import { Content } from '../components/Content'
import { BannerInfo } from '../components/BannerInfo'
import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'
import { ContentReverse } from '../components/Content/indexReverse'

export function NotFound() {
      return (
            <>
                  <Helmet>
                        <title>Parallax | Oops</title>
                  </Helmet>
                  <BannerInfo />
                  <Nav />
                  <div id="notFound">
                        <h1>404</h1><h3> - </h3><h3>Not Found</h3>
                  </div>
            </>
      )
}