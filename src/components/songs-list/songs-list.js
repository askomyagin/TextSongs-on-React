import React, {Component, useState} from "react";
import {connect} from 'react-redux';
import './songs-list.css';
import { withArtistService } from '../hoc';
import { fetchSongs, fetchArtists } from '../../actions';
import { compose } from '../../utilis';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import SongsListItem from "../songs-list-item";
import SearchBar from "../search";

const SongsList = ({songs, artists}) => {
    const [value, setValue] = useState('');

    const filteredSongs = songs.filter(song =>{
        return song.titleSong.toLowerCase().includes(value.toLowerCase())
    })

    return (
        <div className="songs-list-container">
            <SearchBar
            placeholder="Search Songs"
            onChange={(e) => setValue(e.target.value)}
            /> 
            <i className="page-title">Песни</i>
            {            
                filteredSongs.map(song => {
                    const artistProfile = artists.find(artist=> artist.name === song.artist);
                    return(
                        <div className='songs-list' key={song.titleSong}>
                            <SongsListItem song={song} artistProfile={artistProfile}/>
                        </div>
                   ) 
                })
            }
        </div>
    );
};


class SongsListContainer extends Component{

    componentDidMount(){
        this.props.fetchSongs();
        this.props.fetchArtists();
    };

    render(){
        const {songs, loadingSongs, errorSongs, artists, loadingArtists, errorArtists} = this.props;
        if (loadingSongs || loadingArtists){
            return <Spinner />
        }

        if (errorSongs || errorArtists){
            return <ErrorIndicator />
        }

        return <SongsList songs={songs} artists={artists}/>
    };
};

const mapStateToProps = ({songsList: {songs, loadingSongs, errorSongs}, artistsList: {artists, loadingArtists, errorArtists}}) => {
    return {songs, loadingSongs, errorSongs,artists, loadingArtists, errorArtists};
};

const mapDispatchToProps = (dispatch, {artistService}) => {
    return {
        fetchSongs: fetchSongs(artistService, dispatch),
        fetchArtists: fetchArtists(artistService, dispatch)
    };
};

export default compose(
    withArtistService(),
    connect(mapStateToProps, mapDispatchToProps)
)(SongsListContainer);