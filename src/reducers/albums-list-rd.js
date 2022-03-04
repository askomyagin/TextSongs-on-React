const updateAlbumsList = (state, action) => {

    if (state === undefined){
        return {
            albums: [],
            loadingAlbums: true,
            errorAlbums: null
        };
    }
    switch(action.type){
        case 'FETCH_ALBUMS_REQUEST':
            return{
                albums: [],
                loadingAlbums:true,
                errorAlbums: null,
            };
        case 'FETCH_ALBUMS_SUCCESS':
            return{
                albums: action.payload,
                loadingAlbums: false,
                errorAlbums: null
            };
        case 'FETCH_ALBUMS_FAILURE':
            return{
                albums: [],
                loadingAlbums: false,
                errorAlbums: action.payload
            };
        default: 
            return state.albumsList;
    }
};

export default updateAlbumsList;