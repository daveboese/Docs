
/** # ZipFile #
 * Compresses a local file to a zip file.
 * 
 * See Also: @ZipFolder
 * $$ app.ZipFile(source, destination) $$ 
 * @param {str_pth} source 
 * @param {str_pth} destination 
*/


// ZipFile.txt --> All the sample codes

/** @Sample
<sample Zip File>
function OnStart()
{
    var file = "/sdcard/DroidScript/Hello World/Hello World.js";
	app.ZipFile( file, file + ".zip" );
	app.ShowPopup( "Compressed to " + file + ".zip" )
}
</sample>

 */

