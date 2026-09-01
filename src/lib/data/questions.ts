import type { ChoiceSet, Level, Question } from '../types';

const INK = '#16161a';
const GREEN = '#29a06a';
const AMBER = '#e8a33a';

export const QUESTIONS: Question[] = [
	{
		id: 'nintendo',
		answerName: '任天堂',
		sector: 'ゲーム・エンタメ / 3月期決算',
		industryCode: '01',
		totalLabel: '2.6兆円',
		columns: [
			{
				title: '資産',
				segments: [
					{ label: '現金・預金', value: 12000, color: INK },
					{ label: '有価証券等', value: 5500, color: '#3a3a44' },
					{ label: '売掛金・棚卸', value: 3500, color: '#5c5c66' },
					{ label: '有形固定資産', value: 1000, color: AMBER },
					{ label: 'その他固定', value: 4000, color: '#8a8a92' }
				]
			},
			{
				title: '負債・純資産',
				segments: [
					{ label: '流動負債', value: 6500, color: '#8a8a92' },
					{ label: '固定負債', value: 900, color: '#5c5c66' },
					{ label: '純資産', value: 18600, color: GREEN }
				]
			}
		],
		incomeStatement: [
			{ label: '売上高', value: '1.67兆円' },
			{ label: '営業利益', value: '5,200億円' },
			{ label: '営業利益率', value: '31.1%' },
			{ label: '売上原価率', value: '44%' }
		],
		kpis: [
			{ label: '自己資本比率', value: '72%', percent: 72, color: GREEN },
			{ label: '売上原価率', value: '44%', percent: 44, color: AMBER },
			{ label: 'ROE', value: '28%', percent: 70, color: INK }
		],
		extra: [
			{ label: '海外売上比率', value: '78%' },
			{ label: '従業員数', value: '7,700人' },
			{ label: '1人当たり売上', value: '2.2億円' }
		],
		point:
			'総資産の6割超が現金・有価証券。なのに有形固定資産はわずか4%。生産設備を持たずに1.6兆円を売る会社。',
		reasons: [
			'工場を持たないファブレス型。製造は外部委託し、自社はIPと企画に集中している。',
			'営業利益率31%は製造業では異例。ハード原価をソフト・ライセンス収益で回収する構造。',
			'1人当たり売上2.2億円 = 少人数×高単価。プラットフォーム型の典型値。'
		]
	},
	{
		id: 'nitori',
		answerName: 'ニトリホールディングス',
		sector: '小売（家具・インテリア） / 2月期決算',
		industryCode: '02',
		totalLabel: '1.15兆円',
		columns: [
			{
				title: '資産',
				segments: [
					{ label: '現金・預金', value: 1300, color: INK },
					{ label: '棚卸資産', value: 1300, color: '#3a3a44' },
					{ label: 'その他流動', value: 800, color: '#5c5c66' },
					{ label: '有形固定資産', value: 6000, color: AMBER },
					{ label: 'その他固定', value: 2100, color: '#8a8a92' }
				]
			},
			{
				title: '負債・純資産',
				segments: [
					{ label: '流動負債', value: 2000, color: '#8a8a92' },
					{ label: '固定負債', value: 2700, color: '#5c5c66' },
					{ label: '純資産', value: 6800, color: GREEN }
				]
			}
		],
		incomeStatement: [
			{ label: '売上高', value: '8,957億円' },
			{ label: '売上総利益率', value: '54.2%' },
			{ label: '営業利益', value: '1,090億円' },
			{ label: '営業利益率', value: '12.2%' }
		],
		kpis: [
			{ label: '自己資本比率', value: '59%', percent: 59, color: GREEN },
			{ label: '売上原価率', value: '46%', percent: 46, color: AMBER },
			{ label: 'ROE', value: '12%', percent: 40, color: INK }
		],
		extra: [
			{ label: '店舗数', value: '約1,000店' },
			{ label: '従業員数', value: '約2万人' },
			{ label: '海外売上比率', value: '15%' }
		],
		point:
			'有形固定資産が総資産の52%。それでいて粗利率54%。小売なのにメーカーの利益率を持っている。',
		reasons: [
			'店舗・物流センターを自社保有するため有形固定資産が重い。賃借中心のアパレルとは形が違う。',
			'粗利率54%は小売として異常値。企画から製造・物流・販売まで自社で通す製造小売だから成立する。',
			'棚卸資産1,300億円 = 在庫を抱えて売る業態。無在庫のサービス業と一目で見分けられる。'
		]
	},
	{
		id: 'jr-central',
		answerName: '東海旅客鉄道（JR東海）',
		sector: '陸運・鉄道 / 3月期決算',
		industryCode: '03',
		totalLabel: '10.5兆円',
		columns: [
			{
				title: '資産',
				segments: [
					{ label: '現金・預金', value: 6000, color: INK },
					{ label: 'その他流動', value: 3000, color: '#5c5c66' },
					{ label: '有形固定資産', value: 88000, color: AMBER },
					{ label: 'その他固定', value: 8000, color: '#8a8a92' }
				]
			},
			{
				title: '負債・純資産',
				segments: [
					{ label: '流動負債', value: 9000, color: '#8a8a92' },
					{ label: '固定負債（社債等）', value: 48000, color: '#5c5c66' },
					{ label: '純資産', value: 48000, color: GREEN }
				]
			}
		],
		incomeStatement: [
			{ label: '売上高', value: '1.78兆円' },
			{ label: '営業利益', value: '6,800億円' },
			{ label: '営業利益率', value: '38.2%' },
			{ label: '減価償却費', value: '2,600億円' }
		],
		kpis: [
			{ label: '自己資本比率', value: '46%', percent: 46, color: GREEN },
			{ label: '減価償却／売上', value: '15%', percent: 15, color: AMBER },
			{ label: 'ROE', value: '10%', percent: 34, color: INK }
		],
		extra: [
			{ label: '従業員数', value: '約1.8万人' },
			{ label: '設備投資額', value: '約5,000億円' },
			{ label: '有利子負債', value: '約4.8兆円' }
		],
		point:
			'有形固定資産が総資産の84%、有利子負債4.8兆円。それを営業利益率38%で回収していく超重装備ビジネス。',
		reasons: [
			'線路・車両・トンネルが資産の大半。装置産業は固定資産比率が突出する。',
			'巨額の設備を借入と社債で調達するため、固定負債が純資産と同規模まで膨らむ。',
			'高い利益率と巨額の減価償却費が並ぶのは、初期投資を長期に回収するインフラ型の指紋。'
		]
	},
	{
		id: 'ferrari',
		answerName: 'フェラーリ（Ferrari N.V.）',
		sector: '自動車・ラグジュアリー / 12月期決算',
		industryCode: '04',
		totalLabel: '€78億',
		columns: [
			{
				title: '資産',
				segments: [
					{ label: '現金・預金', value: 1300, color: INK },
					{ label: '金融債権', value: 2000, color: '#3a3a44' },
					{ label: '棚卸資産', value: 500, color: '#5c5c66' },
					{ label: '有形固定資産', value: 2200, color: AMBER },
					{ label: '無形・のれん', value: 1800, color: '#8a8a92' }
				]
			},
			{
				title: '負債・純資産',
				segments: [
					{ label: '流動負債', value: 2000, color: '#8a8a92' },
					{ label: '有利子負債等', value: 3000, color: '#5c5c66' },
					{ label: '純資産', value: 2800, color: GREEN }
				]
			}
		],
		incomeStatement: [
			{ label: '売上高', value: '€67億' },
			{ label: '営業利益率', value: '28.3%' },
			{ label: '年間出荷台数', value: '13,752台' },
			{ label: '1台当たり売上', value: '約4,900万円' }
		],
		kpis: [
			{ label: '自己資本比率', value: '36%', percent: 36, color: GREEN },
			{ label: '売上原価率', value: '49%', percent: 49, color: AMBER },
			{ label: 'ROE', value: '44%', percent: 90, color: INK }
		],
		extra: [
			{ label: '従業員数', value: '約5,600人' },
			{ label: '受注残', value: '2年超' },
			{ label: 'ブランド収益比率', value: '約15%' }
		],
		point:
			'年間1.4万台しか作らないのに売上1兆円弱、営業利益率28%。量を追わないことが利益率になっている会社。',
		reasons: [
			'生産を意図的に絞る希少性戦略。値引きが不要で、受注残が2年以上積み上がる。',
			'顧客向けファイナンスを自社で持つため、資産に金融債権が大きく載る。',
			'ブランド・ライセンス収益が高採算を支え、無形資産が総資産の2割を占める。'
		]
	},
	{
		id: 'capcom',
		answerName: 'カプコン',
		sector: 'ゲーム・エンタメ / 3月期決算',
		industryCode: '01',
		totalLabel: '3,130億円',
		columns: [
			{
				title: '資産',
				segments: [
					{ label: '現金・預金', value: 1668, color: INK },
					{ label: '有価証券等', value: 200, color: '#3a3a44' },
					{ label: '売掛金・棚卸', value: 753, color: '#5c5c66' },
					{ label: '有形固定資産', value: 150, color: AMBER },
					{ label: 'その他固定', value: 359, color: '#8a8a92' }
				]
			},
			{
				title: '負債・純資産',
				segments: [
					{ label: '流動負債', value: 695, color: '#8a8a92' },
					{ label: '固定負債', value: 257, color: '#5c5c66' },
					{ label: '純資産', value: 2178, color: GREEN }
				]
			}
		],
		incomeStatement: [
			{ label: '売上高', value: '1,696億円' },
			{ label: '営業利益', value: '658億円' },
			{ label: '営業利益率', value: '38.8%' },
			{ label: '純利益', value: '485億円' }
		],
		kpis: [
			{ label: '自己資本比率', value: '72%', percent: 72, color: GREEN },
			{ label: 'デジタル販売比率', value: '約90%', percent: 90, color: AMBER },
			{ label: 'ROE', value: '22%', percent: 55, color: INK }
		],
		extra: [
			{ label: '従業員数', value: '3,766人' },
			{ label: '1人当たり売上', value: '約4,500万円' },
			{ label: '年間出荷本数', value: '5,187万本' }
		],
		point:
			'総資産の8割超が現金・売掛金などの流動資産。有形固定資産はわずか5%。工場を持たず、ソフトの権利収入で稼ぐ体質が数字に出ている。',
		reasons: [
			'現金・預金だけで総資産の半分を超える。ヒットタイトルのロイヤリティ収入が積み上がり続けている証拠。',
			'営業利益率 39%は任天堂に匹敵する水準。パッケージ製造・物流コストがかからないデジタル配信中心の収益構造。',
			'有形固定資産が総資産のわずか5%。オフィスと開発機材だけで、工場や店舗のような重い資産を持たない。'
		]
	},
	{
		id: 'bandai-namco',
		answerName: 'バンダイナムコホールディングス',
		sector: '玩具・ゲーム・IP / 3月期決算',
		industryCode: '01',
		totalLabel: '1.10兆円',
		columns: [
			{
				title: '資産',
				segments: [
					{ label: '現金・預金', value: 3885, color: INK },
					{ label: '売掛金・棚卸', value: 2000, color: '#3a3a44' },
					{ label: 'その他流動', value: 1164, color: '#5c5c66' },
					{ label: '有形固定資産', value: 800, color: AMBER },
					{ label: 'その他固定（のれん含む）', value: 3177, color: '#8a8a92' }
				]
			},
			{
				title: '負債・純資産',
				segments: [
					{ label: '流動負債', value: 2786, color: '#8a8a92' },
					{ label: '固定負債', value: 308, color: '#5c5c66' },
					{ label: '純資産', value: 7932, color: GREEN }
				]
			}
		],
		incomeStatement: [
			{ label: '売上高', value: '1兆2,415億円' },
			{ label: '営業利益', value: '1,802億円' },
			{ label: '営業利益率', value: '14.5%' },
			{ label: '海外売上比率', value: '30.2%' }
		],
		kpis: [
			{ label: '自己資本比率', value: '72%', percent: 72, color: GREEN },
			{ label: 'ROE', value: '17%', percent: 45, color: INK },
			{ label: '海外売上比率', value: '30%', percent: 30, color: AMBER }
		],
		extra: [
			{ label: '従業員数', value: '11,345人' },
			{ label: '1人当たり売上', value: '約1億940万円' },
			{ label: '前期比営業利益', value: '+98.7%' }
		],
		point:
			'純資産が総資産の72%、有形固定資産はわずか7%。おもちゃからゲーム、映像まで「版権」を軸にした多角経営の会社。',
		reasons: [
			'複数のIP（ガンダム、ドラゴンボール等）を横展開するため、工場より「知的財産」への投資が資産の中心。',
			'自己資本比率 72%と高財務体質。M&Aより自社IPの再活用で成長してきた歴史が負債の少なさに表れている。',
			'海外売上比率 30%とグローバル化はまだ発展途上。国内IP収益への依存度がまだ高い。'
		]
	},
	{
		id: 'shimamura',
		answerName: 'しまむら',
		sector: '小売（衣料品） / 2月期決算',
		industryCode: '02',
		totalLabel: '5,677億円',
		columns: [
			{
				title: '資産',
				segments: [
					{ label: '現金・預金', value: 1200, color: INK },
					{ label: '有価証券等', value: 800, color: '#3a3a44' },
					{ label: '棚卸資産', value: 1200, color: '#5c5c66' },
					{ label: '有形固定資産', value: 900, color: AMBER },
					{ label: 'その他固定', value: 1577, color: '#8a8a92' }
				]
			},
			{
				title: '負債・純資産',
				segments: [
					{ label: '流動負債', value: 500, color: '#8a8a92' },
					{ label: '固定負債', value: 167, color: '#5c5c66' },
					{ label: '純資産', value: 5010, color: GREEN }
				]
			}
		],
		incomeStatement: [
			{ label: '売上高', value: '6,654億円' },
			{ label: '売上総利益率', value: '34.7%' },
			{ label: '営業利益', value: '592億円' },
			{ label: '営業利益率', value: '8.9%' }
		],
		kpis: [
			{ label: '自己資本比率', value: '88%', percent: 88, color: GREEN },
			{ label: '売上原価率', value: '65.3%', percent: 65, color: AMBER },
			{ label: 'ROE', value: '8%', percent: 27, color: INK }
		],
		extra: [
			{ label: '店舗数', value: '2,254店' },
			{ label: '従業員数', value: '26,623人' },
			{ label: '有利子負債', value: 'ほぼゼロ（無借金経営）' }
		],
		point:
			'自己資本比率 88%、有利子負債はほぼゼロ。それでいて営業利益率は9%という薄利多売型。「儲けは薄いが借金もしない」という徹底した安全志向のBS。',
		reasons: [
			'純資産が総資産の9割近くを占める。負債667億円はほぼ運転資金のみで、金融機関からの借入にほとんど頼っていない。',
			'粗利率 34.7%はニトリ（54%）よりかなり低い。値引きをしない代わりに仕入原価そのものを抑える薄利多売のビジネスモデル。',
			'店舗の多くを賃借で運営するため、有形固定資産の比率がニトリより低い。「店を持たず、現金を持つ」小売の典型。'
		]
	},
	{
		id: 'ryohin-keikaku',
		answerName: '良品計画',
		sector: '製造小売（生活雑貨・衣料） / 8月期決算',
		industryCode: '02',
		totalLabel: '5,627億円',
		columns: [
			{
				title: '資産',
				segments: [
					{ label: '現金・預金', value: 1000, color: INK },
					{ label: '棚卸資産', value: 1200, color: '#3a3a44' },
					{ label: 'その他流動', value: 800, color: '#5c5c66' },
					{ label: '有形固定資産', value: 1200, color: AMBER },
					{ label: 'その他固定（のれん含む）', value: 1427, color: '#8a8a92' }
				]
			},
			{
				title: '負債・純資産',
				segments: [
					{ label: '流動負債', value: 1500, color: '#8a8a92' },
					{ label: '固定負債', value: 807, color: '#5c5c66' },
					{ label: '純資産', value: 3320, color: GREEN }
				]
			}
		],
		incomeStatement: [
			{ label: '営業収益', value: '7,846億円' },
			{ label: '営業利益', value: '738億円' },
			{ label: '営業利益率', value: '9.4%' },
			{ label: '海外店舗比率', value: '52%' }
		],
		kpis: [
			{ label: '自己資本比率', value: '59%', percent: 59, color: GREEN },
			{ label: 'ROE', value: '15%', percent: 50, color: INK },
			{ label: '海外店舗比率', value: '52%', percent: 52, color: AMBER }
		],
		extra: [
			{ label: '店舗数', value: '1,412店（国内683・海外729）' },
			{ label: '前期比営業利益', value: '+31.5%' },
			{ label: '特記事項', value: '円安・中国売上拡大が増益に寄与' }
		],
		point:
			'店舗の過半数（52%）が海外という高いグローバル比率。企画から生産・物流・販売まで自社で通す「製造小売」でありながら、成長のエンジンは海外出店になっている。',
		reasons: [
			'海外店舗数が国内を上回る729店。ニトリが国内中心なのに対し、無印良品は海外を主戦場にしている。',
			'自己資本比率 59%はニトリ（59%）とほぼ同水準。製造小売という業態が似た財務体質を生む典型例。',
			'前期比営業利益+31.5%という高成長。円安と中国売上の急拡大が同時に効いている。'
		]
	},
	{
		id: 'nippon-steel',
		answerName: '日本製鉄',
		sector: '鉄鋼・素材 / 3月期決算',
		industryCode: '03',
		totalLabel: '10.9兆円',
		columns: [
			{
				title: '資産',
				segments: [
					{ label: '現金・預金', value: 6725, color: INK },
					{ label: '棚卸資産', value: 22767, color: '#3a3a44' },
					{ label: 'その他流動', value: 15993, color: '#5c5c66' },
					{ label: '有形固定資産', value: 33804, color: AMBER },
					{ label: 'その他固定', value: 30135, color: '#8a8a92' }
				]
			},
			{
				title: '負債・純資産',
				segments: [
					{ label: '流動負債', value: 23354, color: '#8a8a92' },
					{ label: '固定負債', value: 27035, color: '#5c5c66' },
					{ label: '純資産', value: 59035, color: GREEN }
				]
			}
		],
		incomeStatement: [
			{ label: '売上収益', value: '8兆6,955億円' },
			{ label: '事業利益（営業利益）', value: '6,832億円' },
			{ label: '営業利益率', value: '7.9%' },
			{ label: '有利子負債', value: '2兆5,074億円' }
		],
		kpis: [
			{ label: '自己資本比率', value: '49%', percent: 49, color: GREEN },
			{ label: '有利子負債比率', value: '46.6%', percent: 47, color: AMBER },
			{ label: '営業利益率', value: '7.9%', percent: 20, color: INK }
		],
		extra: [
			{ label: '従業員数', value: '113,845人' },
			{ label: '有利子負債', value: '2兆5,074億円' },
			{ label: '特記事項', value: '米USスチール買収関連費用で当期純利益が大幅減' }
		],
		point:
			'棚卸資産と有形固定資産だけで総資産の半分超（52%）。高炉という「動かない設備」と、大量の「売れるまで寝かせる在庫」を同時に抱える二重の重さがある会社。',
		reasons: [
			'有形固定資産 3.4兆円は製鉄設備・高炉そのもの。JR東海の線路と同じく、装置産業特有の重い固定資産。',
			'棚卸資産 2.3兆円は総資産の21%。原料の鉄鉱石・石炭から製品まで、長い生産工程の在庫を抱える素材業の宿命。',
			'営業利益率 8%弱はインフラ勢の中では低め。装置産業でも「利益率は薄いが規模で稼ぐ」薄利多売型の代表例。'
		]
	},
	{
		id: 'jr-east',
		answerName: '東日本旅客鉄道（JR東日本）',
		sector: '陸運・鉄道 / 3月期決算',
		industryCode: '03',
		totalLabel: '10.2兆円',
		columns: [
			{
				title: '資産',
				segments: [
					{ label: '現金・預金', value: 2337, color: INK },
					{ label: 'その他流動', value: 10163, color: '#5c5c66' },
					{ label: '有形固定資産', value: 80000, color: AMBER },
					{ label: 'その他固定', value: 9242, color: '#8a8a92' }
				]
			},
			{
				title: '負債・純資産',
				segments: [
					{ label: '流動負債', value: 17419, color: '#8a8a92' },
					{ label: '固定負債（社債等）', value: 55600, color: '#5c5c66' },
					{ label: '純資産', value: 28723, color: GREEN }
				]
			}
		],
		incomeStatement: [
			{ label: '営業収益', value: '2兆8,875億円' },
			{ label: '営業利益', value: '3,767億円' },
			{ label: '営業利益率', value: '13.0%' },
			{ label: '設備投資額', value: '8,190億円' }
		],
		kpis: [
			{ label: '自己資本比率', value: '28%', percent: 28, color: GREEN },
			{ label: '有利子負債比率', value: '163%', percent: 85, color: AMBER },
			{ label: 'ROE', value: '8%', percent: 27, color: INK }
		],
		extra: [
			{ label: '有利子負債', value: '4兆6,486億円' },
			{ label: '設備投資額', value: '8,190億円' },
			{ label: '前期比純利益', value: '+14.2%' }
		],
		point:
			'自己資本比率 28%、有利子負債は総資産の46%に達する。同じ鉄道でも新幹線1本で稼ぐJR東海（自己資本比率 46%）より、首都圏の通勤網と不動産まで抱えるぶん負債が重い。',
		reasons: [
			'有形固定資産が総資産の8割近く。首都圏の在来線・新幹線・駅ビルまで含む巨大なインフラを保有している。',
			'有利子負債 4.6兆円は純資産の1.6倍。設備投資を借入・社債で賄う装置産業特有の資本構造。',
			'営業利益率 13%はJR東海（38%）よりかなり低い。新幹線の圧倒的な稼ぐ力の有無が2社の差を生んでいる。'
		]
	},
	{
		id: 'lvmh',
		answerName: 'LVMH（LVMH Moët Hennessy Louis Vuitton SE）',
		sector: '高級ブランド・コングロマリット / 12月期決算',
		industryCode: '04',
		totalLabel: '€1,420億',
		columns: [
			{
				title: '資産',
				segments: [
					{ label: '現金・預金', value: 8794, color: INK },
					{ label: '棚卸資産', value: 22659, color: '#3a3a44' },
					{ label: 'その他資産', value: 24552, color: '#5c5c66' },
					{ label: '有形固定資産', value: 44588, color: AMBER },
					{ label: 'のれん・無形資産', value: 41444, color: '#8a8a92' }
				]
			},
			{
				title: '負債・純資産',
				segments: [
					{ label: '流動負債', value: 30416, color: '#8a8a92' },
					{ label: '有利子負債等', value: 42672, color: '#5c5c66' },
					{ label: '純資産', value: 68949, color: GREEN }
				]
			}
		],
		incomeStatement: [
			{ label: '売上高', value: '€808億' },
			{ label: '営業利益（recurring）', value: '€178億' },
			{ label: '営業利益率', value: '22%' },
			{ label: '純利益', value: '€109億' }
		],
		kpis: [
			{ label: '自己資本比率', value: '49%', percent: 49, color: GREEN },
			{ label: 'のれん・無形資産比率', value: '29%', percent: 29, color: AMBER },
			{ label: 'ROE', value: '16%', percent: 53, color: INK }
		],
		extra: [
			{ label: '従業員数', value: '約21万人' },
			{ label: '傘下ブランド数', value: '75超' },
			{ label: '売上高（前年比・オーガニック）', value: '-1%' }
		],
		point:
			'のれん・無形資産だけで総資産の29%（€414億）。単一のメーカーではなく、75超のブランドをM&Aで束ねた「ブランドの持株会社」という構造が資産の形にそのまま出ている。',
		reasons: [
			'のれん1.8兆円超・無形資産 2.3兆円超は、ルイ・ヴィトンやディオールなど買収してきたブランドの「のれん代」。単一ブランドのフェラーリとは資産の性質が違う。',
			'棚卸資産€227億は総資産の16%。ワイン・スピリッツから皮革製品まで多様な在庫を抱える複合企業ならではの重さ。',
			'自己資本比率 49%、有利子負債等€427億。M&Aを借入で継続してきたコングロマリットらしい資本構成。'
		]
	},
	{
		id: 'hermes',
		answerName: 'エルメス（Hermès International）',
		sector: '皮革製品・ラグジュアリー / 12月期決算',
		industryCode: '04',
		totalLabel: '€243億',
		columns: [
			{
				title: '資産',
				segments: [
					{ label: '現金・預金', value: 12239, color: INK },
					{ label: '棚卸資産', value: 2575, color: '#3a3a44' },
					{ label: 'その他資産', value: 3609, color: '#5c5c66' },
					{ label: '有形固定資産', value: 5488, color: AMBER },
					{ label: '無形資産・のれん', value: 411, color: '#8a8a92' }
				]
			},
			{
				title: '負債・純資産',
				segments: [
					{ label: '流動負債', value: 3186, color: '#8a8a92' },
					{ label: '有利子負債等', value: 2290, color: '#5c5c66' },
					{ label: '純資産', value: 18846, color: GREEN }
				]
			}
		],
		incomeStatement: [
			{ label: '売上高', value: '€160億超' },
			{ label: '営業利益率', value: '41%' },
			{ label: '売上総利益率', value: '71.1%' },
			{ label: '純利益', value: '€45億' }
		],
		kpis: [
			{ label: '自己資本比率', value: '78%', percent: 78, color: GREEN },
			{ label: '売上原価率', value: '29%', percent: 29, color: AMBER },
			{ label: 'ROE', value: '24%', percent: 60, color: INK }
		],
		extra: [
			{ label: '従業員数', value: '26,494人' },
			{ label: '現金・預金比率', value: '総資産の50%' },
			{ label: 'レザーグッズ部門売上比率', value: '約44%' }
		],
		point:
			'現金・預金だけで総資産の半分（50%）。無形資産・のれんはほぼゼロ（2%未満）で、自己資本比率 78%というほぼ無借金経営。それでいて営業利益率 41%は業界最高水準。',
		reasons: [
			'自社工房での職人生産にこだわり、大量生産をしない希少性戦略。値引きゼロで売り切るため利益率が業界最高水準まで積み上がる。',
			'無形資産・のれんがほぼ存在しない（€4億）。フェラーリやLVMHのようなM&Aに頼らず、自社ブランドの内部成長だけで拡大してきた証拠。',
			'現金・預金が総資産の半分を占め、有利子負債もごくわずか。稼いだ利益を再投資よりも手元資金として厚く持つ、超保守的な財務方針。'
		]
	}
];

