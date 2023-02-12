import './userdetails.scss';

const detailList = [
  {
    title: 'Gender',
    subtitle: 'Female',
  },
  {
    title: 'Birthday',
    subtitle: 'Feb 24th, 1997',
  },
  {
    title: 'Phone Number',
    subtitle: '(239) 555-0108',
  },
  {
    title: 'Registered Date',
    subtitle: 'Feb 24th, 1997',
  },
  {
    title: 'Street Address',
    subtitle: 'JL. Diponegoro No. 21',
  },
  {
    title: 'City',
    subtitle: 'Cilacap',
  },
  {
    title: 'Zip Code',
    subtitle: '655849',
  },
  {
    title: 'Member Status',
    subtitle: 'Active Member',
  },
];

const topList = detailList.slice(0, 4);
const downList = detailList.slice(4);

const UserDetails = () => {
  return (
    <div className="userdetails__container">
      <div className="userdetails__content">
        {topList.map((item, index) => (
          <Detail key={index} title={item.title} subtitle={item.subtitle} />
        ))}
      </div>
      <div className="userdetails__content">
        {downList.map((item, index) => (
          <Detail key={index} title={item.title} subtitle={item.subtitle} />
        ))}
      </div>
    </div>
  );
};

const Detail = ({ title, subtitle }) => (
  <div className="userdetails__card">
    <p>{title}</p>
    <h6>{subtitle}</h6>
  </div>
);

export default UserDetails;
