interface FeatureSectionGridLayoutType {
    id: string,
    backgroundImg: string,
    imgPosition: string,
    heading: string,
    text: TextType[],
    gridLayout?: GridLayout[]
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

export default FeatureSectionGridLayoutType;
