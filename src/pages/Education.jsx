import React from 'react';
import CustomTable from '../components/CustomTable';
import './Education.css'
const Education = () => {
  const columns = [
    { header: 'Degree', field: 'degree' },
    { header: 'Institution', field: 'institution' },
    { header: 'Year', field: 'year' },
  ];

  const data = [
    { degree: 'BSAI', institution: 'ITU Lahore', year: '2027' },
    { degree: 'FSC', institution: 'BISE Lahore', year: '2022' },
  ];

  return (
    <div className="bg-blue" >
      <br />
      <h1>Education</h1>
      <CustomTable columns={columns} data={data} />
    </div>
  );
};

export default Education;
