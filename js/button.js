// large rect
// $(document).ready(function () {
//     $(".btn-bdr").click(function () {
//         $(".border-choose").hide();
//         $(".sign-choose").show();
//     });
// });
/* global ctx document $ */

  // hahhaha
  // 早上起来，需要对每个点添加方法。
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
    $(".mainBox").css({"display":"block"});
    $(".conpt-box").css({"width":"592"});
    $(".conpt-btn").css({"width":"160"});
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
  $(".shape-btn span").on("click",function() {
    console.log("hello?");
    $(this).hide();// +号隐藏
    // 添加btn等按钮
    $(this).siblings("button:not(.confirm-btn)").show();
    });
    // btn添加点击事件
    $(".shape-btn").children("button:not(.txt-btn, .confirm-btn)").on(
      "click", function() {
        $(this).parent().children("span").addClass("active-plus"); // 获取当前active span， 这里不能用active-span和bootstrap冲突。
        $(this).parent().children("button,input,textarea").hide(); // 移除btn，input
        setTimeout(function() {
          $(".active-plus").css({"display":"block"});
        }, 100);
      }
    );

      // 文字按钮
      $(".txt-btn").click(function(){
        console.log("txt-btn,here?");
        $(this).hide().siblings("button,span").hide();
        $(this).siblings(".confirm-btn, input, textarea").show();
        $(this).siblings("textarea, input").attr("id","active-input");
      });

      $(".confirm-btn").click(function() {
        console.log("test");
        $(this).parent().children("span").addClass("active-plus"); // 获取当前active span， 这里不能用active-span和bootstrap冲突。
        $(this).parent().children("button,input,textarea").hide(); // 移除btn，input
        $(this).parent().children("input,textarea").attr({"id": ""});
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

function showMenu() {
    $('.border-choose').hide();
    $('.sign-choose').show();
}


// 大号边框
function rectBorder() {
  cleanRect();
  ctx.beginPath();
  ctx.rect(40, 40, 890, 328);
  ctx.stroke();
  // 显示canvas和控制点
  $(".mainBox").css({"display":"block"});
  // 控制样式
  $(".conpt-box, .controlPoint").css({"width":"890"});
  $(".conpt-btn").css({"width":"270"});
  // 插入html
  $(".conpt-box").html($(".b4-tmpl").html());
  showBtn();
  //  onclick=leftArrow(0,-44)

}

function midRect()  {
  cleanRect();
  ctx.beginPath();
  ctx.rect(180, 40, 592, 328);
  ctx.stroke();
  $(".controlPoint").css({"width":"592"});
  $("conpt-btn").css({"width":"160"});
}
function smallRect(x, y) {
    cleanRect();
    ctx.beginPath();
    ctx.rect(-14 + x, -14 + y, 339, 328);
    ctx.stroke();
}
//这里还有个中间大小的框
function cirRect(x, y) {
    showMenu();
    document.getElementById('myCanvas').height = 2*(Math.sqrt(311 * 311 / 4 + 150 * 150) + 54);
    var posCircle = (2*(Math.sqrt(311 * 311 / 4 + 150 * 150) + 54) - 408)/2;
    ctx.beginPath();
    ctx.arc(
            480, 204+posCircle,
            Math.sqrt(
                    (311 * 311 / 4 + 150 * 150)
            ) + 14,
            0, 2 * Math.PI, false);
    ctx.stroke();
    //need to scale
}
// $(".conpt-box .conpt-btn .shape-btn .confirm-btn").click(function(){
//   var inputTxt = $(this).siblings("input,textarea").text();
// });
//draw txt
function canTxt(x, y,initwidth) {
    var reg = /\n|\r/g;
    var aTxt;
    aTxt = document.getElementById('active-input').value.split(reg);


    console.log(aTxt);
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
