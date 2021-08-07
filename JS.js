var cnv = document.getElementById('canvas');
var ctx = cnv.getContext('2d');

    arr = new Array();
function  circle(){
    ctx.fillRect(0,0,1000,1000);
        if (Math.random()<0.1){
            var square = new Object();
            square.x = Math.floor(Math.random()*1000);
            square.r = Math.floor(Math.random()*20);
            square.y = 0;
            square.speed = Math.floor((Math.random()*9) + 1);
            arr.push(square);
        }
        for (i = arr.length - 1; i > 0;i--) {
            arr[i].y+=arr[i].speed;
            ctx.beginPath();
            ctx.arc(arr[i].x, arr[i].y, arr[i].r , 0 , Math.PI*2, false) 
            ctx.fillStyle = "grey";
            ctx.fill();
        }
        ctx .fillStyle = "Yellow";
    }
    setInterval(function(){

        circle();
   },10) 