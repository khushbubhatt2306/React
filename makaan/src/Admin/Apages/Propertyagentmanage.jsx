import React, { useEffect, useState } from "react";
import AHeader from "../Acoman/AHeader";
import {
  MDBBadge,
  MDBBtn,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";
import axios from "axios";

function Propertyagentmanage() {
  const [propertyagent, setpropertyagent] = useState([]);

  useEffect(() => {
    getdataagent();
  }, []);

  const getdataagent = async () => {
    const res = await axios.get("http://localhost:3000/propertyagent");
    console.log(res.data);
    setpropertyagent(res.data);
  };

  return (
    <div>
      <AHeader />
      <div className="container">
        <h1 className="text-center">Welcome to the Proerty Type Management</h1>
        <MDBTable align="middle">
          <MDBTableHead>
            <tr>
              <th scope="col">Image</th>
              <th scope="col">Name</th>
              <th scope="col">Designation</th>
              <th scope="col">Actions</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {propertyagent &&
              propertyagent.map((property_agent, index) => {
                const { img, name, designation } = property_agent;
                return (
                  <tr key={index}>
                    <td>
                      <img
                        src={img}
                        alt=""
                        style={{ width: "45px", height: "45px" }}
                        className="rounded-circle"
                      />
                    </td>
                    <td>{name}</td>

                    <td>{designation}</td>
                    <td>
                      <button
                        className="btn btn-primary"
                        data-bs-toggle="modal"
                        href="#exampleModalToggle"
                        onClick={() => getview(id)}
                      >
                        View
                      </button>
                      <button className="btn btn-success mx-2">Edit</button>
                      <button className="btn btn-danger">Delete</button>
                    </td>
                  </tr>
                );
              })}
          </MDBTableBody>
        </MDBTable>
      </div>
    </div>
  );
}

export default Propertyagentmanage;
