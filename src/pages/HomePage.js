// src/pages/HomePage.js
import React, { useState, useEffect } from 'react';

const HomePage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            <strong>Name:</strong> {item.name} | <strong>Email:</strong> {item.email} | <strong>Phone:</strong> {item.phone} | <strong>Message:</strong> {item.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
