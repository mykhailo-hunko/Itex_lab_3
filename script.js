var lastVisible = 0;

function f(){
  if(lastVisible>0 & lastVisible < 9){
    document.getElementById(lastVisible + "_text").style.display = "none"; // убираем предыдущее изображение
    setDefaultSize();
  }
  var a = document.getElementById('s1').value;
  if(a != 0){
     document.getElementById(a + "_text").style.display = "block";
     document.getElementById("text").value = document.getElementById(a + "_text").getAttribute('alt');
     var border = $("#" + a + "_text").css("border")
     document.getElementById("m").value = parseInt(border);
    
  } else{
    alert("Выберите изображение!!!");
  }
 
  lastVisible = a;

  size(lastVisible);
  }

  function none(){
    for(let i = 1; i < 9; i++){
      document.getElementById(i + "_text").style.display = "none"; 
  }
  $('img').each(function(){$(this).css('width','400px')});
  $('img').each(function(){$(this).css('height','400px')});
  setDefaultSize();
}

function size(b){
  if(b>0 & b < 9){
    document.getElementById("width").value = document.getElementById('image').getElementsByTagName('img')[b-1].clientWidth;
  document.getElementById("height").value = document.getElementById('image').getElementsByTagName('img')[b-1].clientHeight;
  }
  
}

function setSize(){
  var str = "#"+ lastVisible + "_text";
  var w = document.getElementById("width").value;
  var h =document.getElementById("height").value;
 document.getElementById((lastVisible-1)+ "_text").clientWidth = 0 + w;
 $(str).css('width', w);
 $(str).css('height', h);
}
function setDefaultSize(){
  document.getElementById("width").value = 0;
  document.getElementById("height").value = 0;
  document.getElementById("text").value = "";
  document.getElementById("m").value = "";
}
function altText(){
  var newAlt =  document.getElementById("text").value;
  document.getElementById(lastVisible + "_text").setAttribute('alt', newAlt);
  document.getElementById(lastVisible + "_text").style.border = "" + document.getElementById("m").value  + "px solid red";
}