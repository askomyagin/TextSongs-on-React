import React from "react";
import { Link } from 'react-router-dom';
import './songs-list-item.css';

const SongsListItem = ({song, artistProfile}) => {
    return(
        <div className="songs-list-item">
            <Link to={`/artists/${artistProfile.en_name}/${song.en_title}`}>
                <div className="title-song">
                    <i>{song.titleSong}</i>
                </div>
            </Link>
            <Link to={`/artists/${artistProfile.en_name}/`}>
                <div className="artist-name">
                    <i>(Исполнитель - {artistProfile.name})</i>
                </div>
            </Link>
        </div>
    );
};

export default SongsListItem;