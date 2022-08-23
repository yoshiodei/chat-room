import React from 'react';

const UserCard = () => {
    return (
        <div className='user-card'>
            <div className='user-card__div'>
                <div    className='user-card__image'></div>
                <div className='user-card__icon'></div>
            </div>
            <h4 className='user-card__username'>Kwame Bini</h4>
        </div>
    );
}

export default UserCard;
