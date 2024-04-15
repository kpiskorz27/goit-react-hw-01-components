import React from 'react';
import './friend-list.css';
function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map(friend => (
        <li key={friend.id} className="friend-item">
          <span
            className="status"
            style={{ backgroundColor: friend.isOnline ? 'lime' : 'crimson' }}
          ></span>
          <img
            src={friend.avatar}
            alt="User avatar"
            className="friend-avatar"
          />
          <p className="friend-name">{friend.name}</p>
        </li>
      ))}
    </ul>
  );
}

export default FriendList;
