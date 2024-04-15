import React from 'react';
import './profile.css';

function Profile({ username, tag, location, avatar, stats }) {
  const formatNumber = number => {
    return number.toLocaleString();
  };

  return (
    <div className="profile-card">
      <img
        src={
          avatar || 'https://cdn-icons-png.flaticon.com/512/2922/2922506.png'
        }
        alt="User avatar"
        className="profile-avatar"
      />
      <div className="profile-info">
        <h1 className="profile-name">{username}</h1>
        <p className="profile-tag">@{tag}</p>
        <p className="profile-location">{location}</p>
      </div>
      <div className="profile-stats">
        <div className="stat">
          <span className="stat-label">Followers</span>
          <span className="stat-number">{formatNumber(stats.followers)}</span>
        </div>
        <div className="stat">
          <span className="stat-label">Views</span>
          <span className="stat-number">{formatNumber(stats.views)}</span>
        </div>
        <div className="stat">
          <span className="stat-label">Likes</span>
          <span className="stat-number">{formatNumber(stats.likes)}</span>
        </div>
      </div>
    </div>
  );
}

export default Profile;
