import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useColors } from '@/hooks/useColors';
import type { Prompt } from '@/data/prompts';

interface PromptCardProps {
  prompt: Prompt;
  categoryLabel: string;
  categoryColor: string;
  categoryColorForeground: string;
  isFavorite: boolean;
  onPress: () => void;
  onCopy: () => void;
  onToggleFavorite: () => void;
}

export function PromptCard({
  prompt,
  categoryLabel,
  categoryColor,
  categoryColorForeground,
  isFavorite,
  onPress,
  onCopy,
  onToggleFavorite,
}: PromptCardProps) {
  const colors = useColors();

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.card,
        {
          backgroundColor: colors.card,
          borderColor: colors.border,
          opacity: pressed ? 0.9 : 1,
        },
      ]}
    >
      <View style={styles.header}>
        <View
          style={[styles.badge, { backgroundColor: categoryColor }]}
        >
          <Text style={[styles.badgeText, { color: categoryColorForeground }]}>
            {categoryLabel}
          </Text>
        </View>
        <Pressable
          onPress={onToggleFavorite}
          hitSlop={10}
          style={styles.heartButton}
        >
          <Feather
            name="heart"
            size={18}
            color={isFavorite ? colors.favorite : colors.mutedForeground}
            style={isFavorite ? styles.heartFilled : undefined}
          />
        </Pressable>
      </View>

      <Text style={[styles.title, { color: colors.foreground }]}>
        {prompt.title}
      </Text>
      <Text
        style={[styles.description, { color: colors.mutedForeground }]}
        numberOfLines={2}
      >
        {prompt.description}
      </Text>

      <Pressable
        onPress={onCopy}
        hitSlop={6}
        style={({ pressed }) => [
          styles.copyButton,
          {
            backgroundColor: colors.secondary,
            opacity: pressed ? 0.75 : 1,
          },
        ]}
      >
        <Feather name="copy" size={14} color={colors.foreground} />
        <Text style={[styles.copyText, { color: colors.foreground }]}>
          Copy prompt
        </Text>
      </Pressable>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 18,
    borderWidth: StyleSheet.hairlineWidth,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#1A1533',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    boxShadow: '0px 2px 8px rgba(26, 21, 51, 0.05)',
    elevation: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  badge: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 100,
  },
  badgeText: {
    fontSize: 11,
    fontFamily: 'Inter_600SemiBold',
    textTransform: 'uppercase',
    letterSpacing: 0.4,
  },
  heartButton: {
    padding: 2,
  },
  heartFilled: {
    // Feather has no filled heart variant; color alone conveys state.
  },
  title: {
    fontSize: 17,
    fontFamily: 'Inter_700Bold',
    marginBottom: 4,
  },
  description: {
    fontSize: 13.5,
    fontFamily: 'Inter_400Regular',
    lineHeight: 19,
    marginBottom: 14,
  },
  copyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 100,
    gap: 6,
  },
  copyText: {
    fontSize: 12.5,
    fontFamily: 'Inter_600SemiBold',
  },
});
