LineTest = TestCase("getLatOnLineAt0_0_0");
LineTest.prototype.testGetLatOnLineAt0_0_0 = function(){
    var httpServer = new myhardware.Server();
    assertEquals(0,httpServer.getPositionQueueSize());
    
    var DataFromServer = new myapp.DataFromServer(httpServer);
    httpServer.setNextPosition(new mygps.GeoPosition(0,0,0,0,0));
    assertEquals(1,httpServer.getPositionQueueSize());
    
    var pos1 = DataFromServer.getNextPosition(0);
    assertEquals(1,httpServer.getPositionQueueSize());
    
    assertEquals (new mygps.GeoPosition(0,0,0,0,0),pos1);
    assertEquals (0, DataFromServer.getLatOnLine(pos1,0));
}
LineTest = TestCase("getLatOnLineAt50_0_0");
LineTest.prototype.testGetLatOnLineAt50_0_0 = function(){
    var httpServer = new myhardware.Server();
    var DataFromServer = new myapp.DataFromServer(httpServer);
    httpServer.setNextPosition(new mygps.GeoPosition(50*Math.PI/180,0,0,0,0));
    var pos1 = DataFromServer.getNextPosition(0);

    assertEquals (50*Math.PI/180, DataFromServer.getLatOnLine(pos1,0));
}
LineTest = TestCase("getLatOnLineAt0_0_112");
LineTest.prototype.testGetLatOnLineAt0_0_112 = function(){
    var httpServer = new myhardware.Server();
    var DataFromServer = new myapp.DataFromServer(httpServer);
    httpServer.setNextPosition(new mygps.GeoPosition(0,0,0,0,0));
    var pos1 = DataFromServer.getNextPosition(0);

    assertEquals (0.017454064183553972, DataFromServer.getLatOnLine(pos1,111.2*1000));
}
//http://www.movable-type.co.uk/scripts/latlong.html
LineTest = TestCase("getLonOnLineAt0_0_0");
LineTest.prototype.testGetLonOnLineAt0_0_0 = function(){
    var httpServer = new myhardware.Server();
    var DataFromServer = new myapp.DataFromServer(httpServer);
    httpServer.setNextPosition(new mygps.GeoPosition(0,0,0,0,0));
    var pos1 = DataFromServer.getNextPosition(0);
    assertEquals (0.0, DataFromServer.getLonOnLine(pos1,0));
}
LineTest = TestCase("getLonOnLineAt0_0_112");
LineTest.prototype.testGetLonOnLineAt0_0_0 = function(){
    var httpServer = new myhardware.Server();
    var DataFromServer = new myapp.DataFromServer(httpServer);
    httpServer.setNextPosition(new mygps.GeoPosition(0,0,90*Math.PI/180,0,0));
    //a degree along the equator is at a 90 degree bearing
    var pos1 = DataFromServer.getNextPosition(0);
    assertEquals (0.01745406418355397, DataFromServer.getLonOnLine(pos1,111.2*1000));
}
LineTest = TestCase ("getAltitudeOnLine0_0_0");
LineTest.prototype.testGetAltitudeOnLineAt0_0_0 = function(){
    var httpServer = new myhardware.Server();
    var DataFromServer = new myapp.DataFromServer(httpServer);
    httpServer.setNextPosition(new mygps.GeoPosition(0,0,0,0,0));
    var pos1 = DataFromServer.getNextPosition(0);
    assertEquals(0,DataFromServer.getAltOnLine(pos1,0));
}
LineTest = TestCase ("getAltitudeOnLine0_60_1");
LineTest.prototype.testGetAltitudeOnLineAt0_60_1 = function(){
    var httpServer = new myhardware.Server();
    var DataFromServer = new myapp.DataFromServer(httpServer);
    httpServer.setNextPosition(new mygps.GeoPosition(0,0,0,0,60*Math.PI/180));
    var pos1 = DataFromServer.getNextPosition(0);
    assertEquals(1.7320508075688767,DataFromServer.getAltOnLine(pos1,1));
}
LineTest = TestCase ("getAltitudeOnLine1_60_1");
LineTest.prototype.testGetAltitudeOnLineAt1_60_1 = function(){
    var httpServer = new myhardware.Server();
    var DataFromServer = new myapp.DataFromServer(httpServer);
    httpServer.setNextPosition(new mygps.GeoPosition(0,0,0,1.0,60*Math.PI/180));
    var pos1 = DataFromServer.getNextPosition(0);
    assertEquals(2.7320508075688767,DataFromServer.getAltOnLine(pos1,1));
}

