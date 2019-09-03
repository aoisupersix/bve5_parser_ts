import { Token } from '../../token'

/**
 * マップ構文のASTノード種類
 */
export enum MapGrammarType {
    Root,
    Distance,
    VarAssign,
    CurveSetgauge,
    CurveSetcenter,
    CurveSetfunction,
    CurveBegintransition,
    CurveBegin,
    CurveEnd,
    CurveInterpolate,
    CurveChange,
    GradientBegintransition,
    GradientBegin,
    GradientEnd,
    GradientInterpolate,
    TrackXInterpolate,
    TrackYInterpolate,
    TrackPosition,
    TrackCantSetgauge,
    TrackCantSetcenter,
    TrackCantSetfunction,
    TrackCantBegintransition,
    TrackCantBegin,
    TrackCantEnd,
    TrackCantInterpolate,
    StructureLoad,
    StructurePut,
    StructurePut0,
    StructurePutBetween,
    RepeaterBegin,
    RepeaterBegin0,
    RepeaterEnd,
    BackgroundChange,
    StationLoad,
    StationPut,
    SectionBegin,
    SectionSetspeedlimit,
    SignalLoad,
    SignalPut,
    BeaconPut,
    SpeedlimitBegin,
    SpeedlimitEnd,
    PretrainPass,
    LightAmbient,
    LightDiffuse,
    LightDirection,
    FogInterpolate,
    DrawdistanceChange,
    CabilluminanceInterpolate,
    IrregularityChange,
    AdhesionChange,
    SoundLoad,
    SoundPlay,
    Sound3dLoad,
    Sound3dChange,
    RollingnoiseChange,
    FlangenoiseChange,
    JointnoisePlay,
    TrainAdd,
    TrainLoad,
    TrainEnable,
    TrainStop,
    Calc_Addition,
    Calc_Subtraction,
    Calc_Multiplication,
    Calc_Division,
    Calc_Modulo,
    Calc_Unary,
    Calc_Abs,
    Calc_Atan2,
    Calc_Ceil,
    Calc_Cos,
    Calc_Exp,
    Calc_Floor,
    Calc_Log,
    Calc_Pow,
    Calc_Rand,
    Calc_Sin,
    Calc_Sqrt,
    Number,
    DistanceVariable,
    String,
    Var
}

/**
 * マップ構文のASTノードベースクラス。
 * 全てのASTノードがこのクラスを継承しています。
 */
export abstract class MapGrammarAstNode {

    /**
     * Astノードの種類
     */
    public abstract get type(): MapGrammarType

    constructor(
        /**
         * ノードの開始トークン
         */
        public start: Token,

        /**
         * ノードの終了トークン
         */
        public end: Token | undefined,

        /**
         * ノードの入力文字列
         */
        public text: string
    ) {}
}
