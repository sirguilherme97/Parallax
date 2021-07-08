import './module.style.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
export function Content(props) {
        return (
                <>
                        <div id="footer" >
                                <div id="content" data-aos="fade" data-aos-easing="ease-in-out" data-aos-duration="4000" data-aos-delay="3550 " >
                                        <h1>{props.title}</h1>
                                        <div id="aux" data-aos="fade">
                                                <strong>{props.subOne}</strong>
                                                <strong >{props.subTwo}</strong>
                                        </div>
                                </div>
                        </div>
                </>
        )
}