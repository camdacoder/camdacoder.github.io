
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
    electronic: [
      { title: "Rainbows and Waterfalls - Pretty Lights", url: "https://www.youtube.com/watch?v=7NSVB-4q3kk" },
      { title: "HyperParadise - Hermitude(Flume Remix)", url: "https://www.youtube.com/watch?v=dIyKy4A4kBU" }
    ],
    hiphop: [
      { title: "Best Day Ever - Mac Miller", url: "https://www.youtube.com/watch?v=NR8UDU57i_8" },
      { title: "Goodlife - Kanye West ft. T-Pain", url: "https://www.youtube.com/watch?v=FEKEjpTzB0Q" }
    ],
    pop: [
      { title: "Party in the USA - Miley Cyrus", url: "https://www.youtube.com/watch?v=M11SvDtPBhA" },
      { title: "I Gotta Feeling - Black Eyes Peas", url: "https://www.youtube.com/watch?v=uSD4vsh1zDA" }
    ],
    country: [
      { title: "Wagon Wheel - Darius Rucker", url: "https://www.youtube.com/watch?v=hvKyBcCDOB4" },
      { title: "Life is a Highway", url: "https://www.youtube.com/watch?v=5tXh_MfrMe0" }
    ]
  },
  sad: {
    electronic: [
      { title: "Happy - Pharrell Williams", url: "https://www.youtube.com/watch?v=ZbZSe6N_BXs" },
      { title: "Walking on Sunshine - Katrina and the Waves", url: "https://www.youtube.com/watch?v=K7Wb3k1HvxA" }
    ],
    hiphop: [
      { title: "Sucker For Pain - Wiz Khalifa", url: "https://www.youtube.com/watch?v=-59jGD4WrmE" },
      { title: "Count on Me - Bruno Mars", url: "https://www.youtube.com/watch?v=Yg3Rz4gp5nA" }
    ],
    pop: [
      { title: "Eye of the Tiger - Survivor", url: "https://www.youtube.com/watch?v=btPJPFnesV4" },
      { title: "Can’t Hold Us - Macklemore & Ryan Lewis", url: "https://www.youtube.com/watch?v=2zNSgSzhD1A" }
    ],
    country: [
      { title: "Landslide - Fleetwood Mac", url: "https://www.youtube.com/watch?v=mXonGAEPQp8" },
      { title: "Whiskey Lullaby - Brad Paisley", url: "https://www.youtube.com/watch?v=IZbN_nmxAGk" }
    ]
  },
  excited: {
    electronic: [
      { title: "Happy - Pharrell Williams", url: "https://www.youtube.com/watch?v=ZbZSe6N_BXs" },
      { title: "Walking on Sunshine - Katrina and the Waves", url: "https://www.youtube.com/watch?v=K7Wb3k1HvxA" }
    ],
    hiphop: [
      { title: "Smile - Nat King Cole", url: "https://www.youtube.com/watch?v=VwHySCbYjMI" },
      { title: "Count on Me - Bruno Mars", url: "https://www.youtube.com/watch?v=Yg3Rz4gp5nA" }
    ],
    pop: [
      { title: "Eye of the Tiger - Survivor", url: "https://www.youtube.com/watch?v=btPJPFnesV4" },
      { title: "Can’t Hold Us - Macklemore & Ryan Lewis", url: "https://www.youtube.com/watch?v=2zNSgSzhD1A" }
    ],
    country: [
      { title: "On Top of the World - Imagine Dragons", url: "https://www.youtube.com/watch?v=Pyf4NqPvbMw" },
      { title: "Send Me on My Way - Rusted Root", url: "https://www.youtube.com/watch?v=2hT8WgqicbI" }
    ]
  },
  motivated: {
    electronic: [
      { title: "Happy - Pharrell Williams", url: "https://www.youtube.com/watch?v=ZbZSe6N_BXs" },
      { title: "Walking on Sunshine - Katrina and the Waves", url: "https://www.youtube.com/watch?v=K7Wb3k1HvxA" }
    ],
    hiphop: [
      { title: "Smile - Nat King Cole", url: "https://www.youtube.com/watch?v=VwHySCbYjMI" },
      { title: "Count on Me - Bruno Mars", url: "https://www.youtube.com/watch?v=Yg3Rz4gp5nA" }
    ],
    pop: [
      { title: "Eye of the Tiger - Survivor", url: "https://www.youtube.com/watch?v=btPJPFnesV4" },
      { title: "Can’t Hold Us - Macklemore & Ryan Lewis", url: "https://www.youtube.com/watch?v=2zNSgSzhD1A" }
    ],
    country: [
      { title: "On Top of the World - Imagine Dragons", url: "https://www.youtube.com/watch?v=Pyf4NqPvbMw" },
      { title: "Send Me on My Way - Rusted Root", url: "https://www.youtube.com/watch?v=2hT8WgqicbI" }
    ]
  }
};

const selectedSongs = songs[mood][genre];

function displaySongs(songs) {
  const songContainer = document.getElementById('song-container');
  
  // Clear the song container first (in case there are old songs)
  songContainer.innerHTML = '';

  // Loop through each song and create a song card
  songs.forEach(song => {
    // Create a div for the song card
    const songCard = document.createElement('div');
    songCard.classList.add('song-suggestion');

    // Create the song title element
    const songTitle = document.createElement('div');
    songTitle.classList.add('song-title');
    songTitle.textContent = song.title;

    // Create the play button
    const playButton = document.createElement('button');
    playButton.classList.add('play-btn');
    playButton.textContent = 'Play';

    // Add a click event listener to the play button to go to YouTube
    playButton.addEventListener('click', () => {
      window.open(song.url, '_blank'); // Opens the YouTube link in a new tab
    });

    // Append the song title and button to the song card
    songCard.appendChild(songTitle);
    songCard.appendChild(playButton);

    // Append the song card to the container
    songContainer.appendChild(songCard);
  });
}

// Call the function to display the songs
displaySongs(selectedSongs);
