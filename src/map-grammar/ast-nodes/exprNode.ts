import { MapGrammarType, MapGrammarAstNode } from "./mapGrammarAstNodes";

/**
 * 全ての数式ASTノードです。
 * 引数や変数値はこのノードの内のどれかが入ります。
 */
export type exprNode =
    | AdditionNode
    | SubtractionNode
    | MultiplicationNode
    | DivisionNode
    | ModuloNode
    | UnaryNode
    | AbsNode
    | Atan2Node
    | CeilNode
    | CosNode
    | ExpNode
    | FloorNode
    | LogNode
    | PowNode
    | RandNode
    | SinNode
    | SqrtNode
    | NumberNode
    | DistanceVariableNode
    | StringNode
    | VarNode

/**
 * 二項演算数式のASTノードベースクラス。
 */
export abstract class InfixExpressionNode extends MapGrammarAstNode {
    left: exprNode | null = null
    right: exprNode | null = null
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
