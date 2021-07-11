import '../style/global.scss'
import { Helmet } from 'react-helmet'
import { BannerInfo } from '../components/BannerInfo'
import { Nav } from '../components/Nav'
import AOS from 'aos';
import GoogleMap from '../components/GoogleMap';
import 'aos/dist/aos.css';
AOS.init();
export function Map() {
        return (
                <>
                        <Helmet>
                                <title>Parallax | Map</title>
                        </Helmet>
                        <BannerInfo />
                        <Nav />
                        <GoogleMap />
                </>
        )
}
