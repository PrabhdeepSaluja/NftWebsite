import React, { useEffect, useState } from "react";
import axios from "axios";

const Blog = () => {
  const [myData, setMyData] = useState([]);
  useEffect(() => {
    console.log("useEffect");
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=pasta")
      .then((res) => setMyData(res.data))
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
          <div className="card" key={id}>
            <h1>{post.strMeal}</h1>;
          </div>
        );
      })}
      {/* <button onClick={getData}>Click</button> */}
    </>
  );
};

export default Blog;
