
function getParams() {
  const urlParams = new URLSearchParams(window.location.search);
  return {
    mood: urlParams.get('mood'),
    genre: urlParams.get('genre')
  };
}

const { mood, genre } = getParams();
const heading = document.getElementById('selection-heading');
const songContainer = document.getElementById('song-container');

heading.textContent = `Here's some ${genre} songs I'd recommend if you're feeling ${mood} :`;

const songs = {
  happy: {
    electronic: ["Happy - Pharrell Williams", "Walking on Sunshine - Katrina and the Waves"],
    hiphop: ["Smile - Nat King Cole", "Count on Me - Bruno Mars"],
    pop: ["Eye of the Tiger - Survivor", "Can’t Hold Us - Macklemore & Ryan Lewis"],
    rockmetal: ["On Top of the World - Imagine Dragons", "Send Me on My Way - Rusted Root"]
  },
  sad: {
    electronic: ["Don't Worry, Be Happy - Bobby McFerrin", "Here Comes the Sun - The Beatles"],
    hiphop: ["Someone Like You - Adele", "Stay - Rihanna"],
    pop: ["Fix You - Coldplay", "The Scientist - Coldplay"],
    rockmetal: ["Everybody Hurts - R.E.M.", "Let Her Go - Passenger"]
  },
  excited: {
    electronic: ["Don't Worry, Be Happy - Bobby McFerrin", "Here Comes the Sun - The Beatles"],
    hiphop: ["Someone Like You - Adele", "Stay - Rihanna"],
    pop: ["Fix You - Coldplay", "The Scientist - Coldplay"],
    rockmetal: ["Everybody Hurts - R.E.M.", "Let Her Go - Passenger"]
  },
  motivated: {
    electronic: ["Don't Worry, Be Happy - Bobby McFerrin", "Here Comes the Sun - The Beatles"],
    hiphop: ["Someone Like You - Adele", "Stay - Rihanna"],
    pop: ["Fix You - Coldplay", "The Scientist - Coldplay"],
    rockmetal: ["Everybody Hurts - R.E.M.", "Let Her Go - Passenger"]
  }
};

function displaySongs(songs) {
  const songContainer = document.getElementById('song-container');
  
  // Clear the song container (in case the page is reloaded)
  songContainer.innerHTML = '';

// Check if there are songs for the selected mood and genre, and display them
if (songs[mood] && songs[mood][genre]) {
  const songList = songs[mood][genre];
  songList.forEach(song => {
    const songCard = document.createElement('div');
    songCard.classList.add('song-suggestion');

    const songTitleAndName = document.createElement('div');
    songTitleAndName.classList.add('song-title-and-name');
    songTitleAndName.textContext = song;
    songCard.appendChild(songTitleAndName);
    songContainer.appendChild(songCard);
  });
} else {
  songContainer.textContent = "No songs available for this selection.";
}
}
displaySongs(songs);
