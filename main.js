 const boxes=document.getElementsByClassName('boxs')
 const st=document.querySelectorAll('.st');
 const head =document.querySelectorAll('.head');
 const hand1=document.querySelectorAll('.hand1');
 const hand2=document.querySelectorAll('.hand2');
 const leg1=document.querySelectorAll('.leg1');
 const leg2=document.querySelectorAll('.leg2');
 const hd1=document.getElementById('hd1');
 const start=document.getElementById('start');
const player=document.getElementById('player')
 const generator=document.querySelectorAll('.generator')
 const ran=document.getElementById('ran')
const restart=document.getElementById('restart')

 const s1=document.getElementById('s1');
 const s2=document.getElementById('s2');
 const s3=document.getElementById('s3');
 const s4=document.getElementById('s4');
 const s5=document.getElementById('s5');
 
 const s121=document.getElementById('21s1');
 const s122=document.getElementById('22s1');
 const s123=document.getElementById('23s1');
 const s124=document.getElementById('24s1');
 const s125=document.getElementById('25s1');
 

 const h1=document.getElementById('h1')
 const h112=document.getElementById('12h1')
 const h113=document.getElementById('13h1')
 const h114=document.getElementById('14h1')
 const h115=document.getElementById('15h1')

 const h121=document.getElementById('21h1')
 const h122=document.getElementById('22h1')
 const h123=document.getElementById('23h1')
 const h124=document.getElementById('24h1')
 const h125=document.getElementById('25h1')

 const h212=document.getElementById('12h2')
 const h213=document.getElementById('13h2')
 const h214=document.getElementById('14h2')
 const h215=document.getElementById('15h2')

 const h221=document.getElementById('21h2')
 const h222=document.getElementById('22h2')
 const h223=document.getElementById('23h2')
 const h224=document.getElementById('24h2')
 const h225=document.getElementById('25h2')

 const l1=document.getElementById('l1')
 const l112=document.getElementById('12l1')
 const l113=document.getElementById('13l1')
 const l114=document.getElementById('14l1')
 const l115=document.getElementById('15l1')
 
 const l121=document.getElementById('21l1')
 const l122=document.getElementById('22l1')
 const l123=document.getElementById('23l1')
 const l124=document.getElementById('24l1')
 const l125=document.getElementById('25l1')

 const l2=document.getElementById('l2')
 const l212=document.getElementById('12l2')
 const l213=document.getElementById('13l2')
 const l214=document.getElementById('14l2')
 const l215=document.getElementById('15l2')
 
 const l221=document.getElementById('21l2')
 const l222=document.getElementById('22l2')
 const l223=document.getElementById('23l2')
 const l224=document.getElementById('24l2')
 const l225=document.getElementById('25l2')

 const hd2=document.getElementById('hd2')
 const hd3=document.getElementById('hd3')
 const hd4=document.getElementById('hd4')
 const hd5=document.getElementById('hd5')

 const hd121=document.getElementById('21hd1');
 const hd122=document.getElementById('22hd1');
 const hd123=document.getElementById('23hd1');
 const hd124=document.getElementById('24hd1');
 const hd125=document.getElementById('25hd1');
 
const gameover=document.getElementById('gameover')
 const gamebox=document.getElementById('gamebox')

 const choose=document.getElementById('choose')
const tossw=document.getElementById('tossw')
const btn1=document.getElementById('btn1')
const btn2=document.getElementById('btn2')

function ab(){
    tossw.innerText='';
    generator.forEach(function (e){
        e.style.display='flex';
    });
    player.innerText=turn;
}
function toss(){
     choose.style.display='none'
     btn1.style.display='none'
     btn2.style.display='none'
    var r = Math.floor(Math.random() * 2);
    if (r == 0) {
        tossw.innerHTML = "Toss Won by Player 1";
        turn = "Player1";
        setTimeout(ab,2000);
    }
    else {
        tossw.innerHTML = "Toss Won by Player 2";
        turn = "Player2";
        setTimeout(ab,2000);
    }
 }

