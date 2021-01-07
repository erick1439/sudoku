import React from 'react';

function WordList() {
    const people = [
      { name: 'chris' },
      { name: 'nick' },
      { name: 'erick' },
      { name: 'jose' },
      { name: 'carlos' },
      { name: 'daniel' }
    ];
  
    return (
      <div>
        {people.map(person => (
          <p>{person.name}</p>
        ))}
      </div>
    );
  }

  export default WordList;