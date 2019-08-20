import { Token } from "../../token";
import { MapElement } from "../mapElement";
import { MapFunction } from "../mapFunction";

/**
 * 全てのマップ構文ASTノードです。
 * RootNodeのstatementsは型を絞れた方がいいと思うので距離程、変数宣言、マップ構文のみ許可します。
 * ASTの構造としてはルートノードの下にこれらのノードが構文分だけぶら下がる形になります。
 */
export type statementNode = DistanceNode | VarAssignNode | SyntaxNode

/**
 * 全ての数式ASTノードです。
 * 引数や変数値はこのノードの内のどれかが入ります。
 */
export type exprNode = AdditionNode | SubtractionNode | MultiplicationNode | DivisionNode | ModuloNode | UnaryNode
  | AbsNode | Atan2Node | CeilNode | CosNode | ExpNode | FloorNode | LogNode | PowNode | RandNode | SinNode | SqrtNode
  | NumberNode | DistanceVariableNode | StringNode | VarNode

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
  Var,
}

/**
 * マップ構文のASTノードベースクラス。
 * 全てのASTノードがこのクラスを継承しています。
 */
export abstract class MapGrammarAstNode {

  /**
   * Astノードの種類
   */
  readonly abstract type: MapGrammarType

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

/**
 * 構文のASTノードベースクラス。
 */
export abstract class SyntaxNode extends MapGrammarAstNode {
  readonly mapElement: MapElement
  readonly function: MapFunction

  /**
   * MapGrammarVisitor.getSyntaxDataの戻り値からインスタンスを生成する便利コンストラクタ
   * @param data start,end,textをまとめた配列
   */
  constructor(data: [Token, Token | undefined, string])

