export type ZodiacSignId =
  | 'aries'
  | 'taurus'
  | 'gemini'
  | 'cancer'
  | 'leo'
  | 'virgo'
  | 'libra'
  | 'scorpio'
  | 'sagittarius'
  | 'capricorn'
  | 'aquarius'
  | 'pisces';

export interface ZodiacInfo {
  id: ZodiacSignId;
  name: string; // 中文名
  symbol: string; // Unicode 符号，如 ♈︎
  dateRange: string; // 日期范围
  element: '火象' | '土象' | '风象' | '水象';
  ruler: string; // 守护星
  traits: string[]; // 性格标签
  color: string; // 代表色（十六进制）
  luckyNumber?: number; // 可选
}

export const ZODIAC_LIST: ZodiacInfo[] = [
  {
    id: 'aries',
    name: '白羊座',
    symbol: '♈︎',
    dateRange: '3月21日 - 4月19日',
    element: '火象',
    ruler: '火星',
    traits: ['热情', '直接', '行动力', '领导力'],
    color: '#FF6B6B',
    luckyNumber: 1,
  },
  {
    id: 'taurus',
    name: '金牛座',
    symbol: '♉︎',
    dateRange: '4月20日 - 5月20日',
    element: '土象',
    ruler: '金星',
    traits: ['稳重', '务实', '耐心', '享受'],
    color: '#8EC07C',
    luckyNumber: 6,
  },
  {
    id: 'gemini',
    name: '双子座',
    symbol: '♊︎',
    dateRange: '5月21日 - 6月21日',
    element: '风象',
    ruler: '水星',
    traits: ['机敏', '多变', '好奇', '善沟通'],
    color: '#6EC5FF',
    luckyNumber: 5,
  },
  {
    id: 'cancer',
    name: '巨蟹座',
    symbol: '♋︎',
    dateRange: '6月22日 - 7月22日',
    element: '水象',
    ruler: '月亮',
    traits: ['温柔', '顾家', '敏感', '保护欲'],
    color: '#7AA2E3',
    luckyNumber: 2,
  },
  {
    id: 'leo',
    name: '狮子座',
    symbol: '♌︎',
    dateRange: '7月23日 - 8月22日',
    element: '火象',
    ruler: '太阳',
    traits: ['自信', '慷慨', '表现力', '领导欲'],
    color: '#FFA94D',
    luckyNumber: 3,
  },
  {
    id: 'virgo',
    name: '处女座',
    symbol: '♍︎',
    dateRange: '8月23日 - 9月22日',
    element: '土象',
    ruler: '水星',
    traits: ['细致', '理性', '有序', '洁癖倾向'],
    color: '#9CCC65',
    luckyNumber: 7,
  },
  {
    id: 'libra',
    name: '天秤座',
    symbol: '♎︎',
    dateRange: '9月23日 - 10月23日',
    element: '风象',
    ruler: '金星',
    traits: ['平衡', '审美', '圆融', '社交'],
    color: '#64B5F6',
    luckyNumber: 8,
  },
  {
    id: 'scorpio',
    name: '天蝎座',
    symbol: '♏︎',
    dateRange: '10月24日 - 11月22日',
    element: '水象',
    ruler: '冥王星（传统：火星）',
    traits: ['深沉', '洞察', '强烈', '神秘'],
    color: '#9575CD',
    luckyNumber: 9,
  },
  {
    id: 'sagittarius',
    name: '射手座',
    symbol: '♐︎',
    dateRange: '11月23日 - 12月21日',
    element: '火象',
    ruler: '木星',
    traits: ['乐观', '自由', '直率', '冒险'],
    color: '#FFD166',
    luckyNumber: 4,
  },
  {
    id: 'capricorn',
    name: '摩羯座',
    symbol: '♑︎',
    dateRange: '12月22日 - 1月19日',
    element: '土象',
    ruler: '土星',
    traits: ['自律', '现实', '责任感', '目标导向'],
    color: '#A1887F',
    luckyNumber: 8,
  },
  {
    id: 'aquarius',
    name: '水瓶座',
    symbol: '♒︎',
    dateRange: '1月20日 - 2月18日',
    element: '风象',
    ruler: '天王星（传统：土星）',
    traits: ['独立', '人道', '创新', '理想'],
    color: '#4DD0E1',
    luckyNumber: 11,
  },
  {
    id: 'pisces',
    name: '双鱼座',
    symbol: '♓︎',
    dateRange: '2月19日 - 3月20日',
    element: '水象',
    ruler: '海王星（传统：木星）',
    traits: ['浪漫', '共情', '想象力', '温柔'],
    color: '#81D4FA',
    luckyNumber: 9,
  },
];

export const ZODIAC_BY_ID: Record<ZodiacSignId, ZodiacInfo> = ZODIAC_LIST.reduce(
  (acc, item) => {
    acc[item.id] = item;
    return acc;
  },
  {} as Record<ZodiacSignId, ZodiacInfo>
);


