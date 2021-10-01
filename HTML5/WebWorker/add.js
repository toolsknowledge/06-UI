this.onmessage = function(e){
    const { data } = e;
    this.postMessage({"addResult":data.arg1+data.arg2});
}