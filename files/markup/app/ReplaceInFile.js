
/** # ReplaceInFile #
 * Replaces all occurances of some text or a regex pattern in a local file with some other text.
 * $$ app.ReplaceInFile(file, txt, rep, options) $$ 
 * @param {str_ptf} file 
 * @param {str} txt 
 * @param {str} rep 
 * @param {str_com} options 
*/


// ReplaceInFile.txt --> All the sample codes

/** @Sample
<sample Replace Text in File>
function OnStart()
{
    app.WriteFile( "file.txt", "Hello world, exciting world." );
	<b>app.ReplaceInFile( "file.txt", "world", "user" );</b>
    app.Alert( app.ReadFile( "file.txt" ), "Result" );
}
</sample>

<sample Replace Regular Expression>
function OnStart()
{
    app.WriteFile( "file.txt", "Hello world, exciting world." );
	<b>app.ReplaceInFile( "file.txt", "(\\w+)o (\\w+)", "$2 is $1" );</b>
    app.Alert( app.ReadFile( "file.txt" ), "Result" );
}
</sample>

 */

