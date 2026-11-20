/* ==========================================================================
   生日快乐 · 交互式祝福网站脚本
   --------------------------------------------------------------------------
   ★ 所有文案、日期、名字都集中在下面的 CONFIG 里，改这里就够了 ★
   其余代码不需要动。
   ========================================================================== */

/* ============================================================================
   1. 配置区（可替换内容全部在这里）
   ========================================================================== */
const CONFIG = {

  /* —— 基本信息 —— */
  name: '小卢同学',              // ← 寿星名字（可替换：以下所有"小卢同学"都改这里即可）
  birthdayText: '2026年11月21日', // ← 结尾页日期显示（可替换）
  // 轻量日期（用于印章、Hero 折叠卡等小地方），保留"11月21日"即可
  birthdayShortText: '11月21日',  // ← 可替换
  birthdayMonth: 11,             // ← 生日月份（用于倒计时，1-12）
  birthdayDay: 21,               // ← 生日日期
  showCountdown: true,           // ← 是否显示「距离生日还有几天」，不想看改成 false

  /* —— 开场页 —— */
  intro: {
    kicker: '✦ 一份小心意 ✦',
    title: '有一份生日惊喜等你拆开',
    hint: '轻点礼物盒，开启今天的惊喜',
  },

  /* —— 主祝福页 —— */
  hero: {
    eyebrow: 'HAPPY BIRTHDAY',
    title: '小卢同学，生日快乐',  // ← 主标题（可替换）
    // 打字机逐字显示的核心祝福语（\n 会换行，可替换）
    blessing: '小卢同学，生日快乐呀。\n' +
      '愿你新的一岁，烦恼自动静音，快乐随时满格；想吃就吃，想笑就笑，想去的地方都能出发。' +
      '作为朋友，我会继续在你需要的时候出现，听你吐槽，也陪你庆祝每一个小开心。',
    exploreBtn: '继续探索 ↓',
    skipBtn: '显示全文',
  },

  /* —— 蛋糕区 —— */
  cake: {
    title: '许个愿吧',
    hint: '闭上眼睛许个愿，然后点击蜡烛吹灭它',
    // 吹灭蜡烛后的专属祝福
    wishDone: '愿望已经收到啦，接下来要天天开心。',
    relightBtn: '重新点燃蜡烛',
  },

  /* —— 生日回顾 · 隔空同享（两张蛋糕拍立得）—— */
  share: {
    title: '生日回顾·隔空同享',
    sub: '虽然没能吃到彼此的蛋糕，但祝福早已跨越距离',
    tip: '虽然没能分享同一块蛋糕，但我们的快乐是相通的。点一点照片，许个愿吧 🍰',
    // 第一次点击蛋糕照片时，屏幕中央飘出的那行字
    firstTapText: '把我的心意，隔空传递给你 ✦',
    hersLabel: '你的蛋糕',       // cake_hers.jpg 下方的说明
    mineLabel: '我的蛋糕',       // cake_mine.jpg 下方的说明
    hersEmoji: '🍰',            // 点击「你的蛋糕」飘出的 emoji
    mineEmoji: '🍴',            // 点击「我的蛋糕」飘出的 emoji
    // 板块底部实物礼物照片下方的一句（图片淡入时一起出现）
    surpriseText: '看，这是我为你摆的生日快乐，嘻嘻 ✦',
  },

  /* —— 回忆手账卡片（5 张）—— */
  memories: {
    title: '我们的时光手账',
    sub: '随手记下的几页，都是真的',
    // v3：卡片可放本机照片（仅存这台设备，不上传）
    enablePhotos: true,
    photoTip: '照片仅保存在这台设备 ✦',
    photoAdd: '放入照片',
    photoChange: '更换',
    photoRemove: '移除',
    photoTooBig: '照片太大，已跳过',
    cards: [
      {
        emoji: '😴',
        tag: '第 1 页',
        title: '睡不够同盟',
        text: '说好一起早睡，计划很完美，执行很随缘，第二天一起犯困，谁也别嫌弃谁。',
      },
      {
        emoji: '😤',
        tag: '第 2 页',
        title: '生气也可爱',
        text: '别人生气是可怕，你生气是可爱。气鼓鼓的，但保质期很短，哄一下就好。',
      },
      {
        emoji: '📚',
        tag: '第 3 页',
        title: '备考路上的互相打气',
        text: '考研升本，互相鼓励。你一句"考研加油"，我一句"升本加油"，比任何鸡汤都管用。',
      },
      {
        emoji: '💬',
        tag: '第 4 页',
        title: '日常吐槽小分队',
        text: '互相吐槽是日常，互相撑腰是默契。好朋友就是嘴上不饶人，心里都记得。',
      },
      {
        emoji: '✨',
        tag: '第 5 页',
        title: '小开心收藏夹',
        text: '真诚的小作文、好看的 keep 奖牌、顺手的拍立得——你随口说的小事，我都悄悄记得。',
      },
    ],
  },

  /* —— 心愿星星（5 颗）—— */
  stars: {
    title: '摘下五颗心愿星',
    sub: '每点一颗，都有一句想对你说的话',
    // 每颗星星的祝福语
    wishes: [
      '第一颗：愿你今晚睡个好觉，明早自然醒。',
      '第二颗：愿想吃的东西都好吃，烦恼都靠边站。',
      '第三颗：愿你的努力，都能等到回响。',
      '第四颗：愿快乐随时满格，信号永远不断。',
      '第五颗：愿新的一岁，想去的地方都能出发。',
    ],
    // 位置：x / y 都是散布区的百分比，改成喜欢的排布即可
    positions: [
      { x: 15, y: 28 }, { x: 38, y: 66 }, { x: 58, y: 24 },
      { x: 82, y: 54 }, { x: 50, y: 86 },
    ],
    // 集齐 5 颗后的彩蛋
    secret: {
      text: '五颗星都替你收好啦。新的一岁尽管往前走，累了随时回头——朋友一直都在。',
    },
  },

  /* —— 留言板 —— */
  book: {
    title: '写一句给小卢同学的话',                       // ← 可替换
    sub: '会存在这台设备上，刷新也不会丢',
    placeholder: '写下一句想对小卢同学说的话…',         // ← 可替换
    submitBtn: '贴上去',
    // ★ 默认示例祝福（首次访问会写入 localStorage）。
    //   已有旧留言时，会保留旧留言并把新示例追加到末尾，不会丢数据。
    //   想全部重置为示例，可以手动清掉浏览器 localStorage 中
    //   "birthday_guestbook_v1" 这一项。
    samples: [
      { text: '愿你今年想去的地方，都能去成。', by: '小王同学' },
      { text: '朋友记得按时吃饭，别老熬夜——虽然我也不敢说自己做到了。', by: '小王同学' },
      { text: '生日快乐！新的一岁继续一起吐槽、继续一起加油。', by: '小王同学' },
    ],
  },

  /* —— 结尾页 —— */
  ending: {
    kicker: '✦ 11.21 ✦',
    title: '生日快乐',
    // ★ 落款署名（结尾页底部"—— 小王同学 ——"）。这是写信人。
    //   印章里的"小卢同学 · 收"是收件人印章，不要写到这里，避免混淆。
    //   想改署名只改这一行，印章文案请改 V2.stampText。
    sign: '小王同学',            // ← 落款署名（替换成你的名字）
    againFwBtn: '再放一次烟花',
    copyBtn: '复制祝福链接',
    tip: '（悄悄说：长按上面的「生日快乐」试试）',
    // 长按标题 2 秒出现的额外祝福
    longPressEgg: '还有一句：谢谢你一直愿意听我碎碎念。新的一岁，继续一起走。',
    // ★★ 终极彩蛋「一封小信」★★
    //   触发方式：在结尾页停留 30 秒后，「回到开头 ↑」旁边会悄悄浮现「💌 还有一封小信」
    //   正文里的 \n\n 表示分段（每段会自动排成一个自然段，首行缩进两字）
    secretLetter:
      '嘿，小卢同学，生日快乐呀！\n\n' +
      '看着网页里我们没能分享的蛋糕，还有我为你摆的图案，其实觉得挺奇妙的。虽然隔着距离，但这份心意还是借着代码跑到你面前了。\n\n' +
      '回想起来，从认识到现在，我们相遇的时间一直在默默累积。能在这个过程里，作为一个朋友参与你的生活，见证你又一岁的长大，是一件特别开心也很珍贵的事。\n\n' +
      '虽然今天不能当面递给你礼物，但希望这个网页能给你带来一点惊喜和快乐。未来的日子还很长，希望我们能一直做很好的朋友。\n\n' +
      '期待下一个生日，不管是隔着屏幕还是能当面，我们都能继续分享快乐，也能遇到更好的自己。\n\n' +
      '生日快乐，祝万事顺意！',
    // 信笺抬头（居中显示）
    secretLetterTitle: '给小卢同学的一封信',
    // 信笺右下角的落款与日期
    secretLetterSign: '小王同学',
    secretLetterDate: '2026年11月21日',
    // 「一封小信」按钮在结尾页停留多久后浮现（毫秒，默认 30 秒）
    secretLetterDelayMs: 30000,
    footer: 'Made with ✦ 一份认真准备的心意',
  },

  /* —— 音乐 —— */
  music: {
    // 把音频文件命名为 music.mp3 放到本目录，就会自动使用它；
    // 没有这个文件时，程序会自动用 Web Audio 生成一段轻柔八音盒（见 startSynthMusic）
    file: 'music.mp3',
    volume: 0.5,
    autoStart: true,             // ← 拆完礼物是否自动开始播放（false = 手动点右上角按钮）
  },

  /* —— 粒子密度（移动端会自动减半，无需改）—— */
  particles: { stars: 90, petals: 26 },

  /* ==========================================================================
     v3 新增功能开关与文案（改这里即可，不用翻下面的代码）
     ========================================================================== */

  /* —— 进度存档 + 欢迎回来 —— */
  enableProgress: true,
  progressTexts: {
    welcome: '欢迎回来，你上次看到第 {n} 章',
    continue: '继续',
    welcomeAfterMs: 300000,            // 距上次访问超过 5 分钟才提示「欢迎回来」
    restartConfirm: '要重新开始吗？\n\n只清除浏览进度（点亮过的星星、吹过的蜡烛），\n你写的愿望和留言都会保留。',
    restartDone: '已重新开始 ✦ 旅程从头出发',
    restartBtn: '重新开始',
  },

  /* —— 弹幕祝福墙 —— */
  danmaku: {
    enable: true,
    title: '弹幕祝福墙',
    colors: ['#F6AEBE', '#EBCB90', '#A9C6F5', '#C9B6EE', '#9BD8C4', '#FFB37E'],
    speeds: { slow: 18, mid: 11, fast: 6.5 },   // 单位：秒（横穿全屏用时）
    laneHeight: 44,
    maxOnScreen: 26,
    labels: {
      danmaku: '弹幕', list: '列表',
      pause: '暂停', resume: '继续',
      slow: '慢', mid: '中', fast: '快',
      pinned: '置顶', unpin: '取消置顶',
      clickTip: '点击弹幕可暂停查看 · 长按可置顶',
      reducedOff: '已开启减少动效，弹幕视图不可用',
    },
  },

  /* —— 倒计时档位文案（按剩余天数从大到小依次匹配）—— */
  countdownTiers: [
    { min: 31, text: '还有一阵子，先攒着期待 ✦', cls: 'tier-far' },
    { min: 8,  text: '越来越近了，可以开始想吃什么了 ✦', cls: 'tier-mid' },
    { min: 1,  text: '快了快了！礼物和蛋糕都已就位 ✦', cls: 'tier-soon' },
    { min: 0,  text: '就是今天！生日快乐！✦', cls: 'tier-today' },
  ],
  birthdayCelebration: {
    title: '生日快乐',
    sub: '今天的小寿星，全天候开心',
    storageKey: 'birthday_celebrated_v1',
  },

  /* —— 海报 —— */
  poster: {
    storageKey: 'birthday_poster_v1',
    templates: ['樱花粉', '星空夜', '奶油简'],   // 模板名（顺序即切换顺序）
    defaultBlessing: '',                        // 留空则自动取 hero.blessing 首行
    downloadBtn: '下载海报',
    blessLabel: '海报祝福语',
    photoLabel: '用一张回忆照片',
    usePhoto: '使用第 1 张照片',
  },

  /* —— 彩蛋合集 —— */
  enableEasterEggs: true,
  eggs: {
    konamiText: '✦ 开发者祝福 ✦\n感谢你翻到了这里。愿写这段代码的人和你，都被世界温柔以待。',
    sugarText: '哗啦～撒了一把糖 ✦',
    shakeText: '收到你的摇一摇！彩带已发射 🎉',
    cooldownMs: 3000,
  },
}; const V2 = {
  introSub: '今天的主角是小卢同学',                // ← 可替换
  shakeHint: '再摇一摇 ✨',
  heroFoldTitle: '今天的小卢同学',                 // ← 可替换
  heroFoldItems: [
    { k: '生日',     v: '2026年11月21日' },         // ← 日期可替换
    { k: '星座',     v: '天蝎座 ♏' },
    { k: '今日标签', v: '被惦记的小寿星' },
  ],
  // ★ 印章文案 = 「收件人印章」。这是小王同学写给小卢同学的祝福，
  //   所以印章显示"小卢同学 · 收"，表示「她收下这份祝福」。
  //   「小王同学」是写信人，只出现在结尾页落款（CONFIG.ending.sign），
  //   不要混到这里。改收件人只改这一行。
  stampText: '小卢同学 · 收',                       // ← 收件人印章（可替换）
  candleWords: ['愿烦恼都被风吹走','愿想去的地方都能出发','愿快乐随时满格'],
  stickerReplies: ['收到！✦','哈哈，贴起来！','我就知道。','记下啦 ✧'],
  messageStickers: ['🌸','⭐','🎀','🍰','✨'],
  shareText: '今天是小卢同学的生日，这封祝福送给你：愿你新的一岁，烦恼自动静音、快乐随时满格。',  // ← 可替换
  posterSub: '2026年11月21日 · 一封祝福',           // ← 可替换
  skipConfirmText: '确定要直接进入祝福页吗？',
  skipConfirmYes: '进入',
  skipConfirmNo: '再等等',
  guideText: '点这里拆礼物 ✦',
  guideStorageKey: 'birthday_v2_guided_v1',
  bubbleTexts: ['生日快乐 🎂','想见你','一起吃蛋糕吧','记得许愿哦'],
};

/* ============================================================================
   1.5 存储安全层
   localStorage 不可用（隐私模式 / 配额异常）时自动降级为内存存储。
   放在这里是因为 boot() 可能在脚本解析过程中就同步执行，必须早于它可用。
   ========================================================================== */
const Store = (() => {
  const mem = {};
  let ok = false;
  try {
    localStorage.setItem('__birthday_probe__', '1');
    localStorage.removeItem('__birthday_probe__');
    ok = true;
  } catch (e) { ok = false; }
  return {
    ok,                                   // true = 数据真正持久化
    get(k) {
      if (ok) { try { return localStorage.getItem(k); } catch (e) {} }
      return (k in mem) ? mem[k] : null;
    },
    set(k, v) {
      if (ok) {
        try { localStorage.setItem(k, v); return true; } catch (e) {}
      }
      mem[k] = v;                         // 降级：本次会话内仍可用
      return false;
    },
    del(k) {
      if (ok) { try { localStorage.removeItem(k); } catch (e) {} }
      delete mem[k];
    },
  };
})();

/** 统计 localStorage 当前占用（可排除某个 key），用于写入前判断会不会超配额 */
function storageUsed(excludeKey) {
  if (!Store.ok) return 0;
  let total = 0;
  try {
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (!k || k === excludeKey) continue;
      total += k.length + (localStorage.getItem(k) || '').length;
    }
  } catch (e) { /* 读不到就按 0 算，交给写入结果兜底 */ }
  return total;
}

/* —— 照片存储相关常量（放在前面，避免 boot() 提前执行时取不到）—— */
const PHOTOS_KEY = 'birthday_photos_v1';
const PHOTO_MAX_CHARS = 1600000;          // 单张 base64 上限（约 1.2MB）
const STORAGE_BUDGET = 4200000;           // localStorage 总量上限（浏览器通常给 5MB，留余量）

/* —— 其余存储 key 集中定义：boot() 可能在脚本解析过程中就同步执行，
      这些常量必须先于 boot() 可用，否则会命中 const 的暂时性死区 —— */
