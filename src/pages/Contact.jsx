import '../style/global.scss'
import { Helmet } from 'react-helmet'
import { Content } from '../components/Content'
import { BannerInfo } from '../components/BannerInfo'
import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'

export function Contact() {
      return (
            <>
                  <Helmet>
                        <title>Parallax | Mande sua mensagem</title>
                  </Helmet>
                  <BannerInfo />
                  <Nav data_aos="fade" />
                  <Content title="call of duty" />
                  <Footer />
            </>
      )
}