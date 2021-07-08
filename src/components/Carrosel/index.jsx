import './module.style.scss'
import f1 from '../../assets/f1.jpeg'
import f2 from '../../assets/f2.jpeg'
import f3 from '../../assets/3.jpg'
import f4 from '../../assets/4.jpg'
import f5 from '../../assets/5.jpg'
import f6 from '../../assets/6.jpg'
import f7 from '../../assets/7.jpg'

export function Carrossel() {
        return (
                <>
                        <div id="items-wrapper">
                                <div id="items">
                                        <div class="item"><img src={f1} /></div>
                                        <div class="item"><img src={f2} /></div>
                                        <div class="item"><img src={f3} /></div>
                                        <div class="item"><img
                                                src="https://img.wallpapic-br.com/i2450-843-127/thumb/formula-1-carro-de-corrida-estrada-automobilismo-imagem-de-fundo.jpg" />
                                        </div>
                                        <div class="item"><img
                                                src="https://img.wallpapic-br.com/i5032-741-125/thumb/rali-carro-de-corrida-corridas-carros-automobilismo-imagem-de-fundo.jpg" />
                                        </div>
                                        <div class="item"><img src={f4} /></div>
                                        <div class="item"><img src={f5} /></div>
                                </div>
                        </div>
                </>
        )
}