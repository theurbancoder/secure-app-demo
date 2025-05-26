import {
  addAuthenticationListener,
  authenticate,
  getIsAuthenticated,
} from "@micro/expo-module-authentication";
import { clearValue, getValue, setValue } from "@micro/expo-module-storage";
import { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export const useAuthentication = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(getIsAuthenticated());

  useEffect(() => {
    const subscription = addAuthenticationListener(({ isAuthenticated }) => {
      setIsAuthenticated(isAuthenticated);
    });
    return () => subscription.remove();
  }, [setIsAuthenticated]);

  return isAuthenticated;
};

const SECURE_STORE_KEY = "SECURE_STORE_KEY";

export default function Index() {
  const isAuthenticated = useAuthentication();
  const [localSecureStoreValue, setLocalSecureStoreValue] = useState<string>();
  const [error, setError] = useState<string>();

  const setErrorMessage = (message: string) => {
    setError(message);
    setTimeout(() => {
      setError(undefined);
    }, 1500);
  };

  const setSecureValue = async () => {
    try {
      await setValue(SECURE_STORE_KEY, `${Math.random().toFixed(2)}`);
      const value = await getValue(SECURE_STORE_KEY);
      setLocalSecureStoreValue(value);
    } catch (e: any) {
      setErrorMessage(e?.message);
    }
  };

  const clearSecureValue = async () => {
    try {
      await clearValue(SECURE_STORE_KEY);
      const value = await getValue(SECURE_STORE_KEY);
      setLocalSecureStoreValue(value);
    } catch (e: any) {
      setErrorMessage(e?.message);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        padding: 20,
      }}
    >
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Secure Core</Text>
      <Text>
        Authentication state:{" "}
        {isAuthenticated ? "Authenticated" : "Not authenticated"}
      </Text>
      <Text>Secure store value: {localSecureStoreValue || "No value"}</Text>
      <Pressable
        onPress={authenticate}
        style={[
          styles.buttonContainer,
          { backgroundColor: isAuthenticated ? "grey" : "black" },
        ]}
      >
        <Text style={styles.buttonText}>
          {!isAuthenticated ? "Authenticate" : "Clear authentication"}
        </Text>
      </Pressable>
      <Pressable onPress={setSecureValue} style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Set secure value</Text>
      </Pressable>
      <Pressable onPress={clearSecureValue} style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Clear secure value</Text>
      </Pressable>
      {error && (
        <View style={styles.errorMessageContainer}>
          <Text>Error! {error}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "black",
    padding: 20,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  errorMessageContainer: {
    backgroundColor: "#ffe1e1",
    padding: 20,
    borderRadius: 8,
    marginTop: 10,
  },
});
