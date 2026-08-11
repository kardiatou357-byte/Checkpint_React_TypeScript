import React from 'react';
import { GreetingProps } from '../Types';

const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return (
    <div className="greeting-container" style={{
      padding: '20px',
      backgroundColor: '#f0f8ff',
      borderRadius: '8px',
      marginBottom: '20px',
      borderLeft: '4px solid #4CAF50'
    }}>
      <h2> Bonjour, {name} !</h2>
      <p style={{ color: '#555', margin: '10px 0 0 0' }}>
        Bienvenue dans notre application React avec TypeScript !
      </p>
    </div>
  );
};

export default Greeting;