/* below is linter setting,useless comment */
/* global ctx document $ */
/** @author - 李冰
 */
$(document).ready(function() {
  // 底部按钮，功能：清除canvas遮罩
  $(".btn-info").click(function() {
    $(".controlPoint").hide();
  });
  // 中框
  $(".midRect").on("click",
    function() {
      bdrType = "mid";
      cleanRect();
      ctx.beginPath();
      ctx.rect(180, 40, 592, 328);
      ctx.stroke();
      $(".mainBox").css({
        "display": "block"
      });
      $(".conpt-box").css({
        "width": "592"
      });
      $(".conpt-btn").css({
        "width": "160"
      });
    }
  );
});
// 点击文字按钮之后，设置input标签
// function addInput() {
//   var txt = "<input type=“txt” ><button>确定</button><button>取消</button>";
//   $(".addInput").after(txt);
//   $(".addInput").hide();
// }

function showBtn() {
  // "+" click even
  $(".shape-btn span").on("click", function() {
    console.log("hello?");
    $(this).hide(); // +号隐藏
    // 添加btn等按钮
    $(this).siblings("button:not(.confirm-btn)").show();
  });
  // btn添加点击事件
  $(".shape-btn").children("button:not(.txt-btn, .confirm-btn)").on(
    "click",
    function() {
      $(this).parent().children("span").addClass("active-plus"); // 获取当前active span， 这里不能用active-span和bootstrap冲突。
      $(this).parent().children("button,input,textarea").hide(); // 移除btn，input
      setTimeout(function() {
        $(".active-plus").css({
          "display": "block"
        });
      }, 100);
    }
  );

  // 文字按钮
  $(".txt-btn").click(function() {
    $(this).hide().siblings("button,span").hide();
    $(this).siblings(".confirm-btn, input, textarea").show();
    $(this).siblings("textarea, input").attr("id", "active-input");
  });
  // 确认按钮功能
  $(".confirm-btn").click(function() {
    console.log("test");
    $(this).parent().children("span").addClass("active-plus"); // 获取当前active span， 这里不能用active-span和bootstrap冲突。
    $(this).parent().children("button,input,textarea").hide(); // 移除btn，input
    $(this).parent().children("input,textarea").attr({
      "id": ""
    });
    $(".active-plus").show();
    $(this).hide();
  });
  // mouse leave
  $('.conpt-btn').mouseleave(
    function() {
      if ($('.conpt-btn button').length !== 0) {
        $('.conpt-btn button,input').fadeOut("slow", function() {
          $('.conpt-btn button,input,textarea').hide();
          $('.conpt-btn .plus-sign').show();
        });
      }
    }
  );

}



/**
 *@description 大号边框
 */
function rectBorder() {
  caninit();
  cleanRect(5, 5, 960, 400);
  ctx.beginPath();
  ctx.rect(40, 40, 890, 328);
  ctx.stroke();
  // 显示canvas和控制点
  $(".mainBox").css({
    "display": "block"
  });
  // 控制样式
  $(".conpt-box, .controlPoint").css({
    "width": "890"
  });
  $(".conpt-btn").css({
    "height": "130"
  });
  // 插入html
  $(".conpt-box").html($(".b4-tmpl").html());
  showBtn();

}
/* b1b5 function */
function midRect() {
  caninit();
  cleanRect();
  ctx.beginPath();
  ctx.rect(180, 40, 590, 328);
  ctx.stroke();
  $(".controlPoint").css({
    "width": "592"
  });
  $("conpt-btn").css({
    "width": "160"
  });
  // 插入html
  $(".conpt-box").html($(".b1b5-tmpl").html());
  showBtn();
}

