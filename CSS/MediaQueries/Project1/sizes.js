window.onresize = my_fun;
window.onload = my_fun;
function my_fun(){
    let screensize = window.innerWidth;
    document.getElementById("my_id").innerHTML = "Screen Size : "+screensize
}