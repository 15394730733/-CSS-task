/**
 * Created by sth on 2016/4/19 0019.
 */
var peopleNum;
function checking() {//先验证人数是否正确，然后根据人数生成杀手数
    peopleNum=18;
    if(peopleNum>18||peopleNum<6){//判断人数是否满足要求
        alert("游戏人数必须在6-18人之间");//弹出警告
    }
    else if(peopleNum>=6&&peopleNum<=8){//1个杀手的情况
        var x=1;
        clear();
        deal(x);

    }
    else if(peopleNum>=9&&peopleNum<=11){//2个杀手的情况
        var x=2;
        clear();
        deal(x);

    }
    else if(peopleNum>=12&&peopleNum<=15){//3个杀手的情况
        var x=3;
        clear();
        deal(x);

    }
    else if(peopleNum>=16&&peopleNum<=18){//4个杀手的情况
        var x=4;
        clear();
        deal(x);

    }

}



function deal(x) {//根据杀手数决定循环几次随机生成杀手的函数

    var killer=new Array();//声明一个数组不能少括号

    for(var i=0;i<x;i++){//根据条件生成相应数量的杀手并放置在数组中
        killer[i]=Math.floor(Math.random()*peopleNum);
    }

    var newKiller=killer.sort();//对杀手数组进行从小到大的排序

    for(var i=0;i<newKiller.length;i++){//如果有重复的编号就重新执行函数
        if(newKiller[i]==newKiller[i+1]){
            deal(x);//重新运行的函数要写全，昨天没有带参数x导致程序不知道运行什么函数
            return;//这里一定要加return
        }
    }

    var identity=new Array(peopleNum);//声明一个身份数组

    for(var i=0;i<identity.length;i++){
        identity[i]=i+1;
    }

    for(var i=0;i<identity.length;i++){
        if(i==killer[0]||i==killer[1]||i==killer[2]||i==killer[3]){
            var para=document.createElement("div");//创建新的<div>元素
            var node=document.createTextNode(identity[i]+"号--杀手");//创建文本节点
            para.appendChild(node);//向新建的<div>元素添加这个文本节点
            var element=document.getElementById("text");//找到一个已有的元素
            element.appendChild(para);//向这个已有的元素添加这个新建的<div>

        }else{
            var para=document.createElement("p");//创建新的<p>元素
            var node=document.createTextNode(identity[i]+"号--水民");//创建文本节点
            para.appendChild(node);//向新建的<p>元素添加这个文本节点
            var element=document.getElementById("text");//找到一个已有的元素
            element.appendChild(para);//想这个已有的元素添加这个新建的<p>
        }
    }
    
    var b='?';//声明一个字符串存储要传递的参数

    for(var i=0;i<x;i++){//循环将杀手编号添加到字符串中
            b=b+"ID"+(i+1)+"="+killer[i]+"&";
        }
    //给该节点添加一个href属性，并赋值
    document.getElementById("1").setAttribute("href","2.html"+b);
}

function clear() {//声明一个清理指定节点下内容的函数，
    document.getElementById("text").innerHTML='';//将这个节点下的内容变为空。
    /*
     var parent=document.getElementById("text");//选中要被删除的元素的父元素
     var child=parent.getElementsByTagName("p");//选中要被删除的元素

     for(var i=0;i<child.length;i++){
     parent.removeChild(child[i]);
     }
     */
}

function TCP() {
    var a=document.getElementById("1").getAttribute("href");
    if(a=="1.html"){
        alert("先分配身份啊，亲")
    }else{
        location.href=a;
    }
    
}
function ID() {
    var name,value;
    var str=location.href; //取得整个地址栏
    var num=str.indexOf("?");//取得？在地址栏中的位置
    str=str.substr(num+1); //截取问号后面所有的参数
    //取得所有参数   stringvar.substr(start [, length ]

    var arr=str.split("&"); //根据&将这个字符串截取成小段
    //各个参数放到数组里
    for(var i=0;i < arr.length;i++){
        num=arr[i].indexOf("=");//取得等号在字符串中的位置，
        if(num>0){
            name=arr[i].substring(0,num);//将变量名赋给name
            value=arr[i].substr(num+1);//将值赋给value
            this[name]=value;

        }
    }
    var Request = new Object();
    Request = GetRequest();
    var ID1,ID2,ID3,ID4;
    ID1= Request['ID1'];
    ID2 = Request['ID2'];
    ID3= Request['ID3'];
    ID4 = Request['ID4'];
    document.write(ID1);

}
var ID1;
var ID2;
var ID3;
var ID4;
function UrlSearch()
{
    var name,value;
    var str=location.href; //取得整个地址栏

    var num=str.indexOf("?");

    str=str.substr(num+1); //取得所有参数   stringvar.substr(start [, length ]

    var arr=str.split("&"); //各个参数放到数组里

    for(var i=0;i < arr.length;i++){
        num=arr[i].indexOf("=");
        if(num>0){
            name=arr[i].substring(0,num);
            value=arr[i].substr(num+1);
            this[name]=value;
        }
    }
    var ID1=this["ID1"];
    var ID2=this["ID2"];
    var ID3=this["ID3"];
    var ID4=this["ID4"];
    b();
}
function b() {
    
}



