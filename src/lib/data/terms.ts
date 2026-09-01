import type { Term } from '../types';

export const TERMS: Term[] = [
	{
		title: '純資産',
		enName: 'Net assets ／ 自己資本',
		group: 'right',
		aliases: ['純資産', '自己資本'],
		definition:
			'返さなくていい自分のお金。株主が出したお金と、これまで稼いで社内に残した利益の合計。',
		metaphor: '筋肉',
		metaphorLine: '体でいうと「自分でつけた筋肉」。借りものではない力。',
		moreHeading: '多いと',
		moreGood: '赤字が数年続いても倒れにくい。銀行の顔色を見ずに投資を決められる。',
		moreBad:
			'お金を寝かせがちで、稼ぐ効率（ROE）は下がる。筋肉質だけど動きが鈍い会社になりやすい。',
		lessHeading: '少ないと',
		lessGood: '他人のお金で規模を先に取れる。当たれば少ない元手で大きく稼げる（ROEは跳ねる）。',
		lessBad: '利益が少し落ちただけで利払いが重くなる。筋肉が薄いので、風邪をひくと一気に寝込む。',
		quizSpot:
			'BSの右下の緑ブロック。総資産に対する割合が自己資本比率。40%超で堅い、70%超なら「現金の使い道がない会社」も疑う。'
	},
	{
		title: '有価証券',
		enName: 'Securities',
		group: 'left',
		aliases: ['有価証券'],
		definition:
			'会社が持っている株式・債券・投資信託など。ざっくり「すぐ売って現金にできる貯金の置き場」。',
		metaphor: 'すぐ崩せる貯金',
		metaphorLine: '現金のいとこ。財布ではなく、いつでも解約できる口座に入れてある状態。',
		moreHeading: '多いと',
		moreGood: '実質的な現金余力が大きい。買収も自社株買いもすぐ打てる。',
		moreBad: '「本業に投資する先がない」サインでもある。相場が崩れると評価損で利益が振れる。',
		lessHeading: '少ないと',
		lessGood: '余ったお金を本業や還元に回している、とも読める。',
		lessBad: '急な支払いに耐える余力が薄い。借入枠に頼ることになる。',
		quizSpot: 'BS左側の上のほう（流動資産）。現金・預金と足して「実質の手元資金」として読む。'
	},
	{
		title: '現金・預金',
		enName: 'Cash & deposits',
		group: 'left',
		aliases: ['現金・預金', '現金', '預金'],
		definition: '文字どおり今すぐ使えるお金。会社が止まらないための燃料。',
		metaphor: '血液',
		metaphorLine: '体を巡る血液。利益が出ていても、これが尽きた瞬間に会社は止まる。',
		moreHeading: '多いと',
		moreGood: '不測の事態にも払える。強気の交渉ができる。',
		moreBad: '何も生まないお金。株主から「使わないなら返して」と言われる。',
		lessHeading: '少ないと',
		lessGood: '投資に回しきっている前向きなケースもある。',
		lessBad: '黒字でも資金が回らず倒れる（黒字倒産）。',
		quizSpot: '月商の何か月分あるかで見る。2〜3か月分が目安。'
	},
	{
		title: '売掛金',
		enName: 'Accounts receivable',
		group: 'left',
		aliases: ['売掛金', '受取手形'],
		definition: '売ったけれど、まだ回収していない代金。いわゆる「ツケ」。',
		metaphor: '貸したまま',
		metaphorLine: '売上として計上済みなのに、手元に現金がない状態。',
		moreHeading: '多いと',
		moreGood: '売上が伸びている局面では自然に増える。',
		moreBad: '回収が遅い／取引先が危ないと、まとめて焦げつく。売上より先に現金が減る。',
		lessHeading: '少ないと',
		lessGood: '現金商売（小売・飲食）は構造的に少ない＝資金が回りやすい。',
		lessBad: 'BtoBで極端に少ない場合、売上そのものが小さい可能性。',
		quizSpot: '売上に対する比率と、その推移。売上より速く増えていたら要注意。'
	},
	{
		title: '棚卸資産',
		enName: 'Inventory',
		group: 'left',
		aliases: ['棚卸資産', '棚卸', '在庫'],
		definition: 'まだ売れていない商品・製品・材料。売れれば現金、売れなければただの荷物。',
		metaphor: '体脂肪',
		metaphorLine: 'いざという時のエネルギーだが、積みすぎれば重くて動けない。',
		moreHeading: '多いと',
		moreGood: '欠品を出さずに売れる。仕入れ交渉も有利。',
		moreBad: '保管費がかかり、流行が過ぎれば値引き処分（＝利益が消える）。',
		lessHeading: '少ないと',
		lessGood: '資金効率が高い。受注生産やサービス業はほぼゼロ。',
		lessBad: '売れる時に売るものがない。',
		quizSpot: 'BS左の中段。在庫がほぼ無い会社は、モノを持たない業態だと一目でわかる。'
	},
	{
		title: '有形固定資産',
		enName: 'PP&E',
		group: 'left',
		aliases: ['有形固定資産', '有形固定', '設備'],
		definition: '土地・建物・工場・機械・車両など、目に見える長期の設備。',
		metaphor: '骨格',
		metaphorLine: '体の骨と筋肉の土台。重いぶん、簡単には作り替えられない。',
		moreHeading: '多いと',
		moreGood: '参入されにくい。設備が回れば利益率は高くなる（鉄道・通信など）。',
		moreBad: '需要が落ちても費用（減価償却）が減らない。不況に弱く、身軽になれない。',
		lessHeading: '少ないと',
		lessGood: 'ファブレス・プラットフォーム型。身軽で撤退も速い。',
		lessBad: '外部委託頼みで、供給を他社に握られる。',
		quizSpot: '総資産に対する比率。50%超なら装置産業、10%未満なら知財・人のビジネス。'
	},
	{
		title: '無形資産・のれん',
		enName: 'Intangibles / Goodwill',
		group: 'left',
		aliases: ['無形資産', '無形', 'のれん'],
		definition: 'ブランド・特許・ソフトウェア、そして買収で払った「上乗せ分」＝のれん。',
		metaphor: '評判',
		metaphorLine: '目に見えないが確かに稼いでいる力。ただし評判は崩れると一瞬。',
		moreHeading: '多いと',
		moreGood: '値引きせずに売れる。ライセンス収益が乗る。',
		moreBad: '買収が失敗するとのれんを一括で減損＝いきなり巨額赤字。',
		lessHeading: '少ないと',
		lessGood: '実物の裏付けがある堅い資産構成。',
		lessBad: '価格勝負になりやすい。',
		quizSpot: 'のれんが純資産に近い規模なら、減損リスクを頭に入れて読む。'
	},
	{
		title: '流動と固定',
		enName: 'Current / Non-current',
		group: 'left',
		aliases: ['流動', '固定'],
		definition:
			'1年以内に現金になる（払う）ものが流動、それ以上かかるものが固定。BSを4つのブロックに割る基準。',
		metaphor: '1年ルール',
		metaphorLine: '上が短期、下が長期。上下の組み合わせで会社の危うさが見える。',
		moreHeading: '流動が厚いと',
		moreGood: '短期の支払いに余裕がある。景気の波に合わせて縮められる。',
		moreBad: '稼ぐ元になる設備が薄い、という読み方もできる。',
		lessHeading: '固定が厚いと',
		lessGood: '長期で稼ぐ土台がある。',
		lessBad: '短期の借金で長期の設備を買っていると、資金繰りが破綻しやすい。',
		quizSpot: '左上（流動資産）が右上（流動負債）より大きいか。ここが逆なら黄信号。'
	},
	{
		title: '流動負債',
		enName: 'Current liabilities',
		group: 'right',
		aliases: ['流動負債'],
		definition: '1年以内に払わなければならない借金・買掛金・未払費用。',
		metaphor: '今月の請求書',
		metaphorLine: '待ってくれない支払い。ここと手元資金の勝負が資金繰り。',
		moreHeading: '多いと',
		moreGood: '仕入代金を後払いできている＝取引先からの信用が厚いとも読める。',
		moreBad: '流動資産を超えると、払えなくなる危険が現実味を帯びる。',
		lessHeading: '少ないと',
		lessGood: '短期の資金繰りが安全。',
		lessBad: '支払いを急ぎすぎて手元現金を減らしている場合もある。',
		quizSpot: '流動資産 ÷ 流動負債（流動比率）。100%割れは要警戒、150%あれば安心圏。'
	},
	{
		title: '固定負債',
		enName: 'Non-current liabilities ／ 有利子負債',
		group: 'right',
		aliases: ['固定負債', '有利子負債', '社債', '長期借入'],
		definition: '1年より先に返す借入金・社債など、長期のお金。多くは利息がつく。',
		metaphor: '住宅ローン',
		metaphorLine: '長く付き合う借金。返済が先だから、今は大きく動ける。',
		moreHeading: '多いと',
		moreGood: '自己資金以上の設備投資ができる。低金利なら株主にとって有利。',
		moreBad: '金利上昇と業績悪化が重なると一気に苦しい。格付けが下がると調達コストも上がる。',
		lessHeading: '少ないと',
		lessGood: '金利や景気に左右されない。',
		lessBad: '成長のスピードで借入を使う競合に負けることがある。',
		quizSpot: '固定負債が純資産と同規模なら重装備型（鉄道・電力・不動産）。業種の型として覚える。'
	},
	{
		title: '自己資本比率',
		enName: 'Equity ratio',
		group: 'kpi',
		aliases: ['自己資本比率'],
		definition: '総資産のうち、自分のお金（純資産）が占める割合。',
		metaphor: '筋肉率',
		metaphorLine: '体脂肪率の裏返し。高いほど不況に耐える体。',
		moreHeading: '高いと',
		moreGood: '耐久力が高い。銀行に生かされている状態にならない。',
		moreBad: 'レバレッジを使っていないので、稼ぐ効率（ROE）は伸びにくい。',
		lessHeading: '低いと',
		lessGood: '少ない元手で大きく稼げる。金融業は構造的に低い。',
		lessBad: '20%を切ると、1期の赤字が致命傷になりうる。',
		quizSpot: '製造業40%〜、小売30%〜が目安。銀行・リースは5〜10%でも正常。'
	},
	{
		title: '営業利益率',
		enName: 'Operating margin',
		group: 'kpi',
		aliases: ['営業利益率', '営業利益'],
		definition: '売上のうち、本業で残った利益の割合。稼ぐ力そのもの。',
		metaphor: '燃費',
		metaphorLine: '同じ距離を走るのに、どれだけ無駄なく走れるか。',
		moreHeading: '高いと',
		moreGood: '値下げ競争に巻き込まれていない。ブランド・特許・独占の証拠。',
		moreBad: '高すぎる状態は長く続かない（規制・新規参入・顧客離れ）。',
		lessHeading: '低いと',
		lessGood: '薄利多売でも回転が速ければ立派なビジネス（小売・卸）。',
		lessBad: '少しのコスト増で赤字に転落する。',
		quizSpot: '業種内で比べる。卸3%と医薬30%を並べても意味がない。'
	},
	{
		title: '売上原価率',
		enName: 'Cost of sales ratio',
		group: 'kpi',
		aliases: ['売上原価率', '売上原価'],
		definition: '売上に対する仕入・製造コストの割合。100%から引くと粗利率。',
		metaphor: '材料費の重さ',
		metaphorLine: '料理の値段のうち、いくらが食材代か。',
		moreHeading: '高いと',
		moreGood: '仕入れて売る業態では正常（卸・商社）。回転で稼ぐ型。',
		moreBad: '原材料や為替が動くと利益が消える。値上げできるかが生死を分ける。',
		lessHeading: '低いと',
		lessGood: '企画・製造・販売を自社で通している（製造小売）か、原価のないデジタル商売。',
		lessBad: '販促費や人件費が重く、粗利が高くても最終利益が薄いこともある。',
		quizSpot: '粗利率50%超の小売はSPA型と当たりをつけられる。'
	},
	{
		title: 'ROE',
		enName: 'Return on equity ／ 自己資本利益率',
		group: 'kpi',
		aliases: ['ROE'],
		definition: '株主が預けたお金（純資産）で、1年にどれだけ利益を生んだか。',
		metaphor: '回転の速さ',
		metaphorLine: '同じ体力でどれだけ多く働けたか。借金を使うと数字は上がる。',
		moreHeading: '高いと',
		moreGood: '資本を無駄なく使えている。投資家が最初に見る数字。',
		moreBad: '純資産が薄いだけで高く見えることもある。借入依存の裏返しかを確認する。',
		lessHeading: '低いと',
		lessGood: '現金や自己資本を厚く持つ安全志向の会社。',
		lessBad: '8%を下回り続けると、資本コストを稼げていないと見なされる。',
		quizSpot: '自己資本比率と必ずセットで見る。高ROE×低自己資本比率＝攻めの体。'
	},
	{
		title: '減価償却費',
		enName: 'Depreciation',
		group: 'kpi',
		aliases: ['減価償却'],
		definition:
			'設備の値打ちが年々目減りする分を、費用として分けて計上したもの。現金は出ていかない。',
		metaphor: 'すり減り',
		metaphorLine: '買った年に全部費用にせず、使う年数で割って背負う仕組み。',
		moreHeading: '多いと',
		moreGood: 'それだけ大きな設備で稼いでいる証拠。現金は出ないので手元資金は残る。',
		moreBad: '売上が落ちても費用は消えない。固定費として重くのしかかる。',
		lessHeading: '少ないと',
		lessGood: '身軽。設備更新に追われない。',
		lessBad: '投資を絞りすぎていると、数年後の競争力が落ちる。',
		quizSpot: '営業利益＋減価償却費（≒EBITDA）で、設備の重い会社どうしを比べる。'
	}
];

/** ラベル文字列に含まれる最長のエイリアスを持つ用語を返す（例: "固定負債（社債等）" → 固定負債） */
export function findTerm(label: string): Term | undefined {
	let best: Term | undefined;
	let bestLength = 0;
	for (const term of TERMS) {
		for (const alias of term.aliases) {
			if (label.includes(alias) && alias.length > bestLength) {
				best = term;
				bestLength = alias.length;
			}
		}
	}
	return best;
}
