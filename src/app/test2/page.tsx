'use client'

import { useState } from 'react';
let nextId = 0;


export default function Form() {

  const [name, setName] = useState('');
  const [artists, setArtists] = useState([]);


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


<>
<h1>Cool Mofos</h1>

<input
value={name}
onChange={e => setName(e.target.value)}
/>
<button onClick={() => {
        setName('');
        artists.push({
          id: nextId++,
          name: name,
        });
      }}>Add</button>

      <ul>
        {artists.map(artists => (
          <li key={artists.id} >{artists.name}</li>
        ))}
      </ul>
</>


</section>

    </div>





  );
}


