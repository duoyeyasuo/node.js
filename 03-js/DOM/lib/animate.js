// 封装一个函数，让小球运动到指定的位置  animate动画的意思
function animate(obj,target){
    clearInterval(obj.timer); // clearInterval(undefined) 也是OK的
    // 给obj添加一个属性，是timer，值是一个定时器，定时器中的函数是异步任务
    obj.timer = setInterval(function(){
        let step = 10;  // 步长 
        let current = obj.offsetLeft; // 得到left方向上偏移量
        // 小球可以向左运动，也可以向右运动，step可以是正值，也可以是负值
        step = target >= current ? step : -step;
        if(Math.abs(target-current) >= Math.abs(step)){
            // 距离目标的距离至少 还大于 一个步长的距离
            current += step;
            obj.style.left = current+"px";
        }else{
            // 距离目标的距离 小于一个步长的距离 将要接过目标
            obj.style.left = target+"px";
            clearInterval(obj.timer);
        }
    },5)
}