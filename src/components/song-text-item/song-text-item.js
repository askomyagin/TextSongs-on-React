import React from "react";
import './song-text-item.css';
import { Link } from 'react-router-dom';


export default class SongTextItem extends React.Component{
    
    render(){
        const {songs} = this.props;
        const song = songs[0];

        function NameArtist(props){
            if(song.feat){
                return(
                    <div className="name-artist">
                        <i>Исполнитель - </i>
                        <Link  to={`/artists/${song.en_artist}`} >
                            <div className="name-true-artist">
                                <i>{song.artist}</i>
                            </div>
                        </Link>
                        <i>.Feat</i>
                        <div className="feat-artist">
                            <Link to={`/artists/${song.en_feat}`}>
                                <i className="feat-artist">({song.en_feat})</i>
                            </Link>
                        </div>
                    </div>
                )
            }
            else{
                return(
                    <div className="name-artist">
                        <i>Исполнитель -</i>
                        <Link  to={`/artists/${song.en_artist}`}>
                            <div className="name-true-artist">
                                <i>{song.artist}</i>
                            </div>
                        </Link>
                    </div>
                )
            }
        }

        return(
            <div className="page-song-text">
                <div className="title-song-text">
                    <i>{song.titleSong}</i>
                </div>
                <div className="song-album">
                    <i>Album - {song.album}</i>
                </div>
                <NameArtist song={song}/>
                <div className="text-song">
                    <i>{song.text}</i>
                </div>
            </div>
        )
    }
}