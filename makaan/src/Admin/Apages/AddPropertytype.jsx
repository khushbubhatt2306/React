import React, { useState } from "react";
import AHeader from "../Acoman/AHeader";

function AddPropertytype() {
  const [addpropertytype, setaddpropertytype] = useState({
    id: "",
    img: "",
    propertytype: "",
    totalproperties: "",
  });

  return (
    <div>
      <AHeader />
      <div className="container">
        <div className="wow fadeInUp" data-wow-delay="0.5s">
          <h1>Add Property Type Data</h1>
          <form>
            <div className="row g-3">
              <div className="col-md-6">
                <select
                  className="form-select border-0 py-3"
                  name="propertytype"
                >
                  <option hidden>Property Type</option>
                  <option value="Appartment">Appartment</option>
                  <option value="Villa">Villa</option>
                  <option value="Home">Home</option>
                  <option value="Office">Office</option>
                  <option value="Building">Building</option>
                  <option value="Townhouse">Townhouse</option>
                  <option value="Shop">Shop</option>
                  <option value="Garage">Garage</option>
                </select>
              </div>
              <div className="col-md-6">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="totalproperties"
                    placeholder="Total Properties"
                    name="totalproperties"
                  />
                  <label htmlFor="totalproperties">Total Properties</label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <input
                    type="url"
                    className="form-control"
                    id="propertyimg"
                    placeholder="Property Image"
                    name="img"
                  />
                  <label htmlFor="subject">Property Image</label>
                </div>
              </div>
              <div className="col-12">
                <button className="btn btn-primary w-100 py-3" type="submit">
                  Add Property Type
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddPropertytype;
