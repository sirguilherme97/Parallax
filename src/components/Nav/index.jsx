import './module.style.scss';
import { Button } from '../Button';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
export function Nav(props) {
        return (
                <div>
                        <div id="header_nav">
                                <i id="icon_header_nav" className="fas fa-door-open"></i>
                                <ul>
                                        <li><a href="/">Início</a></li>
                                        <li><a href="/about">Sobre nós</a></li>
                                        <li><a href="/services">Serviços</a></li>
                                        <li><a href="/blog">Blog</a></li>
                                        <li><a href="/contact">Contato</a></li>
                                </ul>
                                <Button type="button" data_aos={props.data_aos} data_aos_easing="ease-in-out" mirror="true" data_aos_delay="40" data_aos_duration="500" />
                        </div >
                </div>
        )
}