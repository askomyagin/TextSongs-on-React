import React from "react";
import './artist-profile-item.css';
import { Link } from 'react-router-dom';

const ArtistProfileItem = ({artist, albums, songs}) => {
    artist = artist[0];

    return(
        <div className="features">
            <div className="features-header">
                <i>{artist.name}</i>
            </div>

            <div className="conteiner">
                <div className="foto-star">
                    <img src={artist.coverImage} alt={artist.name} width="450" height="300"/>
                </div>
                <div className="description-star">
                    <i>
                        {artist.description}
                    </i>
                </div>
            </div>

            <div className="features-header">
                <i>Альбомы</i>
            </div>
            {
                albums.map((album)=>{
                    return(
                        <div className="album-list" key={album.titleAlbum}>
                            <i className="album-title">{album.titleAlbum}, {album.year} год</i>
                            <div className="album-info">
                                <div className="foto-album">
                                    <img src={album.logo} alt={album.titleAlbum} width="200" height="200"/>
                                </div>
                                <div className="songs">
                                    {songs.map((song)=>{
                                        if(song.album === album.titleAlbum){
                                            return(
                                                <Link to={`${song.en_title}`}>
                                                    <div className="song" key={song.titleSong}>
                                                        <i>{song.titleSong}</i>
                                                    </div>
                                                </Link>
                                            );
                                        }
                                    })}
                                </div>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default ArtistProfileItem;