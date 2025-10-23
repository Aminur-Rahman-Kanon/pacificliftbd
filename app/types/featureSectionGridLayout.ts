interface FeatureSectionGridLayoutType {
    id: string,
    backgroundImg: string,
    imgPosition: 'left' | 'right',
    heading: string,
    text: TextType[],
    gridLayout?: GridLayout[],
    link?: Link
}

type TextType = {
    id: string,
    text: string,
}

type GridLayout = {
    id: string,
    img: string,
    text: string
}

type Link = {
    text: string,
    href: string
}

export default FeatureSectionGridLayoutType;
