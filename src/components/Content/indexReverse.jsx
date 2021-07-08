import './module.style.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
export function ContentReverse(props) {
        return (
                <>
                        <div id="footer" >
                                <div id="content2" data-aos="fade" data-aos-easing="ease-in-out" data-aos-duration="4000" data-aos-delay="3550 " >
                                        <div id="aux" data-aos="fade">
                                                <strong id="title">{props.title}</strong>
                                                <strong id="sub">{props.subOne}</strong>
                                        </div>
                                </div>
                        </div>
                </>
        )
}