import './module.style.scss'

export function Button(props) {
        return (
                <>
                        <button type={props.type}
                                data-aos={props.data_aos}
                                data-aos-easing={props.data_aos_easing}
                                data-aos-mirror={props.mirror}
                                data-aos-delay={props.data_aos_delay}
                                data-aos-duration={props.data_aos_duration}
                        >Cadastre-se</button>
                </>
        )
}