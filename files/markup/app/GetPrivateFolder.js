
/** # GetPrivateFolder #
 * Returns the path to a folder located in the apps private space which is normally not accessible by other apps or the user himself.
 * 
 * See Also: @GetAppPath, @GetPath
 * $$ app.GetPrivateFolder(name, options) $$ 
 * @param {str} name 
 * @param {str} options external
 * @returns str_pth
*/


// GetPrivateFolder.txt --> All the sample codes

/** @Sample
<sample Show >
function OnStart()
{
    <b>var path = app.GetPrivateFolder( "temp" );</b>
    app.Alert( path );
}
</sample>

 */

