// Generated from d:\workspace\node\bve5_parser\src\ScenarioGrammar\SyntaxDefinitions\ScenarioGrammarParser.g4 by ANTLR 4.7.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class ScenarioGrammarParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.7.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		ROUTE=1, VEHICLE=2, TITLE=3, IMAGE=4, ROUTETITLE=5, VEHICLETITLE=6, AUTHOR=7, 
		COMMENT=8, EQUAL=9, ESCAPE_COMMENT=10, WHITESPACE=11, P_WS=12, PATH_END=13, 
		PATH_EQUAL=14, IP_WS=15, IP_COMMENT=16, INPUT_PATH_END=17, ASTERISK=18, 
		SECTION=19, FILE_PATH=20, W_WS=21, NUM=22, IT_WS=23, IT_COMMENT=24, INPUT_TEXT_END=25, 
		INPUT_TEXT_CHAR=26;
	public static final int
		RULE_root = 0, RULE_statement = 1, RULE_weight_path = 2, RULE_string = 3;
	public static final String[] ruleNames = {
		"root", "statement", "weight_path", "string"
	};

	private static final String[] _LITERAL_NAMES = {
		null, null, null, null, null, null, null, null, null, null, null, null, 
		null, null, null, null, null, null, "'*'", "'|'"
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, "ROUTE", "VEHICLE", "TITLE", "IMAGE", "ROUTETITLE", "VEHICLETITLE", 
		"AUTHOR", "COMMENT", "EQUAL", "ESCAPE_COMMENT", "WHITESPACE", "P_WS", 
		"PATH_END", "PATH_EQUAL", "IP_WS", "IP_COMMENT", "INPUT_PATH_END", "ASTERISK", 
		"SECTION", "FILE_PATH", "W_WS", "NUM", "IT_WS", "IT_COMMENT", "INPUT_TEXT_END", 
		"INPUT_TEXT_CHAR"
	};
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "ScenarioGrammarParser.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public ScenarioGrammarParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}
	public static class RootContext extends ParserRuleContext {
		public TerminalNode EOF() { return getToken(ScenarioGrammarParser.EOF, 0); }
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public RootContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_root; }
	}

	public final RootContext root() throws RecognitionException {
		RootContext _localctx = new RootContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_root);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(11);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << ROUTE) | (1L << VEHICLE) | (1L << TITLE) | (1L << IMAGE) | (1L << ROUTETITLE) | (1L << VEHICLETITLE) | (1L << AUTHOR) | (1L << COMMENT))) != 0)) {
				{
				{
				setState(8);
				statement();
				}
				}
				setState(13);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(14);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StatementContext extends ParserRuleContext {
		public StatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statement; }
	 
		public StatementContext() { }
		public void copyFrom(StatementContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class ImageStateContext extends StatementContext {
		public Token stateName;
		public TerminalNode EQUAL() { return getToken(ScenarioGrammarParser.EQUAL, 0); }
		public StringContext string() {
			return getRuleContext(StringContext.class,0);
		}
		public TerminalNode IMAGE() { return getToken(ScenarioGrammarParser.IMAGE, 0); }
		public TerminalNode INPUT_TEXT_END() { return getToken(ScenarioGrammarParser.INPUT_TEXT_END, 0); }
		public ImageStateContext(StatementContext ctx) { copyFrom(ctx); }
	}
	public static class CommentStateContext extends StatementContext {
		public Token stateName;
		public TerminalNode EQUAL() { return getToken(ScenarioGrammarParser.EQUAL, 0); }
		public StringContext string() {
			return getRuleContext(StringContext.class,0);
		}
		public TerminalNode COMMENT() { return getToken(ScenarioGrammarParser.COMMENT, 0); }
		public TerminalNode INPUT_TEXT_END() { return getToken(ScenarioGrammarParser.INPUT_TEXT_END, 0); }
		public CommentStateContext(StatementContext ctx) { copyFrom(ctx); }
	}
	public static class RouteTitleStateContext extends StatementContext {
		public Token stateName;
		public TerminalNode EQUAL() { return getToken(ScenarioGrammarParser.EQUAL, 0); }
		public StringContext string() {
			return getRuleContext(StringContext.class,0);
		}
		public TerminalNode ROUTETITLE() { return getToken(ScenarioGrammarParser.ROUTETITLE, 0); }
		public TerminalNode INPUT_TEXT_END() { return getToken(ScenarioGrammarParser.INPUT_TEXT_END, 0); }
		public RouteTitleStateContext(StatementContext ctx) { copyFrom(ctx); }
	}
	public static class VehicleTitleStateContext extends StatementContext {
		public Token stateName;
		public TerminalNode EQUAL() { return getToken(ScenarioGrammarParser.EQUAL, 0); }
		public StringContext string() {
			return getRuleContext(StringContext.class,0);
		}
		public TerminalNode VEHICLETITLE() { return getToken(ScenarioGrammarParser.VEHICLETITLE, 0); }
		public TerminalNode INPUT_TEXT_END() { return getToken(ScenarioGrammarParser.INPUT_TEXT_END, 0); }
		public VehicleTitleStateContext(StatementContext ctx) { copyFrom(ctx); }
	}
	public static class RouteStateContext extends StatementContext {
		public Token stateName;
		public TerminalNode PATH_EQUAL() { return getToken(ScenarioGrammarParser.PATH_EQUAL, 0); }
		public TerminalNode ROUTE() { return getToken(ScenarioGrammarParser.ROUTE, 0); }
		public List<Weight_pathContext> weight_path() {
			return getRuleContexts(Weight_pathContext.class);
		}
		public Weight_pathContext weight_path(int i) {
			return getRuleContext(Weight_pathContext.class,i);
		}
		public TerminalNode INPUT_PATH_END() { return getToken(ScenarioGrammarParser.INPUT_PATH_END, 0); }
		public TerminalNode PATH_END() { return getToken(ScenarioGrammarParser.PATH_END, 0); }
		public List<TerminalNode> SECTION() { return getTokens(ScenarioGrammarParser.SECTION); }
		public TerminalNode SECTION(int i) {
			return getToken(ScenarioGrammarParser.SECTION, i);
		}
		public RouteStateContext(StatementContext ctx) { copyFrom(ctx); }
	}
	public static class TitleStateContext extends StatementContext {
		public Token stateName;
		public TerminalNode EQUAL() { return getToken(ScenarioGrammarParser.EQUAL, 0); }
		public StringContext string() {
			return getRuleContext(StringContext.class,0);
		}
		public TerminalNode TITLE() { return getToken(ScenarioGrammarParser.TITLE, 0); }
		public TerminalNode INPUT_TEXT_END() { return getToken(ScenarioGrammarParser.INPUT_TEXT_END, 0); }
		public TitleStateContext(StatementContext ctx) { copyFrom(ctx); }
	}
	public static class AuthorStateContext extends StatementContext {
		public Token stateName;
		public TerminalNode EQUAL() { return getToken(ScenarioGrammarParser.EQUAL, 0); }
		public StringContext string() {
			return getRuleContext(StringContext.class,0);
		}
		public TerminalNode AUTHOR() { return getToken(ScenarioGrammarParser.AUTHOR, 0); }
		public TerminalNode INPUT_TEXT_END() { return getToken(ScenarioGrammarParser.INPUT_TEXT_END, 0); }
		public AuthorStateContext(StatementContext ctx) { copyFrom(ctx); }
	}
	public static class VehicleStateContext extends StatementContext {
		public Token stateName;
		public TerminalNode PATH_EQUAL() { return getToken(ScenarioGrammarParser.PATH_EQUAL, 0); }
		public TerminalNode VEHICLE() { return getToken(ScenarioGrammarParser.VEHICLE, 0); }
		public List<Weight_pathContext> weight_path() {
			return getRuleContexts(Weight_pathContext.class);
		}
		public Weight_pathContext weight_path(int i) {
			return getRuleContext(Weight_pathContext.class,i);
		}
		public TerminalNode INPUT_PATH_END() { return getToken(ScenarioGrammarParser.INPUT_PATH_END, 0); }
		public TerminalNode PATH_END() { return getToken(ScenarioGrammarParser.PATH_END, 0); }
		public List<TerminalNode> SECTION() { return getTokens(ScenarioGrammarParser.SECTION); }
		public TerminalNode SECTION(int i) {
			return getToken(ScenarioGrammarParser.SECTION, i);
		}
		public VehicleStateContext(StatementContext ctx) { copyFrom(ctx); }
	}

	public final StatementContext statement() throws RecognitionException {
		StatementContext _localctx = new StatementContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_statement);
		int _la;
		try {
			setState(82);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case ROUTE:
				_localctx = new RouteStateContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(16);
				((RouteStateContext)_localctx).stateName = match(ROUTE);
				setState(17);
				match(PATH_EQUAL);
				setState(26);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==FILE_PATH) {
					{
					setState(18);
					weight_path();
					setState(23);
					_errHandler.sync(this);
					_la = _input.LA(1);
					while (_la==SECTION) {
						{
						{
						setState(19);
						match(SECTION);
						setState(20);
						weight_path();
						}
						}
						setState(25);
						_errHandler.sync(this);
						_la = _input.LA(1);
					}
					}
				}

				setState(29);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==PATH_END || _la==INPUT_PATH_END) {
					{
					setState(28);
					_la = _input.LA(1);
					if ( !(_la==PATH_END || _la==INPUT_PATH_END) ) {
					_errHandler.recoverInline(this);
					}
					else {
						if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
						_errHandler.reportMatch(this);
						consume();
					}
					}
				}

				}
				break;
			case VEHICLE:
				_localctx = new VehicleStateContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(31);
				((VehicleStateContext)_localctx).stateName = match(VEHICLE);
				setState(32);
				match(PATH_EQUAL);
				setState(41);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==FILE_PATH) {
					{
					setState(33);
					weight_path();
					setState(38);
					_errHandler.sync(this);
					_la = _input.LA(1);
					while (_la==SECTION) {
						{
						{
						setState(34);
						match(SECTION);
						setState(35);
						weight_path();
						}
						}
						setState(40);
						_errHandler.sync(this);
						_la = _input.LA(1);
					}
					}
				}

				setState(44);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==PATH_END || _la==INPUT_PATH_END) {
					{
					setState(43);
					_la = _input.LA(1);
					if ( !(_la==PATH_END || _la==INPUT_PATH_END) ) {
					_errHandler.recoverInline(this);
					}
					else {
						if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
						_errHandler.reportMatch(this);
						consume();
					}
					}
				}

				}
				break;
			case TITLE:
				_localctx = new TitleStateContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(46);
				((TitleStateContext)_localctx).stateName = match(TITLE);
				setState(47);
				match(EQUAL);
				setState(48);
				string();
				setState(50);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==INPUT_TEXT_END) {
					{
					setState(49);
					match(INPUT_TEXT_END);
					}
				}

				}
				break;
			case IMAGE:
				_localctx = new ImageStateContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(52);
				((ImageStateContext)_localctx).stateName = match(IMAGE);
				setState(53);
				match(EQUAL);
				setState(54);
				string();
				setState(56);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==INPUT_TEXT_END) {
					{
					setState(55);
					match(INPUT_TEXT_END);
					}
				}

				}
				break;
			case ROUTETITLE:
				_localctx = new RouteTitleStateContext(_localctx);
				enterOuterAlt(_localctx, 5);
				{
				setState(58);
				((RouteTitleStateContext)_localctx).stateName = match(ROUTETITLE);
				setState(59);
				match(EQUAL);
				setState(60);
				string();
				setState(62);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==INPUT_TEXT_END) {
					{
					setState(61);
					match(INPUT_TEXT_END);
					}
				}

				}
				break;
			case VEHICLETITLE:
				_localctx = new VehicleTitleStateContext(_localctx);
				enterOuterAlt(_localctx, 6);
				{
				setState(64);
				((VehicleTitleStateContext)_localctx).stateName = match(VEHICLETITLE);
				setState(65);
				match(EQUAL);
				setState(66);
				string();
				setState(68);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==INPUT_TEXT_END) {
					{
					setState(67);
					match(INPUT_TEXT_END);
					}
				}

				}
				break;
			case AUTHOR:
				_localctx = new AuthorStateContext(_localctx);
				enterOuterAlt(_localctx, 7);
				{
				setState(70);
				((AuthorStateContext)_localctx).stateName = match(AUTHOR);
				setState(71);
				match(EQUAL);
				setState(72);
				string();
				setState(74);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==INPUT_TEXT_END) {
					{
					setState(73);
					match(INPUT_TEXT_END);
					}
				}

				}
				break;
			case COMMENT:
				_localctx = new CommentStateContext(_localctx);
				enterOuterAlt(_localctx, 8);
				{
				setState(76);
				((CommentStateContext)_localctx).stateName = match(COMMENT);
				setState(77);
				match(EQUAL);
				setState(78);
				string();
				setState(80);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==INPUT_TEXT_END) {
					{
					setState(79);
					match(INPUT_TEXT_END);
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Weight_pathContext extends ParserRuleContext {
		public Token path;
		public TerminalNode FILE_PATH() { return getToken(ScenarioGrammarParser.FILE_PATH, 0); }
		public TerminalNode ASTERISK() { return getToken(ScenarioGrammarParser.ASTERISK, 0); }
		public TerminalNode NUM() { return getToken(ScenarioGrammarParser.NUM, 0); }
		public Weight_pathContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_weight_path; }
	}

	public final Weight_pathContext weight_path() throws RecognitionException {
		Weight_pathContext _localctx = new Weight_pathContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_weight_path);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(84);
			((Weight_pathContext)_localctx).path = match(FILE_PATH);
			setState(87);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ASTERISK) {
				{
				setState(85);
				match(ASTERISK);
				setState(86);
				match(NUM);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StringContext extends ParserRuleContext {
		public List<TerminalNode> INPUT_TEXT_CHAR() { return getTokens(ScenarioGrammarParser.INPUT_TEXT_CHAR); }
		public TerminalNode INPUT_TEXT_CHAR(int i) {
			return getToken(ScenarioGrammarParser.INPUT_TEXT_CHAR, i);
		}
		public StringContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_string; }
	}

	public final StringContext string() throws RecognitionException {
		StringContext _localctx = new StringContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_string);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(92);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==INPUT_TEXT_CHAR) {
				{
				{
				setState(89);
				match(INPUT_TEXT_CHAR);
				}
				}
				setState(94);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\34b\4\2\t\2\4\3\t"+
		"\3\4\4\t\4\4\5\t\5\3\2\7\2\f\n\2\f\2\16\2\17\13\2\3\2\3\2\3\3\3\3\3\3"+
		"\3\3\3\3\7\3\30\n\3\f\3\16\3\33\13\3\5\3\35\n\3\3\3\5\3 \n\3\3\3\3\3\3"+
		"\3\3\3\3\3\7\3\'\n\3\f\3\16\3*\13\3\5\3,\n\3\3\3\5\3/\n\3\3\3\3\3\3\3"+
		"\3\3\5\3\65\n\3\3\3\3\3\3\3\3\3\5\3;\n\3\3\3\3\3\3\3\3\3\5\3A\n\3\3\3"+
		"\3\3\3\3\3\3\5\3G\n\3\3\3\3\3\3\3\3\3\5\3M\n\3\3\3\3\3\3\3\3\3\5\3S\n"+
		"\3\5\3U\n\3\3\4\3\4\3\4\5\4Z\n\4\3\5\7\5]\n\5\f\5\16\5`\13\5\3\5\2\2\6"+
		"\2\4\6\b\2\3\4\2\17\17\23\23\2s\2\r\3\2\2\2\4T\3\2\2\2\6V\3\2\2\2\b^\3"+
		"\2\2\2\n\f\5\4\3\2\13\n\3\2\2\2\f\17\3\2\2\2\r\13\3\2\2\2\r\16\3\2\2\2"+
		"\16\20\3\2\2\2\17\r\3\2\2\2\20\21\7\2\2\3\21\3\3\2\2\2\22\23\7\3\2\2\23"+
		"\34\7\20\2\2\24\31\5\6\4\2\25\26\7\25\2\2\26\30\5\6\4\2\27\25\3\2\2\2"+
		"\30\33\3\2\2\2\31\27\3\2\2\2\31\32\3\2\2\2\32\35\3\2\2\2\33\31\3\2\2\2"+
		"\34\24\3\2\2\2\34\35\3\2\2\2\35\37\3\2\2\2\36 \t\2\2\2\37\36\3\2\2\2\37"+
		" \3\2\2\2 U\3\2\2\2!\"\7\4\2\2\"+\7\20\2\2#(\5\6\4\2$%\7\25\2\2%\'\5\6"+
		"\4\2&$\3\2\2\2\'*\3\2\2\2(&\3\2\2\2()\3\2\2\2),\3\2\2\2*(\3\2\2\2+#\3"+
		"\2\2\2+,\3\2\2\2,.\3\2\2\2-/\t\2\2\2.-\3\2\2\2./\3\2\2\2/U\3\2\2\2\60"+
		"\61\7\5\2\2\61\62\7\13\2\2\62\64\5\b\5\2\63\65\7\33\2\2\64\63\3\2\2\2"+
		"\64\65\3\2\2\2\65U\3\2\2\2\66\67\7\6\2\2\678\7\13\2\28:\5\b\5\29;\7\33"+
		"\2\2:9\3\2\2\2:;\3\2\2\2;U\3\2\2\2<=\7\7\2\2=>\7\13\2\2>@\5\b\5\2?A\7"+
		"\33\2\2@?\3\2\2\2@A\3\2\2\2AU\3\2\2\2BC\7\b\2\2CD\7\13\2\2DF\5\b\5\2E"+
		"G\7\33\2\2FE\3\2\2\2FG\3\2\2\2GU\3\2\2\2HI\7\t\2\2IJ\7\13\2\2JL\5\b\5"+
		"\2KM\7\33\2\2LK\3\2\2\2LM\3\2\2\2MU\3\2\2\2NO\7\n\2\2OP\7\13\2\2PR\5\b"+
		"\5\2QS\7\33\2\2RQ\3\2\2\2RS\3\2\2\2SU\3\2\2\2T\22\3\2\2\2T!\3\2\2\2T\60"+
		"\3\2\2\2T\66\3\2\2\2T<\3\2\2\2TB\3\2\2\2TH\3\2\2\2TN\3\2\2\2U\5\3\2\2"+
		"\2VY\7\26\2\2WX\7\24\2\2XZ\7\30\2\2YW\3\2\2\2YZ\3\2\2\2Z\7\3\2\2\2[]\7"+
		"\34\2\2\\[\3\2\2\2]`\3\2\2\2^\\\3\2\2\2^_\3\2\2\2_\t\3\2\2\2`^\3\2\2\2"+
		"\22\r\31\34\37(+.\64:@FLRTY^";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}