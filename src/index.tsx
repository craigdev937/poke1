import React from "react";
import ReactDom from "react-dom";

import(/* webpackChunkName: "app" */ "./app/App")
.then(({ App }) => {
    ReactDom.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>, 
    document.getElementById("root"))
});




