import React, { useRef } from 'react';

const MyComponent = () => {
  const myRef = useRef(null);

  return (
    <div ref={myRef}>
      {/* Content goes here */}
    </div>
  );
};

export default MyComponent;