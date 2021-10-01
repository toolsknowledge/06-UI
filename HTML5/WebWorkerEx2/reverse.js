this.onmessage = function(e){
    let str1 = e.data;
    let arr1 = Array.from(str1);  //["H","e","l","l","o"]
    let arr2 = arr1.reverse();    //['o','l','l','e','h']
    let str2 = arr2.join("");
    this.postMessage(str2);
}