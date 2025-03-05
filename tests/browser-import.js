import { assert } from 'chai';

import {
  OfflineAudioCompletionEvent,
  AudioProcessingEvent,
  // AudioRenderCapacityEvent,
  BaseAudioContext,
  AudioContext,
  OfflineAudioContext,
  AudioNode,
  AudioScheduledSourceNode,
  AudioParam,
  AudioDestinationNode,
  AudioListener,
  AudioWorklet,
  AudioParamMap,
  // AudioRenderCapacity,
  PeriodicWave,
  AudioBuffer,
  ScriptProcessorNode,
  AudioWorkletNode,
  AnalyserNode,
  AudioBufferSourceNode,
  BiquadFilterNode,
  ChannelMergerNode,
  ChannelSplitterNode,
  ConstantSourceNode,
  ConvolverNode,
  DelayNode,
  DynamicsCompressorNode,
  GainNode,
  IIRFilterNode,
  MediaStreamAudioSourceNode,
  OscillatorNode,
  PannerNode,
  StereoPannerNode,
  WaveShaperNode,
  mediaDevices,
} from '../browser.js';

describe('node imports', () => {
  it(`should re-export all classes`, () => {
    assert.notEqual(OfflineAudioCompletionEvent, undefined);
    assert.notEqual(AudioProcessingEvent, undefined);
    // assert.notEqual(AudioRenderCapacityEvent, undefined);
    assert.notEqual(BaseAudioContext, undefined);
    assert.notEqual(AudioContext, undefined);
    assert.notEqual(OfflineAudioContext, undefined);
    assert.notEqual(AudioNode, undefined);
    assert.notEqual(AudioScheduledSourceNode, undefined);
    assert.notEqual(AudioParam, undefined);
    assert.notEqual(AudioDestinationNode, undefined);
    assert.notEqual(AudioListener, undefined);
    assert.notEqual(AudioWorklet, undefined);
    assert.notEqual(AudioParamMap, undefined);
    // assert.notEqual(AudioRenderCapacity, undefined);
    assert.notEqual(PeriodicWave, undefined);
    assert.notEqual(AudioBuffer, undefined);
    assert.notEqual(ScriptProcessorNode, undefined);
    assert.notEqual(AudioWorkletNode, undefined);
    assert.notEqual(AnalyserNode, undefined);
    assert.notEqual(AudioBufferSourceNode, undefined);
    assert.notEqual(BiquadFilterNode, undefined);
    assert.notEqual(ChannelMergerNode, undefined);
    assert.notEqual(ChannelSplitterNode, undefined);
    assert.notEqual(ConstantSourceNode, undefined);
    assert.notEqual(ConvolverNode, undefined);
    assert.notEqual(DelayNode, undefined);
    assert.notEqual(DynamicsCompressorNode, undefined);
    assert.notEqual(GainNode, undefined);
    assert.notEqual(IIRFilterNode, undefined);
    assert.notEqual(MediaStreamAudioSourceNode, undefined);
    assert.notEqual(OscillatorNode, undefined);
    assert.notEqual(PannerNode, undefined);
    assert.notEqual(StereoPannerNode, undefined);
    assert.notEqual(WaveShaperNode, undefined);
    assert.notEqual(mediaDevices, undefined);
  });
});