const BOOK_KEY = 'birthday_guestbook_v1';
const BOOK_VERSION_KEY = 'birthday_guestbook_version';
const BOOK_BACKUP_KEY = 'birthday_guestbook_backup_v1';   // 迁移失败时保留的原始数据
const DATA_VERSION = 'v2';
const PIN_KEY = 'birthday_pinned_v1';
const DM_VIEW_KEY = 'birthday_danmaku_v1';
const BOOK_KEY_REF = 'birthday_guestbook_v1';
const PROGRESS_KEY = 'birthday_progress_v1';

/* ============================================================================
   2. 小工具
   ========================================================================== */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const rand = (a, b) => a + Math.random() * (b - a);

const IS_TOUCH = matchMedia('(hover: none)').matches || innerWidth < 720;
const REDUCED = matchMedia('(prefers-reduced-motion: reduce)').matches;

/** 页内提示（代替 alert） */
let toastTimer = null;
function toast(msg, ms = 2800) {
  const el = $('#toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), ms);
}

/* ============================================================================
   3. 音频：音效 + 背景音乐
      优先 music.mp3；文件不存在时用 Web Audio 合成轻柔八音盒
   ========================================================================== */
const Sound = {
  ctx: null,
  master: null,
  bgmEl: $('#bgm'),
  playing: null,       // 'file' = 正在放 music.mp3，'synth' = 正在放合成八音盒
  on: false,
  synth: { timer: null, step: 0, nextAt: 0 },

  /** AudioContext 必须在用户手势之后创建 */
  ensure() {
    if (this.ctx) return this.ctx;
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    this.ctx = new AC();
    this.master = this.ctx.createGain();
    this.master.gain.value = 0.9;
    this.master.connect(this.ctx.destination);
    return this.ctx;
  },

  /** 单个音符：柔和的八音盒质感 */
  note(freq, at, dur, gain = 0.1, type = 'triangle') {
    if (!this.ctx) return;
    const o = this.ctx.createOscillator();
    const g = this.ctx.createGain();
    const f = this.ctx.createBiquadFilter();
    f.type = 'lowpass';
    f.frequency.value = 2600;
    o.type = type;
    o.frequency.value = freq;
    g.gain.setValueAtTime(0.0001, at);
    g.gain.linearRampToValueAtTime(gain, at + 0.02);
    g.gain.exponentialRampToValueAtTime(0.0006, at + dur);
    o.connect(f); f.connect(g); g.connect(this.master);
    o.start(at);
    o.stop(at + dur + 0.06);
  },

  /** 短促上行琶音：拆礼物 / 集齐星星 */
  chime() {
    if (!this.ensure()) return;
    const t = this.ctx.currentTime;
    [784, 988, 1175, 1568].forEach((fq, i) => this.note(fq, t + i * 0.09, 0.55, 0.09));
  },

  /** 吹气声：吹灭蜡烛 */
  whoosh() {
    if (!this.ensure()) return;
    const t = this.ctx.currentTime;
    const len = 0.5;
    const buf = this.ctx.createBuffer(1, this.ctx.sampleRate * len, this.ctx.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < d.length; i++) {
      d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / d.length, 2);
    }
    const src = this.ctx.createBufferSource();
    const g = this.ctx.createGain();
    const f = this.ctx.createBiquadFilter();
    f.type = 'bandpass'; f.frequency.value = 900;
    g.gain.value = 0.22;
    src.buffer = buf;
    src.connect(f); f.connect(g); g.connect(this.master);
    src.start(t);
  },

  /** 星星点亮：单音叮 */
  ping(i = 0) {
    if (!this.ensure()) return;
    const scale = [659, 784, 880, 988, 1175];
    this.note(scale[i % scale.length], this.ctx.currentTime, 0.5, 0.08);
  },

  /** 烟花：低音垫 + 高音散点 */
  boom() {
    if (!this.ensure()) return;
    const t = this.ctx.currentTime;
    this.note(196, t, 0.7, 0.07, 'sine');
    for (let i = 0; i < 6; i++) {
      this.note(rand(1200, 2400), t + rand(0.02, 0.4), 0.3, 0.035);
    }
  },

  /* —— 背景音乐 —— */
  // 文件可用性：null=未知, true=可用, false=不可用（404/格式错/被浏览器拒）
  fileAvailable: null,
  // 第一次切到合成音时给一次温和提示，之后不再 toast
  synthNotified: false,

  initBgm() {
    // 指向同目录的 music.mp3；没有就回退到 Web Audio 合成八音盒
    this.bgmEl.src = CONFIG.music.file;
    this.bgmEl.volume = clamp(CONFIG.music.volume, 0, 1);
    this.bgmEl.loop = true;

    // 监听文件加载结果（决定之后是否再试文件）
    this.bgmEl.addEventListener('canplay', () => { this.fileAvailable = true; }, { once: true });
    this.bgmEl.addEventListener('error',   () => { this.fileAvailable = false; });

    // 真实播放/暂停状态 → 同步到 UI
    // 覆盖：浏览器原生控制 / 系统拦截 / 网络异常等情况
    this.bgmEl.addEventListener('play',  () => this.syncUi());
    this.bgmEl.addEventListener('pause', () => this.syncUi());

    // 初始 UI
    this.syncUi();
  },

  /** 同步右上角 #musicBtn 的视觉状态，UI 永远跟 this.on 保持一致 */
  syncUi() {
    const btn = $('#musicBtn');
    if (!btn) return;
    const ic = btn.querySelector('.mi');
    if (ic) ic.textContent = '\u266A'; // ♪（off 状态由 CSS 加删除线，无需换字符）
    btn.classList.toggle('on',  !!this.on);
    btn.classList.toggle('off', !this.on);
    btn.setAttribute('aria-label', this.on ? '\u80cc\u666f\u97f3\u4e50\uff1a\u5f00' : '\u80cc\u666f\u97f3\u4e50\uff1a\u5173');
    btn.setAttribute('title',      this.on ? '\u70b9\u51fb\u6682\u505c\u97f3\u4e50' : '\u70b9\u51fb\u64ad\u653e\u97f3\u4e50');
  },

  toggle() {
    this.on ? this.stopBgm() : this.startBgm();
  },

  /** 开始背景音乐：先试 music.mp3，文件不存在或被浏览器拦截就改用合成八音盒 */
  async startBgm() {
    this.ensure();
    if (this.ctx && this.ctx.state === 'suspended') {
      try { await this.ctx.resume(); } catch (e) {}
    }
    this.on = true;
    this.syncUi();

    // 1) 优先文件（不强制预检 fileAvailable：play() 会自动等 canplay）
    if (this.fileAvailable !== false) {
      try {
        await this.bgmEl.play();
        this.playing = 'file';
        return;
      } catch (e) {
        // 文件缺失/格式错/被浏览器拒 → 标记为不可用，下次不再试
        this.fileAvailable = false;
      }
    }
    // 2) 文件失败 → 走合成八音盒（不报错、不弹窗）
    this.startSynth();
    this.playing = 'synth';

    // 3) 第一次切到合成时给一次温和 Toast 提示，之后不再打扰
    if (!this.synthNotified) {
      this.synthNotified = true;
      toast('\u80cc\u666f\u97f3\u4e50\u5df2\u5207\u6362\u5230\u5185\u7f6e\u516b\u97f3\u76d2 \u266a', 2400);
    }
  },

  stopBgm() {
    this.on = false;
    this.playing = null;
    try { this.bgmEl.pause(); } catch (e) {}
    clearInterval(this.synth.timer);
    this.synth.timer = null;
    this.syncUi();
  },

  /** 合成一段轻柔《小星星》循环（无音频文件时的兜底） */
  startSynth() {
    if (!this.ctx || this.synth.timer) return;
    const N = { C4: 261.63, D4: 293.66, E4: 329.63, F4: 349.23, G4: 392.0, A4: 440.0, C5: 523.25, G3: 196.0 };
    const melody = [
      ['C4', 1], ['C4', 1], ['G4', 1], ['G4', 1], ['A4', 1], ['A4', 1], ['G4', 2],
      ['F4', 1], ['F4', 1], ['E4', 1], ['E4', 1], ['D4', 1], ['D4', 1], ['C4', 2],
      ['G4', 1], ['G4', 1], ['F4', 1], ['F4', 1], ['E4', 1], ['E4', 1], ['D4', 1], ['G4', 2],
      ['G4', 1], ['G4', 1], ['F4', 1], ['F4', 1], ['E4', 1], ['D4', 2], ['C4', 2],
      ['C5', 1], ['C5', 1], ['G4', 1], ['G4', 1], ['A4', 1], ['A4', 1], ['G4', 2],
      ['F4', 1], ['F4', 1], ['E4', 1], ['E4', 1], ['D4', 1], ['D4', 1], ['C4', 2],
    ];
    const beat = 0.46;
    this.synth.step = 0;
    this.synth.nextAt = this.ctx.currentTime + 0.15;
    this.synth.timer = setInterval(() => {
      // 提前 0.4 秒排布音符，保证节奏稳定不卡顿
      while (this.synth.nextAt < this.ctx.currentTime + 0.4) {
        const [nm, dd] = melody[this.synth.step % melody.length];
        const dur = dd * beat;
        this.note(N[nm], this.synth.nextAt, dur * 1.7, 0.055);
        // 低音垫一层，听起来更暖
        if (this.synth.step % 4 === 0) {
          this.note(N.G3, this.synth.nextAt, dur * 2.4, 0.03, 'sine');
        }
        this.synth.nextAt += dur;
        this.synth.step++;
      }
    }, 120);
  },
};

/* ============================================================================
   4. 背景粒子：星星闪烁 + 花瓣飘落（单个 rAF 统一驱动）
   ========================================================================== */
const Sky = {
  cv: $('#sky'),
  ctx: null,
  stars: [],
  petals: [],
  w: 0, h: 0, dpr: 1,

  init() {
    this.ctx = this.cv.getContext('2d');
    this.resize();
    addEventListener('resize', () => this.resize(), { passive: true });
  },

  resize() {
    this.dpr = Math.min(devicePixelRatio || 1, 2);
    this.w = innerWidth;
    this.h = innerHeight;
    this.cv.width = this.w * this.dpr;
    this.cv.height = this.h * this.dpr;
    this.cv.style.width = this.w + 'px';
    this.cv.style.height = this.h + 'px';
    this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
    this.build();
  },

  build() {
    // 移动端自动减少粒子数量，保证流畅
    const scale = IS_TOUCH ? 0.45 : 1;
    const nStars = Math.round(clamp(CONFIG.particles.stars * scale, 18, 120));
    const nPetals = Math.round(clamp(CONFIG.particles.petals * scale, 6, 34));

    this.stars = Array.from({ length: nStars }, () => ({
      x: rand(0, this.w), y: rand(0, this.h),
      r: rand(0.6, 1.9),
      a: rand(0.25, 0.9),
      sp: rand(0.006, 0.022),
      ph: rand(0, Math.PI * 2),
    }));
    this.petals = Array.from({ length: nPetals }, () => this.newPetal(true));
  },

  newPetal(anywhere) {
    return {
      x: rand(-20, this.w + 20),
      y: anywhere ? rand(0, this.h) : rand(-60, -10),
      s: rand(5, 11),
      vy: rand(0.22, 0.62),
      drift: rand(-0.4, 0.4),
      rot: rand(0, Math.PI * 2),
      vr: rand(-0.014, 0.014),
      hue: Math.random() < 0.5 ? 'rgba(255,214,224,' : 'rgba(255,240,214,',
      a: rand(0.35, 0.7),
    };
  },

  draw(t) {
    const c = this.ctx;
    if (!c) return;
    c.clearRect(0, 0, this.w, this.h);

    // 星星
    for (const s of this.stars) {
      const tw = 0.55 + 0.45 * Math.sin(t * s.sp + s.ph);
      c.globalAlpha = s.a * tw;
      c.fillStyle = '#FFF3D9';
      c.beginPath();
      c.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      c.fill();
      // 大星星加一点十字光
      if (s.r > 1.5) {
        c.globalAlpha = s.a * tw * 0.4;
        c.fillRect(s.x - s.r * 3, s.y - 0.35, s.r * 6, 0.7);
        c.fillRect(s.x - 0.35, s.y - s.r * 3, 0.7, s.r * 6);
      }
    }

    // 花瓣（开场夜空里不飘，进入正文后才飘）
    if (!document.body.classList.contains('is-intro')) {
      for (const p of this.petals) {
        p.y += p.vy;
        p.x += p.drift + Math.sin(p.y * 0.01) * 0.35;
        p.rot += p.vr;
        if (p.y > this.h + 30) Object.assign(p, this.newPetal(false));

        c.save();
        c.translate(p.x, p.y);
        c.rotate(p.rot);
        c.globalAlpha = p.a;
        c.fillStyle = p.hue + '0.85)';
        c.beginPath();
        c.ellipse(0, 0, p.s * 0.5, p.s, 0, 0, Math.PI * 2);
        c.fill();
        c.restore();
      }
    }
    c.globalAlpha = 1;
  },
};

/* ============================================================================
   5. 烟花 / 星光绽放
   ========================================================================== */
const Fx = {
  cv: $('#fx'),
  ctx: null,
  parts: [],
  w: 0, h: 0, dpr: 1,
  palettes: [
    ['#FFD9E4', '#F6AEBE', '#EBCB90'],
    ['#FFF0C4', '#FFD98A', '#E4899E'],
    ['#D9E4FF', '#A9C6F5', '#EBCB90'],
    ['#EBE0FF', '#C9B6EE', '#FFD9E4'],
  ],

  init() {
    this.ctx = this.cv.getContext('2d');
    this.resize();
    addEventListener('resize', () => this.resize(), { passive: true });
  },

  resize() {
    this.dpr = Math.min(devicePixelRatio || 1, 2);
    this.w = innerWidth;
    this.h = innerHeight;
    this.cv.width = this.w * this.dpr;
    this.cv.height = this.h * this.dpr;
    this.cv.style.width = this.w + 'px';
    this.cv.style.height = this.h + 'px';
    this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
  },

  /** 在指定位置炸开一朵 */
  burst(x, y, opts = {}) {
    const pal = this.palettes[(Math.random() * this.palettes.length) | 0];
    // 移动端减少碎片数量
    const n = Math.round((opts.count || (IS_TOUCH ? 42 : 74)) * (REDUCED ? 0.4 : 1));
    const speed = opts.speed || rand(3.2, 5.6);
    for (let i = 0; i < n; i++) {
      const ang = (Math.PI * 2 * i) / n + rand(-0.08, 0.08);
      const v = speed * rand(0.5, 1.15);
      this.parts.push({
        x, y,
        vx: Math.cos(ang) * v,
        vy: Math.sin(ang) * v,
        life: 1,
        decay: rand(0.012, 0.022),
        r: rand(1.4, 3),
        col: pal[(Math.random() * pal.length) | 0],
        tail: rand(0, 1) > 0.6,
      });
    }
    // 中心闪一下
    this.parts.push({ x, y, vx: 0, vy: 0, life: 1, decay: 0.06, r: rand(14, 22), col: '#FFFDF6', flash: true });
  },

  /** 全屏连环烟花 */
  show(count = 5, span = 900) {
    if (REDUCED) count = Math.min(count, 2);
    for (let i = 0; i < count; i++) {
      setTimeout(() => {
        this.burst(rand(this.w * 0.15, this.w * 0.85), rand(this.h * 0.12, this.h * 0.5));
        if (Sound.ctx) Sound.boom();
      }, i * (span / count));
    }
  },

  draw() {
    const c = this.ctx;
    if (!c) return;
    c.clearRect(0, 0, this.w, this.h);
    if (!this.parts.length) return;

    c.globalCompositeOperation = 'lighter';
    for (let i = this.parts.length - 1; i >= 0; i--) {
      const p = this.parts[i];
      if (p.flash) {
        c.globalAlpha = p.life * 0.5;
        const g = c.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 3);
        g.addColorStop(0, p.col);
        g.addColorStop(1, 'rgba(255,253,246,0)');
        c.fillStyle = g;
        c.beginPath(); c.arc(p.x, p.y, p.r * 3, 0, Math.PI * 2); c.fill();
      } else {
        p.vy += 0.045;            // 重力
        p.vx *= 0.985; p.vy *= 0.985;
        p.x += p.vx; p.y += p.vy;
        c.globalAlpha = clamp(p.life, 0, 1);
        c.fillStyle = p.col;
        c.beginPath();
        c.arc(p.x, p.y, p.r * p.life, 0, Math.PI * 2);
        c.fill();
        if (p.tail) {
          c.globalAlpha = p.life * 0.28;
          c.beginPath();
          c.arc(p.x - p.vx, p.y - p.vy, p.r * p.life * 0.7, 0, Math.PI * 2);
          c.fill();
        }
      }
      p.life -= p.decay;
      if (p.life <= 0 || p.y > this.h + 40) this.parts.splice(i, 1);
    }
    c.globalCompositeOperation = 'source-over';
    c.globalAlpha = 1;
  },
};

