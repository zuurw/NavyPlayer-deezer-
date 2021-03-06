import React from 'react';
import { connect } from 'react-redux';
import Login from 'components/Login';
import Nav from 'components/Nav';
import Player from 'components/Player';
import Search from 'components/Search';
import Choose from 'components/Choose';
import Footer from 'components/Footer';
import Artist from 'components/Artist';
import Title from 'components/Title';
import './home.css'

const Home = ({ cover }) => {
    return (
        <div>
            <div
                className="background"
                style={{
                    backgroundImage: `url(${window.innerWidth <= 768 ? cover.replace(/(1000)x\1/, '500x500') : cover})`
                }}
            />
            <div className="home">
                <Nav />
                <Login />
                <Search />
                <Title />
                <main style={{ justifyContent: 'flex-end' }}>
                    <Artist />
                </main>
                <Player />
                <Choose />
                <Footer />
            </div>
        </div>
    );
}

const mapStateToProps = ({ track: { album: { cover_xl } } }) => ({ cover: cover_xl });

export default connect(mapStateToProps)(Home);