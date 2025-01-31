
/** # CreateSensor #
 * @abbrev sns
 * 
 * $$ sns = app.CreateSensor(type, options) $$ 
 * @param {str} type Accelerometer|MagneticField|Orientation|Light|Proximity|Temperature|GameRotation|GeomagneticRotation|Gravity|Gyroscope|HeartRate|Acceleration|Pressure|Humidity|RotationMotion|StepCounter|StepDetector
 * @param {str_com} options Slow|Medium|Fast|Fastest
 * @returns dso-Sensor
*/


// CreateSensor.md --> Complete documentation. Sample codes is at the bottom of this file.

/** @Description
The sensor object can be used to access numerous sensors of your device. You can use the **SetOnChange** function of the Sensor to set the name of a function you want to be called when a the changes occur.

Change the rate that a sensor checks for changes by adding one the options “Fastest”, “Fast”, “Medium” or “Slow”. “Slow” is the default.
 */

/** ## Methods ##
 * These are the methods available for CreateSensor
 */


/** ### Batch ###
 * Batch method calls to be able to set all object's properties at once. * Note that you need to specify each parameter (use “” or <js nobox>null</js> to leave some out) * Inherited methods can be called by appending an underscore to the function name (ie. <js nobox>txt.Batch({ SetBackColor_: [“red”] })</js>
 * $$ sns.Batch(properties) $$
 * @param {obj} properties { COMMAND:lst
 */


/** ### GetAzimuth ###
 * Returns the first/x/azimuth value of a sensor.
 * $$ sns.GetAzimuth() $$
 * @returns num
 */


/** ### GetNames ###
 * Returns a list of builtin sensors in your device.
 * $$ sns.GetNames() $$
 * @returns str_com
 */


/** ### GetPitch ###
 * Returns the second/y/pitch value of a sensor.
 * $$ sns.GetPitch() $$
 * @returns num
 */


/** ### GetRoll ###
 * Returns the third/z/roll value of a sensor.
 * $$ sns.GetRoll() $$
 * @returns num
 */


/** ### GetType ###
 * Returns the control class name.
 * $$ sns.GetType() $$
 * @returns str-Sensor
 */


/** ### GetValues ###
 * Returns all values of a sensor.
 * $$ sns.GetValues() $$
 * @returns lst-[ time:num_mls, first:num, second:num, third:num ]
 */


/** ### Method ###
 * Allows access to other functions defined on the object in Java via reflection. *  * <premium>
 * $$ sns.Method(name, types, p1, p2, p3, p4) $$
 * @param {str} name 
 * @param {lst} types boolean,char,byte,short,int,long,float,double,String,CharSequence,...
 * @param {str} p1 
 * @param {str} p2 
 * @param {str} p3 
 * @param {str} p4 
 * @returns all
 */


/** ### SetMaxRate ###
 * Define a minimum timeout between two OnChage calls.
 * $$ sns.SetMaxRate(rate) $$
 * @param {num_mls} rate 
 */


/** ### SetMinChange ###
 * Define a minimum threshold value which triggers a OnChange call.
 * $$ sns.SetMinChange(min) $$
 * @param {num} min 
 */


/** ### SetOnChange ###
 * %cb% a sensor value has changed.
 * $$ sns.SetOnChange(callback) $$
 * @param {fnc_json} callback {"pNames":["first","second","third","time"],"pTypes":["num","num","num","num_mls"]}
 */


/** ### Start ###
 * Start reading from the sensor.
 * $$ sns.Start() $$
 */


/** ### Stop ###
 * Stop reading from the sensor.
 * $$ sns.Stop() $$
 */

// CreateSensor.txt --> All the sample codes

/** @Sample
<sample GetNames>
function OnStart()
{
    sns = app.CreateSensor();
    <b>var names = sns.GetNames();
    app.Alert(names.replace(/,/g, ",\n"), "Sensor Names");</b>
}
</sample>

<sample Accelerometer>
function OnStart()
{
	lay = app.CreateLayout( "Linear", "VCenter,FillXY" );

	txt = app.CreateText( "", 0.8, 0.3, "Multiline" );
	lay.AddChild( txt );
	app.AddLayout( lay );

	<b>sns = app.CreateSensor( "Accelerometer" );
	sns.SetOnChange( sns_OnChange );
	sns.Start();</b>

}

function sns_OnChange( x, y, z, time )
{
	txt.SetText( "x=" + x + "\n y=" + y + "\n z=" + z );
}
</sample>

<sample Orientation>
function OnStart()
{
	lay = app.CreateLayout( "Linear", "VCenter,FillXY" );

	txt = app.CreateText( "", 0.8, 0.3, "Multiline" );
	lay.AddChild( txt );
	app.AddLayout( lay );

	<b>sns = app.CreateSensor( "Orientation" );
	sns.SetOnChange( sns_OnChange );
	sns.Start();</b>

}

function sns_OnChange( azimuth, pitch, roll, time )
{
	var msg = " azimuth = " + azimuth.toFixed(1);
	msg += "\n pitch = " + pitch.toFixed(1);
	msg += "\n roll = " + roll.toFixed(1);
	txt.SetText( msg );
}
</sample>

<sample Light>
function OnStart()
{
	lay = app.CreateLayout( "Linear", "VCenter,FillXY" );

	txt = app.CreateText( "", 0.8, 0.3 );
	lay.AddChild( txt );
	app.AddLayout( lay );

	<b>sns = app.CreateSensor( "Light" );
	sns.SetOnChange( sns_OnChange );
	sns.Start();</b>
}

function sns_OnChange( lux )
{
	txt.SetText( "level = " + lux + " lux" );
}
</sample>

 */