function smallRect(x, y) {
  caninit();
  $(".mainBox").css({
    "display": "block"
  });
  cleanRect();
  ctx.beginPath();
  ctx.rect(-14 + x, -14 + y, 339, 328);
  ctx.stroke();
  $(".controlPoint").css({
    "width": "270",
    "height": "408"
  });
  $(".conpt-btn").css({
    "width": "270"
  });
  // 插入html
  $(".conpt-box").html($(".b5-tmpl").html());
  showBtn();
}
// 地埋灯
function cirRect(x, y) {
  caninit();
  console.log("ok");
  cleanRect();
  $(".mainBox").css({
    "display": "block"
  });
  // showMenu();
  // document.getElementById('myCanvas').height = 2 * (Math.sqrt(311 * 311 / 4 + 150 * 150) + 54);
  // var posCircle = (2 * (Math.sqrt(311 * 311 / 4 + 150 * 150) + 54) - 408) / 2;
  ctx.beginPath();
  /* 由于圆形经过缩放，所以设置一个缩放系数k */
  var k = 0.85;
  ctx.scale(k, k);
  ctx.arc(
    480 / k, 204 / k,
    Math.sqrt(
      (311 * 311 / 4 + 150 * 150)
    ) + 14,
    0, 2 * Math.PI, false);
  ctx.stroke();
  ctx.scale(1 / k, 1 / k);
  $(".controlPoint").css({
    "width": "270",
    "height": "408"
  });
  $(".conpt-btn").css({
    "width": "270"
  });
  // 插入html
  $(".conpt-box").html($(".b5cir-tmpl").html());
  showBtn();
}
/* 缩放后的b1标志 */
function scaleB1(a, b) {
  var k = 0.8;
  ctx.scale(k, k);
  signB1(a / k, b / k);
  ctx.scale(1 / k, 1 / k);
}
/* 缩放后的b2标志 */
function scaleB2(x, y, mirror) {
  console.log("testB2");
  var k = 0.8;
  ctx.scale(k, k);
  signB2(x / k, y / k, mirror / k);
  ctx.scale(1 / k, 1 / k);
}

function caninit() {
  document.getElementById("myCanvas").width = 970;
}
/* double B1B5 sign */
function double() {
  document.getElementById("myCanvas").width = 1260;
  cleanRect(5, 5, 960, 400);
  $(".mainBox").css({
    "display": "block"
  });
  ctx.beginPath();
  // ctx.rect(40, 40, 1180, 328);
  ctx.rect(40, 40, 570, 328);
  ctx.rect(650, 40, 570, 328);
  ctx.stroke();
  // 插入html
  $(".conpt-box").html($(".doubleb1b5-tmpl").html());
  $(".controlPoint, .conpt-box").css({
    "width": "1260",
    "height": "408"
  });

  $(".conpt-btn").css({
    "width": "190"
  });
  $(".conpt-btn").css({
    "height": "70"
  });

  showBtn();
}
//draw txt
function canTxt(x, y, initwidth) {
  var reg = /\n|\r/g;
  var aTxt;
  aTxt = document.getElementById('active-input').value.split(reg);
  ctxConfig([
    ['lineWidth', '5'],
    ['font', '65px 黑体'],
    ['strokeStyle', 'black'],
    ['textBaseline', 'middle'],
    ['fillStyle', 'white']
  ]);
  //这个正则还是有些问题，英文字体的字号和汉字的还是不一样的啊,导致大小产生差异了。>_<
  var sortTxt = aTxt.sort(sortCharacter);

  var txtWidth = ctx.measureText(sortTxt[0]).width;
  //65 is the initial size of the font;
  //it is used to masure the width of the whole txt's width;
  var scale = initwidth / txtWidth;
  //ctxTxt(initfontsize,scale,aTxt,x,y)
  ctxTxt(65, scale, aTxt, x, y);
  console.log(ctx.font);
}

//size:fontsize
function ctxTxt(size, scale, aTxt, x, y) {
  'use script'
  var value = size * scale + "px" + " " + "黑体";
  ctx.font = value;
  var len = aTxt.length;
  //设置两行文字位置附加行间距
  var lineSpace = 65 * scale * 0.5 + 5;
  switch (len) {
    case 0:
      alert("请输入文字");
    case 1:
      ctx.textAlign = "center";
      ctx.beginPath();
      ctx.strokeText(aTxt[0], 54 + x, 204 + y);
      ctx.fillText(aTxt[0], 54 + x, 204 + y);
      break;
    case 2:
      ctx.textAlign = "center";
      ctx.beginPath();
      ctx.strokeText(aTxt[0], 54 + x, -lineSpace + 204 + y);
      ctx.fillText(aTxt[0], 54 + x, -lineSpace + 204 + y);
      ctx.strokeText(aTxt[1], 54 + x, lineSpace + 204 + y);
      ctx.fillText(aTxt[1], 54 + x, lineSpace + 204 + y);
      break;
    default:
      alert("Are you serious?什么劳什子灯，这么老些行文字？");
      break;
  }
  ctx.lineWidth = 2;
}
//sort character
function sortCharacter(a, b) {
  if (a.length < b.length) {
    return 1;
  } else if (a.length > b.length) {
    return -1;
  } else {
    return 0;
  }
}
$("#colorBtn").on("click",function() {
  var colorBtnHtml = $("#colorBtn").text();
  if (colorBtnHtml==="单色") {
    $("#colorBtn").text("双色");
    check("multi");
    console.log("ok");
  }else if (colorBtnHtml==="双色") {
    $("#colorBtn").text("单色");
    check("false");
  }
});
