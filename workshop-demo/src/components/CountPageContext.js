import React from 'react';
import '../style/count-page.scss';

const Context = React.createContext();

function CountPage() {
  let [count, setCount] = React.useState(0);

  return (
    <>
    <div>
    <Context.Provider value={{count,setCount}}>
      <Parent/>
    </Context.Provider>
    </div>
    <div className="count-page">
       <div>
          <h1>{count}</h1>
       </div>
    </div>
    </>
  );
}

function Parent() {
  return (
      <div>
          <Child/>
      </div>
  );
}

function Child() {
  const value = React.useContext(Context);
  return (
      <div>
         
          <input type="button" onClick={()=>{value.setCount(value.count+=1)}} value="Click Me"></input>
      </div>
  );
}

export default CountPage;
