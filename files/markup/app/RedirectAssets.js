
/** # RedirectAssets #
 * Reads the assets folders “Img”,“Snd”,“Html” and “Misc” from an external folder outside the apk.
 * $$ app.RedirectAssets(dir) $$ 
 * @param {str_ptd} dir 
*/


// RedirectAssets.txt --> All the sample codes

/** @Sample
<sample Redirect Assets>
function OnStart()
{
    <b>app.RedirectAssets("/sdcard/DroidScript/Hello World/");</b>

    lay = app.CreateLayout( "Linear", "VCenter,FillXY" );

    img = app.CreateImage( "Img/Hello World.png" );
    lay.AddChild( img );

    app.AddLayout( lay );
}
</sample>

 */

