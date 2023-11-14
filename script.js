function indexOfIgnoreCase(str, subStr) {
  // Check for edge cases like empty strings or empty subStr
  if (!str || !subStr) {
    return -1;
  }

  // Convert both strings to lowercase for case-insensitive comparison
  const lowerStr = str.toLowerCase();
  const lowerSubStr = subStr.toLowerCase();

  // Use indexOf to find the index of the lowercase subStr in the lowercase str
  const index = lowerStr.indexOf(lowerSubStr);

  return index;
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));