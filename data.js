export const QUESTIONS=[
{t:"判断",q:"危険な敵が一気に近づいてきた。まず何をする？",a:[["正面から押し切る","power"],["安全な位置へ移動する","speed"],["敵を足止めする","control"],["味方の状況を見る","support"]]},
{t:"選択",q:"新しい力を手に入れた。どう使いたい？",a:[["一撃の破壊力を上げる","power"],["連続して使えるようにする","speed"],["範囲や特殊効果を広げる","control"],["仲間にも恩恵を与える","support"]]},
{t:"協力",q:"PTが苦戦しているとき、自然に取りそうな行動は？",a:[["自分が敵を引き受ける","power"],["敵を素早く減らす","speed"],["敵の動きを崩す","control"],["味方を立て直す","support"]]},
{t:"成長",q:"自分の能力を伸ばすなら？",a:[["限界まで尖らせる","power"],["使いやすさを高める","speed"],["応用範囲を増やす","control"],["PTとの相性を高める","support"]]}];
export const ABILITIES={
power:{name:"爆発強化",desc:"撃破するほど次の攻撃が強くなる。攻撃系強化の効果+15%。",color:"#ffbf69"},
speed:{name:"疾走連撃",desc:"移動中の攻撃速度が上がる。速度系強化の効果+15%。",color:"#8fe3cf"},
control:{name:"領域支配",desc:"攻撃に減速効果。範囲・状態異常系強化の効果+15%。",color:"#9da9ff"},
support:{name:"共鳴",desc:"近くの味方がいると攻撃と回復が強化される。",color:"#f4a7c1"}};
export const WEAPONS=[
{name:"ブレイズブレード",desc:"近距離の高火力。撃破時に小さな爆発。",kind:"power",attack:18,range:95,rate:520},
{name:"ホーミングボウ",desc:"遠距離。弾が敵を追尾する。",kind:"speed",attack:10,range:300,rate:330},
{name:"グラビティロッド",desc:"敵を減速させる。",kind:"control",attack:7,range:220,rate:600},
{name:"リカバリーワンド",desc:"攻撃しながら近くの味方を回復。",kind:"support",attack:6,range:180,rate:650}];
export const UPGRADES=[
{name:"攻撃力強化",desc:"攻撃力 +7",apply:p=>p.attack+=7},
{name:"攻撃速度強化",desc:"攻撃間隔 -15%",apply:p=>p.rate*=.85},
{name:"最大HP強化",desc:"最大HP +30",apply:p=>{p.maxHp+=30;p.hp+=30}},
{name:"移動速度強化",desc:"移動速度 +25",apply:p=>p.speed+=25},
{name:"攻撃範囲強化",desc:"攻撃範囲 +45",apply:p=>p.range+=45},
{name:"貫通",desc:"弾がもう1体を貫通する",apply:p=>p.pierce++},
{name:"再生",desc:"毎秒HP +1.5",apply:p=>p.regen+=1.5},
{name:"PT共鳴",desc:"味方が近くにいる時の攻撃力 +15%",apply:p=>p.teamBonus+=.15},
{name:"能力拡張",desc:"固有能力の効果 +18%",apply:p=>p.abilityPower+=.18},
{name:"武器適応",desc:"現在の武器の攻撃力 +20%",apply:p=>p.attack*=1.2}];
