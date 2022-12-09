import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Router } from "react-router-dom";
// import About from "../src/components/pages/about";
// import Contact from "../src/components/pages/contact";
// import Blog from "../src/components/pages/blog";
// import Layout from "./components/pages/Layout";
// import Home from "./components/pages/Layout";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="about" element={<About />} />
//           <Route path="contact" element={<Contact />} />
//           <Route path="blogs" element={<Blog />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
