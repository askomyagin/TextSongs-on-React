import React from 'react';
import { ArtistServiceConsumer } from '../artist-service-context';

const withArtistService = () => (Wrapped) => {

  return (props) => {
    return (
      <ArtistServiceConsumer>
        {
          (artistService) => {
            return (<Wrapped {...props}
                artistService={artistService}/>);
          }
        }
      </ArtistServiceConsumer>
    );
  }
};

export default withArtistService;