import 'reflect-metadata'
import { ParserRuleContext } from 'antlr4ts'

import { Token } from '../../token'
import { MapGrammarAstNode, MapGrammarType } from './map-grammar-ast-nodes'
import { MapElement } from '../map-element'
import { MapFunction } from '../map-function'
import { exprNode } from './expr-node'

// #region Decorators

/**
 * プロパティを引数として扱います。
 * @param optional 省略可能か？
 */
function argument(optional: boolean) {
  return (target: SyntaxNode, props: string) => {
    // targetに保持している全引数名を記録
    const args: string[] = Reflect.getMetadata('custom:arguments', target) || []
    args.push(props)
    Reflect.defineMetadata('custom:arguments', args, target)

    // 省略可能な引数かどうか
    Reflect.defineMetadata('argument:isoptional', optional, target, props)
  }
}

// #endregion

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
      super(Token.fromIToken(targetNode.start), Token.fromITokenOrUndefined(targetNode.stop), targetNode.text)
    }
  }

  /**
   * 構文が持つ全ての引数名を取得します。
   */
  getAllArgumentNames(): string[] {
    return Reflect.getMetadata('custom:arguments', this) || []
  }

  getAllArgumentKeyValuePairs(): Map<string, exprNode | null> {
    const args = new Map<string, exprNode | null>()
    this.getAllArgumentNames().forEach((argName) => args.set(argName, (this as any)[argName]))
    return args
  }
}

/**
 * キーを保持する構文のASTノードベースクラス。
 */
export abstract class SyntaxWithKeyNode extends SyntaxNode {
  key: exprNode | null = null
}

//#region Curve構文
/**
 * Curve.SetGauge(value)ノード。
 */
export class CurveSetgaugeNode extends SyntaxNode {
  public get type(): MapGrammarType {
    return MapGrammarType.CurveSetgauge
  }
  readonly mapElement: MapElement = MapElement.Curve
  readonly function: MapFunction = MapFunction.SetGauge

  @argument(false)
  value: exprNode | null = null
}

// /**
//  * Curve.SetCenter(x)ノード。
//  */
// export class CurveSetcenterNode extends SyntaxNode {
//   public get type(): MapGrammarType { return MapGrammarType.CurveSetcenter }
//   readonly mapElement: MapElement = MapElement.Curve
//   readonly function: MapFunction = MapFunction.SetCenter
//   x: exprNode | null = null
// }

// /**
//  * Curve.SetFunction(id)ノード。
//  */
// export class CurveSetfunctionNode extends SyntaxNode {
//   public get type(): MapGrammarType { return MapGrammarType.CurveSetfunction }
//   readonly mapElement: MapElement = MapElement.Curve
//   readonly function: MapFunction = MapFunction.SetFunction
//   id: exprNode | null = null
// }

// /**
//  * Curve.BeginTransition()ノード。
//  */
// export class CurveBegintransitionNode extends SyntaxNode {
//   public get type(): MapGrammarType { return MapGrammarType.CurveBegintransition }
//   readonly mapElement: MapElement = MapElement.Curve
//   readonly function: MapFunction = MapFunction.BeginTransition
// }

// /**
//  * Curve.Begin(radius?, cant?)ノード。
//  */
// export class CurveBeginNode extends SyntaxNode {
//   public get type(): MapGrammarType { return MapGrammarType.CurveBegin }
//   readonly mapElement: MapElement = MapElement.Curve
//   readonly function: MapFunction = MapFunction.Begin
//   radius: exprNode | null = null
//   cant: exprNode | null = null
// }

// /**
//  * Curve.End()ノード。
//  */
// export class CurveEndNode extends SyntaxNode {
//   public get type(): MapGrammarType { return MapGrammarType.CurveEnd }
//   readonly mapElement: MapElement = MapElement.Curve
//   readonly function: MapFunction = MapFunction.End
// }

// /**
//  * Curve.Interpolate(radius?, cant?)ノード。
//  */
// export class CurveInterpolateNode extends SyntaxNode {
//   public get type(): MapGrammarType { return MapGrammarType.CurveInterpolate }
//   readonly mapElement: MapElement = MapElement.Curve
//   readonly function: MapFunction = MapFunction.Interpolate
//   radius: exprNode | null = null
//   cant: exprNode | null = null
// }

