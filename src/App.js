import React, { Component } from 'react';
import './App.css';
import './bootstrap.css';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import Button from '@material-ui/core/Button';
import Navbar from './PrimarySearchAppBar';
import Card from './RecipeReviewCard';

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: -7.7742906, lng: 110.374724 }}
    >
        {props.isMarkerShown && <Marker position={{ lat: -7.7742906, lng: 110.374724 }} />}
    </GoogleMap>
))


class App extends Component {

    render() {
        return (
            <div>
                <Navbar>
                    <br>
                        <Card></Card>
                    </br>
                </Navbar>
                <div className="text-center">
                    <br></br>
                    <h1>Google Map with REACT JS</h1>
                    <hr></hr><br></br><br></br>
                </div>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            MAPS
            <div>
                                <MyMapComponent
                                    isMarkerShown
                                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCp_difsopFyvuYa-RmUyZ_JIp66XF1ovQ&v=3.exp&libraries=geometry,drawing,places"
                                    loadingElement={<div style={{ height: `100%` }} />}
                                    containerElement={<div style={{ height: `400px` }} />}
                                    mapElement={<div style={{ height: `100%` }} />}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
