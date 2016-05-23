/**
 * Created by sth on 2016/4/12 0012.
 */
var colorNum=0;//声明一个变量来控制颜色
var color;//声明一个变量来根据colorNum得到相应的颜色
var idNum=0;//声明一个变量来控制id
var t;//声明一个变量控制时间
function change() {
    idNum=Math.random();//生成一个随机数
    idNum=Math.ceil(idNum*9);//向上取整
    colorNum=Math.random()*3;//生成颜色随机数
    if(colorNum!=null){//对颜色随机数进行判断
        if(colorNum<1){
            color='red';
        }
        if(colorNum<2&&colorNum>=1){
            color='green';
        }
        if(colorNum<3&&colorNum>=2){
            color='blue';
        }
    }
    document.getElementById("1").style.backgroundColor="#00ABFF";
    document.getElementById("2").style.backgroundColor="#00ABFF";
    document.getElementById("3").style.backgroundColor="#00ABFF";
    document.getElementById("4").style.backgroundColor="#00ABFF";
    document.getElementById("5").style.backgroundColor="#00ABFF";
    document.getElementById("6").style.backgroundColor="#00ABFF";
    document.getElementById("7").style.backgroundColor="#00ABFF";
    document.getElementById("8").style.backgroundColor="#00ABFF";
    document.getElementById("9").style.backgroundColor="#00ABFF";
    document.getElementById(""+idNum+"").style.backgroundColor=color;//改变这个随机id对应元素的背景色
    console.log("格子"+idNum+"变成"+color)

}

function time() {
    change();
    t=setTimeout("time()",1000);//循环调用方法，使其可以每秒执行一次
}

