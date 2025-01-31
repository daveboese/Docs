
/** # ReadFile #
 * Reads a file from the local filesystem and returns its contents.
 * 
 * See also: @WriteFile
 * $$ app.ReadFile(file, encoding) $$ 
 * @param {str_ptc} file 
 * @param {str} encoding US
*/


// ReadFile.txt --> All the sample codes

/** @Sample
<sample Append file and get line count>
function OnStart()
{
    app.WriteFile( "myFile.txt", "Hello World from Copy\n", "Append" );

    <b>var txt = app.ReadFile("myFile.txt");</b>
    var length = txt.split("\n").length;
    app.ShowPopup("myFile contains " + length + " lines");
}
</sample>

 */

