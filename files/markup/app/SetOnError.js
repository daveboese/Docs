
/** # SetOnError #
 * Define a callback function to catch thrown errors messages.
 * 
 * See also: @Error
 * $$ app.SetOnError(callback) $$ 
*/


// SetOnError.txt --> All the sample codes

/** @Sample
<sample Catch JS Errors>
function OnStart()
{
    app.SetOnError( OnError );
    throw "My thrown error";
}

<b>function OnError( msg, line, file )
{
    var text =
        'Message: "' + msg + '"\n' +
        'Line: ' + line + '\n' +
        'File: "' + app.Uri2Path(file) + '"';

    app.Alert( text, "Received error message:" );
}</b>
</sample>

<!--sample Catch JS Errors>
function OnStart()
{
    app.SetOnError( OnError );
    throw "My thrown error";
}

<b>function OnError( msg, line, file )
{
    var text = `
Message: "${msg}"
Line: ${line}
File: "${decodeURI(file)}"`;

    app.Alert( text, "Received error message:" );
}<b>
</sample-->

 */

