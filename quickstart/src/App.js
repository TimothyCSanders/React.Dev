import ShoppingList from './ShoppingList.js';
import { useState, useEffect } from 'react';


function MyButton({appCount, needsAlert, setCount}) {
  const [buttonCount, setButtonCount] = useState(0);

  function handleClick() {
    setButtonCount(buttonCount + 1);
    setCount();
  }

  useEffect(() => {
    //setButtonCount(buttonCount + 1); // This will always use latest value of buttonCount
    if ((buttonCount > 0) && needsAlert)
      alert('You clicked me ' + buttonCount.toString() + ' times !');
  }, [buttonCount]);



  return (
    <div>
      <button onClick={handleClick} >
        I'm a button. Clicked {buttonCount} times. App count = {appCount}
      </button>
    </div>
  );
}

export default function MyApp() {

  const [appCount, setAppCount] = useState(0);

  function handleGlobalClick() {
    setAppCount(appCount + 1);
  }

  return (
    <div>
      <h1>Welcome to my app!!</h1>
      <MyButton appCount={appCount} needsAlert={true} setCount={handleGlobalClick} />
      <MyButton appCount={appCount} needsAlert={false} setCount={handleGlobalClick}  />
      <ShoppingList />
    </div>
  );
}

