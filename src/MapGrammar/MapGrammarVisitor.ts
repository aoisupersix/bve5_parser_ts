import { MapGrammarParserVisitor } from './Parser/MapGrammarParserVisitor'
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor'
import { RootContext } from './Parser/MapGrammarParser';
import { MapGrammarAstNodes, RootNode } from './AstNodes/mapGrammarAstNodes';
import { Token } from './token';

export class MapGrammarVisitor extends AbstractParseTreeVisitor<MapGrammarAstNodes> implements MapGrammarParserVisitor<MapGrammarAstNodes> {

  defaultResult() {
    return new RootNode(new Token(0,0,'text'), new Token(0,0,'text'), 'text')
  }

  visitRoot(ctx: RootContext): MapGrammarAstNodes {
    const node = new RootNode(Token.fromIToken(ctx.start)!, Token.fromIToken(ctx.stop), ctx.text);
    if (ctx._version.text !== undefined) {
      node.version = ctx._version.text
    }
    var encodeCtx = ctx.encoding()
    if (encodeCtx !== undefined) {
      node.encoding = encodeCtx.text
    }
    return node
  }
}

