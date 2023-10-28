import React from 'react';
import styled from 'styled-components';

const HomepageContainer = styled.div`
  text-align: center;
  padding: 20px;
`;

const Section = styled.div`
  margin: 20px 0;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #ffffff;
`;

export default function EditUser() {
  return (
    <div className="homepage">
    Hello
      <header className="header">
        <h1>Book Store</h1>
      </header>

      <section className="featured-books">
        <h2>Featured Books</h2>
        <ul>
          <li>Book 1</li>
          <li>Book 2</li>
          <li>Book 3</li>
        </ul>
      </section>

      <section className="categories">
        <h2>Categories</h2>
        <ul>
          <li>Fiction</li>
          <li>Non-Fiction</li>
          <li>Science</li>
        </ul>
      </section>
    </div>
  );
};