function d(){
    head.forEach(function (e){
        e.style.display='none';
    });
    st.forEach(function (e){
        e.style.display='none';
    });
    hand1.forEach(function (e){
        e.style.display='none';
    });
    hand2.forEach(function (e){
        e.style.display='none';
    });
    leg1.forEach(function (e){
        e.style.display='none';
    });
    leg2.forEach(function (e){
        e.style.display='none';
    });
    generator.forEach(function (e){
        e.style.display='none';
    });
    start.style.display='none';
    choose.style.display='block'
    btn1.style.display='block'
    btn2.style.display='block' 
}
// let turn="Player1"
function changeturn()
{
    return turn=== "Player1"?"Player2":"Player1"
}
function deleteran(){
   ran.innerText='';
}
let a=0;
function check1(){
    if(turn=="Player1" && randomnum==1){
        hd1.style.display='flex';
        a++;
        switch(a){
            case 2: s1.style.display='flex';
            break;
            case 3:h1.style.display='flex';
            break;
            case 4:h2.style.display='flex';
            break;
            case 5:l1.style.display='flex';
            break;
            case 6:l2.style.display='flex';
            break;   
        }      
    }
}
let b=0;
function check2(){
    if(turn=="Player1" && randomnum==2){
        hd2.style.display='flex';
        b++;
        switch(b){
            case 2: s2.style.display='flex';
            break;
            case 3:h112.style.display='flex';
            break;
            case 4:h212.style.display='flex';
            break;
            case 5:l112.style.display='flex';
            break;
            case 6:l212.style.display='flex';
            break;   
        }      
    }
}
let c=0;
function check3(){
    if(turn=="Player1" && randomnum==3){
        hd3.style.display='flex';
        c++;
        switch(c){
            case 2: s3.style.display='flex';
            break;
            case 3:h113.style.display='flex';
            break;
            case 4:h213.style.display='flex';
            break;
            case 5:l113.style.display='flex';
            break;
            case 6:l213.style.display='flex';
            break;   
        }      
    }
}
let g=0;
function check4(){
    if(turn=="Player1" && randomnum==4){
        hd4.style.display='flex';
        g++;
        switch(g){
            case 2: s4.style.display='flex';
            break;
            case 3:h114.style.display='flex';
            break;
            case 4:h214.style.display='flex';
            break;
            case 5:l114.style.display='flex';
            break;
            case 6:l214.style.display='flex';
            break;   
        }      
    }
}
let f=0;
function check5(){
    if(turn=="Player1" && randomnum==5){
        hd5.style.display='flex';
        f++;
        switch(f){
            case 2: s5.style.display='flex';
            break;
            case 3:h115.style.display='flex';
            break;
            case 4:h215.style.display='flex';
            break;
            case 5:l115.style.display='flex';
            break;
            case 6:l215.style.display='flex';
            break;   
        }      
    }
}
let h=0;
function check6(){
    if(turn=="Player2" && randomnum==1){
        hd121.style.display='flex';
        h++;
        switch(h){
            case 2: s121.style.display='flex';
            break;
            case 3:h121.style.display='flex';
            break;
            case 4:h221.style.display='flex';
            break;
            case 5:l121.style.display='flex';
            break;
            case 6:l221.style.display='flex';
            break;   
        }      
     }
}
let i=0;
function check7(){
    if(turn=="Player2" && randomnum==2){
        hd122.style.display='flex';
        i++;
        switch(i){
            case 2: s122.style.display='flex';
            break;
            case 3:h122.style.display='flex';
            break;
            case 4:h222.style.display='flex';
            break;
            case 5:l122.style.display='flex';
            break;
            case 6:l222.style.display='flex';
            break;   
        }      
     }
}
let j=0;
function check8(){
    if(turn=="Player2" && randomnum==3){
        hd123.style.display='flex';
        j++;
        switch(j){
            case 2: s123.style.display='flex';
            break;
            case 3:h123.style.display='flex';
            break;
            case 4:h223.style.display='flex';
            break;
            case 5:l123.style.display='flex';
            break;
            case 6:l223.style.display='flex';
            break;   
        }      
     }
}
let k=0;
function check9(){
    if(turn=="Player2" && randomnum==4){
        hd124.style.display='flex';
        k++;
        switch(k){
            case 2: s124.style.display='flex';
            break;
            case 3:h124.style.display='flex';
            break;
            case 4:h224.style.display='flex';
            break;
            case 5:l124.style.display='flex';
            break;
            case 6:l224.style.display='flex';
            break;   
        }      
     }
}
let l=0;
function check10(){
    if(turn=="Player2" && randomnum==5){
        hd125.style.display='flex';
        l++;
        switch(l){
            case 2: s125.style.display='flex';
            break;
            case 3:h125.style.display='flex';
            break;
            case 4:h225.style.display='flex';
            break;
            case 5:l125.style.display='flex';
            break;
            case 6:l225.style.display='flex';
            break;   
        }      
     }
}
function randomgenerator(){
randomnum= Math.floor(Math.random()*5+1);
 check1();
 check2();
 check3();
 check4();
 check5();
 check6();
 check7();
 check8();
 check9();
 check10();
ran.innerText=":" +randomnum;
setTimeout(deleteran,1000);
}
function time(){   
    player.innerText=turn;    
}
function Restart(){
head.forEach(function (e){
        e.style.display='none';
    });
    st.forEach(function (e){
        e.style.display='none';
    });
    hand1.forEach(function (e){
        e.style.display='none';
    });
    hand2.forEach(function (e){
        e.style.display='none';
    });
    leg1.forEach(function (e){
        e.style.display='none';
    });
    leg2.forEach(function (e){
        e.style.display='none';
    });
    generator.forEach(function (e){
        e.style.display='none';
    });
    start.style.display='flex';
    a=0,b=0,c=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0;
    btn1.style.display='none'
    btn2.style.display='none' 
}
function autostart(){
    gameover.style.display='none'
        gamebox.style.display='grid'
        gameover.innerText=""
    Restart();   
}
function turning(){
    randomgenerator();
    if(a>=6 && b>=6 && c>=6 && f>=6 && g>=6)
    {
        alert("Player1 wins!!!!!!!!!")
        autostart();
    }
    else if(h>=6 && i>=6 && j>=6 && k>=6 && l>=6)
    {
        alert("Player2 wins!!!!!!!!!")
        autostart();       
    }
    turn=changeturn();
    setTimeout(time,1000);
}
