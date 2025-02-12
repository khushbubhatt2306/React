import React from "react";
import { useNavigate } from "react-router";

function Notfound() {
  const redirect = useNavigate();
  const goback = () => {
    redirect("/");
  };
  return (
    <div>
      <div className="container-xxl bg-white p-0">
        {/* 404 Start */}
        <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
          <div className="container text-center">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <i className="bi bi-exclamation-triangle display-1 text-primary" />
                <h1 className="display-1">404</h1>
                <h1 className="mb-4">Page Not Found</h1>
                <p className="mb-4">
                  We’re sorry, the page you have looked for does not exist in
                  our website! Maybe go to our home page or try to use a search?
                </p>
                <button className="btn btn-primary py-3 px-5" onClick={goback}>
                  Go Back To Home
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* 404 End */}
        {/* Back to Top */}
        <a
          href="#"
          className="btn btn-lg btn-primary btn-lg-square back-to-top"
        >
          <i className="bi bi-arrow-up" />
        </a>
      </div>
    </div>
  );
}

export default Notfound;
