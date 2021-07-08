import './module.style.scss'
import { useHistory } from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

export function Banner() {
        const history = useHistory();
        function handleLink() {
                history.push('/gmtech');
        }
        return (
                <>
                        <div id="main_content" data-aos="fade-up" data-aos-offset="16" data-aos-delay="50" data-aos-duration="40" data-aos-easing="linear" data-aos-mirror=" true " data-aos-once=" false " >
                                <div id="content" >
                                        <h1>Lorem ipsum</h1>
                                        <strong>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</strong>
                                        <button type="button" onClick={() => { handleLink() }}>Solicite um pedido</button>
                                </div>
                        </div>
                </>
        )
}