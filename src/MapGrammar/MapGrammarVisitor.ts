import { MapGrammarParserVisitor } from './Parser/MapGrammarParserVisitor'
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor'
import { RootContext, DistStateContext, IncludeContext, IncludeStateContext, CurveStateContext, GradientStateContext, TrackStateContext, StructureStateContext, RepeaterStateContext, BackgroundStateContext, StationStateContext, SectionStateContext, SignalStateContext, SpeedlimitStateContext, PretrainStateContext, LightStateContext, FogStateContext, DrawdistanceContext, DrawdistanceStateContext, CabilluminanceStateContext, IrregularityStateContext, AdhesionStateContext, SoundStateContext, Sound3dStateContext, RollingnoiseStateContext, FlangenoiseStateContext, JointnoiseStateContext, TrainStateContext, VarAssignStateContext, LegacyStateContext, DistanceContext } from './Parser/MapGrammarParser';
import * as ast from './AstNodes/mapGrammarAstNodes';
import { Token } from './token';
import { ParserRuleContext } from 'antlr4ts';

export type AstNode = ast.MapGrammarAstNode | null

export class MapGrammarVisitor extends AbstractParseTreeVisitor<AstNode> implements MapGrammarParserVisitor<AstNode> {

  defaultResult() {
    return null
  }

  /**
   * ルートの巡回
   * @param ctx 
   */
  visitRoot(ctx: RootContext): AstNode {
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
        node.statements.push(child)
      }
    }
    
    return node
  }

  //#region ステートメントVisitors
  /**
   * 距離程ステートメントの巡回
   * @param ctx 
   */
  visitDistState(ctx: DistStateContext): AstNode {
    return this.visit(ctx.distance())
  }

  /**
   * インクルードステートメントの巡回
   * @param ctx 
   */
  visitIncludeState(ctx: IncludeStateContext): AstNode {
    return this.visit(ctx.include())
  }

  /**
   * 平面曲線ステートメントの巡回
   * @param ctx 
   */
  visitCurveState(ctx: CurveStateContext): AstNode {
    return this.visit(ctx.curve())
  }

  /**
   * 縦曲線ステートメントの巡回
   * @param ctx 
   */
  visitGradientState(ctx: GradientStateContext): AstNode {
    return this.visit(ctx.gradient())
  }

  /**
   * 他軌道ステートメントの巡回
   * @param ctx 
   */
  visitTrackState(ctx: TrackStateContext): AstNode {
    return this.visit(ctx.track())
  }

  /**
   * ストラクチャステートメントの巡回
   * @param ctx 
   */
  visitStructureState(ctx: StructureStateContext): AstNode {
    return this.visit(ctx.structure())
  }

  /**
   * 連続ストラクチャステートメントの巡回
   * @param ctx 
   */
  visitRepeaterState(ctx: RepeaterStateContext): AstNode {
    return this.visit(ctx.repeater())
  }

  /**
   * 背景ステートメントの巡回
   * @param ctx 
   */
  visitBackgroundState(ctx: BackgroundStateContext): AstNode {
    return this.visit(ctx.background())
  }

  /**
   * 停車場ステートメントの巡回
   * @param ctx 
   */
  visitStationState(ctx: StationStateContext): AstNode {
    return this.visit(ctx.station())
  }

  /**
   * 閉そくステートメントの巡回
   * @param ctx 
   */
  visitSectionState(ctx: SectionStateContext): AstNode {
    return this.visit(ctx.section())
  }

  /**
   * 地上子ステートメントの巡回
   * @param ctx 
   */
  visitSignalState(ctx: SignalStateContext): AstNode {
    return this.visit(ctx.signal())
  }

  /**
   * 速度制限ステートメントの巡回
   * @param ctx 
   */
  visitSpeedlimitState(ctx: SpeedlimitStateContext): AstNode {
    return this.visit(ctx.speedlimit())
  }

  /**
   * 先行列車ステートメントの巡回
   * @param ctx 
   */
  visitPretrainState(ctx: PretrainStateContext): AstNode {
    return this.visit(ctx.pretrain())
  }

  /**
   * 光源ステートメントの巡回
   * @param ctx 
   */
  visitLightState(ctx: LightStateContext): AstNode {
    return this.visit(ctx.light())
  }

  /**
   * 霧効果ステートメントの巡回
   * @param ctx 
   */
  visitFogState(ctx: FogStateContext): AstNode {
    return this.visit(ctx.fog())
  }

  /**
   * 風景描画距離ステートメントの巡回
   * @param ctx 
   */
  visitDrawdistanceState(ctx: DrawdistanceStateContext): AstNode {
    return this.visit(ctx.drawdistance())
  }

  /**
   * 運転台の明るさステートメントの巡回
   * @param ctx 
   */
  visitCabilluminanceState(ctx: CabilluminanceStateContext): AstNode {
    return this.visit(ctx.cabilluminance())
  }

  /**
   * 軌道変位ステートメントの巡回
   * @param ctx 
   */
  visitIrregularityState(ctx: IrregularityStateContext): AstNode {
    return this.visit(ctx.irregularity())
  }

  /**
   * 粘着特性ステートメントの巡回
   * @param ctx 
   */
  visitAdhesionState(ctx: AdhesionStateContext): AstNode {
    return this.visit(ctx.adhesion())
  }

  /**
   * 音ステートメントの巡回
   * @param ctx 
   */
  visitSoundState(ctx: SoundStateContext): AstNode {
    return this.visit(ctx.sound())
  }

  /**
   * 固定音源ステートメントの巡回
   * @param ctx 
   */
  visitSound3dState(ctx: Sound3dStateContext): AstNode {
    return this.visit(ctx.sound3d())
  }

  /**
   * 走行音ステートメントの巡回
   * @param ctx 
   */
  visitRollingnoiseState(ctx: RollingnoiseStateContext): AstNode {
    return this.visit(ctx.rollingnoise())
  }

  /**
   * フランジきしり音ステートメントの巡回
   * @param ctx 
   */
  visitFlangenoiseState(ctx: FlangenoiseStateContext): AstNode {
    return this.visit(ctx.flangenoise())
  }

  /**
   * 分岐器通過音ステートメントの巡回
   * @param ctx 
   */
  visitJointnoiseState(ctx: JointnoiseStateContext): AstNode {
    return this.visit(ctx.jointnoise())
  }

  /**
   * 他列車ステートメントの巡回
   * @param ctx 
   */
  visitTrainState(ctx: TrainStateContext): AstNode {
    return this.visit(ctx.train())
  }

  /**
   * 変数宣言ステートメントの巡回
   * @param ctx 
   */
  visitVarAssignState(ctx: VarAssignStateContext): AstNode {
    return this.visit(ctx.varAssign())
  }

  /**
   * レガシーステートメントの巡回
   * @param ctx 
   */
  visitLegacyState(ctx: LegacyStateContext): AstNode {
    return this.visit(ctx.legacy())
  }
  //#endregion

  /**
   * 距離程の巡回
   * @param ctx 
   */
  visitDistance(ctx: DistanceContext): AstNode {
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
}

