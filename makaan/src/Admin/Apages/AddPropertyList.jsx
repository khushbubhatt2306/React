import React, { useState } from "react";
import AHeader from "../Acoman/AHeader";
import axios from "axios";
import { useNavigate } from "react-router";

function AddPropertyList() {
  const redirect = useNavigate();

  const [property, setproperty] = useState({
    id: "",
    hometype: "",
    propertytype: "",
    img: "",
    price: "",
    name: "",
    location: "",
    room: "",
    bath: "",
    yard: "",
  });

  const getchanage = (e) => {
    setproperty({
      ...property,
      id: new Date().getTime().toString(),
      [e.target.name]: e.target.value,
    });
    console.log(property);
  };

  const handlesubmit = async (e) => {
    // page will not refresh
    e.preventDefault();

    if (property.propertytype == "") {
      console.log("pls filed frist");
      return false;
    }
    try {
      const res = await axios.post(
        "http://localhost:3000/propertylist",
        property
      );
      console.log(res.data);
      redirect("/propertymanage");
      setproperty({
        id: "",
        hometype: "",
        propertytype: "",
        img: "",
        price: "",
        name: "",
        location: "",
        room: "",
        bath: "",
        yard: "",
      });
    } catch (error) {
      console.log("Api Not found", error);
    }
  };
  return (
    <div>
      <AHeader />
      <div className="container">
        <div className="wow fadeInUp" data-wow-delay="0.5s">
          <h1>Add Property data</h1>
          <form onSubmit={handlesubmit}>
            <div className="row g-3">
              <div className="col-md-6">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="propertyname"
                    placeholder="Property Name"
                    onChange={getchanage}
                    name="name"
                    value={property.name}
                  />
                  <label htmlFor="propertyname">Property Name</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="propertytype"
                    placeholder="Property Type"
                    onChange={getchanage}
                    name="propertytype"
                    value={property.propertytype}
                  />
                  <label htmlFor="propertytype">Property Type</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="propertyprice"
                    placeholder="Property Price"
                    onChange={getchanage}
                    name="price"
                    value={property.price}
                  />
                  <label htmlFor="propertyprice">Property Price</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="propertyyard"
                    placeholder="Property Yard"
                    onChange={getchanage}
                    name="yard"
                    value={property.yard}
                  />
                  <label htmlFor="propertyyard">Property Yard</label>
                </div>
              </div>
              <div className="col-md-6">
                <select
                  className="form-select border-0 py-3"
                  onChange={getchanage}
                  name="hometype"
                  value={property.hometype}
                >
                  <option hidden>Home Type</option>
                  <option value="Villa">Villa</option>
                  <option value="Appartment">Appartment</option>
                  <option value="Office">Office</option>
                  <option value="House">House</option>
                </select>
              </div>
              <div className="col-md-3">
                <select
                  className="form-select border-0 py-3"
                  onChange={getchanage}
                  name="room"
                  value={property.room}
                >
                  <option selected>Property Room</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                  <option value={6}>6</option>
                </select>
              </div>
              <div className="col-md-3">
                <select
                  className="form-select border-0 py-3"
                  onChange={getchanage}
                  name="bath"
                  value={property.bath}
                >
                  <option selected>Property Bath</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                </select>
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <input
                    type="url"
                    className="form-control"
                    id="propertyimg"
                    placeholder="Property Image"
                    onChange={getchanage}
                    name="img"
                    value={property.img}
                  />
                  <label htmlFor="subject">Property Image</label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <textarea
                    className="form-control"
                    placeholder="Property Address/ location"
                    id="location"
                    style={{ height: 150 }}
                    defaultValue={""}
                    onChange={getchanage}
                    name="location"
                    value={property.location}
                  />
                  <label htmlFor="location"> Location</label>
                </div>
              </div>
              <div className="col-12">
                <button className="btn btn-primary w-100 py-3" type="submit">
                  Add Property List
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddPropertyList;
