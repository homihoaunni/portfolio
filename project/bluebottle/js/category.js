/* category_box 이동&배경색상 */
$(document).ready(function(){
    $(".category_box").hover(function() {
        if ($(window).width() > 1280) {
            $(this).find('img').stop().animate({left: '50%', marginLeft:  ($(".category_box_img").width()/2)*-1}, 150);            
        }
        $(this).stop().animate({ backgroundColor : "#00a0e4"});
        $(this).find('p').stop().css({color :"#FFF"});
    }, function() {
        if ($(window).width() > 1280) {
            $(this).find('img').stop().animate({left: "45%", marginLeft: "0"}, 150);
        }
        $(this).stop().animate({ backgroundColor : "#f0f0f0"});
        $(this).find('p').stop().css({color :"#000"});
    });
});