import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ZodiacCard } from '@/components/ZodiacCard';
import { useBottomTabOverflow } from '@/components/ui/TabBarBackground';
import { ZODIAC_LIST } from '@/constants/zodiac';
import { useRouter } from 'expo-router';
import { Dimensions, FlatList, StyleSheet, View } from 'react-native';

export default function HomeScreen() {
  const router = useRouter();
  const numColumns = 2;
  const gap = 12;
  const totalGap = gap * (numColumns - 1);
  const width = Dimensions.get('window').width;
  const horizontalPadding = 16 * 2;
  const itemWidth = Math.floor((width - horizontalPadding - totalGap) / numColumns);
  const bottom = useBottomTabOverflow();

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.header}>十二星座</ThemedText>
      <FlatList
        data={ZODIAC_LIST}
        keyExtractor={(item) => item.id}
        numColumns={numColumns}
        columnWrapperStyle={{ gap }}
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 16 + bottom, gap }}
        scrollIndicatorInsets={{ bottom }}
        renderItem={({ item }) => (
          <View style={{ width: itemWidth }}>
            <ZodiacCard
              info={item}
              onPress={() => router.push(`/zodiac/${item.id}` as any)}
            />
          </View>
        )}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
});
