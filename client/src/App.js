import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";


export default function App(){
    return (
        <Router>
            <div>
                {/* NAVBAR */}
                <Switch>
                    <Route>
                        {/* HOME PAGE */}
                    </Route>
                    <Route>
                        {/* CHAT PAGE */}
                    </Route>
                    <Route>
                        {/* 404 ERROR PAGE */}
                    </Route>
                </Switch>
                {/* FOOTER */}
            </div>
        </Router>
    )
}