// Generated from src/MapGrammar/V2Parser/SyntaxDefinitions/MapGrammarV2Parser.g4 by ANTLR 4.6-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { StructureStateContext } from "./MapGrammarV2Parser";
import { CabilluminanceStateContext } from "./MapGrammarV2Parser";
import { StationStateContext } from "./MapGrammarV2Parser";
import { SpeedlimitStateContext } from "./MapGrammarV2Parser";
import { LegacyStateContext } from "./MapGrammarV2Parser";
import { TrainStateContext } from "./MapGrammarV2Parser";
import { CurveStateContext } from "./MapGrammarV2Parser";
import { BackgroundStateContext } from "./MapGrammarV2Parser";
import { RollingnoiseStateContext } from "./MapGrammarV2Parser";
import { FogStateContext } from "./MapGrammarV2Parser";
import { IncludeStateContext } from "./MapGrammarV2Parser";
import { PretrainStateContext } from "./MapGrammarV2Parser";
import { AdhesionStateContext } from "./MapGrammarV2Parser";
import { DrawdistanceStateContext } from "./MapGrammarV2Parser";
import { IrregularityStateContext } from "./MapGrammarV2Parser";
import { SoundStateContext } from "./MapGrammarV2Parser";
import { SectionStateContext } from "./MapGrammarV2Parser";
import { LightStateContext } from "./MapGrammarV2Parser";
import { BeaconStateContext } from "./MapGrammarV2Parser";
import { FlangenoiseStateContext } from "./MapGrammarV2Parser";
import { DistStateContext } from "./MapGrammarV2Parser";
import { VarAssignStateContext } from "./MapGrammarV2Parser";
import { RepeaterStateContext } from "./MapGrammarV2Parser";
import { GradientStateContext } from "./MapGrammarV2Parser";
import { SignalStateContext } from "./MapGrammarV2Parser";
import { JointnoiseStateContext } from "./MapGrammarV2Parser";
import { TrackStateContext } from "./MapGrammarV2Parser";
import { Sound3dStateContext } from "./MapGrammarV2Parser";
import { RandExprContext } from "./MapGrammarV2Parser";
import { SinExprContext } from "./MapGrammarV2Parser";
import { SqrtExprContext } from "./MapGrammarV2Parser";
import { NumberExprContext } from "./MapGrammarV2Parser";
import { FloorExprContext } from "./MapGrammarV2Parser";
import { AbsExprContext } from "./MapGrammarV2Parser";
import { ParensExprContext } from "./MapGrammarV2Parser";
import { Atan2ExprContext } from "./MapGrammarV2Parser";
import { LogExprContext } from "./MapGrammarV2Parser";
import { StringExprContext } from "./MapGrammarV2Parser";
import { VarExprContext } from "./MapGrammarV2Parser";
import { InfixExprContext } from "./MapGrammarV2Parser";
import { UnaryExprContext } from "./MapGrammarV2Parser";
import { CeilExprContext } from "./MapGrammarV2Parser";
import { CosExprContext } from "./MapGrammarV2Parser";
import { ExpExprContext } from "./MapGrammarV2Parser";
import { DistanceExprContext } from "./MapGrammarV2Parser";
import { PowExprContext } from "./MapGrammarV2Parser";
import { RootContext } from "./MapGrammarV2Parser";
import { StatementContext } from "./MapGrammarV2Parser";
import { DistanceContext } from "./MapGrammarV2Parser";
import { IncludeContext } from "./MapGrammarV2Parser";
import { CurveContext } from "./MapGrammarV2Parser";
import { GradientContext } from "./MapGrammarV2Parser";
import { TrackContext } from "./MapGrammarV2Parser";
import { StructureContext } from "./MapGrammarV2Parser";
import { RepeaterContext } from "./MapGrammarV2Parser";
import { BackgroundContext } from "./MapGrammarV2Parser";
import { StationContext } from "./MapGrammarV2Parser";
import { SectionContext } from "./MapGrammarV2Parser";
import { SignalContext } from "./MapGrammarV2Parser";
import { BeaconContext } from "./MapGrammarV2Parser";
import { SpeedlimitContext } from "./MapGrammarV2Parser";
import { PretrainContext } from "./MapGrammarV2Parser";
import { LightContext } from "./MapGrammarV2Parser";
import { FogContext } from "./MapGrammarV2Parser";
import { DrawdistanceContext } from "./MapGrammarV2Parser";
import { CabilluminanceContext } from "./MapGrammarV2Parser";
import { IrregularityContext } from "./MapGrammarV2Parser";
import { AdhesionContext } from "./MapGrammarV2Parser";
import { SoundContext } from "./MapGrammarV2Parser";
import { Sound3dContext } from "./MapGrammarV2Parser";
import { RollingnoiseContext } from "./MapGrammarV2Parser";
import { FlangenoiseContext } from "./MapGrammarV2Parser";
import { JointnoiseContext } from "./MapGrammarV2Parser";
import { TrainContext } from "./MapGrammarV2Parser";
import { StrkeyContext } from "./MapGrammarV2Parser";
import { ExprArgsContext } from "./MapGrammarV2Parser";
import { VarAssignContext } from "./MapGrammarV2Parser";
import { LegacyContext } from "./MapGrammarV2Parser";
import { NullableExprContext } from "./MapGrammarV2Parser";
import { ExprContext } from "./MapGrammarV2Parser";
import { VarContext } from "./MapGrammarV2Parser";
import { StringContext } from "./MapGrammarV2Parser";
import { String_textContext } from "./MapGrammarV2Parser";
import { EncodingContext } from "./MapGrammarV2Parser";
import { Encode_stringContext } from "./MapGrammarV2Parser";
import { Error_tokensContext } from "./MapGrammarV2Parser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `MapGrammarV2Parser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface MapGrammarV2ParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `structureState`
	 * labeled alternative in `MapGrammarV2Parser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStructureState?: (ctx: StructureStateContext) => Result;

	/**
	 * Visit a parse tree produced by the `cabilluminanceState`
	 * labeled alternative in `MapGrammarV2Parser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCabilluminanceState?: (ctx: CabilluminanceStateContext) => Result;

	/**
	 * Visit a parse tree produced by the `stationState`
	 * labeled alternative in `MapGrammarV2Parser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStationState?: (ctx: StationStateContext) => Result;

	/**
	 * Visit a parse tree produced by the `speedlimitState`
	 * labeled alternative in `MapGrammarV2Parser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSpeedlimitState?: (ctx: SpeedlimitStateContext) => Result;

	/**
	 * Visit a parse tree produced by the `legacyState`
	 * labeled alternative in `MapGrammarV2Parser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLegacyState?: (ctx: LegacyStateContext) => Result;

	/**
	 * Visit a parse tree produced by the `trainState`
	 * labeled alternative in `MapGrammarV2Parser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTrainState?: (ctx: TrainStateContext) => Result;

	/**
	 * Visit a parse tree produced by the `curveState`
	 * labeled alternative in `MapGrammarV2Parser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCurveState?: (ctx: CurveStateContext) => Result;

	/**
	 * Visit a parse tree produced by the `backgroundState`
	 * labeled alternative in `MapGrammarV2Parser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBackgroundState?: (ctx: BackgroundStateContext) => Result;

	/**
	 * Visit a parse tree produced by the `rollingnoiseState`
	 * labeled alternative in `MapGrammarV2Parser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRollingnoiseState?: (ctx: RollingnoiseStateContext) => Result;

	/**
	 * Visit a parse tree produced by the `fogState`
	 * labeled alternative in `MapGrammarV2Parser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFogState?: (ctx: FogStateContext) => Result;

	/**
	 * Visit a parse tree produced by the `includeState`
	 * labeled alternative in `MapGrammarV2Parser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIncludeState?: (ctx: IncludeStateContext) => Result;

	/**
	 * Visit a parse tree produced by the `pretrainState`
	 * labeled alternative in `MapGrammarV2Parser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPretrainState?: (ctx: PretrainStateContext) => Result;

	/**
	 * Visit a parse tree produced by the `adhesionState`
	 * labeled alternative in `MapGrammarV2Parser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdhesionState?: (ctx: AdhesionStateContext) => Result;

	/**
	 * Visit a parse tree produced by the `drawdistanceState`
	 * labeled alternative in `MapGrammarV2Parser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDrawdistanceState?: (ctx: DrawdistanceStateContext) => Result;

	/**
	 * Visit a parse tree produced by the `irregularityState`
	 * labeled alternative in `MapGrammarV2Parser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIrregularityState?: (ctx: IrregularityStateContext) => Result;

	/**
	 * Visit a parse tree produced by the `soundState`
	 * labeled alternative in `MapGrammarV2Parser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSoundState?: (ctx: SoundStateContext) => Result;

	/**
	 * Visit a parse tree produced by the `sectionState`
	 * labeled alternative in `MapGrammarV2Parser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSectionState?: (ctx: SectionStateContext) => Result;

	/**
	 * Visit a parse tree produced by the `lightState`
	 * labeled alternative in `MapGrammarV2Parser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLightState?: (ctx: LightStateContext) => Result;

	/**
	 * Visit a parse tree produced by the `beaconState`
	 * labeled alternative in `MapGrammarV2Parser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBeaconState?: (ctx: BeaconStateContext) => Result;

	/**
	 * Visit a parse tree produced by the `flangenoiseState`
	 * labeled alternative in `MapGrammarV2Parser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFlangenoiseState?: (ctx: FlangenoiseStateContext) => Result;

	/**
	 * Visit a parse tree produced by the `distState`
	 * labeled alternative in `MapGrammarV2Parser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDistState?: (ctx: DistStateContext) => Result;

	/**
	 * Visit a parse tree produced by the `varAssignState`
	 * labeled alternative in `MapGrammarV2Parser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarAssignState?: (ctx: VarAssignStateContext) => Result;

	/**
	 * Visit a parse tree produced by the `repeaterState`
	 * labeled alternative in `MapGrammarV2Parser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRepeaterState?: (ctx: RepeaterStateContext) => Result;

	/**
	 * Visit a parse tree produced by the `gradientState`
	 * labeled alternative in `MapGrammarV2Parser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGradientState?: (ctx: GradientStateContext) => Result;

	/**
	 * Visit a parse tree produced by the `signalState`
	 * labeled alternative in `MapGrammarV2Parser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSignalState?: (ctx: SignalStateContext) => Result;

	/**
	 * Visit a parse tree produced by the `jointnoiseState`
	 * labeled alternative in `MapGrammarV2Parser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJointnoiseState?: (ctx: JointnoiseStateContext) => Result;

	/**
	 * Visit a parse tree produced by the `trackState`
	 * labeled alternative in `MapGrammarV2Parser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTrackState?: (ctx: TrackStateContext) => Result;

	/**
	 * Visit a parse tree produced by the `sound3dState`
	 * labeled alternative in `MapGrammarV2Parser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSound3dState?: (ctx: Sound3dStateContext) => Result;

	/**
	 * Visit a parse tree produced by the `randExpr`
	 * labeled alternative in `MapGrammarV2Parser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRandExpr?: (ctx: RandExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `sinExpr`
	 * labeled alternative in `MapGrammarV2Parser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSinExpr?: (ctx: SinExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `sqrtExpr`
	 * labeled alternative in `MapGrammarV2Parser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSqrtExpr?: (ctx: SqrtExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `numberExpr`
	 * labeled alternative in `MapGrammarV2Parser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumberExpr?: (ctx: NumberExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `floorExpr`
	 * labeled alternative in `MapGrammarV2Parser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFloorExpr?: (ctx: FloorExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `absExpr`
	 * labeled alternative in `MapGrammarV2Parser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAbsExpr?: (ctx: AbsExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `parensExpr`
	 * labeled alternative in `MapGrammarV2Parser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParensExpr?: (ctx: ParensExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `atan2Expr`
	 * labeled alternative in `MapGrammarV2Parser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAtan2Expr?: (ctx: Atan2ExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `logExpr`
	 * labeled alternative in `MapGrammarV2Parser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogExpr?: (ctx: LogExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `stringExpr`
	 * labeled alternative in `MapGrammarV2Parser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringExpr?: (ctx: StringExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `varExpr`
	 * labeled alternative in `MapGrammarV2Parser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarExpr?: (ctx: VarExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `infixExpr`
	 * labeled alternative in `MapGrammarV2Parser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInfixExpr?: (ctx: InfixExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `unaryExpr`
	 * labeled alternative in `MapGrammarV2Parser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryExpr?: (ctx: UnaryExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `ceilExpr`
	 * labeled alternative in `MapGrammarV2Parser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCeilExpr?: (ctx: CeilExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `cosExpr`
	 * labeled alternative in `MapGrammarV2Parser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCosExpr?: (ctx: CosExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `expExpr`
	 * labeled alternative in `MapGrammarV2Parser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpExpr?: (ctx: ExpExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `distanceExpr`
	 * labeled alternative in `MapGrammarV2Parser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDistanceExpr?: (ctx: DistanceExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `powExpr`
	 * labeled alternative in `MapGrammarV2Parser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPowExpr?: (ctx: PowExprContext) => Result;

	/**
	 * Visit a parse tree produced by `MapGrammarV2Parser.root`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRoot?: (ctx: RootContext) => Result;

	/**
	 * Visit a parse tree produced by `MapGrammarV2Parser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `MapGrammarV2Parser.distance`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDistance?: (ctx: DistanceContext) => Result;

	/**
	 * Visit a parse tree produced by `MapGrammarV2Parser.include`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInclude?: (ctx: IncludeContext) => Result;

	/**
	 * Visit a parse tree produced by `MapGrammarV2Parser.curve`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCurve?: (ctx: CurveContext) => Result;

	/**
	 * Visit a parse tree produced by `MapGrammarV2Parser.gradient`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGradient?: (ctx: GradientContext) => Result;

	/**
	 * Visit a parse tree produced by `MapGrammarV2Parser.track`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTrack?: (ctx: TrackContext) => Result;

	/**
	 * Visit a parse tree produced by `MapGrammarV2Parser.structure`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStructure?: (ctx: StructureContext) => Result;

	/**
	 * Visit a parse tree produced by `MapGrammarV2Parser.repeater`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRepeater?: (ctx: RepeaterContext) => Result;

	/**
	 * Visit a parse tree produced by `MapGrammarV2Parser.background`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBackground?: (ctx: BackgroundContext) => Result;

	/**
	 * Visit a parse tree produced by `MapGrammarV2Parser.station`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStation?: (ctx: StationContext) => Result;

	/**
	 * Visit a parse tree produced by `MapGrammarV2Parser.section`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSection?: (ctx: SectionContext) => Result;

	/**
	 * Visit a parse tree produced by `MapGrammarV2Parser.signal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSignal?: (ctx: SignalContext) => Result;

	/**
	 * Visit a parse tree produced by `MapGrammarV2Parser.beacon`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBeacon?: (ctx: BeaconContext) => Result;

	/**
	 * Visit a parse tree produced by `MapGrammarV2Parser.speedlimit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSpeedlimit?: (ctx: SpeedlimitContext) => Result;

	/**
	 * Visit a parse tree produced by `MapGrammarV2Parser.pretrain`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPretrain?: (ctx: PretrainContext) => Result;

	/**
	 * Visit a parse tree produced by `MapGrammarV2Parser.light`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLight?: (ctx: LightContext) => Result;

	/**
	 * Visit a parse tree produced by `MapGrammarV2Parser.fog`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFog?: (ctx: FogContext) => Result;

	/**
	 * Visit a parse tree produced by `MapGrammarV2Parser.drawdistance`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDrawdistance?: (ctx: DrawdistanceContext) => Result;

	/**
	 * Visit a parse tree produced by `MapGrammarV2Parser.cabilluminance`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCabilluminance?: (ctx: CabilluminanceContext) => Result;

	/**
	 * Visit a parse tree produced by `MapGrammarV2Parser.irregularity`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIrregularity?: (ctx: IrregularityContext) => Result;

	/**
	 * Visit a parse tree produced by `MapGrammarV2Parser.adhesion`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdhesion?: (ctx: AdhesionContext) => Result;

	/**
	 * Visit a parse tree produced by `MapGrammarV2Parser.sound`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSound?: (ctx: SoundContext) => Result;

	/**
	 * Visit a parse tree produced by `MapGrammarV2Parser.sound3d`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSound3d?: (ctx: Sound3dContext) => Result;

	/**
	 * Visit a parse tree produced by `MapGrammarV2Parser.rollingnoise`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRollingnoise?: (ctx: RollingnoiseContext) => Result;

	/**
	 * Visit a parse tree produced by `MapGrammarV2Parser.flangenoise`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFlangenoise?: (ctx: FlangenoiseContext) => Result;

	/**
	 * Visit a parse tree produced by `MapGrammarV2Parser.jointnoise`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJointnoise?: (ctx: JointnoiseContext) => Result;

	/**
	 * Visit a parse tree produced by `MapGrammarV2Parser.train`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTrain?: (ctx: TrainContext) => Result;

	/**
	 * Visit a parse tree produced by `MapGrammarV2Parser.strkey`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStrkey?: (ctx: StrkeyContext) => Result;

	/**
	 * Visit a parse tree produced by `MapGrammarV2Parser.exprArgs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExprArgs?: (ctx: ExprArgsContext) => Result;

	/**
	 * Visit a parse tree produced by `MapGrammarV2Parser.varAssign`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarAssign?: (ctx: VarAssignContext) => Result;

	/**
	 * Visit a parse tree produced by `MapGrammarV2Parser.legacy`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLegacy?: (ctx: LegacyContext) => Result;

	/**
	 * Visit a parse tree produced by `MapGrammarV2Parser.nullableExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNullableExpr?: (ctx: NullableExprContext) => Result;

	/**
	 * Visit a parse tree produced by `MapGrammarV2Parser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr?: (ctx: ExprContext) => Result;

	/**
	 * Visit a parse tree produced by `MapGrammarV2Parser.var`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVar?: (ctx: VarContext) => Result;

	/**
	 * Visit a parse tree produced by `MapGrammarV2Parser.string`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitString?: (ctx: StringContext) => Result;

	/**
	 * Visit a parse tree produced by `MapGrammarV2Parser.string_text`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitString_text?: (ctx: String_textContext) => Result;

	/**
	 * Visit a parse tree produced by `MapGrammarV2Parser.encoding`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEncoding?: (ctx: EncodingContext) => Result;

	/**
	 * Visit a parse tree produced by `MapGrammarV2Parser.encode_string`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEncode_string?: (ctx: Encode_stringContext) => Result;

	/**
	 * Visit a parse tree produced by `MapGrammarV2Parser.error_tokens`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitError_tokens?: (ctx: Error_tokensContext) => Result;
}

