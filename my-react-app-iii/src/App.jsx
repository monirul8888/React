import User from "./user";
import "./App.css";
import { Suspense } from "react";
import Friends from "./Friends";

const fetchUser = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json(),
);

const fetchFriends = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};


function App() {
  const friendsPromise = fetchFriends();
  return (
    <>
      <h1>Vite + React</h1>

      <Suspense fallback={"Loading ...."}>
        <User fetchUser={fetchUser}></User>
      </Suspense>

      <Suspense fallback={<h3>Friends are Comming for Treat</h3>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense>
    </>
  );
}

export default App;
