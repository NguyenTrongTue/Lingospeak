import React, { useRef } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";

Animatable.initializeRegistryWithDefinitions({
  explode: {
    0: {
      opacity: 1,
      scale: 0,
    },
    0.5: {
      opacity: 1,
      scale: 1,
    },
    1: {
      opacity: 0,
      scale: 2,
    },
  },
});

export default function App() {
  const fireworksRef = useRef(null);

  const startFireworks = () => {
    fireworksRef.current.pulse(1000);
  };

  return (
    <TouchableOpacity onPress={startFireworks}>
      <View style={styles.fireworksContainer}>
        <Animatable.View ref={fireworksRef} style={styles.fireworks} />
        <Animatable.View
          style={[styles.spark, styles.spark1]}
          animation="explode"
          iterationCount={1}
          duration={1000}
        />
        <Animatable.View
          style={[styles.spark, styles.spark2]}
          animation="explode"
          iterationCount={1}
          duration={1000}
          delay={200}
        />
        <Animatable.View
          style={[styles.spark, styles.spark3]}
          animation="explode"
          iterationCount={1}
          duration={1000}
          delay={400}
        />
        <Animatable.View
          style={[styles.spark, styles.spark4]}
          animation="explode"
          iterationCount={1}
          duration={1000}
          delay={600}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  fireworksContainer: {
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  fireworks: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#FFD700",
    position: "absolute",
    zIndex: 1,
  },
  spark: {
    position: "absolute",
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#FFD700",
  },
  spark1: {
    transform: [{ rotate: "-45deg" }],
  },
  spark2: {
    transform: [{ rotate: "-135deg" }],
  },
  spark3: {
    transform: [{ rotate: "45deg" }],
  },
  spark4: {
    transform: [{ rotate: "135deg" }],
  },
});
