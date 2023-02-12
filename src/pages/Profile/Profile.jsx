import React from 'react';
import Files from '../../components/Files/Files';
import UserDetails from '../../components/UserDetails/UserDetails';
import UserProfile from '../../components/UserProfile/UserProfile';
import UserRecords from '../../components/UserRecords/UserRecords';

import './profile.scss';

const Profile = () => {
  return (
    <div className="profile__container">
      <div>
        <UserProfile />
        <Files />
      </div>
      <div>
        <UserDetails />
        <UserRecords />
      </div>
    </div>
  );
};

export default Profile;
