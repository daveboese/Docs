
/** # OpenDatabase #
 * @abbrev db
 * OpenDatabase creates or opens a local database in which large amounts of data can be stored that can still be queried in a reasonable amount of time.
 * $$ db = app.OpenDatabase(name) $$ 
 * @param {str} name 
 * @returns dso-Database
*/


/** ## Methods ##
 * These are the methods available for OpenDatabase
 */


/** ### addTransaction ###
 * addTransaction * <deprecated Use ExecuteSQL instead>
 * $$ db.addTransaction(transaction) $$
 * @param {obj:JS SQLitePluginTransaction} transaction 
 */


/** ### close ###
 * Close the database * <deprecated Use Close instead>
 * $$ db.close(success, error) $$
 * @param {fnc_json} success {"pNames":["msg"],"pTypes":["str"]}
 * @param {fnc_json} error {"pNames":["msg"],"pTypes":["str"]}
 */


/** ### Close ###
 * Close the database
 * $$ db.Close() $$
 */


/** ### _databaseFeatures ###
 * databaseFeatures * <deprecated>
 * $$ db._databaseFeatures() $$
 */


/** ### _dbname ###
 * dbname * <deprecated>
 * $$ db._dbname() $$
 */


/** ### Delete ###
 * Delete the database
 * $$ db.Delete() $$
 */


/** ### executeSql ###
 * Executes a SQL query * <deprecated Use ExecuteSql instead>
 * $$ db.executeSql(statement, params, success, error) $$
 * @param {str_sql} statement 
 * @param {lst} params 
 * @param {fnc_json} success {"pNames":["tx","res"],"pTypes":["obj-{ db: { openargs: { name:str, dblocation:str }, dbname:str, name:str }, txlock:bin, readOnly:bin, executes: [{ success:str, qid:num_int, sql:str_sql, params:lst }] }","obj-{ rows.item(i): { id:num, data:all, data_num:num } }","obj-{ length:num_int, rowsAffected:num_int, rows.item(i): { id:num, data:all, data_num:num } }"]}
 * @param {fnc_json} error {"pNames":["t","err"],"pTypes":["?","obj-{ message:str }"]}
 */


/** ### ExecuteSql ###
 * Executes a SQL query
 * $$ db.ExecuteSql(sql, params, success, error) $$
 * @param {str_sql} sql 
 * @param {lst} params 
 * @param {fnc_json} success {"pNames":["res"],"pTypes":["obj-{ length:num_int, rowsAffected:num_int, rows.item(i): { id:num, data:all, data_num:num } }"]}
 * @param {fnc_json} error {"pNames":["err"],"pTypes":["str"]}
 */


/** ### GetName ###
 * Returns the database name
 * $$ db.GetName() $$
 * @returns str
 */


/** ### GetType ###
 * Returns the component class name.
 * $$ db.GetType() $$
 * @returns str-Database
 */


/** ### name ###
 * The database name * <deprecated use GetName instead>
 * $$ db.name() $$
 * @returns str
 */


/** ### open ###
 * Opens the database * <deprecated>
 * $$ db.open(success, error) $$
 * @param {fnc_json} success {}
 * @param {fnc_json} error {"pNames":["msg"],"pTypes":["str"]}
 */


/** ### _openargs ###
 * openargs * <deprecated>
 * $$ db._openargs() $$
 */


/** ### _openDBs ###
 * contains DBs * <deprecated>
 * $$ db._openDBs() $$
 * @returns obj-{ name:obj-Database }
 */


/** ### _openError ###
 * openError * <deprecated>
 * $$ db._openError(err) $$
 * @param {str} err 
 */


/** ### _openSuccess ###
 * openSuccess * <deprecated>
 * $$ db._openSuccess() $$
 */


/** ### readTransaction ###
 * readTransaction * <deprecated Use ExecuteSql instead>
 * $$ db.readTransaction(fn, error, success) $$
 * @param {fnc_json} fn {"pNames":["tx"],"pTypes":["obj-{ db: { openargs: { name:str, dblocation:str }, dbname:str, name:str }, txlock:bin, readOnly:bin, executes: [{ success:str, qid:num_int, sql:str_sql, params:lst }] }"]}
 * @param {fnc_json} error {"pNames":["err"],"pTypes":["str"]}
 * @param {fnc_json} success {"pNames":["tx","res"],"pTypes":["obj-{ db: { openargs: { name:str, dblocation:str }, dbname:str, name:str }, txlock:bin, readOnly:bin, executes: [{ success:str, qid:num_int, sql:str_sql, params:lst }] }","obj-{ rows.item(i): { id:num, data:all, data_num:num } }"]}
 */


/** ### startNextTransaction ###
 * startNextTransaction * <deprecated Use ExecuteSql instead>
 * $$ db.startNextTransaction() $$
 */


/** ### transaction ###
 * transaction * <deprecated Use ExecuteSql instead>
 * $$ db.transaction(fn, error, success) $$
 * @param {fnc_json} fn {"pNames":["tx"],"pTypes":["obj-{ db: { openargs: { name:str, dblocation:str }, dbname:str, name:str }, txlock:bin, readOnly:bin, executes: [{ success:str, qid:num_int, sql:str_sql, params:lst }] }"]}
 * @param {fnc_json} error {"pNames":["err"],"pTypes":["str"]}
 * @param {fnc_json} success {"pNames":["fnc","res"],"pTypes":[{"pNames":["tx"],"pTypes":["obj-{ db: { openargs: { name:str, dblocation:str }, dbname:str, name:str }, txlock:bin, readOnly:bin, executes: [{ success:str, qid:num_int, sql:str_sql, params:lst }] }"]},"obj-{ length:num_int, rowsAffected:num_int, rows.item(i): { id:num, data:all, data_num:num } }"]}
 */

// OpenDatabase.txt --> All the sample codes

/** @Sample
 
 */

