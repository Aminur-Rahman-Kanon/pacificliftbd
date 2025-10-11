interface CustomCarouselType {
    id: string,
    heading?: string,
    carousel: CarouselType[],
    link?: {
        text: string,
        href: string
    }
}


type CarouselType = {
    id: string,
    img: string,
    heading?: string,
    text?: string,
    link?: {
        text: string,
        href: string
    }
}


export default CustomCarouselType;
