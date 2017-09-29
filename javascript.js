

window.onload = function() {




  var pop1 = document.getElementById('add1pop');
  var btn1 = document.getElementById('add1');
  var close1 = document.getElementById('close1');

  btn1.onclick = function() {
    pop1.style.display='block';
  }

  close1.onclick = function() {
    pop1.style.display='none';
  }



var pop2 = document.getElementById('add2pop');
var btn2 = document.getElementById('add2');
var close2 = document.getElementById('close2');

btn2.onclick = function() {
  pop2.style.display='block';
}

close2.onclick = function() {
  pop2.style.display='none';
}


var addNew = document.getElementById('addanchor');
var closeAdd = document.getElementById('closeadd1');
var createAdd = document.getElementById('create1');

addNew.onclick = function() {
  createAdd.style.display='block';
}

closeAdd.onclick = function() {
  createAdd.style.display='none';
}



var pop3 = document.getElementById('add3pop');
var btn3 = document.getElementById('add3');
var close3 = document.getElementById('close3');

btn3.onclick = function() {
  pop3.style.display='block';
}

close3.onclick = function() {
  pop3.style.display='none';
}



var pop4 = document.getElementById('add4pop');
var btn4 = document.getElementById('add4');
var close4 = document.getElementById('close4');

btn4.onclick = function() {
  pop4.style.display='block';
}

close4.onclick = function() {
  pop4.style.display='none';
}


var pop5 = document.getElementById('add5pop');
var btn5 = document.getElementById('add5');
var close5 = document.getElementById('close5');

btn5.onclick = function() {
  pop5.style.display='block';
}

close5.onclick = function() {
  pop5.style.display='none';
}


var pop6 = document.getElementById('add6pop');
var btn6 = document.getElementById('add6');
var close6 = document.getElementById('close6');

btn6.onclick = function() {
  pop6.style.display='block';
}

close6.onclick = function() {
  pop6.style.display='none';
}


var pop7 = document.getElementById('add7pop');
var btn7 = document.getElementById('add7');
var close7 = document.getElementById('close7');

btn7.onclick = function() {
  pop7.style.display='block';
}

close7.onclick = function() {
  pop7.style.display='none';
}

var pop8 = document.getElementById('add8pop');
var btn8 = document.getElementById('add8');
var close8 = document.getElementById('close8');

btn8.onclick = function() {
  pop8.style.display='block';
}

close8.onclick = function() {
  pop8.style.display='none';
}


var pop9 = document.getElementById('add9pop');
var btn9 = document.getElementById('add9');
var close9 = document.getElementById('close9');

btn9.onclick = function() {
  pop9.style.display='block';
}

close9.onclick = function() {
  pop9.style.display='none';
}

//KÖP OCH BYT display
//var kopAdds = document.getElementsByClassName('sale');


var kop = document.getElementById('kop');
console.dir(kop.checked);

kop.onchange = function(){
  //for (var i = 0; i < kopAdds.length; i++)
  //kopAdds[i].style.display='block';
  if (kop.checked == true) {
  document.getElementById('add1').style.display ='block';
  document.getElementById('add2').style.display ='block';
  document.getElementById('add4').style.display ='block';
  document.getElementById('add5').style.display ='block';
  document.getElementById('add6').style.display ='block';
  document.getElementById('add7').style.display ='block';
  document.getElementById('add9').style.display ='block';
    //kopAdds[i].style.display='block';
} if (kop.checked == false) {
  document.getElementById('add1').style.display ='none';
  document.getElementById('add2').style.display ='none';
  document.getElementById('add4').style.display ='none';
  document.getElementById('add5').style.display ='none';
  document.getElementById('add6').style.display ='none';
  document.getElementById('add7').style.display ='none';
  document.getElementById('add9').style.display ='none';
}
}

  //for (var i = 0; i < kopAdds.length; i++)
  //kopAdds[i].style.display='block';
    //kopAdds[i].style.display='block';

var byt = document.getElementById('byt');
console.dir(byt.checked);

byt.onchange = function() {
  if (byt.checked == true) {
  //kopAdds.style.display='block';
  document.getElementById('add3').style.display ='block';
  document.getElementById('add8').style.display ='block';

} if (byt.checked == false) {
  document.getElementById('add3').style.display ='none';
  document.getElementById('add8').style.display ='none';

}
}

};
