let piece = "KNight";

if (piece.toLowerCase() == "bishop") {
    console.log("diagonal")
}
else if (piece.toLowerCase() == "king") {
    console.log("one square");
}
else if (piece.toLowerCase() == "queen") {
    console.log("x square");
}
else if (piece.toLowerCase() == "rook") {
    console.log("horizontally or vertically");
}
else if (piece.toLowerCase() == "knight") {
    console.log("L shape");
}
else if (piece.toLowerCase() == "pawns") {
    console.log("vertically forward one square");
}
else {
    console.log("invalid")
}