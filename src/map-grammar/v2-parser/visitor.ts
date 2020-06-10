import { MapGrammarV2ParserVisitor } from './parser/MapGrammarV2ParserVisitor'
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor'
import * as parser from './parser/MapGrammarV2Parser'
import { MapGrammarAstNode } from '../ast-nodes/map-grammar-ast-nodes'
import { Token } from '../../token'
import { MapFunction } from '../map-function'
import { RootNode } from '../ast-nodes/root-node'
import { statementNode, DistanceNode } from '../ast-nodes/statement-node'
import { CurveSetgaugeNode } from '../ast-nodes/syntax-node'

export type AstNode = MapGrammarAstNode | null

export class MapGrammarV2Visitor extends AbstractParseTreeVisitor<AstNode>
  implements MapGrammarV2ParserVisitor<AstNode> {
  defaultResult(): null {
    return null
  }

  /**
   * ルートの巡回
   * @param ctx
   */
  visitRoot(ctx: parser.RootContext): AstNode {
    const node = new RootNode(Token.fromIToken(ctx.start), Token.fromITokenOrUndefined(ctx.stop), ctx.text)

    if (ctx._version.text !== undefined) {
      node.version = ctx._version.text
    }
    const encodeCtx = ctx.encoding()
    if (encodeCtx !== undefined) {
      node.encoding = encodeCtx.text
    }

    for (const statement of ctx.statement()) {
      const child = this.visit(statement)
      if (child !== null) {
        node.addStatement(<statementNode>child)
      }
    }

    return node
  }

  //#region ステートメントVisitors
  /**
   * 距離程ステートメントの巡回
   * @param ctx
   */
  visitDistState(ctx: parser.DistStateContext): AstNode {
    return this.visit(ctx.distance())
  }

  /**
   * インクルードステートメントの巡回
   * @param ctx
   */
  visitIncludeState(ctx: parser.IncludeStateContext): AstNode {
    return this.visit(ctx.include())
  }

  /**
   * 平面曲線ステートメントの巡回
   * @param ctx
   */
  visitCurveState(ctx: parser.CurveStateContext): AstNode {
    return this.visit(ctx.curve())
  }

  /**
   * 縦曲線ステートメントの巡回
   * @param ctx
   */
  visitGradientState(ctx: parser.GradientStateContext): AstNode {
    return this.visit(ctx.gradient())
  }

  /**
   * 他軌道ステートメントの巡回
   * @param ctx
   */
  visitTrackState(ctx: parser.TrackStateContext): AstNode {
    return this.visit(ctx.track())
  }

  /**
   * ストラクチャステートメントの巡回
   * @param ctx
   */
  visitStructureState(ctx: parser.StructureStateContext): AstNode {
    return this.visit(ctx.structure())
  }

  /**
   * 連続ストラクチャステートメントの巡回
   * @param ctx
   */
  visitRepeaterState(ctx: parser.RepeaterStateContext): AstNode {
    return this.visit(ctx.repeater())
  }

  /**
   * 背景ステートメントの巡回
   * @param ctx
   */
  visitBackgroundState(ctx: parser.BackgroundStateContext): AstNode {
    return this.visit(ctx.background())
  }

  /**
   * 停車場ステートメントの巡回
   * @param ctx
   */
  visitStationState(ctx: parser.StationStateContext): AstNode {
    return this.visit(ctx.station())
  }

  /**
   * 閉そくステートメントの巡回
   * @param ctx
   */
  visitSectionState(ctx: parser.SectionStateContext): AstNode {
    return this.visit(ctx.section())
  }

  /**
   * 地上子ステートメントの巡回
   * @param ctx
   */
  visitSignalState(ctx: parser.SignalStateContext): AstNode {
    return this.visit(ctx.signal())
  }

  /**
   * 速度制限ステートメントの巡回
   * @param ctx
   */
  visitSpeedlimitState(ctx: parser.SpeedlimitStateContext): AstNode {
    return this.visit(ctx.speedlimit())
  }

  /**
   * 先行列車ステートメントの巡回
   * @param ctx
   */
  visitPretrainState(ctx: parser.PretrainStateContext): AstNode {
    return this.visit(ctx.pretrain())
  }

  /**
   * 光源ステートメントの巡回
   * @param ctx
   */
  visitLightState(ctx: parser.LightStateContext): AstNode {
    return this.visit(ctx.light())
  }

  /**
   * 霧効果ステートメントの巡回
   * @param ctx
   */
  visitFogState(ctx: parser.FogStateContext): AstNode {
    return this.visit(ctx.fog())
  }

  /**
   * 風景描画距離ステートメントの巡回
   * @param ctx
   */
  visitDrawdistanceState(ctx: parser.DrawdistanceStateContext): AstNode {
    return this.visit(ctx.drawdistance())
  }

  /**
   * 運転台の明るさステートメントの巡回
   * @param ctx
   */
  visitCabilluminanceState(ctx: parser.CabilluminanceStateContext): AstNode {
    return this.visit(ctx.cabilluminance())
  }

  /**
   * 軌道変位ステートメントの巡回
   * @param ctx
   */
  visitIrregularityState(ctx: parser.IrregularityStateContext): AstNode {
    return this.visit(ctx.irregularity())
  }

  /**
   * 粘着特性ステートメントの巡回
   * @param ctx
   */
  visitAdhesionState(ctx: parser.AdhesionStateContext): AstNode {
    return this.visit(ctx.adhesion())
  }

  /**
   * 音ステートメントの巡回
   * @param ctx
   */
  visitSoundState(ctx: parser.SoundStateContext): AstNode {
    return this.visit(ctx.sound())
  }

  /**
   * 固定音源ステートメントの巡回
   * @param ctx
   */
  visitSound3dState(ctx: parser.Sound3dStateContext): AstNode {
    return this.visit(ctx.sound3d())
  }

  /**
   * 走行音ステートメントの巡回
   * @param ctx
   */
  visitRollingnoiseState(ctx: parser.RollingnoiseStateContext): AstNode {
    return this.visit(ctx.rollingnoise())
  }

  /**
   * フランジきしり音ステートメントの巡回
   * @param ctx
   */
  visitFlangenoiseState(ctx: parser.FlangenoiseStateContext): AstNode {
    return this.visit(ctx.flangenoise())
  }

  /**
   * 分岐器通過音ステートメントの巡回
   * @param ctx
   */
  visitJointnoiseState(ctx: parser.JointnoiseStateContext): AstNode {
    return this.visit(ctx.jointnoise())
  }

  /**
   * 他列車ステートメントの巡回
   * @param ctx
   */
  visitTrainState(ctx: parser.TrainStateContext): AstNode {
    return this.visit(ctx.train())
  }

  /**
   * 変数宣言ステートメントの巡回
   * @param ctx
   */
  visitVarAssignState(ctx: parser.VarAssignStateContext): AstNode {
    return this.visit(ctx.varAssign())
  }

  /**
   * レガシーステートメントの巡回
   * @param ctx
   */
  visitLegacyState(ctx: parser.LegacyStateContext): AstNode {
    return this.visit(ctx.legacy())
  }
  //#endregion

  /**
   * 距離程の巡回
   * @param ctx
   */
  visitDistance(ctx: parser.DistanceContext): AstNode {
    let start = ctx.start
    if (ctx.parent !== undefined) {
      start = ctx.parent.start
    }
    const node = new DistanceNode(Token.fromIToken(start), Token.fromITokenOrUndefined(ctx.stop), ctx.text)

    const val = this.visit(ctx.expr())
    if (val !== null) {
      node.value = val
    }

    return node
  }

  //#region Syntax Visitor
  /**
   * 平面曲線の巡回
   * @param ctx
   */
  visitCurve(ctx: parser.CurveContext): AstNode {
    if (ctx._func.text === undefined) {
      return null
    }
    const funcName = ctx._func.text.toLowerCase()
    switch (funcName) {
      /* Curve.SetGauge(value) */
      case MapFunction.SetGauge:
        // eslint-disable-next-line no-case-declarations
        const setGaugeNode = new CurveSetgaugeNode(ctx)
        setGaugeNode.value = this.visit(ctx._value)
        return setGaugeNode
    }

    //   /* Curve.SetCenter(x) */
    //   case MapFunction.SetCenter:
    //     const setCenterNode = new ast.CurveSetcenterNode(data)
    //     setCenterNode.x = this.visit(ctx._x)
    //     return setCenterNode

    //   /* Curve.SetFunction(id) */
    //   case MapFunction.SetFunction:
    //     const setFunctionNode = new ast.CurveSetfunctionNode(data)
    //     setFunctionNode.id = this.visit(ctx._id)
    //     return setFunctionNode

    //   /* Curve.BeginTransition() */
    //   case MapFunction.BeginTransition:
    //     return new ast.CurveBegintransitionNode(data)

    //   /* Curve.Begin(radius, cant?) */
    //   case MapFunction.Begin:
    //     const beginNode = new ast.CurveBeginNode(data)
    //     beginNode.radius = this.visit(ctx._radius)
    //     if (ctx._cant !== undefined) {
    //       beginNode.cant = this.visit(ctx._cant)
    //     }
    //     return beginNode

    //   /* Curve.End() */
    //   case MapFunction.End:
    //     return new ast.CurveEndNode(data)

    //   /* Curve.Interpolate(radius?, cant?) */
    //   case MapFunction.Interpolate:
    //     const interpolateNode = new ast.CurveInterpolateNode(data)
    //     if (ctx._radiusE !== undefined) {
    //       interpolateNode.radius = this.visit(ctx._radiusE)
    //     }else if (ctx._radius !== undefined) {
    //       interpolateNode.radius = this.visit(ctx._radius)
    //       interpolateNode.cant = this.visit(ctx._cant)
    //     }
    //     return interpolateNode

    //   /* Curve.Change(radius) */
    //   case MapFunction.Change:
    //     const changeNode = new ast.CurveChangeNode(data)
    //     changeNode.radius = this.visit(ctx._radius)
    //     return changeNode
    // }

    return null
  }

  //   /**
  //    * 自軌道の勾配の巡回
  //    * @param ctx
  //    */
  //   visitGradient(ctx: parser.GradientContext): AstNode {
  //     const data = this.getSyntaxData(ctx)
  //     if (ctx._func.text === undefined) {
  //       return null
  //     }
  //     const funcName = ctx._func.text.toLowerCase()
  //     switch(funcName) {

  //       /* Gradient.BeginTransition() */
  //       case MapFunction.BeginTransition:
  //         return new ast.GradientBegintransitionNode(data)

  //       /* Gradient.Begin(gradient?) */
  //       case MapFunction.Begin:
  //         const beginNode = new ast.GradientBeginNode(data)
  //         if (ctx._gradientArgs !== undefined) {
  //           beginNode.gradient = this.visit(ctx._gradientArgs)
  //         }
  //         return beginNode

  //       /* Gradient.End() */
  //       case MapFunction.End:
  //         return new ast.GradientEndNode(data)

  //       /* Gradient.Interpolate(gradient?) */
  //       case MapFunction.Interpolate:
  //         const interpolateNode = new ast.GradientInterpolateNode(data)
  //         if (ctx._gradientArgs !== undefined) {
  //           interpolateNode.gradient = this.visit(ctx._gradientArgs)
  //         }
  //         return interpolateNode
  //     }

  //     return null
  //   }
  //   /**
  //    * 他軌道の巡回
  //    * @param ctx
  //    */
  //   visitTrack(ctx: parser.TrackContext): AstNode {
  //     const data = this.getSyntaxData(ctx)

  //     if (ctx._func.text === undefined) {
  //       return null
  //     }
  //     const funcName = ctx._element !== undefined ?
  //       `${ctx._element.text}.${ctx._func.text}`.toLowerCase() :
  //       ctx._func.text.toLowerCase()
  //     switch(funcName) {

  //       /* Track[].X.Interpolate(x?, radius?) */
  //       case MapFunction.X_Interpolate:
  //         const xInterpolateNode = new ast.TrackXInterpolateNode(data[0], data[1], data[2])
  //         xInterpolateNode.key = this.visit(ctx._key)
  //         if (ctx._xE !== undefined) {
  //           xInterpolateNode.x = this.visit(ctx._xE)
  //         }else if (ctx._x !== undefined) {
  //           xInterpolateNode.x = this.visit(ctx._x)
  //           xInterpolateNode.radius = this.visit(ctx._radius)
  //         }
  //         return xInterpolateNode

  //       /* Track[].Y.Interpolate(y?, radius?) */
  //       case MapFunction.Y_Interpolate:
  //         const yInterpolateNode = new ast.TrackYInterpolateNode(data[0], data[1], data[2])
  //         yInterpolateNode.key = this.visit(ctx._key)
  //         if (ctx._yE !== undefined) {
  //           yInterpolateNode.y = this.visit(ctx._yE)
  //         }else if (ctx._y !== undefined) {
  //           yInterpolateNode.y = this.visit(ctx._y)
  //           yInterpolateNode.radius = this.visit(ctx._radius)
  //         }
  //         return yInterpolateNode

  //       /* Track[].Position(x, y, radiusH?, radiusV?) */
  //       case MapFunction.Position:
  //         // TODO: ASTノードが未定義

  //       /* Track[].Cant.SetCenter(x) */
  //       case MapFunction.Cant_SetCenter:
  //         const cantSetcenterNode = new ast.TrackCantSetcenterNode(data[0], data[1], data[2])
  //         cantSetcenterNode.key = this.visit(ctx._key)
  //         cantSetcenterNode.x = this.visit(ctx._x)
  //         return cantSetcenterNode

  //       /* Track[].Cant.SetGauge(gauge) */
  //       case MapFunction.Cant_SetGauge:
  //         const cantSetgaugeNode = new ast.TrackCantSetcenterNode(data[0], data[1], data[2])
  //         cantSetgaugeNode.key = this.visit(ctx._key)
  //         cantSetgaugeNode.x = this.visit(ctx._gauge)
  //         return cantSetgaugeNode

  //       /* Track[].Cant.SetFunction(id) */
  //       case MapFunction.Cant_SetFunction:
  //         const cantSetfunctionNode = new ast.TrackCantSetfunctionNode(data[0], data[1], data[2])
  //         cantSetfunctionNode.key = this.visit(ctx._key)
  //         cantSetfunctionNode.id = this.visit(ctx._id)
  //         return cantSetfunctionNode

  //       /* Track[].Cant.BeginTransition() */
  //       case MapFunction.Cant_BeginTransition:
  //         const cantBegintransitionNode = new ast.TrackCantBegintransitionNode(data[0], data[1], data[2])
  //         cantBegintransitionNode.key = this.visit(ctx._key)
  //         return cantBegintransitionNode

  //       /* Track[].Cant.Begin(cant) */
  //       case MapFunction.Cant_Begin:
  //         const cantBeginNode = new ast.TrackCantBeginNode(data[0], data[1], data[2])
  //         cantBeginNode.key = this.visit(ctx._key)
  //         cantBeginNode.cant = this.visit(ctx._cant)
  //         return cantBeginNode

  //       /* Track[].Cant.End() */
  //       case MapFunction.Cant_End:
  //         const cantEndNode = new ast.TrackCantEndNode(data[0], data[1], data[2])
  //         cantEndNode.key = this.visit(ctx._key)
  //         return cantEndNode

  //       /* Track[].Cant.Interpolate(cant?) */
  //       case MapFunction.Cant_Interpolate:
  //         const cantInterpolateNode = new ast.TrackCantInterpolateNode(data[0], data[1], data[2])
  //         cantInterpolateNode.key = this.visit(ctx._key)
  //         if (ctx._cantE !== undefined) {
  //           cantInterpolateNode.cant = this.visit(ctx._cantE)
  //         }else if (ctx._cant) {
  //           cantInterpolateNode.cant = this.visit(ctx._cant)
  //         }
  //         return cantInterpolateNode

  //       /* Track[].Gauge(gauge) */
  //       // TODO: 過去の構文
  //     }

  //     return null
  //   }
  //   //#endregion

  //   /**
  //    * 変数宣言の巡回
  //    * @param ctx
  //    */
  //   visitVarAssign(ctx: parser.VarAssignContext): ast.VarAssignNode {
  //     const data = this.getSyntaxData(ctx)

  //     const node = new ast.VarAssignNode(data[0], data[1], data[2])
  //     if (ctx._v.varName !== undefined) {
  //       node.varName = ctx._v.varName
  //     }
  //     const val = this.visit(ctx.expr())
  //     if (val !== null) {
  //       node.value = <ast.exprNode>val
  //     }
  //     return node
  //   }

  //   /**
  //    * 連続引数の巡回
  //    * @param ctx
  //    */
  //   visitExprArgs(ctx: parser.ExprArgsContext): AstNode {
  //     return this.visit(ctx.nullableExpr())
  //   }

  //   /**
  //    * null許容数式の巡回
  //    * @param ctx
  //    */
  //   visitNullableExpr(ctx: parser.NullableExprContext): AstNode {
  //     const expr = ctx.expr()
  //     if (expr !== undefined) {
  //       return this.visit(expr)
  //     }

  //     // NULL
  //     return null
  //   }

  //   /**
  //    * 括弧あり数式の巡回
  //    * @param ctx
  //    */
  //   visitParensExpr(ctx: parser.ParensExprContext): AstNode {
  //     return this.visit(ctx.expr())
  //   }

  //   /**
  //    * ユーナリ演算の巡回
  //    * @param ctx
  //    */
  //   visitUnaryExpr(ctx: parser.UnaryExprContext): AstNode {
  //     switch(ctx._op.type) {
  //       case MapGrammarV2Lexer.PLUS:
  //         return this.visit(ctx.expr())
  //       case MapGrammarV2Lexer.MINUS:
  //       const start = Token.fromIToken(ctx.start)!
  //       const end = Token.fromIToken(ctx.stop)
  //       const node = new ast.UnaryNode(start, end, ctx.text)
  //       node.inner = this.visit(ctx.expr())
  //       return node
  //       default:
  //         // error
  //         return null
  //     }
  //   }

  //   /**
  //    * 二項演算の巡回
  //    * @param ctx
  //    */
  //   visitInfixExpr(ctx: parser.InfixExprContext): AstNode {
  //     let node: ast.AdditionNode | ast.SubtractionNode | ast.MultiplicationNode | ast.DivisionNode | ast.ModuloNode | null = null
  //     const start = Token.fromIToken(ctx.start)!
  //     const end = Token.fromIToken(ctx.stop)

  //     switch(ctx._op.type) {
  //     case MapGrammarV2Lexer.PLUS:
  //       node = new ast.AdditionNode(start, end, ctx.text)
  //       break
  //     case MapGrammarV2Lexer.MINUS:
  //       node = new ast.SubtractionNode(start, end, ctx.text)
  //       break
  //     case MapGrammarV2Lexer.MULT:
  //       node = new ast.MultiplicationNode(start, end, ctx.text)
  //       break
  //     case MapGrammarV2Lexer.DIV:
  //       node = new ast.DivisionNode(start, end, ctx.text)
  //       break
  //     case MapGrammarV2Lexer.MOD:
  //       node = new ast.ModuloNode(start, end, ctx.text)
  //       break
  //     }

  //     if (node !== null) {
  //       node.left = this.visit(ctx._left)
  //       node.right = this.visit(ctx._right)
  //     }

  //     return node
  //   }

  //   /**
  //    * ABS関数の巡回
  //    * @param ctx
  //    */
  //   visitAbsExpr(ctx: parser.AbsExprContext): ast.exprNode {
  //     const node = new ast.AbsNode(Token.fromIToken(ctx.start)!, Token.fromIToken(ctx.stop), ctx.text)
  //     node.value = <ast.exprNode>this.visit(ctx._value)

  //     return node
  //   }

  //   /**
  //    * Atan2関数の巡回
  //    * @param ctx
  //    */
  //   visitAtan2Expr(ctx: parser.Atan2ExprContext): ast.exprNode {
  //     const node = new ast.Atan2Node(Token.fromIToken(ctx.start)!, Token.fromIToken(ctx.stop), ctx.text)
  //     node.y = <ast.exprNode>this.visit(ctx._y)
  //     node.x = <ast.exprNode>this.visit(ctx._x)
  //     return node
  //   }

  //   /**
  //    * CEIL関数の巡回
  //    * @param ctx
  //    */
  //   visitCeilExpr(ctx: parser.CeilExprContext): ast.exprNode {
  //     const node = new ast.CeilNode(Token.fromIToken(ctx.start)!, Token.fromIToken(ctx.stop), ctx.text)
  //     node.value = <ast.exprNode>this.visit(ctx._value)

  //     return node
  //   }

  //   /**
  //    * COS関数の巡回
  //    * @param ctx
  //    */
  //   visitCosExpr(ctx: parser.CosExprContext): ast.exprNode {
  //     const node = new ast.CosNode(Token.fromIToken(ctx.start)!, Token.fromIToken(ctx.stop), ctx.text)
  //     node.value = <ast.exprNode>this.visit(ctx._value)

  //     return node
  //   }

  //   /**
  //    * EXP関数の巡回
  //    * @param ctx
  //    */
  //   visitExpExpr(ctx: parser.ExpExprContext): ast.exprNode {
  //     const node = new ast.ExpNode(Token.fromIToken(ctx.start)!, Token.fromIToken(ctx.stop), ctx.text)
  //     node.value = <ast.exprNode>this.visit(ctx._value)

  //     return node
  //   }

  //   /**
  //    * FLOOR関数の巡回
  //    * @param ctx
  //    */
  //   visitFloorExpr(ctx: parser.FloorExprContext): ast.exprNode {
  //     const node = new ast.FloorNode(Token.fromIToken(ctx.start)!, Token.fromIToken(ctx.stop), ctx.text)
  //     node.value = <ast.exprNode>this.visit(ctx._value)

  //     return node
  //   }

  //   /**
  //    * POW関数の巡回
  //    * @param ctx
  //    */
  //   visitPowExpr(ctx: parser.PowExprContext): ast.exprNode {
  //     const node = new ast.PowNode(Token.fromIToken(ctx.start)!, Token.fromIToken(ctx.stop), ctx.text)
  //     node.x = <ast.exprNode>this.visit(ctx._x)
  //     node.y = <ast.exprNode>this.visit(ctx._y)
  //     return node
  //   }

  //   /**
  //    * RAND関数の巡回
  //    * @param ctx
  //    */
  //   visitRandExpr(ctx: parser.RandExprContext): ast.exprNode {
  //     const node = new ast.RandNode(Token.fromIToken(ctx.start)!, Token.fromIToken(ctx.stop), ctx.text)
  //     const value = this.visit(ctx._value)
  //     // Rand.valueはnull許容
  //     if (value !== null) {
  //       node.value = <ast.exprNode>value
  //     }

  //     return node
  //   }

  //   /**
  //    * SIN関数の巡回
  //    * @param ctx
  //    */
  //   visitSinExpr(ctx: parser.SinExprContext): ast.exprNode {
  //     const node = new ast.SinNode(Token.fromIToken(ctx.start)!, Token.fromIToken(ctx.stop), ctx.text)
  //     node.value = <ast.exprNode>this.visit(ctx._value)

  //     return node
  //   }

  //   /**
  //    * SQRT関数の巡回
  //    * @param ctx
  //    */
  //   visitSqrtExpr(ctx: parser.SqrtExprContext): ast.exprNode {
  //     const node = new ast.SqrtNode(Token.fromIToken(ctx.start)!, Token.fromIToken(ctx.stop), ctx.text)
  //     node.value = <ast.exprNode>this.visit(ctx._value)

  //     return node
  //   }

  //   /**
  //    * 数字項の巡回
  //    * @param ctx
  //    */
  //   visitNumberExpr(ctx: parser.NumberExprContext): ast.exprNode {
  //     const node = new ast.NumberNode(Token.fromIToken(ctx.start)!, Token.fromIToken(ctx.stop), ctx.text)
  //     node.value = Number(ctx._num.text!)

  //     return node
  //   }

  //   /**
  //    * 距離変数項の巡回
  //    * @param ctx
  //    */
  //   visitDistanceExpr(ctx: parser.DistanceExprContext): ast.DistanceVariableNode {
  //     return new ast.DistanceVariableNode(Token.fromIToken(ctx.start)!, Token.fromIToken(ctx.stop), ctx.text)
  //   }

  //   /**
  //    * 文字列項の巡回
  //    * @param ctx
  //    */
  //   visitStringExpr(ctx: parser.StringExprContext): ast.StringNode {
  //     const node = new ast.StringNode(Token.fromIToken(ctx.start)!, Token.fromIToken(ctx.stop), ctx.text)
  //     const str = ctx.string()
  //     node.value = str.value !== undefined ? str.value : ""

  //     return node
  //   }

  //   /**
  //    * 変数項の巡回
  //    * @param ctx
  //    */
  //   visitVarExpr(ctx: parser.VarExprContext): ast.VarNode {
  //     const node = new ast.VarNode(Token.fromIToken(ctx.start)!, Token.fromIToken(ctx.stop), ctx.text)
  //     node.varName = ctx._v.varName!
  //     return node
  //   }
}
