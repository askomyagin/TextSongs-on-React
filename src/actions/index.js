
const artistsRequested = () => {
    return{
        type: 'FETCH_ARTISTS_REQUEST'
    };
};

const artistsLoaded = (newArtists) => {
    return{
        type: 'FETCH_ARTISTS_SUCCESS',
        payload: newArtists
    };
};

const artistsError = (error) => {
    return{
        type: 'FETCH_ARTISTS_FAILURE',
        payload: error
    }
}

const songsRequested = () => {
    return{
        type: 'FETCH_SONGS_REQUEST'
    };
};

const songsLoaded = (newSongs) => {
    return{
        type: 'FETCH_SONGS_SUCCESS',
        payload: newSongs
    };
};

const songsError = (error) => {
    return{
        type: 'FETCH_SONGS_FAILURE',
        payload: error
    }
}

const albumsRequested = () => {
    return{
        type: 'FETCH_ALBUMS_REQUEST'
    };
};

const albumsLoaded = (newArtists) => {
    return{
        type: 'FETCH_ALBUMS_SUCCESS',
        payload: newArtists
    };
};

const albumsError = (error) => {
    return{
        type: 'FETCH_ALBUMS_FAILURE',
        payload: error
    }
}

const fetchAlbums = (ArtistService, dispatch,artistName) => () => {

    dispatch(albumsRequested());

    ArtistService.getAlbums(artistName)
        .then((data)=>dispatch(albumsLoaded(data)))
        .catch((err) => dispatch(albumsError(err)));
};

const fetchArtists = (ArtistService, dispatch, artistName) => () => {

    dispatch(artistsRequested());

    ArtistService.getArtists(artistName)
        .then((data)=>dispatch(artistsLoaded(data)))
        .catch((err) => dispatch(artistsError(err)));
};

const fetchSongs = (ArtistService, dispatch,artistName,titleSong) => () => {

    dispatch(songsRequested());

    ArtistService.getSongs(artistName, titleSong)
        .then((data)=>dispatch(songsLoaded(data)))
        .catch((err) => dispatch(songsError(err)));
};

export {
  fetchArtists,
  fetchSongs,
  fetchAlbums
};