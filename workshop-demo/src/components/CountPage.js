import React from 'react';
import '../style/count-page.scss';

function CountPage() {
  let [count, setCount] = React.useState(0);
  

  const clicked = () => {
    setCount(count+=1);
  }

  return (
    <>
    <div>
      <input type="button" onClick={clicked} value="Click Me"></input>
    </div>
    <div className="count-page">
       <div>
          <h1>{count}</h1>
       </div>
    </div>
    </>
  );
}

export default CountPage;
