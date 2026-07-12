import React, { useLayoutEffect } from 'react';
import { Platform, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Stack, useLocalSearchParams, useNavigation } from 'expo-router';
import * as Clipboard from 'expo-clipboard';
import * as Haptics from 'expo-haptics';
import { useColors } from '@/hooks/useColors';
import { useFavorites } from '@/contexts/FavoritesContext';
import { useToast } from '@/contexts/ToastContext';
import { getCategoryById, getPromptById } from '@/data/prompts';

export default function PromptDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const colors = useColors();
  const navigation = useNavigation();
  const { isFavorite, toggleFavorite } = useFavorites();
  const { showToast } = useToast();

  const prompt = getPromptById(id ?? '');
  const category = prompt ? getCategoryById(prompt.categoryId) : undefined;
  const favorite = prompt ? isFavorite(prompt.id) : false;

  useLayoutEffect(() => {
    if (!prompt) return;
    navigation.setOptions({
      title: category?.shortName ?? 'Prompt',
      headerRight: () => (
        <Pressable
          onPress={() => toggleFavorite(prompt.id)}
          hitSlop={10}
          style={styles.headerButton}
        >
          <Feather
            name="heart"
            size={20}
            color={favorite ? colors.favorite : colors.mutedForeground}
          />
        </Pressable>
      ),
    });
  }, [navigation, prompt, category, favorite, colors, toggleFavorite]);

  if (!prompt) {
    return (
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <Text style={{ color: colors.foreground }}>Prompt not found.</Text>
      </View>
    );
  }

  const handleCopy = async () => {
    await Clipboard.setStringAsync(prompt.prompt);
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success).catch(
      () => {}
    );
    showToast('Prompt copied');
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Stack.Screen options={{ headerShown: true }} />
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={[
            styles.categoryBadge,
            { backgroundColor: category?.color ?? colors.accent },
          ]}
        >
          <Text
            style={[
              styles.categoryBadgeText,
              { color: category?.colorForeground ?? colors.accentForeground },
            ]}
          >
            {category?.name ?? ''}
          </Text>
        </View>

        <Text style={[styles.title, { color: colors.foreground }]}>
          {prompt.title}
        </Text>
        <Text style={[styles.description, { color: colors.mutedForeground }]}>
          {prompt.description}
        </Text>

        <View
          style={[
            styles.promptBox,
            { backgroundColor: colors.card, borderColor: colors.border },
          ]}
        >
          <Text style={[styles.promptLabel, { color: colors.mutedForeground }]}>
            PROMPT
          </Text>
          <Text selectable style={[styles.promptText, { color: colors.foreground }]}>
            {prompt.prompt}
          </Text>
        </View>

        <View
          style={[
            styles.tipBox,
            { backgroundColor: colors.secondary },
          ]}
        >
          <Feather name="info" size={15} color={colors.mutedForeground} style={styles.tipIcon} />
          <Text style={[styles.tipText, { color: colors.mutedForeground }]}>
            Paste this alongside your photo into ChatGPT, Gemini, or any AI
            image editor you like.
          </Text>
        </View>
      </ScrollView>

      <View
        style={[
          styles.footer,
          { backgroundColor: colors.background, borderTopColor: colors.border },
        ]}
      >
        <Pressable
          onPress={handleCopy}
          style={({ pressed }) => [
            styles.copyButton,
            { backgroundColor: colors.primary, opacity: pressed ? 0.85 : 1 },
          ]}
        >
          <Feather name="copy" size={17} color={colors.primaryForeground} />
          <Text style={[styles.copyButtonText, { color: colors.primaryForeground }]}>
            Copy Prompt
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerButton: {
    padding: 4,
    marginRight: Platform.OS === 'ios' ? 0 : 8,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 24,
  },
  categoryBadge: {
    alignSelf: 'flex-start',
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 100,
    marginBottom: 14,
  },
  categoryBadgeText: {
    fontSize: 12,
    fontFamily: 'Inter_600SemiBold',
    textTransform: 'uppercase',
    letterSpacing: 0.4,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Inter_700Bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 15,
    fontFamily: 'Inter_400Regular',
    lineHeight: 21,
    marginBottom: 20,
  },
  promptBox: {
    borderRadius: 18,
    borderWidth: StyleSheet.hairlineWidth,
    padding: 18,
    marginBottom: 16,
  },
  promptLabel: {
    fontSize: 11,
    fontFamily: 'Inter_600SemiBold',
    letterSpacing: 0.6,
    marginBottom: 10,
  },
  promptText: {
    fontSize: 15,
    fontFamily: 'Inter_400Regular',
    lineHeight: 23,
  },
  tipBox: {
    flexDirection: 'row',
    borderRadius: 14,
    padding: 14,
    gap: 10,
  },
  tipIcon: {
    marginTop: 1,
  },
  tipText: {
    flex: 1,
    fontSize: 13,
    fontFamily: 'Inter_400Regular',
    lineHeight: 19,
  },
  footer: {
    padding: 16,
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  copyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 52,
    borderRadius: 16,
    gap: 8,
  },
  copyButtonText: {
    fontSize: 16,
    fontFamily: 'Inter_600SemiBold',
  },
});
