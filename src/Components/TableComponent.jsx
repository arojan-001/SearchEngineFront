import './TableComponent.css';
import React, { useState, useEffect } from 'react';

const TableComponent = () => {
    const [terms, setTerms] = useState([]);
    useEffect(() => {
      fetch('https://localhost:7265/Search/generate')
        .then((response) => response.json())
        .then((data) => {
          setTerms(data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Doc_id</th>
          <th>Term</th>
        </tr>
      </thead>
      <tbody>
        {terms.map((item, index) => (
          <tr key={index}>
            <td>{item.key}</td>
            <td>{item.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;
