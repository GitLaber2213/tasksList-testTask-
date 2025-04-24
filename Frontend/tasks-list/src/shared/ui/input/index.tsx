import { InputVariations } from "./input-variations"
import { BasicInput, CheckBoxInput } from "./input.styles"

type Props = {
    type_: InputVariations
} & React.InputHTMLAttributes<HTMLInputElement>

const getInputType = (type: InputVariations) => ({
    [InputVariations.BASIC]: BasicInput,
    [InputVariations.CHECK_BOX]: CheckBoxInput,
}[type])


export const Input: React.FC<Props> = ({type_, ...InputHTMLAttributes}) => {
    const StyledInput = getInputType(type_);
    
    return <StyledInput {...InputHTMLAttributes}/>
}