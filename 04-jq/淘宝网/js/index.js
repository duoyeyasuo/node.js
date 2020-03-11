// 仅仅是一个入口函数  不能少  因为要在入口函数中操作DOM
$(function(){
    // hover 鼠标移到menu上面就触发hover事件  top区域的hover效果
	$("#user-nav li.menu").hover(function(){
        // toggleClass表示切换一个类
        $(this).toggleClass("active")
    })
});