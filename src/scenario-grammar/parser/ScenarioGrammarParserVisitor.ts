// Generated from src/ScenarioGrammar/SyntaxDefinitions/ScenarioGrammarParser.g4 by ANTLR 4.6-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `ScenarioGrammarParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface ScenarioGrammarParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `imageState`
	 * labeled alternative in `ScenarioGrammarParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImageState?: (ctx: ImageStateContext) => Result;

	/**
	 * Visit a parse tree produced by the `commentState`
	 * labeled alternative in `ScenarioGrammarParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommentState?: (ctx: CommentStateContext) => Result;

	/**
	 * Visit a parse tree produced by the `routeTitleState`
	 * labeled alternative in `ScenarioGrammarParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRouteTitleState?: (ctx: RouteTitleStateContext) => Result;

	/**
	 * Visit a parse tree produced by the `vehicleTitleState`
	 * labeled alternative in `ScenarioGrammarParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVehicleTitleState?: (ctx: VehicleTitleStateContext) => Result;

	/**
	 * Visit a parse tree produced by the `routeState`
	 * labeled alternative in `ScenarioGrammarParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRouteState?: (ctx: RouteStateContext) => Result;

	/**
	 * Visit a parse tree produced by the `titleState`
	 * labeled alternative in `ScenarioGrammarParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTitleState?: (ctx: TitleStateContext) => Result;

	/**
	 * Visit a parse tree produced by the `authorState`
	 * labeled alternative in `ScenarioGrammarParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAuthorState?: (ctx: AuthorStateContext) => Result;

	/**
	 * Visit a parse tree produced by the `vehicleState`
	 * labeled alternative in `ScenarioGrammarParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVehicleState?: (ctx: VehicleStateContext) => Result;

	/**
	 * Visit a parse tree produced by `ScenarioGrammarParser.root`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRoot?: (ctx: RootContext) => Result;

	/**
	 * Visit a parse tree produced by `ScenarioGrammarParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ScenarioGrammarParser.weight_path`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWeight_path?: (ctx: Weight_pathContext) => Result;

	/**
	 * Visit a parse tree produced by `ScenarioGrammarParser.string`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitString?: (ctx: StringContext) => Result;
}