GeoPositionTest = TestCase ("getLatitude");
GeoPositionTest.prototype.testGetLatitude = function(){
    var httpServer = new myhardware.Server();
    var pos1 = new mygps.GeoPosition(100,0);
    assertEquals(100,pos1.getLatitude());
}
GeoPositionTest = TestCase ("getLongitude");
GeoPositionTest.prototype.testGetLongitude = function(){
    var httpServer = new myhardware.Server();
    var pos1 = new mygps.GeoPosition(0,300);
    assertEquals(300,pos1.getLongitude());
}

IntersectionTest = TestCase ("getIntersectionInfinite");
IntersectionTest.prototype.testGetIntersectionInfinite = function (){
   var httpServer = new myhardware.Server();
    httpServer.setNextPosition(new mygps.GeoPosition(0,0,0,0,0));
    httpServer.setNextPosition(new mygps.GeoPosition(0,0,0,0,0));
    var DataFromServer = new myapp.DataFromServer(httpServer);
    var pos1 = DataFromServer.getNextPosition(0);
    var pos2 = DataFromServer.getNextPosition(0);
    var CalcIntersect = new myintersect.Intersection();
    assertEquals (null,CalcIntersect.getIntersection(pos1,pos2));
}

IntersectionTest = TestCase ("getIntersectionNEWS");
IntersectionTest.prototype.testGetIntersectionNEWS = function (){
    var httpServer = new myhardware.Server();
    httpServer.setNextPosition(new mygps.GeoPosition(0,10*Math.PI/180,0,0,0));
    httpServer.setNextPosition(new mygps.GeoPosition(0,0,90*Math.PI/180,0,0));
    
    var DataFromServer = new myapp.DataFromServer(httpServer);
    var pos1 = DataFromServer.getNextPosition(0);
    var pos2 = DataFromServer.getNextPosition(1);

    var expected = new mygps.GeoPosition(0,0.17453292519943275,0)
    
    var CalcIntersect = new myintersect.Intersection();
    assertEquals (expected,CalcIntersect.getIntersection(pos1,pos2));
}
ClickTest = TestCase ("getAPositionOnClick");
ClickTest.prototype.testGetAPositionOnClick = function(){
    var httpServer = new myhardware.Server();
    var arrlength = httpServer.getPositionQueueSize();
    assertEquals(0,arrlength);
    var DataFromServer = new myapp.DataFromServer(httpServer);
    httpServer.setNextPosition();
    var pos1 = DataFromServer.getNextPosition(0);
    var expected = new mygps.GeoPosition(0,0,1.5707963267948966,0,0);
    assertEquals (expected,pos1);
}

ClickTest = TestCase ("getAllPositionsOnClick");
ClickTest.prototype.testGetAllPositionsOnClick = function(){
    
    var httpServer = new myhardware.Server();
    assertEquals(0,httpServer.getPositionQueueSize());
    httpServer.setNextPosition(new mygps.GeoPosition(0,10*Math.PI/180,0,0,0));
    httpServer.setNextPosition(new mygps.GeoPosition(0,0,90*Math.PI/180,0,0));
    
    assertEquals(2,httpServer.getPositionQueueSize());
    
    var DataFromServer = new myapp.DataFromServer(httpServer);
    
    var pos1 = DataFromServer.getNextPosition(0);
    var pos2 = DataFromServer.getNextPosition(1);
    
    assertEquals(2,httpServer.getPositionQueueSize());

    assertEquals (new mygps.GeoPosition(0,10*Math.PI/180,0,0,0),pos1);
    assertEquals (new mygps.GeoPosition(0,0,90*Math.PI/180,0,0),pos2); //no idea how javascript knows the index but if you break the order it all breaks
}

ClickTest = TestCase("mousebuttonisdown");
ClickTest.prototype.testMouseButtonIsDown = function(){
    var httpServer = new myhardware.Server();
    httpServer.setNextPosition(new mygps.GeoPosition(0,10*Math.PI/180,0,0,0));
    assertEquals(1,httpServer.getPositionQueueSize());
    var DataFromServer = new myapp.DataFromServer(httpServer);
    var evtHndlr = new myHandler.EventHandler(DataFromServer);
    var doc = new myMock.Document();
    evtHndlr.mouseDownListener(doc);
    assertEquals (0,doc.value);
}

MockTest = TestCase("getValueFromMock");
MockTest.prototype.testGetValueFromMock = function(){
    var doc = new myMock.Document();
    doc.value = new mygps.GeoPosition(0,10*Math.PI/180,0,0,0);
    assertEquals(new mygps.GeoPosition(0,10*Math.PI/180,0,0,0),doc.value);
}
