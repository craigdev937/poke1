import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const List = React.lazy(() => import("../components/List"));
const Details = React.lazy(() => import("../components/Details"))

export const Main = (): JSX.Element => (
    <BrowserRouter>
        <React.Suspense fallback={<h1>Loading...</h1>}>
            <Routes>
                <Route path="/" element={<List />} />
                <Route path="/details/:name" element={<Details />} />
            </Routes>
        </React.Suspense>
    </BrowserRouter>
);



