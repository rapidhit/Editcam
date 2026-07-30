import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useColors } from '@/hooks/useColors';
import type { Prompt } from '@/data/prompts';
import { getThumbnail } from '@/data/thumbnails';

interface PromptCardProps {
  prompt: Prompt;
  categoryLabel: string;
  categoryColor: string;
  categoryColorForeground: string;
  isFavorite: boolean;
  onPress: () => void;
  onToggleFavorite: () => void;
}

function PromptCardInner({
  prompt,
  categoryLabel,
  categoryColor,
  categoryColorForeground,
  isFavorite,
  onPress,
  onToggleFavorite,
}: PromptCardProps) {
  const colors = useColors();
  const thumbnail = getThumbnail(prompt.id);

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

      <View style={styles.body}>
        <View style={styles.bodyText}>
          <Text style={[styles.title, { color: colors.foreground }]}>
            {prompt.title}
          </Text>
          <Text
            style={[styles.description, { color: colors.mutedForeground }]}
            numberOfLines={2}
          >
            {prompt.description}
          </Text>
        </View>
        {thumbnail ? (
          <Image
            source={thumbnail}
            style={[styles.thumbnail, { borderColor: colors.border }]}
            resizeMode="cover"
          />
        ) : null}
      </View>

      <View style={styles.viewHint}>
        <Text style={[styles.viewHintText, { color: colors.mutedForeground }]}>
          Tap to view prompt
        </Text>
        <Feather name="chevron-right" size={15} color={colors.mutedForeground} />
      </View>
    </Pressable>
  );
}

export const PromptCard = React.memo(PromptCardInner);

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
  body: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
    marginBottom: 14,
  },
  bodyText: {
    flex: 1,
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
  },
  thumbnail: {
    width: 76,
    height: 76,
    borderRadius: 12,
    borderWidth: StyleSheet.hairlineWidth,
  },
  viewHint: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    gap: 2,
  },
  viewHintText: {
    fontSize: 12.5,
    fontFamily: 'Inter_600SemiBold',
  },
});
