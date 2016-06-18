// ************************************************************
// 由于项目中使用了太多的面向过程的方法,所以用三维数组调整下.
function base(arr) {
  ctx.beginPath();
  for (k in arr) {
    var key = arr[k][0];
    var value = arr[k][1];
    if (key === 'lineTo') {
      ctx.lineTo(value[0], value[1]);
    } else if (key === 'arc') {
      ctx.arc(value[0], value[1], value[2], value[3], value[4], value[5]);
    } else if (key === 'moveTo') {
      ctx.moveTo(value[0], value[1]);
    } else if (key === 'rect') {
      ctx.rect(value[0], value[1], value[2], value[3]);
    } else if (key === 'fillText') {
      ctx.fillText(value[0], value[1], value[2]);
    }
  }
  ctx.stroke();
}

// mirror
function baseMir(arr, mirror) {
  ctx.beginPath();
  for (k in arr) {
    var key = arr[k][0];
    var value = arr[k][1];
    if (key === 'lineTo') {
      ctx.lineTo(2 * mirror - value[0], value[1]);
    } else if (key === 'arc') {
      ctx.arc(
        2 * mirror - value[0],
        value[1],
        value[2], -Math.PI - value[3], -value[4] - Math.PI, !value[5]
      );
    } else if (key === 'moveTo') {
      ctx.moveTo(2 * mirror - value[0], value[1]);
    }
  }
  ctx.stroke();
}

function ctxConfig(arr) {
  ctx.beginPath();
  for (k in arr) {
    var key = arr[k][0];
    var value = arr[k][1];
    switch (key) {
      case 'lineWidth':
        ctx.lineWidth = value;
        break;
      case 'font':
        ctx.font = value;
        break;
      case 'fillStyle':
        ctx.fillStyle = value;
        break;
      case 'textBaseline':
        ctx.textBaseline = value;
        break;
      case 'strokeStyle':
        ctx.strokeStyle = value;
        break;
      case 'textBaseline':
        ctx.textBaseline = value;
        break;
      case 'fillStyle':
        ctx.fillStyle = value;
        break;
    }

  }
}
// **********************************************************************
// initial

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.lineWidth = 2;
ctx.font = "25px Arial";
var i = 0;
var num = 1;

//设置倾角15,30,45,60,75度，然后计算出弧度
var ang = (15 * 2 * Math.PI) / 360;




// multiColor's index txt
function multiNum(i) {
  return i % 2 === 0 ? "a" + (i + 2) / 2 : "b" + (i + 1) / 2; // 先a1，然后b1，然后a2，然后b2。。。
}

// 检测是否选择双色灯以及添加选择回单色灯方法
function check(value) {
  if (value === "multi") {
    c.removeEventListener("click", singleColor, true); // 解除单色灯事件绑定
    c.addEventListener("click", multiColor, true); // 双色灯事件绑定
  } else {
    c.removeEventListener("click", multiColor, true); // 解除双色灯事件绑定
    c.addEventListener("click", singleColor, true); // 单灯事件绑定
  };

}
// 高级方法检测,单色+普通，双色+普通，单色+高级，双色+高级；下一步，整理参数i和num，合并为一个方法。measuernum的值根据单双色判断，是否多角度，根据advchecked判断。
// 根据边框判断折现和注释位置，并且还是分两点，接近近似角度15,30,45,60,75。next
// 给各种元素添加事件委托，确定圆形和角形的位置，修改jquery，完善整个项目。坚决不烂尾
// input 捕获回车
// 圆形地埋，扩大画布？ok
// 完善菜单添加动画效果。ok
// 拆分(ok)，webpack打包
// 引入jq(ok)和bsok
// 最后引入react，redux
// function advcheck() {
//     var oAdv = document.getElementById('advLine').checked;
//     oAdv = checked?
// }
// 明天可以尝试更改canvas

