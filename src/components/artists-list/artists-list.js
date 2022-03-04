import React, {Component, useState} from "react";
import ArtistListItem from '../artist-list-item';
import {connect} from 'react-redux';
import { withArtistService } from '../hoc';
import { fetchArtists } from '../../actions';
import { compose } from '../../utilis';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import './artists-list.css';
import SearchBar from "../search";


const ArtistsList = ({artists})=>{

    const [value, setValue] = useState('');

    const filteredArtists = artists.filter(artist =>{
        return artist.name.toLowerCase().includes(value.toLowerCase())
    })

    return (
        <div className="artists-list">
            <SearchBar
            placeholder="Search Artists"
            onChange={(e) => setValue(e.target.value)}
            /> 
            <i className="artist-title">Исполнители</i>
            {
                filteredArtists.map((artist)=>{
                    return(
                        <div key={artist.id}>
                            <ArtistListItem artist={artist}/>
                        </div>
                    );
                })
            }
        </div>
    );
};


class ArtistsListContainer extends Component{

    componentDidMount(){
        this.props.fetchArtists();
    };

    render(){
        const {artists, loadingArtists, errorArtists} = this.props;
        if (loadingArtists){
            return <Spinner />
        }

        if (errorArtists){
            return <ErrorIndicator />
        }

        return <ArtistsList artists={artists} />
    };
};

const mapStateToProps = ({artistsList: {artists, loadingArtists, errorArtists}}) => {
    return {artists, loadingArtists, errorArtists};
};

const mapDispatchToProps = (dispatch, {artistService, artistName}) => {
    return {
        fetchArtists: fetchArtists(artistService, dispatch, artistName)
    };
};

export default compose(
    withArtistService(),
    connect(mapStateToProps, mapDispatchToProps)
)(ArtistsListContainer);