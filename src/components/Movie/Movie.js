import React from 'react';

const Movie = props => {
    return (
        <div className="movie">
            <input type="text" value={props.name} onChange={props.onChangeMovie}/>
            <input type="button" value="Delete" className="btn" onClick={props.onRemoveMovie}/>
        </div>
    );
};

export default Movie;