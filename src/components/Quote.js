import React from 'react';
import Navbar from './Navbar';

const Quote = () => (
  <div className="container">
    <Navbar />
    <blockquote>
      <p>
        Mathematics is not about numbers, equations, computations, or
        algorithms: it is about understanding.
      </p>
      <footer>William Paul Thurston</footer>
    </blockquote>

  </div>
);
export default Quote;
