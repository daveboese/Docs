
/** # CreateFile #
 * @abbrev fil
 * Returns a File object.
 * $$ fil = app.CreateFile(file, mode) $$ 
 * @param {str_ptf} file 
 * @param {str} mode r|w|rw
 * @returns dso-File
*/


/** ## Methods ##
 * These are the methods available for CreateFile
 */


/** ### Batch ###
 * Batch method calls to be able to set all object's properties at once. * Note that you need to specify each parameter (use “” or <js nobox>null</js> to leave some out) * Inherited methods can be called by appending an underscore to the function name (ie. <js nobox>txt.Batch({ SetBackColor_: [“red”] })</js>
 * $$ fil.Batch(properties) $$
 * @param {obj} properties { COMMAND:lst
 */


/** ### Close ###
 * Close File
 * $$ fil.Close() $$
 */


/** ### GetLength ###
 * Returns the file size in bytes.
 * $$ fil.GetLength() $$
 * @returns num_byt
 */


/** ### GetPointer ###
 * Returns the current pointer position in the file.
 * $$ fil.GetPointer() $$
 */


/** ### GetType ###
 * Returns the control class name.
 * $$ fil.GetType() $$
 * @returns str-File
 */


/** ### ReadData ###
 * Reads a amount of bytes from the file.
 * $$ fil.ReadData(len, mode) $$
 * @param {num_int} len 
 * @param {str} mode Int|Text|Hex
 */


/** ### ReadNumber ###
 * Read numeric data from file.
 * $$ fil.ReadNumber(type) $$
 * @param {str} type Byte|UByte|Bool|Float|FloatLE|Long|LongLE|Short|UShort|ShortLE|UShortLE|Int|UInt|IntLE
 * @returns num
 */


/** ### ReadText ###
 * Read data from the file as text.
 * $$ fil.ReadText(type) $$
 * @param {str} type UTF:read UTF
 * @returns str
 */


/** ### ReadTextAsync ###
 * Asynchronously reads a single character or a line as text.
 * $$ fil.ReadTextAsync(type, callback) $$
 * @param {str} type Line:"read one line terminated by &bsol;&bsol;n&comma; &bsol;&bsol;r or &bsol;&bsol;r&bsol;&bsol;n"|Char:read big
 * @param {fnc_json} callback {"pNames":["data"],"pTypes":["str"]}
 */


/** ### Seek ###
 * CHange pointer position to a given byte in the file.
 * $$ fil.Seek(offset) $$
 * @param {num_int} offset 
 */


/** ### SetLength ###
 * Allocate memory for a file.
 * $$ fil.SetLength(len) $$
 * @param {num_int} len 
 */


/** ### Skip ###
 * Let the pointer skip a given number of bytes.
 * $$ fil.Skip(bytes) $$
 * @param {num_int} bytes 
 */


/** ### WriteData ###
 * Write data to the file.
 * $$ fil.WriteData(data, mode) $$
 * @param {str} data FA\,FB\,FC|250\,251\,252|abc46:low order 8
 * @param {str} mode Hex|Int|Text
 */


/** ### WriteNumber ###
 * Writes a number to the file.
 * $$ fil.WriteNumber(data, type) $$
 * @param {num} data 
 * @param {str} type Byte|UByte|Bool|Float|FloatLE|Long|LongLE|Short|UShort|ShortLE|UShortLE|Int|UInt|IntLE
 */


/** ### WriteText ###
 * writes text to file
 * $$ fil.WriteText(data, type) $$
 * @param {str||lst} data [ bytes:num_int ]
 * @param {str} type UTF:write UTF
 */

// CreateFile.txt --> All the sample codes

/** @Sample
<sample Example>
function btn_OnTouch()
{
	var file = app.CreateFile( "/sdcard/test.txt", "rw" );

	file.WriteText( "Hello", "Char" );
	var len = file.GetLength();
	console.log( "file len: " + len );

	file.Seek( len );
	file.WriteNumber( 77, "Byte" );
	file.WriteData( "66,121,101", "Int" );

	file.Seek( 0 );
	var data = file.ReadData( 2 );
	console.log( "first two bytes:" + data[0] + "," + data[1] );

	file.Seek( 0 );
	alert( file.ReadText( "Line" ) );

	file.Close();
}
</sample>

 */

