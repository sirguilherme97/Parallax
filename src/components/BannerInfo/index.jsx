import './module.style.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();
export function BannerInfo() {
        return (
                <>
                        <div id="header" data-aos="slide-down" data-aos-offset="16" data-aos-delay="50" data-aos-duration="40" data-aos-easing="linear" data-aos-mirror=" true " data-aos-once=" false " >
                                <div id="contato">
                                        <div id="contato_phone">
                                                <i className="fas fa-phone"></i>
                                                <h3 data-aos="fade-down">+55(51)98993-9977</h3>
                                        </div>
                                        <div id="contato_email">
                                                <i className="fas fa-envelope"></i>
                                                <h3 data-aos="fade-down">sir_guilherme@hotmail.com</h3>
                                        </div>
                                </div>
                                <div id="social">
                                        <div id="social_network">
                                                <a href="https://www.facebook.com/Guilhermehls/" rel="noreferrer" target="_blank"><i className="fab fa-facebook-f"></i></a>
                                                <a href="https://github.com/sirguilherme97" rel="noreferrer" target="_blank"><i className="fab fa-github"></i></a>
                                                <a href="https://play.google.com/store/apps/details?id=com.partitura" rel="noreferrer" target="_blank"><i class="fab fa-google-play"></i></a>
                                                <a href="https://www.linkedin.com/in/sirguilherme97/" rel="noreferrer" target="_blank"><i className="fab fa-linkedin"></i></a>
                                        </div>
                                </div>
                        </div>
                </>
        )
}
