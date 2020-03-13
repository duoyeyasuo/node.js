// 仅仅是一个入口函数  不能少  因为要在入口函数中操作DOM
$(function(){
    // ============== hover 鼠标移到menu上面就触发hover事件  top区域的hover效果
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

    // ============== 点击span让输入框获取焦点
    var $earch_box_span = $search_box.find(".search-box3 span"); // 得到输入框中的span
    var $q = $("#q"); // 得到输入框
    $earch_box_span.click(function(){
        $q.focus(); // 让输入框获取焦点
    })

    // ============== 控制获取焦点时框里面的内容是否隐藏
    // input_txt  如果有这个类  span就隐藏掉
    $q.bind("input",function(){
        if($q.val() != ""){
            // 在框中输入数据了
            $search_box.addClass("input_txt");
        }else{
            // 还没有输入数据
            $search_box.removeClass("input_txt");
        }
    })

    // ============== 在scroll事件中检测是否需要吸顶
    $search_fixed = $(".search-wraper>div:first-child");
    // console.log($search_fixed[0])
    search_fixed_top = $search_fixed.offset().top;
    // console.log(search_fixed_top) 
    var search_is_fixed = false; // 是否进行固定定位
    $(window).scroll(function(){
        // console.log($(window).scrollTop())
        if($(window).scrollTop() >= search_fixed_top){
            // 添加一个可以固定定位的类
            // console.log("添加一个可以固定定位的类")
            $search_fixed.addClass("search-fixed");
            search_is_fixed = true;

            $("#qr").hide();
        }else{
            // 移除固定定位的类
            // console.log("移除固定定位的类")
            $search_fixed.removeClass("search-fixed");
            search_is_fixed = false;

            $("#qr").show();
        }
    })

    // ============== 动态给宝贝或天猫或店铺加上hover
    $search_fixed.find(".search-tab").mouseenter(function(){
        $(this).addClass("hover");
    }).mouseleave(function(){
        $(this).removeClass("hover")
    })

    // ============== 点击不同的li让li移到上面
    $search_fixed.find(".search-tab li").click(function(){
        if(search_is_fixed){
            // 处于固定定位的状态
            $(this).prependTo($(this).parent())
        }
    })
    // ============== 点击二维码消失
    $("#qr span").click(function(){
        $(this).parent().hide();
    })

    // ============== 控制主题市场左边导航的二级菜单 
    let $market_nav = $("#market-nav");   // 讲到JS高级时才会说
    let $market_nav_lis = $market_nav.find("ul li");
    $market_nav_lis.mouseenter(function(){
        $(this).addClass("active").siblings().removeClass("active");
    })
    $market_nav.mouseleave(function(){
        $("#market-nav li").removeClass("active");
    })

    // ============== 移入主题市场时左边二给导航的动画效果 
    $market_nav.mouseenter(function(){
        $market_nav_lis.children(".market-submenu").css({opacity:0})
        .stop().animate({opacity:1},1000)
    })
});