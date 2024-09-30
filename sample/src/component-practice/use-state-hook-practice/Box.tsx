import { ReactNode } from 'react';

function Box({ children }:{ children: ReactNode }) {
  return (
    <div style={{ border: '2px solid #ccc', padding: '20px', margin: '10px' }}>
      {children}
    </div>
  );
}

export default Box