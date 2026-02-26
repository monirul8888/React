import User from "./user";
import "./App.css";
import { Suspense } from "react";

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
    </>
  );
}

export default App;
