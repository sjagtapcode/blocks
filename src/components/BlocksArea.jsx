import './BlocksArea.css';
import React from 'react';

const BlocksArea = ({ blocks, selectedBlock, handleSelectBlock }) => (
  <div className='Container'>
    <div className='GridContainer'>
      {Object.keys(blocks).map((blockId) => {
        const block = blocks[blockId];
        return (
          <div
            key={blockId}
            className='GridItem'
            style={{
              background: selectedBlock === blockId ? 'yellow' : 'white',
              marginLeft: block.X,
              marginTop: block.Y,
              position: 'absolute',
              zIndex: blockId,
            }}
            onClick={() => handleSelectBlock(blockId)}
          />
        );
      })}
    </div>
  </div>
);

export default BlocksArea;
