import React from 'react';

const Friend = ({friend}) => {
    const {name, phone, website, company} = friend;
    return (
        <div className='card'>

            <h2>Name : {name}</h2>
            <p>Phone: {phone}</p>
            <p>Address: {friend["address"]["geo"]["lat"]}</p>
            <p><b>Website: {website}</b></p>
            <p>Company : {company.name}</p>
            
        </div>
    );
};

export default Friend;

// {
//     "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//         "street": "Kulas Light",
//         "suite": "Apt. 556",
//         "city": "Gwenborough",
//         "zipcode": "92998-3874",
//         "geo": {
//             "lat": "-37.3159",
//             "lng": "81.1496"
//         }
//     },
//     "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//     "company": {
//         "name": "Romaguera-Crona",
//         "catchPhrase": "Multi-layered client-server neural-net",
//         "bs": "harness real-time e-markets"
//     }
// }