/** 唯一的动画主循环 */
function loop(t) {
  Sky.draw(t);
  Fx.draw();
  requestAnimationFrame(loop);
}

/* ============================================================================
   6. 文案注入：把 CONFIG 写到页面上
   ========================================================================== */
function applyConfig() {
  document.title = CONFIG.hero.title;

  $('#introKicker').textContent = CONFIG.intro.kicker;
  $('#introTitle').textContent = CONFIG.intro.title;
  $('#introHint').textContent = CONFIG.intro.hint;

  $('#heroEyebrow').textContent = CONFIG.hero.eyebrow;
  $('#heroTitle').textContent = CONFIG.hero.title;
  $('#exploreBtn').textContent = CONFIG.hero.exploreBtn;
  $('#skipTypeBtn').textContent = CONFIG.hero.skipBtn;

  $('#sec-share').querySelector('.sec-title').textContent = CONFIG.share.title;
  $('#sec-share').querySelector('.sec-sub').textContent = CONFIG.share.sub;
  $('#cakeHerCap').textContent = CONFIG.share.hersLabel;
  $('#cakeMineCap').textContent = CONFIG.share.mineLabel;
  $('#shareTip').textContent = CONFIG.share.tip;
  $('#shareGiftCap').textContent = CONFIG.share.surpriseText || '';
  $('#cakeHer').dataset.emoji = CONFIG.share.hersEmoji || '🍰';
  $('#cakeMine').dataset.emoji = CONFIG.share.mineEmoji || '🍴';

  $('#sec-cake').querySelector('.sec-title').textContent = CONFIG.cake.title;
  $('#cakeHint').textContent = CONFIG.cake.hint;
  $('#relightBtn').textContent = CONFIG.cake.relightBtn;

  $('#sec-memories').querySelector('.sec-title').textContent = CONFIG.memories.title;
  $('#sec-memories').querySelector('.sec-sub').textContent = CONFIG.memories.sub;

  $('#sec-stars').querySelector('.sec-title').textContent = CONFIG.stars.title;
  $('#sec-stars').querySelector('.sec-sub').textContent = CONFIG.stars.sub;
  $('#secretText').textContent = CONFIG.stars.secret.text;

  $('#sec-book').querySelector('.sec-title').textContent = CONFIG.book.title;
  $('#sec-book').querySelector('.sec-sub').textContent = CONFIG.book.sub;
  $('#bookInput').placeholder = CONFIG.book.placeholder;
  $('#bookForm').querySelector('button').textContent = CONFIG.book.submitBtn;

  $('.end-kicker').textContent = CONFIG.ending.kicker;
  $('#endTitle').textContent = CONFIG.ending.title;
  $('#endDate').textContent = CONFIG.birthdayText;
  $('#endSign').textContent = '【' + CONFIG.ending.sign + '】';
  $('#againFwBtn').textContent = CONFIG.ending.againFwBtn;
  $('#copyLinkBtn').textContent = CONFIG.ending.copyBtn;
  $('#endTip').textContent = CONFIG.ending.tip;
  $('.footer-note').textContent = CONFIG.ending.footer;
}

/* ============================================================================
   7. 开场 → 正文
   ========================================================================== */
function initIntro() {
  const gift = $('#giftBtn');
  let opened = false;

  gift.addEventListener('click', () => {
    if (opened) return;
    opened = true;
    Sound.ensure();
    if (Sound.ctx && Sound.ctx.state === 'suspended') Sound.ctx.resume();

    gift.classList.add('opened');
    Sound.chime();
    // 礼物盒位置放一朵星光
    const _gr = gift.getBoundingClientRect();
    if (_gr && _gr.width) Fx.burst(_gr.left + _gr.width / 2, _gr.top + _gr.height / 2, { count: IS_TOUCH ? 30 : 50, speed: 3 });

    setTimeout(enterSite, REDUCED ? 300 : 900);
  });
}

function enterSite() {
  const intro = $('#intro');
  const site = $('#site');

  intro.classList.add('leaving');
  document.body.classList.remove('is-intro');
  document.body.classList.add('is-site');
  site.hidden = false;
  // 先强制一次 reflow，保证淡入从 opacity:0 正常起步（不依赖 rAF 的时序）
  void site.offsetWidth;
  site.classList.add('shown');

  setTimeout(() => { intro.style.display = 'none'; }, 1000);

  // 背景音乐：优先 music.mp3，没有则自动播放合成八音盒
  if (CONFIG.music.autoStart && !Sound.on) Sound.startBgm();

  startTypewriter();
  window.scrollTo({ top: 0, behavior: 'auto' });
}

/* ============================================================================
   8. 打字机
   ========================================================================== */
const Typer = { timer: null, full: '', i: 0, done: false };

function startTypewriter() {
  const el = $('#typeLine');
  const skipBtn = $('#skipTypeBtn');
  Typer.full = CONFIG.hero.blessing;
  Typer.i = 0;
  Typer.done = false;
  el.textContent = '';
  skipBtn.hidden = false;

  clearInterval(Typer.timer);
  Typer.timer = setInterval(() => {
    Typer.i += 1;
    el.textContent = Typer.full.slice(0, Typer.i);
    if (Typer.i >= Typer.full.length) finishTyper();
  }, REDUCED ? 1 : 52);
}

function finishTyper() {
  clearInterval(Typer.timer);
  Typer.timer = null;
  Typer.done = true;
  Typer.i = Typer.full.length;
  const el = $('#typeLine');
  el.textContent = Typer.full;
  el.classList.add('done');
  $('#skipTypeBtn').hidden = true;
}

/** 实物礼物淡入：图片 + 一句 surpriseText（只做一次） */
let shareGiftShown = false;
function revealShareGift() {
  if (shareGiftShown) return;
  const fig = $('#shareGift');
  if (!fig) return;
  shareGiftShown = true;
  fig.hidden = false;
  // 下一帧再加 .shown，保证 transition 能生效（淡入缓缓出现）
  requestAnimationFrame(() => fig.classList.add('shown'));
}

/* ============================================================================
   9. 蛋糕：吹蜡烛 → 烟花 → 专属祝福
   ========================================================================== */
function initCake() {
  const candles = $$('.candle');
  const msg = $('#cakeMsg');
  const relight = $('#relightBtn');
  let blown = 0;
  let allOut = false;

  candles.forEach((c) => {
    c.addEventListener('click', () => {
      if (c.classList.contains('out')) {
        // 已经灭了就重新点亮，方便反复玩
        c.classList.remove('out');
        blown = Math.max(0, blown - 1);
        allOut = false;
        msg.classList.remove('shown');
        relight.hidden = true;
        return;
      }
      c.classList.add('out');
      Sound.whoosh();
      blown++;

      if (blown >= candles.length && !allOut) {
        allOut = true;
        onWishMade();
      }
    });
  });

  function onWishMade() {
    toast('蜡烛都吹灭啦，愿望正在派送中…', 2400);
    setTimeout(() => {
      Fx.show(IS_TOUCH ? 4 : 6, 1100);
      msg.textContent = CONFIG.cake.wishDone;
      msg.hidden = false;
      requestAnimationFrame(() => msg.classList.add('shown'));
      relight.hidden = false;
    }, 420);
  }

  relight.addEventListener('click', () => {
    candles.forEach((c) => c.classList.remove('out'));
    blown = 0;
    allOut = false;
    msg.classList.remove('shown');
    relight.hidden = true;
    setTimeout(() => { msg.hidden = true; }, 400);
    Sound.ping(2);
  });
}

/* ============================================================================
   10. 回忆卡片
   ========================================================================== */
function initMemories() {
  const deck = $('#deck');
  const idx = $('#deckIndex');
  const cards = CONFIG.memories.cards;

  deck.innerHTML = cards.map((c, i) => `
    <article class="memo" data-i="${i}">
      <div class="memo-art" aria-hidden="true">${c.emoji}</div>
      <span class="memo-tag">${c.tag || ('第 ' + (i + 1) + ' 页')}</span>
      <h4 class="memo-title">${esc(c.title)}</h4>
      <p class="memo-text">${esc(c.text)}</p>
    </article>
  `).join('');

  const items = $$('.memo', deck);
  idx.textContent = `1 / ${cards.length}`;

  // 卡片依次淡入（比逐张观察更稳，不会出现一直隐藏的情况）
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        items.forEach((el, k) => setTimeout(() => el.classList.add('in'), k * 130));
        io.disconnect();
      });
    }, { threshold: 0.15 });
    io.observe(deck);
  } else {
    items.forEach((el) => el.classList.add('in'));
  }

  const step = () => (items[0] ? items[0].offsetWidth + 16 : 300);
  $('#prevCard').addEventListener('click', () => { deck.scrollBy({ left: -step() }); Sound.ping(0); });
  $('#nextCard').addEventListener('click', () => { deck.scrollBy({ left: step() }); Sound.ping(1); });

  let t = null;
  deck.addEventListener('scroll', () => {
    clearTimeout(t);
    t = setTimeout(() => {
      const cur = Math.round(deck.scrollLeft / step()) + 1;
      idx.textContent = `${clamp(cur, 1, cards.length)} / ${cards.length}`;
    }, 120);
  }, { passive: true });
}

/** 简单转义，避免文案里带尖括号时破坏结构 */
function esc(s) {
  return String(s).replace(/[&<>"]/g, (ch) => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[ch]
  ));
}

/* ============================================================================
   11. 心愿星星收集
   ========================================================================== */
function initStars() {
  const field = $('#starfield');
  const dots = $('#starDots');
  const countEl = $('#starCount');
  const secret = $('#secret');
  const wishes = CONFIG.stars.wishes;

  field.innerHTML = CONFIG.stars.positions.map((p, i) => `
    <button class="wish-star" data-i="${i}"
            style="left:${p.x}%;top:${p.y}%"
            aria-label="第 ${i + 1} 颗心愿星">✦</button>
  `).join('');
  dots.innerHTML = wishes.map(() => '<i></i>').join('');

  const lit = new Set();
  const btns = $$('.wish-star', field);
  const dotEls = $$('i', dots);

  btns.forEach((b) => {
    b.addEventListener('click', () => {
      const i = +b.dataset.i;
      if (lit.has(i)) { toast(wishes[i], 2200); return; }

      lit.add(i);
      b.classList.add('lit', 'pop');
      setTimeout(() => b.classList.remove('pop'), 620);
      dotEls[i].classList.add('on');
      countEl.textContent = String(lit.size);
      Sound.ping(i);

      // 从星星位置放一小朵星光
      const _sr = b.getBoundingClientRect();
      if (_sr && _sr.width) Fx.burst(_sr.left + _sr.width / 2, _sr.top + _sr.height / 2, { count: 22, speed: 2.4 });

      toast(wishes[i], 2600);

      if (lit.size === wishes.length) {
        setTimeout(revealSecret, 700);
      }
    });
  });

  function revealSecret() {
    secret.hidden = false;
    Sound.chime();
    Fx.show(IS_TOUCH ? 3 : 5, 800);
    toast('五颗星都点亮了，看看给你的悄悄话 ✦', 3000);
    setTimeout(() => secret.scrollIntoView({ behavior: 'smooth', block: 'center' }), 260);
  }
}

/* ============================================================================
   12. 祝福留言板（localStorage + 数据版本号）
   --------------------------------------------------------------------------
   每次留言数据结构/默认示例发生不兼容变更时：
   1. 把 DATA_VERSION 改成新值（例如 'v2' → 'v3'）；
   2. 旧数据不会被直接清空，而是先尝试迁移到新结构；
   3. 迁移失败时，原文会原样备份到 BOOK_BACKUP_KEY，只追加默认示例。
   这样既避免旧版本残留的"朋友/同谋"等标签污染新版本，又不会弄丢用户写的话。
   ========================================================================== */
function initBook() {
  const list = $('#bookList');
  const form = $('#bookForm');
  const input = $('#bookInput');
  const clearBtn = $('#clearBook');

  let msgs = load();

  function writeDefault() {
    // 把 CONFIG.book.samples 序列化成留言对象（custom:false 标记为默认）
    // t 用时间戳，避免与迁移过来的旧留言撞号
    const base = Date.now();
    return CONFIG.book.samples.map((s, i) => ({ text: s.text, by: s.by, t: base - 100 + i, custom: false }));
  }

  function persist(arr) {
    try { localStorage.setItem(BOOK_KEY, JSON.stringify(arr)); } catch (e) {}
    try { localStorage.setItem(BOOK_VERSION_KEY, DATA_VERSION); } catch (_) {}
  }

  /** 旧数据迁移：尽力规整成 { text, by, t, custom }；无法解析时返回 ok:false */
  function migrate(raw) {
    let data;
    try { data = JSON.parse(raw); } catch (e) { return { ok: false, items: [] }; }
    if (!Array.isArray(data)) return { ok: false, items: [] };
    const sampleTexts = CONFIG.book.samples.map((s) => s.text);
    const items = [];
    data.forEach((m, i) => {
      if (!m || typeof m !== 'object') return;
      const text = String(m.text || m.msg || m.content || '').trim();
      if (!text) return;
      const by = String(m.by || m.name || m.author || '匿名朋友');
      const t = (typeof m.t === 'number' && m.t) ? m.t
              : (typeof m.time === 'number' && m.time) ? m.time
              : Date.now() + i;
      // 与默认示例同文的视为系统示例，其余算用户自己写的
      items.push({ text, by, t, custom: sampleTexts.indexOf(text) < 0 });
    });
    return { ok: true, items };
  }

  /** 追加缺失的默认示例（已有的不再重复追加） */
  function withDefaults(items, defaults) {
    const out = items.slice();
    defaults.forEach((d) => {
      if (!out.some((m) => m.text === d.text)) out.push(d);
    });
    return out;
  }

  function load() {
    // —— 步骤 1：读取原始数据与版本号（读失败一律当作没有，不动任何数据）
    let raw = null;
    try { raw = localStorage.getItem(BOOK_KEY); } catch (_) {}
    let storedVer = null;
    try { storedVer = localStorage.getItem(BOOK_VERSION_KEY); } catch (_) {}

    // —— 步骤 2：版本号匹配 → 直接沿用已有留言
    if (storedVer === DATA_VERSION && raw) {
      try {
        const arr = JSON.parse(raw);
        if (Array.isArray(arr)) return arr;
      } catch (e) { /* 数据损坏 → 走下面的迁移/备份流程 */ }
    }

    const defaults = writeDefault();

    // —— 步骤 3：首次访问（压根没有原始数据）→ 只写默认示例
    if (!raw) {
      persist(defaults);
      return defaults;
    }

    // —— 步骤 4：版本号不符 / 数据损坏 → 迁移优先，绝不直接清空
    const mig = migrate(raw);
    const merged = withDefaults(mig.items, defaults);

    if (!mig.ok) {
      // 迁移失败：先把原始数据原样备份，再写新数据，保证旧留言一个都不丢
      if (!Store.set(BOOK_BACKUP_KEY, raw)) {
        // 连备份都写不进去 → 原数据保持原样，不覆盖、不改版本号
        return merged;
      }
      toast('留言数据升级失败，旧数据已备份保留 ✦', 3600);
    }
    persist(merged);
    return merged;
  }

  function save() { persist(msgs); }

  function render() {
    list.innerHTML = msgs.map((m, i) => `
      <div class="note t${i % 4}${m.custom ? '' : ' note-default'}">
        ${m.custom ? `<button class="del" data-i="${i}" aria-label="删除这条留言">✕</button>` : ''}
        <span>${esc(m.text)}</span>
        <span class="note-meta">${esc(m.by || '匿名朋友')}</span>
      </div>
    `).join('');
    clearBtn.hidden = !msgs.some((m) => m.custom);

    $$('.del', list).forEach((b) => {
      b.addEventListener('click', () => {
        msgs.splice(+b.dataset.i, 1);
        save();
        render();
        toast('已删除这条留言');
      });
    });
  }

  form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const text = input.value.trim();
    if (!text) { toast('先写一句话再贴上去呀'); input.focus(); return; }

    msgs.unshift({ text, by: '我', t: Date.now(), custom: true });
    save();
    render();
    input.value = '';
    Sound.ping(3);
    toast('祝福已贴上手账墙 ✦');
  });

  clearBtn.addEventListener('click', () => {
    msgs = msgs.filter((m) => !m.custom);
    save();
    render();
    toast('自定义留言已清空');
  });

  render();
}

