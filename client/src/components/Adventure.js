import React from 'react';

const styles = {
  complete: {
    textDecoration: 'line-through',
    color: 'grey'
  },
  pointer: { cursor: 'pointer' }
}

const Adventure = ( { id, taken, name, updateAdventure, deleteAdventure } ) => (
  <div className = "col s12">
    <div className = "col m8">
      <div style = { taken ? styles.complete : {} } className = "center">
        {name}
      </div>
    </div>

    <div className = "col m2">
      <input
        id = {`trip-${id}`}
        type = "checkbox"
        defaultChecked = {taken}
        onClick = { () => updateAdventure(id) }
      />
      <label htmlFor={`trip-${id}`}>Taken</label>
    </div>
    <div style={ styles.pointer } className = "col m1" onClick = {() => deleteAdventure(id)}>
    [X]
    </div>
  </div>
)

export default Adventure;