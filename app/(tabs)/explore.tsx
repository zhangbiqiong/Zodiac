import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { StyleSheet } from 'react-native';

export default function TabTwoScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.title}>关于</ThemedText>
      <ThemedText>
        本应用提供十二星座的基础信息（日期范围、元素、守护星、性格标签、代表色/数字），
        所有数据均为本地静态整理，不依赖网络，符号采用 Unicode 展示。
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 12,
  },
  title: {
    marginBottom: 8,
  },
});