/* ============================================================================
   13. 结尾页：烟花 / 复制链接 / 长按彩蛋 / 倒计时
   ========================================================================== */
function initEnding() {
  $('#againFwBtn').addEventListener('click', () => {
    Fx.show(IS_TOUCH ? 5 : 8, 1400);
    Sound.chime();
    toast('再放一次，开心也要再来一次 ✦');
  });

  /* 复制链接：https 下用 Clipboard API，file:// 或不支持时回退 */
  $('#copyLinkBtn').addEventListener('click', async () => {
    const url = location.href;
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(url);
      } else {
        const ta = document.createElement('textarea');
        ta.value = url;
        ta.style.cssText = 'position:fixed;left:-9999px;top:0';
        document.body.appendChild(ta);
        ta.select();
        const ok = document.execCommand('copy');
        document.body.removeChild(ta);
        if (!ok) throw new Error('execCommand 失败');
      }
      toast('链接已复制，发给她就行 ✓');
    } catch (e) {
      toast('这个浏览器不让自动复制，长按地址栏手动复制吧');
    }
  });

  /* 长按标题 2 秒 → 额外祝福 */
  const title = $('#endTitle');
  const egg = $('#endEgg');
  let holdTimer = null;

  const startHold = () => {
    title.classList.add('holding');
    holdTimer = setTimeout(() => {
      title.classList.remove('holding');
      egg.textContent = CONFIG.ending.longPressEgg;
      egg.hidden = false;
      Sound.chime();
      const _tr = title.getBoundingClientRect();
      if (_tr && _tr.width) Fx.burst(_tr.left + _tr.width / 2, _tr.top + _tr.height / 2, { count: 40, speed: 3.2 });
    }, 2000);
  };
  const endHold = () => {
    clearTimeout(holdTimer);
    title.classList.remove('holding');
  };

  title.addEventListener('pointerdown', startHold);
  ['pointerup', 'pointerleave', 'pointercancel'].forEach((ev) =>
    title.addEventListener(ev, endHold)
  );
  // 长按时不要弹出系统右键菜单
  title.addEventListener('contextmenu', (e) => e.preventDefault());

  /* 倒计时 */
  if (CONFIG.showCountdown) {
    const cd = $('#countdown');
    const now = new Date();
    let target = new Date(now.getFullYear(), CONFIG.birthdayMonth - 1, CONFIG.birthdayDay);
    if (target < new Date(now.getFullYear(), now.getMonth(), now.getDate())) {
      target = new Date(now.getFullYear() + 1, CONFIG.birthdayMonth - 1, CONFIG.birthdayDay);
    }
    const days = Math.ceil((target - now) / 86400000);
    if (days <= 0) {
      cd.textContent = '就是今天！✦ 生日快乐';
    } else {
      cd.textContent = `距离 ${CONFIG.birthdayText} 还有 ${days} 天`;
    }
    cd.hidden = false;
  }
}

/* ============================================================================
   13.5 终极彩蛋：一封小信
   ---------------------------------------------------------------------------
   在结尾页停留够久（默认 30 秒）后，「回到开头 ↑」旁边悄悄浮现一个小巧的
   半透明按钮；点开是一张信纸弹窗，正文来自 CONFIG.ending.secretLetter。
   ========================================================================== */
function initSecretLetter() {
  const btn = $('#secretLetterBtn');
  const modal = $('#letterModal');
  if (!btn || !modal) return;

  const cfg = CONFIG.ending || {};
  const waitMs = cfg.secretLetterDelayMs || 30000;   // 在结尾页停留多久才浮现

  // 信纸内容：抬头 / 正文（按自然段拆分）/ 右下角落款与日期
  const title = $('#letterTitle');
  if (title) title.textContent = cfg.secretLetterTitle || '一封小信';
  const body = $('#letterBody');
  if (body) {
    body.textContent = '';
    // 用 \n\n 分段，每段渲染成一个自然段（首行缩进两字由 CSS 处理）
    const paras = String(cfg.secretLetter || '')
      .split(/\n{2,}/)
      .map((s) => s.trim())
      .filter(Boolean);
    paras.forEach((text) => {
      const p = document.createElement('p');
      p.textContent = text;
      body.appendChild(p);
    });
  }
  const sign = $('#letterSign');
  if (sign) sign.textContent = cfg.secretLetterSign || cfg.sign || '';
  const date = $('#letterDate');
  if (date) date.textContent = cfg.secretLetterDate || '';

  // 出现时机：结尾页进入视口后开始计时
  let timer = null;
  const reveal = () => {
    if (timer) return;
    timer = setTimeout(() => {
      btn.hidden = false;
      btn.classList.add('appear');
      Sound.chime();
    }, waitMs);
  };
  const endSec = $('#sec-end');
  if (endSec && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        reveal();
        io.disconnect();
      });
    }, { threshold: 0.2 });
    io.observe(endSec);
  } else {
    reveal();
  }

  // 打开 / 关闭
  const open = () => {
    modal.hidden = false;
    requestAnimationFrame(() => modal.classList.add('show'));
    document.body.classList.add('modal-open');
    Sound.chime();
  };
  const close = () => {
    modal.classList.remove('show');
    setTimeout(() => { modal.hidden = true; }, 420);
    document.body.classList.remove('modal-open');
  };
  btn.addEventListener('click', open);
  const closeBtn = $('#letterClose');
  if (closeBtn) closeBtn.addEventListener('click', close);
  modal.addEventListener('click', (e) => { if (e.target === modal) close(); });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.hidden) close();
  });
}

/* ============================================================================
   14. 通用交互：音乐开关 / 滚动
   ========================================================================== */
function initCommon() {
  $('#musicBtn').addEventListener('click', () => {
    Sound.ensure();
    if (Sound.ctx && Sound.ctx.state === 'suspended') Sound.ctx.resume();
    Sound.toggle();
    toast(Sound.on ? '背景音乐：开 ♪' : '背景音乐：关');
  });

  // 打字机：点标题区可跳过 / 点「显示全文」直接看完整祝福
  $('#skipTypeBtn').addEventListener('click', finishTyper);
  $('#typeLine').addEventListener('click', () => { if (!Typer.done) finishTyper(); });

  $('#exploreBtn').addEventListener('click', () => {
    if (!Typer.done) finishTyper();
    $('#sec-cake').scrollIntoView({ behavior: REDUCED ? 'auto' : 'smooth', block: 'start' });
  });

  // 页面切到后台时暂停合成音乐，回来再续，避免堆积音符
  document.addEventListener('visibilitychange', () => {
    if (document.hidden && Sound.synth.timer) {
      clearInterval(Sound.synth.timer);
      Sound.synth.timer = null;
    } else if (!document.hidden && Sound.on && Sound.playing === 'synth' && !Sound.synth.timer) {
      Sound.startSynth();
    }
  });
}

/* ============================================================================
   15. 启动
   ========================================================================== */
function boot() {
  applyConfig();
  Sky.init();
  Fx.init();
  Sound.initBgm();
  requestAnimationFrame(loop);

  initIntro();
  initCake();
  initMemories();
  initStars();
  initBook();
  initEnding();
  initCommon();
  initV2();
  initV3();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}
/* ============================================================================
   16. v2 增强：滚动条 / 章节导航 / 减少动效 / 引言副标题 / 摇一摇提示 /
                  Hero 折叠卡 / 印章 / 许愿卡 / 贴纸回弹 / 备忘贴纸 /
                  笔记贴纸 / 海报 / 分享文案 / 回顶 / 新手引导
   ========================================================================== */
