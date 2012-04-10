myHandler = {};
myHandler.EventHandler = function(dataFrmSrvr){
    this.timerID = 0;
    this.dataFromServer = dataFrmSrvr;
};

myHandler.EventHandler.prototype.mouseDownListener = function(field){
    var DataFromServer = this.dataFromServer;
    this.timerID = setInterval(function (){
        field.value = JSON.stringify(DataFromServer.getNextPosition(0));
    }, 1);
}

myHandler.EventHandler.prototype.mouseUpListener = function(){
    clearInterval(this.timerID);
}


