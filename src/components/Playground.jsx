import { useCallback, useState, useEffect } from 'react';
import BlocksArea from './BlocksArea';
import BlockInfo from './BlockInfo';
import Operations from './Operations';
import './Playground.css';
import { MAX_HEIGHT, MAX_WIDTH, SPEED, Keys } from '../utils/constants';
import { minMax, getRandomNumber } from '../utils';

const Playground = () => {
  const [blocks, setBlocks] = useState([
    {
      id: Date?.now(),
      X: 0,
      Y: 0,
    },
  ]);
  const [selectedBlock, setSelectedBlock] = useState(0);
  const [error, setError] = useState('');
  const [toggleBlocks, setToggleBlocks] = useState(true);

  const handleAddBlock = () => {
    setBlocks((prev) => {
      const newBlocks = [...prev];
      const id = Date?.now();
      newBlocks.push({
        id,
        X: getRandomNumber(MAX_WIDTH / SPEED) * SPEED,
        Y: getRandomNumber(MAX_HEIGHT / SPEED) * SPEED,
      });
      handleSelectBlock(id);
      return newBlocks;
    });
  };
  const handleSelectBlock = (id) => {
    setSelectedBlock(id);
  };
  const handleKeyPress = useCallback(
    (event) => {
      setError('');
      const currentSelectedBlock = selectedBlock || 0;
      if (currentSelectedBlock === 0) {
        setError('No Block Selected!');
        return;
      }
      switch (event?.key) {
        case Keys.S: // move down
        case Keys.s: // move down
          setBlocks((prevBlocks) => {
            const newBlocks = prevBlocks.map((block) =>
              block?.id === currentSelectedBlock
                ? {
                    ...block,
                    Y: minMax(block.Y + SPEED, 0, MAX_HEIGHT),
                  }
                : block
            );
            return newBlocks;
          });
          break;
        case Keys.W: // move up
        case Keys.w: // move up
          setBlocks((prevBlocks) => {
            const newBlocks = prevBlocks.map((block) =>
              block?.id === currentSelectedBlock
                ? {
                    ...block,
                    Y: minMax(block.Y - SPEED, 0, MAX_HEIGHT),
                  }
                : block
            );
            return newBlocks;
          });
          break;
        case Keys.A: // move left
        case Keys.a: // move left
          setBlocks((prevBlocks) => {
            const newBlocks = prevBlocks.map((block) =>
              block?.id === currentSelectedBlock
                ? {
                    ...block,
                    X: minMax(block.X - SPEED, 0, MAX_WIDTH),
                  }
                : block
            );
            return newBlocks;
          });
          break;
        case Keys.D: // move right
        case Keys.d: // move right
          setBlocks((prevBlocks) => {
            const newBlocks = prevBlocks.map((block) =>
              block?.id === currentSelectedBlock
                ? {
                    ...block,
                    X: minMax(block.X + SPEED, 0, MAX_WIDTH),
                  }
                : block
            );
            return newBlocks;
          });
          break;
        case Keys.DELETE: // delete box
          setBlocks((prevBlocks) => {
            const newBlocks = [...prevBlocks].filter(
              ({ id }) => id !== currentSelectedBlock
            );
            handleSelectBlock(0);
            return newBlocks;
          });
          break;
        default:
          setError('Invalid Keypress!');
      }
    },
    [selectedBlock]
  );

  const handleToggleBlocks = useCallback(() => {
    if (toggleBlocks) window.removeEventListener('keydown', handleKeyPress);
    else window.addEventListener('keydown', handleKeyPress);
    setToggleBlocks((prev) => !prev);
  }, [handleKeyPress, toggleBlocks]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <div className='Playground'>
      <div className='PlaygroundItem'>
        <BlockInfo selectedBlock={selectedBlock} error={error} />
      </div>
      <div className='PlaygroundItem'>
        <BlocksArea
          blocks={blocks}
          selectedBlock={selectedBlock}
          handleSelectBlock={handleSelectBlock}
        />
      </div>
      <div className='PlaygroundItem'>
        <Operations
          handleAddBlock={handleAddBlock}
          handleToggleBlocks={handleToggleBlocks}
          toggleBlocks={toggleBlocks}
        />
      </div>
    </div>
  );
};

export default Playground;
