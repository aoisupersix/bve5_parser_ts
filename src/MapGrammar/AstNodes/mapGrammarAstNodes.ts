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
export class AdditionNode extends InfixExpressionNode {

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