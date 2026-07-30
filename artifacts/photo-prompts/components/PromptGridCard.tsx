import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useColors } from '@/hooks/useColors';
import type { Prompt } from '@/data/prompts';
import { getThumbnail } from '@/data/thumbnails';

interface PromptGridCardProps {
  prompt: Prompt;
  categoryLabel: string;
  categoryColor: string;
  categoryColorForeground: string;
  isFavorite: boolean;
  onPress: () => void;
  onToggleFavorite: () => void;
}

function PromptGridCardInner({
  prompt,
  categoryLabel,
  categoryColor,
  categoryColorForeground,
  isFavorite,
  onPress,
  onToggleFavorite,
}: PromptGridCardProps) {
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
          opacity: pressed ? 0.92 : 1,
        },
      ]}
    >
      <View style={styles.imageWrap}>
        {thumbnail ? (
          <Image source={thumbnail} style={styles.image} resizeMode="cover" />
        ) : (
          <View
            style={[
              styles.imagePlaceholder,
              { backgroundColor: categoryColor },
            ]}
          >
            <Feather
              name="image"
              size={22}
              color={categoryColorForeground}
              style={{ opacity: 0.85 }}
            />
          </View>
        )}

        <View style={[styles.badge, { backgroundColor: categoryColor }]}>
          <Text style={[styles.badgeText, { color: categoryColorForeground }]}>
            {categoryLabel}
          </Text>
        </View>

        <Pressable
          onPress={onToggleFavorite}
          hitSlop={10}
          style={styles.heartButton}
        >
          <View style={styles.heartBg}>
            <Feather
              name="heart"
              size={15}
              color={isFavorite ? colors.favorite : '#FFFFFF'}
            />
          </View>
        </Pressable>
      </View>

      <View style={styles.textWrap}>
        <Text
          style={[styles.title, { color: colors.foreground }]}
          numberOfLines={1}
        >
          {prompt.title}
        </Text>
        <Text
          style={[styles.description, { color: colors.mutedForeground }]}
          numberOfLines={2}
        >
          {prompt.description}
        </Text>
      </View>
    </Pressable>
  );
}

export const PromptGridCard = React.memo(PromptGridCardInner);

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: 18,
    borderWidth: StyleSheet.hairlineWidth,
    overflow: 'hidden',
    shadowColor: '#1A1533',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    boxShadow: '0px 2px 8px rgba(26, 21, 51, 0.05)',
    elevation: 1,
  },
  imageWrap: {
    width: '100%',
    aspectRatio: 1,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imagePlaceholder: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  badge: {
    position: 'absolute',
    top: 8,
    left: 8,
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 100,
  },
  badgeText: {
    fontSize: 10,
    fontFamily: 'Inter_600SemiBold',
    textTransform: 'uppercase',
    letterSpacing: 0.4,
  },
  heartButton: {
    position: 'absolute',
    top: 6,
    right: 6,
  },
  heartBg: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.35)',
  },
  textWrap: {
    paddingHorizontal: 12,
    paddingTop: 10,
    paddingBottom: 14,
  },
  title: {
    fontSize: 14.5,
    fontFamily: 'Inter_700Bold',
    marginBottom: 3,
  },
  description: {
    fontSize: 12,
    fontFamily: 'Inter_400Regular',
    lineHeight: 16,
  },
});
