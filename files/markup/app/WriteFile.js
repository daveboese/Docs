
/** # WriteFile #
 * Writes text to a local file.
 * 
 * See Also: @ReadFile.
 * $$ app.WriteFile(file, text, mode, encoding) $$ 
 * @param {str_ptf} file 
 * @param {str} text 
 * @param {str} mode Append|ASCII
 * @param {str} encoding US
*/


// WriteFile.txt --> All the sample codes

/** @Sample
<sample Append file and get line count>
function OnStart()
{
    <b>app.WriteFile( "myFile.txt", "Hello World from Write\n", "Append" );</b>

    var txt = app.ReadFile("myFile.txt");
    var length = txt.split("\n").length;
    app.ShowPopup("myFile contains " + length + " lines");
}
</sample>

 */

