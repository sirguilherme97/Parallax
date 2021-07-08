import './module.style.scss'
import { useHistory } from 'react-router-dom';

export function Button(props) {
        const history = useHistory()
        function handleCadastrar() {
                history.push('/gmtech');
        }
        return (
                <>
                        <button type={props.type}
                                onClick={() => { handleCadastrar() }}
                                data-aos={props.data_aos}
                                data-aos-easing={props.data_aos_easing}
                                data-aos-mirror={props.mirror}
                                data-aos-delay={props.data_aos_delay}
                                data-aos-duration={props.data_aos_duration}
                        >Cadastre-se</button>
                </>
        )
}