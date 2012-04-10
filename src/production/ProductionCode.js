var myapp = {};   
myapp.DataFromServer = function(remoteServer){
    this.pServer = remoteServer;
    this.earthRadius = 6371.009*1000;
};
myapp.DataFromServer.prototype.getLatOnLine = function(locationData,distance){
    var lat1 = locationData.getLatitude();
    var brng = locationData.getBearing();
    var lat2 = Math.asin( Math.sin(lat1)*Math.cos(distance/this.earthRadius) + 
        Math.cos(lat1)*Math.sin(distance/this.earthRadius)*Math.cos(brng) );
    return lat2;
}
myapp.DataFromServer.prototype.getLonOnLine = function (locationData,distance){
    var lon1 = locationData.getLongitude();
    var brng = locationData.getBearing();
    var lat1 = locationData.getLatitude();
    var lat2 = this.getLatOnLine(locationData,distance);
    var lon2 = lon1 + Math.atan2(Math.sin(brng)*Math.sin(distance/this.earthRadius)*Math.cos(lat1), Math.cos(distance/this.earthRadius)-Math.sin(lat1)*Math.sin(lat2));
    return lon2;
}
myapp.DataFromServer.prototype.getAltOnLine = function (locationData,distance){
    return Math.tan(locationData.getAltitudeAngle())*distance + locationData.getAltitude();
}
myapp.DataFromServer.prototype.getNextPosition = function (index){
    return this.pServer.getNextPosition(index);
}
myapp.DataFromServer.prototype.incrementCounter = function (){
    return this.pServer.incrementCounter();
}