// /**
//  * Curve.Change(radius)ノード。
//  */
// export class CurveChangeNode extends SyntaxNode {
//   public get type(): MapGrammarType { return MapGrammarType.CurveChange }
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
//   public get type(): MapGrammarType { return MapGrammarType.GradientBegintransition }
//   readonly mapElement: MapElement = MapElement.Gradient
//   readonly function: MapFunction = MapFunction.BeginTransition
// }

// /**
//  * Gradient.Begin()ノード。
//  */
// export class GradientBeginNode extends SyntaxNode {
//   public get type(): MapGrammarType { return MapGrammarType.GradientBegin }
//   readonly mapElement: MapElement = MapElement.Gradient
//   readonly function: MapFunction = MapFunction.Begin
//   gradient: exprNode | null = null
// }

// /**
//  * Gradient.End()ノード。
//  */
// export class GradientEndNode extends SyntaxNode {
//   public get type(): MapGrammarType { return MapGrammarType.GradientEnd }
//   readonly mapElement: MapElement = MapElement.Gradient
//   readonly function: MapFunction = MapFunction.End
// }

// /**
//  * Gradient.Interpolate(gradient?)ノード。
//  */
// export class GradientInterpolateNode extends SyntaxNode {
//   public get type(): MapGrammarType { return MapGrammarType.GradientInterpolate }
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
//   public get type(): MapGrammarType { return MapGrammarType.TrackXInterpolate }
//   readonly mapElement: MapElement = MapElement.Track
//   readonly function: MapFunction = MapFunction.X_Interpolate
//   x: exprNode | null = null
//   radius: exprNode | null = null
// }

// /**
//  * Track[Key].Y.Interpolate(x?, radius?)ノード。
//  */
// export class TrackYInterpolateNode extends SyntaxWithKeyNode {
//   public get type(): MapGrammarType { return MapGrammarType.TrackYInterpolate }
//   readonly mapElement: MapElement = MapElement.Track
//   readonly function: MapFunction = MapFunction.Y_Interpolate
//   y: exprNode | null = null
//   radius: exprNode | null = null
// }

// /**
//  * Track[Key].Cant.SetCenter(x)ノード。
//  */
// export class TrackCantSetcenterNode extends SyntaxWithKeyNode {
//   public get type(): MapGrammarType { return MapGrammarType.TrackCantSetcenter }
//   readonly mapElement: MapElement = MapElement.Track
//   readonly function: MapFunction = MapFunction.Cant_SetCenter
//   x: exprNode | null = null
// }

// /**
//  * Track[Key].Cant.Setfunction(id)ノード。
//  */
// export class TrackCantSetfunctionNode extends SyntaxWithKeyNode {
//   public get type(): MapGrammarType { return MapGrammarType.TrackCantSetfunction }
//   readonly mapElement: MapElement = MapElement.Track
//   readonly function: MapFunction = MapFunction.Cant_SetFunction
//   id: exprNode | null = null
// }

// /**
//  * Track[Key].Cant.BeginTransition()ノード。
//  */
// export class TrackCantBegintransitionNode extends SyntaxWithKeyNode {
//   public get type(): MapGrammarType { return MapGrammarType.TrackCantBegintransition }
//   readonly mapElement: MapElement = MapElement.Track
//   readonly function: MapFunction = MapFunction.Cant_BeginTransition
// }

// /**
//  * Track[Key].Cant.Begin(cant)ノード。
//  */
// export class TrackCantBeginNode extends SyntaxWithKeyNode {
//   public get type(): MapGrammarType { return MapGrammarType.TrackCantBegin }
//   readonly mapElement: MapElement = MapElement.Track
//   readonly function: MapFunction = MapFunction.Cant_Begin
//   cant: exprNode | null = null
// }

// /**
//  * Track[Key].Cant.End()ノード。
//  */
// export class TrackCantEndNode extends SyntaxWithKeyNode {
//   public get type(): MapGrammarType { return MapGrammarType.TrackCantEnd }
//   readonly mapElement: MapElement = MapElement.Track
//   readonly function: MapFunction = MapFunction.Cant_End
// }

// /**
//  * Track[Key].Cant.Interpolate(cant?)ノード。
//  */
// export class TrackCantInterpolateNode extends SyntaxWithKeyNode {
//   public get type(): MapGrammarType { return MapGrammarType.TrackCantInterpolate }
//   readonly mapElement: MapElement = MapElement.Track
//   readonly function: MapFunction = MapFunction.Cant_Interpolate
//   cant: exprNode | null = null
// }
// //#endregion
