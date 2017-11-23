$(function(){
  htmlobj=$.ajax({url:"http://127.0.0.1:3000/api_info",async:false});
  var info = htmlobj.responseJSON;
  var pags = Math.ceil(info.length/5);
  var pag = 1;
  var len = 5;
  var begin = 0;
  $("#pag").html("当前第"+ pag +"页,共"+ pags +"页");
  for (var i = begin; i < len; i++) {
    $(".table tbody").append("<tr><td>"+info[i].name+"</td><td>"+info[i].password+"</td><td>"+info[i].email+"</td><td>"+info[i].city+"</td><td>"+info[i].qq+"</td><td><a href='/update/"+info[i]._id+"'>修改</a> <a href='/del/"+info[i]._id+"'>删除</a></td></tr>");
  }

  function next(){
    if(pag < pags){
      pag += 1;
      $("#pag").html("当前第"+ pag +"页,共"+ pags +"页");
      len += 5;
      begin += 5;
      $(".table tbody").html("");
      for (var i = begin; i < len; i++) {
        if(info[i]){
          $(".table tbody").append("<tr><td>"+info[i].name+"</td><td>"+info[i].password+"</td><td>"+info[i].email+"</td><td>"+info[i].city+"</td><td>"+info[i].qq+"</td><td><a href='/update/"+info[i]._id+"'>修改</a> <a href='/del/"+info[i]._id+"'>删除</a></td></tr>");
        }
      }
    }
  }

  $("#next").on('click',next);
  function back(){
    if(pag > 1){
      pag -= 1;
      $("#pag").html("当前第"+ pag +"页,共"+ pags +"页");
      len -= 5;
      begin -= 5;
      $(".table tbody").html("");
      for (var i = begin; i < len; i++) {
      if(info[i]){
        $(".table tbody").append("<tr><td>"+info[i].name+"</td><td>"+info[i].password+"</td><td>"+info[i].email+"</td><td>"+info[i].city+"</td><td>"+info[i].qq+"</td><td><a href='/update/"+info[i]._id+"'>修改</a> <a href='/del/"+info[i]._id+"'>删除</a></td></tr>");
      }
    }
    }
  }
  $("#back").on('click',back);
})
