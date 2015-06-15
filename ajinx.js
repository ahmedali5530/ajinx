/**
* Plugin to handle normal common events triggered after calling form.js on forms.
* Author @ahmedali5530
***/
(function ( $ ) {
    $.fn.ajinx = function(o, sc, fc) {
		
		//merge the default options with given options
        var ss = $.extend({
            url: '',
            data    : {},
            datatype : 'html',
            method : 'POST',
        }, o );
		
		var target = $(this);
		
		//send the request with $.ajax from now to onward
		
		$.ajax({
			//set the options here
			url:ss.url,
			dataType : ss.datatype,
			method: ss.method,
			data:ss.data,
			contentType : 'application/x-www-form-urlencoded',
			processData : true,
			success:function(res){
				//shows off the progress of request
				if(typeof sc == 'function'){
                                    sc(res);
				}else{
                                    //set the response
                                    target.html(res);
                                }
			},
			error:function(xhr, textStatus, errorThrown){
				if(typeof fc == 'function'){
					fc(url + ' ' + xhr.status + ' ' + errorThrown);
				}
			},
			statusCode: {
				404: function() {
					alert( "page not found" );
				},
				0 : function(){
					alert('Communication Failure.');
				},
			},
		});
	};
	
    $.ajinx = function(o, sc, fc) {
		
		//merge the default options with given options
        var ss = $.extend({
            url: '',
            data    : {},
            datatype : 'html',
            method : 'POST',
        }, o );
		
		//send the request with $.ajax from now to onward
		
		$.ajax({
			//set the options here
			url:ss.url,
			dataType : ss.datatype,
			method: ss.method,
			data:ss.data,
			contentType : 'application/x-www-form-urlencoded',
			processData : true,
			success:function(res){
				//shows off the progress of request
				if(typeof sc == 'function'){
                                    sc(res);
				}
			},
			error:function(xhr, textStatus, errorThrown){
				if(typeof fc == 'function'){
                                    fc(ss.url + ' ' + xhr.status + ' ' + errorThrown);
				}
			},
			statusCode: {
				404: function() {
					alert( "page not found" );
				},
				0 : function(){
					alert('Communication Failure.');
				},
			},
		});
	};
}( jQuery ));

/****************plugin Ends***************/	
