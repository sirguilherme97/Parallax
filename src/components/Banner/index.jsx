import './module.style.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

export function Banner() {
        return (
                <>
                        <div id="main_content">
                                <div id="content" >
                                        <h1>Lorem ipsum</h1>
                                        <strong>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</strong>
                                        <button type="button">Solicite um pedido</button>
                                </div>
                        </div>
                </>
        )
}