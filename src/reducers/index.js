import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    {
      title: 'Idle town',
      duration: '5:20'
    },
    {
      title: 'Crush Culture',
      duration: '5:10'
    },
    {
      title: 'Checkmates',
      duration: '5:30'
    }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
