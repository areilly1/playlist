//var songNames = ["Boo'd Up", "Nice For What", "Universe"];
//var songArtists = ["Ella Mai", "Drake", "EXO"];
//var songLength = ["241", "201", "289"];
//var images = [
//   "https://i.ytimg.com/vi/hCR3UbyQ9jc/maxresdefault.jpg",
//   "https://i.ytimg.com/vi/KRaPykuwCiw/maxresdefault.jpg;maxHeight=145;maxWidth=222",
//   "https://pm1.narvii.com/6691/5b465c2eea230b1024fbc27156b7eefabcc77069_hq.jpg"
// ];
// var links = [
//   "https://www.youtube.com/watch?v=6YNZlXfW6Ho",
//   "https://www.youtube.com/watch?v=KRaPykuwCiw",
//   "https://www.youtube.com/watch?v=leu-cTvMWTA"
// ];


// var name = "tester";
// for (var i = 0; i < songNames.length; i++) {
//   $(".songs").append(songNames[i]);
//   $(".artists").append(songArtists[i]);
//   $(".length").append(songLength[i]);
//   $(".imgs").append(`<img src = ${images[i]}>`);
//   $(".lks").append(links[i]);
// }

let songObject = {
  songName: "Boo'd Up",
  songArtist: "Ella Mai",
  songLength: "241",
  images: "https://i.ytimg.com/vi/hCR3UbyQ9jc/maxresdefault.jpg",
  links: "https://www.youtube.com/watch?v=6YNZlXfW6Ho"
}

var songObjects = [songObject]

function  renderHTML () {
for(let song of songObjects)
  {
    $(".songs").append(song.songName + "<br>"
);
    $(".artists").append(song.songArtist + "<br>"
);
    $(".length").append(song.songLength + "<br>"
);
    $(".imgs").append(song.images + "<br>"
);
    $(".lks").append(song.links + "<br>"
);  
  }
}

renderHTML()

function emptyDivs () {
  $(".songs").empty();
  $(".artists").empty();
  $(".length").empty();
  $(".imgs").empty();
  $(".lks").empty();
}

$( ".addSong").click(function() {
  let name = $(".songName").val()
  let artist = $(".songArtist").val()
  let length = $(".songLength").val()
  let image = $(".songImage").val()
  let link = $(".songLink").val()
  
  
  let songObject = {
  songName: name,
  songArtist: artist,
  songLength: length,
  images: image,
  links: link
}
  songObjects.push(songObject)
  emptyDivs() 
  renderHTML()
  
});

