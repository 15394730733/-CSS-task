/**
 * Created by sth on 2016/4/17 0017.
 */
function a(x) {
    location.href=x;
}

var peopleNum;

function checking() {//先验证人数是否正确，然后根据人数生成杀手数
    peopleNum=document.getElementById('pm').value;//声明一个变量存储人数\
    localStorage.clear();//清理上次的记录
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
    var a=document.getElementById('pm').value;//声明一个变量存储人数

    var killer=new Array();//声明一个数组不能少括号
    for(var i=0;i<x;i++){//根据条件生成相应数量的杀手并放置在数组中
        killer[i]=(Math.ceil(Math.random()*a));
    }
    var newKiller=killer.sort();//对杀手数组进行从小到大的排序
    for(var i=0;i<newKiller.length;i++){//如果有重复的编号就重新执行函数
        if(newKiller[i]==newKiller[i+1]){
            deal(x);//重新运行的函数要写全，昨天没有带参数x导致程序不知道运行什么函数
            return;//这里一定要加return
        }
    }
    var identity=new Array(a);//声明一个身份数组

    for(var i=1;i<=a;i++){//给身份数组添加编号
        identity[i]=i;
    }
    for(var i=1;i<=a;i++){//在屏幕上显示分配结果
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

    var b='?peopleNum='+peopleNum;//声明一个字符串存储要传递的参数

    for(var i=0;i<killer.length;i++){//循环将杀手编号添加到字符串中
        b=b+"&ID"+(i+1)+"="+killer[i];
    }
    //给该节点添加一个href属性，并赋值
    document.getElementById("TCP").setAttribute("href","task3.html"+b);



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
    var a=document.getElementById("TCP").getAttribute("href");//获得该节点下的href属性
    if(a=="task2-3.html"){
        alert("先分配身份啊，亲")
    }else{
        location.href=a;
    }
}

function  ID() {
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
    var peopleNum=this["peopleNum"];//找一个变量来接收
    var ID=new Array;
    for(var i=1;i<arr.length;i++){
        ID[i-1]=this["ID"+i];
    }
    /*var ID1=this["ID1"];
    var ID2=this["ID2"];
    var ID3=this["ID3"];
    var ID4=this["ID4"];*/
    localStorage.setItem("task4PN",peopleNum);    
    localStorage.setItem("task4ID",ID);
    var img=document.getElementById("img");//找到中间的图片
    var divnum=document.getElementById("circular");//获取圆圈的节点
    var divNumber=parseInt(divnum.innerText);//将从圆圈中获得的字符串变成整数
    if(peopleNum==divNumber){
        d();
    }else if(img.getAttribute("src")=='3-02.png'){
        c();
    }else{
        b();
    }

}

function b() {
    var divnum=document.getElementById("circular");//获取圆圈的节点
    var divNumber=parseInt(divnum.innerText);//将从圆圈中获得的字符串变成整数
    var buttonText=document.getElementById("button");//获取按钮的节点
    buttonText.innerText="隐藏并传递给"+(divNumber+1)+"号";//改变按钮中的文字
    var img=document.getElementById("img");//找到中间的图片
    img.src="3-02.png";//改变图片的src和padding属性
    img.style.padding="3.3rem 0";
    var ID=localStorage.getItem("task4ID");

    if(divNumber==ID[0]){
        var node=document.createTextNode("角色:杀手");//创建文本节点
        var element=document.getElementById("p");//找到一个已有的元素
        element.innerText="";
        element.style.visibility="visible";//将这个已有元素的属性改变
        element.appendChild(node);//向这个已有的元素添加这个新建的<div>
    }
    else if(divNumber==ID[1]){
        var node=document.createTextNode("角色:杀手");//创建文本节点
        var element=document.getElementById("p");//找到一个已有的元素
        element.innerText="";
        element.style.visibility="visible";//将这个已有元素的属性改变
        element.appendChild(node);//向这个已有的元素添加这个新建的文本节点
    }
    else if(divNumber==ID[2]){
        var node=document.createTextNode("角色:杀手");//创建文本节点
        var element=document.getElementById("p");//找到一个已有的元素
        element.innerText="";
        element.style.visibility="visible";//将这个已有元素的属性改变
        element.appendChild(node);//向这个已有的元素添加这个新建的文本节点
    }
    else if(divNumber==ID[3]){
        var node=document.createTextNode("角色:杀手");//创建文本节点
        var element=document.getElementById("p");//找到一个已有的元素
        element.innerText="";
        element.style.visibility="visible";//将这个已有元素的属性改变
        element.appendChild(node);//向这个已有的元素添加这个新建的文本节点
    }
    else{
        var node=document.createTextNode("角色:水民");//创建文本节点
        var element=document.getElementById("p");//找到一个已有的元素
        element.innerText="";
        element.style.visibility="visible";//将这个已有元素的属性改变
        element.appendChild(node);//向这个已有的元素添加这个新建的文本节点
    }


}

function c() {
    var divnum=document.getElementById("circular");//获取圆圈的节点
    var divNumber=parseInt(divnum.innerText);//将从圆圈中获得的字符串变成整数
    divnum.innerText=divNumber+1;
    var img=document.getElementById("img");//找到中间的图片
    img.src="3-01.png";//改变图片的src和padding属性
    img.style.padding="0";
    var element=document.getElementById("p");//找到一个已有的元素
    element.style.visibility="hidden";//将这个已有元素的属性改变
    var buttonText=document.getElementById("button");//获取按钮的节点
    buttonText.innerText="查看"+(divNumber+1)+"号身份";//改变按钮中的文字
}

function d() {
    var divnum=document.getElementById("circular");//获取圆圈的节点
    var divNumber=parseInt(divnum.innerText);//将从圆圈中获得的字符串变成整数
    var buttonText=document.getElementById("button");//获取按钮的节点
    buttonText.innerText="查看法官台本";//改变按钮中的文字
    buttonText.setAttribute("onclick","a('task4.html')");//给这个按钮一个点击事件
    var img=document.getElementById("img");//找到中间的图片
    img.src="3-02.png";//改变图片的src和padding属性
    img.style.padding="3.3rem 0";

    var ID=localStorage.getItem("task4ID");
     if(divNumber==ID[0]){
        var node=document.createTextNode("角色:杀手");//创建文本节点
        var element=document.getElementById("p");//找到一个已有的元素
        element.innerText="";
        element.style.visibility="visible";//将这个已有元素的属性改变
        element.appendChild(node);//向这个已有的元素添加这个新建的<div>
    }
    else if(divNumber==ID[1]){
        var node=document.createTextNode("角色:杀手");//创建文本节点
        var element=document.getElementById("p");//找到一个已有的元素
        element.innerText="";
        element.style.visibility="visible";//将这个已有元素的属性改变
        element.appendChild(node);//向这个已有的元素添加这个新建的文本节点
    }
    else if(divNumber==ID[2]){
        var node=document.createTextNode("角色:杀手");//创建文本节点
        var element=document.getElementById("p");//找到一个已有的元素
        element.innerText="";
        element.style.visibility="visible";//将这个已有元素的属性改变
        element.appendChild(node);//向这个已有的元素添加这个新建的文本节点
    }
    else if(divNumber==ID[3]){
        var node=document.createTextNode("角色:杀手");//创建文本节点
        var element=document.getElementById("p");//找到一个已有的元素
        element.innerText="";
        element.style.visibility="visible";//将这个已有元素的属性改变
        element.appendChild(node);//向这个已有的元素添加这个新建的文本节点
    }
    else{

        var node=document.createTextNode("角色:水民");//创建文本节点
        var element=document.getElementById("p");//找到一个已有的元素
        element.innerText="";
        element.style.visibility="visible";//将这个已有元素的属性改变
        element.appendChild(node);//向这个已有的元素添加这个新建的文本节点
    }


}

function judge() {
    var people=localStorage.getItem("task4PN");//接收参数
    var peopleNum=parseInt(people);//将人数从字符串变为整数

    for(var i=1;i<=peopleNum;i++){
        add(i);
    }

}

function add(x) {
    var box=document.createElement("div");//白色外框
    box.className="box";//样式是什么
    var img=document.createElement("img");//添加img标签
    img.src="task4-1.png";
    img.style.width="12rem";
    box.appendChild(img);
    var bottom=document.createElement("div");//文字
    bottom.className="bottom";
    var num=document.createTextNode(x+"号");//文字下的内容
    bottom.appendChild(num);
    box.appendChild(bottom);
    var text=document.getElementById("task4");
    text.appendChild(box);

}

function killer() {//杀手杀人
    var people=localStorage.getItem("task4PN");//接收参数
    var peopleNum=parseInt(people);//将人数从字符串变为整数
    var ID=localStorage.getItem("task4ID");
    for(var i=1;i<=peopleNum;i++){
        addbox(i);
    }

    function addbox(x) {//杀手杀人中添加盒子
        for(var i=0;i<ID.length;i++){
            if(x==ID[i]){
                var box=document.createElement("div");//白色外框
                box.className="box";//样式是什么
                var text=document.createTextNode("杀手");//角色信息
                var bottom=document.createElement("div");//编号
                bottom.className="bottom";
                var num=document.createTextNode(x+"号");//文字下的内容
                bottom.appendChild(num);
                box.appendChild(text);
                box.appendChild(bottom);
                var text=document.getElementById("task4");
                text.appendChild(box);
            }else{
                var box=document.createElement("div");//白色外框
                box.className="box";//样式是什么
                box.id=x;
                box.setAttribute("onclick","tag("+x+")");
                var text=document.createTextNode("水民");//角色信息
                var bottom=document.createElement("div");//编号
                bottom.className="bottom";
                var num=document.createTextNode(x+"号");//文字下的内容
                bottom.appendChild(num);
                box.appendChild(text);
                box.appendChild(bottom);
                var text=document.getElementById("task4");
                text.appendChild(box);
                var container=document.createElement("div");
                container.id=x+"-img";
                container.className="box-img";
                var textImg=document.getElementById(""+x+"");
                textImg.appendChild(container);
            }
        }
        /*if(x==||x==id2||x==id3||x==id4){
            var box=document.createElement("div");//白色外框
            box.className="box";//样式是什么
            var text=document.createTextNode("杀手");//角色信息
            var bottom=document.createElement("div");//编号
            bottom.className="bottom";
            var num=document.createTextNode(x+"号");//文字下的内容
            bottom.appendChild(num);
            box.appendChild(text);
            box.appendChild(bottom);
            var text=document.getElementById("task4");
            text.appendChild(box);
        }else{
            var box=document.createElement("div");//白色外框
            box.className="box";//样式是什么
            box.id=x;
            box.setAttribute("onclick","tag("+x+")");
            var text=document.createTextNode("水民");//角色信息
            var bottom=document.createElement("div");//编号
            bottom.className="bottom";
            var num=document.createTextNode(x+"号");//文字下的内容
            bottom.appendChild(num);
            box.appendChild(text);
            box.appendChild(bottom);
            var text=document.getElementById("task4");
            text.appendChild(box);
            var container=document.createElement("div");
            container.id=x+"-img";
            container.className="box-img";
            var textImg=document.getElementById(""+x+"");
            textImg.appendChild(container);
        }*/

   }
}

var killing=0;//未决定时选择的人,虽然每次调用都是未决定的状态，但是使用局部变量后赋值就不好用了

var killingNum=0;//未决定时杀死的人

var killed=new Array(); //已经被杀的人

var killedNum=0;//已经被杀死的人数

function tag(x) {//标记函数
    //var kn=localStorage.getItem("kill");
    //删除方法
    //var people=localStorage.getItem("task4PN");//接收参数
    //var peopleNum=parseInt(people);//将人数从字符串变为整数

    if(killingNum==0){

    }else{
        document.getElementById(killing+"-img").innerHTML='';

    }

    var img=document.createElement("div");
    img.className="box-img-one";
    var container=document.getElementById(x+"-img");
    container.appendChild(img);
    killing=x;
    killingNum=1;
    killedNum=localStorage.getItem("killedNum");//取得已杀死的人数
    if(killedNum==null){
        killedNum=0;//如果没有接收到killedNum,就赋值为0
    }else{

    }
    killed[killedNum]=killing;//数组在


    localStorage.setItem("killed",killed);
    console.log("被杀者id"+killing);
    console.log("数组中的第"+killedNum+"个元素是"+killed[0]+killed[1]);

}
function certain(x) {//从杀手杀人页面跳转证明已经死了一名水民
    killedNum=(parseInt(killedNum)+1);
    localStorage.setItem("killedNum",killedNum);
    alert("已经被杀死的人数"+killedNum);//被杀的人数

    location.href=x;
}

//var id=1;

function text() {//杀手杀死
    killed=localStorage.getItem("killed");
    alert("被杀死的人"+killed);
    //存放杀手的id
    var ID=localStorage.getItem("task4ID");


    /*DOM没有提供insertAfter()方法
    function insertAfter(newElement, targetElement){
        var parent = targetElement.parentNode;
        if (parent.lastChild == targetElement) {
    // 如果最后的节点是目标元素，则直接添加。因为默认是最后
            parent.appendChild(newElement);
        }
        else {
            parent.insertBefore(newElement, targetElement.nextSibling);
    //如果不是，则插入在目标元素的下一个兄弟节点 的前面。也就是目标元素的后面
        }
    }*/
    alert("被杀死的人是"+killed);
    alert("杀手的ID是"+ID);
    for(var a=0;a<killed.length;a++  ){
        for(var i=0;i<ID.length;i++){
            if(killed[a]==ID[i]){

            }else{
                var box=document.createElement("div");//白色外框
                box.className="text";
                var text=document.createTextNode(killed[a]+"号被杀手杀死，真是身份是水民");//角色信息
                box.appendChild(text);
                var container=document.getElementById("task4");
                container.appendChild(box);
            }


        }
    }
    /*if(killed[0]==id1||killed==id2||killed==id3||killed==id4){
            var box=document.createElement("div");//白色外框
            box.className="text";
            box.id=id+"-text";
            var text=document.createTextNode(killed+"号被投票杀死，真是身份是杀手");//角色信息
            box.appendChild(text);
            var container=document.getElementById("task4");
            container.appendChild(box);

            var box=document.createElement("div");//白色外框
            box.className="text";
            box.id=id+"-text";
            var text=document.createTextNode(killed+"号被投票杀死，真是身份是杀手");//角色信息
            box.appendChild(text);
            var container=document.getElementById("task4");
            var idbox=document.getElementById((id-1)+"-text");
            container.insertAfter(box,idbox);



        }


    else {
        var box = document.createElement("div");//白色外框
        box.className = "text";
        box.id = id + "-text";
        var text = document.createTextNode(killed + "号被投票杀死，真是身份是水民");//角色信息
        box.appendChild(text);
        var container = document.getElementById("task4");
        container.appendChild(box);

         var box=document.createElement("div");//白色外框
         box.className="text";
         box.id=id+"-text";
         var text=document.createTextNode(killed+"号被投票杀死，真是身份是杀手");//角色信息
         box.appendChild(text);
         var container=document.getElementById("task4");
         var idbox=document.getElementById((id-1)+"-text");
         container.insertAfter(box,idbox);



    }*/

}

function vote() {//投票方法
    killed=localStorage.getItem("killed");//杀手杀死的人
    var ID=localStorage.getItem("task4ID");
    var people=localStorage.getItem("task4PN");//接收参数
    var peopleNum=parseInt(people);//将人数从字符串变为整数
    for(var i=1;i<=peopleNum;i++){
        addboxVote(i);
    }
    function addboxVote(x) {//投票中添加盒子
        for (var i = 0; i < killed.length; i++) {
            if (x == killed[i]) {
                var box = document.createElement("div");//白色外框
                box.className = "boxs";//样式是什么
                var text = document.createTextNode("死亡");//角色信息
                var bottom = document.createElement("div");//编号
                bottom.className = "bottom";
                var num = document.createTextNode(x + "号");//文字下的内容
                bottom.appendChild(num);
                box.appendChild(text);
                box.appendChild(bottom);
                var text = document.getElementById("task4");
                text.appendChild(box);

            } else if (x == ID[0] || x == ID[1] || x == ID[2] || x == ID[3]) {//杀手
                var box = document.createElement("div");//白色外框
                box.className = "box";//样式是什么
                box.id = x;
                box.setAttribute("onclick", "tag(" + x + ")");
                var text = document.createTextNode("杀手");//角色信息
                var bottom = document.createElement("div");//编号
                bottom.className = "bottom";
                var num = document.createTextNode(x + "号");//文字下的内容
                bottom.appendChild(num);
                box.appendChild(text);
                box.appendChild(bottom);
                var text = document.getElementById("task4");
                text.appendChild(box);
                var container = document.createElement("div");
                container.id = x + "-img";
                container.className = "box-img";
                var textImg = document.getElementById("" + x + "");
                textImg.appendChild(container);
            }
            else {//水民
                var box = document.createElement("div");//白色外框
                box.className = "box";//样式是什么
                box.id = x;
                box.setAttribute("onclick", "tag(" + x + ")");
                var text = document.createTextNode("水民");//角色信息
                var bottom = document.createElement("div");//编号
                bottom.className = "bottom";
                var num = document.createTextNode(x + "号");//文字下的内容
                bottom.appendChild(num);
                box.appendChild(text);
                box.appendChild(bottom);
                var text = document.getElementById("task4");
                text.appendChild(box);
                var container = document.createElement("div");
                container.id = x + "-img";
                container.className = "box-img";
                var textImg = document.getElementById("" + x + "");
                textImg.appendChild(container);

            }

        }

    }

}

/*
function checking() {//先验证人数是否正确，然后根据人数生成杀手数
    var peopleNum=6;
    if(peopleNum>18||peopleNum<6){//判断人数是否满足要求
        alert("游戏人数必须在6-18人之间");//弹出警告
    }
    else if(peopleNum>=6&&peopleNum<=8){//1个杀手的情况
        var x=1;
        deal(x);
        
    }
    else if(peopleNum>=9&&peopleNum<=11){//2个杀手的情况
        var x=2;
        deal(x);
    }
    else if(peopleNum>=12&&peopleNum<=15){//3个杀手的情况
        var x=3;
        deal(x);
    }
    else if(peopleNum>=16&&peopleNum<=18){//4个杀手的情况
        var x=4;
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
            var para=document.createElement("p");//创建新的<div>元素
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

}*/