import { Token } from '../../token'
import { MapGrammarAstNode, MapGrammarType } from './mapGrammarAstNodes'
import { MapElement } from '../mapElement'
import { MapFunction } from '../mapFunction'
import { exprNode } from './exprNode'
import { ParserRuleContext } from 'antlr4ts';

/**
 * 全てのマップ構文ASTノードです。
 * RootNodeのstatementsは型を絞れた方がいいと思うので距離程、変数宣言、マップ構文のみ許可します。
 * ASTの構造としてはルートノードの下にこれらのノードが構文分だけぶら下がる形になります。
 */
export type statementNode = DistanceNode | VarAssignNode | SyntaxNode

/**
 * 構文のASTノードベースクラス。
 */
export abstract class SyntaxNode extends MapGrammarAstNode {
    abstract readonly mapElement: MapElement
    abstract readonly function: MapFunction

    /**
     * ベースクラスと同じコンストラクタ
     * @param start
     * @param end
     * @param text
     */
    constructor(start: Token, end: Token | undefined, text: string)

    /**
     * Contextからトークンを取得してインスタンス化します。
     * @param ctx 各構文のParserRuleContext
     */
    constructor(ctx: ParserRuleContext)

    constructor(startOrContext: Token | ParserRuleContext, end?: Token | undefined, text?: string) {
        if (startOrContext instanceof Token) {
            // Default
            super(startOrContext, end, text!)
        } else {
            // Get Token from Context
            const ctx = <ParserRuleContext>startOrContext
            const targetNode = ctx.parent !== undefined ? ctx.parent : ctx
            super(
                Token.fromIToken(targetNode.start)!,
                Token.fromIToken(targetNode.stop),
                targetNode.text)
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
