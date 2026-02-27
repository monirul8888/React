import { Suspense } from "react";
import "./App.css";
import Friends from "./Friends";

const fetchFriends = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};

function App() {
  const friendsPromise = fetchFriends();

  return (
    <>
      <Suspense fallback={<h2>Friends are Comming for Treat</h2>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense>
    </>
  );
}

export default App;
