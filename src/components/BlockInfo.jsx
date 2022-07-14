import './BlockInfo.css';

const BlockInfo = ({ selectedBlock, error }) => {
  return (
    <>
      <div className='SelectedBlock'>
        Selected Block Id:
        <br /> {selectedBlock}
      </div>
      <div className='Error'>
        {error && 'Error'}
        <br /> {error}
      </div>
      <div className='Keylist'>
        <ul>
          <li>W: Move Up</li>
          <li>A: Move Left</li>
          <li>S: Move Down</li>
          <li>D: Move Right</li>
          <li>del: Delete</li>
        </ul>
      </div>
    </>
  );
};

export default BlockInfo;
