import React, {Component} from "react";
import {connect} from 'react-redux';
import { withArtistService } from '../hoc';
import { fetchSongs } from '../../actions';
import { compose } from '../../utilis';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import SongTextItem from '../song-text-item';
import './song-text.css';

const SongText = ({songs}) => {
    return (
        <div className="container-song-text">
            <SongTextItem songs={songs}/>
        </div>
    );
};


class SongTextContainer extends Component{

    componentDidMount(){
        this.props.fetchSongs();
    };

    render(){
        const {songs, loadingSongs, errorSongs} = this.props;
        if (loadingSongs){
            return <Spinner />
        }

        if (errorSongs){
            return <ErrorIndicator />
        }

        return <SongText songs={songs} />
    };
};

const mapStateToProps = ({songsList: {songs, loadingSongs, errorSongs}}) => {
    return {songs, loadingSongs, errorSongs};
};

const mapDispatchToProps = (dispatch, {artistService, artistName, titleSong}) => {
    return {
        fetchSongs: fetchSongs(artistService, dispatch, artistName, titleSong)
    };
};

export default compose(
    withArtistService(),
    connect(mapStateToProps, mapDispatchToProps)
)(SongTextContainer);