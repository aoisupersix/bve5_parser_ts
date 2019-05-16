// Generated from src/ScenarioGrammar/SyntaxDefinitions/ScenarioGrammarParser.g4 by ANTLR 4.6-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ImageStateContext } from "./ScenarioGrammarParser";
import { CommentStateContext } from "./ScenarioGrammarParser";
import { RouteTitleStateContext } from "./ScenarioGrammarParser";
import { VehicleTitleStateContext } from "./ScenarioGrammarParser";
import { RouteStateContext } from "./ScenarioGrammarParser";
import { TitleStateContext } from "./ScenarioGrammarParser";
import { AuthorStateContext } from "./ScenarioGrammarParser";
import { VehicleStateContext } from "./ScenarioGrammarParser";
import { RootContext } from "./ScenarioGrammarParser";
import { StatementContext } from "./ScenarioGrammarParser";
import { Weight_pathContext } from "./ScenarioGrammarParser";
import { StringContext } from "./ScenarioGrammarParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `ScenarioGrammarParser`.
 */
export interface ScenarioGrammarParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `imageState`
	 * labeled alternative in `ScenarioGrammarParser.statement`.
	 * @param ctx the parse tree
	 */
	enterImageState?: (ctx: ImageStateContext) => void;
	/**
	 * Exit a parse tree produced by the `imageState`
	 * labeled alternative in `ScenarioGrammarParser.statement`.
	 * @param ctx the parse tree
	 */
	exitImageState?: (ctx: ImageStateContext) => void;

	/**
	 * Enter a parse tree produced by the `commentState`
	 * labeled alternative in `ScenarioGrammarParser.statement`.
	 * @param ctx the parse tree
	 */
	enterCommentState?: (ctx: CommentStateContext) => void;
	/**
	 * Exit a parse tree produced by the `commentState`
	 * labeled alternative in `ScenarioGrammarParser.statement`.
	 * @param ctx the parse tree
	 */
	exitCommentState?: (ctx: CommentStateContext) => void;

	/**
	 * Enter a parse tree produced by the `routeTitleState`
	 * labeled alternative in `ScenarioGrammarParser.statement`.
	 * @param ctx the parse tree
	 */
	enterRouteTitleState?: (ctx: RouteTitleStateContext) => void;
	/**
	 * Exit a parse tree produced by the `routeTitleState`
	 * labeled alternative in `ScenarioGrammarParser.statement`.
	 * @param ctx the parse tree
	 */
	exitRouteTitleState?: (ctx: RouteTitleStateContext) => void;

	/**
	 * Enter a parse tree produced by the `vehicleTitleState`
	 * labeled alternative in `ScenarioGrammarParser.statement`.
	 * @param ctx the parse tree
	 */
	enterVehicleTitleState?: (ctx: VehicleTitleStateContext) => void;
	/**
	 * Exit a parse tree produced by the `vehicleTitleState`
	 * labeled alternative in `ScenarioGrammarParser.statement`.
	 * @param ctx the parse tree
	 */
	exitVehicleTitleState?: (ctx: VehicleTitleStateContext) => void;

	/**
	 * Enter a parse tree produced by the `routeState`
	 * labeled alternative in `ScenarioGrammarParser.statement`.
	 * @param ctx the parse tree
	 */
	enterRouteState?: (ctx: RouteStateContext) => void;
	/**
	 * Exit a parse tree produced by the `routeState`
	 * labeled alternative in `ScenarioGrammarParser.statement`.
	 * @param ctx the parse tree
	 */
	exitRouteState?: (ctx: RouteStateContext) => void;

	/**
	 * Enter a parse tree produced by the `titleState`
	 * labeled alternative in `ScenarioGrammarParser.statement`.
	 * @param ctx the parse tree
	 */
	enterTitleState?: (ctx: TitleStateContext) => void;
	/**
	 * Exit a parse tree produced by the `titleState`
	 * labeled alternative in `ScenarioGrammarParser.statement`.
	 * @param ctx the parse tree
	 */
	exitTitleState?: (ctx: TitleStateContext) => void;

	/**
	 * Enter a parse tree produced by the `authorState`
	 * labeled alternative in `ScenarioGrammarParser.statement`.
	 * @param ctx the parse tree
	 */
	enterAuthorState?: (ctx: AuthorStateContext) => void;
	/**
	 * Exit a parse tree produced by the `authorState`
	 * labeled alternative in `ScenarioGrammarParser.statement`.
	 * @param ctx the parse tree
	 */
	exitAuthorState?: (ctx: AuthorStateContext) => void;

	/**
	 * Enter a parse tree produced by the `vehicleState`
	 * labeled alternative in `ScenarioGrammarParser.statement`.
	 * @param ctx the parse tree
	 */
	enterVehicleState?: (ctx: VehicleStateContext) => void;
	/**
	 * Exit a parse tree produced by the `vehicleState`
	 * labeled alternative in `ScenarioGrammarParser.statement`.
	 * @param ctx the parse tree
	 */
	exitVehicleState?: (ctx: VehicleStateContext) => void;

	/**
	 * Enter a parse tree produced by `ScenarioGrammarParser.root`.
	 * @param ctx the parse tree
	 */
	enterRoot?: (ctx: RootContext) => void;
	/**
	 * Exit a parse tree produced by `ScenarioGrammarParser.root`.
	 * @param ctx the parse tree
	 */
	exitRoot?: (ctx: RootContext) => void;

	/**
	 * Enter a parse tree produced by `ScenarioGrammarParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `ScenarioGrammarParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `ScenarioGrammarParser.weight_path`.
	 * @param ctx the parse tree
	 */
	enterWeight_path?: (ctx: Weight_pathContext) => void;
	/**
	 * Exit a parse tree produced by `ScenarioGrammarParser.weight_path`.
	 * @param ctx the parse tree
	 */
	exitWeight_path?: (ctx: Weight_pathContext) => void;

	/**
	 * Enter a parse tree produced by `ScenarioGrammarParser.string`.
	 * @param ctx the parse tree
	 */
	enterString?: (ctx: StringContext) => void;
	/**
	 * Exit a parse tree produced by `ScenarioGrammarParser.string`.
	 * @param ctx the parse tree
	 */
	exitString?: (ctx: StringContext) => void;
}

