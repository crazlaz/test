/* eslint-disable react/no-children-prop */
"use client";

import { useState } from "react";


const Button = ({onSmash, children}: {onSmash: (e: any) => void, children: string})=> {
  return <button onClick={onSmash}>{children}</button>;
}

export default function Page() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-black h-screen text-white ">
      <button onClick={() => setCount(count + 1)}>Click Me</button>

<br />
<button>

      {count ?  'count' : ''}

      </button>
< br />
      <button onClick={() => setCount(0)}>Reset</button>
      <p className="text-white">{count}</p>

      <section>
        <Button onSmash={() => alert("Play")} children={"play"} />
        <Button onSmash={() => alert("NoPlay")} children={"NoPlay"} />
      </section>
    </div>
  );
}
