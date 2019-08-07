// Generated from d:\workspace\node\bve5_parser\src\ScenarioGrammar\SyntaxDefinitions/ScenarioGrammarLexer.g4 by ANTLR 4.7.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class ScenarioGrammarLexer extends Lexer {
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
		PATH_MODE=1, INPUT_PATH_MODE=2, WEIGHTING_MODE=3, INPUT_TEXT_MODE=4;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE", "PATH_MODE", "INPUT_PATH_MODE", "WEIGHTING_MODE", "INPUT_TEXT_MODE"
	};

	public static final String[] ruleNames = {
		"ROUTE", "VEHICLE", "TITLE", "IMAGE", "ROUTETITLE", "VEHICLETITLE", "AUTHOR", 
		"COMMENT", "EQUAL", "ESCAPE_COMMENT", "WHITESPACE", "A", "B", "C", "D", 
		"E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", 
		"S", "T", "U", "V", "W", "X", "Y", "Z", "NEWLINE", "SECTION_WS", "SECTION_COMMENT", 
		"P_WS", "PATH_END", "PATH_EQUAL", "IP_WS", "IP_COMMENT", "INPUT_PATH_END", 
		"ASTERISK", "SECTION", "FILE_PATH", "W_WS", "NUM", "IT_WS", "IT_COMMENT", 
		"INPUT_TEXT_END", "INPUT_TEXT_CHAR"
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


	public ScenarioGrammarLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "ScenarioGrammarLexer.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2\34\u0154\b\1\b\1"+
		"\b\1\b\1\b\1\4\2\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4"+
		"\t\t\t\4\n\t\n\4\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20"+
		"\4\21\t\21\4\22\t\22\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27"+
		"\4\30\t\30\4\31\t\31\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36"+
		"\4\37\t\37\4 \t \4!\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4"+
		")\t)\4*\t*\4+\t+\4,\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62"+
		"\4\63\t\63\4\64\t\64\4\65\t\65\4\66\t\66\4\67\t\67\48\t8\3\2\3\2\3\2\3"+
		"\2\3\2\3\2\3\2\3\2\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\4\3\4\3\4"+
		"\3\4\3\4\3\4\3\5\3\5\3\5\3\5\3\5\3\5\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3"+
		"\6\3\6\3\6\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\b\3\b"+
		"\3\b\3\b\3\b\3\b\3\b\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\n\3\n\3\n\3\n\3"+
		"\13\3\13\3\13\3\13\3\f\6\f\u00c4\n\f\r\f\16\f\u00c5\3\f\3\f\3\r\3\r\3"+
		"\16\3\16\3\17\3\17\3\20\3\20\3\21\3\21\3\22\3\22\3\23\3\23\3\24\3\24\3"+
		"\25\3\25\3\26\3\26\3\27\3\27\3\30\3\30\3\31\3\31\3\32\3\32\3\33\3\33\3"+
		"\34\3\34\3\35\3\35\3\36\3\36\3\37\3\37\3 \3 \3!\3!\3\"\3\"\3#\3#\3$\3"+
		"$\3%\3%\3&\3&\3\'\3\'\5\'\u0100\n\'\3\'\5\'\u0103\n\'\3(\6(\u0106\n(\r"+
		"(\16(\u0107\3)\3)\7)\u010c\n)\f)\16)\u010f\13)\3*\3*\3*\3*\3+\3+\3+\3"+
		"+\3,\3,\3,\3,\3-\3-\3-\3-\3.\3.\3.\3.\3/\3/\3/\3/\3\60\3\60\3\60\3\60"+
		"\3\61\3\61\3\62\6\62\u0130\n\62\r\62\16\62\u0131\3\63\3\63\3\63\3\63\3"+
		"\64\6\64\u0139\n\64\r\64\16\64\u013a\3\64\3\64\6\64\u013f\n\64\r\64\16"+
		"\64\u0140\5\64\u0143\n\64\3\64\3\64\3\65\3\65\3\65\3\65\3\66\3\66\3\66"+
		"\3\66\3\67\3\67\3\67\3\67\38\38\2\29\7\3\t\4\13\5\r\6\17\7\21\b\23\t\25"+
		"\n\27\13\31\f\33\r\35\2\37\2!\2#\2%\2\'\2)\2+\2-\2/\2\61\2\63\2\65\2\67"+
		"\29\2;\2=\2?\2A\2C\2E\2G\2I\2K\2M\2O\2Q\2S\2U\2W\16Y\17[\20]\21_\22a\23"+
		"c\24e\25g\26i\27k\30m\31o\32q\33s\34\7\2\3\4\5\6!\5\2\13\f\17\17\"\"\4"+
		"\2CCcc\4\2DDdd\4\2EEee\4\2FFff\4\2GGgg\4\2HHhh\4\2IIii\4\2JJjj\4\2KKk"+
		"k\4\2LLll\4\2MMmm\4\2NNnn\4\2OOoo\4\2PPpp\4\2QQqq\4\2RRrr\4\2SSss\4\2"+
		"TTtt\4\2UUuu\4\2VVvv\4\2WWww\4\2XXxx\4\2YYyy\4\2ZZzz\4\2[[{{\4\2\\\\|"+
		"|\4\2\13\13\"\"\4\2%%==\4\2\f\f\17\17\b\2\f\f\17\17%%,,==~~\2\u013b\2"+
		"\7\3\2\2\2\2\t\3\2\2\2\2\13\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21\3\2"+
		"\2\2\2\23\3\2\2\2\2\25\3\2\2\2\2\27\3\2\2\2\2\31\3\2\2\2\2\33\3\2\2\2"+
		"\3W\3\2\2\2\3Y\3\2\2\2\3[\3\2\2\2\4]\3\2\2\2\4_\3\2\2\2\4a\3\2\2\2\4c"+
		"\3\2\2\2\4e\3\2\2\2\4g\3\2\2\2\5i\3\2\2\2\5k\3\2\2\2\6m\3\2\2\2\6o\3\2"+
		"\2\2\6q\3\2\2\2\6s\3\2\2\2\7u\3\2\2\2\t}\3\2\2\2\13\u0087\3\2\2\2\r\u008d"+
		"\3\2\2\2\17\u0093\3\2\2\2\21\u009e\3\2\2\2\23\u00ab\3\2\2\2\25\u00b2\3"+
		"\2\2\2\27\u00ba\3\2\2\2\31\u00be\3\2\2\2\33\u00c3\3\2\2\2\35\u00c9\3\2"+
		"\2\2\37\u00cb\3\2\2\2!\u00cd\3\2\2\2#\u00cf\3\2\2\2%\u00d1\3\2\2\2\'\u00d3"+
		"\3\2\2\2)\u00d5\3\2\2\2+\u00d7\3\2\2\2-\u00d9\3\2\2\2/\u00db\3\2\2\2\61"+
		"\u00dd\3\2\2\2\63\u00df\3\2\2\2\65\u00e1\3\2\2\2\67\u00e3\3\2\2\29\u00e5"+
		"\3\2\2\2;\u00e7\3\2\2\2=\u00e9\3\2\2\2?\u00eb\3\2\2\2A\u00ed\3\2\2\2C"+
		"\u00ef\3\2\2\2E\u00f1\3\2\2\2G\u00f3\3\2\2\2I\u00f5\3\2\2\2K\u00f7\3\2"+
		"\2\2M\u00f9\3\2\2\2O\u00fb\3\2\2\2Q\u0102\3\2\2\2S\u0105\3\2\2\2U\u0109"+
		"\3\2\2\2W\u0110\3\2\2\2Y\u0114\3\2\2\2[\u0118\3\2\2\2]\u011c\3\2\2\2_"+
		"\u0120\3\2\2\2a\u0124\3\2\2\2c\u0128\3\2\2\2e\u012c\3\2\2\2g\u012f\3\2"+
		"\2\2i\u0133\3\2\2\2k\u0138\3\2\2\2m\u0146\3\2\2\2o\u014a\3\2\2\2q\u014e"+
		"\3\2\2\2s\u0152\3\2\2\2uv\5?\36\2vw\59\33\2wx\5E!\2xy\5C \2yz\5%\21\2"+
		"z{\3\2\2\2{|\b\2\2\2|\b\3\2\2\2}~\5G\"\2~\177\5%\21\2\177\u0080\5+\24"+
		"\2\u0080\u0081\5-\25\2\u0081\u0082\5!\17\2\u0082\u0083\5\63\30\2\u0083"+
		"\u0084\5%\21\2\u0084\u0085\3\2\2\2\u0085\u0086\b\3\2\2\u0086\n\3\2\2\2"+
		"\u0087\u0088\5C \2\u0088\u0089\5-\25\2\u0089\u008a\5C \2\u008a\u008b\5"+
		"\63\30\2\u008b\u008c\5%\21\2\u008c\f\3\2\2\2\u008d\u008e\5-\25\2\u008e"+
		"\u008f\5\65\31\2\u008f\u0090\5\35\r\2\u0090\u0091\5)\23\2\u0091\u0092"+
		"\5%\21\2\u0092\16\3\2\2\2\u0093\u0094\5?\36\2\u0094\u0095\59\33\2\u0095"+
		"\u0096\5E!\2\u0096\u0097\5C \2\u0097\u0098\5%\21\2\u0098\u0099\5C \2\u0099"+
		"\u009a\5-\25\2\u009a\u009b\5C \2\u009b\u009c\5\63\30\2\u009c\u009d\5%"+
		"\21\2\u009d\20\3\2\2\2\u009e\u009f\5G\"\2\u009f\u00a0\5%\21\2\u00a0\u00a1"+
		"\5+\24\2\u00a1\u00a2\5-\25\2\u00a2\u00a3\5!\17\2\u00a3\u00a4\5\63\30\2"+
		"\u00a4\u00a5\5%\21\2\u00a5\u00a6\5C \2\u00a6\u00a7\5-\25\2\u00a7\u00a8"+
		"\5C \2\u00a8\u00a9\5\63\30\2\u00a9\u00aa\5%\21\2\u00aa\22\3\2\2\2\u00ab"+
		"\u00ac\5\35\r\2\u00ac\u00ad\5E!\2\u00ad\u00ae\5C \2\u00ae\u00af\5+\24"+
		"\2\u00af\u00b0\59\33\2\u00b0\u00b1\5?\36\2\u00b1\24\3\2\2\2\u00b2\u00b3"+
		"\5!\17\2\u00b3\u00b4\59\33\2\u00b4\u00b5\5\65\31\2\u00b5\u00b6\5\65\31"+
		"\2\u00b6\u00b7\5%\21\2\u00b7\u00b8\5\67\32\2\u00b8\u00b9\5C \2\u00b9\26"+
		"\3\2\2\2\u00ba\u00bb\7?\2\2\u00bb\u00bc\3\2\2\2\u00bc\u00bd\b\n\3\2\u00bd"+
		"\30\3\2\2\2\u00be\u00bf\5U)\2\u00bf\u00c0\3\2\2\2\u00c0\u00c1\b\13\4\2"+
		"\u00c1\32\3\2\2\2\u00c2\u00c4\t\2\2\2\u00c3\u00c2\3\2\2\2\u00c4\u00c5"+
		"\3\2\2\2\u00c5\u00c3\3\2\2\2\u00c5\u00c6\3\2\2\2\u00c6\u00c7\3\2\2\2\u00c7"+
		"\u00c8\b\f\4\2\u00c8\34\3\2\2\2\u00c9\u00ca\t\3\2\2\u00ca\36\3\2\2\2\u00cb"+
		"\u00cc\t\4\2\2\u00cc \3\2\2\2\u00cd\u00ce\t\5\2\2\u00ce\"\3\2\2\2\u00cf"+
		"\u00d0\t\6\2\2\u00d0$\3\2\2\2\u00d1\u00d2\t\7\2\2\u00d2&\3\2\2\2\u00d3"+
		"\u00d4\t\b\2\2\u00d4(\3\2\2\2\u00d5\u00d6\t\t\2\2\u00d6*\3\2\2\2\u00d7"+
		"\u00d8\t\n\2\2\u00d8,\3\2\2\2\u00d9\u00da\t\13\2\2\u00da.\3\2\2\2\u00db"+
		"\u00dc\t\f\2\2\u00dc\60\3\2\2\2\u00dd\u00de\t\r\2\2\u00de\62\3\2\2\2\u00df"+
		"\u00e0\t\16\2\2\u00e0\64\3\2\2\2\u00e1\u00e2\t\17\2\2\u00e2\66\3\2\2\2"+
		"\u00e3\u00e4\t\20\2\2\u00e48\3\2\2\2\u00e5\u00e6\t\21\2\2\u00e6:\3\2\2"+
		"\2\u00e7\u00e8\t\22\2\2\u00e8<\3\2\2\2\u00e9\u00ea\t\23\2\2\u00ea>\3\2"+
		"\2\2\u00eb\u00ec\t\24\2\2\u00ec@\3\2\2\2\u00ed\u00ee\t\25\2\2\u00eeB\3"+
		"\2\2\2\u00ef\u00f0\t\26\2\2\u00f0D\3\2\2\2\u00f1\u00f2\t\27\2\2\u00f2"+
		"F\3\2\2\2\u00f3\u00f4\t\30\2\2\u00f4H\3\2\2\2\u00f5\u00f6\t\31\2\2\u00f6"+
		"J\3\2\2\2\u00f7\u00f8\t\32\2\2\u00f8L\3\2\2\2\u00f9\u00fa\t\33\2\2\u00fa"+
		"N\3\2\2\2\u00fb\u00fc\t\34\2\2\u00fcP\3\2\2\2\u00fd\u00ff\7\17\2\2\u00fe"+
		"\u0100\7\f\2\2\u00ff\u00fe\3\2\2\2\u00ff\u0100\3\2\2\2\u0100\u0103\3\2"+
		"\2\2\u0101\u0103\7\f\2\2\u0102\u00fd\3\2\2\2\u0102\u0101\3\2\2\2\u0103"+
		"R\3\2\2\2\u0104\u0106\t\35\2\2\u0105\u0104\3\2\2\2\u0106\u0107\3\2\2\2"+
		"\u0107\u0105\3\2\2\2\u0107\u0108\3\2\2\2\u0108T\3\2\2\2\u0109\u010d\t"+
		"\36\2\2\u010a\u010c\n\37\2\2\u010b\u010a\3\2\2\2\u010c\u010f\3\2\2\2\u010d"+
		"\u010b\3\2\2\2\u010d\u010e\3\2\2\2\u010eV\3\2\2\2\u010f\u010d\3\2\2\2"+
		"\u0110\u0111\5S(\2\u0111\u0112\3\2\2\2\u0112\u0113\b*\4\2\u0113X\3\2\2"+
		"\2\u0114\u0115\5Q\'\2\u0115\u0116\3\2\2\2\u0116\u0117\b+\5\2\u0117Z\3"+
		"\2\2\2\u0118\u0119\7?\2\2\u0119\u011a\3\2\2\2\u011a\u011b\b,\6\2\u011b"+
		"\\\3\2\2\2\u011c\u011d\5S(\2\u011d\u011e\3\2\2\2\u011e\u011f\b-\4\2\u011f"+
		"^\3\2\2\2\u0120\u0121\5U)\2\u0121\u0122\3\2\2\2\u0122\u0123\b.\4\2\u0123"+
		"`\3\2\2\2\u0124\u0125\5Q\'\2\u0125\u0126\3\2\2\2\u0126\u0127\b/\7\2\u0127"+
		"b\3\2\2\2\u0128\u0129\7,\2\2\u0129\u012a\3\2\2\2\u012a\u012b\b\60\b\2"+
		"\u012bd\3\2\2\2\u012c\u012d\7~\2\2\u012df\3\2\2\2\u012e\u0130\n \2\2\u012f"+
		"\u012e\3\2\2\2\u0130\u0131\3\2\2\2\u0131\u012f\3\2\2\2\u0131\u0132\3\2"+
		"\2\2\u0132h\3\2\2\2\u0133\u0134\5S(\2\u0134\u0135\3\2\2\2\u0135\u0136"+
		"\b\63\4\2\u0136j\3\2\2\2\u0137\u0139\4\62;\2\u0138\u0137\3\2\2\2\u0139"+
		"\u013a\3\2\2\2\u013a\u0138\3\2\2\2\u013a\u013b\3\2\2\2\u013b\u0142\3\2"+
		"\2\2\u013c\u013e\7\60\2\2\u013d\u013f\4\62;\2\u013e\u013d\3\2\2\2\u013f"+
		"\u0140\3\2\2\2\u0140\u013e\3\2\2\2\u0140\u0141\3\2\2\2\u0141\u0143\3\2"+
		"\2\2\u0142\u013c\3\2\2\2\u0142\u0143\3\2\2\2\u0143\u0144\3\2\2\2\u0144"+
		"\u0145\b\64\5\2\u0145l\3\2\2\2\u0146\u0147\5S(\2\u0147\u0148\3\2\2\2\u0148"+
		"\u0149\b\65\4\2\u0149n\3\2\2\2\u014a\u014b\5U)\2\u014b\u014c\3\2\2\2\u014c"+
		"\u014d\b\66\4\2\u014dp\3\2\2\2\u014e\u014f\5Q\'\2\u014f\u0150\3\2\2\2"+
		"\u0150\u0151\b\67\5\2\u0151r\3\2\2\2\u0152\u0153\13\2\2\2\u0153t\3\2\2"+
		"\2\20\2\3\4\5\6\u00c5\u00ff\u0102\u0107\u010d\u0131\u013a\u0140\u0142"+
		"\t\7\3\2\7\6\2\b\2\2\6\2\2\7\4\2\4\2\2\7\5\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}