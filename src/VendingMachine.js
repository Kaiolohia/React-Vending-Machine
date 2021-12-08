import React from "react";
import { Link } from "react-router-dom"

const VendingMachine = () => {
    return (
        <div>
            <h1>
                Vending Machine!
            </h1>

            <div className="links">
                <Link to="/chips">Chips</Link>  
                <Link to="/soda">Soda</Link>  
                <Link to="/water">Water</Link>  
            </div>
        </div>
    )
}

export default VendingMachine