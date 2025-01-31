
/** # CreateOverlay #
 * @abbrev ovl
 * Overlays are displayed above everything on the screen - even on the home screen or above other applications. Overlays can be created from services as well which makes them almost perfect for interacting with them.
 * 
 * <premium>
 * $$ ovl = app.CreateOverlay(options) $$ 
 * @param {str_com} options 
*/


/** ## Methods ##
 * These are the methods available for CreateOverlay
 */


/** ### AddLayout ###
 * Adds a layout to the overlay.
 * $$ ovl.AddLayout(layout, left, top, options) $$
 * @param {dso} layout CreateLayout
 * @param {num_frc} left 
 * @param {num_frc} top 
 * @param {str} options px
 */


/** ### Batch ###
 * Batch method calls to be able to set all object's properties at once. * Note that you need to specify each parameter (use “” or <js nobox>null</js> to leave some out) * Inherited methods can be called by appending an underscore to the function name (ie. <js nobox>txt.Batch({ SetBackColor_: [“red”] })</js>
 * $$ ovl.Batch(properties) $$
 * @param {obj} properties { COMMAND:lst
 */


/** ### GetParent ###
 * Returns the parent control object where the object was added to - commonly a layout.
 * $$ ovl.GetParent() $$
 * @returns dso
 */


/** ### GetType ###
 * Returns the control class name.
 * $$ ovl.GetType() $$
 */


/** ### RemoveLayout ###
 * Removes a layout from the overlay.
 * $$ ovl.RemoveLayout(layout) $$
 * @param {dso} layout CreateLayout
 */


/** ### SetPosition ###
 * Defines the position of a contained layout.
 * $$ ovl.SetPosition(layout, left, top, options) $$
 * @param {dso} layout CreateLayout
 * @param {num_frc} left 
 * @param {num_frc} top 
 * @param {str} options px
 */

// CreateOverlay.txt --> All the sample codes

/** @Sample
<sample Memory Monitor>
cfg.Portrait;

function OnStart()
{
    app.ToBack();
	lay = app.CreateLayout( "Linear" );

    img = app.CreateImage( null, .3, .1 );
    img.SetBackColor( "#66333333" );
    img.SetAutoUpdate( false );
    lay.AddChild( img );

	ovl = app.CreateOverlay();
    ovl.AddLayout( lay, 0.8, app.GetTop() );

    app.Animate( Update, 1 );
}

var lst = new Array(100).fill(1e5);

function Update( time )
{
    var mem = app.GetMemoryInfo();
    lst.push( Math.round( 100 * mem.avail / mem.total ) - 50 );
    lst = lst.slice( -100 );

    img.Clear();
    img.SetPaintColor( "red" );
    img.DrawLine( 0, mem.threshold / mem.total, 1, mem.threshold / mem.total );

    img.SetPaintColor( "white" );
    img.DrawSamples( lst, 50 );
    img.Update();
}
</sample>

 */

