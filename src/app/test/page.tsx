'use client'
import { useState } from 'react';
import { sculptureList } from './data.js';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false)

  function handleMoreClick(){ 
    setShowMore(!showMore);
  }

  function handleClick() {
    setIndex(index + 1);
  }

  function goBack() {
    setIndex(index - 1); 
  }

let sculpture = sculptureList[index];
return (
  <div className='h-screen'>
    <button onClick={handleClick}>
      Next
    </button>

    <button onClick={goBack}> 
        Prev
    </button>
    <h2>
      <i>{sculpture.name} </i> 
      by {sculpture.artist}
    </h2>
    <h3>  
      ({index + 1} of {sculptureList.length})
    </h3>
<button onClick={handleMoreClick}>
    {showMore ? 'Hide' : 'Show'} details 
</button>
{showMore && <p className='text-red-500'>{sculpture.description}</p>}

    <img 
      src={sculpture.url} 
      alt={sculpture.alt}
    />
    <p>
      
    </p>
  </div>
);
}
