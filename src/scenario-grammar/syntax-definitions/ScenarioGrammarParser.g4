/*
 * ScenarioGrammarのANTLR構文定義ファイルです
 */
parser grammar ScenarioGrammarParser;

options{
	tokenVocab=ScenarioGrammarLexer;
}
root :
    statement* EOF
	;

statement :
	  stateName=ROUTE PATH_EQUAL (weight_path (SECTION weight_path)*)? (INPUT_PATH_END | PATH_END)?		#routeState
	| stateName=VEHICLE PATH_EQUAL (weight_path (SECTION weight_path)*)? (INPUT_PATH_END | PATH_END)?	#vehicleState
	| stateName=TITLE EQUAL string INPUT_TEXT_END?														#titleState
	| stateName=IMAGE EQUAL string INPUT_TEXT_END?														#imageState
	| stateName=ROUTETITLE EQUAL string INPUT_TEXT_END?													#routeTitleState
	| stateName=VEHICLETITLE EQUAL string INPUT_TEXT_END?												#vehicleTitleState
	| stateName=AUTHOR EQUAL string INPUT_TEXT_END?														#authorState
	| stateName=COMMENT EQUAL string INPUT_TEXT_END?													#commentState
	;

weight_path :
	path=FILE_PATH (ASTERISK NUM)?
	;

string :
	INPUT_TEXT_CHAR*
	;