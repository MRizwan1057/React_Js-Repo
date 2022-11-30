import Card from "../components/Card";
import Sdata from "../components/Sdata";

const Service = () => {
  return (
    <>
      <div className="mb-5">
        <h1 className="text-center">
          <strong>Our Services</strong>
        </h1>
      </div>

      <div className="container">
        <div className="row gy-4">
          <div className="col-md-12">
            <div className="row">
              {Sdata.map((val, ind) => {
                return <Card key={ind} imgsrc={val.imgsrc} title={val.title} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
