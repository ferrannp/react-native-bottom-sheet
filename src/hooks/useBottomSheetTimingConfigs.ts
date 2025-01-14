import { useMemo } from 'react';
import Animated, {
  useWorkletCallback,
  withTiming,
} from 'react-native-reanimated';
import {
  DEFAULT_ANIMATION_DURATION,
  DEFAULT_ANIMATION_EASING,
} from '../components/bottomSheet/constants';

/**
 * Generate animation timing configs.
 * @default
 * - easing: Easing.out(Easing.exp)
 * - duration 500
 * @param configs overridable configs.
 */
export const useBottomSheetTimingConfigs = (
  configs: Animated.WithTimingConfig
) => {
  const overrideConfigs = useMemo(() => {
    const _configs: Animated.WithTimingConfig = {
      easing: DEFAULT_ANIMATION_EASING,
      duration: DEFAULT_ANIMATION_DURATION,
    };

    if (configs.easing) {
      _configs.easing = configs.easing;
    }

    if (configs.duration) {
      _configs.duration = configs.duration;
    }
    return _configs;
  }, [configs.duration, configs.easing]);
  const animationConfig = useWorkletCallback(
    (point: number, _, callback: () => void) =>
      withTiming(point, overrideConfigs, callback),
    [overrideConfigs]
  );
  return animationConfig;
};
