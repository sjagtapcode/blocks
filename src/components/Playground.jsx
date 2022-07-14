import { useRef, useCallback, useState, useEffect } from 'react';
import BlocksArea from './BlocksArea';
import BlockInfo from './BlockInfo';
import Operations from './Operations';
import './Playground.css';
import { MAX_HEIGHT, MAX_WIDTH, SPEED, Keys } from '../utils/constants';
import { minMax, getRandomNumber } from '../utils';

const Playground = () => {
  const [blocks, setBlocks] = useState({
    [Date?.now()]: {
      X: 0,
      Y: 0,
    },
  });
  const [selectedBlock, setSelectedBlock] = useState(0);
  const [error, setError] = useState('');
  const selectedBlockRef = useRef(0);
  const [toggleBlocks, setToggleBlocks] = useState(true);

  const handleAddBlock = () => {
    const id = Date?.now();
    setBlocks((prev) => ({
      ...prev,
      [id]: {
        X: getRandomNumber(MAX_WIDTH / SPEED) * SPEED,
        Y: getRandomNumber(MAX_HEIGHT / SPEED) * SPEED,
      },
    }));
    // handleSelectBlock(id);
  };
  const handleSelectBlock = (id) => {
    setSelectedBlock(id);
    selectedBlockRef.current = id;
  };
  const handleKeyPress = useCallback((event) => {
    setError('');
    const currentSelectedBlock = selectedBlockRef?.current || 0;
    if (currentSelectedBlock === 0) {
      setError('No Block Selected!');
      return;
    }
    switch (event?.key) {
      case Keys.S: // move down
      case Keys.s: // move down
        setBlocks((prevBlocks) => ({
          ...prevBlocks,
          [currentSelectedBlock]: {
            X: prevBlocks[currentSelectedBlock]?.X,
            Y: minMax(
              prevBlocks[currentSelectedBlock]?.Y + SPEED,
              0,
              MAX_HEIGHT
            ),
          },
        }));
        break;
      case Keys.W: // move up
      case Keys.w: // move up
        setBlocks((prevBlocks) => ({
          ...prevBlocks,
          [currentSelectedBlock]: {
            X: prevBlocks[currentSelectedBlock]?.X,
            Y: minMax(
              prevBlocks[currentSelectedBlock]?.Y - SPEED,
              0,
              MAX_HEIGHT
            ),
          },
        }));
        break;
      case Keys.A: // move left
      case Keys.a: // move left
        setBlocks((prevBlocks) => ({
          ...prevBlocks,
          [currentSelectedBlock]: {
            Y: prevBlocks[currentSelectedBlock]?.Y,
            X: minMax(
              prevBlocks[currentSelectedBlock]?.X - SPEED,
              0,
              MAX_HEIGHT
            ),
          },
        }));
        break;
      case Keys.D: // move right
      case Keys.d: // move right
        setBlocks((prevBlocks) => ({
          ...prevBlocks,
          [currentSelectedBlock]: {
            Y: prevBlocks[currentSelectedBlock]?.Y,
            X: minMax(
              prevBlocks[currentSelectedBlock]?.X + SPEED,
              0,
              MAX_HEIGHT
            ),
          },
        }));
        break;
      case Keys.DELETE: // delete box
        setBlocks((prev) => {
          handleSelectBlock(0);
          const newBlocks = {
            ...prev,
          };
          delete newBlocks[currentSelectedBlock];
          return newBlocks;
        });
        break;
      default:
        setError('Invalid Keypress!');
    }
  }, []);

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
  }, []);

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
