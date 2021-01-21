'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("a.thumbnail").click(projectClick);
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
		$('#testjs').text("LINGsCARS.com Leader of the Pack - The UK's favorite car leasing website!")
		$(".jumbotron p").addClass("active");
		$("#lab3element").animate({
			"font-size": 50}, 15000);
		
	});
	$('#myelement').click(sF);
	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
}
function sF(event) {
	$(this).text("Changed text");
}
//$(".myclass") for class, $("p") for html element $(".project p") all p inside class project $("p.project") logical and of p and project, $("#project2") css id project2
function projectClick(e) {
	e.preventDefault();
	$(this).css("background-color", "#7fff00");
	
	var containingProject = $(this).closest(".project");
    var description = $(containingProject).find(".project-description");
    if (description.length == 0) {
       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
    } else {
       $('.project-description').fadeToggle();
    }


}