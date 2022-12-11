import React, { useEffect, useState } from "react";
import axios from "axios";

const Blog = () => {
  const [myData, setMyData] = useState([]);
  useEffect(() => {
    console.log("useEffect");
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=pasta")
      .then((res) => setMyData(res.data.meals))
      .catch((error) => console.log(error));
  }, []);

  // const getData = () => {
  //   axios
  //     .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=pasta")
  //     .then((data) => console.log(data.data))
  //     .catch((error) => console.log(error));
  // };

  return (
    <>
      <h1>Blog</h1>
      {myData.map((post, id) => {
        console.log("myData", myData);
        console.log("post", post);

        return (
          <div
            className="card w-full  px-3 mb-12 wow animate__ animate__fadeIn  hover-up-5 animated animated"
            key={id}
          >
            <h1>{post.strMeal}</h1>
            <img
              className="h-80 w-full object-cover rounded"
              src={post.strMealThumb}
            />
          </div>
        );
      })}
      {/* <button onClick={getData}>Click</button> */}
    </>
  );
};

export default Blog;
