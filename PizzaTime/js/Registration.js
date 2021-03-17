// Start JQuery when webpage loads.
$(document).ready(function() 
{   
    //Checks to see if termsAndConditionsLink is clicked.
    $( "#termsAndConditionsLink" ).click(function() 
    {
        //If termsAndConditionsLink is clicked, then toggle (show/hide) the termsAndConditionsCard
        $( "#termsAndConditionsCard" ).toggle( "slow", function()
        {
            //Animation Activates (Toggling Slowly)
        });
    });
});