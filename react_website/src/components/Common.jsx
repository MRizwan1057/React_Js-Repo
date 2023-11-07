import { NavLink } from "react-router-dom";

const Common = (props) => {
  return (
    <>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 col-10 mx-auto order-2 order-sm-1">
            <div className="banner_text">
              <h1>
                {props.name} <strong>Riz1_Tech</strong>
              </h1>
              <h3>
                We are the team of talented Developers driving innovation and
                efficiency
              </h3>
              <div>
                <NavLink
                  to={props.visit}
                  className="btn btn-outline-info btn-small  shadow-sm font-weight-bold"
                >
                  {props.btnName}
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-10 mx-auto order-1 order-sm-2">
            <div className="banner_img">
              <img src={props.imgsrc} alt="" className="img-fluid   animated" />
            </div>
          </div>
        </div>
      </div>

      <div className="jumbotron jumbotron-fluid">
        <div className="container text-center">
          <h1 className="display-4">Riz1_Tech</h1>
          <p className="lead">
            A well known Web Designing and Web Development Comapny
          </p>
        </div>
      </div>
    </>
  );
};

export default Common;
