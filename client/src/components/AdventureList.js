import React from 'react';
import Adventure from './Adventure';

const AdventureList = ({ Adventures, updateAdventure, deleteAdventure}) => (
  <div className = "row">
    { adventure.map(adventure => 
        <Adventure
          key={adventure.id}
           {...adventure}
           updateAdventure={updateAdventure}
           deleteAdventure={deleteAdventure}
        />
      )
    }
  </div>
)
