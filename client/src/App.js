import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Chat from "./pages/Chat"

export default function App(){
    return (<Chat />

//         <Router>
//             <div>
//                 {/* NAVBAR */}
//                 <Switch>
//                     <Route>
//                         {/* HOME PAGE */}
//                     </Route>
//                     <Route>
//                         {/* CHAT PAGE */}
//                     </Route>
//                     <Route>
//                         {/* 404 ERROR PAGE */}
//                     </Route>
//                 </Switch>
//                 {/* FOOTER */}
//             </div>
//         </Router>
    )
}