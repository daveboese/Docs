
/** # GetScreenHeight #
 * Returns the total screen height of the device in pixels. With the 'Real' **option** softkeys will be included in the value.
 * 
 * See Also: @GetScreenWidth, @GetScreenDensity
 * $$ app.GetScreenHeight(options) $$ 
 * @param {str} options Real
 * @returns num_pxl
*/


// GetScreenHeight.txt --> All the sample codes

/** @Sample
<sample Show Screen Height>
function OnStart()
{
    <b>var height = app.GetScreenHeight();</b>
    app.Alert( height );
}
</sample>

 */

