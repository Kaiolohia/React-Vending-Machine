import React from "react";
import { Link }  from "react-router-dom"

const Soda = () => {
    return (
        <div className="soda">
            <h1>Drink up!</h1>
            <h2>Coke-a-cola FO DAYS!</h2>
            <Link to="/">Go Back</Link>
        </div>
    )
}

export default Soda