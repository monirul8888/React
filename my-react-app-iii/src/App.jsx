
import { Suspense } from "react";
import "./App.css";
import Countries from "./components/Countries/Countries";

const fetchCountries = async() =>{
  const res = await fetch(" https://restcountries.com/v3.1/all?fields=name,capital,currencies");
  return res.json();

}


function App() {
  const promiseCountries = fetchCountries();
  return (
    <>
      <Suspense fallback = {<h1>Countries Loading ....</h1>}>
        <Countries promiseCountries = {promiseCountries}></Countries>
      </Suspense>
      
    </>
  );
}

export default App;
