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

  /* —— 回忆手账卡片（5 张）—— */
  memories: {
    title: '我们的时光手账',
    sub: '随手记下的几页，都是真的',
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
   2. 旧的 BOOK_KEY 数据会被自动清空，并写入新的默认示例。
   这样可以避免旧版本残留的"朋友/同谋"等标签和重复数据污染新版本。
   ========================================================================== */
const BOOK_KEY = 'birthday_guestbook_v1';
const BOOK_VERSION_KEY = 'birthday_guestbook_version';
const DATA_VERSION = 'v2';

function initBook() {
  const list = $('#bookList');
  const form = $('#bookForm');
  const input = $('#bookInput');
  const clearBtn = $('#clearBook');

  let msgs = load();

  function writeDefault() {
    // 把 CONFIG.book.samples 序列化成留言对象（custom:false 标记为默认）
    return CONFIG.book.samples.map((s, i) => ({ text: s.text, by: s.by, t: i, custom: false }));
  }

  function persist(arr) {
    try { localStorage.setItem(BOOK_KEY, JSON.stringify(arr)); } catch (e) {}
    try { localStorage.setItem(BOOK_VERSION_KEY, DATA_VERSION); } catch (_) {}
  }

  function load() {
    // —— 步骤 1：先读版本号，判断是否需要重置
    let storedVer = null;
    try { storedVer = localStorage.getItem(BOOK_VERSION_KEY); } catch (_) {}
    if (storedVer !== DATA_VERSION) {
      // 旧版本 / 首次访问 / 数据格式升级：直接清空旧留言，
      // 写入新的默认示例，并打上当前版本号。彻底告别"朋友/同谋"等旧标签。
      try { localStorage.removeItem(BOOK_KEY); } catch (_) {}
      const fresh = writeDefault();
      persist(fresh);
      return fresh;
    }
    // —— 步骤 2：版本号匹配，尝试读取已有数据
    try {
      const raw = localStorage.getItem(BOOK_KEY);
      if (raw) {
        const arr = JSON.parse(raw);
        if (Array.isArray(arr)) return arr;
      }
    } catch (e) { /* 隐私模式或旧数据损坏 */ }
    // —— 步骤 3：数据为空/损坏 → 重新初始化
    const fresh = writeDefault();
    persist(fresh);
    return fresh;
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
    const saved = localStorage.getItem('birthday_reduce_fx') === '1';
    apply(saved);
    reduceBtn.hidden = false;
    reduceBtn.addEventListener('click', () => {
      const next = !body.classList.contains('reduce-fx-on');
      apply(next);
      try { localStorage.setItem('birthday_reduce_fx', next ? '1' : '0'); } catch (_) {}
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
      const html = '<!doctype html><html><head><meta charset=utf-8><title>\u751F\u65E5\u6D77\u62A5</title><style>' + css + '</style></head><body><div class=card><div class=sub>' + sub + '</div><h1 class=title>\u5C0F\u5362\u540C\u5B66\uFF0C\u751F\u65E5\u5FEB\u4E50</h1><div class=line></div><div class=txt>' + (V2.shareText || '').replace(/</g, '&lt;') + '</div><div class=seal>' + (V2.stampText || '') + '</div><div class=hint>\u957F\u6309\u56FE\u7247\u53EF\u4FDD\u5B58 \u00B7 ' + new Date().toLocaleDateString() + '</div></div><script>setTimeout(function(){try{window.print()}catch(e){}},300)</script></body></html>';
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

  // — 15. 新手引导气泡
  const guided = localStorage.getItem(V2.guideStorageKey);
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
        try { localStorage.setItem(V2.guideStorageKey, '1'); } catch (_) {}
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
