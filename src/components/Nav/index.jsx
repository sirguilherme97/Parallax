import './module.style.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
export function Nav() {

        return (
                <>
                        <div id="header_nav">
                                <i id="icon_header_nav" className="fas fa-door-open"></i>
                                <ul>
                                        <li><a href="/">Home</a></li>
                                        <li><a href="/about">About Us</a></li>
                                        <li><a href="/services">Services</a></li>
                                        <li><a href="/blog">Blog</a></li>
                                        <li><a href="/contact">Contact Us</a></li>
                                </ul>
                                <button
                                        type="button"
                                        data-aos="fade-left"
                                        data-aos-easing="ease-out-sine"
                                        data-aos-mirror="true"
                                        data-aos-delay="50"
                                        data-aos-duration="450"
                                >Get a Quote</button>
                        </div >
                </>
        )
}