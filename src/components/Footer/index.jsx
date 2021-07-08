import './module.style.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
export function Footer() {
        return (
                <>
                        <div id="main-footer" data-aos="slide-up" data-aos-mirror="true" data-aos-easing="ease-in-out">
                                <div id="info">
                                        <h1>More informations</h1>
                                        <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt voluptatum magni
                                                reprehenderit
                                                consequuntur eveniet libero numquam atque itaque cupiditate, quia maxime, iste ratione
                                                consequatur officia impedit consectetur porro? Accusamus, adipisci.</span>
                                </div>
                                <div id="social" data-aos="fade">
                                        <ul>
                                                <li><a href="https://www.facebook.com/Guilhermehls/" rel="noreferrer" target="_blank"><i className="fab fa-facebook"></i></a></li>
                                                <li><a href="https://github.com/sirguilherme97" rel="noreferrer" target="_blank"><i className="fab fa-github"></i></a></li>
                                                <li><a href="https://www.youtube.com/channel/UCrhKC4TO2fF9p_fHZiYYlyA" rel="noreferrer" target="_blank"><i className="fab fa-youtube"></i></a></li>
                                                <li><a href="https://twitter.com/Sir_Guilherme_" rel="noreferrer" target="_blank"><i className="fab fa-twitter"></i></a></li>
                                        </ul>
                                </div>
                        </div>
                </>
        )
}