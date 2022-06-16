import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./Home";
import Activiteiten from "./activiteiten";

export default function RouterPage(){
    return (
    <div>
        <Router>
            <Routes>
                <Route path="/" exact component={Home} />
                <Route path ="/activiteiten" component={Activiteiten} />
            </Routes>
        </Router> 
    </div>
    )
}  