function leftArrow(x, y) {
  base([
    ['moveTo', [54 + x, 190 + y]],
    ['lineTo', [130 + x, 130 + y]],
    ['lineTo', [188 + x, 130 + y]],
    ['lineTo', [134 + x, 174 + y]],
    ['lineTo', [280 + x, 174 + y]],
    ['lineTo', [280 + x, 206 + y]],
    ['lineTo', [134 + x, 206 + y]],
    ['lineTo', [188 + x, 250 + y]],
    ['lineTo', [130 + x, 250 + y]],
    ['lineTo', [54 + x, 190 + y]]
  ]);
}
//这个arrow正常也应该是初始化的坐标，但是由于最开始未考虑到parameter，所以暂时这样，计算会费些事情了，对于强迫的我真是闹心。。。
function rightArrow(x, y) {
  ctx.beginPath();
  base([
    ['moveTo', [916 + x, 190 + y]],
    ['lineTo', [840 + x, 130 + y]],
    ['lineTo', [792 + x, 130 + y]],
    ['lineTo', [844 + x, 174 + y]],
    ['lineTo', [690 + x, 174 + y]],
    ['lineTo', [690 + x, 206 + y]],
    ['lineTo', [844 + x, 206 + y]],
    ['lineTo', [792 + x, 250 + y]],
    ['lineTo', [840 + x, 250 + y]],
    ['lineTo', [916 + x, 190 + y]]
  ]);
}
//反转leftArrow
function mirrorArror(x, y, mirror) {
  baseMir([
    ['moveTo', [54 + x, 190 + y]],
    ['lineTo', [130 + x, 130 + y]],
    ['lineTo', [188 + x, 130 + y]],
    ['lineTo', [134 + x, 174 + y]],
    ['lineTo', [280 + x, 174 + y]],
    ['lineTo', [280 + x, 206 + y]],
    ['lineTo', [134 + x, 206 + y]],
    ['lineTo', [188 + x, 250 + y]],
    ['lineTo', [130 + x, 250 + y]],
    ['lineTo', [54 + x, 190 + y]]
  ], mirror);
}
//B1 sign
function signB1(x, y) {
  base([
    //door
    ['moveTo', [0 + x, 0 + y]],
    ['lineTo', [0 + x, 300 + y]],
    ['lineTo', [104 + x, 300 + y]],
    ['lineTo', [74 + x, 270 + y]],
    ['lineTo', [74 + x, 20 + y]],
    ['lineTo', [247 + x, 20 + y]],
    ['lineTo', [247 + x, 194 + y]],
    ['lineTo', [256 + x, 194 + y]],
    ['arc', [
      256 + x,
      211 + y,
      17, -0.5 * Math.PI,
      0.5 * Math.PI,
      false
    ]],
    ['lineTo', [247 + x, 228 + y]],
    ['lineTo', [247 + x, 270 + y]],
    ['lineTo', [280 + x, 300 + y]],
    ['lineTo', [311 + x, 300 + y]],
    ['lineTo', [311 + x, 0 + y]],
    ['lineTo', [0 + x, 0 + y]],
    //head
    ['moveTo', [151 + x, 57 + y]],
    ['arc', [
      131 + x,
      57 + y,
      20,
      0,
      2 * Math.PI,
      false
    ]],
    //body
    ['moveTo', [74 + x, 128 + y]],
    ['lineTo', [96 + x, 128 + y]],
    ['lineTo', [129 + x, 84 + y]],
    ['lineTo', [210 + x, 84 + y]],
    ['lineTo', [239 + x, 128 + y]],
    ['arc', [
      239 - Math.sqrt(196 / (44 * 44 + 29 * 29)) * 22 + x,
      Math.sqrt(196 / (44 * 44 + 29 * 29)) * 29 * 0.5 + 128 + y,
      7, -Math.atan(29 / 44),
      Math.atan(44 / 29) + 0.5 * Math.PI,
      false
    ]],
    ['lineTo', [200 + x, 98 + y]],
    ['moveTo', [74 + x, 140 + y]],
    ['lineTo', [103 + x, 140 + y]],
    ['lineTo', [122 + x, 114 + y]],
    ['lineTo', [128 + x, 114 + y]],
    ['lineTo', [144 + x, 158 + y]],
    ['lineTo', [96 + x, 254 + y]],
    //foot
    ['moveTo', [
      96 + 8 * Math.sqrt(5) + x,
      254 + 4 * Math.sqrt(5) + y
    ]],
    ['arc', [
      96 + 4 * Math.sqrt(5) + x,
      254 + 2 * Math.sqrt(5) + y,
      10,
      90 * 2 * Math.PI / 360 - Math.atan(2),
      180 * 2 * Math.PI / 360 + 90 * 2 * Math.PI / 360 - Math.atan(2),
      false
    ]],
    // continue leg
    ['moveTo', [
      96 + 8 * Math.sqrt(5) + x,
      254 + 4 * Math.sqrt(5) + y
    ]],
    ['lineTo', [168 + x, 158 + y]],
    ['lineTo', [173 + x, 158 + y]],
    ['lineTo', [178 + x, 201 + y]],
    // 这里本应该是个圆弧过度，但是太麻烦了直接直角了= =#
    ['lineTo', [(63 * 5 / 43) + 173 + x, 221 + y]],
    ['lineTo', [256 + x, 221 + y]],
    ['arc', [
      256 + x, 211 + y,
      10,
      0.5 * Math.PI, -0.5 * Math.PI,
      true
    ]],
    ['lineTo', [199 + x, 201 + y]],
    //arm right
    ['moveTo', [200 + x, 98 + y]],
    ['lineTo', [170 + x, 98 + y]],
    ['lineTo', [194 + x, 158 + y]],
    ['lineTo', [199 + x, 201 + y]],
    //倒影
    ['moveTo', [122 + x, 300 + y]],
    ['lineTo', [122 + 20 * Math.sqrt(2) + x, 300 + y]],
    ['lineTo', [122 + 1.5 * Math.sqrt(2) + x, 300 - 20 * Math.sqrt(2) + 1.5 * Math.sqrt(2) + y]],
    ['arc', [
      122 - 5 * Math.sqrt(2) + 1.5 * Math.sqrt(2) + x,
      300 - 15 * Math.sqrt(2) + 1.5 * Math.sqrt(2) + y,
      10, -45 * 2 * Math.PI / 360,
      135 * 2 * Math.PI / 360,
      true
    ]],
    ['lineTo', [122 + x, 300 + y]]
  ]);
}
//B2 sign , B1's mirror
function signB2(x, y, mirror) {
  baseMir([
    //door
    ['moveTo', [0 + x, 0 + y]],
    ['lineTo', [0 + x, 300 + y]],
    ['lineTo', [104 + x, 300 + y]],
    ['lineTo', [74 + x, 270 + y]],
    ['lineTo', [74 + x, 20 + y]],
    ['lineTo', [247 + x, 20 + y]],
    ['lineTo', [247 + x, 194 + y]],
    ['lineTo', [256 + x, 194 + y]],
    //门
    ['arc', [
      256 + x, 211 + y,
      17, -0.5 * Math.PI,
      0.5 * Math.PI,
      false
    ]],
    ['lineTo', [247 + x, 228 + y]],
    ['lineTo', [247 + x, 270 + y]],
    ['lineTo', [280 + x, 300 + y]],
    ['lineTo', [311 + x, 300 + y]],
    ['lineTo', [311 + x, 0 + y]],
    ['lineTo', [0 + x, 0 + y]],
    //head
    ['moveTo', [151 + x, 57 + y]],
    ['arc', [131 + x,
      57 + y,
      20,
      0,
      2 * Math.PI,
      false
    ]],
    //body
    ['moveTo', [74 + x, 128 + y]],
    ['lineTo', [96 + x, 128 + y]],
    ['lineTo', [129 + x, 84 + y]],
    ['lineTo', [210 + x, 84 + y]],
    ['lineTo', [239 + x, 128 + y]],
    //手
    ['arc', [
      239 - Math.sqrt(196 / (44 * 44 + 29 * 29)) * 22 + x,
      Math.sqrt(196 / (44 * 44 + 29 * 29)) * 29 * 0.5 + 128 + y,
      7, -Math.atan(29 / 44),
      Math.atan(44 / 29) + 0.5 * Math.PI,
      false
    ]],
    ['lineTo', [200 + x, 98 + y]],
    ['moveTo', [74 + x, 140 + y]],
    ['lineTo', [103 + x, 140 + y]],
    ['lineTo', [122 + x, 114 + y]],
    ['lineTo', [128 + x, 114 + y]],
    ['lineTo', [144 + x, 158 + y]],
    ['lineTo', [96 + x, 254 + y]],
    //foot
    ['moveTo', [
      96 + 8 * Math.sqrt(5) + x,
      254 + 4 * Math.sqrt(5) + y
    ]],
    ['arc', [
      96 + 4 * Math.sqrt(5) + x,
      254 + 2 * Math.sqrt(5) + y,
      10,
      90 * 2 * Math.PI / 360 - Math.atan(2),
      180 * 2 * Math.PI / 360 + 90 * 2 * Math.PI / 360 - Math.atan(2),
      false
    ]],
    //continue leg
    ['moveTo', [
      96 + 8 * Math.sqrt(5) + x,
      254 + 4 * Math.sqrt(5) + y
    ]],
    ['lineTo', [168 + x, 158 + y]],
    ['lineTo', [173 + x, 158 + y]],
    ['lineTo', [178 + x, 201 + y]],
    //这里本应该是个圆弧过度，但是太麻烦了直接直角了= =#
    ['lineTo', [(63 * 5 / 43) + 173 + x, 221 + y]],
    ['lineTo', [256 + x, 221 + y]],
    //脚
    ['arc', [
      256 + x, 211 + y,
      10,
      0.5 * Math.PI, -0.5 * Math.PI,
      true
    ]],
    ['lineTo', [199 + x, 201 + y]],
    //arm right
    ['moveTo', [200 + x, 98 + y]],
    ['lineTo', [170 + x, 98 + y]],
    ['lineTo', [194 + x, 158 + y]],
    ['lineTo', [199 + x, 201 + y]],
    //脚倒影
    ['moveTo', [122 + x, 300 + y]],
    ['lineTo', [122 + 20 * Math.sqrt(2) + x, 300 + y]],
    ['lineTo', [122 + 1.5 * Math.sqrt(2) + x, 300 - 20 * Math.sqrt(2) + 1.5 * Math.sqrt(2) + y]],
    ['arc', [
      122 - 5 * Math.sqrt(2) + 1.5 * Math.sqrt(2) + x,
      300 - 15 * Math.sqrt(2) + 1.5 * Math.sqrt(2) + y,
      10, -45 * 2 * Math.PI / 360,
      135 * 2 * Math.PI / 360,
      true
    ]],
    ['lineTo', [122 + x, 300 + y]]
  ], mirror);
}
//draw txt
function signB6(x, y, initwidth) {
  var aTxt = new Array(1);
  aTxt[0] = "-2F";
  console.log(aTxt);
  ctxConfig([
    ['lineWidth', '5'],
    ['font', '65px 黑体'],
    ['strokeStyle', 'black'],
    ['textBaseline', 'middle'],
    ['fillStyle', 'white']
  ]);

  var txtWidth = ctx.measureText(aTxt).width;
  //65 is the initial size of the font;
  //it is used to masure the width of the whole txt's width;
  var scale = initwidth / txtWidth;
  //ctxTxt(initfontsize,scale,aTxt,x,y)
  ctxTxt(65, scale, aTxt, x, y);
  console.log(ctx.font);
}
