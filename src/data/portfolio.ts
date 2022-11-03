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
        websiteLink: 'https://andreyrudenko20221008152249.azurewebsites.net/',
        desktopImage: andreyRudenkoDesktop,
        mobileImage: andreyRudenkoMobile
    },
    {
        title: 'Personal portfolio website',
        technologies: [programmingBlocksArray[2], layoutingBlocksArray[2], {title: 'i18next', titleColor: '#12BFAF'}],
        websiteLink: '#1',
        desktopImage: denisVishnevskiDesktop,
        mobileImage: denisVishnevskiMobile
    },
];