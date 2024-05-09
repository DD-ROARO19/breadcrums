import React, { useState } from "react";

function Home({mode, fun, arr}) {
    const [name] = useState("pagina principal");

    function Class() {
        return (
            <div className="styledBox">
                <h1>Pagina Principal</h1>
                <div className="navbar">
                    <button 
                    className="btn" 
                    onClick={ () => {fun([...arr, "nosotros"])} }
                    >Nosotros
                    </button>
                </div>
            </div>
        )
    }
    
    switch (mode) {
        case 0:
            return Class();
            // break;
        case 1:
            return name;
            // break;
    
        default:
            return Class();
            // break;
    }
}

export default Home;