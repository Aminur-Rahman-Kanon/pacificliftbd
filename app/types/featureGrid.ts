interface FeatureGridType {
    id: string,
    img: string,
    heading: string,
    text?: string[],
    link?: {
        text: string,
        href: string
    }
}

export default FeatureGridType;
