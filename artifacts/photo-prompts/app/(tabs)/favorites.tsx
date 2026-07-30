import React from 'react';
import { FlatList, Platform, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useColors } from '@/hooks/useColors';
import { PromptGridCard } from '@/components/PromptGridCard';
import { EmptyState } from '@/components/EmptyState';
import { useFavorites } from '@/contexts/FavoritesContext';
import { PROMPTS, getCategoryById } from '@/data/prompts';

export default function FavoritesScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const { favoriteIds, isFavorite, toggleFavorite } = useFavorites();

  const favoritePrompts = PROMPTS.filter((p) => favoriteIds.includes(p.id));

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View
        style={[
          styles.header,
          { paddingTop: Platform.OS === 'web' ? 67 : insets.top + 8 },
        ]}
      >
        <Text style={[styles.title, { color: colors.foreground }]}>
          Favorites
        </Text>
        <Text style={[styles.subtitle, { color: colors.mutedForeground }]}>
          Prompts you've saved for quick access.
        </Text>
      </View>

      <FlatList
        data={favoritePrompts}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.gridRow}
        scrollEnabled={favoritePrompts.length > 0}
        contentContainerStyle={[
          styles.listContent,
          favoritePrompts.length === 0 && styles.listContentEmpty,
        ]}
        ListEmptyComponent={
          <EmptyState
            icon="heart"
            title="No favorites yet"
            message="Tap the heart on any prompt to save it here for quick access."
          />
        }
        renderItem={({ item }) => {
          const category = getCategoryById(item.categoryId);
          return (
            <PromptGridCard
              prompt={item}
              categoryLabel={category?.shortName ?? ''}
              categoryColor={category?.color ?? colors.accent}
              categoryColorForeground={
                category?.colorForeground ?? colors.accentForeground
              }
              isFavorite={isFavorite(item.id)}
              onPress={() => router.push(`/prompt/${item.id}`)}
              onToggleFavorite={() => toggleFavorite(item.id)}
            />
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 20,
    paddingBottom: 16,
  },
  title: {
    fontSize: 26,
    fontFamily: 'Inter_700Bold',
    marginBottom: 2,
  },
  subtitle: {
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
  },
  gridRow: {
    gap: 12,
    marginBottom: 12,
  },
  listContent: {
    paddingHorizontal: 20,
    paddingTop: 4,
    paddingBottom: 40,
  },
  listContentEmpty: {
    flexGrow: 1,
  },
});
