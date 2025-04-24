import { LoaderVariations } from "./loader-variations";
import { LoaderContainer, SmallLoader, DefaultLoader } from "./loader.styles";

type Props = {
    type: LoaderVariations;
}

const getLoaderType = (type: LoaderVariations) => ({
    [LoaderVariations.DEFAULT]: <DefaultLoader />,
    [LoaderVariations.SMALL]: <SmallLoader />
}[type]);


export const Loader: React.FC<Props> = ({ type }) => {
    const StyledLoader = getLoaderType(type);

    return (
        <LoaderContainer>
            {StyledLoader}
        </LoaderContainer>
    );
}