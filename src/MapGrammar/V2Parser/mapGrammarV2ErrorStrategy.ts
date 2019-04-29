import { DefaultErrorStrategy, Parser, InputMismatchException, NoViableAltException, RecognitionException, Token } from "antlr4ts";
import { MapGrammarV2Lexer } from "./Parser/MapGrammarV2Lexer";
import { MapGrammarErrorStrategy } from '../mapGrammarErrorStrategy'

export class MapGrammarV2ErrorStrategy extends MapGrammarErrorStrategy {
  recover(recognizer: Parser, e: RecognitionException): void {
    let ttype = recognizer.inputStream.LA(1)
    while(ttype !== MapGrammarV2Lexer.EOF && ttype != MapGrammarV2Lexer.STATE_END) {
      recognizer.consume()
      ttype = recognizer.inputStream.LA(1)
    }
  }
}