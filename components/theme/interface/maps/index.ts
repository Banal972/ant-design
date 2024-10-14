import type { ColorPalettes, LegacyColorPalettes } from '../presetColors';
import type { SeedToken } from '../seeds';
import type { ColorMapToken } from './colors';
import type { FontMapToken } from './font';
import type { HeightMapToken, SizeMapToken } from './size';
import type { StyleMapToken } from './style';

export * from './colors';
export * from './font';
export * from './size';
export * from './style';

export interface CommonMapToken extends StyleMapToken {
  // Motion
  /**
   * @desc 动效播放速度，快速。用于小型元素动画交互
   * @descEN Motion speed, fast speed. Used for small element animation interaction.
   */
  motionDurationFast: string;
  /**
   * @desc 모션 속도, 중간 속도. 중간 요소 애니메이션 상호 작용에 사용됩니다.
   */
  motionDurationMid: string;
  /**
   * @desc 动效播放速度，慢速。用于大型元素如面板动画交互
   * @descEN Motion speed, slow speed. Used for large element animation interaction.
   */
  motionDurationSlow: string;
}

// ======================================================================
// ==                         Map Token                         ==
// ======================================================================
// 🔥🔥🔥🔥🔥🔥🔥 DO NOT MODIFY THIS. PLEASE CONTACT DESIGNER. 🔥🔥🔥🔥🔥🔥🔥

export interface MapToken
  extends SeedToken,
    ColorPalettes,
    LegacyColorPalettes,
    ColorMapToken,
    SizeMapToken,
    HeightMapToken,
    StyleMapToken,
    FontMapToken,
    CommonMapToken {}
