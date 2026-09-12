import React, { useMemo, useState } from 'react';
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { CapabilityChip } from './src/components/CapabilityChip';
import { defaultConnections, selectModel } from './src/services/modelRouter';

const capabilities = ['Files', 'Terminal', 'Browser', 'Computer', 'Agents', 'Memory'];

export default function App() {
  const [prompt, setPrompt] = useState('');
  const activeModel = useMemo(() => selectModel(defaultConnections), []);

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="light" />
      <ScrollView contentContainerStyle={styles.page} keyboardShouldPersistTaps="handled">
        <View style={styles.header}>
          <View>
            <Text style={styles.eyebrow}>CORTEX</Text>
            <Text style={styles.title}>Mobile AI Command Center</Text>
          </View>
          <View style={styles.live}><Text style={styles.liveText}>● ONLINE</Text></View>
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>ACTIVE MODEL</Text>
          <Text style={styles.model}>{activeModel.name}</Text>
          <Text style={styles.muted}>{activeModel.model} · local-first routing</Text>
        </View>

        <View style={styles.rowWrap}>
          {capabilities.map((item) => <CapabilityChip key={item} label={item} />)}
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>ASK CORTEX</Text>
          <TextInput
            value={prompt}
            onChangeText={setPrompt}
            placeholder="Describe a task. Cortex can plan, delegate and use approved tools…"
            placeholderTextColor="#6f6f6f"
            multiline
            style={styles.input}
          />
          <Pressable style={styles.button} onPress={() => setPrompt('')}>
            <Text style={styles.buttonText}>Run task</Text>
          </Pressable>
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>AGENT RUNTIME</Text>
          <Text style={styles.item}>Planner · breaks objectives into executable steps</Text>
          <Text style={styles.item}>Worker pool · parallel specialist agents</Text>
          <Text style={styles.item}>Approval gate · privileged actions require permission</Text>
          <Text style={styles.item}>Gateway · terminal/browser/files run off-device securely</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#0b0b0b' },
  page: { padding: 20, gap: 16, paddingBottom: 48 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16 },
  eyebrow: { color: '#8a8a8a', fontWeight: '800', letterSpacing: 2, fontSize: 11 },
  title: { color: '#fff', fontWeight: '800', fontSize: 28, maxWidth: 260, marginTop: 4 },
  live: { backgroundColor: '#142117', borderColor: '#245b2f', borderWidth: 1, borderRadius: 999, paddingHorizontal: 10, paddingVertical: 7 },
  liveText: { color: '#7ee787', fontSize: 11, fontWeight: '800' },
  card: { backgroundColor: '#121212', borderColor: '#242424', borderWidth: 1, borderRadius: 20, padding: 18, gap: 8 },
  label: { color: '#777', fontSize: 11, fontWeight: '800', letterSpacing: 1.3 },
  model: { color: '#fff', fontSize: 21, fontWeight: '800' },
  muted: { color: '#8b8b8b', fontSize: 13 },
  rowWrap: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  input: { minHeight: 130, color: '#fff', fontSize: 16, lineHeight: 23, textAlignVertical: 'top', paddingVertical: 8 },
  button: { backgroundColor: '#fff', borderRadius: 14, paddingVertical: 13, alignItems: 'center', marginTop: 5 },
  buttonText: { color: '#0b0b0b', fontWeight: '800', fontSize: 15 },
  item: { color: '#d4d4d4', fontSize: 14, lineHeight: 21 }
});
