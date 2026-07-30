import React, { useRef, useState } from 'react';
import {
  Animated,
  Image,
  LayoutChangeEvent,
  PanResponder,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useColors } from '@/hooks/useColors';
import type { BeforeAfterPair } from '@/data/thumbnails';

interface Props {
  pair: BeforeAfterPair;
}

/**
 * Interactive before/after comparison slider.
 * The "after" image fills the frame; the "before" image is clipped to the
 * left of the draggable handle. Drag the handle to reveal more or less.
 */
export function BeforeAfterSlider({ pair }: Props) {
  const colors = useColors();
  const [width, setWidth] = useState(0);
  // position of the divider in px from the left; starts at the middle
  const pos = useRef(new Animated.Value(0)).current;
  const posValue = useRef(0);
  const widthRef = useRef(0);

  const clamp = (x: number) => Math.max(0, Math.min(widthRef.current, x));

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: (e) => {
        const x = clamp(e.nativeEvent.locationX);
        posValue.current = x;
        pos.setValue(x);
      },
      onPanResponderMove: (e) => {
        const x = clamp(e.nativeEvent.locationX);
        posValue.current = x;
        pos.setValue(x);
      },
    })
  ).current;

  const onLayout = (e: LayoutChangeEvent) => {
    const w = e.nativeEvent.layout.width;
    widthRef.current = w;
    setWidth(w);
    const mid = w / 2;
    posValue.current = mid;
    pos.setValue(mid);
  };

  return (
    <View
      style={[styles.wrapper, { borderColor: colors.border }]}
      onLayout={onLayout}
      {...panResponder.panHandlers}
    >
      {/* AFTER image (full, underneath) */}
      <Image source={pair.after} style={styles.image} resizeMode="cover" />
      <View style={styles.labelRight}>
        <Text style={styles.labelText}>After</Text>
      </View>

      {/* BEFORE image, clipped to the left of the divider */}
      <Animated.View style={[styles.beforeClip, { width: pos }]}>
        <Image
          source={pair.before}
          style={[styles.image, { width: width || '100%' }]}
          resizeMode="cover"
        />
        <View style={styles.labelLeft}>
          <Text style={styles.labelText}>Before</Text>
        </View>
      </Animated.View>

      {/* Divider + handle */}
      <Animated.View
        style={[styles.divider, { transform: [{ translateX: pos }] }]}
        pointerEvents="none"
      >
        <View style={styles.dividerLine} />
        <View style={[styles.handle, { backgroundColor: colors.background }]}>
          <Feather name="chevron-left" size={16} color={colors.foreground} />
          <Feather name="chevron-right" size={16} color={colors.foreground} />
        </View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    aspectRatio: 4 / 3,
    borderRadius: 18,
    borderWidth: StyleSheet.hairlineWidth,
    overflow: 'hidden',
    marginBottom: 16,
    backgroundColor: '#00000010',
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
  },
  beforeClip: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    overflow: 'hidden',
  },
  divider: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: -1,
    width: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dividerLine: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: 2,
    backgroundColor: 'rgba(255,255,255,0.9)',
  },
  handle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 1 },
    elevation: 3,
  },
  labelLeft: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: 'rgba(0,0,0,0.55)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },
  labelRight: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'rgba(0,0,0,0.55)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },
  labelText: {
    color: '#fff',
    fontSize: 12,
    fontFamily: 'Inter_700Bold',
  },
});
