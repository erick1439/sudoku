import React from 'react';

function WordList(props) {
    const people = [
      { name: props.data[0] },
      { name: props.data[1] },
      { name: props.data[2] },
      { name: props.data[3] },
      { name: props.data[4] },
      { name: props.data[5] },
      { name: props.data[6] }
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