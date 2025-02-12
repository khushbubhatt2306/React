import React, { useEffect, useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router";
import axios from "axios";
import { toast } from "react-toastify";

function Login() {
  const redirect = useNavigate();

  const [user, setuser] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (localStorage.getItem("userid")) {
      redirect("/");
    }
  });

  const getchange = (e) => {
    setuser({
      ...user,
      [e.target.name]: e.target.value,
    });
    console.log(user);
  };

  const handlesubmit = async (e) => {
    // page will not refresh
    e.preventDefault();

    const { email, password } = user;

    // empty data
    if (!email.trim("") || !password.trim("")) {
      console.log("Please fill the required data..!");
      toast.error("Please fill the required data..!");
      return false;
    }

    try {
      const res = await axios.get(`http://localhost:3000/users?email=${email}`);
      console.log(res.data);

      // email id wrong
      if (res.data.length == 0) {
        console.log("Email id does not match..!");
        toast.error("Email id does not match..!");
        return false;
      }

      let users = res.data[0];
      console.log(users);

      //password
      if (users.password !== password) {
        console.log("Password does not match..!");
        toast.error("Password does not match..!");
        return false;
      }

      if (users.status == "block") {
        console.log("account block contact admin site");
        toast.error("account block contact admin site");
        return false;
      }
      localStorage.setItem("userid", users.id);
      localStorage.setItem("username", users.name);
      toast.success("Login successfully..");
      redirect("/");
      console.log("Login successfully");
    } catch (error) {
      console.log("api data not valid..!", error);
      toast.error("api data not valid..!", error);
    }
  };

  return (
    <div>
      <MDBContainer className="my-5">
        <MDBCard>
          <MDBRow className="g-0 d-flex align-items-center">
            <MDBCol md="4">
              <MDBCardImage
                src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg"
                alt="phone"
                className="rounded-t-5 rounded-tr-lg-0"
                fluid
              />
            </MDBCol>

            <MDBCol md="6">
              <form action="">
                <MDBCardBody>
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Email address"
                    id="form1"
                    type="email"
                    value={user.email}
                    name="email"
                    onChange={getchange}
                  />
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Password"
                    id="form2"
                    type="password"
                    value={user.password}
                    name="password"
                    onChange={getchange}
                  />

                  <div className="d-flex justify-content-between mx-4 mb-4">
                    <MDBCheckbox
                      name="flexCheck"
                      value=""
                      id="flexCheckDefault"
                      label="Remember me"
                    />
                    <a href="!#">Forgot password?</a>
                  </div>
                  <div>
                    <p className="mb-3 text-center">
                      Don't have an account?{" "}
                      <Link to="/register" class="text-black  fw-bold">
                        Sign Up
                      </Link>
                    </p>
                  </div>

                  <MDBBtn className="mb-4 w-100" onClick={handlesubmit}>
                    Sign in
                  </MDBBtn>
                </MDBCardBody>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </MDBContainer>
    </div>
  );
}

export default Login;
