import React, { useState, useEffect } from 'react';


const ExampleComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title =  {count} ;
  }, [count]);

  return (
    <div>
      <p>{count} </p>
      <button onClick={() => setCount(count + 1)}>
       \
      </button>
    </div>
  );
};