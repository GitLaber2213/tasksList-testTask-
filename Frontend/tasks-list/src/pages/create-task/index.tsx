import { CreateTask } from "@/features";
import { Layout, TitleContainer } from "../styles/page.styles";



export const CreateTaskPage = () => {
    return (
        <Layout>
            <TitleContainer>
                <h1>Add task</h1>
            </TitleContainer>
            <CreateTask />
        </Layout>
    );
};