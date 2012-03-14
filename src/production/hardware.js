/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

var myhardware = {};
myhardware.Server = function(){
    //    this.latitude=0.0;
    //    this.longitude=0.0;
    //    this.altitude = 0.0;
    //    this.altitudeAngle = 0.0;
    //    this.bearing = 0.0
    this.positionQueue =[];
};
//myhardware.Server.prototype.getLatitude = function(){
//    return this.latitude;
//}
//myhardware.Server.prototype.getLongitude = function(){
//    return this.longitude;
//}
//myhardware.Server.prototype.getAltitude = function(){
//    return this.altitude;
//}
//myhardware.Server.prototype.getAltitudeAngle = function(){
//    return this.altitudeAngle;
//}
//myhardware.Server.prototype.getBearing = function(){
//    return this.bearing;
//}
myhardware.Server.prototype.getNextPosition = function(){
    return this.positionQueue.shift();
}
//myhardware.Server.prototype.setLatitude = function(lat){
//    //assumes that lat long angle and alt aren't bogus
//    this.latitude = lat;
//}
//myhardware.Server.prototype.setLongitude = function(lon){
//    this.longitude = lon;
//}
//myhardware.Server.prototype.setAltitude = function(alt){
//    this.altitude = alt;
//}
//myhardware.Server.prototype.setAltitudeAngle = function(angle){
//    this.altitudeAngle = angle;
//}
//myhardware.Server.prototype.setBearing = function(angle){
//    this.bearing = angle;
//}
myhardware.Server.prototype.setNextPosition = function(pos){
    //assume that this happens on a screen click or refresh
    //execute geo fix lat lon alt on the emulator
    //get that info from the emulator has to be a URL request
    //otherwise it needs to be an applet
    //telnet localhost 5554
    //geo position pos.getLatitude() pos.getLongitude() pos.getAltitude();
    //create a position object from the response of the     var xmlHttp = null; 
    if (pos!=null){
        var positionJSONString = JSON.stringify(pos);
        AndroidJavaInterface.setPosition(positionJSONString);
    }
    var jsonStringPosFromAndroid = AndroidJavaInterface.getPosition();
    //console.log("hardware.js" + jsonStringPosFromAndroid);//is it going be GeoPosition object?
    var androidPosJsonObject = JSON.parse(jsonStringPosFromAndroid);
    var anotherpos = new mygps.GeoPosition(androidPosJsonObject.latitude, 
        androidPosJsonObject.longitude, androidPosJsonObject.bearing, 
        androidPosJsonObject.altitude, androidPosJsonObject.altitudeAngle);
    this.positionQueue.push(anotherpos);
}

//myhardware.Server.prototype.setNextPosition = function(pos){
//        this.positionQueue.push(pos);
//}
myhardware.Server.prototype.incrementCounter = function(){
    return AndroidJavaInterface.incrementCounter();
}