function initV2() {
  const body = document.body;
  const gift = $('#giftBtn');
  const typeLine = $('#typeLine');

  // — 1. 顶部滚动进度条
  const scrollBar = $('#scrollBar');
  if (scrollBar) {
    const updateBar = () => {
      const max = (document.documentElement.scrollHeight - innerHeight) || 1;
      scrollBar.style.width = clamp(scrollY / max, 0, 1) * 100 + '%';
    };
    document.addEventListener('scroll', updateBar, { passive: true });
    updateBar();
  }

  // — 2. 右侧章节导航点
  const sections = $$('main.site section[id]');
  const navDots = $('#navDots');
  if (navDots && sections.length) {
    sections.forEach((sec, i) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'dot';
      btn.setAttribute('aria-label', sec.dataset.nav || ('章节 ' + (i + 1)));
      btn.addEventListener('click', () => sec.scrollIntoView({ behavior: REDUCED ? 'auto' : 'smooth', block: 'start' }));
      navDots.appendChild(btn);
    });
    const dots = $$('.dot', navDots);
    const setActive = () => {
      const mid = scrollY + innerHeight * 0.4;
      let idx = 0;
      sections.forEach((sec, i) => { if (sec.offsetTop <= mid) idx = i; });
      dots.forEach((d, i) => d.classList.toggle('on', i === idx));
    };
    document.addEventListener('scroll', setActive, { passive: true });
    setActive();
  }

  // — 3. 减少动效开关（保存偏好）
  const reduceBtn = $('#reduceFxBtn');
  if (reduceBtn) {
    const apply = (on) => {
      body.classList.toggle('reduce-fx-on', on);
      reduceBtn.classList.toggle('on', on);
      reduceBtn.textContent = on ? '减少动效 开' : '减少动效';
    };
    // 走统一 Store 封装：隐私模式下自动降级为内存存储，不会抛异常
    const saved = Store.get('birthday_reduce_fx') === '1';
    apply(saved);
    reduceBtn.hidden = false;
    reduceBtn.addEventListener('click', () => {
      const next = !body.classList.contains('reduce-fx-on');
      apply(next);
      Store.set('birthday_reduce_fx', next ? '1' : '0');
      toast(next ? '已减少动效 ✦' : '已恢复动效');
    });
  }

  // — 4. 引言副标题（5 秒后渐显）
  const introSub = $('#introSub');
  if (introSub) {
    introSub.textContent = V2.introSub;
    introSub.hidden = false;
    introSub.style.opacity = '0';
    setTimeout(() => {
      introSub.style.transition = 'opacity .8s';
      introSub.style.opacity = '1';
    }, 5000);
  }

  // — 5. 摇一摇提示（仅移动端）
  if (gift && IS_TOUCH) {
    let lastX = 0, lastY = 0, lastZ = 0, lastT = 0;
    const shakeHint = $('#shakeHint');
    let shakeCount = 0, shakeTimer = null, hinted = false;
    window.addEventListener('devicemotion', (e) => {
      const a = e.accelerationIncludingGravity;
      if (!a || a.x == null) return;
      const now = Date.now();
      if (now - lastT < 100) return;
      const dx = Math.abs(a.x - lastX), dy = Math.abs(a.y - lastY), dz = Math.abs(a.z - lastZ);
      lastX = a.x; lastY = a.y; lastZ = a.z; lastT = now;
      if (dx + dy + dz > 22) {
        shakeCount++;
        clearTimeout(shakeTimer);
        shakeTimer = setTimeout(() => { shakeCount = 0; }, 800);
        if (shakeCount >= 2 && !hinted) {
          hinted = true;
          gift.classList.add('shaking');
          if (shakeHint) {
            shakeHint.textContent = V2.shakeHint;
            shakeHint.hidden = false;
            setTimeout(() => { shakeHint.hidden = true; }, 1500);
          }
          setTimeout(() => gift.classList.remove('shaking'), 1400);
        }
      }
    });
  }

  // — 6. 长按 2 秒跳过开场（用一个独立的小链接，避免和礼物 click 抢）
  const skipHoldBtn = document.createElement('button');
  skipHoldBtn.type = 'button';
  skipHoldBtn.id = 'skipHoldBtn';
  skipHoldBtn.className = 'skip-hold';
  skipHoldBtn.textContent = '长按 2 秒跳过开场 →';
  // 放在 introSub 附近
  const introSubEl = $('#introSub');
  if (introSubEl && introSubEl.parentNode) {
    introSubEl.parentNode.insertBefore(skipHoldBtn, introSubEl.nextSibling);
  } else {
    document.body.appendChild(skipHoldBtn);
  }
  if (gift) {
    const holdBar = $('#holdBar');
    let pressTimer = null, holding = false;
    const beginHold = (e) => {
      if (e.button != null && e.button !== 0) return;
      holding = true;
      if (holdBar) {
        holdBar.classList.remove('on');
        void holdBar.offsetWidth;
        holdBar.classList.add('on');
      }
      pressTimer = setTimeout(() => {
        if (!holding) return;
        holding = false;
        if (holdBar) holdBar.classList.remove('on');
        const ok = confirm(V2.skipConfirmText + '\n\n' + V2.skipConfirmYes + ' / ' + V2.skipConfirmNo);
        if (ok) {
          if (!gift.classList.contains('opened')) {
            gift.click();
          } else {
            enterSite();
          }
        }
      }, 2000);
    };
    const endHold = () => {
      holding = false;
      clearTimeout(pressTimer);
      if (holdBar) holdBar.classList.remove('on');
    };
    skipHoldBtn.addEventListener('pointerdown', beginHold);
    ['pointerup', 'pointerleave', 'pointercancel'].forEach((ev) => skipHoldBtn.addEventListener(ev, endHold));
  }

  // — 7. Hero 折叠卡：生日 / 星座 / 今日标签
  const fold = $('#heroFold');
  const foldBtn = $('#heroFoldBtn');
  const foldBody = $('#heroFoldBody');
  if (fold && foldBtn && foldBody && typeLine) {
    foldBtn.innerHTML = '<span>' + V2.heroFoldTitle + '</span>';
    let rendered = false;
    const renderBody = () => {
      if (rendered) return;
      rendered = true;
      const dl = document.createElement('dl');
      V2.heroFoldItems.forEach((it) => {
        const dt = document.createElement('dt');
        dt.textContent = it.k;
        const dd = document.createElement('dd');
        dd.textContent = it.v;
        dl.appendChild(dt);
        dl.appendChild(dd);
      });
      foldBody.appendChild(dl);
    };
    foldBtn.addEventListener('click', () => {
      renderBody();
      fold.classList.toggle('open');
    });
    const waitDone = setInterval(() => {
      if (Typer.done) {
        clearInterval(waitDone);
        setTimeout(() => { fold.hidden = false; }, 800);
      }
    }, 200);
  }

  // — 8. 印章：点击「收下这句祝福」或长按祝福文字
  const stampBtn = $('#stampBtn');
  const stampSeal = $('#stampSeal');
  if (stampSeal) stampSeal.textContent = V2.stampText;
  const showStamp = () => {
    if (!stampSeal) return;
    stampSeal.hidden = false;
    void stampSeal.offsetWidth;
    stampSeal.classList.add('on');
    Sound.chime();
    Fx.show(IS_TOUCH ? 4 : 6, 1200);
  };
  if (stampBtn) {
    stampBtn.hidden = false;
    stampBtn.addEventListener('click', showStamp);
  }
  if (typeLine) {
    let pressT = null;
    const start = () => { pressT = setTimeout(showStamp, 1200); };
    const end = () => { clearTimeout(pressT); };
    typeLine.addEventListener('pointerdown', start);
    ['pointerup', 'pointerleave', 'pointercancel'].forEach((ev) => typeLine.addEventListener(ev, end));
  }

  // — 9. 许愿输入 + 许愿卡
  const wishInputWrap = $('#wishInputWrap');
  const wishInput = $('#wishInput');
  const wishCard = $('#wishCard');
  const relightBtn = $('#relightBtn');
  if (relightBtn && wishInputWrap) {
    relightBtn.addEventListener('click', () => {
      wishInputWrap.hidden = false;
      wishInput.value = '';
      wishCard.hidden = true;
      setTimeout(() => wishInput.focus(), 50);
    });
  }
  if (wishInput && wishCard) {
    const WISH_KEY = 'birthday_wish_v1';
    try {
      const saved = localStorage.getItem(WISH_KEY);
      if (saved) {
        wishCard.innerHTML = '<span class="from">— 我许下的愿望 —</span>' + saved.replace(/[<>]/g, '');
        wishCard.hidden = false;
      }
    } catch (_) {}
    wishInput.addEventListener('change', () => {
      const v = wishInput.value.trim();
      if (!v) { wishCard.hidden = true; return; }
      const safe = v.replace(/[<>]/g, '');
      wishCard.innerHTML = safe + '<span class="from">— ' + (CONFIG.birthdayText || '今天') + '，心里最真的愿望 —</span>';
      wishCard.hidden = false;
      try { localStorage.setItem(WISH_KEY, safe); } catch (_) {}
      Fx.show(3, 900);
      Sound.chime();
    });
  }

  // — 10. 蜡烛文循环
  const candleText = $('.candle-words');
  if (candleText && V2.candleWords && V2.candleWords.length) {
    let i = 0;
    setInterval(() => {
      candleText.textContent = V2.candleWords[i % V2.candleWords.length];
      i++;
    }, 4000);
  }

  // — 11. Memo 贴纸：每张便签右上角加一个可点击的贴纸
  const memos = $$('.memo');
  const stickerFloat = $('#stickerFloat');
  memos.forEach((memo) => {
    if (memo.querySelector('.memo-sticker')) return;
    const sticker = document.createElement('span');
    sticker.className = 'memo-sticker press-scale';
    sticker.textContent = '\u{1F381}';
    sticker.title = '点我一下';
    sticker.addEventListener('click', (e) => {
      e.stopPropagation();
      sticker.classList.remove('bump');
      void sticker.offsetWidth;
      sticker.classList.add('bump');
      memo.classList.toggle('flipped');
      if (stickerFloat) {
        const r = sticker.getBoundingClientRect();
        const sp = document.createElement('span');
        const list = V2.stickerReplies || ['\u2726'];
        sp.textContent = list[Math.floor(Math.random() * list.length)];
        sp.style.left = (r.left + r.width / 2) + 'px';
        sp.style.top = r.top + 'px';
        stickerFloat.appendChild(sp);
        setTimeout(() => sp.remove(), 1100);
      }
      Fx.show(3, 800);
      Sound.chime();
    });
    memo.style.position = memo.style.position || 'relative';
    memo.appendChild(sticker);
    if (!memo.querySelector('.memo-back')) {
      const back = document.createElement('div');
      back.className = 'memo-back';
      back.textContent = '\u2014 \u8FD9\u6BB5\u8BB0\u5FC6\uFF0C\u6211\u66FF\u4F60\u5B58\u7740 \u2014';
      memo.appendChild(back);
    }
  });

  // — 12. 笔记的 note-actions（删除 / 换贴纸）
  // 只对【自定义】留言显示操作按钮；默认示例留言不允许编辑/删除，保持纯净
  const notes = $$('.note:not(.note-default)');
  notes.forEach((note) => {
    if (note.querySelector('.note-actions')) return;
    const acts = document.createElement('div');
    acts.className = 'note-actions';
    const change = document.createElement('button');
    change.type = 'button';
    change.textContent = '换个贴纸';
    change.addEventListener('click', (e) => {
      e.stopPropagation();
      const stickerEl = note.querySelector('.note-sticker');
      if (!stickerEl) return;
      const list = V2.messageStickers || ['\u{1F338}'];
      const cur = stickerEl.textContent;
      const next = list[(list.indexOf(cur) + 1) % list.length];
      stickerEl.textContent = next;
      Sound.chime();
    });
    const del = document.createElement('button');
    del.type = 'button';
    del.textContent = '删除';
    del.addEventListener('click', (e) => {
      e.stopPropagation();
      note.style.transition = 'opacity .3s, transform .3s';
      note.style.opacity = '0';
      note.style.transform = 'scale(.9)';
      setTimeout(() => { note.hidden = true; }, 320);
      toast('\u5C0F\u7B19\u6761\u5DF2\u6536\u8D77');
    });
    acts.appendChild(change);
    acts.appendChild(del);
    note.insertBefore(acts, note.firstChild);
  });

  // — 14. 结尾操作：海报 / 分享文案 / 回顶
  const posterBtn = $('#posterBtn');
  const shareTextBtn = $('#shareTextBtn');
  const backTopBtn = $('#backTopBtn');

  if (posterBtn) {
    posterBtn.hidden = false;
    posterBtn.addEventListener('click', () => {
      const sub = V2.posterSub || '';
      const css = 'body{margin:0;background:linear-gradient(160deg,#FBE7DA,#C5B5E8);min-height:100vh;display:flex;align-items:center;justify-content:center;font-family:KaiTi,STKaiti,serif;color:#3C2F4A;padding:20px;box-sizing:border-box}.card{background:#FFFDF6;border:1px solid rgba(180,150,180,.3);border-radius:20px;padding:30px 24px;box-shadow:0 20px 60px rgba(160,140,180,.3);max-width:340px;text-align:center}.sub{font-size:12px;color:#9b8ba6;letter-spacing:.15em;margin-bottom:14px}.title{font-size:22px;margin:0 0 16px;color:#C24A5C}.line{height:1px;background:linear-gradient(90deg,transparent,#E0B888,transparent);margin:14px 0}.txt{font-size:16px;line-height:1.8;color:#5b4f6a;white-space:pre-line}.seal{margin-top:18px;display:inline-block;padding:6px 14px;border:2px solid #C24A5C;color:#C24A5C;border-radius:8px;font-size:13px;letter-spacing:.1em;transform:rotate(-6deg)}.hint{font-size:11px;color:#9b8ba6;margin-top:24px}';
      const w = window.open('', '_blank', 'width=420,height=640');
      if (!w) { toast('\u6D4F\u89C8\u5668\u62E6\u622A\u4E86\u5F39\u7A97'); return; }
      const html = '<!doctype html><html><head><meta charset=utf-8><title>\u751F\u65E5\u6D77\u62A5</title><style>' + css + '</style></head><body><div class=card><div class=sub>' + sub + '</div><h1 class=title>' + esc(CONFIG.name || '\u5C0F\u5362\u540C\u5B66') + '\uFF0C\u751F\u65E5\u5FEB\u4E50</h1><div class=line></div><div class=txt>' + (V2.shareText || '').replace(/</g, '&lt;') + '</div><div class=seal>' + (V2.stampText || '') + '</div><div class=hint>\u957F\u6309\u56FE\u7247\u53EF\u4FDD\u5B58 \u00B7 ' + new Date().toLocaleDateString() + '</div></div><script>setTimeout(function(){try{window.print()}catch(e){}},300)</script></body></html>';
      w.document.open(); w.document.write(html); w.document.close();
    });
  }
  if (shareTextBtn) {
    shareTextBtn.hidden = false;
    shareTextBtn.addEventListener('click', async () => {
      const txt = V2.shareText || '';
      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(txt);
        } else {
          const ta = document.createElement('textarea');
          ta.value = txt;
          ta.style.cssText = 'position:fixed;left:-9999px';
          document.body.appendChild(ta);
          ta.select();
          document.execCommand('copy');
          document.body.removeChild(ta);
        }
        toast('\u795D\u798F\u6587\u6848\u5DF2\u590D\u5236\uFF0C\u53BB\u53D1\u7ED9\u5979\u5427 \u2726');
      } catch (e) {
        toast('\u590D\u5236\u5931\u8D25\uFF0C\u53EF\u4EE5\u957F\u6309\u6309\u94AE\u624B\u52A8\u9009\u62E9');
      }
    });
  }
  if (backTopBtn) {
    backTopBtn.hidden = false;
    backTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: REDUCED ? 'auto' : 'smooth' });
    });
  }

  // — 14.5) 终极彩蛋「一封小信」：
  //   在结尾页停留够久后，「回到开头 ↑」旁边悄悄浮现一个小巧的半透明按钮，
  //   点开是一张信纸弹窗，正文来自 CONFIG.ending.secretLetter。
  initSecretLetter();

  // — 15. 新手引导气泡（走统一 Store 封装，隐私模式下不抛异常）
  const guided = Store.get(V2.guideStorageKey);
  if (!guided && gift) {
    setTimeout(() => {
      const bub = document.createElement('div');
      bub.className = 'guide-bubble';
      bub.textContent = V2.guideText;
      const r = gift.getBoundingClientRect();
      bub.style.left = (r.left + r.width / 2) + 'px';
      bub.style.top = (r.top - 14) + 'px';
      bub.style.transform = 'translate(-50%,-100%)';
      document.body.appendChild(bub);
      const dismiss = () => {
        bub.style.transition = 'opacity .3s';
        bub.style.opacity = '0';
        setTimeout(() => bub.remove(), 320);
        Store.set(V2.guideStorageKey, '1');
      };
      setTimeout(dismiss, 4000);
      gift.addEventListener('click', dismiss, { once: true });
    }, 1200);
  }

  // — 16. Hero 章节打字完成后在屏幕随机冒气泡
  const hero = $('#sec-hero');
  if (hero && V2.bubbleTexts && V2.bubbleTexts.length) {
    const spawn = () => {
      const b = document.createElement('div');
      b.className = 'guide-bubble';
      b.textContent = V2.bubbleTexts[Math.floor(Math.random() * V2.bubbleTexts.length)];
      b.style.left = rand(20, Math.max(40, innerWidth - 80)) + 'px';
      b.style.top = rand(120, Math.max(200, innerHeight - 200)) + 'px';
      b.style.transform = 'translate(0,0)';
      document.body.appendChild(b);
      setTimeout(() => {
        b.style.transition = 'opacity .6s, transform .6s';
        b.style.opacity = '0';
        b.style.transform = 'translateY(-20px)';
      }, 1600);
      setTimeout(() => b.remove(), 2300);
    };
    let count = 0;
    const iv = setInterval(() => {
      if (Typer.done) { spawn(); count++; if (count > 2) clearInterval(iv); }
    }, 1800);
  }

  // — 17. 减少动效开启时禁用部分动画
  const obsReduce = new MutationObserver(() => {
    const on = body.classList.contains('reduce-fx-on');
    $$('.gift, .cake, .memo, .wish-card, .stamp, .hero-fold').forEach((el) => {
      el.style.animation = on ? 'none' : '';
    });
  });
  obsReduce.observe(body, { attributes: true, attributeFilter: ['class'] });
}

/* ============================================================================
   17. v3 增强模块：存储安全层 + 照片回忆 + 进度存档 + 弹幕祝福墙
        + 档位倒计时 + 生日海报 + 彩蛋合集
   ========================================================================== */

/** 「减少动效」综合判断：系统偏好 或 用户手动开关 */
function fxReduced() {
  return REDUCED || document.body.classList.contains('reduce-fx-on');
}

/** 照片压缩：FileReader → Image → canvas，最长边 800px，JPEG 质量 0.8 */
function compressImage(file, cb) {
  const fr = new FileReader();
  fr.onload = () => {
    const im = new Image();
    im.onload = () => {
      try {
        const MAX = 800;
        const r = Math.min(1, MAX / Math.max(im.naturalWidth, im.naturalHeight));
        const w = Math.max(1, Math.round(im.naturalWidth * r));
        const h = Math.max(1, Math.round(im.naturalHeight * r));
        const cv = document.createElement('canvas');
        cv.width = w; cv.height = h;
        cv.getContext('2d').drawImage(im, 0, 0, w, h);
        cb(cv.toDataURL('image/jpeg', 0.8));
      } catch (e) { cb(null); }
    };
    im.onerror = () => cb(null);
    im.src = String(fr.result);
  };
  fr.onerror = () => cb(null);
  fr.readAsDataURL(file);
}

/** v3 功能统一入口（boot 末尾调用；此时既有 DOM/交互都已就绪） */
function initV3() {
  try { initPhotos(); } catch (e) {}
  try { initProgress(); } catch (e) {}
  try { initShare(); } catch (e) {}
  try { initDanmaku(); } catch (e) {}
  try { initCountdown(); } catch (e) {}
  try { initPoster(); } catch (e) {}
  try { initEasterEggs(); } catch (e) {}
}

/* —— F6：彩蛋合集（Konami / 双击蛋糕撒糖 / 摇一摇彩带）——
   规则：同一时间只触发一个彩蛋，触发后 3 秒冷却；减少动效时只出文字不播粒子。 */
function initEasterEggs() {
  if (!CONFIG.enableEasterEggs) return;
  const cfg = CONFIG.eggs || {};
  const KONAMI = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
  const cooldown = cfg.cooldownMs || 3000;

  let seq = 0;
  let busy = false;
  let lastAt = 0;

  function showEgg(text, cls) {
    const ov = document.createElement('div');
    ov.className = 'egg-overlay ' + (cls || '');
    ov.innerHTML = '<div class="egg-card">' + esc(String(text || '')).replace(/\n/g, '<br>') + '</div>';
    document.body.appendChild(ov);
    requestAnimationFrame(() => ov.classList.add('show'));
    const close = () => {
      ov.classList.remove('show');
      setTimeout(() => ov.remove(), 500);
    };
    ov.addEventListener('click', close);
    setTimeout(close, 3600);
  }

  /** 统一触发入口：忙碌中或冷却期内直接忽略 */
  function trigger(kind, target) {
    const now = Date.now();
    if (busy || now - lastAt < cooldown) return false;
    busy = true;
    lastAt = now;

    if (kind === 'konami') {
      if (!fxReduced()) Fx.show(8, 1000);
      showEgg(cfg.konamiText, 'egg-konami');
    } else if (kind === 'sugar') {
      if (!fxReduced() && target) {
        const r = target.getBoundingClientRect();
        for (let i = 0; i < 5; i++) {
          setTimeout(() => {
            Fx.burst(
              r.left + r.width * (0.25 + Math.random() * 0.5),
              r.top + r.height * (0.2 + Math.random() * 0.5),
              { count: 34, speed: 4.2 }
            );
          }, i * 130);
        }
      }
      showEgg(cfg.sugarText, 'egg-sugar');
    } else if (kind === 'shake') {
      if (!fxReduced()) {
        for (let i = 0; i < 8; i++) {
          setTimeout(() => {
            Fx.burst(Math.random() * innerWidth, 40 + Math.random() * 80, { count: 22, speed: 2.4 });
          }, i * 110);
        }
      }
      showEgg(cfg.shakeText, 'egg-shake');
    }
    setTimeout(() => { busy = false; }, cooldown);
    return true;
  }

  /* —— 1) Konami 序列：↑↑↓↓←→←→BA —— */
  document.addEventListener('keydown', (e) => {
    const t = e.target;
    const tag = (t && t.tagName) || '';
    if (tag === 'INPUT' || tag === 'TEXTAREA' || (t && t.isContentEditable)) return;
    const k = e.key.length === 1 ? e.key.toLowerCase() : e.key;
    if (k === KONAMI[seq]) {
      seq++;
      if (seq === KONAMI.length) { seq = 0; trigger('konami'); }
    } else {
      seq = (k === KONAMI[0]) ? 1 : 0;   // 允许从中间重新开始
    }
  });

  /* —— 2) 双击蛋糕 → 撒糖 —— */
  const cake = $('#cake');
  if (cake) {
    cake.addEventListener('dblclick', (e) => {
      if (e.target.closest && e.target.closest('.candle')) return;   // 双击蜡烛是吹灭，不算彩蛋
      e.preventDefault();
      trigger('sugar', cake);
    });
  }

  /* —— 3) 摇一摇 → 彩带（iOS 13+ 需在用户手势里申请授权）—— */
  let lastAcc = null;
  let lastShakeAt = 0;
  function onMotion(e) {
    const a = e.accelerationIncludingGravity || e.acceleration;
    if (!a || a.x == null || a.y == null || a.z == null) return;
    const cur = { x: a.x, y: a.y, z: a.z };
    if (lastAcc) {
      const delta = Math.abs(cur.x - lastAcc.x) + Math.abs(cur.y - lastAcc.y) + Math.abs(cur.z - lastAcc.z);
      const now = Date.now();
      if (delta > 26 && now - lastShakeAt > 1600) {
        lastShakeAt = now;
        trigger('shake');
      }
    }
    lastAcc = cur;
  }
  function enableMotion() {
    if (typeof window.DeviceMotionEvent !== 'undefined') {
      window.addEventListener('devicemotion', onMotion);
    }
  }
  if (typeof window.DeviceMotionEvent !== 'undefined') {
    // iOS 13+ 必须在真实用户手势里申请授权；其他平台直接监听即可
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) ||
      (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    if (isIOS && typeof DeviceMotionEvent.requestPermission === 'function') {
      const ask = () => {
        try {
          const res = DeviceMotionEvent.requestPermission();
          if (res && typeof res.then === 'function') {
            res.then((r) => { if (r === 'granted') enableMotion(); })
              .catch(() => {});
          }
        } catch (e) {}
        document.removeEventListener('pointerdown', ask);
      };
      document.addEventListener('pointerdown', ask, { once: true });
    } else {
      enableMotion();
    }
  }

  // 结尾页留一句提示，让彩蛋不至于太隐蔽
  const endSec = $('#sec-end');
  if (endSec && !endSec.querySelector('.egg-hint')) {
    const hint = document.createElement('p');
    hint.className = 'egg-hint';
    hint.textContent = '小提示：↑↑↓↓←→←→BA ／ 双击蛋糕 ／ 手机摇一摇 ✦';
    endSec.appendChild(hint);
  }
}

