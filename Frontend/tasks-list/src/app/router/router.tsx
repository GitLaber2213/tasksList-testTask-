import { CreateTaskPage, EditTaskPage, MainPage } from "@/pages";
import { ROUTES } from "@/shared";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: ROUTES.MAIN,
        element: <MainPage />,
    },
    {
        path: ROUTES.CREATE_TASK,
        element: <CreateTaskPage />,
    },
    {
        path: `${ROUTES.EDIT_TASK}:id`,
        element: <EditTaskPage />,
    }
]);