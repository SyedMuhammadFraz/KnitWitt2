import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";



function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

     return (
       <div className="dropdown">
         <button onClick={toggleMenu} className="dropdown-toggle">
           Select an option
         </button>
         {isOpen && (
           <ul className="dropdown-menu">
             <li>Option 1</li>
             <li>Option 2</li>
             <li>Option 3</li>
           </ul>
         )}
       </div>
     );
   }
  

const Create = () => {
  const [Warehouse_Location, setWarehouse_Location] = useState("");
  const [ Warehouse_Name, setWarehouse_Name] = useState("");


  const history = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clciekd");
    axios
      .post("https://643f7cdd3dee5b763e1dc55e.mockapi.io/crud", {
        Warehouse_Location: Warehouse_Location,
        Warehouse_Name :  Warehouse_Name,


      })
      .then(() => {
        history("/read");
      });
  };
  return (
    <>
      <div className="d-flex justify-content-between m-2">
        <h2>Create Warehouse</h2>
        <br/>
        <br/>
        <Link to="/read">
          <button className="btn btn-primary">Show Warehouse Data</button>
        </Link>
      </div>
      <br/>
      <br/>

      <form>
        <div className="mb-3">
          <label className="form-label">Warehouse_Location</label>
          <br/>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setWarehouse_Location(e.target.value)}
          />
          <br/>
        </div>

        <div className="mb-3">
          <label className="form-label"> Warehouse_Name</label>
          <br/>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setWarehouse_Name(e.target.value)}
          />
          <br/>
        </div>
        <div className="mb-3">
          <label className="form-label">Reorder_Point</label>
          <br/>
          {/* <input
            type="text"
            className="form-control"
            onChange={(e) => setReorder_Point(e.target.value)}
          /> */}
          <br/>
        </div>

      

        <br/>
        <br/>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </>
  );
};
export default Create;
