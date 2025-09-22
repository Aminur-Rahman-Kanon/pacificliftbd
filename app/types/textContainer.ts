interface TextContainerType {
    id: string,
    heading: string,
    text: string[],
    link?: {
        text: string,
        href: string
    }
}

export default TextContainerType;
