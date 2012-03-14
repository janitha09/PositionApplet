/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

var myintersect = {}; 
myintersect.Intersection = function() {};

myintersect.Intersection.prototype.getIntersection = function (p1,p2){
    lat1 = p1.getLatitude();
    lon1 = p1.getLongitude();
    lat2 = p2.getLatitude(); 
    lon2 = p2.getLongitude();
    brng13 = p1.getBearing();
    brng23 = p2.getBearing();
    dLat = lat2-lat1;
    dLon = lon2-lon1;
  
    dist12 = 2*Math.asin( Math.sqrt( Math.sin(dLat/2)*Math.sin(dLat/2) + 
        Math.cos(lat1)*Math.cos(lat2)*Math.sin(dLon/2)*Math.sin(dLon/2) ) );
    if (dist12 == 0) return null;
  
    brngA = Math.acos( ( Math.sin(lat2) - Math.sin(lat1)*Math.cos(dist12) ) / 
        ( Math.sin(dist12)*Math.cos(lat1) ) );
    if (isNaN(brngA)) brngA = 0; 
    brngB = Math.acos( ( Math.sin(lat1) - Math.sin(lat2)*Math.cos(dist12) ) / 
        ( Math.sin(dist12)*Math.cos(lat2) ) );
  
    if (Math.sin(lon2-lon1) > 0) {
        brng12 = brngA;
        brng21 = 2*Math.PI - brngB;
    } else {
        brng12 = 2*Math.PI - brngA;
        brng21 = brngB;
    }
  
    alpha1 = (brng13 - brng12 + Math.PI) % (2*Math.PI) - Math.PI;  
    alpha2 = (brng21 - brng23 + Math.PI) % (2*Math.PI) - Math.PI;  
  
    if (Math.sin(alpha1)==0 && Math.sin(alpha2)==0) return null;  
    if (Math.sin(alpha1)*Math.sin(alpha2) < 0) return null; 
  
    alpha3 = Math.acos( -Math.cos(alpha1)*Math.cos(alpha2) + 
        Math.sin(alpha1)*Math.sin(alpha2)*Math.cos(dist12) );
    dist13 = Math.atan2( Math.sin(dist12)*Math.sin(alpha1)*Math.sin(alpha2), 
        Math.cos(alpha2)+Math.cos(alpha1)*Math.cos(alpha3) )
    lat3 = Math.asin( Math.sin(lat1)*Math.cos(dist13) + 
        Math.cos(lat1)*Math.sin(dist13)*Math.cos(brng13) );
    dLon13 = Math.atan2( Math.sin(brng13)*Math.sin(dist13)*Math.cos(lat1), 
        Math.cos(dist13)-Math.sin(lat1)*Math.sin(lat3) );
    lon3 = lon1+dLon13;
    lon3 = (lon3+3*Math.PI) % (2*Math.PI) - Math.PI;
  
    return new mygps.GeoPosition(lat3, lon3,0);

}
