import React, {Component} from 'react';

class Movie extends Component {
    componentDidUpdate() {
        console.log('[Movie] DidUpdate');
    }

    shouldComponentUpdate(nextProps, nexState) {
        return nextProps.name !== this.props.name;
    }

    render () {
        return (
            <div className="movie">
                <input type="text" value={this.props.name} onChange={this.props.onChangeMovie}/>
                <input type="button" value="Delete" className="btn" onClick={this.props.onRemoveMovie}/>
            </div>
        );
    }

};

export default Movie;