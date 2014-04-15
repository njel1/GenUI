


var timeoutID;


$( document ).ready(function() {
	
	$(".editable-div").attr('contentEditable',true);
	
	
	$('.editable-div').bind('DOMCharacterDataModified', function() {
    clearTimeout(timeoutID);
    $that = $(this);
    timeoutID = setTimeout(function() {
        $that.trigger('change')
    }, 500)
	});
	
	$('.editable-div').bind('change', function() {		
	    $("#form-save-button").val("Edited");
		$(".form-textarea-wrapper textarea").eq( $(this).index() -1).val( $(this).html());				
	});
	
		
		/*
	$("#webpage-node-form").submit(function(e) {
        
        e.preventDefault();
        
        var form_data = $(this).serialize();
        var form_url = $(this).attr("action");
        var form_method = $(this).attr("method").toUpperCase();
        
        
        
        $.ajax({
            url: form_url, 
            type: form_method,      
            data: form_data,     
            cache: false,
            success: function(returnhtml){                          
                $("#form-save-button").val("Saved");
                
			                  
            }           
        });    
        
    });
	*/

		
	
	$( "#form-save-button" ).click(function() {
	$("#form-save-button").val("Saving...");
	var newtimeout = setTimeout(function() {
		
	
        $("#webpage-node-form").submit();
    }, 500)
	
  
  
});


});
