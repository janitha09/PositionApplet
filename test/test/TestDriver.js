/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


//GreeterTest = TestCase("GreeterTest");
//GreeterTest.prototype.testGreet = function() {
//    var greeter = new myapp.Greeter();
//    assertEquals("Hello World!", greeter.greet("World"));
//};
//
///*
// * I want to draw line in 3D
// * I need to know the start
// * I need to know the end
// * I need to know the gradient
// * I want to draw some boxes in 3D
// */
//
//DoNothingTest = TestCase("DoNothingTest");
//DoNothingTest.prototype.testDoNothing = function(){
//    assertEquals(0,0);
//}
//
var httpServer = new myhardware.Server();
//var qServer = new myapp.Server();
//LineTest = TestCase("getStartLatitude");
//LineTest.prototype.testGetLatitude = function (){
//    var DataFromServer = new myapp.DataFromServer(httpServer);
//    httpServer.setLatitude(0.0);
//    assertEquals (0,DataFromServer.getLatitude());
//}
//
//LineTest = TestCase("getStartLatitude10");
//LineTest.prototype.testGetLatitude = function (){
//    var DataFromServer = new myapp.DataFromServer(httpServer);
//    httpServer.setLatitude(1.0);
//    assertEquals (1.0,DataFromServer.getLatitude());
//}
//
//LineTest = TestCase("getStartLatitude20");
//LineTest.prototype.testGetLatitude = function (){
//    var DataFromServer = new myapp.DataFromServer(httpServer);
//    httpServer.setLatitude(2.0);
//    assertEquals (2.0,DataFromServer.getLatitude());
//}
//
//LineTest = TestCase("getStartLongitude0");
//LineTest.prototype.testGetLongitude = function (){
//    var DataFromServer = new myapp.DataFromServer(httpServer);
//    httpServer.setLongitude(0.0);
//    assertEquals (0.0,DataFromServer.getLongitude());
//}
//LineTest = TestCase("getStartLongitude2");
//LineTest.prototype.testGetLongitude = function (){
//    var DataFromServer = new myapp.DataFromServer(httpServer);
//    httpServer.setLongitude(2.0);
//    assertEquals (2.0,DataFromServer.getLongitude());
//}
//LineTest = TestCase("getStartAltitude2");
//LineTest.prototype.testGetAltitude = function (){
//    var DataFromServer = new myapp.DataFromServer(httpServer);
//    httpServer.setLongitude(0.0);
//    httpServer.setLatitude(0.0);
//    httpServer.setAltitude(2.0);
//    assertEquals (2.0,DataFromServer.getAltitude());
//}
//LineTest = TestCase("getAngleFromHorizon");
//LineTest.prototype.testGetAngleFromHorizon = function (){
//    var DataFromServer = new myapp.DataFromServer(httpServer);
//    httpServer.setAltitudeAngle(0.0);
//    assertEquals(0.0,DataFromServer.getAltitudeAngle());
//}
//
//LineTest = TestCase("getAngleFromHorizon2");
//LineTest.prototype.testGetAngleFromHorizon = function (){
//    var DataFromServer = new myapp.DataFromServer(httpServer);
//    httpServer.setAltitudeAngle(2.0);
//    assertEquals(2.0,DataFromServer.getAltitudeAngle());
//}
LineTest = TestCase("getLatOnLineAt0_0_0");
LineTest.prototype.testGetLatOnLineAt0_0_0 = function(){
    var DataFromServer = new myapp.DataFromServer(httpServer);
    httpServer.setNextPosition(new mygps.GeoPosition(0,0,0,0,0));
    var pos1 = DataFromServer.getNextPosition();
    
    assertEquals (0, DataFromServer.getLatOnLine(pos1,0));
}
LineTest = TestCase("getLatOnLineAt50_0_0");
LineTest.prototype.testGetLatOnLineAt50_0_0 = function(){
    var DataFromServer = new myapp.DataFromServer(httpServer);
    httpServer.setNextPosition(new mygps.GeoPosition(50*Math.PI/180,0,0,0,0));
    var pos1 = DataFromServer.getNextPosition();
    //httpServer.setLatitude(50*Math.PI/180);
    //httpServer.setBearing(0);
    assertEquals (50*Math.PI/180, DataFromServer.getLatOnLine(pos1,0));
}
LineTest = TestCase("getLatOnLineAt0_0_112");
LineTest.prototype.testGetLatOnLineAt0_0_112 = function(){
    var DataFromServer = new myapp.DataFromServer(httpServer);
    httpServer.setNextPosition(new mygps.GeoPosition(0,0,0,0,0));
    var pos1 = DataFromServer.getNextPosition();
    //httpServer.setLatitude(0);
    //httpServer.setBearing(0);
    assertEquals (0.017454064183553972, DataFromServer.getLatOnLine(pos1,111.2*1000));
}
//http://www.movable-type.co.uk/scripts/latlong.html
LineTest = TestCase("getLonOnLineAt0_0_0");
LineTest.prototype.testGetLonOnLineAt0_0_0 = function(){
    var DataFromServer = new myapp.DataFromServer(httpServer);
    httpServer.setNextPosition(new mygps.GeoPosition(0,0,0,0,0));
    var pos1 = DataFromServer.getNextPosition();
    assertEquals (0.0, DataFromServer.getLonOnLine(pos1,0));
}
LineTest = TestCase("getLonOnLineAt0_0_112");
LineTest.prototype.testGetLonOnLineAt0_0_0 = function(){
    var DataFromServer = new myapp.DataFromServer(httpServer);
    httpServer.setNextPosition(new mygps.GeoPosition(0,0,90*Math.PI/180,0,0));
    //a degree along the equator is at a 90 degree bearing
    var pos1 = DataFromServer.getNextPosition();
    assertEquals (0.01745406418355397, DataFromServer.getLonOnLine(pos1,111.2*1000));
}
LineTest = TestCase ("getAltitudeOnLine0_0_0");
LineTest.prototype.testGetAltitudeOnLineAt0_0_0 = function(){
    var DataFromServer = new myapp.DataFromServer(httpServer);
    httpServer.setNextPosition(new mygps.GeoPosition(0,0,0,0,0));
    var pos1 = DataFromServer.getNextPosition();
    assertEquals(0,DataFromServer.getAltOnLine(pos1,0));
}
LineTest = TestCase ("getAltitudeOnLine0_60_1");
LineTest.prototype.testGetAltitudeOnLineAt0_60_1 = function(){
    var DataFromServer = new myapp.DataFromServer(httpServer);
    httpServer.setNextPosition(new mygps.GeoPosition(0,0,0,0,60*Math.PI/180));
    var pos1 = DataFromServer.getNextPosition();
    assertEquals(1.7320508075688767,DataFromServer.getAltOnLine(pos1,1));
}
LineTest = TestCase ("getAltitudeOnLine1_60_1");
LineTest.prototype.testGetAltitudeOnLineAt1_60_1 = function(){
    var DataFromServer = new myapp.DataFromServer(httpServer);
    httpServer.setNextPosition(new mygps.GeoPosition(0,0,0,1.0,60*Math.PI/180));
    var pos1 = DataFromServer.getNextPosition();
    assertEquals(2.7320508075688767,DataFromServer.getAltOnLine(pos1,1));
}

