# 学习markdown的使用
## 哈哈哈
### 啦啦啦
- html
- css
- js
1. html
2. css 
3. js
[百度](http://www.baidu.com)

> 这是一个引用 
>> 这是一个引用 

*一盏灯*， 一片昏黄；**一简书**

```javascript
var a = 110;
```

```html
<html>
    <head>
        <title>哈哈哈</title>
    </head>
</html>
```

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |





==================================
几个问题？
    1）对于一个前端开发工程师来说，最核心的技能是什么？
        css  js
        岗位要求：
            负责Web前端页面的开发和优化；
            精通JavaScript、HTML5、CSS、Bootstrap等基础网页制作开发技术；
            了解W3C网页标准和CSS2.0规范，熟悉HTML代码，能够手写代码，能够熟练制作符合W3C（DIV+CSS）标准的网页
            熟悉html5和css3,以及响应式交互相关的开发，熟悉html5下常用的控件库。

    2）怎么才算撑握住CSS？
        检测标准就是能否使用CSS独立开发页面

    3）要web三层标准开发？
        结构层：HTML  给网站提供内容
        样式层：CSS 布局（流式布局，浮动布局，层布局） 美化（盒子模型，字体和文件设置等）
        行为层：JavaScript  实现用户与浏览器之间的交互 

    4）复习前面最核心的内容？
        HTML：什么样的标签做什么样的事，尽可能使用语义化标签，最核心就是DIV。DIV要合理使用。
        CSS：
            选择器：
                ID
                CLASS
                P
                div p
                div,p 
                div.box
                :hover
            盒子模型：
                width + height 
                padding 
                border 
                margin
                background
            流式布局：
                默认布局方案   块级标签独占一行  行级标签并排显示  从上到下，从左到右的布局方案  缺点就是不能让块级元素并排显示。
            浮动布局：
                目的就是让块级元素并排显示。 半脱离标准文档流。
                造成对父元素和后面的兄弟元素影响，需要清除浮动造成的影响。
            层布局：
                相对定位  相对于自己的原本位置   偏移量（top/left/bottom/right）
                绝对定位  相对于参考点的位置   偏移量（top/left/bottom/right）
                固定定位  相对于窗口的位置   偏移量（top/left/bottom/right）
            其它：
                文字相关的，文本相关的，列表设置相关的

    3）分层思想？
        整体分层：
            不同的文件放到不同的文件夹下。html文件放到最外面。
            一个网站的首页面通常都叫index.html 
        样式分层：
            reset.css 重置标签的默认样式  针对整个网站都有效  
            common.css 设置网站通用的样式  针对整个网站都有效 
            index.css 表示首页面的样式  针对当前的index.html 
            list.css 
            ...

美团首页面分几个模块：
    top
    logo
    nav
    recommend
    fineFood
    recreation
    movie
    hotel
    life
    beauty
    travel
    footer

一个网站中很多页面有相同的部分，如网站的top，footer，nav。
对于这样的区域的样式，我们会把样式写在专门的文件中。如把top的样式写在top.css中

行内元素中不能写块级元素，是不OK的，如下：
```html
<a href="#">
    <p></p>
</a>
<a href="#">
    <p></p>
</a>
```






