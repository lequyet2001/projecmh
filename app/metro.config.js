const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {};
const a=getDefaultConfig(__dirname);
// getDefaultConfig.resolver.assetExts.push(['.tsx', '.ts', '.jsx', '.js', '.json','.d.tsx', '.d.ts', '.d.jsx', '.d.js', '.d.json']);

module.exports = mergeConfig(getDefaultConfig(__dirname), config);