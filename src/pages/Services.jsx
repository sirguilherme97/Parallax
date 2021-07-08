import '../style/global.scss'
import { Helmet } from 'react-helmet'
import { Content } from '../components/Content'
import { BannerInfo } from '../components/BannerInfo'
import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'
import { ContentReverse } from '../components/Content/indexReverse'
import { Carrossel } from '../components/Carrosel'

export function Services() {
      return (
            <>
                  <Helmet>
                        <title>Parallax | Serviços</title>
                  </Helmet>
                  <BannerInfo />
                  <Nav data_aos="fade" />
                  <Content
                        title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus  placeat. Eum, asperiores quidem. Sequi, deserunt! "
                        subOne="Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit."
                        subTwo="Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit."
                  />
                  <Carrossel />
                  <Footer />
            </>
      )
}