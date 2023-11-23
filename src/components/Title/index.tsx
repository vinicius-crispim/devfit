import { TitleStyled } from "./style";
interface TitleProps {
    children: React.ReactNode
}


const Title: React.FC<TitleProps> = ({ children }) => {
    return <TitleStyled>{children}</TitleStyled>
}

export default Title;