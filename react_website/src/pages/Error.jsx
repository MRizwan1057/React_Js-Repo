import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <>
      <div className="container">
        <div className="row text-center">
          <div className="col-9 mx-auto">
            <h1>404.</h1>
            <p>
              Ufff.... Not Found. <NavLink to="/">Back to Home Page</NavLink>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error;
