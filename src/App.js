import React, { useState } from 'react';
import './style.css';
import Header from './components/Header';
import Tab from './components/Tab';
import styled from 'styled-components';

const APP = styled.div`
  background-color: #003366;
  height: calc(100vh);
`;

const dataJSON = [
  {
    title: 'Grocery Store',
    content: ['Italian Bread', 'Spagheti', '1% mik'],
  },
  {
    title: 'Calc III',
    content: ['Chapter 15 HomeWork', 'Midterm Practial Exam'],
  },
];

export default function App() {
  const [data, setData] = useState(dataJSON);
  return (
    <APP>
      <Header />
      <Tab data={data} setData={setData} />
    </APP>
  );
}
