import { ScrollContainer } from "./scroll.styles"

type Props = {
    children: React.ReactNode
}


export const Scroll: React.FC<Props> = ({children}) => {
    return <ScrollContainer>{children}</ScrollContainer>
}