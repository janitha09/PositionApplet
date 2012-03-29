var myhardware = {};
myhardware.Server = function(){
    this.positionQueue = [];
};
myhardware.Server.prototype.getNextPosition = function(index){
    return this.positionQueue[index];
}
myhardware.Server.prototype.setNextPosition = function(pos){
    if (typeof AndroidInterface == "undefined"){
        this.androidInterfaceIsUndefined(pos);
        return;
    }
    else if (pos!=null){
        var positionJSONString = JSON.stringify(pos);
        AndroidJavaInterface.setPosition(positionJSONString);
    }
    var jsonStringPosFromAndroid = AndroidJavaInterface.getPosition();
    var androidPosJsonObject = JSON.parse(jsonStringPosFromAndroid);
    var androidPosJsonObjectConvertedToGeoPosition = 
        new mygps.GeoPosition(androidPosJsonObject.latitude, 
        androidPosJsonObject.longitude, androidPosJsonObject.bearing, 
        androidPosJsonObject.altitude, androidPosJsonObject.altitudeAngle);
    this.positionQueue.push(androidPosJsonObjectConvertedToGeoPosition);
}
myhardware.Server.prototype.getPositionQueueSize = function(){
    return this.positionQueue.length;
}
myhardware.Server.prototype.incrementCounter = function(){
    return AndroidJavaInterface.incrementCounter();
}
myhardware.Server.prototype.androidInterfaceIsUndefined = function(pos){
    if (pos==null){
        return;
    }
    else if (pos!=null){
        this.positionQueue.push(pos);
        return;
    }
}