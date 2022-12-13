import { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    fname: "",
    contact: "",
    email: "",
    msg: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Hi ${data.fname} ...!  yor form has been submitted successfully. : )`
    );
    setData({
      fname: "",
      contact: "",
      email: "",
      msg: "",
    });
  };
  return (
    <>
      <div className="mb-5">
        <h1 className="text-center">
          <strong>Contact Us</strong>
        </h1>
      </div>

      <div className="container mb-5">
        <div className="row shadow p-3">
          <div className="col-md-8 col-10 mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="fname">Full Name</label>
                <input
                  type="text"
                  required
                  className="form-control"
                  id="fname"
                  name="fname"
                  value={data.fname}
                  onChange={handleInput}
                  placeholder="Write your Name here..."
                />
              </div>
              <div className="form-group">
                <label htmlFor="contact">Contact</label>
                <input
                  type="text"
                  className="form-control"
                  id="contact"
                  name="contact"
                  value={data.contact}
                  onChange={handleInput}
                  placeholder="Enter your Contact No here...."
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  required
                  className="form-control"
                  id="email"
                  name="email"
                  value={data.email}
                  onChange={handleInput}
                  placeholder="name@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="msg">Message</label>
                <textarea
                  className="form-control"
                  id="msg"
                  rows="3"
                  name="msg"
                  value={data.msg}
                  onChange={handleInput}
                  placeholder="Leave a message here..."
                ></textarea>
              </div>
              <div>
                <button className="btn btn-outline-info shadow-sm font-weight-bold">
                  Submit Form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
