import './module.style.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
export function Content() {
        return (
                <>
                        <div id="footer" >
                                <div id="content" data-aos="fade" data-aos-easing="ease-in-out" data-aos-duration="4000" data-aos-delay="3550 " >
                                        <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt fugiat blanditiis
                                                voluptatem sunt magni atque, aspernatur repellat excepturi reiciendis odio veritatis
                                                soluta alias quisquam est, sapiente ab, rem consequatur iste.</h1>
                                        <div id="aux" data-aos="fade">
                                                <strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus fugit
                                                        placeat velit
                                                        cumque voluptatum officiis sit maiores eos? Eum, asperiores quidem. Sequi,
                                                        deserunt!
                                                        Nulla sapiente, quidem provident dolor quae odit.</strong>
                                                <strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus fugit
                                                        placeat velit
                                                        cumque voluptatum officiis sit maiores eos? Eum, asperiores quidem. Sequi,
                                                        deserunt!
                                                        Nulla sapiente, quidem provident dolor quae odit.</strong>
                                        </div>
                                </div>
                        </div>
                </>
        )
}