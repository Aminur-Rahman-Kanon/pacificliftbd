import { Hero, Navigation } from "./productPageSkeleton";

export interface IndustryPageType {
    [key:string]: IndustryPageSkeletonType
}

interface IndustryPageSkeletonType {
    id: string,
    'hero': Hero,
    'text-container-1': TextContainer,
    'text-container-2': TextContainer,
    'products': ProductType[],
    'navigation': Navigation[]
}

type TextContainer = {
    id: string,
    heading: string,
    text: string[]
}

export type ProductType = {
    id: string,
    img: string,
    heading: string,
    link: {
        text: string,
        href: string
    }
}