/* —— F5：可编辑生日海报（Canvas，无任何外部依赖）——
   key: birthday_poster_v1 = { tpl, text, photo }
   照片取自 birthday_photos_v1（卡片照片 key '0'~'4'，海报专用照片 key 'poster'）
   注：不使用二维码库，海报右下角以文字形式写网址。 */

/** 固定种子的伪随机，保证海报重绘时花纹一致 */
function seededRand(seed) {
  let a = seed >>> 0;
  return function () {
    a += 0x6D2B79F5;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const POSTER_TEMPLATES = [
  {
    name: '樱花粉',
    title: '#C24A5C', sub: '#9b8ba6', body: '#5b4f6a', line: '#E0B888', seal: '#C24A5C', foot: 'rgba(120,100,130,.7)', dark: false,
    bg(ctx, W, H) {
      const g = ctx.createLinearGradient(0, 0, W, H);
      g.addColorStop(0, '#FFF5F8'); g.addColorStop(0.52, '#FDE4EC'); g.addColorStop(1, '#F2E6F7');
      ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
      const rg = ctx.createRadialGradient(W * 0.5, H * 0.24, 8, W * 0.5, H * 0.24, 200);
      rg.addColorStop(0, 'rgba(255,255,255,.9)'); rg.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.fillStyle = rg; ctx.fillRect(0, 0, W, H);
      const r = seededRand(20261121);
      for (let i = 0; i < 46; i++) {
        const x = r() * W, y = r() * H, s = 4 + r() * 7;
        ctx.fillStyle = ['rgba(246,174,190,.5)', 'rgba(255,214,226,.55)', 'rgba(235,203,144,.3)'][i % 3];
        ctx.beginPath();
        ctx.ellipse(x, y, s, s * 0.62, r() * Math.PI, 0, Math.PI * 2);
        ctx.fill();
      }
    },
  },
  {
    name: '星空夜',
    title: '#FFF3D6', sub: 'rgba(214,226,255,.85)', body: 'rgba(236,241,255,.92)', line: '#EBCB90', seal: '#F6D79A', foot: 'rgba(206,218,255,.65)', dark: true,
    bg(ctx, W, H) {
      const g = ctx.createLinearGradient(0, 0, W * 0.4, H);
      g.addColorStop(0, '#1B2140'); g.addColorStop(0.55, '#2C3566'); g.addColorStop(1, '#171C36');
      ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
      const r = seededRand(1121);
      for (let i = 0; i < 120; i++) {
        const x = r() * W, y = r() * H, s = r() * 1.7 + 0.4;
        ctx.fillStyle = 'rgba(255,255,255,' + (0.25 + r() * 0.6) + ')';
        ctx.beginPath(); ctx.arc(x, y, s, 0, Math.PI * 2); ctx.fill();
      }
      const mg = ctx.createRadialGradient(W * 0.78, H * 0.17, 6, W * 0.78, H * 0.17, 90);
      mg.addColorStop(0, 'rgba(255,240,200,.95)'); mg.addColorStop(0.25, 'rgba(255,230,170,.35)'); mg.addColorStop(1, 'rgba(255,230,170,0)');
      ctx.fillStyle = mg; ctx.beginPath(); ctx.arc(W * 0.78, H * 0.17, 90, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = '#FFF3D6';
      ctx.beginPath(); ctx.arc(W * 0.78, H * 0.17, 30, 0, Math.PI * 2); ctx.fill();
    },
  },
  {
    name: '奶油简',
    title: '#6C5B4A', sub: '#A2937F', body: '#5C5348', line: '#C9A45C', seal: '#A2937F', foot: 'rgba(120,108,92,.65)', dark: false,
    bg(ctx, W, H) {
      ctx.fillStyle = '#FFFDF6'; ctx.fillRect(0, 0, W, H);
      ctx.strokeStyle = 'rgba(180,160,130,.45)'; ctx.lineWidth = 2;
      ctx.strokeRect(26, 26, W - 52, H - 52);
      ctx.strokeStyle = 'rgba(180,160,130,.22)'; ctx.lineWidth = 1;
      ctx.strokeRect(34, 34, W - 68, H - 68);
      const r = seededRand(1106);
      ctx.fillStyle = 'rgba(201,164,92,.16)';
      for (let i = 0; i < 26; i++) {
        const x = r() * W, y = r() * H, s = 1.2 + r() * 1.8;
        ctx.beginPath(); ctx.arc(x, y, s, 0, Math.PI * 2); ctx.fill();
      }
    },
  },
];

/** Canvas 文本按宽度折行 */
function wrapCanvasText(ctx, text, maxWidth) {
  const lines = [];
  String(text || '').split('\n').forEach((para) => {
    let line = '';
    for (const ch of para) {
      if (ctx.measureText(line + ch).width > maxWidth) { lines.push(line); line = ch; }
      else line += ch;
    }
    lines.push(line);
  });
  return lines;
}

function initPoster() {
  const pcfg = CONFIG.poster;
  if (!pcfg) return;

  const state = { tpl: 0, text: '', photo: 'none' };
  try {
    const s = JSON.parse(Store.get(pcfg.storageKey) || 'null');
    if (s) {
      if (Number.isInteger(s.tpl) && POSTER_TEMPLATES[s.tpl]) state.tpl = s.tpl;
      if (typeof s.text === 'string') state.text = s.text;
      if (typeof s.photo === 'string') state.photo = s.photo;
    }
  } catch (e) {}
  if (!state.text) {
    const first = (CONFIG.hero && CONFIG.hero.blessing ? String(CONFIG.hero.blessing) : '').split('\n')[0].trim();
    state.text = pcfg.defaultBlessing || first || '愿你岁岁有今日，年年有今日。';
  }

  function readPhotos() {
    try {
      const o = JSON.parse(Store.get(PHOTOS_KEY) || '{}');
      return (o && typeof o === 'object') ? o : {};
    } catch (e) { return {}; }
  }

  /* —— 弹层 UI —— */
  const modal = document.createElement('div');
  modal.className = 'poster-modal';
  modal.hidden = true;
  modal.innerHTML =
    '<div class="poster-panel">' +
    '<div class="poster-head"><span>✎ 生日海报</span><button type="button" class="poster-x" aria-label="关闭">×</button></div>' +
    '<div class="poster-body">' +
    '<div class="poster-preview"><canvas id="posterCanvas" width="540" height="720"></canvas></div>' +
    '<div class="poster-ctrl">' +
    '<div class="pc-label">模板</div><div class="pc-tpls" id="posterTpls"></div>' +
    '<div class="pc-label">' + esc(pcfg.blessLabel || '海报祝福语') + '</div>' +
    '<textarea id="posterText" rows="5"></textarea>' +
    '<div class="pc-label">' + esc(pcfg.photoLabel || '海报照片') + '</div>' +
    '<div class="pc-photo-row"><select id="posterPhoto"></select>' +
    '<button type="button" class="pc-upload" id="posterUpload">上传照片</button></div>' +
    '<div class="pc-actions"><button type="button" class="btn btn-primary" id="posterDownload">' + esc(pcfg.downloadBtn || '下载海报') + '</button>' +
    '<button type="button" class="btn btn-ghost" id="posterClose">关闭</button></div>' +
    '<p class="pc-tip">右下角是文字网址（未使用二维码库，避免外部依赖）</p>' +
    '</div></div></div>';
  document.body.appendChild(modal);

  const canvas = modal.querySelector('#posterCanvas');
  const ctx = canvas.getContext('2d');
  const tplBox = modal.querySelector('#posterTpls');
  const textArea = modal.querySelector('#posterText');
  const photoSel = modal.querySelector('#posterPhoto');
  const uploadBtn = modal.querySelector('#posterUpload');

  // 模板按钮
  POSTER_TEMPLATES.forEach((t, i) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'pc-tpl';
    b.textContent = t.name;
    b.addEventListener('click', () => { state.tpl = i; syncTpl(); save(); draw(); });
    tplBox.appendChild(b);
  });
  function syncTpl() {
    Array.from(tplBox.children).forEach((b, i) => b.classList.toggle('on', i === state.tpl));
  }

  // 照片下拉
  function syncPhotos() {
    const photos = readPhotos();
    const opts = ['<option value="none">不使用照片</option>'];
    const cardKeys = Object.keys(photos).filter((k) => /^\d+$/.test(k)).sort((a, b) => a - b);
    cardKeys.forEach((k) => opts.push('<option value="' + k + '">' + (Number(k) + 1) + ' 页手账照片</option>'));
    if (photos.poster) opts.push('<option value="poster">海报专用照片</option>');
    photoSel.innerHTML = opts.join('');
    if (photos[state.photo]) photoSel.value = state.photo;
    else state.photo = 'none';
    photoSel.value = state.photo;
  }

  /* —— 绘制 —— */
  let imgEl = null, imgKey = '';
  function loadImg(key) {
    if (imgKey === key) return;
    imgKey = key;
    const photos = readPhotos();
    const src = photos[key];
    if (!src) { imgEl = null; return; }
    const im = new Image();
    im.onload = () => { imgEl = im; draw(); };
    im.src = src;
  }
  function draw() {
    const tpl = POSTER_TEMPLATES[state.tpl] || POSTER_TEMPLATES[0];
    const W = 540, H = 720, dpr = Math.min(devicePixelRatio || 1, 2);
    canvas.width = W * dpr; canvas.height = H * dpr;
    canvas.style.width = W + 'px'; canvas.style.height = H + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, W, H);
    tpl.bg(ctx, W, H);

    const serif = 'KaiTi, STKaiti, "Songti SC", serif';
    ctx.textAlign = 'center';

    // 顶部小字
    ctx.fillStyle = tpl.sub;
    ctx.font = '15px ' + serif;
    const sub = (V2 && V2.posterSub) || CONFIG.birthdayText || '';
    ctx.fillText(sub, W / 2, 92);

    // 主标题
    ctx.fillStyle = tpl.title;
    ctx.font = 'bold 38px ' + serif;
    ctx.fillText((CONFIG.name || '寿星') + '，生日快乐', W / 2, 152);

    // 金线
    const lg = ctx.createLinearGradient(W * 0.22, 0, W * 0.78, 0);
    lg.addColorStop(0, 'rgba(0,0,0,0)');
    lg.addColorStop(0.5, tpl.line);
    lg.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = lg;
    ctx.fillRect(W * 0.22, 176, W * 0.56, 2);

    // 照片
    let y = 214;
    if (imgEl && state.photo !== 'none') {
      const pw = 340, ph = 220;
      const px = (W - pw) / 2;
      ctx.save();
      roundRect(ctx, px, y, pw, ph, 18);
      ctx.clip();
      const ar = imgEl.naturalWidth / imgEl.naturalHeight;
      let dw = pw, dh = ph, ox = px, oy = y;
      if (ar > pw / ph) { dw = ph * ar; ox = px - (dw - pw) / 2; }
      else { dh = pw / ar; oy = y - (dh - ph) / 2; }
      ctx.drawImage(imgEl, ox, oy, dw, dh);
      ctx.restore();
      ctx.strokeStyle = 'rgba(255,255,255,.55)'; ctx.lineWidth = 2;
      roundRect(ctx, px, y, pw, ph, 18); ctx.stroke();
      y += ph + 34;
    }

    // 祝福正文
    ctx.fillStyle = tpl.body;
    ctx.font = '19px ' + serif;
    ctx.textAlign = 'left';
    const maxW = W - 120;
    const lines = wrapCanvasText(ctx, textArea.value || '', maxW).slice(0, 9);
    lines.forEach((ln, i) => {
      ctx.textAlign = 'center';
      ctx.fillText(ln, W / 2, y + i * 34);
    });
    y += lines.length * 34 + 18;

    // 印章
    ctx.save();
    ctx.translate(W - 96, H - 132);
    ctx.rotate(-0.1);
    ctx.strokeStyle = tpl.seal; ctx.lineWidth = 2;
    ctx.strokeRect(-42, -20, 84, 40);
    ctx.fillStyle = tpl.seal;
    ctx.font = '17px ' + serif;
    ctx.textAlign = 'center';
    ctx.fillText((V2 && V2.stampText) || '生日快乐', 0, 6);
    ctx.restore();

    // 底部：文字网址 + 日期（二维码降级）
    ctx.textAlign = 'center';
    ctx.fillStyle = tpl.foot;
    ctx.font = '12px ' + serif;
    const url = String(location.href).replace(/^file:\/\//, '');
    ctx.fillText(url.length > 58 ? url.slice(0, 57) + '…' : url, W / 2, H - 62);
    ctx.font = '11px ' + serif;
    ctx.fillText('长按图片可保存 · ' + new Date().toLocaleDateString(), W / 2, H - 40);
  }

  function roundRect(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
  }

  function save() {
    state.text = textArea.value;
    Store.set(pcfg.storageKey, JSON.stringify({ tpl: state.tpl, text: state.text, photo: state.photo }));
  }

  /* —— 交互 —— */
  textArea.value = state.text;
  syncTpl();
  syncPhotos();
  loadImg(state.photo);
  textArea.addEventListener('input', () => { state.text = textArea.value; save(); draw(); });
  photoSel.addEventListener('change', () => {
    state.photo = photoSel.value;
    loadImg(state.photo);
    save();
    draw();
  });

  // 上传海报专用照片
  const up = document.createElement('input');
  up.type = 'file'; up.accept = 'image/*'; up.id = 'posterPhotoInput';
  up.style.display = 'none';
  document.body.appendChild(up);
  uploadBtn.addEventListener('click', () => up.click());
  up.addEventListener('change', () => {
    const f = up.files && up.files[0];
    if (!f) return;
    compressImage(f, (dataURL) => {
      if (!dataURL || dataURL.length > PHOTO_MAX_CHARS) { toast(CONFIG.memories.photoTooBig); up.value = ''; return; }
      const photos = readPhotos();
      photos.poster = dataURL;
      const json = JSON.stringify(photos);
      // 与手账照片同一套规则：先删旧 key 再写新值，写入前先做一次总量检查
      Store.del(PHOTOS_KEY);
      if (json.length > STORAGE_BUDGET || storageUsed(PHOTOS_KEY) + json.length > STORAGE_BUDGET
          || !Store.set(PHOTOS_KEY, json)) {
        toast(CONFIG.memories.photoTooBig); up.value = ''; return;
      }
      state.photo = 'poster';
      syncPhotos();
      loadImg('poster');
      save();
      draw();
      toast('海报照片已就位 ✦');
      up.value = '';
    });
  });

  // 下载 PNG
  modal.querySelector('#posterDownload').addEventListener('click', () => {
    draw();
    try {
      canvas.toBlob((blob) => {
        if (!blob) { toast('生成失败，试试换个模板'); return; }
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = (CONFIG.name || '寿星') + '-生日海报-' + (CONFIG.birthdayShortText || '') + '.png';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        setTimeout(() => URL.revokeObjectURL(url), 2000);
        toast('海报已下载 ✦');
      }, 'image/png');
    } catch (e) {
      toast('这个浏览器不支持下载，试试长按图片保存');
    }
  });

  function open() {
    modal.hidden = false;
    document.body.classList.add('modal-open');
    syncPhotos();
    loadImg(state.photo);
    draw();
  }
  function close() {
    modal.hidden = true;
    document.body.classList.remove('modal-open');
  }
  modal.querySelector('#posterClose').addEventListener('click', close);
  modal.querySelector('.poster-x').addEventListener('click', close);
  modal.addEventListener('click', (e) => { if (e.target === modal) close(); });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.hidden) close();
  });

  // 入口按钮：放在结尾页现有"生成生日海报"旁边
  const endActs = document.querySelector('#sec-end .end-actions-v2') || document.querySelector('#sec-end .end-actions');
  if (endActs) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'btn btn-ghost';
    btn.textContent = '✎ 自定义海报';
    endActs.appendChild(btn);
    btn.addEventListener('click', open);
  }
}

