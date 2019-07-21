import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
  return song ? <div>{song.title}</div> : <div>Select a song!</div>;
};

const mapStateToProps = state => {
  return {
    song: state.selectedSong
  };
};

export default connect(mapStateToProps)(SongDetail);
