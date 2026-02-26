import User from "./user";
import "./App.css";
import { Suspense } from "react";
import Friends from "./Friends";

const fetchUser = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json()
)

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      
      <Suspense fallback = {"Loading ...."}>
        <User fetchUser = {fetchUser}></User>
      </Suspense>

      <Suspense fallback = {<h3>
        Friends are Comming for Treat
      </h3>
      }>
        <Friends></Friends>
      </Suspense>
    </>
  );
}

export default App;
