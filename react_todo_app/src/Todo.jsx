import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { useState } from "react";
import { Button } from "react-bootstrap";

const Todo = () => {
  const [activity, setActivity] = useState("");
  const [listData, setListData] = useState([]);

  const addActivity = () => {
    // setListData([...listData, activity]);
    // console.log(listData);

    setListData((listData) => {
      const updatedList = [...listData, activity];
      //   console.log(updatedList);
      setActivity("");
      return updatedList;
    });
  };

  const removeActivity = (i) => {
    const updatedListData = listData.filter((elem, id) => {
      return i !== id;
    });
    setListData(updatedListData);
  };

  const removeall = () => {
    setListData([]);
  };

  return (
    <Container>
      <Row>
        <Col md={{ span: 3, offset: 3 }}>
          <div>
            <h1 className="header">Todo List</h1>
            <input
              type="text"
              placeholder="Add Activity"
              value={activity}
              onChange={(e) => setActivity(e.target.value)}
            />
            <button onClick={addActivity}>Add</button>
            {listData.length >= 2 && (
              <Button variant="outline-danger" onClick={removeall}>
                Remove All
              </Button>
            )}

            <p className="list_heading">Here is your list : {")"}</p>

            {listData !== [] &&
              listData.map((data, i) => {
                return (
                  <React.Fragment key={i}>
                    <div className="list_content">
                      <div className="list_data">{data}</div>
                      <div>
                        <button
                          className="remBtn"
                          onClick={() => removeActivity(i)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </React.Fragment>
                );
              })}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Todo;
