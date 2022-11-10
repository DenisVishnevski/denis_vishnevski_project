import andreyRudenkoDesktop from '../assets/images/andreyRudenkoDesktop.png';
import andreyRudenkoMobile from '../assets/images/andreyRudenkoMobile.png';
import denisVishnevskiDesktop from '../assets/images/denisVishnevskiDesktop.png';
import denisVishnevskiMobile from '../assets/images/denisVishnevskiMobile.png';
import { layoutingBlocksArray, programmingBlocksArray } from './skills';


export const portfolioBlocks: object[] = [
    {
        title: 'Landing for a photographer',
        id: 'portfolio',
        technologies: [programmingBlocksArray[2], programmingBlocksArray[3]],
        websiteLink: 'http://denisvishnevski-001-site1.ftempurl.com/',
        githubLink: 'https://github.com/DenisVishnevski/AndreyRudenko',
        desktopImage: andreyRudenkoDesktop,
        mobileImage: andreyRudenkoMobile
    },
    {
        title: 'Personal portfolio website',
        technologies: [programmingBlocksArray[2], layoutingBlocksArray[2], {title: 'i18next', titleColor: '#12BFAF'}],
        websiteLink: '#1',
        githubLink: 'https://github.com/DenisVishnevski/denis_vishnevski_project',
        desktopImage: denisVishnevskiDesktop,
        mobileImage: denisVishnevskiMobile
    },
];