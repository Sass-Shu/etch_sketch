$(document).ready(function() {
    function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


    console.log( "ready!");
    var rows = 16
    var columns = 16
    $('.standardthing').css("width", ((832/columns-(2))+"px"));
   	$('.standardthing').css("height", ((832/rows-(2))+"px"));
    for(var b = 0; b<=15; b++){
    $('<div />').addClass('gridHorizontal').attr('id','horizontal'+b).appendTo('#contain');
    console.log( "for loop has run " + b + " times" );
		for(var i = 0; i<=15; i++){
    	$('<div />').addClass('standardthing').attr('id','div'+i).appendTo('#horizontal'+b);

    	console.log( "for loop has run " + i + " times" );
	}
	}



	$('.standardthing').hover(
    function(){
   	console.log(jQuery('this').css("background-color"));
    $(this).css("background-color", "rgba(255,255,0,0.2)");
	var currentColor = $('this').css("backgroundColor");
	var lastComma = currentColor.lastIndexOf(',');
	var newColor = currentColor.slice(0, lastComma + 1) +  + ")";
	
	$(this).css('background-color', newColor);




  	}
    ,
    function(){
    
    })

	$('button').click(
    function(){
    	console.log( "click");
    	console.log(b)
    	for(var c = 0; c<=rows; c++){
    		$('#horizontal'+c).remove();
    		console.log("delete is running...");
    	}


    	rows = prompt("How many rows would you like?",16);
    	columns = prompt("How many columns would you like?",16);
    	
    	


    		for(var b = 0; b<=rows-1; b++){
    			$('<div />').addClass('gridHorizontal').attr('id','horizontal'+b).appendTo('#contain');

    			console.log( "for loop has run " + b + " times" );
					for(var i = 0; i<=(columns-1); i++){
    					$('<div />').addClass('standardthing').attr('id','div'+i).appendTo('#horizontal'+b);
    					
    					console.log( "for loop has run " + i + " times" );
					}
			}
			$('.gridHorizontal').css("height", (((832/rows)+2)+"px"));
			$('.standardthing').css("width", (((832/columns)-(2))+"px"));
    		$('.standardthing').css("height", (((832/rows)-(2))+"px"));
    })
$(document).on("mouseover",'.standardthing', function () {
     console.log($('this').css("backgroundColor"));
     console.log(jQuery('this').css("background-color"));
    $(this).css("background-color", "rgba(255,255,0,0.2)");
	var currentColor = $('this').css("background-color");
	var lastComma = currentColor.lastIndexOf(',');
	var newColor = currentColor.slice(0, lastComma + 1) +  + ")";
	
	$(this).css('background-color', newColor);

	});
});