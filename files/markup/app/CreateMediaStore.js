
/** # CreateMediaStore #
 * @abbrev med
 * The MediaStore is used to query audio information from the android provider or from the device in the “/sdcard/Music” folder.
 * $$ med = app.CreateMediaStore() $$ 
 * @returns dso-MediaStore
*/


/** ## Methods ##
 * These are the methods available for CreateMediaStore
 */


/** ### Batch ###
 * Batch method calls to be able to set all object's properties at once. * Note that you need to specify each parameter (use “” or <js nobox>null</js> to leave some out) * Inherited methods can be called by appending an underscore to the function name (ie. <js nobox>txt.Batch({ SetBackColor_: [“red”] })</js>
 * $$ med.Batch(properties) $$
 * @param {obj} properties { COMMAND:lst
 */


/** ### GetAlbumArt ###
 * Loads the album image to an existing image:dso-CreateImage.
 * $$ med.GetAlbumArt(image, id, options) $$
 * @param {dso} image CreateImage
 * @param {num_int} id 
 * @param {str} options internal|external
 * @returns bin
 */


/** ### GetSongArt ###
 * Loads the song image to an existing image:dso-CreateImage.
 * $$ med.GetSongArt(image, id, options) $$
 * @param {dso} image CreateImage
 * @param {num_int} id 
 * @param {str} options internal|external
 * @returns bin
 */


/** ### GetType ###
 * Returns the control class name.
 * $$ med.GetType() $$
 * @returns str-MediaStore
 */


/** ### QueryAlbums ###
 * Search for media albums.
 * $$ med.QueryAlbums(filter, sort, options) $$
 * @param {str_sql} filter 
 * @param {str:coloumns} sort album,\_id,albumArt,artist,numSongs,firstYear,lastYear
 * @param {str} options internal|external
 */


/** ### QueryArtists ###
 * Search for media artists.
 * $$ med.QueryArtists(filter, sort, options) $$
 * @param {str_sql} filter 
 * @param {str:coloumns} sort \_id,artist,numAlbums,numTracks
 * @param {str} options internal|external
 */


/** ### QueryMedia ###
 * Search for media.
 * $$ med.QueryMedia(filter, sort, options) $$
 * @param {str_sql} filter 
 * @param {str:coloumns} sort title,\_id,duration,size,uri,album,albumID,artist,artistId
 * @param {str} options internal|external
 */


/** ### SetOnAlbumsResult ###
 * %cb% an album query has finished.
 * $$ med.SetOnAlbumsResult(callback) $$
 * @param {fnc_json} callback {"pNames":["result"],"pTypes":["lst-[{ album:str&comma; id:num_int&comma; albumArt:str_pth&comma; artist:str&comma; numSongs:num_int&comma; firstYear:str&comma; lastYear:str }]"]}
 */


/** ### SetOnArtistsResult ###
 * %cb% a artist query has finished.
 * $$ med.SetOnArtistsResult(callback) $$
 * @param {fnc_json} callback {"pNames":["result"],"pTypes":["lst-[{ id:num_int&comma; artist:str&comma; numAlbums:num_int&comma; numTracks:num_int }]"]}
 */


/** ### SetOnMediaResult ###
 * %cb% a media query has finished.
 * $$ med.SetOnMediaResult(callback) $$
 * @param {fnc_json} callback {"pNames":["result"],"pTypes":["lst-[{ title:str&comma; id:num_int&comma; duration:num_mls&comma; size:num_byt&comma; uri:str_uri&comma; album:str&comma; albumID:num_int&comma; artist:str&comma; artistId:num_int }]"]}
 */

// CreateMediaStore.txt --> All the sample codes

/** @Sample

<sample Query Artists>
function OnStart()
{
    lay = app.CreateLayout( "linear", "VCenter,FillXY" );

    lst = app.CreateList( "", 1, .9 );
    lay.AddChild( lst );

    app.AddLayout( lay );

    app.ShowProgress( "Query Artists" );
    media = app.CreateMediaStore();
    media.SetOnArtistsResult( media_OnArtistsResult );
    media.QueryArtists( "", "artist", "external" );
}

function media_OnArtistsResult( result )
{
    result.forEach( function( m )
    {
        var s = "";
        for( var k in m ) s += k + ": " + m[k] + "\n";
        lst.AddItem( m.artist, s.slice( 0, -4 ), "" );
    } );
    app.HideProgress();
}
</sample>

<sample Query Albums>
function OnStart()
{
    lay = app.CreateLayout( "linear", "VCenter,FillXY" );

    lst = app.CreateList( "", 1, .9 );
    lst.SetColumnWidths( 0.3 );
    lst.SetIconSize( 0.2 );
    lay.AddChild( lst );

    app.AddLayout( lay );

    app.ShowProgress( "Query Albums" );
    media = app.CreateMediaStore();
    media.SetOnAlbumsResult( media_OnAlbumsResult );
    media.QueryAlbums( "", "album", "external" );
}

function media_OnAlbumsResult( result )
{
    result.forEach( function( m )
    {
        var s = "";
        for( var k in m ) s += k + ": " + m[k] + "\n";
        lst.AddItem( m.album, s.slice( 0, -4 ), m.albumArt == "null" ? "audio" : m.albumArt );
    } );
    app.HideProgress();
}
</sample>

<sample Query Media>
function OnStart()
{
    lay = app.CreateLayout( "linear", "VCenter,FillXY" );

    lst = app.CreateList( "", 1, .9 );
    lay.AddChild( lst );

    app.AddLayout( lay );

    app.ShowProgress( "Query Media" );
    media = app.CreateMediaStore();
    media.SetOnMediaResult( media_OnMediaResult );
    media.QueryMedia( "", "title", "external" );
}

function media_OnMediaResult( result )
{
    result.forEach( function( m )
    {
        var s = "";
        for( var k in m ) s += k + ": " + m[k] + "\n";
        lst.AddItem( m.title, s.slice( 0, -4 ), "" );
    } );
    app.HideProgress();
}
</sample>

 */