GeoPositionTest = TestCase ("getLatitude");
GeoPositionTest.prototype.testGetLatitude = function(){
    var pos1 = new mygps.GeoPosition(100,0);
    assertEquals(100,pos1.getLatitude());
}
GeoPositionTest = TestCase ("getLongitude");
GeoPositionTest.prototype.testGetLongitude = function(){
    var pos1 = new mygps.GeoPosition(0,300);
    assertEquals(300,pos1.getLongitude());
}

IntersectionTest = TestCase ("getIntersectionInfinite");
IntersectionTest.prototype.testGetIntersectionInfinite = function (){
   
    httpServer.setNextPosition(new mygps.GeoPosition(0,0,0,0,0));
    httpServer.setNextPosition(new mygps.GeoPosition(0,0,0,0,0));
    var DataFromServer = new myapp.DataFromServer(httpServer);
    var pos1 = DataFromServer.getNextPosition();
    var pos2 = DataFromServer.getNextPosition();
    var CalcIntersect = new myintersect.Intersection();
    assertEquals (null,CalcIntersect.getIntersection(pos1,pos2));
}

IntersectionTest = TestCase ("getIntersectionNEWS");
IntersectionTest.prototype.testGetIntersectionNEWS = function (){
 
    httpServer.setNextPosition(new mygps.GeoPosition(0,10*Math.PI/180,0,0,0));
    httpServer.setNextPosition(new mygps.GeoPosition(0,0,90*Math.PI/180,0,0));
    
    var DataFromServer = new myapp.DataFromServer(httpServer);
    var pos1 = DataFromServer.getNextPosition();
    var pos2 = DataFromServer.getNextPosition();

    var expected = new mygps.GeoPosition(0,0.17453292519943275,0)
    
    var CalcIntersect = new myintersect.Intersection();
    assertEquals (expected,CalcIntersect.getIntersection(pos1,pos2));
}