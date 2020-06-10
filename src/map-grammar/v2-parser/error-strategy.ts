import { Parser, RecognitionException } from 'antlr4ts'
import { MapGrammarV2Lexer } from './parser/MapGrammarV2Lexer'
import { MapGrammarErrorStrategy } from '../error-strategy'

export class MapGrammarV2ErrorStrategy extends MapGrammarErrorStrategy {
  recover(recognizer: Parser, e: RecognitionException): void {
    let ttype = recognizer.inputStream.LA(1)
    while (ttype !== MapGrammarV2Lexer.EOF && ttype != MapGrammarV2Lexer.STATE_END) {
      recognizer.consume()
      ttype = recognizer.inputStream.LA(1)
    }
  }
}
