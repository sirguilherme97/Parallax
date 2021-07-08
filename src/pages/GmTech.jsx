import '../style/global.scss'
import { Helmet } from 'react-helmet'
import { BannerInfo } from '../components/BannerInfo'
import { Nav } from '../components/Nav'

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
export function GmTech() {
        return (
                <>
                        <Helmet>
                                <title>Parallax | GM Tech</title>
                        </Helmet>
                        <BannerInfo />
                        <Nav />
                        <div id="gmtech" data-aos="fade-up" data-aos-offset="16" data-aos-delay="50" data-aos-duration="40" data-aos-easing="linear" data-aos-mirror=" true " data-aos-once=" false " >
                                <li><a href="https://www.facebook.com/GMTechBR" target="_blank" rel="noreferrer">GM Tech</a></li>
                        </div>
                </>
        )
}