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
      text: '五颗星都替你收好啦。新的一岁，愿你自由热烈，万事顺意，继续闪闪发光！累了随时回头，朋友一直都在。',
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
      { text: '生日快乐！新的一岁，愿你自由热烈，万事顺意，继续闪闪发光！', by: '小王同学' },
    ],
  },

  /* —— 结尾页 —— */
  ending: {
    kicker: '✦ 11.21 ✦',
    title: '生日快乐',
    // ★ 落款署名（结尾页底部 + 海报底部 "From 小王同学"）。这是写信人。
    //   海报上不再出现「XX 收」这类收件人印章。
    //   想改署名只改这一行。
    sign: '小王同学',            // ← 落款署名（替换成你的名字）
    againFwBtn: '再放一次烟花',
    copyBtn: '复制祝福链接',
    tip: '（悄悄说：长按上面的「生日快乐」试试）',
    // 长按标题 2 秒出现的额外祝福
    longPressEgg: '还有一句：谢谢你一直愿意听我碎碎念。新的一岁，愿你自由热烈，万事顺意，继续闪闪发光！',
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
    // 背景音乐文件（放在本目录，与 index.html 同级）：默认播放完整原曲
    file: 'music.mp3',
    volume: 0.3,                 // ← 原曲作为背景铺垫，压低到 0.3，不盖过点击音效
    autoStart: true,             // ← 拆完礼物是否自动开始播放（false = 手动点右上角按钮）
    // 无缝循环策略（按文件自适应，三级兜底都不丢）：
    //   ① 短音频（≤ maxLoopSeconds 且 ≤ maxDecodeBytes）走 Web Audio 无缝循环：
    //      解码后修剪首尾静音 + 交叉淡化，循环接缝听不出断点
    //   ② music.mp3 这类长音频（11MB / 279.6s）自动跳过解码，走 <audio loop> 原生循环，省内存
    //   ③ 文件缺失或解码失败再降级为内置合成八音盒
    maxLoopSeconds: 30,          // 解码后超过这个长度就放弃无缝处理，走 <audio loop>
    maxDecodeBytes: 8 * 1024 * 1024,  // 文件超过这个大小直接不解码（避免手机上解码大文件爆内存）
  },

  /* —— 音效（真实音频文件，零依赖）—— */
  sfx: {
    enable: true,                 // ← false = 所有音效静音（playSfx 直接 return）
    volume: 0.85,                 // 音效音量
    // 把下面 5 个 mp3 放到本目录（与 index.html 同级），文件名不要改
    files: {
      click: 'sfx-click.mp3',     // 按钮点击 / 拆礼物 / 卡片翻转
      page:  'sfx-page.mp3',      // 时光手账左右翻页
      blow:  'sfx-blow.mp3',      // 吹灭蜡烛
      chime: 'sfx-chime.mp3',     // 许愿成功 / 盖章 / 终极小信 / 当天烟花
      eat:   'sfx-eat.mp3',       // 点「隔空同享」蛋糕照片（吃东西反馈）
    },
    // 同一个音效两次播放的最小间隔（毫秒），0 = 不限制；防止狂点叠成噪音
    minGap: { eat: 300 },
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
  // ★ stampText = 页面交互用的印章文字（点「收下这句祝福」时出现）。
  //   两套「海报」画布已不再渲染它（避免出现「XX 收」像快递单），
  //   这里保留只影响网页里的印章交互。
    stampText: '小卢同学 · 收',                       // ← 页面印章文字（海报不渲染）
  candleWords: ['愿烦恼都被风吹走','愿想去的地方都能出发','愿快乐随时满格'],
  stickerReplies: ['收到！✦','哈哈，贴起来！','我就知道。','记下啦 ✧'],
  messageStickers: ['🌸','⭐','🎀','🍰','✨'],
  shareText: '今天是小卢同学的生日，这封祝福送给你：新的一岁，愿你自由热烈，万事顺意，继续闪闪发光！',  // ← 可替换
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
  playing: null,       // 'webaudio' = 无缝循环缓冲，'file' = <audio loop>，'synth' = 合成八音盒
  on: false,
  busy: false,         // 正在启动中（防止连点造成重复启动）
  synth: { timer: null, step: 0, nextAt: 0 },
  wa: {                // Web Audio 无缝循环的状态
    promise: null,     // 预取（fetch）promise
    ab: null,          // 音频二进制
    buf: null,         // 解码并做过接缝处理后的 AudioBuffer（短音频才保留）
    src: null,         // 当前播放的 AudioBufferSourceNode
    gain: null,
    tooLarge: false,   // 文件体积超限 → 不解码，走 <audio loop>
    failed: false,     // 预取/解码失败（file://、404、文件太大）→ 永久走 <audio loop>
  },

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

  /* —— 音效已改为真实音频文件（sfx-click / sfx-page / sfx-blow / sfx-chime）——
     见下方 Sfx 模块与全局 playSfx()。
     这里只保留背景音乐（music.mp3 + 无文件时的合成八音盒兜底）所需的 Web Audio。 */

  /* —— 背景音乐 —— */
  // 文件可用性：null=未知, true=可用, false=不可用（404/格式错/被浏览器拒）
  fileAvailable: null,
  // 第一次切到合成音时给一次温和提示，之后不再 toast
  synthNotified: false,

  initBgm() {
    // <audio> 元素：先不设 src，等确定要走「文件播放」这条路时再加载，
    // 免得短音频被 fetch 和 <audio> 各下载一遍
    this.bgmEl.loop = true;
    this.bgmEl.volume = clamp(CONFIG.music.volume, 0, 1);

    // 监听文件加载结果（决定之后是否再试文件）
    this.bgmEl.addEventListener('canplay', () => { this.fileAvailable = true; }, { once: true });
    // 文件缺失 / 格式错 / 循环异常 → 温和降级到合成八音盒，不打断页面
    this.bgmEl.addEventListener('error',   () => { this.fileAvailable = false; this.onBgmFail(); });

    // 真实播放/暂停状态 → 同步到 UI
    // 覆盖：浏览器原生控制 / 系统拦截 / 网络异常等情况
    this.bgmEl.addEventListener('play',  () => this.syncUi());
    this.bgmEl.addEventListener('pause', () => this.syncUi());

    // 初始 UI
    this.syncUi();

    // 后台预取音频二进制（只 fetch，不创建 AudioContext），为「无缝循环」做准备；失败静默
    this.prefetchBgm();
  },

  /* —— Web Audio 无缝循环（短音频专用）—— */

  /** 预取音乐文件二进制；file:// 下 fetch 被拦、404、文件过大 → 静默标记失败 */
  prefetchBgm() {
    if (this.wa.promise || this.wa.failed) return this.wa.promise || Promise.resolve();
    const url = CONFIG.music.file;
    const max = CONFIG.music.maxDecodeBytes || 8 * 1024 * 1024;
    // 先用 HEAD 探一下体积（只回 header，不传 body）：
    // 大文件（如 11MB 的 music.mp3）直接判定「不解码」，交给 <audio loop>，省流量也省手机内存
    this.wa.promise = fetch(url, { method: 'HEAD', cache: 'force-cache' })
      .then((r) => (r.ok ? r.headers.get('content-length') : null))
      .catch(() => null)                       // 服务器不支持 HEAD → 退化成 GET
      .then((lenStr) => {
        const len = Number(lenStr || 0);
        if (len && len > max) {                // 太大的文件不解码（手机上解码大文件容易爆内存）
          this.wa.tooLarge = true;
          throw new Error('file too large');
        }
        return fetch(url, { cache: 'force-cache' })
          .then((r) => {
            if (!r.ok) throw new Error('HTTP ' + r.status);
            return r.arrayBuffer();
          });
      })
      .then((ab) => { this.wa.ab = ab; })
      .catch(() => { this.wa.ab = null; this.wa.failed = true; });
    return this.wa.promise;
  },

  /** 解码成 AudioBuffer 并处理循环接缝；不可用时返回 null（静默回退） */
  async decodeBgm(timeoutMs = 2500) {
    if (this.wa.buf) return this.wa.buf;
    if (this.wa.failed) return null;
    const timer = new Promise((res) => setTimeout(res, timeoutMs));
    await Promise.race([this.prefetchBgm(), timer]);
    if (this.wa.failed || !this.wa.ab) return null;
    const ctx = this.ensure();
    if (!ctx || typeof ctx.decodeAudioData !== 'function') { this.wa.failed = true; return null; }
    try {
      const raw = await ctx.decodeAudioData(this.wa.ab);
      this.wa.ab = null;                       // decode 会转移 ArrayBuffer，用完即弃
      if (!raw || !raw.length || !raw.sampleRate) { this.wa.failed = true; return null; }
      const maxSec = CONFIG.music.maxLoopSeconds || 30;
      if (raw.duration > maxSec) {             // 太长就不做无缝处理，改用 <audio loop> 省内存
        this.wa.failed = true;
        return null;
      }
      this.wa.buf = this.makeSeamless(raw);
      return this.wa.buf;
    } catch (e) {
      this.wa.failed = true;                   // 解码失败（格式怪 / 带大图）→ 静默回退
      return null;
    }
  },

  /** 修剪首尾静音 + 交叉淡化：让循环接缝听不出停顿与爆音 */
  makeSeamless(buf) {
    try {
      const sr = buf.sampleRate;
      const chs = Math.max(1, buf.numberOfChannels || 1);
      const len = buf.length;
      if (!sr || !len) return buf;
      const chans = [];
      for (let c = 0; c < chs; c++) chans.push(buf.getChannelData(c));

      // 1) 找首尾静音（阈值 0.004，最多各裁 3 秒：音乐盒片段常带一段空白）
      const thr = 0.004;
      const maxTrim = Math.floor(sr * 3);
      let s = 0, e = len - 1;
      const quiet = (i) => {
        for (let c = 0; c < chs; c++) if (Math.abs(chans[c][i]) >= thr) return false;
        return true;
      };
      while (s < e && s < maxTrim && quiet(s)) s++;
      while (e > s && (len - 1 - e) < maxTrim && quiet(e)) e--;
      if (e <= s + 1) return buf;              // 全静音 / 太短 → 保持原样

      // 2) 交叉淡化（默认 60ms）：尾部淡出叠加到头部，接缝处不爆音
      const fade = Math.max(8, Math.min(Math.floor(sr * 0.06), Math.floor((e - s) / 4)));
      const outLen = (e - s + 1) - fade;
      if (outLen < 1) return buf;
      const out = this.ctx.createBuffer(chs, outLen, sr);
      for (let c = 0; c < chs; c++) {
        const srcD = chans[c];
        const dst = out.getChannelData(c);
        for (let i = 0; i < outLen; i++) dst[i] = srcD[s + i];
        for (let i = 0; i < fade; i++) {
          const t = i / fade;
          dst[i] = dst[i] * t + srcD[e - fade + 1 + i] * (1 - t);
        }
      }
      return out;
    } catch (e) {
      return buf;                              // 处理失败就用原样：宁可有一点缝也不报错
    }
  },

  /** 用 AudioBufferSourceNode 做真正无缝的循环播放 */
  playBuffer(buf) {
    this.stopBuffer();
    const ctx = this.ensure();
    if (!ctx) throw new Error('no AudioContext');
    const src = ctx.createBufferSource();
    src.buffer = buf;
    src.loop = true;                            // ← Web Audio 的循环机制
    const g = ctx.createGain();
    g.gain.value = clamp(CONFIG.music.volume, 0, 1);
    src.connect(g);
    g.connect(this.master);
    src.start(0);
    this.wa.src = src;
    this.wa.gain = g;
    return src;
  },

  stopBuffer() {
    const s = this.wa.src;
    if (s) {
      try { s.stop(); } catch (e) {}
      try { s.disconnect(); } catch (e) {}
    }
    if (this.wa.gain) { try { this.wa.gain.disconnect(); } catch (e) {} }
    this.wa.src = null;
    this.wa.gain = null;
  },

  /** <audio> 出错（文件缺失 / 格式怪 / 循环异常）→ 无声降级到合成八音盒 */
  onBgmFail() {
    if (!this.on || this.playing === 'webaudio' || this.playing === 'synth') return;
    try { this.bgmEl.pause(); } catch (e) {}
    this.startSynth();
    this.playing = 'synth';
  },

  /** 需要走 <audio loop> 时才给元素设 src（避免同一文件被下载两遍） */
  ensureBgmSrc() {
    try {
      if (!this.bgmEl.getAttribute('src')) {
        this.bgmEl.src = CONFIG.music.file;
        this.bgmEl.loop = true;
        this.bgmEl.preload = 'auto';
        this.bgmEl.volume = clamp(CONFIG.music.volume, 0, 1);
      }
    } catch (e) {}
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

  /** 开始背景音乐：Web Audio 无缝循环 → <audio loop> → 合成八音盒（三级兜底，任何一级失败都不报错） */
  async startBgm() {
    if (this.busy) { this.on = true; this.syncUi(); return; }   // 已在启动流程中
    this.ensure();
    if (this.ctx && this.ctx.state === 'suspended') {
      try { await this.ctx.resume(); } catch (e) {}
    }
    this.on = true;
    this.syncUi();
    this.busy = true;
    try {
      // 1) 首选「Web Audio 无缝循环」：短音频解码后修剪首尾静音 + 交叉淡化，接缝无断点
      const buf = await this.decodeBgm();
      if (!this.on) return;                     // 等待期间用户又关掉了
      if (buf) {
        try {
          this.playBuffer(buf);
          this.playing = 'webaudio';
          return;
        } catch (e) { /* 继续往下兜底 */ }
      }
      if (!this.on) return;

      // 2) 次选 <audio loop>（file:// 打开、文件太大或解码失败时走这里）
      if (this.fileAvailable !== false) {
        try {
          this.ensureBgmSrc();
          await this.bgmEl.play();
          if (!this.on) { this.bgmEl.pause(); return; }
          this.playing = 'file';
          return;
        } catch (e) {
          // 文件缺失/格式错/被浏览器拒 → 标记为不可用，下次不再试
          this.fileAvailable = false;
        }
      }
      if (!this.on) return;

      // 3) 最后回退到合成八音盒（不报错、不弹窗）
      this.startSynth();
      this.playing = 'synth';

      // 第一次切到合成时给一次温和 Toast 提示，之后不再打扰
      if (!this.synthNotified) {
        this.synthNotified = true;
        toast('\u80cc\u666f\u97f3\u4e50\u5df2\u5207\u6362\u5230\u5185\u7f6e\u516b\u97f3\u76d2 \u266a', 2400);
      }
    } finally {
      this.busy = false;
    }
  },

  stopBgm() {
    this.on = false;
    this.playing = null;
    try { this.bgmEl.pause(); } catch (e) {}
    this.stopBuffer();                          // 停掉 Web Audio 循环
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
   3.5 音效：真实音频文件（零依赖，直接播放同目录 mp3）
   —— sfx-click / sfx-page / sfx-blow / sfx-chime
   —— 文件缺失只打一条温和 warn 并静音降级，绝不影响页面流程
   ========================================================================== */
const Sfx = {
  els: {},          // name -> HTMLAudioElement
  warned: {},       // name -> 是否已提示过（避免同一个文件反复刷 warn）
  lastAt: {},       // name -> 上次播放的时间戳（用于最小间隔防抖）
  unlocked: false,  // 移动端是否已完成「手势解锁」

  /** 音量（0~1） */
  vol() {
    const v = (CONFIG.sfx && CONFIG.sfx.volume) != null ? CONFIG.sfx.volume : 0.85;
    return clamp(v, 0, 1);
  },

  /** 温和告警：只提示一次，静音降级，不抛错 */
  warn(name, src) {
    if (this.warned[name]) return;
    this.warned[name] = true;
    console.warn('[sfx] 音效文件不可用，已静音：' + src);
  },

  /** 实例化 + 预加载全部音效文件（页面初始化时调用；幂等，可重复调用） */
  init() {
    if (!CONFIG.sfx || CONFIG.sfx.enable === false) return;
    const files = CONFIG.sfx.files || {};
    Object.keys(files).forEach((name) => {
      if (this.els[name]) return;
      let el;
      try {
        el = new Audio(files[name]);
      } catch (e) {
        this.warn(name, files[name]);
        return;
      }
      el.preload = 'auto';
      el.volume = this.vol();
      el.addEventListener('error', () => this.warn(name, files[name]));
      try { el.load(); } catch (e) {}
      this.els[name] = el;
    });
  },

  /** 移动端解锁：必须在用户手势的同步事件里让每个音频各播一次（静音），
      否则之后的 play() 会被自动播放策略拒绝（桌面端无此限制） */
  unlock() {
    if (this.unlocked) return;
    this.unlocked = true;
    const vol = this.vol();
    Object.keys(this.els).forEach((name) => {
      const el = this.els[name];
      if (!el) return;
      const restore = () => { try { el.pause(); el.currentTime = 0; el.volume = vol; } catch (e) {} };
      try {
        el.volume = 0;
        const p = el.play();
        if (p && typeof p.then === 'function') {
          p.then(restore).catch(() => { try { el.volume = vol; } catch (e) {} });
        } else {
          restore();
        }
      } catch (e) {
        try { el.volume = vol; } catch (e2) {}
      }
    });
  },

  /** 播放一个音效；enable=false 或文件不可用时静默返回 */
  play(name) {
    if (!CONFIG.sfx || CONFIG.sfx.enable === false) return;
    const files = CONFIG.sfx.files || {};
    const src = files[name];
    if (!src) { console.warn('[sfx] 未定义的音效：' + name); return; }

    // 防抖：同一个音效两次播放至少间隔 CONFIG.sfx.minGap[name] 毫秒
    //（狂点蛋糕等场景下避免音效叠成噪音；未配置 = 不限制）
    const gaps = CONFIG.sfx.minGap || {};
    const gap = Number(gaps[name] || 0);
    if (gap > 0) {
      const now = Date.now();
      if (this.lastAt[name] && now - this.lastAt[name] < gap) return;
      this.lastAt[name] = now;
    }

    let el = this.els[name];
    if (!el) {
      this.init();
      el = this.els[name];
      if (!el) return;   // 文件不可用 → 已 warn，静音降级
    }
    try {
      el.currentTime = 0;   // 归零：防止连续点击时声音叠加 / 没声音
      const p = el.play();
      if (p && typeof p.catch === 'function') p.catch(() => {});  // 被自动播放策略拦截 → 静默
    } catch (e) {
      // 旧浏览器 play() 抛异常 → 静默降级
    }
  },
};

/** 全局播放入口：playSfx('click' | 'page' | 'blow' | 'chime' | 'eat') */
function playSfx(name) {
  try { Sfx.play(name); } catch (e) { /* 任何异常都不影响流程 */ }
}

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
        playSfx('chime');
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
    // 首个用户手势：实例化 + 预加载 + 解锁音效（移动端必须在手势里解锁）
    Sfx.init();
    Sfx.unlock();

    gift.classList.add('opened');
    playSfx('click');
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
      playSfx('blow');
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
    playSfx('click');
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
  let lastPage = 1;
  let lastBtnAt = 0;   // 按钮翻页的时间戳：避免与滑动翻页重复发声
  const goPage = (dir) => {
    lastBtnAt = Date.now();
    deck.scrollBy({ left: dir * step() });
    playSfx('page');
  };
  $('#prevCard').addEventListener('click', () => goPage(-1));
  $('#nextCard').addEventListener('click', () => goPage(1));

  let t = null;
  deck.addEventListener('scroll', () => {
    clearTimeout(t);
    t = setTimeout(() => {
      const cur = Math.round(deck.scrollLeft / step()) + 1;
      idx.textContent = `${clamp(cur, 1, cards.length)} / ${cards.length}`;
      // 左右滑动翻页发声（按钮翻页已单独发声，这里跳过，避免重复）
      if (cur !== lastPage && Date.now() - lastBtnAt > 400) playSfx('page');
      lastPage = cur;
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
      playSfx('chime');

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
    playSfx('chime');
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
    playSfx('click');
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
    playSfx('chime');
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
      playSfx('chime');
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
      playSfx('chime');
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
    playSfx('chime');
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
  Sfx.init();            // 预加载 4 个音效文件（避免首次播放时的网络延迟）
  // 首个用户手势时解锁音频：移动端自动播放策略要求 play() 发生在手势内
  addEventListener('pointerdown', () => { Sfx.init(); Sfx.unlock(); }, { once: true, passive: true });
  addEventListener('touchstart', () => { Sfx.init(); Sfx.unlock(); }, { once: true, passive: true });
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
    playSfx('chime');
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
      playSfx('chime');
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
      playSfx('click');
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
      playSfx('click');
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
      const css = 'body{margin:0;background:linear-gradient(160deg,#FBE7DA,#C5B5E8);min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:KaiTi,STKaiti,serif;color:#3C2F4A;padding:20px;box-sizing:border-box}.card{background:#FFFDF6;border:1px solid rgba(180,150,180,.3);border-radius:20px;padding:30px 24px;box-shadow:0 20px 60px rgba(160,140,180,.3);max-width:340px;width:100%;text-align:center}.sub{font-size:12px;color:#9b8ba6;letter-spacing:.15em;margin-bottom:14px}.title{font-size:22px;margin:0 0 16px;color:#C24A5C}.line{height:1px;background:linear-gradient(90deg,transparent,#E0B888,transparent);margin:14px 0}.txt{font-size:16px;line-height:1.8;color:#5b4f6a;white-space:pre-line}.seal{margin-top:18px;display:inline-block;padding:6px 14px;border:2px solid #C24A5C;color:#C24A5C;border-radius:8px;font-size:13px;letter-spacing:.1em;transform:rotate(-6deg)}.hint{font-size:11px;color:#9b8ba6;margin-top:24px}.preview{display:block;width:100%;max-width:340px;margin:18px auto 0;border-radius:14px;box-shadow:0 14px 30px -12px rgba(69,60,92,.4);-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}.actions{display:flex;gap:10px;justify-content:center;margin-top:16px;flex-wrap:wrap}.save,.print{font-family:inherit;font-size:14px;border-radius:999px;padding:11px 20px;cursor:pointer;border:1px solid transparent;-webkit-tap-highlight-color:transparent}.save{background:linear-gradient(135deg,#E07A8B,#C24A5C);color:#fff;box-shadow:0 12px 24px -10px rgba(194,74,92,.85)}.print{background:rgba(255,255,255,.72);color:#5b4f6a;border-color:rgba(180,150,180,.45)}.note{font-size:11px;color:#9b8ba6;margin:12px 0 0;max-width:340px;line-height:1.8;text-align:center}canvas.off{display:none}';
      const name = CONFIG.name || '小卢同学';
      const _now = new Date();
      const date = _now.getFullYear() + '.' + String(_now.getMonth() + 1).padStart(2, '0') + '.' + String(_now.getDate()).padStart(2, '0');
      const file = (CONFIG.name || '寿星') + '-生日海报.png';
      // 画海报图要用的数据，注入到新窗口里
      const data = JSON.stringify({
sub: sub, name: name, share: V2.shareText || '', date: date, file: file,
        sign: (CONFIG.ending && CONFIG.ending.sign) || '小王同学',
        url: String(location.href).replace(/^file:\/\//, ''),
      }).replace(/</g, '\\u003c');
      // 新窗口里的脚本：把海报画进 canvas，并接上「保存到手机 / 打印」两个按钮
      const posterScript =
        '(function(){' +
        'var D=' + data + ';' +
        'var c=document.getElementById("pc"),x=c.getContext("2d"),W=c.width,H=c.height;' +
        'var SR="Georgia, Songti SC, STSong, SimSun, serif";' +
        'var SN="PingFang SC, Microsoft YaHei, Hiragino Sans GB, sans-serif";' +
        'function rr(a,b,w,h,r){r=Math.min(r,w/2,h/2);x.beginPath();x.moveTo(a+r,b);x.arcTo(a+w,b,a+w,b+h,r);x.arcTo(a+w,b+h,a,b+h,r);x.arcTo(a,b+h,a,b,r);x.arcTo(a,b,a+w,b,r);x.closePath();}' +
        'function tracked(t,cx,y,sp){var ch=String(t||"").split(""),tot=0,i;for(i=0;i<ch.length;i++){tot+=x.measureText(ch[i]).width+sp;}tot-=sp;var px=cx-tot/2;x.textAlign="left";for(i=0;i<ch.length;i++){x.fillText(ch[i],px,y);px+=x.measureText(ch[i]).width+sp;}x.textAlign="center";}' +
        'function wrap(t,maxW){var P="，。、；：！？）】》」』…·,.;:!?)]}>";var out=[],line="";' +
        'var ps=String(t==null?"":t).replace(/\\r/g,"").split("\\n");' +
        'for(var i=0;i<ps.length;i++){var p=ps[i].trim();' +
        'if(!p){if(out.length)out.push("");continue;}' +
        'for(var j=0;j<p.length;j++){var ch=p[j];' +
        'if(line&&x.measureText(line+ch).width>maxW){if(P.indexOf(ch)>=0){line+=ch;continue;}out.push(line);line=ch;}' +
        'else{line+=ch;}}out.push(line);out.push("");}' +
        'while(out.length&&out[out.length-1]==="")out.pop();return out;}' +
        /* 背景：米白纸感 + 极淡暖色弧块 + 浅色横纹 */
        'x.fillStyle="#FBF8F3";x.fillRect(0,0,W,H);' +
        'x.fillStyle="rgba(201,169,106,.07)";x.beginPath();x.arc(W-120,H*0.16,300,0,Math.PI*2);x.fill();' +
        'x.fillStyle="rgba(176,137,104,.05)";x.beginPath();x.arc(90,H*0.92,240,0,Math.PI*2);x.fill();' +
        'x.fillStyle="rgba(160,140,110,.035)";for(var ty=0;ty<H;ty+=9){x.fillRect(0,ty,W,1);}' +
        /* 安全边距内的细线框（双层） */
        'x.strokeStyle="rgba(176,137,104,.5)";x.lineWidth=2;x.strokeRect(46,46,W-92,H-92);' +
        'x.strokeStyle="rgba(176,137,104,.22)";x.lineWidth=1;x.strokeRect(62,62,W-124,H-124);' +
        /* 眉标 */
        'x.textBaseline="alphabetic";x.textAlign="center";x.fillStyle="#B08968";x.font="300 24px "+SN;tracked("HAPPY BIRTHDAY",W/2,188,8);' +
        /* 副标题（日期） */
        'x.fillStyle="rgba(90,74,58,.62)";x.font="300 28px "+SN;x.fillText(D.sub,W/2,244);' +
        /* 主标题：名字（衬线、居中、放大） */
        'var nm=String(D.name||"");var ts=76;x.font="700 "+ts+"px "+SR;' +
        'while(ts>44&&x.measureText(nm).width>W-320){ts-=2;x.font="700 "+ts+"px "+SR;}' +
        'x.fillStyle="#3A322A";x.fillText(nm,W/2,318);' +
        'x.fillStyle="#B08968";x.font="300 40px "+SN;x.fillText("生日快乐",W/2,432);' +
        /* 分隔线 + 小菱形 */
        'var lg=x.createLinearGradient(300,0,W-300,0);lg.addColorStop(0,"rgba(176,137,104,0)");lg.addColorStop(.5,"rgba(176,137,104,.85)");lg.addColorStop(1,"rgba(176,137,104,0)");' +
        'x.fillStyle=lg;x.fillRect(300,480,W-600,1.5);' +
        'x.fillStyle="#B08968";x.save();x.translate(W/2,481);x.rotate(Math.PI/4);x.fillRect(-4,-4,8,8);x.restore();' +
        /* 正文：居中、自动换行、行高 1.6 */
        'x.fillStyle="#4E453A";var bodyMax=W-320,bs=30,lh=0,rows=[];' +
        'for(var si=0;si<3;si++){x.font=bs+"px "+SN;var ls=wrap(D.share,bodyMax);lh=Math.round(bs*1.6);' +
        'rows=[];for(var q=0;q<ls.length;q++){if(!ls[q]){if(rows.length)rows[rows.length-1].g=10;}else rows.push({t:ls[q],g:0});}' +
        'var tot=0;for(var q2=0;q2<rows.length;q2++)tot+=lh+rows[q2].g;' +
        'if(tot<=560||si===2){break;}bs-=2;}' +
        'x.font=bs+"px "+SN;x.fillStyle="#4E453A";var by=560+Math.max(0,Math.min(220,(640-tot)/2));x.textAlign="center";' +
        'for(var q3=0;q3<rows.length;q3++){x.fillText(rows[q3].t,W/2,by);by+=lh+rows[q3].g;}' +
        /* 装饰性英文 */
        'x.save();x.textAlign="center";x.fillStyle="rgba(176,137,104,.6)";x.font="italic 300 24px "+SN;' +
        'x.fillText("With Love",W/2,Math.min(by+58,H-248));x.restore();' +
        /* 底部：日期 + 落款右对齐 */
        'x.textAlign="right";x.fillStyle="rgba(90,74,58,.62)";x.font="300 26px "+SN;x.fillText("From "+(D.sign||"小王同学")+"　·　"+D.date,W-108,H-132);' +
        /* 左下角网址 */
        'x.textAlign="left";x.fillStyle="rgba(90,74,58,.34)";x.font="300 20px "+SN;x.fillText(D.url||"",108,H-132);' +
        'var url="";try{url=c.toDataURL("image/png");}catch(e){}' +
        'var img=document.getElementById("posterImg");if(url){img.src=url;}' +
        'document.getElementById("saveBtn").addEventListener("click",function(){' +
        'try{var u=url||c.toDataURL("image/png");var a=document.createElement("a");' +
        'a.href=u;a.download=D.file;a.rel="noopener";document.body.appendChild(a);a.click();' +
        'setTimeout(function(){a.remove();},1000);}' +
        'catch(e){try{window.open(c.toDataURL("image/png"),"_blank");}catch(e2){}}' +
        '});' +
        'document.getElementById("printBtn").addEventListener("click",function(){try{window.print();}catch(e){}});' +
        '})();';
      const w = window.open('', '_blank', 'width=420,height=640');
      if (!w) { toast('\u6D4F\u89C8\u5668\u62E6\u622A\u4E86\u5F39\u7A97'); return; }
      const html = '<!doctype html><html lang=zh-CN><head><meta charset=utf-8>' +
        '<meta name=viewport content="width=device-width,initial-scale=1,viewport-fit=cover">' +
        '<title>生日海报</title><style>' + css + '</style></head><body>' +
        '<div class=card><div class=sub>' + esc(sub) + '</div>' +
        '<h1 class=title>' + esc(name) + '，生日快乐</h1><div class=line></div>' +
        '<div class=txt>' + (V2.shareText || '').replace(/</g, '&lt;') + '</div>' +
        '<div class=hint>点击下方按钮保存海报 · ' + date + '</div></div>' +
        '<img id=posterImg class=preview alt="生日海报">' +
        '<div class=actions>' +
        '<button id=saveBtn class=save type=button>⬇️ 保存海报到手机</button>' +
        '<button id=printBtn class=print type=button>🖨 打印 / 存为 PDF</button></div>' +
        '<canvas id=pc class=off width=1080 height=1440></canvas>' +
        '<script>' + posterScript + '<\/script></body></html>';
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

/* —— 海报画布：540×720 —— */
const POSTER_W = 540, POSTER_H = 720;

/** 圆角矩形路径（海报卡片 / 照片裁切共用） */
function roundRect(ctx, x, y, w, h, r) {
  const rr = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + rr, y);
  ctx.arcTo(x + w, y, x + w, y + h, rr);
  ctx.arcTo(x + w, y + h, x, y + h, rr);
  ctx.arcTo(x, y + h, x, y, rr);
  ctx.arcTo(x, y, x + w, y, rr);
  ctx.closePath();
}

const POSTER_TEMPLATES = [
  {
    name: '樱花粉',
    title: '#8C3A5B', sub: 'rgba(140,58,91,.62)', body: '#6B4A57',
    serif: '"Georgia","Songti SC","STSong","SimSun",serif',
    sans: '"PingFang SC","Microsoft YaHei","Hiragino Sans GB",sans-serif',
    bg(ctx, W, H) {
      const g = ctx.createLinearGradient(0, 0, W, H);
      g.addColorStop(0, '#FDE3EC'); g.addColorStop(0.55, '#F7DAE6'); g.addColorStop(1, '#E6D5F1');
      ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
      // 白色卡纸 + 细描边
      ctx.fillStyle = 'rgba(255,253,251,.95)';
      roundRect(ctx, 22, 22, W - 44, H - 44, 14); ctx.fill();
      ctx.strokeStyle = 'rgba(224,139,166,.45)'; ctx.lineWidth = 1; ctx.stroke();
      // 右上角飘落的花瓣
      const r = seededRand(88);
      for (let i = 0; i < 16; i++) {
        const x = W - 46 + r() * 56, y = 34 + r() * 170, s = 3 + r() * 5;
        ctx.fillStyle = 'rgba(224,139,166,' + (0.16 + r() * 0.26).toFixed(3) + ')';
        ctx.beginPath();
        ctx.ellipse(x, y, s, s * 0.6, r() * Math.PI, 0, Math.PI * 2);
        ctx.fill();
      }
      posterNoise(ctx, W, H, 0.022, 700, 88);
    },
  },
  {
    name: '星空夜',
    title: '#F6F1E4', sub: 'rgba(246,241,228,.62)', body: 'rgba(246,241,228,.86)',
    serif: '"Georgia","Songti SC","STSong","SimSun",serif',
    sans: '"PingFang SC","Microsoft YaHei","Hiragino Sans GB",sans-serif',
    bg(ctx, W, H) {
      const g = ctx.createLinearGradient(0, 0, W * 0.6, H);
      g.addColorStop(0, '#1B2145'); g.addColorStop(0.6, '#2A2350'); g.addColorStop(1, '#43305C');
      ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
      // 星星
      const r = seededRand(1121);
      for (let i = 0; i < 120; i++) {
        const x = r() * W, y = r() * H, s = r() * 1.5 + 0.4;
        ctx.fillStyle = 'rgba(255,255,255,' + (0.12 + r() * 0.5).toFixed(3) + ')';
        ctx.beginPath(); ctx.arc(x, y, s, 0, Math.PI * 2); ctx.fill();
      }
      // 月亮
      ctx.save();
      ctx.globalAlpha = 0.9;
      ctx.fillStyle = '#F7E9B8';
      ctx.beginPath(); ctx.arc(W - 88, 92, 26, 0, Math.PI * 2); ctx.fill();
      ctx.globalCompositeOperation = 'destination-out';
      ctx.beginPath(); ctx.arc(W - 76, 84, 24, 0, Math.PI * 2); ctx.fill();
      ctx.restore();
      // 内框
      ctx.strokeStyle = 'rgba(232,201,122,.5)'; ctx.lineWidth = 1;
      roundRect(ctx, 22, 22, W - 44, H - 44, 14); ctx.stroke();
      posterNoise(ctx, W, H, 0.03, 700, 2024);
    },
  },
  {
    name: '奶油简',
    title: '#5A4632', sub: 'rgba(90,70,50,.6)', body: '#6B5844',
    serif: '"Georgia","Songti SC","STSong","SimSun",serif',
    sans: '"PingFang SC","Microsoft YaHei","Hiragino Sans GB",sans-serif',
    bg(ctx, W, H) {
      ctx.fillStyle = '#FBF7F0'; ctx.fillRect(0, 0, W, H);
      const g = ctx.createLinearGradient(0, 0, W, H);
      g.addColorStop(0, 'rgba(255,255,255,.9)');
      g.addColorStop(1, 'rgba(240,228,210,.55)');
      ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
      // 双层细框
      ctx.strokeStyle = 'rgba(201,169,106,.75)'; ctx.lineWidth = 1.4;
      roundRect(ctx, 22, 22, W - 44, H - 44, 10); ctx.stroke();
      ctx.strokeStyle = 'rgba(201,169,106,.32)'; ctx.lineWidth = 1;
      roundRect(ctx, 30, 30, W - 60, H - 60, 8); ctx.stroke();
      // 四角小金点
      ctx.fillStyle = 'rgba(201,169,106,.8)';
      [[34, 34], [W - 34, 34], [34, H - 34], [W - 34, H - 34]].forEach((p) => {
        ctx.beginPath(); ctx.arc(p[0], p[1], 2.6, 0, Math.PI * 2); ctx.fill();
      });
      posterNoise(ctx, W, H, 0.02, 700, 31415);
    },
  },
];

/** 海报纸面噪点（极淡颗粒，增加质感） */
function posterNoise(ctx, W, H, alpha, count, seed) {
  const r = seededRand(seed);
  for (let i = 0; i < count; i++) {
    const x = r() * W, y = r() * H, s = r() * 1.4 + 0.5;
    ctx.fillStyle = 'rgba(0,0,0,' + (alpha * (0.35 + r() * 0.65)).toFixed(4) + ')';
    ctx.fillRect(x, y, s, s);
  }
}

/** 自适应字号：保证文字不超宽 */
function fitFont(ctx, text, maxWidth, maxSize, minSize, fontTpl) {
  let size = maxSize;
  while (size > minSize) {
    ctx.font = fontTpl.replace('%s', size);
    if (ctx.measureText(text).width <= maxWidth) break;
    size -= 2;
  }
  ctx.font = fontTpl.replace('%s', size);
  return size;
}

/** 带字间距的排版（眉标等小字用） */
function drawTracked(ctx, text, x, y, spacing, align) {
  const chars = Array.from(String(text || ''));
  if (!chars.length) return;
  let total = 0;
  chars.forEach((ch) => { total += ctx.measureText(ch).width + spacing; });
  total -= spacing;
  const prev = ctx.textAlign;
  ctx.textAlign = 'left';
  let cx = align === 'right' ? x - total : (align === 'center' ? x - total / 2 : x);
  chars.forEach((ch) => { ctx.fillText(ch, cx, y); cx += ctx.measureText(ch).width + spacing; });
  ctx.textAlign = prev;
}

/** 四角星点缀（极淡） */
function posterSpark(ctx, x, y, size, color, alpha) {
  ctx.save();
  ctx.translate(x, y);
  ctx.globalAlpha = alpha;
  ctx.fillStyle = color;
  ctx.beginPath();
  for (let i = 0; i < 8; i++) {
    const ang = (Math.PI / 4) * i - Math.PI / 2;
    const rr = i % 2 === 0 ? size : size * 0.32;
    const px = Math.cos(ang) * rr, py = Math.sin(ang) * rr;
    if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
  }
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

/** Canvas 文本按宽度精确折行（中文逐字断行 + 标点避头尾 + 段落留空行） */
function wrapCanvasText(ctx, text, maxWidth) {
  const PUNCT = '，。、；：！？）】》」』”’…·,.;:!?)]}>';
  const lines = [];
  String(text == null ? '' : text).replace(/\r/g, '').split('\n').forEach((para) => {
    const p = para.trim();
    if (!p) { if (lines.length) lines.push(''); return; }
    let line = '';
    for (const ch of p) {
      const test = line + ch;
      if (line && ctx.measureText(test).width > maxWidth) {
        // 标点不落行首：让它跟着上一行走
        if (PUNCT.indexOf(ch) >= 0) { line = test; continue; }
        lines.push(line); line = ch;
      } else line = test;
    }
    lines.push(line);
    lines.push('');           // 段落之间留一个空行
  });
  while (lines.length && lines[lines.length - 1] === '') lines.pop();
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
    const W = POSTER_W, H = POSTER_H;
    canvas.width = W; canvas.height = H;          // 540×720
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, W, H);
    tpl.bg(ctx, W, H);
    ctx.textBaseline = 'top';

    const name = CONFIG.name || '寿星';
    const sub = (V2 && V2.posterSub) || CONFIG.birthdayText || '';
    const sign = (CONFIG.ending && CONFIG.ending.sign) || '';
    const dateText = CONFIG.birthdayText || new Date().toLocaleDateString();
    // 落款日期：2026.11.21 形式（与旧版海报一致）
    const _sd = new Date();
    const signDate = _sd.getFullYear() + '.' + String(_sd.getMonth() + 1).padStart(2, '0') + '.' + String(_sd.getDate()).padStart(2, '0');
    const body = String(textArea.value || '').trim();
    const M = 44;

    // 照片：圆角裁切（宽 = 画布宽 - 两侧安全边距）
    let photoBox = null;
    if (imgEl && state.photo !== 'none') {
      const pw = W - M * 2;
      const ar = imgEl.naturalWidth / imgEl.naturalHeight;
      const ph = Math.round(Math.min(pw / ar, 250));
      photoBox = { x: M, y: 0, w: pw, h: ph };
    }

    /* —— 排版：眉标 → 日期 → 标题 → 照片 → 正文 → 印章 → 落款 —— */
    const titleSize = fitFont(ctx, name, W - M * 2, 40, 24, '700 %spx ' + tpl.serif);
    const bodySize = 15;
    const bodyLH = Math.round(bodySize * 1.6);
    const maxBodyW = W - M * 2 - 16;

    ctx.font = bodySize + 'px ' + tpl.sans;
    let lines = wrapCanvasText(ctx, body, maxBodyW);
    const maxLines = photoBox ? 6 : 10;
    if (lines.length > maxLines) {
      lines = lines.slice(0, maxLines);
      // 去掉尾部空行，避免省略号单独占一行
      while (lines.length && !lines[lines.length - 1]) lines.pop();
      lines[lines.length - 1] = lines[lines.length - 1].replace(/.$/, '') + '…';
    }

    // 行 → 段落行（空行代表段间距）
    const rows = [];
    lines.forEach((ln) => {
      if (!ln) { if (rows.length) rows[rows.length - 1].gapAfter = 7; }
      else rows.push({ text: ln, gapAfter: 0 });
    });
    const hBody = rows.reduce((s, r) => s + bodyLH + r.gapAfter, 0);

    const hEyebrow = 14, hDate = 16, hTitle = titleSize, hSub = 24;
    const hPhoto = photoBox ? photoBox.h + 20 : 0;
    const hSign = 22;
    const fixed = hEyebrow + 8 + hDate + 18 + 14 + hTitle + 6 + hSub + 20 + hPhoto + hBody + hSign + 30;
    // 内容过长时按比例压缩间距，保证不溢出画布
    const k = fixed > H - M * 2 ? (H - M * 2) / fixed : 1;
    let y = Math.max(M, Math.round((H - fixed * k) / 2) - 4);

    // 1) 眉标 + 日期（居中）
    ctx.textAlign = 'center';
    ctx.fillStyle = tpl.sub;
    ctx.font = '300 11px ' + tpl.sans;
    drawTracked(ctx, 'HAPPY BIRTHDAY', W / 2, y, 3, 'center');
    y += (hEyebrow + 8) * k;
    ctx.font = '300 12px ' + tpl.sans;
    ctx.fillText(sub && sub.indexOf(dateText) >= 0 ? sub : (sub ? dateText + '　·　' + sub : dateText), W / 2, y);
    y += (hDate + 18) * k;

    // 2) 主标题 + 「，生日快乐」
    ctx.fillStyle = tpl.title;
    ctx.font = '700 ' + titleSize + 'px ' + tpl.serif;
    ctx.fillText(name, W / 2, y);
    y += (hTitle + 6) * k;
    ctx.font = '300 20px ' + tpl.sans;
    ctx.fillText('生日快乐', W / 2, y);
    y += (hSub + 20) * k;

    // 3) 一条细线
    ctx.fillStyle = tpl.line;
    ctx.globalAlpha = 0.7;
    ctx.fillRect(W / 2 - 26, y, 52, 1.5);
    ctx.globalAlpha = 1;
    y += 14 * k;

    // 4) 照片（圆角裁切）
    if (photoBox) {
      photoBox.y = Math.round(y);
      drawPhoto(photoBox);
      y += photoBox.h + 20 * k;
    }

    // 5) 祝福正文（居中折行，行高 1.6 倍字号）
    ctx.fillStyle = tpl.body;
    ctx.font = bodySize + 'px ' + tpl.sans;
    rows.forEach((r) => {
      ctx.fillText(r.text, W / 2, y);
      y += bodyLH * k + r.gapAfter * k;
    });
    y += 12 * k;

    // 6) 落款（署名 + 日期，右对齐）
    ctx.textAlign = 'right';
    ctx.fillStyle = tpl.sub;
    ctx.font = '300 12px ' + tpl.sans;
ctx.fillText(sign ? 'From ' + sign + '　·　' + signDate : signDate, W - M, H - M - 34);
    ctx.textAlign = 'center';

    // 7) 右下角网址（未使用二维码库，避免外部依赖）
    ctx.textAlign = 'right';
    ctx.textBaseline = 'alphabetic';
    ctx.fillStyle = tpl.foot;
    ctx.font = '300 10px ' + tpl.sans;
    const url = String(location.href).replace(/^file:\/\//, '');
    ctx.fillText(url.length > 46 ? url.slice(0, 45) + '…' : url, W - M, H - M + 6);
  }

  // —— 圆角照片（clip 后居中裁切） ——
  function drawPhoto(box) {
    ctx.save();
    roundRect(ctx, box.x, box.y, box.w, box.h, 12);
    ctx.clip();
    const ar = imgEl.naturalWidth / imgEl.naturalHeight;
    let dw = box.w, dh = box.h, ox = box.x, oy = box.y;
    if (ar > box.w / box.h) { dw = box.h * ar; ox = box.x - (dw - box.w) / 2; }
    else { dh = box.w / ar; oy = box.y - (dh - box.h) / 2; }
    ctx.drawImage(imgEl, ox, oy, dw, dh);
    ctx.restore();
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
        return;                             // 静音克制：减少动效下不播吃东西音效
      }
      playSfx('eat');                       // 吃东西反馈（300ms 内重复点击会被防抖挡掉）
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
      playSfx('click');
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
