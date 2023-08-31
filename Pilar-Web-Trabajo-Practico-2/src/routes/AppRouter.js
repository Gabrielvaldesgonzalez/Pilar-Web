import {BrowserRouter, Route, Routes} from "react-router-dom";
import {FetchList} from "../pages/FetchList";
import {Todo} from "../pages/Todo";
import {Dashboard} from "../pages/Dashboard";

export const AppRouter = () => {
    return (

        <BrowserRouter>
            <Routes>
                <Route path="/"   element={<Dashboard/>} />
                <Route path="/todo" element={<Todo/>} />
                <Route path="/fetch-list" element={<FetchList/>} />
            </Routes>
        </BrowserRouter>
    );
};