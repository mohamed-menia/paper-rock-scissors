



function comchooes(){
    return Math.floor(Math.random()*3);

}

var x= comchooes();
function get(){
    var y=kk()
    function kk(){
    var pa=document.getElementById("pa");
    var se=document.getElementById("se");
    //var rod=document.getElementById("ro");
    if(pa.checked==true)
    var hh=0;
    else if(se.checked==true)
    var hh=1;
    else
    var hh=2;
    //document.write(hh);
    
    return hh;
}
    playr(x,y)

    function playr(y,x){
        if(x==y){
        document.write("drawwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww");
        document.write("\n");
        if(x==0)
        document.write("paper==paper");
        else if(x==1)
        document.write("sessor==sessor")
        else
        document.write("rock==rock")
        }
        else if(x==0&&y==2||x==1&&y==0||x==2&&y==1){
        document.write("you have woooon");
        document.write("\n");
        

        if(x==0)
        document.write("paper>rock");
        else if(x==1)
        document.write("sessor>paper")
        else
        document.write("rock>sessor")
    }
        else{
        document.write("you have lost");

        document.write("\n");
        
        if(x==0)
        document.write("paper<rock");
        else if(x==1)
        document.write("sessor<paper")
        else
        document.write("rock<sessor")

        }
    }
}

