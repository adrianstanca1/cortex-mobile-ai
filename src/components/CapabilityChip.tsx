import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export function CapabilityChip({ label }: { label: string }) {
  return (
    <View style={styles.chip}>
      <Text style={styles.text}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  chip: { backgroundColor: '#191919', borderColor: '#303030', borderWidth: 1, paddingHorizontal: 10, paddingVertical: 7, borderRadius: 999 },
  text: { color: '#d7d7d7', fontSize: 12, fontWeight: '600' }
});
