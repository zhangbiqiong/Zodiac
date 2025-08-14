import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import type { ZodiacInfo } from '@/constants/zodiac';
import { Pressable, StyleSheet, View } from 'react-native';

export type ZodiacCardProps = {
  info: ZodiacInfo;
  onPress?: () => void;
};

export function ZodiacCard({ info, onPress }: ZodiacCardProps) {
  return (
    <Pressable onPress={onPress} accessibilityRole="button" accessibilityLabel={`${info.name}，点击查看详情`}>
      <ThemedView style={[styles.card, { backgroundColor: info.color }]}>
        <View style={styles.symbolRow}>
          <ThemedText style={styles.symbol} allowFontScaling>
            {info.symbol}
          </ThemedText>
        </View>
        <ThemedText type="subtitle" style={styles.title}>
          {info.name}
        </ThemedText>
        <ThemedText style={styles.range}>{info.dateRange}</ThemedText>
      </ThemedView>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 12,
    minHeight: 120,
    justifyContent: 'space-between',
  },
  symbolRow: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  symbol: {
    fontSize: 36,
    lineHeight: 40,
  },
  title: {
    marginTop: 8,
  },
  range: {
    opacity: 0.9,
  },
});

export default ZodiacCard;


