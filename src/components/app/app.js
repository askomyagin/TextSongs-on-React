import React from "react";
import Header from "../header";
import {BrowserRouter as Router, Route, Switch, useParams} from 'react-router-dom';
import ArtistsList from '../artists-list';
import SongText from "../song-text";
import ArtistProfile from "../artist-profile";
import './app.css';
import Footer from "../footer";
import SongsList from "../songs-list";

const App = () => {

    function ArtistPost() {
        const { name } = useParams();
        return <ArtistProfile artistName={name}/>;
    }

    function SongPost() {
        const { en_title, name } = useParams();
        return <SongText artistName={name} titleSong={en_title}/>
    }
    
    return (
        <Router>
            <main role = 'main' className='container'>
                <Header/>
                    <Switch>
                        <Route path="/artists/" component={ArtistsList} exact/>
                        <Route path="/songs/" component={SongsList} exact/>
                        <Route path="/artists/:name" component={ArtistPost} exact/>
                        <Route path="/artists/:name/:en_title" component={SongPost} exact/>
                        <Route path="/" render = {()=> <h2>Welcome to Heartleys</h2>} exact />
                        <Route path='/facebook' component={() => {
                            window.location.href = 'https://www.facebook.com/'}} exact/>
                        <Route path='/vk' component={() => {
                            window.location.href = 'http://vk.com/'}} exact/>
                        <Route path='/tw' component={() => {
                            window.location.href = 'https://twitter.com/'}} exact/>
                        <Route render = {()=> <h2>Page not found!</h2>} />

                    </Switch>
                <Footer />
            </main>
        </Router>
    )
};

export default App;