function locationToID(location) {
    let x = location.x;
    let y = location.y;
    x = String.fromCharCode(65 + x - 1);
    return x + y;
}

export default locationToID;
