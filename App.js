import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { divideNumbers } from "./lib/utils";

export default function App() {
  const [numerator, setNumerator] = useState(1);
  const [denominator, setDenominator] = useState(1);
  return (
    <View style={styles.container}>
      <View style={styles.line}>
        <Text style={styles.label}>Numerator: </Text>
        <Text style={styles.label}>{numerator}</Text>
      </View>
      <View style={styles.line}>
        <TextInput
          onChangeText={(t) =>
            t === "" ? setNumerator(1) : setNumerator(parseInt(t))
          }
          placeholder="Enter New Numerator"
          style={[styles.label, styles.input]}
        />
      </View>
      <View style={styles.line}>
        <Text style={styles.label}>Denominator: </Text>
        <Text style={styles.label}>{denominator}</Text>
      </View>
      <View style={styles.line}>
        <TextInput
          onChangeText={(t) =>
            t === "" ? setDenominator(1) : setDenominator(parseInt(t))
          }
          placeholder="Enter New Denominator"
          style={[styles.label, styles.input]}
        />
      </View>
      <View style={styles.line}>
        <Text style={styles.label}>Division Result: </Text>
        <Text style={styles.label}>
          {divideNumbers(numerator, denominator)}
        </Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    rowGap: 10,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  line: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  label: {
    fontSize: 24,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "lightgray",
    padding: 8,
  },
});
