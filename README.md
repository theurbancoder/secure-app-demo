# Build secure applications using expo

![alt text](docs/assets/conference.png "Conference photo")
This repo contains the code showcased at Appjs conference during the talk "Building Secure React Native Apps".

[See talk here](https://www.youtube.com/live/UTaJlqhTk2g?si=M4aPJ8HIu0hyRKQm&t=17130)

## Installation

Start by installing all dependencies:
`yarn` from root. To run the main app navigate to apps/mobile and run `yarn start`. To run the app do `yarn start` from apps/my-secure-app. To generate the native project run `npx expo prebuild`. You can then open the project in Android studio to edit any of the expo modules or experiment with the app code directly. Don't forget that any code that is modified outside of the expo modules, needs to be converted to an expo config plugin, to be persited.

## Introduction

This talk is not a ultimate guide to security. It wont give you all the security tips and tricks needed. This is mainly due to the fact that there isn’t a one right way of doing security on mobile. Every app will have different requirements on security, due to use cases and threat models. This talk is more to highlight common security concerns that every developer should be aware of. Each risk can be mitigated in different ways, and each way can have other drawbacks. Its up to each developer to decide what risk can be accepted for your app and what you need to protect yourself and your users from.

In this talk we will talk about a few security concerns that companies with high security requirements have to think about. I will highlight why native or brownfield apps might be a better option, than fully react native or expo apps. And in the end we will try and develop a secure app that takes into account all of the mentioned concern, using expo.

## Native apps vs react native apps

The difference between React Native apps and native apps (built with Swift for iOS or Kotlin/Java for Android) in terms of security mainly revolves around the layers of abstraction, platform integration, and attack surface. Here's a breakdown of key differences:

### Code exposure

React Native

- Uses JavaScript, which is easier to reverse-engineer than compiled native code. Even if you bundle and obfuscate, attackers can often inspect or tamper with the logic.
- Logic written in JS is packaged with the app, making it more vulnerable to client-side attacks like code injection, tampering, or debugging.

Native Apps:

- Compiled into binary code (e.g., `.ipa` or `.apk`) that's harder (but not impossible) to reverse-engineer.
- More secure by default when it comes to intellectual property protection and logic obfuscation.

### Runtime Environment

React Native

- Runs JavaScript in a JS VM (JavaScriptCore or Hermes), which creates an extra layer where vulnerabilities could be introduced.
- May be more susceptible to runtime injection, especially on rooted/jailbroken devices.

Native Apps

- Operate directly with platform APIs and runtime, reducing potential attack surfaces introduced by the extra JS bridge.

### Platform-Specific Security Features

React Native:

- Has limited access to certain low-level, platform-specific security APIs (e.g., Keychain or Keystore), unless bridged with native modules.
- Requires third-party libraries or custom modules to leverage secure storage or biometric authentication.

Native Apps

- Can fully utilize OS-level security features (Face ID, biometric encryption, secure hardware-backed key storage) with more granularity and control.

### Dependency Risks

React Native:

- Heavy reliance on third-party packages, which may be outdated or poorly maintained, increasing the risk of known vulnerabilities.
- More room for supply chain attacks if dependencies are not tightly controlled or audited.

Native Apps

- Also use third-party libraries, but typically fewer and more thoroughly vetted for critical features.
- Platform SDKs often have better long-term support and security updates.

### Obfuscation & Protection

React Native:

- Requires additional tools (e.g., Metro bundler obfuscation, JS obfuscators) to protect JavaScript code, but this is inherently weaker than binary obfuscation.

Native Apps:

- Can be proguarded (Android) or bitcode compiled (iOS) for better code protection and optimization.

### Bottom line:

React Native can be secure **if best practices are followed** (e.g., using secure storage modules, obfuscation, jailbreak/root detection, minimizing logic on the client side). However, **native apps have inherent advantages** due to their direct access to platform security features, harder-to-reverse binaries, and tighter runtime control.

If security is a **top priority** (e.g., banking, healthcare apps), going fully native or using native modules for sensitive features is often recommended.
