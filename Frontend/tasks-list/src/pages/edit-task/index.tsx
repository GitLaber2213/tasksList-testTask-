import { EditTask } from "@/features";
import { Layout, TitleContainer } from "../styles/page.styles";



export const EditTaskPage = () => {
    return (
        <Layout>
            <TitleContainer>
                <h1>Edit task</h1>
            </TitleContainer>
            <EditTask />
        </Layout>
    );
};