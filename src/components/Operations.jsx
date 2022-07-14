import './Operations.css';

const Operations = ({ handleAddBlock, handleToggleBlocks, toggleBlocks }) => {
  return (
    <div className='Operations'>
      <button className='button addButton' onClick={handleAddBlock}>
        Add
      </button>
      <button
        className={`button toggleButton${toggleBlocks ? 'Pause' : 'Play'}`}
        onClick={handleToggleBlocks}
      >
        {toggleBlocks ? 'Pause' : 'Play'}
      </button>
    </div>
  );
};

export default Operations;
