/**
 * 图片轮播
 *
 */
var btn = document.getElementById("next");//定义下一个
var dom = document.getElementById("slider");//定义滑动
var liArr = dom.getElementsByTagName("li");//定义数组，元素是所有的li标签

var curWidth = 1364;
var ulWidth = curWidth * liArr.length;
var show = [];
var circle = [];

var goAway = "translate(-" + curWidth +"px, 0) translateZ(0px)";
var goIn = "translate(0, 0) translateZ(0px)";
var goPre = "translate(" + curWidth +"px, 0) translateZ(0px)";

//��֤����li��ul������һ���ڷ���
dom.style.width = ulWidth + "px";

for(var i = 0, len = liArr.length; i < len; i++){
    var curLi = liArr[i];

    curLi.setAttribute("data-index", i);
    curLi.style.width = curWidth + "px";

    if(i == 0){
        curLi.style.left = 0;
        show.push(curLi);
    }else{
        curLi.style.left = - curWidth * i + "px";
        if(i > 1){
            translate(curLi, goAway, '');
            circle.push(curLi);
        }else{
            show.push(curLi);
            translate(curLi, goPre, '');
        }
    }


}

circle.reverse();

function a(){
    //��չʾ��ͼƬ����
    var showFirst = show.shift();
    translate(showFirst, goAway, "500ms");

    //����չʾ��ͼƬ
    translate(show[0], goIn, "500ms");
    circle.splice(0, 0, showFirst);

    //׼������һ����Ҫչʾ��ͼƬ
    var nextPre = circle.pop();
    translate(nextPre, goPre, "0ms");
    show.push(nextPre);


}
setInterval(a,1000);
function translate(dom, goType, time){
    dom.style.transform =
        dom.style.webkitTransform =
            dom.style.mozTransform =
                dom.style.msTransform =
                    dom.style.oTransform = goType;

    dom.style.transitionDuration =
        dom.style.webkitTransitionDuration =
            dom.style.mozTransitionDuration =
                dom.style.msTransitionDuration =
                    dom.oTransitionDuration = time;


}
