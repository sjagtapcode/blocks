import './BlocksArea.css';
import React from 'react';

const BlocksArea = ({ blocks, selectedBlock, handleSelectBlock }) => (
  <div className='Container'>
    <div className='GridContainer'>
      {blocks.map((block) => (
        <div
          key={block.id}
          className='GridItem'
          style={{
            background: selectedBlock === block.id ? 'yellow' : 'white',
            marginLeft: block.X,
            marginTop: block.Y,
            position: 'absolute',
            zIndex: block.id,
          }}
          onClick={() => handleSelectBlock(block.id)}
        />
      ))}
    </div>
  </div>
);

export default BlocksArea;
