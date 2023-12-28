import ShoppingList from './ShoppingList.js';
import { useState, useEffect } from 'react';


function MyButton({needsAlert}) {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
    
  }

  useEffect(() => {
    //setCount(count + 1); // This will always use latest value of count
    if ((count > 0) && needsAlert)
      alert('You clicked me ' + count.toString() + ' times !');
  }, [count]);



  return (
    <div>
      <button onClick={handleClick}>
        I'm a button. Clicked {count} times.
      </button>
    </div>
  );
}

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app!!</h1>
      <MyButton needsAlert={true} />
      <MyButton needsAlert={false} />
      <ShoppingList />
    </div>
  );
}