export const CHOICE_SETS: Record<string, Record<Level, ChoiceSet>> = {
	nintendo: {
		easy: {
			choices: ['任天堂', '三菱UFJフィナンシャル・グループ', 'ヤマト運輸', '東京電力HD'],
			correctIndex: 0
		},
		mid: { choices: ['ソニーグループ', '任天堂', 'リクルートHD', '資生堂'], correctIndex: 1 },
		hard: {
			choices: ['バンダイナムコHD', 'カプコン', '任天堂', 'スクウェア・エニックスHD'],
			correctIndex: 2
		}
	},
	nitori: {
		easy: {
			choices: ['日本製鉄', 'ニトリホールディングス', '東日本旅客鉄道', '電通グループ'],
			correctIndex: 1
		},
		mid: {
			choices: ['セブン&アイHD', 'ヤマダホールディングス', 'ニトリホールディングス', 'アシックス'],
			correctIndex: 2
		},
		hard: {
			choices: ['良品計画', 'ニトリホールディングス', 'しまむら', 'DCMホールディングス'],
			correctIndex: 1
		}
	},
	'jr-central': {
		easy: {
			choices: ['東海旅客鉄道（JR東海）', '任天堂', '味の素', '野村ホールディングス'],
			correctIndex: 0
		},
		mid: {
			choices: ['ANAホールディングス', '東海旅客鉄道（JR東海）', '日本電信電話', '関西電力'],
			correctIndex: 1
		},
		hard: {
			choices: ['東日本旅客鉄道', '西日本旅客鉄道', '東海旅客鉄道（JR東海）', '阪急阪神HD'],
			correctIndex: 2
		}
	},
	ferrari: {
		easy: {
			choices: ['ネスレ', 'マイクロソフト', 'フェラーリ（Ferrari N.V.）', 'DHLグループ'],
			correctIndex: 2
		},
		mid: { choices: ['ポルシェAG', 'LVMH', 'BMW', 'フェラーリ（Ferrari N.V.）'], correctIndex: 3 },
		hard: {
			choices: ['ポルシェAG', 'アストンマーティン', 'フェラーリ（Ferrari N.V.）', 'マクラーレン'],
			correctIndex: 2
		}
	},
	capcom: {
		easy: { choices: ['カプコン', '任天堂', 'ソニーグループ', '楽天グループ'], correctIndex: 0 },
		mid: {
			choices: [
				'スクウェア・エニックス・ホールディングス',
				'カプコン',
				'コーエーテクモホールディングス',
				'セガサミーホールディングス'
			],
			correctIndex: 1
		},
		hard: {
			choices: [
				'コーエーテクモホールディングス',
				'カプコン',
				'セガサミーホールディングス',
				'マーベラス'
			],
			correctIndex: 1
		}
	},
	'bandai-namco': {
		easy: {
			choices: ['バンダイナムコホールディングス', '任天堂', 'タカラトミー', 'サンリオ'],
			correctIndex: 0
		},
		mid: {
			choices: ['タカラトミー', 'バンダイナムコホールディングス', 'サンリオ', 'カプコン'],
			correctIndex: 1
		},
		hard: {
			choices: [
				'セガサミーホールディングス',
				'コナミグループ',
				'バンダイナムコホールディングス',
				'スクウェア・エニックス・ホールディングス'
			],
			correctIndex: 2
		}
	},
	shimamura: {
		easy: {
			choices: ['しまむら', 'ニトリホールディングス', 'ファーストリテイリング', 'イオン'],
			correctIndex: 0
		},
		mid: {
			choices: ['ファーストリテイリング', 'しまむら', '良品計画', 'ワークマン'],
			correctIndex: 1
		},
		hard: { choices: ['ワークマン', 'しまむら', 'アダストリア', '西松屋チェーン'], correctIndex: 1 }
	},
	'ryohin-keikaku': {
		easy: {
			choices: ['良品計画', 'ニトリホールディングス', 'しまむら', 'ファーストリテイリング'],
			correctIndex: 0
		},
		mid: {
			choices: ['ファーストリテイリング', '良品計画', 'しまむら', 'ワークマン'],
			correctIndex: 1
		},
		hard: { choices: ['ワークマン', 'アダストリア', '良品計画', '西松屋チェーン'], correctIndex: 2 }
	},
	'nippon-steel': {
		easy: {
			choices: ['日本製鉄', '任天堂', 'ソフトバンクグループ', 'ヤマト運輸'],
			correctIndex: 0
		},
		mid: {
			choices: ['JFEホールディングス', '日本製鉄', '神戸製鋼所', '住友金属鉱山'],
			correctIndex: 1
		},
		hard: {
			choices: ['JFEホールディングス', '神戸製鋼所', '日本製鉄', '大和製罐'],
			correctIndex: 2
		}
	},
	'jr-east': {
		easy: {
			choices: ['東日本旅客鉄道', '任天堂', '日本製鉄', '野村ホールディングス'],
			correctIndex: 0
		},
		mid: {
			choices: ['東海旅客鉄道（JR東海）', '東日本旅客鉄道', '西日本旅客鉄道', '東京メトロ'],
			correctIndex: 1
		},
		hard: {
			choices: ['西日本旅客鉄道', '東日本旅客鉄道', '東海旅客鉄道（JR東海）', '九州旅客鉄道'],
			correctIndex: 1
		}
	},
	lvmh: {
		easy: {
			choices: ['LVMH', 'フェラーリ（Ferrari N.V.）', 'ナイキ', 'スターバックス'],
			correctIndex: 0
		},
		mid: {
			choices: ['ケリング', 'LVMH', 'リシュモン', 'エルメス（Hermès International）'],
			correctIndex: 1
		},
		hard: {
			choices: ['ケリング', 'リシュモン', 'LVMH', 'エルメス（Hermès International）'],
			correctIndex: 2
		}
	},
	hermes: {
		easy: {
			choices: ['エルメス（Hermès International）', 'LVMH', 'シャネル', 'グッチ'],
			correctIndex: 0
		},
		mid: {
			choices: ['LVMH', 'エルメス（Hermès International）', 'ケリング', 'リシュモン'],
			correctIndex: 1
		},
		hard: {
			choices: ['ケリング', 'LVMH', 'エルメス（Hermès International）', 'リシュモン'],
			correctIndex: 2
		}
	}
};
