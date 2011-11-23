$(function(){
	    $("#need_inspiration").submit(function(e){
	      var text = $("#need_inspiration input[name]").val();
	      $("#need_inspiration input[name]").val($.base64.encode(text));
	      //console.log($(this));
	    });
	    
	    var message = null;
	    message = $.deparam.querystring();
	    console.log(message.m);
	    if( message.m ){
  	    $("#message").text(message.m);
	    }else if( message.u ){
	      $("#message").text($.base64.decode(message.u));
      }else{
	      $("#result").hide();
	    }
	  });