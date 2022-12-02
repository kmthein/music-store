import React from 'react'

const Card = ({songs}) => {
  console.log(songs);
  document.addEventListener('play', (event) => {
    const audio = document.getElementsByTagName('audio');
    for (let i = 0; i < audio.length; i++) {
        if (audio[i] !== event.target) {
            audio[i].pause();
        }
    }
}, true)

  return (
    <>
      {
        songs !== '' ?
        songs.map((song) => {
          return (
            <div className='bg-zinc-900 track'>
                <header>
                  <img src={song.artworkUrl100} alt="" />
                  <h3>{song.artistName}</h3>
                  <p>{song.trackName}</p>
                </header>
                <audio controls>
                  <source src={song.previewUrl}></source>
                </audio>
            </div>
          ) 

        }) :
        <div className='bg-zinc-900 track'>
                <h2>Loading..</h2>
            </div>
      }
        
    </>
  )
}

export default Card