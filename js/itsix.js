$(function () {
    // logo 클릭시 최상단으로 이동
    // "click", function = 로고 클릭시 함수실행 
    /* scrollTop은, 스크롤 위치 이동을 위한 
    jQuery 애니메이션 함수 */
    $("h1.logo").on("click", function () {
        $("html,body").stop().animate({
            scrollTop: 0 // 수직 스크롤 위치 0 
        }, 400); // 0.4초 
        // .stop() = 예상치 못한 동작을 방지하기 위함 

    });

// PC + Mobile 메뉴 클릭시 애니메이션으로 위치 이동
// .menu와 .m_menu의 a 태그 속성 중 href 의 #으로 시작하는 요소 클릭시!!
$(".menu li a[href^='#'], .m_menu li a[href^='#']").on("click", function(){
    var target = $(this).attr("href");
    var targetPostion = $(target).offset().top;
    // 스크롤 애니메이션 설정 - 0.8초동안 상단으로 스크롤
    $("html,body").animate({
        scrollTop:targetPostion
    },800); // 0.8초
});

    // 햄버거버튼 클릭시 - 모바일 메뉴 보기/가리기
    // 스토리 : 햄버거버튼 클릭시 메뉴박스와 X버튼 보기
    // .eq() - jQuery 메서드 - 특정 인덱스(순서값) 선택시 사용 
    $(".rightmenu li").eq(2).click(function () {
        $(".m_menu").show(); /* 보기 */
        $(".rightmenu").hide(); /* 가리기 */
        $(".m_menu li").eq(3).show(); /* X버튼 */
    });
    // X 클릭시 메뉴박스 사라짐
    $(".m_menu li").eq(3).click(function () {
        $(".m_menu").hide();
        $(this).hide();
        $(".rightmenu").show();
    });

//배경 스크롤 이벤트
$(window).scroll(function(){ //.scroll 스크롤이벤트
    var scr = $(this).scrollTop(); //.scrollTop()- 수직스크롤
    
    $("ul.center_bg li").eq(0).css({
        "top": -100 + (scr / 2)
    });
    $("ul.center_bg li").eq(1).css({
        "top": -100 + (scr / 1.7)
    });
    $("ul.center_bg li").eq(2).css({
        "top": 80 + (scr / 2)
    });
    $("ul.center_bg li").eq(3).css({
        "top": 60 + (scr / 5)
    });
    $("ul.center_bg li").eq(4).css({
        "top": 10 + (scr / 5)
    });
    $("ul.center_bg li").eq(5).css({
        "top": -60 + (scr / 2)
    });
    $("ul.center_bg li").eq(6).css({ //x좌표값은 중앙
        // y(수직) 위치값을 초기 위치보다 위로 올라가도록 효과줌
        "transform": "translate(-50%, " + (-50 - (scr / 100)) + "%)"
    });

//육각형 위치이동
$(".hexagon").css({ //x좌표값은 중앙
    // y(수직) 위치값을 초기 위치보다 위로 올라가도록 효과줌
    "transform": "translate(-50%, " + (-50 - (scr / 99.5)) + "%)"
});

//레드카펫 위치이동
$("#redcarpet").css({ 
    // y(수직) 위치값을 초기 위치보다 위로 올라가도록 효과줌
    "transform": "translateY(" + ( -100 - (scr / 2.5)) + "px)"
});
//폿폴배경 배경이동
$(".port_bg li").eq(0).css({ 
    // y(수직) 위치값을 초기 위치보다 위로 올라가도록 효과줌
    "transform": "translateY(" + (0 - (scr / 1.5)) + "px)"
});
$(".port_bg li").eq(1).css({ 
    // y(수직) 위치값을 초기 위치보다 위로 올라가도록 효과줌
    "transform": "translateY(" + (0 - (scr / 1.5)) + "px)"
});
$(".port_bg li").eq(2).css({ 
    // y(수직) 위치값을 초기 위치보다 위로 올라가도록 효과줌
    "transform": "translateY(" + (0 - (scr / 2)) + "px)"
});
//레드카펫2
 //스크롤위치가 1630픽셀 이상인 경우 추가 스타일 적용 (if문)
 //scr 1630픽셀보다 큰지 확인후
 //해당 조건이 참일 경우 scr에서 1630픽셀빼줌
 if (scr > 1630) {
    scr -= 1630;
    $("#redcarpet2").css({ 
        // y(수직) 위치값을 초기 위치보다 위로 올라가도록 효과줌
        "transform": "translateY(" + (0 - (scr / 2.5)) + "px)"
    });
 }





});
});
//스크롤 위치값을 scr에 넣어줌
//현재 스크롤의 위치scr에 넣어줌
// 스크롤이 위로 올라갈수록 li에 배경 이미지들이 동적으로 이동되는 스크립트
//li - 첫번째요소는 0 , 두번째 요소는 1
// window - 웹브라우저창을 뜻함

