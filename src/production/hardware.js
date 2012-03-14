var myhardware = {};
myhardware.Server = function(){
    this.positionQueue =[];
};
myhardware.Server.prototype.getNextPosition = function(){
    return this.positionQueue.shift();
}
myhardware.Server.prototype.setNextPosition = function(pos){
    if (pos!=null){
        var positionJSONString = JSON.stringify(pos);
        AndroidJavaInterface.setPosition(positionJSONString);
    }
    var jsonStringPosFromAndroid = AndroidJavaInterface.getPosition();
    var androidPosJsonObject = JSON.parse(jsonStringPosFromAndroid);
    var anotherpos = new mygps.GeoPosition(androidPosJsonObject.latitude, 
        androidPosJsonObject.longitude, androidPosJsonObject.bearing, 
        androidPosJsonObject.altitude, androidPosJsonObject.altitudeAngle);
    this.positionQueue.push(anotherpos);
}
myhardware.Server.prototype.incrementCounter = function(){
    return AndroidJavaInterface.incrementCounter();
}