
import React from "react";

const Country = ({ country }) => {
  const { name, flags, capital, population, currencies } = country;

  const nativeOfficial = name?.nativeName
    ? Object.values(name.nativeName)[0]?.official
    : "Not Available";

  const currencyName = currencies
    ? Object.values(currencies)[0]?.name
    : "No Currency";

  return (
    <div className="card">
      <h3>Country Name: {name?.common}</h3>
      <p>Official Name: {name?.official}</p>
      <p>Native Name: {nativeOfficial}</p>
      <p>Capital: {capital?.[0] || "No Capital"}</p>
      <p>Population: {population?.toLocaleString()}</p>
      <p>Currency: {currencyName}</p>

      {flags?.png && (
        <img
          src={flags.png}
          alt={`Flag of ${name?.common}`}
          width="150"
        />
      )}
    </div>
  );
};

export default Country;


// {
//     "name": {
//         "common": "Zimbabwe",
//         "official": "Republic of Zimbabwe",
//         "nativeName": {
//             "bwg": {
//                 "official": "Republic of Zimbabwe",
//                 "common": "Zimbabwe"
//             },
//             "eng": {
//                 "official": "Republic of Zimbabwe",
//                 "common": "Zimbabwe"
//             },
//             "kck": {
//                 "official": "Republic of Zimbabwe",
//                 "common": "Zimbabwe"
//             },
//             "khi": {
//                 "official": "Republic of Zimbabwe",
//                 "common": "Zimbabwe"
//             },
//             "ndc": {
//                 "official": "Republic of Zimbabwe",
//                 "common": "Zimbabwe"
//             },
//             "nde": {
//                 "official": "Republic of Zimbabwe",
//                 "common": "Zimbabwe"
//             },
//             "nya": {
//                 "official": "Republic of Zimbabwe",
//                 "common": "Zimbabwe"
//             },
//             "sna": {
//                 "official": "Republic of Zimbabwe",
//                 "common": "Zimbabwe"
//             },
//             "sot": {
//                 "official": "Republic of Zimbabwe",
//                 "common": "Zimbabwe"
//             },
//             "toi": {
//                 "official": "Republic of Zimbabwe",
//                 "common": "Zimbabwe"
//             },
//             "tsn": {
//                 "official": "Republic of Zimbabwe",
//                 "common": "Zimbabwe"
//             },
//             "tso": {
//                 "official": "Republic of Zimbabwe",
//                 "common": "Zimbabwe"
//             },
//             "ven": {
//                 "official": "Republic of Zimbabwe",
//                 "common": "Zimbabwe"
//             },
//             "xho": {
//                 "official": "Republic of Zimbabwe",
//                 "common": "Zimbabwe"
//             },
//             "zib": {
//                 "official": "Republic of Zimbabwe",
//                 "common": "Zimbabwe"
//             }
//         }
//     },
//     "currencies": {
//         "ZWL": {
//             "name": "Zimbabwean dollar",
//             "symbol": "$"
//         }
//     },
//     "capital": [
//         "Harare"
//     ]
// }