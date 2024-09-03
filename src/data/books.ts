import elSrAnillosImg from '../assets/images/la-comunidad-del-anillo.webp';
import elSrAnillos2Img from '../assets/images/las-dos-torres.webp';
import elSrAnillos3Img from '../assets/images/el-retorno-del-rey.webp';
import antifragilImg from '../assets/images/antifragil.webp';
import meditacionesImg from '../assets/images/meditaciones.webp';
// import elGuardianImg from '../assets/images/elguardiandeespadas.webp';
import srAnillosRv3 from '../content/reviews/sr-anillos-3.mdx';
import srAnillosRv2 from '../content/reviews/sr-anillos-2.mdx';
import srAnillosRv from '../content/reviews/sr-anillos.mdx';
import antifragilRv from '../content/reviews/antifragil.mdx';
import meditacionesRv from '../content/reviews/meditaciones.mdx';


export const books = [
  {
    id: 'el-sr-de-los-anillos-3',
    title: 'El Señor de los anillos (3/3)',
    img: elSrAnillos3Img,
    opinion: srAnillosRv3,
    author: 'J. R. R. Tolkien',
    date: '22 Ago, 2024',
  },
  {
    id: 'el-sr-de-los-anillos-2',
    title: 'El Señor de los anillos (2/3)',
    img: elSrAnillos2Img,
    opinion: srAnillosRv2,
    author: 'J. R. R. Tolkien',
    date: '22 Ago, 2024',
  },
  {
    id: 'el-sr-de-los-anillos-1',
    title: 'El Señor de los anillos (1/3)',
    img: elSrAnillosImg,
    opinion: srAnillosRv,
    author: 'J. R. R. Tolkien',
    date: '27 Jun, 2024',
  },
  {
    id: 'antifragil',
    title: 'Antifrágil',
    img: antifragilImg,
    opinion: antifragilRv,
    author: 'Nassim Taleb',
    date: '21 Jun, 2024',
  },
  {
    id: 'meditaciones',
    title: 'Meditaciones',
    img: meditacionesImg,
    opinion: meditacionesRv,
    author: 'Marco Aurelio',
    date: '27 Jun, 2024',
  },
]