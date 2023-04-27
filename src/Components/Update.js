import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const Update = () => {
  const [id, setId] = useState(0);
  const [Warehouse_Name, setWarehouse_Name] = useState("");
  const [Warehouse_Location,setWarehouse_Location] =useState("");

////////////////////////////////
  const navigate = useNavigate();
  useEffect(() => {
    setId(localStorage.getItem("id"));
    setWarehouse_Name(localStorage.getItem("Warehouse_Name"));
    setWarehouse_Location(localStorage.getItem("Warehouse_Location"));            

  }, []);


  const handleUpdate = (e) => {
    e.preventDefault();
    console.log("Id...", id);
    axios
      .put(`https://643f7cdd3dee5b763e1dc55e.mockapi.io/crud/${id}`, {
        Warehouse_Name: Warehouse_Name,
        Warehouse_Location : Warehouse_Location,
 

      })
      .then(() => {
        navigate("/read");
      });
  };

  return (
    <>
      <h2>Update Warehouse</h2>
      <form>
        <br/>
        <br/>
        <div className="mb-3">
          <label className="form-label">Warehouse_Name</label>
          <br/>
          <input
            type="text"
            className="form-control"
            value={Warehouse_Name}
            onChange={(e) => setWarehouse_Name(e.target.value)}
          />
        </div>
     
        <br/>
        <div className="mb-3">
          <label className="form-label">Warehouse_Location</label>
          <br/>
          <input
            type="text"
            className="form-control"
            value={Warehouse_Location}
            onChange={(e) => setWarehouse_Location(e.target.value)}
          />
        </div>
  
        <br/>
        <br/>
        
        <button
          type="submit"
          className="btn btn-primary mx-2"
          onClick={handleUpdate}
        >
          Update
        </button>
        <br/>
        <br/>
        <Link to="/read">
          <button className="btn btn-secondary mx-2"> Back </button>
        </Link>
      </form>
    </>
  );
};
export default Update;