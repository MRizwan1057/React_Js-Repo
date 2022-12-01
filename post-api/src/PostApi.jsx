// import React, { useState, useEffect } from "react";
// import Post from "./Post";
// const T = () => {
//   const [posts, setPosts] = useState([]);

//   const getPosts = async () => {
//     try {
//       const response = await fetch(
//         "https://jsonplaceholder.typicode.com/posts"
//       );

//       setPosts(await response.json());
//     } catch (error) {}
//   };

//   useEffect(() => {
//     getPosts();
//   }, []);

//   return (
//     <>
//       <Post posts={posts} />
//     </>
//   );
// };

// export default PostApi;

import React, { useState, useEffect } from "react";
import Todo from "./Post";
const TodoApi = () => {
  const [todos, setTodos] = useState([]);

  const getTodo = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );

      setTodos(await response.json());
    } catch (error) {}
  };

  useEffect(() => {
    getTodo();
  }, []);

  return (
    <>
      <Todo todos={todos} />
    </>
  );
};

export default TodoApi;