// measure number's width
function measureNum(para) {
  var numWidth = ctx.measureText(para).width;
  return Math.ceil(numWidth * 1.2);
}
// common line
function comLine(x, y) {

}
// //advance line
// function advLine(arr,i){

// }
//two_step_line
// function
// 单色灯引线方法
var singleColor = function(evt) {
    var mousePos = getMousePos(c, evt);
    //alert(mousePos.x +',' + mousePos.y);
    var x = Math.floor(mousePos.x);
    var y = Math.floor(mousePos.y);
    ctx.textAlign = "start";
    ctxConfig([
      ['lineWidth', '1'],
      ['font', '25px Arial'],
      ['fillStyle', 'black'],
      ['textBaseline', 'alphabetic']
    ]);
    ctx.moveTo(Math.floor(mousePos.x), Math.floor(mousePos.y));
    //确定引线方向
    if ((y - 190) < 0) {
      ctx.lineTo((Math.tan(ang) * (y - 30) + x), 30);
      //按照数字大小设置下划线
      ctx.lineTo(((Math.tan(ang) * (y - 30) + x) + measureNum(num)), 30);
      //设置文字，横下上方
      ctx.fillText(num, (Math.tan(ang) * (y - 30) + x + 3), 27);
    } else {
      ctx.lineTo((Math.tan(ang) * (350 - y) + x), 392);
      //如果数字大于10,则出于美观，延长下划线
      ctx.lineTo(((Math.tan(ang) * (350 - y) + x) + measureNum(num)), 392);
      //设置文字，横线下方
      ctx.fillText(num, (Math.tan(ang) * (350 - y) + x + 3), 390);
    }
    num++;
    ctx.stroke();
    // console.log(ctx.textBaseline);
    // console.log(num, (Math.tan(ang) * (350 - y) + x + 3), 362 + 28);
    //console.log(Math.tan(45*2*Math.PI/360));
    //console.log(Math.tan(ang)*(y-30),350);
    // console.log(Math.floor(mousePos.x), Math.floor(mousePos.y));

  }
  // 双色灯引线方法
var multiColor = function(evt) {
  var mousePos = getMousePos(c, evt);
  //alert(mousePos.x +',' + mousePos.y);
  var x = Math.floor(mousePos.x);
  var y = Math.floor(mousePos.y);
  ctx.textAlign = "start";
  ctxConfig([
    ['lineWidth', '1'],
    ['font', '25px Arial'],
    ['fillStyle', 'black'],
    ['textBaseline', 'alphabetic']
  ]);
  ctx.moveTo(Math.floor(mousePos.x), Math.floor(mousePos.y));

  //确定引线方向
  if ((y - 190) < 0) {
    ctx.lineTo((Math.tan(ang) * (y - 30) + x), 30);
    // make number's underline
    ctx.lineTo((measureNum(multiNum(i)) + (Math.tan(ang) * (y - 30) + x)), 30);

    //设置文字，横下上方
    ctx.fillText(multiNum(i), (Math.tan(ang) * (y - 30) + x + 3), 27);
  } else {
    ctx.lineTo((Math.tan(ang) * (350 - y) + x), 392);
    ctx.lineTo(measureNum(multiNum(i)) + (Math.tan(ang) * (350 - y) + x), 392);

    //设置文字，横线下方
    ctx.fillText(multiNum(i), (Math.tan(ang) * (350 - y) + x + 3), 390);
  }
  i++;
  ctx.stroke();

}

//report the mouse position on click
c.addEventListener("click", singleColor, true);

//Get Mouse Position
function getMousePos(c, evt) {
  var rect = c.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left * (c.width / rect.width),
    y: evt.clientY - rect.top * (c.height / rect.height)
  };
}

function strangeShape() {
  alert("这些奇怪的灯还没有解决...");
}

function cleanRect(x, y, width, height) {
  ctx.clearRect(5, 5, 1260, 400);
}
console.log(document.getElementById("single").checked);
console.log(document.getElementById("multi").checked);
