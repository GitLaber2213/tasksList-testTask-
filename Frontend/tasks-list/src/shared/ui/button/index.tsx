import { ButtonVariations } from "./button-variations";
import { BasicButton } from "./button.styles";
import { HoverColorVariations } from "./hover-color-variations";

type Props = {
    type_: ButtonVariations;
    children: React.ReactNode;
    hoverColor?: HoverColorVariations;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const getButtonType = (type: ButtonVariations) => ({
    [ButtonVariations.BASIC]: BasicButton,
}[type]);


export const Button: React.FC<Props> = ({ type_, children, hoverColor, ...ButtonHTMLAttributes }) => {
    const ButtonType = getButtonType(type_);
    return <ButtonType $hoverColor={hoverColor} {...ButtonHTMLAttributes}>{children}</ButtonType>
};