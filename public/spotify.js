async function updateSpotify() {
  try {
    const res = await fetch("/api/spotify");
    const data = await res.json();
    const el = document.getElementById("spotify-content");
    if (!el) return;
    if (data.isPlaying) {
      el.innerHTML = `
        <div style="display:flex;gap:12px;align-items:center">
          <img src="${data.albumArt}" alt="Album Art" style="width:72px;height:72px;border-radius:12px;object-fit:cover;border:1px solid #262626" />
          <div>
            <div style="font-weight:700">${data.song ?? ""}</div>
            <div class="muted">${data.artist ?? ""}</div>
          </div>
        </div>`;
    } else {
      el.textContent = "No music playing right now";
    }
  } catch (e) {
    const el = document.getElementById("spotify-content");
    if (el) el.textContent = "Spotify unavailable.";
  }
}
updateSpotify();
setInterval(updateSpotify, 30000);
