import React, { useState } from "react";

function Nosotros({mode, fun, arr}) {
    const [name] = useState("nosotros");

    function Class() {
        return (
            <div className="styledBox">
                <h1>Nosotros</h1>
                <div className="navbar">
                    <button 
                    className="btn" 
                    onClick={ () => {fun([...arr, "emp_1"])} }
                    >Empleado 1
                    </button>
                    <button 
                    className="btn" 
                    onClick={ () => {fun([...arr, "emp_2"])} }
                    >Empleado 2
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

export default Nosotros;