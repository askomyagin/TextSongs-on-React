import React, {Component} from "react";
import {connect} from 'react-redux';
import { withArtistService } from '../hoc';
import { fetchArtists, fetchAlbums, fetchSongs } from '../../actions';
import { compose } from '../../utilis';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import ArtistProfileItem from "../artist-profile-item";
import './artist-profile.css';

const ArtistProfile = ({artists, songs, albums}) => {
    return (
        <ul className="artist-profile">
            <div>
                <ArtistProfileItem artist={artists} albums={albums} songs={songs}/>
            </div>
        </ul>
    );
};


class ArtistsProfileContainer extends Component{

    componentDidMount(){
        this.props.fetchSongs();
        this.props.fetchArtists();
        this.props.fetchAlbums();
    };

    render(){
        const {
            artists, loadingArtists, errorArtists,
            songs, loadingSongs, errorSongs,
            albums, loadingAlbums, errorAlbums } = this.props;
            
        if (loadingArtists || loadingSongs || loadingAlbums){
            return <Spinner />
        }

        if (errorArtists || errorSongs || errorAlbums){
            return <ErrorIndicator />
        }

        return <ArtistProfile artists={artists} songs={songs} albums={albums}/>
    };
};

const mapStateToProps = ({
    artistsList: {artists, loadingArtists, errorArtists},
    songsList: {songs, loadingSongs, errorSongs},
    albumsList: {albums, loadingAlbums, errorAlbums}}) => {
    return {artists, loadingArtists, errorArtists,songs, loadingSongs, errorSongs,albums, loadingAlbums, errorAlbums};
};

const mapDispatchToProps = (dispatch, {artistService, artistName}) => {
    return {
        fetchArtists: fetchArtists(artistService, dispatch, artistName),
        fetchSongs: fetchSongs(artistService, dispatch, artistName),
        fetchAlbums: fetchAlbums(artistService, dispatch, artistName)
    };
};

export default compose(
    withArtistService(),
    connect(mapStateToProps, mapDispatchToProps)
)(ArtistsProfileContainer);