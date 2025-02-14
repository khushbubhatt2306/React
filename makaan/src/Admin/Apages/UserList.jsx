import React, { useEffect, useState } from "react";
import AHeader from "../Acoman/AHeader";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import axios from "axios";
import { toast } from "react-toastify";

function UserList() {
  const [userlist, setuserlist] = useState();

  useEffect(() => {
    getuserdata();
  }, []);

  const getuserdata = async () => {
    const res = await axios.get("http://localhost:3000/users");
    console.log(res.data);
    setuserlist(res.data);
  };

  // get view

  const [viewdata, setviewdata] = useState({
    id: "",
    name: "",
    email: "",
    img: "",
    phone: "",
    status: "",
  });
  // id get
  const getview = async (id) => {
    const res = await axios.get(`http://localhost:3000/users/${id}`);
    console.log(res.data);
    setviewdata(res.data);
  };

  // delete data
  const deletedata = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:3000/users/${id}`);
      console.log(res.data);
      getuserdata();
    } catch (error) {
      console.log("Error deleting property", error);
    }
  };

  // Status change
  // const statushandle = async (id) => {
  //   const res = await axios.get(`http://localhost:3000/users/${id}`);
  //   const currentstatus = res.data.status;

  //   try {
  //     if (currentstatus === "block") {
  //       const res = await axios.patch(`http://localhost:3000/users/${id}`, {
  //         status: "unblock",
  //       });
  //       console.log(res.data);
  //       {
  //         if (res.status === 200) {
  //           toast.success("unblock successfully");
  //           getuserdata();
  //         }
  //       }
  //     } else if (currentstatus === "unblock") {
  //       const res = await axios.patch(`http://localhost:3000/users/${id}`, {
  //         status: "block",
  //       });

  //       {
  //         if (res.status === 200) {
  //           toast.success("block successfully");
  //           getuserdata();
  //         }
  //       }
  //     }
  //   } catch (error) {
  //     console.log("Status Error", error);
  //   }
  // };

  const statushandle = async (id) => {
    try {
      // Fetch the current user data
      const res = await axios.get(`http://localhost:3000/users/${id}`);
      const currentStatus = res.data.status;

      // Toggle status
      const newStatus = currentStatus === "block" ? "unblock" : "block";

      // Update status
      const updateRes = await axios.patch(`http://localhost:3000/users/${id}`, {
        status: newStatus,
      });

      if (updateRes.status === 200) {
        toast.success(`${newStatus} successfully`);
        getuserdata(); // Refresh the user list
      }
    } catch (error) {
      console.error("Status Update Error:", error);
      toast.error("Failed to update status");
    }
  };

  return (
    <div>
      <AHeader />
      <div className="container">
        <h1 className="text-center">Welcome to the User List</h1>
        <MDBTable className="table table-dark">
          <MDBTableHead>
            <tr>
              <th scope="col">#id</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Image</th>
              <th scope="col">Phone</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {userlist &&
              userlist.map((userdata, index) => {
                const { id, name, email, img, phone, status } = userdata;
                return (
                  <tr key={index}>
                    <th scope="row">{id}</th>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>
                      <img
                        src={img}
                        alt=""
                        style={{ width: "50px", height: "50px" }}
                        className="img-fluid rounded"
                      />
                    </td>
                    <td>{phone}</td>
                    <td>
                      <button
                        className="btn btn-success"
                        onClick={() => statushandle(id)}
                      >
                        {status}
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-primary"
                        data-bs-toggle="modal"
                        href="#exampleModalToggle"
                        onClick={() => getview(id)}
                      >
                        View
                      </button>

                      <button
                        className="btn btn-danger mx-2"
                        onClick={() => deletedata(id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}

            <div>
              <div
                className="modal fade"
                id="exampleModalToggle"
                aria-hidden="true"
                aria-labelledby="exampleModalToggleLabel"
                tabIndex={-1}
              >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalToggleLabel">
                        Modal 1
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      />
                    </div>
                    <div className="modal-body">
                      {
                        <div className="property-item rounded overflow-hidden">
                          <div className="position-relative overflow-hidden">
                            <a href>
                              <img
                                className="img-fluid"
                                style={{ height: "300px", width: "100%" }}
                                src={viewdata.img}
                                alt
                              />
                            </a>
                            <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                              {viewdata.name}
                            </div>
                            <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                              {viewdata.email}
                            </div>
                          </div>
                          <div className="p-4 pb-0">
                            <h5 className="text-primary mb-3">
                              {viewdata.phone}
                            </h5>
                            <h5 className="text-primary mb-3">
                              {viewdata.status}
                            </h5>
                          </div>
                        </div>
                      }
                    </div>
                    <div className="modal-footer">
                      {/* <button className="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">Open second modal</button> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </MDBTableBody>
        </MDBTable>
      </div>
    </div>
  );
}

export default UserList;
