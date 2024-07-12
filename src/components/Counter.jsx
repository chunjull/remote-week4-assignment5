import { useState } from "react";

function SingleCounter({ count, increment }) {
  return (
  <>
  <div className="counterContainer">
    <button onClick={ increment }>+1</button>
    <div className="Number">{ count }</div>
  </div>
  </>
  );
}

function Counter() {
  const [counts, setCounts] = useState([0, 0, 0]);
  const [allCount, setAllCount] = useState(0);

  const incrementAll = () => {
    setCounts(counts.map(count => count + 1));
    setAllCount(allCount + 1);
  }

  const addCounter = () => {
    setCounts([...counts, 0]);
  }

  const incrementSingle = (index) => {
    const newCounts = [...counts];
    newCounts[index] += 1;
    setCounts(newCounts);
  }

  return(
    <>
    <div className="counterContainer">
      <button onClick={ incrementAll }>All + 1</button>
    </div>
    { counts.map((count, index) => (
      <SingleCounter 
        key={ index } 
        count={ count } 
        increment={() => incrementSingle(index)} 
      />
    )) }
    <div className="counterContainer">
      <button onClick={ addCounter }>Add a Counter</button>
    </div>
    </>
  );
}

export default Counter;