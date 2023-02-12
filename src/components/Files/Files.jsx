import { RiFileListLine } from 'react-icons/ri';

import './files.scss';

const fileList = [
  { text: 'Check Up Results.pdf' },
  { text: 'Check Up Results.pdf' },
  { text: 'Medical Prescription.pdf' },
  { text: 'Dental X-Ray Result.pdf' },
];

const Files = () => {
  return (
    <div className="files__container">
      <h6>Files / Documents</h6>
      <div className="files__cards">
        {fileList.map((item, index) => (
          <File text={item.text} key={index} />
        ))}
      </div>
    </div>
  );
};

const File = ({ text }) => {
  return (
    <div className="files__card">
      <RiFileListLine />
      <p>{text}</p>
    </div>
  );
};

export default Files;
