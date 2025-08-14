import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ZODIAC_BY_ID, type ZodiacSignId } from '@/constants/zodiac';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import type { ImageSourcePropType } from 'react-native';
import { Image, ScrollView, StyleSheet, View } from 'react-native';

const ZODIAC_IMAGES: Partial<Record<ZodiacSignId, ImageSourcePropType>> = {
  aries: require('../../assets/images/aries.jpg'),
  taurus: require('../../assets/images/taurus.jpg'),
  gemini: require('../../assets/images/gemini.jpg'),
  cancer: require('../../assets/images/cancer.jpg'),
  leo: require('../../assets/images/leo.jpg'),
  virgo: require('../../assets/images/virgo.jpg'),
  libra: require('../../assets/images/libra.jpg'),
  scorpio: require('../../assets/images/scorpio.jpg'),
  capricorn: require('../../assets/images/capricorn.jpg'),
  aquarius: require('../../assets/images/aquarius.jpg'),
  pisces: require('../../assets/images/pisces.jpg'),
  sagittarius: require('../../assets/images/sagittarius.jpg'),
  // sagittarius 图片若缺失，将回退到默认图
};
const DEFAULT_IMAGE = require('../../assets/images/react-logo.png');

export default function ZodiacDetailScreen() {
  const { sign } = useLocalSearchParams<{ sign: string }>();

  const key = String(sign || '').toLowerCase() as ZodiacSignId;
  const info = ZODIAC_BY_ID[key];
  const imageSource = (ZODIAC_IMAGES[key] ?? DEFAULT_IMAGE) as ImageSourcePropType;

  if (!info) {
    return (
      <ThemedView style={styles.center}>
        <ThemedText type="title">未找到</ThemedText>
        <ThemedText>无法识别的星座标识：{String(sign)}</ThemedText>
      </ThemedView>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.scroll}>
      <ThemedView style={styles.headerCard}>
        <ThemedText style={styles.symbol}>{info.symbol}</ThemedText>
        <ThemedText type="title" style={styles.title}>{info.name}</ThemedText>
        <ThemedText style={styles.range}>{info.dateRange}</ThemedText>
      </ThemedView>

      <ThemedView style={styles.section}>
        <Item label="元素" value={info.element} />
        <Item label="守护星" value={info.ruler} />
        {info.luckyNumber != null ? (
          <Item label="幸运数字" value={String(info.luckyNumber)} />
        ) : null}
        <View style={styles.colorRow}>
          <ThemedText style={styles.label}>代表色</ThemedText>
          <View style={[styles.colorSwatch, { backgroundColor: info.color }]} />
        </View>
      </ThemedView>

      <ThemedView style={styles.section}>
        <ThemedText type="subtitle" style={styles.subtitle}>性格标签</ThemedText>
        <View style={styles.tags}>
          {info.traits.map((t) => (
            <View key={t} style={styles.tag}>
              <ThemedText>{t}</ThemedText>
            </View>
          ))}
        </View>
      </ThemedView>

      <ThemedView>
        <View style={styles.shadowCard}>
          <View style={styles.roundedClip}>
            <Image
              source={imageSource}
              style={styles.hero}
              resizeMode="contain"
            />
          </View>
        </View>
      </ThemedView>



      
    </ScrollView>
  );
}

function Item({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.row}>
      <ThemedText style={styles.label}>{label}</ThemedText>
      <ThemedText>{value}</ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  scroll: {
    padding: 16,
    gap: 16,
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  headerCard: {
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  symbol: {
    fontSize: 56,
    lineHeight: 60,
  },
  title: {
    marginTop: 4,
  },
  range: {
    opacity: 0.9,
  },
  section: {
    borderRadius: 12,
    padding: 16,
    gap: 12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  label: {
    opacity: 0.8,
  },
  colorRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  colorSwatch: {
    width: 20,
    height: 20,
    borderRadius: 4,
  },
  subtitle: {
    marginBottom: 4,
  },
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  tag: {
    borderRadius: 999,
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  shadowCard: {
    borderRadius: 12,
    // iOS 阴影
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 12,
    // Android 阴影
    elevation: 6,
  },
  roundedClip: {
    borderRadius: 12,
    overflow: 'hidden',
  },
  hero: {
    width: '100%',
    height: 200,
  },
});


