// import React from "react";

// const Post = ({ posts }) => {
//   return (
//     <div className="text-center m-4">

//         <h2 className="text-info  shadow p-3">
//         Fetching Apis "Post" using UseEffect Hook
//         <i>** inspired by Vinod Bahadur Thapa **</i>
//         </h2>

//       <h2>  Posts List</h2>
//       <div className="container my-5">
//         <div className="row text-center bg-info">
//           {posts.map((val, ind) => {
//             const { userId, id, title, body } = val;
//             return (
//               <div className="container" key={ind}>
//                 <div className="row shadow">
//                   <div className="col-10 mx-auto my-4" >
//                     <div className="card shadow rounded-pill p-5">
//                       <div className="d-flex align-items-center">
//                         <div className="ml-3 w-100">
//                           <h4 className="text-center text-primary">
//                             post no: {id} ... User :{userId}.
//                           </h4>
//                           <h3 className="text-center">{title}</h3>
//                           <p className="mb-0 mt-0 text-center">{body}</p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Post;

// //  ****Todo api*******

// Todo Api

import React from "react";
const Todo = ({ todos }) => {
  return (
    <div className="text-center m-4">
      <h2 className="text-info  shadow p-3">
        Fetching Apis "Todo" using UseEffect Hook
        <i>** inspired by Vinod Bahadur Thapa **</i>
      </h2>
      <h2>Tasks List</h2>
      <div className="container my-5">
        <div className="row text-center bg-info">
          {todos.map((val) => {
            const { userId, id, title, completed } = val;
            const status = completed ? "Done" : "Pending";

            return (
              <div className="container" key={id}>
                <div className="row shadow">
                  <div className="col-10 mx-auto my-4">
                    <div className="card shadow rounded-pill p-5">
                      <div className="d-flex align-items-center">
                        <div className="ml-3 w-100">
                          <h4 className="text-center text-primary">
                            Task no: {id} ... User :{userId}.
                          </h4>
                          <h3 className="text-center">{title}</h3>
                          <h4
                            className={
                              status === "Done" ? "text-success" : "text-danger"
                            }
                          >
                            {status}
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Todo;
