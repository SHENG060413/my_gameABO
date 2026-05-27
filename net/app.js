const ATTRIBUTE_DEFINITIONS = [
  { key: "constitution", label: "体质", detail: "耐受、恢复与长期健康底盘" },
  { key: "spirit", label: "精神力", detail: "抗压、专注与自我稳定" },
  { key: "charm", label: "魅力", detail: "存在感、仪态与吸引力" },
  { key: "scholarship", label: "学识", detail: "学习、推理与技术理解" },
  { key: "combat", label: "战力", detail: "训练、判断与冲突处置" },
  { key: "wealth", label: "财富", detail: "资产、资源与生活余裕" },
  { key: "reputation", label: "声望", detail: "履历、口碑与公共信任" }
];

const FIRST_GENDERS = ["男", "女"];
const SECOND_GENDER_WEIGHTS = [
  { value: "A", weight: 15 },
  { value: "B", weight: 70 },
  { value: "O", weight: 15 }
];

const SECOND_GENDER_NAMES = {
  A: "Alpha",
  B: "Beta",
  O: "Omega",
  "未分化": "未分化"
};

const ABO_CANON = [
  {
    id: "origin",
    kicker: "CANON / ORIGIN",
    title: "起源与六种组合",
    summary: "ABO 起源于西方同人社群，2010 年后传入中文同好圈，如今已作为独立虚构世界观持续使用。",
    points: [
      "第一性别只有男 / 女，叠加第二性别 Alpha、Beta、Omega，形成男A、女A、男B、女B、男O、女O 六种组合。",
      "未成年阶段只记为潜伏或前驱发育，不视作法定完整分化。"
    ]
  },
  {
    id: "alpha",
    kicker: "CANON / ALPHA",
    title: "Alpha 设定",
    summary: "Alpha 占比约 15%，体格强健、感官锐利、战斗能力高，后颈腺体与压迫性信息素最为明显。",
    points: [
      "可压制 A 与 O，并诱发 Omega 热潮；男 A 具 knot 与标记能力，女 A 为双性生殖设定，怀孕率较低。",
      "常见于军团、贵族与其他高压岗位，易感期约每 1-3 个月一次，情绪会伴随攻击性与占有欲增强。"
    ]
  },
  {
    id: "beta",
    kicker: "CANON / BETA",
    title: "Beta 设定",
    summary: "Beta 占比约 70%，身体特征普通，腺体不明显，信息素淡，是社会最常见也最稳定的第二性别。",
    points: [
      "多数情况下不受 A / O 信息素直接影响，常承担调停、协作与公共事务等中枢角色。",
      "无热潮、无易感期，生育成功率中等，被视为日常生活中最安全、也最自由的状态。"
    ]
  },
  {
    id: "omega",
    kicker: "CANON / OMEGA",
    title: "Omega 设定",
    summary: "Omega 占比约 15%，体质更柔弱，后颈腺体敏感，信息素甜而具有明显吸引性。",
    points: [
      "男 Omega 可以怀孕；热潮时信息素容易失控并吸引 Alpha，每月约 3-5 天。",
      "Omega 的生育率较高，通常依赖抑制剂或标记安抚维持稳定；社会设定为平等主体并提供特殊保护。"
    ]
  },
  {
    id: "differentiation",
    kicker: "CANON / DIFFERENTIATION",
    title: "分化与发育",
    summary: "12-17 岁可视作潜伏或前驱腺体发育，18 岁才进入法律意义上的强制完整分化。",
    points: [
      "过程症状通常包括精神躁动、后颈发热、体温升高、眩晕与基因锁松动。",
      "本模拟器沿用 18 岁第 1 季强制分化的规则，未成年仍按未分化处理。"
    ]
  },
  {
    id: "pheromones",
    kicker: "CANON / PHEROMONES",
    title: "信息素与腺体",
    summary: "A 与 O 的后颈都拥有腺体，其中 Omega 腺体更私密、更敏感；Beta 则基本不受影响。",
    points: [
      "A 对 A 容易产生压制或冲突；A 对 O 可诱导热潮或起到安抚作用。",
      "O 对 A 容易形成吸引并触发占有欲；B 对 A / O 的信息素几乎不受干扰。"
    ]
  },
  {
    id: "marking",
    kicker: "CANON / MARKING",
    title: "标记规则",
    summary: "临时标记通常持续 1-4 周；永久标记与 knot 标记则代表长期且稳定的羁绊。",
    points: [
      "一名 Alpha 可以标记多个 Omega；一名 Omega 只能拥有一个永久的 Alpha 标记。",
      "Beta 可以被临时标记，但不能建立永久标记。"
    ]
  },
  {
    id: "heat-suppressants",
    kicker: "CANON / CYCLES",
    title: "热潮、易感期与抑制剂",
    summary: "Omega 热潮通常每月 3-5 天，Alpha 易感期约每 1-3 个月一次。",
    points: [
      "法律体系提供长效与短效抑制剂，黑市还存在更强效的违规版本。",
      "标记安抚、抑制剂和隔离措施都属于社会默认的常规公共卫生手段。"
    ]
  },
  {
    id: "inheritance",
    kicker: "CANON / HEREDITY",
    title: "遗传规则",
    summary: "当前模拟器保持 AA / OO 不育并直接判定为孤儿开局；AB、AO、BO、BB 组合仍视作可育。",
    points: [
      "子代第二性别采用随机抽取，父母属性与信息素强度会作为遗传影响底盘。",
      "这里不改动现有继承数学，只为后续故事文本提供统一解释。"
    ]
  },
  {
    id: "society",
    kicker: "CANON / SOCIETY",
    title: "社会结构与六类出身",
    summary: "贵族、军团偏 A-heavy，重血统与标记权；科研、平民偏 B-heavy，稳定且抑制剂普及。",
    points: [
      "商贸家庭多为 A / B 混合，重合同、信用与跨星域协作；孤儿则几乎没有家族约束，标记意识也更弱。",
      "现有六类出身可概括为贵族、军团、科研、平民、商贸、孤儿，都是社会文化差异，不改变遗传规则。"
    ]
  }
];

const FAMILY_BACKGROUNDS = [
  {
    id: "civilian",
    name: "星际平民家庭",
    careers: ["星舰后勤", "星域便利店店主", "普通工人"],
    aboTendencies: [
      { value: ["B", "B"], weight: 80 },
      { value: ["A", "B"], weight: 10 },
      { value: ["B", "O"], weight: 10 }
    ],
    defaultAttributeRange: [15, 30],
    attributeRanges: {},
    story: "父母均为星际联邦普通公民，生活安稳平淡，无特殊势力背景，从小教导你踏实度日，偶尔会提及星域日常的琐碎与温暖。"
  },
  {
    id: "military",
    name: "星际军团世家",
    careers: ["星际联邦军团现役军人", "退役军人", "军团士兵", "基层指挥官", "军事教官"],
    aboTendencies: [
      { value: ["A", "B"], weight: 60 },
      { value: ["B", "A"], weight: 40 }
    ],
    defaultAttributeRange: [15, 30],
    attributeRanges: {
      constitution: [25, 40],
      spirit: [15, 30],
      charm: [8, 20],
      scholarship: [8, 20],
      combat: [25, 40]
    },
    story: "家族世代服役于星际军团，父母均有军旅经历，家中氛围严谨，从小对你进行体能与精神力训练，偶尔会讲述星际战场的故事。"
  },
  {
    id: "research",
    name: "星际科研世家",
    careers: ["星际研究院研究员", "星舰工程师", "精神力研究学者"],
    aboTendencies: [
      { value: ["B", "B"], weight: 90 },
      { value: ["B", "O"], weight: 10 }
    ],
    defaultAttributeRange: [15, 30],
    attributeRanges: {
      constitution: [8, 20],
      spirit: [28, 42],
      scholarship: [28, 42],
      combat: [8, 20]
    },
    story: "父母均深耕星际科研领域，常年在研究院工作，家中堆满各类科研资料，从小培养你对星际科技、基因学的兴趣，对你的学识要求严格。"
  },
  {
    id: "noble",
    name: "星际贵族豪门",
    careers: ["星际联邦贵族", "星域管理者", "联邦议员助理"],
    aboTendencies: [
      { value: ["A", "O"], weight: 35 },
      { value: ["A", "B"], weight: 35 },
      { value: ["B", "O"], weight: 30 }
    ],
    defaultAttributeRange: [18, 32],
    attributeRanges: {
      charm: [30, 45],
      scholarship: [18, 32],
      combat: [15, 38],
      wealth: [30, 45],
      reputation: [30, 45]
    },
    story: "出身星际老牌贵族，父母身居上层社会，精通星际圈层社交，从小带你接触贵族礼仪与星域权力核心，对你的言行举止要求严苛。"
  },
  {
    id: "orphan",
    name: "星际流浪孤儿",
    orphan: true,
    story: "自幼无父无母，在星际流民据点、星舰废弃舱室独自长大，没有固定的家庭环境，靠自己摸索生存，对亲情较为陌生，性格多偏独立、坚韧。"
  },
  {
    id: "merchant",
    name: "星际商贸财团",
    careers: ["星际商贸公司老板", "星际航线管理者", "物资批发商"],
    aboTendencies: [
      { value: ["B", "B"], weight: 70 },
      { value: ["A", "B"], weight: 30 }
    ],
    defaultAttributeRange: [18, 32],
    attributeRanges: {
      charm: [25, 40],
      scholarship: [25, 40],
      combat: [15, 30],
      wealth: [25, 40]
    },
    story: "父母掌控着跨星域的商贸业务，常年奔波于各个星域，从小带你接触星际交易、人脉拓展，培养你的商业思维，偶尔会带你参与商贸谈判。"
  }
];

const ABO_PARENT_BONUSES = {
  A: { constitution: 6, combat: 7, reputation: 2 },
  B: { scholarship: 4, wealth: 3, reputation: 3 },
  O: { spirit: 5, charm: 6, scholarship: 2 }
};

const HEREDITY_COEFFICIENT = {
  "A+B": 1.06,
  "A+O": 1.08,
  "B+A": 1.06,
  "B+B": 1,
  "B+O": 1.05,
  "O+A": 1.08,
  "O+B": 1.05
};

const INITIAL_ATTRIBUTE_MIN = 8;
const INITIAL_ATTRIBUTE_MAX = 72;
const INITIAL_INHERITED_ATTRIBUTE_SCALE = 0.72;
const INITIAL_INHERITED_BONUS_SCALE = 0.22;
const INITIAL_INHERITED_VARIANCE = 4;
const ORPHAN_INITIAL_ATTRIBUTE_RANGE = [22, 40];
const DEATH_AGE_MIN = 100;
const DEATH_AGE_MAX = 300;

const ACTIONS = [
  {
    id: "academy",
    title: "星港函授课程",
    description: "系统学习课程与基础知识",
    story: "你登录星港远程教育平台，接入跨星域同步课堂。全息投影老师在星舰通讯信号的背景杂音里，讲解联邦通识课程，你的知识储备稳步提升，也在作业互评中，慢慢攒下了星港学员的声望。",
    effects: { scholarship: 2, reputation: 1 }
  },
  {
    id: "drill",
    title: "低重力适应训练",
    description: "强化体能与行动稳定性",
    story: "你进入星港训练舱，开启低重力模拟环境。在模拟失重状态下，你反复练习移动与平衡，汗水在舱内凝成细小的水珠。每一次站稳、每一次发力，都在强化你的体能与战斗反应。",
    effects: { constitution: 2, combat: 1 }
  },
  {
    id: "salon",
    title: "联邦礼仪沙龙",
    description: "学习社交礼仪与沟通方式",
    story: "你换上得体的制服，参加星港举办的联邦礼仪沙龙。你学习星际社交的仪态、握手礼与沟通话术，和其他参与者模拟跨星域会面。稳定练习让你的仪态更自然。",
    effects: { charm: 1 }
  },
  {
    id: "starport-social",
    title: "星港人际往来",
    description: "一名已认识 NPC 关系提升",
    story: "你把一段空闲时间留给星港的人际往来：可能是在公共休憩舱陪人闲聊，也可能是在补给长廊顺手帮忙。一次普通但真诚的互动，让关系档案里某个已认识的人留下了新的温度。",
    effects: {},
    relationshipEffects: { favorability: 2, trust: 2, familiarity: 3 }
  },
  {
    id: "volunteer",
    title: "民生署志愿值勤",
    description: "参与民生署值勤与公共服务",
    story: "你前往民生署，报名参与志愿工作。你在星港物资分发点帮忙整理物资，为新移民指引登记流程，用行动传递善意。这份付出让你收获了居民的感谢，也得到了民生署发放的志愿补贴。",
    effects: { reputation: 1, wealth: 1 }
  },
  {
    id: "archive",
    title: "夜读旧星图档案",
    description: "翻阅旧星图与航行档案",
    story: "深夜，你泡在星港档案库，翻阅泛黄的旧星图与航行日志。你顺着星轨的标记，了解早期拓荒者的航线与未知星域的传说，那些古老的记载，让你的学识与精神力都得到了沉淀。",
    effects: { scholarship: 2, spirit: 1 }
  },
  {
    id: "rest",
    title: "休眠舱稳定疗程",
    description: "进行休眠恢复与稳定疗程",
    story: "你躺进星港休眠舱，开启稳定疗养模式。舱内释放的舒缓波频，安抚着你因学习与训练而紧绷的神经。在半休眠状态下，你的精神力得到修复，身体也在温和的调节中恢复活力。",
    effects: { spirit: 2, constitution: 1 }
  }
];

const ACTION_BY_ID = new Map(ACTIONS.map((action) => [action.id, action]));

const FAMILY_QUARTER_MAP_LOCATION_IDS = {
  civilian: ["civilian-home-ring", "civilian-neighborhood"],
  military: ["military-training-yard", "military-tactical-gallery"],
  research: ["research-family-lab", "research-observation-room"],
  noble: ["noble-etiquette-hall", "noble-audience-lounge"],
  orphan: ["orphan-supply-den", "orphan-derelict-cabin"],
  merchant: ["merchant-route-hub", "merchant-negotiation-suite"]
};

const PUBLIC_QUARTER_MAP_LOCATION_IDS = [
  "public-federal-academy",
  "public-training-field",
  "public-starport-plaza",
  "public-medical-rest-center",
  "public-central-archive"
];

const MAP_LOCATION_NPC_TARGETS = {
  "civilian-home-ring": { fixedNpcIds: ["wen-yu"], fallbackFamilyIds: ["civilian"] },
  "civilian-neighborhood": { fixedNpcIds: ["wen-yu"], fallbackFamilyIds: ["civilian"] },
  "military-training-yard": { fixedNpcIds: ["lu-xingci"], fallbackFamilyIds: ["military"] },
  "military-tactical-gallery": { fixedNpcIds: ["lu-xingci"], fallbackFamilyIds: ["military"] },
  "research-family-lab": { fixedNpcIds: ["shen-zhiyu"], fallbackFamilyIds: ["research"] },
  "research-observation-room": { fixedNpcIds: ["shen-zhiyu"], fallbackFamilyIds: ["research"] },
  "noble-etiquette-hall": { fixedNpcIds: ["fu-jingran"], fallbackFamilyIds: ["noble"] },
  "noble-audience-lounge": { fixedNpcIds: ["fu-jingran"], fallbackFamilyIds: ["noble"] },
  "orphan-supply-den": { fixedNpcIds: ["jiang-xu"], fallbackFamilyIds: ["orphan"] },
  "orphan-derelict-cabin": { fixedNpcIds: ["jiang-xu"], fallbackFamilyIds: ["orphan"] },
  "merchant-route-hub": { fixedNpcIds: ["song-yanzhou"], fallbackFamilyIds: ["merchant"] },
  "merchant-negotiation-suite": { fixedNpcIds: ["song-yanzhou"], fallbackFamilyIds: ["merchant"] },
  "public-federal-academy": { fixedNpcIds: ["shen-zhiyu"], fallbackFamilyIds: ["research"] },
  "public-central-archive": { fixedNpcIds: ["shen-zhiyu"], fallbackFamilyIds: ["research"] },
  "public-training-field": { fixedNpcIds: ["lu-xingci"], fallbackFamilyIds: ["military"] },
  "public-starport-plaza": { fixedNpcIds: ["wen-yu", "song-yanzhou"], fallbackFamilyIds: ["civilian", "merchant"] },
  "public-medical-rest-center": { fixedNpcIds: ["wen-yu", "jiang-xu"], fallbackFamilyIds: ["civilian", "orphan"] }
};

const QUARTER_MAP_LOCATIONS = [
  {
    id: "civilian-home-ring",
    name: "星港生活环带",
    label: "平民家庭可及",
    summary: "便利店、后勤工坊与公共学习舱围成稳定日常，适合从普通生活里积累基础能力。",
    actionIds: ["academy", "volunteer", "rest"]
  },
  {
    id: "civilian-neighborhood",
    name: "后勤邻里舱",
    label: "平民家庭可及",
    summary: "熟悉的邻里、维修员与迁徙家庭在这里交换消息，也容易遇见愿意帮忙的人。",
    actionIds: ["starport-social", "volunteer", "rest"]
  },
  {
    id: "military-training-yard",
    name: "军团家属训练场",
    label: "军团世家可及",
    summary: "家属区的低重力训练设施按军团标准维护，纪律、体能与反应被反复打磨。",
    actionIds: ["drill", "rest", "academy"]
  },
  {
    id: "military-tactical-gallery",
    name: "战术观摩舱",
    label: "军团世家可及",
    summary: "退役军人与教官会在此复盘战例，未分化者也能旁听基础战术和联邦军史。",
    actionIds: ["drill", "archive", "academy"]
  },
  {
    id: "research-family-lab",
    name: "研究院家属实验层",
    label: "科研世家可及",
    summary: "实验层开放给研究员家属的安全区域，充满数据屏、样本柜与远程课程终端。",
    actionIds: ["academy", "archive", "rest"]
  },
  {
    id: "research-observation-room",
    name: "精神力观测室",
    label: "科研世家可及",
    summary: "温和的观测仪记录精神波动，适合进行稳定训练、资料检索和自我调节。",
    actionIds: ["archive", "rest", "academy"]
  },
  {
    id: "noble-etiquette-hall",
    name: "贵族礼仪厅",
    label: "贵族豪门可及",
    summary: "礼仪导师、家族顾问与星域宾客出入其间，一举一动都被训练成履历的一部分。",
    actionIds: ["salon", "academy", "starport-social"]
  },
  {
    id: "noble-audience-lounge",
    name: "星域会客廊",
    label: "贵族豪门可及",
    summary: "这里连接宴会厅与私人档案室，适合学习话术、维系声望，也能翻阅家族旧档。",
    actionIds: ["salon", "starport-social", "archive"]
  },
  {
    id: "orphan-supply-den",
    name: "流民补给据点",
    label: "流浪孤儿可及",
    summary: "补给箱、临时铺位和民生署巡查路线交错，生存直觉与人情往来都很真实。",
    actionIds: ["volunteer", "starport-social", "rest"]
  },
  {
    id: "orphan-derelict-cabin",
    name: "废弃星舰舱段",
    label: "流浪孤儿可及",
    summary: "旧船壳里仍残留训练标线和航行日志，危险但自由，能磨出独立求生的底气。",
    actionIds: ["drill", "archive", "rest"]
  },
  {
    id: "merchant-route-hub",
    name: "财团航线中枢",
    label: "商贸财团可及",
    summary: "货运报价、航线许可与人脉名片在中枢流动，商业判断从旁听开始成形。",
    actionIds: ["starport-social", "academy", "volunteer"]
  },
  {
    id: "merchant-negotiation-suite",
    name: "商贸谈判舱",
    label: "商贸财团可及",
    summary: "封闭谈判舱模拟跨星域合同桌面，礼仪、信用与资源调度都在这里练习。",
    actionIds: ["salon", "starport-social", "archive"]
  },
  {
    id: "public-federal-academy",
    name: "联邦开放学院区",
    label: "分化后公共地图",
    summary: "完成分化登记后可自由通行的学院区，公开课程、研究讲座与资格考试集中在此。",
    actionIds: ["academy", "archive", "salon"],
    postDifferentiationOnly: true
  },
  {
    id: "public-training-field",
    name: "低重力综合训练场",
    label: "分化后公共地图",
    summary: "面向成年人开放的训练场会按第二性别状态调整强度，也提供恢复舱位。",
    actionIds: ["drill", "rest", "volunteer"],
    postDifferentiationOnly: true
  },
  {
    id: "public-starport-plaza",
    name: "星港公共中庭",
    label: "分化后公共地图",
    summary: "公共中庭汇集旅客、雇主、民生署窗口与临时活动，是成年后拓展关系的入口。",
    actionIds: ["starport-social", "volunteer", "salon"],
    postDifferentiationOnly: true
  },
  {
    id: "public-medical-rest-center",
    name: "医疗休眠中心",
    label: "分化后公共地图",
    summary: "这里提供抑制剂咨询、稳定疗程与志愿协助窗口，适合处理分化后的身心调节。",
    actionIds: ["rest", "volunteer", "academy"],
    postDifferentiationOnly: true
  },
  {
    id: "public-central-archive",
    name: "中央星图档案库",
    label: "分化后公共地图",
    summary: "中央档案库向成年登记者开放更深层星图、家族记录和拓荒者航线。",
    actionIds: ["archive", "academy", "starport-social"],
    postDifferentiationOnly: true
  }
];

const QUARTER_MAP_LOCATION_BY_ID = new Map(QUARTER_MAP_LOCATIONS.map((location) => [location.id, location]));

const PRE_DIFFERENTIATION_NEGATIVE_MAP_LOCATION_IDS = [
  ...Object.values(FAMILY_QUARTER_MAP_LOCATION_IDS).flat()
];

const QUARTER_MAP_ONE_TIME_EVENTS = [
  {
    id: "civilian_home_ring_star_lamp",
    locationId: "civilian-home-ring",
    title: "环带星灯",
    trigger: "首次夜间自由行动",
    story: "生活环带的公共廊灯一盏盏亮起，远处舰窗像缓慢移动的星河，维修机器人贴着墙根发出轻微嗡鸣。你和同行 NPC 坐在便利店外，分享一袋温热营养糕，聊起以后想去的星域。对方说到远航时眼睛亮了一下，让这个普通夜晚像被悄悄存进了星港档案。",
    tags: ["日常", "羁绊", "星港"],
    oneTime: true,
    minAge: 3,
    maxAge: 12,
    choices: [
      { id: "listen", label: "认真听对方说完", effects: { spirit: 2 }, relationshipEffects: { favorability: 3, trust: 2 } },
      { id: "share-dream", label: "主动说出自己的愿望", effects: { charm: 2, scholarship: 1 }, relationshipEffects: { favorability: 4 } },
      { id: "watch-light", label: "安静看灯，不打扰任何人", effects: { spirit: 2 } }
    ]
  },
  {
    id: "civilian_home_ring_crowd_breath",
    locationId: "civilian-home-ring",
    title: "人潮换气",
    trigger: "傍晚人流高峰，分化前躁动标签可用",
    story: "环带换班人潮挤过通廊，陌生气息、消毒水和机器热风混在一起，你忽然有些心神不稳，像被航道噪声推着往前走。同行 NPC 递来一瓶常温水，让你靠近安静的维修墙边缓一缓。你听见对方刻意放低的声音，才慢慢把注意力从人群拉回自己身上。",
    tags: ["分化前", "气息预感", "温柔陪伴"],
    oneTime: true,
    minAge: 13,
    maxAge: 17,
    choices: [
      { id: "take-water", label: "接过水并道谢", effects: { spirit: 4 }, relationshipEffects: { trust: 4, familiarity: 1 } },
      { id: "observe-crowd", label: "强迫自己观察人流规律", effects: { scholarship: 3, spirit: 2 } },
      { id: "change-route", label: "主动提出换条路走", effects: { constitution: 2 }, relationshipEffects: { favorability: 2 } }
    ]
  },
  {
    id: "civilian_neighborhood_tool_borrow",
    locationId: "civilian-neighborhood",
    title: "借工具日",
    trigger: "季度邻里维修日",
    story: "后勤邻里舱的维修员临时征集孩子帮忙分发无危险工具，空气里有润滑油和热金属的味道。你记错了一盒彩色标记，手心一下子冒汗，同行 NPC 轻声提醒你别慌。清单重新摊开在工具箱上，这次你们都把错误当成一次能补救的练习。",
    tags: ["邻里", "学习", "互助"],
    oneTime: true,
    minAge: 3,
    maxAge: 12,
    choices: [
      { id: "check-list", label: "重新核对清单", effects: { scholarship: 3, reputation: 2 } },
      { id: "ask-help", label: "请 NPC 一起帮忙", relationshipEffects: { trust: 3, familiarity: 2 } },
      { id: "deliver-tools", label: "把工具送到最近的维修点", effects: { constitution: 2 } }
    ]
  },
  {
    id: "civilian_neighborhood_quiet_apology",
    locationId: "civilian-neighborhood",
    title: "安静道歉",
    trigger: "邻里争执后",
    story: "两个迁徙家庭因补给排班起了争执，声音在窄舱里撞来撞去，连墙上的旧航道贴纸都被震得轻轻发颤。你和同行 NPC 被夹在中间，看见年幼的孩子把饭盒抱得更紧。这里没人真的想伤害谁，但一句话说错，就会让疲惫变成更难收拾的裂缝。",
    tags: ["轻危机", "公共信任", "成长"],
    oneTime: true,
    minAge: 13,
    maxAge: 17,
    choices: [
      { id: "mediate", label: "温和转述双方需求", effects: { charm: 2, reputation: 2 }, relationshipEffects: { trust: 2 } },
      { id: "move-children", label: "先带年幼孩子离开", effects: { constitution: 2, spirit: 3 } },
      { id: "record-gap", label: "保持沉默但记下排班漏洞", effects: { scholarship: 4 } }
    ]
  },
  {
    id: "military_training_yard_first_stride",
    locationId: "military-training-yard",
    title: "第一步训练",
    trigger: "首次进入训练场",
    story: "低重力跑道为家属区孩子降低了强度，蓝色安全线沿着地面一圈圈亮起。你第一次踏上训练带，脚步轻得像要飘起来，教官要求所有人完成基础适应。同行 NPC 在旁边偷偷数拍子，你忽然觉得这一步不只是训练，也是离开看台的开始。",
    tags: ["训练", "体能", "启蒙"],
    oneTime: true,
    minAge: 4,
    maxAge: 12,
    choices: [
      { id: "finish-run", label: "认真跑完全程", effects: { constitution: 4, combat: 2 } },
      { id: "steady-pace", label: "稳住节奏慢慢完成", effects: { constitution: 2, spirit: 2 } },
      { id: "pace-together", label: "和 NPC 互相提醒步频", relationshipEffects: { familiarity: 3, trust: 2 } }
    ]
  },
  {
    id: "military_training_yard_finished_youth_event",
    locationId: "military-training-yard",
    title: "青春实训尾声",
    trigger: "周度实训，战力或体质任一达到 12",
    story: "青春期体能差距开始明显，训练场上的呼吸声变得急促。你在折返跑中陷入瓶颈，同行 NPC 没有嘲笑，只陪你把动作拆开，一次次校正发力。训练尾声，空气里有淡淡金属冷香，让人紧张，也让人清醒。",
    tags: ["分化前", "训练", "青涩躁动"],
    oneTime: true,
    minAge: 13,
    maxAge: 17,
    choices: [
      { id: "accept-guidance", label: "虚心接受指导", effects: { constitution: 5, combat: 3 }, relationshipEffects: { favorability: 6 } },
      { id: "self-review", label: "独自复盘发力节奏", effects: { combat: 4, spirit: 3 } },
      { id: "admit-unease", label: "承认自己今天有些不安", effects: { spirit: 4 }, relationshipEffects: { trust: 5 } }
    ]
  },
  {
    id: "military_tactical_gallery_old_battle_map",
    locationId: "military-tactical-gallery",
    title: "旧战例图",
    trigger: "首次旁听基础战例课",
    story: "退役军人投出一张旧星域战例图，红蓝光点在舱壁上缓慢铺开，像一场仍未完全结束的风暴。你看不懂全部符号，却能从撤离箭头和救援标记里感到沉重。同行 NPC 小声问你如果站在那条航道上会怎么选，你第一次意识到冷静也是一种保护。",
    tags: ["战术", "救援", "学习"],
    oneTime: true,
    minAge: 8,
    maxAge: 12,
    choices: [
      { id: "record-routes", label: "记录自己看懂的路线", effects: { scholarship: 3, combat: 1 } },
      { id: "ask-rescue", label: "询问救援队为何先撤孩子", effects: { reputation: 2, spirit: 2 } },
      { id: "discuss-errors", label: "和 NPC 讨论错误判断", effects: { scholarship: 2 }, relationshipEffects: { familiarity: 3 } }
    ]
  },
  {
    id: "military_tactical_gallery_command_noise",
    locationId: "military-tactical-gallery",
    title: "指令噪声",
    trigger: "模拟复盘课后",
    story: "复盘舱里同时播放多路通讯噪声，警报、坐标和求援声交叠在一起，你的精神被拉得很紧。同行 NPC 注意到你的脸色，帮你把信息按优先级重排。那些刺耳片段被一条条拆开后，你才听见自己呼吸重新稳住。",
    tags: ["精神压力", "战术", "陪伴"],
    oneTime: true,
    minAge: 13,
    maxAge: 17,
    choices: [
      { id: "sort-comms", label: "跟着对方整理通讯", effects: { scholarship: 4 }, relationshipEffects: { trust: 4 } },
      { id: "force-focus", label: "强行保持专注", effects: { spirit: 5 } },
      { id: "propose-plan", label: "提出自己的撤离方案", effects: { combat: 3, reputation: 2 } }
    ]
  },
  {
    id: "research_family_lab_safe_sample",
    locationId: "research-family-lab",
    title: "安全样本",
    trigger: "开放实验参观日",
    story: "研究员展示无害星植样本，叶片在低温灯下泛出蓝光，像把一小片远星雾气关进了培养箱。你被允许记录颜色变化，但不能触碰透明舱壁。同行 NPC 凑近说明牌替你挡住反光，你们把每一次变色都写得格外认真。",
    tags: ["科研", "安全", "启蒙"],
    oneTime: true,
    minAge: 6,
    maxAge: 12,
    choices: [
      { id: "record-chart", label: "严格按表记录", effects: { scholarship: 4, reputation: 1 } },
      { id: "read-signs", label: "请 NPC 一起读说明牌", effects: { scholarship: 2 }, relationshipEffects: { familiarity: 3 } },
      { id: "watch-light", label: "安静观察光色变化", effects: { spirit: 2, charm: 1 } }
    ]
  },
  {
    id: "research_family_lab_pre_diff_data",
    locationId: "research-family-lab",
    title: "分化前数据课",
    trigger: "分化前健康课程后",
    story: "实验层开放一节未分化者数据课，导师强调所有波动都只是身体长大的信号，不代表谁更优越。你在屏幕上看见自己的精神曲线轻微起伏，旁边的观测仪发出稳定的低鸣。同行 NPC 没有偷看你的数值，只把呼吸节奏写在便签上推给你。",
    tags: ["分化前", "精神稳定", "科普"],
    oneTime: true,
    minAge: 13,
    maxAge: 17,
    choices: [
      { id: "self-record", label: "认真学习自我记录", effects: { scholarship: 5, spirit: 2 } },
      { id: "swap-tips", label: "和 NPC 交换稳定小技巧", relationshipEffects: { trust: 4, familiarity: 2 } },
      { id: "breathe-first", label: "暂时不看数据，先做呼吸练习", effects: { spirit: 5 } }
    ]
  },
  {
    id: "research_observation_room_soft_signal",
    locationId: "research-observation-room",
    title: "柔和信号",
    trigger: "首次精神力稳定训练",
    story: "观测室的灯光被调到最柔和，屏幕上的波纹会随呼吸变慢，像被舱段夜色轻轻抚平。你发现只要不急着表现，曲线就会变得平稳。门外的 NPC 隔着玻璃向你点头，提醒你安全不是成绩，而是先听见自己。",
    tags: ["精神力", "稳定", "童年"],
    oneTime: true,
    minAge: 7,
    maxAge: 12,
    choices: [
      { id: "guided-breathing", label: "跟随引导呼吸", effects: { spirit: 4 } },
      { id: "watch-pattern", label: "观察波纹规律", effects: { scholarship: 3 } },
      { id: "wait-outside", label: "让 NPC 在门外等你", effects: { spirit: 2 }, relationshipEffects: { trust: 2 } }
    ]
  },
  {
    id: "research_observation_room_scent_echo",
    locationId: "research-observation-room",
    title: "气息回声",
    trigger: "精神波动偏高，夜间或雨季",
    story: "观测仪捕捉到你短暂的情绪峰值，细小光点在屏幕边缘跳了一下。那不是完整信息素，只像一阵模糊回声，提醒你仍处在分化前状态。同行 NPC 坐在隔壁玻璃外，用口型提醒你慢慢数数，让气息边界重新变得清楚。",
    tags: ["分化前", "气息预感", "安全观测"],
    oneTime: true,
    minAge: 13,
    maxAge: 17,
    choices: [
      { id: "count-slowly", label: "按节奏数数", effects: { spirit: 6 }, relationshipEffects: { trust: 3 } },
      { id: "record-feeling", label: "把感受记录下来", effects: { scholarship: 4, spirit: 2 } },
      { id: "thank-npc", label: "结束后向 NPC 道谢", effects: { charm: 2 }, relationshipEffects: { favorability: 4 } }
    ]
  },
  {
    id: "noble_etiquette_hall_first_bow",
    locationId: "noble-etiquette-hall",
    title: "第一次行礼",
    trigger: "礼仪导师第一次考核",
    story: "礼仪厅地面映着星纹，虚拟宾客的目光从穹顶缓缓落下，你需要完成一套儿童礼。动作不难，难的是在注视下保持镇定。同行 NPC 在练习区悄悄比出口型，你把肩背挺直，也把紧张藏进一次规整的呼吸里。",
    tags: ["礼仪", "声望", "成长"],
    oneTime: true,
    minAge: 5,
    maxAge: 12,
    choices: [
      { id: "complete-form", label: "稳稳完成全套动作", effects: { charm: 3, reputation: 2 } },
      { id: "remember-feedback", label: "记住导师给出的修正", effects: { scholarship: 2, charm: 2 } },
      { id: "practice-together", label: "和 NPC 互相练习", relationshipEffects: { familiarity: 3, favorability: 2 } }
    ]
  },
  {
    id: "noble_etiquette_hall_unsteady_perfume",
    locationId: "noble-etiquette-hall",
    title: "不稳香氛",
    trigger: "宴前排练，分化前躁动标签可用",
    story: "宾客尚未入场，厅内已经铺开淡香氛，冷白灯把礼服边线照得过分清楚。你忽然分不清紧张来自训练还是身体变化，手指在袖口里轻轻收紧。同行 NPC 注意到你的停顿，没有催你，只把最近的换气门位置指给你看。",
    tags: ["分化前", "礼仪", "克制"],
    oneTime: true,
    minAge: 13,
    maxAge: 17,
    choices: [
      { id: "ask-air", label: "请求短暂换气", effects: { spirit: 4, reputation: 1 } },
      { id: "finish-rehearsal", label: "继续完成排练", effects: { charm: 3, spirit: 2 } },
      { id: "check-outfit", label: "让 NPC 帮你检查礼服细节", relationshipEffects: { trust: 3, favorability: 3 } }
    ]
  },
  {
    id: "noble_audience_lounge_guest_cards",
    locationId: "noble-audience-lounge",
    title: "宾客名片",
    trigger: "家族宾客来访",
    story: "会客廊桌上摆满星域名片，金属边缘在灯下闪着细光，你被允许按星区排序。那些名字背后是贸易、军务、学院和古老航线。同行 NPC 把读不准的地名小声念给你听，你忽然明白人脉也是一张需要谨慎触碰的星图。",
    tags: ["家族", "星域", "人脉"],
    oneTime: true,
    minAge: 8,
    maxAge: 12,
    choices: [
      { id: "sort-by-sector", label: "按星区整理", effects: { scholarship: 4 } },
      { id: "memorize-titles", label: "记住重要宾客称谓", effects: { charm: 2, reputation: 2 } },
      { id: "guess-routes", label: "和 NPC 小声猜测航线故事", relationshipEffects: { familiarity: 3 } }
    ]
  },
  {
    id: "noble_audience_lounge_quiet_answer",
    locationId: "noble-audience-lounge",
    title: "安静作答",
    trigger: "青年旁听会谈",
    story: "一位宾客随口问起你对边境学院的看法，杯盏声停了一瞬。问题并不尖锐，却足以让所有目光落到你身上。同行 NPC 在旁边轻轻点头，示意你按自己的理解回答，而不是急着说出讨人喜欢的答案。",
    tags: ["会谈", "声望", "青涩成长"],
    oneTime: true,
    minAge: 13,
    maxAge: 17,
    choices: [
      { id: "public-education", label: "稳妥回答公共教育意义", effects: { reputation: 3, scholarship: 2 } },
      { id: "still-learning", label: "坦率承认仍在学习", effects: { charm: 2, spirit: 2 } },
      { id: "pass-topic", label: "把话题转给更熟悉的人", effects: { charm: 2 }, relationshipEffects: { trust: 3 } }
    ]
  },
  {
    id: "orphan_supply_den_shared_ration",
    locationId: "orphan-supply-den",
    title: "分食补给",
    trigger: "季度补给更新",
    story: "补给箱比预想少一格，排队的孩子都沉默下来，旧舱灯在每个人脸上投下浅浅阴影。你看见一个更小的孩子攥着空袋，同行 NPC 也在等你决定怎么做。这里的善意从来不宽裕，所以每一次分配都像是在衡量明天的勇气。",
    tags: ["收容", "补给", "羁绊"],
    oneTime: true,
    minAge: 3,
    maxAge: 12,
    choices: [
      { id: "share-half", label: "分出一半补给", effects: { reputation: 3, spirit: 2 }, relationshipEffects: { trust: 2 } },
      { id: "check-list", label: "和 NPC 一起核对名单", effects: { scholarship: 3 }, relationshipEffects: { familiarity: 2 } },
      { id: "keep-own-share", label: "先保住自己的份额", effects: { constitution: 2 } }
    ]
  },
  {
    id: "orphan_supply_den_future_ticket",
    locationId: "orphan-supply-den",
    title: "未来告示",
    trigger: "升学或临时工作信息刷新",
    story: "据点墙上贴出开放学院预备考试和星港文职临工告示，纸角被循环风吹得轻轻卷起。出身差距像一堵低矮却真实的墙，但同行 NPC 说，至少这张告示是每个人都能撕下来的。你看着那些报名编号，第一次把未来想成一条可以试着走的通道。",
    tags: ["升学", "未来", "收容线"],
    oneTime: true,
    minAge: 13,
    maxAge: 17,
    choices: [
      { id: "prep-exam", label: "报名预备考试", effects: { scholarship: 5, spirit: 2 } },
      { id: "temp-job", label: "选择临工攒钱", effects: { wealth: 4, constitution: 2 } },
      { id: "plan-route", label: "请 NPC 一起规划路线", relationshipEffects: { trust: 5, familiarity: 2 } }
    ]
  },
  {
    id: "orphan_derelict_cabin_old_log",
    locationId: "orphan-derelict-cabin",
    title: "旧日志屏",
    trigger: "白天探索旧舱段",
    story: "废弃舱段里有一块还能亮起的航行日志屏，裂纹下只剩几行模糊记录。你和同行 NPC 在安全线外蹲下，试着读出旧船最后一次停靠地。灰尘里有冷掉的金属味，你们谁都没越线，却都被那段遗失航程牵住了视线。",
    tags: ["轻危险", "旧星舰", "探索"],
    oneTime: true,
    minAge: 8,
    maxAge: 12,
    choices: [
      { id: "read-log", label: "耐心辨认日志", effects: { scholarship: 3, spirit: 1 } },
      { id: "check-safety", label: "检查周围是否安全", effects: { combat: 2, constitution: 1 } },
      { id: "split-search", label: "和 NPC 分工寻找线索", relationshipEffects: { trust: 3 } }
    ]
  },
  {
    id: "orphan_derelict_cabin_warm_engine_dream",
    locationId: "orphan-derelict-cabin",
    title: "温热引擎梦",
    trigger: "傍晚旧舱段，精神力低于 20 时更适合",
    story: "旧引擎残留的热风从通风管里吹出，让人误以为飞船仍在航行，舱壁深处还藏着迟来的震颤。分化前的烦躁在胸口打转，你和同行 NPC 坐在安全舱门边，谁都没有急着说话。那阵沉默像一条临时划出的气息边界，让你们都能慢慢缓过来。",
    tags: ["分化前", "旧舱", "陪伴"],
    oneTime: true,
    minAge: 13,
    maxAge: 17,
    choices: [
      { id: "say-leave", label: "说出自己想离开的念头", effects: { spirit: 4 }, relationshipEffects: { trust: 5 } },
      { id: "draw-route", label: "把旧航线画下来", effects: { scholarship: 3, reputation: 1 } },
      { id: "basic-moves", label: "起身做一组基础动作", effects: { combat: 3, constitution: 2 } }
    ]
  },
  {
    id: "merchant_route_hub_first_manifest",
    locationId: "merchant-route-hub",
    title: "第一份清单",
    trigger: "首次旁听航线报价",
    story: "中枢屏幕滚动着矿石、星植、医疗包和远航燃料的报价，数字像一串串航标从眼前掠过。你看不懂全部细节，却发现同一种货物在不同星区价格差很多。同行 NPC 指着一条延迟航道提醒你，价格背后往往藏着天气、风险和人的选择。",
    tags: ["商贸", "航线", "启蒙"],
    oneTime: true,
    minAge: 6,
    maxAge: 12,
    choices: [
      { id: "ask-gap", label: "询问价格差原因", effects: { scholarship: 4, wealth: 1 } },
      { id: "deliver-list", label: "帮忙递送无敏感清单", effects: { reputation: 2, constitution: 1 } },
      { id: "read-icons", label: "和 NPC 比谁先看懂图标", relationshipEffects: { familiarity: 3 } }
    ]
  },
  {
    id: "merchant_route_hub_finished_trade_youth",
    locationId: "merchant-route-hub",
    title: "少年模拟航线",
    trigger: "少年模拟航线课，财富或学识任一达到 12",
    story: "财团开放少年模拟盘，要求你在燃料上涨和港口延迟之间选择一条安全航线，桌面投影把虚拟星港铺成一片流动光网。同行 NPC 把几张报价单推到你面前，等你先开口。你知道这只是课程，却也第一次感到信用、利润和安全会在同一秒互相拉扯。",
    tags: ["商贸", "航线", "信用"],
    oneTime: true,
    minAge: 13,
    maxAge: 17,
    choices: [
      { id: "safe-credit", label: "选择低利润高信用路线", effects: { reputation: 3, wealth: 2 }, relationshipEffects: { trust: 4 } },
      { id: "short-spread", label: "押注短线差价", effects: { wealth: 5, spirit: -1 } },
      { id: "check-delay", label: "先核查港口延迟原因", effects: { scholarship: 5, wealth: 1 } }
    ]
  },
  {
    id: "merchant_negotiation_suite_polite_counter",
    locationId: "merchant-negotiation-suite",
    title: "礼貌还价",
    trigger: "少年体验市集",
    story: "谈判舱把桌面调成儿童模式，三枚模拟筹码在掌心里轻轻发热，你需要换取一份星植样本说明。对方报价偏高，但态度礼貌。同行 NPC 坐在旁听位看着你，像在等你学会用清楚的话保护自己的需求。",
    tags: ["商贸", "谈判", "礼貌"],
    oneTime: true,
    minAge: 9,
    maxAge: 12,
    choices: [
      { id: "polite-counter", label: "礼貌还价", effects: { charm: 2, wealth: 2 } },
      { id: "explain-need", label: "说明自己为什么需要样本", effects: { scholarship: 2, charm: 2 } },
      { id: "watch-demo", label: "请 NPC 先示范", relationshipEffects: { familiarity: 3, trust: 1 } }
    ]
  },
  {
    id: "merchant_negotiation_suite_pre_diff_pressure",
    locationId: "merchant-negotiation-suite",
    title: "谈判压力",
    trigger: "模拟合同桌面，分化前躁动标签可用",
    story: "封闭谈判舱里灯光偏冷，模拟对手不断追问付款和违约条款，屏幕上的倒计时一格格缩短。你的心跳被问题推快，分化前的躁动像细小电流贴着脊背游走。同行 NPC 轻敲桌边，提醒你别被节奏带走，也别把紧张误当成失败。",
    tags: ["商贸", "分化前", "谈判压力"],
    oneTime: true,
    minAge: 13,
    maxAge: 17,
    choices: [
      { id: "restate-terms", label: "请求重述关键条款", effects: { scholarship: 4, spirit: 2 } },
      { id: "counter-question", label: "稳住节奏提出反问", effects: { charm: 2, wealth: 3 } },
      { id: "adjust-strategy", label: "接受 NPC 提醒后调整策略", effects: { wealth: 2 }, relationshipEffects: { trust: 4 } }
    ]
  },
  {
    id: "public_federal_academy_first_registry_course",
    locationId: "public-federal-academy",
    title: "成年登记后的第一课",
    story: "完成分化登记后，你第一次以成年身份进入公开课程，门禁读取登记资料时亮起平稳的绿光。导师讲解第二性别平等规范和公共空间礼仪，也反复强调气息边界与互相尊重。同行 NPC 在课后与你对照笔记，这份新身份终于不再只是表格上的一行字。",
    tags: ["18 后", "公开课程", "制度"],
    oneTime: true,
    minAge: 18,
    choices: [
      { id: "take-notes", label: "认真记笔记", effects: { scholarship: 5, reputation: 2 } },
      { id: "answer-questions", label: "参与课堂问答", effects: { charm: 2, scholarship: 2 } },
      { id: "swap-schedules", label: "课后与 NPC 交换课程表", relationshipEffects: { familiarity: 3, trust: 2 } }
    ]
  },
  {
    id: "public_federal_academy_group_project",
    locationId: "public-federal-academy",
    title: "跨专业课题",
    story: "学院区发布跨专业小组课题，要求成员用公开资料解决星港调度问题，屏幕上堆满延误航班、舱段流量和补给窗口。你翻开资料时才发现，成年后的协作不只是分工，还要承担判断后果。同行 NPC 把空白计划板推到中间，等你们一起落下第一笔。",
    tags: ["18 后", "学院", "协作"],
    oneTime: true,
    minAge: 18,
    choices: [
      { id: "sort-materials", label: "承担资料整理", effects: { scholarship: 4, reputation: 2 } },
      { id: "present", label: "负责展示汇报", effects: { charm: 3 } },
      { id: "coordinate", label: "协调组内分工", effects: { reputation: 2 }, relationshipEffects: { trust: 3 } }
    ]
  },
  {
    id: "public_training_field_adult_calibration",
    locationId: "public-training-field",
    title: "成年校准训练",
    story: "训练场根据登记资料调整强度，腕环上的参数一项项亮起，教练强调成年训练要以稳定和安全为先。你站在校准区里，听见隔壁器械低声启动。同行 NPC 没有催你挑战高档位，只问你今天的身体状态是否适合继续。",
    tags: ["18 后", "训练", "稳定"],
    oneTime: true,
    minAge: 18,
    choices: [
      { id: "steady-mode", label: "选择稳态训练", effects: { constitution: 4, spirit: 2 } },
      { id: "skill-course", label: "挑战技巧课程", effects: { combat: 4, constitution: 1 } },
      { id: "warm-up-together", label: "请 NPC 陪同热身", relationshipEffects: { familiarity: 3, trust: 1 } }
    ]
  },
  {
    id: "public_training_field_recovery_bay",
    locationId: "public-training-field",
    title: "恢复舱报告",
    story: "训练后你进入恢复舱，透明舱盖落下时，外面的脚步声被过滤成柔和低响。你听见隔壁有人讨论如何适应分化后的体能曲线，没有人催促你变强，只有一份清晰的训练报告。同行 NPC 在等候区替你留着水，像是在提醒你恢复本身也是训练的一部分。",
    tags: ["18 后", "恢复", "体能适配"],
    oneTime: true,
    minAge: 18,
    choices: [
      { id: "review-report", label: "复盘报告", effects: { scholarship: 2, combat: 3 } },
      { id: "recover-longer", label: "延长恢复时间", effects: { spirit: 4, constitution: 1 } },
      { id: "discuss-plan", label: "和 NPC 讨论训练计划", relationshipEffects: { trust: 3 } }
    ]
  },
  {
    id: "public_starport_plaza_first_public_shift",
    locationId: "public-starport-plaza",
    title: "第一次公共班次",
    story: "公共中庭的民生署窗口招募成年志愿者，任务是引导旅客和分流排队人群。远航舰刚刚入港，行李轮、儿童哭声和广播提示挤满星港大厅。同行 NPC 与你对了一遍分工，你忽然意识到成年后的公共规范会落在每一次耐心解释里。",
    tags: ["18 后", "星港", "志愿"],
    oneTime: true,
    minAge: 18,
    choices: [
      { id: "guide-travelers", label: "耐心引导旅客", effects: { reputation: 3, charm: 2 } },
      { id: "organize-queue", label: "整理排队规则", effects: { scholarship: 2, reputation: 2 } },
      { id: "split-work", label: "和 NPC 分头协作", relationshipEffects: { trust: 3, familiarity: 2 } }
    ]
  },
  {
    id: "public_starport_plaza_route_reunion",
    locationId: "public-starport-plaza",
    title: "航路重逢",
    story: "你在中庭看见一班远航舰入港，舷窗反光掠过大厅地面，熟悉的旧地点和成年后的新身份重叠在一起。同行 NPC 问你是否还记得小时候第一次看飞船的心情。那一刻，过去的惊叹和现在的选择像两条航道，在你眼前短暂交汇。",
    tags: ["18 后", "回望", "关系沉淀"],
    oneTime: true,
    minAge: 18,
    choices: [
      { id: "still-moved", label: "承认自己仍会心动", effects: { spirit: 3 }, relationshipEffects: { favorability: 3 } },
      { id: "future-plan", label: "谈起未来计划", effects: { scholarship: 2, reputation: 2 } },
      { id: "watch-quietly", label: "安静看完入港", effects: { spirit: 4 } }
    ]
  },
  {
    id: "public_medical_rest_center_safe_consult",
    locationId: "public-medical-rest-center",
    title: "稳定咨询",
    story: "医疗休眠中心提供分化后稳定咨询，等候区的白噪声像细雨一样盖住紧张。医师用平稳语气讲清休息、饮食和公共安全注意事项，也把气息边界写进你的日常记录。同行 NPC 在门外等你，见你出来后只问，讲清楚了吗。",
    tags: ["18 后", "医疗", "安全"],
    oneTime: true,
    minAge: 18,
    choices: [
      { id: "build-record", label: "按建议建立记录", effects: { spirit: 4, scholarship: 2 } },
      { id: "ask-limits", label: "询问日常训练限制", effects: { constitution: 2, scholarship: 3 } },
      { id: "wait-with-npc", label: "让 NPC 在等候区陪同", relationshipEffects: { trust: 4 } }
    ]
  },
  {
    id: "public_medical_rest_center_volunteer_window",
    locationId: "public-medical-rest-center",
    title: "志愿窗口",
    story: "中心志愿窗口需要成年人帮助新登记者阅读流程单，透明屏上的步骤密密麻麻，足够让第一次来的人不知所措。你发现很多人的紧张并不比自己少。同行 NPC 把备用笔递给你，你们用更慢的语速把公共规范讲成能被听懂的安心。",
    tags: ["18 后", "志愿", "互助"],
    oneTime: true,
    minAge: 18,
    choices: [
      { id: "explain-process", label: "耐心解释流程", effects: { reputation: 3, charm: 2 } },
      { id: "make-faq", label: "整理常见问题卡", effects: { scholarship: 3, reputation: 2 } },
      { id: "rotate-shift", label: "和 NPC 轮流值守", relationshipEffects: { familiarity: 3, trust: 2 } }
    ]
  },
  {
    id: "public_central_archive_deeper_access",
    locationId: "public-central-archive",
    title: "更深层权限",
    story: "成年权限打开更深层的星图档案，旧航道、迁徙批注和拓荒者签名在暗蓝界面上一层层展开。你终于能查阅童年时只能听说的路线，也看见每个坐标背后都有人曾经赌上一段人生。同行 NPC 站在检索台旁，陪你把震动的指尖慢慢按稳。",
    tags: ["18 后", "档案", "星图"],
    oneTime: true,
    minAge: 18,
    choices: [
      { id: "study-routes", label: "研究航线演变", effects: { scholarship: 5 } },
      { id: "family-records", label: "查询公共家族记录", effects: { reputation: 2, spirit: 2 } },
      { id: "check-names", label: "邀请 NPC 一起核对旧地名", relationshipEffects: { familiarity: 3 } }
    ]
  },
  {
    id: "public_central_archive_lost_coordinate",
    locationId: "public-central-archive",
    title: "失落坐标",
    story: "一枚失落坐标被归档为民用可见资料，档案标记显示它不危险，只是长期无人校正。可当旧船编号、旧街区名和迁徙记录连在一起时，那段被遗忘的历史忽然有了温度。同行 NPC 问你要不要继续查下去，你知道这可能会改变你对故乡的记忆。",
    tags: ["18 后", "旧线索", "探索钩子"],
    oneTime: true,
    minAge: 18,
    choices: [
      { id: "submit-correction", label: "提交资料勘误", effects: { scholarship: 4, reputation: 3 } },
      { id: "write-note", label: "写下个人注释", effects: { spirit: 3, scholarship: 2 } },
      { id: "discuss-visit", label: "与 NPC 讨论是否实地走访", relationshipEffects: { trust: 3 } }
    ]
  },
  {
    id: "negative_orphan_kindness_betrayed",
    locationIds: ["orphan-supply-den", "orphan-derelict-cabin"],
    title: "善意被辜负",
    trigger: "3-6 岁，白天自由行动",
    story: "你主动将仅剩的营养零食分给争抢物资的同伴，想缓和争执。对方却把零食全拿走，还反过来指责你小气。善意没有换来感谢，只留下好心落空的委屈。",
    tags: ["消极", "收容街区", "童年"],
    oneTime: true,
    minAge: 3,
    maxAge: 6,
    choices: [
      { id: "silent-endure", label: "委屈沉默忍让", effects: { spirit: -3 } },
      { id: "argue-back", label: "上前辩解争执", effects: { reputation: -2 } },
      { id: "stop-helping", label: "从此不愿再主动助人", effects: { charm: -2, spirit: -2 } }
    ]
  },
  {
    id: "negative_orphan_unseen_effort",
    locationIds: ["orphan-supply-den", "orphan-derelict-cabin"],
    title: "努力却不被看见",
    trigger: "7-9 岁，午后街区活动",
    story: "你认真整理公共绘本、归置散落物资，花了很久才把角落收拾整齐。管理员只夸了顺手帮忙的其他孩子，甚至默认这是你本该做的事。默默努力彻底落空。",
    tags: ["消极", "收容街区", "童年"],
    oneTime: true,
    minAge: 7,
    maxAge: 9,
    choices: [
      { id: "leave-downcast", label: "默默失落离场", effects: { spirit: -3 } },
      { id: "speak-up", label: "主动说出自己的付出", effects: { reputation: -1 } },
      { id: "withdraw-work", label: "后续不再主动做事", effects: { reputation: -2 } }
    ]
  },
  {
    id: "negative_orphan_excluded",
    locationIds: ["orphan-supply-den", "orphan-derelict-cabin"],
    title: "弱小被排挤",
    trigger: "10-12 岁，傍晚街区闲暇",
    story: "同龄孩童结成小圈子，刻意避开你，私下窃窃私语，拒绝让你参与集体活动。你清晰感到出身带来的隔阂，心里落寞又无力。",
    tags: ["消极", "收容街区", "童年"],
    oneTime: true,
    minAge: 10,
    maxAge: 12,
    choices: [
      { id: "pretend-fine", label: "假装不在意独自消化", effects: { spirit: -4 } },
      { id: "try-fit-in", label: "主动讨好融入", effects: { charm: -3 } },
      { id: "resist-social", label: "产生抵触、厌恶社交", effects: { charm: -2 } }
    ]
  },
  {
    id: "negative_starport_help_blame",
    locationIds: ["civilian-home-ring", "civilian-neighborhood"],
    title: "好心做错事被指责",
    trigger: "3-6 岁，星港白天开放",
    story: "你看见路人物品即将掉落，伸手想帮忙扶住，却意外碰歪对方行李。路人不问缘由地轻声斥责你莽撞碍事，引来周边侧目，你窘迫得手足无措。",
    tags: ["消极", "星港", "童年"],
    oneTime: true,
    minAge: 3,
    maxAge: 6,
    choices: [
      { id: "apologize-low", label: "低头沉默认错", effects: { spirit: -3 } },
      { id: "small-defense", label: "小声辩解自己是好心", effects: { reputation: -2 } },
      { id: "flee-scene", label: "慌乱逃离现场", effects: {} }
    ]
  },
  {
    id: "negative_starport_horizon_gap",
    locationIds: ["civilian-home-ring", "civilian-neighborhood"],
    title: "眼界差距带来的自卑",
    trigger: "7-9 岁，观摩星际旅客",
    story: "远道而来的星域旅客衣着精致、谈吐从容，像见过万千星河。对比自己贫瘠的阅历与普通出身，强烈落差涌上心头。",
    tags: ["消极", "星港", "童年"],
    oneTime: true,
    minAge: 7,
    maxAge: 9,
    choices: [
      { id: "self-doubt", label: "陷入低落自我怀疑", effects: { spirit: -4 } },
      { id: "avoid-looking", label: "刻意回避不敢多看", effects: { scholarship: -1 } },
      { id: "numb-wish", label: "麻木无感不再向往", effects: { scholarship: -2 } }
    ]
  },
  {
    id: "negative_starport_tricked",
    locationIds: ["civilian-home-ring", "civilian-neighborhood"],
    title: "轻信他人被欺骗",
    trigger: "10-12 岁，星港自由行动",
    story: "陌生人员假意科普星域知识，许诺赠送小纪念品，骗取你的信任后让你帮忙跑腿打杂，最后悄悄溜走。你白白耗费时间，一无所获。",
    tags: ["消极", "星港", "童年"],
    oneTime: true,
    minAge: 10,
    maxAge: 12,
    choices: [
      { id: "accept-loss", label: "自认倒霉默默离开", effects: { spirit: -3 } },
      { id: "wait-return", label: "原地失落等待对方归来", effects: { scholarship: -1 } },
      { id: "resent-strangers", label: "心生怨气、厌恶陌生人", effects: { charm: -2 } }
    ]
  },
  {
    id: "negative_training_bottom_rank",
    locationIds: ["military-training-yard", "military-tactical-gallery"],
    title: "努力训练却垫底",
    trigger: "4-7 岁，基础训练结束",
    story: "你全程认真坚持训练，没有偷懒懈怠，但体能和爆发力弱于同龄人。榜单公布时，你依旧排名垫底，内心充满无力感。",
    tags: ["消极", "训练场", "童年"],
    oneTime: true,
    minAge: 4,
    maxAge: 7,
    choices: [
      { id: "doubt-self", label: "低落消沉怀疑自己", effects: { constitution: -2, spirit: -3 } },
      { id: "give-up-drill", label: "赌气摆烂不再认真训练", effects: { combat: -3 } },
      { id: "force-through", label: "强行硬撑、身心俱疲", effects: { spirit: -4 } }
    ]
  },
  {
    id: "negative_training_team_dragged",
    locationIds: ["military-training-yard", "military-tactical-gallery"],
    title: "被队友过失拖累扣分",
    trigger: "8-10 岁，小组训练考核",
    story: "小组协作训练中，你精准完成自己的任务，但队友频频出错、配合拖沓，最终全队评级不合格。你的努力被连带抵消。",
    tags: ["消极", "训练场", "童年"],
    oneTime: true,
    minAge: 8,
    maxAge: 10,
    choices: [
      { id: "hold-grievance", label: "委屈憋闷、无力反驳", effects: { spirit: -3 } },
      { id: "blame-public", label: "当众埋怨队友", effects: { reputation: -3 } },
      { id: "resist-team", label: "消极抵触后续组队训练", effects: { combat: -2 } }
    ]
  },
  {
    id: "negative_training_mocked_mistake",
    locationIds: ["military-training-yard", "military-tactical-gallery"],
    title: "训练失误被当众调侃",
    trigger: "10-12 岁，模拟对抗训练",
    story: "你在动作衔接中出现微小失误，并未影响整体训练，却被同龄人当众调侃笨拙。哄笑声让你极度窘迫，自信心受挫。",
    tags: ["消极", "训练场", "童年"],
    oneTime: true,
    minAge: 10,
    maxAge: 12,
    choices: [
      { id: "continue-ashamed", label: "强忍尴尬继续训练", effects: { spirit: -3 } },
      { id: "more-mistakes", label: "慌乱出错更多", effects: { combat: -3 } },
      { id: "leave-early", label: "提前离场逃避训练", effects: { constitution: -2 } }
    ]
  },
  {
    id: "negative_trade_looked_down",
    locationIds: ["merchant-route-hub", "merchant-negotiation-suite"],
    title: "眼界不足被轻视",
    trigger: "3-6 岁，首次观摩星贸市集",
    story: "你不懂星域商品价值，好奇询问基础问题。店员态度敷衍，觉得你消费不起、见识浅薄，随意把你打发走。",
    tags: ["消极", "星贸", "童年"],
    oneTime: true,
    minAge: 3,
    maxAge: 6,
    choices: [
      { id: "awkward-step-back", label: "默默窘迫退开", effects: { spirit: -3 } },
      { id: "pretend-know", label: "强行装作懂行硬撑", effects: { charm: -2 } },
      { id: "avoid-asking", label: "从此不敢主动询问", effects: { scholarship: -1 } }
    ]
  },
  {
    id: "negative_trade_small_loss",
    locationIds: ["merchant-route-hub", "merchant-negotiation-suite"],
    title: "小额交易吃亏亏损",
    trigger: "7-9 岁，少年模拟交易",
    story: "你真诚与人交换物品，轻信对方说辞。交易结束后才发现，自己用珍贵小物件换来了普通物品，彻底吃亏。",
    tags: ["消极", "星贸", "童年"],
    oneTime: true,
    minAge: 7,
    maxAge: 9,
    choices: [
      { id: "learn-loss", label: "自认吃亏吸取教训", effects: { wealth: -3 } },
      { id: "regret-rejected", label: "想要反悔却被拒绝", effects: { charm: -2 } },
      { id: "resist-trade", label: "抵触所有交易活动", effects: { wealth: -2 } }
    ]
  },
  {
    id: "negative_trade_talent_gap",
    locationIds: ["merchant-route-hub", "merchant-negotiation-suite"],
    title: "天赋差距难以逾越",
    trigger: "10-12 岁，观摩少年商赛",
    story: "同龄人轻松掌握议价和行情分析，谈吐老练、思路清晰。你认真听讲却跟不上节奏，意识到阅历与眼界的差距。",
    tags: ["消极", "星贸", "童年"],
    oneTime: true,
    minAge: 10,
    maxAge: 12,
    choices: [
      { id: "sink-doubt", label: "陷入自我怀疑", effects: { spirit: -4, scholarship: -1 } },
      { id: "quit-study", label: "放弃钻研、觉得自己不适合", effects: { wealth: -3 } },
      { id: "force-study", label: "强行硬学、心态浮躁", effects: { spirit: -2 } }
    ]
  },
  {
    id: "negative_orphan_origin_bias",
    locationIds: ["orphan-supply-den", "orphan-derelict-cabin"],
    title: "出身偏见无法消解",
    trigger: "13-14 岁，夜间独处",
    story: "外界流言传入街区，有人给收容出身的少年贴上无背景、没前途的标签。你感到世俗偏见难以挣脱，心里压抑沉重。",
    tags: ["消极", "收容街区", "青春期"],
    oneTime: true,
    minAge: 13,
    maxAge: 14,
    choices: [
      { id: "long-drain", label: "长期内耗低落", effects: { spirit: -5 } },
      { id: "rebel-outside", label: "逆反心态、抵触外界", effects: { reputation: -3 } },
      { id: "numb-expect", label: "麻木看淡、丧失期待", effects: { charm: -3 } }
    ]
  },
  {
    id: "negative_orphan_resource_gap",
    locationIds: ["orphan-supply-den", "orphan-derelict-cabin"],
    title: "努力抵不过天赋与家境",
    trigger: "15-17 岁，升学备考阶段",
    story: "你日夜苦读追赶进度，而资源优越的同龄人轻松取得更好成绩。你第一次清晰感到，努力在先天差距面前也会显得渺小。",
    tags: ["消极", "收容街区", "青春期"],
    oneTime: true,
    minAge: 15,
    maxAge: 17,
    choices: [
      { id: "short-slump", label: "心态崩溃短暂摆烂", effects: { scholarship: -4, spirit: -5 } },
      { id: "overwork", label: "强行内卷、身心透支", effects: { constitution: -3, spirit: -3 } },
      { id: "resent-unfair", label: "产生不公怨念", effects: { reputation: -2 } }
    ]
  },
  {
    id: "negative_starport_class_gap",
    locationIds: ["civilian-home-ring", "civilian-neighborhood"],
    title: "眼界鸿沟带来的自卑爆发",
    trigger: "13-15 岁，大型星舰过境",
    story: "顶级星域权贵子弟随使团过境，举手投足都是你从未接触过的格局。巨大的阶层鸿沟展现在眼前，让你瞬间失语。",
    tags: ["消极", "星港", "青春期"],
    oneTime: true,
    minAge: 13,
    maxAge: 15,
    choices: [
      { id: "silent-leave", label: "沉默落寞离场", effects: { spirit: -5 } },
      { id: "avoid-scenes", label: "刻意回避高端场景", effects: { scholarship: -2 } },
      { id: "envy-powerless", label: "心生羡慕却无力改变", effects: { charm: -3 } }
    ]
  },
  {
    id: "negative_starport_help_pursued",
    locationIds: ["civilian-home-ring", "civilian-neighborhood"],
    title: "热心帮忙反被追责",
    trigger: "16-17 岁，星港设备微调故障",
    story: "你主动协助工作人员疏导人流、处理小故障。后续问题加剧，官方追责时无人替你说明，你被无端牵连，承担了多余责任。",
    tags: ["消极", "星港", "青春期"],
    oneTime: true,
    minAge: 16,
    maxAge: 17,
    choices: [
      { id: "bear-blame", label: "委屈隐忍背责", effects: { reputation: -3, spirit: -4 } },
      { id: "defend-unheard", label: "极力辩解无人相信", effects: { charm: -2 } },
      { id: "cold-watch", label: "从此遇事冷眼旁观", effects: { reputation: -2 } }
    ]
  },
  {
    id: "negative_training_plateau",
    locationIds: ["military-training-yard", "military-tactical-gallery"],
    title: "瓶颈期持续退步",
    trigger: "13-14 岁，体能瓶颈阶段",
    story: "青春期体能差距加剧，同龄人飞速进步，而你长期卡在瓶颈，甚至小幅倒退。训练看不到成果，挫败感压得人喘不过气。",
    tags: ["消极", "训练场", "青春期"],
    oneTime: true,
    minAge: 13,
    maxAge: 14,
    choices: [
      { id: "give-breakthrough", label: "自我怀疑放弃突破", effects: { combat: -5, constitution: -3 } },
      { id: "overtrain", label: "焦虑过度训练受伤", effects: { constitution: -4, spirit: -3 } },
      { id: "perfunctory", label: "消极敷衍训练", effects: { combat: -4 } }
    ]
  },
  {
    id: "negative_training_exam_miss",
    locationIds: ["military-training-yard", "military-tactical-gallery"],
    title: "考核失误全盘皆输",
    trigger: "15-17 岁，月度实战考核",
    story: "你前期训练状态极佳，所有人都看好成绩。但临场心态崩盘，出现低级失误，评级垫底，长期努力付诸东流。",
    tags: ["消极", "训练场", "青春期"],
    oneTime: true,
    minAge: 15,
    maxAge: 17,
    choices: [
      { id: "late-rumination", label: "深夜内耗失眠", effects: { spirit: -6 } },
      { id: "resist-exams", label: "抵触后续考核训练", effects: { combat: -3, reputation: -2 } },
      { id: "force-let-go", label: "强行释怀、留下心结", effects: { spirit: -4 } }
    ]
  },
  {
    id: "negative_trade_prediction_loss",
    locationIds: ["merchant-route-hub", "merchant-negotiation-suite"],
    title: "预判失误小额亏损",
    trigger: "13-14 岁，少年商战模拟",
    story: "你认真分析行情，大胆投入攒了很久的小额积蓄。最终行情反转，本金亏损大半，长久积累一夜归零。",
    tags: ["消极", "星贸", "青春期"],
    oneTime: true,
    minAge: 13,
    maxAge: 14,
    choices: [
      { id: "fear-try", label: "心疼失落、不敢再尝试", effects: { wealth: -5 } },
      { id: "self-blame", label: "焦虑自责陷入内耗", effects: { spirit: -4 } },
      { id: "quit-commerce", label: "赌气放弃商业学习", effects: { scholarship: -3, wealth: -2 } }
    ]
  },
  {
    id: "negative_trade_ambition_chilled",
    locationIds: ["merchant-route-hub", "merchant-negotiation-suite"],
    title: "少年野心被现实泼冷水",
    trigger: "15-17 岁，闭市闲谈时段",
    story: "你向商圈长辈请教未来规划与野心。对方平淡指出，你的资源、眼界和背景还不足以支撑理想，直白打碎了少年热忱。",
    tags: ["消极", "星贸", "青春期"],
    oneTime: true,
    minAge: 15,
    maxAge: 17,
    choices: [
      { id: "lower-expect", label: "信念受挫、降低期待", effects: { spirit: -5, scholarship: -2 } },
      { id: "speechless", label: "不甘却无力反驳", effects: { charm: -3 } },
      { id: "drop-drive", label: "彻底打消进取念头", effects: { wealth: -4, reputation: -2 } }
    ]
  },
  {
    id: "negative_pre_abo_restless_scent",
    locationIds: PRE_DIFFERENTIATION_NEGATIVE_MAP_LOCATION_IDS,
    title: "信息素躁动失控",
    trigger: "14-17 岁，分化前人群密集场景",
    story: "周边同龄人的隐性气息和星港人流混在一起，你自身分化前兆忽然躁动，心绪紊乱、心慌不适。你努力压制却效果有限，在人群里格外狼狈。",
    tags: ["消极", "分化前", "ABO"],
    oneTime: true,
    minAge: 14,
    maxAge: 17,
    preDifferentiationOnly: true,
    choices: [
      { id: "force-endure", label: "强行硬撑强忍不适", effects: { spirit: -5, constitution: -3 } },
      { id: "flee-crowd", label: "慌乱逃离人群", effects: { spirit: -4 } },
      { id: "let-restless", label: "摆烂放任躁动", effects: { spirit: -3 } }
    ]
  },
  {
    id: "negative_pre_abo_dull_sense",
    locationIds: PRE_DIFFERENTIATION_NEGATIVE_MAP_LOCATION_IDS,
    title: "气息感知迟钝的落差",
    trigger: "16-17 岁，ABO 集体检测",
    story: "同龄人大多出现清晰的分化前兆，气息感知也更敏锐。唯独你的身体反应微弱，被判定为分化迟缓，内心落差与失落席卷全身。",
    tags: ["消极", "分化前", "ABO"],
    oneTime: true,
    minAge: 16,
    maxAge: 17,
    preDifferentiationOnly: true,
    choices: [
      { id: "private-low", label: "暗自自卑低落", effects: { spirit: -6 } },
      { id: "cannot-change", label: "不甘心却无法改变", effects: {} },
      { id: "give-up-self", label: "摆烂看淡自我放弃", effects: { scholarship: -2, spirit: -3 } }
    ]
  },
  {
    id: "negative_origin_fairness_bias_orphan",
    locationIds: FAMILY_QUARTER_MAP_LOCATION_IDS.orphan.slice(),
    familyIds: ["orphan"],
    title: "评优结果的绝对不公",
    trigger: "10-12 岁，季度优秀少年评选",
    story: "你整季度自律、助人、认真学习、零违规，所有人都默认你稳拿评优。可最终荣誉却给了擅长讨好管理员、全程摸鱼偷懒的同伴。掌声落在别人身上，你第一次清晰意识到，无背景、无依靠的努力，在偏袒面前竟如此廉价。",
    tags: ["消极", "高阶挫折", "收容街区", "孤儿出身", "长期后遗症"],
    oneTime: true,
    minAge: 10,
    maxAge: 12,
    choices: [
      { id: "accept-fairness-collapse", label: "沉默接受，不再信努力公平", effects: { spirit: -6 } },
      { id: "question-publicly", label: "当众质疑，反被说心胸狭隘", effects: { reputation: -5, charm: -4 } },
      { id: "lie-flat-after-bias", label: "刻意躺平，不再主动付出", effects: { scholarship: -3, reputation: -3 } }
    ]
  },
  {
    id: "negative_origin_fairness_bias_merchant",
    locationIds: [...FAMILY_QUARTER_MAP_LOCATION_IDS.merchant, ...FAMILY_QUARTER_MAP_LOCATION_IDS.orphan],
    familyIds: ["merchant"],
    title: "荣誉被出身滤镜吞没",
    trigger: "10-12 岁，季度优秀少年评选",
    story: "你凭自身努力拿下季度综合第一，品行、学识、自律全部达标。可外界流言肆意发酵，所有人都默认你的荣誉只是家族打点的结果，无人愿意承认你的汗水。你越想证明自己，越被出身标签彻底压住。",
    tags: ["消极", "高阶挫折", "收容街区", "星贸出身", "长期后遗症"],
    oneTime: true,
    minAge: 10,
    maxAge: 12,
    choices: [
      { id: "swallow-filter-hate", label: "沉默隐忍，厌恶出身滤镜", effects: { spirit: -6 } },
      { id: "explain-backfire", label: "当众辩解，越解释越像心虚", effects: { charm: -5, reputation: -3 } },
      { id: "stop-proving", label: "不再刻意证明自己", effects: { scholarship: -3, spirit: -4 } }
    ]
  },
  {
    id: "negative_origin_framed_theft_orphan",
    locationIds: FAMILY_QUARTER_MAP_LOCATION_IDS.orphan.slice(),
    familyIds: ["orphan"],
    title: "被刻意栽赃背锅",
    trigger: "8-12 岁，物资失窃风波",
    story: "街区稀缺物资失窃，几名有家庭、有背景的孩童统一说辞，刻意把过错嫁祸到你身上。管理员不愿得罪他们，也懒得深究真相，直接将所有责任压到你头上。你孤身无援、百口莫辩，清白被舆论轻易碾碎。",
    tags: ["消极", "高阶挫折", "收容街区", "孤儿出身", "长期后遗症"],
    oneTime: true,
    minAge: 8,
    maxAge: 12,
    choices: [
      { id: "endure-scapegoat", label: "隐忍背锅，从此防备所有人", effects: { spirit: -5 } },
      { id: "argue-labeled-bad", label: "激烈辩解，反被认定态度恶劣", effects: { reputation: -6 } },
      { id: "seal-heart", label: "封闭内心，断绝无效社交", effects: { charm: -5, spirit: -4 } }
    ]
  },
  {
    id: "negative_origin_framed_theft_merchant",
    locationIds: [...FAMILY_QUARTER_MAP_LOCATION_IDS.merchant, ...FAMILY_QUARTER_MAP_LOCATION_IDS.orphan],
    familyIds: ["merchant"],
    title: "富家孩子的假想有罪",
    trigger: "8-12 岁，物资失窃风波",
    story: "街区物资失窃后，旁人不敢得罪普通孩童，反而把矛头指向家境优渥的你。众人默认“富家孩子贪玩肆意、不在乎规则”，强行把过错安在你身上。家族为避免小事发酵、影响声誉，选择让你低调认错息事宁人。",
    tags: ["消极", "高阶挫折", "收容街区", "星贸出身", "长期后遗症"],
    oneTime: true,
    minAge: 8,
    maxAge: 12,
    choices: [
      { id: "obey-family-apology", label: "顺从认错，心生强烈无力感", effects: { spirit: -5 } },
      { id: "refuse-and-scolded", label: "坚决拒认，被家人斥责任性", effects: { reputation: -5, charm: -3 } },
      { id: "grow-distant-family", label: "对家族庇护失望，内心疏离", effects: { spirit: -4 } }
    ]
  },
  {
    id: "negative_origin_goodwill_pawn_orphan",
    locationIds: ["civilian-home-ring", "civilian-neighborhood", ...FAMILY_QUARTER_MAP_LOCATION_IDS.orphan],
    familyIds: ["orphan"],
    title: "善意被利用成棋子",
    trigger: "10-12 岁，星港外勤时段",
    story: "你常年缺爱、渴望被认可，面对公职人员温和的态度，下意识选择全然信任。对方利用你的单纯与讨好心态，哄骗你帮忙传递涉密报备文件。漏洞爆发后，对方直接把所有责任推给“无监护、无背景的孤儿孩童”，让你背上莫名的不良记录。",
    tags: ["消极", "高阶挫折", "星港", "孤儿出身", "长期后遗症"],
    oneTime: true,
    minAge: 10,
    maxAge: 12,
    choices: [
      { id: "passive-blame", label: "被动担责，默默承受非议", effects: { reputation: -5, spirit: -6 } },
      { id: "prove-called-noisy", label: "试图举证，反被说无理取闹", effects: { charm: -3 } },
      { id: "shut-kindness", label: "收起善意，今后冷眼旁观", effects: { reputation: -4 } }
    ]
  },
  {
    id: "negative_origin_goodwill_pawn_merchant",
    locationIds: ["civilian-home-ring", "civilian-neighborhood", ...FAMILY_QUARTER_MAP_LOCATION_IDS.merchant],
    familyIds: ["merchant"],
    title: "好教养被当成可用筹码",
    trigger: "10-12 岁，星港外勤时段",
    story: "你自幼接受良好教养，习惯性温和助人。公职人员看准“世家孩子怕麻烦、注重名声”的弱点，刻意哄骗你协助处理文件。漏洞爆发后，对方把过错推给你，企图借你的家世制造话题、转移视线，而家族再次选择让你低调承压。",
    tags: ["消极", "高阶挫折", "星港", "星贸出身", "长期后遗症"],
    oneTime: true,
    minAge: 10,
    maxAge: 12,
    choices: [
      { id: "bury-it-for-family", label: "配合压事，内心极度憋屈", effects: { spirit: -6 } },
      { id: "chase-responsibility", label: "主动追责，被说不顾大局", effects: { reputation: -4, charm: -3 } },
      { id: "distance-from-kindness", label: "厌恶善意被消耗，待人疏离", effects: { spirit: -5 } }
    ]
  },
  {
    id: "negative_origin_class_humiliation_orphan",
    locationIds: ["civilian-home-ring", "civilian-neighborhood", ...FAMILY_QUARTER_MAP_LOCATION_IDS.orphan],
    familyIds: ["orphan"],
    title: "阶层碾压式羞辱",
    trigger: "11-12 岁，高阶星域使团到访",
    story: "你只是驻足观望高阶使团仪仗，纯粹向往星河盛世。随行贵族子弟瞥见你的朴素衣着与贫瘠气质，随口轻嘲一句“底层孩童不要挡路”。没有激烈辱骂，却用最平淡的姿态划死了你与上层世界的天堑。",
    tags: ["消极", "高阶挫折", "星港", "孤儿出身", "长期后遗症"],
    oneTime: true,
    minAge: 11,
    maxAge: 12,
    choices: [
      { id: "frozen-shattered-dignity", label: "僵在原地，尊严被彻底碾碎", effects: { spirit: -7 } },
      { id: "flee-humiliated", label: "狼狈逃离，屈辱扎进心底", effects: { charm: -4 } },
      { id: "stare-back-helpless", label: "强行对视，却知自己无力翻盘", effects: { spirit: -5, constitution: -2 } }
    ]
  },
  {
    id: "negative_origin_class_humiliation_merchant",
    locationIds: ["civilian-home-ring", "civilian-neighborhood", ...FAMILY_QUARTER_MAP_LOCATION_IDS.merchant],
    familyIds: ["merchant"],
    title: "更高阶层的冷漠否定",
    trigger: "11-12 岁，高阶星域使团到访",
    story: "你自认家境优渥、眼界远超普通孩童，从容驻足观望使团仪仗。可在顶级星域贵族面前，你的家世、格局与资源依旧不值一提。对方甚至私下点评“地方富庶而已，难登高阶星域台面”，让你第一次意识到自己引以为傲的底气也只是井底之蛙。",
    tags: ["消极", "高阶挫折", "星港", "星贸出身", "长期后遗症"],
    oneTime: true,
    minAge: 11,
    maxAge: 12,
    choices: [
      { id: "hit-by-scale-gap", label: "深受打击，陷入格局自卑", effects: { spirit: -7 } },
      { id: "hold-face-suffer", label: "强行维持体面，内心备受煎熬", effects: { charm: -2, spirit: -4 } },
      { id: "obsess-climb-up", label: "偏执追逐更高层级", effects: { constitution: -3, spirit: -5 } }
    ]
  },
  {
    id: "negative_origin_training_dismissed_orphan",
    locationIds: [...FAMILY_QUARTER_MAP_LOCATION_IDS.military, ...FAMILY_QUARTER_MAP_LOCATION_IDS.orphan],
    familyIds: ["orphan"],
    title: "刻苦训练被判天资拙劣",
    trigger: "9-12 岁，教官单独点评",
    story: "你深知自己无家世兜底，唯有拼命训练才能拥有出路，是全场最刻苦、从不缺训、主动加练的人。可教官却当众冷漠点评：“你再努力也成不了气候，没有天赋、没有背景，浪费训练资源。”这句话直接击碎了你唯一的翻盘信念。",
    tags: ["消极", "高阶挫折", "训练场", "孤儿出身", "长期后遗症"],
    oneTime: true,
    minAge: 9,
    maxAge: 12,
    choices: [
      { id: "quit-advancing", label: "信念崩塌，彻底放弃精进", effects: { combat: -6, constitution: -4 } },
      { id: "twisted-overtrain", label: "偏执硬练，心态越来越焦躁", effects: { spirit: -6 } },
      { id: "numb-continue", label: "表面坚持，内心麻木认命", effects: { combat: -3, spirit: -4 } }
    ]
  },
  {
    id: "negative_origin_training_dismissed_merchant",
    locationIds: [...FAMILY_QUARTER_MAP_LOCATION_IDS.military, ...FAMILY_QUARTER_MAP_LOCATION_IDS.merchant],
    familyIds: ["merchant"],
    title: "努力也被说终究靠家族",
    trigger: "9-12 岁，教官单独点评",
    story: "你放下家世身段，日复一日踏实训练，不愿活在家族光环之下。可教官依旧带着偏见，当众判定你“富家子弟吃不了苦、天赋平庸，所有训练都是徒劳，终究只能靠家族铺路”。你的所有自律与坚持，都被出身标签抹杀。",
    tags: ["消极", "高阶挫折", "训练场", "星贸出身", "长期后遗症"],
    oneTime: true,
    minAge: 9,
    maxAge: 12,
    choices: [
      { id: "doubt-real-skill", label: "极度不甘，陷入自我怀疑", effects: { spirit: -6 } },
      { id: "lie-flat-with-money", label: "赌气摆烂，索性依托家世", effects: { combat: -5, constitution: -3 } },
      { id: "double-down-tight", label: "加倍苦修，心态更加紧绷", effects: { spirit: -4, constitution: -2 } }
    ]
  },
  {
    id: "negative_origin_team_sacrifice_orphan",
    locationIds: [...FAMILY_QUARTER_MAP_LOCATION_IDS.military, ...FAMILY_QUARTER_MAP_LOCATION_IDS.orphan],
    familyIds: ["orphan"],
    title: "团队默认你是牺牲品",
    trigger: "10-12 岁，团队淘汰赛",
    story: "团队考核陷入危机，需要牺牲一人评分保全全队晋级。队友与教官默契地选择了无依无靠、无人撑腰的你。你全程零失误，却仍被默认拿去兜底，没有人询问你的意愿，也没有人替你发声。",
    tags: ["消极", "高阶挫折", "训练场", "孤儿出身", "长期后遗症"],
    oneTime: true,
    minAge: 10,
    maxAge: 12,
    choices: [
      { id: "forced-sacrifice", label: "被迫牺牲，看透人心寒凉", effects: { reputation: -5, spirit: -6 } },
      { id: "object-and-isolated", label: "提出异议，反被全队孤立", effects: { reputation: -6, charm: -3 } },
      { id: "reject-teamwork", label: "从此不信团队协作", effects: { combat: -4 } }
    ]
  },
  {
    id: "negative_origin_team_sacrifice_merchant",
    locationIds: [...FAMILY_QUARTER_MAP_LOCATION_IDS.military, ...FAMILY_QUARTER_MAP_LOCATION_IDS.merchant],
    familyIds: ["merchant"],
    title: "被拿家世当成牺牲理由",
    trigger: "10-12 岁，团队淘汰赛",
    story: "团队考核危机来临，众人默认“你家世优越、不差一次荣誉”，理所当然牺牲你的评分去保全普通队友。所有人都打着公平的旗号，道德绑架你让步、奉献、牺牲。你明明没有失误，却要为团队的平庸兜底。",
    tags: ["消极", "高阶挫折", "训练场", "星贸出身", "长期后遗症"],
    oneTime: true,
    minAge: 10,
    maxAge: 12,
    choices: [
      { id: "compromise-disgusted", label: "无奈妥协，厌恶道德绑架", effects: { spirit: -6 } },
      { id: "refuse-called-bully", label: "拒绝牺牲，被嘲自私仗势", effects: { reputation: -6, charm: -4 } },
      { id: "quit-group-honor", label: "看淡团队荣誉，不再参与集体", effects: { combat: -4, reputation: -3 } }
    ]
  },
  {
    id: "negative_origin_first_savings_zero_orphan",
    locationIds: [...FAMILY_QUARTER_MAP_LOCATION_IDS.merchant, ...FAMILY_QUARTER_MAP_LOCATION_IDS.orphan],
    familyIds: ["orphan"],
    title: "第一次攒金彻底归零",
    trigger: "10-12 岁，首次自主小额投资",
    story: "你省吃俭用、靠零碎零工攒了整整一年微薄薪资，这是你全部的积蓄与安全感。你鼓起勇气参与少年小额投资，渴望靠自己改变贫瘠现状。可资深商户看穿你的迫切与单纯，诱导你满仓入场，随后行情骤然暴跌，你所有积蓄一夜清零。",
    tags: ["消极", "高阶挫折", "交易回廊", "孤儿出身", "长期后遗症"],
    oneTime: true,
    minAge: 10,
    maxAge: 12,
    choices: [
      { id: "fear-risk-forever", label: "彻底畏惧风险，不敢再求财", effects: { wealth: -7 } },
      { id: "insomniac-self-blame", label: "深度自责，彻夜难眠", effects: { spirit: -6 } },
      { id: "hate-market-logic", label: "厌恶商圈逐利，抵触交易", effects: { scholarship: -4, wealth: -3 } }
    ]
  },
  {
    id: "negative_origin_first_savings_zero_merchant",
    locationIds: FAMILY_QUARTER_MAP_LOCATION_IDS.merchant.slice(),
    familyIds: ["merchant"],
    title: "独立试水被精准收割",
    trigger: "10-12 岁，首次自主小额投资",
    story: "你刻意避开家族资源，坚持用自己的零花钱独立尝试投资，想证明自己拥有商业天赋。你认真分析行情、谨慎布局，却被商圈老手精准收割，行情突发崩盘后本金全额亏损。家人没有安慰，只有嘲讽与说教，彻底否定你的独立尝试。",
    tags: ["消极", "高阶挫折", "交易回廊", "星贸出身", "长期后遗症"],
    oneTime: true,
    minAge: 10,
    maxAge: 12,
    choices: [
      { id: "lose-commercial-nerve", label: "极度挫败，不敢再独立尝试", effects: { wealth: -6 } },
      { id: "burn-to-prove", label: "隐忍憋屈，更想证明自己", effects: { spirit: -5, scholarship: -2 } },
      { id: "return-to-family-route", label: "转而依托家族，放弃独立探索", effects: { wealth: -4, scholarship: -3 } }
    ]
  },
  {
    id: "negative_origin_plan_mocked_orphan",
    locationIds: [...FAMILY_QUARTER_MAP_LOCATION_IDS.merchant, ...FAMILY_QUARTER_MAP_LOCATION_IDS.orphan],
    familyIds: ["orphan"],
    title: "规划被当众嘲讽幼稚",
    trigger: "11-12 岁，少年商业分享会",
    story: "你耗费数日熬夜打磨自己的小小商业构想，鼓起勇气站上分享台。可在场世家子弟与商圈长辈却当众轻笑，嘲讽你格局狭隘、眼界贫瘠，直言底层出身的孩子根本不懂真正的星域贸易。你的理想在众目睽睽下被说得廉价又可笑。",
    tags: ["消极", "高阶挫折", "交易回廊", "孤儿出身", "长期后遗症"],
    oneTime: true,
    minAge: 11,
    maxAge: 12,
    choices: [
      { id: "stop-dreaming", label: "理想被碾碎，不敢再畅想未来", effects: { spirit: -7 } },
      { id: "leave-ashamed", label: "窘迫离场，把不甘埋进心底", effects: { charm: -4, spirit: -3 } },
      { id: "imitate-high-end", label: "强行模仿高端格局", effects: { scholarship: -2 } }
    ]
  },
  {
    id: "negative_origin_plan_mocked_merchant",
    locationIds: FAMILY_QUARTER_MAP_LOCATION_IDS.merchant.slice(),
    familyIds: ["merchant"],
    title: "创新规划被长辈否定",
    trigger: "11-12 岁，少年商业分享会",
    story: "你跳出家族固有商业模式，提出全新的轻量化创新贸易规划，想要突破固有圈层束缚。可家族长辈与老牌商户却当众否定你的创新，嘲讽你年少天真、不懂行业深浅、纸上谈兵，直言你终究只是温室里的孩子。",
    tags: ["消极", "高阶挫折", "交易回廊", "星贸出身", "长期后遗症"],
    oneTime: true,
    minAge: 11,
    maxAge: 12,
    choices: [
      { id: "retreat-to-rules", label: "创新信念受挫，不敢突破规则", effects: { scholarship: -5 } },
      { id: "drill-practice-stubbornly", label: "不甘被定义，偏执钻研实战", effects: { spirit: -5, wealth: -3 } },
      { id: "obey-elders-plan", label: "顺从长辈，放弃自我创新", effects: { scholarship: -3, spirit: -4 } }
    ]
  }
];

const QUARTER_MAP_REPEATABLE_DICE_EVENTS = [
  {
    id: "dice_civilian_warm_errand",
    locationIds: ["civilian-home-ring", "civilian-neighborhood"],
    title: "温热跑腿",
    story: "你帮邻里送一份错放的生活包裹，温热封条上还留着刚出补给柜的气息。通廊不长，却足够让你记住几张熟面孔。",
    tags: ["骰子", "平民日常"],
    oneTime: false,
    choices: [
      { id: "polite-explain", label: "礼貌说明", effects: { charm: 1 } },
      { id: "fast-delivery", label: "快速送达", effects: { constitution: 1 } },
      { id: "chat-on-way", label: "和同行 NPC 一路熟悉路况", relationshipEffects: { familiarity: 1 } }
    ]
  },
  {
    id: "dice_military_small_drill",
    locationIds: ["military-training-yard", "military-tactical-gallery"],
    title: "短时反应练习",
    story: "今日训练改为短时反应练习，提示灯一亮就要跟上节奏。汗水和金属地面的冷意让人很快清醒。",
    tags: ["骰子", "军团训练"],
    oneTime: false,
    choices: [
      { id: "standard-finish", label: "标准完成", effects: { combat: 1, constitution: 1 } },
      { id: "review-moves", label: "复盘动作", effects: { scholarship: 1 } },
      { id: "sync-with-npc", label: "和同行 NPC 对节奏", relationshipEffects: { trust: 1 } }
    ]
  },
  {
    id: "dice_research_quiet_record",
    locationIds: ["research-family-lab", "research-observation-room"],
    title: "安静记录",
    story: "你被要求记录一组无害波形或样本颜色，观测仪在安静舱段里轻轻闪烁。每一笔都不用夸张，只要足够准确。",
    tags: ["骰子", "科研观测"],
    oneTime: false,
    choices: [
      { id: "careful-record", label: "细致记录", effects: { scholarship: 1 } },
      { id: "steady-breath", label: "先稳定呼吸", effects: { spirit: 1 } },
      { id: "compare-notes", label: "和同行 NPC 比对记录", relationshipEffects: { familiarity: 1 } }
    ]
  },
  {
    id: "dice_noble_polite_pause",
    locationIds: ["noble-etiquette-hall", "noble-audience-lounge"],
    title: "礼貌停顿",
    story: "一场短暂会面需要你保持礼貌和分寸，香氛、座次和停顿都被纳入礼仪。你只需稳住语气，不必把自己绷得太紧。",
    tags: ["骰子", "贵族社交"],
    oneTime: false,
    choices: [
      { id: "greet-first", label: "主动问候", effects: { charm: 1 } },
      { id: "observe-quietly", label: "安静观察", effects: { scholarship: 1 } },
      { id: "hold-presence", label: "让同行 NPC 觉得你很稳妥", relationshipEffects: { favorability: 1 } }
    ]
  },
  {
    id: "dice_orphan_find_useful_part",
    locationIds: ["orphan-supply-den", "orphan-derelict-cabin"],
    title: "找到可用零件",
    story: "你在安全范围内找到一枚还能用的小零件，旧舱灰尘被鞋尖轻轻带起。它不值大钱，却能让某件设备多撑一季。",
    tags: ["骰子", "流民探索"],
    oneTime: false,
    choices: [
      { id: "hand-to-repair", label: "交给据点维修员", effects: { wealth: 1 } },
      { id: "study-purpose", label: "学习它的用途", effects: { scholarship: 1 } },
      { id: "patch-gear", label: "带回修补装备", effects: { wealth: 1 } }
    ]
  },
  {
    id: "dice_merchant_price_note",
    locationIds: ["merchant-route-hub", "merchant-negotiation-suite"],
    title: "价格波动记录",
    story: "今日行情屏出现短时价格波动，几条航线报价像脉冲一样跳动。短短一眼，也能练出判断风险的直觉。",
    tags: ["骰子", "商贸财团"],
    oneTime: false,
    choices: [
      { id: "record-trend", label: "记录趋势", effects: { scholarship: 1, wealth: 1 } },
      { id: "ask-reason", label: "询问原因", effects: { scholarship: 1 } },
      { id: "compare-judgment", label: "和同行 NPC 比较判断", relationshipEffects: { trust: 1 } }
    ]
  },
  {
    id: "dice_public_adult_routine",
    locationIds: PUBLIC_QUARTER_MAP_LOCATION_IDS.slice(),
    title: "成年公共例行",
    story: "你按成年登记规则完成一次普通公共行动，窗口、提示屏和身份确认都井然有序。流程平淡，却让你更熟悉自己的新边界。",
    tags: ["骰子", "分化后公共"],
    oneTime: false,
    minAge: 18,
    choices: [
      { id: "follow-procedure", label: "遵守流程", effects: { spirit: 1 } },
      { id: "study-notice", label: "补充学习说明", effects: { scholarship: 1 } },
      { id: "check-state", label: "注意身心状态", effects: { spirit: 1 } },
      { id: "routine-with-npc", label: "和同行 NPC 一起走完整个流程", relationshipEffects: { familiarity: 1 } }
    ]
  },
  {
    id: "negative_dice_orphan_setback",
    locationIds: ["orphan-supply-den", "orphan-derelict-cabin"],
    title: "收容街区小挫折",
    story: "街区日常并不总是顺利：物资、人情和疲惫会在某个普通时刻一起压下来。你只能从轻微受挫里调整自己。",
    tags: ["骰子", "消极", "收容街区"],
    oneTime: false,
    negativeFrequency: 4,
    frequencyOffset: 1,
    choices: [
      { id: "mocked-reading", label: "认真看书却被同伴嘲讽假努力", effects: { spirit: -2 } },
      { id: "supply-missed", label: "期待的物资发放落空，空手而归", effects: { wealth: -2 } },
      { id: "ignored-talk", label: "主动搭话被无视，陷入尴尬落寞", effects: { charm: -2 } },
      { id: "sleepless-night", label: "深夜心绪泛滥，莫名低落失眠", effects: { spirit: -3 } },
      { id: "help-refused", label: "想要帮忙却被拒绝，自我怀疑", effects: { spirit: -2 } }
    ]
  },
  {
    id: "negative_dice_starport_setback",
    locationIds: ["civilian-home-ring", "civilian-neighborhood", "public-starport-plaza"],
    title: "星港短暂失落",
    story: "星港人来人往，偶尔也会把差距、迷路和无心的碰撞推到你面前。它们不算灾难，却足够让一个季度变得不那么顺心。",
    tags: ["骰子", "消极", "星港"],
    oneTime: false,
    negativeFrequency: 5,
    frequencyOffset: 2,
    choices: [
      { id: "bright-others", label: "目睹他人光鲜，自身黯淡无光", effects: { spirit: -2 } },
      { id: "wrong-corridor", label: "赶路失误走错通道，白白浪费时间", effects: { scholarship: -1 } },
      { id: "bumped-aside", label: "被路人无意冲撞，无人致歉倍感委屈", effects: { constitution: -1, spirit: -2 } },
      { id: "driven-away", label: "想要观摩学习却被工作人员驱赶", effects: { reputation: -2 } },
      { id: "ship-confusion", label: "看着远航星舰，心生无处可去的迷茫", effects: { spirit: -3 } }
    ]
  },
  {
    id: "negative_dice_training_setback",
    locationIds: ["military-training-yard", "military-tactical-gallery", "public-training-field"],
    title: "训练场低潮",
    story: "训练日里也会有状态糟糕的时候：节奏跟不上、复盘没结果，或者只是看见别人进步更快。你需要承担这点低潮。",
    tags: ["骰子", "消极", "训练场"],
    oneTime: false,
    negativeFrequency: 4,
    frequencyOffset: 3,
    choices: [
      { id: "bad-state", label: "训练状态极差，频频失误自我烦躁", effects: { combat: -2, spirit: -2 } },
      { id: "pace-behind", label: "体能跟不上节奏，被队友悄悄嫌弃", effects: { constitution: -2, reputation: -2 } },
      { id: "stuffy-drill", label: "训练难受，心态愈发浮躁", effects: { spirit: -3 } },
      { id: "review-stuck", label: "复盘全程找不到问题，陷入无力感", effects: { scholarship: -2 } },
      { id: "progress-gap", label: "看着他人进步飞快，自己停滞不前", effects: { combat: -2 } }
    ]
  },
  {
    id: "negative_dice_trade_setback",
    locationIds: ["merchant-route-hub", "merchant-negotiation-suite"],
    title: "星贸回廊吃亏",
    story: "交易回廊的热闹不一定属于你。术语、价格和旁人的从容偶尔会让你觉得自己慢了一步。",
    tags: ["骰子", "消极", "星贸"],
    oneTime: false,
    negativeFrequency: 5,
    frequencyOffset: 4,
    choices: [
      { id: "cannot-buy", label: "看中的小物件无力购买，心生窘迫", effects: { wealth: -2, charm: -1 } },
      { id: "terms-confuse", label: "听不懂行情术语，与旁人格格不入", effects: { scholarship: -2 } },
      { id: "small-swap-loss", label: "小额交换再次吃亏，心态防备加重", effects: { wealth: -2 } },
      { id: "miss-question", label: "想请教问题却不敢开口，错失机会", effects: { scholarship: -1 } },
      { id: "distant-prosperity", label: "看着商圈繁华，深知自己难以触及", effects: { spirit: -3 } }
    ]
  }
];

const QUARTER_MAP_ONE_TIME_EVENT_BY_ID = new Map(QUARTER_MAP_ONE_TIME_EVENTS.map((event) => [event.id, event]));
const QUARTER_MAP_REPEATABLE_DICE_EVENT_BY_ID = new Map(QUARTER_MAP_REPEATABLE_DICE_EVENTS.map((event) => [event.id, event]));
const QUARTER_MAP_EVENT_BY_ID = new Map([...QUARTER_MAP_ONE_TIME_EVENTS, ...QUARTER_MAP_REPEATABLE_DICE_EVENTS].map((event) => [event.id, event]));

const LIFE_PATH_DEFINITIONS = [
  {
    id: "academy-research",
    label: "学院研究路线",
    summary: "把课程、档案与实验记录沉淀成可持续的学术方向。",
    focus: "学识 / 档案 / 研究"
  },
  {
    id: "military-training",
    label: "军务训练路线",
    summary: "通过体能、战术与临场判断积累军务训练倾向。",
    focus: "体质 / 战力 / 纪律"
  },
  {
    id: "starport-trade",
    label: "星港贸易路线",
    summary: "在资源、物流与星港往来中形成商业判断。",
    focus: "财富 / 星港 / 协商"
  },
  {
    id: "public-reputation",
    label: "公共声望路线",
    summary: "用志愿、履历与公开回应建立被信任的社会形象。",
    focus: "声望 / 服务 / 履历"
  },
  {
    id: "free-exploration",
    label: "自由探索路线",
    summary: "保留自主节奏，沿着旧星图、休整与未知领域展开。",
    focus: "精神力 / 探索 / 自主"
  },
  {
    id: "relationship-management",
    label: "关系经营路线",
    summary: "经营可信连接、协作网络与长期稳定的人际回应。",
    focus: "魅力 / 信任 / 网络"
  }
];

const LIFE_PATH_DEFINITION_MAP = new Map(LIFE_PATH_DEFINITIONS.map((route) => [route.id, route]));
const LIFE_PATH_ID_SET = new Set(LIFE_PATH_DEFINITIONS.map((route) => route.id));

const ACTION_LIFE_PATH_EFFECTS = {
  academy: { "academy-research": 8 },
  drill: { "military-training": 8 },
  salon: { "relationship-management": 5, "public-reputation": 4 },
  "starport-social": { "relationship-management": 6, "public-reputation": 3, "starport-trade": 2 },
  volunteer: { "public-reputation": 7, "starport-trade": 2 },
  archive: { "academy-research": 5, "free-exploration": 5 },
  rest: { "free-exploration": 4 }
};


const PRE_DIFFERENTIATION_SPECIAL_ACTION_EVENTS = {
  "civilian": {
    "name": "星际平民家庭",
    "actions": [
      {
        "id": "civilian-special-1",
        "title": "便利店的帮忙",
        "minAge": 3,
        "maxAge": 5,
        "story": "你刚从星港幼儿学堂放学，背着小小的书包回到父母开的便利店，正好赶上星际货运星舰过境，大批船员和乘客涌进店里采购水、食物和应急物资，店里瞬间挤满了人。父亲忙着扫码收款，母亲在货架间穿梭补货，两人忙得满头大汗，看到你回来，父亲笑着招手让你帮忙：“宝贝，帮爸爸把货架上的营养剂摆整齐，再给客人装袋好不好？” 周围的邻里和船员们看着你小小的身影，都温柔地笑着，有人还轻声夸你懂事。",
        "choices": [
          {
            "id": "a",
            "label": "认真帮忙，手脚麻利地把散落的营养剂摆整齐，客人递来物品时主动伸手接，还会说“请拿好”",
            "effectText": "魅力+2，学识+1，体质+1（学会基本社交礼仪，锻炼动手能力）",
            "effects": {
              "charm": 2,
              "scholarship": 1,
              "constitution": 1
            }
          },
          {
            "id": "b",
            "label": "觉得帮忙太无聊，听到店里有小朋友来买星际水果糖，就丢下手里的活，跑去和小朋友打闹、分享糖果",
            "effectText": "魅力+1，体质+1，学识-1（活泼好动但缺乏专注力，忽略了父母的忙碌）",
            "effects": {
              "charm": 1,
              "constitution": 1,
              "scholarship": -1
            }
          }
        ]
      },
      {
        "id": "civilian-special-2",
        "title": "星港快递分拣",
        "minAge": 6,
        "maxAge": 9,
        "story": "父母的便利店承接了星港小型快递代收发业务，每到周末，店里就会堆起来自各个星域的包裹，有船员寄给家人的特产，也有平民寄往其他星域的信件。父亲让你跟着他一起分拣包裹，先按星域分类，再贴上对应区域的标签，分拣完还会让你帮忙给隔壁楼栋的邻居送几封轻便的信件。第一轮分拣时，你发现有一个包裹的标签模糊不清，看不清所属星域，父亲让你自己想办法解决。",
        "choices": [
          {
            "id": "a",
            "label": "主动问父亲，请教如何辨别包裹的所属星域（根据包裹上的星际编码）",
            "nextNode": "followup",
            "effectText": "学识+1，精神力+1，解锁第二轮互动",
            "effects": {
              "scholarship": 1,
              "spirit": 1
            }
          },
          {
            "id": "b",
            "label": "懒得请教，随便把模糊标签的包裹归到临近星域的分类里，还趁父亲不注意，偷偷拆开一个看起来装着特产的包裹看了一眼",
            "effectText": "精神力+1，魅力-1，声望-1（好奇心强但缺乏责任感，分拣出现失误）",
            "effects": {
              "spirit": 1,
              "charm": -1,
              "reputation": -1
            }
          }
        ],
        "nodes": {
          "followup": {
            "story": "父亲教会你看星际编码后，你顺利分清了包裹，分拣完成后，父亲让你送信件，邻居家的老奶奶还给了你一颗星港水果糖作为感谢",
            "choices": [
              {
                "id": "a1",
                "label": "礼貌收下糖果，说“谢谢奶奶”，并安全把信件送到每一户",
                "effectText": "学识+1，声望+1，精神力+1（累计：学识+2，精神力+2，声望+1）",
                "effects": {
                  "scholarship": 1,
                  "reputation": 1,
                  "spirit": 1
                }
              },
              {
                "id": "a2",
                "label": "觉得糖果不好吃，委婉拒绝老奶奶，匆匆送完信件就跑回店里",
                "effectText": "魅力-1，声望+1，精神力+0（累计：学识+2，精神力+1，声望+1，魅力-1）",
                "effects": {
                  "charm": -1,
                  "reputation": 1,
                  "spirit": 0
                }
              }
            ]
          }
        }
      },
      {
        "id": "civilian-special-3",
        "title": "星舰后勤观摩",
        "minAge": 10,
        "maxAge": 12,
        "story": "母亲在星际联邦星舰后勤队担任物资管理员，这周末是后勤队的家属开放日，母亲特意带你进入星舰内部观摩。你跟着母亲穿过整洁的通道，看到工程师们穿着专业的防护服，正在检修星舰引擎，还有后勤队员们有序地搬运补给物资，货架上整齐地摆放着能量块、维修零件和应急药品。母亲一边走一边给你讲解星舰补给的流程，告诉你每一种物资的用途，还指着一台小型维修仪器，问你要不要试着了解它的工作原理，旁边的工程师也笑着邀请你提问。",
        "choices": [
          {
            "id": "a",
            "label": "认真听母亲讲解，记下每一种物资的用途，还主动向工程师提问“这个维修仪器是用来修什么的”“能量块怎么给星舰供电”，全程专注又认真",
            "effectText": "学识+2，精神力+1，魅力+1（求知欲强，善于沟通，积累了星舰相关知识）",
            "effects": {
              "scholarship": 2,
              "spirit": 1,
              "charm": 1
            }
          },
          {
            "id": "b",
            "label": "对母亲的讲解毫无兴趣，只顾着好奇地伸手摸星舰的金属外壳和维修零件，甚至偷偷按了一下仪器的按钮，被工程师及时制止，母亲也批评了你不懂规矩",
            "effectText": "体质+1，学识-1，精神力-1（好奇心强但缺乏纪律性，忽略了安全规则）",
            "effects": {
              "constitution": 1,
              "scholarship": -1,
              "spirit": -1
            }
          }
        ]
      },
      {
        "id": "civilian-special-4",
        "title": "邻里调解小帮手",
        "minAge": 13,
        "maxAge": 15,
        "story": "便利店附近的两户邻居，因为星舰起降的噪音吵了起来——一户邻居是星舰工程师，经常深夜回来，星舰降落的噪音影响了另一户邻居的休息；另一户邻居忍不住上门理论，两人越吵越凶，甚至差点发生争执。父亲正在看店走不开，就让你先过去帮忙传话，安抚双方的情绪，学着大人的样子讲道理，看看能不能暂时平息矛盾。",
        "choices": [
          {
            "id": "a",
            "label": "先走到两户邻居中间，轻声说“叔叔阿姨别吵架啦，有话慢慢说”，然后分别走到两人身边，耐心听他们诉说委屈，再把双方的想法互相传达",
            "nextNode": "followup",
            "effectText": "魅力+2，精神力+1，解锁第二轮互动",
            "effects": {
              "charm": 2,
              "spirit": 1
            }
          },
          {
            "id": "b",
            "label": "觉得调解矛盾太麻烦，听到两人吵架的声音就害怕，直接跑回店里躲在货架后面，不管不顾，直到父亲忙完亲自去调解",
            "effectText": "精神力+1，魅力-2，声望-1（缺乏责任感，不善于应对复杂场景）",
            "effects": {
              "spirit": 1,
              "charm": -2,
              "reputation": -1
            }
          }
        ],
        "nodes": {
          "followup": {
            "story": "在你的传话下，两人的情绪慢慢平复，工程师叔叔说可以尽量调整星舰降落的时间，另一户邻居也表示愿意多理解。这时候，你想起店里有冰镇饮料，决定拿来给两人消消气",
            "choices": [
              {
                "id": "a1",
                "label": "跑回店里拿了两瓶冰镇饮料，递到两人手里，笑着说“叔叔阿姨喝口水，以后互相理解就好啦”",
                "effectText": "魅力+1，声望+2，精神力+0（累计：魅力+3，声望+2，精神力+1）",
                "effects": {
                  "charm": 1,
                  "reputation": 2,
                  "spirit": 0
                }
              },
              {
                "id": "a2",
                "label": "觉得事情已经平息，不用多做什么，直接跑回店里向父亲汇报",
                "effectText": "声望+1，精神力+0，魅力+0（累计：魅力+2，声望+1，精神力+1）",
                "effects": {
                  "reputation": 1,
                  "spirit": 0,
                  "charm": 0
                }
              }
            ]
          }
        }
      },
      {
        "id": "civilian-special-5",
        "title": "便利店夜守",
        "minAge": 16,
        "maxAge": 17,
        "story": "父母收到了星港后勤队的邀请，要去参加年度表彰会，晚上需要很晚才能回来，于是决定让你独自守店一晚。临走前，父母反复叮嘱你：“晚上星港会有晚归的船员来买东西，要礼貌接待，收完钱记得核对，关店前一定要检查门窗，锁好保险柜，注意安全。” 夜幕降临后，星港渐渐安静下来，偶尔有晚归的船员走进店里，买上几瓶能量剂和食物，还有一位老船员不小心把钱包落在了店里，你发现后，纠结着要不要等他回来取。",
        "choices": [
          {
            "id": "a",
            "label": "认真看店，礼貌接待每一位客人，收完钱仔细核对，没有出现差错；发现老船员的钱包后，一直守在店里等他回来，还给钱包里的现金和证件核对清楚，亲手还给老船员，老船员连连向你道谢，还在星港居民群里夸你诚实",
            "effectText": "声望+2，财富+1，精神力+2（责任心强，诚实可靠，赢得了邻里和船员的认可）",
            "effects": {
              "reputation": 2,
              "wealth": 1,
              "spirit": 2
            }
          },
          {
            "id": "b",
            "label": "觉得独自守店很无聊，把店门虚掩着，关上收银台的灯，偷偷拿出全息游戏机玩了起来，有客人进来喊了半天你才回应，态度敷衍；后来客人投诉到星港服务台，父母回来后被通知，还被批评了一顿，店里的营业额也少了很多",
            "effectText": "精神力+1，声望-2，财富-1（缺乏责任心，态度敷衍，影响了便利店的口碑）",
            "effects": {
              "spirit": 1,
              "reputation": -2,
              "wealth": -1
            }
          }
        ]
      }
    ]
  },
  "military": {
    "name": "星际军团世家",
    "actions": [
      {
        "id": "military-special-1",
        "title": "家属区体能拉练",
        "minAge": 3,
        "maxAge": 5,
        "story": "你出生在星际军团世家，父亲是军团的校尉，母亲是军团医护人员，从小在军团家属区长大。周末的清晨，父亲带着你来到家属区的训练场上，和其他军人的孩子一起做幼儿体能拉练。父亲先教你简单的跑跳、平衡木和匍匐前进，还给你们设置了小小的比赛，谁能最先完成所有动作，就能得到一枚小小的军团徽章。其他小朋友都干劲十足，你看着身边的伙伴们，也跟着父亲的指令开始练习，跑了几步就觉得有些累，父亲在一旁鼓励你：“加油，军团的孩子不能轻易放弃！”",
        "choices": [
          {
            "id": "a",
            "label": "听父亲的鼓励，咬着牙坚持练习，不偷懒、不抱怨，努力跟上其他小朋友的节奏，虽然最后没有拿到第一名，但也顺利完成了所有动作，父亲笑着摸了摸你的头，夸你勇敢",
            "effectText": "体质+2，战力+1，精神力+1（坚韧勇敢，有毅力，具备初步的军人素养）",
            "effects": {
              "constitution": 2,
              "combat": 1,
              "spirit": 1
            }
          },
          {
            "id": "b",
            "label": "跑了两步就喊累，揉着腿躲到母亲身后，不管父亲怎么鼓励，都不肯再练习，还哭闹着说“太累了，我不想练了”，最后只能看着其他小朋友完成比赛",
            "effectText": "体质+1，魅力+1，战力-1（娇气怯懦，缺乏毅力，没有养成军人的坚韧特质）",
            "effects": {
              "constitution": 1,
              "charm": 1,
              "combat": -1
            }
          }
        ]
      },
      {
        "id": "military-special-2",
        "title": "军号声中的早训",
        "minAge": 6,
        "maxAge": 9,
        "story": "军团每天清晨六点都会准时吹响军号，这是军团的作息规定，也是每个军人的习惯。自从你上了星港军校预备班，父亲就每天早上准时把你叫醒，让你跟着军团的士兵一起做早操，站军姿、踢正步，感受军营的严谨氛围。第一天早训，你因为前一晚玩全息游戏睡得太晚，早上军号响了，你还是不想起床，父亲站在床边，严肃地对你说：“军团的孩子，要遵守作息，不能赖床，快起来参加早训！”",
        "choices": [
          {
            "id": "a",
            "label": "立刻起床，快速穿好军校预备班的制服，跟着父亲来到训练场，认真跟着士兵们做早操，站军姿时腰背挺直，踢正步时动作标准，没有偷懒",
            "nextNode": "followup",
            "effectText": "体质+1，战力+1，声望+1，解锁第二轮互动",
            "effects": {
              "constitution": 1,
              "combat": 1,
              "reputation": 1
            }
          },
          {
            "id": "b",
            "label": "假装没听见，翻了个身继续睡，等父亲走后，又睡了回笼觉，直到早上八点才起床，错过了早训，被父亲严厉批评，还被取消了周末去军团枪械室参观的资格",
            "effectText": "精神力+1，体质-1，声望-1（缺乏纪律性，懒惰散漫，没有遵守军营作息）",
            "effects": {
              "spirit": 1,
              "constitution": -1,
              "reputation": -1
            }
          }
        ],
        "nodes": {
          "followup": {
            "story": "早训结束后，军团的教官看到你做得很认真，特意过来教你正确的站姿和踢正步技巧，还问你要不要加入晨训小队，以后每天一起训练",
            "choices": [
              {
                "id": "a1",
                "label": "开心地答应教官，主动加入晨训小队，每天按时参加早训，进步越来越大",
                "effectText": "体质+1，战力+0，声望+0（累计：体质+2，战力+1，声望+1）",
                "effects": {
                  "constitution": 1,
                  "combat": 0,
                  "reputation": 0
                }
              },
              {
                "id": "a2",
                "label": "委婉拒绝教官，说“我还要回家吃早饭，下次再加入”，然后跟着父亲回家",
                "effectText": "魅力-1，声望+0，体质+0（累计：体质+1，战力+1，声望+1，魅力-1）",
                "effects": {
                  "charm": -1,
                  "reputation": 0,
                  "constitution": 0
                }
              }
            ]
          }
        }
      },
      {
        "id": "military-special-3",
        "title": "军团枪械认知课",
        "minAge": 10,
        "maxAge": 12,
        "story": "父亲特意带你去军团的枪械室，给你上了一堂专属的枪械认知课。枪械室里摆放着各种型号的能量枪，有小型便携式能量枪，也有大型重型能量枪，父亲一一给你讲解每种枪械的名称、用途和安全使用规则，还特意拿出一把没有装能量弹的小型能量枪，让你触摸感受它的结构，教你如何握枪、瞄准，反复叮嘱你：“没有教官和大人的允许，绝对不能碰装弹的枪械，这是军营的安全规则，也是对自己和他人负责。” 你看着手里的能量枪，心里既好奇又兴奋，忍不住想试试扣扳机的感觉。",
        "choices": [
          {
            "id": "a",
            "label": "认真听父亲讲解安全规则，牢记每一条注意事项，握枪时按照父亲教的姿势，不随意摆弄，也没有偷偷扣扳机，还主动向父亲提问“能量枪的能量弹是怎么装的”“不同的枪械适合不同的场景吗”",
            "effectText": "学识+2，战力+1，精神力+1（遵守规则，求知欲强，具备基本的安全意识）",
            "effects": {
              "scholarship": 2,
              "combat": 1,
              "spirit": 1
            }
          },
          {
            "id": "b",
            "label": "表面上听父亲讲解，心里却一直想着扣扳机，趁父亲转身和枪械管理员说话的时候，偷偷扣了一下扳机，虽然是空枪，没有危险，但还是被父亲发现了，父亲严厉地批评了你，告诉你漠视规则的危害",
            "effectText": "战力+1，精神力-1，声望-1（好奇心强但漠视规则，缺乏安全意识）",
            "effects": {
              "combat": 1,
              "spirit": -1,
              "reputation": -1
            }
          }
        ]
      },
      {
        "id": "military-special-4",
        "title": "边境家书传递",
        "minAge": 13,
        "maxAge": 15,
        "story": "父亲被派往星际边境驻守，常年不能回家，只能通过星际信件和家里联系。母亲因为要在军团医护队上班，没有太多时间，就让你帮忙给父亲写家书，还要帮其他边境军人的家属写家书、整理寄往边境的包裹，把家属们的思念传递给远方的亲人。第一次写家书，你不知道该写些什么，母亲坐在你身边，告诉你：“把你每天的生活、学习情况写下来，再告诉爸爸，我们都很想他，让他注意安全。”",
        "choices": [
          {
            "id": "a",
            "label": "认真听母亲的话，坐在书桌前，一笔一划地写家书，详细写下自己在军校预备班的学习、训练情况，还有家里的琐事，还画了一幅全家福贴在信里，写完后还帮其他家属整理包裹，仔细核对包裹里的物品，生怕遗漏",
            "nextNode": "followup",
            "effectText": "学识+1，魅力+1，声望+1，解锁第二轮互动",
            "effects": {
              "scholarship": 1,
              "charm": 1,
              "reputation": 1
            }
          },
          {
            "id": "b",
            "label": "觉得写家书太麻烦，敷衍地写了几句话“爸爸，我很好，你注意安全”，就不想写了，帮家属整理包裹时也敷衍了事，把包裹弄得乱七八糟，还遗漏了一件物品",
            "effectText": "精神力+1，魅力-1，声望-1（缺乏耐心和责任感，敷衍了事）",
            "effects": {
              "spirit": 1,
              "charm": -1,
              "reputation": -1
            }
          }
        ],
        "nodes": {
          "followup": {
            "story": "家书和包裹寄出去半个月后，父亲寄回了回信，还附带了一枚边境军团的纪念徽章，其他家属也收到了亲人的回信，纷纷来感谢你，母亲也夸你长大了、懂事了",
            "choices": [
              {
                "id": "a1",
                "label": "把父亲的回信小心翼翼地收好，还主动给其他家属读他们亲人的回信，分享他们的喜悦",
                "effectText": "学识+1，魅力+1，声望+0（累计：学识+2，魅力+2，声望+1）",
                "effects": {
                  "scholarship": 1,
                  "charm": 1,
                  "reputation": 0
                }
              },
              {
                "id": "a2",
                "label": "收下父亲的徽章，把回信放在一边，没有主动和其他家属分享，只顾着自己把玩徽章",
                "effectText": "精神力+1，魅力+0，声望+0（累计：学识+1，魅力+1，声望+1，精神力+1）",
                "effects": {
                  "spirit": 1,
                  "charm": 0,
                  "reputation": 0
                }
              }
            ]
          }
        }
      },
      {
        "id": "military-special-5",
        "title": "模拟战术推演",
        "minAge": 16,
        "maxAge": 17,
        "story": "父亲休假回家，特意带你参加了军团的模拟战术推演，这是你第一次近距离接触军团的战术训练。推演在军团的战术指挥室进行，用全息沙盘模拟星际边境防御战，沙盘上清晰地呈现出边境的地形、敌军的位置和我方的兵力部署。父亲让你扮演小队指挥官，负责布置防线、调配兵力，抵御敌军的入侵，还安排了几位军团士兵配合你，听从你的指令。周围的军官们都在看着你，期待着你的表现，你看着全息沙盘，心里既紧张又兴奋。",
        "choices": [
          {
            "id": "a",
            "label": "认真分析沙盘上的战局，结合边境地形的特点，合理布置防线，把兵力分成几小队，分别负责防守、侦查和支援，还主动和身边的士兵讨论战术，听取他们的建议，不断调整部署，最终成功抵御了敌军的模拟入侵，得到了父亲和军官们的认可",
            "effectText": "战力+2，精神力+2，声望+2（有谋略，善于沟通，具备初步的指挥能力，展现出军人的潜质）",
            "effects": {
              "combat": 2,
              "spirit": 2,
              "reputation": 2
            }
          },
          {
            "id": "b",
            "label": "觉得模拟战术推演很无聊，没有认真分析战局，随便在沙盘上布置了兵力，就拿起沙盘上的士兵模型玩了起来，不听士兵的建议，也不调整部署，最终模拟防线被敌军突破，父亲严厉地批评了你，说你没有军人的严谨和责任感",
            "effectText": "体质+1，战力-1，声望-1（缺乏责任感，态度敷衍，没有展现出应有的军人素养）",
            "effects": {
              "constitution": 1,
              "combat": -1,
              "reputation": -1
            }
          }
        ]
      }
    ]
  },
  "research": {
    "name": "星际科研世家",
    "actions": [
      {
        "id": "research-special-1",
        "title": "家庭实验小助手",
        "minAge": 3,
        "maxAge": 5,
        "story": "你的父母都是星际研究院的科研人员，常年专注于星舰技术和星象研究，就连在家，也会做一些简单又安全的儿童科学实验，培养你的科学兴趣。今天下午，父母在家做儿童趣味实验，准备了彩色颜料、透明杯子、清水和棉签，要教你观察色彩混合的变化，还有水的张力实验。母亲把实验器材放在桌子上，让你帮忙递棉签、倒清水，还让你认真观察颜料混合后的颜色变化，把看到的现象告诉她。你看着五颜六色的颜料，心里充满了好奇。",
        "choices": [
          {
            "id": "a",
            "label": "认真帮忙，按照母亲的要求递器材、倒清水，不随便乱动实验物品，眼睛紧紧盯着颜料混合的变化，一边看一边告诉母亲“红色和黄色混在一起变成了橙色”“清水里放一根棉签，水不会洒出来”，全程专注又认真",
            "effectText": "学识+2，精神力+1，魅力+1（好奇心强，专注力强，初步感受到科学的乐趣）",
            "effects": {
              "scholarship": 2,
              "spirit": 1,
              "charm": 1
            }
          },
          {
            "id": "b",
            "label": "觉得实验太无聊，看着看着就失去了耐心，趁父母不注意，打翻了实验杯，把彩色颜料抹在自己的衣服上，还把棉签扔得满地都是，把桌子弄得一团糟，父母无奈地摇了摇头，只好停下来收拾",
            "effectText": "体质+1，学识-1，魅力-1（调皮好动，缺乏专注力，不爱惜实验器材）",
            "effects": {
              "constitution": 1,
              "scholarship": -1,
              "charm": -1
            }
          }
        ]
      },
      {
        "id": "research-special-2",
        "title": "研究院开放日",
        "minAge": 6,
        "maxAge": 9,
        "story": "星际研究院举办年度家属开放日，父母特意带你一起去研究院，让你近距离感受科研的氛围。你跟着父母走进实验室，看到科研人员们穿着白色的实验服，操作着各种精密的仪器，有的在观察星象模型，有的在记录实验数据，还有的在讨论科研方案。父母带着你来到星象模型前，给你讲解星际粒子的运动规律，还有不同星球的特点，旁边的科研叔叔还拿出一个小型星象仪，让你试着操作，观察星轨的变化。",
        "choices": [
          {
            "id": "a",
            "label": "认真听父母和科研叔叔的讲解，不打断他们的谈话，还主动提问“星际粒子是什么样子的”“星轨为什么会变化”，拿到星象仪后，按照叔叔教的方法操作，认真观察星轨，还把看到的现象记在小本子上",
            "nextNode": "followup",
            "effectText": "学识+1，精神力+1，声望+1，解锁第二轮互动",
            "effects": {
              "scholarship": 1,
              "spirit": 1,
              "reputation": 1
            }
          },
          {
            "id": "b",
            "label": "对科研讲解毫无兴趣，只顾着玩旁边的星象模型，不听父母和科研叔叔的话，还偷偷碰了实验室的仪器按钮，导致一台小型仪器暂时故障，被科研叔叔提醒，父母也批评了你不懂规矩",
            "effectText": "精神力+1，学识-1，声望-1（好奇心强但缺乏纪律性，不爱惜科研仪器）",
            "effects": {
              "spirit": 1,
              "scholarship": -1,
              "reputation": -1
            }
          }
        ],
        "nodes": {
          "followup": {
            "story": "开放日最后，研究院举办了儿童科研小问答活动，主持人提问关于星象和实验的简单问题，答对的小朋友可以获得一枚科研纪念徽章，你也积极举手参与",
            "choices": [
              {
                "id": "a1",
                "label": "认真听主持人的问题，结合刚才学到的知识，准确回答出问题，成功获得纪念徽章，科研叔叔还夸你聪明、爱思考",
                "effectText": "学识+1，精神力+1，声望+0（累计：学识+2，精神力+2，声望+1）",
                "effects": {
                  "scholarship": 1,
                  "spirit": 1,
                  "reputation": 0
                }
              },
              {
                "id": "a2",
                "label": "虽然举手了，但因为紧张，没有回答出问题，有些失落，父母安慰你以后多学习，下次一定能答对",
                "effectText": "精神力+0，魅力-1，声望+0（累计：学识+1，精神力+1，声望+1，魅力-1）",
                "effects": {
                  "spirit": 0,
                  "charm": -1,
                  "reputation": 0
                }
              }
            ]
          }
        }
      },
      {
        "id": "research-special-3",
        "title": "星象观测任务",
        "minAge": 10,
        "maxAge": 12,
        "story": "父母正在进行星轨变化研究，需要连续一周记录夜间星轨的变化数据，于是把这个简单的观测任务交给了你，还给你准备了家用天文望远镜和观测日志，详细告诉你观测的时间、方法和注意事项：“每天晚上八点到九点，用天文望远镜观察指定的星群，记录下星轨的位置变化，填写到观测日志里，不能偷懒，也不能编造数据，这些数据对我们的研究很重要。” 接下来的几天，每天晚上都要熬夜观测，有时候天气不好，还需要耐心等待，你渐渐觉得有些枯燥。",
        "choices": [
          {
            "id": "a",
            "label": "牢记父母的叮嘱，每天晚上按时来到阳台，用天文望远镜观测星轨，不管天气好不好，都耐心等待，认真记录每一个数据，还会简单分析星轨的变化规律，一周后，把完整的观测日志交给父母，父母发现你记录的数据准确无误，还能提出自己的简单分析，非常开心",
            "effectText": "学识+2，精神力+2，体质+1（有耐心，责任心强，具备初步的科研观察能力）",
            "effects": {
              "scholarship": 2,
              "spirit": 2,
              "constitution": 1
            }
          },
          {
            "id": "b",
            "label": "觉得观测任务太枯燥，只在第一天晚上认真观测了一次，后面几天都没有按时观测，观测日志上的数据都是编造的，还故意模仿父母的字迹，试图蒙混过关，最后被父母发现，父母严厉地批评了你，告诉你科研需要诚实和严谨",
            "effectText": "精神力+1，学识-2，声望-1（缺乏耐心和责任心，不诚实，违背了科研精神）",
            "effects": {
              "spirit": 1,
              "scholarship": -2,
              "reputation": -1
            }
          }
        ]
      },
      {
        "id": "research-special-4",
        "title": "科普讲座小助教",
        "minAge": 13,
        "maxAge": 15,
        "story": "父母要在星港举办一场星际科普讲座，面向星港的小朋友，讲解星象知识和简单的科学实验，特意让你担任小助教，帮忙布置会场、分发科普资料，还安排你上台给小朋友讲解简单的星象知识，锻炼你的表达能力。讲座前一天，父母帮你准备了讲解稿，教你如何自信大方地表达，如何和小朋友互动，让你多练习几遍。讲座当天，会场来了很多小朋友，你看着台下的人群，心里有些紧张。",
        "choices": [
          {
            "id": "a",
            "label": "提前来到会场，认真帮忙布置桌椅、张贴科普海报、分发资料，把每一份资料都整理得整整齐齐，没有遗漏；轮到你上台讲解时，虽然有些紧张，但还是按照练习的内容，自信大方地讲解星象知识，还主动和小朋友互动，提问简单的问题，得到了小朋友们的欢迎",
            "nextNode": "followup",
            "effectText": "学识+1，魅力+2，声望+1，解锁第二轮互动",
            "effects": {
              "scholarship": 1,
              "charm": 2,
              "reputation": 1
            }
          },
          {
            "id": "b",
            "label": "害怕上台讲解，躲在后台不肯出来，分发资料时也敷衍了事，把资料随便扔在桌子上，有的小朋友没有拿到资料，向你询问，你也不耐烦地打发他们，讲座结束后，还被父母批评了一顿",
            "effectText": "精神力+1，魅力-2，声望-1（胆小怯懦，缺乏责任感，不善于表达）",
            "effects": {
              "spirit": 1,
              "charm": -2,
              "reputation": -1
            }
          }
        ],
        "nodes": {
          "followup": {
            "story": "讲座结束后，很多小朋友围过来问你问题，还有的小朋友让你签名，父母也夸你表现得很好，还让你帮忙整理会场的资料，把科普器材收起来",
            "choices": [
              {
                "id": "a1",
                "label": "耐心回答小朋友的每一个问题，认真签名，然后帮忙整理资料、收拾器材，把会场打扫干净",
                "effectText": "学识+1，魅力+1，声望+1（累计：学识+2，魅力+3，声望+2）",
                "effects": {
                  "scholarship": 1,
                  "charm": 1,
                  "reputation": 1
                }
              },
              {
                "id": "a2",
                "label": "简单回答几个小朋友的问题，就借口累了，不帮忙整理资料，直接跟着父母回家",
                "effectText": "精神力+1，魅力+0，声望+0（累计：学识+1，魅力+2，声望+1，精神力+1）",
                "effects": {
                  "spirit": 1,
                  "charm": 0,
                  "reputation": 0
                }
              }
            ]
          }
        }
      },
      {
        "id": "research-special-5",
        "title": "科研数据整理",
        "minAge": 16,
        "maxAge": 17,
        "story": "父母正在进行星舰航行数据优化研究，需要整理大量的星舰航行数据，筛选出异常值，绘制数据图表，为研究提供支持。这是你第一次接触核心科研数据，父母详细教你如何筛选异常值、如何使用数据绘制工具，还叮嘱你：“数据整理一定要认真、严谨，不能出现任何错误，哪怕是一个小小的数字错误，都可能影响整个研究结果。” 你坐在电脑前，面前是密密麻麻的航行数据，整理了一会儿，就觉得有些枯燥乏味，还出现了几个小小的失误。",
        "choices": [
          {
            "id": "a",
            "label": "牢记父母的叮嘱，克服枯燥，认真整理每一组数据，反复核对，发现自己出现的失误后，及时改正，还主动对照星舰航行记录，筛选出隐藏的异常值，上报给父母。父母看到你整理的数据准确无误，还能发现异常，非常欣慰，夸你具备了初步的科研素养",
            "effectText": "学识+3，精神力+2，声望+2（严谨认真，有责任心，具备初步的科研数据处理能力）",
            "effects": {
              "scholarship": 3,
              "spirit": 2,
              "reputation": 2
            }
          },
          {
            "id": "b",
            "label": "觉得数据整理太枯燥，敷衍了事，随便筛选了几组数据，绘制图表时也没有认真核对，出现了多处错误，还没有筛选出异常值，就把整理好的资料交给父母。父母发现后，严厉地批评了你，告诉你科研容不得半点敷衍，还让你重新整理",
            "effectText": "精神力+1，学识-2，声望-1（缺乏耐心和严谨性，敷衍了事，违背了科研精神）",
            "effects": {
              "spirit": 1,
              "scholarship": -2,
              "reputation": -1
            }
          }
        ]
      }
    ]
  },
  "noble": {
    "name": "星际贵族豪门",
    "actions": [
      {
        "id": "noble-special-1",
        "title": "贵族礼仪启蒙",
        "minAge": 3,
        "maxAge": 5,
        "story": "你出生在星际顶尖贵族豪门，从小就需要学习贵族礼仪，父母特意为你请了专业的礼仪老师，从3岁开始，就教你基础的贵族礼仪。今天，礼仪老师教你走路的姿势、坐姿，还有打招呼的方式，要求你走路时腰背挺直，不弯腰、不奔跑；坐姿要端正，不能东倒西歪；见到长辈和其他贵族，要主动鞠躬打招呼，语气要温和、礼貌。老师一边示范，一边让你反复练习，还时不时纠正你的姿势，你练了一会儿，就觉得有些累，不想再练了。",
        "choices": [
          {
            "id": "a",
            "label": "听礼仪老师的话，不抱怨、不偷懒，反复练习走路、坐姿和打招呼的方式，认真纠正自己的错误姿势，虽然有些累，但还是坚持了下来，老师笑着夸你有贵族风范，父母也为你感到骄傲",
            "effectText": "魅力+2，声望+1，精神力+1（乖巧懂事，有毅力，初步养成贵族礼仪素养）",
            "effects": {
              "charm": 2,
              "reputation": 1,
              "spirit": 1
            }
          },
          {
            "id": "b",
            "label": "觉得礼仪练习太无聊、太累，不听老师的纠正，到处乱跑、乱动，说话大声喧哗，还故意东倒西歪地坐着，被礼仪老师批评，父母也严厉地教育了你，告诉你贵族礼仪是贵族的体面",
            "effectText": "体质+1，魅力-1，声望-1（调皮好动，缺乏耐心，不重视贵族礼仪）",
            "effects": {
              "constitution": 1,
              "charm": -1,
              "reputation": -1
            }
          }
        ]
      },
      {
        "id": "noble-special-2",
        "title": "家族晚宴出席",
        "minAge": 6,
        "maxAge": 9,
        "story": "家族举办小型贵族晚宴，邀请了其他顶尖贵族家庭的成员，父母带你一起出席，目的是让你学习贵族社交礼仪，认识其他贵族子弟，维持家族的体面。晚宴开始前，父母反复叮嘱你：“见到其他贵族长辈和小朋友，要主动礼貌打招呼，交谈时要温和得体，用餐时要遵守贵族用餐礼仪，不能挑食、不能喧哗，不能给家族丢脸。” 晚宴上，穿着华丽礼服的贵族们互相交谈，其他贵族子弟也围在一起玩耍，你站在父母身边，有些不知所措。",
        "choices": [
          {
            "id": "a",
            "label": "牢记父母的叮嘱，主动走到其他贵族长辈面前，鞠躬打招呼，语气温和礼貌；见到其他贵族子弟，也主动上前友好交谈，分享自己的小玩具，用餐时坐姿端正，遵守用餐礼仪，没有出现任何失礼的行为，得到了其他贵族的称赞",
            "nextNode": "followup",
            "effectText": "魅力+1，声望+1，学识+1，解锁第二轮互动",
            "effects": {
              "charm": 1,
              "reputation": 1,
              "scholarship": 1
            }
          },
          {
            "id": "b",
            "label": "害怕和陌生人说话，躲在父母身后不肯出来，见到其他贵族打招呼，也只是低头不说话；用餐时，不小心把食物洒在了礼服上，还大声喧哗，举止失礼，让父母很尴尬，也被其他贵族私下议论",
            "effectText": "精神力+1，魅力-2，声望-1（胆小怯懦，缺乏社交能力，举止失礼）",
            "effects": {
              "spirit": 1,
              "charm": -2,
              "reputation": -1
            }
          }
        ],
        "nodes": {
          "followup": {
            "story": "晚宴中途，主办方向小朋友们发起了小型社交游戏，邀请大家一起参与，获胜的小朋友可以获得一枚贵族纪念勋章，你也被邀请参加",
            "choices": [
              {
                "id": "a1",
                "label": "积极参与游戏，友好配合其他小朋友，不争抢、不耍赖，即使没有获胜，也笑着向获胜的小朋友表示祝贺",
                "effectText": "魅力+1，声望+1，精神力+0（累计：魅力+2，声望+2，学识+1）",
                "effects": {
                  "charm": 1,
                  "reputation": 1,
                  "spirit": 0
                }
              },
              {
                "id": "a2",
                "label": "不想参与游戏，躲在父母身边，拒绝和其他小朋友互动，显得有些孤僻，其他贵族家长看你的眼神也有些异样",
                "effectText": "精神力+1，魅力-1，声望+0（累计：魅力+0，声望+1，学识+1，精神力+1）",
                "effects": {
                  "spirit": 1,
                  "charm": -1,
                  "reputation": 0
                }
              }
            ]
          }
        }
      },
      {
        "id": "noble-special-3",
        "title": "星港贵族学校社交",
        "minAge": 10,
        "maxAge": 12,
        "story": "你进入了星港顶尖贵族学校，学校里的学生都是各个贵族家庭的子弟，注重社交礼仪和家族体面。开学不久，学校里的几位核心贵族子弟举办了一场社交派对，邀请了你参加，目的是让大家互相认识、建立人脉，维持贵族之间的关系。父母告诉你：“参加派对时，要主动融入大家，友好互动，分享小礼物，展现我们家族的风范，不能任性、不能失礼，这对我们家族的社交很重要。” 派对当天，大家都穿着华丽的服装，互相交谈、玩耍，你看着身边的伙伴们，心里有些纠结，不知道该如何融入。",
        "choices": [
          {
            "id": "a",
            "label": "主动上前和大家打招呼，礼貌地介绍自己，拿出准备好的小礼物，分享给其他贵族子弟，和大家一起聊天、玩游戏，主动关心身边的伙伴，不张扬、不傲慢，渐渐赢得了大家的好感，也和几位贵族子弟成为了朋友，为家族积累了人脉",
            "effectText": "魅力+3，声望+2，精神力+1（善于社交，举止得体，懂得维护家族体面）",
            "effects": {
              "charm": 3,
              "reputation": 2,
              "spirit": 1
            }
          },
          {
            "id": "b",
            "label": "觉得贵族社交很虚伪，不喜欢和这些贵族子弟相处，拒绝参加派对，还在学校里故意和其他贵族子弟闹矛盾，说他们“装模作样”，导致其他贵族家庭对你们家族产生了不满，父母也被学校老师约谈",
            "effectText": "精神力+2，魅力-2，声望-1（叛逆任性，不懂得维护家族体面，缺乏社交能力）",
            "effects": {
              "spirit": 2,
              "charm": -2,
              "reputation": -1
            }
          }
        ]
      },
      {
        "id": "noble-special-4",
        "title": "家族事务旁听",
        "minAge": 13,
        "maxAge": 15,
        "story": "随着你渐渐长大，父母开始让你旁听家族事务会议，让你学习如何处理家族产业、应对其他贵族的合作与竞争，了解家族的权力运作和产业布局。会议上，父母和家族长辈们讨论着跨星域的产业合作、贵族之间的利益往来，还有家族产业的优化方案，每一个决策都关乎家族的兴衰。父母让你认真旁听，做好笔记，会后还要向他们汇报自己的想法，锻炼你的决策能力和大局观。你坐在会议桌旁，看着大人们讨论，心里既紧张又好奇。",
        "choices": [
          {
            "id": "a",
            "label": "认真旁听会议，拿出笔记本，详细记录会议内容，包括家族产业的布局、合作方案的细节和长辈们的讨论重点，不随意打断会议，也不玩手机、不打瞌睡；会议结束后，主动向父母汇报自己的笔记，还结合自己的理解，提出了一个简单的产业优化小建议，得到了父母和长辈们的认可",
            "nextNode": "followup",
            "effectText": "学识+1，精神力+1，声望+1，解锁第二轮互动",
            "effects": {
              "scholarship": 1,
              "spirit": 1,
              "reputation": 1
            }
          },
          {
            "id": "b",
            "label": "觉得家族事务会议很无聊，根本没有认真旁听，偷偷拿出手机玩游戏，还在会议上打瞌睡，被父亲严厉地批评，会议结束后，也没有完成父母布置的汇报任务，让父母很失望",
            "effectText": "精神力+1，学识-1，声望-1（缺乏责任心，态度敷衍，不重视家族事务）",
            "effects": {
              "spirit": 1,
              "scholarship": -1,
              "reputation": -1
            }
          }
        ],
        "nodes": {
          "followup": {
            "story": "父母觉得你很有想法，让你参与家族小型产业事务的讨论，和长辈们一起分析合作风险，提出自己的看法，锻炼你的实践能力",
            "choices": [
              {
                "id": "a1",
                "label": "认真分析合作风险，结合会议上学到的知识，提出合理的看法，积极和长辈们讨论，不卑不亢",
                "effectText": "学识+1，精神力+1，声望+1（累计：学识+2，精神力+2，声望+2）",
                "effects": {
                  "scholarship": 1,
                  "spirit": 1,
                  "reputation": 1
                }
              },
              {
                "id": "a2",
                "label": "觉得自己不懂，不敢发表看法，只是坐在旁边听长辈们讨论，没有参与其中",
                "effectText": "精神力+0，魅力-1，声望+0（累计：学识+1，精神力+1，声望+1，魅力-1）",
                "effects": {
                  "spirit": 0,
                  "charm": -1,
                  "reputation": 0
                }
              }
            ]
          }
        }
      },
      {
        "id": "noble-special-5",
        "title": "跨星域贵族联姻准备",
        "minAge": 16,
        "maxAge": 17,
        "story": "为了巩固家族的势力，拓展跨星域的人脉和产业，父母开始为你安排跨星域贵族联姻，带你去见联姻对象——来自另一个顶尖贵族家族的Alpha/Omega，对方举止优雅、学识渊博，身后代表着强大的家族势力。父母反复叮嘱你：“见面时，要认真学习对方星域的礼仪和文化，和对方礼貌交谈，举止得体，维持家族的体面，不能任性、不能失礼，这关乎我们家族的未来。” 见面当天，对方和其父母已经在约定的场所等候，你看着眼前的联姻对象，心里充满了抗拒，却又不得不面对。",
        "choices": [
          {
            "id": "a",
            "label": "牢记父母的叮嘱，提前学习了对方星域的礼仪和文化，见面时主动礼貌打招呼，和对方温和交谈，聊彼此的兴趣爱好、学习和家族产业，举止优雅得体，没有出现任何失礼的行为，得到了对方父母的认可，也让联姻洽谈顺利进行，为家族的合作奠定了基础",
            "effectText": "魅力+2，学识+2，声望+2（成熟稳重，善于社交，懂得维护家族利益和体面）",
            "effects": {
              "charm": 2,
              "scholarship": 2,
              "reputation": 2
            }
          },
          {
            "id": "b",
            "label": "内心十分抗拒联姻，故意违背父母的叮嘱，见面时举止失礼，不主动打招呼，对方和你交谈时，你也敷衍了事，甚至故意和对方吵架，说“我不想联姻，这是你们的意愿，不是我的”，导致联姻洽谈破裂，也让两个家族的关系变得尴尬，父母严厉地批评了你，说你不顾家族利益",
            "effectText": "精神力+2，魅力-2，声望-2（叛逆任性，不顾家族利益，举止失礼）",
            "effects": {
              "spirit": 2,
              "charm": -2,
              "reputation": -2
            }
          }
        ]
      }
    ]
  },
  "orphan": {
    "name": "星际流浪孤儿",
    "actions": [
      {
        "id": "orphan-special-1",
        "title": "据点物资分拣",
        "minAge": 3,
        "maxAge": 5,
        "story": "你是一名星际流浪孤儿，从小在流民据点长大，据点里的流民长辈们都很照顾你，每天都会出去拾荒，带回一些能吃、能用的物资，维持大家的生存。今天，长辈们从星港废弃货仓捡回了一批废弃物资，有过期但还能食用的营养剂、破旧的衣物、能用的零件和少量药品，长辈们让你帮忙分拣，教你辨认哪些物资能吃、哪些能用、哪些有危险需要扔掉，还告诉你：“这些物资是我们活下去的希望，一定要认真分拣，不能浪费，也不能把危险的东西混在一起，不然会受伤。” 你看着眼前的物资，认真地跟着长辈们学习分拣。",
        "choices": [
          {
            "id": "a",
            "label": "认真听长辈们的教导，牢记哪些物资能吃、哪些能用、哪些有危险，小心翼翼地分拣，把能吃的营养剂整理好，放在干净的盒子里，把危险的尖锐零件单独放在一边，不偷懒、不敷衍，长辈们都夸你懂事、能干",
            "effectText": "体质+1，学识+1，精神力+1（懂事能干，有责任心，学会了基本的生存技能）",
            "effects": {
              "constitution": 1,
              "scholarship": 1,
              "spirit": 1
            }
          },
          {
            "id": "b",
            "label": "觉得分拣物资太麻烦，随便把物资混在一起，还把过期变质、不能食用的营养剂和干净的营养剂放在一起，长辈们发现后，耐心地批评了你，还重新教你分拣，告诉你浪费物资就等于放弃活下去的希望",
            "effectText": "精神力+1，体质-1，魅力-1（调皮任性，缺乏责任心，不懂得珍惜生存物资）",
            "effects": {
              "spirit": 1,
              "constitution": -1,
              "charm": -1
            }
          }
        ]
      },
      {
        "id": "orphan-special-2",
        "title": "星港拾荒路线",
        "minAge": 6,
        "maxAge": 9,
        "story": "据点的大孩子阿力，比你大几岁，经常去星港废弃货仓拾荒，经验丰富，他看到你渐渐长大，就决定带你一起去拾荒，教你生存的本领。出发前，阿力反复叮嘱你：“星港废弃货仓很危险，有很多尖锐的废弃零件，还有治安队的巡逻，我带你去安全的区域拾荒，告诉你哪里能找到有用的零件，哪里不能去，一定要跟着我，不能乱跑，不然会受伤，还可能被治安队抓走。” 你跟着阿力来到星港废弃货仓，里面堆满了废弃的星舰零件、破旧的衣物和废弃的食品，环境杂乱又危险。",
        "choices": [
          {
            "id": "a",
            "label": "认真听阿力的叮嘱，紧紧跟着他，不乱跑、不擅自离开，牢记他教的安全路线，只在安全区域拾荒，看到有用的零件就小心翼翼地捡起来，放进随身携带的布袋里，还主动帮阿力捡他够不到的零件",
            "nextNode": "followup",
            "effectText": "体质+1，战力+1，精神力+1，解锁第二轮互动",
            "effects": {
              "constitution": 1,
              "combat": 1,
              "spirit": 1
            }
          },
          {
            "id": "b",
            "label": "觉得阿力太啰嗦，不听他的叮嘱，偷偷跑去危险区域，觉得那里的零件更值钱，结果不小心被废弃零件砸到了胳膊，还被治安队发现，幸好阿力及时拉着你跑了出来，你也被阿力严厉地批评了一顿",
            "effectText": "战力+1，体质-2，精神力-1（鲁莽冲动，不听劝告，缺乏安全意识）",
            "effects": {
              "combat": 1,
              "constitution": -2,
              "spirit": -1
            }
          }
        ],
        "nodes": {
          "followup": {
            "story": "拾荒过程中，你看到不远处有一个闪闪发光的零件，看起来很值钱，但那个区域是阿力说的危险区域，周围有很多尖锐的零件，还有治安队巡逻的身影，你纠结着要不要过去捡",
            "choices": [
              {
                "id": "a1",
                "label": "听从阿力的话，不去危险区域，放弃那个闪闪发光的零件，继续在安全区域拾荒，阿力夸你懂事、听话，知道保护自己",
                "effectText": "体质+1，战力+0，精神力+0（累计：体质+2，战力+1，精神力+1）",
                "effects": {
                  "constitution": 1,
                  "combat": 0,
                  "spirit": 0
                }
              },
              {
                "id": "a2",
                "label": "忍不住诱惑，偷偷跑去危险区域捡那个零件，不小心被尖锐的零件划伤了手，还差点被治安队发现，被阿力批评了一顿，还带你赶紧离开了废弃货仓",
                "effectText": "战力+0，体质-1，精神力+0（累计：体质+1，战力+1，精神力+1，体质-1）",
                "effects": {
                  "combat": 0,
                  "constitution": -1,
                  "spirit": 0
                }
              }
            ]
          }
        }
      },
      {
        "id": "orphan-special-3",
        "title": "据点互助换物",
        "minAge": 10,
        "maxAge": 12,
        "story": "流民据点里的大家，都没有固定的收入和物资，只能靠拾荒获得少量物资，为了更好地生存，大家形成了互助换物的习惯——用自己多余的物资，和别人交换自己需要的东西。你拾荒攒了一些能用的零件和几块破旧的布料，而你最近需要一些食物和常用的药品，于是就带着自己的物资，来到据点的换物区，准备和其他流民交换。换物区里，大家都在公平交换，有人用零件换食物，有人用布料换药品，你看着自己的物资，不知道该如何和别人讨价还价。",
        "choices": [
          {
            "id": "a",
            "label": "主动走到需要零件的流民面前，礼貌地和对方沟通，说明自己需要食物和药品，公平地和对方讨价还价，不骗不抢，不贪心，用自己的零件和布料，换了足够的食物和药品，还和对方友好地聊了起来，搞好了关系，以后有多余的物资，还可以互相交换",
            "effectText": "魅力+2，财富+1，声望+1（懂得公平交易，善于沟通，懂得互助合作，在据点里获得了大家的认可）",
            "effects": {
              "charm": 2,
              "wealth": 1,
              "reputation": 1
            }
          },
          {
            "id": "b",
            "label": "心里很贪心，想换更多的食物和药品，于是偷偷藏起了自己手里最好的零件，用一些破旧、没用的零件和对方交换，还故意夸大自己零件的价值，被对方发现后，大家都指责你不诚实，以后再也没有人愿意和你换物资，你也在据点里变得孤立",
            "effectText": "财富+1，魅力-2，声望-2（贪心自私，不诚实，缺乏互助意识，失去了大家的信任）",
            "effects": {
              "wealth": 1,
              "charm": -2,
              "reputation": -2
            }
          }
        ]
      },
      {
        "id": "orphan-special-4",
        "title": "星港黑市交易",
        "minAge": 13,
        "maxAge": 15,
        "story": "据点的长辈老周，经常去星港黑市交易，把拾荒捡来的值钱零件卖掉，换一些据点急需的食物、药品和生活用品，他看到你已经长大了，就决定带你一起去，教你如何和黑市商人交易，如何辨别真假、避免被骗。出发前，老周反复叮嘱你：“黑市商人都很精明，有些还会骗人，交易时一定要谨慎，不要贪小便宜，要仔细辨别零件的价值，不要被商人的花言巧语骗了，还有，交易时不要多说话，避免惹麻烦。” 你跟着老周来到星港黑市，这里鱼龙混杂，到处都是黑市商人，叫卖声、讨价还价声此起彼伏。",
        "choices": [
          {
            "id": "a",
            "label": "认真听老周的叮嘱，紧紧跟着他，不随意和陌生商人说话，看着老周和商人交易，学习讨价还价的技巧，老周让你试着和一个商人交易时，你仔细辨别零件的价值，谨慎地和商人讨价还价，不贪小便宜，成功把零件卖掉，换了一些物资，没有被骗",
            "nextNode": "followup",
            "effectText": "学识+1，财富+1，精神力+1，解锁第二轮互动",
            "effects": {
              "scholarship": 1,
              "wealth": 1,
              "spirit": 1
            }
          },
          {
            "id": "b",
            "label": "不听老周的叮嘱，好奇地和陌生商人说话，被商人的花言巧语骗了，把自己手里值钱的零件，换了一些没用的破旧物品，还差点和商人发生争执，幸好老周及时制止，才没有惹出更大的麻烦",
            "effectText": "精神力+1，财富-2，声望-1（好奇心强，贪小便宜，缺乏警惕性，容易被骗）",
            "effects": {
              "spirit": 1,
              "wealth": -2,
              "reputation": -1
            }
          }
        ],
        "nodes": {
          "followup": {
            "story": "交易结束后，一个商人拦住你，拿出一些看起来很值钱的小零件，说可以用很少的物资换很多零件，看起来很划算，老周示意你不要上当",
            "choices": [
              {
                "id": "a1",
                "label": "听从老周的话，拒绝了商人的诱惑，跟着老周赶紧离开，没有被骗，老周夸你谨慎、懂事",
                "effectText": "学识+1，财富+1，精神力+0（累计：学识+2，财富+2，精神力+1）",
                "effects": {
                  "scholarship": 1,
                  "wealth": 1,
                  "spirit": 0
                }
              },
              {
                "id": "a2",
                "label": "忍不住贪小便宜，不听老周的劝告，用自己换来的物资，换了那些看起来值钱的零件，结果回到据点后，发现那些零件都是破旧、没用的，被老周批评了一顿，也浪费了宝贵的物资",
                "effectText": "精神力+0，财富-1，声望-1（累计：学识+1，财富+0，精神力+1，声望-1）",
                "effects": {
                  "spirit": 0,
                  "wealth": -1,
                  "reputation": -1
                }
              }
            ]
          }
        }
      },
      {
        "id": "orphan-special-5",
        "title": "据点危机预警",
        "minAge": 16,
        "maxAge": 17,
        "story": "最近，星际流民敌对势力在各个据点附近活动，抢夺物资、伤害流民，据点里的长辈们都很警惕，安排大家轮流放哨，预防敌对势力的袭击。这天，轮到你和其他几个流民放哨，你突然发现据点附近有几个陌生的身影，行踪诡异，时不时往据点里张望，看起来像是敌对势力的探子，你立刻意识到危险，知道据点里的流民们需要提前转移，否则会有生命危险，也会被抢走仅有的物资。",
        "choices": [
          {
            "id": "a",
            "label": "立刻警觉起来，一边悄悄观察探子的动向，一边快速跑回据点，通知所有流民，告诉大家有敌对势力探子，需要赶紧转移；然后主动留下来放哨，观察探子的动向，防止他们提前发动袭击，还帮忙收拾物资，引导大家有序转移，没有出现混乱，也没有人流受伤，成功带领大家转移到了安全的临时据点，得到了据点所有流民的尊敬",
            "effectText": "体质+2，战力+2，精神力+2，声望+2（冷静果断，勇敢无畏，有责任心，具备很强的危机处理能力，成为了据点流民的主心骨）",
            "effects": {
              "constitution": 2,
              "combat": 2,
              "spirit": 2,
              "reputation": 2
            }
          },
          {
            "id": "b",
            "label": "看到探子后，心里非常害怕，没有通知据点里的流民，也没有帮忙收拾物资，自己偷偷跑了，留下据点里的老人、小孩和其他流民，结果敌对势力的人发动袭击，抢走了据点的物资，还伤了几个人，你也因为临阵脱逃，被据点的流民们唾弃，再也没有人愿意收留你",
            "effectText": "精神力+2，魅力-3，声望-3（胆小懦弱，缺乏责任心，临阵脱逃，失去了大家的信任）",
            "effects": {
              "spirit": 2,
              "charm": -3,
              "reputation": -3
            }
          }
        ]
      }
    ]
  },
  "merchant": {
    "name": "星际商贸财团",
    "actions": [
      {
        "id": "merchant-special-1",
        "title": "星舰货仓参观",
        "minAge": 3,
        "maxAge": 5,
        "story": "你的父母是星际商贸财团的创始人，掌控着跨星域的特产贸易，家里有很多艘商贸星舰，专门运输各个星域的特产。今天，父母特意带你参观家族的商贸星舰货仓，货仓里堆满了来自各个星域的特产，有来自阿尔法星域的珍稀香料、贝塔星域的矿石、伽马星域的新鲜水果和营养食品，还有德尔塔星域的手工制品。父母一边带你参观，一边教你辨认不同星域的特产，告诉你每一种特产的产地、价值和用途，还拿起一小包香料，让你闻一闻，告诉你这种香料在贵族圈里很受欢迎，能卖很高的价钱。",
        "choices": [
          {
            "id": "a",
            "label": "认真听父母讲解，牢记每一种特产的产地、价值和用途，不随便乱动货仓里的特产，还主动问父母“这种香料为什么这么贵”“这些矿石能用来做什么”，眼睛紧紧盯着货仓里的特产，充满了好奇，父母笑着夸你有商业天赋",
            "effectText": "学识+2，财富+1，精神力+1（好奇心强，专注力强，初步了解了商业特产知识）",
            "effects": {
              "scholarship": 2,
              "wealth": 1,
              "spirit": 1
            }
          },
          {
            "id": "b",
            "label": "觉得货仓里的特产很有趣，不听父母的话，随便乱动货仓里的特产，把一包珍贵的香料撒了一地，还把水果拿在手里玩，弄脏了很多特产，父母无奈地批评了你，告诉你这些特产都是很珍贵的，不能浪费",
            "effectText": "体质+1，财富-1，魅力-1（调皮好动，缺乏责任感，不懂得珍惜商业物资）",
            "effects": {
              "constitution": 1,
              "wealth": -1,
              "charm": -1
            }
          }
        ]
      },
      {
        "id": "merchant-special-2",
        "title": "家族账本整理",
        "minAge": 6,
        "maxAge": 9,
        "story": "父母的商贸财团每天都有很多跨星域的交易，需要整理大量的商贸账本，记录每一笔交易的收支、特产的运输情况和不同星域的货币汇率。周末，父母让你帮忙整理家族的简易账本，教你认识不同星域的货币，如何计算简单的收支，如何把交易记录分类整理，还叮嘱你：“账本整理一定要认真，不能算错数字，每一笔交易都要记录清楚，不然会影响家族的商贸运营，造成损失。” 你坐在书桌前，面前是密密麻麻的交易记录和不同面额的货币，整理了一会儿，就觉得有些枯燥。",
        "choices": [
          {
            "id": "a",
            "label": "认真听父母的叮嘱，不抱怨、不偷懒，按照父母教的方法，把交易记录分类整理，仔细计算收支，每算完一笔，都反复核对，避免出现错误，还把不同星域的货币分开整理，摆放得整整齐齐",
            "nextNode": "followup",
            "effectText": "学识+1，财富+1，精神力+1，解锁第二轮互动",
            "effects": {
              "scholarship": 1,
              "wealth": 1,
              "spirit": 1
            }
          },
          {
            "id": "b",
            "label": "觉得账本整理太枯燥，敷衍了事，计算收支时随便算一算，不核对，还把交易记录放得乱七八糟，出现了很多错误，被父母发现后，严厉地批评了你，让你重新整理账本",
            "effectText": "精神力+1，学识-1，财富-1（缺乏耐心和责任心，敷衍了事，不重视家族商业事务）",
            "effects": {
              "spirit": 1,
              "scholarship": -1,
              "wealth": -1
            }
          }
        ],
        "nodes": {
          "followup": {
            "story": "整理完账本后，父母让你把账本交给财务叔叔，让财务叔叔核对，财务叔叔发现你整理的账本准确无误，还特意表扬了你，给了你一枚小小的商业纪念币作为奖励",
            "choices": [
              {
                "id": "a1",
                "label": "开心地收下纪念币，礼貌地向财务叔叔道谢，还主动问财务叔叔一些关于账本整理的问题，学习更多的商业知识",
                "effectText": "学识+1，财富+0，精神力+0（累计：学识+2，财富+1，精神力+1）",
                "effects": {
                  "scholarship": 1,
                  "wealth": 0,
                  "spirit": 0
                }
              },
              {
                "id": "a2",
                "label": "收下纪念币后，就拿着纪念币去玩了，没有向财务叔叔道谢，也没有主动学习更多的商业知识",
                "effectText": "精神力+1，魅力-1，财富+0（累计：学识+1，财富+1，精神力+2，魅力-1）",
                "effects": {
                  "spirit": 1,
                  "charm": -1,
                  "wealth": 0
                }
              }
            ]
          }
        }
      },
      {
        "id": "merchant-special-3",
        "title": "商贸伙伴拜访",
        "minAge": 10,
        "maxAge": 12,
        "story": "父母要去拜访一位重要的跨星域商贸伙伴，这位伙伴掌控着贝塔星域的矿石贸易，和家族有着长期的合作关系，父母特意带你一起去，让你学习商业礼仪，了解对方星域的商业规则，认识商业伙伴，为以后接手家族商贸业务做铺垫。出发前，父母教你如何和商业伙伴打招呼、交谈，如何表达合作的诚意，叮嘱你：“交谈时要礼貌得体，认真听对方说话，不要随意打断，不要问不该问的问题，展现我们家族的商业素养和诚意。” 来到对方的商贸公司，商业伙伴已经在会议室等候，你跟着父母走进会议室，心里有些紧张。",
        "choices": [
          {
            "id": "a",
            "label": "牢记父母的叮嘱，主动向商业伙伴鞠躬打招呼，语气礼貌温和；交谈时，认真听父母和商业伙伴讨论合作事宜，不随意打断，也不说话喧哗，偶尔商业伙伴问你问题，你也礼貌、准确地回答，展现出了良好的商业素养，得到了商业伙伴的称赞，也让合作洽谈更加顺利",
            "effectText": "魅力+2，学识+1，声望+1（善于社交，举止得体，具备初步的商业礼仪素养）",
            "effects": {
              "charm": 2,
              "scholarship": 1,
              "reputation": 1
            }
          },
          {
            "id": "b",
            "label": "觉得拜访商业伙伴很无聊，不听父母的叮嘱，在会议室里东张西望，还随意打断父母和商业伙伴的谈话，问了很多不该问的问题，比如“你们赚了多少钱”“这些矿石卖多少钱”，让父母很尴尬，也让商业伙伴觉得你不懂规矩，影响了合作洽谈的氛围",
            "effectText": "魅力-1，声望-1，精神力-1（调皮任性，缺乏商业礼仪，不懂规矩）",
            "effects": {
              "charm": -1,
              "reputation": -1,
              "spirit": -1
            }
          }
        ]
      },
      {
        "id": "merchant-special-4",
        "title": "星港特产摊位",
        "minAge": 13,
        "maxAge": 15,
        "story": "星港举办跨星域特产展销会，父母让你在展销会上摆一个临时摊位，售卖家族的特产，让你学着和顾客讨价还价、介绍商品，体验真实的商贸交易，锻炼你的商业能力。父母给你准备了家族的特色香料、水果和手工制品，教你如何介绍商品的特点、价值，如何根据顾客的需求推荐商品，如何合理讨价还价，还叮嘱你：“要热情接待顾客，诚信经营，不哄抬物价，不欺骗顾客，这样才能留住顾客，赢得好口碑。” 展销会开始后，很多顾客来到你的摊位前，询问商品的价格和特点。",
        "choices": [
          {
            "id": "a",
            "label": "热情接待每一位顾客，主动上前介绍商品的特点、产地和价值，根据顾客的需求推荐合适的商品，讨价还价时合理有度，不哄抬物价，也不轻易让步，诚信经营，耐心解答顾客的每一个问题，很多顾客都愿意在你的摊位上购买商品，还留下了好评",
            "nextNode": "followup",
            "effectText": "魅力+2，财富+1，声望+1，解锁第二轮互动",
            "effects": {
              "charm": 2,
              "wealth": 1,
              "reputation": 1
            }
          },
          {
            "id": "b",
            "label": "态度不好，对顾客不理不睬，顾客询问商品价格时，也不耐烦地回答，讨价还价时还哄抬物价，故意把价格定得很高，欺骗顾客，导致很多顾客都不愿意购买，你的摊位一件商品也没有卖出去，还被顾客投诉到展销会组委会，留下了恶劣记录，父母到场后十分生气，当场批评了你。",
            "effectText": "魅力 - 3，财富 - 2，声望 - 2，精神力 + 1（服务态度差、诚信缺失，损害家族口碑与信誉）",
            "effects": {
              "charm": -3,
              "wealth": -2,
              "reputation": -2,
              "spirit": 1
            }
          }
        ],
        "nodes": {
          "followup": {
            "story": "展销会中途，有一位顾客想大量购买你的特产，希望你能给出优惠价格，你需要决定是否给出优惠，既保证利润，又留住这位大客户",
            "choices": [
              {
                "id": "a1",
                "label": "合理给出优惠价格，和顾客达成协议，还主动留下顾客的联系方式，告诉顾客以后有需要可以联系你，成功留住了大客户，父母也夸你有商业头脑",
                "effectText": "魅力+1，财富+1，声望+0（累计：魅力+3，财富+2，声望+1）",
                "effects": {
                  "charm": 1,
                  "wealth": 1,
                  "reputation": 0
                }
              },
              {
                "id": "a2",
                "label": "不愿意给出优惠价格，态度也变得有些傲慢，告诉顾客“不买就走”，导致顾客转身离开，还在其他顾客面前抱怨你的摊位态度不好，影响了摊位的口碑",
                "effectText": "财富-1，魅力-1，声望-1（累计：魅力+1，财富+0，声望+0）",
                "effects": {
                  "wealth": -1,
                  "charm": -1,
                  "reputation": -1
                }
              }
            ]
          }
        }
      },
      {
        "id": "merchant-special-5",
        "title": "家族航线规划",
        "minAge": 16,
        "maxAge": 17,
        "story": "随着家族生意版图不断扩张，跨星域竞争加剧，旧有航线成本高、途经星域关税上涨，还偶尔遭遇星际海盗袭扰，风险逐年攀升。父母决定开辟一条全新跨星域商贸航线，连接资源星域与消费核心星域，航线涉及：航道安全评估、过路费 / 关税测算、运输周期预估、海盗风险等级、物资适配性、与沿途星域商盟签约条件等关键决策。他们把初步资料交给你，让你参与航线规划会议，独立分析两套备选方案并给出建议—— 方案 A：近道高速线，周期短但过路费高、海盗出没频繁；方案 B：远路安全线，成本低、风险小但耗时久、资金周转慢。你第一次接触家族级战略决策，分析数据时既紧张又郑重，深知一旦判断失误，可能造成巨额亏损甚至危及船队安全。",
        "choices": [
          {
            "id": "a",
            "label": "沉下心，逐条核对星域关税表、星舰油耗、历史海盗袭击记录、货物保鲜周期与资金周转率，把两套方案的成本、收益、风险、周期逐项做成对比表，向父母清晰指出：A 线短期利润高但不可持续，B 线虽慢但稳定、长期收益更优，同时提出增设护航编队 + 分段投保的折中建议。父母对你的严谨、数据意识与大局观十分认可，最终采纳你的优化方案，新航线开通后三个月内实现盈利且零事故。",
            "effectText": "学识 + 3，精神力 + 2，声望 + 2，财富 + 1（具备商业战略思维、数据判断力与风险意识，获得家族核心层信任）",
            "effects": {
              "scholarship": 3,
              "spirit": 2,
              "reputation": 2,
              "wealth": 1
            }
          },
          {
            "id": "b",
            "label": "粗略扫过资料，凭感觉随口给出结论，认为 “A 线更快肯定更好”，既不核对关税数据，也不查海盗风险报告，对保鲜期、资金周转等关键问题一概忽略，给出的建议漏洞百出，甚至混淆了星域坐标与关税标准。父母当场指出多处硬伤，严肃提醒你：星际商贸容不得半点马虎，一个数据错了，可能整条船队都回不来。最终团队重新耗时一周才完成可靠规划，你也错失了参与核心决策的机会。",
            "effectText": "精神力 + 1，学识 - 2，声望 - 1（缺乏严谨、责任心与风险意识，难堪大任）",
            "effects": {
              "spirit": 1,
              "scholarship": -2,
              "reputation": -1
            }
          }
        ]
      }
    ]
  }
};

const AGE_STORY_EVENTS = {
  1: {
    title: "襁褓幼年",
    description: "你在家人呵护下安稳长大，懵懂感知星际居所的氛围，弱小却生命力平稳生长。",
    orphanDescription: "你在民生署收容舱与流民据点的轮转照护中长大，懵懂感知星舰舱室的微光，弱小却生命力平稳生长。",
    choices: [
      { id: "quiet-sleep", label: "安静乖巧熟睡", effectText: "体质 +2，精神力 +1", effects: { constitution: 2, spirit: 1 } },
      { id: "curious-cry", label: "哭闹好奇探索", effectText: "体质 +1，魅力 +2", effects: { constitution: 1, charm: 2 } }
    ]
  },
  2: {
    title: "学步懵懂",
    description: "开始学说话、学走路，对周遭一切充满好奇，能隐约感受到家人的气场与温度。",
    orphanDescription: "开始学说话、学走路，对周遭一切充满好奇，能隐约分辨照护者、舱室与人群的气场温度。",
    choices: [
      { id: "cling-family", label: "黏着家人亲近", orphanLabel: "亲近照护者", effectText: "魅力 +2，精神力 +1", effects: { charm: 2, spirit: 1 } },
      { id: "solo-play", label: "独自摸索玩耍", effectText: "体质 +2，学识 +1", effects: { constitution: 2, scholarship: 1 } }
    ]
  },
  3: {
    title: "家庭启蒙",
    orphanTitle: "收容启蒙",
    description: "父母开始教你星际常识、基础礼仪，为你打开认知世界的第一扇门。",
    orphanDescription: "收容站的值勤人员开始教你星际常识、基础礼仪，为你打开认知世界的第一扇门。",
    choices: [
      { id: "listen-carefully", label: "认真听从教导", effectText: "学识 +3，精神力 +1", effects: { scholarship: 3, spirit: 1 } },
      { id: "playful-study", label: "贪玩无心学习", effectText: "魅力 +2，体质 +1", effects: { charm: 2, constitution: 1 } }
    ]
  },
  4: {
    title: "初识玩伴",
    description: "认识邻里同龄小孩，第一次拥有同龄人社交，有打闹也有陪伴。",
    choices: [
      { id: "group-play", label: "合群一起玩耍", effectText: "魅力 +3，声望 +1", effects: { charm: 3, reputation: 1 } },
      { id: "quiet-watch", label: "安静旁观独处", effectText: "精神力 +2，学识 +1", effects: { spirit: 2, scholarship: 1 } }
    ]
  },
  5: {
    title: "兴趣萌芽",
    description: "你对身边事物产生兴趣，偏向文静求知或是好动冒险两种倾向。",
    choices: [
      { id: "picture-books", label: "翻看绘本读物", effectText: "学识 +3，精神力 +1", effects: { scholarship: 3, spirit: 1 } },
      { id: "run-training", label: "奔跑打闹锻炼", effectText: "战力 +2，体质 +2", effects: { combat: 2, constitution: 2 } }
    ]
  },
  6: {
    title: "学前预备",
    description: "临近入学，家人对你进行作息管教与基础补习，帮你适应规则。",
    orphanDescription: "临近入学，收容系统为你安排作息训练与基础补习，帮你适应规则。",
    choices: [
      { id: "disciplined-routine", label: "听话自律作息", effectText: "学识 +2，声望 +1", effects: { scholarship: 2, reputation: 1 } },
      { id: "free-spirited", label: "随性不受约束", effectText: "魅力 +2，体质 +1", effects: { charm: 2, constitution: 1 } }
    ]
  },
  7: {
    title: "初入校园",
    description: "正式进入星际基础学园，第一次离开家人，踏入集体校园生活。",
    orphanDescription: "正式进入星际基础学园，第一次长时间离开收容环境，踏入集体校园生活。",
    choices: [
      { id: "make-classmates", label: "主动结交同学", effectText: "魅力 +3，声望 +1", effects: { charm: 3, reputation: 1 } },
      { id: "slow-warm", label: "低调谨慎慢热", effectText: "学识 +2，精神力 +2", effects: { scholarship: 2, spirit: 2 } }
    ]
  },
  8: {
    title: "适应校园",
    description: "熟悉课堂节奏与校园规矩，每日上课、课间休息，日子规律平淡。",
    choices: [
      { id: "focus-study", label: "专心埋头课业", effectText: "学识 +3", effects: { scholarship: 3 } },
      { id: "recess-social", label: "热衷课间社交", effectText: "魅力 +3，声望 +1", effects: { charm: 3, reputation: 1 } }
    ]
  },
  9: {
    title: "特长显现",
    description: "你在学业或体能上渐渐展露天赋，老师开始留意你的表现。",
    choices: [
      { id: "deepen-study", label: "深耕课业知识", effectText: "学识 +3，精神力 +1", effects: { scholarship: 3, spirit: 1 } },
      { id: "fitness-training", label: "参加体能训练", effectText: "战力 +3，体质 +1", effects: { combat: 3, constitution: 1 } }
    ]
  },
  10: {
    title: "青春懵懂",
    description: "开始在意他人眼光，注重形象，内心悄悄萌生羞涩与在意。",
    choices: [
      { id: "gentle-social", label: "温柔待人随和", effectText: "魅力 +3，声望 +1", effects: { charm: 3, reputation: 1 } },
      { id: "self-growth", label: "专注自身成长", effectText: "学识 +2，精神力 +2", effects: { scholarship: 2, spirit: 2 } }
    ]
  },
  11: {
    title: "情绪敏感期",
    description: "体内基因开始微动，情绪容易起伏、多思多虑，心性变得细腻。",
    choices: [
      { id: "confide-feelings", label: "找人倾诉排解", effectText: "魅力 +2，精神力 +1", effects: { charm: 2, spirit: 1 } },
      { id: "quiet-digest", label: "独自沉静消化", effectText: "精神力 +3，学识 +1", effects: { spirit: 3, scholarship: 1 } }
    ]
  },
  12: {
    title: "腺体潜伏发育",
    description: "后颈腺体进入隐性发育，你对旁人的气息、气场感知变得灵敏。",
    choices: [
      { id: "notice-auras", label: "刻意留意气场", effectText: "精神力 +3，声望 +1", effects: { spirit: 3, reputation: 1 } },
      { id: "natural-growth", label: "顺其自然无感", effectText: "体质 +2，战力 +1", effects: { constitution: 2, combat: 1 } }
    ]
  },
  13: {
    title: "青春期叛逆",
    description: "自我意识变强，容易和家人、老师产生分歧，有了自己的主见。",
    orphanDescription: "自我意识变强，容易和照护者、老师产生分歧，有了自己的主见。",
    choices: [
      { id: "rational-talk", label: "温和理性沟通", effectText: "魅力 +2，声望 +2", effects: { charm: 2, reputation: 2 } },
      { id: "stubborn-self", label: "坚持自我倔强", effectText: "精神力 +2，战力 +1", effects: { spirit: 2, combat: 1 } }
    ]
  },
  14: {
    title: "学业竞争加剧",
    description: "课业难度提升，学园体能、学科考核变多，同龄人差距逐渐拉开。",
    choices: [
      { id: "chase-academics", label: "拼命追赶学业", effectText: "学识 +3，精神力 +1", effects: { scholarship: 3, spirit: 1 } },
      { id: "physical-focus", label: "侧重体能锻炼", effectText: "战力 +3，体质 +1", effects: { combat: 3, constitution: 1 } }
    ]
  },
  15: {
    title: "感知信息素差异",
    description: "你能隐约分辨成年人不同气息，懵懂理解 Alpha、Beta、Omega 的气场区别。",
    choices: [
      { id: "learn-pheromones", label: "好奇深入了解", effectText: "学识 +3，精神力 +1", effects: { scholarship: 3, spirit: 1 } },
      { id: "stay-calm", label: "保持淡然不在意", effectText: "魅力 +2，声望 +1", effects: { charm: 2, reputation: 1 } }
    ]
  },
  16: {
    title: "确立未来方向",
    description: "三观逐渐成型，开始思考未来从军、科研、经商还是安稳度日。",
    choices: [
      { id: "research-path", label: "偏向学识科研", effectText: "学识 +3，精神力 +2", effects: { scholarship: 3, spirit: 2 } },
      { id: "social-path", label: "偏向人际世俗", effectText: "魅力 +3，财富 +1", effects: { charm: 3, wealth: 1 } }
    ]
  },
  17: {
    title: "分化前夕沉淀",
    description: "距离十八岁分化越来越近，身心敏感、夜里心绪难平，既期待又忐忑。",
    choices: [
      { id: "rest-await", label: "静心休养等待", effectText: "体质 +3，精神力 +1", effects: { constitution: 3, spirit: 1 } },
      { id: "study-differentiation", label: "主动了解分化知识", effectText: "学识 +3，声望 +1", effects: { scholarship: 3, reputation: 1 } }
    ]
  },
  18: {
    title: "成年强制分化",
    description: "年满十八，前往星际官方腺体检测中心，身体躁动、腺体发烫，迎来宿命分化。",
    choices: [
      { id: "accept-fate", label: "平静接受命运", effectText: "精神力 +2，全属性 +1", effects: { constitution: 1, spirit: 3, charm: 1, scholarship: 1, combat: 1, wealth: 1, reputation: 1 } },
      { id: "expect-awakening", label: "内心期待觉醒", effectText: "魅力 +2，战力 +2", effects: { charm: 2, combat: 2 } }
    ]
  }
};
const EARLY_QUARTER_STORY_EVENTS = {
  civilian: {
    name: "星际平民家庭",
    stories: [
      {
        title: "0岁第1季：新生降临，市井暖意",
        description: "你出生在星际平民居所，不大却温馨，母亲是星舰后勤文员，父亲是星域便利店店主。刚降临的你皱着小眉头，被母亲温柔抱在怀里，父亲匆匆关掉便利店的收银机，飞奔回来守在你身边，手里还攥着一颗温热的星域软糖（给你留的）。周围是邻里的道贺声，空气中飘着便利店的甜香，简单却满是烟火气。",
        choices: [
          { id: "quiet", label: "安静依偎在母亲怀里，乖乖吮吸营养剂", effects: { constitution: 2, spirit: 1, charm: -1 }, effectText: "体质 + 2，精神力 + 1，魅力 - 1（过于安静，不显眼）" },
          { id: "active", label: "哭闹不止，挥舞小手想要抓父亲手里的软糖", effects: { spirit: 2, charm: 1, constitution: -1 }, effectText: "精神力 + 2，魅力 + 1，体质 - 1（哭闹消耗体力）" }
        ]
      },
      {
        title: "0岁第2季：市井初探，小意外",
        description: "母亲休完产假，带你一起去父亲的便利店帮忙。你被放在柜台后的婴儿篮里，看着来来往往的顾客，听着父亲热情地招呼客人、扫码收款。有个小顾客好奇地凑过来，给你递了一颗彩色的星际水果糖，母亲笑着帮你收下，示意你谢谢对方。这时，柜台旁的货架不小心晃了一下，一小包零食掉在婴儿篮边。",
        choices: [
          { id: "quiet", label: "乖乖坐着，盯着小顾客看，不哭闹也不伸手", effects: { spirit: 1, scholarship: 1, charm: -1 }, effectText: "精神力 + 1，学识 + 1（观察周围，悄悄积累认知），魅力 - 1（显得有些冷漠）" },
          { id: "active", label: "伸手去抓掉落的零食，不小心打翻了身边的小水杯", effects: { constitution: -1, charm: 1 }, effectText: "体质 - 1（沾了凉水，轻微受凉），魅力 + 1（活泼可爱，被顾客夸赞），解锁“调皮”特质", trait: "调皮" }
        ]
      },
      {
        title: "0岁第3季：邻里相伴，小热闹",
        description: "周末，邻里们聚在居所楼下的小广场，摆上简易的星际烧烤，大人们聊天说笑，小孩们在一旁追逐打闹。母亲抱着你，和邻居阿姨聊天，邻居家的小姐姐（3 岁）凑过来，轻轻摸你的小脸蛋，还给你带来了一个简易的布制星舰玩具。你盯着玩具，又看了看小姐姐，心里满是好奇。",
        choices: [
          { id: "quiet", label: "伸手接过玩具，乖乖抱着，不闹不吵", effects: { spirit: 1, charm: 1, combat: -1 }, effectText: "精神力 + 1，魅力 + 1，战力 - 1（过于温顺，缺乏活力）" },
          { id: "active", label: "一把推开玩具，还伸手去扯小姐姐的头发", effects: { combat: 1, charm: -2, spirit: 1 }, effectText: "战力 + 1（反应敏捷），魅力 - 2（显得调皮不懂事），精神力 + 1（情绪外放）" }
        ]
      },
      {
        title: "0岁第4季：周岁小宴，烟火温情",
        description: "你满 1 岁啦，父母没有举办盛大的仪式，却邀请了亲近的邻里和家人，在家中摆了一桌简单的饭菜。桌上有你能吃的软烂辅食，还有父亲特意给你做的小型星舰造型蛋糕。大家围着你，唱着星际周岁歌谣，母亲把你放在地上，让你尝试自己站起来，父亲在一旁张开双臂，等着扶你。",
        choices: [
          { id: "quiet", label: "努力尝试站稳，朝着父亲的方向挪了两步", effects: { constitution: 2, spirit: 1, scholarship: -1 }, effectText: "体质 + 2，精神力 + 1，学识 - 1（专注于站立，忽略了周围的氛围）" },
          { id: "active", label: "坐在地上不肯动，哭闹着要母亲抱", effects: { charm: 1, constitution: -1, spirit: -1 }, effectText: "魅力 + 1（被家人心疼），体质 - 1（缺乏锻炼），精神力 - 1（情绪不稳定）" }
        ]
      },
      {
        title: "1岁第1季：蹒跚学爬，家里探险",
        description: "你已经能熟练翻身，开始尝试爬行，家里的每一个角落都成了你的 “探险地”。母亲把家里危险的东西都收了起来，只留下安全的玩具和绘本。你爬到大门口，想要去够门把手；又爬到厨房门口，闻到了母亲做饭的香味，忍不住朝着厨房的方向爬去，不小心撞到了桌腿。",
        choices: [
          { id: "quiet", label: "揉了揉撞疼的额头，继续朝着厨房爬", effects: { constitution: 1, spirit: 1, charm: -1 }, effectText: "体质 + 1（坚韧），精神力 + 1（执着），魅力 - 1（有些倔强）" },
          { id: "active", label: "被撞疼后哭闹起来，等着母亲过来安抚", effects: { charm: 1, constitution: -1, spirit: -1 }, effectText: "魅力 + 1（被母亲呵护），体质 - 1（不耐疼），精神力 - 1（情绪脆弱）" }
        ]
      },
      {
        title: "1岁第2季：认知萌芽，模仿日常",
        description: "你开始模仿父母的日常动作，母亲做饭时，你坐在一旁，学着母亲搅拌的样子挥舞小手；父亲关店回家后，会坐在沙发上看星际新闻，你也凑过去，学着父亲的样子，盯着光屏发呆。有一次，父亲给你念星际常识绘本，你跟着父亲的语气，发出模糊的音节，父母都格外惊喜。",
        choices: [
          { id: "quiet", label: "认真模仿父母的动作，跟着念绘本音节", effects: { scholarship: 2, charm: 1, combat: -1 }, effectText: "学识 + 2，魅力 + 1，战力 - 1（过于安静，缺乏肢体活动）" },
          { id: "active", label: "不耐烦地推开绘本，去抓桌上的零食包装", effects: { constitution: 1, scholarship: -1, charm: -1 }, effectText: "体质 + 1（动手能力强），学识 - 1（不专注），魅力 - 1（显得调皮）" }
        ]
      },
      {
        title: "1岁第3季：玩伴相聚，小摩擦",
        description: "母亲带着你去邻里家串门，邻里家有个和你差不多大的小男孩，手里拿着一个塑料星际飞船玩具。你看到后，立刻凑过去，想要和他一起玩，可小男孩不愿意分享，把玩具抱在怀里，还推了你一下。你踉跄了一下，站在原地，不知道该怎么办。",
        choices: [
          { id: "quiet", label: "哭闹着要母亲帮忙，非要玩那个玩具", effects: { charm: -2, spirit: 1, constitution: -1 }, effectText: "魅力 - 2（显得任性），精神力 + 1（情绪外放），体质 - 1（哭闹消耗体力）" },
          { id: "active", label: "转身去玩旁边的积木，不再执着于玩具", effects: { spirit: 2, scholarship: 1, charm: 1 }, effectText: "精神力 + 2（情绪稳定），学识 + 1（动手搭积木，锻炼思维），魅力 + 1（懂事乖巧）" }
        ]
      },
      {
        title: "1岁第4季：扶站学步，成长印记",
        description: "你已经能扶着墙壁慢慢站立，甚至能扶着家具走几步。父母特意给你准备了学步车，让你练习走路。有一天，父亲下班回家，把你放在学步车里，在前面引导你，母亲在后面保护你，家里满是欢声笑语。你看着父亲的身影，想要朝着他的方向走过去，却不小心撞到了学步车的轮子。",
        choices: [
          { id: "quiet", label: "不放弃，扶着学步车，继续朝着父亲走", effects: { constitution: 2, spirit: 1, charm: -1 }, effectText: "体质 + 2，精神力 + 1，魅力 - 1（有些倔强，不懂得求助）" },
          { id: "active", label: "坐在地上，委屈地瘪着嘴，等着父母过来扶你", effects: { charm: 1, constitution: -1, spirit: 1 }, effectText: "魅力 + 1（被父母心疼），体质 - 1（缺乏毅力），精神力 + 1（依赖家人）" }
        ]
      },
      {
        title: "2岁第1季：牙牙学语，市井小话痨",
        description: "你已经能蹦出模糊的单字，父母教你喊“爸爸、妈妈、糖糖”，便利店的常客们总爱逗你说话。你站在婴儿学步栏里，看着父亲扫码收款，邻居小朋友趴在柜台上和你对视，手里举着一颗水果软糖。",
        choices: [
          { id: "quiet", label: "怯生生跟着父母念单词，不敢抬头看小朋友", effects: { scholarship: 2, spirit: 1, charm: -1 }, effectText: "学识 + 2，精神力 + 1，魅力 - 1（内向腼腆）" },
          { id: "active", label: "大声咿呀乱叫，伸手去抢小朋友手里的糖", effects: { charm: 1, combat: 1, scholarship: -1 }, effectText: "魅力 + 1，战力 + 1，学识 - 1（调皮好动）" }
        ]
      },
      {
        title: "2岁第2季：邻里小帮工，笨拙暖心",
        description: "周末邻里聚餐，母亲让你帮忙递纸巾、送小零食，你摇摇晃晃走路，动作笨拙却认真。隔壁阿姨夸你懂事，给你塞了一块小蛋糕，你手里拿着蛋糕，不知道该先吃还是先帮忙。",
        choices: [
          { id: "quiet", label: "乖乖把东西递完，再小口吃蛋糕", effects: { spirit: 1, charm: 2, constitution: -1 }, effectText: "精神力 + 1，魅力 + 2，体质 - 1（克制食欲）" },
          { id: "active", label: "扔下东西直接吃蛋糕，弄脏了小衣服", effects: { constitution: 1, spirit: -1, charm: -1 }, effectText: "体质 + 1，精神力 - 1，魅力 - 1（任性贪吃）" }
        ]
      },
      {
        title: "2岁第3季：小意外，独立小考验",
        description: "你在广场玩耍时不小心摔了一跤，膝盖微微发红，父母就在不远处收拾东西，暂时没看到你。周围的小朋友停下玩耍，看着你。",
        choices: [
          { id: "quiet", label: "自己爬起来拍掉灰尘，不哭不闹", effects: { constitution: 2, spirit: 1, charm: -1 }, effectText: "体质 + 2，精神力 + 1，魅力 - 1（倔强独立）" },
          { id: "active", label: "坐在地上大哭，等着父母过来抱", effects: { charm: 1, constitution: -1, spirit: -1 }, effectText: "魅力 + 1，体质 - 1，精神力 - 1（依赖娇气）" }
        ]
      },
      {
        title: "2岁第4季：三岁成长礼，烟火期许",
        description: "你满 3 岁啦！父母在家做了星舰小蛋糕，邻里送来手工玩具，你终于能稳稳走路、说短句。父亲抱着你看便利店的星空灯，告诉你以后要做勇敢懂事的小朋友，即将开启独立探索。",
        choices: [
          { id: "quiet", label: "抱着父母撒娇，乖乖许下小愿望", effects: { charm: 2, spirit: 1, combat: -1 }, effectText: "魅力 + 2，精神力 + 1，战力 - 1（温顺乖巧）；解锁：3 岁未分化，可进入自由成长阶段", trait: "自由成长阶段" },
          { id: "active", label: "挣脱怀抱乱跑，兴奋地大喊大叫", effects: { combat: 1, constitution: 1, reputation: -1 }, effectText: "战力 + 1，体质 + 1，声望 - 1（活泼吵闹）；解锁：3 岁未分化，可进入自由成长阶段", trait: "自由成长阶段" }
        ]
      }
    ]
  },
  military: {
    name: "星际军团世家",
    stories: [
      {
        title: "0岁第1季：军营新生，铁血温情",
        description: "你出生在星际军团家属区，居所简洁干练，墙上挂着父母的军功勋章，空气中隐约有淡淡的硝烟味。父亲是军团基层指挥官，刚结束边境执勤，就匆匆赶回医院，穿着还没来得及换下的军装，小心翼翼地抱着你，眼神里满是铁血之外的温柔。母亲是军团医护兵，温柔却干练，熟练地给你检查身体，轻声安抚着你。",
        choices: [
          { id: "quiet", label: "安静靠在父亲怀里，感受着军装的粗糙质感", effects: { constitution: 2, combat: 1, charm: -1 }, effectText: "体质 + 2，战力 + 1，魅力 - 1（过于沉稳，不显眼）" },
          { id: "active", label: "哭闹不止，抗拒父亲粗糙的手掌触碰", effects: { spirit: 2, charm: 1, constitution: -1 }, effectText: "精神力 + 2，魅力 + 1，体质 - 1（哭闹消耗体力，不耐受陌生触碰）" }
        ]
      },
      {
        title: "0岁第2季：军营初探，军号声中成长",
        description: "母亲带着你去军团训练场外围，观看士兵们训练。整齐的队列、有力的呐喊声、星舰起降的轰鸣声，构成了军营独有的旋律。你被放在婴儿车里，看着士兵们踢正步、练格斗，眼神满是好奇。这时，军团的军号声突然响起，尖锐的声音让你忍不住缩了缩身子。",
        choices: [
          { id: "quiet", label: "安静观察，不哭闹，甚至跟着军号声挥舞小手", effects: { spirit: 1, combat: 1, scholarship: -1 }, effectText: "精神力 + 1，战力 + 1，学识 - 1（专注于观察，忽略周围其他声音）" },
          { id: "active", label: "被军号声吓哭，紧紧攥着母亲的衣角", effects: { constitution: -1, charm: 1, spirit: -1 }, effectText: "体质 - 1（受惊吓，身体紧绷），魅力 + 1（被母亲温柔安抚），精神力 - 1（胆小敏感）" }
        ]
      },
      {
        title: "0岁第3季：军功印记，父亲的陪伴",
        description: "父亲难得休息，在家陪你玩耍，他把你放在腿上，给你讲边境执勤的故事（虽然你听不懂），还拿出自己的军功勋章，轻轻放在你手里。勋章冰凉坚硬，上面刻着星际军团的标志，你盯着勋章，要么攥紧，要么随手扔掉。母亲在一旁看着，笑着拍下这温馨的一幕。",
        choices: [
          { id: "quiet", label: "紧紧攥着勋章，不松手，认真听父亲讲故事", effects: { spirit: 2, combat: 1, charm: -1 }, effectText: "精神力 + 2，战力 + 1，魅力 - 1（过于严肃，缺乏孩童的活泼）" },
          { id: "active", label: "一把扔掉勋章，伸手去抓父亲的军帽", effects: { combat: 1, charm: 1, scholarship: -1 }, effectText: "战力 + 1（反应敏捷），魅力 + 1（活泼可爱），学识 - 1（不懂得珍惜）" }
        ]
      },
      {
        title: "0岁第4季：周岁庆典，军营的祝福",
        description: "你满 1 岁啦，军团的叔叔阿姨们特意前来祝贺，每个人都身着军装，给你带来了小型的军事玩具（迷你星舰、小军装）。父亲抱着你，让你坐在自己的肩头，接受大家的祝福，士兵们还特意为你奏起了简易的军乐。母亲给你准备了周岁蛋糕，上面印着军团的标志。",
        choices: [
          { id: "quiet", label: "坐在父亲肩头，安静接受祝福，不闹不吵", effects: { constitution: 1, spirit: 2, charm: -1 }, effectText: "体质 + 1，精神力 + 2，魅力 - 1（显得沉稳，却有些冷漠）" },
          { id: "active", label: "在父亲肩头哭闹，伸手去扯士兵叔叔的帽徽", effects: { charm: 1, combat: -1, spirit: -1 }, effectText: "魅力 + 1（活泼调皮，被大家喜欢），战力 - 1（动作鲁莽），精神力 - 1（情绪不稳定）" }
        ]
      },
      {
        title: "1岁第1季：蹒跚学爬，军营探险",
        description: "你开始尝试爬行，军营家属区的每一个角落都成了你的 “探险地”。父亲特意在客厅铺上了训练垫，让你在上面爬行，还会用小型玩具引导你，锻炼你的肢体协调性。有一次，你爬到大门口，想要去够门口的军靴，不小心撞到了门框。",
        choices: [
          { id: "quiet", label: "揉了揉撞疼的额头，继续朝着军靴爬去", effects: { constitution: 2, combat: 1, spirit: -1 }, effectText: "体质 + 2，战力 + 1，精神力 - 1（过于倔强，不懂得退缩）" },
          { id: "active", label: "被撞疼后，趴在地上哭闹，等着父亲过来扶你", effects: { charm: 1, constitution: -1, combat: -1 }, effectText: "魅力 + 1（被父亲心疼），体质 - 1（不耐疼），战力 - 1（缺乏坚韧）" }
        ]
      },
      {
        title: "1岁第2季：模仿军训，小军人初显",
        description: "你开始模仿父亲的军训动作，父亲站军姿时，你也跟着站（虽然站不稳）；父亲练格斗时，你也挥舞着小手，模仿出拳的动作。母亲笑着给你穿上迷你小军装，你穿着不合身的军装，走起路来摇摇晃晃，像个小军人。有一次，父亲教你敬军礼，你却总也学不会。",
        choices: [
          { id: "quiet", label: "认真跟着父亲学敬军礼，反复练习不放弃", effects: { combat: 2, spirit: 1, scholarship: -1 }, effectText: "战力 + 2，精神力 + 1，学识 - 1（专注于动作，忽略认知积累）" },
          { id: "active", label: "不耐烦地扔掉小军装，跑去玩军事玩具", effects: { constitution: 1, combat: -1, charm: -1 }, effectText: "体质 + 1（动手能力强），战力 - 1（缺乏耐心），魅力 - 1（显得调皮）" }
        ]
      },
      {
        title: "1岁第3季：玩伴相聚，军营里的小比拼",
        description: "母亲带着你去军团家属区的小伙伴聚集地，那里有很多和你差不多大的小孩，都是军人的孩子。有个小男孩拿着迷你玩具枪，在模仿士兵射击，你看到后，也想要玩，可小男孩不愿意，还和你比起了爬行速度。你看着他，要么接受比拼，要么退缩。",
        choices: [
          { id: "quiet", label: "接受比拼，努力爬行，想要超过小男孩", effects: { constitution: 2, combat: 1, charm: -1 }, effectText: "体质 + 2，战力 + 1，魅力 - 1（过于好胜，显得鲁莽）" },
          { id: "active", label: "退缩到母亲身边，不愿意参与比拼", effects: { spirit: 1, charm: 1, combat: -2 }, effectText: "精神力 + 1（情绪稳定），魅力 + 1（懂事乖巧），战力 - 2（缺乏竞争力）" }
        ]
      },
      {
        title: "1岁第4季：扶站学步，小军人的第一步",
        description: "你已经能扶着墙壁慢慢站立，父亲特意在训练垫上设置了简易的障碍，引导你扶着障碍走路，锻炼你的平衡能力。母亲在一旁保护你，看着你一步步往前走，眼里满是欣慰。有一次，你想要跨过一个小障碍，却不小心摔倒了，膝盖擦破了一点皮。",
        choices: [
          { id: "quiet", label: "自己慢慢爬起来，继续往前走，不哭闹", effects: { constitution: 2, combat: 1, spirit: 1 }, effectText: "体质 + 2，战力 + 1，精神力 + 1（坚韧勇敢）" },
          { id: "active", label: "摔倒后哭闹不止，等着父母过来安抚", effects: { charm: 1, constitution: -1, combat: -1 }, effectText: "魅力 + 1（被父母心疼），体质 - 1（不耐疼），战力 - 1（缺乏毅力）" }
        ]
      },
      {
        title: "2岁第1季：小小军姿，铁血启蒙",
        description: "父亲在家训练基础站姿，把你放在训练垫上，教你并拢双脚、抬头挺胸，你摇摇晃晃模仿，军团叔叔路过家门，笑着对你敬礼。军号声远远传来，你身体不自觉绷紧。",
        choices: [
          { id: "quiet", label: "努力站稳模仿军姿，不晃动不哭闹", effects: { combat: 2, spirit: 1, charm: -1 }, effectText: "战力 + 2，精神力 + 1，魅力 - 1（严肃刻板）" },
          { id: "active", label: "不耐烦跑开，去抓地上的玩具枪", effects: { constitution: 1, combat: -1, scholarship: -1 }, effectText: "体质 + 1，战力 - 1，学识 - 1（好动散漫）" }
        ]
      },
      {
        title: "2岁第2季：军营小玩伴，勇气比拼",
        description: "军团家属院的小伙伴们比赛“勇敢者游戏”——独自走过短平衡木。其他小朋友都勇敢尝试，你站在起点，看着小小的平衡木，有些紧张。",
        choices: [
          { id: "quiet", label: "咬牙走上平衡木，稳稳走到终点", effects: { constitution: 2, combat: 1, spirit: -1 }, effectText: "体质 + 2，战力 + 1，精神力 - 1（好胜执着）" },
          { id: "active", label: "躲到母亲身后，拒绝参与比拼", effects: { spirit: 1, charm: 1, combat: -2 }, effectText: "精神力 + 1，魅力 + 1，战力 - 2（胆小怯懦）" }
        ]
      },
      {
        title: "2岁第3季：轻伤不下线，军人品格",
        description: "你跟着父亲慢跑时不小心蹭破手指，一点点血丝渗出来，父亲拿出医护包，让你自己试着按压止血，母亲在一旁轻声鼓励。",
        choices: [
          { id: "quiet", label: "自己按住伤口，忍住不哭", effects: { spirit: 2, combat: 1, charm: -1 }, effectText: "精神力 + 2，战力 + 1，魅力 - 1（坚韧隐忍）" },
          { id: "active", label: "扑进母亲怀里大哭，拒绝自己处理", effects: { charm: 1, constitution: -1, combat: -1 }, effectText: "魅力 + 1，体质 - 1，战力 - 1（娇气脆弱）" }
        ]
      },
      {
        title: "2岁第4季：三岁授勋礼，小军人诞生",
        description: "你满 3 岁！军团为你准备了迷你军功章，父亲亲自为你别在小军装胸口，士兵们列队为你鼓掌。你能清晰喊出“敬礼”，正式具备军团子弟的基础品格，即将独立成长。",
        choices: [
          { id: "quiet", label: "标准回礼，安静接受祝福", effects: { combat: 2, spirit: 1, charm: -1 }, effectText: "战力 + 2，精神力 + 1，魅力 - 1（沉稳庄重）；解锁：3 岁未分化，坚韧特质强化", trait: "坚韧特质强化" },
          { id: "active", label: "拿着勋章乱跑，和小伙伴打闹", effects: { constitution: 1, charm: 1, reputation: -1 }, effectText: "体质 + 1，魅力 + 1，声望 - 1（调皮不守礼）；解锁：3 岁未分化，坚韧特质强化", trait: "坚韧特质强化" }
        ]
      }
    ]
  },
  research: {
    name: "星际科研世家",
    stories: [
      {
        title: "0岁第1季：科研新生，书香为伴",
        description: "你出生在星际研究院家属区，居所摆满了科研资料、小型实验模型和星际科普绘本，空气中飘着淡淡的墨水味和实验试剂的清香味。父母都是科研学者，母亲是精神力研究专家，父亲是星舰工程师，两人虽然忙碌，却总会抽出时间陪伴你。母亲用精准配比的营养剂喂养你，父亲则用小型星舰模型逗你玩耍。",
        choices: [
          { id: "quiet", label: "安静吮吸营养剂，盯着父亲手里的星舰模型看", effects: { spirit: 2, scholarship: 1, charm: -1 }, effectText: "精神力 + 2，学识 + 1，魅力 - 1（过于安静，不显眼）" },
          { id: "active", label: "哭闹着推开营养剂，想要抓父亲手里的模型", effects: { scholarship: 1, charm: 1, constitution: -1 }, effectText: "学识 + 1（好奇探索），魅力 + 1，体质 - 1（哭闹消耗体力）" }
        ]
      },
      {
        title: "0岁第2季：实验室外围，科技的魅力",
        description: "母亲带着你去研究院外围的观察室，透过透明的玻璃窗，你看到里面的科研人员忙碌的身影，闪烁的实验数据光屏、运转的实验仪器，都让你充满好奇。母亲轻声给你讲解简单的星际粒子知识，虽然你听不懂，却能感受到语言的韵律。这时，实验仪器发出轻微的嗡鸣，你忍不住眨了眨眼睛。",
        choices: [
          { id: "quiet", label: "安静观察，耳朵贴着玻璃窗，认真听母亲讲解", effects: { spirit: 1, scholarship: 2, charm: -1 }, effectText: "精神力 + 1，学识 + 2，魅力 - 1（过于专注，显得冷漠）" },
          { id: "active", label: "被嗡鸣声吓到，哭闹着要母亲抱离开", effects: { constitution: -1, charm: 1, spirit: -1 }, effectText: "体质 - 1（受惊吓），魅力 + 1（被母亲安抚），精神力 - 1（胆小敏感）" }
        ]
      },
      {
        title: "0岁第3季：绘本启蒙，认知萌芽",
        description: "父亲下班回家，会给你读星际科普绘本，绘本上有各种星际生物、星舰、实验仪器的图案。你盯着绘本，要么认真倾听，要么不耐烦地撕扯绘本。母亲则会用小型实验（安全无害，如颜色混合）吸引你的注意力，培养你的观察力。",
        choices: [
          { id: "quiet", label: "认真听父亲读绘本，盯着绘本上的图案不放", effects: { scholarship: 2, spirit: 1, constitution: -1 }, effectText: "学识 + 2，精神力 + 1，体质 - 1（过于安静，缺乏肢体活动）" },
          { id: "active", label: "撕扯绘本，还伸手去抓母亲的实验器材", effects: { constitution: 1, scholarship: -1, charm: -1 }, effectText: "体质 + 1（动手能力强），学识 - 1（破坏书籍），魅力 - 1（调皮不懂事）" }
        ]
      },
      {
        title: "0岁第4季：周岁小宴，知识的礼物",
        description: "你满 1 岁啦，父母没有举办盛大的仪式，只邀请了研究院的同事们前来祝贺。大家给你带来的礼物都是科普绘本、小型实验模型、简易逻辑玩具，没有奢华的饰品。母亲给你准备了一个 “知识蛋糕”，上面用可食用颜料画着星舰和实验仪器的图案，父亲则给你演示了一个简单的光学实验。",
        choices: [
          { id: "quiet", label: "安静看着父亲演示实验，眼神充满好奇", effects: { scholarship: 2, spirit: 1, charm: -1 }, effectText: "学识 + 2，精神力 + 1，魅力 - 1（过于沉稳，缺乏活泼）" },
          { id: "active", label: "哭闹着要抓实验仪器，打翻了桌上的绘本", effects: { spirit: 1, scholarship: -1, charm: -1 }, effectText: "精神力 + 1（情绪外放），学识 - 1（破坏书籍），魅力 - 1（调皮任性）" }
        ]
      },
      {
        title: "1岁第1季：蹒跚学爬，探索书房",
        description: "你开始尝试爬行，家里的书房成了你的 “探险地”，书架上的绘本、书桌上的实验模型，都成了你想要探索的目标。母亲把危险的实验试剂都收了起来，只留下安全的绘本和玩具。你爬向书架，想要去够上面的绘本，不小心撞到了书桌腿。",
        choices: [
          { id: "quiet", label: "揉了揉撞疼的额头，继续朝着绘本爬去", effects: { scholarship: 1, spirit: 1, constitution: -1 }, effectText: "学识 + 1，精神力 + 1，体质 - 1（执着却不耐疼）" },
          { id: "active", label: "被撞疼后，趴在地上哭闹，等着母亲过来安抚", effects: { charm: 1, spirit: -1, scholarship: -1 }, effectText: "魅力 + 1（被母亲心疼），精神力 - 1（情绪脆弱），学识 - 1（不专注）" }
        ]
      },
      {
        title: "1岁第2季：模仿实验，小科研者初显",
        description: "你开始模仿父母的实验动作，母亲做实验时，你坐在一旁，学着母亲搅拌试剂的样子挥舞小手；父亲画图设计星舰模型时，你也凑过去，拿着笔在纸上乱涂乱画。有一次，母亲教你辨认简单的科研符号，你要么认真学习，要么不耐烦地扔掉画笔。",
        choices: [
          { id: "quiet", label: "认真模仿父母的动作，跟着母亲学习科研符号", effects: { scholarship: 2, spirit: 1, combat: -1 }, effectText: "学识 + 2，精神力 + 1，战力 - 1（过于安静，缺乏肢体活动）" },
          { id: "active", label: "扔掉画笔，去抓桌上的实验模型，把模型拆得七零八落", effects: { constitution: 1, scholarship: -1, charm: -1 }, effectText: "体质 + 1（动手能力强），学识 - 1（破坏模型），魅力 - 1（调皮捣蛋）" }
        ]
      },
      {
        title: "1岁第3季：玩伴相聚，知识小比拼",
        description: "母亲带着你去研究院家属区的小伙伴聚集地，那里的小孩都带着一股书卷气，大家手里都拿着绘本或逻辑玩具。有个小女孩拿着一本星际生物绘本，正在给其他小伙伴讲解，你看到后，也想要凑过去听，可小女孩不愿意让你靠近。",
        choices: [
          { id: "quiet", label: "耐心等待，等小女孩讲完后，再凑过去看绘本", effects: { scholarship: 1, spirit: 2, charm: 1 }, effectText: "学识 + 1，精神力 + 2，魅力 + 1（懂事乖巧）" },
          { id: "active", label: "哭闹着要母亲帮忙，非要抢小女孩的绘本", effects: { scholarship: -1, charm: -2, spirit: -1 }, effectText: "学识 - 1（不懂分享），魅力 - 2（任性调皮），精神力 - 1（情绪不稳定）" }
        ]
      },
      {
        title: "1岁第4季：扶站学步，探索未知",
        description: "你已经能扶着墙壁慢慢站立，父母特意在书房里设置了简易的扶手，让你练习走路，还会用绘本和实验模型引导你，锻炼你的平衡能力和认知能力。有一次，你想要去够书架上的一本厚绘本，却不小心摔倒了，手里的小玩具也掉在了地上。",
        choices: [
          { id: "quiet", label: "自己慢慢爬起来，捡起玩具，继续去够绘本", effects: { scholarship: 1, spirit: 1, constitution: 1 }, effectText: "学识 + 1，精神力 + 1，体质 + 1（坚韧执着）" },
          { id: "active", label: "摔倒后哭闹不止，等着父母过来扶你、捡玩具", effects: { charm: 1, constitution: -1, spirit: -1 }, effectText: "魅力 + 1（被父母心疼），体质 - 1（不耐疼），精神力 - 1（依赖家人）" }
        ]
      },
      {
        title: "2岁第1季：颜色实验，认知小突破",
        description: "母亲用安全颜料做水变色实验，红 + 蓝 = 紫，你趴在实验台边，眼睛亮晶晶盯着杯子。父母教你辨认颜色、说出名称，研究院的阿姨送来逻辑积木。",
        choices: [
          { id: "quiet", label: "认真观察实验，跟着念颜色名称", effects: { scholarship: 2, spirit: 1, constitution: -1 }, effectText: "学识 + 2，精神力 + 1，体质 - 1（专注久坐）" },
          { id: "active", label: "伸手打翻水杯，把颜料抹在脸上", effects: { constitution: 1, scholarship: -1, charm: -1 }, effectText: "体质 + 1，学识 - 1，魅力 - 1（调皮捣蛋）" }
        ]
      },
      {
        title: "2岁第2季：绘本问答，知识小考验",
        description: "父亲给你读星际科普绘本，读完后提问 “星星是什么颜色”“星舰用来做什么”，你能发出简单音节回应，书架上的模型在一旁静静摆放。",
        choices: [
          { id: "quiet", label: "努力思考，用单字回答问题", effects: { scholarship: 1, spirit: 2, charm: -1 }, effectText: "学识 + 1，精神力 + 2，魅力 - 1（专注思考）" },
          { id: "active", label: "不理会问题，去拆桌上的模型", effects: { combat: 1, scholarship: -1, spirit: -1 }, effectText: "战力 + 1，学识 - 1，精神力 - 1（破坏欲强）" }
        ]
      },
      {
        title: "2岁第3季：研究院参观，好奇心爆发",
        description: "父母带你进入安全区研究院展厅，展示星球模型、粒子灯箱，你被炫酷的科技吸引，想要伸手触摸防护玻璃，工作人员温柔提醒不能触碰。",
        choices: [
          { id: "quiet", label: "乖乖听话，安静观察记录", effects: { scholarship: 2, spirit: 1, charm: -1 }, effectText: "学识 + 2，精神力 + 1，魅力 - 1（沉稳克制）" },
          { id: "active", label: "哭闹着要触摸，拉扯父母衣服", effects: { spirit: 1, charm: -2, constitution: -1 }, effectText: "精神力 + 1，魅力 - 2，体质 - 1（任性哭闹）" }
        ]
      },
      {
        title: "2岁第4季：三岁科研礼，小小探索者",
        description: "你满 3 岁！父母送你一套儿童实验套装，研究院同事送来科普礼盒，你能完整说短句，对世界充满探索欲，正式告别婴儿期，即将开启独立科研探索。",
        choices: [
          { id: "quiet", label: "抱着实验套装，认真说 “谢谢”", effects: { scholarship: 2, charm: 1, combat: -1 }, effectText: "学识 + 2，魅力 + 1，战力 - 1（文静懂事）；解锁：3 岁未分化，探索特质强化", trait: "探索特质强化" },
          { id: "active", label: "拆开套装乱扔零件，兴奋尖叫", effects: { constitution: 1, combat: 1, scholarship: -1 }, effectText: "体质 + 1，战力 + 1，学识 - 1（活泼好动）；解锁：3 岁未分化，探索特质强化", trait: "探索特质强化" }
        ]
      }
    ]
  },
  noble: {
    name: "星际贵族豪门",
    stories: [
      {
        title: "0岁第1季：贵族新生，奢华相伴",
        description: "你出生在星际贵族府邸，居所奢华大气，水晶灯闪烁着微光，铺着柔软的星际绒毯，有专门的侍从 24 小时照料你的起居。父母是星际联邦上层贵族，父亲是星域管理者，母亲是贵族名媛，气质优雅、举止端庄。你被包裹在定制的丝绸襁褓里，接受着贵族圈层的祝福，身边摆满了珍贵的礼物。",
        choices: [
          { id: "quiet", label: "安静躺在婴儿床里，乖乖接受侍从的照料", effects: { constitution: 2, charm: 1, spirit: -1 }, effectText: "体质 + 2，魅力 + 1，精神力 - 1（过于温顺，缺乏活力）" },
          { id: "active", label: "哭闹不止，抗拒侍从的触碰，只要母亲抱", effects: { spirit: 2, charm: 1, constitution: -1 }, effectText: "精神力 + 2，魅力 + 1，体质 - 1（哭闹消耗体力，依赖母亲）" }
        ]
      },
      {
        title: "0岁第2季：府邸初探，礼仪初显",
        description: "母亲带着你参观贵族府邸，穿过精致的花园、奢华的客厅、藏书丰富的书房，侍从们恭敬地跟在身后。花园里种着来自各个星域的珍稀花卉，客厅里摆放着珍贵的艺术品，书房里摆满了古籍和贵族礼仪书籍。母亲轻声教你简单的贵族礼仪（虽然你还不会做），侍从则给你递来定制的婴儿玩具。",
        choices: [
          { id: "quiet", label: "安静被母亲抱着，欣赏府邸的景色，不哭闹", effects: { charm: 2, scholarship: 1, constitution: -1 }, effectText: "魅力 + 2，学识 + 1，体质 - 1（过于安静，缺乏肢体活动）" },
          { id: "active", label: "哭闹着要抓花园里的花卉，还伸手去扯侍从的衣服", effects: { constitution: 1, charm: -1, spirit: 1 }, effectText: "体质 + 1（动手能力强），魅力 - 1（调皮不懂事），精神力 + 1（情绪外放）" }
        ]
      },
      {
        title: "0岁第3季：贵族聚会，万众瞩目",
        description: "父母举办了一场小型贵族聚会，邀请了各个贵族家族的长辈和子弟，大家都穿着华丽的礼服，举止优雅。你被母亲抱在怀里，接受着大家的夸赞，有人给你递来珍贵的宝石玩具，有人轻轻抚摸你的小脸蛋。你要么乖巧接受，要么抗拒哭闹。",
        choices: [
          { id: "quiet", label: "乖乖被母亲抱着，对着大家微笑（无意识），接受礼物", effects: { charm: 2, reputation: 1, spirit: -1 }, effectText: "魅力 + 2，声望 + 1，精神力 - 1（过于温顺，缺乏个性）" },
          { id: "active", label: "哭闹着推开礼物，还伸手去抓客人的礼服裙摆", effects: { spirit: 1, charm: -1, reputation: -1 }, effectText: "精神力 + 1，魅力 - 1（调皮任性），声望 - 1（显得没有教养）" }
        ]
      },
      {
        title: "0岁第4季：周岁庆典，盛大奢华",
        description: "你满 1 岁啦，父母举办了盛大的周岁庆典，邀请了星际联邦所有上层贵族，府邸里张灯结彩，摆满了来自各个星域的珍稀美食和礼物。庆典上，有星际乐队演奏优雅的乐曲，还有贵族子弟为你表演节目。父母把你放在定制的周岁座椅上，让你抓周，桌上摆满了贵族专属物品（宝石、礼仪书、星舰模型）。",
        choices: [
          { id: "quiet", label: "乖乖抓周，拿起桌上的礼仪书，不闹不吵", effects: { scholarship: 1, charm: 2, combat: -1 }, effectText: "学识 + 1，魅力 + 2，战力 - 1（过于优雅，缺乏活力）" },
          { id: "active", label: "哭闹着打翻抓周的物品，想要抓桌上的美食", effects: { constitution: 1, charm: -1, reputation: -1 }, effectText: "体质 + 1（嘴馋），魅力 - 1（调皮任性），声望 - 1（有失贵族体面）" }
        ]
      },
      {
        title: "1岁第1季：蹒跚学爬，府邸探险",
        description: "你开始尝试爬行，贵族府邸的每一个角落都成了你的 “探险地”，柔软的绒毯、精致的家具、珍贵的艺术品，都让你充满好奇。侍从们跟在你身后，小心翼翼地保护你，避免你磕碰受伤。你爬向客厅的水晶灯底座，想要去够上面的装饰，不小心撞到了沙发腿。",
        choices: [
          { id: "quiet", label: "揉了揉撞疼的额头，继续朝着水晶灯爬去", effects: { constitution: 1, spirit: 1, charm: -1 }, effectText: "体质 + 1，精神力 + 1，魅力 - 1（有些倔强，不懂得求助）" },
          { id: "active", label: "被撞疼后，趴在地上哭闹，等着侍从过来安抚", effects: { charm: 1, constitution: -1, spirit: -1 }, effectText: "魅力 + 1（被细心照料），体质 - 1（不耐疼），精神力 - 1（情绪脆弱）" }
        ]
      },
      {
        title: "1岁第2季：礼仪启蒙，贵族养成",
        description: "父母请了专业的贵族礼仪启蒙老师，在玩耍中引导你养成良好的举止习惯。老师教你如何优雅地坐着、如何打招呼（虽然你还不会说话），母亲则教你辨认贵族专属的服饰和饰品。你要么认真配合，要么不耐烦地反抗。",
        choices: [
          { id: "quiet", label: "认真配合老师和母亲，学习简单的贵族举止", effects: { charm: 2, reputation: 1, scholarship: 1 }, effectText: "魅力 + 2，声望 + 1，学识 + 1（乖巧懂事，有贵族气质）" },
          { id: "active", label: "不耐烦地推开老师，哭闹着要去玩玩具", effects: { spirit: 1, charm: -1, reputation: -1 }, effectText: "精神力 + 1（情绪外放），魅力 - 1（调皮任性），声望 - 1（不遵守礼仪）" }
        ]
      },
      {
        title: "1岁第3季：贵族玩伴，圈层互动",
        description: "母亲带着你去其他贵族家庭串门，那里有很多和你差不多大的贵族子弟，大家都穿着华丽的小礼服，举止优雅。有个小贵族拿着定制的宝石玩具，不愿意和你分享，还对你做了个鬼脸。你要么主动示好，要么哭闹反击。",
        choices: [
          { id: "quiet", label: "主动伸出小手，想要和小贵族做朋友", effects: { charm: 2, reputation: 1, spirit: -1 }, effectText: "魅力 + 2，声望 + 1，精神力 - 1（过于温和，缺乏个性）" },
          { id: "active", label: "哭闹着要抢小贵族的玩具，还伸手去推对方", effects: { combat: 1, charm: -2, reputation: -1 }, effectText: "战力 + 1（反应敏捷），魅力 - 2（任性粗鲁），声望 - 1（有失贵族体面）" }
        ]
      },
      {
        title: "1岁第4季：扶站学步，贵族风采",
        description: "你已经能扶着墙壁慢慢站立，侍从们特意在走廊里设置了精致的扶手，让你练习走路，母亲则在一旁引导你，教你如何优雅地迈步。有一次，你想要朝着花园的方向走，却不小心摔倒了，礼服也沾了灰尘。",
        choices: [
          { id: "quiet", label: "自己慢慢爬起来，拍了拍礼服上的灰尘（无意识），继续往前走", effects: { constitution: 1, charm: 1, spirit: 1 }, effectText: "体质 + 1，魅力 + 1，精神力 + 1（优雅坚韧）" },
          { id: "active", label: "摔倒后哭闹不止，等着母亲和侍从过来扶你、整理礼服", effects: { charm: 1, constitution: -1, spirit: -1 }, effectText: "魅力 + 1（被细心照料），体质 - 1（不耐疼），精神力 - 1（依赖他人）" }
        ]
      },
      {
        title: "2岁第1季：餐桌礼仪，贵族必修课",
        description: "家族正式晚宴，你坐在专属儿童餐椅上，礼仪老师教你正确拿勺子、小口吃饭、不发出声音。桌上摆满珍稀美食，侍从在一旁恭敬等候，宾客们注视着你。",
        choices: [
          { id: "quiet", label: "认真遵守礼仪，优雅进食", effects: { charm: 2, reputation: 1, constitution: -1 }, effectText: "魅力 + 2，声望 + 1，体质 - 1（克制食欲）" },
          { id: "active", label: "用手抓食物，弄脏礼服哭闹", effects: { constitution: 1, reputation: -1, charm: -1 }, effectText: "体质 + 1，声望 - 1，魅力 - 1（失礼任性）" }
        ]
      },
      {
        title: "2岁第2季：贵族茶会，社交初体验",
        description: "母亲带你参加贵族幼童茶会，小朋友们都穿着精致礼服，互相分享玩具、轻声交谈。一位小贵族主动和你打招呼，递来一块星空甜点。",
        choices: [
          { id: "quiet", label: "轻声道谢，礼貌回应", effects: { charm: 2, reputation: 1, spirit: -1 }, effectText: "魅力 + 2，声望 + 1，精神力 - 1（温顺拘谨）" },
          { id: "active", label: "无视对方，抢走甜点跑开", effects: { spirit: 1, reputation: -2, charm: -1 }, effectText: "精神力 + 1，声望 - 2，魅力 - 1（无礼霸道）" }
        ]
      },
      {
        title: "2岁第3季：礼服小意外，仪态考验",
        description: "你在花园行走时，不小心被花枝勾破礼服裙摆，侍从立刻上前想要修补，母亲用眼神示意你保持镇定，维持贵族仪态。",
        choices: [
          { id: "quiet", label: "保持站姿不动，优雅等待处理", effects: { charm: 2, spirit: 1, constitution: -1 }, effectText: "魅力 + 2，精神力 + 1，体质 - 1（端庄克制）" },
          { id: "active", label: "大哭大闹，撕扯破损的礼服", effects: { constitution: 1, reputation: -1, spirit: -1 }, effectText: "体质 + 1，声望 - 1，精神力 - 1（失态娇气）" }
        ]
      },
      {
        title: "2岁第4季：三岁成年礼，豪门继承者",
        description: "你满 3 岁！家族举办盛大庆典，星域贵族齐聚，你身着定制礼服，能独立行礼、说祝福短句，正式被认可为家族继承者，即将开启贵族独立人生。",
        choices: [
          { id: "quiet", label: "优雅行礼，从容面对宾客", effects: { charm: 2, reputation: 2, combat: -1 }, effectText: "魅力 + 2，声望 + 2，战力 - 1（端庄大气）；解锁：3 岁未分化，优雅特质强化", trait: "优雅特质强化" },
          { id: "active", label: "害羞躲在父母身后，不愿露面", effects: { spirit: 1, charm: -1, reputation: -1 }, effectText: "精神力 + 1，魅力 - 1，声望 - 1（怯懦内敛）；解锁：3 岁未分化，优雅特质强化", trait: "优雅特质强化" }
        ]
      }
    ]
  },
  orphan: {
    name: "星际流浪孤儿",
    stories: [
      {
        title: "0岁第1季：流民据点，艰难新生",
        description: "你出生在星际流民据点，没有父母照料，被据点的流民长辈（张奶奶）收留。据点是废弃的星舰舱室改造的，环境简陋，偶尔会有物资短缺的情况，空气中飘着淡淡的灰尘味。张奶奶用仅有的营养剂喂养你，夜里把你抱在怀里，用破旧的绒毯裹着你，抵御据点的寒冷。",
        choices: [
          { id: "quiet", label: "安静依偎在张奶奶怀里，乖乖吮吸营养剂", effects: { constitution: 2, spirit: 1, charm: -1 }, effectText: "体质 + 2，精神力 + 1，魅力 - 1（过于安静，不显眼）" },
          { id: "active", label: "哭闹不止，因为饥饿和寒冷，不停扭动身体", effects: { spirit: 1, combat: 1, constitution: -2 }, effectText: "精神力 + 1，战力 + 1，体质 - 2（哭闹消耗体力，受凉）" }
        ]
      },
      {
        title: "0岁第2季：据点求生，微小温暖",
        description: "张奶奶白天要和其他流民一起外出寻找物资（星际垃圾、废弃食品、过期营养剂），晚上回来照料你。据点里的其他流民也会偶尔帮着照顾你，给你带来捡来的小玩具（废弃星舰零件、破旧布偶）。有一次，张奶奶带回了半瓶过期的营养剂，喂你时，你要么乖乖喝下，要么抗拒哭闹。",
        choices: [
          { id: "quiet", label: "乖乖喝下营养剂，不哭闹，节省粮食", effects: { constitution: 1, spirit: 1, charm: 1 }, effectText: "体质 + 1，精神力 + 1，魅力 + 1（懂事乖巧，被流民们疼爱）" },
          { id: "active", label: "抗拒喝下过期营养剂，哭闹不止，打翻营养剂", effects: { spirit: 1, constitution: -2, charm: -1 }, effectText: "精神力 + 1，体质 - 2（浪费粮食，饥饿加剧），魅力 - 1（调皮不懂事）" }
        ]
      },
      {
        title: "0岁第3季：据点同伴，懵懂相伴",
        description: "据点里有很多和你差不多大的流浪孩子，大一点的孩子会帮着张奶奶照顾你，小一点的孩子会和你一起躺在破旧的绒毯上玩耍。有个大姐姐（5 岁）给你带来了一个捡来的布偶，你要么乖乖抱着，要么随手扔掉。",
        choices: [
          { id: "quiet", label: "乖乖抱着布偶，不闹不吵，跟着大姐姐玩耍", effects: { charm: 1, spirit: 1, combat: -1 }, effectText: "魅力 + 1，精神力 + 1，战力 - 1（过于温顺，缺乏活力）" },
          { id: "active", label: "扔掉布偶，伸手去抓大姐姐的头发，哭闹不止", effects: { combat: 1, charm: -2, spirit: -1 }, effectText: "战力 + 1（反应敏捷），魅力 - 2（调皮不懂事），精神力 - 1（情绪不稳定）" }
        ]
      },
      {
        title: "0岁第4季：周岁简陋，善意相伴",
        description: "你满 1 岁啦，据点的流民们省吃俭用，给你举办了简单的周岁仪式，没有蛋糕，没有礼物，只有大家凑来的半块星际面包，还有张奶奶给你缝的破旧布偶。大家围着你，唱着简单的歌谣，张奶奶把你放在地上，让你尝试自己爬行，其他孩子在一旁拍手鼓励你。",
        choices: [
          { id: "quiet", label: "努力尝试爬行，朝着张奶奶的方向挪去", effects: { constitution: 2, spirit: 1, charm: -1 }, effectText: "体质 + 2，精神力 + 1，魅力 - 1（坚韧执着，不娇气）" },
          { id: "active", label: "坐在地上不肯动，哭闹着要张奶奶抱，不肯吃面包", effects: { charm: 1, constitution: -1, spirit: -1 }, effectText: "魅力 + 1（被大家心疼），体质 - 1（饥饿），精神力 - 1（情绪脆弱）" }
        ]
      },
      {
        title: "1岁第1季：蹒跚学爬，据点探险",
        description: "你已经能熟练翻身，开始尝试爬行，废弃星舰舱室的每一个角落都成了你的 “探险地”。张奶奶把危险的零件都收了起来，让你在安全的区域爬行。你爬向舱室的通风口，想要去够里面的小物件，不小心撞到了废弃的金属板。",
        choices: [
          { id: "quiet", label: "揉了揉撞疼的额头，继续朝着通风口爬去", effects: { constitution: 1, combat: 1, spirit: -1 }, effectText: "体质 + 1，战力 + 1，精神力 - 1（过于倔强，不懂得退缩）" },
          { id: "active", label: "被撞疼后，趴在地上哭闹，等着张奶奶过来安抚", effects: { charm: 1, constitution: -1, combat: -1 }, effectText: "魅力 + 1（被张奶奶心疼），体质 - 1（不耐疼），战力 - 1（缺乏坚韧）" }
        ]
      },
      {
        title: "1岁第2季：生存启蒙，艰难成长",
        description: "张奶奶开始教你简单的生存技巧，比如辨认安全的废弃食品、躲避据点的危险区域。大一点的孩子也会带着你，一起捡小零件（可以换少量物资）。你要么认真跟着学习，要么不耐烦地乱跑。",
        choices: [
          { id: "quiet", label: "认真跟着张奶奶和大孩子学习，乖乖捡小零件", effects: { constitution: 1, combat: 1, scholarship: 1 }, effectText: "体质 + 1，战力 + 1，学识 + 1（懂事，适应生存）" },
          { id: "active", label: "不耐烦地乱跑，跑到据点的危险区域，差点被废弃零件划伤", effects: { combat: 1, constitution: -2, charm: -1 }, effectText: "战力 + 1（反应敏捷），体质 - 2（险些受伤），魅力 - 1（调皮鲁莽）" }
        ]
      },
      {
        title: "1岁第3季：物资短缺，共渡难关",
        description: "据点迎来了物资短缺的时期，张奶奶和其他流民们每天只能吃少量的食物，却还是省出一点给你。你看着张奶奶饥饿的样子，要么乖乖吃下食物，要么把食物推给张奶奶。",
        choices: [
          { id: "quiet", label: "乖乖吃下食物，努力长大，不让张奶奶担心", effects: { constitution: 2, spirit: 1, charm: 1 }, effectText: "体质 + 2，精神力 + 1，魅力 + 1（懂事贴心）" },
          { id: "active", label: "把食物推给张奶奶，哭闹着不吃，想要让张奶奶吃", effects: { charm: 2, constitution: -1, spirit: 1 }, effectText: "魅力 + 2（善良懂事），体质 - 1（饥饿），精神力 + 1（重感情）" }
        ]
      },
      {
        title: "1岁第4季：扶站学步，生存希望",
        description: "你已经能扶着废弃的金属板慢慢站立，张奶奶和大孩子们在一旁保护你，引导你练习走路。你看着据点外的星空，想要朝着星舰掠过的方向走去，却不小心摔倒了，膝盖擦破了皮，流了一点血。",
        choices: [
          { id: "quiet", label: "自己慢慢爬起来，不哭闹，继续练习走路", effects: { constitution: 2, combat: 1, spirit: 1 }, effectText: "体质 + 2，战力 + 1，精神力 + 1（坚韧勇敢，适应生存）" },
          { id: "active", label: "摔倒后哭闹不止，等着张奶奶过来安抚、包扎", effects: { charm: 1, constitution: -1, spirit: -1 }, effectText: "魅力 + 1（被大家心疼），体质 - 1（受伤），精神力 - 1（依赖他人）" }
        ]
      },
      {
        title: "2岁第1季：捡物资，生存小本领",
        description: "张奶奶带你在据点周边捡可使用的废弃零件、干净布料，这是流民生存的基础。你能弯腰捡起小物件，大孩子教你分辨有用和危险的垃圾。",
        choices: [
          { id: "quiet", label: "认真学习，乖乖帮忙捡拾", effects: { constitution: 1, scholarship: 1, charm: -1 }, effectText: "体质 + 1，学识 + 1，魅力 - 1（沉默能干）" },
          { id: "active", label: "乱跑贪玩，不肯帮忙捡物资", effects: { spirit: 1, constitution: -1, scholarship: -1 }, effectText: "精神力 + 1，体质 - 1，学识 - 1（懒散贪玩）" }
        ]
      },
      {
        title: "2岁第2季：分食物，懂事小选择",
        description: "据点物资紧缺，张奶奶只找到两块小面包，分给你和另一个小弟弟。你看着手里的面包，小弟弟饿得盯着你，张奶奶温柔看着你，等待你的选择。",
        choices: [
          { id: "quiet", label: "分一半面包给小弟弟", effects: { charm: 2, spirit: 1, constitution: -1 }, effectText: "魅力 + 2，精神力 + 1，体质 - 1（饥饿谦让）" },
          { id: "active", label: "紧紧抱住面包，全部自己吃掉", effects: { constitution: 1, charm: -2, spirit: -1 }, effectText: "体质 + 1，魅力 - 2，精神力 - 1（自私护食）" }
        ]
      },
      {
        title: "2岁第3季：据点危机，避险本能",
        description: "据点入口传来星舰轰鸣（巡查队路过），流民们立刻安静躲藏，张奶奶拉着你躲进金属柜后，示意你不许出声，你紧张地攥着张奶奶的衣服。",
        choices: [
          { id: "quiet", label: "屏住呼吸，安静躲藏不哭闹", effects: { spirit: 2, combat: 1, charm: -1 }, effectText: "精神力 + 2，战力 + 1，魅力 - 1（冷静警觉）" },
          { id: "active", label: "害怕大哭，差点暴露位置", effects: { constitution: -1, spirit: -1, charm: -1 }, effectText: "体质 - 1，精神力 - 1，魅力 - 1（胆小慌乱）" }
        ]
      },
      {
        title: "2岁第4季：三岁生存礼，顽强小生命",
        description: "你满 3 岁！流民们凑出最珍贵的干净干粮，张奶奶给你缝了新布偶，你能独立走路、寻找简单物资，拥有了最强的生存本能，即将独立闯荡星际。",
        choices: [
          { id: "quiet", label: "感谢大家，主动帮忙干活", effects: { constitution: 2, charm: 1, spirit: -1 }, effectText: "体质 + 2，魅力 + 1，精神力 - 1（坚韧懂事）；解锁：3 岁未分化，生存特质拉满", trait: "生存特质拉满" },
          { id: "active", label: "抱着食物独享，不愿分享", effects: { constitution: 1, spirit: 1, charm: -2 }, effectText: "体质 + 1，精神力 + 1，魅力 - 2（自我保护）；解锁：3 岁未分化，生存特质拉满", trait: "生存特质拉满" }
        ]
      }
    ]
  },
  merchant: {
    name: "星际商贸财团",
    stories: [
      {
        title: "0岁第1季：商贸新生，星舰相伴",
        description: "你出生在商贸家族的私人星舰府邸，星舰内饰精致，处处透着商业气息，墙上挂着星际航线图、商贸交易报表，空气中飘着淡淡的香料味（来自各个星域的特产）。父母掌控着跨星域的商贸业务，父亲是商贸公司老板，母亲是星际航线管理者，两人虽忙碌，却总会抽出时间陪伴你。",
        choices: [
          { id: "quiet", label: "安静靠在母亲怀里，感受着星舰轻微的晃动", effects: { constitution: 2, spirit: 1, charm: -1 }, effectText: "体质 + 2，精神力 + 1，魅力 - 1（过于安静，不显眼）" },
          { id: "active", label: "哭闹不止，抗拒星舰的晃动，想要抓父亲手里的商贸报表", effects: { spirit: 1, scholarship: 1, constitution: -1 }, effectText: "精神力 + 1，学识 + 1（好奇探索），体质 - 1（哭闹消耗体力）" }
        ]
      },
      {
        title: "0岁第2季：商贸星舰，初探商机",
        description: "父母带着你乘坐私人星舰，前往周边星域洽谈业务。你被放在星舰的观景舱里，看着浩瀚星海、穿梭的商贸星舰，听着父母讨论交易价格、物资调配。母亲给你讲解各个星域的特产，父亲则给你带来了来自外星域的彩色香料（安全无害），让你感受不同的气味。",
        choices: [
          { id: "quiet", label: "安静观察窗外的星舰，认真听父母讨论业务", effects: { scholarship: 2, spirit: 1, charm: -1 }, effectText: "学识 + 2，精神力 + 1，魅力 - 1（过于专注，显得冷漠）" },
          { id: "active", label: "哭闹着要抓父亲手里的香料，不小心打翻了香料罐", effects: { constitution: -1, charm: 1, wealth: -1 }, effectText: "体质 - 1（香料刺激），魅力 + 1（活泼调皮），财富 - 1（浪费香料，损失小额物资）" }
        ]
      },
      {
        title: "0岁第3季：商贸聚会，初识伙伴",
        description: "父母举办了一场商贸伙伴聚会，邀请了各个星域的商贸大佬，大家围坐在一起，讨论星际商贸行情，洽谈合作。你被母亲抱在怀里，接受着商贸伙伴们的祝福，有人给你带来了来自各个星域的特产玩具，有人给你递来珍贵的商贸信物。",
        choices: [
          { id: "quiet", label: "乖乖被母亲抱着，接受礼物，不闹不吵", effects: { charm: 2, wealth: 1, spirit: -1 }, effectText: "魅力 + 2，财富 + 1（收到珍贵礼物），精神力 - 1（过于温顺）" },
          { id: "active", label: "哭闹着推开礼物，伸手去抓商贸伙伴的公文包", effects: { spirit: 1, charm: -1, wealth: -1 }, effectText: "精神力 + 1（情绪外放），魅力 - 1（调皮不懂事），财富 - 1（险些损坏公文包，赔偿小额物资）" }
        ]
      },
      {
        title: "0岁第4季：周岁庆典，商贸祝福",
        description: "你满 1 岁啦，父母举办了一场融合商贸氛围的周岁庆典，邀请了所有合作的商贸伙伴，星舰府邸里摆满了来自各个星域的特产美食和礼物。庆典上，父母给你展示了简单的商贸交易流程（用玩具模拟），还让你抓周，桌上摆满了商贸相关物品（玩具钱币、迷你账本、小货箱）。",
        choices: [
          { id: "quiet", label: "乖乖抓周，拿起桌上的玩具钱币，不闹不吵", effects: { wealth: 2, scholarship: 1, charm: -1 }, effectText: "财富 + 2，学识 + 1，魅力 - 1（有商业天赋，过于沉稳）" },
          { id: "active", label: "哭闹着打翻抓周的物品，想要抓桌上的美食特产", effects: { constitution: 1, charm: -1, wealth: -1 }, effectText: "体质 + 1（嘴馋），魅力 - 1（调皮任性），财富 - 1（浪费特产，损失小额物资）" }
        ]
      },
      {
        title: "1岁第1季：蹒跚学爬，星舰探险",
        description: "你开始尝试爬行，私人星舰的每一个角落都成了你的 “探险地”，观景舱、交易室、储物间，都让你充满好奇。侍从们跟在你身后，小心翼翼地保护你，避免你磕碰受伤。你爬向储物间，想要去够里面的特产，不小心撞到了货箱。",
        choices: [
          { id: "quiet", label: "揉了揉撞疼的额头，继续朝着储物间爬去", effects: { constitution: 1, wealth: 1, spirit: -1 }, effectText: "体质 + 1，财富 + 1（摸到特产），精神力 - 1（过于倔强）" },
          { id: "active", label: "被撞疼后，趴在地上哭闹，等着侍从过来安抚", effects: { charm: 1, constitution: -1, wealth: -1 }, effectText: "魅力 + 1（被细心照料），体质 - 1（不耐疼），财富 - 1（哭闹时碰掉小特产，造成损失）" }
        ]
      },
      {
        title: "1岁第2季：商业启蒙，天赋初显",
        description: "父母开始教你简单的商业认知，比如辨认不同星域的特产、区分玩具钱币的面额，母亲则带着你参观星舰的储物间，给你讲解物资储存的方法。你要么认真学习，要么不耐烦地乱跑。",
        choices: [
          { id: "quiet", label: "认真跟着父母学习，辨认特产和钱币，不闹不吵", effects: { scholarship: 2, wealth: 1, spirit: 1 }, effectText: "学识 + 2，财富 + 1，精神力 + 1（有商业天赋，懂事乖巧）" },
          { id: "active", label: "不耐烦地乱跑，打翻了桌上的玩具钱币，还去抓储物间的特产", effects: { constitution: 1, wealth: -1, charm: -1 }, effectText: "体质 + 1（动手能力强），财富 - 1（弄丢玩具钱币），魅力 - 1（调皮捣蛋）" }
        ]
      },
      {
        title: "1岁第3季：商贸玩伴，社交初显",
        description: "母亲带着你去其他商贸家族串门，那里有很多和你差不多大的孩子，都是商贸家族的子弟。有个小男孩拿着迷你货箱玩具，正在模拟商贸交易，你看到后，也想要玩，可小男孩不愿意分享。",
        choices: [
          { id: "quiet", label: "主动伸出小手，想要和小男孩一起模拟交易", effects: { charm: 2, wealth: 1, spirit: -1 }, effectText: "魅力 + 2，财富 + 1（模拟交易获得 “玩具钱币”），精神力 - 1（过于温和）" },
          { id: "active", label: "哭闹着要抢小男孩的货箱，还伸手去推对方", effects: { combat: 1, charm: -2, wealth: -1 }, effectText: "战力 + 1（反应敏捷），魅力 - 2（任性粗鲁），财富 - 1（弄坏迷你货箱，赔偿损失）" }
        ]
      },
      {
        title: "1岁第4季：扶站学步，商贸传承",
        description: "你已经能扶着墙壁慢慢站立，父母特意在星舰的交易室里设置了简易的扶手，让你练习走路，还会用玩具钱币和货箱引导你，培养你的商业思维。有一次，你想要去够桌上的玩具账本，却不小心摔倒了，手里的玩具钱币也掉在了地上。",
        choices: [
          { id: "quiet", label: "自己慢慢爬起来，捡起玩具钱币，继续去够账本", effects: { wealth: 1, spirit: 1, constitution: 1 }, effectText: "财富 + 1，精神力 + 1，体质 + 1（坚韧执着，有商业潜力）" },
          { id: "active", label: "摔倒后哭闹不止，等着父母过来扶你、捡钱币", effects: { charm: 1, constitution: -1, wealth: -1 }, effectText: "魅力 + 1（被父母心疼），体质 - 1（不耐疼），财富 - 1（弄丢部分玩具钱币）" }
        ]
      },
      {
        title: "2岁第1季：认钱币，商业小启蒙",
        description: "父母教你辨认玩具钱币、区分面额，告诉你 “钱币可以换物资”，星舰交易室里摆满了特产样品，你看着五颜六色的钱币，充满好奇。",
        choices: [
          { id: "quiet", label: "认真学习辨认，记住面额", effects: { wealth: 2, scholarship: 1, charm: -1 }, effectText: "财富 + 2，学识 + 1，魅力 - 1（沉稳专注）" },
          { id: "active", label: "乱扔钱币，当作玩具玩耍", effects: { constitution: 1, wealth: -1, scholarship: -1 }, effectText: "体质 + 1，财富 - 1，学识 - 1（浪费散漫）" }
        ]
      },
      {
        title: "2岁第2季：模拟交易，小商人初体验",
        description: "父母用玩具模拟商贸交易，你用小钱币换特产玩具，商贸伙伴的小孩在对面和你 “交易”，父母在一旁引导你礼貌沟通、公平交换。",
        choices: [
          { id: "quiet", label: "礼貌交换，遵守规则", effects: { wealth: 1, charm: 2, spirit: -1 }, effectText: "财富 + 1，魅力 + 2，精神力 - 1（乖巧守礼）" },
          { id: "active", label: "抢过玩具，不付钱币耍赖", effects: { combat: 1, wealth: -1, reputation: -1 }, effectText: "战力 + 1，财富 - 1，声望 - 1（霸道无赖）" }
        ]
      },
      {
        title: "2岁第3季：星舰航行，商机观察",
        description: "家族星舰跃迁航行，父母带你看星际航线图，指给你不同星域的特产和价格，你趴在观景舱，看着穿梭的商贸星舰，似懂非懂。",
        choices: [
          { id: "quiet", label: "安静听讲解，盯着航线图", effects: { scholarship: 2, spirit: 1, constitution: -1 }, effectText: "学识 + 2，精神力 + 1，体质 - 1（专注好学）" },
          { id: "active", label: "吵闹着要玩玩具，不听讲解", effects: { spirit: 1, scholarship: -1, charm: -1 }, effectText: "精神力 + 1，学识 - 1，魅力 - 1（好动分心）" }
        ]
      },
      {
        title: "2岁第4季：三岁商贸礼，小小继承人",
        description: "你满 3 岁！父母赠予你迷你商贸账本，合作商送来星域特产礼盒，你能说出 “交易、钱币”，正式具备财团继承人基础认知，即将独立掌管小份 “财富”。",
        choices: [
          { id: "quiet", label: "抱着账本道谢，沉稳乖巧", effects: { wealth: 2, charm: 1, combat: -1 }, effectText: "财富 + 2，魅力 + 1，战力 - 1（懂事稳重）；解锁：3 岁未分化，商业天赋强化", trait: "商业天赋强化" },
          { id: "active", label: "扔掉账本，抢特产零食", effects: { constitution: 1, wealth: -1, reputation: -1 }, effectText: "体质 + 1，财富 - 1，声望 - 1（任性贪吃）；解锁：3 岁未分化，商业天赋强化", trait: "商业天赋强化" }
        ]
      }
    ]
  }
};

const POST_DIFFERENTIATION_STORY_EVENTS = {
  civilian: {
    name: "星际平民家庭",
    stories: [
      {
        id: "civilian-store-inheritance",
        title: "强制剧情 1：便利店的传承",
        secondGender: "B",
        requirements: { constitution: { min: 15 }, charm: { min: 12 } },
        description: "你顺利分化为 Beta，没有 Alpha 的强悍，也没有 Omega 的敏锐，却继承了父母的温和与踏实。分化当天，父母将便利店的钥匙交给你，告诉你 “平淡也是一种幸福”。此后，你每日守在便利店里，接待邻里常客，学着父亲扫码收款、母亲整理货架，偶尔帮邻居照看小孩，市井的烟火气包裹着你，成为你分化后最坚实的生活底色，也为后续是否坚守便利店、开启新事业埋下伏笔。"
      },
      {
        id: "civilian-logistics-call",
        title: "强制剧情 2：后勤队的召唤",
        secondGender: "A",
        requirements: { constitution: { min: 20 }, spirit: { min: 14 }, combat: { min: 16 } },
        description: "你分化为 Alpha，强悍的体质和坚韧的精神力，恰好契合星际联邦星舰后勤队的招募要求。分化后第三天，后勤队的招募官亲自上门，邀请你加入后勤队，继承母亲的职业。父母虽有不舍，却还是支持你的选择。你收拾行囊，踏入星舰后勤基地，从基础的物资整理、设备检修做起，每日穿梭在星舰的各个角落，深刻体会到 “平凡岗位也能撑起星际运转”，开启了属于你的 Alpha 后勤生涯。"
      },
      {
        id: "civilian-neighborhood-trust",
        title: "强制剧情 3：邻里的托付",
        secondGender: "B",
        requirements: { charm: { min: 18 }, spirit: { min: 15 }, reputation: { min: 10 } },
        description: "你分化为 Beta，性格温和、善于沟通，从小在邻里间就备受喜爱。分化后，平民区的长老找到你，希望你能担任邻里调解员，调解邻里间的矛盾、帮扶孤寡老人和困难家庭。你欣然答应，每日穿梭在平民区的街巷里，倾听大家的诉求，化解邻里间的小摩擦，渐渐成为大家信赖的 “定心丸”。这份责任，让你更加坚定了 “守护市井温情” 的信念，也让你的声望在平民区不断提升。"
      },
      {
        id: "civilian-turbulent-wandering",
        title: "强制剧情 4：动荡中的漂泊",
        secondGender: "O",
        requirements: { constitution: { min: 12 }, spirit: { min: 13 } },
        description: "你分化为 Omega，细腻敏感，却也有着顽强的生命力。就在你分化的一周后，星域遭遇小规模动荡，父母经营的便利店被战火波及，被迫倒闭，父母也在混乱中与你失散。你带着仅有的物资，被迫逃离平民区，沦为流民，辗转于各个流民据点。凭借前期养成的求生本能，你学会了躲避危险、寻找物资，虽颠沛流离，却始终没有放弃寻找父母，也没有放弃对安稳生活的渴望，这段漂泊经历，成为你分化后最深刻的印记。"
      },
      {
        id: "civilian-vendor-origin",
        title: "强制剧情 5：商贩的初心",
        secondGender: "B",
        requirements: { charm: { min: 16 }, scholarship: { min: 12 }, wealth: { min: 8 }, reputation: { min: 9 } },
        description: "你分化为 Beta，不满足于守着父母的小便利店，从小在市井耳濡目染的社交能力，让你萌生了做星际小商贩的想法。分化后，你用父母给的启动资金，收购各个星域的平价特产，在平民区、星舰港口摆摊售卖。你诚信经营、热情待人，渐渐积累了一批回头客，也积累了小额财富。每日奔波在各个星域之间，虽辛苦，却让你感受到了奋斗的意义，也为后续扩大经营、开启商贸之路奠定了基础。"
      },
      {
        id: "civilian-medical-guardian",
        title: "强制剧情 6：白衣的守护",
        secondGender: "O",
        requirements: { charm: { min: 17 }, spirit: { min: 16 }, scholarship: { min: 11 } },
        description: "你分化为 Omega，心思细腻、温柔善良，分化后被星舰医护队看中，招募为医护助手。进入医护队后，你跟着专业医护人员学习基础护理、伤口处理，虽然体能较弱，但你凭借耐心和细心，将每一件小事都做得尽善尽美。每日照顾受伤的士兵和平民，看着他们在你的照料下逐渐康复，你深刻体会到了 “守护生命” 的意义，也坚定了成为一名合格医护人员的决心。"
      },
      {
        id: "civilian-mediocre-confusion",
        title: "强制剧情 7：平庸的迷茫",
        secondGender: "B",
        requirements: { constitution: { min: 10 }, scholarship: { max: 10 } },
        description: "你分化为 Beta，性格懒散、缺乏上进心，分化后继承了父母的便利店，却始终不思进取。每日敷衍经营，对店铺的生意漠不关心，常常关门偷懒，最终导致便利店客源流失、生意惨淡。父母多次劝说，你却不以为然，渐渐陷入了迷茫，不知道自己未来的方向，每日浑浑噩噩，在平庸的生活中消磨时光，也为后续是否能走出迷茫、重拾斗志埋下伏笔。"
      },
      {
        id: "civilian-kind-departure",
        title: "强制剧情 8：善意的奔赴",
        secondGender: "A",
        requirements: { constitution: { min: 19 }, spirit: { min: 17 }, charm: { min: 14 }, reputation: { min: 12 } },
        description: "你分化为 Alpha，心怀善意、战力强悍，分化后得知星际边缘星域的流民和孤儿需要帮扶，便主动加入了星际志愿者队伍。告别父母后，你奔赴贫困星域，凭借强悍的体质，帮助流民寻找物资、搭建临时居所，救助受伤的孤儿，用自己的力量传递温暖。这段志愿者经历，让你明白了 “强者的责任”，也让你收获了无数人的尊敬，为后续是否继续投身公益、守护他人奠定了基础。"
      }
    ]
  },
  military: {
    name: "星际军团世家",
    stories: [
      {
        id: "military-command-inheritance",
        title: "强制剧情 1：指挥官的传承",
        secondGender: "A",
        requirements: { constitution: { min: 25 }, combat: { min: 28 }, spirit: { min: 20 }, charm: { min: 18 }, reputation: { min: 22 } },
        description: "你分化为 Alpha，完美继承了父母的军人基因，战力强悍、极具领导力，分化当天就被星际军团重点培养。父亲亲自为你佩戴军团徽章，告诉你 “镇守边境、守护星际，是军团子弟的使命”。此后，你进入军团精英训练营，接受最严格的训练，学习指挥战术、战场应变，凭借过人的天赋和努力，快速成长，逐步晋升，开启了向星际军团指挥官迈进的征程，续写家族的荣耀。"
      },
      {
        id: "military-battlefield-support",
        title: "强制剧情 2：战场的后盾",
        secondGender: "O",
        requirements: { spirit: { min: 21 }, scholarship: { min: 18 }, charm: { min: 17 } },
        description: "你分化为 Omega，继承了母亲的医护天赋，心思细腻、冷静果断，虽体能较弱，却有着极强的应急处理能力。分化后，你主动加入军团医护队，奔赴星际边境战场，负责抢救受伤的士兵。战场的残酷让你成长，你凭借专业的医护知识和冷静的心态，在枪林弹雨中挽救了无数士兵的生命，成为军团里最温暖的 “白衣后盾”，用自己的方式守护着军团的荣耀。"
      },
      {
        id: "military-recruit-mentor",
        title: "强制剧情 3：新兵的引路人",
        secondGender: "A",
        requirements: { constitution: { min: 23 }, combat: { min: 26 }, spirit: { min: 16 }, reputation: { min: 15 } },
        description: "你分化为 Alpha，战力强悍、性格严厉，分化后没有奔赴战场，而是选择留在军团，成为一名训练教官。父亲对你的选择表示支持，告诉你 “培养新一代军人，和奔赴战场同样重要”。此后，你负责训练新兵，将自己的战斗技巧、军人精神传递给每一位新兵，严格要求、悉心指导，为军团输送了无数优秀人才，成为新兵们最敬畏的引路人。"
      },
      {
        id: "military-secluded-peace",
        title: "强制剧情 4：远离纷争的隐居",
        secondGender: "B",
        requirements: { constitution: { min: 16 }, spirit: { min: 18 } },
        description: "你分化为 Beta，虽从小在军营长大，却厌恶战争和冲突，渴望平淡自在的生活。分化后，你不顾父母和家族的反对，主动申请退役，放弃了军团的一切荣誉和待遇，隐居在星际边缘星域。你在那里开辟了一小块土地，种植农作物，远离战场的纷争和军营的约束，过着平淡自在的生活，守护着自己的小家庭，也终于实现了自己的心愿。"
      },
      {
        id: "military-border-loyalty",
        title: "强制剧情 5：边境的忠魂",
        secondGender: "A",
        requirements: { constitution: { min: 24 }, combat: { min: 27 }, spirit: { min: 19 }, reputation: { min: 20 } },
        description: "你分化为 Alpha，勇敢无畏、忠诚执着，分化后主动申请前往最危险的星际边境，抵御外星族群入侵。父母虽满心牵挂，却还是尊重你的选择，叮嘱你 “注意安全，守护好星际的安宁”。在边境战场上，你凭借过人的战力和坚韧的意志，多次击退敌人，立下赫赫战功，成为边境士兵的精神支柱。这段边境守护之路，充满了危险和挑战，却也让你实现了 “守护星际” 的使命。"
      },
      {
        id: "military-paperwork-pillar",
        title: "强制剧情 6：军团的笔墨担当",
        secondGender: "B",
        requirements: { scholarship: { min: 20 }, spirit: { min: 17 }, charm: { min: 13 } },
        description: "你分化为 Beta，体能平庸，却学识渊博、心思缜密，从小就擅长整理和撰写。分化后，你进入军团文书部门，负责整理军功、撰写战斗报告、制定训练计划，虽不参与战斗，却成为军团运转不可或缺的一部分。你认真严谨、一丝不苟，将每一份文书都整理得井井有条，为军团的管理和发展提供了有力的支持，成为军团里最可靠的笔墨担当。"
      },
      {
        id: "military-rebellious-escape",
        title: "强制剧情 7：叛逆的逃离",
        secondGender: "O",
        requirements: { spirit: { min: 15 }, combat: { max: 10 } },
        description: "你分化为 Omega，厌倦了军营的严格约束和家族的期望，从小就有着叛逆的性子。分化后，你趁着夜色，偷偷逃离了军团家属区，隐瞒自己的家世和军团背景，在星际市井中漂泊。你换上平民的衣服，做着平凡的工作，过着无拘无束的生活，却也常常因为思念父母而陷入挣扎，这段叛逆的逃离之路，让你在自由与牵挂中不断成长。"
      },
      {
        id: "military-stable-guardianship",
        title: "强制剧情 8：安稳的守护",
        secondGender: "A",
        requirements: { constitution: { min: 22 }, combat: { min: 24 }, spirit: { min: 16 }, reputation: { min: 14 } },
        description: "你分化为 Alpha，战力强悍、沉稳可靠，分化后没有留在军团，而是选择离开军营，成为一名星际贵族的安保队长。凭借在军营里练就的军人素养和强悍战力，你深受雇主的信任，负责保护雇主的安全和财产。这份工作收入丰厚、生活安稳，既延续了军人的守护特质，又摆脱了军营的严格约束，让你在安稳的生活中，找到了属于自己的价值。"
      }
    ]
  },
  research: {
    name: "星际科研世家",
    stories: [
      {
        id: "research-leading-scientist",
        title: "强制剧情 1：科研的领航者",
        secondGender: "B",
        requirements: { scholarship: { min: 28 }, spirit: { min: 25 }, constitution: { min: 15 }, charm: { min: 16 }, reputation: { min: 20 } },
        description: "你分化为 Beta，继承了父母的科研天赋，心思缜密、善于探索，从小就沉浸在科研氛围中。分化后，你顺利进入星际研究院，成为一名核心科研人员，专注于星舰技术和精神力研究。在研究院里，你凭借过人的学识和敏锐的洞察力，多次突破科研瓶颈，推动了星际科技的进步，逐步成长为星际首席科研官，成为科研领域的领航者，续写父母的科研传奇。"
      },
      {
        id: "research-behind-scenes-assistant",
        title: "强制剧情 2：科研的幕后助手",
        secondGender: "O",
        requirements: { scholarship: { min: 19 }, spirit: { min: 22 }, charm: { min: 15 } },
        description: "你分化为 Omega，感知敏锐、心思细腻，虽不擅长主导科研项目，却有着极强的辅助能力。分化后，你进入星际研究院，成为首席科研官的助手，负责实验数据记录、实验器材整理、科研报告撰写等工作。你认真细致、一丝不苟，精准配合科研官完成各项实验，助力多项科研成果落地，成为科研领域不可或缺的幕后助手，用自己的方式推动着科技的进步。"
      },
      {
        id: "research-starship-designer",
        title: "强制剧情 3：星舰的设计者",
        secondGender: "A",
        requirements: { scholarship: { min: 26 }, spirit: { min: 23 }, charm: { min: 17 }, wealth: { min: 18 } },
        description: "你分化为 Alpha，兼具科研天赋和领导力，从小就对星舰设计充满兴趣。分化后，你进入星际星舰设计部门，专注于星舰设计研究，凭借创新思维和扎实的科研基础，设计出多款高性能星舰，解决了星际航行中的多项难题。你的设计成果被星际联邦和商贸财团争抢，你也成为星际最顶尖的星舰设计师，用自己的智慧，为星际航行保驾护航。"
      },
      {
        id: "research-greedy-fall",
        title: "强制剧情 4：贪婪的堕落",
        secondGender: "B",
        requirements: { scholarship: { min: 22 }, spirit: { min: 18 }, wealth: { max: 5 } },
        description: "你分化为 Beta，有着极高的科研天赋，却也有着强烈的贪婪之心。分化后，你进入星际研究院，凭借过人的学识，快速掌握了研究院的核心科研成果。此时，黑市和敌对势力向你抛出橄榄枝，承诺给予你巨额财富，让你泄露核心科研成果。在财富的诱惑下，你迷失了本心，偷偷泄露科研机密，最终被研究院发现，沦为星际逃犯，一生都在躲避追捕，从科研天才堕落为人人唾弃的叛徒。"
      },
      {
        id: "research-popular-science",
        title: "强制剧情 5：科普的传递者",
        secondGender: "B",
        requirements: { scholarship: { min: 21 }, spirit: { min: 19 }, charm: { min: 18 }, reputation: { min: 17 } },
        description: "你分化为 Beta，不擅长一线科研，却善于表达和传播知识。分化后，你放弃了进入研究院的机会，成为一名星际科普学者。你撰写科普绘本、举办科普讲座，用通俗易懂的语言，向星际民众传播宇宙知识和星际科技，让更多人了解宇宙的奥秘和科技的力量。你凭借生动有趣的科普内容，成为备受欢迎的科普达人，用自己的方式，传递着科研的温度。"
      },
      {
        id: "research-accident-trauma",
        title: "强制剧情 6：事故的创伤",
        secondGender: "O",
        requirements: { spirit: { max: 12 }, scholarship: { min: 16 } },
        description: "你分化为 Omega，从小就跟着父母参与科研实验，对科研充满热爱。就在你分化后不久，跟随父母参与一项核心实验时，遭遇了意外实验事故，实验爆炸导致你精神力严重受损，腺体功能退化，无法正常释放信息素。这场事故让你彻底告别了科研领域，只能隐居在研究院家属区，一生被病痛困扰，虽平淡安稳，却也始终无法放下对科研的热爱，这段创伤，成为你分化后最深刻的遗憾。"
      },
      {
        id: "research-independent-explorer",
        title: "强制剧情 7：独立的探索者",
        secondGender: "A",
        requirements: { scholarship: { min: 24 }, spirit: { min: 21 }, constitution: { min: 17 }, wealth: { min: 12 } },
        description: "你分化为 Alpha，不愿受研究院的约束，有着强烈的独立意识和探索精神。分化后，你拒绝了研究院的邀请，用自己积累的财富和知识，成立了自己的小型科研工作室，专注于自己感兴趣的研究领域。虽然工作室规模不大，资源有限，但你凭借坚韧的意志和过人的天赋，多次取得突破性科研成果，成为独立科研领域的标杆，用自己的方式，追求着科研的真谛。"
      },
      {
        id: "research-knowledge-inheritor",
        title: "强制剧情 8：知识的传承者",
        secondGender: "B",
        requirements: { scholarship: { min: 20 }, spirit: { min: 18 }, charm: { min: 16 } },
        description: "你分化为 Beta，热爱教育，擅长沟通，从小就受到父母的熏陶，有着扎实的科研知识。分化后，你进入星际科研学院，成为一名科研教师，负责培养下一代科研人才。你将自己的科研经验和知识，毫无保留地传递给学生，耐心指导每一位学生，培养他们的探索精神和科研能力，虽未取得惊天科研成果，却桃李满天下，成为知识的传承者，为科研领域注入了新的活力。"
      }
    ]
  },
  noble: {
    name: "星际贵族豪门",
    stories: [
      {
        id: "noble-domain-controller",
        title: "强制剧情 1：星域的掌控者",
        secondGender: "A",
        requirements: { charm: { min: 25 }, reputation: { min: 28 }, spirit: { min: 22 }, scholarship: { min: 20 }, wealth: { min: 30 } },
        description: "你分化为 Alpha，完美继承了父亲的权力和贵族气质，沉稳大气、善于谋略，分化当天就被确立为家族唯一继承人。父亲将家族事务逐步交给你打理，带你参与星际星域管理会议，教你如何掌控星域秩序、调配资源。你凭借过人的能力和远见，逐步掌控了整个星域的运转，延续了家族的荣耀和地位，成为星际最具权势的星域管理者。"
      },
      {
        id: "noble-social-core",
        title: "强制剧情 2：贵族的社交核心",
        secondGender: "O",
        requirements: { charm: { min: 24 }, reputation: { min: 20 }, spirit: { min: 18 }, scholarship: { min: 17 } },
        description: "你分化为 Omega，继承了母亲的优雅气质，精通贵族礼仪、星际社交，分化后成为星际贵族圈层的核心人物。母亲亲自教你如何应对各种社交场合、拉拢人脉，带你参加各类贵族聚会、外交活动。你凭借优雅的举止、迷人的魅力，赢得了所有贵族的认可，为家族拉拢了无数人脉资源，成为贵族圈层中最耀眼的存在，用自己的方式，维护着家族的声望。"
      },
      {
        id: "noble-rebellious-commoner",
        title: "强制剧情 3：叛逆的平民",
        secondGender: "B",
        requirements: { spirit: { min: 17 }, wealth: { max: 10 } },
        description: "你分化为 Beta，厌恶贵族的虚伪和束缚，厌倦了家族安排的一切，从小就有着叛逆的性子。分化后，你毅然放弃贵族身份，留下一封信，偷偷离开了贵族府邸，隐瞒自己的家世，在星际市井中过着平凡的生活。你找了一份普通的工作，穿着平民的衣服，体验着市井的烟火气，虽然没有了财富和声望，却获得了前所未有的自由，这段叛逆的选择，让你真正找到了自己想要的生活。"
      },
      {
        id: "noble-marriage-tool",
        title: "强制剧情 4：联姻的工具",
        secondGender: "O",
        requirements: { charm: { min: 22 }, reputation: { min: 18 }, spirit: { max: 14 } },
        description: "你分化为 Omega，魅力出众、气质优雅，却性格懦弱、缺乏反抗意识。分化后，为了家族利益，父母将你安排与另一个顶尖贵族家族的 Alpha 进行商业联姻，以此巩固家族的地位和势力。你虽不情愿，却还是听从了父母的安排，嫁给了自己不喜欢的人，一生都被困在贵族府邸，没有自由，没有爱情，只能作为家族巩固地位的工具，在孤独和无奈中度过每一天。"
      },
      {
        id: "noble-charitable-kindness",
        title: "强制剧情 5：贵族的善意",
        secondGender: "B",
        requirements: { charm: { min: 20 }, reputation: { min: 23 }, wealth: { min: 25 }, spirit: { min: 19 } },
        description: "你分化为 Beta，心怀善意、不执着于权力和财富，从小就被父母教导 “贵族的责任，是守护一方安宁”。分化后，你利用家族的财富和资源，成立了慈善基金会，专门帮扶贫困星域的流民和孤儿，修建学校、捐赠物资，推动星际公益事业的发展。你凭借自己的善意和努力，赢得了所有星际民众的尊敬，成为最受爱戴的贵族，也用自己的方式，改变着贵族在民众心中的形象。"
      },
      {
        id: "noble-ambition-expansion",
        title: "强制剧情 6：野心的扩张",
        secondGender: "A",
        requirements: { combat: { min: 18 }, spirit: { min: 21 }, wealth: { min: 32 }, reputation: { min: 24 }, charm: { min: 19 } },
        description: "你分化为 Alpha，野心勃勃、手段狠辣，继承家族事务后，不满足于现有的势力和财富，一心想要扩张家族版图。你涉足商贸、军事、科研等多个领域，用强硬的手段吞并其他小型势力，打压竞争对手，逐步将家族发展成为星际最顶尖的贵族势力。虽然你赢得了巨额财富和至高声望，却也树敌众多，一生都充满了纷争和挑战，在野心的驱使下，不断前行。"
      },
      {
        id: "noble-decline",
        title: "强制剧情 7：没落的贵族",
        secondGender: "B",
        requirements: { charm: { max: 12 }, reputation: { max: 10 }, wealth: { max: 15 } },
        description: "你分化为 Beta，性格懦弱、缺乏能力，从小就不擅长打理事务，也没有贵族应有的气质和谋略。分化后，你接管家族事务，却不善经营，导致家族产业不断衰败，财富和声望持续缩水，家族的地位也一落千丈。面对家族的没落，你束手无策，只能眼睁睁看着家族从顶尖贵族沦为平民阶层，自己也从锦衣玉食的贵族，变成了平庸的平民，在悔恨和无奈中度过一生。"
      },
      {
        id: "noble-diplomat",
        title: "强制剧情 8：星际的外交官",
        secondGender: "A",
        requirements: { charm: { min: 23 }, scholarship: { min: 21 }, spirit: { min: 20 }, reputation: { min: 22 } },
        description: "你分化为 Alpha，精通星际礼仪和多星域语言，善于社交和谈判，从小就受到良好的外交熏陶。分化后，你成为星际联邦外交官，代表贵族家族和星际联邦，与各个星域的势力进行外交谈判，化解星际矛盾、维护星际和平。你凭借优雅从容的举止、敏锐的谈判技巧，赢得了各方的尊重，为星际和平作出了巨大贡献，也成为星际最顶尖的外交官，为家族赢得了更高的声望。"
      }
    ]
  },
  orphan: {
    name: "星际流浪孤儿",
    stories: [
      {
        id: "orphan-refugee-leader",
        title: "强制剧情 1：流民的主心骨",
        secondGender: "A",
        requirements: { constitution: { min: 22 }, combat: { min: 24 }, spirit: { min: 18 }, reputation: { min: 16 } },
        description: "你分化为 Alpha，凭借前期在流民据点养成的生存本能和坚韧特质，战力强悍、内心坚定，分化后被流民们推举为据点首领。你带领流民们寻找物资、搭建安全据点、抵御外来危险，保护着身边的每一位流民。你公正无私、勇敢无畏，成为流民们最信赖的主心骨，用自己的力量，为流民们撑起了一片天，也开启了带领流民们寻找安稳生活的征程。"
      },
      {
        id: "orphan-scavenger-freedom",
        title: "强制剧情 2：拾荒的自由",
        secondGender: "B",
        requirements: { constitution: { min: 17 }, spirit: { min: 15 } },
        description: "你分化为 Beta，习惯了孤独和漂泊，分化后没有选择加入任何势力，而是继续做一名星际拾荒者。你穿梭在星际各个废弃据点和星域边缘，收集废弃零件、物资，换取微薄的收入，过着颠沛流离却自由的生活。你习惯了一个人，不依赖他人，也不被他人束缚，在拾荒的过程中，见识了星际的繁华与残酷，也找到了属于自己的自由与安宁。"
      },
      {
        id: "orphan-fate-turning",
        title: "强制剧情 3：命运的转折",
        secondGender: "O",
        requirements: { charm: { min: 19 }, spirit: { min: 16 }, scholarship: { min: 13 } },
        description: "你分化为 Omega，长相可爱、性格温顺，分化后在流民据点附近觅食时，被路过的星际贵族发现。贵族被你的乖巧和坚韧打动，决定收养你，带你离开流民据点，进入贵族家庭生活。你摆脱了颠沛流离的流民生活，开始接受良好的教育，学习贵族礼仪和文化，过上了安稳富足的生活，但始终无法忘记自己的流民出身，也始终牵挂着据点里的伙伴们。"
      },
      {
        id: "orphan-fallen-survival",
        title: "强制剧情 4：堕落的生存",
        secondGender: "B",
        requirements: { constitution: { min: 14 }, combat: { min: 12 } },
        description: "你分化为 Beta，从小在流民据点长大，为了生存，养成了偷东西的习惯。分化后，你没有改变自己的本性，反而凭借敏捷的动作和强悍的体能，成为一名星际小偷，在各个星域偷窃物资和财富，勉强糊口。你始终活在恐惧中，害怕被星际治安队逮捕，却又无法摆脱这种堕落的生存方式，在偷抢中消磨时光，最终还是难逃被逮捕的命运。"
      },
      {
        id: "orphan-stable-guard",
        title: "强制剧情 5：安稳的守护",
        secondGender: "A",
        requirements: { constitution: { min: 20 }, combat: { min: 19 }, spirit: { min: 17 } },
        description: "你分化为 Alpha，战力强悍、警觉性高，凭借前期养成的生存本能，被星际治安队招募为安保员。你终于摆脱了流民身份，有了稳定的工作和收入，负责守护星际港口、物资仓库的安全。你认真负责、忠于职守，凭借强悍的战力，多次击退小偷和不法分子，赢得了同事的认可，过上了安稳的生活，也用自己的力量，守护着他人的安全。"
      },
      {
        id: "orphan-refugee-doctor",
        title: "强制剧情 6：流民的白衣天使",
        secondGender: "O",
        requirements: { scholarship: { min: 15 }, spirit: { min: 18 }, charm: { min: 16 } },
        description: "你分化为 Omega，心思细腻、善良温和，在流民据点时，跟着路过的医生学习了基础医术。分化后，你成为流民据点的医生，没有专业的医疗设备，却用自己学到的医术，为流民们治病疗伤，缓解他们的痛苦。你温柔耐心、不求回报，成为流民据点里最温暖的白衣天使，用自己的能力，帮助了无数流民，也赢得了大家的尊敬和爱戴。"
      },
      {
        id: "orphan-lonely-wanderer",
        title: "强制剧情 7：孤独的漂泊者",
        secondGender: "B",
        requirements: { constitution: { min: 13 }, spirit: { min: 14 } },
        description: "你分化为 Beta，性格内向、不善交际，从小就习惯了孤独。分化后，你没有加入流民据点，也没有找固定的工作，而是选择独自在星际漂泊。你偶尔在流民据点停留，偶尔在星际港口落脚，没有固定的居所，也没有稳定的收入，见识了星际的人情冷暖，却始终没有找到自己的归宿，最终在孤独的漂泊中，度过了一生。"
      },
      {
        id: "orphan-entrepreneur",
        title: "强制剧情 8：逆袭的创业者",
        secondGender: "A",
        requirements: { constitution: { min: 18 }, spirit: { min: 19 }, scholarship: { min: 14 }, wealth: { min: 15 } },
        description: "你分化为 Alpha，坚韧执着、善于思考，凭借前期拾荒积累的微薄财富和经验，分化后创办了自己的小型物资回收公司。你回收星际废弃零件和物资，加工后出售，凭借诚信经营和敏锐的商业眼光，逐步积累财富，不断扩大公司规模。你终于彻底摆脱了流民身份，成为一名小企业家，用自己的努力，改写了自己的命运，也为其他流民提供了就业机会。"
      }
    ]
  },
  merchant: {
    name: "星际商贸财团",
    stories: [
      {
        id: "merchant-empire-helmsman",
        title: "强制剧情 1：商贸帝国的掌舵人",
        secondGender: "A",
        requirements: { scholarship: { min: 25 }, wealth: { min: 35 }, spirit: { min: 22 }, charm: { min: 20 }, reputation: { min: 24 } },
        description: "你分化为 Alpha，完美继承了父母的商业天赋和领导力，分化当天就被确立为家族商贸财团的继承人。父母带着你熟悉跨星域商贸业务，教你如何拓展星际航线、洽谈合作、掌控市场。你凭借过人的商业头脑和远见，不断拓展商业版图，吞并小型商贸公司，拓展新的星际航线，将家族财团发展成为星际最顶尖的商贸帝国，掌控着跨星域的物资交易，续写家族的商业传奇。"
      },
      {
        id: "merchant-specialty-guardian",
        title: "强制剧情 2：特产的守护者",
        secondGender: "B",
        requirements: { scholarship: { min: 19 }, wealth: { min: 28 }, charm: { min: 18 }, spirit: { min: 17 } },
        description: "你分化为 Beta，对各个星域的特产有着敏锐的洞察力，不擅长掌控庞大的商贸帝国，却热衷于星际特产贸易。分化后，你脱离家族的掌控，成立了自己的特产贸易公司，专门收购各个星域的珍稀特产，再通过跨星域运输，高价出售给贵族和富商。你凭借精准的眼光和诚信经营，积累了巨额财富，过着富足的生活，也成为星际最知名的特产商人。"
      },
      {
        id: "merchant-betrayal-price",
        title: "强制剧情 3：背叛的代价",
        secondGender: "A",
        requirements: { scholarship: { min: 20 }, wealth: { max: 8 }, reputation: { max: 5 } },
        description: "你分化为 Alpha，有着出色的商业能力，却被利益冲昏了头脑。分化后，你进入家族商贸财团核心部门，负责管理星际航线和商业机密。此时，敌对商贸财团向你抛出橄榄枝，承诺给予你巨额财富，让你泄露家族的商业机密和航线信息。在财富的诱惑下，你选择背叛家族，泄露了核心机密，导致家族财团遭受巨大损失。最终，你被家族驱逐，成为星际商贸领域的过街老鼠，一生都无法立足，付出了沉重的背叛代价。"
      },
      {
        id: "merchant-financial-controller",
        title: "强制剧情 4：金融的掌控者",
        secondGender: "B",
        requirements: { scholarship: { min: 26 }, wealth: { min: 32 }, spirit: { min: 21 }, reputation: { min: 18 } },
        description: "你分化为 Beta，精通星际金融和理财，从小就对数字和资金流向有着敏锐的洞察力。分化后，你脱离家族，成为一名独立的星际金融家，操控星际资金流向，投资各个领域的产业，凭借精准的投资眼光，多次获得巨额收益，积累了比家族更丰厚的财富。你成为星际金融领域的标杆，掌控着星际的资金命脉，赢得了无数人的认可和尊敬。"
      },
      {
        id: "merchant-trade-diplomat",
        title: "强制剧情 5：商贸的外交官",
        secondGender: "O",
        requirements: { charm: { min: 22 }, spirit: { min: 19 }, scholarship: { min: 18 }, reputation: { min: 19 } },
        description: "你分化为 Omega，善于社交、温柔得体，有着出色的沟通能力和谈判技巧。分化后，你成为家族商贸财团的商贸外交官，负责与各个星域的商贸伙伴洽谈合作、维护合作关系，拓展新的合作渠道。你凭借迷人的魅力和专业的谈判能力，为家族拉拢了无数合作资源，推动了家族商贸业务的发展，成为家族商贸领域不可或缺的核心人物。"
      },
      {
        id: "merchant-mediocre-operator",
        title: "强制剧情 6：平庸的经营者",
        secondGender: "B",
        requirements: { scholarship: { max: 15 }, wealth: { min: 12 }, spirit: { max: 16 } },
        description: "你分化为 Beta，虽继承了家族的商贸资源，却没有商业天赋，性格懒散、不够专注。分化后，你接管家族的部分商贸业务，却不善经营，缺乏商业眼光，导致业务不断萎缩，收益持续下降。你虽努力过，却始终没有起色，最终只能维持业务的基本运转，成为一名平庸的商人，无法延续家族的商业辉煌，也辜负了父母的期望。"
      },
      {
        id: "merchant-charitable-trader",
        title: "强制剧情 7：慈善的商人",
        secondGender: "A",
        requirements: { wealth: { min: 30 }, reputation: { min: 23 }, charm: { min: 20 }, spirit: { min: 19 }, scholarship: { min: 18 } },
        description: "你分化为 Alpha，掌控家族商贸业务后，不执着于利益最大化，而是心怀善意，想要用自己的财富帮助更多人。你拿出部分财富，成立慈善基金会，帮扶贫困星域的流民和孤儿，修建学校、捐赠物资，推动星际公益事业的发展。你既坚守着商业初心，拓展家族业务，又践行着慈善使命，赢得了商业声望和民众的尊敬，成为最受爱戴的慈善商人。"
      },
      {
        id: "merchant-plain-home",
        title: "强制剧情 8：平淡的归宿",
        secondGender: "O",
        requirements: { spirit: { min: 18 }, wealth: { min: 15 } },
        description: "你分化为 Omega，厌恶商业竞争的残酷和尔虞我诈，从小就向往平淡自在的生活。分化后，你放弃了继承家族商贸业务的机会，带着自己积累的财富，隐居在星际边缘星域，开了一家小型特产店，售卖各个星域的平价特产。你远离商业纷争，过着平淡自在的生活，每天接待来往的客人，享受着平凡的幸福，也终于找到了属于自己的归宿。"
      }
    ]
  }
};

const ATTRIBUTE_THRESHOLD_STORY_EVENTS = {
  "civilian": {
    "name": "星际平民家庭",
    "stories": [
      {
        "id": "civilian-attribute-threshold-1",
        "title": "3-5岁达标剧情：体质≥8",
        "minAge": 3,
        "maxAge": 5,
        "requirements": {
          "constitution": 8
        },
        "requirementText": "体质≥8",
        "description": "你从小就比同龄小朋友强壮，每天跟着父母在便利店帮忙，搬轻便的物资、整理货架，从不喊累。这天，星港货运星舰卸货时，有一箱轻便的营养剂不小心掉在地上，船员们忙着搬大件货物，没来得及捡。你看到后，主动跑过去，双手抱起营养剂，稳稳地搬到便利店门口，船员们看到后，都笑着夸你“小小年纪力气真大”，父亲也欣慰地摸了摸你的头，给了你一颗水果糖作为奖励。",
        "choices": [
          {
            "id": "a",
            "label": "开心地收下糖果，还主动问船员“叔叔，还有需要我帮忙的吗”",
            "effectText": "体质+1，魅力+1，声望+1（乐于助人，懂事能干）",
            "effects": {
              "constitution": 1,
              "charm": 1,
              "reputation": 1
            }
          },
          {
            "id": "b",
            "label": "收下糖果后，就跑到一边玩，不再主动帮忙",
            "effectText": "体质+1，精神力+1，魅力-1（性格活泼，但缺乏主动性）",
            "effects": {
              "constitution": 1,
              "spirit": 1,
              "charm": -1
            }
          }
        ]
      },
      {
        "id": "civilian-attribute-threshold-2",
        "title": "6-9岁达标剧情：声望≥10",
        "minAge": 6,
        "maxAge": 9,
        "requirements": {
          "reputation": 10
        },
        "requirementText": "声望≥10",
        "description": "你平时在星港很懂事，经常帮邻居送快递、帮便利店的客人装袋，慢慢积累了不错的声望。这天，星港社区举办“邻里小帮手”评选，居民们纷纷投票给你，你成功当选。社区工作人员给你颁发了荣誉证书，还奖励了你一些星港币，父母也特意做了你爱吃的食物，邻居们见到你，都会主动和你打招呼，夸你是个好孩子。",
        "choices": [
          {
            "id": "a",
            "label": "谦虚地向大家道谢，说“谢谢大家，我以后会继续帮忙”，还主动把部分奖励的星港币捐给社区的流浪小动物救助点",
            "effectText": "声望+2，魅力+1，财富+1（谦虚善良，有爱心）",
            "effects": {
              "reputation": 2,
              "charm": 1,
              "wealth": 1
            }
          },
          {
            "id": "b",
            "label": "觉得自己很厉害，骄傲地向小朋友炫耀荣誉证书，不肯把奖励分享给别人",
            "effectText": "声望+1，魅力-1，精神力+1（有成就感，但过于骄傲）",
            "effects": {
              "reputation": 1,
              "charm": -1,
              "spirit": 1
            }
          }
        ]
      },
      {
        "id": "civilian-attribute-threshold-3",
        "title": "10-12岁达标剧情：学识≥12",
        "minAge": 10,
        "maxAge": 12,
        "requirements": {
          "scholarship": 12
        },
        "requirementText": "学识≥12",
        "description": "你平时认真上星港函授课程，还经常阅读星港科普书籍，学识慢慢提升。这天，母亲所在的星舰后勤队遇到一个小难题——一批物资的星际编码看不懂，无法分类入库，后勤队员们都很着急。母亲想起你平时喜欢研究星际知识，就把你叫到后勤仓库，让你帮忙辨认编码。你凭借学到的知识，快速认出了编码对应的星域和物资类型，帮后勤队解决了难题，后勤队长还特意给你写了表扬信，交给了你的学校。",
        "choices": [
          {
            "id": "a",
            "label": "认真核对每一个编码，确保没有出错，还主动教后勤队员们简单的编码辨认方法",
            "effectText": "学识+2，声望+1，魅力+1（认真负责，乐于分享）",
            "effects": {
              "scholarship": 2,
              "reputation": 1,
              "charm": 1
            }
          },
          {
            "id": "b",
            "label": "辨认出几个编码后，就觉得麻烦，敷衍地告诉后勤队员，导致有一箱物资分类错误，被母亲批评",
            "effectText": "学识+1，精神力+1，声望-1（有能力，但缺乏耐心）",
            "effects": {
              "scholarship": 1,
              "spirit": 1,
              "reputation": -1
            }
          }
        ]
      },
      {
        "id": "civilian-attribute-threshold-4",
        "title": "13-15岁达标剧情：魅力≥15",
        "minAge": 13,
        "maxAge": 15,
        "requirements": {
          "charm": 15
        },
        "requirementText": "魅力≥15",
        "description": "你性格开朗、待人礼貌，平时乐于帮助别人，魅力值慢慢提升，在星港社区小有名气。这天，星港举办青少年社交活动，邀请社区里的优秀青少年参加，你因为口碑好、魅力足，被主动邀请。活动上，你主动和其他青少年交流，分享自己的经历，还主动帮助害羞的小朋友融入集体，得到了活动主办方的认可，还认识了几个志同道合的朋友。",
        "choices": [
          {
            "id": "a",
            "label": "全程热情参与，主动组织大家做游戏、交流心得，成为活动的小组织者，得到大家的一致好评",
            "effectText": "魅力+2，声望+2，精神力+1（善于组织，社交能力强）",
            "effects": {
              "charm": 2,
              "reputation": 2,
              "spirit": 1
            }
          },
          {
            "id": "b",
            "label": "虽然参加了活动，但只是坐在一边，不主动和别人交流，浪费了社交机会",
            "effectText": "魅力+1，精神力+1，声望-1（性格内向，不善于把握机会）",
            "effects": {
              "charm": 1,
              "spirit": 1,
              "reputation": -1
            }
          }
        ]
      },
      {
        "id": "civilian-attribute-threshold-5",
        "title": "16-17岁达标剧情：体质≥18+声望≥16",
        "minAge": 16,
        "maxAge": 17,
        "requirements": {
          "constitution": 18,
          "reputation": 16
        },
        "requirementText": "体质≥18+声望≥16",
        "description": "你身体强壮，平时经常帮助邻居、维护社区秩序，声望和体质都达到了较高水平。这天，星港遭遇小型星际风暴，部分居民的房屋被风吹坏，物资也被吹散，社区工作人员人手不足，紧急招募志愿者。你第一时间报名，跟着工作人员一起清理废墟、抢救物资、帮助居民转移，连续忙碌了一天，没有丝毫抱怨。你的表现被星港服务台看到，特意给予你公开表扬，还颁发了“星港志愿先锋”勋章。",
        "choices": [
          {
            "id": "a",
            "label": "继续坚守岗位，帮助居民清理房屋、整理物资，直到所有居民都安顿好才回家",
            "effectText": "体质+1，声望+2，魅力+1（责任心强，勇敢无私）",
            "effects": {
              "constitution": 1,
              "reputation": 2,
              "charm": 1
            }
          },
          {
            "id": "b",
            "label": "忙碌了半天后，觉得太累，借口身体不舒服，提前离开，没有完成志愿任务",
            "effectText": "体质+1，精神力+1，声望-2（有能力，但缺乏毅力和责任心）",
            "effects": {
              "constitution": 1,
              "spirit": 1,
              "reputation": -2
            }
          }
        ]
      }
    ]
  },
  "military": {
    "name": "星际军团世家",
    "stories": [
      {
        "id": "military-attribute-threshold-1",
        "title": "3-5岁达标剧情：体质≥9",
        "minAge": 3,
        "maxAge": 5,
        "requirements": {
          "constitution": 9
        },
        "requirementText": "体质≥9",
        "description": "你出生在军团世家，从小跟着父亲参加体能拉练，体质比同龄小朋友强壮很多。这天，军团家属区举办幼儿体能比赛，项目有跑跳、匍匐前进、平衡木，你凭借出色的体质，一路领先，顺利完成了所有项目，虽然最后没有拿到第一名，但你的坚韧和耐力，得到了在场所有军人的称赞，父亲还特意给你颁发了一枚小小的“体能小勇士”徽章，鼓励你继续努力。",
        "choices": [
          {
            "id": "a",
            "label": "拿着徽章，认真地对父亲说“我以后会更努力，成为像你一样的军人”，还主动安慰没有拿到名次的小朋友",
            "effectText": "体质+1，战力+1，魅力+1（坚韧懂事，有同理心）",
            "effects": {
              "constitution": 1,
              "combat": 1,
              "charm": 1
            }
          },
          {
            "id": "b",
            "label": "拿着徽章，骄傲地向其他小朋友炫耀，还嘲笑没有拿到名次的小朋友，被父亲批评",
            "effectText": "体质+1，精神力+1，魅力-1（有实力，但过于骄傲）",
            "effects": {
              "constitution": 1,
              "spirit": 1,
              "charm": -1
            }
          }
        ]
      },
      {
        "id": "military-attribute-threshold-2",
        "title": "6-9岁达标剧情：战力≥10",
        "minAge": 6,
        "maxAge": 9,
        "requirements": {
          "combat": 10
        },
        "requirementText": "战力≥10",
        "description": "你跟着父亲参加早训，认真练习格斗、奔跑等基础技能，战力慢慢提升。这天，军团的教官来家属区选拔“小小预备兵”，测试项目是基础格斗和体能，你凭借扎实的训练基础，顺利通过测试，成为了“小小预备兵”。教官给你发放了预备兵制服，还教你更专业的格斗技巧，让你跟着士兵们一起参加基础训练，父亲也为你感到骄傲。",
        "choices": [
          {
            "id": "a",
            "label": "认真跟着教官训练，不偷懒、不抱怨，严格要求自己，进步越来越大，得到教官的多次表扬",
            "effectText": "战力+2，体质+1，声望+1（严于律己，坚韧不拔）",
            "effects": {
              "combat": 2,
              "constitution": 1,
              "reputation": 1
            }
          },
          {
            "id": "b",
            "label": "觉得自己很厉害，训练时敷衍了事，还偷偷偷懒，被教官发现，取消了“小小预备兵”的资格",
            "effectText": "战力+1，精神力+1，声望-1（有实力，但缺乏纪律性）",
            "effects": {
              "combat": 1,
              "spirit": 1,
              "reputation": -1
            }
          }
        ]
      },
      {
        "id": "military-attribute-threshold-3",
        "title": "10-12岁达标剧情：精神力≥13",
        "minAge": 10,
        "maxAge": 12,
        "requirements": {
          "spirit": 13
        },
        "requirementText": "精神力≥13",
        "description": "你平时注重精神力训练，在模拟战术游戏、枪械认知中，始终保持专注，精神力慢慢提升。这天，父亲带你参加军团的模拟侦查任务，要求你在复杂的环境中，专注观察、记录敌军的模拟位置，不能出现任何差错。你凭借强大的精神力，全程专注，准确记录下所有敌军位置，为模拟战术推演提供了准确的数据，得到了军团军官的认可。",
        "choices": [
          {
            "id": "a",
            "label": "不仅准确记录数据，还主动分析敌军的行动轨迹，向父亲提出自己的侦查建议",
            "effectText": "精神力+2，学识+1，声望+1（专注严谨，有谋略）",
            "effects": {
              "spirit": 2,
              "scholarship": 1,
              "reputation": 1
            }
          },
          {
            "id": "b",
            "label": "虽然记录了数据，但不够认真，出现了一处错误，导致模拟推演出现小失误，被父亲提醒",
            "effectText": "精神力+1，战力+1，声望-1（有专注力，但不够严谨）",
            "effects": {
              "spirit": 1,
              "combat": 1,
              "reputation": -1
            }
          }
        ]
      },
      {
        "id": "military-attribute-threshold-4",
        "title": "13-15岁达标剧情：声望≥17",
        "minAge": 13,
        "maxAge": 15,
        "requirements": {
          "reputation": 17
        },
        "requirementText": "声望≥17",
        "description": "你平时严格要求自己，遵守军营纪律，主动帮助其他预备兵，还积极参与军团的公益活动，声望慢慢提升。这天，军团举办“优秀预备兵”评选，你凭借良好的口碑和出色的表现，成功当选。军团为你颁发了荣誉证书，还允许你参观军团的核心训练区，和正式士兵一起训练，父亲也带你见了军团的指挥官，指挥官夸你“很有军人潜质”。",
        "choices": [
          {
            "id": "a",
            "label": "谦虚地接受荣誉，继续努力训练，还主动帮助其他预备兵提升技能，带动大家一起进步",
            "effectText": "声望+2，魅力+1，战力+1（谦虚好学，乐于分享）",
            "effects": {
              "reputation": 2,
              "charm": 1,
              "combat": 1
            }
          },
          {
            "id": "b",
            "label": "获得荣誉后，变得骄傲自满，训练时不再认真，还看不起其他预备兵，被父亲批评",
            "effectText": "声望+1，精神力+1，魅力-2（有成就感，但过于骄傲）",
            "effects": {
              "reputation": 1,
              "spirit": 1,
              "charm": -2
            }
          }
        ]
      },
      {
        "id": "military-attribute-threshold-5",
        "title": "16-17岁达标剧情：战力≥22+精神力≥18",
        "minAge": 16,
        "maxAge": 17,
        "requirements": {
          "combat": 22,
          "spirit": 18
        },
        "requirementText": "战力≥22+精神力≥18",
        "description": "你经过多年的训练，战力和精神力都达到了较高水平，已经具备了初步的军人实战能力。这天，星际边境出现小规模的外星探子袭扰，军团紧急抽调预备兵参与警戒任务，你主动报名参加。任务中，你凭借强悍的战力，成功拦截了一名外星探子，还凭借敏锐的精神力，发现了隐藏的其他探子，为军团化解了一场小危机。任务结束后，军团为你记了一次小功，还晋升你为预备兵小队队长。",
        "choices": [
          {
            "id": "a",
            "label": "担任小队队长后，认真负责，合理安排队员的警戒任务，带领小队完成后续的警戒工作，得到队员和军官的认可",
            "effectText": "战力+2，精神力+1，声望+2（有领导力，责任心强）",
            "effects": {
              "combat": 2,
              "spirit": 1,
              "reputation": 2
            }
          },
          {
            "id": "b",
            "label": "担任队长后，骄傲自满，不听取队员的建议，盲目安排任务，导致小队出现警戒漏洞，被军官批评",
            "effectText": "战力+1，精神力+1，声望-1（有实力，但缺乏领导力和团队意识）",
            "effects": {
              "combat": 1,
              "spirit": 1,
              "reputation": -1
            }
          }
        ]
      }
    ]
  },
  "research": {
    "name": "星际科研世家",
    "stories": [
      {
        "id": "research-attribute-threshold-1",
        "title": "3-5岁达标剧情：学识≥8",
        "minAge": 3,
        "maxAge": 5,
        "requirements": {
          "scholarship": 8
        },
        "requirementText": "学识≥8",
        "description": "你从小在科研氛围中长大，跟着父母做实验、看科普绘本，学识比同龄小朋友丰富很多。这天，父母在家做色彩混合实验，故意问你“红色和蓝色混在一起会变成什么颜色”“水为什么能浮起小纸船”，你凭借平时学到的知识，准确地回答了所有问题，还主动说出了其中的简单原理，父母都很惊讶，觉得你很有科研天赋，特意给你买了一套儿童科研实验套装。",
        "choices": [
          {
            "id": "a",
            "label": "开心地收下实验套装，主动要求父母教你做更多实验，认真记录实验现象",
            "effectText": "学识+1，精神力+1，魅力+1（求知欲强，专注力强）",
            "effects": {
              "scholarship": 1,
              "spirit": 1,
              "charm": 1
            }
          },
          {
            "id": "b",
            "label": "收下实验套装后，只玩了一会儿就丢在一边，不再感兴趣，跑去玩其他玩具",
            "effectText": "学识+1，体质+1，精神力-1（有天赋，但缺乏专注力）",
            "effects": {
              "scholarship": 1,
              "constitution": 1,
              "spirit": -1
            }
          }
        ]
      },
      {
        "id": "research-attribute-threshold-2",
        "title": "6-9岁达标剧情：精神力≥12",
        "minAge": 6,
        "maxAge": 9,
        "requirements": {
          "spirit": 12
        },
        "requirementText": "精神力≥12",
        "description": "你平时喜欢观察星象、整理实验数据，精神力慢慢提升，专注力也远超同龄小朋友。这天，父母让你帮忙记录星象观测数据，要求你连续一个小时，专注观察星轨变化，不能分心。你凭借强大的精神力，全程专注，准确记录下每一个数据，没有出现任何差错，父母看到后，非常欣慰，还让你参与了他们的简单科研讨论。",
        "choices": [
          {
            "id": "a",
            "label": "不仅准确记录数据，还主动分析星轨的变化规律，向父母提出自己的小疑问，得到父母的耐心解答",
            "effectText": "精神力+2，学识+1，声望+1（专注严谨，求知欲强）",
            "effects": {
              "spirit": 2,
              "scholarship": 1,
              "reputation": 1
            }
          },
          {
            "id": "b",
            "label": "记录了一会儿后，就觉得枯燥，开始分心玩文具，导致数据出现几处错误，被父母批评",
            "effectText": "精神力+1，学识+1，声望-1（有专注力，但缺乏耐心）",
            "effects": {
              "spirit": 1,
              "scholarship": 1,
              "reputation": -1
            }
          }
        ]
      },
      {
        "id": "research-attribute-threshold-3",
        "title": "10-12岁达标剧情：学识≥15",
        "minAge": 10,
        "maxAge": 12,
        "requirements": {
          "scholarship": 15
        },
        "requirementText": "学识≥15",
        "description": "你平时认真学习星港函授课程，阅读大量的科研书籍，学识水平快速提升。这天，星际研究院举办儿童科研小竞赛，题目是“简单星象观测与分析”，你凭借扎实的学识，准确完成了星象观测，还写出了简单的分析报告，成功获得了竞赛一等奖。研究院为你颁发了荣誉证书和科研纪念徽章，还邀请你参观研究院的核心实验室，和科研人员一起交流。",
        "choices": [
          {
            "id": "a",
            "label": "谦虚地接受荣誉，认真参观实验室，主动向科研人员提问，学习更多的科研知识",
            "effectText": "学识+2，精神力+1，声望+1（谦虚好学，求知欲强）",
            "effects": {
              "scholarship": 2,
              "spirit": 1,
              "reputation": 1
            }
          },
          {
            "id": "b",
            "label": "获得荣誉后，变得骄傲自满，参观实验室时，不认真听讲解，还随意触碰实验仪器，被科研人员提醒",
            "effectText": "学识+1，精神力+1，魅力-1（有学识，但缺乏纪律性）",
            "effects": {
              "scholarship": 1,
              "spirit": 1,
              "charm": -1
            }
          }
        ]
      },
      {
        "id": "research-attribute-threshold-4",
        "title": "13-15岁达标剧情：精神力≥17",
        "minAge": 13,
        "maxAge": 15,
        "requirements": {
          "spirit": 17
        },
        "requirementText": "精神力≥17",
        "description": "你经过多年的科研熏陶，精神力达到了较高水平，能够长时间专注于科研任务。这天，父母让你帮忙整理星舰航行数据，这些数据繁琐复杂，需要高度专注，稍有不慎就会出现错误。你凭借强大的精神力，连续整理了三个小时，反复核对，准确筛选出异常数据，还绘制了简单的数据图表，为父母的科研提供了有力支持，父母也夸你“具备了初步的科研素养”。",
        "choices": [
          {
            "id": "a",
            "label": "整理完数据后，主动检查一遍，确保没有错误，还向父母讲解自己的筛选思路和图表逻辑",
            "effectText": "精神力+2，学识+1，声望+1（严谨认真，善于思考）",
            "effects": {
              "spirit": 2,
              "scholarship": 1,
              "reputation": 1
            }
          },
          {
            "id": "b",
            "label": "整理完数据后，没有检查，直接交给父母，导致有一处异常数据没有被发现，影响了科研进度，被父母提醒",
            "effectText": "精神力+1，学识+1，声望-1（有专注力，但不够严谨）",
            "effects": {
              "spirit": 1,
              "scholarship": 1,
              "reputation": -1
            }
          }
        ]
      },
      {
        "id": "research-attribute-threshold-5",
        "title": "16-17岁达标剧情：学识≥23+精神力≥20",
        "minAge": 16,
        "maxAge": 17,
        "requirements": {
          "scholarship": 23,
          "spirit": 20
        },
        "requirementText": "学识≥23+精神力≥20",
        "description": "你已经具备了扎实的科研知识和强大的精神力，能够独立完成简单的科研任务。这天，父母正在进行星舰能量优化研究，遇到了一个小瓶颈——能量传输效率始终无法提升。你主动参与研究，凭借自己学到的知识，反复分析数据，提出了一个全新的能量传输方案，经过多次实验，这个方案成功提升了能量传输效率，解决了科研瓶颈。研究院为你颁发了“科研新星”荣誉，还让你成为了父母科研团队的辅助成员。",
        "choices": [
          {
            "id": "a",
            "label": "继续努力，跟着父母学习更多的科研知识，主动承担更多的科研任务，不断提升自己的科研能力",
            "effectText": "学识+2，精神力+2，声望+2（勤奋好学，有科研潜力）",
            "effects": {
              "scholarship": 2,
              "spirit": 2,
              "reputation": 2
            }
          },
          {
            "id": "b",
            "label": "解决瓶颈后，变得骄傲自满，不再认真参与科研任务，敷衍了事，导致后续的实验出现小失误，被父母批评",
            "effectText": "学识+1，精神力+1，声望-1（有能力，但缺乏毅力和严谨性）",
            "effects": {
              "scholarship": 1,
              "spirit": 1,
              "reputation": -1
            }
          }
        ]
      }
    ]
  },
  "noble": {
    "name": "星际贵族豪门",
    "stories": [
      {
        "id": "noble-attribute-threshold-1",
        "title": "3-5岁达标剧情：魅力≥9",
        "minAge": 3,
        "maxAge": 5,
        "requirements": {
          "charm": 9
        },
        "requirementText": "魅力≥9",
        "description": "你从小学习贵族礼仪，举止优雅、乖巧懂事，魅力值慢慢提升，深受长辈和其他贵族的喜爱。这天，家族举办小型宴会，邀请了其他贵族家庭，你穿着华丽的礼服，主动向长辈们鞠躬打招呼，语气温和礼貌，还主动和其他贵族小朋友友好相处，分享自己的玩具，长辈们都夸你“有贵族风范”，还纷纷给你准备了小礼物。",
        "choices": [
          {
            "id": "a",
            "label": "礼貌地收下礼物，向每一位长辈道谢，还主动把自己的玩具分享给没有礼物的小朋友",
            "effectText": "魅力+1，声望+1，精神力+1（乖巧懂事，有爱心）",
            "effects": {
              "charm": 1,
              "reputation": 1,
              "spirit": 1
            }
          },
          {
            "id": "b",
            "label": "收下礼物后，只自己把玩，不肯分享给其他小朋友，还故意炫耀自己的礼物，被父母批评",
            "effectText": "魅力+1，体质+1，声望-1（有魅力，但过于自私）",
            "effects": {
              "charm": 1,
              "constitution": 1,
              "reputation": -1
            }
          }
        ]
      },
      {
        "id": "noble-attribute-threshold-2",
        "title": "6-9岁达标剧情：声望≥11",
        "minAge": 6,
        "maxAge": 9,
        "requirements": {
          "reputation": 11
        },
        "requirementText": "声望≥11",
        "description": "你平时严格遵守贵族礼仪，举止得体，在贵族圈层中积累了不错的声望。这天，星际贵族联盟举办“贵族小绅士/小淑女”评选，你凭借良好的口碑和优雅的举止，成功当选。联盟为你颁发了荣誉勋章，还邀请你参加贵族社交晚宴，和其他顶尖贵族子弟一起交流，父母也为你感到骄傲，觉得你很好地维护了家族的体面。",
        "choices": [
          {
            "id": "a",
            "label": "谦虚地接受荣誉，在社交晚宴上，主动和其他贵族子弟友好交流，举止优雅得体，得到了其他贵族的认可",
            "effectText": "声望+2，魅力+1，学识+1（谦虚得体，善于社交）",
            "effects": {
              "reputation": 2,
              "charm": 1,
              "scholarship": 1
            }
          },
          {
            "id": "b",
            "label": "获得荣誉后，变得骄傲自满，在晚宴上举止失礼，还看不起其他贵族子弟，被父母批评",
            "effectText": "声望+1，精神力+1，魅力-2（有声望，但过于骄傲）",
            "effects": {
              "reputation": 1,
              "spirit": 1,
              "charm": -2
            }
          }
        ]
      },
      {
        "id": "noble-attribute-threshold-3",
        "title": "10-12岁达标剧情：学识≥14",
        "minAge": 10,
        "maxAge": 12,
        "requirements": {
          "scholarship": 14
        },
        "requirementText": "学识≥14",
        "description": "你进入贵族学校后，认真学习星际通识、贵族礼仪、跨星域文化等知识，学识慢慢提升。这天，学校举办跨星域文化知识竞赛，题目涉及各个星域的历史、文化、礼仪，你凭借扎实的学识，顺利通过初赛、复赛，进入决赛，最终获得了竞赛二等奖。学校为你颁发了荣誉证书，还邀请你在全校师生面前，分享自己的学习心得，你也成为了学校里的风云人物。",
        "choices": [
          {
            "id": "a",
            "label": "谦虚地分享自己的学习心得，还主动帮助其他同学学习跨星域文化知识，带动大家一起进步",
            "effectText": "学识+2，魅力+1，声望+1（谦虚好学，乐于分享）",
            "effects": {
              "scholarship": 2,
              "charm": 1,
              "reputation": 1
            }
          },
          {
            "id": "b",
            "label": "获得奖项后，变得骄傲自满，不愿意分享学习心得，还嘲笑学习不好的同学，被老师批评",
            "effectText": "学识+1，精神力+1，魅力-1（有学识，但过于骄傲）",
            "effects": {
              "scholarship": 1,
              "spirit": 1,
              "charm": -1
            }
          }
        ]
      },
      {
        "id": "noble-attribute-threshold-4",
        "title": "13-15岁达标剧情：魅力≥18",
        "minAge": 13,
        "maxAge": 15,
        "requirements": {
          "charm": 18
        },
        "requirementText": "魅力≥18",
        "description": "你渐渐长大，举止越来越优雅，性格也越来越温和，魅力值达到了较高水平，成为了贵族圈层中最受欢迎的青少年之一。这天，跨星域贵族社交派对举办，你作为核心嘉宾被邀请参加，派对上，很多贵族子弟主动和你交流，还有的贵族长辈向你抛出橄榄枝，希望和你的家族建立合作关系。你的表现，很好地维护了家族的声望，也为家族积累了人脉。",
        "choices": [
          {
            "id": "a",
            "label": "热情、礼貌地和每一位嘉宾交流，举止优雅得体，既展现了自己的魅力，也维护了家族的体面，成功为家族拉拢了两位重要的合作伙伴",
            "effectText": "魅力+2，声望+2，学识+1（善于社交，懂得维护家族利益）",
            "effects": {
              "charm": 2,
              "reputation": 2,
              "scholarship": 1
            }
          },
          {
            "id": "b",
            "label": "在派对上，只顾着自己玩乐，不主动和嘉宾交流，还举止失礼，让父母很尴尬，也影响了家族的口碑",
            "effectText": "魅力+1，精神力+1，声望-1（有魅力，但缺乏责任感）",
            "effects": {
              "charm": 1,
              "spirit": 1,
              "reputation": -1
            }
          }
        ]
      },
      {
        "id": "noble-attribute-threshold-5",
        "title": "16-17岁达标剧情：声望≥22+学识≥20",
        "minAge": 16,
        "maxAge": 17,
        "requirements": {
          "reputation": 22,
          "scholarship": 20
        },
        "requirementText": "声望≥22+学识≥20",
        "description": "你已经具备了良好的声望和扎实的学识，能够独立代表家族参加一些小型的跨星域社交和事务洽谈。这天，家族让你代表家族，参加跨星域贵族联盟的小型会议，讨论贵族圈层的公益合作事宜。你凭借扎实的学识，提出了合理的公益方案，凭借良好的声望，说服了其他贵族代表，最终方案被采纳，你的表现得到了所有贵族代表的认可，也为家族赢得了更高的声望。",
        "choices": [
          {
            "id": "a",
            "label": "会议结束后，主动总结会议内容，向父母汇报，还提出了后续的公益执行建议，得到父母的认可",
            "effectText": "声望+2，学识+1，魅力+1（成熟稳重，有责任心）",
            "effects": {
              "reputation": 2,
              "scholarship": 1,
              "charm": 1
            }
          },
          {
            "id": "b",
            "label": "会议结束后，没有向父母汇报会议内容，也不关心后续的公益执行，只顾着自己的事情，被父母批评",
            "effectText": "声望+1，精神力+1，学识-1（有声望和学识，但缺乏责任心）",
            "effects": {
              "reputation": 1,
              "spirit": 1,
              "scholarship": -1
            }
          }
        ]
      }
    ]
  },
  "orphan": {
    "name": "星际流浪孤儿",
    "stories": [
      {
        "id": "orphan-attribute-threshold-1",
        "title": "3-5岁达标剧情：体质≥7",
        "minAge": 3,
        "maxAge": 5,
        "requirements": {
          "constitution": 7
        },
        "requirementText": "体质≥7",
        "description": "你在流民据点长大，从小就跟着长辈们拾荒、分拣物资，体质慢慢变得强壮，比其他流浪小朋友更能吃苦。这天，据点的长辈们出去拾荒，留下你和几个小朋友在据点留守，突然有一只流浪的星际野狗闯进据点，其他小朋友都吓得躲了起来，只有你鼓起勇气，捡起地上的木棍，对着野狗大声呵斥，成功把野狗赶走，保护了其他小朋友和据点的物资。长辈们回来后，都夸你勇敢、能干，还特意给你留了一份好吃的营养剂。",
        "choices": [
          {
            "id": "a",
            "label": "开心地收下营养剂，还主动安慰害怕的小朋友，说“以后我会保护你们”",
            "effectText": "体质+1，战力+1，魅力+1（勇敢无畏，有责任心）",
            "effects": {
              "constitution": 1,
              "combat": 1,
              "charm": 1
            }
          },
          {
            "id": "b",
            "label": "收下营养剂后，骄傲地向其他小朋友炫耀自己的勇敢，还故意吓唬他们，被长辈批评",
            "effectText": "体质+1，精神力+1，魅力-1（勇敢，但过于骄傲）",
            "effects": {
              "constitution": 1,
              "spirit": 1,
              "charm": -1
            }
          }
        ]
      },
      {
        "id": "orphan-attribute-threshold-2",
        "title": "6-9岁达标剧情：战力≥9",
        "minAge": 6,
        "maxAge": 9,
        "requirements": {
          "combat": 9
        },
        "requirementText": "战力≥9",
        "description": "你跟着据点的大孩子拾荒、学习基础的自我保护技巧，战力慢慢提升，能够应对简单的危险。这天，你和阿力一起去星港废弃货仓拾荒，遇到了几个调皮的流浪小朋友，想抢你们捡来的零件。你鼓起勇气，挡在阿力面前，凭借学到的技巧，成功击退了他们，保护了捡来的物资。阿力很感谢你，还教你更专业的自我保护技巧，据点的长辈们也夸你“长大了，能保护别人了”。",
        "choices": [
          {
            "id": "a",
            "label": "认真跟着阿力学技巧，还主动保护据点里的其他小朋友，不让他们被欺负",
            "effectText": "战力+2，体质+1，声望+1（勇敢无畏，乐于助人）",
            "effects": {
              "combat": 2,
              "constitution": 1,
              "reputation": 1
            }
          },
          {
            "id": "b",
            "label": "击退流浪小朋友后，变得骄傲自满，不再认真学技巧，还故意欺负据点里的弱小小朋友，被长辈批评",
            "effectText": "战力+1，精神力+1，声望-1（有战力，但性格恶劣）",
            "effects": {
              "combat": 1,
              "spirit": 1,
              "reputation": -1
            }
          }
        ]
      },
      {
        "id": "orphan-attribute-threshold-3",
        "title": "10-12岁达标剧情：精神力≥12",
        "minAge": 10,
        "maxAge": 12,
        "requirements": {
          "spirit": 12
        },
        "requirementText": "精神力≥12",
        "description": "你在据点的生活中，学会了冷静应对危险，精神力慢慢提升，能够在紧急情况下保持清醒。这天，你和长辈们一起去星港黑市交易，遇到了黑市骗子，想骗走你们捡来的值钱零件。其他长辈都很着急，只有你保持冷静，凭借自己的观察，发现了骗子的破绽，当场揭穿了骗子的阴谋，成功保住了零件，还得到了周围其他交易者的称赞。",
        "choices": [
          {
            "id": "a",
            "label": "揭穿骗子后，主动提醒周围的交易者，不要被骗子欺骗，还和长辈们一起，把骗子交给了黑市管理人员",
            "effectText": "精神力+2，声望+1，魅力+1（冷静果断，有正义感）",
            "effects": {
              "spirit": 2,
              "reputation": 1,
              "charm": 1
            }
          },
          {
            "id": "b",
            "label": "揭穿骗子后，就带着零件离开了，没有提醒其他交易者，还觉得“多一事不如少一事”",
            "effectText": "精神力+1，战力+1，声望-1（冷静，但缺乏正义感）",
            "effects": {
              "spirit": 1,
              "combat": 1,
              "reputation": -1
            }
          }
        ]
      },
      {
        "id": "orphan-attribute-threshold-4",
        "title": "13-15岁达标剧情：声望≥14",
        "minAge": 13,
        "maxAge": 15,
        "requirements": {
          "reputation": 14
        },
        "requirementText": "声望≥14",
        "description": "你平时在据点里，乐于助人，主动帮助长辈们拾荒、分拣物资，还保护弱小的小朋友，声望慢慢提升，成为了据点里小朋友们的榜样。这天，据点里的长辈们商量，要选出一个“据点小管家”，负责协助长辈们管理据点的物资、照顾小朋友，大家一致投票选你。你成为小管家后，认真负责，把据点的物资整理得整整齐齐，还主动照顾生病的小朋友，得到了所有流民的认可。",
        "choices": [
          {
            "id": "a",
            "label": "认真履行小管家的职责，合理分配物资，照顾好每一位小朋友，主动向长辈们汇报据点的情况，成为长辈们的得力助手",
            "effectText": "声望+2，魅力+1，精神力+1（责任心强，善于管理）",
            "effects": {
              "reputation": 2,
              "charm": 1,
              "spirit": 1
            }
          },
          {
            "id": "b",
            "label": "成为小管家后，变得骄傲自满，不再认真履行职责，还随意分配物资，偏袒自己喜欢的小朋友，被长辈们批评",
            "effectText": "声望+1，精神力+1，魅力-2（有声望，但缺乏责任心）",
            "effects": {
              "reputation": 1,
              "spirit": 1,
              "charm": -2
            }
          }
        ]
      },
      {
        "id": "orphan-attribute-threshold-5",
        "title": "16-17岁达标剧情：体质≥19+战力≥20",
        "minAge": 16,
        "maxAge": 17,
        "requirements": {
          "constitution": 19,
          "combat": 20
        },
        "requirementText": "体质≥19+战力≥20",
        "description": "你经过多年的拾荒和自我保护训练，体质和战力都达到了较高水平，能够独立应对各种危险。这天，星际流民敌对势力突袭据点，抢夺物资、伤害流民，据点里的长辈们都奋力抵抗，但敌对势力人多势众，渐渐落入下风。你主动冲上前，凭借强悍的战力，击退了多名敌对势力成员，还带领其他年轻的流民，保护长辈和小朋友转移，成功守住了据点的部分物资，减少了损失。",
        "choices": [
          {
            "id": "a",
            "label": "转移完成后，主动留下来，和长辈们一起警戒，防止敌对势力再次突袭，直到确认安全才休息",
            "effectText": "体质+1，战力+2，声望+2（勇敢无畏，责任心强，成为据点的主心骨）",
            "effects": {
              "constitution": 1,
              "combat": 2,
              "reputation": 2
            }
          },
          {
            "id": "b",
            "label": "击退敌对势力后，觉得太累，偷偷离开了据点，没有参与后续的警戒和物资整理，被长辈们批评",
            "effectText": "体质+1，战力+1，声望-2（有实力，但缺乏毅力和责任心）",
            "effects": {
              "constitution": 1,
              "combat": 1,
              "reputation": -2
            }
          }
        ]
      }
    ]
  },
  "merchant": {
    "name": "星际商贸财团",
    "stories": [
      {
        "id": "merchant-attribute-threshold-1",
        "title": "3-5岁达标剧情：学识≥8",
        "minAge": 3,
        "maxAge": 5,
        "requirements": {
          "scholarship": 8
        },
        "requirementText": "学识≥8",
        "description": "你从小跟着父母参观星舰货仓、认识特产，学习简单的商业知识，学识慢慢提升，比同龄小朋友更了解跨星域特产。这天，父母带你来星港特产市场，故意问你“这是哪个星域的香料”“这个矿石能卖多少钱”，你凭借平时学到的知识，准确地回答了所有问题，还能说出简单的特产用途，父母都很惊讶，觉得你很有商业天赋，特意给你买了一套迷你商贸玩具，让你模拟交易。",
        "choices": [
          {
            "id": "a",
            "label": "开心地收下玩具，主动和父母模拟交易，认真学习讨价还价的技巧，还向父母提问“为什么这个特产比那个贵”",
            "effectText": "学识+1，财富+1，精神力+1（求知欲强，有商业天赋）",
            "effects": {
              "scholarship": 1,
              "wealth": 1,
              "spirit": 1
            }
          },
          {
            "id": "b",
            "label": "收下玩具后，只玩了一会儿就丢在一边，不再感兴趣，跑去玩其他玩具",
            "effectText": "学识+1，体质+1，财富-1（有天赋，但缺乏专注力）",
            "effects": {
              "scholarship": 1,
              "constitution": 1,
              "wealth": -1
            }
          }
        ]
      },
      {
        "id": "merchant-attribute-threshold-2",
        "title": "6-9岁达标剧情：财富≥10",
        "minAge": 6,
        "maxAge": 9,
        "requirements": {
          "wealth": 10
        },
        "requirementText": "财富≥10",
        "description": "你平时帮父母整理账本、售卖特产，慢慢积累了一些自己的星港币，财富值达到了一定水平。这天，父母让你尝试自己独立售卖一些简单的特产，把卖来的钱自己保管。你凭借学到的商业技巧，热情接待顾客，合理讨价还价，成功卖掉了所有特产，还赚了一笔额外的星港币。父母看到后，非常欣慰，允许你用自己赚的钱，买自己喜欢的东西。",
        "choices": [
          {
            "id": "a",
            "label": "用自己赚的钱，买了一本商业科普书籍，还剩下一部分钱存起来，说“以后我要赚更多的钱”",
            "effectText": "财富+1，学识+1，精神力+1（有商业意识，懂得规划）",
            "effects": {
              "wealth": 1,
              "scholarship": 1,
              "spirit": 1
            }
          },
          {
            "id": "b",
            "label": "把赚来的钱全部花掉，买了很多玩具和零食，没有剩下一分钱，还向父母索要更多的钱",
            "effectText": "财富+1，体质+1，魅力-1（有赚钱能力，但不懂规划，过于任性）",
            "effects": {
              "wealth": 1,
              "constitution": 1,
              "charm": -1
            }
          }
        ]
      },
      {
        "id": "merchant-attribute-threshold-3",
        "title": "10-12岁达标剧情：魅力≥14",
        "minAge": 10,
        "maxAge": 12,
        "requirements": {
          "charm": 14
        },
        "requirementText": "魅力≥14",
        "description": "你平时跟着父母拜访商业伙伴、售卖特产，慢慢学会了礼貌沟通、热情服务，魅力值慢慢提升。这天，星港举办青少年商贸体验活动，你代表家族参加，负责售卖家族的特产。你热情接待每一位顾客，主动介绍特产的特点和价值，耐心解答顾客的问题，还善于讨价还价，成功卖掉了很多特产，得到了活动主办方的认可，还获得了“最佳销售小能手”称号。",
        "choices": [
          {
            "id": "a",
            "label": "谦虚地接受称号，还主动向其他参与者分享自己的销售技巧，帮助大家提升销量",
            "effectText": "魅力+2，财富+1，声望+1（善于沟通，乐于分享，有商业能力）",
            "effects": {
              "charm": 2,
              "wealth": 1,
              "reputation": 1
            }
          },
          {
            "id": "b",
            "label": "获得称号后，变得骄傲自满，不再认真售卖特产，还嘲笑其他参与者销量差，被父母批评",
            "effectText": "魅力+1，精神力+1，声望-1（有魅力，但过于骄傲）",
            "effects": {
              "charm": 1,
              "spirit": 1,
              "reputation": -1
            }
          }
        ]
      },
      {
        "id": "merchant-attribute-threshold-4",
        "title": "13-15岁达标剧情：学识≥18",
        "minAge": 13,
        "maxAge": 15,
        "requirements": {
          "scholarship": 18
        },
        "requirementText": "学识≥18",
        "description": "你平时认真学习跨星域商贸知识、关税规则、市场规律，学识水平快速提升，能够独立分析简单的市场行情。这天，父母让你分析一款新特产的市场前景，包括产地、价值、目标客户、竞争情况等。你凭借扎实的学识，认真分析市场数据，写出了详细的分析报告，准确预测了这款特产的市场前景，还提出了合理的销售建议，父母采纳了你的建议，这款特产上市后，销量非常好。",
        "choices": [
          {
            "id": "a",
            "label": "继续关注这款特产的销售情况，及时向父母反馈市场变化，提出优化销售策略的建议，帮助提升销量",
            "effectText": "学识+2，财富+1，声望+1（严谨认真，有商业思维）",
            "effects": {
              "scholarship": 2,
              "wealth": 1,
              "reputation": 1
            }
          },
          {
            "id": "b",
            "label": "写出分析报告后，就不再关注后续的销售情况，父母询问时，也答不上来，被父母提醒",
            "effectText": "学识+1，精神力+1，财富-1（有学识，但缺乏责任心）",
            "effects": {
              "scholarship": 1,
              "spirit": 1,
              "wealth": -1
            }
          }
        ]
      },
      {
        "id": "merchant-attribute-threshold-5",
        "title": "16-17岁达标剧情：财富≥25+声望≥20",
        "minAge": 16,
        "maxAge": 17,
        "requirements": {
          "wealth": 25,
          "reputation": 20
        },
        "requirementText": "财富≥25+声望≥20",
        "description": "你经过多年的商业实践，积累了一定的财富和声望，能够独立负责家族的小型商贸业务。这天，父母让你独立负责一款跨星域特产的运输和销售，涉及航线选择、关税测算、客户对接等关键环节。你凭借扎实的商业知识和良好的声望，合理选择航线，精准测算关税，成功对接了多位核心客户，这款特产的销售额远超预期，还为家族拓展了新的客户资源，父母决定让你参与家族核心商贸业务的决策。",
        "choices": [
          {
            "id": "a",
            "label": "认真总结这次业务的经验，向父母汇报详细的销售数据和客户反馈，还提出了拓展新特产、新航线的建议，得到父母的认可",
            "effectText": "财富+2，声望+2，学识+1（成熟稳重，有商业战略思维）",
            "effects": {
              "wealth": 2,
              "reputation": 2,
              "scholarship": 1
            }
          },
          {
            "id": "b",
            "label": "业务成功后，变得骄傲自满，不再认真负责后续的客户维护，导致部分客户流失，被父母批评",
            "effectText": "财富+1，精神力+1，声望-1（有商业能力，但缺乏毅力和责任心）",
            "effects": {
              "wealth": 1,
              "spirit": 1,
              "reputation": -1
            }
          }
        ]
      }
    ]
  }
};

const RELATIONSHIP_NPCS = [
  {
    id: "wen-yu",
    familyId: "civilian",
    familyName: "星际平民家庭",
    name: "温屿",
    bondType: "社区伙伴",
    secondGender: "未分化（18岁分化为Beta，温柔型）",
    role: "星港便利店邻居家的孩子，父母是星港后勤工作人员，和主角一起长大。",
    summary: "从3岁帮他捡起水果糖开始，温屿每天都会来便利店找主角玩，逐渐成为主角童年至青春期最亲密的伙伴。",
    bondPoint: "会记住主角不爱吃的水果，每次来都带主角爱吃的水果糖；口头禅是“别着急，我帮你”。",
    triggers: "魅力≥8（3-5岁）、声望≥10（6-9岁）、体质≥18（16-17岁）。",
    complete: true
  },
  {
    id: "lu-xingci",
    familyId: "military",
    familyName: "星际军团世家",
    name: "陆星辞",
    bondType: "训练同伴",
    secondGender: "未分化（18岁分化为Alpha，战力型）",
    role: "星际军团校尉之子，主角的堂兄/同家族子弟，从小在军团家属区一起训练。",
    summary: "3岁体能拉练时，主角帮他捡起掉落的军团徽章；之后两人一起早训、参观枪械室、完成模拟战术推演。",
    bondPoint: "会攒军团纪念徽章送给主角，主角训练受伤时会默默处理伤口；口头禅是“有我在，不会让你出事”。",
    triggers: "体质≥9（3-5岁）、战力≥10（6-9岁）、战力≥22且精神力≥18（16-17岁）。",
    complete: true
  },
  {
    id: "shen-zhiyu",
    familyId: "research",
    familyName: "星际科研世家",
    name: "沈知予",
    bondType: "知识同伴",
    secondGender: "未分化（18岁分化为Beta，科研型）",
    role: "星际研究院科研人员之子，主角的邻居/同学，也是常一起讨论问题的学习伙伴。",
    summary: "主角跟着父母做实验时认识沈知予，他耐心解答主角的问题，之后一起看绘本、做实验、观测星象。",
    bondPoint: "会把整理好的知识点笔记送给主角，在实验时默默守在旁边；口头禅是“这个地方，我教你”。",
    triggers: "学识≥8（3-5岁）、精神力≥12（6-9岁）、学识≥23且精神力≥20（16-17岁）。",
    complete: true
  },
  {
    id: "fu-jingran",
    familyId: "noble",
    familyName: "星际贵族豪门",
    name: "傅景然",
    bondType: "礼仪同伴",
    secondGender: "未分化（18岁分化为Alpha，贵族型）",
    role: "跨星域贵族傅家之子，主角的世交子弟，从小接受贵族礼仪训练。",
    summary: "家族晚宴上，傅景然主动向主角鞠躬打招呼，把贵族小玩具分享给主角，之后成为主角的礼仪小老师。",
    bondPoint: "会记住主角的礼仪习惯，在社交场合始终陪在主角身边维护体面；口头禅是“别慌，有我陪着你”。",
    triggers: "魅力≥9（3-5岁）、声望≥11（6-9岁）、声望≥22且学识≥20（16-17岁）。",
    complete: true
  },
  {
    id: "jiang-xu",
    familyId: "orphan",
    familyName: "星际流浪孤儿",
    name: "江叙",
    bondType: "互助伙伴",
    secondGender: "未分化（18岁分化为Omega，治愈型）",
    role: "和主角一同在星际孤儿收容所长大的伙伴，父母是星际货运船员，在航行中失踪后被送入收容所，比主角早入所半年。",
    summary: "主角被送入收容所哭闹时，江叙把自己唯一的小饼干分给主角；之后两人一起整理物资、应对欺负、打工攒钱，约定未来一起离开收容所。",
    bondPoint: "会复刻父母留下的星际货运徽章送给主角，寓意“一起守护彼此”；口头禅是“别怕，我一直都在”。",
    triggers: "精神力≥8（3-5岁）、体质≥12（6-9岁）、学识≥17且精神力≥21（16-17岁）。",
    complete: true
  },
  {
    id: "song-yanzhou",
    familyId: "merchant",
    familyName: "星际商贸财团",
    name: "宋砚舟",
    bondType: "贸易搭档",
    secondGender: "未分化（18岁分化为Alpha，商业型）",
    role: "星际星贸巨头宋家之子，主角家族的世交伙伴，从小跟着父母学习星际贸易，擅长谈判、数据分析和货物调配。",
    summary: "两家贸易洽谈会上，宋砚舟把迷你星际货船模型分享给主角；之后一起学贸易知识、观摩洽谈、完成第一次独立谈判，并肩参与跨星域贸易项目。",
    bondPoint: "会给主角定制贸易笔记本，也会在贸易洽谈后带一份星际特产；口头禅是“别担心，我们一起解决”。",
    triggers: "学识≥7（3-5岁）、声望≥12（6-9岁）、学识≥21且财富≥28（16-17岁）。",
    complete: true
  }
];

const RANDOM_NPC_WORD_BANKS = {
  surnames: ["陆", "沈", "傅", "江", "宋", "温", "顾", "许", "林", "谢", "苏", "纪", "程", "韩", "白", "洛", "秦", "尹", "季", "闻"],
  givenNames: ["星辞", "知予", "砚舟", "景然", "屿", "叙", "听澜", "予川", "清棠", "星遥", "知微", "晚晴", "临渊", "行舟", "昭宁", "云舒", "南枝", "闻溪", "景珩", "知遥"],
  personalities: ["温柔细腻", "傲娇嘴硬", "冷静克制", "开朗直率", "沉默可靠", "认真守序", "敏感坚韧", "聪慧圆滑", "骄矜得体", "毒舌但护短"],
  habits: ["会把随身小物整理得一丝不乱", "紧张时会轻轻捏住袖口", "总把重要约定写进小本子", "喜欢把见过的星舰编号记下来", "会悄悄记住别人不爱吃的东西", "说话前习惯先看向主角确认反应"],
  weaknesses: ["害怕被重要的人丢下", "不擅长直接表达关心", "面对夸奖会明显慌乱", "过度在意自己是否可靠", "遇到陌生环境会下意识沉默", "一旦认定目标就容易逞强"],
  bondTypes: ["社区伙伴", "训练同伴", "知识同伴", "礼仪同伴", "互助伙伴", "贸易搭档", "明朗玩伴", "别扭竞争者", "可靠搭档", "秘密同盟"],
  catchphrases: ["别急，我陪你一起想办法", "有我在，你不用一个人撑着", "这件事交给我，我们一起完成", "下次也一起吧", "别怕，我会站在你这边", "你想去哪里，我都可以陪你"],
  secondGender: [
    { value: "Alpha", detail: "冷调木质香", weight: 25 },
    { value: "Beta", detail: "浅草木香", weight: 50 },
    { value: "Omega", detail: "白茶淡香", weight: 25 }
  ]
};

const RANDOM_NPC_FAMILY_THEMES = {
  civilian: {
    familyName: "星际平民家庭",
    identity: "星港生活圈里的同龄孩子",
    primaryAttribute: "charm",
    secondaryAttribute: "reputation",
    roles: ["便利店邻居家的孩子", "星港后勤人员子女", "社区课堂同学", "民生署活动志愿小伙伴"],
    meetings: ["在便利店门口帮你扶起散落的货箱", "在社区课堂把多余的水果糖递给你", "在星港走廊和你一起躲过拥挤人潮", "在民生署志愿点与你一起整理物资"]
  },
  military: {
    familyName: "星际军团世家",
    identity: "军团家属区里的训练同伴",
    primaryAttribute: "combat",
    secondaryAttribute: "constitution",
    roles: ["预备军校生", "军团子弟", "训练场同伴", "战术课临时搭档"],
    meetings: ["在低重力训练舱旁替你递来护具", "在军团早训队列里与你并肩站定", "在模拟战术课后帮你复盘失误", "在器械室门口悄悄提醒你检查装备"]
  },
  research: {
    familyName: "星际科研世家",
    identity: "研究院生活区里的知识伙伴",
    primaryAttribute: "scholarship",
    secondaryAttribute: "spirit",
    roles: ["研究员子女", "实验助手候补", "图书馆同学", "观测室记录员"],
    meetings: ["在研究院走廊帮你捡起散落的资料", "在图书馆同一排星图前与你相遇", "在实验观察窗边小声解释仪器读数", "在夜间观测课后与你交换笔记"]
  },
  noble: {
    familyName: "星际贵族豪门",
    identity: "贵族社交圈里的世交子弟",
    primaryAttribute: "reputation",
    secondaryAttribute: "charm",
    roles: ["世交家族子弟", "礼仪课同伴", "宴会临席来宾", "外交课程搭档"],
    meetings: ["在宴会角落向你递来一杯温水", "在礼仪课上悄悄替你纠正站姿", "在贵族茶会中帮你挡下尖锐追问", "在家族走廊里与你交换一枚邀请徽章"]
  },
  orphan: {
    familyName: "星际流浪孤儿",
    identity: "收容所与流浪据点里的同伴",
    primaryAttribute: "spirit",
    secondaryAttribute: "constitution",
    roles: ["收容所孩子", "流浪据点伙伴", "临时工同伴", "物资站排队邻座"],
    meetings: ["在收容所角落把半块压缩饼干分给你", "在物资站队伍里替你占住位置", "在屋顶看星星时与你分享旧货运徽章", "在临时工登记处小声提醒你别漏填表格"]
  },
  merchant: {
    familyName: "星际商贸财团",
    identity: "星贸圈与航线课堂里的合作伙伴",
    primaryAttribute: "wealth",
    secondaryAttribute: "scholarship",
    roles: ["贸易伙伴", "财团旁支子弟", "星舰乘客", "星贸课程同学"],
    meetings: ["在贸易洽谈会外把迷你货船模型展示给你", "在航线课堂上与你一起计算关税", "在星舰观景窗前和你讨论货物流向", "在特产摊位旁邀请你试着完成一笔交换"]
  }
};

const NARRATIVE_DICE_CHANCE = 0.35;

const NARRATIVE_DICE_EVENTS = [
  {
    "id": "dice-001",
    "event": "停电夜被困训练馆",
    "conflict": "误会升级，双方都不肯先解释",
    "reversal": "匿名线索证实TA一直在暗中保护你"
  },
  {
    "id": "dice-002",
    "event": "医务室偶遇受伤的TA",
    "conflict": "第三人介入引发吃醋",
    "reversal": "所谓“第三人”其实是亲属/医师"
  },
  {
    "id": "dice-003",
    "event": "收到匿名鼓励纸条",
    "conflict": "上级命令与个人情感冲突",
    "reversal": "你误会的那句狠话是录音剪辑"
  },
  {
    "id": "dice-004",
    "event": "模拟战分到对立阵营",
    "conflict": "保密协议限制，不能说真话",
    "reversal": "调令被撤回，但代价是共同降级"
  },
  {
    "id": "dice-005",
    "event": "暴雨夜共撑一把伞",
    "conflict": "旧伤复发却逞强隐瞒",
    "reversal": "TA早已写好把你设为紧急联系人"
  },
  {
    "id": "dice-006",
    "event": "误拿TA通讯器",
    "conflict": "资源不足，只能保一个方案",
    "reversal": "失败任务其实是上级压力测试"
  },
  {
    "id": "dice-007",
    "event": "复盘会上被点名质疑",
    "conflict": "舆论压力逼迫表态",
    "reversal": "被删的数据可从备份恢复，还多出一封告白草稿"
  },
  {
    "id": "dice-008",
    "event": "庆功宴邻座",
    "conflict": "家庭立场强烈反对",
    "reversal": "舆论风向反转，你们被评为最佳搭档"
  },
  {
    "id": "dice-009",
    "event": "发烧请假在宿舍休息",
    "conflict": "时间截止将至，必须立刻决定",
    "reversal": "反对最强的家人突然松口"
  },
  {
    "id": "dice-010",
    "event": "夜巡突发警报",
    "conflict": "价值观分歧（求稳/冒险）",
    "reversal": "你们被临时绑定为长期双人编组"
  },
  {
    "id": "dice-011",
    "event": "流言在学院扩散",
    "conflict": "一方想公开，一方想保密",
    "reversal": "抑制器故障后，TA只对你信息素稳定"
  },
  {
    "id": "dice-012",
    "event": "通宵维修设备",
    "conflict": "过去黑历史被翻出",
    "reversal": "你准备离开时，TA递交了同行申请"
  },
  {
    "id": "dice-013",
    "event": "出任务前整备装备",
    "conflict": "身份差距带来自卑/压力",
    "reversal": "那份“相亲资料”是TA主动拦下的"
  },
  {
    "id": "dice-014",
    "event": "观测台看流星",
    "conflict": "临时失联造成不信任",
    "reversal": "热搜曝光后，你们反而获得公开关系许可"
  },
  {
    "id": "dice-015",
    "event": "约定地点迟到",
    "conflict": "任务失败后的责任归属",
    "reversal": "旧案真凶另有其人，TA沉冤得雪"
  },
  {
    "id": "dice-016",
    "event": "收到外派调令",
    "conflict": "分化波动导致情绪失控",
    "reversal": "终局前夜，TA交给你写好名字的誓约环"
  },
  {
    "id": "dice-017",
    "event": "执行伪装情侣任务",
    "conflict": "创伤应激触发，无法冷静沟通",
    "reversal": "你以为的分别，其实是惊喜求婚布局"
  },
  {
    "id": "dice-018",
    "event": "TA分化前状态不稳",
    "conflict": "被迫异地，沟通频率骤降",
    "reversal": "冷战期间TA每天都在门口放药和早餐"
  },
  {
    "id": "dice-019",
    "event": "你任务中失误",
    "conflict": "奖励名额只有一个",
    "reversal": "失联归来第一句话是“我回来了，先抱一下”"
  },
  {
    "id": "dice-020",
    "event": "返航名单公布",
    "conflict": "“保护你”与“尊重你”发生冲突",
    "reversal": "事件结束后解锁隐藏支线：共同生活计划"
  },
  {
    "id": "dice-021",
    "event": "射击课双人指导",
    "conflict": "误会升级，双方都不肯先解释",
    "reversal": "匿名线索证实TA一直在暗中保护你"
  },
  {
    "id": "dice-022",
    "event": "仓库整理旧物",
    "conflict": "第三人介入引发吃醋",
    "reversal": "所谓“第三人”其实是亲属/医师"
  },
  {
    "id": "dice-023",
    "event": "冷战后首次见面",
    "conflict": "上级命令与个人情感冲突",
    "reversal": "你误会的那句狠话是录音剪辑"
  },
  {
    "id": "dice-024",
    "event": "联谊会被迫参加",
    "conflict": "保密协议限制，不能说真话",
    "reversal": "调令被撤回，但代价是共同降级"
  },
  {
    "id": "dice-025",
    "event": "授勋典礼彩排",
    "conflict": "旧伤复发却逞强隐瞒",
    "reversal": "TA早已写好把你设为紧急联系人"
  },
  {
    "id": "dice-026",
    "event": "噩梦后惊醒",
    "conflict": "资源不足，只能保一个方案",
    "reversal": "失败任务其实是上级压力测试"
  },
  {
    "id": "dice-027",
    "event": "TA生日执勤",
    "conflict": "舆论压力逼迫表态",
    "reversal": "被删的数据可从备份恢复，还多出一封告白草稿"
  },
  {
    "id": "dice-028",
    "event": "模拟舱神经共感",
    "conflict": "家庭立场强烈反对",
    "reversal": "舆论风向反转，你们被评为最佳搭档"
  },
  {
    "id": "dice-029",
    "event": "信息素抑制器故障",
    "conflict": "时间截止将至，必须立刻决定",
    "reversal": "反对最强的家人突然松口"
  },
  {
    "id": "dice-030",
    "event": "救助故障机械宠物",
    "conflict": "价值观分歧（求稳/冒险）",
    "reversal": "你们被临时绑定为长期双人编组"
  },
  {
    "id": "dice-031",
    "event": "体能考核前夜",
    "conflict": "一方想公开，一方想保密",
    "reversal": "抑制器故障后，TA只对你信息素稳定"
  },
  {
    "id": "dice-032",
    "event": "TA被误会走后门",
    "conflict": "过去黑历史被翻出",
    "reversal": "你准备离开时，TA递交了同行申请"
  },
  {
    "id": "dice-033",
    "event": "进修名额公示",
    "conflict": "身份差距带来自卑/压力",
    "reversal": "那份“相亲资料”是TA主动拦下的"
  },
  {
    "id": "dice-034",
    "event": "战术课公开辩论",
    "conflict": "临时失联造成不信任",
    "reversal": "热搜曝光后，你们反而获得公开关系许可"
  },
  {
    "id": "dice-035",
    "event": "同住观察营",
    "conflict": "任务失败后的责任归属",
    "reversal": "旧案真凶另有其人，TA沉冤得雪"
  },
  {
    "id": "dice-036",
    "event": "TA旧伤复发",
    "conflict": "分化波动导致情绪失控",
    "reversal": "终局前夜，TA交给你写好名字的誓约环"
  },
  {
    "id": "dice-037",
    "event": "边境站跨年",
    "conflict": "创伤应激触发，无法冷静沟通",
    "reversal": "你以为的分别，其实是惊喜求婚布局"
  },
  {
    "id": "dice-038",
    "event": "紧急联系人设置",
    "conflict": "被迫异地，沟通频率骤降",
    "reversal": "冷战期间TA每天都在门口放药和早餐"
  },
  {
    "id": "dice-039",
    "event": "数据误删事故",
    "conflict": "奖励名额只有一个",
    "reversal": "失联归来第一句话是“我回来了，先抱一下”"
  },
  {
    "id": "dice-040",
    "event": "心理访谈抽问信任对象",
    "conflict": "“保护你”与“尊重你”发生冲突",
    "reversal": "事件结束后解锁隐藏支线：共同生活计划"
  },
  {
    "id": "dice-041",
    "event": "TA为你违令",
    "conflict": "误会升级，双方都不肯先解释",
    "reversal": "匿名线索证实TA一直在暗中保护你"
  },
  {
    "id": "dice-042",
    "event": "你准备告白",
    "conflict": "第三人介入引发吃醋",
    "reversal": "所谓“第三人”其实是亲属/医师"
  },
  {
    "id": "dice-043",
    "event": "成绩榜更新",
    "conflict": "上级命令与个人情感冲突",
    "reversal": "你误会的那句狠话是录音剪辑"
  },
  {
    "id": "dice-044",
    "event": "当众被喊专属称呼",
    "conflict": "保密协议限制，不能说真话",
    "reversal": "调令被撤回，但代价是共同降级"
  },
  {
    "id": "dice-045",
    "event": "撤离时通讯中断",
    "conflict": "旧伤复发却逞强隐瞒",
    "reversal": "TA早已写好把你设为紧急联系人"
  },
  {
    "id": "dice-046",
    "event": "共写五年计划",
    "conflict": "资源不足，只能保一个方案",
    "reversal": "失败任务其实是上级压力测试"
  },
  {
    "id": "dice-047",
    "event": "TA家人突然来访",
    "conflict": "舆论压力逼迫表态",
    "reversal": "被删的数据可从备份恢复，还多出一封告白草稿"
  },
  {
    "id": "dice-048",
    "event": "长期潜伏任务启动",
    "conflict": "家庭立场强烈反对",
    "reversal": "舆论风向反转，你们被评为最佳搭档"
  },
  {
    "id": "dice-049",
    "event": "告白夜突发战备",
    "conflict": "时间截止将至，必须立刻决定",
    "reversal": "反对最强的家人突然松口"
  },
  {
    "id": "dice-050",
    "event": "战后重建志愿报名",
    "conflict": "价值观分歧（求稳/冒险）",
    "reversal": "你们被临时绑定为长期双人编组"
  },
  {
    "id": "dice-051",
    "event": "电梯故障被困",
    "conflict": "一方想公开，一方想保密",
    "reversal": "抑制器故障后，TA只对你信息素稳定"
  },
  {
    "id": "dice-052",
    "event": "更衣室门禁失灵",
    "conflict": "过去黑历史被翻出",
    "reversal": "你准备离开时，TA递交了同行申请"
  },
  {
    "id": "dice-053",
    "event": "公共厨房一起做饭",
    "conflict": "身份差距带来自卑/压力",
    "reversal": "那份“相亲资料”是TA主动拦下的"
  },
  {
    "id": "dice-054",
    "event": "训练后拉伸",
    "conflict": "临时失联造成不信任",
    "reversal": "热搜曝光后，你们反而获得公开关系许可"
  },
  {
    "id": "dice-055",
    "event": "图书舱自习",
    "conflict": "任务失败后的责任归属",
    "reversal": "旧案真凶另有其人，TA沉冤得雪"
  },
  {
    "id": "dice-056",
    "event": "广播站值班",
    "conflict": "分化波动导致情绪失控",
    "reversal": "终局前夜，TA交给你写好名字的誓约环"
  },
  {
    "id": "dice-057",
    "event": "档案室查旧案",
    "conflict": "创伤应激触发，无法冷静沟通",
    "reversal": "你以为的分别，其实是惊喜求婚布局"
  },
  {
    "id": "dice-058",
    "event": "武器库例行检查",
    "conflict": "被迫异地，沟通频率骤降",
    "reversal": "冷战期间TA每天都在门口放药和早餐"
  },
  {
    "id": "dice-059",
    "event": "医疗复查排队",
    "conflict": "奖励名额只有一个",
    "reversal": "失联归来第一句话是“我回来了，先抱一下”"
  },
  {
    "id": "dice-060",
    "event": "后勤仓搬运补给",
    "conflict": "“保护你”与“尊重你”发生冲突",
    "reversal": "事件结束后解锁隐藏支线：共同生活计划"
  },
  {
    "id": "dice-061",
    "event": "跑道晨训打卡",
    "conflict": "误会升级，双方都不肯先解释",
    "reversal": "匿名线索证实TA一直在暗中保护你"
  },
  {
    "id": "dice-062",
    "event": "夜航日志整理",
    "conflict": "第三人介入引发吃醋",
    "reversal": "所谓“第三人”其实是亲属/医师"
  },
  {
    "id": "dice-063",
    "event": "天台吹风",
    "conflict": "上级命令与个人情感冲突",
    "reversal": "你误会的那句狠话是录音剪辑"
  },
  {
    "id": "dice-064",
    "event": "校车末班车",
    "conflict": "保密协议限制，不能说真话",
    "reversal": "调令被撤回，但代价是共同降级"
  },
  {
    "id": "dice-065",
    "event": "失物招领处认领物品",
    "conflict": "旧伤复发却逞强隐瞒",
    "reversal": "TA早已写好把你设为紧急联系人"
  },
  {
    "id": "dice-066",
    "event": "纪念馆参观",
    "conflict": "资源不足，只能保一个方案",
    "reversal": "失败任务其实是上级压力测试"
  },
  {
    "id": "dice-067",
    "event": "社团招新日",
    "conflict": "舆论压力逼迫表态",
    "reversal": "被删的数据可从备份恢复，还多出一封告白草稿"
  },
  {
    "id": "dice-068",
    "event": "公开演讲抽签",
    "conflict": "家庭立场强烈反对",
    "reversal": "舆论风向反转，你们被评为最佳搭档"
  },
  {
    "id": "dice-069",
    "event": "辩论赛同队",
    "conflict": "时间截止将至，必须立刻决定",
    "reversal": "反对最强的家人突然松口"
  },
  {
    "id": "dice-070",
    "event": "竞速赛并道",
    "conflict": "价值观分歧（求稳/冒险）",
    "reversal": "你们被临时绑定为长期双人编组"
  },
  {
    "id": "dice-071",
    "event": "机甲展外勤",
    "conflict": "一方想公开，一方想保密",
    "reversal": "抑制器故障后，TA只对你信息素稳定"
  },
  {
    "id": "dice-072",
    "event": "城区停水志愿服务",
    "conflict": "过去黑历史被翻出",
    "reversal": "你准备离开时，TA递交了同行申请"
  },
  {
    "id": "dice-073",
    "event": "灾后临时安置点支援",
    "conflict": "身份差距带来自卑/压力",
    "reversal": "那份“相亲资料”是TA主动拦下的"
  },
  {
    "id": "dice-074",
    "event": "药剂室补货",
    "conflict": "临时失联造成不信任",
    "reversal": "热搜曝光后，你们反而获得公开关系许可"
  },
  {
    "id": "dice-075",
    "event": "舆情中心实习轮岗",
    "conflict": "任务失败后的责任归属",
    "reversal": "旧案真凶另有其人，TA沉冤得雪"
  },
  {
    "id": "dice-076",
    "event": "星港安检排队",
    "conflict": "分化波动导致情绪失控",
    "reversal": "终局前夜，TA交给你写好名字的誓约环"
  },
  {
    "id": "dice-077",
    "event": "票务系统崩溃抢修",
    "conflict": "创伤应激触发，无法冷静沟通",
    "reversal": "你以为的分别，其实是惊喜求婚布局"
  },
  {
    "id": "dice-078",
    "event": "返乡航线延误",
    "conflict": "被迫异地，沟通频率骤降",
    "reversal": "冷战期间TA每天都在门口放药和早餐"
  },
  {
    "id": "dice-079",
    "event": "行李超重托运口",
    "conflict": "奖励名额只有一个",
    "reversal": "失联归来第一句话是“我回来了，先抱一下”"
  },
  {
    "id": "dice-080",
    "event": "旅宿超订只剩一间房",
    "conflict": "“保护你”与“尊重你”发生冲突",
    "reversal": "事件结束后解锁隐藏支线：共同生活计划"
  },
  {
    "id": "dice-081",
    "event": "同传任务临时救场",
    "conflict": "误会升级，双方都不肯先解释",
    "reversal": "匿名线索证实TA一直在暗中保护你"
  },
  {
    "id": "dice-082",
    "event": "发布会后台混乱",
    "conflict": "第三人介入引发吃醋",
    "reversal": "所谓“第三人”其实是亲属/医师"
  },
  {
    "id": "dice-083",
    "event": "灯光架险些坠落",
    "conflict": "上级命令与个人情感冲突",
    "reversal": "你误会的那句狠话是录音剪辑"
  },
  {
    "id": "dice-084",
    "event": "公共交通故障停摆",
    "conflict": "保密协议限制，不能说真话",
    "reversal": "调令被撤回，但代价是共同降级"
  },
  {
    "id": "dice-085",
    "event": "沙尘预警封路",
    "conflict": "旧伤复发却逞强隐瞒",
    "reversal": "TA早已写好把你设为紧急联系人"
  },
  {
    "id": "dice-086",
    "event": "暴雪导致停航",
    "conflict": "资源不足，只能保一个方案",
    "reversal": "失败任务其实是上级压力测试"
  },
  {
    "id": "dice-087",
    "event": "海外殖民站求援讯号",
    "conflict": "舆论压力逼迫表态",
    "reversal": "被删的数据可从备份恢复，还多出一封告白草稿"
  },
  {
    "id": "dice-088",
    "event": "误入禁区触发警铃",
    "conflict": "家庭立场强烈反对",
    "reversal": "舆论风向反转，你们被评为最佳搭档"
  },
  {
    "id": "dice-089",
    "event": "保密协议签署日",
    "conflict": "时间截止将至，必须立刻决定",
    "reversal": "反对最强的家人突然松口"
  },
  {
    "id": "dice-090",
    "event": "匿名包裹送达",
    "conflict": "价值观分歧（求稳/冒险）",
    "reversal": "你们被临时绑定为长期双人编组"
  },
  {
    "id": "dice-091",
    "event": "旧友重逢牵线",
    "conflict": "一方想公开，一方想保密",
    "reversal": "抑制器故障后，TA只对你信息素稳定"
  },
  {
    "id": "dice-092",
    "event": "童年约定被提起",
    "conflict": "过去黑历史被翻出",
    "reversal": "你准备离开时，TA递交了同行申请"
  },
  {
    "id": "dice-093",
    "event": "关系被拍上热搜",
    "conflict": "身份差距带来自卑/压力",
    "reversal": "那份“相亲资料”是TA主动拦下的"
  },
  {
    "id": "dice-094",
    "event": "家庭安排相亲",
    "conflict": "临时失联造成不信任",
    "reversal": "热搜曝光后，你们反而获得公开关系许可"
  },
  {
    "id": "dice-095",
    "event": "伴侣宿舍申请开启",
    "conflict": "任务失败后的责任归属",
    "reversal": "旧案真凶另有其人，TA沉冤得雪"
  },
  {
    "id": "dice-096",
    "event": "联合军演抽签组队",
    "conflict": "分化波动导致情绪失控",
    "reversal": "终局前夜，TA交给你写好名字的誓约环"
  },
  {
    "id": "dice-097",
    "event": "终局任务前夜",
    "conflict": "创伤应激触发，无法冷静沟通",
    "reversal": "你以为的分别，其实是惊喜求婚布局"
  },
  {
    "id": "dice-098",
    "event": "战后记者专访",
    "conflict": "被迫异地，沟通频率骤降",
    "reversal": "冷战期间TA每天都在门口放药和早餐"
  },
  {
    "id": "dice-099",
    "event": "退役申请窗口开放",
    "conflict": "奖励名额只有一个",
    "reversal": "失联归来第一句话是“我回来了，先抱一下”"
  },
  {
    "id": "dice-100",
    "event": "誓约签署仪式当天",
    "conflict": "“保护你”与“尊重你”发生冲突",
    "reversal": "事件结束后解锁隐藏支线：共同生活计划"
  }
];

const NARRATIVE_DICE_LIFE_PATH_EFFECTS = {
  steady: { "public-reputation": 2, "free-exploration": 1 },
  investigate: { "free-exploration": 2, "military-training": 2, "academy-research": 2 },
  "ask-help": { "relationship-management": 3, "public-reputation": 1 }
};

const LIFE_GOAL_ROUTE_EFFECTS = {
  "childhood-first-action": { "free-exploration": 2, "public-reputation": 1 },
  "childhood-learning-spark": { "academy-research": 4 },
  "childhood-body-mind": { "free-exploration": 3, "military-training": 1 },
  "adolescence-steady-self": { "free-exploration": 4 },
  "adolescence-first-circle": { "relationship-management": 4 },
  "adolescence-trust-practice": { "relationship-management": 4, "public-reputation": 2 },
  "young-adult-differentiation-anchor": { "free-exploration": 3, "public-reputation": 1 },
  "young-adult-public-footing": { "public-reputation": 4, "starport-trade": 2 },
  "young-adult-reliable-network": { "relationship-management": 4, "public-reputation": 2 }
};

const NARRATIVE_DICE_CHOICES = [
  {
    id: "steady",
    label: "\u7a33\u59a5\u5904\u7406",
    response: "\u5148\u628a\u5c40\u9762\u7a33\u4f4f\uff0c\u7559\u4e0b\u6e05\u6670\u8bb0\u5f55\u518d\u5224\u65ad\u4e0b\u4e00\u6b65",
    effects: { spirit: 1, reputation: 1 },
    relationshipEffects: { trust: 2 }
  },
  {
    id: "investigate",
    label: "\u4e3b\u52a8\u8ffd\u67e5",
    response: "\u987a\u7740\u7ebf\u7d22\u5f80\u524d\u8ffd\u4e00\u6b65\uff0c\u4eb2\u81ea\u786e\u8ba4\u771f\u76f8",
    effects: { scholarship: 1, combat: 1, spirit: -1 },
    relationshipEffects: { familiarity: 2, trust: 1 }
  },
  {
    id: "ask-help",
    label: "\u5766\u8bda\u6c42\u52a9",
    response: "\u5411\u53ef\u4fe1\u7684\u4eba\u8bf4\u660e\u56f0\u60d1\uff0c\u628a\u51b2\u7a81\u653e\u5230\u660e\u9762\u4e0a\u89e3\u51b3",
    effects: { charm: 1, reputation: 1 },
    relationshipEffects: { trust: 2, favorability: 1 }
  }
];

const LIFE_GOAL_STAGES = [
  {
    id: "childhood",
    label: "童年成长",
    ageRange: "0-11 岁",
    summary: "先把身体、学习习惯与第一次主动行动稳定下来。",
    minAge: 0,
    maxAge: 11
  },
  {
    id: "adolescence",
    label: "青春期准备",
    ageRange: "12-17 岁",
    summary: "在分化前建立自我节奏、可信关系与社会熟悉度。",
    minAge: 12,
    maxAge: 17
  },
  {
    id: "young-adult",
    label: "青年展开",
    ageRange: "18 岁以后",
    summary: "分化后把个人方向、人际网络与公共履历接入成年生活。",
    minAge: 18,
    maxAge: Infinity
  }
];

const LIFE_GOAL_DEFINITIONS = [
  {
    id: "childhood-first-action",
    stageId: "childhood",
    title: "第一次主动安排",
    description: "在可行动年龄后完成任意一次季度行动。",
    rewardHint: "奖励：声望 +1",
    reward: { effects: { reputation: 1 } },
    getProgress: () => createGoalProgress(countLogMatches("执行行动“"), 1, "已执行行动")
  },
  {
    id: "childhood-learning-spark",
    stageId: "childhood",
    title: "点亮学习回路",
    description: "把学识提升到 45，形成稳定的求知节奏。",
    rewardHint: "奖励：学识 +1",
    reward: { effects: { scholarship: 1 } },
    getProgress: () => createGoalProgress(state.attributes.scholarship || 0, 45, "学识")
  },
  {
    id: "childhood-body-mind",
    stageId: "childhood",
    title: "身心底盘校准",
    description: "体质与精神力都达到 45，为长期成长打底。",
    rewardHint: "奖励：获得特质「身心校准记录」",
    reward: { trait: "身心校准记录" },
    getProgress: () => createGoalProgress(Math.min(state.attributes.constitution || 0, state.attributes.spirit || 0), 45, "体质/精神力最低值")
  },
  {
    id: "adolescence-steady-self",
    stageId: "adolescence",
    title: "稳定自我节奏",
    description: "精神力达到 55，应对青春期与分化前的压力。",
    rewardHint: "奖励：精神力 +1",
    reward: { effects: { spirit: 1 } },
    getProgress: () => createGoalProgress(state.attributes.spirit || 0, 55, "精神力")
  },
  {
    id: "adolescence-first-circle",
    stageId: "adolescence",
    title: "拥有一个熟面孔",
    description: "认识至少 1 名 NPC，让关系档案不再空白。",
    rewardHint: "奖励：魅力 +1",
    reward: { effects: { charm: 1 } },
    getProgress: () => createGoalProgress(getKnownRelationshipNpcs().length, 1, "已认识 NPC")
  },
  {
    id: "adolescence-trust-practice",
    stageId: "adolescence",
    title: "练习可信连接",
    description: "与任意 NPC 达到「熟悉」阶段，或累计 2 条关系记忆。",
    rewardHint: "奖励：声望 +1，精神力 +1",
    reward: { effects: { reputation: 1, spirit: 1 } },
    getProgress: getTrustPracticeProgress
  },
  {
    id: "young-adult-differentiation-anchor",
    stageId: "young-adult",
    title: "完成成年登记",
    description: "第二性别分化完成后，确认新的身体与档案状态。",
    rewardHint: "奖励：获得特质「分化适应记录」",
    reward: { trait: "分化适应记录" },
    getProgress: () => createGoalProgress(state.secondGender === "未分化" ? 0 : 1, 1, "成年登记")
  },
  {
    id: "young-adult-public-footing",
    stageId: "young-adult",
    title: "建立公共履历",
    description: "声望达到 65，或财富达到 55，证明你能稳定接入成年社会。",
    rewardHint: "奖励：声望 +1，财富 +1",
    reward: { effects: { reputation: 1, wealth: 1 } },
    getProgress: () => createGoalProgress(Math.max(state.attributes.reputation || 0, state.attributes.wealth || 0), 65, "声望/财富最高值")
  },
  {
    id: "young-adult-reliable-network",
    stageId: "young-adult",
    title: "可靠网络雏形",
    description: "认识至少 2 名 NPC，并累计 3 条关系记忆。",
    rewardHint: "奖励：魅力 +1，声望 +1",
    reward: { effects: { charm: 1, reputation: 1 } },
    getProgress: getReliableNetworkProgress
  }
];

const LIFE_GOAL_ID_SET = new Set(LIFE_GOAL_DEFINITIONS.map((goal) => goal.id));

const LIFE_GOAL_STORY_DEFINITIONS = {
  "childhood-first-action": {
    kicker: "人生目标剧情 / 童年成长",
    title: "第一次把日程握在手里",
    description: "本季的行动记录归档后，你第一次意识到，生活不是只会自动流向下一天。终端把你的选择标成一条亮线，等待你为它命名。",
    choices: [
      {
        id: "review-plan",
        label: "复盘行动安排",
        response: "你把这次安排写成简单清单，下一次行动前会先看一眼。",
        effects: { scholarship: 1 },
        routeEffects: { "free-exploration": 1, "academy-research": 2 }
      },
      {
        id: "share-result",
        label: "分享完成结果",
        response: "你把完成记录告诉身边可靠的人，获得了一点被看见的踏实感。",
        effects: { reputation: 1 },
        routeEffects: { "public-reputation": 2, "relationship-management": 1 }
      }
    ]
  },
  "childhood-learning-spark": {
    kicker: "人生目标剧情 / 童年成长",
    title: "书页边缘的亮点",
    description: "学习回路稳定亮起后，你发现自己已经能把陌生概念拆成可以理解的小块。民生署学习终端弹出一份新的拓展建议。",
    choices: [
      {
        id: "ask-question",
        label: "继续追问原因",
        response: "你没有满足于答案本身，而是把为什么也记进笔记。",
        effects: { scholarship: 1 },
        routeEffects: { "academy-research": 3 }
      },
      {
        id: "teach-back",
        label: "尝试讲给别人",
        response: "你用自己的话重新讲了一遍，发现表达也会反过来整理思路。",
        effects: { charm: 1 },
        routeEffects: { "academy-research": 1, "relationship-management": 2 }
      }
    ]
  },
  "childhood-body-mind": {
    kicker: "人生目标剧情 / 童年成长",
    title: "校准记录完成",
    description: "体能监测与精神稳定报告同时达标。屏幕上的曲线不再忽高忽低，像是在提醒你：照顾自己也是一种长期训练。",
    choices: [
      {
        id: "steady-routine",
        label: "固定作息节奏",
        response: "你把休息和训练放进同一张计划表，不再只靠临时兴起。",
        effects: { constitution: 1 },
        routeEffects: { "military-training": 2, "free-exploration": 1 }
      },
      {
        id: "quiet-check-in",
        label: "做一次安静自检",
        response: "你给自己留出一段不被打扰的时间，确认压力还在可承受范围内。",
        effects: { spirit: 1 },
        routeEffects: { "free-exploration": 3 }
      }
    ]
  },
  "adolescence-steady-self": {
    kicker: "人生目标剧情 / 青春期准备",
    title: "稳定自我节奏",
    description: "分化前的身体讯号偶尔变得陌生，但你已经学会先稳住呼吸，再判断下一步。档案把这段训练标记为青春期适应样本。",
    choices: [
      {
        id: "name-pressure",
        label: "记录压力来源",
        response: "你把不安拆成具体事项，发现很多问题可以被逐项处理。",
        effects: { spirit: 1 },
        routeEffects: { "free-exploration": 3, "academy-research": 1 }
      },
      {
        id: "keep-boundary",
        label: "设定日常边界",
        response: "你温和但明确地调整了自己的社交和休息节奏。",
        effects: { reputation: 1 },
        routeEffects: { "public-reputation": 2, "free-exploration": 1 }
      }
    ]
  },
  "adolescence-first-circle": {
    kicker: "人生目标剧情 / 青春期准备",
    title: "关系档案的第一枚坐标",
    description: "人际档案不再空白。这个名字让你的生活地图多了一个可以抵达的坐标，也让日常多了一点回应。",
    choices: [
      {
        id: "remember-detail",
        label: "记住对方细节",
        response: "你记下对方提过的小事，下一次见面会更自然。",
        effects: { charm: 1 },
        routeEffects: { "relationship-management": 3 }
      },
      {
        id: "stay-natural",
        label: "保持自然来往",
        response: "你没有急着推进关系，只让新的熟悉感慢慢沉下来。",
        effects: { spirit: 1 },
        routeEffects: { "relationship-management": 2, "free-exploration": 1 }
      }
    ]
  },
  "adolescence-trust-practice": {
    kicker: "人生目标剧情 / 青春期准备",
    title: "可信连接练习",
    description: "几条关系记忆串在一起后，你开始明白信任不是一次性事件，而是一次次可靠回应累积出的路径。",
    choices: [
      {
        id: "respond-clearly",
        label: "清楚回应期待",
        response: "你把能做到和暂时做不到的部分都说清楚，让关系少了猜测。",
        effects: { reputation: 1 },
        routeEffects: { "relationship-management": 2, "public-reputation": 2 }
      },
      {
        id: "offer-help",
        label: "提供一次帮助",
        response: "你在力所能及的范围里伸手，确认连接也可以很朴素。",
        effects: { charm: 1 },
        routeEffects: { "relationship-management": 3, "public-reputation": 1 }
      },
      {
        id: "protect-energy",
        label: "保留自我空间",
        response: "你没有把所有精力都交给外界，关系因此更稳定。",
        effects: { spirit: 1 },
        routeEffects: { "free-exploration": 3 }
      }
    ]
  },
  "young-adult-differentiation-anchor": {
    kicker: "人生目标剧情 / 青年展开",
    title: "成年登记后的锚点",
    description: "第二性别登记完成，新的身体数据被写进档案。你没有被这份标签吞没，而是在标签旁边补上了自己的名字。",
    choices: [
      {
        id: "read-rights",
        label: "阅读权利说明",
        response: "你认真确认成年后的公共服务、医疗支持与自主边界。",
        effects: { scholarship: 1 },
        routeEffects: { "academy-research": 2, "public-reputation": 2 }
      },
      {
        id: "adjust-routine",
        label: "调整生活节奏",
        response: "你按新的身体状态重新安排作息，让适应期更平稳。",
        effects: { constitution: 1 },
        routeEffects: { "free-exploration": 2, "military-training": 1 }
      },
      {
        id: "steady-identity",
        label: "确认自我称呼",
        response: "你把身份变化放进更大的自我叙述里，而不是让它定义全部。",
        effects: { spirit: 1 },
        routeEffects: { "free-exploration": 3 }
      }
    ]
  },
  "young-adult-public-footing": {
    kicker: "人生目标剧情 / 青年展开",
    title: "公共履历的第一行",
    description: "你的名字被写进更正式的公共记录。它不算盛大，却意味着你已经能以稳定姿态接入成年社会。",
    choices: [
      {
        id: "keep-records",
        label: "整理履历材料",
        response: "你把证明、成果和联系人整理成清晰档案，方便下一次机会到来。",
        effects: { reputation: 1 },
        routeEffects: { "public-reputation": 3, "academy-research": 1 }
      },
      {
        id: "budget-carefully",
        label: "规划资源使用",
        response: "你把可支配资源分成必要、储备与成长三类，心里更有底。",
        effects: { wealth: 1 },
        routeEffects: { "starport-trade": 3 }
      }
    ]
  },
  "young-adult-reliable-network": {
    kicker: "人生目标剧情 / 青年展开",
    title: "可靠网络雏形",
    description: "几条关系线彼此交错，形成一张还不算宽却足够真实的网络。你知道自己并不是独自站在成年生活里。",
    choices: [
      {
        id: "thank-people",
        label: "向重要的人道谢",
        response: "你认真感谢那些曾经回应你的人，让连接被明白地看见。",
        effects: { charm: 1 },
        routeEffects: { "relationship-management": 3, "public-reputation": 1 }
      },
      {
        id: "be-reliable",
        label: "承诺可靠回应",
        response: "你提醒自己在被需要时及时回应，把网络也变成责任。",
        effects: { reputation: 1 },
        routeEffects: { "relationship-management": 2, "public-reputation": 2 }
      },
      {
        id: "keep-learning",
        label: "学习维护关系",
        response: "你承认关系需要经营，也愿意继续学习合适的距离。",
        effects: { scholarship: 1 },
        routeEffects: { "relationship-management": 2, "academy-research": 2 }
      }
    ]
  }
};

const LIFE_GOAL_STORY_ID_SET = new Set(Object.keys(LIFE_GOAL_STORY_DEFINITIONS));

const RELATIONSHIP_STAGE_EVENT_CHANCE = 0.7;

const RELATIONSHIP_STAGE_EVENTS = [
  {
    id: "acquaintance-commute-greeting",
    stage: "认识",
    types: ["熟人", "普通同事"],
    title: "路上偶遇",
    event: "上班或上学路上偶遇NPC，晨间通廊的指示灯刚刚切成蓝色，对方主动打招呼，并自然地与你同行一段路。",
    conflict: "广播和脚步声填满空隙，全程沉默显得有些尴尬，你一时不知道该把话题放在课程、班次，还是只让这段路安静过去。",
    tags: ["日常", "熟人"],
    choices: [
      {
        id: "simple-topic",
        label: "主动找简单话题",
        response: "你从路程、课程或星港天气聊起，NPC很快接上话，原本生硬的同行变成一次轻松的相识。",
        relationshipEffects: { familiarity: 2 }
      },
      {
        id: "stay-quiet",
        label: "保持沉默",
        response: "你礼貌地点头同行，把这段路留给安静，NPC也没有勉强靠近，彼此保持了舒服的距离。",
        relationshipEffects: {}
      },
      {
        id: "leave-early",
        label: "借口提前离开",
        response: "你找了个不突兀的理由先走，NPC接受得很自然，气氛没有继续僵住。",
        relationshipEffects: { familiarity: 1 }
      }
    ]
  },
  {
    id: "familiar-training-water",
    stage: "熟悉",
    types: ["朋友", "竞争者", "暧昧"],
    title: "训练后的水",
    event: "训练结束后，场地还残留着热汗和金属地面的冷味，NPC递来一瓶水。你发现NPC也在为同一场考核焦虑，和平时的从容不太一样。",
    conflict: "你们都想表现得稳定，却都知道这次考核不轻松，谁先承认紧张，谁就等于把软处递到对方面前。",
    tags: ["日常", "考核", "可暧昧"],
    choices: [
      {
        id: "joke-ease",
        label: "开玩笑缓和",
        response: "你用一句轻松的玩笑拆掉紧绷感，NPC低头笑了一下，瓶身上的水汽也没那么冷了。",
        relationshipEffects: { favorability: 3 }
      },
      {
        id: "share-prep",
        label: "分享备考经验",
        response: "你把自己的备考节奏和复盘方法说给NPC听，把焦虑拆成可以处理的清单，也把信任往前推了一步。",
        relationshipEffects: { trust: 3 }
      },
      {
        id: "keep-distance",
        label: "保持距离",
        response: "你接过水后只认真道谢，没有进一步靠近NPC的情绪，但这份克制让对方知道你看见了。",
        relationshipEffects: { familiarity: 1 }
      }
    ]
  },
  {
    id: "familiar-snack-stall-extra",
    stage: "熟悉",
    types: ["损友", "互相保护"],
    title: "小吃摊多给一份",
    event: "常去的小吃摊今天多给了一份，蒸汽把街角灯牌熏得发软。NPC先抢走大份，又悄悄把你爱吃的配料拨到你这边。",
    conflict: "NPC嘴上不让，动作却把偏心藏得不太高明，你要决定是拆穿这点照顾，还是让它继续躲在玩笑里。",
    tags: ["日常", "玩笑"],
    choices: [
      {
        id: "fake-annoyed",
        label: "假装生气",
        response: "你故意吐槽NPC抢大份，语气里却藏着笑意，对方立刻顺着你的话把玩笑闹得更响。",
        relationshipEffects: { favorability: 2, familiarity: 1 }
      },
      {
        id: "tease-back",
        label: "反过来逗对方",
        response: "你顺势把玩笑抛回去，让NPC也被你逗得招架不住，熟悉感在热闹里自然加深。",
        relationshipEffects: { familiarity: 3 }
      },
      {
        id: "quiet-accept",
        label: "默默收下",
        response: "你没有戳穿NPC的小动作，只把这份照顾安静收下，心里却把对方的偏心记得很清楚。",
        relationshipEffects: { favorability: 1 }
      }
    ]
  },
  {
    id: "familiar-missed-message",
    stage: "熟悉",
    types: ["朋友", "可靠搭档", "暧昧"],
    title: "错过的留言",
    event: "NPC提起上一条留言等了很久才收到回应，通讯屏的未读时间停在一个让人难以忽略的数字上。对方语气并不重，只是把那一点失落说了出来。",
    conflict: "你确实因为自己的安排错过了回复，现在需要决定怎样处理这段小小的落差，是认真补上，还是让它变成关系里一处不明显的冷点。",
    tags: ["日常", "关系修复", "可暧昧"],
    choices: [
      {
        id: "apologize-repair",
        label: "认真道歉并补上回应",
        response: "你说明是自己疏忽，认真补上本该回应的内容，也约定下次忙时会提前说一声，NPC的语气慢慢软下来。",
        relationshipEffects: { favorability: 2, trust: 2 }
      },
      {
        id: "brief-explain",
        label: "简短解释近况",
        response: "你简短说明当时被其他安排绊住，没有把问题推给对方，也没有过度承诺，至少让误会停在原处。",
        relationshipEffects: { familiarity: 1 }
      },
      {
        id: "ignore-again",
        label: "再次含糊带过",
        response: "你把话题轻轻带开，没有回应对方真正介意的部分，通讯另一端安静了一瞬，气氛因此冷了一点。",
        relationshipEffects: { favorability: -2, trust: -1 }
      }
    ]
  },
  {
    id: "trusted-after-criticism",
    stage: "信赖",
    types: ["知己", "可靠搭档", "互相保护"],
    title: "被批评后的聊天",
    event: "因为工作或学习失误被批评后，你在走廊尽头停了很久，NPC没有急着评价，而是主动找你聊天。",
    conflict: "你想倾诉委屈，又怕麻烦NPC，甚至担心自己显得太脆弱，可对方已经把最安静的位置留给了你。",
    tags: ["支持", "信任"],
    choices: [
      {
        id: "be-honest",
        label: "坦诚倾诉",
        response: "你把真正难受的地方说出来，NPC没有打断，只认真接住了你的情绪，让你觉得自己不必立刻恢复体面。",
        relationshipEffects: { trust: 4 }
      },
      {
        id: "accept-comfort",
        label: "接受安慰",
        response: "你没有逞强，允许NPC陪你把这段低落慢慢放下，那份陪伴比任何建议都更稳。",
        relationshipEffects: { favorability: 3, trust: 1 }
      },
      {
        id: "avoid-topic",
        label: "回避",
        response: "你换了个话题，没有让NPC继续担心，但这份关心仍被你记住，像口袋里一枚温热的小物件。",
        relationshipEffects: { familiarity: 1 }
      }
    ]
  },
  {
    id: "trusted-teen-soft-promise",
    stage: "信赖",
    types: ["暧昧"],
    minAge: 13,
    maxAge: 17,
    title: "留到下季的约定",
    event: "季末散场时，NPC把一枚记录下次开放时间的小纸签递给你，说如果你愿意，下次一起去。对方没有靠得太近，只是认真等你回答。",
    conflict: "这句话没有说破更多意思，却让你清楚意识到，这份期待已经和普通同行不太一样。",
    tags: ["青涩暧昧", "边界感", "约定"],
    choices: [
      {
        id: "accept-carefully",
        label: "把纸签收好并答应",
        response: "你把纸签认真收好，也轻声说明自己会记得这件事。NPC听完明显松了口气。",
        relationshipEffects: { favorability: 4, trust: 2 }
      },
      {
        id: "set-boundary-kindly",
        label: "答应，但先约定慢一点",
        response: "你答应下次一起去，也坦率说希望彼此都按舒服的节奏来。NPC点头，说这样就很好。",
        relationshipEffects: { trust: 4, favorability: 1 }
      },
      {
        id: "change-to-group-plan",
        label: "提议改成多人同行",
        response: "你把话题接住，却把约定放回更稳妥的距离里。NPC没有失望，只笑着说那也很好。",
        relationshipEffects: { familiarity: 2, trust: 1 }
      }
    ]
  },
  {
    id: "trusted-sick-day-care",
    stage: "信赖",
    types: ["暧昧", "青梅竹马"],
    title: "请假那天的照顾",
    event: "你生病请假，舱室灯光被调得很暗，NPC送来药和饭，还把注意事项贴在门边。临走时，NPC认真说以后有事第一时间找我。",
    conflict: "NPC的语气比平时郑重，这份照顾越过了普通关心，却仍然守着你的边界，你需要决定怎样回应。",
    tags: ["照顾", "可暧昧"],
    choices: [
      {
        id: "sincere-thanks",
        label: "认真感谢",
        response: "你认真说谢谢，也承认这份照顾对你很重要，NPC离开时脚步明显轻了一些。",
        relationshipEffects: { favorability: 4, trust: 2 }
      },
      {
        id: "joke-about-meal",
        label: "开玩笑欠饭",
        response: "你用以后请饭的玩笑接住NPC的认真，让气氛重新柔和下来，也让关心不至于沉得让人慌张。",
        relationshipEffects: { favorability: 3 }
      },
      {
        id: "polite-refuse",
        label: "客气拒绝",
        response: "你客气地表示下次不用这么麻烦，仍然收下了对方的好意，把距离维持在你能安心的位置。",
        relationshipEffects: { favorability: 1 }
      }
    ]
  },
  {
    id: "important-adult-confession",
    stage: "重要的人",
    types: ["暧昧", "恋人"],
    minAge: 18,
    title: "说出口的关系",
    event: "忙完一整季最重要的事后，NPC约你在安静处停下，认真把那些长久以来的在意、偏心和想并肩生活的愿望一一说清。对方没有催促，只想把关系正式交到你面前。",
    conflict: "这不再是暧昧的试探，而是一句需要你郑重回应的告白，成年后的选择必须清醒，也必须尊重彼此。",
    tags: ["告白", "恋人", "正式关系"],
    choices: [
      {
        id: "accept-confession",
        label: "正面回应这份告白",
        response: "你把自己的心意也坦白说出来，确认这段关系从今天起有了新的名字。",
        relationshipEffects: { favorability: 5, trust: 4, familiarity: 2 }
      },
      {
        id: "promise-step-forward",
        label: "先约定以伴侣的方向认真尝试",
        response: "你没有回避，而是认真说明自己愿意把未来一步步走成彼此承认的关系。NPC听完，神情比任何时候都更安定。",
        relationshipEffects: { favorability: 3, trust: 5, familiarity: 2 }
      },
      {
        id: "ask-for-time",
        label: "请求一点时间再答复",
        response: "你没有敷衍这份心意，只是请求一点时间整理好自己。NPC答应等你，也把尊重留在原地。",
        relationshipEffects: { trust: 2, favorability: 1 }
      }
    ]
  },
  {
    id: "important-emergency-missed-plan",
    stage: "重要的人",
    types: ["恋人", "互相保护", "知己"],
    title: "无法赴约的紧急情况",
    event: "你们原本约好一起去某个地方，却因为临时紧急情况无法赴约，航班提示和未读消息在终端上一起闪烁。NPC提前准备好一切，却只问你有没有事。",
    conflict: "NPC没有抱怨，但这份体谅反而让你更想认真回应，你需要让对方知道被放在心上的不只是计划，还有等待本身。",
    tags: ["重要的人", "互相照顾", "可浪漫"],
    choices: [
      {
        id: "apologize-and-make-up",
        label: "真诚道歉补偿",
        response: "你认真说明情况并补上新的约定，让NPC知道这件事对你也很重要，而不是一句轻飘飘的延后。",
        relationshipEffects: { favorability: 3, trust: 2 }
      },
      {
        id: "brief-company",
        label: "短暂陪伴",
        response: "你挤出一点时间陪NPC待了一会儿，哪怕很短，也让原本落空的约定留下了真实的温度。",
        relationshipEffects: { favorability: 4 }
      },
      {
        id: "message-only",
        label: "只消息道歉",
        response: "你只发了消息道歉，没有进一步行动，NPC仍回复你先处理正事，但那句体谅里藏着一点没说出口的失落。",
        relationshipEffects: { favorability: 1, trust: -1 }
      }
    ]
  }
];

const PROACTIVE_NPC_EVENT_CHANCE = 0.4;

const PROACTIVE_NPC_EVENTS = [
  {
    id: "acquaintance-quarter-check-in",
    type: "主动问候",
    contexts: ["熟人", "普通同事"],
    title: "季末简短问候",
    event: "NPC在季末整理事务时主动联系你，通讯背景里传来资料归档的提示音。对方问你最近适应得怎么样，还顺手分享了一条生活上的小提醒。",
    prompt: "这不是正式邀约，更像一次轻松的确认：要不要在忙碌季末也给这段来往留一点自然的余地？",
    choices: [
      {
        id: "friendly-reply",
        label: "友好回应",
        response: "你认真回复了近况，也回问NPC最近是否顺利，让这次问候从客气变成真正的来往。",
        relationshipEffects: { favorability: 1, familiarity: 2 }
      },
      {
        id: "brief-thanks",
        label: "简短道谢",
        response: "你礼貌道谢，把交流停在舒服的距离，NPC也顺势收住，没有让你感到负担。",
        relationshipEffects: { familiarity: 1 }
      },
      {
        id: "share-small-tip",
        label: "交换小经验",
        response: "你也分享了一条实用经验，让这次问候多了一点互助感，像交换了两张能用上的小便签。",
        relationshipEffects: { trust: 1, familiarity: 1 }
      }
    ]
  },
  {
    id: "friend-free-afternoon-invite",
    type: "轻松邀约",
    contexts: ["朋友"],
    title: "空闲下午的邀请",
    event: "NPC说这季终于有半天空闲，想约你去公共庭园、训练馆或街角小店坐一坐，语气里带着难得的松弛。",
    prompt: "邀请没有额外含义，只是朋友之间想把日常过得松快一点，你可以接受，也可以按自己的节奏调整。",
    choices: [
      {
        id: "accept-plan",
        label: "接受邀约",
        response: "你答应一起去，把这段空闲留给轻松相处，NPC很快发来几个备选地点。",
        relationshipEffects: { favorability: 2, familiarity: 2 }
      },
      {
        id: "suggest-shorter",
        label: "改成短聚",
        response: "你说明自己时间有限，提议改成短暂见面，NPC接受得很快，也把体谅落在安排里。",
        relationshipEffects: { trust: 1, familiarity: 1 }
      },
      {
        id: "rain-check",
        label: "改日再约",
        response: "你坦率说这季排不开，但认真约了下次，让拒绝不至于变成冷淡。",
        relationshipEffects: { trust: 1 }
      }
    ]
  },
  {
    id: "rival-friendly-challenge",
    type: "良性挑战",
    contexts: ["竞争者", "损友"],
    tendencies: ["良性竞争"],
    title: "公开榜单前的挑战",
    event: "NPC把下一次考核或训练榜单发给你，公开榜单还没刷新，通讯框里却先弹出对方的名字。NPC语气平静地说这次想和你比一比。",
    prompt: "这是一场不伤和气的较量，重点在于你们怎样看待彼此的进步，以及能不能把胜负留在规则里。",
    choices: [
      {
        id: "accept-challenge",
        label: "接下挑战",
        response: "你接下挑战，也明确说输赢之外更想看见彼此进步，NPC的斗志被你稳稳接住。",
        relationshipEffects: { trust: 1, familiarity: 2 }
      },
      {
        id: "set-fair-rules",
        label: "先定规则",
        response: "你提出公平边界，让竞争保持清楚也保持尊重，对方反而更认真地点了头。",
        relationshipEffects: { trust: 2 }
      },
      {
        id: "light-tease",
        label: "轻松回敬",
        response: "你半开玩笑地回敬一句，让紧张感变成恰到好处的斗志，连榜单都像没那么冰冷。",
        relationshipEffects: { favorability: 1, familiarity: 1 }
      }
    ]
  },
  {
    id: "partner-practical-help-request",
    type: "协作求助",
    contexts: ["可靠搭档"],
    tendencies: ["协作加深", "信任加深", "稳定深交", "稳定相处"],
    title: "临时需要搭把手",
    event: "NPC遇到一件需要协调的杂事，资料箱、时间表和待确认名单堆在同一张桌上。对方主动问你能不能一起核对清单、搬运资料或复盘计划。",
    prompt: "这不是危机，只是搭档之间最常见的互相补位，也最能看出彼此是否真的习惯并肩处理琐事。",
    choices: [
      {
        id: "help-directly",
        label: "直接帮忙",
        response: "你很快接过一部分事务，让NPC能把注意力放回关键环节，对方看向你的眼神明显安定下来。",
        relationshipEffects: { trust: 3, familiarity: 1 }
      },
      {
        id: "split-work",
        label: "分工处理",
        response: "你和NPC重新拆分任务，把这件事处理得更稳妥，也让配合像一套磨合过的流程。",
        relationshipEffects: { trust: 2, familiarity: 2 }
      },
      {
        id: "offer-advice",
        label: "提供建议",
        response: "你暂时抽不开身，但给出了一套可执行的处理顺序，让NPC仍能感到你在认真支援。",
        relationshipEffects: { trust: 1 }
      }
    ]
  },
  {
    id: "protective-mutual-care-check",
    type: "照应确认",
    contexts: ["互相保护", "守护方", "被守护方"],
    tendencies: ["互相照应", "信任加深", "稳定深交"],
    title: "状态确认",
    event: "NPC注意到你最近行程偏满，终端日程几乎没有空白，于是主动确认你的休息、补给和安全安排是否都跟得上。",
    prompt: "这份关心不带控制意味，只是在日常里确认彼此都站得稳，也确认照应不会越过你的气息边界。",
    choices: [
      {
        id: "accept-care",
        label: "接受关心",
        response: "你坦然接受提醒，也告诉NPC自己会照顾好状态，对方的担心终于有了落点。",
        relationshipEffects: { favorability: 2, trust: 2 }
      },
      {
        id: "check-back",
        label: "反过来确认",
        response: "你也问起NPC的近况，让照应变成双向的默契，而不是单方面的守望。",
        relationshipEffects: { trust: 2, familiarity: 1 }
      },
      {
        id: "set-boundary",
        label: "说明边界",
        response: "你感谢关心，同时温和说明自己需要保留的独立空间，NPC理解地点头，边界因此更清楚。",
        relationshipEffects: { trust: 1 }
      }
    ]
  },
  {
    id: "confidant-private-conversation",
    type: "私下谈心",
    contexts: ["知己"],
    tendencies: ["信任加深", "稳定深交"],
    title: "安静角落里的谈话",
    event: "NPC约你到人少的地方聊一会儿，观景廊尽头只剩远处航道灯缓慢闪烁。对方说有些想法只有和你说才不会被误解。",
    prompt: "话题很私人，但仍然停在互相信任和日常选择的范围里，你需要决定怎样接住这份少见的坦白。",
    choices: [
      {
        id: "listen-carefully",
        label: "认真倾听",
        response: "你没有急着判断，只把NPC的担心完整听完，让对方知道这份信任没有给错人。",
        relationshipEffects: { trust: 3, familiarity: 1 }
      },
      {
        id: "share-own-thought",
        label: "也说出想法",
        response: "你也分享了自己的犹豫，让这次谈话不只是单方面倾诉，而是一次彼此靠近的交换。",
        relationshipEffects: { favorability: 1, trust: 2 }
      },
      {
        id: "keep-light",
        label: "把话题放轻",
        response: "你用温和的方式把沉重话题放轻，让NPC先喘一口气，也保住了谈话里的安全感。",
        relationshipEffects: { favorability: 2 }
      }
    ]
  },
  {
    id: "ambiguous-subtle-evening-invite",
    type: "含蓄邀约",
    contexts: ["暧昧"],
    tendencies: ["亲近升温", "稳定相处", "稳定深交"],
    title: "不明说的同行",
    event: "NPC提到夜间观景廊这季开放，环带灯带会在整点慢慢亮起，远处航道也能看得很清楚。对方问你要不要一起去看看。",
    prompt: "这可以只是一次并肩散步，也可以被你理解为更柔软的靠近；选择权始终在你手里，节奏也该由你们共同确认。",
    choices: [
      {
        id: "go-as-friends",
        label: "当作朋友同行",
        response: "你答应同行，把气氛维持在轻松自然的朋友距离，NPC也顺着你的步调聊起灯带开放时间。",
        relationshipEffects: { familiarity: 2, trust: 1 }
      },
      {
        id: "respond-gently",
        label: "温和回应",
        response: "你接住了NPC的含蓄，把这次同行留给更细腻的交流，夜色让没有说破的话也显得安稳。",
        relationshipEffects: { favorability: 2, trust: 1 }
      },
      {
        id: "name-boundary",
        label: "说明节奏",
        response: "你坦诚说希望慢一点，NPC也尊重了你的节奏，这份边界反而让同行更安心。",
        relationshipEffects: { trust: 2 }
      }
    ]
  }
];

const state = {
  archiveId: "",
  age: 0,
  deathAge: randomInt(DEATH_AGE_MIN, DEATH_AGE_MAX),
  deceased: false,
  quarter: 1,
  actionPoints: 5,
  firstGender: "",
  secondGender: "未分化",
  familyId: "",
  familyTag: "",
  familyStory: "",
  origin: "",
  parents: [],
  attributes: {},
  log: [],
  resolvedAgeStories: {},
  activeAgeStoryAge: null,
  resolvedQuarterStories: {},
  activeQuarterStoryKey: null,
  pendingQuarterStoryKeys: [],
  resolvedSpecialActions: {},
  activeSpecialActionFamilyId: null,
  activeSpecialActionId: null,
  activeSpecialActionNode: null,
  pendingSpecialActionAdvance: false,
  resolvedAttributeThresholdStories: {},
  activeAttributeThresholdStoryFamilyId: null,
  activeAttributeThresholdStoryId: null,
  pendingAttributeThresholdFollowup: null,
  knownNpcIds: [],
  generatedNpcs: [],
  randomNpcSequence: 0,
  resolvedRandomNpcEncounters: {},
  activeRandomNpcEncounter: null,
  pendingRandomNpcEncounter: null,
  npcRelationships: {},
  npcMemories: {},
  resolvedRelationshipStageEvents: {},
  activeRelationshipStageEvent: null,
  pendingRelationshipStageEvent: null,
  resolvedProactiveNpcEvents: {},
  activeProactiveNpcEvent: null,
  pendingProactiveNpcEvent: null,
  resolvedNarrativeDiceEvents: {},
  activeNarrativeDiceEvent: null,
  pendingNarrativeDiceEvent: null,
  resolvedMapLocationEvents: {},
  mapDiceResultBookkeeping: {},
  traits: [],
  completedLifeGoals: {},
  resolvedLifeGoalStories: {},
  activeLifeGoalStoryId: null,
  pendingLifeGoalStoryIds: [],
  resolvedPostDifferentiationStoryId: null,
  activePostDifferentiationStoryId: null,
  pendingPostDifferentiationStoryId: null,
  differentiationAge: null,
  differentiationQuarter: null,
  lifePathProgress: {}
};

const SAVE_KEY = "abo-life-save-v1";
const SAVE_SLOT_COUNT = 3;
const SAVE_SLOT_KEY_PREFIX = "abo-life-save-slot-v1";
const SAVE_VERSION = 1;
const NPC_RELATIONSHIP_METRIC_LABELS = {
  favorability: "好感",
  trust: "信任",
  familiarity: "熟悉度"
};
const NPC_RELATIONSHIP_METRIC_KEYS = Object.keys(NPC_RELATIONSHIP_METRIC_LABELS);
const NPC_RELATIONSHIP_DEFAULT_VALUES = {
  favorability: 0,
  trust: 0,
  familiarity: 8
};
const NPC_RELATIONSHIP_EMPTY_VALUES = {
  favorability: 0,
  trust: 0,
  familiarity: 0
};
const NPC_RELATIONSHIP_TAGS = ["朋友", "竞争者", "可靠搭档", "互相保护", "知己", "暧昧", "恋人", "疏远", "普通同事", "熟人", "损友", "青梅竹马", "暗恋", "守护方", "被守护方"];
const NPC_RELATIONSHIP_TAG_SET = new Set(NPC_RELATIONSHIP_TAGS);
const NPC_RELATIONSHIP_TENDENCIES = ["初识观察", "日常往来", "协作加深", "信任加深", "互相照应", "良性竞争", "亲近升温", "稳定深交", "稳定相处", "逐渐疏远"];
const NPC_RELATIONSHIP_TENDENCY_SET = new Set(NPC_RELATIONSHIP_TENDENCIES);
const NPC_MEMORY_TYPES = ["日常", "互助", "冲突", "照应", "考核", "关系", "剧情骰子"];
const NPC_MEMORY_TYPE_SET = new Set(NPC_MEMORY_TYPES);
const NPC_MEMORY_SOURCES = ["random-npc", "relationship-stage", "proactive-npc", "narrative-dice", "social-schedule", "map-event"];
const NPC_MEMORY_SOURCE_SET = new Set(NPC_MEMORY_SOURCES);
const SOCIAL_INTERACTIONS = [
  {
    id: "meet",
    label: "约见",
    effects: { favorability: 3, familiarity: 4 },
    memoryTitle: "季度约见",
    memorySummary: "你们留出一段时间见面，交换近况，让彼此的日常轨迹更熟悉。",
    logText: "安排了一次约见，记录了日常了解"
  },
  {
    id: "collaborate",
    label: "协作",
    effects: { trust: 3, familiarity: 3 },
    memoryTitle: "共同协作",
    memorySummary: "你们围绕一件具体事务分工协作，在配合中增加了信任与默契。",
    logText: "完成了一次协作，记录了配合经验"
  },
  {
    id: "heart-talk",
    label: "谈心",
    effects: { favorability: 3, trust: 4 },
    memoryTitle: "安静谈心",
    memorySummary: "你们认真听完对方的想法，保留边界，也更愿意相信彼此。",
    logText: "进行了一次谈心，记录了彼此想法"
  },
  {
    id: "distance",
    label: "保持距离",
    effects: { favorability: -1, familiarity: 1 },
    memoryTitle: "调整距离",
    memorySummary: "你们有意识地放慢往来节奏，把空间留给各自的安排。",
    logText: "选择保持适当距离，调整了往来频率"
  }
];
const SOCIAL_INTERACTION_MAP = new Map(SOCIAL_INTERACTIONS.map((interaction) => [interaction.id, interaction]));
const NPC_MEMORY_MAX_PER_NPC = 10;
const UNSAFE_SAVE_RECORD_KEYS = new Set(["__proto__", "prototype", "constructor"]);
const SAVE_STATE_KEYS = [
  "archiveId",
  "age",
  "deathAge",
  "deceased",
  "quarter",
  "actionPoints",
  "firstGender",
  "secondGender",
  "familyId",
  "familyTag",
  "familyStory",
  "origin",
  "parents",
  "attributes",
  "log",
  "resolvedAgeStories",
  "activeAgeStoryAge",
  "resolvedQuarterStories",
  "activeQuarterStoryKey",
  "pendingQuarterStoryKeys",
  "resolvedSpecialActions",
  "activeSpecialActionFamilyId",
  "activeSpecialActionId",
  "activeSpecialActionNode",
  "pendingSpecialActionAdvance",
  "resolvedAttributeThresholdStories",
  "activeAttributeThresholdStoryFamilyId",
  "activeAttributeThresholdStoryId",
  "pendingAttributeThresholdFollowup",
  "knownNpcIds",
  "generatedNpcs",
  "randomNpcSequence",
  "resolvedRandomNpcEncounters",
  "activeRandomNpcEncounter",
  "pendingRandomNpcEncounter",
  "npcRelationships",
  "npcMemories",
  "resolvedRelationshipStageEvents",
  "activeRelationshipStageEvent",
  "pendingRelationshipStageEvent",
  "resolvedProactiveNpcEvents",
  "activeProactiveNpcEvent",
  "pendingProactiveNpcEvent",
  "resolvedNarrativeDiceEvents",
  "activeNarrativeDiceEvent",
  "pendingNarrativeDiceEvent",
  "resolvedMapLocationEvents",
  "mapDiceResultBookkeeping",
  "traits",
  "completedLifeGoals",
  "resolvedLifeGoalStories",
  "activeLifeGoalStoryId",
  "pendingLifeGoalStoryIds",
  "resolvedPostDifferentiationStoryId",
  "activePostDifferentiationStoryId",
  "pendingPostDifferentiationStoryId",
  "differentiationAge",
  "differentiationQuarter",
  "lifePathProgress"
];

let introCanonIndex = 0;
let introDialogDismissed = false;
let selectedSaveSlot = 1;
let selectedMapLocationId = null;
let activeConsoleView = "quarter";
let actionPointFeedbackTimer = null;
let pendingTimeSummaryFollowup = null;
let hasPresentedStartupModal = false;
let shouldOpenIntroAfterSystem = false;
let pendingExitAfterSave = false;
let lastPersistedFingerprint = null;

const elements = {
  archiveId: document.querySelector("#archiveId"),
  ageDisplay: document.querySelector("#ageDisplay"),
  quarterActionDisplay: document.querySelector("#quarterActionDisplay"),
  firstGender: document.querySelector("#firstGender"),
  secondGender: document.querySelector("#secondGender"),
  familyTag: document.querySelector("#familyTag"),
  archiveDialog: document.querySelector("#archiveDialog"),
  logDialog: document.querySelector("#logDialog"),
  systemDialog: document.querySelector("#systemDialog"),
  titleDialog: document.querySelector("#titleDialog"),
  titleDialogKicker: document.querySelector("#titleDialogKicker"),
  titleDialogTitle: document.querySelector("#titleDialogTitle"),
  titleDialogDescription: document.querySelector("#titleDialogDescription"),
  titleSystemButton: document.querySelector("#titleSystemButton"),
  titleNewLifeButton: document.querySelector("#titleNewLifeButton"),
  titleContinueButton: document.querySelector("#titleContinueButton"),
  heritageSummary: document.querySelector("#heritageSummary"),
  attributeGrid: document.querySelector("#attributeGrid"),
  actionList: document.querySelector("#actionList"),
  openMapActionButton: document.querySelector("#openMapActionButton"),
  mapActionDialog: document.querySelector("#mapActionDialog"),
  mapActionDialogClose: document.querySelector("#mapActionDialogClose"),
  mapActionStatus: document.querySelector("#mapActionStatus"),
  mapLocationList: document.querySelector("#mapLocationList"),
  mapLocationDetail: document.querySelector("#mapLocationDetail"),
  lifeGoalSummary: document.querySelector("#lifeGoalSummary"),
  lifeGoalStage: document.querySelector("#lifeGoalStage"),
  lifeGoalList: document.querySelector("#lifeGoalList"),
  lifePathSummary: document.querySelector("#lifePathSummary"),
  lifePathList: document.querySelector("#lifePathList"),
  introCanonList: document.querySelector("#introCanonList"),
  parentSummary: document.querySelector("#parentSummary"),
  parentGrid: document.querySelector("#parentGrid"),
  relationshipSummary: document.querySelector("#relationshipSummary"),
  socialScheduleList: document.querySelector("#socialScheduleList"),
  relationshipGrid: document.querySelector("#relationshipGrid"),
  eventLog: document.querySelector("#eventLog"),
  actionPointDots: document.querySelector("#actionPointDots"),
  consoleNav: document.querySelector("#consoleNav"),
  accountQuickButton: document.querySelector("#accountQuickButton"),
  accountQuickLabel: document.querySelector("#accountQuickLabel"),
  accountQuickDetail: document.querySelector("#accountQuickDetail"),
  consoleFocusPanel: document.querySelector("#consoleFocusPanel"),
  consoleFocusKicker: document.querySelector("#consoleFocusKicker"),
  consoleFocusTitle: document.querySelector("#consoleFocusTitle"),
  consoleFocusBody: document.querySelector("#consoleFocusBody"),
  consoleMapSummary: document.querySelector("#consoleMapSummary"),
  consoleMapQuickList: document.querySelector("#consoleMapQuickList"),
  mainLogHint: document.querySelector("#mainLogHint"),
  actionPointFeedback: document.querySelector("#actionPointFeedback"),
  timeSummaryDialog: document.querySelector("#timeSummaryDialog"),
  timeSummaryKicker: document.querySelector("#timeSummaryKicker"),
  timeSummaryTitle: document.querySelector("#timeSummaryTitle"),
  timeSummaryDescription: document.querySelector("#timeSummaryDescription"),
  timeSummaryClose: document.querySelector("#timeSummaryClose"),
  newLifeButton: document.querySelector("#newLifeButton"),
  saveSlotList: document.querySelector("#saveSlotList"),
  saveLifeButton: document.querySelector("#saveLifeButton"),
  loadLifeButton: document.querySelector("#loadLifeButton"),
  saveLoadStatus: document.querySelector("#saveLoadStatus"),
  exitGameButton: document.querySelector("#exitGameButton"),
  exitSaveDialog: document.querySelector("#exitSaveDialog"),
  exitSaveKicker: document.querySelector("#exitSaveKicker"),
  exitSaveTitle: document.querySelector("#exitSaveTitle"),
  exitSaveDescription: document.querySelector("#exitSaveDescription"),
  exitCancelButton: document.querySelector("#exitCancelButton"),
  exitWithoutSaveButton: document.querySelector("#exitWithoutSaveButton"),
  exitSaveAndLeaveButton: document.querySelector("#exitSaveAndLeaveButton"),
  authStatusText: document.querySelector("#authStatusText"),
  authGuestView: document.querySelector("#authGuestView"),
  authUserView: document.querySelector("#authUserView"),
  localServerPanel: document.querySelector("#localServerPanel"),
  openLocalServerButton: document.querySelector("#openLocalServerButton"),
  recentAccountPanel: document.querySelector("#recentAccountPanel"),
  recentAccountList: document.querySelector("#recentAccountList"),
  registerForm: document.querySelector("#registerForm"),
  loginForm: document.querySelector("#loginForm"),
  registerUsernameInput: document.querySelector("#registerUsernameInput"),
  registerDisplayNameInput: document.querySelector("#registerDisplayNameInput"),
  registerArchiveNameInput: document.querySelector("#registerArchiveNameInput"),
  registerArchiveNoteInput: document.querySelector("#registerArchiveNoteInput"),
  registerPasswordInput: document.querySelector("#registerPasswordInput"),
  registerPasswordConfirmInput: document.querySelector("#registerPasswordConfirmInput"),
  loginUsernameInput: document.querySelector("#loginUsernameInput"),
  loginPasswordInput: document.querySelector("#loginPasswordInput"),
  accountRoleText: document.querySelector("#accountRoleText"),
  accountDisplayName: document.querySelector("#accountDisplayName"),
  accountUsernameText: document.querySelector("#accountUsernameText"),
  accountRolePill: document.querySelector("#accountRolePill"),
  accountArchiveNameText: document.querySelector("#accountArchiveNameText"),
  accountArchiveNoteText: document.querySelector("#accountArchiveNoteText"),
  refreshCloudSlotsButton: document.querySelector("#refreshCloudSlotsButton"),
  logoutButton: document.querySelector("#logoutButton"),
  adminPanel: document.querySelector("#adminPanel"),
  adminPanelSummary: document.querySelector("#adminPanelSummary"),
  adminRefreshButton: document.querySelector("#adminRefreshButton"),
  adminUserList: document.querySelector("#adminUserList"),
  endQuarterButton: document.querySelector("#endQuarterButton"),
  openParentArchiveButton: document.querySelector("#openParentArchiveButton"),
  openRelationshipButton: document.querySelector("#openRelationshipButton"),
  parentArchiveDialog: document.querySelector("#parentArchiveDialog"),
  parentArchiveDialogClose: document.querySelector("#parentArchiveDialogClose"),
  relationshipDialog: document.querySelector("#relationshipDialog"),
  relationshipDialogClose: document.querySelector("#relationshipDialogClose"),
  randomNpcDialog: document.querySelector("#randomNpcDialog"),
  randomNpcKicker: document.querySelector("#randomNpcKicker"),
  randomNpcTitle: document.querySelector("#randomNpcTitle"),
  randomNpcDescription: document.querySelector("#randomNpcDescription"),
  randomNpcProfile: document.querySelector("#randomNpcProfile"),
  randomNpcChoices: document.querySelector("#randomNpcChoices"),
  relationshipStageEventDialog: document.querySelector("#relationshipStageEventDialog"),
  relationshipStageEventKicker: document.querySelector("#relationshipStageEventKicker"),
  relationshipStageEventTitle: document.querySelector("#relationshipStageEventTitle"),
  relationshipStageEventDescription: document.querySelector("#relationshipStageEventDescription"),
  relationshipStageEventChoices: document.querySelector("#relationshipStageEventChoices"),
  proactiveNpcEventDialog: document.querySelector("#proactiveNpcEventDialog"),
  proactiveNpcEventKicker: document.querySelector("#proactiveNpcEventKicker"),
  proactiveNpcEventTitle: document.querySelector("#proactiveNpcEventTitle"),
  proactiveNpcEventDescription: document.querySelector("#proactiveNpcEventDescription"),
  proactiveNpcEventChoices: document.querySelector("#proactiveNpcEventChoices"),
  narrativeDiceDialog: document.querySelector("#narrativeDiceDialog"),
  narrativeDiceKicker: document.querySelector("#narrativeDiceKicker"),
  narrativeDiceTitle: document.querySelector("#narrativeDiceTitle"),
  narrativeDiceDescription: document.querySelector("#narrativeDiceDescription"),
  narrativeDiceChoices: document.querySelector("#narrativeDiceChoices"),
  lifeGoalStoryDialog: document.querySelector("#lifeGoalStoryDialog"),
  lifeGoalStoryKicker: document.querySelector("#lifeGoalStoryKicker"),
  lifeGoalStoryTitle: document.querySelector("#lifeGoalStoryTitle"),
  lifeGoalStoryDescription: document.querySelector("#lifeGoalStoryDescription"),
  lifeGoalStoryChoices: document.querySelector("#lifeGoalStoryChoices"),
  introDialog: document.querySelector("#introDialog"),
  introPrevButton: document.querySelector("#introPrevButton"),
  introNextButton: document.querySelector("#introNextButton"),
  introSkipButton: document.querySelector("#introSkipButton"),
  ageStoryDialog: document.querySelector("#ageStoryDialog"),
  ageStoryTitle: document.querySelector("#ageStoryTitle"),
  ageStoryDescription: document.querySelector("#ageStoryDescription"),
  ageStoryKicker: document.querySelector("#ageStoryKicker"),
  ageStoryChoices: document.querySelector("#ageStoryChoices"),
  quarterStoryDialog: document.querySelector("#quarterStoryDialog"),
  quarterStoryKicker: document.querySelector("#quarterStoryKicker"),
  quarterStoryTitle: document.querySelector("#quarterStoryTitle"),
  quarterStoryDescription: document.querySelector("#quarterStoryDescription"),
  quarterStoryChoices: document.querySelector("#quarterStoryChoices"),
  specialActionDialog: document.querySelector("#specialActionDialog"),
  specialActionKicker: document.querySelector("#specialActionKicker"),
  specialActionTitle: document.querySelector("#specialActionTitle"),
  specialActionDescription: document.querySelector("#specialActionDescription"),
  specialActionChoices: document.querySelector("#specialActionChoices"),
  attributeThresholdStoryDialog: document.querySelector("#attributeThresholdStoryDialog"),
  attributeThresholdStoryKicker: document.querySelector("#attributeThresholdStoryKicker"),
  attributeThresholdStoryTitle: document.querySelector("#attributeThresholdStoryTitle"),
  attributeThresholdStoryDescription: document.querySelector("#attributeThresholdStoryDescription"),
  attributeThresholdStoryRequirements: document.querySelector("#attributeThresholdStoryRequirements"),
  attributeThresholdStoryChoices: document.querySelector("#attributeThresholdStoryChoices"),
  differentiationDialog: document.querySelector("#differentiationDialog"),
  differentiationDialogClose: document.querySelector("#differentiationDialogClose"),
  postDifferentiationStoryDialog: document.querySelector("#postDifferentiationStoryDialog"),
  postDifferentiationStoryKicker: document.querySelector("#postDifferentiationStoryKicker"),
  postDifferentiationStoryTitle: document.querySelector("#postDifferentiationStoryTitle"),
  postDifferentiationStoryDescription: document.querySelector("#postDifferentiationStoryDescription"),
  postDifferentiationStoryRequirements: document.querySelector("#postDifferentiationStoryRequirements"),
  postDifferentiationStoryClose: document.querySelector("#postDifferentiationStoryClose")
};

const authState = {
  apiEnabled: window.location.protocol !== "file:",
  ready: false,
  authenticated: false,
  role: "guest",
  user: null
};

const RECENT_ACCOUNT_STORAGE_KEY = "abo-recent-accounts-v1";

let remoteSaveSlotSummaries = [];
let adminDashboardUsers = [];
let recentAccounts = loadRecentAccounts();

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pick(list) {
  return list[randomInt(0, list.length - 1)];
}

function weightedPick(items) {
  const total = items.reduce((sum, item) => sum + item.weight, 0);
  let roll = Math.random() * total;
  for (const item of items) {
    roll -= item.weight;
    if (roll <= 0) {
      return item.value;
    }
  }
  return items[items.length - 1].value;
}

function clamp(value, min = 0, max = 100) {
  return Math.max(min, Math.min(max, Math.round(value)));
}


function createEmptyLifePathProgress() {
  return LIFE_PATH_DEFINITIONS.reduce((progress, route) => {
    progress[route.id] = 0;
    return progress;
  }, {});
}

function normalizeLifePathValue(value) {
  return clamp(typeof value === "number" && Number.isFinite(value) ? value : 0);
}

function hydrateSavedLifePathProgress(progress) {
  const hydratedProgress = createEmptyLifePathProgress();
  if (!isPlainObject(progress)) {
    return hydratedProgress;
  }
  Object.entries(progress).forEach(([routeId, value]) => {
    if (LIFE_PATH_ID_SET.has(routeId)) {
      hydratedProgress[routeId] = normalizeLifePathValue(value);
    }
  });
  return hydratedProgress;
}

function ensureLifePathProgress() {
  state.lifePathProgress = hydrateSavedLifePathProgress(state.lifePathProgress);
  return state.lifePathProgress;
}

function deriveLifePathStage(progress) {
  const value = normalizeLifePathValue(progress);
  if (value >= 75) {
    return { rank: 4, label: "核心路线", percent: value };
  }
  if (value >= 50) {
    return { rank: 3, label: "重点发展", percent: value };
  }
  if (value >= 25) {
    return { rank: 2, label: "倾向成形", percent: value };
  }
  if (value > 0) {
    return { rank: 1, label: "萌芽记录", percent: value };
  }
  return { rank: 0, label: "尚未显现", percent: 0 };
}

function getTopLifePaths(limit = 3) {
  const progress = ensureLifePathProgress();
  return LIFE_PATH_DEFINITIONS
    .map((route, index) => ({
      ...route,
      index,
      progress: normalizeLifePathValue(progress[route.id]),
      stage: deriveLifePathStage(progress[route.id])
    }))
    .sort((left, right) => right.progress - left.progress || left.index - right.index)
    .slice(0, limit);
}

function formatRouteEffectText(effects = {}) {
  if (!isPlainObject(effects)) {
    return "";
  }
  const entries = Object.entries(effects).filter(([routeId, value]) => LIFE_PATH_ID_SET.has(routeId)
    && typeof value === "number"
    && Number.isFinite(value)
    && value !== 0);
  if (!entries.length) {
    return "";
  }
  return `路线：${entries.map(([routeId, value]) => {
    const route = LIFE_PATH_DEFINITION_MAP.get(routeId);
    const sign = value >= 0 ? "+" : "";
    return `${route?.label || routeId} ${sign}${Math.round(value)}`;
  }).join("，")}`;
}

function addLifePathProgress(effects = {}, options = {}) {
  const progress = ensureLifePathProgress();
  const appliedEffects = {};
  Object.entries(effects).forEach(([routeId, value]) => {
    if (!LIFE_PATH_ID_SET.has(routeId) || typeof value !== "number" || !Number.isFinite(value) || value === 0) {
      return;
    }
    const roundedValue = Math.round(value);
    if (roundedValue === 0) {
      return;
    }
    const previous = normalizeLifePathValue(progress[routeId]);
    const next = normalizeLifePathValue(previous + roundedValue);
    const delta = next - previous;
    if (delta !== 0) {
      progress[routeId] = next;
      appliedEffects[routeId] = delta;
    }
  });
  const effectText = formatRouteEffectText(appliedEffects);
  if (effectText && options.log === true) {
    addLog(`${options.source || "路线倾向更新"}：${effectText}。`);
  }
  return effectText;
}

function inferLifePathEffectsFromAttributes(effects = {}, multiplier = 1) {
  if (!isPlainObject(effects)) {
    return {};
  }
  const routeEffects = {};
  const addRouteEffect = (routeId, value) => {
    if (!LIFE_PATH_ID_SET.has(routeId) || value <= 0) {
      return;
    }
    routeEffects[routeId] = (routeEffects[routeId] || 0) + value * multiplier;
  };
  Object.entries(effects).forEach(([key, value]) => {
    if (typeof value !== "number" || !Number.isFinite(value) || value <= 0) {
      return;
    }
    if (key === "scholarship") {
      addRouteEffect("academy-research", value);
    } else if (key === "combat") {
      addRouteEffect("military-training", value);
    } else if (key === "wealth") {
      addRouteEffect("starport-trade", value);
    } else if (key === "reputation") {
      addRouteEffect("public-reputation", value);
    } else if (key === "spirit") {
      addRouteEffect("free-exploration", value);
    } else if (key === "charm") {
      addRouteEffect("relationship-management", value);
    } else if (key === "constitution") {
      addRouteEffect("military-training", value * 0.5);
      addRouteEffect("free-exploration", value * 0.5);
    }
  });
  return routeEffects;
}

function mergeLifePathEffects(...effectMaps) {
  return effectMaps.reduce((mergedEffects, effects) => {
    if (!isPlainObject(effects)) {
      return mergedEffects;
    }
    Object.entries(effects).forEach(([routeId, value]) => {
      if (LIFE_PATH_ID_SET.has(routeId) && typeof value === "number" && Number.isFinite(value) && value !== 0) {
        mergedEffects[routeId] = (mergedEffects[routeId] || 0) + value;
      }
    });
    return mergedEffects;
  }, {});
}

function createEmptyAttributes(value = 0) {
  return ATTRIBUTE_DEFINITIONS.reduce((attrs, definition) => {
    attrs[definition.key] = value;
    return attrs;
  }, {});
}

function addAttributes(base, effects, multiplier = 1) {
  const next = { ...base };
  for (const [key, value] of Object.entries(effects)) {
    next[key] = clamp((next[key] || 0) + value * multiplier);
  }
  return next;
}

function createFamilyAttributes(family) {
  const attributes = createEmptyAttributes();
  for (const definition of ATTRIBUTE_DEFINITIONS) {
    const range = family.attributeRanges[definition.key] || family.defaultAttributeRange;
    attributes[definition.key] = randomInt(range[0], range[1]);
  }
  return attributes;
}

function createAdultParent(label, firstGender, secondGender, family) {
  return {
    label,
    firstGender,
    secondGender,
    career: pick(family.careers),
    age: randomInt(26, 54),
    attributes: createFamilyAttributes(family)
  };
}

function getCurrentParentAge(parent) {
  const birthTimeAge = Number.isInteger(parent?.age) ? parent.age : 0;
  return birthTimeAge + Math.max(0, Number.isInteger(state.age) ? state.age : 0);
}

function clearArchivedLifeProgress() {
  state.actionPoints = 0;
  state.pendingQuarterStoryKeys = [];
  state.activeQuarterStoryKey = null;
  state.activeSpecialActionFamilyId = null;
  state.activeSpecialActionId = null;
  state.activeSpecialActionNode = null;
  state.pendingSpecialActionAdvance = false;
  state.activeAttributeThresholdStoryFamilyId = null;
  state.activeAttributeThresholdStoryId = null;
  state.pendingAttributeThresholdFollowup = null;
  state.activeRandomNpcEncounter = null;
  state.pendingRandomNpcEncounter = null;
  state.activeRelationshipStageEvent = null;
  state.pendingRelationshipStageEvent = null;
  state.activeProactiveNpcEvent = null;
  state.pendingProactiveNpcEvent = null;
  state.activeNarrativeDiceEvent = null;
  state.pendingNarrativeDiceEvent = null;
  state.activeLifeGoalStoryId = null;
  state.pendingLifeGoalStoryIds = [];
  state.activePostDifferentiationStoryId = null;
  state.pendingPostDifferentiationStoryId = null;
}

function createFamilyParents(family) {
  const [fatherSecondGender, motherSecondGender] = weightedPick(family.aboTendencies);
  return [
    createAdultParent("父亲", "男", fatherSecondGender, family),
    createAdultParent("母亲", "女", motherSecondGender, family)
  ];
}

function isNonReproductivePair(parents) {
  const pair = parents.map((parent) => parent.secondGender).sort().join("+");
  return pair === "A+A" || pair === "O+O";
}

function getCoefficient(parents) {
  const key = parents.map((parent) => parent.secondGender).join("+");
  return HEREDITY_COEFFICIENT[key] || 1;
}

function buildInheritedAttributes(parents) {
  const coefficient = getCoefficient(parents);
  const parentBonus = createEmptyAttributes();
  for (const parent of parents) {
    const bonus = ABO_PARENT_BONUSES[parent.secondGender] || {};
    for (const [key, value] of Object.entries(bonus)) {
      parentBonus[key] += value;
    }
  }
  return ATTRIBUTE_DEFINITIONS.reduce((attrs, definition) => {
    const average = parents.reduce((sum, parent) => sum + parent.attributes[definition.key], 0) / parents.length;
    const inheritedBase = average * coefficient * INITIAL_INHERITED_ATTRIBUTE_SCALE;
    const inheritedBonus = parentBonus[definition.key] * INITIAL_INHERITED_BONUS_SCALE;
    attrs[definition.key] = clamp(
      inheritedBase + inheritedBonus + randomInt(-INITIAL_INHERITED_VARIANCE, INITIAL_INHERITED_VARIANCE),
      INITIAL_ATTRIBUTE_MIN,
      INITIAL_ATTRIBUTE_MAX
    );
    return attrs;
  }, {});
}

function buildOrphanAttributes() {
  const attributes = createEmptyAttributes();
  for (const definition of ATTRIBUTE_DEFINITIONS) {
    attributes[definition.key] = randomInt(ORPHAN_INITIAL_ATTRIBUTE_RANGE[0], ORPHAN_INITIAL_ATTRIBUTE_RANGE[1]);
  }
  attributes.spirit = clamp(attributes.spirit + 5, INITIAL_ATTRIBUTE_MIN, INITIAL_ATTRIBUTE_MAX);
  attributes.combat = clamp(attributes.combat + 3, INITIAL_ATTRIBUTE_MIN, INITIAL_ATTRIBUTE_MAX);
  attributes.wealth = clamp(attributes.wealth - 5, INITIAL_ATTRIBUTE_MIN, INITIAL_ATTRIBUTE_MAX);
  return attributes;
}

function addLog(message) {
  state.log.unshift(message);
  state.log = state.log.slice(0, 48);
}

function showActionPointFeedback(label, before, after) {
  if (!elements.actionPointFeedback || before <= after) {
    return;
  }

  const spent = before - after;
  elements.actionPointFeedback.innerHTML = `
    <strong>行动力 -${spent}</strong>
    <span>${escapeHtml(label)}</span>
    <small>${state.age} 岁第 ${state.quarter} 季 · 剩余 ${after}/5</small>
  `;
  elements.actionPointFeedback.classList.remove("action-point-feedback--visible");
  window.clearTimeout(actionPointFeedbackTimer);
  window.requestAnimationFrame(() => {
    elements.actionPointFeedback.classList.add("action-point-feedback--visible");
  });
  actionPointFeedbackTimer = window.setTimeout(() => {
    elements.actionPointFeedback.classList.remove("action-point-feedback--visible");
  }, 2200);
}

function consumeActionPoint(label) {
  const before = state.actionPoints;
  state.actionPoints = Math.max(0, state.actionPoints - 1);
  showActionPointFeedback(label, before, state.actionPoints);
  return before;
}

function getLeadingLifePathSummary() {
  const rankedRoutes = LIFE_PATH_DEFINITIONS
    .map((route) => ({ ...route, value: state.lifePathProgress?.[route.id] || 0 }))
    .sort((left, right) => right.value - left.value);
  const topRoute = rankedRoutes[0];
  if (!topRoute || topRoute.value <= 0) {
    return "暂无明显路线倾向";
  }

  return `${topRoute.label} ${topRoute.value} 点`;
}

function getAttributeSnapshotSummary() {
  return ATTRIBUTE_DEFINITIONS
    .map((definition) => ({ label: definition.label, value: state.attributes?.[definition.key] || 0 }))
    .sort((left, right) => right.value - left.value)
    .slice(0, 3)
    .map((entry) => `${entry.label} ${entry.value}`)
    .join(" / ") || "暂无属性记录";
}

function createTimeAdvanceSummary(context, autoSaveMessage) {
  const usedActionPoints = Math.max(0, 5 - context.previousActionPoints);
  const unusedActionPoints = Math.max(0, context.previousActionPoints);
  const periodLabel = `${context.previousAge} 岁第 ${context.previousQuarter} 季`;
  const nextPeriodLabel = `${state.age} 岁第 ${state.quarter} 季`;
  if (context.deceased) {
    return {
      kicker: "Life Ledger / Archived",
      title: `生命归档：${state.age} 岁`,
      body: `
        <p>${periodLabel} 已归档，档案抵达预设生命上限 ${state.deathAge} 岁。</p>
        <div class="time-summary-dialog__grid">
          <div class="time-summary-dialog__item">
            <strong>终局年龄</strong>
            <span>${state.age} 岁 / 上限 ${state.deathAge} 岁</span>
          </div>
          <div class="time-summary-dialog__item">
            <strong>路线倾向</strong>
            <span>${escapeHtml(getLeadingLifePathSummary())}</span>
          </div>
          <div class="time-summary-dialog__item">
            <strong>能力快照</strong>
            <span>${escapeHtml(getAttributeSnapshotSummary())}</span>
          </div>
        </div>
        <section class="time-summary-dialog__annual">
          <strong>终端总结</strong>
          <p>这段人生在星港档案中完成归档。之后不会再推进季度、触发行动或排入新的事件；你仍可查看关系、父母与日志，或生成新的人生。</p>
        </section>
        <p class="note">${escapeHtml(autoSaveMessage)}</p>
      `
    };
  }
  const actionPointText = unusedActionPoints > 0
    ? `本季使用 ${usedActionPoints}/5，剩余 ${unusedActionPoints} 点已随季度结算清零。`
    : `本季 5 点行动力已全部使用完毕。`;
  const annualSummary = context.ageAdvanced
    ? `
      <section class="time-summary-dialog__annual">
        <strong>年度总结</strong>
        <p>${context.previousAge} 岁年度归档完成。档案已进入 ${state.age} 岁，新的年度剧情、分化判定与公共事件会在关闭总结后继续处理。</p>
      </section>
    `
    : "";

  return {
    kicker: context.ageAdvanced ? "Annual Ledger / Auto Save" : "Quarter Ledger / Auto Save",
    title: context.ageAdvanced ? `年度总结：${context.previousAge} 岁完成` : `季度总结：${periodLabel}`,
    body: `
      <p>${periodLabel} 已归档，当前档案推进到 ${nextPeriodLabel}。</p>
      <div class="time-summary-dialog__grid">
        <div class="time-summary-dialog__item">
          <strong>行动力</strong>
          <span>${actionPointText}</span>
        </div>
        <div class="time-summary-dialog__item">
          <strong>路线倾向</strong>
          <span>${escapeHtml(getLeadingLifePathSummary())}</span>
        </div>
        <div class="time-summary-dialog__item">
          <strong>能力快照</strong>
          <span>${escapeHtml(getAttributeSnapshotSummary())}</span>
        </div>
      </div>
      ${annualSummary}
      <p class="note">${escapeHtml(autoSaveMessage)}</p>
    `
  };
}

function getNpcRelationshipMoment() {
  return state.archiveId ? `${state.age}岁第${state.quarter}季` : "档案生成前";
}

function normalizeNpcRelationshipValue(value) {
  return typeof value === "number" && Number.isFinite(value) ? clamp(value) : 0;
}

function getNpcRelationshipAverage(relationship) {
  return Math.round((relationship.favorability + relationship.trust + relationship.familiarity) / 3);
}

function getLowStageNpcRelationshipTag(npc) {
  const bondType = String(npc?.bondType || "");
  if (/搭档|同盟|贸易|礼仪|科研|训练/.test(bondType)) {
    return "普通同事";
  }
  return "熟人";
}

function getNpcRelationshipRomanceTag(relationship, stage, age = state.age) {
  if (age < 13) {
    return "";
  }
  const average = getNpcRelationshipAverage(relationship);
  const metrics = [relationship.favorability, relationship.trust, relationship.familiarity];
  const minimumMetric = Math.min(...metrics);
  const maximumMetric = Math.max(...metrics);
  const balanced = maximumMetric - minimumMetric <= 14;
  const favorabilityCloseToTrust = relationship.favorability >= relationship.trust - 6;
  const favorabilityCloseToFamiliarity = relationship.favorability >= relationship.familiarity - 8;
  const trustDominant = relationship.trust >= relationship.favorability + 10;
  if (!balanced || !favorabilityCloseToTrust || !favorabilityCloseToFamiliarity || trustDominant) {
    return "";
  }
  if (age <= 17) {
    if ((stage === "信赖" || stage === "重要的人")
      && average >= 42
      && minimumMetric >= 34
      && relationship.favorability >= 34) {
      return "暧昧";
    }
    return "";
  }
  if (stage === "重要的人"
    && average >= 64
    && minimumMetric >= 58
    && relationship.favorability >= 62) {
    return "恋人";
  }
  if ((stage === "信赖" || stage === "重要的人")
    && average >= 52
    && minimumMetric >= 44
    && relationship.favorability >= 46) {
    return "暧昧";
  }
  return "";
}

function deriveNpcRelationshipTag(npc, relationship) {
  const stage = getNpcRelationshipStage(relationship);
  const bondType = String(npc?.bondType || "");
  if (stage === "陌生" || stage === "认识") {
    return getLowStageNpcRelationshipTag(npc);
  }
  if (/竞争|别扭/.test(bondType)) {
    return relationship.familiarity >= 42 && relationship.favorability >= 30 ? "损友" : "竞争者";
  }
  if (/世交|青梅|竹马/.test(bondType)) {
    return "青梅竹马";
  }
  if (/保护|护短|守护|互助/.test(bondType) && relationship.trust >= 28 && relationship.trust >= relationship.favorability + 6) {
    return "互相保护";
  }
  const romanceTag = getNpcRelationshipRomanceTag(relationship, stage);
  if (romanceTag) {
    return romanceTag;
  }
  if (stage === "重要的人") {
    if (relationship.trust >= relationship.favorability + 8 || relationship.trust >= 62) {
      return "知己";
    }
    if (/搭档|同盟|贸易|训练|科研|礼仪/.test(bondType)) {
      return "可靠搭档";
    }
    return "朋友";
  }
  if (stage === "信赖") {
    if (/搭档|同盟|贸易|训练|科研|礼仪/.test(bondType)) {
      return "可靠搭档";
    }
    return relationship.trust >= relationship.favorability ? "知己" : "朋友";
  }
  if (/搭档|同盟|贸易|训练|科研|礼仪/.test(bondType) && relationship.trust >= relationship.favorability) {
    return "可靠搭档";
  }
  return "朋友";
}

function deriveNpcRelationshipTendency(relationship, tag) {
  const average = getNpcRelationshipAverage(relationship);
  if (tag === "疏远") {
    return "逐渐疏远";
  }
  if (tag === "竞争者" || tag === "损友") {
    return "良性竞争";
  }
  if (tag === "互相保护" || tag === "守护方" || tag === "被守护方") {
    return "互相照应";
  }
  if (average < 4) {
    return "初识观察";
  }
  if (average < 22) {
    return relationship.trust > relationship.favorability ? "协作加深" : "日常往来";
  }
  if (average < 40) {
    return relationship.trust >= relationship.favorability ? "信任加深" : "亲近升温";
  }
  if (average < 56) {
    return relationship.trust >= relationship.favorability ? "稳定深交" : "稳定相处";
  }
  if (tag === "暧昧") {
    return "亲近升温";
  }
  return relationship.trust >= relationship.favorability + 8 ? "稳定深交" : "稳定相处";
}

function getNpcRelationshipProfile(npc, relationship) {
  const tag = deriveNpcRelationshipTag(npc, relationship);
  return {
    tag,
    tendency: deriveNpcRelationshipTendency(relationship, tag)
  };
}

function normalizeNpcRelationshipRecord(npcId, record = {}, defaults = NPC_RELATIONSHIP_DEFAULT_VALUES, moment = getNpcRelationshipMoment(), npc = getRelationshipNpcById(npcId)) {
  const relationship = {
    npcId,
    favorability: normalizeNpcRelationshipValue(record.favorability ?? defaults.favorability),
    trust: normalizeNpcRelationshipValue(record.trust ?? defaults.trust),
    familiarity: normalizeNpcRelationshipValue(record.familiarity ?? defaults.familiarity),
    metAt: typeof record.metAt === "string" && record.metAt ? record.metAt : moment,
    updatedAt: typeof record.updatedAt === "string" && record.updatedAt ? record.updatedAt : moment
  };
  const profile = getNpcRelationshipProfile(npc, relationship);
  relationship.tag = NPC_RELATIONSHIP_TAG_SET.has(record.tag) ? record.tag : profile.tag;
  relationship.tendency = NPC_RELATIONSHIP_TENDENCY_SET.has(record.tendency) ? record.tendency : deriveNpcRelationshipTendency(relationship, relationship.tag);
  return relationship;
}

function ensureNpcRelationshipRecord(npcId, defaults = NPC_RELATIONSHIP_DEFAULT_VALUES) {
  if (!isSafeSaveRecordKey(npcId)) {
    return normalizeNpcRelationshipRecord("unknown", {}, defaults);
  }
  if (!isPlainObject(state.npcRelationships)) {
    state.npcRelationships = {};
  }
  const existingRecord = isPlainObject(state.npcRelationships[npcId]) ? state.npcRelationships[npcId] : {};
  const normalizedRecord = normalizeNpcRelationshipRecord(npcId, existingRecord, defaults, getNpcRelationshipMoment(), getRelationshipNpcById(npcId));
  state.npcRelationships[npcId] = normalizedRecord;
  return normalizedRecord;
}

function getRelationshipArchiveNpcs() {
  const generatedNpcs = Array.isArray(state.generatedNpcs) ? state.generatedNpcs.filter(isPlainObject) : [];
  return [...RELATIONSHIP_NPCS, ...generatedNpcs];
}

function getKnownRelationshipNpcs() {
  return getRelationshipArchiveNpcs().filter(isNpcKnown);
}

function getAvailableQuarterMapLocations() {
  const familyLocationIds = FAMILY_QUARTER_MAP_LOCATION_IDS[state.familyId] || [];
  const locationIds = state.secondGender === "未分化"
    ? familyLocationIds
    : [...familyLocationIds, ...PUBLIC_QUARTER_MAP_LOCATION_IDS];
  return locationIds
    .map((locationId) => QUARTER_MAP_LOCATION_BY_ID.get(locationId))
    .filter(Boolean);
}

function getSelectedMapLocation(locations = getAvailableQuarterMapLocations()) {
  const selectedLocation = locations.find((location) => location.id === selectedMapLocationId);
  return selectedLocation || locations[0] || null;
}

function getMapLocationNpcs(location) {
  if (!location) {
    return [];
  }
  const targetConfig = MAP_LOCATION_NPC_TARGETS[location.id];
  if (!targetConfig) {
    return [];
  }
  const fixedNpcs = targetConfig.fixedNpcIds
    .map((npcId) => getRelationshipNpcById(npcId))
    .filter((npc) => isNpcKnown(npc));
  const fixedNpcIdSet = new Set(fixedNpcs.map((npc) => npc.id));
  const fallbackNpcs = getKnownRelationshipNpcs().filter((npc) => !fixedNpcIdSet.has(npc.id)
    && npc.generated === true
    && targetConfig.fallbackFamilyIds.includes(npc.familyId));
  return [...fixedNpcs, ...fallbackNpcs];
}

function isQuarterMapEventAgeEligible(event, age = state.age) {
  if (!event) {
    return false;
  }
  if (event.preDifferentiationOnly && state.secondGender !== "未分化") {
    return false;
  }
  const minimumAge = typeof event.minAge === "number" ? event.minAge : 3;
  if (age < minimumAge) {
    return false;
  }
  if (typeof event.maxAge === "number" && age > event.maxAge) {
    return false;
  }
  return true;
}

function isQuarterMapEventAtLocation(event, locationId) {
  if (!event || !locationId) {
    return false;
  }
  if (Array.isArray(event.locationIds)) {
    return event.locationIds.includes(locationId);
  }
  return event.locationId === locationId;
}

function isQuarterMapEventFamilyEligible(event, familyId = state.familyId) {
  if (!event) {
    return false;
  }
  if (!Array.isArray(event.familyIds) || event.familyIds.length === 0) {
    return true;
  }
  return event.familyIds.includes(familyId);
}

function isQuarterMapEventFrequencyEligible(event) {
  if (!event?.negativeFrequency) {
    return true;
  }
  const frequency = Math.max(1, Math.floor(event.negativeFrequency));
  const offset = typeof event.frequencyOffset === "number" ? event.frequencyOffset : 0;
  const usedCount = state.mapDiceResultBookkeeping?.[event.id] || 0;
  return (state.age * 4 + state.quarter + usedCount) % frequency === ((offset % frequency) + frequency) % frequency;
}

function isMapLocationEventAvailable(location, event, kind) {
  if (!location || !event || !isQuarterMapEventAtLocation(event, location.id) || !isQuarterMapEventAgeEligible(event) || !isQuarterMapEventFamilyEligible(event)) {
    return false;
  }
  if (kind === "dice") {
    return isQuarterMapEventFrequencyEligible(event);
  }
  return !state.resolvedMapLocationEvents?.[event.id];
}

function hasMapEventRelationshipEffects(effects = {}) {
  return Object.entries(effects).some(([key, value]) => Object.prototype.hasOwnProperty.call(NPC_RELATIONSHIP_METRIC_LABELS, key)
    && typeof value === "number"
    && Number.isFinite(value)
    && value !== 0);
}

function getAvailableMapLocationOneTimeEvents(location) {
  if (!location) {
    return [];
  }
  return QUARTER_MAP_ONE_TIME_EVENTS.filter((event) => isMapLocationEventAvailable(location, event, "one-time"));
}

function getAvailableMapLocationDiceEvents(location) {
  if (!location) {
    return [];
  }
  return QUARTER_MAP_REPEATABLE_DICE_EVENTS.filter((event) => isMapLocationEventAvailable(location, event, "dice"));
}

function getMapEventRelationshipTarget(location) {
  return getMapLocationNpcs(location)[0] || null;
}

function getMapEventChoiceLifePathEffects(choice) {
  return mergeLifePathEffects(
    inferLifePathEffectsFromAttributes(choice.effects || {}, 0.8),
    hasMapEventRelationshipEffects(choice.relationshipEffects) ? { "relationship-management": 2 } : {}
  );
}

function formatMapEventChoiceEffects(choice) {
  const effectParts = [];
  const attributeText = describeEffects(choice.effects || {});
  if (attributeText) {
    effectParts.push(attributeText);
  }
  const relationshipText = formatRelationshipEffectText(choice.relationshipEffects || {});
  if (relationshipText) {
    effectParts.push(relationshipText.replace("关系：", "对当前 NPC："));
  }
  return effectParts.join("；");
}

function renderMapEventChoiceButton(location, eventDefinition, choice, disabled, kind) {
  const detailText = formatMapEventChoiceEffects(choice);
  return `
    <button class="button map-action-button" type="button" data-map-event-kind="${escapeHtml(kind)}" data-map-location-id="${escapeHtml(location.id)}" data-map-event-id="${escapeHtml(eventDefinition.id)}" data-map-event-choice="${escapeHtml(choice.id)}" ${disabled ? "disabled" : ""} aria-label="在${escapeHtml(location.name)}执行${escapeHtml(eventDefinition.title)}的${escapeHtml(choice.label)}，消耗 1 点行动力">
      <span>${escapeHtml(choice.label)}${renderChoiceHintMarkup(detailText)}</span>
      <span>耗费 1</span>
    </button>
  `;
}

function renderMapEventCard(location, eventDefinition, disabled, kind) {
  const choiceButtons = eventDefinition.choices.map((choice) => renderMapEventChoiceButton(location, eventDefinition, choice, disabled, kind)).join("");
  const bookkeepingText = kind === "dice"
    ? `已触发 ${state.mapDiceResultBookkeeping?.[eventDefinition.id] || 0} 次`
    : eventDefinition.trigger || "一次性地点事件";
  return `
    <article class="map-npc-card">
      <div class="map-npc-card__top">
        <strong>${escapeHtml(eventDefinition.title)}</strong>
        <span>${escapeHtml(kind === "dice" ? "可重复" : "一次性")}</span>
      </div>
      <p>${escapeHtml(eventDefinition.story)}</p>
      <p class="note">${escapeHtml(bookkeepingText)}</p>
      <div class="map-npc-card__actions">${choiceButtons}</div>
    </article>
  `;
}

function hydrateSavedResolvedMapLocationEvents(resolvedEvents) {
  const hydratedEvents = {};
  Object.entries(resolvedEvents).forEach(([eventId, choiceId]) => {
    const eventDefinition = QUARTER_MAP_ONE_TIME_EVENT_BY_ID.get(eventId);
    if (eventDefinition
      && isSafeSaveRecordKey(eventId)
      && isSafeSaveRecordKey(choiceId)
      && eventDefinition.choices.some((choice) => choice.id === choiceId)) {
      hydratedEvents[eventId] = choiceId;
    }
  });
  return hydratedEvents;
}

function hydrateSavedMapDiceResultBookkeeping(bookkeeping) {
  const hydratedBookkeeping = {};
  Object.entries(bookkeeping).forEach(([eventId, count]) => {
    if (QUARTER_MAP_REPEATABLE_DICE_EVENT_BY_ID.has(eventId)
      && isSafeSaveRecordKey(eventId)
      && Number.isInteger(count)
      && count >= 0
      && count <= 99999) {
      hydratedBookkeeping[eventId] = count;
    }
  });
  return hydratedBookkeeping;
}

function hydrateNpcRelationships() {
  if (!isPlainObject(state.npcRelationships)) {
    state.npcRelationships = {};
  }
  getKnownRelationshipNpcs().forEach((npc) => {
    ensureNpcRelationshipRecord(npc.id, npc.generated ? NPC_RELATIONSHIP_EMPTY_VALUES : NPC_RELATIONSHIP_DEFAULT_VALUES);
  });
}

function trimSafeMemoryText(value, maxLength = 160) {
  return String(value ?? "").replace(/\s+/g, " ").trim().slice(0, maxLength);
}

function getNpcMemoryType(inputType, text = "") {
  if (NPC_MEMORY_TYPE_SET.has(inputType)) {
    return inputType;
  }
  const sourceText = String(text || "");
  if (/剧情骰子/.test(sourceText)) {
    return "剧情骰子";
  }
  if (/考核|测试|评定/.test(sourceText)) {
    return "考核";
  }
  if (/冲突|竞争|误会|争执|压力/.test(sourceText)) {
    return "冲突";
  }
  if (/照应|照顾|保护|安抚|守护/.test(sourceText)) {
    return "照应";
  }
  if (/互助|协作|求助|支援|帮/.test(sourceText)) {
    return "互助";
  }
  if (/关系|信任|谈心|邀约|相处/.test(sourceText)) {
    return "关系";
  }
  return "日常";
}

function createNpcMemory(npc, memoryInput = {}) {
  if (!isPlainObject(npc) || !isSafeSaveRecordKey(npc.id) || !isPlainObject(memoryInput)) {
    return null;
  }

  const source = NPC_MEMORY_SOURCE_SET.has(memoryInput.source) ? memoryInput.source : null;
  const sourceId = trimSafeMemoryText(memoryInput.sourceId || memoryInput.id || `${state.age}-${state.quarter}`, 96);
  const id = trimSafeMemoryText(memoryInput.id || `${source || "memory"}:${npc.id}:${sourceId}`, 160);
  const title = trimSafeMemoryText(memoryInput.title, 80);
  const summary = trimSafeMemoryText(memoryInput.summary, 220);
  if (!source || !isSafeSaveRecordKey(id) || !title || !summary) {
    return null;
  }

  return {
    id,
    npcId: npc.id,
    type: getNpcMemoryType(memoryInput.type, `${title} ${summary}`),
    title,
    summary,
    source,
    age: typeof memoryInput.age === "number" && Number.isFinite(memoryInput.age) ? memoryInput.age : state.age,
    quarter: typeof memoryInput.quarter === "number" && Number.isFinite(memoryInput.quarter) ? memoryInput.quarter : state.quarter,
    createdAt: isSafeSaveString(memoryInput.createdAt, 40) && memoryInput.createdAt ? memoryInput.createdAt : new Date().toISOString()
  };
}

function hydrateSavedNpcMemory(npcId, memory) {
  if (!isSafeSaveRecordKey(npcId)
    || !isPlainObject(memory)
    || !isSafeSaveRecordKey(memory.id)
    || memory.npcId !== npcId
    || !NPC_MEMORY_TYPE_SET.has(memory.type)
    || !NPC_MEMORY_SOURCE_SET.has(memory.source)
    || !isSafeSaveString(memory.title, 80)
    || !memory.title
    || !isSafeSaveString(memory.summary, 220)
    || !memory.summary
    || !isSafeSaveString(memory.createdAt, 40)
    || typeof memory.age !== "number"
    || !Number.isFinite(memory.age)
    || typeof memory.quarter !== "number"
    || !Number.isFinite(memory.quarter)) {
    return undefined;
  }

  return {
    id: memory.id,
    npcId: memory.npcId,
    type: memory.type,
    title: memory.title,
    summary: memory.summary,
    source: memory.source,
    age: memory.age,
    quarter: memory.quarter,
    createdAt: memory.createdAt
  };
}

function hydrateSavedNpcMemories(memories, savedState) {
  const hydratedMemories = {};
  Object.entries(memories).forEach(([npcId, entries]) => {
    const npc = getRelationshipNpcById(npcId, savedState);
    if (!isSafeSaveRecordKey(npcId) || !npc || !isNpcKnownInSource(npc, savedState) || !Array.isArray(entries)) {
      return;
    }
    const seenIds = new Set();
    const npcMemories = [];
    entries.forEach((entry) => {
      const memory = hydrateSavedNpcMemory(npcId, entry);
      if (memory && !seenIds.has(memory.id)) {
        seenIds.add(memory.id);
        npcMemories.push(memory);
      }
    });
    if (npcMemories.length) {
      hydratedMemories[npcId] = npcMemories.slice(-NPC_MEMORY_MAX_PER_NPC);
    }
  });
  return hydratedMemories;
}

function addNpcMemory(npc, memoryInput) {
  const memory = createNpcMemory(npc, memoryInput);
  if (!memory || !isNpcKnown(npc)) {
    return null;
  }
  if (!isPlainObject(state.npcMemories)) {
    state.npcMemories = {};
  }
  const existingMemories = Array.isArray(state.npcMemories[npc.id]) ? state.npcMemories[npc.id] : [];
  const nextMemories = existingMemories.filter((item) => isPlainObject(item) && item.id !== memory.id);
  nextMemories.push(memory);
  state.npcMemories[npc.id] = nextMemories.slice(-NPC_MEMORY_MAX_PER_NPC);
  return memory;
}

function getNpcMemories(npcId) {
  if (!isSafeSaveRecordKey(npcId) || !isPlainObject(state.npcMemories) || !Array.isArray(state.npcMemories[npcId])) {
    return [];
  }
  return state.npcMemories[npcId].slice(-3).reverse();
}

function refreshKnownNpcRelationshipProfiles() {
  getKnownRelationshipNpcs().forEach((npc) => {
    const defaults = npc.generated ? NPC_RELATIONSHIP_EMPTY_VALUES : NPC_RELATIONSHIP_DEFAULT_VALUES;
    const relationship = ensureNpcRelationshipRecord(npc.id, defaults);
    const profile = getNpcRelationshipProfile(npc, relationship);
    relationship.tag = profile.tag;
    relationship.tendency = profile.tendency;
    state.npcRelationships[npc.id] = relationship;
  });
}

function getNpcRelationshipDisplayRecord(npc) {
  const defaults = npc.generated === true ? NPC_RELATIONSHIP_EMPTY_VALUES : NPC_RELATIONSHIP_DEFAULT_VALUES;
  const record = isPlainObject(state.npcRelationships?.[npc.id]) ? state.npcRelationships[npc.id] : {};
  return normalizeNpcRelationshipRecord(npc.id, record, defaults, getNpcRelationshipMoment(), npc);
}

function getNpcRelationshipStage(relationship) {
  const average = getNpcRelationshipAverage(relationship);
  if (average >= 52 && relationship.trust >= 46 && relationship.familiarity >= 46) {
    return "重要的人";
  }
  if (average >= 36 && relationship.trust >= 28) {
    return "信赖";
  }
  if (average >= 22 || relationship.familiarity >= 26) {
    return "熟悉";
  }
  if (average >= 4 || relationship.familiarity >= 8) {
    return "认识";
  }
  return "陌生";
}

function formatRelationshipEffectText(effects = {}) {
  if (!isPlainObject(effects)) {
    return "";
  }
  const entries = Object.entries(effects).filter(([key, value]) => Object.prototype.hasOwnProperty.call(NPC_RELATIONSHIP_METRIC_LABELS, key)
    && typeof value === "number"
    && Number.isFinite(value)
    && value !== 0);
  if (!entries.length) {
    return "";
  }
  return `关系：${entries.map(([key, value]) => {
    const label = NPC_RELATIONSHIP_METRIC_LABELS[key] || key;
    const sign = value >= 0 ? "+" : "";
    return `${label} ${sign}${value}`;
  }).join("，")}`;
}

function applyNpcRelationshipEffects(npc, effects = {}) {
  const entries = Object.entries(effects).filter(([key, value]) => Object.prototype.hasOwnProperty.call(NPC_RELATIONSHIP_METRIC_LABELS, key)
    && typeof value === "number"
    && Number.isFinite(value)
    && value !== 0);
  if (!isPlainObject(npc) || !isSafeSaveRecordKey(npc.id) || !entries.length) {
    return "";
  }
  const relationship = ensureNpcRelationshipRecord(npc.id, NPC_RELATIONSHIP_EMPTY_VALUES);
  entries.forEach(([key, value]) => {
    if (Object.prototype.hasOwnProperty.call(NPC_RELATIONSHIP_METRIC_LABELS, key)) {
      relationship[key] = clamp((relationship[key] || 0) + value);
    }
  });
  const profile = getNpcRelationshipProfile(npc, relationship);
  relationship.tag = profile.tag;
  relationship.tendency = profile.tendency;
  relationship.updatedAt = getNpcRelationshipMoment();
  state.npcRelationships[npc.id] = relationship;
  const effectText = formatRelationshipEffectText(effects).replace("关系：", "");
  return `${npc.name}关系成长：${effectText}；当前阶段「${getNpcRelationshipStage(relationship)}」，关系「${relationship.tag}／${relationship.tendency}」`;
}

function applyKnownNpcRelationshipGrowth(effects = {}) {
  const knownNpcs = getKnownRelationshipNpcs();
  if (!knownNpcs.length) {
    return "关系成长：暂无已认识 NPC，关系档案未变化";
  }
  return applyNpcRelationshipEffects(pick(knownNpcs), effects);
}

function countLogMatches(fragment) {
  if (!fragment) {
    return 0;
  }
  return state.log.filter((item) => typeof item === "string" && item.includes(fragment)).length;
}

function createGoalProgress(current, target, label) {
  const safeCurrent = Math.max(0, Number(current) || 0);
  const safeTarget = Math.max(1, Number(target) || 1);
  const cappedCurrent = Math.min(safeCurrent, safeTarget);
  const percent = clamp((cappedCurrent / safeTarget) * 100);
  return {
    current: cappedCurrent,
    target: safeTarget,
    label,
    percent,
    isComplete: safeCurrent >= safeTarget,
    text: `${label} ${cappedCurrent}/${safeTarget}`
  };
}

function getTotalNpcMemoryCount() {
  if (!isPlainObject(state.npcMemories)) {
    return 0;
  }
  return Object.values(state.npcMemories).reduce((total, memories) => total + (Array.isArray(memories) ? memories.length : 0), 0);
}

function getHighestRelationshipStageRank() {
  const stageRanks = {
    "陌生": 0,
    "认识": 1,
    "熟悉": 2,
    "信赖": 3,
    "重要的人": 4
  };
  return getKnownRelationshipNpcs().reduce((highestRank, npc) => {
    const relationship = getNpcRelationshipDisplayRecord(npc);
    const stage = getNpcRelationshipStage(relationship);
    return Math.max(highestRank, stageRanks[stage] || 0);
  }, 0);
}

function getTrustPracticeProgress() {
  const stageRank = getHighestRelationshipStageRank();
  const memoryCount = getTotalNpcMemoryCount();
  const percent = clamp(Math.max(stageRank / 2, memoryCount / 2) * 100);
  return {
    current: Math.min(Math.max(stageRank, memoryCount), 2),
    target: 2,
    label: "关系阶段/记忆",
    percent,
    isComplete: stageRank >= 2 || memoryCount >= 2,
    text: `最高阶段 ${stageRank}/2；关系记忆 ${Math.min(memoryCount, 2)}/2`
  };
}

function getReliableNetworkProgress() {
  const knownCount = getKnownRelationshipNpcs().length;
  const memoryCount = getTotalNpcMemoryCount();
  const percent = clamp(Math.min(knownCount / 2, memoryCount / 3) * 100);
  return {
    current: percent,
    target: 100,
    label: "关系网络",
    percent,
    isComplete: knownCount >= 2 && memoryCount >= 3,
    text: `已认识 ${Math.min(knownCount, 2)}/2；关系记忆 ${Math.min(memoryCount, 3)}/3`
  };
}

function getLifeGoalStage(age = state.age) {
  if (state.secondGender !== "未分化") {
    return LIFE_GOAL_STAGES.find((stage) => stage.id === "young-adult");
  }
  return LIFE_GOAL_STAGES.find((stage) => age >= stage.minAge && age <= stage.maxAge) || LIFE_GOAL_STAGES[LIFE_GOAL_STAGES.length - 1];
}

function getLifeGoalsForCurrentStage() {
  const stage = getLifeGoalStage();
  return LIFE_GOAL_DEFINITIONS.filter((goal) => goal.stageId === stage.id);
}

function getCompletedLifeGoals() {
  if (!isPlainObject(state.completedLifeGoals)) {
    state.completedLifeGoals = {};
  }
  return state.completedLifeGoals;
}

function applyLifeGoalReward(goal) {
  const effects = goal.reward?.effects || {};
  const effectText = describeEffects(effects);
  const rewardParts = [];
  if (effectText) {
    state.attributes = addAttributes(state.attributes, effects);
    rewardParts.push(effectText);
  }
  const routeEffectText = addLifePathProgress(mergeLifePathEffects(goal.reward?.routeEffects || {}, LIFE_GOAL_ROUTE_EFFECTS[goal.id] || {}, inferLifePathEffectsFromAttributes(effects, 1.5)));
  if (routeEffectText) {
    rewardParts.push(routeEffectText);
  }
  if (goal.reward?.trait) {
    if (!state.traits.includes(goal.reward.trait)) {
      state.traits.push(goal.reward.trait);
    }
    rewardParts.push(`特质「${goal.reward.trait}」`);
  }
  return rewardParts.join("，") || "阶段档案已标记";
}

function getLifeGoalStoryDefinition(goalId) {
  return Object.prototype.hasOwnProperty.call(LIFE_GOAL_STORY_DEFINITIONS, goalId) ? LIFE_GOAL_STORY_DEFINITIONS[goalId] : null;
}

function isLifeGoalStoryAvailable(goalId, completedGoals = getCompletedLifeGoals()) {
  return LIFE_GOAL_STORY_ID_SET.has(goalId) && completedGoals[goalId] === true;
}

function queueLifeGoalStory(goalId) {
  const completedGoals = getCompletedLifeGoals();
  if (!isLifeGoalStoryAvailable(goalId, completedGoals) || state.resolvedLifeGoalStories[goalId] || state.activeLifeGoalStoryId === goalId) {
    return false;
  }
  if (!state.pendingLifeGoalStoryIds.includes(goalId)) {
    state.pendingLifeGoalStoryIds.push(goalId);
  }
  return true;
}

function checkLifeGoalCompletions(reason = "state-update") {
  if (!state.archiveId) {
    return [];
  }
  const completedGoals = getCompletedLifeGoals();
  const completedNow = [];
  getLifeGoalsForCurrentStage().forEach((goal) => {
    if (completedGoals[goal.id]) {
      return;
    }
    const progress = goal.getProgress();
    if (!progress.isComplete) {
      return;
    }
    completedGoals[goal.id] = true;
    const rewardText = applyLifeGoalReward(goal);
    completedNow.push(goal.id);
    addLog(`阶段目标完成｜${goal.title}：${goal.description} 奖励已发放：${rewardText}。`);
    queueLifeGoalStory(goal.id);
  });
  return completedNow;
}

function hydrateSavedLifeGoalStories(resolvedStories, completedGoals = getCompletedLifeGoals()) {
  const hydratedStories = {};
  if (!isPlainObject(resolvedStories)) {
    return hydratedStories;
  }
  Object.entries(resolvedStories).forEach(([goalId, choiceId]) => {
    const story = getLifeGoalStoryDefinition(goalId);
    if (completedGoals[goalId] === true && story?.choices.some((choice) => choice.id === choiceId)) {
      hydratedStories[goalId] = choiceId;
    }
  });
  return hydratedStories;
}

function hydrateSavedLifeGoalStoryId(goalId, completedGoals = getCompletedLifeGoals()) {
  return isLifeGoalStoryAvailable(goalId, completedGoals) ? goalId : null;
}

function hydrateSavedPendingLifeGoalStories(goalIds, completedGoals = getCompletedLifeGoals()) {
  if (!Array.isArray(goalIds)) {
    return [];
  }
  return goalIds.reduce((hydratedIds, goalId) => {
    const safeGoalId = hydrateSavedLifeGoalStoryId(goalId, completedGoals);
    if (safeGoalId && !hydratedIds.includes(safeGoalId)) {
      hydratedIds.push(safeGoalId);
    }
    return hydratedIds;
  }, []);
}

function renderLifeGoalStoryDialog(goalId) {
  const story = getLifeGoalStoryDefinition(goalId);
  if (!story) {
    return false;
  }

  const goal = LIFE_GOAL_DEFINITIONS.find((item) => item.id === goalId);
  elements.lifeGoalStoryKicker.textContent = story.kicker;
  elements.lifeGoalStoryTitle.textContent = story.title;
  elements.lifeGoalStoryDescription.innerHTML = `
    <p>${escapeHtml(story.description)}</p>
    <p><strong>关联目标：</strong>${escapeHtml(goal?.title || goalId)}</p>
  `;
  elements.lifeGoalStoryChoices.innerHTML = story.choices.map((choice) => {
    const effectText = formatChoiceEffectText(choice);
    return `
      <button class="button age-story-choice" type="button" data-life-goal-story-choice="${escapeHtml(choice.id)}" aria-label="${escapeHtml(buildChoiceAriaLabel(choice.label, effectText))}">
        <span>${escapeHtml(choice.label)}${renderChoiceHintMarkup(effectText)}</span>
      </button>
    `;
  }).join("");
  return true;
}

function tryOpenNextLifeGoalStory() {
  if (state.activeLifeGoalStoryId || state.pendingLifeGoalStoryIds.length === 0) {
    return false;
  }

  while (state.pendingLifeGoalStoryIds.length > 0) {
    const goalId = state.pendingLifeGoalStoryIds.shift();
    if (!isLifeGoalStoryAvailable(goalId) || state.resolvedLifeGoalStories[goalId]) {
      continue;
    }
    state.activeLifeGoalStoryId = goalId;
    renderLifeGoalStoryDialog(goalId);
    openStoryDialog(elements.lifeGoalStoryDialog);
    elements.lifeGoalStoryChoices.querySelector("[data-life-goal-story-choice]")?.focus();
    return true;
  }

  return false;
}

function chooseLifeGoalStoryChoice(choiceId) {
  const goalId = state.activeLifeGoalStoryId;
  const story = getLifeGoalStoryDefinition(goalId);
  const choice = story?.choices.find((item) => item.id === choiceId);
  const goal = LIFE_GOAL_DEFINITIONS.find((item) => item.id === goalId);
  if (!goalId || !isLifeGoalStoryAvailable(goalId) || !story || !choice || state.resolvedLifeGoalStories[goalId]) {
    return;
  }

  const routeEffects = mergeLifePathEffects(choice.routeEffects || {}, inferLifePathEffectsFromAttributes(choice.effects || {}, 1.2));
  const choiceForDisplay = { ...choice, routeEffects };
  const effectText = formatChoiceEffectText(choiceForDisplay);
  state.attributes = addAttributes(state.attributes, choice.effects || {});
  unlockTrait(choice.trait);
  addLifePathProgress(routeEffects);
  state.resolvedLifeGoalStories[goalId] = choice.id;
  addLog(`人生目标剧情｜${goal?.title || goalId}·${story.title}：选择"${choice.label}"，${choice.response}；${effectText}。`);
  checkLifeGoalCompletions("life-goal-story");
  state.activeLifeGoalStoryId = null;
  closeStoryDialog(elements.lifeGoalStoryDialog);
  if (tryOpenQuarterStoryOrRandomNpc()) {
    render();
    return;
  }
  render();
}

function hydrateSavedCompletedLifeGoals(completedGoals) {
  const hydratedGoals = {};
  if (!isPlainObject(completedGoals)) {
    return hydratedGoals;
  }
  Object.entries(completedGoals).forEach(([goalId, completed]) => {
    if (LIFE_GOAL_ID_SET.has(goalId) && completed === true) {
      hydratedGoals[goalId] = true;
    }
  });
  return hydratedGoals;
}

function addAgeStory(age) {
  const story = AGE_STORY_EVENTS[age];
  if (!story || state.resolvedAgeStories[age]) {
    return false;
  }

  addLog(`年度剧情｜${age}岁·${getAgeStoryTitle(story)}：${getAgeStoryDescription(story)}`);
  openAgeStoryDialog(age);
  return true;
}

function openStoryDialog(dialog, closeButton) {
  if (!dialog || dialog.open || dialog.hasAttribute("open")) {
    return;
  }

  if (typeof dialog.showModal === "function") {
    dialog.showModal();
    return;
  }

  dialog.classList.add("story-dialog--fallback");
  dialog.setAttribute("open", "");
  closeButton?.focus();
}

function closeStoryDialog(dialog) {
  if (!dialog || (!dialog.open && !dialog.hasAttribute("open"))) {
    return;
  }

  if (typeof dialog.close === "function") {
    dialog.close();
    return;
  }

  dialog.removeAttribute("open");
}

function getFeatureDialog(view) {
  const dialogs = {
    archive: elements.archiveDialog,
    map: elements.mapActionDialog,
    relationships: elements.relationshipDialog,
    log: elements.logDialog,
    system: elements.systemDialog
  };
  return dialogs[view] || null;
}

function openFeatureModal(view) {
  const dialog = getFeatureDialog(view);
  if (!dialog) {
    return;
  }

  if (view === "map") {
    renderMapActionDialog();
  }
  if (view === "relationships") {
    renderRelationships();
    renderSocialSchedulePanel();
  }
  openStoryDialog(dialog, dialog.querySelector(".story-dialog__close"));
}

function closeFeatureModal(dialog) {
  closeStoryDialog(dialog);
  if (dialog === elements.systemDialog && shouldOpenIntroAfterSystem && !introDialogDismissed) {
    shouldOpenIntroAfterSystem = false;
    openIntroDialog();
  }
}

function openMapActionDialog() {
  openFeatureModal("map");
}

function closeMapActionDialog() {
  closeStoryDialog(elements.mapActionDialog);
}

function setSaveLoadStatus(message) {
  elements.saveLoadStatus.textContent = message;
}

function applyAuthUser(user) {
  authState.authenticated = Boolean(user);
  authState.role = user?.role || "guest";
  authState.user = user || null;
  document.body.dataset.accountRole = authState.role;
}

function isCloudSaveMode() {
  return authState.apiEnabled && authState.authenticated && Boolean(authState.user);
}

function isAdminMode() {
  return authState.role === "admin";
}

function renderChoiceHintMarkup(detailText) {
  return isAdminMode() && detailText ? `<small>${escapeHtml(detailText)}</small>` : "";
}

function buildChoiceAriaLabel(label, detailText) {
  return isAdminMode() && detailText ? `选择${label}，${detailText}` : `选择${label}`;
}

function getActionDisplayDescription(action, fallbackDescription) {
  if (!isAdminMode()) {
    return fallbackDescription;
  }

  const parts = [];
  const effectText = describeEffects(action?.effects || {});
  if (effectText && effectText !== "无变化") {
    parts.push(effectText);
  }
  const relationshipText = formatRelationshipEffectText(action?.relationshipEffects || {});
  if (relationshipText) {
    parts.push(relationshipText);
  }
  return parts.join("；") || fallbackDescription;
}

async function apiRequest(path, options = {}) {
  if (!authState.apiEnabled) {
    throw new Error("当前以 file:// 打开，账号与数据库接口不可用，请改用本地服务访问。");
  }

  const requestOptions = {
    method: options.method || "GET",
    headers: { ...(options.headers || {}) },
    credentials: "same-origin"
  };

  if (options.body !== undefined) {
    requestOptions.headers["Content-Type"] = "application/json";
    requestOptions.body = JSON.stringify(options.body);
  }

  const response = await fetch(path, requestOptions);
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(payload.error || "请求失败");
  }
  return payload;
}

function getCloudSaveSlotSummary(slot, slotSave) {
  const label = `槽位 ${slot}`;
  if (slotSave?.status === "valid") {
    const archivedNote = slotSave.deceased ? " · 已归档" : "";
    return {
      label,
      title: slotSave.archiveId,
      detail: `${slotSave.age} 岁第 ${slotSave.quarter} 季${archivedNote} · 云端`
    };
  }

  return {
    label,
    title: "空槽",
    detail: "云端暂无该槽位存档"
  };
}

async function refreshRemoteSaveSlotSummaries() {
  if (!isCloudSaveMode()) {
    remoteSaveSlotSummaries = [];
    renderSaveSlotSummaries();
    return;
  }

  const response = await apiRequest("/api/saves");
  remoteSaveSlotSummaries = Array.isArray(response.slots) ? response.slots : [];
  renderSaveSlotSummaries();
}

function renderAdminDashboard() {
  if (!elements.adminUserList) {
    return;
  }

  if (!isAdminMode()) {
    elements.adminUserList.innerHTML = "";
    return;
  }

  elements.adminUserList.innerHTML = adminDashboardUsers.length
    ? adminDashboardUsers.map((user) => {
      const saves = Array.isArray(user.saves) && user.saves.length
        ? user.saves.map((save) => `
            <article class="admin-save-card">
              <span>槽位 ${escapeHtml(save.slot)}</span>
              <strong>${escapeHtml(save.archiveId)}</strong>
              <small>${escapeHtml(save.age)} 岁第 ${escapeHtml(save.quarter)} 季${save.deceased ? " · 已归档" : ""}</small>
            </article>
          `).join("")
        : `<p class="note">暂无云端留档。</p>`;

      return `
        <article class="admin-user-card">
          <div class="admin-user-header">
            <div>
              <h3>${escapeHtml(user.displayName || user.username)}</h3>
              <p class="note">@${escapeHtml(user.username)} · ${escapeHtml(user.role === "admin" ? "管理员" : "玩家")}</p>
            </div>
            <div class="auth-role-pill">${escapeHtml(user.role === "admin" ? "ADMIN" : "PLAYER")}</div>
          </div>
          <div class="admin-user-meta">
            <span>档案称呼：${escapeHtml(user.archiveName || "未设置")}</span>
            <span>备注：${escapeHtml(user.archiveNote || "未设置")}</span>
          </div>
          <div class="admin-save-list">${saves}</div>
        </article>
      `;
    }).join("")
    : `<p class="note">当前还没有可展示的玩家档案。</p>`;
}

async function refreshAdminDashboard() {
  if (!isAdminMode()) {
    adminDashboardUsers = [];
    renderAdminDashboard();
    return;
  }

  const response = await apiRequest("/api/admin/dashboard");
  adminDashboardUsers = Array.isArray(response.users) ? response.users : [];
  renderAdminDashboard();
}

function renderAuthInterface() {
  if (!elements.authStatusText) {
    return;
  }

  if (!authState.apiEnabled) {
    elements.authStatusText.textContent = "当前以 file:// 方式打开，账号注册、数据库留档和管理员界面不可用。请使用本地服务访问。";
  } else if (!authState.ready) {
    elements.authStatusText.textContent = "正在连接账号服务与云端档案槽位...";
  } else if (!authState.authenticated) {
    elements.authStatusText.textContent = "游客模式下仍可使用本地存档；登录后会切换为数据库云端槽位。";
  } else if (isAdminMode()) {
    elements.authStatusText.textContent = `当前已登录管理员账号 @${authState.user.username}，管理员提示界面与玩家档案总览已启用。`;
  } else {
    elements.authStatusText.textContent = `当前已登录玩家账号 @${authState.user.username}，保存与读取会使用数据库云端槽位。`;
  }

  if (elements.authGuestView) {
    elements.authGuestView.hidden = authState.authenticated;
  }
  if (elements.authUserView) {
    elements.authUserView.hidden = !authState.authenticated;
  }
  if (elements.localServerPanel) {
    elements.localServerPanel.hidden = authState.apiEnabled || authState.authenticated;
  }
  if (elements.recentAccountPanel && !authState.apiEnabled) {
    elements.recentAccountPanel.hidden = authState.authenticated || recentAccounts.length === 0;
  }

  renderRecentAccounts();

  if (elements.accountQuickLabel && elements.accountQuickDetail) {
    if (!authState.apiEnabled) {
      elements.accountQuickLabel.textContent = "游客模式";
      elements.accountQuickDetail.textContent = "file:// 无法连接账号服务";
    } else if (!authState.ready) {
      elements.accountQuickLabel.textContent = "账号连接中";
      elements.accountQuickDetail.textContent = "正在同步登录态";
    } else if (!authState.authenticated) {
      elements.accountQuickLabel.textContent = "游客模式";
      elements.accountQuickDetail.textContent = recentAccounts.length ? `${recentAccounts.length} 个历史账号可快速带入` : "点击登录 / 注册";
    } else if (isAdminMode()) {
      elements.accountQuickLabel.textContent = `@${authState.user.username}`;
      elements.accountQuickDetail.textContent = "管理员已登录";
    } else {
      elements.accountQuickLabel.textContent = `@${authState.user.username}`;
      elements.accountQuickDetail.textContent = "玩家已登录";
    }
  }

  if (authState.authenticated && authState.user) {
    elements.accountRoleText.textContent = isAdminMode() ? "Administrator Session" : "Player Session";
    elements.accountDisplayName.textContent = authState.user.displayName || authState.user.username;
    elements.accountUsernameText.textContent = `@${authState.user.username}`;
    elements.accountRolePill.textContent = isAdminMode() ? "管理员" : "玩家";
    elements.accountArchiveNameText.textContent = authState.user.archiveName || "未设置";
    elements.accountArchiveNoteText.textContent = authState.user.archiveNote || "未设置";
  }

  if (elements.adminPanel) {
    elements.adminPanel.hidden = !isAdminMode();
  }
  if (elements.adminPanelSummary) {
    elements.adminPanelSummary.textContent = isAdminMode()
      ? "管理员模式已启用：选项会显示数值提示，并可查看已注册玩家与云端留档概况。"
      : "";
  }

  if (elements.saveLifeButton) {
    elements.saveLifeButton.textContent = isCloudSaveMode() ? "保存到云端槽位" : "保存到所选槽位";
  }
  if (elements.loadLifeButton) {
    elements.loadLifeButton.textContent = isCloudSaveMode() ? "读取云端槽位" : "读取所选槽位";
  }

  renderAdminDashboard();
}

function loadRecentAccounts() {
  try {
    const raw = localStorage.getItem(RECENT_ACCOUNT_STORAGE_KEY);
    if (!raw) {
      return [];
    }

    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) {
      return [];
    }

    return parsed
      .map((entry) => ({
        username: typeof entry?.username === "string" ? entry.username : "",
        displayName: typeof entry?.displayName === "string" ? entry.displayName : "",
        archiveName: typeof entry?.archiveName === "string" ? entry.archiveName : "",
        role: entry?.role === "admin" ? "admin" : "player",
        lastUsedAt: typeof entry?.lastUsedAt === "string" ? entry.lastUsedAt : ""
      }))
      .filter((entry) => entry.username && entry.role !== "admin" && entry.username !== "sunhengliuxinyu")
      .slice(0, 8);
  } catch (error) {
    return [];
  }
}

function persistRecentAccounts() {
  try {
    const sanitizedAccounts = recentAccounts
      .filter((entry) => entry.username && entry.role !== "admin" && entry.username !== "sunhengliuxinyu")
      .slice(0, 8);
    recentAccounts = sanitizedAccounts;
    localStorage.setItem(RECENT_ACCOUNT_STORAGE_KEY, JSON.stringify(sanitizedAccounts));
  } catch (error) {
    // Ignore local history persistence failures.
  }
}

function rememberRecentAccount(user) {
  if (!user?.username || user.role === "admin") {
    return;
  }

  const entry = {
    username: user.username,
    displayName: user.displayName || user.username,
    archiveName: user.archiveName || "",
    role: user.role === "admin" ? "admin" : "player",
    lastUsedAt: new Date().toISOString()
  };

  recentAccounts = [entry, ...recentAccounts.filter((item) => item.username !== entry.username)].slice(0, 8);
  persistRecentAccounts();
}

function renderRecentAccounts() {
  if (!elements.recentAccountList) {
    return;
  }

  if (elements.recentAccountPanel) {
    elements.recentAccountPanel.hidden = authState.authenticated;
  }

  elements.recentAccountList.innerHTML = recentAccounts.length
    ? recentAccounts.map((account) => `
        <button class="recent-account-button" type="button" data-recent-account-username="${escapeHtml(account.username)}">
          <span class="recent-account-meta">
            <strong>${escapeHtml(account.displayName || account.username)}</strong>
            <small>@${escapeHtml(account.username)}${account.archiveName ? ` · ${escapeHtml(account.archiveName)}` : ""}</small>
          </span>
          <span class="auth-role-pill">${escapeHtml(account.role === "admin" ? "管理员" : "玩家")}</span>
        </button>
      `).join("")
    : `<p class="note">暂无历史账号。完成一次注册或登录后，这里会显示你曾经用过的账号。</p>`;
}

function fillLoginFromRecentAccount(username) {
  if (!username || !elements.loginUsernameInput) {
    return;
  }

  elements.loginUsernameInput.value = username;
  elements.loginPasswordInput?.focus();
  setSaveLoadStatus(`已带入历史账号 @${username}，请输入密码登录。`);
}

function openLocalServerVersion() {
  window.location.href = "http://localhost:3000";
}

function presentStartupExperience() {
  if (hasPresentedStartupModal) {
    return;
  }

  hasPresentedStartupModal = true;
  if (!authState.authenticated) {
    shouldOpenIntroAfterSystem = true;
    openFeatureModal("system");
    return;
  }

  shouldOpenIntroAfterSystem = false;
  openIntroDialog();
}

async function refreshAuthState() {
  if (!authState.apiEnabled) {
    authState.ready = true;
    applyAuthUser(null);
    remoteSaveSlotSummaries = [];
    adminDashboardUsers = [];
    renderAuthInterface();
    renderSaveSlotSummaries();
    render();
    return;
  }

  try {
    const response = await apiRequest("/api/auth/session");
    applyAuthUser(response.user || null);
    if (response.user) {
      rememberRecentAccount(response.user);
    }
    authState.ready = true;
    if (isCloudSaveMode()) {
      await refreshRemoteSaveSlotSummaries();
    } else {
      remoteSaveSlotSummaries = [];
    }
    if (isAdminMode()) {
      await refreshAdminDashboard();
    } else {
      adminDashboardUsers = [];
    }
  } catch (error) {
    authState.ready = true;
    applyAuthUser(null);
    remoteSaveSlotSummaries = [];
    adminDashboardUsers = [];
    setSaveLoadStatus(`账号服务暂不可用：${error.message}`);
  }

  renderAuthInterface();
  renderSaveSlotSummaries();
  render();
}

async function handleRegisterFormSubmit(event) {
  event.preventDefault();
  const username = elements.registerUsernameInput.value.trim();
  const password = elements.registerPasswordInput.value;
  const passwordConfirm = elements.registerPasswordConfirmInput.value;

  if (password !== passwordConfirm) {
    setSaveLoadStatus("注册失败：两次输入的密码不一致。");
    return;
  }

  try {
    const response = await apiRequest("/api/auth/register", {
      method: "POST",
      body: {
        username,
        password
      }
    });
    applyAuthUser(response.user);
    rememberRecentAccount(response.user);
    elements.registerForm.reset();
    await refreshRemoteSaveSlotSummaries();
    adminDashboardUsers = [];
    renderAuthInterface();
    render();
    setSaveLoadStatus(`已注册并登录账号 @${response.user.username}。后续保存将写入数据库云端槽位。`);
    if (elements.systemDialog?.open || elements.systemDialog?.hasAttribute("open")) {
      shouldOpenIntroAfterSystem = false;
      closeFeatureModal(elements.systemDialog);
    }
  } catch (error) {
    setSaveLoadStatus(`注册失败：${error.message}`);
  }
}

async function handleLoginFormSubmit(event) {
  event.preventDefault();
  const username = elements.loginUsernameInput.value.trim();
  const password = elements.loginPasswordInput.value;

  try {
    const response = await apiRequest("/api/auth/login", {
      method: "POST",
      body: { username, password }
    });
    applyAuthUser(response.user);
    rememberRecentAccount(response.user);
    elements.loginForm.reset();
    await refreshRemoteSaveSlotSummaries();
    if (isAdminMode()) {
      await refreshAdminDashboard();
    } else {
      adminDashboardUsers = [];
    }
    renderAuthInterface();
    render();
    setSaveLoadStatus(`已登录账号 @${response.user.username}。当前存档模式：${isAdminMode() ? "管理员云端" : "玩家云端"}。`);
  } catch (error) {
    setSaveLoadStatus(`登录失败：${error.message}`);
  }
}

async function handleLogout() {
  try {
    if (authState.apiEnabled) {
      await apiRequest("/api/auth/logout", { method: "POST" });
    }
  } catch (error) {
    setSaveLoadStatus(`退出登录失败：${error.message}`);
    return;
  }

  applyAuthUser(null);
  remoteSaveSlotSummaries = [];
  adminDashboardUsers = [];
  renderAuthInterface();
  renderSaveSlotSummaries();
  render();
  setSaveLoadStatus("已退出账号登录，当前恢复为浏览器本地存档模式。");
}

async function handleRefreshCloudSlots() {
  if (!isCloudSaveMode()) {
    setSaveLoadStatus("当前未登录账号，无法刷新云端槽位。");
    return;
  }

  try {
    await refreshRemoteSaveSlotSummaries();
    setSaveLoadStatus(`已刷新账号 @${authState.user.username} 的云端槽位信息。`);
  } catch (error) {
    setSaveLoadStatus(`刷新云端槽位失败：${error.message}`);
  }
}

async function handleAdminRefresh() {
  if (!isAdminMode()) {
    setSaveLoadStatus("当前账号不是管理员，无法刷新玩家档案总览。");
    return;
  }

  try {
    await refreshAdminDashboard();
    setSaveLoadStatus("已刷新管理员玩家档案总览。管理员数值提示界面保持开启。");
  } catch (error) {
    setSaveLoadStatus(`刷新管理员总览失败：${error.message}`);
  }
}

function closeExitSaveDialog() {
  pendingExitAfterSave = false;
  closeStoryDialog(elements.exitSaveDialog);
}

function renderTitleDialog() {
  const hasArchive = Boolean(state.archiveId);
  const isArchived = state.deceased;
  const summaryText = !hasArchive
    ? "当前没有进行中的人生档案。你可以随机新人生，或先进入账号与云端档案。"
    : isArchived
      ? `当前档案 ${escapeHtml(state.archiveId)} 已归档，终局年龄 ${escapeHtml(state.age)} 岁。你可以回看、重新开始，或继续管理账号与存档。`
      : `当前档案 ${escapeHtml(state.archiveId)} 停留在 ${escapeHtml(state.age)} 岁第 ${escapeHtml(state.quarter)} 季。你可以继续当前人生，或重新开始。`;

  elements.titleDialogKicker.textContent = isCloudSaveMode() ? "Starport Title / Cloud Session" : "Starport Title / Local Session";
  elements.titleDialogTitle.textContent = "ABO人生模拟器";
  elements.titleDialogDescription.innerHTML = `
    <p>${summaryText}</p>
    <p class="note">${isCloudSaveMode() ? `当前账号：@${escapeHtml(authState.user.username)}，默认存档模式：云端槽位。` : "当前处于游客 / 本地模式；登录后可切换为数据库云端留档。"}</p>
  `;
  elements.titleContinueButton.textContent = hasArchive && !isArchived ? "继续当前人生" : "进入游戏";
}

function openTitleDialog() {
  renderTitleDialog();
  openStoryDialog(elements.titleDialog, elements.titleContinueButton);
}

function closeTitleDialog() {
  closeStoryDialog(elements.titleDialog);
}

function returnToTitleScreen() {
  closeAllStoryDialogs();
  openTitleDialog();
}

function renderExitSaveDialog() {
  const saveTarget = isCloudSaveMode() ? "云端槽位" : "本地槽位";
  const hasProgress = Boolean(state.archiveId);
  const hasUnsaved = hasUnsavedProgress();

  elements.exitSaveKicker.textContent = isCloudSaveMode() ? "Exit Check / Cloud Save" : "Exit Check / Local Save";
  elements.exitSaveTitle.textContent = hasUnsaved ? "退出前是否留档？" : "确认退出当前游戏？";
  elements.exitSaveDescription.innerHTML = hasProgress
    ? hasUnsaved
      ? `<p>当前人生 ${escapeHtml(state.archiveId)} 还有未留档进度。退出前你可以先保存到${escapeHtml(saveTarget)}。</p><p class="note">当前槽位：${escapeHtml(selectedSaveSlot)}。${isCloudSaveMode() ? "已登录账号会写入云端数据库。" : "游客模式会写入浏览器本地槽位。"}</p>`
      : `<p>当前人生 ${escapeHtml(state.archiveId)} 没有新的未保存进度，可以直接退出。</p>`
    : `<p>当前还没有生成需要保存的人生档案，可以直接退出。</p>`;

  elements.exitSaveAndLeaveButton.textContent = hasUnsaved ? `保存到${saveTarget}并返回标题页` : `直接返回标题页`;
  elements.exitWithoutSaveButton.hidden = !hasUnsaved;
}

function openExitSaveDialog() {
  renderExitSaveDialog();
  openStoryDialog(elements.exitSaveDialog, elements.exitCancelButton);
}

async function handleExitSaveAndLeave() {
  if (hasUnsavedProgress() && state.archiveId) {
    pendingExitAfterSave = true;
    const saved = await saveCurrentLife();
    if (!saved) {
      pendingExitAfterSave = false;
      return;
    }
  }

  closeExitSaveDialog();
  returnToTitleScreen();
}

function handleExitWithoutSave() {
  closeExitSaveDialog();
  returnToTitleScreen();
}

function handleBeforeUnload(event) {
  if (!hasUnsavedProgress()) {
    return;
  }
  event.preventDefault();
  event.returnValue = "";
}

function handlePageHide() {
  persistCloudSaveForPageExit();
}

function isPlainObject(value) {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function cloneSaveValue(value) {
  return JSON.parse(JSON.stringify(value));
}

function escapeHtml(value) {
  const entities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#39;"
  };
  return String(value ?? "").replace(/[&<>"']/g, (char) => entities[char]);
}

function isSafeSaveRecordKey(value) {
  return typeof value === "string" && value.length > 0 && value.length <= 160 && !UNSAFE_SAVE_RECORD_KEYS.has(value);
}

function isSafeSaveString(value, maxLength = 2000) {
  return typeof value === "string" && value.length <= maxLength;
}

function hasValidAttributeRecord(attributes) {
  return isPlainObject(attributes)
    && ATTRIBUTE_DEFINITIONS.every((definition) => typeof attributes[definition.key] === "number" && Number.isFinite(attributes[definition.key]));
}

function hydrateSavedParent(parent) {
  if (!isPlainObject(parent)
    || !isSafeSaveString(parent.label, 40)
    || !isSafeSaveString(parent.firstGender, 20)
    || !isSafeSaveString(parent.secondGender, 20)
    || !isSafeSaveString(parent.career, 120)
    || typeof parent.age !== "number"
    || !Number.isFinite(parent.age)
    || !hasValidAttributeRecord(parent.attributes)) {
    return undefined;
  }

  return {
    label: parent.label,
    firstGender: parent.firstGender,
    secondGender: parent.secondGender,
    career: parent.career,
    age: parent.age,
    attributes: cloneSaveValue(parent.attributes)
  };
}

function hydrateSavedParents(parents) {
  const hydratedParents = [];
  for (const parent of parents) {
    const hydratedParent = hydrateSavedParent(parent);
    if (!hydratedParent) {
      return null;
    }
    hydratedParents.push(hydratedParent);
  }
  return hydratedParents;
}

function hydrateSavedGeneratedNpc(npc) {
  const stringKeys = ["id", "familyId", "familyName", "name", "bondType", "secondGender", "role", "summary", "bondPoint", "triggers"];
  if (!isPlainObject(npc)
    || npc.generated !== true
    || npc.complete !== true
    || !isSafeSaveRecordKey(npc.id)
    || !stringKeys.every((key) => isSafeSaveString(npc[key]))) {
    return undefined;
  }

  return {
    id: npc.id,
    generated: true,
    familyId: npc.familyId,
    familyName: npc.familyName,
    name: npc.name,
    firstGender: isSafeSaveString(npc.firstGender, 20) ? npc.firstGender : "未知",
    bondType: npc.bondType,
    secondGender: npc.secondGender,
    role: npc.role,
    summary: npc.summary,
    bondPoint: npc.bondPoint,
    triggers: npc.triggers,
    complete: true
  };
}

function hydrateSavedGeneratedNpcs(generatedNpcs) {
  const seenNpcIds = new Set();
  const hydratedNpcs = [];
  for (const npc of generatedNpcs) {
    const hydratedNpc = hydrateSavedGeneratedNpc(npc);
    if (!hydratedNpc || seenNpcIds.has(hydratedNpc.id)) {
      return null;
    }
    seenNpcIds.add(hydratedNpc.id);
    hydratedNpcs.push(hydratedNpc);
  }
  return hydratedNpcs;
}

function hydrateSavedRandomNpcEncounter(encounter) {
  if (encounter === null) {
    return null;
  }
  if (!isPlainObject(encounter)
    || !isSafeSaveString(encounter.key, 80)
    || typeof encounter.age !== "number"
    || !Number.isFinite(encounter.age)
    || typeof encounter.quarter !== "number"
    || !Number.isFinite(encounter.quarter)) {
    return undefined;
  }

  const npc = hydrateSavedGeneratedNpc(encounter.npc);
  if (!npc) {
    return undefined;
  }

  const theme = RANDOM_NPC_FAMILY_THEMES[npc.familyId] || RANDOM_NPC_FAMILY_THEMES.civilian;
  return {
    key: encounter.key,
    age: encounter.age,
    quarter: encounter.quarter,
    npc,
    choices: createRandomNpcChoices(theme)
  };
}

function hydrateSavedNpcRelationships(relationships, savedState) {
  const hydratedRelationships = {};
  const moment = `${savedState.age}岁第${savedState.quarter}季`;
  Object.entries(relationships).forEach(([npcId, record]) => {
    if (isSafeSaveRecordKey(npcId) && isPlainObject(record)) {
      hydratedRelationships[npcId] = normalizeNpcRelationshipRecord(npcId, record, NPC_RELATIONSHIP_EMPTY_VALUES, moment, getRelationshipNpcById(npcId, savedState));
    }
  });
  return hydratedRelationships;
}

function getRelationshipStageEventDefinition(eventId) {
  return RELATIONSHIP_STAGE_EVENTS.find((event) => event.id === eventId);
}

function getRelationshipStageEventResolvedKey(npcId, eventId) {
  return `${npcId}:${eventId}`;
}

function getRelationshipStageEventKey(npcId, eventId, age = state.age, quarter = state.quarter) {
  return `${age}-${quarter}-${npcId}-${eventId}`;
}

function isRelationshipStageEventForMoment(stageEvent, age = state.age, quarter = state.quarter) {
  return Boolean(stageEvent)
    && stageEvent.age === age
    && stageEvent.quarter === quarter
    && stageEvent.key === getRelationshipStageEventKey(stageEvent.npcId, stageEvent.eventId, stageEvent.age, stageEvent.quarter);
}

function getRelationshipArchiveNpcsFromState(sourceState = state) {
  const generatedNpcs = Array.isArray(sourceState.generatedNpcs) ? sourceState.generatedNpcs.filter(isPlainObject) : [];
  return [...RELATIONSHIP_NPCS, ...generatedNpcs];
}

function getRelationshipNpcById(npcId, sourceState = state) {
  if (!isSafeSaveRecordKey(npcId)) {
    return null;
  }
  return getRelationshipArchiveNpcsFromState(sourceState).find((npc) => npc.id === npcId) || null;
}

function isNpcKnownInSource(npc, sourceState = state) {
  if (!isPlainObject(npc) || !isSafeSaveRecordKey(npc.id)) {
    return false;
  }
  const knownNpcIds = Array.isArray(sourceState.knownNpcIds) ? sourceState.knownNpcIds : [];
  return npc.generated === true || (npc.complete === true && knownNpcIds.includes(npc.id));
}

function getRelationshipRecordForSource(npc, sourceState = state) {
  const defaults = npc?.generated === true ? NPC_RELATIONSHIP_EMPTY_VALUES : NPC_RELATIONSHIP_DEFAULT_VALUES;
  const record = isPlainObject(sourceState.npcRelationships?.[npc.id]) ? sourceState.npcRelationships[npc.id] : {};
  const moment = sourceState.archiveId ? `${sourceState.age}岁第${sourceState.quarter}季` : getNpcRelationshipMoment();
  return normalizeNpcRelationshipRecord(npc.id, record, defaults, moment, npc);
}

function serializeRelationshipStageEvent(stageEvent) {
  if (!stageEvent) {
    return null;
  }
  return {
    key: stageEvent.key,
    eventId: stageEvent.eventId,
    npcId: stageEvent.npcId,
    age: stageEvent.age,
    quarter: stageEvent.quarter,
    stage: stageEvent.stage
  };
}

function hydrateSavedResolvedRelationshipStageEvents(resolvedEvents) {
  const hydratedEvents = {};
  Object.entries(resolvedEvents).forEach(([key, choiceId]) => {
    const [npcId, eventId] = key.split(":");
    const eventDefinition = getRelationshipStageEventDefinition(eventId);
    if (isSafeSaveString(key, 360)
      && isSafeSaveRecordKey(npcId)
      && eventDefinition
      && eventDefinition.choices.some((choice) => choice.id === choiceId)) {
      hydratedEvents[key] = choiceId;
    }
  });
  return hydratedEvents;
}

function hydrateRelationshipStageEvent(savedStageEvent, savedState) {
  if (savedStageEvent === null) {
    return null;
  }
  if (!isPlainObject(savedStageEvent)
    || !isSafeSaveString(savedStageEvent.key, 360)
    || !isSafeSaveRecordKey(savedStageEvent.eventId)
    || !isSafeSaveRecordKey(savedStageEvent.npcId)
    || !isSafeSaveString(savedStageEvent.stage, 20)
    || typeof savedStageEvent.age !== "number"
    || !Number.isFinite(savedStageEvent.age)
    || typeof savedStageEvent.quarter !== "number"
    || !Number.isFinite(savedStageEvent.quarter)) {
    return undefined;
  }

  const eventDefinition = getRelationshipStageEventDefinition(savedStageEvent.eventId);
  const npc = getRelationshipNpcById(savedStageEvent.npcId, savedState);
  if (!eventDefinition
    || eventDefinition.stage !== savedStageEvent.stage
    || !npc
    || !isNpcKnownInSource(npc, savedState)
    || savedStageEvent.age !== savedState.age
    || savedStageEvent.quarter !== savedState.quarter
    || !isRelationshipStageEventForMoment(savedStageEvent, savedState.age, savedState.quarter)) {
    return undefined;
  }

  const relationship = getRelationshipRecordForSource(npc, savedState);
  if (getNpcRelationshipStage(relationship) !== eventDefinition.stage) {
    return undefined;
  }

  return {
    key: savedStageEvent.key,
    eventId: eventDefinition.id,
    npcId: npc.id,
    age: savedStageEvent.age,
    quarter: savedStageEvent.quarter,
    stage: eventDefinition.stage,
    npc,
    definition: eventDefinition
  };
}

function getProactiveNpcEventDefinition(eventId) {
  return PROACTIVE_NPC_EVENTS.find((event) => event.id === eventId);
}

function getProactiveNpcEventResolvedKey(npcId, eventId) {
  return `${npcId}:${eventId}`;
}

function getProactiveNpcEventKey(npcId, eventId, age = state.age, quarter = state.quarter) {
  return `${age}-${quarter}-${npcId}-${eventId}`;
}

function isProactiveNpcEventForMoment(proactiveEvent, age = state.age, quarter = state.quarter) {
  return Boolean(proactiveEvent)
    && proactiveEvent.age === age
    && proactiveEvent.quarter === quarter
    && proactiveEvent.key === getProactiveNpcEventKey(proactiveEvent.npcId, proactiveEvent.eventId, proactiveEvent.age, proactiveEvent.quarter);
}

function isProactiveNpcEventDefinitionEligible(eventDefinition, stage, relationship) {
  const tag = typeof relationship?.tag === "string" ? relationship.tag : "";
  const tendency = typeof relationship?.tendency === "string" ? relationship.tendency : "";
  const contextMatches = eventDefinition.contexts.includes(tag)
    || eventDefinition.contexts.includes(stage)
    || (stage === "认识" && eventDefinition.contexts.some((context) => context === "熟人" || context === "普通同事"));
  const tendencyMatches = !Array.isArray(eventDefinition.tendencies) || eventDefinition.tendencies.length === 0 || eventDefinition.tendencies.includes(tendency);
  return stage !== "陌生" && contextMatches && tendencyMatches;
}

function serializeProactiveNpcEvent(proactiveEvent) {
  if (!proactiveEvent) {
    return null;
  }
  return {
    key: proactiveEvent.key,
    eventId: proactiveEvent.eventId,
    npcId: proactiveEvent.npcId,
    age: proactiveEvent.age,
    quarter: proactiveEvent.quarter,
    stage: proactiveEvent.stage,
    tag: proactiveEvent.tag
  };
}

function hydrateSavedResolvedProactiveNpcEvents(resolvedEvents) {
  const hydratedEvents = {};
  Object.entries(resolvedEvents).forEach(([key, choiceId]) => {
    const [npcId, eventId] = key.split(":");
    const eventDefinition = getProactiveNpcEventDefinition(eventId);
    if (isSafeSaveString(key, 360)
      && isSafeSaveRecordKey(npcId)
      && eventDefinition
      && eventDefinition.choices.some((choice) => choice.id === choiceId)) {
      hydratedEvents[key] = choiceId;
    }
  });
  return hydratedEvents;
}

function hydrateProactiveNpcEvent(savedProactiveEvent, savedState) {
  if (savedProactiveEvent === null) {
    return null;
  }
  if (!isPlainObject(savedProactiveEvent)
    || !isSafeSaveString(savedProactiveEvent.key, 360)
    || !isSafeSaveRecordKey(savedProactiveEvent.eventId)
    || !isSafeSaveRecordKey(savedProactiveEvent.npcId)
    || !isSafeSaveString(savedProactiveEvent.stage, 20)
    || !isSafeSaveString(savedProactiveEvent.tag, 40)
    || typeof savedProactiveEvent.age !== "number"
    || !Number.isFinite(savedProactiveEvent.age)
    || typeof savedProactiveEvent.quarter !== "number"
    || !Number.isFinite(savedProactiveEvent.quarter)) {
    return undefined;
  }

  const eventDefinition = getProactiveNpcEventDefinition(savedProactiveEvent.eventId);
  const npc = getRelationshipNpcById(savedProactiveEvent.npcId, savedState);
  const resolvedKey = getProactiveNpcEventResolvedKey(savedProactiveEvent.npcId, savedProactiveEvent.eventId);
  if (!eventDefinition
    || !npc
    || !isNpcKnownInSource(npc, savedState)
    || savedState.resolvedProactiveNpcEvents?.[resolvedKey]
    || savedProactiveEvent.age !== savedState.age
    || savedProactiveEvent.quarter !== savedState.quarter
    || !isProactiveNpcEventForMoment(savedProactiveEvent, savedState.age, savedState.quarter)) {
    return undefined;
  }

  const relationship = getRelationshipRecordForSource(npc, savedState);
  const stage = getNpcRelationshipStage(relationship);
  if (stage !== savedProactiveEvent.stage
    || relationship.tag !== savedProactiveEvent.tag
    || !isProactiveNpcEventDefinitionEligible(eventDefinition, stage, relationship)) {
    return undefined;
  }

  return {
    key: savedProactiveEvent.key,
    eventId: eventDefinition.id,
    npcId: npc.id,
    age: savedProactiveEvent.age,
    quarter: savedProactiveEvent.quarter,
    stage,
    tag: relationship.tag,
    npc,
    definition: eventDefinition
  };
}

function getNarrativeDiceBoundNpc(diceEvent, sourceState = state) {
  if (!diceEvent || !isSafeSaveRecordKey(diceEvent.npcId)) {
    return null;
  }
  const npc = getRelationshipNpcById(diceEvent.npcId, sourceState);
  if (!npc || !isNpcKnownInSource(npc, sourceState)) {
    return null;
  }
  return npc;
}

function replaceNarrativeDiceTa(text, npc) {
  return String(text ?? "").replace(/TA/g, npc?.name || "TA");
}

function formatNarrativeDiceChoiceEffectText(choice, npc) {
  return formatChoiceEffectText(npc ? choice : { ...choice, relationshipEffects: null });
}

function getNarrativeDiceNpcWeight(npc) {
  const relationship = getNpcRelationshipDisplayRecord(npc);
  const stage = getNpcRelationshipStage(relationship);
  const stageWeights = {
    "陌生": 1,
    "认识": 4,
    "熟悉": 8,
    "信赖": 12,
    "重要的人": 16
  };
  const tagWeights = {
    "疏远": -3,
    "朋友": 4,
    "可靠搭档": 4,
    "互相保护": 5,
    "知己": 6,
    "暧昧": 4,
    "竞争者": 3,
    "损友": 3
  };
  return Math.max(1, (stageWeights[stage] || 3) + (tagWeights[relationship.tag] || 0));
}

function pickNarrativeDiceBoundNpc() {
  const eligibleNpcs = getKnownRelationshipNpcs().filter((npc) => isSafeSaveRecordKey(npc.id));
  if (!eligibleNpcs.length) {
    return null;
  }
  return weightedPick(eligibleNpcs.map((npc) => ({
    value: npc,
    weight: getNarrativeDiceNpcWeight(npc)
  })));
}

function serializeNarrativeDiceEvent(diceEvent) {
  if (!diceEvent) {
    return null;
  }
  const serializedEvent = {
    id: diceEvent.id,
    key: diceEvent.key,
    age: diceEvent.age,
    quarter: diceEvent.quarter
  };
  if (isSafeSaveRecordKey(diceEvent.npcId) && getNarrativeDiceBoundNpc(diceEvent)) {
    serializedEvent.npcId = diceEvent.npcId;
  }
  return serializedEvent;
}

function hydrateNarrativeDiceEvent(savedDiceEvent, savedState) {
  if (savedDiceEvent === null) {
    return null;
  }
  if (!isPlainObject(savedDiceEvent)
    || typeof savedDiceEvent.id !== "string"
    || typeof savedDiceEvent.key !== "string"
    || typeof savedDiceEvent.age !== "number"
    || typeof savedDiceEvent.quarter !== "number") {
    return undefined;
  }

  const diceEvent = NARRATIVE_DICE_EVENTS.find((item) => item.id === savedDiceEvent.id);
  if (!diceEvent) {
    return undefined;
  }

  let npcId = null;
  if (Object.prototype.hasOwnProperty.call(savedDiceEvent, "npcId")) {
    if (savedDiceEvent.npcId !== null && !isSafeSaveRecordKey(savedDiceEvent.npcId)) {
      return undefined;
    }
    const npc = getRelationshipNpcById(savedDiceEvent.npcId, savedState);
    if (npc && isNpcKnownInSource(npc, savedState)) {
      npcId = npc.id;
    }
  }

  const hydratedEvent = {
    ...diceEvent,
    key: savedDiceEvent.key,
    age: savedDiceEvent.age,
    quarter: savedDiceEvent.quarter,
    choices: NARRATIVE_DICE_CHOICES
  };
  if (npcId) {
    hydratedEvent.npcId = npcId;
  }
  return hydratedEvent;
}

function getSerializableStateValue(key) {
  if (key === "activeRelationshipStageEvent" || key === "pendingRelationshipStageEvent") {
    return serializeRelationshipStageEvent(state[key]);
  }
  if (key === "activeProactiveNpcEvent" || key === "pendingProactiveNpcEvent") {
    return serializeProactiveNpcEvent(state[key]);
  }
  if (key === "activeNarrativeDiceEvent" || key === "pendingNarrativeDiceEvent") {
    return serializeNarrativeDiceEvent(state[key]);
  }
  return cloneSaveValue(state[key]);
}

function createSavePayload() {
  refreshKnownNpcRelationshipProfiles();
  const savedState = SAVE_STATE_KEYS.reduce((payload, key) => {
    payload[key] = getSerializableStateValue(key);
    return payload;
  }, {});

  return {
    version: SAVE_VERSION,
    savedAt: new Date().toISOString(),
    state: savedState
  };
}

function getSaveFingerprint(payload) {
  if (!payload) {
    return null;
  }
  return JSON.stringify(payload);
}

function rememberPersistedPayload(payload) {
  lastPersistedFingerprint = getSaveFingerprint(payload);
}

function getCurrentSaveFingerprint() {
  if (!state.archiveId) {
    return null;
  }
  return getSaveFingerprint(createSavePayload());
}

function hasUnsavedProgress() {
  if (!state.archiveId) {
    return false;
  }
  return getCurrentSaveFingerprint() !== lastPersistedFingerprint;
}

function persistCloudSaveForPageExit() {
  if (!isCloudSaveMode() || !state.archiveId || !hasUnsavedProgress()) {
    return;
  }

  const payload = createSavePayload();
  const body = JSON.stringify({ payload });

  try {
    const beaconSent = typeof navigator.sendBeacon === "function"
      && navigator.sendBeacon(`/api/saves/${selectedSaveSlot}/beacon`, new Blob([body], { type: "application/json" }));
    if (!beaconSent) {
      fetch(`/api/saves/${selectedSaveSlot}/beacon`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body,
        credentials: "same-origin",
        keepalive: true
      }).catch(() => {});
    }
    rememberPersistedPayload(payload);
  } catch (error) {
    // Ignore exit-time sync failures; browser unload restrictions are best-effort only.
  }
}

function hasAllSaveStateKeys(savedState) {
  return SAVE_STATE_KEYS.every((key) => Object.prototype.hasOwnProperty.call(savedState, key));
}

function isNullableNumber(value) {
  return value === null || (typeof value === "number" && Number.isFinite(value));
}

function isNullableString(value) {
  return value === null || typeof value === "string";
}

function validateSavedState(payload) {
  if (!isPlainObject(payload) || payload.version !== SAVE_VERSION || !isPlainObject(payload.state)) {
    return null;
  }

  const savedState = { ...payload.state };
  if (!Number.isInteger(savedState.deathAge) || savedState.deathAge < DEATH_AGE_MIN || savedState.deathAge > DEATH_AGE_MAX) {
    savedState.deathAge = randomInt(DEATH_AGE_MIN, DEATH_AGE_MAX);
  }
  if (typeof savedState.deceased !== "boolean") {
    savedState.deceased = Number.isFinite(savedState.age) && savedState.age >= savedState.deathAge;
  }
  if (savedState.age >= savedState.deathAge) {
    savedState.deceased = true;
  }
  if (!Object.prototype.hasOwnProperty.call(savedState, "npcRelationships")) {
    savedState.npcRelationships = {};
  }
  if (!Object.prototype.hasOwnProperty.call(savedState, "npcMemories")) {
    savedState.npcMemories = {};
  }
  if (!Object.prototype.hasOwnProperty.call(savedState, "resolvedRelationshipStageEvents")) {
    savedState.resolvedRelationshipStageEvents = {};
  }
  if (!Object.prototype.hasOwnProperty.call(savedState, "activeRelationshipStageEvent")) {
    savedState.activeRelationshipStageEvent = null;
  }
  if (!Object.prototype.hasOwnProperty.call(savedState, "pendingRelationshipStageEvent")) {
    savedState.pendingRelationshipStageEvent = null;
  }
  if (!Object.prototype.hasOwnProperty.call(savedState, "resolvedProactiveNpcEvents")) {
    savedState.resolvedProactiveNpcEvents = {};
  }
  if (!Object.prototype.hasOwnProperty.call(savedState, "activeProactiveNpcEvent")) {
    savedState.activeProactiveNpcEvent = null;
  }
  if (!Object.prototype.hasOwnProperty.call(savedState, "pendingProactiveNpcEvent")) {
    savedState.pendingProactiveNpcEvent = null;
  }
  if (!Object.prototype.hasOwnProperty.call(savedState, "completedLifeGoals")) {
    savedState.completedLifeGoals = {};
  }
  if (!Object.prototype.hasOwnProperty.call(savedState, "resolvedLifeGoalStories")) {
    savedState.resolvedLifeGoalStories = {};
  }
  if (!Object.prototype.hasOwnProperty.call(savedState, "activeLifeGoalStoryId")) {
    savedState.activeLifeGoalStoryId = null;
  }
  if (!Object.prototype.hasOwnProperty.call(savedState, "pendingLifeGoalStoryIds")) {
    savedState.pendingLifeGoalStoryIds = [];
  }
  if (!Object.prototype.hasOwnProperty.call(savedState, "differentiationAge")) {
    savedState.differentiationAge = null;
  }
  if (!Object.prototype.hasOwnProperty.call(savedState, "differentiationQuarter")) {
    savedState.differentiationQuarter = null;
  }
  if (!Object.prototype.hasOwnProperty.call(savedState, "lifePathProgress")) {
    savedState.lifePathProgress = {};
  }
  if (!Object.prototype.hasOwnProperty.call(savedState, "resolvedMapLocationEvents")) {
    savedState.resolvedMapLocationEvents = {};
  }
  if (!Object.prototype.hasOwnProperty.call(savedState, "mapDiceResultBookkeeping")) {
    savedState.mapDiceResultBookkeeping = {};
  }
  if (!hasAllSaveStateKeys(savedState) || typeof savedState.archiveId !== "string" || !savedState.archiveId) {
    return null;
  }

  const stringKeys = ["archiveId", "firstGender", "secondGender", "familyId", "familyTag", "familyStory", "origin"];
  const numberKeys = ["age", "deathAge", "quarter", "actionPoints", "randomNpcSequence"];
  const nullableNumberKeys = ["activeAgeStoryAge", "differentiationAge", "differentiationQuarter"];
  const nullableStringKeys = [
    "activeQuarterStoryKey",
    "activeSpecialActionFamilyId",
    "activeSpecialActionId",
    "activeSpecialActionNode",
    "activeAttributeThresholdStoryFamilyId",
    "activeAttributeThresholdStoryId",
    "pendingAttributeThresholdFollowup",
    "activeLifeGoalStoryId",
    "resolvedPostDifferentiationStoryId",
    "activePostDifferentiationStoryId",
    "pendingPostDifferentiationStoryId"
  ];
  const arrayKeys = ["parents", "log", "pendingQuarterStoryKeys", "knownNpcIds", "generatedNpcs", "traits", "pendingLifeGoalStoryIds"];
  const objectKeys = [
    "attributes",
    "resolvedAgeStories",
    "resolvedQuarterStories",
    "resolvedSpecialActions",
    "resolvedAttributeThresholdStories",
    "resolvedRandomNpcEncounters",
    "npcRelationships",
    "npcMemories",
    "completedLifeGoals",
    "resolvedLifeGoalStories",
    "resolvedRelationshipStageEvents",
    "resolvedProactiveNpcEvents",
    "resolvedNarrativeDiceEvents",
    "lifePathProgress",
    "resolvedMapLocationEvents",
    "mapDiceResultBookkeeping"
  ];
  const nullableObjectKeys = [
    "activeRandomNpcEncounter",
    "pendingRandomNpcEncounter",
    "activeRelationshipStageEvent",
    "pendingRelationshipStageEvent",
    "activeProactiveNpcEvent",
    "pendingProactiveNpcEvent"
  ];

  if (!stringKeys.every((key) => typeof savedState[key] === "string")) {
    return null;
  }
  if (!numberKeys.every((key) => typeof savedState[key] === "number" && Number.isFinite(savedState[key]))) {
    return null;
  }
  if (!nullableNumberKeys.every((key) => isNullableNumber(savedState[key]))) {
    return null;
  }
  if (!nullableStringKeys.every((key) => isNullableString(savedState[key]))) {
    return null;
  }
  if (!arrayKeys.every((key) => Array.isArray(savedState[key]))) {
    return null;
  }
  if (!objectKeys.every((key) => isPlainObject(savedState[key]))) {
    return null;
  }
  if (!nullableObjectKeys.every((key) => savedState[key] === null || isPlainObject(savedState[key]))) {
    return null;
  }
  if (typeof savedState.pendingSpecialActionAdvance !== "boolean" || typeof savedState.deceased !== "boolean") {
    return null;
  }
  if (!Number.isInteger(savedState.deathAge) || savedState.deathAge < DEATH_AGE_MIN || savedState.deathAge > DEATH_AGE_MAX) {
    return null;
  }
  if (!ATTRIBUTE_DEFINITIONS.every((definition) => typeof savedState.attributes[definition.key] === "number" && Number.isFinite(savedState.attributes[definition.key]))) {
    return null;
  }
  if (!savedState.log.every((item) => isSafeSaveString(item, 4000))
    || !savedState.pendingQuarterStoryKeys.every((item) => isSafeSaveString(item, 80))
    || !savedState.pendingLifeGoalStoryIds.every((item) => isSafeSaveString(item, 80))
    || !savedState.knownNpcIds.every(isSafeSaveRecordKey)
    || !savedState.traits.every((item) => isSafeSaveString(item, 80))) {
    return null;
  }

  const hydratedParents = hydrateSavedParents(savedState.parents);
  const hydratedGeneratedNpcs = hydrateSavedGeneratedNpcs(savedState.generatedNpcs);
  const activeRandomNpcEncounter = hydrateSavedRandomNpcEncounter(savedState.activeRandomNpcEncounter);
  const pendingRandomNpcEncounter = hydrateSavedRandomNpcEncounter(savedState.pendingRandomNpcEncounter);
  if (!hydratedParents || !hydratedGeneratedNpcs || activeRandomNpcEncounter === undefined || pendingRandomNpcEncounter === undefined) {
    return null;
  }

  savedState.parents = hydratedParents;
  savedState.generatedNpcs = hydratedGeneratedNpcs;
  savedState.activeRandomNpcEncounter = activeRandomNpcEncounter;
  savedState.pendingRandomNpcEncounter = pendingRandomNpcEncounter;
  savedState.npcRelationships = hydrateSavedNpcRelationships(savedState.npcRelationships, savedState);
  savedState.npcMemories = hydrateSavedNpcMemories(savedState.npcMemories, savedState);
  savedState.completedLifeGoals = hydrateSavedCompletedLifeGoals(savedState.completedLifeGoals);
  savedState.resolvedLifeGoalStories = hydrateSavedLifeGoalStories(savedState.resolvedLifeGoalStories, savedState.completedLifeGoals);
  savedState.lifePathProgress = hydrateSavedLifePathProgress(savedState.lifePathProgress);
  savedState.resolvedMapLocationEvents = hydrateSavedResolvedMapLocationEvents(savedState.resolvedMapLocationEvents);
  savedState.mapDiceResultBookkeeping = hydrateSavedMapDiceResultBookkeeping(savedState.mapDiceResultBookkeeping);
  savedState.activeLifeGoalStoryId = hydrateSavedLifeGoalStoryId(savedState.activeLifeGoalStoryId, savedState.completedLifeGoals);
  if (savedState.activeLifeGoalStoryId && savedState.resolvedLifeGoalStories[savedState.activeLifeGoalStoryId]) {
    savedState.activeLifeGoalStoryId = null;
  }
  savedState.pendingLifeGoalStoryIds = hydrateSavedPendingLifeGoalStories(savedState.pendingLifeGoalStoryIds, savedState.completedLifeGoals)
    .filter((goalId) => !savedState.resolvedLifeGoalStories[goalId] && goalId !== savedState.activeLifeGoalStoryId);
  savedState.resolvedRelationshipStageEvents = hydrateSavedResolvedRelationshipStageEvents(savedState.resolvedRelationshipStageEvents);
  savedState.resolvedProactiveNpcEvents = hydrateSavedResolvedProactiveNpcEvents(savedState.resolvedProactiveNpcEvents);

  const activeRelationshipStageEvent = hydrateRelationshipStageEvent(savedState.activeRelationshipStageEvent, savedState);
  const pendingRelationshipStageEvent = hydrateRelationshipStageEvent(savedState.pendingRelationshipStageEvent, savedState);
  if (activeRelationshipStageEvent === undefined || pendingRelationshipStageEvent === undefined) {
    return null;
  }

  const activeProactiveNpcEvent = hydrateProactiveNpcEvent(savedState.activeProactiveNpcEvent, savedState);
  const pendingProactiveNpcEvent = hydrateProactiveNpcEvent(savedState.pendingProactiveNpcEvent, savedState);
  if (activeProactiveNpcEvent === undefined || pendingProactiveNpcEvent === undefined) {
    return null;
  }

  const activeNarrativeDiceEvent = hydrateNarrativeDiceEvent(savedState.activeNarrativeDiceEvent, savedState);
  const pendingNarrativeDiceEvent = hydrateNarrativeDiceEvent(savedState.pendingNarrativeDiceEvent, savedState);
  if (activeNarrativeDiceEvent === undefined || pendingNarrativeDiceEvent === undefined) {
    return null;
  }

  return SAVE_STATE_KEYS.reduce((validatedState, key) => {
    if (key === "activeNarrativeDiceEvent") {
      validatedState[key] = activeNarrativeDiceEvent;
    } else if (key === "pendingNarrativeDiceEvent") {
      validatedState[key] = pendingNarrativeDiceEvent;
    } else if (key === "activeRelationshipStageEvent") {
      validatedState[key] = activeRelationshipStageEvent;
    } else if (key === "pendingRelationshipStageEvent") {
      validatedState[key] = pendingRelationshipStageEvent;
    } else if (key === "activeProactiveNpcEvent") {
      validatedState[key] = activeProactiveNpcEvent;
    } else if (key === "pendingProactiveNpcEvent") {
      validatedState[key] = pendingProactiveNpcEvent;
    } else {
      validatedState[key] = cloneSaveValue(savedState[key]);
    }
    return validatedState;
  }, {});
}

function isValidSaveSlot(slot) {
  return Number.isInteger(slot) && slot >= 1 && slot <= SAVE_SLOT_COUNT;
}

function getSaveSlotKey(slot) {
  if (!isValidSaveSlot(slot)) {
    return null;
  }
  return `${SAVE_SLOT_KEY_PREFIX}-${slot}`;
}

function readStoredSave(key) {
  let rawSave = null;
  try {
    rawSave = localStorage.getItem(key);
  } catch (error) {
    return { status: "unavailable", key };
  }

  if (!rawSave) {
    return { status: "empty", key };
  }

  let payload = null;
  try {
    payload = JSON.parse(rawSave);
  } catch (error) {
    return { status: "corrupt", key };
  }

  const savedState = validateSavedState(payload);
  if (!savedState) {
    return { status: "invalid", key };
  }

  return { status: "valid", key, payload, savedState };
}

function readSaveSlot(slot) {
  if (!isValidSaveSlot(slot)) {
    return { status: "invalid-slot" };
  }

  const slotSave = readStoredSave(getSaveSlotKey(slot));
  if (slot === 1 && slotSave.status === "empty") {
    const legacySave = readStoredSave(SAVE_KEY);
    if (legacySave.status !== "empty") {
      return { ...legacySave, source: "legacy" };
    }
  }

  return { ...slotSave, source: "slot" };
}

function getSaveSlotSummary(slot, slotSave) {
  const label = `槽位 ${slot}`;
  if (slotSave.status === "valid") {
    const legacyNote = slotSave.source === "legacy" ? " · 旧版单槽" : "";
    const archivedNote = slotSave.savedState.deceased ? " · 已归档" : "";
    return {
      label,
      title: slotSave.savedState.archiveId,
      detail: `${slotSave.savedState.age} 岁第 ${slotSave.savedState.quarter} 季${archivedNote}${legacyNote}`
    };
  }

  const summaries = {
    empty: { title: "空槽", detail: "尚未保存人生" },
    corrupt: { title: "存档损坏", detail: "无法解析，保存可覆盖" },
    invalid: { title: "存档无效", detail: "版本或内容不匹配" },
    unavailable: { title: "存储不可用", detail: "浏览器禁止访问本地存储" },
    "invalid-slot": { title: "槽位异常", detail: "请选择 1-3 号槽位" }
  };

  return { label, ...(summaries[slotSave.status] || summaries.invalid) };
}

function renderSaveSlotSummaries() {
  elements.saveSlotList.querySelectorAll("[data-save-slot]").forEach((button) => {
    const slot = Number(button.dataset.saveSlot);
    const summary = isCloudSaveMode()
      ? getCloudSaveSlotSummary(slot, remoteSaveSlotSummaries.find((item) => item.slot === slot))
      : getSaveSlotSummary(slot, readSaveSlot(slot));

    button.setAttribute("aria-checked", String(slot === selectedSaveSlot));
    button.querySelector("span").textContent = summary.label;
    button.querySelector("strong").textContent = summary.title;
    button.querySelector("small").textContent = summary.detail;
  });
}

function selectSaveSlot(slot) {
  const nextSlot = Number(slot);
  if (!isValidSaveSlot(nextSlot)) {
    setSaveLoadStatus(`槽位选择失败：请选择 1-3 号${isCloudSaveMode() ? "云端" : "本地"}存档槽。`);
    return;
  }

  selectedSaveSlot = nextSlot;
  renderSaveSlotSummaries();
  setSaveLoadStatus(`已选择槽位 ${selectedSaveSlot}。保存与读取都会使用该${isCloudSaveMode() ? "云端" : "本地"}槽位。`);
}

function closeAllStoryDialogs() {
  [
    elements.titleDialog,
    elements.exitSaveDialog,
    elements.timeSummaryDialog,
    elements.parentArchiveDialog,
    elements.relationshipDialog,
    elements.randomNpcDialog,
    elements.relationshipStageEventDialog,
    elements.proactiveNpcEventDialog,
    elements.lifeGoalStoryDialog,
    elements.narrativeDiceDialog,
    elements.introDialog,
    elements.ageStoryDialog,
    elements.quarterStoryDialog,
    elements.specialActionDialog,
    elements.attributeThresholdStoryDialog,
    elements.differentiationDialog,
    elements.postDifferentiationStoryDialog
  ].forEach(closeStoryDialog);
}

function restoreActiveStoryDialog() {
  if (elements.titleDialog?.open || elements.titleDialog?.hasAttribute("open")) {
    renderTitleDialog();
    return;
  }

  if (typeof state.activeAgeStoryAge === "number" && AGE_STORY_EVENTS[state.activeAgeStoryAge]) {
    renderAgeStoryDialog(state.activeAgeStoryAge, AGE_STORY_EVENTS[state.activeAgeStoryAge]);
    openStoryDialog(elements.ageStoryDialog);
    elements.ageStoryChoices.querySelector("[data-age-story-choice]")?.focus();
    return;
  }

  if (state.activeQuarterStoryKey) {
    const [age, quarter] = state.activeQuarterStoryKey.split("-").map(Number);
    if (Number.isFinite(age) && Number.isFinite(quarter) && openQuarterStoryDialog(age, quarter)) {
      return;
    }
    state.activeQuarterStoryKey = null;
  }

  if (state.activeSpecialActionFamilyId && state.activeSpecialActionId) {
    const { familyData, action } = getActiveSpecialAction();
    const node = getSpecialActionNode(action);
    if (familyData && action && node) {
      renderSpecialActionDialog();
      openStoryDialog(elements.specialActionDialog);
      elements.specialActionChoices.querySelector("[data-special-action-choice]")?.focus();
      return;
    }
    state.activeSpecialActionFamilyId = null;
    state.activeSpecialActionId = null;
    state.activeSpecialActionNode = null;
    state.pendingSpecialActionAdvance = false;
  }

  if (state.activeAttributeThresholdStoryFamilyId && state.activeAttributeThresholdStoryId) {
    const { familyData, story } = getActiveAttributeThresholdStory();
    if (familyData && story) {
      renderAttributeThresholdStoryDialog(familyData, story);
      openStoryDialog(elements.attributeThresholdStoryDialog);
      elements.attributeThresholdStoryChoices.querySelector("[data-attribute-threshold-choice]")?.focus();
      return;
    }
    state.activeAttributeThresholdStoryFamilyId = null;
    state.activeAttributeThresholdStoryId = null;
    state.pendingAttributeThresholdFollowup = null;
  }

  if (state.activeRelationshipStageEvent) {
    renderRelationshipStageEventDialog(state.activeRelationshipStageEvent);
    openStoryDialog(elements.relationshipStageEventDialog);
    elements.relationshipStageEventChoices.querySelector("[data-relationship-stage-choice]")?.focus();
    return;
  }

  if (state.activeProactiveNpcEvent) {
    renderProactiveNpcEventDialog(state.activeProactiveNpcEvent);
    openStoryDialog(elements.proactiveNpcEventDialog);
    elements.proactiveNpcEventChoices.querySelector("[data-proactive-npc-choice]")?.focus();
    return;
  }

  if (state.activeLifeGoalStoryId) {
    if (renderLifeGoalStoryDialog(state.activeLifeGoalStoryId)) {
      openStoryDialog(elements.lifeGoalStoryDialog);
      elements.lifeGoalStoryChoices.querySelector("[data-life-goal-story-choice]")?.focus();
      return;
    }
    state.activeLifeGoalStoryId = null;
  }

  if (state.activeRandomNpcEncounter) {
    renderRandomNpcEncounterDialog(state.activeRandomNpcEncounter);
    openStoryDialog(elements.randomNpcDialog);
    elements.randomNpcChoices.querySelector("[data-random-npc-choice]")?.focus();
    return;
  }

  if (state.activeNarrativeDiceEvent) {
    renderNarrativeDiceEventDialog(state.activeNarrativeDiceEvent);
    openStoryDialog(elements.narrativeDiceDialog);
    elements.narrativeDiceChoices.querySelector("[data-narrative-dice-choice]")?.focus();
    return;
  }

  if (state.activePostDifferentiationStoryId) {
    const familyId = getPostDifferentiationStoryFamilyId();
    const familyData = POST_DIFFERENTIATION_STORY_EVENTS[familyId];
    const story = familyData?.stories.find((item) => item.id === state.activePostDifferentiationStoryId);
    if (familyData && story) {
      elements.postDifferentiationStoryKicker.textContent = `分化后强制剧情 / ${familyData.name} / ${getSecondGenderName(story.secondGender)}`;
      elements.postDifferentiationStoryTitle.textContent = story.title;
      elements.postDifferentiationStoryDescription.innerHTML = `<p>${story.description}</p>`;
      elements.postDifferentiationStoryRequirements.textContent = `触发条件：${formatPostDifferentiationRequirements(story)}。优先级数值：${getPostDifferentiationRequirementScore(story)}。`;
      openStoryDialog(elements.postDifferentiationStoryDialog, elements.postDifferentiationStoryClose);
      return;
    }
    state.activePostDifferentiationStoryId = null;
    state.pendingPostDifferentiationStoryId = null;
  }

  if (state.pendingPostDifferentiationStoryId && tryOpenPostDifferentiationStory()) {
    return;
  }

  tryOpenQuarterStoryOrRandomNpc();
}

async function persistCurrentLifeToCloud(payload) {
  const response = await apiRequest(`/api/saves/${selectedSaveSlot}`, {
    method: "PUT",
    body: { payload }
  });
  const nextSummary = {
    slot: selectedSaveSlot,
    status: "valid",
    archiveId: response.meta.archiveId,
    age: response.meta.age,
    quarter: response.meta.quarter,
    deceased: Boolean(response.meta.deceased),
    savedAt: response.savedAt
  };
  remoteSaveSlotSummaries = remoteSaveSlotSummaries.filter((item) => item.slot !== selectedSaveSlot);
  remoteSaveSlotSummaries.push(nextSummary);
  remoteSaveSlotSummaries.sort((left, right) => left.slot - right.slot);
  renderSaveSlotSummaries();
  rememberPersistedPayload(payload);
  return response;
}

async function saveCurrentLife() {
  if (!state.archiveId) {
    setSaveLoadStatus("尚未生成可保存的人生；请先随机新人生。");
    return false;
  }

  if (!isValidSaveSlot(selectedSaveSlot)) {
    setSaveLoadStatus(`保存失败：当前槽位无效，请选择 1-3 号${isCloudSaveMode() ? "云端" : "本地"}存档槽。`);
    return false;
  }

  const payload = createSavePayload();

  if (isCloudSaveMode()) {
    try {
      await persistCurrentLifeToCloud(payload);
      setSaveLoadStatus(`已保存到云端槽位 ${selectedSaveSlot}：${state.archiveId}，${state.age} 岁第 ${state.quarter} 季。`);
      return true;
    } catch (error) {
      setSaveLoadStatus(`云端保存失败：${error.message}`);
      return false;
    }
  }

  const saveKey = getSaveSlotKey(selectedSaveSlot);

  try {
    localStorage.setItem(saveKey, JSON.stringify(payload));
    rememberPersistedPayload(payload);
    renderSaveSlotSummaries();
    setSaveLoadStatus(`已保存到槽位 ${selectedSaveSlot}：${state.archiveId}，${state.age} 岁第 ${state.quarter} 季。`);
    return true;
  } catch (error) {
    renderSaveSlotSummaries();
    setSaveLoadStatus(`保存失败：槽位 ${selectedSaveSlot} 无法写入，浏览器本地存储不可用或空间不足。`);
    return false;
  }
}

function autoSaveCurrentLife(reason) {
  if (!state.archiveId) {
    const message = "自动存档跳过：尚未生成可保存的人生。";
    setSaveLoadStatus(message);
    return message;
  }

  if (!isValidSaveSlot(selectedSaveSlot)) {
    const message = `自动存档失败：当前槽位无效，请选择 1-3 号${isCloudSaveMode() ? "云端" : "本地"}存档槽。`;
    setSaveLoadStatus(message);
    return message;
  }

  const payload = createSavePayload();

  if (isCloudSaveMode()) {
    const optimisticMessage = `${reason}已提交到云端槽位 ${selectedSaveSlot}：${state.archiveId}，${state.age} 岁第 ${state.quarter} 季。`;
    persistCurrentLifeToCloud(payload)
      .then(() => {
        rememberPersistedPayload(payload);
        setSaveLoadStatus(`${reason}已同步到云端槽位 ${selectedSaveSlot}：${state.archiveId}，${state.age} 岁第 ${state.quarter} 季。`);
      })
      .catch((error) => {
        setSaveLoadStatus(`自动云端存档失败：${error.message}`);
      });
    setSaveLoadStatus(optimisticMessage);
    return optimisticMessage;
  }

  const saveKey = getSaveSlotKey(selectedSaveSlot);

  try {
    localStorage.setItem(saveKey, JSON.stringify(payload));
    rememberPersistedPayload(payload);
    renderSaveSlotSummaries();
    const message = `${reason}已自动保存到槽位 ${selectedSaveSlot}：${state.archiveId}，${state.age} 岁第 ${state.quarter} 季。`;
    setSaveLoadStatus(message);
    return message;
  } catch (error) {
    renderSaveSlotSummaries();
    const message = `自动存档失败：槽位 ${selectedSaveSlot} 无法写入，浏览器本地存储不可用或空间不足。`;
    setSaveLoadStatus(message);
    return message;
  }
}

function renderTimeSummaryDialog(summary) {
  elements.timeSummaryKicker.textContent = summary.kicker;
  elements.timeSummaryTitle.textContent = summary.title;
  elements.timeSummaryDescription.innerHTML = summary.body;
}

function completeQuarterAdvanceFollowup(followup) {
  if (followup?.deceased) {
    return;
  }
  let ageStoryOpened = false;
  if (followup?.ageAdvanced) {
    ageStoryOpened = addAgeStory(state.age);
  }

  if (!ageStoryOpened && shouldDifferentiate()) {
    differentiateSecondGender();
  } else if (!ageStoryOpened) {
    tryOpenQuarterStoryOrRandomNpc();
  }
}

function openTimeAdvanceSummary(context) {
  if (!elements.timeSummaryDialog) {
    return false;
  }

  const autoSaveMessage = autoSaveCurrentLife(context.deceased ? "生命归档" : (context.ageAdvanced ? "年度总结" : "季度总结"));
  const summary = createTimeAdvanceSummary(context, autoSaveMessage);
  renderTimeSummaryDialog(summary);
  pendingTimeSummaryFollowup = context.deceased ? { deceased: true } : { ageAdvanced: context.ageAdvanced };
  openStoryDialog(elements.timeSummaryDialog, elements.timeSummaryClose);
  elements.timeSummaryClose?.focus();
  return true;
}

function closeTimeSummaryDialog() {
  closeStoryDialog(elements.timeSummaryDialog);
  const followup = pendingTimeSummaryFollowup;
  pendingTimeSummaryFollowup = null;
  if (followup) {
    completeQuarterAdvanceFollowup(followup);
  }
  render();
}

async function loadSavedLife() {
  if (isCloudSaveMode()) {
    try {
      const slotSave = await apiRequest(`/api/saves/${selectedSaveSlot}`);
      if (slotSave.status !== "valid") {
        renderSaveSlotSummaries();
        setSaveLoadStatus(`云端槽位 ${selectedSaveSlot} 暂无人生存档。请先保存当前人生。`);
        return;
      }

      const savedState = validateSavedState(slotSave.payload);
      if (!savedState) {
        setSaveLoadStatus(`读取失败：云端槽位 ${selectedSaveSlot} 的存档内容无效。`);
        return;
      }

      closeAllStoryDialogs();
      pendingTimeSummaryFollowup = null;
      Object.assign(state, savedState);
      rememberPersistedPayload(slotSave.payload);
      hydrateNpcRelationships();
      checkLifeGoalCompletions("load");
      render();
      renderSaveSlotSummaries();
      restoreActiveStoryDialog();
      setSaveLoadStatus(`已读取云端槽位 ${selectedSaveSlot}：${state.archiveId}，${state.age} 岁第 ${state.quarter} 季。`);
      return;
    } catch (error) {
      setSaveLoadStatus(`云端读取失败：${error.message}`);
      return;
    }
  }

  const slotSave = readSaveSlot(selectedSaveSlot);
  if (slotSave.status !== "valid") {
    renderSaveSlotSummaries();
    const failureMessages = {
      empty: `槽位 ${selectedSaveSlot} 没有本地人生存档。请先保存当前人生。`,
      corrupt: `读取失败：槽位 ${selectedSaveSlot} 的本地存档已损坏，无法解析。`,
      invalid: `读取失败：槽位 ${selectedSaveSlot} 的本地存档版本或内容无效。`,
      unavailable: "读取失败：浏览器本地存储当前不可用。",
      "invalid-slot": "读取失败：当前槽位无效，请选择 1-3 号本地存档槽。"
    };
    setSaveLoadStatus(failureMessages[slotSave.status] || failureMessages.invalid);
    return;
  }

  closeAllStoryDialogs();
  pendingTimeSummaryFollowup = null;
  Object.assign(state, slotSave.savedState);
  rememberPersistedPayload(slotSave.payload);
  hydrateNpcRelationships();
  checkLifeGoalCompletions("load");
  render();
  renderSaveSlotSummaries();
  restoreActiveStoryDialog();
  setSaveLoadStatus(`已读取槽位 ${selectedSaveSlot}：${state.archiveId}，${state.age} 岁第 ${state.quarter} 季。`);
}

function openParentArchiveDialog() {
  renderParents();
  openStoryDialog(elements.parentArchiveDialog, elements.parentArchiveDialogClose);
}

function closeParentArchiveDialog() {
  closeStoryDialog(elements.parentArchiveDialog);
}

function openRelationshipDialog() {
  openFeatureModal("relationships");
}

function closeRelationshipDialog() {
  closeStoryDialog(elements.relationshipDialog);
}

function openIntroDialog() {
  introCanonIndex = 0;
  renderIntroCanonSegment();
  openStoryDialog(elements.introDialog, elements.introNextButton);
}

function closeIntroDialog() {
  closeStoryDialog(elements.introDialog);
  introDialogDismissed = true;
  tryOpenNextQuarterStory();
}

function showPreviousIntroCanonSegment() {
  if (introCanonIndex > 0) {
    introCanonIndex -= 1;
    renderIntroCanonSegment();
  }
}

function showNextIntroCanonSegment() {
  if (introCanonIndex >= ABO_CANON.length - 1) {
    closeIntroDialog();
    return;
  }

  introCanonIndex += 1;
  renderIntroCanonSegment();
}

function openDifferentiationDialog() {
  openStoryDialog(elements.differentiationDialog, elements.differentiationDialogClose);
}

function closeDifferentiationDialog() {
  closeStoryDialog(elements.differentiationDialog);
  if (!tryOpenPostDifferentiationStory()) {
    tryOpenQuarterStoryOrRandomNpc();
  }
}

function shouldDifferentiate() {
  return state.age === state.differentiationAge && state.quarter === state.differentiationQuarter && state.secondGender === "未分化";
}

function getSecondGenderName(secondGender) {
  return SECOND_GENDER_NAMES[secondGender] || secondGender;
}

function getPostDifferentiationStoryFamilyId() {
  if (isOrphanStoryContext()) {
    return "orphan";
  }
  return state.familyId;
}

function meetsPostDifferentiationRequirement(requirement) {
  const value = state.attributes[requirement.key] || 0;
  if (typeof requirement.min === "number" && value < requirement.min) {
    return false;
  }
  if (typeof requirement.max === "number" && value > requirement.max) {
    return false;
  }
  return true;
}

function getPostDifferentiationRequirementEntries(story) {
  return Object.entries(story.requirements || {}).map(([key, requirement]) => ({
    key,
    min: requirement.min,
    max: requirement.max
  }));
}

function getPostDifferentiationRequirementScore(story) {
  return getPostDifferentiationRequirementEntries(story)
    .reduce((total, requirement) => total + (requirement.min ?? requirement.max ?? 0), 0);
}

function formatPostDifferentiationRequirements(story) {
  return getPostDifferentiationRequirementEntries(story)
    .map((requirement) => {
      const definition = ATTRIBUTE_DEFINITIONS.find((item) => item.key === requirement.key);
      const label = definition?.label || requirement.key;
      if (typeof requirement.min === "number") {
        return `${label}≥${requirement.min}`;
      }
      return `${label}≤${requirement.max}`;
    })
    .join("，");
}

function findPostDifferentiationStory() {
  const familyId = getPostDifferentiationStoryFamilyId();
  const familyData = POST_DIFFERENTIATION_STORY_EVENTS[familyId];
  if (!familyData || state.resolvedPostDifferentiationStoryId) {
    return null;
  }

  return familyData.stories
    .filter((story) => story.secondGender === state.secondGender)
    .filter((story) => getPostDifferentiationRequirementEntries(story).every(meetsPostDifferentiationRequirement))
    .sort((left, right) => getPostDifferentiationRequirementScore(right) - getPostDifferentiationRequirementScore(left))[0] || null;
}

function queuePostDifferentiationStory() {
  const story = findPostDifferentiationStory();
  state.pendingPostDifferentiationStoryId = story?.id || null;
  if (!story) {
    addLog(`分化后强制剧情｜${state.familyTag}：当前属性未达到${getSecondGenderName(state.secondGender)}分化后剧情阈值，暂不触发额外背景。`);
  }
}

function tryOpenPostDifferentiationStory() {
  if (!state.pendingPostDifferentiationStoryId || state.activePostDifferentiationStoryId) {
    return false;
  }

  const familyId = getPostDifferentiationStoryFamilyId();
  const familyData = POST_DIFFERENTIATION_STORY_EVENTS[familyId];
  const story = familyData?.stories.find((item) => item.id === state.pendingPostDifferentiationStoryId);
  if (!story) {
    state.pendingPostDifferentiationStoryId = null;
    return false;
  }

  state.activePostDifferentiationStoryId = story.id;
  elements.postDifferentiationStoryKicker.textContent = `分化后强制剧情 / ${familyData.name} / ${getSecondGenderName(story.secondGender)}`;
  elements.postDifferentiationStoryTitle.textContent = story.title;
  elements.postDifferentiationStoryDescription.innerHTML = `<p>${story.description}</p>`;
  elements.postDifferentiationStoryRequirements.textContent = `触发条件：${formatPostDifferentiationRequirements(story)}。优先级数值：${getPostDifferentiationRequirementScore(story)}。`;
  openStoryDialog(elements.postDifferentiationStoryDialog, elements.postDifferentiationStoryClose);
  return true;
}

function closePostDifferentiationStoryDialog() {
  const familyId = getPostDifferentiationStoryFamilyId();
  const familyData = POST_DIFFERENTIATION_STORY_EVENTS[familyId];
  const story = familyData?.stories.find((item) => item.id === state.activePostDifferentiationStoryId);
  if (story && !state.resolvedPostDifferentiationStoryId) {
    state.resolvedPostDifferentiationStoryId = story.id;
    addLog(`分化后强制剧情｜${familyData.name}·${story.title}：${getSecondGenderName(story.secondGender)}，${formatPostDifferentiationRequirements(story)}。`);
  }
  state.pendingPostDifferentiationStoryId = null;
  state.activePostDifferentiationStoryId = null;
  closeStoryDialog(elements.postDifferentiationStoryDialog);
  if (tryOpenQuarterStoryOrRandomNpc()) {
    render();
    return;
  }
  render();
}

function isOrphanStoryContext() {
  return state.origin === "orphan-family" || state.origin === "orphan-nonreproductive" || state.parents.length === 0;
}

function getAgeStoryTitle(story) {
  return isOrphanStoryContext() && story.orphanTitle ? story.orphanTitle : story.title;
}

function getAgeStoryDescription(story) {
  return isOrphanStoryContext() && story.orphanDescription ? story.orphanDescription : story.description;
}

function getAgeStoryChoiceLabel(choice) {
  return isOrphanStoryContext() && choice.orphanLabel ? choice.orphanLabel : choice.label;
}

function renderAgeStoryDialog(age, story) {
  elements.ageStoryKicker.textContent = `年度剧情 / ${age} 岁`;
  elements.ageStoryTitle.textContent = getAgeStoryTitle(story);
  elements.ageStoryDescription.innerHTML = `<p>${getAgeStoryDescription(story)}</p>`;
  elements.ageStoryChoices.innerHTML = story.choices.map((choice) => {
    const label = getAgeStoryChoiceLabel(choice);
    const effectText = choice.effectText;
    return `
      <button class="button age-story-choice" type="button" data-age-story-choice="${choice.id}" aria-label="${escapeHtml(buildChoiceAriaLabel(label, effectText))}">
        <span>${escapeHtml(label)}${renderChoiceHintMarkup(effectText)}</span>
      </button>
    `;
  }).join("");
}

function openAgeStoryDialog(age) {
  const story = AGE_STORY_EVENTS[age];
  if (!story) {
    return;
  }

  state.activeAgeStoryAge = age;
  renderAgeStoryDialog(age, story);
  openStoryDialog(elements.ageStoryDialog);
  elements.ageStoryChoices.querySelector("[data-age-story-choice]")?.focus();
}

function chooseAgeStory(choiceId) {
  const age = state.activeAgeStoryAge;
  const story = AGE_STORY_EVENTS[age];
  const choice = story?.choices.find((item) => item.id === choiceId);
  if (!choice || state.resolvedAgeStories[age]) {
    return;
  }

  state.attributes = addAttributes(state.attributes, choice.effects);
  state.resolvedAgeStories[age] = choice.id;
  addLog(`年度剧情选择｜${age}岁·${getAgeStoryTitle(story)}：选择"${getAgeStoryChoiceLabel(choice)}"，${choice.effectText}。`);
  checkLifeGoalCompletions("age-story");
  closeStoryDialog(elements.ageStoryDialog);
  state.activeAgeStoryAge = null;

  const followup = shouldDifferentiate() ? "differentiate" : "quarterStory";
  if (tryOpenAttributeThresholdStory({ followup })) {
    render();
    return;
  }

  if (shouldDifferentiate()) {
    differentiateSecondGender();
  } else {
    tryOpenQuarterStoryOrRandomNpc();
  }

  render();
}

function getQuarterStoryFamilyId() {
  if (isOrphanStoryContext()) {
    return "orphan";
  }
  return state.familyId;
}

function getQuarterStoryKey(age, quarter) {
  return `${age}-${quarter}`;
}

function getQuarterStoryIndex(age, quarter) {
  return age * 4 + (quarter - 1);
}

function queueQuarterStory(age, quarter) {
  const key = getQuarterStoryKey(age, quarter);
  if (state.resolvedQuarterStories[key]) {
    return;
  }
  if (age > 2) {
    return;
  }
  if (!state.pendingQuarterStoryKeys.includes(key)) {
    state.pendingQuarterStoryKeys.push(key);
  }
}

function tryOpenNextQuarterStory() {
  if (state.pendingQuarterStoryKeys.length === 0) {
    return false;
  }
  const key = state.pendingQuarterStoryKeys.shift();
  const [age, quarter] = key.split("-").map(Number);
  return openQuarterStoryDialog(age, quarter);
}

function openQuarterStoryDialog(age, quarter) {
  const key = getQuarterStoryKey(age, quarter);
  if (state.resolvedQuarterStories[key]) {
    return false;
  }

  const familyId = getQuarterStoryFamilyId();
  const familyData = EARLY_QUARTER_STORY_EVENTS[familyId];
  if (!familyData) {
    return false;
  }

  const index = getQuarterStoryIndex(age, quarter);
  const story = familyData.stories[index];
  if (!story) {
    return false;
  }

  state.activeQuarterStoryKey = key;
  elements.quarterStoryKicker.textContent = `\u5e7c\u5e74\u5b63\u5ea6\u5267\u60c5 / ${familyData.name}`;
  elements.quarterStoryTitle.textContent = story.title;
  elements.quarterStoryDescription.innerHTML = `<p>${story.description}</p>`;
  elements.quarterStoryChoices.innerHTML = story.choices.map((choice) => {
    const effectText = formatChoiceEffectText(choice);
    return `
      <button class="button age-story-choice" type="button" data-quarter-story-choice="${choice.id}" aria-label="${escapeHtml(buildChoiceAriaLabel(choice.label, effectText))}">
        <span>${escapeHtml(choice.label)}${renderChoiceHintMarkup(effectText)}</span>
      </button>
    `;
  }).join("");
  openStoryDialog(elements.quarterStoryDialog);
  elements.quarterStoryChoices.querySelector("[data-quarter-story-choice]")?.focus();
  return true;
}

function unlockTrait(trait) {
  if (!trait || state.traits.includes(trait)) {
    return false;
  }
  state.traits.push(trait);
  return true;
}

function formatChoiceEffectText(choice) {
  if (choice?.effectText) {
    return [choice.effectText, formatRelationshipEffectText(choice.relationshipEffects)].filter(Boolean).join("，");
  }

  const parts = [];
  const effectText = describeEffects(choice?.effects || {});
  const routeEffectText = formatRouteEffectText(choice?.routeEffects || {});
  if (effectText) {
    parts.push(effectText);
  }
  if (routeEffectText) {
    parts.push(routeEffectText);
  }
  if (choice?.trait) {
    const traitPrefix = state.traits.includes(choice.trait) ? "特质" : "解锁特质";
    parts.push(`${traitPrefix}「${choice.trait}」`);
  }
  const relationshipText = formatRelationshipEffectText(choice?.relationshipEffects || {});
  if (relationshipText) {
    parts.push(relationshipText);
  }
  return parts.join("，") || "无即时属性变化";
}

function chooseQuarterStory(choiceId) {
  const key = state.activeQuarterStoryKey;
  if (!key || state.resolvedQuarterStories[key]) {
    return;
  }

  const [age, quarter] = key.split("-").map(Number);
  const familyId = getQuarterStoryFamilyId();
  const familyData = EARLY_QUARTER_STORY_EVENTS[familyId];
  const story = familyData?.stories[getQuarterStoryIndex(age, quarter)];
  const choice = story?.choices.find((item) => item.id === choiceId);
  if (!choice) {
    return;
  }

  const effectText = formatChoiceEffectText(choice);
  state.attributes = addAttributes(state.attributes, choice.effects || {});
  unlockTrait(choice.trait);
  state.resolvedQuarterStories[key] = choice.id;
  addLog(`\u5e7c\u5e74\u5b63\u5ea6\u5267\u60c5\u9009\u62e9\uff5c${familyData.name}\u00b7${story.title}\uff1a\u9009\u62e9"${choice.label}"\uff0c${effectText}\u3002`);
  checkLifeGoalCompletions("quarter-story");
  closeStoryDialog(elements.quarterStoryDialog);
  state.activeQuarterStoryKey = null;
  advanceQuarter({ causedByQuarterStoryChoice: true });
}



function getAttributeThresholdStoryFamilyId() {
  if (isOrphanStoryContext()) {
    return "orphan";
  }
  return state.familyId;
}

function getActiveAttributeThresholdStory() {
  const familyData = ATTRIBUTE_THRESHOLD_STORY_EVENTS[state.activeAttributeThresholdStoryFamilyId];
  const story = familyData?.stories.find((item) => item.id === state.activeAttributeThresholdStoryId);
  return { familyData, story };
}

function meetsAttributeThresholdRequirements(story) {
  return Object.entries(story.requirements || {}).every(([key, minimum]) => {
    return (state.attributes[key] || 0) >= minimum;
  });
}

function getEligibleAttributeThresholdStories() {
  if (state.age < 3 || state.age > 17 || state.secondGender !== "未分化") {
    return [];
  }

  const familyId = getAttributeThresholdStoryFamilyId();
  const familyData = ATTRIBUTE_THRESHOLD_STORY_EVENTS[familyId];
  if (!familyData) {
    return [];
  }

  return familyData.stories.filter((story) => {
    return state.age >= story.minAge
      && state.age <= story.maxAge
      && !state.resolvedAttributeThresholdStories[story.id]
      && meetsAttributeThresholdRequirements(story);
  });
}

function renderAttributeThresholdStoryDialog(familyData, story) {
  elements.attributeThresholdStoryKicker.textContent = `数值达标剧情 / ${familyData.name} / ${state.age} 岁`;
  elements.attributeThresholdStoryTitle.textContent = story.title;
  elements.attributeThresholdStoryDescription.innerHTML = `<p>${story.description}</p>`;
  elements.attributeThresholdStoryRequirements.textContent = `触发条件：${story.requirementText}。`;
  elements.attributeThresholdStoryChoices.innerHTML = story.choices.map((choice) => {
    const effectText = formatChoiceEffectText(choice);
    return `
      <button class="button age-story-choice" type="button" data-attribute-threshold-choice="${choice.id}" aria-label="${escapeHtml(buildChoiceAriaLabel(choice.label, effectText))}">
        <span>${escapeHtml(choice.label)}${renderChoiceHintMarkup(effectText)}</span>
      </button>
    `;
  }).join("");
}

function tryOpenAttributeThresholdStory(options = {}) {
  const eligibleStories = getEligibleAttributeThresholdStories();
  if (eligibleStories.length === 0) {
    return false;
  }

  const familyId = getAttributeThresholdStoryFamilyId();
  const familyData = ATTRIBUTE_THRESHOLD_STORY_EVENTS[familyId];
  const story = pick(eligibleStories);
  state.activeAttributeThresholdStoryFamilyId = familyId;
  state.activeAttributeThresholdStoryId = story.id;
  state.pendingAttributeThresholdFollowup = options.followup || null;
  renderAttributeThresholdStoryDialog(familyData, story);
  openStoryDialog(elements.attributeThresholdStoryDialog);
  elements.attributeThresholdStoryChoices.querySelector("[data-attribute-threshold-choice]")?.focus();
  return true;
}

function chooseAttributeThresholdStoryChoice(choiceId) {
  const { familyData, story } = getActiveAttributeThresholdStory();
  const choice = story?.choices.find((item) => item.id === choiceId);
  if (!familyData || !story || !choice || state.resolvedAttributeThresholdStories[story.id]) {
    return;
  }

  const effectText = formatChoiceEffectText(choice);
  const followup = state.pendingAttributeThresholdFollowup;
  state.attributes = addAttributes(state.attributes, choice.effects || {});
  state.resolvedAttributeThresholdStories[story.id] = choice.id;
  state.activeAttributeThresholdStoryFamilyId = null;
  state.activeAttributeThresholdStoryId = null;
  state.pendingAttributeThresholdFollowup = null;
  addLog(`数值达标剧情选择｜${familyData.name}·${story.title}：选择"${choice.label}"，${effectText}。`);
  checkLifeGoalCompletions("attribute-threshold-story");
  closeStoryDialog(elements.attributeThresholdStoryDialog);

  if (followup === "advanceQuarter") {
    addLog("本季行动力耗尽，档案自动推进到下一季度。");
    advanceQuarter();
    return;
  }

  if (followup === "differentiate") {
    if (shouldDifferentiate()) {
      differentiateSecondGender();
    } else {
      tryOpenQuarterStoryOrRandomNpc();
    }
    render();
    return;
  }

  if (followup === "quarterStory") {
    tryOpenQuarterStoryOrRandomNpc();
    render();
    return;
  }

  if (tryOpenQuarterStoryOrRandomNpc()) {
    render();
    return;
  }
  render();
}

function getSpecialActionFamilyId() {
  if (isOrphanStoryContext()) {
    return "orphan";
  }
  return state.familyId;
}

function getEligibleSpecialActions() {
  if (state.deceased || state.age < 3 || state.age > 17 || state.secondGender !== "\u672a\u5206\u5316" || state.actionPoints <= 0) {
    return [];
  }

  const familyId = getSpecialActionFamilyId();
  const familyData = PRE_DIFFERENTIATION_SPECIAL_ACTION_EVENTS[familyId];
  if (!familyData) {
    return [];
  }

  return familyData.actions.filter((action) => {
    return state.age >= action.minAge && state.age <= action.maxAge && !state.resolvedSpecialActions[action.id];
  });
}

function hasAvailableSpecialAction() {
  return getEligibleSpecialActions().length > 0;
}

function getActiveSpecialAction() {
  const familyData = PRE_DIFFERENTIATION_SPECIAL_ACTION_EVENTS[state.activeSpecialActionFamilyId];
  const action = familyData?.actions.find((item) => item.id === state.activeSpecialActionId);
  return { familyData, action };
}

function getSpecialActionNode(action) {
  if (!action) {
    return null;
  }
  if (!state.activeSpecialActionNode || state.activeSpecialActionNode === "root") {
    return { story: action.story, choices: action.choices };
  }
  return action.nodes?.[state.activeSpecialActionNode] || null;
}

function renderSpecialActionDialog() {
  const { familyData, action } = getActiveSpecialAction();
  const node = getSpecialActionNode(action);
  if (!familyData || !action || !node) {
    return;
  }

  elements.specialActionKicker.textContent = `\u5bb6\u5ead\u4e13\u5c5e\u884c\u52a8 / ${familyData.name} / ${state.age} \u5c81`;
  elements.specialActionTitle.textContent = action.title;
  elements.specialActionDescription.innerHTML = `<p>${node.story}</p>`;
  elements.specialActionChoices.innerHTML = node.choices.map((choice) => {
    const effectText = formatChoiceEffectText(choice);
    return `
      <button class="button age-story-choice" type="button" data-special-action-choice="${choice.id}" aria-label="${escapeHtml(buildChoiceAriaLabel(choice.label, effectText))}">
        <span>${escapeHtml(choice.label)}${renderChoiceHintMarkup(effectText)}</span>
      </button>
    `;
  }).join("");
  elements.specialActionChoices.querySelector("[data-special-action-choice]")?.focus();
}

function startSpecialAction() {
  const eligibleActions = getEligibleSpecialActions();
  if (eligibleActions.length === 0) {
    return;
  }

  const familyId = getSpecialActionFamilyId();
  const familyData = PRE_DIFFERENTIATION_SPECIAL_ACTION_EVENTS[familyId];
  const action = pick(eligibleActions);
  consumeActionPoint(`家庭专属行动｜${action.title}`);
  state.pendingSpecialActionAdvance = state.actionPoints === 0;
  state.activeSpecialActionFamilyId = familyId;
  state.activeSpecialActionId = action.id;
  state.activeSpecialActionNode = "root";
  addLog(`\u89e6\u53d1\u5bb6\u5ead\u4e13\u5c5e\u884c\u52a8\uff5c${familyData.name}\u00b7${action.title}\uff1a\u6d88\u8017 1 \u70b9\u884c\u52a8\u529b\u3002\u672c\u5b63\u5269\u4f59\u884c\u52a8\u529b ${state.actionPoints}\u3002`);
  render();
  renderSpecialActionDialog();
  openStoryDialog(elements.specialActionDialog);
  elements.specialActionChoices.querySelector("[data-special-action-choice]")?.focus();
}

function completeSpecialAction(choice) {
  const { familyData, action } = getActiveSpecialAction();
  if (!familyData || !action) {
    return;
  }

  state.resolvedSpecialActions[action.id] = choice.id;
  const shouldAdvance = state.pendingSpecialActionAdvance;
  state.activeSpecialActionFamilyId = null;
  state.activeSpecialActionId = null;
  state.activeSpecialActionNode = null;
  state.pendingSpecialActionAdvance = false;
  closeStoryDialog(elements.specialActionDialog);

  if (tryOpenAttributeThresholdStory({ followup: shouldAdvance ? "advanceQuarter" : null })) {
    render();
    return;
  }

  if (shouldAdvance) {
    addLog("\u672c\u5b63\u884c\u52a8\u529b\u8017\u5c3d\uff0c\u6863\u6848\u81ea\u52a8\u63a8\u8fdb\u5230\u4e0b\u4e00\u5b63\u5ea6\u3002");
    advanceQuarter();
    return;
  }

  render();
}

function chooseSpecialActionChoice(choiceId) {
  const { familyData, action } = getActiveSpecialAction();
  const node = getSpecialActionNode(action);
  const choice = node?.choices.find((item) => item.id === choiceId);
  if (!familyData || !action || !choice || state.resolvedSpecialActions[action.id]) {
    return;
  }

  const effectText = formatChoiceEffectText(choice);
  state.attributes = addAttributes(state.attributes, choice.effects || {});
  addLog(`\u5bb6\u5ead\u4e13\u5c5e\u884c\u52a8\u9009\u62e9\uff5c${familyData.name}\u00b7${action.title}\uff1a\u9009\u62e9"${choice.label}"\uff0c${effectText}\u3002`);
  checkLifeGoalCompletions("special-action");

  if (choice.nextNode) {
    state.activeSpecialActionNode = choice.nextNode;
    render();
    renderSpecialActionDialog();
    return;
  }

  completeSpecialAction(choice);
}

function describeEffects(effects) {
  const entries = Object.entries(effects || {});
  if (entries.length === 0) {
    return "";
  }
  return entries
    .map(([key, value]) => {
      const definition = ATTRIBUTE_DEFINITIONS.find((item) => item.key === key);
      const label = definition?.label || key;
      const sign = value >= 0 ? "+" : "";
      return `${label} ${sign}${value}`;
    })
    .join("\uff0c");
}

function getInitialKnownNpcIds(familyId) {
  const npc = RELATIONSHIP_NPCS.find((item) => item.familyId === familyId && item.complete);
  return npc ? [npc.id] : [];
}

function isNpcKnown(npc) {
  if (!isPlainObject(npc) || !isSafeSaveRecordKey(npc.id)) {
    return false;
  }
  return npc.generated === true || (npc.complete === true && state.knownNpcIds.includes(npc.id));
}

function getNpcCardStatus(npc) {
  if (npc.generated === true) {
    return {
      label: "已认识",
      detail: "随机邂逅已加入关系档案。",
      locked: false
    };
  }
  if (isNpcKnown(npc)) {
    return {
      label: "已认识",
      detail: "当前出身已建立人际档案。",
      locked: false
    };
  }
  if (npc.complete !== true) {
    return {
      label: "档案待补充",
      detail: "Word 文档缺少完整 NPC 模板，先以灰色档案占位。",
      locked: true
    };
  }
  return {
    label: "可认识",
    detail: "尚未在本轮人生中相遇。",
    locked: true
  };
}

function getRandomNpcFamilyId() {
  if (isOrphanStoryContext()) {
    return "orphan";
  }
  return state.familyId;
}

function getRandomNpcAgeStage(age) {
  if (age <= 5) {
    return "幼年期";
  }
  if (age <= 9) {
    return "童年期";
  }
  if (age <= 12) {
    return "少年期";
  }
  if (age <= 15) {
    return "青春期";
  }
  return "准成年期";
}

function getRandomNpcEncounterKey(age = state.age, quarter = state.quarter) {
  return `${age}-${quarter}`;
}

function shouldQueueRandomNpcEncounter(age, quarter) {
  if (age < 3 || age > 17 || state.secondGender !== "未分化") {
    return false;
  }
  if (state.age === age && state.quarter === quarter && shouldDifferentiate()) {
    return false;
  }
  const key = getRandomNpcEncounterKey(age, quarter);
  return !state.resolvedRandomNpcEncounters[key] && state.pendingRandomNpcEncounter?.key !== key && state.activeRandomNpcEncounter?.key !== key;
}

function createRandomNpcName() {
  return `${pick(RANDOM_NPC_WORD_BANKS.surnames)}${pick(RANDOM_NPC_WORD_BANKS.givenNames)}`;
}

function createRandomNpcChoices(theme) {
  const primaryEffects = { [theme.primaryAttribute]: 1, charm: 1 };
  const secondaryEffects = { [theme.secondaryAttribute]: 1, spirit: 1 };
  return [
    {
      id: "approach",
      label: "主动搭话，交换姓名",
      effects: primaryEffects,
      effectText: `${describeEffects(primaryEffects)}；加入人际关系档案`,
      relationshipEffects: { favorability: 6, familiarity: 5 },
      addToArchive: true
    },
    {
      id: "cooperate",
      label: "一起完成眼前的小事",
      effects: secondaryEffects,
      effectText: `${describeEffects(secondaryEffects)}；加入人际关系档案`,
      relationshipEffects: { trust: 6, familiarity: 5 },
      addToArchive: true
    },
    {
      id: "distance",
      label: "礼貌点头，保持距离",
      effects: { spirit: 1 },
      effectText: "精神力 +1；不加入人际关系档案",
      addToArchive: false
    }
  ];
}

function createRandomNpcEncounter(age, quarter) {
  const familyId = getRandomNpcFamilyId();
  const theme = RANDOM_NPC_FAMILY_THEMES[familyId] || RANDOM_NPC_FAMILY_THEMES.civilian;
  const futureSecondGenderValue = weightedPick(RANDOM_NPC_WORD_BANKS.secondGender);
  const futureSecondGender = RANDOM_NPC_WORD_BANKS.secondGender.find((item) => item.value === futureSecondGenderValue) || RANDOM_NPC_WORD_BANKS.secondGender[0];
  const stage = getRandomNpcAgeStage(age);
  const name = createRandomNpcName();
  const firstGender = pick(FIRST_GENDERS);
  const role = pick(theme.roles);
  const meeting = pick(theme.meetings);
  const personality = pick(RANDOM_NPC_WORD_BANKS.personalities);
  const habit = pick(RANDOM_NPC_WORD_BANKS.habits);
  const weakness = pick(RANDOM_NPC_WORD_BANKS.weaknesses);
  const catchphrase = pick(RANDOM_NPC_WORD_BANKS.catchphrases);
  const bondType = pick(RANDOM_NPC_WORD_BANKS.bondTypes);
  const id = `random-npc-${state.archiveId}-${state.randomNpcSequence + 1}`;
  return {
    key: getRandomNpcEncounterKey(age, quarter),
    age,
    quarter,
    npc: {
      id,
      generated: true,
      familyId,
      familyName: theme.familyName,
      name,
      firstGender,
      bondType,
      secondGender: `未分化（18岁可能分化为${futureSecondGender.value}，${futureSecondGender.detail}）`,
      role: `${role}，${theme.identity}。`,
      summary: `${stage}的第 ${quarter} 季，${meeting}。${name}给人的第一印象是${personality}，${habit}。这次短暂相遇让你意识到，主角的人生轨迹之外还有许多可以继续认识的人。`,
      bondPoint: `${weakness}；口头禅是“${catchphrase}”。`,
      triggers: `${age}岁第${quarter}季随机邂逅，可通过季度弹窗选择是否建立关系档案。`,
      complete: true
    },
    choices: createRandomNpcChoices(theme)
  };
}

function queueRandomNpcEncounter(age = state.age, quarter = state.quarter) {
  if (!shouldQueueRandomNpcEncounter(age, quarter)) {
    return false;
  }
  state.pendingRandomNpcEncounter = createRandomNpcEncounter(age, quarter);
  return true;
}

function renderRandomNpcEncounterDialog(encounter) {
  const { npc } = encounter;
  elements.randomNpcKicker.textContent = `随机 NPC 邂逅 / ${npc.familyName} / ${encounter.age} 岁第 ${encounter.quarter} 季`;
  elements.randomNpcTitle.textContent = `遇见${npc.name}`;
  elements.randomNpcDescription.innerHTML = `<p>${escapeHtml(npc.summary)}</p>`;
  elements.randomNpcProfile.innerHTML = `
    <ul class="npc-card__facts">
      <li><span>身份</span><strong>${escapeHtml(npc.role)}</strong></li>
      <li><span>关系倾向</span><strong>${escapeHtml(npc.bondType)} · ${escapeHtml(npc.secondGender)}</strong></li>
      <li><span>记忆点</span><strong>${escapeHtml(npc.bondPoint)}</strong></li>
    </ul>
  `;
  elements.randomNpcChoices.innerHTML = encounter.choices.map((choice) => {
    const effectText = formatChoiceEffectText(choice);
    return `
      <button class="button age-story-choice" type="button" data-random-npc-choice="${escapeHtml(choice.id)}" aria-label="${escapeHtml(buildChoiceAriaLabel(choice.label, effectText))}">
        <span>${escapeHtml(choice.label)}${renderChoiceHintMarkup(effectText)}</span>
      </button>
    `;
  }).join("");
}

function tryOpenRandomNpcEncounter() {
  if (state.activeRandomNpcEncounter || !state.pendingRandomNpcEncounter) {
    return false;
  }
  state.activeRandomNpcEncounter = state.pendingRandomNpcEncounter;
  state.pendingRandomNpcEncounter = null;
  renderRandomNpcEncounterDialog(state.activeRandomNpcEncounter);
  openStoryDialog(elements.randomNpcDialog);
  elements.randomNpcChoices.querySelector("[data-random-npc-choice]")?.focus();
  return true;
}

function getRelationshipStageTypeAliases(npc, stage, relationship = null) {
  const bondType = String(npc?.bondType || "");
  const relationshipTag = typeof relationship?.tag === "string" ? relationship.tag : "";
  const aliases = new Set([bondType, relationshipTag].filter(Boolean));
  if (stage === "认识") {
    aliases.add("熟人");
    aliases.add("普通同事");
  }
  if (stage === "熟悉") {
    aliases.add("朋友");
  }
  if (stage === "信赖") {
    aliases.add("知己");
    aliases.add("可靠搭档");
  }
  if (stage === "重要的人") {
    aliases.add("知己");
  }
  if (/竞争|别扭/.test(bondType)) {
    aliases.add("竞争者");
    aliases.add("损友");
  }
  if (/搭档|同盟|伙伴|同伴|同学|玩伴/.test(bondType)) {
    aliases.add("朋友");
    aliases.add("可靠搭档");
  }
  if (/保护|护短|守护/.test(bondType)) {
    aliases.add("互相保护");
  }
  if (/世交|青梅|竹马/.test(bondType)) {
    aliases.add("青梅竹马");
  }
  return aliases;
}

function isRelationshipStageEventAgeEligible(eventDefinition, age = state.age) {
  if (!eventDefinition) {
    return false;
  }
  if (typeof eventDefinition.minAge === "number" && age < eventDefinition.minAge) {
    return false;
  }
  if (typeof eventDefinition.maxAge === "number" && age > eventDefinition.maxAge) {
    return false;
  }
  return true;
}

function getEligibleRelationshipStageEvents(age = state.age) {
  const candidates = [];
  getKnownRelationshipNpcs().forEach((npc) => {
    const relationship = getNpcRelationshipDisplayRecord(npc);
    const stage = getNpcRelationshipStage(relationship);
    const typeAliases = getRelationshipStageTypeAliases(npc, stage, relationship);
    RELATIONSHIP_STAGE_EVENTS.forEach((eventDefinition) => {
      const resolvedKey = getRelationshipStageEventResolvedKey(npc.id, eventDefinition.id);
      if (eventDefinition.stage === stage
        && isRelationshipStageEventAgeEligible(eventDefinition, age)
        && !state.resolvedRelationshipStageEvents[resolvedKey]
        && eventDefinition.types.some((type) => typeAliases.has(type))) {
        candidates.push({ npc, eventDefinition });
      }
    });
  });
  return candidates;
}

function isPreferredRelationshipStageEventCandidate(candidate) {
  if (!candidate) {
    return false;
  }
  const relationship = getNpcRelationshipDisplayRecord(candidate.npc);
  return (relationship.tag === "暧昧" || relationship.tag === "恋人")
    && candidate.eventDefinition.types.includes(relationship.tag);
}

function createRelationshipStageEvent(npc, eventDefinition, age = state.age, quarter = state.quarter) {
  return {
    key: getRelationshipStageEventKey(npc.id, eventDefinition.id, age, quarter),
    eventId: eventDefinition.id,
    npcId: npc.id,
    age,
    quarter,
    stage: eventDefinition.stage,
    npc,
    definition: eventDefinition
  };
}

function queueRelationshipStageEvent(age = state.age, quarter = state.quarter) {
  if (state.pendingRelationshipStageEvent && !isRelationshipStageEventForMoment(state.pendingRelationshipStageEvent, age, quarter)) {
    state.pendingRelationshipStageEvent = null;
  }
  if (!state.archiveId || state.pendingRelationshipStageEvent || state.activeRelationshipStageEvent) {
    return false;
  }
  const candidates = getEligibleRelationshipStageEvents(age);
  if (!candidates.length) {
    return false;
  }
  const preferredCandidates = candidates.filter(isPreferredRelationshipStageEventCandidate);
  if (preferredCandidates.length) {
    const candidate = pick(preferredCandidates);
    state.pendingRelationshipStageEvent = createRelationshipStageEvent(candidate.npc, candidate.eventDefinition, age, quarter);
    return true;
  }
  if (Math.random() >= RELATIONSHIP_STAGE_EVENT_CHANCE) {
    return false;
  }
  const candidate = pick(candidates);
  state.pendingRelationshipStageEvent = createRelationshipStageEvent(candidate.npc, candidate.eventDefinition, age, quarter);
  return true;
}

function injectRelationshipNpcName(text, npc) {
  return String(text || "").replace(/NPC/g, npc?.name || "NPC");
}

function getRelationshipLogSentence(text, npc) {
  return injectRelationshipNpcName(text, npc).replace(/[。！？.!?]+$/u, "");
}

function renderRelationshipStageEventDialog(stageEvent) {
  const { definition, npc } = stageEvent;
  const typeText = definition.types.join(" / ");
  const effectNote = definition.tags?.length ? `标签：${definition.tags.join(" / ")}` : "通用关系事件";
  elements.relationshipStageEventKicker.textContent = `关系阶段事件 / ${definition.stage} / ${typeText}`;
  elements.relationshipStageEventTitle.textContent = `${npc.name} · ${definition.title}`;
  elements.relationshipStageEventDescription.innerHTML = `
    <p>${escapeHtml(injectRelationshipNpcName(definition.event, npc))}</p>
    <p><strong>冲突：</strong>${escapeHtml(injectRelationshipNpcName(definition.conflict, npc))}</p>
    <p class="note">${escapeHtml(effectNote)}。选择后会更新${escapeHtml(npc.name)}的人际档案。</p>
  `;
  elements.relationshipStageEventChoices.innerHTML = definition.choices.map((choice) => {
    const effectText = formatRelationshipEffectText(choice.relationshipEffects || {}) || "关系：无变化";
    return `
      <button class="button age-story-choice" type="button" data-relationship-stage-choice="${escapeHtml(choice.id)}" aria-label="${escapeHtml(buildChoiceAriaLabel(choice.label, effectText))}">
        <span>${escapeHtml(choice.label)}${renderChoiceHintMarkup(effectText)}</span>
      </button>
    `;
  }).join("");
}

function tryOpenRelationshipStageEvent() {
  if (state.pendingRelationshipStageEvent && !isRelationshipStageEventForMoment(state.pendingRelationshipStageEvent)) {
    state.pendingRelationshipStageEvent = null;
    return false;
  }
  if (state.activeRelationshipStageEvent || !state.pendingRelationshipStageEvent) {
    return false;
  }
  state.activeRelationshipStageEvent = state.pendingRelationshipStageEvent;
  state.pendingRelationshipStageEvent = null;
  renderRelationshipStageEventDialog(state.activeRelationshipStageEvent);
  openStoryDialog(elements.relationshipStageEventDialog);
  elements.relationshipStageEventChoices.querySelector("[data-relationship-stage-choice]")?.focus();
  return true;
}

function getEligibleProactiveNpcEvents() {
  const candidates = [];
  getKnownRelationshipNpcs().forEach((npc) => {
    const relationship = getNpcRelationshipDisplayRecord(npc);
    const stage = getNpcRelationshipStage(relationship);
    if (stage === "陌生") {
      return;
    }
    PROACTIVE_NPC_EVENTS.forEach((eventDefinition) => {
      const resolvedKey = getProactiveNpcEventResolvedKey(npc.id, eventDefinition.id);
      if (!state.resolvedProactiveNpcEvents[resolvedKey]
        && isProactiveNpcEventDefinitionEligible(eventDefinition, stage, relationship)) {
        candidates.push({ npc, relationship, stage, eventDefinition });
      }
    });
  });
  return candidates;
}

function createProactiveNpcEvent(npc, relationship, stage, eventDefinition, age = state.age, quarter = state.quarter) {
  return {
    key: getProactiveNpcEventKey(npc.id, eventDefinition.id, age, quarter),
    eventId: eventDefinition.id,
    npcId: npc.id,
    age,
    quarter,
    stage,
    tag: relationship.tag,
    npc,
    definition: eventDefinition
  };
}

function queueProactiveNpcEvent(age = state.age, quarter = state.quarter) {
  if (state.pendingProactiveNpcEvent && !isProactiveNpcEventForMoment(state.pendingProactiveNpcEvent, age, quarter)) {
    state.pendingProactiveNpcEvent = null;
  }
  if (!state.archiveId || state.pendingProactiveNpcEvent || state.activeProactiveNpcEvent) {
    return false;
  }
  const candidates = getEligibleProactiveNpcEvents();
  if (!candidates.length || Math.random() >= PROACTIVE_NPC_EVENT_CHANCE) {
    return false;
  }
  const candidate = pick(candidates);
  state.pendingProactiveNpcEvent = createProactiveNpcEvent(candidate.npc, candidate.relationship, candidate.stage, candidate.eventDefinition, age, quarter);
  return true;
}

function renderProactiveNpcEventDialog(proactiveEvent) {
  const { definition, npc, stage, tag } = proactiveEvent;
  const relationship = getNpcRelationshipDisplayRecord(npc);
  elements.proactiveNpcEventKicker.textContent = `NPC主动互动 / ${definition.type} / ${stage} / ${relationship.tag}`;
  elements.proactiveNpcEventTitle.textContent = `${npc.name} · ${definition.title}`;
  elements.proactiveNpcEventDescription.innerHTML = `
    <p>${escapeHtml(injectRelationshipNpcName(definition.event, npc))}</p>
    <p><strong>当下关系：</strong>${escapeHtml(stage)} / ${escapeHtml(tag)} / ${escapeHtml(relationship.tendency)}</p>
    <p class="note">${escapeHtml(injectRelationshipNpcName(definition.prompt, npc))} 选择后会更新${escapeHtml(npc.name)}的人际档案。</p>
  `;
  elements.proactiveNpcEventChoices.innerHTML = definition.choices.map((choice) => {
    const effectText = formatRelationshipEffectText(choice.relationshipEffects || {}) || "关系：无变化";
    return `
      <button class="button age-story-choice" type="button" data-proactive-npc-choice="${escapeHtml(choice.id)}" aria-label="${escapeHtml(buildChoiceAriaLabel(choice.label, effectText))}">
        <span>${escapeHtml(choice.label)}${renderChoiceHintMarkup(effectText)}</span>
      </button>
    `;
  }).join("");
}

function tryOpenProactiveNpcEvent() {
  if (state.pendingProactiveNpcEvent && !isProactiveNpcEventForMoment(state.pendingProactiveNpcEvent)) {
    state.pendingProactiveNpcEvent = null;
    return false;
  }
  if (state.activeProactiveNpcEvent || !state.pendingProactiveNpcEvent) {
    return false;
  }
  const pendingProactiveNpcEvent = state.pendingProactiveNpcEvent;
  state.pendingProactiveNpcEvent = null;
  const npc = getRelationshipNpcById(pendingProactiveNpcEvent.npcId);
  const definition = getProactiveNpcEventDefinition(pendingProactiveNpcEvent.eventId);
  if (!npc || !definition || !isNpcKnown(npc)) {
    return false;
  }
  const relationship = getNpcRelationshipDisplayRecord(npc);
  const stage = getNpcRelationshipStage(relationship);
  const resolvedKey = getProactiveNpcEventResolvedKey(pendingProactiveNpcEvent.npcId, pendingProactiveNpcEvent.eventId);
  if (stage !== pendingProactiveNpcEvent.stage
    || relationship.tag !== pendingProactiveNpcEvent.tag
    || state.resolvedProactiveNpcEvents[resolvedKey]
    || !isProactiveNpcEventDefinitionEligible(definition, stage, relationship)) {
    return false;
  }
  state.activeProactiveNpcEvent = {
    ...pendingProactiveNpcEvent,
    npc,
    definition
  };
  renderProactiveNpcEventDialog(state.activeProactiveNpcEvent);
  openStoryDialog(elements.proactiveNpcEventDialog);
  elements.proactiveNpcEventChoices.querySelector("[data-proactive-npc-choice]")?.focus();
  return true;
}

function tryOpenQuarterStoryOrRandomNpc() {
  if (tryOpenNextQuarterStory()) {
    return true;
  }
  if (tryOpenRelationshipStageEvent()) {
    return true;
  }
  if (tryOpenProactiveNpcEvent()) {
    return true;
  }
  if (tryOpenNextLifeGoalStory()) {
    return true;
  }
  if (tryOpenRandomNpcEncounter()) {
    return true;
  }
  return tryOpenNarrativeDiceEvent();
}

function addGeneratedNpcToRelationships(npc) {
  if (!isPlainObject(npc) || !isSafeSaveRecordKey(npc.id)) {
    return;
  }
  if (state.generatedNpcs.some((item) => item.id === npc.id)) {
    ensureNpcRelationshipRecord(npc.id, NPC_RELATIONSHIP_EMPTY_VALUES);
    return;
  }
  state.generatedNpcs.push(npc);
  ensureNpcRelationshipRecord(npc.id, NPC_RELATIONSHIP_EMPTY_VALUES);
}

function chooseRandomNpcEncounterChoice(choiceId) {
  const encounter = state.activeRandomNpcEncounter;
  const choice = encounter?.choices.find((item) => item.id === choiceId);
  if (!encounter || !choice || state.resolvedRandomNpcEncounters[encounter.key]) {
    return;
  }

  state.attributes = addAttributes(state.attributes, choice.effects || {});
  state.resolvedRandomNpcEncounters[encounter.key] = choice.id;
  let relationshipLog = "";
  if (choice.addToArchive) {
    addGeneratedNpcToRelationships(encounter.npc);
    relationshipLog = applyNpcRelationshipEffects(encounter.npc, choice.relationshipEffects || {});
    addNpcMemory(encounter.npc, {
      id: `random-npc:${encounter.key}:${encounter.npc.id}:${choice.id}`,
      source: "random-npc",
      sourceId: `${encounter.key}:${choice.id}`,
      type: choice.id === "cooperate" ? "互助" : "日常",
      title: "初次相遇",
      summary: `${choice.label}，${choice.response || "把这次短暂邂逅记录进人际档案"}`,
      age: encounter.age,
      quarter: encounter.quarter
    });
    state.randomNpcSequence += 1;
  }
  const choiceEffectText = formatChoiceEffectText({ ...choice, relationshipEffects: null });
  const relationshipSuffix = relationshipLog ? `；${relationshipLog}` : "";
  addLog(`随机NPC邂逅｜${encounter.npc.familyName}·${encounter.npc.name}：选择"${choice.label}"，${choiceEffectText}${relationshipSuffix}。`);
  checkLifeGoalCompletions("random-npc");
  state.activeRandomNpcEncounter = null;
  closeStoryDialog(elements.randomNpcDialog);
  if (tryOpenQuarterStoryOrRandomNpc()) {
    render();
    return;
  }
  render();
}

function chooseRelationshipStageEventChoice(choiceId) {
  const stageEvent = state.activeRelationshipStageEvent;
  const definition = stageEvent?.definition;
  const choice = definition?.choices.find((item) => item.id === choiceId);
  const npc = getRelationshipNpcById(stageEvent?.npcId);
  const resolvedKey = stageEvent ? getRelationshipStageEventResolvedKey(stageEvent.npcId, stageEvent.eventId) : "";
  if (!stageEvent || !definition || !choice || !npc || state.resolvedRelationshipStageEvents[resolvedKey]) {
    return;
  }

  const relationshipLog = applyNpcRelationshipEffects(npc, choice.relationshipEffects || {});
  const effectText = formatRelationshipEffectText(choice.relationshipEffects || {}) || "关系：无变化";
  state.resolvedRelationshipStageEvents[resolvedKey] = choice.id;
  addNpcMemory(npc, {
    id: `relationship-stage:${resolvedKey}:${choice.id}`,
    source: "relationship-stage",
    sourceId: `${resolvedKey}:${choice.id}`,
    type: getNpcMemoryType(definition.tags?.[0], `${definition.title} ${definition.conflict}`),
    title: definition.title,
    summary: `${getRelationshipLogSentence(definition.conflict, npc)}；${getRelationshipLogSentence(choice.response, npc)}`,
    age: stageEvent.age,
    quarter: stageEvent.quarter
  });
  addLog(`关系阶段事件｜${definition.stage}·${definition.title}·${npc.name}：${getRelationshipLogSentence(definition.conflict, npc)}。选择"${choice.label}"，${getRelationshipLogSentence(choice.response, npc)}；${relationshipLog || effectText}。`);
  checkLifeGoalCompletions("relationship-stage-event");
  state.activeRelationshipStageEvent = null;
  closeStoryDialog(elements.relationshipStageEventDialog);
  if (tryOpenQuarterStoryOrRandomNpc()) {
    render();
    return;
  }
  render();
}

function chooseProactiveNpcEventChoice(choiceId) {
  const proactiveEvent = state.activeProactiveNpcEvent;
  const definition = proactiveEvent?.definition;
  const choice = definition?.choices.find((item) => item.id === choiceId);
  const npc = getRelationshipNpcById(proactiveEvent?.npcId);
  const resolvedKey = proactiveEvent ? getProactiveNpcEventResolvedKey(proactiveEvent.npcId, proactiveEvent.eventId) : "";
  if (!proactiveEvent || !definition || !choice || !npc || state.resolvedProactiveNpcEvents[resolvedKey]) {
    return;
  }

  const relationshipLog = applyNpcRelationshipEffects(npc, choice.relationshipEffects || {});
  const effectText = formatRelationshipEffectText(choice.relationshipEffects || {}) || "关系：无变化";
  state.resolvedProactiveNpcEvents[resolvedKey] = choice.id;
  addNpcMemory(npc, {
    id: `proactive-npc:${resolvedKey}:${choice.id}`,
    source: "proactive-npc",
    sourceId: `${resolvedKey}:${choice.id}`,
    type: getNpcMemoryType(definition.type, `${definition.title} ${choice.response}`),
    title: definition.title,
    summary: `${getRelationshipLogSentence(definition.title, npc)}；${getRelationshipLogSentence(choice.response, npc)}`,
    age: proactiveEvent.age,
    quarter: proactiveEvent.quarter
  });
  addLog(`NPC主动互动｜${definition.type}·${proactiveEvent.tag}·${npc.name}：${getRelationshipLogSentence(definition.title, npc)}。选择"${choice.label}"，${getRelationshipLogSentence(choice.response, npc)}；${relationshipLog || effectText}。`);
  checkLifeGoalCompletions("proactive-npc-event");
  state.activeProactiveNpcEvent = null;
  closeStoryDialog(elements.proactiveNpcEventDialog);
  if (tryOpenQuarterStoryOrRandomNpc()) {
    render();
    return;
  }
  render();
}


function getNarrativeDiceEventKey(age = state.age, quarter = state.quarter) {
  return `${age}-${quarter}`;
}

function getAvailableNarrativeDiceEvents() {
  return NARRATIVE_DICE_EVENTS.filter((event) => !state.resolvedNarrativeDiceEvents[event.id]);
}

function shouldQueueNarrativeDiceEvent(age, quarter) {
  const key = getNarrativeDiceEventKey(age, quarter);
  if (state.pendingNarrativeDiceEvent && state.pendingNarrativeDiceEvent.key !== key) {
    state.pendingNarrativeDiceEvent = null;
  }
  if (!state.archiveId || state.secondGender === "未分化" || state.pendingNarrativeDiceEvent || state.activeNarrativeDiceEvent) {
    return false;
  }
  if (state.age === age && state.quarter === quarter && shouldDifferentiate()) {
    return false;
  }
  return Math.random() < NARRATIVE_DICE_CHANCE && getAvailableNarrativeDiceEvents().length > 0;
}

function queueNarrativeDiceEvent(age = state.age, quarter = state.quarter) {
  if (!shouldQueueNarrativeDiceEvent(age, quarter)) {
    return false;
  }
  const event = pick(getAvailableNarrativeDiceEvents());
  const boundNpc = pickNarrativeDiceBoundNpc();
  state.pendingNarrativeDiceEvent = {
    ...event,
    key: getNarrativeDiceEventKey(age, quarter),
    age,
    quarter,
    choices: NARRATIVE_DICE_CHOICES
  };
  if (boundNpc) {
    state.pendingNarrativeDiceEvent.npcId = boundNpc.id;
  }
  return true;
}

function renderNarrativeDiceEventDialog(diceEvent) {
  const boundNpc = getNarrativeDiceBoundNpc(diceEvent);
  const eventText = replaceNarrativeDiceTa(diceEvent.event, boundNpc);
  const conflictText = replaceNarrativeDiceTa(diceEvent.conflict, boundNpc);
  elements.narrativeDiceKicker.textContent = `剧情骰子 / ${diceEvent.age} 岁第 ${diceEvent.quarter} 季 / ${diceEvent.id}`;
  elements.narrativeDiceTitle.textContent = eventText;
  elements.narrativeDiceDescription.innerHTML = `
    <p>${escapeHtml(eventText)}</p>
    <p><strong>冲突：</strong>${escapeHtml(conflictText)}</p>
    <p class="note">做出选择后，事件记录会揭示本次剧情反转。</p>
  `;
  elements.narrativeDiceChoices.innerHTML = diceEvent.choices.map((choice) => {
    const effectText = formatNarrativeDiceChoiceEffectText(choice, boundNpc);
    return `
      <button class="button age-story-choice" type="button" data-narrative-dice-choice="${escapeHtml(choice.id)}" aria-label="${escapeHtml(buildChoiceAriaLabel(choice.label, effectText))}">
        <span>${escapeHtml(choice.label)}${renderChoiceHintMarkup(effectText)}</span>
      </button>
    `;
  }).join("");
}

function tryOpenNarrativeDiceEvent() {
  if (state.activeNarrativeDiceEvent || !state.pendingNarrativeDiceEvent) {
    return false;
  }
  if (state.pendingNarrativeDiceEvent.key !== getNarrativeDiceEventKey()) {
    state.pendingNarrativeDiceEvent = null;
    return false;
  }
  state.activeNarrativeDiceEvent = state.pendingNarrativeDiceEvent;
  state.pendingNarrativeDiceEvent = null;
  renderNarrativeDiceEventDialog(state.activeNarrativeDiceEvent);
  openStoryDialog(elements.narrativeDiceDialog);
  elements.narrativeDiceChoices.querySelector("[data-narrative-dice-choice]")?.focus();
  return true;
}

function chooseNarrativeDiceEventChoice(choiceId) {
  const diceEvent = state.activeNarrativeDiceEvent;
  const choice = diceEvent?.choices.find((item) => item.id === choiceId);
  if (!diceEvent || !choice || state.resolvedNarrativeDiceEvents[diceEvent.id]) {
    return;
  }

  const boundNpc = getNarrativeDiceBoundNpc(diceEvent);
  const routeEffects = mergeLifePathEffects(choice.routeEffects || {}, NARRATIVE_DICE_LIFE_PATH_EFFECTS[choice.id] || {}, inferLifePathEffectsFromAttributes(choice.effects || {}, 0.8));
  const playerEffectText = formatChoiceEffectText({ ...choice, routeEffects, relationshipEffects: null });
  const relationshipLog = boundNpc ? applyNpcRelationshipEffects(boundNpc, choice.relationshipEffects || {}) : "";
  addLifePathProgress(routeEffects);
  const effectText = [playerEffectText, relationshipLog].filter(Boolean).join("；");
  const eventText = replaceNarrativeDiceTa(diceEvent.event, boundNpc);
  const conflictText = replaceNarrativeDiceTa(diceEvent.conflict, boundNpc);
  const responseText = replaceNarrativeDiceTa(choice.response, boundNpc);
  const reversalText = replaceNarrativeDiceTa(diceEvent.reversal, boundNpc);
  state.attributes = addAttributes(state.attributes, choice.effects || {});
  state.resolvedNarrativeDiceEvents[diceEvent.id] = {
    key: diceEvent.key,
    choice: choice.id
  };
  if (boundNpc) {
    state.resolvedNarrativeDiceEvents[diceEvent.id].npcId = boundNpc.id;
    addNpcMemory(boundNpc, {
      id: `narrative-dice:${diceEvent.id}:${choice.id}`,
      source: "narrative-dice",
      sourceId: `${diceEvent.id}:${choice.id}`,
      type: "剧情骰子",
      title: eventText,
      summary: `${conflictText}；${responseText}；反转：${reversalText}`,
      age: diceEvent.age,
      quarter: diceEvent.quarter
    });
  }
  addLog(`剧情骰子｜${diceEvent.age}岁第${diceEvent.quarter}季·${eventText}：${conflictText}。你选择"${choice.label}"，${responseText}；${effectText}。反转揭示：${reversalText}。`);
  checkLifeGoalCompletions("narrative-dice");
  state.activeNarrativeDiceEvent = null;
  closeStoryDialog(elements.narrativeDiceDialog);
  render();
}

function getInitialSecondGender(age) {
  return age < 18 ? "未分化" : weightedPick(SECOND_GENDER_WEIGHTS);
}

function generateNewLife() {
  pendingTimeSummaryFollowup = null;
  lastPersistedFingerprint = null;
  window.clearTimeout(actionPointFeedbackTimer);
  elements.actionPointFeedback?.classList.remove("action-point-feedback--visible");
  const family = pick(FAMILY_BACKGROUNDS);
  state.archiveId = `ABO-${randomInt(1000, 9999)}-${randomInt(10, 99)}`;
  state.age = 0;
  state.deathAge = randomInt(DEATH_AGE_MIN, DEATH_AGE_MAX);
  state.deceased = false;
  state.quarter = 1;
  state.actionPoints = 5;
  state.differentiationAge = randomInt(15, 18);
  state.differentiationQuarter = randomInt(1, 4);
  state.firstGender = pick(FIRST_GENDERS);
  state.secondGender = getInitialSecondGender(state.age);
  state.familyId = family.id;
  state.familyTag = family.name;
  state.familyStory = family.story;
  state.parents = [];
  state.log = [];
  state.resolvedAgeStories = {};
  state.activeAgeStoryAge = null;
  state.resolvedQuarterStories = {};
  state.activeQuarterStoryKey = null;
  state.pendingQuarterStoryKeys = [];
  state.resolvedSpecialActions = {};
  state.activeSpecialActionFamilyId = null;
  state.activeSpecialActionId = null;
  state.activeSpecialActionNode = null;
  state.pendingSpecialActionAdvance = false;
  state.resolvedAttributeThresholdStories = {};
  state.activeAttributeThresholdStoryFamilyId = null;
  state.activeAttributeThresholdStoryId = null;
  state.pendingAttributeThresholdFollowup = null;
  state.knownNpcIds = getInitialKnownNpcIds(family.id);
  state.generatedNpcs = [];
  state.randomNpcSequence = 0;
  state.resolvedRandomNpcEncounters = {};
  state.activeRandomNpcEncounter = null;
  state.pendingRandomNpcEncounter = null;
  state.npcRelationships = {};
  state.npcMemories = {};
  state.resolvedRelationshipStageEvents = {};
  state.activeRelationshipStageEvent = null;
  state.pendingRelationshipStageEvent = null;
  state.resolvedProactiveNpcEvents = {};
  state.activeProactiveNpcEvent = null;
  state.pendingProactiveNpcEvent = null;
  state.resolvedNarrativeDiceEvents = {};
  state.activeNarrativeDiceEvent = null;
  state.pendingNarrativeDiceEvent = null;
  state.resolvedMapLocationEvents = {};
  state.mapDiceResultBookkeeping = {};
  state.lifePathProgress = createEmptyLifePathProgress();
  state.traits = [];
  state.completedLifeGoals = {};
  state.resolvedLifeGoalStories = {};
  state.activeLifeGoalStoryId = null;
  state.pendingLifeGoalStoryIds = [];
  state.resolvedPostDifferentiationStoryId = null;
  state.activePostDifferentiationStoryId = null;
  state.pendingPostDifferentiationStoryId = null;
  hydrateNpcRelationships();

  if (family.orphan) {
    state.origin = "orphan-family";
    state.attributes = buildOrphanAttributes();
    addLog(`档案 ${state.archiveId} 生成：出身背景为"${state.familyTag}"，无父母档案，直接启用孤儿基线。`);
  } else {
    const parents = createFamilyParents(family);
    state.parents = parents;
    if (isNonReproductivePair(parents)) {
      state.origin = "orphan-nonreproductive";
      state.attributes = buildOrphanAttributes();
      addLog(`父母候选生成：${parents[0].secondGender} + ${parents[1].secondGender} 被联邦生殖法判定为不可自然生育组合，玩家改判为孤儿开局并启用孤儿基线。`);
    } else {
      state.origin = "inherited";
      state.attributes = buildInheritedAttributes(parents);
      addLog(`父母档案生成：${parents[0].label}为${parents[0].career}（${parents[0].secondGender}），${parents[1].label}为${parents[1].career}（${parents[1].secondGender}），遗传系数 ${getCoefficient(parents).toFixed(2)}。`);
    }
  }

  addLog(`出身背景抽取为"${state.familyTag}"：${state.familyStory}`);
  if (state.secondGender !== "未分化") {
    state.attributes = addAttributes(state.attributes, ABO_PARENT_BONUSES[state.secondGender] || {}, 0.5);
  }

  addLog(`第一性别登记为${state.firstGender}；当前 ${state.age} 岁第 ${state.quarter} 季，第二性别状态：${state.secondGender}。`);
  checkLifeGoalCompletions("new-life");
  
  queueQuarterStory(0, 1);
  
  render();
  if (introDialogDismissed) {
    tryOpenNextQuarterStory();
  }
}

function performAction(actionId) {
  if (state.deceased || state.age < 3) {
    return;
  }
  if (state.actionPoints <= 0) {
    advanceQuarter();
    return;
  }
  const action = ACTIONS.find((item) => item.id === actionId);
  if (!action) {
    return;
  }
  state.attributes = addAttributes(state.attributes, action.effects);
  consumeActionPoint(`本季度行动｜${action.title}`);
  const actionStory = action.story ? `${action.story} ` : "";
  const relationshipLog = action.relationshipEffects ? applyKnownNpcRelationshipGrowth(action.relationshipEffects) : "";
  const routeLog = addLifePathProgress(ACTION_LIFE_PATH_EFFECTS[action.id] || {});
  const relationshipSuffix = relationshipLog ? `；${relationshipLog}` : "";
  const routeSuffix = routeLog ? `；${routeLog}` : "";
  addLog(`执行行动“${action.title}”：${actionStory}效果：${describeEffects(action.effects)}${relationshipSuffix}${routeSuffix}。本季剩余行动力 ${state.actionPoints}。`);
  checkLifeGoalCompletions("action");

  if (tryOpenAttributeThresholdStory({ followup: state.actionPoints === 0 ? "advanceQuarter" : null })) {
    render();
    return;
  }

  if (state.actionPoints > 0 && tryOpenNextLifeGoalStory()) {
    render();
    return;
  }

  if (state.actionPoints === 0) {
    addLog("本季行动力耗尽，档案自动推进到下一季度。");
    advanceQuarter();
  } else {
    render();
  }
}

function performSocialInteraction(npcId, interactionId) {
  if (!state.archiveId || state.deceased || state.age < 3) {
    return;
  }
  if (state.actionPoints <= 0) {
    advanceQuarter();
    return;
  }

  const npc = getRelationshipNpcById(npcId);
  const interaction = SOCIAL_INTERACTION_MAP.get(interactionId);
  if (!npc || !interaction || !isNpcKnown(npc)) {
    return;
  }

  const actionPointsBeforeInteraction = consumeActionPoint(`社交日程｜${npc.name}·${interaction.label}`);
  const relationshipLog = applyNpcRelationshipEffects(npc, interaction.effects);
  addNpcMemory(npc, {
    source: "social-schedule",
    sourceId: `${state.age}-${state.quarter}-${npc.id}-${interaction.id}-${actionPointsBeforeInteraction}`,
    type: "关系",
    title: interaction.memoryTitle,
    summary: interaction.memorySummary
  });
  const routeLog = addLifePathProgress(mergeLifePathEffects({ "relationship-management": 3 }, inferLifePathEffectsFromAttributes(interaction.effects, 0.8)));
  const relationshipSuffix = relationshipLog ? `；${relationshipLog}` : "";
  const routeSuffix = routeLog ? `；${routeLog}` : "";
  addLog(`社交日程：与${npc.name}${interaction.logText}${relationshipSuffix}${routeSuffix}。本季剩余行动力 ${state.actionPoints}。`);
  checkLifeGoalCompletions("social");

  if (state.actionPoints > 0 && tryOpenNextLifeGoalStory()) {
    render();
    return;
  }

  if (state.actionPoints === 0) {
    addLog("本季行动力耗尽，档案自动推进到下一季度。");
    advanceQuarter();
  } else {
    render();
  }
}

function performMapAction(actionId) {
  closeMapActionDialog();
  performAction(actionId);
}

function performMapSocialInteraction(npcId, interactionId) {
  closeMapActionDialog();
  performSocialInteraction(npcId, interactionId);
}

function performMapLocationEvent(locationId, eventId, choiceId, kind) {
  if (!state.archiveId || state.deceased || state.age < 3) {
    return;
  }
  if (state.actionPoints <= 0) {
    advanceQuarter();
    return;
  }

  const availableLocations = getAvailableQuarterMapLocations();
  const location = availableLocations.find((item) => item.id === locationId);
  if (!location) {
    renderMapActionDialog();
    return;
  }

  const eventDefinition = kind === "dice"
    ? QUARTER_MAP_REPEATABLE_DICE_EVENT_BY_ID.get(eventId)
    : QUARTER_MAP_ONE_TIME_EVENT_BY_ID.get(eventId);
  if (!eventDefinition) {
    renderMapActionDialog();
    return;
  }
  if (!isMapLocationEventAvailable(location, eventDefinition, kind === "dice" ? "dice" : "one-time")) {
    renderMapActionDialog();
    return;
  }

  const choice = eventDefinition.choices.find((item) => item.id === choiceId);
  if (!choice) {
    renderMapActionDialog();
    return;
  }

  const actionPointsBeforeEvent = consumeActionPoint(`地图事件｜${location.name}·${eventDefinition.title}`);
  state.attributes = addAttributes(state.attributes, choice.effects || {});

  const targetNpc = getMapEventRelationshipTarget(location);
  const relationshipLog = targetNpc ? applyNpcRelationshipEffects(targetNpc, choice.relationshipEffects || {}) : "";
  if (targetNpc && hasMapEventRelationshipEffects(choice.relationshipEffects)) {
    addNpcMemory(targetNpc, {
      source: "map-event",
      sourceId: `${location.id}:${eventDefinition.id}:${choice.id}:${state.age}-${state.quarter}-${actionPointsBeforeEvent}`,
      type: kind === "dice" ? "剧情骰子" : "关系",
      title: `${location.name}·${eventDefinition.title}`,
      summary: `你在${location.name}选择了“${choice.label}”，让这段同行留下了新的关系记录。`
    });
  }

  if (kind === "dice") {
    state.mapDiceResultBookkeeping[eventDefinition.id] = (state.mapDiceResultBookkeeping[eventDefinition.id] || 0) + 1;
  } else {
    state.resolvedMapLocationEvents[eventDefinition.id] = choice.id;
  }

  const routeLog = addLifePathProgress(getMapEventChoiceLifePathEffects(choice));
  const effectText = formatMapEventChoiceEffects(choice) || "无数值变化";
  const relationshipSuffix = relationshipLog ? `；${relationshipLog}` : hasMapEventRelationshipEffects(choice.relationshipEffects) ? "；当前地点暂无可结算关系的已认识 NPC" : "";
  const routeSuffix = routeLog ? `；${routeLog}` : "";
  addLog(`地图事件｜${location.name}·${eventDefinition.title}：选择“${choice.label}”，${effectText}${relationshipSuffix}${routeSuffix}。本季剩余行动力 ${state.actionPoints}。`);
  checkLifeGoalCompletions("map-event");

  if (state.actionPoints === 0) {
    addLog("本季行动力耗尽，档案自动推进到下一季度。");
    advanceQuarter();
    return;
  }

  render();
}

function advanceQuarter(options = {}) {
  if (!state.archiveId || state.deceased) {
    render();
    return;
  }
  const previousAge = state.age;
  const previousQuarter = state.quarter;
  const previousActionPoints = state.actionPoints;
  const spent = 5 - state.actionPoints;
  const causedByQuarterStoryChoice = options.causedByQuarterStoryChoice === true;
  if (state.actionPoints > 0 && !causedByQuarterStoryChoice) {
    addLog(`提前结束本季：已执行 ${spent} 次行动，未使用行动力清零。`);
  }
  state.actionPoints = 5;
  state.quarter += 1;
  const ageAdvanced = state.quarter > 4;
  if (state.quarter > 4) {
    state.quarter = 1;
    state.age += 1;
    addLog(`年轮推进：主角进入 ${state.age} 岁。`);
  }
  if (ageAdvanced && state.age >= state.deathAge) {
    state.deceased = true;
    clearArchivedLifeProgress();
    addLog(`生命归档｜主角在 ${state.age} 岁触及预设生命上限 ${state.deathAge} 岁，本人生已完成归档。`);

    if (previousAge >= 3) {
      addLog(`生命归档总结｜${previousAge} 岁第 ${previousQuarter} 季已归档，正在生成终端自动存档。`);
      const summaryContext = { previousAge, previousQuarter, previousActionPoints, ageAdvanced, deceased: true };
      if (openTimeAdvanceSummary(summaryContext)) {
        render();
        return;
      }
    }

    render();
    return;
  }
  addLog(`进入第 ${state.quarter} 季，行动力恢复为 5。`);
  
  queueQuarterStory(state.age, state.quarter);
  queueRelationshipStageEvent(state.age, state.quarter);
  queueProactiveNpcEvent(state.age, state.quarter);
  queueRandomNpcEncounter(state.age, state.quarter);
  queueNarrativeDiceEvent(state.age, state.quarter);
  checkLifeGoalCompletions("quarter-advance");

  if (previousAge >= 3) {
    addLog(`${ageAdvanced ? "年度总结" : "季度总结"}｜${previousAge} 岁第 ${previousQuarter} 季已归档，正在生成自动存档。`);
    const summaryContext = { previousAge, previousQuarter, previousActionPoints, ageAdvanced };
    if (openTimeAdvanceSummary(summaryContext)) {
      render();
      return;
    }
  }

  completeQuarterAdvanceFollowup({ ageAdvanced });
  render();
}

function differentiateSecondGender() {
  state.secondGender = weightedPick(SECOND_GENDER_WEIGHTS);
  const bonus = ABO_PARENT_BONUSES[state.secondGender] || {};
  state.attributes = addAttributes(state.attributes, bonus, 0.5);
  addLog(`18 岁第 1 季强制分化完成：第二性别为 ${state.secondGender}。分化概率表为 A 15%、B 70%、O 15%，并获得对应成年化倾向加成。`);
  queuePostDifferentiationStory();
  checkLifeGoalCompletions("differentiation");
  openDifferentiationDialog();
}

function renderAttributes() {
  elements.attributeGrid.innerHTML = ATTRIBUTE_DEFINITIONS.map((definition) => {
    const value = state.attributes[definition.key] || 0;
    return `
      <article class="attribute-card" aria-label="${definition.label} ${value}">
        <div class="attribute-card__top">
          <span class="attribute-card__name">${definition.label}</span>
          <span class="attribute-card__value">${value}</span>
        </div>
        <div class="meter" aria-hidden="true"><span style="width: ${value}%"></span></div>
        <p class="note">${definition.detail}</p>
      </article>
    `;
  }).join("");
}

function renderActions() {
  const archived = state.deceased;
  const mapCount = getAvailableQuarterMapLocations().length;
  const actionDisabled = !state.archiveId || archived || state.age < 3 || state.actionPoints <= 0;
  const mapStateText = archived
    ? `当前人生已归档 · 生命上限 ${state.deathAge} 岁`
    : state.age < 3
    ? "满 3 岁后开放季度移动"
    : state.actionPoints <= 0
      ? "本季行动力已耗尽，可查看地图但不能行动"
      : `${state.secondGender === "未分化" ? "分化前家庭活动范围" : "分化后家庭与公共地图"} · ${mapCount} 个地点`;
  const mapButton = `
    <button class="button action-button action-button--map" type="button" data-open-map-action ${archived ? "disabled" : ""} aria-label="打开季度地图行动弹窗">
      <span>探索地图<small>${escapeHtml(mapStateText)}</small></span>
      <span>MAP</span>
    </button>
  `;
  const relationshipButton = `
    <button class="button action-button" type="button" data-open-relationship-action ${archived ? "disabled" : ""} aria-label="打开人际互动弹窗">
      <span>人际互动<small>查看社交日程与 NPC 关系档案</small></span>
      <span>LINK</span>
    </button>
  `;
  const primaryActions = [
    ["academy", "学习", "提升知识、表达与长期路线倾向"],
    ["drill", "训练", "锻炼体质、反应与行动稳定性"],
    ["rest", "休息", "恢复节律，降低本季过载感"]
  ].map(([id, label, description]) => {
    const action = ACTION_BY_ID.get(id);
    const displayDescription = getActionDisplayDescription(action, description);
    return `
      <button class="button action-button" type="button" data-action="${id}" ${actionDisabled ? "disabled" : ""} aria-label="执行${label}行动，消耗 1 点行动力">
        <span>${label}<small>${escapeHtml(displayDescription)}</small></span>
        <span>耗费 1</span>
      </button>
    `;
  }).join("");
  const specialButton = hasAvailableSpecialAction()
    ? `
      <button class="button action-button" type="button" data-special-action="family" aria-label="\u6267\u884c\u5bb6\u5ead\u4e13\u5c5e\u7279\u6b8a\u884c\u52a8\uff0c\u968f\u673a\u89e6\u53d1\u5f53\u524d\u5e74\u9f84\u6bb5\u7684\u5bb6\u5ead\u5267\u60c5">
        <span>\u5bb6\u5ead\u4e13\u5c5e\u7279\u6b8a\u884c\u52a8<small>\u5f53\u524d\u51fa\u8eab \u00b7 \u5206\u5316\u524d\u9650\u5b9a\u5267\u60c5</small></span>
        <span>\u8017\u8d39 1</span>
      </button>
    `
    : "";
  elements.actionList.innerHTML = `${mapButton}${relationshipButton}${primaryActions}${specialButton}`;
}

function renderMapActionDialog() {
  if (!elements.mapActionDialog) {
    return;
  }

  const locations = getAvailableQuarterMapLocations();
  const selectedLocation = getSelectedMapLocation(locations);
  selectedMapLocationId = selectedLocation?.id || null;

  if (!state.archiveId) {
    elements.mapActionStatus.innerHTML = `<p>生成新档案后，将同步季度地图。</p>`;
    elements.mapLocationList.innerHTML = "";
    elements.mapLocationDetail.innerHTML = "";
    return;
  }

  const statusText = state.deceased
    ? `当前人生已归档，档案停留在 ${state.age} 岁第 ${state.quarter} 季；地图可供回看，但不能再执行行动、事件或社交。`
    : state.age < 3
    ? "未满 3 岁时暂不能独立移动，地图仅作预览。"
    : state.actionPoints <= 0
      ? "本季行动力已耗尽，可查看地点和 NPC，但需要进入下一季度后行动。"
      : `当前可用行动力 ${state.actionPoints} 点；${state.secondGender === "未分化" ? "分化前仅开放家庭背景可触达地点。" : "分化后开放家庭地点与公共地图。"}`;
  elements.mapActionStatus.innerHTML = `<p>${escapeHtml(statusText)}</p>`;

  elements.mapLocationList.innerHTML = locations.map((location) => {
    const isSelected = selectedLocation && location.id === selectedLocation.id;
    return `
      <button class="map-location-card${isSelected ? " map-location-card--selected" : ""}" type="button" data-map-location="${escapeHtml(location.id)}" aria-pressed="${isSelected ? "true" : "false"}">
        <span>${escapeHtml(location.label)}</span>
        <strong>${escapeHtml(location.name)}</strong>
        <small>${escapeHtml(location.summary)}</small>
      </button>
    `;
  }).join("");

  if (!selectedLocation) {
    elements.mapLocationDetail.innerHTML = `<p class="map-dialog__empty">当前背景还没有可用地图。</p>`;
    return;
  }

  const actionDisabled = state.deceased || state.age < 3 || state.actionPoints <= 0;
  const actionButtons = selectedLocation.actionIds.map((actionId) => ACTION_BY_ID.get(actionId)).filter(Boolean).map((action) => `
    <button class="button map-action-button" type="button" data-map-action="${escapeHtml(action.id)}" ${actionDisabled ? "disabled" : ""} aria-label="在${escapeHtml(selectedLocation.name)}执行${escapeHtml(action.title)}，消耗 1 点行动力">
      <span>${escapeHtml(action.title)}<small>${escapeHtml(getActionDisplayDescription(action, action.description))}</small></span>
      <span>耗费 1</span>
    </button>
  `).join("");
  const oneTimeEvents = getAvailableMapLocationOneTimeEvents(selectedLocation);
  const diceEvents = getAvailableMapLocationDiceEvents(selectedLocation);
  const eventSection = oneTimeEvents.length || diceEvents.length
    ? `${oneTimeEvents.length ? oneTimeEvents.map((eventDefinition) => renderMapEventCard(selectedLocation, eventDefinition, actionDisabled, "one-time")).join("") : ""}${diceEvents.length ? diceEvents.map((eventDefinition) => renderMapEventCard(selectedLocation, eventDefinition, actionDisabled, "dice")).join("") : ""}`
    : `<p class="map-dialog__empty">当前年龄段在这个地点没有可执行的地点事件，重复骰子片段也暂未开放。</p>`;
  const npcs = getMapLocationNpcs(selectedLocation);
  const npcSection = npcs.length
    ? npcs.map((npc) => {
      const relationship = getNpcRelationshipDisplayRecord(npc);
      const stage = getNpcRelationshipStage(relationship);
      const displayName = `${npc.familyName || ""}${npc.name || "未命名 NPC"}`;
      const interactionButtons = SOCIAL_INTERACTIONS.map((interaction) => `
        <button class="button" type="button" data-map-social-npc-id="${escapeHtml(npc.id)}" data-map-social-interaction="${escapeHtml(interaction.id)}" ${actionDisabled ? "disabled" : ""} aria-label="在${escapeHtml(selectedLocation.name)}与${escapeHtml(displayName)}${escapeHtml(interaction.label)}，消耗 1 点行动力">
          ${escapeHtml(interaction.label)}
        </button>
      `).join("");
      return `
        <article class="map-npc-card">
          <div class="map-npc-card__top">
            <strong>${escapeHtml(displayName)}</strong>
            <span>${escapeHtml(stage)}</span>
          </div>
          <p>${escapeHtml(npc.role || "可互动 NPC")}</p>
          <div class="map-npc-card__actions">${interactionButtons}</div>
        </article>
      `;
    }).join("")
    : `<p class="map-dialog__empty">当前地点还没有可互动的已认识 NPC。后续随机邂逅或关系剧情会让 NPC 出现在更合适的地图地点。</p>`;

  elements.mapLocationDetail.innerHTML = `
    <div class="map-location-detail__header">
      <span>${escapeHtml(selectedLocation.label)}</span>
      <h3>${escapeHtml(selectedLocation.name)}</h3>
      <p>${escapeHtml(selectedLocation.summary)}</p>
    </div>
    <section class="map-location-detail__section">
      <h4>地点行动</h4>
      <div class="map-action-list">${actionButtons}</div>
    </section>
    <section class="map-location-detail__section">
      <h4>地点事件与骰子片段</h4>
      <div class="map-npc-list">${eventSection}</div>
    </section>
    <section class="map-location-detail__section">
      <h4>本地点可遇见 NPC</h4>
      <div class="map-npc-list">${npcSection}</div>
    </section>
  `;
}

function renderLifeGoals() {
  const stage = getLifeGoalStage();
  const goals = getLifeGoalsForCurrentStage();
  const completedGoals = getCompletedLifeGoals();
  const completedCount = goals.filter((goal) => completedGoals[goal.id]).length;
  elements.lifeGoalSummary.textContent = state.archiveId
    ? `${stage.summary} 当前阶段 ${completedCount}/${goals.length} 项已完成。`
    : "生成新档案后，将显示当前年龄段的人生目标。";
  elements.lifeGoalStage.textContent = `${stage.label} / ${stage.ageRange}`;
  if (!state.archiveId) {
    elements.lifeGoalList.innerHTML = "";
    return;
  }
  elements.lifeGoalList.innerHTML = goals.map((goal) => {
    const progress = goal.getProgress();
    const isComplete = completedGoals[goal.id] === true;
    const statusText = isComplete ? "已完成" : "进行中";
    const progressPercent = clamp(progress.percent);
    return `
      <article class="life-goal-card${isComplete ? " life-goal-card--complete" : ""}">
        <div class="life-goal-card__top">
          <h3>${escapeHtml(goal.title)}</h3>
          <span class="life-goal-card__status">${escapeHtml(statusText)}</span>
        </div>
        <p>${escapeHtml(goal.description)}</p>
        <div class="life-goal-card__progress">
          <div class="life-goal-card__progress-top">
            <span>${escapeHtml(progress.text)}</span>
            <strong>${progressPercent}%</strong>
          </div>
          <div class="meter" aria-hidden="true"><span style="width: ${progressPercent}%"></span></div>
        </div>
        <code>${escapeHtml(goal.rewardHint)}</code>
      </article>
    `;
  }).join("");
}


function renderLifePaths() {
  if (!state.archiveId) {
    elements.lifePathSummary.textContent = "生成新档案后，将显示当前路线倾向。";
    elements.lifePathList.innerHTML = "";
    return;
  }

  const topRoutes = getTopLifePaths(3);
  const leadingRoute = topRoutes[0];
  elements.lifePathSummary.textContent = leadingRoute.progress > 0
    ? `当前倾向：${leadingRoute.label} · ${leadingRoute.stage.label}（${leadingRoute.progress}/100）。路线只记录成长倾向，不锁定职业。`
    : "当前倾向尚未显现；行动、目标与剧情选择会逐步点亮路线记录。";

  const currentMarkup = leadingRoute.progress > 0
    ? `
      <article class="life-path-current">
        <span>当前倾向</span>
        <strong>${escapeHtml(leadingRoute.label)} / ${escapeHtml(leadingRoute.stage.label)}</strong>
        <p>${escapeHtml(leadingRoute.summary)}</p>
      </article>
    `
    : `
      <article class="life-path-current">
        <span>当前倾向</span>
        <strong>等待第一条路线信号</strong>
        <p>完成季度行动、社交日程、阶段目标或剧情选择后，路线面板会记录你的成长方向。</p>
      </article>
    `;

  const routeCards = topRoutes.map((route, index) => {
    const progressPercent = route.stage.percent;
    return `
      <article class="life-path-card${index === 0 && route.progress > 0 ? " life-path-card--leading" : ""}">
        <div class="life-path-card__top">
          <h3>${escapeHtml(route.label)}</h3>
          <span class="life-path-card__meta">${escapeHtml(route.stage.label)}</span>
        </div>
        <p>${escapeHtml(route.summary)}</p>
        <div class="life-path-card__progress">
          <div class="life-path-card__progress-top">
            <span>${escapeHtml(route.focus)}</span>
            <strong>${progressPercent}%</strong>
          </div>
          <div class="meter" aria-hidden="true"><span style="width: ${progressPercent}%"></span></div>
        </div>
        <code>${escapeHtml(route.id)}</code>
      </article>
    `;
  }).join("");

  elements.lifePathList.innerHTML = `${currentMarkup}${routeCards}`;
}

function renderParents() {
  if (!state.parents.length) {
    elements.parentSummary.textContent = state.archiveId
      ? "民生署收容档案已就绪：打开后可查看孤儿基线与收容记录。"
      : "生成新档案后，可打开读取父母或民生署收容档案。";
    elements.parentGrid.innerHTML = `
      <article class="parent-card">
        <h3>民生署收容档案</h3>
        <p>${escapeHtml(state.familyStory || "无可读取父母档案。")}</p>
        <p>初始属性使用孤儿固定随机基线：基础值 ${ORPHAN_INITIAL_ATTRIBUTE_RANGE[0]}-${ORPHAN_INITIAL_ATTRIBUTE_RANGE[1]}，精神力与战力有额外补偿，财富略低。</p>
        <code>${state.origin === "orphan-family" ? "ORPHAN-BASELINE" : "AWAITING-ARCHIVE"}</code>
      </article>
    `;
    return;
  }

  const note = state.origin === "orphan-nonreproductive"
    ? "候选组合不可自然生育，已改判孤儿基线。"
    : "可生育组合，已参与遗传计算。";
  elements.parentSummary.textContent = state.origin === "orphan-nonreproductive"
    ? "父母候选档案已生成，但组合不可自然生育；打开后可查看候选档案与改判说明。"
    : `已生成 ${state.parents.length} 份父母档案；打开后可查看职业、第二性别与七项属性。`;
  elements.parentGrid.innerHTML = state.parents.map((parent) => {
    const average = Math.round(Object.values(parent.attributes).reduce((sum, value) => sum + value, 0) / ATTRIBUTE_DEFINITIONS.length);
    const attributes = ATTRIBUTE_DEFINITIONS.map((definition) => `
      <li>
        <span>${definition.label}</span>
        <strong>${parent.attributes[definition.key] || 0}</strong>
      </li>
    `).join("");

    return `
      <article class="parent-card">
        <h3>${escapeHtml(parent.label)}</h3>
        <p>${escapeHtml(getCurrentParentAge(parent))} 岁 · 第一性别 ${escapeHtml(parent.firstGender)} · 第二性别 ${escapeHtml(parent.secondGender)}</p>
        <p class="parent-career"><strong>职业：</strong>${escapeHtml(parent.career)}</p>
        <p>${note}</p>
        <ul class="parent-attributes" aria-label="${escapeHtml(parent.label)}七项属性">
          ${attributes}
        </ul>
        <code>均值 ${average}</code>
      </article>
    `;
  }).join("");
}

function renderNpcRelationshipMeters(relationship) {
  const items = NPC_RELATIONSHIP_METRIC_KEYS.map((key) => {
    const value = relationship[key] || 0;
    return `
      <div class="npc-card__metric">
        <div class="npc-card__metric-top">
          <span>${escapeHtml(NPC_RELATIONSHIP_METRIC_LABELS[key])}</span>
          <strong>${value}</strong>
        </div>
        <div class="meter" aria-hidden="true"><span style="width: ${value}%"></span></div>
      </div>
    `;
  }).join("");
  return `
    <div class="npc-card__relationship" aria-label="关系数值：好感 ${relationship.favorability}，信任 ${relationship.trust}，熟悉度 ${relationship.familiarity}">
      ${items}
    </div>
  `;
}

function renderNpcRelationshipProfile(relationship) {
  return `
    <dl class="npc-card__profile" aria-label="当前关系标签">
      <div>
        <dt>关系标签</dt>
        <dd>${escapeHtml(relationship.tag)}</dd>
      </div>
      <div>
        <dt>发展倾向</dt>
        <dd>${escapeHtml(relationship.tendency)}</dd>
      </div>
    </dl>
  `;
}

function renderNpcMemories(npc) {
  const memories = getNpcMemories(npc.id);
  if (!memories.length) {
    return "";
  }

  const memoryItems = memories.map((memory) => `
    <li>
      <span>${escapeHtml(memory.type)} · ${escapeHtml(memory.age)}岁第${escapeHtml(memory.quarter)}季</span>
      <strong>${escapeHtml(memory.title)}</strong>
      <p>${escapeHtml(memory.summary)}</p>
    </li>
  `).join("");

  return `
    <section class="npc-card__memories" aria-label="${escapeHtml(npc.name)}的共同记忆">
      <div class="npc-card__memories-heading">
        <span>共同记忆</span>
        <small>RECENT ${memories.length}</small>
      </div>
      <ul>${memoryItems}</ul>
    </section>
  `;
}

function renderSocialSchedulePanel() {
  if (!state.archiveId) {
    elements.socialScheduleList.innerHTML = `<p class="social-schedule__empty">生成新档案后，季度社交日程会显示已认识的 NPC。</p>`;
    return;
  }
  if (state.age < 3) {
    elements.socialScheduleList.innerHTML = `<p class="social-schedule__empty">未满 3 岁时暂不开放社交日程，可先结束季度等待成长。</p>`;
    return;
  }

  const knownNpcs = getKnownRelationshipNpcs();
  if (!knownNpcs.length) {
    elements.socialScheduleList.innerHTML = `<p class="social-schedule__empty">当前还没有已认识的 NPC，后续邂逅会加入季度社交日程。</p>`;
    return;
  }

  const disabled = state.deceased || state.actionPoints <= 0;
  const displayedNpcs = knownNpcs.slice(0, 5);
  const overflowNote = knownNpcs.length > displayedNpcs.length
    ? `<p class="social-schedule__empty">另有 ${knownNpcs.length - displayedNpcs.length} 名 NPC 已收录，可打开关系档案或切换中栏人际详情查看。</p>`
    : "";
  elements.socialScheduleList.innerHTML = `${displayedNpcs.map((npc) => {
    const relationship = getNpcRelationshipDisplayRecord(npc);
    const stage = getNpcRelationshipStage(relationship);
    const recentMemory = getNpcMemories(npc.id)[0];
    const displayName = `${npc.familyName || ""}${npc.name || "未命名 NPC"}`;
    const memoryText = recentMemory
      ? `<strong>${escapeHtml(recentMemory.title)}</strong>：${escapeHtml(recentMemory.summary)}`
      : "暂无共同记忆，可通过本季互动建立新的日常记录。";
    const actionButtons = SOCIAL_INTERACTIONS.map((interaction) => `
      <button class="button" type="button" data-social-npc-id="${escapeHtml(npc.id)}" data-social-interaction="${escapeHtml(interaction.id)}" ${disabled ? "disabled" : ""} aria-label="与${escapeHtml(displayName)}${escapeHtml(interaction.label)}，消耗 1 点行动力">
        ${escapeHtml(interaction.label)}
      </button>
    `).join("");

    return `
      <article class="social-schedule-card" aria-label="${escapeHtml(displayName)}的季度社交日程">
        <div class="social-schedule-card__top">
          <h3>${escapeHtml(displayName)}</h3>
          <span class="social-schedule-card__stage">${escapeHtml(stage)}</span>
        </div>
        <div class="social-schedule-card__meta" aria-label="关系标签与倾向">
          <span>标签：${escapeHtml(relationship.tag)}</span>
          <span>倾向：${escapeHtml(relationship.tendency)}</span>
        </div>
        <p class="social-schedule-card__memory">${memoryText}</p>
        <div class="social-schedule-actions" aria-label="${escapeHtml(displayName)}的互动选项">
          ${actionButtons}
        </div>
      </article>
    `;
  }).join("")}${overflowNote}`;
}

function renderRelationships() {
  const relationshipNpcs = getRelationshipArchiveNpcs();
  const knownNpcs = relationshipNpcs.filter(isNpcKnown);
  const unknownNpcs = relationshipNpcs.filter((npc) => !isNpcKnown(npc));
  const completeCount = relationshipNpcs.filter((npc) => npc.complete).length;

  elements.relationshipSummary.textContent = state.archiveId
    ? `${state.deceased ? "当前人生已归档；" : ""}当前已认识 ${knownNpcs.length} 名 NPC；可认识 ${completeCount - knownNpcs.length} 名。灰色档案表示尚未相遇或 Word 内容待补充。`
    : "生成新档案后，将根据主角出身显示已认识 NPC；灰色档案为尚未相遇或待补全。";

  elements.relationshipGrid.innerHTML = [...knownNpcs, ...unknownNpcs].map((npc) => {
    const status = getNpcCardStatus(npc);
    const cardClass = status.locked ? "npc-card npc-card--locked" : "npc-card npc-card--known";
    const relationship = status.locked ? null : getNpcRelationshipDisplayRecord(npc);
    const stage = relationship ? getNpcRelationshipStage(relationship) : status.label;
    return `
      <article class="${cardClass}" aria-label="${escapeHtml(`${npc.familyName}${npc.name}${status.label}`)}">
        <div class="npc-card__header">
          <p class="eyebrow">${escapeHtml(npc.familyName)}</p>
          <span class="npc-card__status">${escapeHtml(stage)}</span>
        </div>
        <h3>${escapeHtml(npc.name)}</h3>
        <p class="npc-card__role">${escapeHtml(npc.bondType)} · ${escapeHtml(npc.secondGender)}</p>
        ${relationship ? renderNpcRelationshipProfile(relationship) : ""}
        ${relationship ? renderNpcRelationshipMeters(relationship) : ""}
        ${relationship ? renderNpcMemories(npc) : ""}
        <p>${escapeHtml(npc.role)}</p>
        <p>${escapeHtml(npc.summary)}</p>
        <ul class="npc-card__facts">
          <li><span>触发线索</span><strong>${escapeHtml(npc.triggers)}</strong></li>
          <li><span>记忆点</span><strong>${escapeHtml(npc.bondPoint)}</strong></li>
        </ul>
        <code>${escapeHtml(status.detail)}</code>
      </article>
    `;
  }).join("");
}

function renderActionPointDots() {
  if (!elements.actionPointDots) {
    return;
  }

  const availablePoints = state.archiveId && !state.deceased ? state.actionPoints : 0;
  elements.actionPointDots.setAttribute("aria-label", `当前行动点 ${availablePoints}/5`);
  elements.actionPointDots.innerHTML = Array.from({ length: 5 }, (_, index) => `
    <span class="action-point-dot${index < availablePoints ? " action-point-dot--filled" : ""}" aria-hidden="true"></span>
  `).join("");
}

function getConsoleMapStatusText(locations) {
  if (!state.archiveId) {
    return "等待档案生成后同步季度地图。";
  }
  if (state.deceased) {
    return `人生已归档，地图保留 ${locations.length} 个可回看地点。`;
  }
  if (state.age < 3) {
    return "未满 3 岁，地图仅开放家庭范围预览。";
  }
  return `${locations.length} 个地点在线；当前行动点 ${state.actionPoints}/5。`;
}

function renderConsoleTerminalSummaries() {
  if (!elements.consoleMapSummary) {
    return;
  }

  const locations = getAvailableQuarterMapLocations();
  elements.consoleMapSummary.textContent = getConsoleMapStatusText(locations);
  if (elements.consoleMapQuickList) {
    elements.consoleMapQuickList.innerHTML = locations.length
      ? locations.slice(0, 5).map((location) => {
        const actionLabels = location.actionIds.map((actionId) => ACTION_BY_ID.get(actionId)?.title).filter(Boolean).slice(0, 2).join(" / ");
        return `
          <button class="console-map-quick-card" type="button" data-console-map-location="${escapeHtml(location.id)}" aria-label="查看${escapeHtml(location.name)}地图详情">
            <strong>${escapeHtml(location.name)}</strong>
            <small>${escapeHtml(location.summary)}</small>
            <span>${escapeHtml(actionLabels || location.label)}</span>
          </button>
        `;
      }).join("")
      : `<p class="console-terminal__empty">当前暂无可显示地点。</p>`;
  }
}

function updateConsoleViewButtons() {
  document.querySelectorAll("[data-console-view]").forEach((button) => {
    button.setAttribute("aria-pressed", button.dataset.consoleView === activeConsoleView ? "true" : "false");
  });
}

function renderConsoleQuarterFocus() {
  const latestLog = state.log[0] || "生成新档案后，系统会在这里显示最近一次结果。";
  return `
    <div class="console-focus-grid console-focus-grid--compact">
      <article class="console-focus-card">
        <p class="eyebrow">Quarter Signal</p>
        <h3>${state.archiveId ? `${escapeHtml(state.age)} 岁第 ${escapeHtml(state.quarter)} 季` : "等待档案生成"}</h3>
        <p class="note">${state.deceased ? `当前人生已归档，终局年龄 ${escapeHtml(state.age)} 岁。` : `剩余行动力 ${escapeHtml(state.actionPoints)} 点；请选择一个主行动或打开功能档案。`}</p>
      </article>
      <article class="console-focus-card">
        <p class="eyebrow">Latest Log</p>
        <p class="note">${escapeHtml(latestLog)}</p>
      </article>
    </div>
  `;
}

function renderConsoleArchiveFocus() {
  if (!state.archiveId) {
    return `<p class="note">生成新档案后，中央焦点会显示个体档案摘要、遗传来源与系统状态。</p>`;
  }

  return `
    <div class="console-focus-grid">
      <article class="console-focus-card">
        <p class="eyebrow">Identity</p>
        <h3>${escapeHtml(state.archiveId)}</h3>
        <ul class="console-focus-list">
          <li><strong>生命阶段</strong>${escapeHtml(state.age)} 岁第 ${escapeHtml(state.quarter)} 季</li>
          <li><strong>性别登记</strong>${escapeHtml(state.firstGender)} / ${escapeHtml(state.secondGender)}</li>
          <li><strong>出身背景</strong>${escapeHtml(state.familyTag)}</li>
        </ul>
      </article>
      <article class="console-focus-card">
        <p class="eyebrow">Heritage</p>
        <p class="note">${escapeHtml(elements.heritageSummary.textContent || "等待继承摘要同步。")}</p>
      </article>
    </div>
  `;
}

function renderConsoleMapFocus() {
  const locations = getAvailableQuarterMapLocations();
  const selectedLocation = getSelectedMapLocation(locations);
  selectedMapLocationId = selectedLocation?.id || null;

  if (!state.archiveId) {
    return `<p class="note">生成新档案后，将在此显示可前往地点、地点行动、事件与可互动 NPC。</p>`;
  }

  if (!selectedLocation) {
    return `<p class="note">当前背景还没有可用地图。</p>`;
  }

  const actionDisabled = state.deceased || state.age < 3 || state.actionPoints <= 0;
  const locationButtons = locations.map((location) => `
    <button class="console-map-location-button" type="button" data-console-map-location="${escapeHtml(location.id)}" aria-pressed="${location.id === selectedLocation.id ? "true" : "false"}">
      <span>${escapeHtml(location.label)}</span>
      <strong>${escapeHtml(location.name)}</strong>
      <small>${escapeHtml(location.summary)}</small>
    </button>
  `).join("");
  const actionButtons = selectedLocation.actionIds.map((actionId) => ACTION_BY_ID.get(actionId)).filter(Boolean).map((action) => `
    <button class="button map-action-button" type="button" data-map-action="${escapeHtml(action.id)}" ${actionDisabled ? "disabled" : ""} aria-label="在${escapeHtml(selectedLocation.name)}执行${escapeHtml(action.title)}，消耗 1 点行动力">
      <span>${escapeHtml(action.title)}<small>${escapeHtml(getActionDisplayDescription(action, action.description))}</small></span>
      <span>耗费 1</span>
    </button>
  `).join("");
  const oneTimeEvents = getAvailableMapLocationOneTimeEvents(selectedLocation);
  const diceEvents = getAvailableMapLocationDiceEvents(selectedLocation);
  const eventSection = oneTimeEvents.length || diceEvents.length
    ? `${oneTimeEvents.length ? oneTimeEvents.map((eventDefinition) => renderMapEventCard(selectedLocation, eventDefinition, actionDisabled, "one-time")).join("") : ""}${diceEvents.length ? diceEvents.map((eventDefinition) => renderMapEventCard(selectedLocation, eventDefinition, actionDisabled, "dice")).join("") : ""}`
    : `<p class="map-dialog__empty">当前年龄段在这个地点没有可执行的地点事件，重复骰子片段也暂未开放。</p>`;
  const npcs = getMapLocationNpcs(selectedLocation);
  const npcSection = npcs.length
    ? npcs.map((npc) => {
      const relationship = getNpcRelationshipDisplayRecord(npc);
      const stage = getNpcRelationshipStage(relationship);
      const displayName = `${npc.familyName || ""}${npc.name || "未命名 NPC"}`;
      const interactionButtons = SOCIAL_INTERACTIONS.map((interaction) => `
        <button class="button" type="button" data-map-social-npc-id="${escapeHtml(npc.id)}" data-map-social-interaction="${escapeHtml(interaction.id)}" ${actionDisabled ? "disabled" : ""} aria-label="在${escapeHtml(selectedLocation.name)}与${escapeHtml(displayName)}${escapeHtml(interaction.label)}，消耗 1 点行动力">
          ${escapeHtml(interaction.label)}
        </button>
      `).join("");
      return `
        <article class="map-npc-card">
          <div class="map-npc-card__top">
            <strong>${escapeHtml(displayName)}</strong>
            <span>${escapeHtml(stage)}</span>
          </div>
          <p>${escapeHtml(npc.role || "可互动 NPC")}</p>
          <div class="map-npc-card__actions">${interactionButtons}</div>
        </article>
      `;
    }).join("")
    : `<p class="map-dialog__empty">当前地点还没有可互动的已认识 NPC。</p>`;

  return `
    <div class="console-map-layout">
      <div class="console-map-location-list" aria-label="可前往地图列表">${locationButtons}</div>
      <div class="console-map-detail">
        <article class="console-focus-card">
          <p class="eyebrow">${escapeHtml(selectedLocation.label)}</p>
          <h3>${escapeHtml(selectedLocation.name)}</h3>
          <p class="note">${escapeHtml(selectedLocation.summary)}</p>
        </article>
        <section class="map-location-detail__section">
          <h4>地点行动</h4>
          <div class="map-action-list">${actionButtons}</div>
        </section>
        <section class="map-location-detail__section">
          <h4>地点事件与骰子片段</h4>
          <div class="map-npc-list">${eventSection}</div>
        </section>
        <section class="map-location-detail__section">
          <h4>本地点可遇见 NPC</h4>
          <div class="map-npc-list">${npcSection}</div>
        </section>
      </div>
    </div>
  `;
}

function renderConsoleRelationshipFocus() {
  if (!state.archiveId) {
    return `<p class="note">生成新档案后，已认识 NPC 与季度社交互动会显示在这里。</p>`;
  }

  const knownNpcs = getKnownRelationshipNpcs();
  if (!knownNpcs.length) {
    return `<p class="note">当前还没有已认识的 NPC，后续邂逅会加入人际终端。</p>`;
  }

  const disabled = state.deceased || state.actionPoints <= 0;
  return knownNpcs.map((npc) => {
    const relationship = getNpcRelationshipDisplayRecord(npc);
    const stage = getNpcRelationshipStage(relationship);
    const displayName = `${npc.familyName || ""}${npc.name || "未命名 NPC"}`;
    const memory = getNpcMemories(npc.id)[0];
    const actions = SOCIAL_INTERACTIONS.map((interaction) => `
      <button class="button" type="button" data-social-npc-id="${escapeHtml(npc.id)}" data-social-interaction="${escapeHtml(interaction.id)}" ${disabled ? "disabled" : ""}>
        ${escapeHtml(interaction.label)}
      </button>
    `).join("");
    return `
      <article class="social-schedule-card">
        <div class="social-schedule-card__top">
          <h3>${escapeHtml(displayName)}</h3>
          <span class="social-schedule-card__stage">${escapeHtml(stage)}</span>
        </div>
        <div class="social-schedule-card__meta">
          <span>标签：${escapeHtml(relationship.tag)}</span>
          <span>倾向：${escapeHtml(relationship.tendency)}</span>
        </div>
        <p class="social-schedule-card__memory">${memory ? `<strong>${escapeHtml(memory.title)}</strong>：${escapeHtml(memory.summary)}` : "暂无共同记忆，可通过本季互动建立新的日常记录。"}</p>
        <div class="social-schedule-actions">${actions}</div>
      </article>
    `;
  }).join("");
}

function renderConsoleLogFocus() {
  if (!state.log.length) {
    return `<p class="note">暂无事件记录。</p>`;
  }

  return `
    <ol class="console-focus-list">
      ${state.log.map((item, index) => `<li class="console-log-line"><strong>LOG-${String(index + 1).padStart(2, "0")}</strong>${escapeHtml(item)}</li>`).join("")}
    </ol>
  `;
}

function renderConsoleSystemFocus() {
  return `
    <div class="console-focus-grid">
      <article class="console-focus-card">
        <p class="eyebrow">Mission Tracker</p>
        <h3>阶段目标与人生路线已移入档案弹窗</h3>
        <p class="note">主屏仅保留当前季度行动与最近结果；完整档案、地图、人际、日志与存档入口由顶部功能按钮打开。</p>
      </article>
      <article class="console-focus-card">
        <p class="eyebrow">System</p>
        <ul class="console-focus-list">
          <li><strong>行动点</strong>${state.deceased ? "人生已归档" : `${state.actionPoints}/5 可用`}</li>
          <li><strong>季度</strong>${escapeHtml(state.age)} 岁第 ${escapeHtml(state.quarter)} 季</li>
          <li><strong>终端模式</strong>一屏主控台 / 面板内滚动</li>
        </ul>
      </article>
    </div>
  `;
}

function renderConsoleFocusPanel() {
  if (!elements.consoleFocusBody) {
    return;
  }

  const viewConfig = {
    quarter: ["Quarter Focus", "本季提示", renderConsoleQuarterFocus],
    archive: ["Archive Focus", "档案焦点", renderConsoleArchiveFocus],
    map: ["Map Focus", "地图详情", renderConsoleMapFocus],
    relationships: ["Relationship Focus", "人际详情", renderConsoleRelationshipFocus],
    log: ["Log Focus", "日志详情", renderConsoleLogFocus],
    system: ["System Focus", "系统焦点", renderConsoleSystemFocus]
  };
  const [kicker, title, renderer] = viewConfig[activeConsoleView] || viewConfig.quarter;
  elements.consoleFocusKicker.textContent = kicker;
  elements.consoleFocusTitle.textContent = title;
  elements.consoleFocusBody.innerHTML = renderer();
  updateConsoleViewButtons();
}

function renderLog() {
  elements.eventLog.innerHTML = state.log.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
  if (elements.mainLogHint) {
    elements.mainLogHint.textContent = state.log[0] ? `最近记录：${state.log[0]}` : "暂无事件记录。";
  }
}

function renderSummary() {
  const summaryByOrigin = {
    inherited: "继承摘要：父母职业、A/B/O 倾向与七项属性范围由该出身生成；初始属性 = 父母属性平均值 × A/B/O 遗传系数 + 父母 A/B/O 类型加成 + 小幅随机波动。",
    "orphan-family": "继承摘要：该出身不生成父母，属性采用孤儿固定随机基线。",
    "orphan-nonreproductive": "继承摘要：父母候选组合属于 A+A 或 O+O，不可自然生育，系统改用孤儿固定随机基线。"
  };
  const summary = summaryByOrigin[state.origin] || "等待生成新档案。";
  const archivedNote = state.deceased ? ` 当前人生已归档，终局年龄 ${state.age} 岁，生命上限 ${state.deathAge} 岁。` : "";
  elements.heritageSummary.textContent = state.familyStory ? `${state.familyStory} ${summary}${archivedNote}` : `${summary}${archivedNote}`;
}

function renderCanonCard(section, compact = false, pointLimit = section.points.length) {
  const points = section.points.slice(0, pointLimit);
  const pointItems = points.map((point) => `<li>${point}</li>`).join("");
  return `
    <article class="canon-card${compact ? " canon-card--compact" : ""}" data-canon-id="${section.id}">
      <p class="eyebrow">${section.kicker}</p>
      <h3>${section.title}</h3>
      <p class="canon-card__summary">${section.summary}</p>
      <ul class="canon-card__points">
        ${pointItems}
      </ul>
    </article>
  `;
}

function renderIntroCanonSegment() {
  const section = ABO_CANON[introCanonIndex];
  elements.introCanonList.innerHTML = renderCanonCard(section, true, 2);
  elements.introPrevButton.disabled = introCanonIndex === 0;
  elements.introNextButton.textContent = introCanonIndex === ABO_CANON.length - 1 ? "开始星际人生" : "下一段";
}

function render() {
  elements.archiveId.textContent = state.deceased && state.archiveId ? `${state.archiveId} · 已归档` : state.archiveId;
  elements.ageDisplay.textContent = `${state.age} 岁`;
  elements.quarterActionDisplay.textContent = state.deceased
    ? `第 ${state.quarter} 季 / 已归档（上限 ${state.deathAge} 岁）`
    : `第 ${state.quarter} 季 / ${state.actionPoints} 点`;
  elements.firstGender.textContent = state.firstGender;
  elements.secondGender.textContent = state.secondGender;
  elements.familyTag.textContent = state.familyTag;
  elements.endQuarterButton.disabled = !state.archiveId || state.deceased;
  renderSummary();
  renderAttributes();
  renderActionPointDots();
  renderActions();
  renderLifeGoals();
  renderLifePaths();
  renderParents();
  renderRelationships();
  renderSocialSchedulePanel();
  if (elements.mapActionDialog?.open || elements.mapActionDialog?.hasAttribute("open")) {
    renderMapActionDialog();
  }
  renderLog();
  renderConsoleFocusPanel();
  renderAuthInterface();
}

elements.newLifeButton.addEventListener("click", generateNewLife);
elements.openLocalServerButton?.addEventListener("click", openLocalServerVersion);
elements.accountQuickButton?.addEventListener("click", () => openFeatureModal("system"));
elements.titleSystemButton?.addEventListener("click", () => {
  closeTitleDialog();
  openFeatureModal("system");
});
elements.titleNewLifeButton?.addEventListener("click", () => {
  generateNewLife();
  closeTitleDialog();
});
elements.titleContinueButton?.addEventListener("click", closeTitleDialog);
elements.exitGameButton?.addEventListener("click", openExitSaveDialog);
elements.exitCancelButton?.addEventListener("click", closeExitSaveDialog);
elements.exitWithoutSaveButton?.addEventListener("click", handleExitWithoutSave);
elements.exitSaveAndLeaveButton?.addEventListener("click", handleExitSaveAndLeave);
elements.recentAccountList?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-recent-account-username]");
  if (button) {
    fillLoginFromRecentAccount(button.dataset.recentAccountUsername);
  }
});
elements.registerForm?.addEventListener("submit", handleRegisterFormSubmit);
elements.loginForm?.addEventListener("submit", handleLoginFormSubmit);
elements.refreshCloudSlotsButton?.addEventListener("click", handleRefreshCloudSlots);
elements.logoutButton?.addEventListener("click", handleLogout);
elements.adminRefreshButton?.addEventListener("click", handleAdminRefresh);
elements.saveSlotList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-save-slot]");
  if (button) {
    selectSaveSlot(button.dataset.saveSlot);
  }
});
elements.saveLifeButton.addEventListener("click", saveCurrentLife);
elements.loadLifeButton.addEventListener("click", loadSavedLife);
elements.endQuarterButton.addEventListener("click", () => advanceQuarter());
elements.consoleNav?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-console-view]");
  if (!button) {
    return;
  }
  openFeatureModal(button.dataset.consoleView);
});
elements.consoleFocusPanel?.addEventListener("click", (event) => {
  const viewButton = event.target.closest("[data-console-view]");
  if (viewButton) {
    openFeatureModal(viewButton.dataset.consoleView);
    return;
  }

  const locationButton = event.target.closest("[data-console-map-location]");
  if (locationButton) {
    selectedMapLocationId = locationButton.dataset.consoleMapLocation;
    activeConsoleView = "map";
    renderConsoleFocusPanel();
    return;
  }

  const actionButton = event.target.closest("[data-map-action]");
  if (actionButton) {
    performMapAction(actionButton.dataset.mapAction);
    return;
  }

  const mapEventButton = event.target.closest("[data-map-event-id][data-map-event-choice][data-map-location-id]");
  if (mapEventButton) {
    performMapLocationEvent(
      mapEventButton.dataset.mapLocationId,
      mapEventButton.dataset.mapEventId,
      mapEventButton.dataset.mapEventChoice,
      mapEventButton.dataset.mapEventKind
    );
    return;
  }

  const mapSocialButton = event.target.closest("[data-map-social-npc-id][data-map-social-interaction]");
  if (mapSocialButton) {
    performMapSocialInteraction(mapSocialButton.dataset.mapSocialNpcId, mapSocialButton.dataset.mapSocialInteraction);
    return;
  }

  const socialButton = event.target.closest("[data-social-npc-id][data-social-interaction]");
  if (socialButton) {
    performSocialInteraction(socialButton.dataset.socialNpcId, socialButton.dataset.socialInteraction);
  }
});
elements.consoleMapQuickList?.addEventListener("click", (event) => {
  const locationButton = event.target.closest("[data-console-map-location]");
  if (!locationButton) {
    return;
  }

  selectedMapLocationId = locationButton.dataset.consoleMapLocation;
  activeConsoleView = "map";
  renderConsoleFocusPanel();
});
document.querySelectorAll(".feature-dialog").forEach((dialog) => {
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
      closeFeatureModal(dialog);
      return;
    }

    const closeButton = event.target.closest("[data-feature-close]");
    if (closeButton) {
      closeFeatureModal(dialog);
    }
  });
  dialog.addEventListener("cancel", (event) => {
    event.preventDefault();
    closeFeatureModal(dialog);
  });
});
elements.timeSummaryClose.addEventListener("click", closeTimeSummaryDialog);
elements.timeSummaryDialog.addEventListener("click", (event) => {
  if (event.target === elements.timeSummaryDialog) {
    closeTimeSummaryDialog();
  }
});
elements.timeSummaryDialog.addEventListener("cancel", (event) => {
  event.preventDefault();
  closeTimeSummaryDialog();
});
elements.titleDialog?.addEventListener("click", (event) => {
  if (event.target === elements.titleDialog) {
    closeTitleDialog();
  }
});
elements.titleDialog?.addEventListener("cancel", (event) => {
  event.preventDefault();
  closeTitleDialog();
});
elements.exitSaveDialog?.addEventListener("click", (event) => {
  if (event.target === elements.exitSaveDialog) {
    closeExitSaveDialog();
  }
});
elements.exitSaveDialog?.addEventListener("cancel", (event) => {
  event.preventDefault();
  closeExitSaveDialog();
});
elements.openMapActionButton?.addEventListener("click", openMapActionDialog);
elements.mapActionDialogClose.addEventListener("click", closeMapActionDialog);
elements.mapActionDialog.addEventListener("click", (event) => {
  if (event.target === elements.mapActionDialog) {
    closeMapActionDialog();
    return;
  }

  const locationButton = event.target.closest("[data-map-location]");
  if (locationButton) {
    selectedMapLocationId = locationButton.dataset.mapLocation;
    activeConsoleView = "map";
    renderMapActionDialog();
    renderConsoleFocusPanel();
    return;
  }

  const actionButton = event.target.closest("[data-map-action]");
  if (actionButton) {
    closeMapActionDialog();
    performMapAction(actionButton.dataset.mapAction);
    return;
  }

  const mapEventButton = event.target.closest("[data-map-event-id][data-map-event-choice][data-map-location-id]");
  if (mapEventButton) {
    closeMapActionDialog();
    performMapLocationEvent(
      mapEventButton.dataset.mapLocationId,
      mapEventButton.dataset.mapEventId,
      mapEventButton.dataset.mapEventChoice,
      mapEventButton.dataset.mapEventKind
    );
    return;
  }

  const socialButton = event.target.closest("[data-map-social-npc-id][data-map-social-interaction]");
  if (socialButton) {
    closeMapActionDialog();
    performMapSocialInteraction(socialButton.dataset.mapSocialNpcId, socialButton.dataset.mapSocialInteraction);
  }
});
elements.mapActionDialog.addEventListener("cancel", (event) => {
  event.preventDefault();
  closeMapActionDialog();
});
elements.openParentArchiveButton.addEventListener("click", openParentArchiveDialog);
elements.parentArchiveDialogClose.addEventListener("click", closeParentArchiveDialog);
elements.parentArchiveDialog.addEventListener("click", (event) => {
  if (event.target === elements.parentArchiveDialog) {
    closeParentArchiveDialog();
  }
});
elements.parentArchiveDialog.addEventListener("cancel", (event) => {
  event.preventDefault();
  closeParentArchiveDialog();
});
elements.openRelationshipButton?.addEventListener("click", openRelationshipDialog);
elements.relationshipDialogClose.addEventListener("click", closeRelationshipDialog);
elements.relationshipDialog.addEventListener("click", (event) => {
  if (event.target === elements.relationshipDialog) {
    closeRelationshipDialog();
  }
});
elements.relationshipDialog.addEventListener("cancel", (event) => {
  event.preventDefault();
  closeRelationshipDialog();
});
elements.socialScheduleList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-social-npc-id][data-social-interaction]");
  if (button) {
    closeRelationshipDialog();
    performSocialInteraction(button.dataset.socialNpcId, button.dataset.socialInteraction);
  }
});
elements.randomNpcChoices.addEventListener("click", (event) => {
  const button = event.target.closest("[data-random-npc-choice]");
  if (button) {
    chooseRandomNpcEncounterChoice(button.dataset.randomNpcChoice);
  }
});
elements.randomNpcDialog.addEventListener("click", (event) => {
  if (event.target === elements.randomNpcDialog) {
    event.preventDefault();
  }
});
elements.randomNpcDialog.addEventListener("cancel", (event) => {
  event.preventDefault();
});
elements.relationshipStageEventChoices.addEventListener("click", (event) => {
  const button = event.target.closest("[data-relationship-stage-choice]");
  if (button) {
    chooseRelationshipStageEventChoice(button.dataset.relationshipStageChoice);
  }
});
elements.relationshipStageEventDialog.addEventListener("click", (event) => {
  if (event.target === elements.relationshipStageEventDialog) {
    event.preventDefault();
  }
});
elements.relationshipStageEventDialog.addEventListener("cancel", (event) => {
  event.preventDefault();
});
elements.proactiveNpcEventChoices.addEventListener("click", (event) => {
  const button = event.target.closest("[data-proactive-npc-choice]");
  if (button) {
    chooseProactiveNpcEventChoice(button.dataset.proactiveNpcChoice);
  }
});
elements.proactiveNpcEventDialog.addEventListener("click", (event) => {
  if (event.target === elements.proactiveNpcEventDialog) {
    event.preventDefault();
  }
});
elements.proactiveNpcEventDialog.addEventListener("cancel", (event) => {
  event.preventDefault();
});
elements.narrativeDiceChoices.addEventListener("click", (event) => {
  const button = event.target.closest("[data-narrative-dice-choice]");
  if (button) {
    chooseNarrativeDiceEventChoice(button.dataset.narrativeDiceChoice);
  }
});
elements.narrativeDiceDialog.addEventListener("click", (event) => {
  if (event.target === elements.narrativeDiceDialog) {
    event.preventDefault();
  }
});
elements.narrativeDiceDialog.addEventListener("cancel", (event) => {
  event.preventDefault();
});
elements.lifeGoalStoryChoices.addEventListener("click", (event) => {
  const button = event.target.closest("[data-life-goal-story-choice]");
  if (button) {
    chooseLifeGoalStoryChoice(button.dataset.lifeGoalStoryChoice);
  }
});
elements.lifeGoalStoryDialog.addEventListener("click", (event) => {
  if (event.target === elements.lifeGoalStoryDialog) {
    event.preventDefault();
  }
});
elements.lifeGoalStoryDialog.addEventListener("cancel", (event) => {
  event.preventDefault();
});
elements.introPrevButton.addEventListener("click", showPreviousIntroCanonSegment);
elements.introNextButton.addEventListener("click", showNextIntroCanonSegment);
elements.introSkipButton.addEventListener("click", closeIntroDialog);
elements.introDialog.addEventListener("click", (event) => {
  if (event.target === elements.introDialog) {
    closeIntroDialog();
  }
});
elements.ageStoryChoices.addEventListener("click", (event) => {
  const button = event.target.closest("[data-age-story-choice]");
  if (button) {
    chooseAgeStory(button.dataset.ageStoryChoice);
  }
});
elements.ageStoryDialog.addEventListener("cancel", (event) => {
  event.preventDefault();
});
elements.quarterStoryChoices.addEventListener("click", (event) => {
  const button = event.target.closest("[data-quarter-story-choice]");
  if (button) {
    chooseQuarterStory(button.dataset.quarterStoryChoice);
  }
});
elements.quarterStoryDialog.addEventListener("click", (event) => {
  if (event.target === elements.quarterStoryDialog) {
    event.preventDefault();
  }
});
elements.quarterStoryDialog.addEventListener("cancel", (event) => {
  event.preventDefault();
});
elements.specialActionChoices.addEventListener("click", (event) => {
  const button = event.target.closest("[data-special-action-choice]");
  if (button) {
    chooseSpecialActionChoice(button.dataset.specialActionChoice);
  }
});
elements.specialActionDialog.addEventListener("click", (event) => {
  if (event.target === elements.specialActionDialog) {
    event.preventDefault();
  }
});
elements.specialActionDialog.addEventListener("cancel", (event) => {
  event.preventDefault();
});
elements.attributeThresholdStoryChoices.addEventListener("click", (event) => {
  const button = event.target.closest("[data-attribute-threshold-choice]");
  if (button) {
    chooseAttributeThresholdStoryChoice(button.dataset.attributeThresholdChoice);
  }
});
elements.attributeThresholdStoryDialog.addEventListener("click", (event) => {
  if (event.target === elements.attributeThresholdStoryDialog) {
    event.preventDefault();
  }
});
elements.attributeThresholdStoryDialog.addEventListener("cancel", (event) => {
  event.preventDefault();
});
elements.differentiationDialogClose.addEventListener("click", closeDifferentiationDialog);
elements.differentiationDialog.addEventListener("click", (event) => {
  if (event.target === elements.differentiationDialog) {
    closeDifferentiationDialog();
  }
});
elements.differentiationDialog.addEventListener("cancel", (event) => {
  event.preventDefault();
  closeDifferentiationDialog();
});
elements.postDifferentiationStoryClose.addEventListener("click", closePostDifferentiationStoryDialog);
elements.postDifferentiationStoryDialog.addEventListener("click", (event) => {
  if (event.target === elements.postDifferentiationStoryDialog) {
    event.preventDefault();
  }
});
elements.postDifferentiationStoryDialog.addEventListener("cancel", (event) => {
  event.preventDefault();
});
elements.actionList.addEventListener("click", (event) => {
  const mapButton = event.target.closest("[data-open-map-action]");
  if (mapButton) {
    openMapActionDialog();
    return;
  }

  const relationshipButton = event.target.closest("[data-open-relationship-action]");
  if (relationshipButton) {
    openRelationshipDialog();
    return;
  }

  const specialButton = event.target.closest("[data-special-action]");
  if (specialButton) {
    startSpecialAction();
    return;
  }

  const button = event.target.closest("[data-action]");
  if (button) {
    performAction(button.dataset.action);
  }
});

async function bootstrapApplication() {
  generateNewLife();
  renderSaveSlotSummaries();
  await refreshAuthState();
  presentStartupExperience();
}

window.addEventListener("beforeunload", handleBeforeUnload);
window.addEventListener("pagehide", handlePageHide);

bootstrapApplication();
