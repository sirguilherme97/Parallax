import '../style/global.scss'
import { Helmet } from 'react-helmet'
import { BannerInfo } from '../components/BannerInfo'
import { Nav } from '../components/Nav'

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
export function NotFound() {
      return (
            <>
                  <Helmet>
                        <title>Parallax | Oops</title>
                  </Helmet>
                  <BannerInfo />
                  <Nav />
                  <div id="notFound" >
                        <div id="code" data-aos="fade" data-aos-easing="ease-in-out" data-aos-duration="4000" data-aos-delay="3550 ">
                              <h1>404</h1>
                        </div>
                        <div id="ponto" data-aos="fade" data-aos-easing="ease-in-out" data-aos-duration="4000" data-aos-delay="3550 ">
                              <h3 > - </h3>
                        </div>
                        <div id="subCode" data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-duration="4000" data-aos-delay="3550 ">
                              <h3>¯\_(ツ)_/¯</h3>
                        </div>
                  </div>
            </>
      )
}