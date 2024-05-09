import React, { useState } from "react";

function Empleados({mode, id}) {

    const EmpData = {
        emp_1 : {
            id : "emp_1",
            name : "Empleado 1",
            description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet justo donec enim diam vulputate. Quis hendrerit dolor magna eget est lorem ipsum."
        },
        emp_2 : {
            id : "emp_2",
            name : "Empleado 2",
            description : "Diam phasellus vestibulum lorem sed risus ultricies tristique. Habitasse platea dictumst vestibulum rhoncus. Integer malesuada nunc vel risus commodo. Proin sed libero enim sed faucibus. Bibendum at varius vel pharetra."
        },
    }

    const [info] = useState(EmpData);

    function getId(emp_id) {
        return info[emp_id].id;
    }
    function getName(emp_id) {
        return info[emp_id].name;
    }
    function getDesc(emp_id) {
        return info[emp_id].description;
    }
    function getList() {
        return ["emp_1","emp_2"];
    }

    function Class() {
        return (
            <div className="styledBox">
                <h1>{getName(id)}</h1>
                <div className="empInfo">
                    <p>{getDesc(id)}</p>
                </div>
            </div>
        )
    }

    switch (mode) {
        case 0:
            return Class();
            // break;
        case 1:
            return getId(id);
            // break;
        case 2:
            return getList();
            // break;
    
        default:
            return Class();
            // break;
    }
}

export default Empleados;