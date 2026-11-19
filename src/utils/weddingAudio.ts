/**
 * Web Audio API synthesizer for traditional Indian Shehnai & Tanpura wedding raag.
 * Plays a peaceful, sacred melody in Raag Yaman / Bilawal (auspicious Indian wedding scales).
 */

class WeddingAudioPlayer {
  private ctx: AudioContext | null = null;
  private isPlaying = false;
  private gainNode: GainNode | null = null;
  private intervalId: number | null = null;
  private masterVolume = 0.3;

  private init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
  }

  public togglePlay(onStateChange?: (playing: boolean) => void): boolean {
    if (this.isPlaying) {
      this.stop();
      if (onStateChange) onStateChange(false);
      return false;
    } else {
      this.start();
      if (onStateChange) onStateChange(true);
      return true;
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  public start() {
    this.init();
    if (!this.ctx) return;
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    this.isPlaying = true;

    // Master gain
    this.gainNode = this.ctx.createGain();
    this.gainNode.gain.setValueAtTime(this.masterVolume, this.ctx.currentTime);
    this.gainNode.connect(this.ctx.destination);

    // Tanpura Drone (Sa, Pa, Sa octaves)
    this.startTanpuraDrone();

    // Shehnai Melody Notes (Raag Yaman notes: Sa, Re, Ga, Ma(tivra), Pa, Dha, Ni, Sa)
    // Frequencies based on base C# (138.59 Hz)
    const baseSa = 277.18; // C#4
    const notes = [
      baseSa,           // Sa
      baseSa * 1.125,   // Re (D#)
      baseSa * 1.25,    // Ga (E# / F)
      baseSa * 1.406,   // Tivra Ma (G)
      baseSa * 1.5,     // Pa (G#)
      baseSa * 1.6875,  // Dha (A#)
      baseSa * 1.875,   // Ni (C)
      baseSa * 2.0,     // Taar Sa (C#5)
    ];

    // Melodic phrases resembling auspicious Mangal Vadhyam / Shehnai
    const melodyPhrase = [
      { note: notes[0], dur: 0.9 },
      { note: notes[1], dur: 0.6 },
      { note: notes[2], dur: 1.2 },
      { note: notes[4], dur: 1.0 },
      { note: notes[3], dur: 0.8 },
      { note: notes[2], dur: 0.9 },
      { note: notes[1], dur: 0.7 },
      { note: notes[0], dur: 1.4 },
      { note: notes[4], dur: 0.8 },
      { note: notes[5], dur: 0.8 },
      { note: notes[6], dur: 1.0 },
      { note: notes[7], dur: 1.8 },
      { note: notes[6], dur: 0.6 },
      { note: notes[5], dur: 0.8 },
      { note: notes[4], dur: 1.2 },
      { note: notes[2], dur: 1.0 },
      { note: notes[0], dur: 2.0 },
    ];

    let noteIdx = 0;
    const playNext = () => {
      if (!this.isPlaying || !this.ctx || !this.gainNode) return;
      const current = melodyPhrase[noteIdx % melodyPhrase.length];
      this.playShehnaiTone(current.note, current.dur);
      noteIdx++;

      const nextDelay = (current.dur + 0.15) * 1000;
      this.intervalId = window.setTimeout(playNext, nextDelay);
    };

    playNext();
  }

  private startTanpuraDrone() {
    if (!this.ctx || !this.gainNode) return;

    // Sa, Pa drone frequencies
    const droneFreqs = [138.59, 207.65, 277.18];
    droneFreqs.forEach(freq => {
      if (!this.ctx || !this.gainNode) return;
      const osc = this.ctx.createOscillator();
      const droneGain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      droneGain.gain.setValueAtTime(0.04, this.ctx.currentTime);

      // Subtle slow modulation to simulate tanpura plucking strum
      const lfo = this.ctx.createOscillator();
      const lfoGain = this.ctx.createGain();
      lfo.frequency.setValueAtTime(0.3, this.ctx.currentTime);
      lfoGain.gain.setValueAtTime(0.02, this.ctx.currentTime);
      lfo.connect(lfoGain);
      lfoGain.connect(droneGain.gain);

      osc.connect(droneGain);
      droneGain.connect(this.gainNode);

      osc.start();
      lfo.start();
    });
  }

  private playShehnaiTone(freq: number, duration: number) {
    if (!this.ctx || !this.gainNode) return;

    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const filter = this.ctx.createBiquadFilter();
    const toneGain = this.ctx.createGain();

    // Shehnai has rich nasal harmonics (sawtooth mixed with subtle square, bandpass filter)
    osc1.type = 'sawtooth';
    osc2.type = 'triangle';

    osc1.frequency.setValueAtTime(freq, this.ctx.currentTime);
    osc2.frequency.setValueAtTime(freq * 2, this.ctx.currentTime); // Harmonic octave

    // Subtle gamak / meend (Indian pitch bend vibrato)
    const vibrato = this.ctx.createOscillator();
    const vibratoGain = this.ctx.createGain();
    vibrato.frequency.setValueAtTime(5.5, this.ctx.currentTime);
    vibratoGain.gain.setValueAtTime(freq * 0.025, this.ctx.currentTime);
    vibrato.connect(vibratoGain);
    vibratoGain.connect(osc1.frequency);

    // Warm resonant acoustic filter
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(freq * 2.2, this.ctx.currentTime);
    filter.Q.setValueAtTime(2.5, this.ctx.currentTime);

    // Envelope (soft attack like breath into Shehnai reed, gentle release)
    const now = this.ctx.currentTime;
    toneGain.gain.setValueAtTime(0.001, now);
    toneGain.gain.exponentialRampToValueAtTime(0.12, now + 0.15);
    toneGain.gain.setValueAtTime(0.11, now + duration - 0.2);
    toneGain.gain.exponentialRampToValueAtTime(0.001, now + duration);

    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(toneGain);
    toneGain.connect(this.gainNode);

    vibrato.start(now);
    osc1.start(now);
    osc2.start(now);

    vibrato.stop(now + duration + 0.1);
    osc1.stop(now + duration + 0.1);
    osc2.stop(now + duration + 0.1);
  }

  public setVolume(vol: number) {
    this.masterVolume = Math.max(0, Math.min(1, vol));
    if (this.gainNode && this.ctx) {
      this.gainNode.gain.setValueAtTime(this.masterVolume, this.ctx.currentTime);
    }
  }

  public stop() {
    this.isPlaying = false;
    if (this.intervalId !== null) {
      clearTimeout(this.intervalId);
      this.intervalId = null;
    }
    if (this.ctx) {
      this.ctx.close();
      this.ctx = null;
    }
  }
}

export const weddingAudio = new WeddingAudioPlayer();
