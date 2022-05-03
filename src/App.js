import React from "react";

import { Navbar, Main} from "./components/comp";

export default function App(){
    return(
        <div className="container">
            <Navbar/>
            <Main/>
        </div>
    );
}