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

    let colors = ["F60707", "FF8300", "01E9E6", "51FF00", "0055FF", "6800FF", "FF00F3"];
  
    return (
      <div>
        {people.map((person, index) => (
          <p style={{color: "#" + colors[index]}}>{person.name}</p>
        ))}
      </div>
    );
  }

  export default WordList;