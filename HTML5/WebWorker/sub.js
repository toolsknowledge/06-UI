this.onmessage = function(e){
    const { data } = e;
    this.postMessage({"subRes":data.arg1-data.arg2});
}