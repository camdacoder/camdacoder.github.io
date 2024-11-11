//Locally stored data for song selection. 
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
      { title: "Never Be Like You - Flume", url: "https://www.youtube.com/watch?v=Ly7uj0JwgKg" },
      { title: "Shelter - Porter Robinson", url: "https://www.youtube.com/watch?v=fzQ6gRAEoy0" }
    ],
    hiphop: [
      { title: "Sucker For Pain - Wiz Khalifa", url: "https://www.youtube.com/watch?v=-59jGD4WrmE" },
      { title: "Mockingbird - Eminem", url: "https://www.youtube.com/watch?v=S9bCLPwzSC0" }
    ],
    pop: [
      { title: "Someone Like You - Adele", url: "https://www.youtube.com/watch?v=hLQl3WQQoQ0" },
      { title: "The A-Team - Ed Sheeran", url: "https://www.youtube.com/watch?v=UAWcs5H-qgQ" }
    ],
    country: [
      { title: "Landslide - Fleetwood Mac", url: "https://www.youtube.com/watch?v=mXonGAEPQp8" },
      { title: "Whiskey Lullaby - Brad Paisley", url: "https://www.youtube.com/watch?v=IZbN_nmxAGk" }
    ]
  },
  excited: {
    electronic: [
      { title: "Teleport Massive - Bassnectar", url: "https://www.youtube.com/watch?v=oGCc0WqvVT4" },
      { title: "Now - Bassnectar", url: "https://www.youtube.com/watch?v=p5qdsRFkCoQ" }
    ],
    hiphop: [
      { title: "Lose Yourself - Eminem", url: "https://www.youtube.com/watch?v=xFYQQPAOz7Y" },
      { title: "SICKO MODE - Travis Scott", url: "https://www.youtube.com/watch?v=6ONRf7h3Mdk" }
    ],
    pop: [
      { title: "Blinding Lights - The Weeknd", url: "https://www.youtube.com/watch?v=4NRXx6U8ABQ" },
      { title: "Levitating - Dua Lipa", url: "https://www.youtube.com/watch?v=TUVcZfQe-Kw" }
    ],
    country: [
      { title: "Cruise - Florida Georgia Line", url: "https://www.youtube.com/watch?v=8PvebsWcpto" },
      { title: "Good Time - Alan Jackson", url: "https://www.youtube.com/watch?v=PSROm-vgVRk" }
    ]
  },
  motivated: {
    electronic: [
      { title: "One Thing - Bassnectar", url: "https://www.youtube.com/watch?v=QOjZjqnO50A" },
      { title: "Stay - Zedd/Alessia Cara", url: "https://www.youtube.com/watch?v=yWEK4v9AVKQ" }
    ],
    hiphop: [
      { title: "Empire State of Mind - Jay-Z/Alicia Keys", url: "https://www.youtube.com/watch?v=vk6014HuxcE" },
      { title: "Stronger - Kanye West", url: "https://www.youtube.com/watch?v=PsO6ZnUZI0g" }
    ],
    pop: [
      { title: "Eye of the Tiger - Survivor", url: "https://www.youtube.com/watch?v=btPJPFnesV4" },
      { title: "Rise - Katy Perry", url: "https://www.youtube.com/watch?v=hdw1uKiTI5c" }
    ],
    country: [
      { title: "Live Like You Were Dying", url: "https://www.youtube.com/watch?v=_9TShlMkQnc" },
      { title: "My Wish - Rascal Flatts", url: "https://www.youtube.com/watch?v=NSWTZllisl0" }
    ]
  }
};

const { mood, genre } = getParams();
const heading = document.getElementById('selection-heading');
const songContainer = document.getElementById('song-container');

heading.textContent = `Here's some ${genre} songs I'd recommend if you're feeling ${mood} :`;

const selectedSongs = songs[mood][genre];

displaySongs(selectedSongs);

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

function getParams() {
  const urlParams = new URLSearchParams(window.location.search);
  return {
    mood: urlParams.get('mood'),
    genre: urlParams.get('genre')
  };
}
