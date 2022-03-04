const updateSongList = (state, action) => {

    if (state === undefined){
        return {
            songs: [],
            loadingSongs: true,
            errorSongs: null
        };
    }
    switch(action.type){
        case 'FETCH_SONGS_REQUEST':
            return{
                songs: [],
                loadingSongs:true,
                errorSongs: null,
            };
        case 'FETCH_SONGS_SUCCESS':
            return{
                songs: action.payload,
                loadingSongs: false,
                errorSongs: null
            };
        case 'FETCH_SONGS_FAILURE':
            return{
                songs: [],
                loadingSongs: false,
                errorSongs: action.payload
            };
        default: 
            return state.songsList;
    }
};

export default updateSongList;