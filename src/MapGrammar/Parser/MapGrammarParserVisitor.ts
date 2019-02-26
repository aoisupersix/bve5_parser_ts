// Generated from src/MapGrammar/SyntaxDefinitions/MapGrammarParser.g4 by ANTLR 4.6-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { StructureStateContext } from "./MapGrammarParser";
import { CabilluminanceStateContext } from "./MapGrammarParser";
import { StationStateContext } from "./MapGrammarParser";
import { SpeedlimitStateContext } from "./MapGrammarParser";
import { LegacyStateContext } from "./MapGrammarParser";
import { TrainStateContext } from "./MapGrammarParser";
import { CurveStateContext } from "./MapGrammarParser";
import { BackgroundStateContext } from "./MapGrammarParser";
import { RollingnoiseStateContext } from "./MapGrammarParser";
import { FogStateContext } from "./MapGrammarParser";
import { IncludeStateContext } from "./MapGrammarParser";
import { PretrainStateContext } from "./MapGrammarParser";
import { AdhesionStateContext } from "./MapGrammarParser";
import { DrawdistanceStateContext } from "./MapGrammarParser";
import { IrregularityStateContext } from "./MapGrammarParser";
import { SoundStateContext } from "./MapGrammarParser";
import { SectionStateContext } from "./MapGrammarParser";
import { LightStateContext } from "./MapGrammarParser";
import { BeaconStateContext } from "./MapGrammarParser";
import { FlangenoiseStateContext } from "./MapGrammarParser";
import { DistStateContext } from "./MapGrammarParser";
import { VarAssignStateContext } from "./MapGrammarParser";
import { RepeaterStateContext } from "./MapGrammarParser";
import { GradientStateContext } from "./MapGrammarParser";
import { SignalStateContext } from "./MapGrammarParser";
import { JointnoiseStateContext } from "./MapGrammarParser";
import { TrackStateContext } from "./MapGrammarParser";
import { Sound3dStateContext } from "./MapGrammarParser";
import { RandExprContext } from "./MapGrammarParser";
import { SinExprContext } from "./MapGrammarParser";
import { SqrtExprContext } from "./MapGrammarParser";
import { NumberExprContext } from "./MapGrammarParser";
import { FloorExprContext } from "./MapGrammarParser";
import { AbsExprContext } from "./MapGrammarParser";
import { ParensExprContext } from "./MapGrammarParser";
import { Atan2ExprContext } from "./MapGrammarParser";
import { LogExprContext } from "./MapGrammarParser";
import { StringExprContext } from "./MapGrammarParser";
import { VarExprContext } from "./MapGrammarParser";
import { InfixExprContext } from "./MapGrammarParser";
import { UnaryExprContext } from "./MapGrammarParser";
import { CeilExprContext } from "./MapGrammarParser";
import { CosExprContext } from "./MapGrammarParser";
import { ExpExprContext } from "./MapGrammarParser";
import { DistanceExprContext } from "./MapGrammarParser";
import { PowExprContext } from "./MapGrammarParser";
import { RootContext } from "./MapGrammarParser";
import { StatementContext } from "./MapGrammarParser";
import { DistanceContext } from "./MapGrammarParser";
import { IncludeContext } from "./MapGrammarParser";
import { CurveContext } from "./MapGrammarParser";
import { GradientContext } from "./MapGrammarParser";
import { TrackContext } from "./MapGrammarParser";
import { StructureContext } from "./MapGrammarParser";
import { RepeaterContext } from "./MapGrammarParser";
import { BackgroundContext } from "./MapGrammarParser";
import { StationContext } from "./MapGrammarParser";
import { SectionContext } from "./MapGrammarParser";
import { SignalContext } from "./MapGrammarParser";
import { BeaconContext } from "./MapGrammarParser";
import { SpeedlimitContext } from "./MapGrammarParser";
import { PretrainContext } from "./MapGrammarParser";
import { LightContext } from "./MapGrammarParser";
import { FogContext } from "./MapGrammarParser";
import { DrawdistanceContext } from "./MapGrammarParser";
import { CabilluminanceContext } from "./MapGrammarParser";
import { IrregularityContext } from "./MapGrammarParser";
import { AdhesionContext } from "./MapGrammarParser";
import { SoundContext } from "./MapGrammarParser";
import { Sound3dContext } from "./MapGrammarParser";
import { RollingnoiseContext } from "./MapGrammarParser";
import { FlangenoiseContext } from "./MapGrammarParser";
import { JointnoiseContext } from "./MapGrammarParser";
import { TrainContext } from "./MapGrammarParser";
import { StrkeyContext } from "./MapGrammarParser";
import { ExprArgsContext } from "./MapGrammarParser";
import { VarAssignContext } from "./MapGrammarParser";
import { LegacyContext } from "./MapGrammarParser";
import { NullableExprContext } from "./MapGrammarParser";
import { ExprContext } from "./MapGrammarParser";
import { VarContext } from "./MapGrammarParser";
import { StringContext } from "./MapGrammarParser";
import { String_textContext } from "./MapGrammarParser";
import { EncodingContext } from "./MapGrammarParser";
import { Encode_stringContext } from "./MapGrammarParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `MapGrammarParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface MapGrammarParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `structureState`
	 * labeled alternative in `MapGrammarParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStructureState?: (ctx: StructureStateContext) => Result;

	/**
	 * Visit a parse tree produced by the `cabilluminanceState`
	 * labeled alternative in `MapGrammarParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCabilluminanceState?: (ctx: CabilluminanceStateContext) => Result;

	/**
	 * Visit a parse tree produced by the `stationState`
	 * labeled alternative in `MapGrammarParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStationState?: (ctx: StationStateContext) => Result;

	/**
	 * Visit a parse tree produced by the `speedlimitState`
	 * labeled alternative in `MapGrammarParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSpeedlimitState?: (ctx: SpeedlimitStateContext) => Result;

	/**
	 * Visit a parse tree produced by the `legacyState`
	 * labeled alternative in `MapGrammarParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLegacyState?: (ctx: LegacyStateContext) => Result;

	/**
	 * Visit a parse tree produced by the `trainState`
	 * labeled alternative in `MapGrammarParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTrainState?: (ctx: TrainStateContext) => Result;

	/**
	 * Visit a parse tree produced by the `curveState`
	 * labeled alternative in `MapGrammarParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCurveState?: (ctx: CurveStateContext) => Result;

	/**
	 * Visit a parse tree produced by the `backgroundState`
	 * labeled alternative in `MapGrammarParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBackgroundState?: (ctx: BackgroundStateContext) => Result;

	/**
	 * Visit a parse tree produced by the `rollingnoiseState`
	 * labeled alternative in `MapGrammarParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRollingnoiseState?: (ctx: RollingnoiseStateContext) => Result;

	/**
	 * Visit a parse tree produced by the `fogState`
	 * labeled alternative in `MapGrammarParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFogState?: (ctx: FogStateContext) => Result;

	/**
	 * Visit a parse tree produced by the `includeState`
	 * labeled alternative in `MapGrammarParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIncludeState?: (ctx: IncludeStateContext) => Result;

	/**
	 * Visit a parse tree produced by the `pretrainState`
	 * labeled alternative in `MapGrammarParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPretrainState?: (ctx: PretrainStateContext) => Result;

	/**
	 * Visit a parse tree produced by the `adhesionState`
	 * labeled alternative in `MapGrammarParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdhesionState?: (ctx: AdhesionStateContext) => Result;

	/**
	 * Visit a parse tree produced by the `drawdistanceState`
	 * labeled alternative in `MapGrammarParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDrawdistanceState?: (ctx: DrawdistanceStateContext) => Result;

	/**
	 * Visit a parse tree produced by the `irregularityState`
	 * labeled alternative in `MapGrammarParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIrregularityState?: (ctx: IrregularityStateContext) => Result;

	/**
	 * Visit a parse tree produced by the `soundState`
	 * labeled alternative in `MapGrammarParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSoundState?: (ctx: SoundStateContext) => Result;

	/**
	 * Visit a parse tree produced by the `sectionState`
	 * labeled alternative in `MapGrammarParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSectionState?: (ctx: SectionStateContext) => Result;

	/**
	 * Visit a parse tree produced by the `lightState`
	 * labeled alternative in `MapGrammarParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLightState?: (ctx: LightStateContext) => Result;

	/**
	 * Visit a parse tree produced by the `beaconState`
	 * labeled alternative in `MapGrammarParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBeaconState?: (ctx: BeaconStateContext) => Result;

	/**
	 * Visit a parse tree produced by the `flangenoiseState`
	 * labeled alternative in `MapGrammarParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFlangenoiseState?: (ctx: FlangenoiseStateContext) => Result;

	/**
	 * Visit a parse tree produced by the `distState`
	 * labeled alternative in `MapGrammarParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDistState?: (ctx: DistStateContext) => Result;

	/**
	 * Visit a parse tree produced by the `varAssignState`
	 * labeled alternative in `MapGrammarParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarAssignState?: (ctx: VarAssignStateContext) => Result;

	/**
	 * Visit a parse tree produced by the `repeaterState`
	 * labeled alternative in `MapGrammarParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRepeaterState?: (ctx: RepeaterStateContext) => Result;

	/**
	 * Visit a parse tree produced by the `gradientState`
	 * labeled alternative in `MapGrammarParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGradientState?: (ctx: GradientStateContext) => Result;

	/**
	 * Visit a parse tree produced by the `signalState`
	 * labeled alternative in `MapGrammarParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSignalState?: (ctx: SignalStateContext) => Result;

	/**
	 * Visit a parse tree produced by the `jointnoiseState`
	 * labeled alternative in `MapGrammarParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJointnoiseState?: (ctx: JointnoiseStateContext) => Result;

	/**
	 * Visit a parse tree produced by the `trackState`
	 * labeled alternative in `MapGrammarParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTrackState?: (ctx: TrackStateContext) => Result;

	/**
	 * Visit a parse tree produced by the `sound3dState`
	 * labeled alternative in `MapGrammarParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSound3dState?: (ctx: Sound3dStateContext) => Result;

	/**
	 * Visit a parse tree produced by the `randExpr`
	 * labeled alternative in `MapGrammarParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRandExpr?: (ctx: RandExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `sinExpr`
	 * labeled alternative in `MapGrammarParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSinExpr?: (ctx: SinExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `sqrtExpr`
	 * labeled alternative in `MapGrammarParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSqrtExpr?: (ctx: SqrtExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `numberExpr`
	 * labeled alternative in `MapGrammarParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumberExpr?: (ctx: NumberExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `floorExpr`
	 * labeled alternative in `MapGrammarParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFloorExpr?: (ctx: FloorExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `absExpr`
	 * labeled alternative in `MapGrammarParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAbsExpr?: (ctx: AbsExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `parensExpr`
	 * labeled alternative in `MapGrammarParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParensExpr?: (ctx: ParensExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `atan2Expr`
	 * labeled alternative in `MapGrammarParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAtan2Expr?: (ctx: Atan2ExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `logExpr`
	 * labeled alternative in `MapGrammarParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogExpr?: (ctx: LogExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `stringExpr`
	 * labeled alternative in `MapGrammarParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringExpr?: (ctx: StringExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `varExpr`
	 * labeled alternative in `MapGrammarParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarExpr?: (ctx: VarExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `infixExpr`
	 * labeled alternative in `MapGrammarParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInfixExpr?: (ctx: InfixExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `unaryExpr`
	 * labeled alternative in `MapGrammarParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryExpr?: (ctx: UnaryExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `ceilExpr`
	 * labeled alternative in `MapGrammarParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCeilExpr?: (ctx: CeilExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `cosExpr`
	 * labeled alternative in `MapGrammarParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCosExpr?: (ctx: CosExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `expExpr`
	 * labeled alternative in `MapGrammarParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpExpr?: (ctx: ExpExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `distanceExpr`
	 * labeled alternative in `MapGrammarParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDistanceExpr?: (ctx: DistanceExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `powExpr`
	 * labeled alternative in `MapGrammarParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPowExpr?: (ctx: PowExprContext) => Result;

	/**
	 * Visit a parse tree produced by `MapGrammarParser.root`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRoot?: (ctx: RootContext) => Result;

	/**
	 * Visit a parse tree produced by `MapGrammarParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `MapGrammarParser.distance`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDistance?: (ctx: DistanceContext) => Result;

	/**
	 * Visit a parse tree produced by `MapGrammarParser.include`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInclude?: (ctx: IncludeContext) => Result;

	/**
	 * Visit a parse tree produced by `MapGrammarParser.curve`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCurve?: (ctx: CurveContext) => Result;

	/**
	 * Visit a parse tree produced by `MapGrammarParser.gradient`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGradient?: (ctx: GradientContext) => Result;

	/**
	 * Visit a parse tree produced by `MapGrammarParser.track`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTrack?: (ctx: TrackContext) => Result;

	/**
	 * Visit a parse tree produced by `MapGrammarParser.structure`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStructure?: (ctx: StructureContext) => Result;

	/**
	 * Visit a parse tree produced by `MapGrammarParser.repeater`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRepeater?: (ctx: RepeaterContext) => Result;

	/**
	 * Visit a parse tree produced by `MapGrammarParser.background`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBackground?: (ctx: BackgroundContext) => Result;

	/**
	 * Visit a parse tree produced by `MapGrammarParser.station`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStation?: (ctx: StationContext) => Result;

	/**
	 * Visit a parse tree produced by `MapGrammarParser.section`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSection?: (ctx: SectionContext) => Result;

	/**
	 * Visit a parse tree produced by `MapGrammarParser.signal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSignal?: (ctx: SignalContext) => Result;

	/**
	 * Visit a parse tree produced by `MapGrammarParser.beacon`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBeacon?: (ctx: BeaconContext) => Result;

	/**
	 * Visit a parse tree produced by `MapGrammarParser.speedlimit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSpeedlimit?: (ctx: SpeedlimitContext) => Result;

	/**
	 * Visit a parse tree produced by `MapGrammarParser.pretrain`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPretrain?: (ctx: PretrainContext) => Result;

	/**
	 * Visit a parse tree produced by `MapGrammarParser.light`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLight?: (ctx: LightContext) => Result;

	/**
	 * Visit a parse tree produced by `MapGrammarParser.fog`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFog?: (ctx: FogContext) => Result;

	/**
	 * Visit a parse tree produced by `MapGrammarParser.drawdistance`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDrawdistance?: (ctx: DrawdistanceContext) => Result;

	/**
	 * Visit a parse tree produced by `MapGrammarParser.cabilluminance`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCabilluminance?: (ctx: CabilluminanceContext) => Result;

	/**
	 * Visit a parse tree produced by `MapGrammarParser.irregularity`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIrregularity?: (ctx: IrregularityContext) => Result;

	/**
	 * Visit a parse tree produced by `MapGrammarParser.adhesion`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdhesion?: (ctx: AdhesionContext) => Result;

	/**
	 * Visit a parse tree produced by `MapGrammarParser.sound`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSound?: (ctx: SoundContext) => Result;

	/**
	 * Visit a parse tree produced by `MapGrammarParser.sound3d`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSound3d?: (ctx: Sound3dContext) => Result;

	/**
	 * Visit a parse tree produced by `MapGrammarParser.rollingnoise`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRollingnoise?: (ctx: RollingnoiseContext) => Result;

	/**
	 * Visit a parse tree produced by `MapGrammarParser.flangenoise`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFlangenoise?: (ctx: FlangenoiseContext) => Result;

	/**
	 * Visit a parse tree produced by `MapGrammarParser.jointnoise`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJointnoise?: (ctx: JointnoiseContext) => Result;

	/**
	 * Visit a parse tree produced by `MapGrammarParser.train`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTrain?: (ctx: TrainContext) => Result;

	/**
	 * Visit a parse tree produced by `MapGrammarParser.strkey`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStrkey?: (ctx: StrkeyContext) => Result;

	/**
	 * Visit a parse tree produced by `MapGrammarParser.exprArgs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExprArgs?: (ctx: ExprArgsContext) => Result;

	/**
	 * Visit a parse tree produced by `MapGrammarParser.varAssign`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarAssign?: (ctx: VarAssignContext) => Result;

	/**
	 * Visit a parse tree produced by `MapGrammarParser.legacy`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLegacy?: (ctx: LegacyContext) => Result;

	/**
	 * Visit a parse tree produced by `MapGrammarParser.nullableExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNullableExpr?: (ctx: NullableExprContext) => Result;

	/**
	 * Visit a parse tree produced by `MapGrammarParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr?: (ctx: ExprContext) => Result;

	/**
	 * Visit a parse tree produced by `MapGrammarParser.var`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVar?: (ctx: VarContext) => Result;

	/**
	 * Visit a parse tree produced by `MapGrammarParser.string`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitString?: (ctx: StringContext) => Result;

	/**
	 * Visit a parse tree produced by `MapGrammarParser.string_text`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitString_text?: (ctx: String_textContext) => Result;

	/**
	 * Visit a parse tree produced by `MapGrammarParser.encoding`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEncoding?: (ctx: EncodingContext) => Result;

	/**
	 * Visit a parse tree produced by `MapGrammarParser.encode_string`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEncode_string?: (ctx: Encode_stringContext) => Result;
}

