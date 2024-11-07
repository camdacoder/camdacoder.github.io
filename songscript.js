
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

heading.textContent = `Songs for a ${mood} mood with ${genre} vibes`;

const songs = {
  happy: {
    comedy: ["Happy - Pharrell Williams", "Walking on Sunshine - Katrina and the Waves"],
    drama: ["Smile - Nat King Cole", "Count on Me - Bruno Mars"],
    action: ["Eye of the Tiger - Survivor", "Can’t Hold Us - Macklemore & Ryan Lewis"],
    adventure: ["On Top of the World - Imagine Dragons", "Send Me on My Way - Rusted Root"]
  },
  sad: {
    comedy: ["Don't Worry, Be Happy - Bobby McFerrin", "Here Comes the Sun - The Beatles"],
    drama: ["Someone Like You - Adele", "Stay - Rihanna"],
    action: ["Fix You - Coldplay", "The Scientist - Coldplay"],
    adventure: ["Everybody Hurts - R.E.M.", "Let Her Go - Passenger"]
  }
  // Add more moods and genres as needed
};

// Check if there are songs for the selected mood and genre, and display them
if (songs[mood] && songs[mood][genre]) {
  const songList = songs[mood][genre];
  songList.forEach(song => {
    const songItem = document.createElement('p');
    songItem.textContent = song;
    songContainer.appendChild(songItem);
  });
} else {
  songContainer.textContent = "No songs available for this selection.";
}
