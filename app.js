function getlocation() {
    if(navigator.getlocation){
        navigator.getlocation.getcurrentposition(showpostion);

    }else {
        console.log("noooooo");
    }
}
function showpostion(Pos) {
    console.log(Pos)
    var lat = pos.coords.latitude;
    var log = pos.coords.longitude;
}