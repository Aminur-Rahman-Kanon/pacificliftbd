export interface ProductsPageSkeletonType {
    [key:string]: ProductPageSkeletonType
}

interface ProductPageSkeletonType {
    'hero': Hero,
    'products': Products,
    'text-container': TextContainer,
    'navigations': Navigation[]
}

export type Hero = {
    heroTop: HeroTop,
    heroBottom?: TextContainer
}

type HeroTop = {
    img: string,
    heading: string,
    text?: string,
    link?: {
        text: string,
        href: string
    }
}

type TextContainer = {
    id: string,
    heading: string,
    text: string[],
    link?: Link,
}

type Products = {
    heading: string,
    products: Product[],
}

type Product = {
    id: string,
    img: string,
    heading: string,
    link: Link
}

export type Navigation = {
    id: string,
    img: string,
    link: Link
}

type Link = {
    text: string,
    href: string
}

