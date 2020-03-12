// 仅仅是一个入口函数  不能少  因为要在入口函数中操作DOM
$(function(){
    // hover 鼠标移到menu上面就触发hover事件  top区域的hover效果
	$("#user-nav li.menu").hover(function(){
        // toggleClass表示切换一个类
        $(this).toggleClass("active")
    })

    // ============== 控制选择宝贝或天猫或店铺
    // $search_box  如果一个变量以$开头 表示一个JQ对象
    // 后面要多次使用这个对象  使用一个变量来引用它
    var $search_box = $("#search-box");
    $search_box.find(".search-tab li").click(function(){
        // hasClass 判断元素上面有没有类  如果有返回true
        if($(this).hasClass("tmall")){
            // console.log("点击了天猫")
            $search_box.addClass("tianmao");
        }else{
            $search_box.removeClass("tianmao");
        }
        if($(this).hasClass("baobei")){
            $search_box.addClass("tb");
        }else{
            $search_box.removeClass("tb");
        }
        if($(this).hasClass("dianpu")){
            $search_box.addClass("dianpu");
        }else{
            $search_box.removeClass("dianpu");
        }

        // 点击了哪个li，需要给它上面添加on这个类
        $(this).addClass("on").siblings().removeClass("on");
    })
});