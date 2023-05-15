"use strict";

function towns(array) {
  for (let i = 0; i < array.length; i++) {
    let elements = array[i].split("|");

    console.log(
      `town: ${elements[0]} latitude: '${Number(elements[1]).toFixed(
        2
      )}', longitude: ${Number(elements[2]).toFixed(2)}`
    );
  }
}

towns(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
