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
                        <div id="gmtech" >
                                <li><a href="https://www.facebook.com/GMTechBR" target="_blank" rel="noreferrer">GM Tech</a></li>
                        </div>
                </>
        )
}