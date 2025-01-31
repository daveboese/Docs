
/** # Quit #
 * Quits the app with showing an @Alert dialog box before exiting. The function will pause the program and exit before any further commands can be executed.
 * $$ app.Quit(msg, title, options) $$ 
 * @param {str} msg 
 * @param {str} title 
 * @param {str_com} options NoDim,NoFocus
*/


// Quit.txt --> All the sample codes

/** @Sample
<sample Quit>
function OnStart()
{
    app.ShowPopup( "Exciting" );
    <b>app.Quit( "App will now exit anyway.", "No error detected." );</b>
    app.ShowPopup( "Exited" ); // not shown
}
</sample>

 */

