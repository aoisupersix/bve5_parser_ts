import { Token } from "../token";

export abstract class MapGrammarAstNodes {

  constructor(
    public start: Token,
    public end: Token | undefined,
    public text: string
  ) {}
}

export class RootNode extends MapGrammarAstNodes {
  version: string | null = null
  encoding: string | null = null
  statements: MapGrammarAstNodes[] = []
}