/* —— F4：情绪化倒计时 + 生日当天庆祝（key: birthday_celebrated_v1）—— */
function initCountdown() {
  const cd = $('#countdown');
  if (!cd || !CONFIG.showCountdown) return;

  const m = +CONFIG.birthdayMonth;
  const d = +CONFIG.birthdayDay;
  // 非法日期（例如 2 月 30 日）→ 只显示一个破折号
  const probe = new Date(2000, m - 1, d);
  const valid = Number.isInteger(m) && Number.isInteger(d) && m >= 1 && m <= 12 &&
    d >= 1 && d <= 31 && !isNaN(probe.getTime()) && probe.getDate() === d;
  if (!valid) {
    cd.textContent = '—';
    cd.hidden = false;
    return;
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  let target = new Date(today.getFullYear(), m - 1, d);
  if (target < today) target = new Date(today.getFullYear() + 1, m - 1, d);
  const days = Math.round((target - today) / 86400000);
  const isToday = days === 0;

  // 档位匹配：CONFIG.countdownTiers 按 min 从大到小排列，取第一个 days >= min 的
  const tiers = Array.isArray(CONFIG.countdownTiers) ? CONFIG.countdownTiers : [];
  let tier = { text: '', cls: '' };
  for (const t of tiers) {
    if (days >= (t.min || 0)) { tier = t; break; }
  }

  cd.classList.add('cd-tiered');
  if (tier.cls) cd.classList.add(tier.cls);
  cd.innerHTML =
    '<span class="cd-num">' + (isToday ? '就是今天' : '还有 <b>' + days + '</b> 天') + '</span>' +
    '<span class="cd-text">' + esc(tier.text || '') + '</span>';
  cd.hidden = false;

  /* —— 生日当天：当天首次打开才庆祝（每天只放一次）—— */
  const ccfg = CONFIG.birthdayCelebration;
  function todayStamp() {
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    return today.getFullYear() + '-' + mm + '-' + dd;
  }
  function celebrate() {
    const stamp = todayStamp();
    if (Store.get(ccfg.storageKey) === stamp) return;   // 今天已经放过了
    Store.set(ccfg.storageKey, stamp);

    const ov = document.createElement('div');
    ov.className = 'celebrate-overlay';
    ov.innerHTML =
      '<div class="celebrate-card">' +
      '<div class="celebrate-title">' + esc(ccfg.title) + '</div>' +
      '<div class="celebrate-sub">' + esc(ccfg.sub) + '</div>' +
      '<button type="button" class="btn btn-primary celebrate-close">好耶 ✦</button>' +
      '</div>';
    document.body.appendChild(ov);
    requestAnimationFrame(() => ov.classList.add('show'));

    if (!fxReduced()) {                 // 减少动效时只出文字
      Fx.show(6, 1300);
      setTimeout(() => Fx.burst(innerWidth * 0.5, innerHeight * 0.42, { count: 60 }), 260);
    }
    const close = () => {
      ov.classList.remove('show');
      setTimeout(() => ov.remove(), 600);
    };
    ov.querySelector('.celebrate-close').addEventListener('click', close);
    ov.addEventListener('click', (e) => { if (e.target === ov) close(); });
    setTimeout(close, 7000);
  }

  if (isToday) {
    // 进入正文后再放庆祝（开场页还盖着的时候不打扰）
    if (document.body.classList.contains('is-intro')) {
      const obs = new MutationObserver(() => {
        if (!document.body.classList.contains('is-intro')) {
          obs.disconnect();
          setTimeout(celebrate, 500);
        }
      });
      obs.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    } else {
      setTimeout(celebrate, 400);
    }
  }
}

/* —— F7：生日回顾 · 隔空同享（两张蛋糕拍立得 + 板块底部实物礼物 + 点击彩蛋）——
   滚动到该板块时缓入；板块底部的实物礼物照片在「滚动到该处」或「看到蛋糕照片」后淡入；
   点击蛋糕图片轻微放大，并在对应位置飘出 emoji。
   彩蛋整体遵循 CONFIG.enableEasterEggs 开关；减少动效时只出文字提示。 */
function initShare() {
  const sec = $('#sec-share');
  if (!sec) return;
  const cfg = CONFIG.share || {};

  // — 1) 滚动到该板块时缓入
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        sec.classList.add('in');
        io.disconnect();
      });
    }, { threshold: 0.15 });
    io.observe(sec);
  } else {
    sec.classList.add('in');
  }

  // — 1.5) 板块底部的实物礼物：滚动到它、或用户看到蛋糕照片时，缓缓淡入
  {
    const gift = $('#shareGift');
    const cakes = $('.polaroids', sec);
    let cakesSeen = false;
    const maybeReveal = () => {
      if (cakesSeen) revealShareGift();
    };
    // hidden（display:none）的元素无法被 IntersectionObserver 观察到，
    // 所以这里先取消 hidden，交给 CSS 的 opacity 控制显隐（视觉上仍看不到）。
    if (gift) gift.hidden = false;

    // 大图加载态：加载中转圈 / 加载失败显示备用文字，避免长时间空白
    const gImg = $('#shareGiftImg');
    if (gImg) {
      const gLoading = $('#giftLoading');
      const gError = $('#giftError');
      const showLoaded = () => {
        gImg.classList.add('ready');
        if (gLoading) gLoading.hidden = true;
      };
      const showFailed = () => {
        gImg.classList.remove('ready');      // 失败时不留残图，只留占位与提示
        if (gLoading) gLoading.hidden = true;
        if (gError) gError.hidden = false;
      };
      if (gImg.complete) {
        // 已缓存：naturalWidth > 0 表示加载成功，为 0 表示失败
        if (gImg.naturalWidth > 0) showLoaded(); else showFailed();
      } else {
        gImg.addEventListener('load', showLoaded, { once: true });
        gImg.addEventListener('error', showFailed, { once: true });
      }
    }

    if (!('IntersectionObserver' in window)) {
      revealShareGift();
    } else {
      if (gift) {
        // 滚动到板块底部（实物礼物进入视口）→ 淡入
        const ioGift = new IntersectionObserver((entries) => {
          entries.forEach((e) => {
            if (!e.isIntersecting) return;
            revealShareGift();
            ioGift.disconnect();
          });
        }, { threshold: 0.15 });
        ioGift.observe(gift);
      }
      if (cakes) {
        // 用户已经看到蛋糕照片 → 实物礼物也准备好（滚到底时即是已淡入状态）
        const ioCakes = new IntersectionObserver((entries) => {
          entries.forEach((e) => {
            if (!e.isIntersecting) return;
            cakesSeen = true;
            maybeReveal();
            ioCakes.disconnect();
          });
        }, { threshold: 0.5 });
        ioCakes.observe(cakes);
      }
    }
  }

  // — 2) 点击蛋糕 → 轻微放大 + 飘 emoji（彩蛋总开关）
  if (!CONFIG.enableEasterEggs) return;
  const imgs = [$('#cakeHer'), $('#cakeMine')].filter(Boolean);
  let firstTap = true;                     // 只在第一次点击时飘那行字
  imgs.forEach((img) => {
    let lastTap = 0;
    const pop = () => {
      const now = Date.now();
      if (now - lastTap < 600) return;      // 防止触摸 + click 双触发
      lastTap = now;

      if (fxReduced()) {                    // 减少动效：只给一句文字
        toast(cfg.tip || '', 1800);
        return;
      }
      img.classList.remove('pop');
      void img.offsetWidth;                // 重启动画
      img.classList.add('pop');
      setTimeout(() => img.classList.remove('pop'), 700);

      const r = img.getBoundingClientRect();
      if (!r || !r.width) return;
      spawnEmoji(img.dataset.emoji || '🍰', r.left + r.width / 2, r.top + r.height / 2);

      // 第一次点击：屏幕中央缓缓飘出一行字（渐隐渐现）
      if (firstTap) {
        firstTap = false;
        spawnCenterText(cfg.firstTapText || '把我的心意，隔空传递给你 ✦');
      }
    };
    img.addEventListener('pointerdown', pop);
  });
}

/** 在屏幕指定位置飘出一个 emoji，1.7 秒后自动移除 */
function spawnEmoji(emoji, x, y) {
  try {
    const el = document.createElement('span');
    el.className = 'emoji-pop';
    el.textContent = emoji;
    el.style.left = Math.round(x) + 'px';
    el.style.top = Math.round(y) + 'px';
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1800);
  } catch (e) { /* 动画失败不影响页面 */ }
}

/** 在屏幕中央飘出一行字（渐隐渐现，约 3.2 秒后自动消失） */
function spawnCenterText(text) {
  try {
    if (!text) return;
    const el = document.createElement('div');
    el.className = 'letter-float';
    el.textContent = text;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 3400);
  } catch (e) { /* 动画失败不影响页面 */ }
}

/* —— F3：弹幕祝福墙（keys: birthday_pinned_v1 / birthday_danmaku_v1，见上方常量区）—— */

function initDanmaku() {
  const dcfg = CONFIG.danmaku;
  if (!dcfg.enable) return;
  const sec = $('#sec-book');
  const listEl = $('#bookList');
  if (!sec || !listEl) return;

  let view = 'list';                 // 'list' | 'danmaku'
  let speed = 'mid';                 // slow | mid | fast
  let paused = false;
  let hlT = null;                    // 当前高亮留言的 t
  let resorting = false;             // MutationObserver 防自触发
  let pinMenu = null;

  function loadPins() {
    try {
      const a = JSON.parse(Store.get(PIN_KEY) || '[]');
      return new Set(Array.isArray(a) ? a.map(String) : []);
    } catch (e) { return new Set(); }
  }
  function readMsgs() {
    try {
      const a = JSON.parse(Store.get(BOOK_KEY_REF) || '[]');
      return Array.isArray(a) ? a : [];
    } catch (e) { return []; }
  }

  // 恢复上次视图/速度选择
  try {
    const s = JSON.parse(Store.get(DM_VIEW_KEY) || 'null');
    if (s && (s.view === 'danmaku' || s.view === 'list')) view = s.view;
    if (s && (s.speed in dcfg.speeds)) speed = s.speed;
  } catch (e) {}
  // 减少动效开启 → 强制列表视图
  if (fxReduced()) view = 'list';

  /* —— 注入控制条 / 弹幕舞台 / 详情条 / 提示 —— */
  const bar = document.createElement('div');
  bar.className = 'danmaku-bar';
  bar.innerHTML =
    '<button type="button" class="dm-btn dm-view-list" data-view="list">' + dcfg.labels.list + '</button>' +
    '<button type="button" class="dm-btn dm-view-dm" data-view="danmaku">' + dcfg.labels.danmaku + '</button>' +
    '<span class="dm-sep">·</span>' +
    '<button type="button" class="dm-btn dm-pause">' + dcfg.labels.pause + '</button>' +
    '<button type="button" class="dm-btn dm-sp" data-sp="slow">' + dcfg.labels.slow + '</button>' +
    '<button type="button" class="dm-btn dm-sp" data-sp="mid">' + dcfg.labels.mid + '</button>' +
    '<button type="button" class="dm-btn dm-sp" data-sp="fast">' + dcfg.labels.fast + '</button>';
  listEl.insertAdjacentElement('beforebegin', bar);

  const stage = document.createElement('div');
  stage.className = 'danmaku-stage';
  stage.hidden = true;
  bar.insertAdjacentElement('afterend', stage);

  const detail = document.createElement('div');
  detail.className = 'danmaku-detail';
  detail.hidden = true;
  stage.insertAdjacentElement('afterend', detail);

  const tipEl = document.createElement('p');
  tipEl.className = 'dm-tip';
  tipEl.textContent = dcfg.labels.clickTip;
  detail.insertAdjacentElement('afterend', tipEl);

  const btnDm = bar.querySelector('.dm-view-dm');
  const btnList = bar.querySelector('.dm-view-list');
  const btnPause = bar.querySelector('.dm-pause');

  function saveViewPref() {
    Store.set(DM_VIEW_KEY, JSON.stringify({ view, speed }));
  }

  /* —— 弹幕渲染 —— */
  function renderDanmaku() {
    stage.innerHTML = '';
    const msgs = readMsgs();
    if (!msgs.length) { stage.hidden = true; return; }
    stage.hidden = false;
    const pins = loadPins();
    const laneN = Math.max(3, Math.floor(stage.clientHeight / dcfg.laneHeight));
    const dur = dcfg.speeds[speed] || dcfg.speeds.mid;
    const shown = msgs.slice(0, dcfg.maxOnScreen);
    shown.forEach((m, i) => {
      const el = document.createElement('span');
      el.className = 'dm-item';
      const isPin = pins.has(String(m.t));
      if (isPin) el.classList.add('dm-pinned');
      el.style.top = ((i % laneN) * dcfg.laneHeight + 8) + 'px';
      el.style.color = dcfg.colors[i % dcfg.colors.length];
      el.style.animationDuration = dur + 's';
      // 负延迟：打开页面时弹幕已经在路上，不空场
      el.style.animationDelay = -(i * dur / shown.length) + 's';
      el.textContent = (isPin ? '★ ' : '') + m.text;
      el.dataset.t = String(m.t);
      stage.appendChild(el);
    });
    stage.classList.toggle('paused', paused);
  }

  /* —— 列表视图：置顶排最前 + 打标（不重写 initBook，只重排 DOM）—— */
  function resortList() {
    if (resorting) return;
    resorting = true;
    try {
      const msgs = readMsgs();
      const pins = loadPins();
      const notes = Array.from(listEl.children).filter((el) => el.classList.contains('note'));
      notes.forEach((el, i) => {
        const m = msgs[i];
        const t = m ? String(m.t) : '';
        el.dataset.t = t;
        const isPin = !!t && pins.has(t);
        el.classList.toggle('note-pinned', isPin);
        let badge = el.querySelector('.pin-badge');
        if (isPin && !badge) {
          badge = document.createElement('span');
          badge.className = 'pin-badge';
          badge.textContent = '置顶';
          el.appendChild(badge);
        } else if (!isPin && badge) badge.remove();
      });
      const pinnedEls = notes.filter((el) => el.classList.contains('note-pinned'));
      const restEls = notes.filter((el) => !el.classList.contains('note-pinned'));
      if (pinnedEls.length && pinnedEls.length < notes.length) {
        pinnedEls.concat(restEls).forEach((el) => listEl.appendChild(el));
      }
    } finally { resorting = false; }
  }

  /* —— 视图切换 —— */
  function setView(v) {
    if (v === 'danmaku' && fxReduced()) {
      toast(dcfg.labels.reducedOff);
      view = 'list';
    } else {
      view = v;
    }
    const dm = view === 'danmaku';
    stage.hidden = !dm || !readMsgs().length;
    listEl.hidden = dm;
    detail.hidden = true;
    hlT = null;
    btnDm.classList.toggle('on', dm);
    btnList.classList.toggle('on', !dm);
    if (dm) renderDanmaku();
    saveViewPref();
  }

  /* —— 暂停 / 速度 —— */
  function setPaused(p) {
    paused = p;
    stage.classList.toggle('paused', paused && view === 'danmaku');
    btnPause.textContent = paused ? dcfg.labels.resume : dcfg.labels.pause;
    if (!paused) { detail.hidden = true; hlT = null; $$('.dm-item.hl', stage).forEach((el) => el.classList.remove('hl')); }
  }
  function setSpeed(sp) {
    speed = sp;
    stage.style.setProperty('--dm-dur', (dcfg.speeds[sp] || dcfg.speeds.mid) + 's');
    $$('.dm-sp', bar).forEach((b) => b.classList.toggle('on', b.dataset.sp === sp));
    if (view === 'danmaku') renderDanmaku();     // 改速度后重排发车节奏
    saveViewPref();
  }

  /* —— 置顶菜单（长按弹出）—— */
  function hidePinMenu() {
    if (pinMenu) { pinMenu.remove(); pinMenu = null; }
  }
  function showPinMenu(x, y, t) {
    hidePinMenu();
    const pins = loadPins();
    const isPin = pins.has(t);
    pinMenu = document.createElement('div');
    pinMenu.className = 'dm-pin-menu';
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.textContent = isPin ? dcfg.labels.unpin : dcfg.labels.pinned;
    btn.addEventListener('click', () => {
      const cur = loadPins();
      if (isPin) cur.delete(t); else cur.add(t);
      Store.set(PIN_KEY, JSON.stringify(Array.from(cur)));
      hidePinMenu();
      resortList();
      if (view === 'danmaku') renderDanmaku();
      toast(isPin ? '已取消置顶' : '已置顶这条祝福 ★');
    });
    pinMenu.appendChild(btn);
    document.body.appendChild(pinMenu);
    const mw = 120, mh = 40;
    pinMenu.style.left = clamp(x - mw / 2, 8, innerWidth - mw - 8) + 'px';
    pinMenu.style.top = clamp(y + 14, 8, innerHeight - mh - 8) + 'px';
    setTimeout(() => {
      document.addEventListener('pointerdown', function onClose(e) {
        if (pinMenu && !pinMenu.contains(e.target)) { hidePinMenu(); document.removeEventListener('pointerdown', onClose); }
      });
    }, 0);
  }

  /* —— 弹幕交互：点击暂停查看；长按 600ms 置顶菜单 —— */
  let holdTimer = null, holdFired = false;
  stage.addEventListener('pointerdown', (e) => {
    const item = e.target.closest('.dm-item');
    if (!item) return;
    holdFired = false;
    const r = item.getBoundingClientRect();
    holdTimer = setTimeout(() => {
      holdFired = true;
      showPinMenu(r.left + r.width / 2, r.bottom, item.dataset.t);
    }, 600);
  });
  ['pointerup', 'pointerleave', 'pointercancel'].forEach((ev) =>
    stage.addEventListener(ev, () => { clearTimeout(holdTimer); })
  );
  stage.addEventListener('click', (e) => {
    if (holdFired) { holdFired = false; return; }   // 长按后的 click 不当暂停处理
    const item = e.target.closest('.dm-item');
    if (!item) {                                     // 点空白处 → 恢复滚动
      if (paused) setPaused(false);
      return;
    }
    if (paused && hlT === item.dataset.t) { setPaused(false); return; }
    setPaused(true);
    hlT = item.dataset.t;
    $$('.dm-item', stage).forEach((el) => el.classList.toggle('hl', el === item));
    const msgs = readMsgs();
    const m = msgs.find((x) => String(x.t) === hlT);
    if (m) {
      const time = (+m.t > 99999) ? new Date(+m.t).toLocaleString() : '来自默认祝福';
      detail.innerHTML = '<b>' + esc(m.text) + '</b><span>' + esc(m.by || '匿名朋友') + ' · ' + time + '</span>';
      detail.hidden = false;
    }
  });

  /* —— 控制条事件 —— */
  bar.addEventListener('click', (e) => {
    const b = e.target.closest('.dm-btn');
    if (!b) return;
    if (b.dataset.view) setView(b.dataset.view);
    else if (b.classList.contains('dm-pause')) setPaused(!paused);
    else if (b.dataset.sp) setSpeed(b.dataset.sp);
  });

  // 减少动效开关变化：弹幕视图立即回退为列表
  const reduceObs = new MutationObserver(() => {
    if (fxReduced() && view === 'danmaku') { setView('list'); toast(dcfg.labels.reducedOff); }
  });
  reduceObs.observe(document.body, { attributes: true, attributeFilter: ['class'] });

  // 留言增删后同步弹幕与置顶排序（叠加在既有 submit/删除流程之后）
  $('#bookForm').addEventListener('submit', () => setTimeout(() => { resortList(); if (view === 'danmaku') renderDanmaku(); }, 120));
  listEl.addEventListener('click', (e) => {
    if (e.target.classList.contains('del')) setTimeout(resortList, 120);
  });

  // 初始视图
  setSpeed(speed);
  setView(view);
  resortList();
}

