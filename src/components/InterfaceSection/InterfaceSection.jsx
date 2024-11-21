import { SwiperSlide } from 'swiper/react';
import { Slider } from '../Slider/Slider';
import styles from './InterfaceSection.module.css';
import { Card } from '../Card/Card';
import 'swiper/css/navigation';  // Estilo de navegação
import 'swiper/css/pagination';  // Estilo de paginação
import 'swiper/css';  // Estilo padrão do Swiper
import Swiper from 'swiper';

import assisImg from '../../assets/img/ASSISTENTE.png';
import dashImg from '../../assets/img/DASHBOARD.png';
import memImg from '../../assets/img/MEMBROS.png';
import relImg from '../../assets/img/RELATORIOS.png';
import camImg from '../../assets/img/CAMERAS.png';



export function InterfaceSection() {

    const settings = {
        spaceBetween: 5,  // Espaço entre os slides
        slidesPerView: 3,  // Quantos slides são visíveis na tela
        loop: true,  // Habilitar o loop infinito
        pagination: {
            clickable: true,  // Torna a paginação clicável
        },
        breakpoints: {
            320: {  // Largura mínima de 320px (típico para dispositivos móveis)
                slidesPerView: 1,  // Apenas 1 slide visível
                spaceBetween: 20,  // Ajuste o espaço entre os slides, se necessário
            },
            768: {  // Largura mínima de 768px (típico para tablets)
                slidesPerView: 3,  // 2 slides visíveis
                spaceBetween: 30,  // Ajuste o espaço entre os slides, se necessário
            },
            1024: {  // Largura mínima de 1024px (típico para desktops)
                slidesPerView: 3,  // 3 slides visíveis
                spaceBetween: 40,  // Ajuste o espaço entre os slides, se necessário
            }
        }
    };

    const images = [
        dashImg, relImg, assisImg, , memImg, camImg 
    ]

    return (
        <div className={styles.interface} id='interface'>
            <p><span>{'//'}</span> Conheça nossa interface</p>
            <span className={styles.phrase}>ENERGY <br />POWER</span>
            <div className={styles.swiperWrapper}>

                <Slider settings={settings}>
                    {images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <Card interfaceImg={image}></Card>
                        </SwiperSlide>
                    ))}
                </Slider>

            </div>
        </div>
    );
}
