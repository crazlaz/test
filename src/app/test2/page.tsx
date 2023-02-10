'use client'

import { useState } from 'react';

export default function Form() {
  const [isSent, setIsSent] = useState(false);
  const [message, setMessage] = useState('Hi!');
  const [walk, setWalk] = useState(false);
  if (isSent) {
    return <h1>Your message is on its way!</h1>
}

function handleClickChange() {
    setWalk(!walk);
}
  return (
    <div>
    <form onSubmit={(e) => {
      e.preventDefault();
      setIsSent(true);
      
    }}>
      <textarea
        placeholder="Message"
        value={message}
        onChange={e => setMessage(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
<section>

    <button onClick={handleClickChange}>
        Change to {walk ? 'Stop': 'Walk'}

    </button>
    <h1 style={{color: walk ? 'darkgreen' : 'darkred'}}
  
    >
        {walk ? 'Walk' : 'Stop'}
    </h1>


</section>

    </div>





  );
}