/* —— F2：进度存档 + 欢迎回来（key: birthday_progress_v1，见上方常量区）——
   通过叠加事件监听收集进度，不侵入既有函数：
   现有监听先改 DOM 状态，这里后注册的监听读到的是最终状态。 */

function initProgress() {
  if (!CONFIG.enableProgress) return;
  const cfg = CONFIG.progressTexts;
  const sections = $$('main.site section[id]');
  if (!sections.length) return;

  function load() {
    try {
      const o = JSON.parse(Store.get(PROGRESS_KEY) || 'null');
      if (!o || typeof o !== 'object') return null;
      return {
        giftOpened: !!o.giftOpened,
        candlesBlown: (Array.isArray(o.candlesBlown) && o.candlesBlown.length === 3)
          ? o.candlesBlown.map(Boolean) : [false, false, false],
        starsLit: (Array.isArray(o.starsLit) && o.starsLit.length === 5)
          ? o.starsLit.map(Boolean) : [false, false, false, false, false],
        wishSaved: !!o.wishSaved,
        messagePosted: !!o.messagePosted,
        lastChapter: typeof o.lastChapter === 'string' ? o.lastChapter : '',
        updatedAt: +o.updatedAt || 0,
      };
    } catch (e) { return null; }
  }
  let prog = load() || {
    giftOpened: false, candlesBlown: [false, false, false],
    starsLit: [false, false, false, false, false],
    wishSaved: false, messagePosted: false, lastChapter: '', updatedAt: 0,
  };
  let saveTimer = null;
  function save() {
    prog.updatedAt = Date.now();
    clearTimeout(saveTimer);
    saveTimer = setTimeout(() => { Store.set(PROGRESS_KEY, JSON.stringify(prog)); }, 300);
  }

  // 1) 拆礼物
  const gift = $('#giftBtn');
  if (gift) gift.addEventListener('click', () => {
    prog.giftOpened = true; save();
    const wb = document.querySelector('.welcome-back');
    if (wb) wb.remove();                 // 已经进来了，欢迎条就不用了
  });

  // 2) 蜡烛：现有监听先切 out 类，这里读最终状态
  $$('.candle').forEach((c) => {
    c.addEventListener('click', () => {
      const i = +c.dataset.i;
      if (candles[i]) prog.candlesBlown[i] = c.classList.contains('out');
      save();
    });
  });

  // 3) 星星
  $$('.wish-star').forEach((b) => {
    b.addEventListener('click', () => {
      const i = +b.dataset.i;
      prog.starsLit[i] = b.classList.contains('lit');
      save();
    });
  });

  // 4) 愿望（输入非空才算保存）
  const wishInput = $('#wishInput');
  if (wishInput) wishInput.addEventListener('change', () => {
    if (wishInput.value.trim()) prog.wishSaved = true;
    save();
  });

  // 5) 留言（表单提交即记录，无论内容）
  const bookForm = $('#bookForm');
  if (bookForm) bookForm.addEventListener('submit', () => {
    prog.messagePosted = true; save();
  });

  // 6) lastChapter：滚动节流记录当前章节
  let scrollTimer = null;
  document.addEventListener('scroll', () => {
    if (!prog.giftOpened) return;
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(() => {
      const mid = scrollY + innerHeight * 0.4;
      let id = sections[0].id;
      sections.forEach((s) => { if (s.offsetTop <= mid) id = s.id; });
      if (id && id !== prog.lastChapter) { prog.lastChapter = id; save(); }
    }, 500);
  }, { passive: true });

  // 7) 恢复「已完成交互」的视觉标记：蜡烛不再有火焰、星星常亮
  const candles = $$('.candle');
  prog.candlesBlown.forEach((blown, i) => {
    if (blown && candles[i]) candles[i].classList.add('out');
  });
  const dots = $$('#starDots i');
  const countEl = $('#starCount');
  let litCount = 0;
  prog.starsLit.forEach((lit, i) => {
    const b = $('.wish-star[data-i="' + i + '"]');
    if (lit && b) b.classList.add('lit');
    if (lit && dots[i]) dots[i].classList.add('on');
    if (lit) litCount++;
  });
  if (countEl && litCount) countEl.textContent = String(litCount);
  if (litCount >= 5) { const secret = $('#secret'); if (secret) secret.hidden = false; }

  // 8) 欢迎回来：有历史进度、距上次访问超过阈值，且上次章节 ≠ 当前章节
  const introInner = document.querySelector('.intro-inner');
  const welcomeAfter = (+cfg.welcomeAfterMs > 0) ? +cfg.welcomeAfterMs : 5 * 60 * 1000;
  const curChapterId = sections[0].id;                 // 开场页正对应第一节
  const changedChapter = !!prog.lastChapter && prog.lastChapter !== curChapterId;
  if (introInner && prog.giftOpened && prog.updatedAt
      && Date.now() - prog.updatedAt > welcomeAfter && changedChapter) {
    const idx = sections.findIndex((s) => s.id === prog.lastChapter);
    const n = idx >= 0 ? idx + 1 : 1;
    const bar = document.createElement('div');
    bar.className = 'welcome-back';
    const span = document.createElement('span');
    span.textContent = cfg.welcome.replace('{n}', String(n));
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'btn btn-ghost welcome-continue';
    btn.textContent = cfg.continue;
    bar.appendChild(span);
    bar.appendChild(btn);
    const anchor = introInner.querySelector('.intro-hint');
    if (anchor) anchor.insertAdjacentElement('beforebegin', bar);
    else introInner.appendChild(bar);
    btn.addEventListener('click', () => {
      bar.remove();
      enterSite();
      setTimeout(() => {
        const target = document.getElementById(prog.lastChapter);
        if (target) target.scrollIntoView({ behavior: 'auto', block: 'start' });
      }, 950);
    });
  }

  // 9) 重新开始：结尾页按钮，二次确认，只清进度（愿望/留言/照片保留）
  const endActions = document.querySelector('#sec-end .end-actions-v2');
  if (endActions) {
    const rb = document.createElement('button');
    rb.type = 'button';
    rb.className = 'btn btn-ghost';
    rb.textContent = cfg.restartBtn;
    endActions.appendChild(rb);
    rb.addEventListener('click', () => {
      if (!confirm(cfg.restartConfirm)) return;
      Store.del(PROGRESS_KEY);
      prog = load() || {
        giftOpened: false, candlesBlown: [false, false, false],
        starsLit: [false, false, false, false, false],
        wishSaved: false, messagePosted: false, lastChapter: '', updatedAt: 0,
      };
      candles.forEach((c) => c.classList.remove('out'));
      prog.starsLit.forEach((_, i) => {
        const b = $('.wish-star[data-i="' + i + '"]');
        if (b) b.classList.remove('lit');
        if (dots[i]) dots[i].classList.remove('on');
      });
      if (countEl) countEl.textContent = '0';
      const secret = $('#secret');
      if (secret) secret.hidden = true;
      toast(cfg.restartDone);
    });
  }
}

/* —— F1：回忆卡片照片（key: birthday_photos_v1，结构 { cardIndex: base64 }）—— */

function initPhotos() {
  const cfg = CONFIG.memories;
  if (!cfg.enablePhotos) return;
  const deck = $('#deck');
  if (!deck) return;

  function loadPhotos() {
    try {
      const o = JSON.parse(Store.get(PHOTOS_KEY) || '{}');
      return (o && typeof o === 'object' && !Array.isArray(o)) ? o : {};
    } catch (e) { return {}; }
  }
  const photos = loadPhotos();

  function persist(silent) {
    const json = JSON.stringify(photos);
    const tooBig = () => { if (!silent) toast(cfg.photoTooBig); return false; };
    if (json.length > STORAGE_BUDGET) return tooBig();          // 照片本身太大
    // 写入前先看一遍总量：加上其他 key 后超配额就别写了
    if (storageUsed(PHOTOS_KEY) + json.length > STORAGE_BUDGET) return tooBig();
    if (!Store.set(PHOTOS_KEY, json)) return tooBig();          // 配额满 / 隐私模式未持久化
    return true;
  }

  function applyPhoto(memo, dataURL) {
    const img = memo.querySelector('.memo-photo');
    const art = memo.querySelector('.memo-art');
    const addBtn = memo.querySelector('.photo-add');
    const rmBtn = memo.querySelector('.photo-remove');
    const has = !!dataURL;
    if (img) { img.hidden = !has; if (has) img.src = dataURL; }
    if (art) art.hidden = has;
    if (addBtn) addBtn.textContent = has ? (cfg.photoChange || '更换') : (cfg.photoAdd || '放入照片');
    if (rmBtn) rmBtn.hidden = !has;
    memo.classList.toggle('has-photo', has);
  }

  // 共享的隐藏 input：一次选择，作用于当前卡片
  const fileInput = document.createElement('input');
  fileInput.type = 'file';
  fileInput.accept = 'image/*';
  fileInput.id = 'photoInput';
  fileInput.style.display = 'none';
  document.body.appendChild(fileInput);
  let curMemo = null, curIdx = -1;

  fileInput.addEventListener('change', () => {
    const f = fileInput.files && fileInput.files[0];
    const memos = $$('.memo', deck);
    // 没有从「放入照片」按钮进入时（理论上罕见），默认落在当前滚动到的卡片
    if (curIdx < 0) {
      const first = memos[0];
      const w = first ? first.offsetWidth + 16 : 300;
      curIdx = clamp(Math.round(deck.scrollLeft / w), 0, memos.length - 1);
      curMemo = memos[curIdx] || null;
    }
    if (!f || curIdx < 0 || !curMemo) return;
    compressImage(f, (dataURL) => {
      if (!dataURL) { toast(cfg.photoTooBig); return; }
      if (dataURL.length > PHOTO_MAX_CHARS) { toast(cfg.photoTooBig); return; }
      const prev = photos[curIdx];
      photos[curIdx] = dataURL;
      // 先删掉旧 key 再写新值：避免新旧照片并存把配额撑爆
      Store.del(PHOTOS_KEY);
      if (!persist()) {                  // 写失败 → 回滚到旧照片
        if (prev != null) photos[curIdx] = prev; else delete photos[curIdx];
        if (prev != null) persist(true);   // 尽量把旧照片写回去（静默，不重复弹提示）
        applyPhoto(curMemo, prev || null);
        return;
      }
      applyPhoto(curMemo, dataURL);
      Sound.ping(2);
      toast('照片已放进第 ' + (curIdx + 1) + ' 页手账 ✦');
    });
    fileInput.value = '';
  });

  // 给每张卡片注入照片层与按钮（此时 initMemories 已渲染完，DOM 就绪）
  $$('.memo', deck).forEach((memo, i) => {
    if (memo.querySelector('.memo-photo')) return;   // 防重复注入

    const art = memo.querySelector('.memo-art');
    const img = document.createElement('img');
    img.className = 'memo-photo';
    img.alt = '回忆照片';
    img.hidden = true;
    if (art) memo.insertBefore(img, art); else memo.insertBefore(img, memo.firstChild);

    const bar = document.createElement('div');
    bar.className = 'photo-bar';
    const addBtn = document.createElement('button');
    addBtn.type = 'button';
    addBtn.className = 'photo-btn photo-add';
    const rmBtn = document.createElement('button');
    rmBtn.type = 'button';
    rmBtn.className = 'photo-btn photo-remove';
    addBtn.textContent = cfg.photoAdd;
    rmBtn.textContent = cfg.photoRemove;
    rmBtn.hidden = true;
    bar.appendChild(addBtn);
    bar.appendChild(rmBtn);
    memo.appendChild(bar);

    addBtn.addEventListener('click', (e) => {
      e.stopPropagation();               // 别触发卡片翻面贴纸
      curMemo = memo; curIdx = i;
      fileInput.click();
    });
    rmBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      delete photos[i];
      persist();
      applyPhoto(memo, null);
      toast('照片已从这页收起');
    });

    applyPhoto(memo, photos[i] || null);
  });

  // 「照片仅保存在这台设备」小字
  const sec = $('#sec-memories');
  const sub = sec && sec.querySelector('.sec-sub');
  if (sec && sub && !sec.querySelector('.photo-tip')) {
    const tip = document.createElement('p');
    tip.className = 'sec-sub photo-tip';
    tip.textContent = cfg.photoTip;
    sub.insertAdjacentElement('afterend', tip);
  }
}
