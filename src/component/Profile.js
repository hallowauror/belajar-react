import React, { Component } from 'react';
import ImageAvatars from './ImageAvatars';
import SimpleExpansionPanel from './SimpleExpansionPanel';

class Profile extends Component {
    render() {
        return (
            <div>
                <ImageAvatars></ImageAvatars>
                <h2>About me?</h2>
                <hr />
                <SimpleExpansionPanel></SimpleExpansionPanel>
            </div>
        );
    }
}

export default Profile;