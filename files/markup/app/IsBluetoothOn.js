
/** # IsBluetoothOn #
 * Checks if bluetooth is enabled and on.
 * 
 * See Also: @CreateBluetoothSerial, @DiscoverBtDevices
 * $$ app.IsBluetoothOn() $$ 
 * @returns bin
*/


// IsBluetoothOn.txt --> All the sample codes

/** @Sample
<sample Check Bluetooth Status>
function OnStart()
{
    var status = app.IsBluetoothEnabled()
    <b>var state = app.IsBluetoothOn();</b>

    app.ShowPopup(
        "Bluetooth is " +
        (status ? "enabled" : "disabled") +
        (status == state ? " and " : " but ") +
        (state ? "on" : "off")
    );
}
</sample>

 */

