// 纯 WebAudio 合成音效与背景拨弦，无外部音频文件
export class Sfx {
  constructor(muted) { this.muted = muted; this.ctx = null; this.musicOn = false; }
  init() {
    if (this.ctx) return;
    try {
      const C = window.AudioContext || window.webkitAudioContext; this.ctx = new C();
      this.master = this.ctx.createGain(); this.master.gain.value = this.muted ? 0 : 0.55; this.master.connect(this.ctx.destination);
      const n = this.ctx.sampleRate * 1, buf = this.ctx.createBuffer(1, n, this.ctx.sampleRate), d = buf.getChannelData(0);
      for (let i = 0; i < n; i++) d[i] = Math.random() * 2 - 1; this.noiseBuf = buf;
    } catch (e) { this.ctx = null; }
  }
  setMuted(m) { this.muted = m; if (this.master) this.master.gain.value = m ? 0 : 0.55; }
  tone(f, dur, { type = 'sine', vol = 0.2, slide = 0, delay = 0, attack = 0.005 } = {}) {
    if (!this.ctx || this.muted) return;
    const t = this.ctx.currentTime + delay, o = this.ctx.createOscillator(), g = this.ctx.createGain();
    o.type = type; o.frequency.setValueAtTime(f, t); if (slide) o.frequency.exponentialRampToValueAtTime(Math.max(20, f * slide), t + dur);
    g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(vol, t + attack); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g); g.connect(this.master); o.start(t); o.stop(t + dur + 0.02);
  }
  noise(dur, { vol = 0.2, f = 1200, q = 1, type = 'bandpass', slide = 1, delay = 0 } = {}) {
    if (!this.ctx || this.muted) return;
    const t = this.ctx.currentTime + delay, s = this.ctx.createBufferSource(), fl = this.ctx.createBiquadFilter(), g = this.ctx.createGain();
    s.buffer = this.noiseBuf; s.loop = true; fl.type = type; fl.Q.value = q; fl.frequency.setValueAtTime(f, t); fl.frequency.exponentialRampToValueAtTime(Math.max(40, f * slide), t + dur);
    g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    s.connect(fl); fl.connect(g); g.connect(this.master); s.start(t); s.stop(t + dur + 0.02);
  }
  jump() { this.tone(330, 0.16, { type: 'triangle', slide: 1.7, vol: 0.14 }); }
  jump2() { this.tone(494, 0.18, { type: 'triangle', slide: 1.8, vol: 0.14 }); this.noise(0.12, { vol: 0.05, f: 2500 }); }
  dash() { this.noise(0.28, { vol: 0.22, f: 700, slide: 4, q: 0.7 }); }
  land() { this.noise(0.1, { vol: 0.14, f: 180, type: 'lowpass' }); }
  pound() { this.tone(90, 0.35, { slide: 0.4, vol: 0.4 }); this.noise(0.25, { vol: 0.25, f: 300, type: 'lowpass' }); }
  bounce() { this.tone(180, 0.3, { type: 'sine', slide: 3.2, vol: 0.25 }); }
  squirt() { this.noise(0.07, { vol: 0.06, f: 2600, slide: 0.5, q: 2 }); }
  splash() { this.noise(0.5, { vol: 0.3, f: 900, slide: 0.3, q: 0.5 }); }
  flower() { this.tone(1047, 0.12, { vol: 0.1 }); this.tone(1319, 0.16, { vol: 0.1, delay: 0.06 }); }
  gong() { for (const [f, v] of [[196, 0.3], [293, 0.16], [415, 0.1], [622, 0.06]]) this.tone(f, 1.6, { vol: v, slide: 0.97 }); this.noise(0.2, { vol: 0.1, f: 3000 }); }
  drum() { this.tone(70, 0.7, { slide: 0.5, vol: 0.55 }); this.noise(0.12, { vol: 0.2, f: 220, type: 'lowpass' }); }
  gate() { this.noise(1.2, { vol: 0.1, f: 260, q: 3, slide: 1.4 }); }
  pickup() { [523, 659, 784, 1047, 1319].forEach((f, i) => this.tone(f, 0.35, { type: 'triangle', vol: 0.16, delay: i * 0.07 })); }
  zip() { this.noise(2.4, { vol: 0.12, f: 500, slide: 3, q: 1.2 }); }
  boom(near) { this.noise(0.5, { vol: near ? 0.22 : 0.1, f: 400, type: 'lowpass', slide: 0.3 }); this.noise(0.6, { vol: 0.06, f: 5000, delay: 0.15 }); }
  win() { [523, 587, 659, 784, 880, 1047, 1175, 1319, 1568].forEach((f, i) => this.tone(f, 0.5, { type: 'triangle', vol: 0.18, delay: i * 0.09 })); }
  shot() { this.noise(0.11, { vol: 0.5, f: 1900, slide: 0.25, q: 0.6 }); this.noise(0.2, { vol: 0.3, f: 300, type: 'lowpass', slide: 0.4 }); this.tone(150, 0.09, { type: 'square', slide: 0.4, vol: 0.16 }); }
  dry() { this.tone(900, 0.03, { type: 'square', vol: 0.08 }); }
  reload() { this.noise(0.05, { vol: 0.16, f: 2400, q: 3, delay: 0.3 }); this.tone(520, 0.04, { type: 'square', vol: 0.07, delay: 0.32 }); this.noise(0.06, { vol: 0.2, f: 1600, q: 3, delay: 1.15 }); this.tone(380, 0.05, { type: 'square', vol: 0.09, delay: 1.17 }); this.noise(0.05, { vol: 0.2, f: 3000, q: 4, delay: 1.6 }); this.tone(700, 0.04, { type: 'square', vol: 0.08, delay: 1.62 }); }
  eshot(v = 1) { this.tone(880, 0.16, { type: 'sawtooth', slide: 0.3, vol: 0.07 * v }); this.noise(0.08, { vol: 0.06 * v, f: 3200, slide: 0.5 }); }
  explode(big) { this.noise(big ? 0.9 : 0.55, { vol: big ? 0.6 : 0.4, f: 500, type: 'lowpass', slide: 0.15 }); this.tone(big ? 55 : 80, 0.5, { slide: 0.4, vol: 0.4 }); }
  hurt() { this.tone(140, 0.14, { type: 'sawtooth', slide: 0.6, vol: 0.2 }); this.noise(0.08, { vol: 0.15, f: 700 }); }
  hitmark(kill) { this.tone(kill ? 1400 : 2100, 0.05, { type: 'square', vol: 0.06 }); if (kill) this.tone(900, 0.12, { type: 'triangle', vol: 0.12, delay: 0.04 }); }
  wave() { [220, 220, 330].forEach((f, i) => this.tone(f, 0.4, { type: 'sawtooth', vol: 0.12, delay: i * 0.22 })); }
  ammo() { this.tone(660, 0.08, { type: 'square', vol: 0.08 }); this.tone(990, 0.1, { type: 'square', vol: 0.08, delay: 0.07 }); }
  // 背景：五声音阶拨弦
  music() {
    if (!this.ctx || this.musicOn) return; this.musicOn = true;
    const scale = [196, 220, 261.6, 293.7, 329.6, 392, 440, 523.25];
    const phrase = [0, 2, 4, 3, 2, 4, 5, 4, 2, 1, 0, 2, 3, 1, 0, -1, 4, 5, 7, 5, 4, 3, 2, 4, 3, 2, 1, 0, 1, 2, 0, -1];
    let i = 0;
    const tick = () => {
      if (!this.ctx) return;
      const n = phrase[i % phrase.length]; i++;
      if (n >= 0 && !this.muted) {
        const f = scale[n];
        this.tone(f, 1.2, { type: 'triangle', vol: 0.035 }); this.tone(f * 2, 0.6, { vol: 0.012 });
        if (i % 4 === 1) this.tone(f / 2, 1.4, { vol: 0.045 });
      }
      setTimeout(tick, 420);
    };
    tick();
  }
}
