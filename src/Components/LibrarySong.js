import React from "react";

const LibrarySong = ({
  song,
  songs,
  setSongs,
  setCurrentSong,
  audioRef,
  isPlaying,
}) => {
  const songSelectHandler = async () => {
    setCurrentSong(song);
    //Add active state
    const newSongs = songs.map((stateSong) => {
      if (stateSong.id === song.id) {
        return {
          ...stateSong,
          active: true,
        };
      } else {
        return {
          ...stateSong,
          active: false,
        };
      }
    });
    await setSongs(newSongs);
    if (isPlaying) audioRef.current.play();
  };
  return (
    <div
      className={`library-song ${song.active ? "selected" : ""}`}
      onClick={songSelectHandler}
    >
      <img src={song.cover} alt={song.name}></img>
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
