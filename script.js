function getMoodFromUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('mood');
}
