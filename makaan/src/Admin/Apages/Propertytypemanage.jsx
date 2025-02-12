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

function Propertytypemanage() {
  const [propertytype, setpropertytype] = useState([]);

  useEffect(() => {
    getdatatype();
  }, []);

  const getdatatype = async () => {
    const res = await axios.get("http://localhost:3000/propertytype");
    console.log(res.data);
    setpropertytype(res.data);
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
              <th scope="col">PropertyType</th>
              <th scope="col">TotalProperties</th>
              <th scope="col">Actions</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {propertytype &&
              propertytype.map((property_type, index) => {
                const { img, propertytype, totalproperties } = property_type;
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
                    <td>{propertytype}</td>

                    <td>{totalproperties} Properties</td>
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

export default Propertytypemanage;
