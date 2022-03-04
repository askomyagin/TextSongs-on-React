const updateArtistList = (state, action) => {

    if (state === undefined){
        return {
            artists: [],
            loadingArtists: true,
            errorArtists: null
        };
    }
    switch(action.type){
        case 'FETCH_ARTISTS_REQUEST':
            return{
                artists: [],
                loadingArtists:true,
                errorArtists: null,
            };
        case 'FETCH_ARTISTS_SUCCESS':
            return{
                artists: action.payload,
                loadingArtists: false,
                errorArtists: null
            };
        case 'FETCH_ARTISTS_FAILURE':
            return{
                artists: [],
                loadingArtists: false,
                errorArtists: action.payload
            };
        default: 
            return state.artistsList;
    }
};

export default updateArtistList;