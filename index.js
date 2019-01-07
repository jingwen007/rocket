var body = document.body;
//var body = document.querySelector('body');
var start = document.querySelector('.start');
var reset = document.querySelector('.reset');
var pos1 = document.querySelector('.pos-1');
var pos2 = document.querySelector('.pos-2');
var pos3 = document.querySelector('.pos-3');
var result = document.querySelector('.result');


function goRocket(e){
    //console.log(e.keyCode);
    //查詢目前在網頁上點擊的是哪一個按鈕
    switch(e.keyCode){
        case 49:
        //1
            document.querySelector('.rocket-1').style.bottom = '2000px'
            //選擇.rocket-1位移到2000的位置上
            break;
        case 50:
        //2
            document.querySelector('.rocket-2').style.bottom = '2000px'
            //選擇.rocket-2位移到2000的位置上
            break;
        case 51: 
        //3
            document.querySelector('.rocket-3').style.bottom = '2000px'
            //選擇.rocket-3位移到2000的位置上
            break;
    }
}
function gobtnRocket(e){
    
    var v1 = Math.floor(Math.random()*950);
    var v2 = Math.floor(Math.random()*950);
    var v3 = Math.floor(Math.random()*950);

    document.querySelector('.rocket-1').style.bottom = v1 + "px";
    document.querySelector('.rocket-2').style.bottom = v2 + "px";
    document.querySelector('.rocket-3').style.bottom = v3 + "px";

    pos1.innerHTML = "第1架火箭："+document.querySelector('.rocket-1').style.bottom+"px";
    //rank.push(v1);
    pos2.innerHTML = "第2架火箭："+document.querySelector('.rocket-2').style.bottom+"px";
    //rank.push(v2);
    pos3.innerHTML = "第3架火箭："+document.querySelector('.rocket-3').style.bottom+"px";
    //rank.push(v3);
    
    var rank = [
        {num:"1",rate:v1},
        {num:"2",rate:v2},
        {num:"3",rate:v3}
    ];
    //console.log(rank);
    let rocketarry = rank.sort(function(a,b){
        return b.rate-a.rate;
    });
    console.log(rocketarry);
    let str = "";
    for(let i = 0 ;i<rocketarry.length;i++){
        if(i==0){
            console.log(rocketarry[i]);
            str += "第一名:第"+rocketarry[i].num+"架飛機";
        }else if(i==1){
            str += "<br />"+"第二名:第"+rocketarry[i].num+"架飛機";
        }else{
            str += "<br />"+"第三名:第"+rocketarry[i].num+"架飛機";
        }
        result.innerHTML = str;
    }

    //以下是失敗的陣列做法，後來發現無法排出第幾架飛機出來
    // document.querySelector('.rocket-1').style.bottom = Math.floor(Math.random()*950)+'px';
    // document.querySelector('.rocket-2').style.bottom = Math.floor(Math.random()*950)+'px';
    // document.querySelector('.rocket-3').style.bottom = Math.floor(Math.random()*950)+'px';

    // pos1.innerHTML = "第一架火箭："+document.querySelector('.rocket-1').style.bottom+"px";
    // rank.push(document.querySelector('.rocket-2').style.bottom);
    
    // pos2.innerHTML = "第二架火箭："+document.querySelector('.rocket-2').style.bottom+"px";
    // pos3.innerHTML = "第三架火箭："+document.querySelector('.rocket-3').style.bottom+"px";
    
}
function resetbtnRocket(e){
    window.location.reload();
    // document.querySelector('.rocket-1').style.bottom = '0px';
    // document.querySelector('.rocket-2').style.bottom = '0px';
    // document.querySelector('.rocket-3').style.bottom = '0px';
}
body.addEventListener('keydown',goRocket,false)
//document.addEventListener('keydown',goRocket,false)
//上面這行也可以

start.addEventListener('click',gobtnRocket,false)
reset.addEventListener('click',resetbtnRocket,false)