import { MapGrammarParserVisitor } from './Parser/MapGrammarParserVisitor'
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor'
import * as parser from './Parser/MapGrammarParser';
import * as ast from './AstNodes/mapGrammarAstNodes';
import { Token } from './token';
import { ParserRuleContext } from 'antlr4ts';
import { MapFunction } from './mapFunction';
import { MapGrammarLexer } from './Parser/MapGrammarLexer';

export type AstNode = ast.MapGrammarAstNode | null

export class MapGrammarVisitor extends AbstractParseTreeVisitor<AstNode> implements MapGrammarParserVisitor<AstNode> {

  /**
   * SyntaxNodeのインスタンス化に必要なデータをコンテキストから取得して返します。
   * @param ctx 構文の文脈データ
   */
  private getSyntaxData(ctx: ParserRuleContext): [Token, Token | undefined, string] {
    let start = ctx.start
    let text = ctx.text
    if (ctx.parent !== undefined) {
      start = ctx.parent.start
      text = start.text! + ctx.text
    }
    const st = Token.fromIToken(start)!
    const et = Token.fromIToken(ctx.stop)

    return [st, et, text]
  }

  defaultResult() {
    return null
  }

  /**
   * ルートの巡回
   * @param ctx 
   */
  visitRoot(ctx: parser.RootContext): AstNode {
    const node = new ast.RootNode(
      Token.fromIToken(ctx.start)!,
      Token.fromIToken(ctx.stop),
      ctx.text
    )

    if (ctx._version.text !== undefined) {
      node.version = ctx._version.text
    }
    var encodeCtx = ctx.encoding()
    if (encodeCtx !== undefined) {
      node.encoding = encodeCtx.text
    }

    for(const statement of ctx.statement()) {
      const child = this.visit(statement)
      if (child !== null) {
        node.statements.push(<ast.statementNode>child)
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
    const node = new ast.DistanceNode(
      Token.fromIToken(start)!,
      Token.fromIToken(ctx.stop),
      ctx.text
    )
    
    const val = this.visit(ctx.expr())
    if (val !== null) {
      node.value = val
    }

    return node
  }

  /**
   * 平面曲線の巡回
   * @param ctx 
   */
  visitCurve(ctx: parser.CurveContext): AstNode {
    const data = this.getSyntaxData(ctx)

    if (ctx._func.text === undefined) {
      return null
    }
    const funcName = ctx._func.text.toLowerCase()
    switch(funcName) {
      case MapFunction.SetGauge:
        const node = new ast.CurveSetgaugeNode(data[0], data[1], data[2])
        node.value = this.visit(ctx._value)
        return node
    }

    return null
  }

  /**
   * 変数宣言の巡回
   * @param ctx 
   */
  visitVarAssign(ctx: parser.VarAssignContext): ast.VarAssignNode {
    const data = this.getSyntaxData(ctx)

    const node = new ast.VarAssignNode(data[0], data[1], data[2])
    if (ctx._v.varName !== undefined) {
      node.varName = ctx._v.varName
    }
    const val = this.visit(ctx.expr())
    if (val !== null) {
      node.value = <ast.exprNode>val
    }
    return node
  }

  /**
   * 連続引数の巡回
   * @param ctx 
   */
  visitExprArgs(ctx: parser.ExprArgsContext): AstNode {
    return this.visit(ctx.nullableExpr())
  }

  /**
   * null許容数式の巡回
   * @param ctx 
   */
  visitNullableExpr(ctx: parser.NullableExprContext): AstNode {
    const expr = ctx.expr()
    if (expr !== undefined) {
      return this.visit(expr)
    }

    // NULL
    return null
  }

  /**
   * 括弧あり数式の巡回
   * @param ctx 
   */
  visitParensExpr(ctx: parser.ParensExprContext): AstNode {
    return this.visit(ctx.expr())
  }

  /**
   * ユーナリ演算の巡回
   * @param ctx 
   */
  visitUnaryExpr(ctx: parser.UnaryExprContext): AstNode {
    switch(ctx._op.type) {
      case MapGrammarLexer.PLUS:
        return this.visit(ctx.expr())
      case MapGrammarLexer.MINUS:
        return this.visit(ctx.expr())
      default:
        // error
        return null
    }
  }

  /**
   * 二項演算の巡回
   * @param ctx 
   */
  visitInfixExpr(ctx: parser.InfixExprContext): AstNode {
    let node: ast.AdditionNode | ast.SubtractionNode | ast.MultiplicationNode | ast.DivisionNode | ast.ModuloNode | null = null
    const start = Token.fromIToken(ctx.start)!
    const end = Token.fromIToken(ctx.stop)

    switch(ctx._op.type) {
    case MapGrammarLexer.PLUS:
      node = new ast.AdditionNode(start, end, ctx.text)
      break
    case MapGrammarLexer.MINUS:
      node = new ast.SubtractionNode(start, end, ctx.text)
      break
    case MapGrammarLexer.MULT:
      node = new ast.MultiplicationNode(start, end, ctx.text)
      break
    case MapGrammarLexer.DIV:
      node = new ast.DivisionNode(start, end, ctx.text)
      break
    case MapGrammarLexer.MOD:
      node = new ast.ModuloNode(start, end, ctx.text)
      break
    }

    if (node !== null) {
      node.left = this.visit(ctx._left)
      node.right = this.visit(ctx._right)
    }

    return node
  }

  /**
   * ABS関数の巡回
   * @param ctx 
   */
  visitAbsExpr(ctx: parser.AbsExprContext): ast.exprNode {
    const node = new ast.AbsNode(Token.fromIToken(ctx.start)!, Token.fromIToken(ctx.stop), ctx.text)
    node.value = <ast.exprNode>this.visit(ctx._value)

    return node
  }

  /**
   * Atan2関数の巡回
   * @param ctx 
   */
  visitAtan2Expr(ctx: parser.Atan2ExprContext): ast.exprNode {
    const node = new ast.Atan2Node(Token.fromIToken(ctx.start)!, Token.fromIToken(ctx.stop), ctx.text)
    node.y = <ast.exprNode>this.visit(ctx._y)
    node.x = <ast.exprNode>this.visit(ctx._x)
    return node
  }

  /**
   * CEIL関数の巡回
   * @param ctx 
   */
  visitCeilExpr(ctx: parser.CeilExprContext): ast.exprNode {
    const node = new ast.CeilNode(Token.fromIToken(ctx.start)!, Token.fromIToken(ctx.stop), ctx.text)
    node.value = <ast.exprNode>this.visit(ctx._value)

    return node
  }

  /**
   * COS関数の巡回
   * @param ctx 
   */
  visitCosExpr(ctx: parser.CosExprContext): ast.exprNode {
    const node = new ast.CeilNode(Token.fromIToken(ctx.start)!, Token.fromIToken(ctx.stop), ctx.text)
    node.value = <ast.exprNode>this.visit(ctx._value)

    return node
  }
}

