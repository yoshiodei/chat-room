import React from 'react';
import UserCard from './UserCard';

const UsersList = () => {
    return (
        <div className='users-list'>
            <input placeholder='Search users' className='users-list__input'/>
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
        </div>
    );
}

export default UsersList;
