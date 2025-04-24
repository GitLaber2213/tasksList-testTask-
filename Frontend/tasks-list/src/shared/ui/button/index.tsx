import { ButtonVariations } from "./button-variations";
import { BasicButton } from "./button.styles";

type Props = {
    type_: ButtonVariations;
    children: React.ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const getButtonType = (type: ButtonVariations) => ({
    [ButtonVariations.BASIC]: BasicButton,
}[type])


export const Button: React.FC<Props> = ({ type_, children, ...ButtonHTMLAttributes }) => {
    const ButtonType = getButtonType(type_);
    return <ButtonType {...ButtonHTMLAttributes}>{children}</ButtonType>
}