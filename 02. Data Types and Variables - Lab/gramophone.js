"use strict";

function gramophone(str1, str2, str3) {
  let band = String(str1);
  let album = String(str2);
  let song = String(str3);
  let rotation = 2.5;
  let songDuration = (album.length * band.length * song.length) / 2;
  let rotationCounter = songDuration / rotation;

  console.log(`The plate was rotated ${Math.ceil(rotationCounter)} times.`);
}

gramophone("Black Sabbath", "Paranoid", "War pigs");
gramophone("Rammstein", "Sehnsucht", "Engel");
