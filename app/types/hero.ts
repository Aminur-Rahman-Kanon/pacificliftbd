interface HeroType {
    id: string,
    header: string,
    backgroundImage: string,
    textContainer: Text[],
    link?: {
        text: string,
        href: string
    }
}

type Text = {
    id: string,
    text: string
}

export default HeroType;
