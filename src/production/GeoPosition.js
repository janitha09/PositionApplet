var mygps = {}; 
mygps.GeoPosition = function(latitude,longitude,bearing,altitude,altitudeAngle){
    this.latitude = latitude;
    this.longitude = longitude;
    this.bearing = bearing;
    this.altitude = altitude;
    this.altitudeAngle = altitudeAngle;
}
mygps.GeoPosition.prototype.getLatitude = function(){
    return this.latitude;
}
mygps.GeoPosition.prototype.getLongitude = function (){
    return this.longitude;
}
mygps.GeoPosition.prototype.getBearing = function (){
    return this.bearing;
}
mygps.GeoPosition.prototype.getAltitude = function (){
    return this.altitude;
}
mygps.GeoPosition.prototype.getAltitudeAngle = function (){
    return this.altitudeAngle;
}