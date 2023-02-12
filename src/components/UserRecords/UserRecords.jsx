import { RiFileListLine } from 'react-icons/ri';
import './userrecords.scss';

const appointmentList = [
  {
    appointment: 'Upcoming Appointments',
  },
  {
    appointment: 'Past Appointments',
  },
  {
    appointment: 'Medical Records',
  },
];

const recordList = [
  {
    date: '26 Nov ‘19',
    time: '09.00 - 10.00',
    treatment: 'Root Canal',
    doc: 'Drg. Adam H.',
    nurse: 'Jessicamila',
  },
  {
    date: '12 Nov ‘19',
    time: '09.00 - 10.00',
    treatment: 'Open Access',
    doc: 'Drg. Adam H.',
    nurse: 'Jessicamila',
  },
];

const UserRecords = () => {
  return (
    <>
      <div className="userrecords__appointments">
        {appointmentList.map((item, index) => (
          <Appointments key={index} appointment={item.appointment} />
        ))}
      </div>
      <div className="userrecords__container">
        <div className="userrecords__content">
          <div className="userrecords__content-header">
            <div>Root Canal Treatment</div>
            <div>Show Previous Treatments</div>
          </div>
          <hr />
          <div className="userrecords__cards">
            {recordList.map((item, index) => (
              <Record key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const Record = (record) => {
  return (
    <div className="userrecords__card">
      <div className="userrecords__card-date ">
        <h4>{record.date}</h4>
        <p>{record.time}</p>
      </div>
      <hr />
      <div className="userrecords__card-treatment flex_align">
        <p>Treatment</p>
        <h5>{record.treatment}</h5>
      </div>
      <hr />
      <div className="userrecords__card-doc flex_align">
        <p>Dentist</p>
        <h6>{record.doc}</h6>
      </div>
      <hr />
      <div className="userrecords__card-nurse flex_align">
        <p>Nurse</p>
        <h6>{record.nurse}</h6>
      </div>
      <div className="userrecords__card-note flex_align">
        <RiFileListLine />
        <p>Note</p>
      </div>
    </div>
  );
};

const Appointments = ({ appointment }) => {
  return (
    <div>
      <p>{appointment}</p>
    </div>
  );
};

export default UserRecords;
