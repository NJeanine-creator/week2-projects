function formCal(){
  var calendar=document.getElementById("birth").value;
  var day=new Date(calendar);
  dd=day.getDate();
  yyyy= day.getFullYear();
  mm=day.getMonth();
  mm=mm+1;
  //here we console.log(dd);
  //console.log(yyyy);
  //console.log(mm);

  var gender=document.getElementById("gender").value;
  console.log(gender);

  var c=(yyy-1)/100 +1;
  var cc= parseFloat(c);
  var day= parseFloat(((cc/4)-2*cc-1) + ((5*yyyy/4))+((26*(mm+1)/10))+dd)mod7;
  var day=(day.toFixed(0));

  //here we console.log(day);
  start:
  if (day <1 || day > 31){
    if (month <1 || month > 12){
      alert("Invalid month");
      goto:start;
    }else {
      alert("Invalid day");
      goto:start;
    }
  }
  
  if(day==0 && gender=='female'){
    document.getElementById('valu').innerHTML='Akosua'
  } else if (day==1 && gender=='female'){
    document.getElementById('valu').innerHTML='Adwoa'
  }else if (day==2 && gender=='female'){
    document.getElementById('valu').innerHTML='Abenaa'
  }else if (day==3 && gender=='female'){
    document.getElementById('valu').innerHTML='Akua'
  }else if (day==4 && gender=='female'){
    document.getElementById('valu').innerHTML='Yaa'
  }else if (day==5 && gender=='female'){
    document.getElementById('valu').innerHTML='Afua'
  }else if (day==6 && gender=='female'){
    document.getElementById('valu').innerHTML='Ama'
  }
else if (day==0 && gender=='male'){
    document.getElementById('valu').innerHTML='Kwasi'
  }else if (day==1 && gender=='male'){
      document.getElementById('valu').innerHTML='Kwadwo'
  }else if (day==2 && gender=='male'){
      document.getElementById('valu').innerHTML='Kwabena'
  }else if (day==3 && gender=='male'){
      document.getElementById('valu').innerHTML='Kwaku'
  }else if (day==4 && gender=='male'){
      document.getElementById('valu').innerHTML='Yaw'
  }else if (day==5 && gender=='male'){
      document.getElementById('valu').innerHTML='Kofi'
  }else if (day==6 && gender=='male'){
      document.getElementById('valu').innerHTML='Kwame'
  }

}
