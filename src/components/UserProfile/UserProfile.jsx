import userImg from '../../assets/userImg.png';

import './userprofile.scss';

const UserProfile = () => {
  return (
    <div className="userprofile__container">
      <div className="userprofile__img">
        <img src={userImg} alt="user-img" />
      </div>
      <div>
        <h3 className="userprofile__name">Diane Cooper</h3>
        <p className="userprofile__mail">diane.cooper@example.com</p>
      </div>
      <div className="userprofile__num">
        <div>
          <h5>15</h5>
          <p>Past</p>
        </div>
        <hr />
        <div>
          <h5>02</h5>
          <p>Upcoming</p>
        </div>
      </div>
      <button>Send Message</button>
    </div>
  );
};

export default UserProfile;
