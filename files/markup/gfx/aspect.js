
/** # aspect #
 * The aspect ratio of the gfx container (display)
 * $$ gfx.aspect() $$ 
 * @returns num
*/


// aspect.txt --> All the sample codes

/** @Sample
<sample Square>
cfg.Game;

function OnLoad()
{
    square = gfx.CreateRectangle( 0.4, 0.4*gfx.aspect, 0x2255ff )
}

function OnReady()
{
    gfx.AddGraphic( square, 0.3, 0.2 );
    gfx.Play();
}
</sample>

 */

