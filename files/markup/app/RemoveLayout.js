
/** # RemoveLayout #
 * Removes a layout added to the app.
 * 
 * See also: @AddLayout
 * $$ app.RemoveLayout(layout) $$ 
 * @param {dso} layout CreateLayout
*/


// RemoveLayout.txt --> All the sample codes

/** @Sample
<sample Vertical>
function OnStart()
{
	lay = app.CreateLayout( "Linear", "FillXY,VCenter" );

	txt = app.CreateText( "Hello" );
	txt.SetTextSize( 50 );
	lay.AddChild( txt );

	btn = app.CreateButton( "Remove" );
	btn.SetOnTouch( RemoveDrawer );
	lay.AddChild( btn );

	app.AddLayout( lay );
}

function RemoveDrawer() {
    <b>app.RemoveLayout( lay );</b>
}
</sample>

 */

