import React from "react";
import { Link } from 'react-router-dom';
import './artist-list-item.css'

const ArtistListItem = ({artist}) => {
    console.log(artist);
    const {name, en_name, description, coverImage} = artist;
    const describe = `${description.substring(0,200)}...`;
    return(
        <div className="artist-list-item">
            <div className='artist-cover'>
                <img src = {coverImage} alt='cover' width="230" height="175"/>
            </div>
            <div className="artist-details">
                <Link to={`${en_name}/`}>
                    <div className="artist-name">
                        <i><strong>{name}</strong></i>
                    </div>
                </Link> 
                <div className="artist-description">
                    <i>{describe}</i>
                </div>
                <Link to={`${en_name}/`}>
                    <div className="artist-more-description">
                        <i>Узнать больше...</i>
                    </div>
                </Link> 
            </div>
        </div>
    );
};

export default ArtistListItem;