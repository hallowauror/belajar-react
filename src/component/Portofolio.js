import React from 'react';
//import axios from 'axios';
import MediaCard from './MediaCard';

class Portofolio extends React.Component {
    /*state = {
        portofolio: []
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                const portofolio = res.data;
                this.setState({ portofolio });
            })
    }*/

    render() {
        return (
            //<ul>
            // {this.state.portofolio.map(porto => <li>{porto.name}</li>)}
            //</ul>
            <div>
                <h2>Portofolio</h2>
                <hr />
                <MediaCard></MediaCard>
            </div>
        );
    }
}

export default Portofolio;