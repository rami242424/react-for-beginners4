// Link는 라우터 안에 있어야 한다. 따라서 App.js에서 Navigation도 Route 안에 있어야한다.

import React from "react";
import { Link } from "react-router-dom";

function Navigation(){
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to={{
                pathname:"/about",
                state: {
                    fromNavigation: true,
                }
            }}>About</Link>
        </div>
    );
}

export default Navigation; 