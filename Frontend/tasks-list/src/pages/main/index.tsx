import { TasksList } from "@/features";
import { Layout, TitleContainer } from "../styles/page.styles";



export const MainPage = () => {
    return (
        <Layout>
            <TitleContainer>
                <h1>Tasks List</h1>
            </TitleContainer>
            <TasksList />
        </Layout>
    );
};