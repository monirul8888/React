import React from 'react';
import {use} from "react";
import Friend from './Friend';
const Friends = ({friendsPromise}) => {
    const friends = use(friendsPromise);
    console.log(friends);
    return (
        <div className='card'>

            <h3>Friends</h3>
            {
                friends.map(friend => <Friend friend = {friend}></Friend> )
            }
            
        </div>
    );
};

export default Friends;