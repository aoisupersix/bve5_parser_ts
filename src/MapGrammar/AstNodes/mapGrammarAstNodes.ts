import { Token } from "../token";
import { MapElement } from "../mapElement";
import { MapFunction } from "../mapFunction";

/**
 * マップ構文のASTノード種類
 */
export enum MapGrammarType {
  Root,
  Distance,
  VarAssign,
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
  CurveSetgaugeNode,
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
}

/**
 * キーを保持する構文のASTノードベースクラス。
 */
export abstract class SyntaxWithKeyNode extends SyntaxNode {
  key: MapGrammarAstNode | null = null
}

/**
 * 二項演算数式のASTノードベースクラス。
 */
export abstract class InfixExpressionNode extends MapGrammarAstNode {
  left: MapGrammarAstNode | null = null
  right: MapGrammarAstNode | null = null
}

/**
 * ルートノード。
 * ASTの根となるノードで、範囲は全構文が含まれます。
 * 各構文はstatementsに格納されています。
 */
export class RootNode extends MapGrammarAstNode {
  readonly type: MapGrammarType = MapGrammarType.Root
  version: string | null = null
  encoding: string | null = null
  statements: Array<MapGrammarAstNode> = []
}

/**
 * 距離程ノード。
 */
export class DistanceNode extends MapGrammarAstNode {
  type: MapGrammarType = MapGrammarType.Distance
  value: MapGrammarAstNode | null = null
}

/**
 * 変数宣言ノード。
 */
export class VarAssignNode extends MapGrammarAstNode {
  type: MapGrammarType = MapGrammarType.VarAssign
  varName: string | null = null
  value: MapGrammarAstNode | null = null
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
  inner: MapGrammarAstNode | null = null
}

/**
 * 絶対値関数ノード。
 */
export class AbsNode extends MapGrammarAstNode {
  type: MapGrammarType = MapGrammarType.Calc_Abs
  value: MapGrammarAstNode | null = null
}

/**
 * ArcTan関数ノード。
 */
export class Atan2Node extends MapGrammarAstNode {
  type: MapGrammarType = MapGrammarType.Calc_Atan2
  y: MapGrammarAstNode | null = null
  x: MapGrammarAstNode | null = null
}

/**
 * Ceil関数ノード。
 */
export class CeilNode extends MapGrammarAstNode {
  type: MapGrammarType = MapGrammarType.Calc_Ceil
  value: MapGrammarAstNode | null = null
}

/**
 * Cos関数ノード。
 */
export class CosNode extends MapGrammarAstNode {
  type: MapGrammarType = MapGrammarType.Calc_Cos
  value: MapGrammarAstNode | null = null
}

/**
 * Exp関数ノード。
 */
export class ExpNode extends MapGrammarAstNode {
  type: MapGrammarType = MapGrammarType.Calc_Exp
  value: MapGrammarAstNode | null = null
}

/**
 * Floor関数ノード。
 */
export class FloorNode extends MapGrammarAstNode {
  type: MapGrammarType = MapGrammarType.Calc_Floor
  value: MapGrammarAstNode | null = null
}

/**
 * Log関数ノード。
 */
export class LogNode extends MapGrammarAstNode {
  type: MapGrammarType = MapGrammarType.Calc_Log
  value: MapGrammarAstNode | null = null
}

/**
 * Pow関数ノード。
 */
export class PowNode extends MapGrammarAstNode {
  type: MapGrammarType = MapGrammarType.Calc_Pow
  x: MapGrammarAstNode | null = null
  y: MapGrammarAstNode | null = null
}

/**
 * Rand関数ノード。
 */
export class RandNode extends MapGrammarAstNode {
  type: MapGrammarType = MapGrammarType.Calc_Rand
  value: MapGrammarAstNode | null = null
}

/**
 * Sin関数ノード。
 */
export class SinNode extends MapGrammarAstNode {
  type: MapGrammarType = MapGrammarType.Calc_Sin
  value: MapGrammarAstNode | null = null
}

/**
 * Sqrt関数ノード。
 */
export class SqrtNode extends MapGrammarAstNode {
  type: MapGrammarType = MapGrammarType.Calc_Sqrt
  value: MapGrammarAstNode | null = null
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

/**
 * Curve.SetGauge(value)ノード。
 */
export class CurveSetgaugeNode extends SyntaxNode {
  readonly type: MapGrammarType = MapGrammarType.CurveSetgaugeNode
  readonly mapElement: MapElement = MapElement.Curve
  readonly function: MapFunction = MapFunction.SetGauge
  value: MapGrammarAstNode | null = null
}