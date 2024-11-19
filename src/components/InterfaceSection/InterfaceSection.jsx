import { SwiperSlide } from 'swiper/react';
import { Slider } from '../Slider/Slider';
import styles from './InterfaceSection.module.css';
import { Card } from '../Card/Card';
import 'swiper/css/navigation';  // Estilo de navegação
import 'swiper/css/pagination';  // Estilo de paginação
import 'swiper/css';  // Estilo padrão do Swiper

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
                spaceBetween: 10,  // Ajuste o espaço entre os slides, se necessário
            },
            768: {  // Largura mínima de 768px (típico para tablets)
                slidesPerView: 3,  // 2 slides visíveis
                spaceBetween: 20,  // Ajuste o espaço entre os slides, se necessário
            },
            1024: {  // Largura mínima de 1024px (típico para desktops)
                slidesPerView: 3,  // 3 slides visíveis
                spaceBetween: 30,  // Ajuste o espaço entre os slides, se necessário
            }
        }
    };

    return (
        <div className={styles.interface} id='interface'>
            <p><span>{'//'}</span> Conheça nossa interface</p>
            <span className={styles.phrase}>ENERGY <br />POWER</span>
            <div className={styles.swiperWrapper}>
                <Slider settings={settings}>
                    <SwiperSlide>
                        <Card />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card />
                    </SwiperSlide>
                </Slider>
            </div>
        </div>
    );
}
