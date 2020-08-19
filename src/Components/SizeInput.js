import React from 'react';

const SizeInput = (props) => {

    const {dimensions, setDimensions} = props;

    return ( 
        <div className="row input-group">
            <div className="input-group-prepend">
                <span className="input-group-text">Enter board dimensions: </span> 
            </div>
            <input className="form-control" required type="number" value={dimensions} onChange={e => setDimensions(e.target.value)} />
        </div>
        
     );
}
 
export default SizeInput;