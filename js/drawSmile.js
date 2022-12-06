function draw() {
  var canvas = document.getElementById('tutorial');
  let ctx = canvas.getContext('2d')
  ctx.beginPath();
  // 弧度=(Math.PI/180)*角度。
  // 起点坐标(75,75)，半径：50，起点弧度：0，终点弧度:2PI, 逆时针
  ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // 绘制
  ctx.moveTo(110, 75);
  ctx.arc(75, 75, 35, 0, Math.PI, false);   // 口 (顺时针)
  ctx.moveTo(65, 65);
  ctx.arc(60, 65, 5, 0, Math.PI * 2, true);  // 左眼
  ctx.moveTo(95, 65);
  ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // 右眼
  ctx.stroke();
}