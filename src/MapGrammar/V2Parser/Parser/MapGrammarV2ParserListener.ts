// Generated from src/MapGrammar/V2Parser/SyntaxDefinitions/MapGrammarV2Parser.g4 by ANTLR 4.6-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `MapGrammarV2Parser`.
 */
export interface MapGrammarV2ParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `structureState`
	 * labeled alternative in `MapGrammarV2Parser.statement`.
	 * @param ctx the parse tree
	 */
	enterStructureState?: (ctx: StructureStateContext) => void;
	/**
	 * Exit a parse tree produced by the `structureState`
	 * labeled alternative in `MapGrammarV2Parser.statement`.
	 * @param ctx the parse tree
	 */
	exitStructureState?: (ctx: StructureStateContext) => void;

	/**
	 * Enter a parse tree produced by the `cabilluminanceState`
	 * labeled alternative in `MapGrammarV2Parser.statement`.
	 * @param ctx the parse tree
	 */
	enterCabilluminanceState?: (ctx: CabilluminanceStateContext) => void;
	/**
	 * Exit a parse tree produced by the `cabilluminanceState`
	 * labeled alternative in `MapGrammarV2Parser.statement`.
	 * @param ctx the parse tree
	 */
	exitCabilluminanceState?: (ctx: CabilluminanceStateContext) => void;

	/**
	 * Enter a parse tree produced by the `stationState`
	 * labeled alternative in `MapGrammarV2Parser.statement`.
	 * @param ctx the parse tree
	 */
	enterStationState?: (ctx: StationStateContext) => void;
	/**
	 * Exit a parse tree produced by the `stationState`
	 * labeled alternative in `MapGrammarV2Parser.statement`.
	 * @param ctx the parse tree
	 */
	exitStationState?: (ctx: StationStateContext) => void;

	/**
	 * Enter a parse tree produced by the `speedlimitState`
	 * labeled alternative in `MapGrammarV2Parser.statement`.
	 * @param ctx the parse tree
	 */
	enterSpeedlimitState?: (ctx: SpeedlimitStateContext) => void;
	/**
	 * Exit a parse tree produced by the `speedlimitState`
	 * labeled alternative in `MapGrammarV2Parser.statement`.
	 * @param ctx the parse tree
	 */
	exitSpeedlimitState?: (ctx: SpeedlimitStateContext) => void;

	/**
	 * Enter a parse tree produced by the `legacyState`
	 * labeled alternative in `MapGrammarV2Parser.statement`.
	 * @param ctx the parse tree
	 */
	enterLegacyState?: (ctx: LegacyStateContext) => void;
	/**
	 * Exit a parse tree produced by the `legacyState`
	 * labeled alternative in `MapGrammarV2Parser.statement`.
	 * @param ctx the parse tree
	 */
	exitLegacyState?: (ctx: LegacyStateContext) => void;

	/**
	 * Enter a parse tree produced by the `trainState`
	 * labeled alternative in `MapGrammarV2Parser.statement`.
	 * @param ctx the parse tree
	 */
	enterTrainState?: (ctx: TrainStateContext) => void;
	/**
	 * Exit a parse tree produced by the `trainState`
	 * labeled alternative in `MapGrammarV2Parser.statement`.
	 * @param ctx the parse tree
	 */
	exitTrainState?: (ctx: TrainStateContext) => void;

	/**
	 * Enter a parse tree produced by the `curveState`
	 * labeled alternative in `MapGrammarV2Parser.statement`.
	 * @param ctx the parse tree
	 */
	enterCurveState?: (ctx: CurveStateContext) => void;
	/**
	 * Exit a parse tree produced by the `curveState`
	 * labeled alternative in `MapGrammarV2Parser.statement`.
	 * @param ctx the parse tree
	 */
	exitCurveState?: (ctx: CurveStateContext) => void;

	/**
	 * Enter a parse tree produced by the `backgroundState`
	 * labeled alternative in `MapGrammarV2Parser.statement`.
	 * @param ctx the parse tree
	 */
	enterBackgroundState?: (ctx: BackgroundStateContext) => void;
	/**
	 * Exit a parse tree produced by the `backgroundState`
	 * labeled alternative in `MapGrammarV2Parser.statement`.
	 * @param ctx the parse tree
	 */
	exitBackgroundState?: (ctx: BackgroundStateContext) => void;

	/**
	 * Enter a parse tree produced by the `rollingnoiseState`
	 * labeled alternative in `MapGrammarV2Parser.statement`.
	 * @param ctx the parse tree
	 */
	enterRollingnoiseState?: (ctx: RollingnoiseStateContext) => void;
	/**
	 * Exit a parse tree produced by the `rollingnoiseState`
	 * labeled alternative in `MapGrammarV2Parser.statement`.
	 * @param ctx the parse tree
	 */
	exitRollingnoiseState?: (ctx: RollingnoiseStateContext) => void;

	/**
	 * Enter a parse tree produced by the `fogState`
	 * labeled alternative in `MapGrammarV2Parser.statement`.
	 * @param ctx the parse tree
	 */
	enterFogState?: (ctx: FogStateContext) => void;
	/**
	 * Exit a parse tree produced by the `fogState`
	 * labeled alternative in `MapGrammarV2Parser.statement`.
	 * @param ctx the parse tree
	 */
	exitFogState?: (ctx: FogStateContext) => void;

	/**
	 * Enter a parse tree produced by the `includeState`
	 * labeled alternative in `MapGrammarV2Parser.statement`.
	 * @param ctx the parse tree
	 */
	enterIncludeState?: (ctx: IncludeStateContext) => void;
	/**
	 * Exit a parse tree produced by the `includeState`
	 * labeled alternative in `MapGrammarV2Parser.statement`.
	 * @param ctx the parse tree
	 */
	exitIncludeState?: (ctx: IncludeStateContext) => void;

	/**
	 * Enter a parse tree produced by the `pretrainState`
	 * labeled alternative in `MapGrammarV2Parser.statement`.
	 * @param ctx the parse tree
	 */
	enterPretrainState?: (ctx: PretrainStateContext) => void;
	/**
	 * Exit a parse tree produced by the `pretrainState`
	 * labeled alternative in `MapGrammarV2Parser.statement`.
	 * @param ctx the parse tree
	 */
	exitPretrainState?: (ctx: PretrainStateContext) => void;

	/**
	 * Enter a parse tree produced by the `adhesionState`
	 * labeled alternative in `MapGrammarV2Parser.statement`.
	 * @param ctx the parse tree
	 */
	enterAdhesionState?: (ctx: AdhesionStateContext) => void;
	/**
	 * Exit a parse tree produced by the `adhesionState`
	 * labeled alternative in `MapGrammarV2Parser.statement`.
	 * @param ctx the parse tree
	 */
	exitAdhesionState?: (ctx: AdhesionStateContext) => void;

	/**
	 * Enter a parse tree produced by the `drawdistanceState`
	 * labeled alternative in `MapGrammarV2Parser.statement`.
	 * @param ctx the parse tree
	 */
	enterDrawdistanceState?: (ctx: DrawdistanceStateContext) => void;
	/**
	 * Exit a parse tree produced by the `drawdistanceState`
	 * labeled alternative in `MapGrammarV2Parser.statement`.
	 * @param ctx the parse tree
	 */
	exitDrawdistanceState?: (ctx: DrawdistanceStateContext) => void;

	/**
	 * Enter a parse tree produced by the `irregularityState`
	 * labeled alternative in `MapGrammarV2Parser.statement`.
	 * @param ctx the parse tree
	 */
	enterIrregularityState?: (ctx: IrregularityStateContext) => void;
	/**
	 * Exit a parse tree produced by the `irregularityState`
	 * labeled alternative in `MapGrammarV2Parser.statement`.
	 * @param ctx the parse tree
	 */
	exitIrregularityState?: (ctx: IrregularityStateContext) => void;

	/**
	 * Enter a parse tree produced by the `soundState`
	 * labeled alternative in `MapGrammarV2Parser.statement`.
	 * @param ctx the parse tree
	 */
	enterSoundState?: (ctx: SoundStateContext) => void;
	/**
	 * Exit a parse tree produced by the `soundState`
	 * labeled alternative in `MapGrammarV2Parser.statement`.
	 * @param ctx the parse tree
	 */
	exitSoundState?: (ctx: SoundStateContext) => void;

	/**
	 * Enter a parse tree produced by the `sectionState`
	 * labeled alternative in `MapGrammarV2Parser.statement`.
	 * @param ctx the parse tree
	 */
	enterSectionState?: (ctx: SectionStateContext) => void;
	/**
	 * Exit a parse tree produced by the `sectionState`
	 * labeled alternative in `MapGrammarV2Parser.statement`.
	 * @param ctx the parse tree
	 */
	exitSectionState?: (ctx: SectionStateContext) => void;

	/**
	 * Enter a parse tree produced by the `lightState`
	 * labeled alternative in `MapGrammarV2Parser.statement`.
	 * @param ctx the parse tree
	 */
	enterLightState?: (ctx: LightStateContext) => void;
	/**
	 * Exit a parse tree produced by the `lightState`
	 * labeled alternative in `MapGrammarV2Parser.statement`.
	 * @param ctx the parse tree
	 */
	exitLightState?: (ctx: LightStateContext) => void;

	/**
	 * Enter a parse tree produced by the `beaconState`
	 * labeled alternative in `MapGrammarV2Parser.statement`.
	 * @param ctx the parse tree
	 */
	enterBeaconState?: (ctx: BeaconStateContext) => void;
	/**
	 * Exit a parse tree produced by the `beaconState`
	 * labeled alternative in `MapGrammarV2Parser.statement`.
	 * @param ctx the parse tree
	 */
	exitBeaconState?: (ctx: BeaconStateContext) => void;

	/**
	 * Enter a parse tree produced by the `flangenoiseState`
	 * labeled alternative in `MapGrammarV2Parser.statement`.
	 * @param ctx the parse tree
	 */
	enterFlangenoiseState?: (ctx: FlangenoiseStateContext) => void;
	/**
	 * Exit a parse tree produced by the `flangenoiseState`
	 * labeled alternative in `MapGrammarV2Parser.statement`.
	 * @param ctx the parse tree
	 */
	exitFlangenoiseState?: (ctx: FlangenoiseStateContext) => void;

	/**
	 * Enter a parse tree produced by the `distState`
	 * labeled alternative in `MapGrammarV2Parser.statement`.
	 * @param ctx the parse tree
	 */
	enterDistState?: (ctx: DistStateContext) => void;
	/**
	 * Exit a parse tree produced by the `distState`
	 * labeled alternative in `MapGrammarV2Parser.statement`.
	 * @param ctx the parse tree
	 */
	exitDistState?: (ctx: DistStateContext) => void;

	/**
	 * Enter a parse tree produced by the `varAssignState`
	 * labeled alternative in `MapGrammarV2Parser.statement`.
	 * @param ctx the parse tree
	 */
	enterVarAssignState?: (ctx: VarAssignStateContext) => void;
	/**
	 * Exit a parse tree produced by the `varAssignState`
	 * labeled alternative in `MapGrammarV2Parser.statement`.
	 * @param ctx the parse tree
	 */
	exitVarAssignState?: (ctx: VarAssignStateContext) => void;

	/**
	 * Enter a parse tree produced by the `repeaterState`
	 * labeled alternative in `MapGrammarV2Parser.statement`.
	 * @param ctx the parse tree
	 */
	enterRepeaterState?: (ctx: RepeaterStateContext) => void;
	/**
	 * Exit a parse tree produced by the `repeaterState`
	 * labeled alternative in `MapGrammarV2Parser.statement`.
	 * @param ctx the parse tree
	 */
	exitRepeaterState?: (ctx: RepeaterStateContext) => void;

	/**
	 * Enter a parse tree produced by the `gradientState`
	 * labeled alternative in `MapGrammarV2Parser.statement`.
	 * @param ctx the parse tree
	 */
	enterGradientState?: (ctx: GradientStateContext) => void;
	/**
	 * Exit a parse tree produced by the `gradientState`
	 * labeled alternative in `MapGrammarV2Parser.statement`.
	 * @param ctx the parse tree
	 */
	exitGradientState?: (ctx: GradientStateContext) => void;

	/**
	 * Enter a parse tree produced by the `signalState`
	 * labeled alternative in `MapGrammarV2Parser.statement`.
	 * @param ctx the parse tree
	 */
	enterSignalState?: (ctx: SignalStateContext) => void;
	/**
	 * Exit a parse tree produced by the `signalState`
	 * labeled alternative in `MapGrammarV2Parser.statement`.
	 * @param ctx the parse tree
	 */
	exitSignalState?: (ctx: SignalStateContext) => void;

	/**
	 * Enter a parse tree produced by the `jointnoiseState`
	 * labeled alternative in `MapGrammarV2Parser.statement`.
	 * @param ctx the parse tree
	 */
	enterJointnoiseState?: (ctx: JointnoiseStateContext) => void;
	/**
	 * Exit a parse tree produced by the `jointnoiseState`
	 * labeled alternative in `MapGrammarV2Parser.statement`.
	 * @param ctx the parse tree
	 */
	exitJointnoiseState?: (ctx: JointnoiseStateContext) => void;

	/**
	 * Enter a parse tree produced by the `trackState`
	 * labeled alternative in `MapGrammarV2Parser.statement`.
	 * @param ctx the parse tree
	 */
	enterTrackState?: (ctx: TrackStateContext) => void;
	/**
	 * Exit a parse tree produced by the `trackState`
	 * labeled alternative in `MapGrammarV2Parser.statement`.
	 * @param ctx the parse tree
	 */
	exitTrackState?: (ctx: TrackStateContext) => void;

	/**
	 * Enter a parse tree produced by the `sound3dState`
	 * labeled alternative in `MapGrammarV2Parser.statement`.
	 * @param ctx the parse tree
	 */
	enterSound3dState?: (ctx: Sound3dStateContext) => void;
	/**
	 * Exit a parse tree produced by the `sound3dState`
	 * labeled alternative in `MapGrammarV2Parser.statement`.
	 * @param ctx the parse tree
	 */
	exitSound3dState?: (ctx: Sound3dStateContext) => void;

	/**
	 * Enter a parse tree produced by the `randExpr`
	 * labeled alternative in `MapGrammarV2Parser.expr`.
	 * @param ctx the parse tree
	 */
	enterRandExpr?: (ctx: RandExprContext) => void;
	/**
	 * Exit a parse tree produced by the `randExpr`
	 * labeled alternative in `MapGrammarV2Parser.expr`.
	 * @param ctx the parse tree
	 */
	exitRandExpr?: (ctx: RandExprContext) => void;

	/**
	 * Enter a parse tree produced by the `sinExpr`
	 * labeled alternative in `MapGrammarV2Parser.expr`.
	 * @param ctx the parse tree
	 */
	enterSinExpr?: (ctx: SinExprContext) => void;
	/**
	 * Exit a parse tree produced by the `sinExpr`
	 * labeled alternative in `MapGrammarV2Parser.expr`.
	 * @param ctx the parse tree
	 */
	exitSinExpr?: (ctx: SinExprContext) => void;

	/**
	 * Enter a parse tree produced by the `sqrtExpr`
	 * labeled alternative in `MapGrammarV2Parser.expr`.
	 * @param ctx the parse tree
	 */
	enterSqrtExpr?: (ctx: SqrtExprContext) => void;
	/**
	 * Exit a parse tree produced by the `sqrtExpr`
	 * labeled alternative in `MapGrammarV2Parser.expr`.
	 * @param ctx the parse tree
	 */
	exitSqrtExpr?: (ctx: SqrtExprContext) => void;

	/**
	 * Enter a parse tree produced by the `numberExpr`
	 * labeled alternative in `MapGrammarV2Parser.expr`.
	 * @param ctx the parse tree
	 */
	enterNumberExpr?: (ctx: NumberExprContext) => void;
	/**
	 * Exit a parse tree produced by the `numberExpr`
	 * labeled alternative in `MapGrammarV2Parser.expr`.
	 * @param ctx the parse tree
	 */
	exitNumberExpr?: (ctx: NumberExprContext) => void;

	/**
	 * Enter a parse tree produced by the `floorExpr`
	 * labeled alternative in `MapGrammarV2Parser.expr`.
	 * @param ctx the parse tree
	 */
	enterFloorExpr?: (ctx: FloorExprContext) => void;
	/**
	 * Exit a parse tree produced by the `floorExpr`
	 * labeled alternative in `MapGrammarV2Parser.expr`.
	 * @param ctx the parse tree
	 */
	exitFloorExpr?: (ctx: FloorExprContext) => void;

	/**
	 * Enter a parse tree produced by the `absExpr`
	 * labeled alternative in `MapGrammarV2Parser.expr`.
	 * @param ctx the parse tree
	 */
	enterAbsExpr?: (ctx: AbsExprContext) => void;
	/**
	 * Exit a parse tree produced by the `absExpr`
	 * labeled alternative in `MapGrammarV2Parser.expr`.
	 * @param ctx the parse tree
	 */
	exitAbsExpr?: (ctx: AbsExprContext) => void;

	/**
	 * Enter a parse tree produced by the `parensExpr`
	 * labeled alternative in `MapGrammarV2Parser.expr`.
	 * @param ctx the parse tree
	 */
	enterParensExpr?: (ctx: ParensExprContext) => void;
	/**
	 * Exit a parse tree produced by the `parensExpr`
	 * labeled alternative in `MapGrammarV2Parser.expr`.
	 * @param ctx the parse tree
	 */
	exitParensExpr?: (ctx: ParensExprContext) => void;

	/**
	 * Enter a parse tree produced by the `atan2Expr`
	 * labeled alternative in `MapGrammarV2Parser.expr`.
	 * @param ctx the parse tree
	 */
	enterAtan2Expr?: (ctx: Atan2ExprContext) => void;
	/**
	 * Exit a parse tree produced by the `atan2Expr`
	 * labeled alternative in `MapGrammarV2Parser.expr`.
	 * @param ctx the parse tree
	 */
	exitAtan2Expr?: (ctx: Atan2ExprContext) => void;

	/**
	 * Enter a parse tree produced by the `logExpr`
	 * labeled alternative in `MapGrammarV2Parser.expr`.
	 * @param ctx the parse tree
	 */
	enterLogExpr?: (ctx: LogExprContext) => void;
	/**
	 * Exit a parse tree produced by the `logExpr`
	 * labeled alternative in `MapGrammarV2Parser.expr`.
	 * @param ctx the parse tree
	 */
	exitLogExpr?: (ctx: LogExprContext) => void;

	/**
	 * Enter a parse tree produced by the `stringExpr`
	 * labeled alternative in `MapGrammarV2Parser.expr`.
	 * @param ctx the parse tree
	 */
	enterStringExpr?: (ctx: StringExprContext) => void;
	/**
	 * Exit a parse tree produced by the `stringExpr`
	 * labeled alternative in `MapGrammarV2Parser.expr`.
	 * @param ctx the parse tree
	 */
	exitStringExpr?: (ctx: StringExprContext) => void;

	/**
	 * Enter a parse tree produced by the `varExpr`
	 * labeled alternative in `MapGrammarV2Parser.expr`.
	 * @param ctx the parse tree
	 */
	enterVarExpr?: (ctx: VarExprContext) => void;
	/**
	 * Exit a parse tree produced by the `varExpr`
	 * labeled alternative in `MapGrammarV2Parser.expr`.
	 * @param ctx the parse tree
	 */
	exitVarExpr?: (ctx: VarExprContext) => void;

	/**
	 * Enter a parse tree produced by the `infixExpr`
	 * labeled alternative in `MapGrammarV2Parser.expr`.
	 * @param ctx the parse tree
	 */
	enterInfixExpr?: (ctx: InfixExprContext) => void;
	/**
	 * Exit a parse tree produced by the `infixExpr`
	 * labeled alternative in `MapGrammarV2Parser.expr`.
	 * @param ctx the parse tree
	 */
	exitInfixExpr?: (ctx: InfixExprContext) => void;

	/**
	 * Enter a parse tree produced by the `unaryExpr`
	 * labeled alternative in `MapGrammarV2Parser.expr`.
	 * @param ctx the parse tree
	 */
	enterUnaryExpr?: (ctx: UnaryExprContext) => void;
	/**
	 * Exit a parse tree produced by the `unaryExpr`
	 * labeled alternative in `MapGrammarV2Parser.expr`.
	 * @param ctx the parse tree
	 */
	exitUnaryExpr?: (ctx: UnaryExprContext) => void;

	/**
	 * Enter a parse tree produced by the `ceilExpr`
	 * labeled alternative in `MapGrammarV2Parser.expr`.
	 * @param ctx the parse tree
	 */
	enterCeilExpr?: (ctx: CeilExprContext) => void;
	/**
	 * Exit a parse tree produced by the `ceilExpr`
	 * labeled alternative in `MapGrammarV2Parser.expr`.
	 * @param ctx the parse tree
	 */
	exitCeilExpr?: (ctx: CeilExprContext) => void;

	/**
	 * Enter a parse tree produced by the `cosExpr`
	 * labeled alternative in `MapGrammarV2Parser.expr`.
	 * @param ctx the parse tree
	 */
	enterCosExpr?: (ctx: CosExprContext) => void;
	/**
	 * Exit a parse tree produced by the `cosExpr`
	 * labeled alternative in `MapGrammarV2Parser.expr`.
	 * @param ctx the parse tree
	 */
	exitCosExpr?: (ctx: CosExprContext) => void;

	/**
	 * Enter a parse tree produced by the `expExpr`
	 * labeled alternative in `MapGrammarV2Parser.expr`.
	 * @param ctx the parse tree
	 */
	enterExpExpr?: (ctx: ExpExprContext) => void;
	/**
	 * Exit a parse tree produced by the `expExpr`
	 * labeled alternative in `MapGrammarV2Parser.expr`.
	 * @param ctx the parse tree
	 */
	exitExpExpr?: (ctx: ExpExprContext) => void;

	/**
	 * Enter a parse tree produced by the `distanceExpr`
	 * labeled alternative in `MapGrammarV2Parser.expr`.
	 * @param ctx the parse tree
	 */
	enterDistanceExpr?: (ctx: DistanceExprContext) => void;
	/**
	 * Exit a parse tree produced by the `distanceExpr`
	 * labeled alternative in `MapGrammarV2Parser.expr`.
	 * @param ctx the parse tree
	 */
	exitDistanceExpr?: (ctx: DistanceExprContext) => void;

	/**
	 * Enter a parse tree produced by the `powExpr`
	 * labeled alternative in `MapGrammarV2Parser.expr`.
	 * @param ctx the parse tree
	 */
	enterPowExpr?: (ctx: PowExprContext) => void;
	/**
	 * Exit a parse tree produced by the `powExpr`
	 * labeled alternative in `MapGrammarV2Parser.expr`.
	 * @param ctx the parse tree
	 */
	exitPowExpr?: (ctx: PowExprContext) => void;

	/**
	 * Enter a parse tree produced by `MapGrammarV2Parser.root`.
	 * @param ctx the parse tree
	 */
	enterRoot?: (ctx: RootContext) => void;
	/**
	 * Exit a parse tree produced by `MapGrammarV2Parser.root`.
	 * @param ctx the parse tree
	 */
	exitRoot?: (ctx: RootContext) => void;

	/**
	 * Enter a parse tree produced by `MapGrammarV2Parser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `MapGrammarV2Parser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `MapGrammarV2Parser.distance`.
	 * @param ctx the parse tree
	 */
	enterDistance?: (ctx: DistanceContext) => void;
	/**
	 * Exit a parse tree produced by `MapGrammarV2Parser.distance`.
	 * @param ctx the parse tree
	 */
	exitDistance?: (ctx: DistanceContext) => void;

	/**
	 * Enter a parse tree produced by `MapGrammarV2Parser.include`.
	 * @param ctx the parse tree
	 */
	enterInclude?: (ctx: IncludeContext) => void;
	/**
	 * Exit a parse tree produced by `MapGrammarV2Parser.include`.
	 * @param ctx the parse tree
	 */
	exitInclude?: (ctx: IncludeContext) => void;

	/**
	 * Enter a parse tree produced by `MapGrammarV2Parser.curve`.
	 * @param ctx the parse tree
	 */
	enterCurve?: (ctx: CurveContext) => void;
	/**
	 * Exit a parse tree produced by `MapGrammarV2Parser.curve`.
	 * @param ctx the parse tree
	 */
	exitCurve?: (ctx: CurveContext) => void;

	/**
	 * Enter a parse tree produced by `MapGrammarV2Parser.gradient`.
	 * @param ctx the parse tree
	 */
	enterGradient?: (ctx: GradientContext) => void;
	/**
	 * Exit a parse tree produced by `MapGrammarV2Parser.gradient`.
	 * @param ctx the parse tree
	 */
	exitGradient?: (ctx: GradientContext) => void;

	/**
	 * Enter a parse tree produced by `MapGrammarV2Parser.track`.
	 * @param ctx the parse tree
	 */
	enterTrack?: (ctx: TrackContext) => void;
	/**
	 * Exit a parse tree produced by `MapGrammarV2Parser.track`.
	 * @param ctx the parse tree
	 */
	exitTrack?: (ctx: TrackContext) => void;

	/**
	 * Enter a parse tree produced by `MapGrammarV2Parser.structure`.
	 * @param ctx the parse tree
	 */
	enterStructure?: (ctx: StructureContext) => void;
	/**
	 * Exit a parse tree produced by `MapGrammarV2Parser.structure`.
	 * @param ctx the parse tree
	 */
	exitStructure?: (ctx: StructureContext) => void;

	/**
	 * Enter a parse tree produced by `MapGrammarV2Parser.repeater`.
	 * @param ctx the parse tree
	 */
	enterRepeater?: (ctx: RepeaterContext) => void;
	/**
	 * Exit a parse tree produced by `MapGrammarV2Parser.repeater`.
	 * @param ctx the parse tree
	 */
	exitRepeater?: (ctx: RepeaterContext) => void;

	/**
	 * Enter a parse tree produced by `MapGrammarV2Parser.background`.
	 * @param ctx the parse tree
	 */
	enterBackground?: (ctx: BackgroundContext) => void;
	/**
	 * Exit a parse tree produced by `MapGrammarV2Parser.background`.
	 * @param ctx the parse tree
	 */
	exitBackground?: (ctx: BackgroundContext) => void;

	/**
	 * Enter a parse tree produced by `MapGrammarV2Parser.station`.
	 * @param ctx the parse tree
	 */
	enterStation?: (ctx: StationContext) => void;
	/**
	 * Exit a parse tree produced by `MapGrammarV2Parser.station`.
	 * @param ctx the parse tree
	 */
	exitStation?: (ctx: StationContext) => void;

	/**
	 * Enter a parse tree produced by `MapGrammarV2Parser.section`.
	 * @param ctx the parse tree
	 */
	enterSection?: (ctx: SectionContext) => void;
	/**
	 * Exit a parse tree produced by `MapGrammarV2Parser.section`.
	 * @param ctx the parse tree
	 */
	exitSection?: (ctx: SectionContext) => void;

	/**
	 * Enter a parse tree produced by `MapGrammarV2Parser.signal`.
	 * @param ctx the parse tree
	 */
	enterSignal?: (ctx: SignalContext) => void;
	/**
	 * Exit a parse tree produced by `MapGrammarV2Parser.signal`.
	 * @param ctx the parse tree
	 */
	exitSignal?: (ctx: SignalContext) => void;

	/**
	 * Enter a parse tree produced by `MapGrammarV2Parser.beacon`.
	 * @param ctx the parse tree
	 */
	enterBeacon?: (ctx: BeaconContext) => void;
	/**
	 * Exit a parse tree produced by `MapGrammarV2Parser.beacon`.
	 * @param ctx the parse tree
	 */
	exitBeacon?: (ctx: BeaconContext) => void;

	/**
	 * Enter a parse tree produced by `MapGrammarV2Parser.speedlimit`.
	 * @param ctx the parse tree
	 */
	enterSpeedlimit?: (ctx: SpeedlimitContext) => void;
	/**
	 * Exit a parse tree produced by `MapGrammarV2Parser.speedlimit`.
	 * @param ctx the parse tree
	 */
	exitSpeedlimit?: (ctx: SpeedlimitContext) => void;

	/**
	 * Enter a parse tree produced by `MapGrammarV2Parser.pretrain`.
	 * @param ctx the parse tree
	 */
	enterPretrain?: (ctx: PretrainContext) => void;
	/**
	 * Exit a parse tree produced by `MapGrammarV2Parser.pretrain`.
	 * @param ctx the parse tree
	 */
	exitPretrain?: (ctx: PretrainContext) => void;

	/**
	 * Enter a parse tree produced by `MapGrammarV2Parser.light`.
	 * @param ctx the parse tree
	 */
	enterLight?: (ctx: LightContext) => void;
	/**
	 * Exit a parse tree produced by `MapGrammarV2Parser.light`.
	 * @param ctx the parse tree
	 */
	exitLight?: (ctx: LightContext) => void;

	/**
	 * Enter a parse tree produced by `MapGrammarV2Parser.fog`.
	 * @param ctx the parse tree
	 */
	enterFog?: (ctx: FogContext) => void;
	/**
	 * Exit a parse tree produced by `MapGrammarV2Parser.fog`.
	 * @param ctx the parse tree
	 */
	exitFog?: (ctx: FogContext) => void;

	/**
	 * Enter a parse tree produced by `MapGrammarV2Parser.drawdistance`.
	 * @param ctx the parse tree
	 */
	enterDrawdistance?: (ctx: DrawdistanceContext) => void;
	/**
	 * Exit a parse tree produced by `MapGrammarV2Parser.drawdistance`.
	 * @param ctx the parse tree
	 */
	exitDrawdistance?: (ctx: DrawdistanceContext) => void;

	/**
	 * Enter a parse tree produced by `MapGrammarV2Parser.cabilluminance`.
	 * @param ctx the parse tree
	 */
	enterCabilluminance?: (ctx: CabilluminanceContext) => void;
	/**
	 * Exit a parse tree produced by `MapGrammarV2Parser.cabilluminance`.
	 * @param ctx the parse tree
	 */
	exitCabilluminance?: (ctx: CabilluminanceContext) => void;

	/**
	 * Enter a parse tree produced by `MapGrammarV2Parser.irregularity`.
	 * @param ctx the parse tree
	 */
	enterIrregularity?: (ctx: IrregularityContext) => void;
	/**
	 * Exit a parse tree produced by `MapGrammarV2Parser.irregularity`.
	 * @param ctx the parse tree
	 */
	exitIrregularity?: (ctx: IrregularityContext) => void;

	/**
	 * Enter a parse tree produced by `MapGrammarV2Parser.adhesion`.
	 * @param ctx the parse tree
	 */
	enterAdhesion?: (ctx: AdhesionContext) => void;
	/**
	 * Exit a parse tree produced by `MapGrammarV2Parser.adhesion`.
	 * @param ctx the parse tree
	 */
	exitAdhesion?: (ctx: AdhesionContext) => void;

	/**
	 * Enter a parse tree produced by `MapGrammarV2Parser.sound`.
	 * @param ctx the parse tree
	 */
	enterSound?: (ctx: SoundContext) => void;
	/**
	 * Exit a parse tree produced by `MapGrammarV2Parser.sound`.
	 * @param ctx the parse tree
	 */
	exitSound?: (ctx: SoundContext) => void;

	/**
	 * Enter a parse tree produced by `MapGrammarV2Parser.sound3d`.
	 * @param ctx the parse tree
	 */
	enterSound3d?: (ctx: Sound3dContext) => void;
	/**
	 * Exit a parse tree produced by `MapGrammarV2Parser.sound3d`.
	 * @param ctx the parse tree
	 */
	exitSound3d?: (ctx: Sound3dContext) => void;

	/**
	 * Enter a parse tree produced by `MapGrammarV2Parser.rollingnoise`.
	 * @param ctx the parse tree
	 */
	enterRollingnoise?: (ctx: RollingnoiseContext) => void;
	/**
	 * Exit a parse tree produced by `MapGrammarV2Parser.rollingnoise`.
	 * @param ctx the parse tree
	 */
	exitRollingnoise?: (ctx: RollingnoiseContext) => void;

	/**
	 * Enter a parse tree produced by `MapGrammarV2Parser.flangenoise`.
	 * @param ctx the parse tree
	 */
	enterFlangenoise?: (ctx: FlangenoiseContext) => void;
	/**
	 * Exit a parse tree produced by `MapGrammarV2Parser.flangenoise`.
	 * @param ctx the parse tree
	 */
	exitFlangenoise?: (ctx: FlangenoiseContext) => void;

	/**
	 * Enter a parse tree produced by `MapGrammarV2Parser.jointnoise`.
	 * @param ctx the parse tree
	 */
	enterJointnoise?: (ctx: JointnoiseContext) => void;
	/**
	 * Exit a parse tree produced by `MapGrammarV2Parser.jointnoise`.
	 * @param ctx the parse tree
	 */
	exitJointnoise?: (ctx: JointnoiseContext) => void;

	/**
	 * Enter a parse tree produced by `MapGrammarV2Parser.train`.
	 * @param ctx the parse tree
	 */
	enterTrain?: (ctx: TrainContext) => void;
	/**
	 * Exit a parse tree produced by `MapGrammarV2Parser.train`.
	 * @param ctx the parse tree
	 */
	exitTrain?: (ctx: TrainContext) => void;

	/**
	 * Enter a parse tree produced by `MapGrammarV2Parser.strkey`.
	 * @param ctx the parse tree
	 */
	enterStrkey?: (ctx: StrkeyContext) => void;
	/**
	 * Exit a parse tree produced by `MapGrammarV2Parser.strkey`.
	 * @param ctx the parse tree
	 */
	exitStrkey?: (ctx: StrkeyContext) => void;

	/**
	 * Enter a parse tree produced by `MapGrammarV2Parser.exprArgs`.
	 * @param ctx the parse tree
	 */
	enterExprArgs?: (ctx: ExprArgsContext) => void;
	/**
	 * Exit a parse tree produced by `MapGrammarV2Parser.exprArgs`.
	 * @param ctx the parse tree
	 */
	exitExprArgs?: (ctx: ExprArgsContext) => void;

	/**
	 * Enter a parse tree produced by `MapGrammarV2Parser.varAssign`.
	 * @param ctx the parse tree
	 */
	enterVarAssign?: (ctx: VarAssignContext) => void;
	/**
	 * Exit a parse tree produced by `MapGrammarV2Parser.varAssign`.
	 * @param ctx the parse tree
	 */
	exitVarAssign?: (ctx: VarAssignContext) => void;

	/**
	 * Enter a parse tree produced by `MapGrammarV2Parser.legacy`.
	 * @param ctx the parse tree
	 */
	enterLegacy?: (ctx: LegacyContext) => void;
	/**
	 * Exit a parse tree produced by `MapGrammarV2Parser.legacy`.
	 * @param ctx the parse tree
	 */
	exitLegacy?: (ctx: LegacyContext) => void;

	/**
	 * Enter a parse tree produced by `MapGrammarV2Parser.nullableExpr`.
	 * @param ctx the parse tree
	 */
	enterNullableExpr?: (ctx: NullableExprContext) => void;
	/**
	 * Exit a parse tree produced by `MapGrammarV2Parser.nullableExpr`.
	 * @param ctx the parse tree
	 */
	exitNullableExpr?: (ctx: NullableExprContext) => void;

	/**
	 * Enter a parse tree produced by `MapGrammarV2Parser.expr`.
	 * @param ctx the parse tree
	 */
	enterExpr?: (ctx: ExprContext) => void;
	/**
	 * Exit a parse tree produced by `MapGrammarV2Parser.expr`.
	 * @param ctx the parse tree
	 */
	exitExpr?: (ctx: ExprContext) => void;

	/**
	 * Enter a parse tree produced by `MapGrammarV2Parser.var`.
	 * @param ctx the parse tree
	 */
	enterVar?: (ctx: VarContext) => void;
	/**
	 * Exit a parse tree produced by `MapGrammarV2Parser.var`.
	 * @param ctx the parse tree
	 */
	exitVar?: (ctx: VarContext) => void;

	/**
	 * Enter a parse tree produced by `MapGrammarV2Parser.string`.
	 * @param ctx the parse tree
	 */
	enterString?: (ctx: StringContext) => void;
	/**
	 * Exit a parse tree produced by `MapGrammarV2Parser.string`.
	 * @param ctx the parse tree
	 */
	exitString?: (ctx: StringContext) => void;

	/**
	 * Enter a parse tree produced by `MapGrammarV2Parser.string_text`.
	 * @param ctx the parse tree
	 */
	enterString_text?: (ctx: String_textContext) => void;
	/**
	 * Exit a parse tree produced by `MapGrammarV2Parser.string_text`.
	 * @param ctx the parse tree
	 */
	exitString_text?: (ctx: String_textContext) => void;

	/**
	 * Enter a parse tree produced by `MapGrammarV2Parser.encoding`.
	 * @param ctx the parse tree
	 */
	enterEncoding?: (ctx: EncodingContext) => void;
	/**
	 * Exit a parse tree produced by `MapGrammarV2Parser.encoding`.
	 * @param ctx the parse tree
	 */
	exitEncoding?: (ctx: EncodingContext) => void;

	/**
	 * Enter a parse tree produced by `MapGrammarV2Parser.encode_string`.
	 * @param ctx the parse tree
	 */
	enterEncode_string?: (ctx: Encode_stringContext) => void;
	/**
	 * Exit a parse tree produced by `MapGrammarV2Parser.encode_string`.
	 * @param ctx the parse tree
	 */
	exitEncode_string?: (ctx: Encode_stringContext) => void;

	/**
	 * Enter a parse tree produced by `MapGrammarV2Parser.error_tokens`.
	 * @param ctx the parse tree
	 */
	enterError_tokens?: (ctx: Error_tokensContext) => void;
	/**
	 * Exit a parse tree produced by `MapGrammarV2Parser.error_tokens`.
	 * @param ctx the parse tree
	 */
	exitError_tokens?: (ctx: Error_tokensContext) => void;
}

