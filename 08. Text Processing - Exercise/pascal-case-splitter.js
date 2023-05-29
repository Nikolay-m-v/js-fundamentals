"use strict";

function pascalSplitter(string) {
  string = string.split(/(?=[A-Z])/);
  console.log(string.join(", "));
}

pascalSplitter("SplitMeIfYouCanHaHaYouCantOrYouCan");
