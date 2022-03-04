import updateArtistList from "./artist-list";
import updateSongList from "./song-list-rd";
import updateAlbumsList from "./albums-list-rd";


const reduser = (state, action) => {
    return{
        artistsList: updateArtistList(state, action),
        songsList: updateSongList(state, action),
        albumsList: updateAlbumsList(state, action)
    }
};


export default reduser;