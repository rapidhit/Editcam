import React, { useMemo, useState } from 'react';
import {
  FlatList,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';
import * as Clipboard from 'expo-clipboard';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useColors } from '@/hooks/useColors';
import { CategoryChip } from '@/components/CategoryChip';
import { PromptCard } from '@/components/PromptCard';
import { EmptyState } from '@/components/EmptyState';
import { useFavorites } from '@/contexts/FavoritesContext';
import { useToast } from '@/contexts/ToastContext';
import { CATEGORIES, PROMPTS, getCategoryById } from '@/data/prompts';

export default function BrowseScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const { isFavorite, toggleFavorite } = useFavorites();
  const { showToast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    null
  );
  const [query, setQuery] = useState('');

  const filteredPrompts = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PROMPTS.filter((p) => {
      const matchesCategory =
        !selectedCategory || p.categoryId === selectedCategory;
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.prompt.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, query]);

  const handleCopy = async (promptText: string) => {
    await Clipboard.setStringAsync(promptText);
    showToast('Prompt copied');
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View
        style={[
          styles.header,
          { paddingTop: Platform.OS === 'web' ? 67 : insets.top + 8 },
        ]}
      >
        <Text style={[styles.title, { color: colors.foreground }]}>
          Editcam
        </Text>
        <Text style={[styles.subtitle, { color: colors.mutedForeground }]}>
          Copy a prompt, paste it into any AI photo editor.
        </Text>

        <View
          style={[
            styles.searchBar,
            { backgroundColor: colors.card, borderColor: colors.border },
          ]}
        >
          <Feather name="search" size={16} color={colors.mutedForeground} />
          <TextInput
            value={query}
            onChangeText={setQuery}
            placeholder="Search prompts"
            placeholderTextColor={colors.mutedForeground}
            style={[styles.searchInput, { color: colors.foreground }]}
            returnKeyType="search"
            autoCorrect={false}
          />
          {query.length > 0 ? (
            <Feather
              name="x"
              size={16}
              color={colors.mutedForeground}
              onPress={() => setQuery('')}
              hitSlop={8}
            />
          ) : null}
        </View>

        <FlatList
          data={CATEGORIES}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          style={styles.chipRow}
          contentContainerStyle={styles.chipRowContent}
          ListHeaderComponent={
            <CategoryChip
              label="All"
              icon="grid"
              selected={selectedCategory === null}
              onPress={() => setSelectedCategory(null)}
            />
          }
          renderItem={({ item }) => (
            <CategoryChip
              label={item.shortName}
              icon={item.feather as React.ComponentProps<typeof Feather>['name']}
              selected={selectedCategory === item.id}
              color={item.colorForeground}
              colorForeground="#FFFFFF"
              onPress={() =>
                setSelectedCategory((prev) =>
                  prev === item.id ? null : item.id
                )
              }
            />
          )}
        />
      </View>

      <FlatList
        data={filteredPrompts}
        keyExtractor={(item) => item.id}
        scrollEnabled={filteredPrompts.length > 0}
        contentContainerStyle={[
          styles.listContent,
          filteredPrompts.length === 0 && styles.listContentEmpty,
        ]}
        ListEmptyComponent={
          <EmptyState
            icon="search"
            title="No prompts found"
            message="Try a different search term or category."
          />
        }
        renderItem={({ item }) => {
          const category = getCategoryById(item.categoryId);
          return (
            <PromptCard
              prompt={item}
              categoryLabel={category?.shortName ?? ''}
              categoryColor={category?.color ?? colors.accent}
              categoryColorForeground={
                category?.colorForeground ?? colors.accentForeground
              }
              isFavorite={isFavorite(item.id)}
              onPress={() => router.push(`/prompt/${item.id}`)}
              onCopy={() => handleCopy(item.prompt)}
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
    paddingBottom: 12,
  },
  title: {
    fontSize: 26,
    fontFamily: 'Inter_700Bold',
    marginBottom: 2,
  },
  subtitle: {
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
    marginBottom: 16,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 14,
    paddingHorizontal: 14,
    height: 44,
    gap: 8,
    marginBottom: 14,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    fontFamily: 'Inter_400Regular',
    height: '100%',
  },
  chipRow: {
    flexGrow: 0,
  },
  chipRowContent: {
    paddingRight: 8,
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
