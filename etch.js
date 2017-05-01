$(document).ready(function() {
    console.log( "ready!");
    for(var i = 0; i<=10; i++){
    $('<div />').addClass('.standardthing').attr('id','div'+i).appendTo('body');
    console.log( "for loop has run " + i + " times" );
	}
});