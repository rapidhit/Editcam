import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useColors } from '@/hooks/useColors';

interface CategoryChipProps {
  label: string;
  icon: React.ComponentProps<typeof Feather>['name'];
  selected: boolean;
  onPress: () => void;
  color?: string;
  colorForeground?: string;
}

export function CategoryChip({
  label,
  icon,
  selected,
  onPress,
  color,
  colorForeground,
}: CategoryChipProps) {
  const colors = useColors();

  const selectedBg = color ?? colors.primary;
  const selectedFg = colorForeground ?? colors.primaryForeground;

  return (
    <Pressable
      onPress={onPress}
      hitSlop={4}
      style={({ pressed }) => [
        styles.chip,
        {
          backgroundColor: selected ? selectedBg : colors.secondary,
          opacity: pressed ? 0.8 : 1,
        },
      ]}
    >
      <Feather
        name={icon}
        size={14}
        color={selected ? selectedFg : colors.mutedForeground}
        style={styles.icon}
      />
      <Text
        style={[
          styles.label,
          { color: selected ? selectedFg : colors.foreground },
        ]}
        numberOfLines={1}
      >
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 9,
    paddingHorizontal: 14,
    borderRadius: 100,
    marginRight: 8,
  },
  icon: {
    marginRight: 6,
  },
  label: {
    fontSize: 13,
    fontFamily: 'Inter_600SemiBold',
  },
});
