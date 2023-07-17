"use strict";

function barcode(arr) {
  let barcodesAmount = arr.shift();

  for (let barcodes of arr) {
    let pattern = /@#+[A-Z]([A-Za-z0-9]){4,}[A-Z]@#+/g;
    let match = barcodes.match(pattern);
    if (match === null) {
      console.log("Invalid barcode");
    } else {
      let barcode = "";
      for (let letter of match[0]) {
        if (letter.charCodeAt() >= 48 && letter.charCodeAt() <= 57) {
          barcode += letter;
        }
      }
      if (barcode.length === 0) {
        console.log("Product group: 00");
      } else {
        console.log("Product group: " + barcode);
      }
    }
  }
}

barcode([3, "@#FreshFisH@#", "@###Brea0D@###", "@##Che4s6E@##"]);
