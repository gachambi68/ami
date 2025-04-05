import { useState } from "react";

function Counter(){
  const [Count, setCount]=useState(0);

return (
  <div>
    <h2> My count is: {Count}</h2>
    <button onClick={() => setCount(count +1)}>Increameants</button>
    <button onClick={() => setCount(count -1)} >Decreaments</button>
    <button onClick={() => setCount(0)}>Reset</button>
  </div>
);
}

export default Counter