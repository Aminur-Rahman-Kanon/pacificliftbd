import { Hero } from "@/app/types/productPageSkeleton";
import { featuresGrid } from '@/app/data/productsAndServices/modernization-and-upgrades/improvedAesthetics';

export const hero: Hero = {
    heroTop: {
        img: '/images/toolsAndResources/elevatorProducts/hero.jpg',
        heading: 'products with parallel',
        link: {
            text: 'contact us',
            href: '#'
        }
    }
}

export const products = {
    heading: 'products',
    items: featuresGrid
}
