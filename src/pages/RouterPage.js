import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./home";
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