import React, {useState} from 'react'
import TableComponent from "./TableComponent"; 
import "./TableSlider.css"

function TableSlider() {
    const[selection, setSelection]= useState("Content History")
   

    return (
        <div>
            <div className="StateOptions">
            <span className="spanSelector" onClick={()=>setSelection('Content History')}>Content History</span>
            <span className="spanSelector" onClick={()=>setSelection('Deployment History')}>Deployment History</span>
            </div>
            <hr/>
            {(selection==="Content History"? <TableComponent />: <TableComponent/>)}
            


        </div>
    )
}

export default TableSlider