  /**
   * ベースクラスと同じコンストラクタ
   * @param start
   * @param end
   * @param text
   */
  constructor(start: Token, end: Token | undefined, text: string)
  constructor(startOrData: any, end?: Token | undefined, text?: string) {
    if (startOrData instanceof Token) {
      var start = startOrData
      super(start, end, text!)
    }else {
      const data = <[Token, Token | undefined, string]>startOrData
      start = data[0]
      const end = data[1]
      const text = data[2]
      super(start, end, text)
    }
  }
}

/**
 * キーを保持する構文のASTノードベースクラス。
 */
export abstract class SyntaxWithKeyNode extends SyntaxNode {
  key: exprNode | null = null
}

/**
 * 二項演算数式のASTノードベースクラス。
 */
export abstract class InfixExpressionNode extends MapGrammarAstNode {
  left: exprNode | null = null
  right: exprNode | null = null
}

/**
 * ルートノード。
 * ASTの根となるノードで、範囲は全構文が含まれます。
 * 各構文はstatementsに格納されています。
 */
export class RootNode extends MapGrammarAstNode {
  readonly type: MapGrammarType = MapGrammarType.Root
  version: string
  encoding: string | null = null
  statements: Array<statementNode> = []
}

/**
 * 距離程ノード。
 */
export class DistanceNode extends MapGrammarAstNode {
  type: MapGrammarType = MapGrammarType.Distance
  value: exprNode | null = null
}

/**
 * 変数宣言ノード。
 */
export class VarAssignNode extends MapGrammarAstNode {
  type: MapGrammarType = MapGrammarType.VarAssign
  varName: string | null = null
  value: exprNode | null = null
}

//#region 数式関係
/**
 * 加算ノード。
 */
export class AdditionNode extends InfixExpressionNode {
  type: MapGrammarType = MapGrammarType.Calc_Addition
}

/**
 * 減算ノード。
 */
export class SubtractionNode extends InfixExpressionNode {
  type: MapGrammarType = MapGrammarType.Calc_Subtraction
}

/**
 * 乗算ノード。
 */
export class MultiplicationNode extends InfixExpressionNode {
  type: MapGrammarType = MapGrammarType.Calc_Multiplication
}

/**
 * 除算ノード。
 */
export class DivisionNode extends InfixExpressionNode {
  type: MapGrammarType = MapGrammarType.Calc_Division
}

/**
 * 剰余算ノード。
 */
export class ModuloNode extends InfixExpressionNode {
  type: MapGrammarType = MapGrammarType.Calc_Modulo
}

/**
 * ユーナリ演算ノード。
 */
export class UnaryNode extends MapGrammarAstNode {
  type: MapGrammarType = MapGrammarType.Calc_Unary
  inner: exprNode | null = null
}

/**
 * 絶対値関数ノード。
 */
export class AbsNode extends MapGrammarAstNode {
  type: MapGrammarType = MapGrammarType.Calc_Abs
  value: exprNode | null = null
}

/**
 * ArcTan関数ノード。
 */
export class Atan2Node extends MapGrammarAstNode {
  type: MapGrammarType = MapGrammarType.Calc_Atan2
  y: exprNode | null = null
  x: exprNode | null = null
}

/**
 * Ceil関数ノード。
 */
export class CeilNode extends MapGrammarAstNode {
  type: MapGrammarType = MapGrammarType.Calc_Ceil
  value: exprNode | null = null
}

/**
 * Cos関数ノード。
 */
export class CosNode extends MapGrammarAstNode {
  type: MapGrammarType = MapGrammarType.Calc_Cos
  value: exprNode | null = null
}

/**
 * Exp関数ノード。
 */
export class ExpNode extends MapGrammarAstNode {
  type: MapGrammarType = MapGrammarType.Calc_Exp
  value: exprNode | null = null
}

/**
 * Floor関数ノード。
 */
export class FloorNode extends MapGrammarAstNode {
  type: MapGrammarType = MapGrammarType.Calc_Floor
  value: exprNode | null = null
}

/**
 * Log関数ノード。
 */
export class LogNode extends MapGrammarAstNode {
  type: MapGrammarType = MapGrammarType.Calc_Log
  value: exprNode | null = null
}

/**
 * Pow関数ノード。
 */
export class PowNode extends MapGrammarAstNode {
  type: MapGrammarType = MapGrammarType.Calc_Pow
  x: exprNode | null = null
  y: exprNode | null = null
}

/**
 * Rand関数ノード。
 */
export class RandNode extends MapGrammarAstNode {
  type: MapGrammarType = MapGrammarType.Calc_Rand
  value: exprNode | null = null
}

/**
 * Sin関数ノード。
 */
export class SinNode extends MapGrammarAstNode {
  type: MapGrammarType = MapGrammarType.Calc_Sin
  value: exprNode | null = null
}

/**
 * Sqrt関数ノード。
 */
export class SqrtNode extends MapGrammarAstNode {
  type: MapGrammarType = MapGrammarType.Calc_Sqrt
  value: exprNode | null = null
}
//#endregion

//#region 値

/**
 * 数値ノード。
 */
export class NumberNode extends MapGrammarAstNode {
  type: MapGrammarType = MapGrammarType.Number
  value: number | null = null
}

/**
 * 距離変数ノード。
 */
export class DistanceVariableNode extends MapGrammarAstNode {
  type: MapGrammarType = MapGrammarType.DistanceVariable
}

/**
 * 文字列ノード。
 */
export class StringNode extends MapGrammarAstNode {
  type: MapGrammarType = MapGrammarType.String
  value: string | null = null
}

/**
 * 数値ノード。
 */
export class VarNode extends MapGrammarAstNode {
  type: MapGrammarType = MapGrammarType.Var
  varName: string | null = null
}
//#endregion

//#region Curve構文
/**
 * Curve.SetGauge(value)ノード。
 */
export class CurveSetgaugeNode extends SyntaxNode {
  readonly type: MapGrammarType = MapGrammarType.CurveSetgauge
  readonly mapElement: MapElement = MapElement.Curve
  readonly function: MapFunction = MapFunction.SetGauge
  value: exprNode | null = null
}

// /**
//  * Curve.SetCenter(x)ノード。
//  */
// export class CurveSetcenterNode extends SyntaxNode {
//   readonly type: MapGrammarType = MapGrammarType.CurveSetcenter
//   readonly mapElement: MapElement = MapElement.Curve
//   readonly function: MapFunction = MapFunction.SetCenter
//   x: exprNode | null = null
// }

// /**
//  * Curve.SetFunction(id)ノード。
//  */
// export class CurveSetfunctionNode extends SyntaxNode {
//   readonly type: MapGrammarType = MapGrammarType.CurveSetfunction
//   readonly mapElement: MapElement = MapElement.Curve
//   readonly function: MapFunction = MapFunction.SetFunction
//   id: exprNode | null = null
// }

// /**
//  * Curve.BeginTransition()ノード。
//  */
// export class CurveBegintransitionNode extends SyntaxNode {
//   readonly type: MapGrammarType = MapGrammarType.CurveBegintransition
//   readonly mapElement: MapElement = MapElement.Curve
//   readonly function: MapFunction = MapFunction.BeginTransition
// }

// /**
//  * Curve.Begin(radius?, cant?)ノード。
//  */
// export class CurveBeginNode extends SyntaxNode {
//   readonly type: MapGrammarType = MapGrammarType.CurveBegin
//   readonly mapElement: MapElement = MapElement.Curve
//   readonly function: MapFunction = MapFunction.Begin
//   radius: exprNode | null = null
//   cant: exprNode | null = null
// }

// /**
//  * Curve.End()ノード。
//  */
// export class CurveEndNode extends SyntaxNode {
//   readonly type: MapGrammarType = MapGrammarType.CurveEnd
//   readonly mapElement: MapElement = MapElement.Curve
//   readonly function: MapFunction = MapFunction.End
// }

// /**
//  * Curve.Interpolate(radius?, cant?)ノード。
//  */
// export class CurveInterpolateNode extends SyntaxNode {
//   readonly type: MapGrammarType = MapGrammarType.CurveInterpolate
//   readonly mapElement: MapElement = MapElement.Curve
//   readonly function: MapFunction = MapFunction.Interpolate
//   radius: exprNode | null = null
//   cant: exprNode | null = null
// }

// /**
//  * Curve.Change(radius)ノード。
//  */
// export class CurveChangeNode extends SyntaxNode {
//   readonly type: MapGrammarType = MapGrammarType.CurveChange
//   readonly mapElement: MapElement = MapElement.Curve
//   readonly function: MapFunction = MapFunction.Change
//   radius: exprNode | null = null
// }
// //#endregion

// //#region Gradient構文
// /**
//  * Gradient.BeginTransition()ノード。
//  */
// export class GradientBegintransitionNode extends SyntaxNode {
//   readonly type: MapGrammarType = MapGrammarType.GradientBegintransition
//   readonly mapElement: MapElement = MapElement.Gradient
//   readonly function: MapFunction = MapFunction.BeginTransition
// }

// /**
//  * Gradient.Begin()ノード。
//  */
// export class GradientBeginNode extends SyntaxNode {
//   readonly type: MapGrammarType = MapGrammarType.GradientBegin
//   readonly mapElement: MapElement = MapElement.Gradient
//   readonly function: MapFunction = MapFunction.Begin
//   gradient: exprNode | null = null
// }

// /**
//  * Gradient.End()ノード。
//  */
// export class GradientEndNode extends SyntaxNode {
//   readonly type: MapGrammarType = MapGrammarType.GradientEnd
//   readonly mapElement: MapElement = MapElement.Gradient
//   readonly function: MapFunction = MapFunction.End
// }

// /**
//  * Gradient.Interpolate(gradient?)ノード。
//  */
// export class GradientInterpolateNode extends SyntaxNode {
//   readonly type: MapGrammarType = MapGrammarType.GradientInterpolate
//   readonly mapElement: MapElement = MapElement.Gradient
//   readonly function: MapFunction = MapFunction.Interpolate
//   gradient: exprNode | null = null
// }
// //#endregion

// //#region Track構文
// /**
//  * Track[Key].X.Interpolate(x?, radius?)ノード。
//  */
// export class TrackXInterpolateNode extends SyntaxWithKeyNode {
//   readonly type: MapGrammarType = MapGrammarType.TrackXInterpolate
//   readonly mapElement: MapElement = MapElement.Track
//   readonly function: MapFunction = MapFunction.X_Interpolate
//   x: exprNode | null = null
//   radius: exprNode | null = null
// }

// /**
//  * Track[Key].Y.Interpolate(x?, radius?)ノード。
//  */
// export class TrackYInterpolateNode extends SyntaxWithKeyNode {
//   readonly type: MapGrammarType = MapGrammarType.TrackYInterpolate
//   readonly mapElement: MapElement = MapElement.Track
//   readonly function: MapFunction = MapFunction.Y_Interpolate
//   y: exprNode | null = null
//   radius: exprNode | null = null
// }

// /**
//  * Track[Key].Cant.SetCenter(x)ノード。
//  */
// export class TrackCantSetcenterNode extends SyntaxWithKeyNode {
//   readonly type: MapGrammarType = MapGrammarType.TrackCantSetcenter
//   readonly mapElement: MapElement = MapElement.Track
//   readonly function: MapFunction = MapFunction.Cant_SetCenter
//   x: exprNode | null = null
// }

// /**
//  * Track[Key].Cant.Setfunction(id)ノード。
//  */
// export class TrackCantSetfunctionNode extends SyntaxWithKeyNode {
//   readonly type: MapGrammarType = MapGrammarType.TrackCantSetfunction
//   readonly mapElement: MapElement = MapElement.Track
//   readonly function: MapFunction = MapFunction.Cant_SetFunction
//   id: exprNode | null = null
// }

// /**
//  * Track[Key].Cant.BeginTransition()ノード。
//  */
// export class TrackCantBegintransitionNode extends SyntaxWithKeyNode {
//   readonly type: MapGrammarType = MapGrammarType.TrackCantBegintransition
//   readonly mapElement: MapElement = MapElement.Track
//   readonly function: MapFunction = MapFunction.Cant_BeginTransition
// }

// /**
//  * Track[Key].Cant.Begin(cant)ノード。
//  */
// export class TrackCantBeginNode extends SyntaxWithKeyNode {
//   readonly type: MapGrammarType = MapGrammarType.TrackCantBegin
//   readonly mapElement: MapElement = MapElement.Track
//   readonly function: MapFunction = MapFunction.Cant_Begin
//   cant: exprNode | null = null
// }

// /**
//  * Track[Key].Cant.End()ノード。
//  */
// export class TrackCantEndNode extends SyntaxWithKeyNode {
//   readonly type: MapGrammarType = MapGrammarType.TrackCantEnd
//   readonly mapElement: MapElement = MapElement.Track
//   readonly function: MapFunction = MapFunction.Cant_End
// }

// /**
//  * Track[Key].Cant.Interpolate(cant?)ノード。
//  */
// export class TrackCantInterpolateNode extends SyntaxWithKeyNode {
//   readonly type: MapGrammarType = MapGrammarType.TrackCantInterpolate
//   readonly mapElement: MapElement = MapElement.Track
//   readonly function: MapFunction = MapFunction.Cant_Interpolate
//   cant: exprNode | null = null
// }
// //#endregion
