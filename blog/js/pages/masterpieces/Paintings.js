import React from 'react';

import TinyPhotoBox from '../../components/box/TinyPhotoBox';
import PaintingStore from '../../stores/PaintingStore';
import PaintingActions from '../../actions/PaintingActions';
import ObjectAssign from 'object-assign';

import SeparateLine from '../../components/line/SeparateLine';

class Paintings extends React.Component {
    constructor(props) {
        super(props);
        this.styles = styles;
        this.state = {
            paintings: []
        }
        this.getPaintings = this.getPaintings.bind(this);
    }
	componentWillMount() {
		PaintingStore.on('add', this.getPaintings);
		PaintingStore.on('init', this.getPaintings);
	}
	componentDidMount() {
        this.initPainting();
	}
    componentWillUnmount() {
        PaintingStore.removeListener('add', this.getPaintings);
        PaintingStore.removeListener('init', this.getPaintings);
    }
	initPainting() {
        PaintingActions.initPainting();
	}
    getPaintings() {
        this.setState({
            paintings: PaintingStore.getAll()
        });
    }
    render() {
        return (
        	<div style={this.styles.mainArea}>
                <div>
			       <TinyPhotoBox boxSize={{width: '100%', height: 'none'}} 
                                photoSize={{width: '100px', height: 'none'}} 
                                photoListSize={{width: '100%'}} 
                                paintings={this.state.paintings} />
			    </div>
        	</div>
        );
    }
};

let styles = {
    mainArea: {
        display: "block",
        width: "100%",
    }
};

module.exports = Paintings;
