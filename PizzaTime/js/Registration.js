$(document).ready(function() 
{
    $( "#invalidCheck" ).click(function() 
    {
        $( "#termsAndConditions" ).toggle( "slow", function()
        {
            // Animation complete.
        });
    });
});