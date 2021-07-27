function correctSentence(text) {
  let len = text.length; // get the length ( len  1 is the last index)
  let array_text = text.split(""); // converting the string to an array of characters
  if (text[0] != text[0].toUpperCase()) {
    // if first element not UpperCase

    array_text[0] = text[0].toUpperCase(); // to Upper Case the first element
  }
  // in the next condition we will check array_text which is already checked for UpperCase
  if (array_text[len - 1] != ".") {
    // if the last index is not a point
    array_text[len] = "."; // add a new index (index len) and add the point
  }
  let result = array_text.join(""); // after checking the two conditions, we join the elements of the created array

  return result; // now we have a string ready to output
}
