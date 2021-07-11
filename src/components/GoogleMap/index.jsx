import React, { Component } from 'react';
import '../../style/global.scss'
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import PlacesAutocomplete, {
        geocodeByAddress,
        getLatLng,
} from 'react-places-autocomplete';
export class MapContainer extends Component {
        constructor(props) {
                super(props);
                this.state = {
                        address: '',
                        showingInfoWindow: false,
                        activeMarker: {},
                        selectedPlace: {},
                        mapCenter: {
                                lat: -29.36715393377238,
                                lng: -49.933360798102086

                        }
                };
        }
        handleChange = address => {
                this.setState({ address });
        };
        handleSelect = address => {
                this.setState({ address });
                geocodeByAddress(address)
                        .then(results => getLatLng(results[0]))
                        .then(latLng => {
                                console.log('Success', latLng);
                                this.setState({ mapCenter: latLng });
                        })
                        .catch(error => console.error('Error', error));
        };
        render() {
                return (
                        <div id='googleMaps'>
                                <Map
                                        google={this.props.google}
                                        initialCenter={{
                                                lat: this.state.mapCenter.lat,
                                                lng: this.state.mapCenter.lng
                                        }}
                                        center={{
                                                lat: this.state.mapCenter.lat,
                                                lng: this.state.mapCenter.lng
                                        }}
                                >
                                        <Marker
                                                position={{
                                                        lat: this.state.mapCenter.lat,
                                                        lng: this.state.mapCenter.lng
                                                }} />
                                </Map>
                        </div>
                )
        }
}
export default GoogleApiWrapper({
        apiKey: (process.env.YOUR_GOOGLE_API_KEY_GOES_HERE)
})(MapContainer)