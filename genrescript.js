function getMoodFromUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('mood');
}

//Obtain mood from URL param
//Once obtained, update genre button links with mood param
const mood = getMoodFromUrl();
document.getElementById('elec-link').href = `songselector.html?mood=${mood}&genre=electronic`;
document.getElementById('hip-hop-link').href = `songselector.html?mood=${mood}&genre=hiphop`;
document.getElementById('pop-link').href = `songselector.html?mood=${mood}&genre=pop`;
document.getElementById('country-link').href = `songselector.html?mood=${mood}&genre=country`;
