function getMoodFromUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('mood');
}

const mood = getMoodFromUrl();
document.getElementById('comedy-link').href = `songselector.html?mood=${mood}&genre=comedy`;
document.getElementById('drama-link').href = `songselector.html?mood=${mood}&genre=drama`;
document.getElementById('action-link').href = `songselector.html?mood=${mood}&genre=action`;
document.getElementById('adventure-link').href = `songselector.html?mood=${mood}&genre=adventure`;
