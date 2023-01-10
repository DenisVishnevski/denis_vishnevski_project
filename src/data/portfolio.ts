import andreyRudenkoDesktop from '../assets/images/andreyRudenkoDesktop.png';
import andreyRudenkoMobile from '../assets/images/andreyRudenkoMobile.png';
import denisVishnevskiDesktop from '../assets/images/denisVishnevskiDesktop.png';
import denisVishnevskiMobile from '../assets/images/denisVishnevskiMobile.png';
import todoListDesktop from '../assets/images/todoListDesktop.png';
import todoListMobile from '../assets/images/todoListMobile.png';
import { layoutingBlocksArray, programmingBlocksArray } from './skills';


export const portfolioBlocks: object[] = [
    {
        title: 'ToDo list',
        id: 'portfolio',
        technologies: [programmingBlocksArray[2], {title: 'Less', titleColor: '#2965F1'}],
        websiteLink: 'https://todo-list-lake-seven.vercel.app/',
        githubLink: 'https://github.com/DenisVishnevski/todo-list',
        desktopImage: todoListDesktop,
        mobileImage: todoListMobile
    },
    {
        title: 'Landing for a photographer',
        id: 'portfolio',
        technologies: [programmingBlocksArray[2], programmingBlocksArray[3]],
        websiteLink: 'http://andreyrudenko-001-site1.ctempurl.com/',
        githubLink: 'https://github.com/DenisVishnevski/AndreyRudenko',
        desktopImage: andreyRudenkoDesktop,
        mobileImage: andreyRudenkoMobile
    },
    {
        title: 'Personal portfolio website',
        id: 'portfolio',
        technologies: [programmingBlocksArray[2], layoutingBlocksArray[2], {title: 'i18next', titleColor: '#12BFAF'}],
        websiteLink: '#1',
        githubLink: 'https://github.com/DenisVishnevski/denis_vishnevski_project',
        desktopImage: denisVishnevskiDesktop,
        mobileImage: denisVishnevskiMobile
    },
];