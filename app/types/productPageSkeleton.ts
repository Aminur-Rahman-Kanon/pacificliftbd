export interface ProductsPageSkeletonType {
    [key:string]: ProductPageSkeletonType
}

interface ProductPageSkeletonType {
    'hero': Hero,
    'products': Products,
    'text-container-2': TextContainer,
    'navigations': Navigation[]
}

export type Hero = {
    heroTop: HeroTop,
    heroBottom: TextContainer
}

type HeroTop = {
    img: string,
    heading: string
}

type TextContainer = {
    heading: string,
    text: string[],
    link: Link,
}

type Products = {
    heading: string,
    products: Product[],
}

type Product = {
    id: number,
    img: string,
    heading: string,
    link: Link
}

type Navigation = {
    id: number,
    img: string,
    heading: string
}

type Link = {
    text: string,
    href: string
}

type Text = {
    id: number,
    text: string
}
