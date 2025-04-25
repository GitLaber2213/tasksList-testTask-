import { ErrorVariations } from "./error-variations";
import { DefaultErrorContainer, InputError } from "./error.styles";

type Props = {
    type: ErrorVariations;
    children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const getErrorType = (type: ErrorVariations) => ({
    [ErrorVariations.DEFAULT]: DefaultErrorContainer,
    [ErrorVariations.INPUT]: InputError
}[type]);

export const Error: React.FC<Props> = ({ type, children, ...HTMLAttributes }) => {
    const StyledError = getErrorType(type);

    return <StyledError {...HTMLAttributes}>{children}</StyledError>;
};