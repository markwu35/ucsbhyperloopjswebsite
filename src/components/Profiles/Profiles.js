import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import AnimateHeight from 'react-animate-height';
import Avatar from 'react-avatar';
import './Profiles.css'

//Avatar documentation at : https://www.npmjs.com/package/react-avatar
//AnimateHeight documentation at : https://www.npmjs.com/package/react-animate-height

class Profiles extends Component {

    constructor(props) {
        super(props);

        this.state = {
            height: props.height
        }
    }

    renderPictures(numPictures) {
        var pictures = [];
        for (var i = 0; i < numPictures; i++) {
                pictures.push(
                    <Avatar size={200} key={i} src="http://www.gravatar.com/avatar/a16a38cdfe8b2cbd38e8a56ab93238d3" />
                );
            }
        
        return (
            <div className="pictures">{pictures}</div>
        );
    }
    
    onToggleClick(){
        if (this.state.height === 'auto'){
            this.setState({ height: 0 });
        }
        else {
            this.setState({ height: 'auto' });
        }
           
    }

    render() {
        const {height} = this.state;

        return (
            <div>
                <div className='buttons'>
                    <button className='btn btn-sm' onClick={() => {this.onToggleClick();}}>
                        {this.props.title}
                    </button>
                </div>
                <AnimateHeight
                    height={height}
                    duration = { 500 }
                >
                    <div className='content'>
                        {this.renderPictures(this.props.numPictures)}
                    </div>
                </AnimateHeight>

            </div>
        );
    }
};

Profiles.propTypes = {
    height: PropTypes.number,
    numPictures: PropTypes.number,
    title: PropTypes.string
  };
  
Profiles.defaultProps = {
    height: 0,
    numPictures: 1,
    title: "Hello World"
}

export default Profiles;



