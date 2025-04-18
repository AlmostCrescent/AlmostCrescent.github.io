// 定義變數
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

let x1 = 0, y1 = 0, dx1 = 5, dy1 = 5, r1 = 30, color1 = "#0095DD";
let x2 = 300, y2 =100, dx2 = 10, dy2 = 10, r2 = 50, color2 = "#FF5733";



// 畫圓形
function drawBall(x, y, r, color) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2); // arc(圓心x, 圓心y, 半徑, 起始角, 結束角)
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}

// 更新畫布
function draw()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
	
	let dx = x2 - x1;
    let dy = y2 - y1;
    let distance = Math.sqrt(dx * dx + dy * dy);

    x1 = x1 + dx1;
    y1 = y1 + dy1;
	if(x1<0 || x1>800) dx1=-dx1;
	if(y1<0 || y1>600) dy1=-dy1;
	
	x2 = x2 + dx2;
    y2 = y2 + dy2;
	if(x2<0 || x2>800) dx2=-dx2;
	if(y2<0 || y2>600) dy2=-dy2;
	// TODO: 如果發生碰撞(畫布寬canvas.width, 畫布高canvas.height)，則改變速度(dx, dy)和顏色(color)
    // ...
	

    drawBall(x1, y1, r1, color1);
   drawBall(x2, y2, r2, color2);
   
    requestAnimationFrame(draw);
}
draw();