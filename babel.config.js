module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@components': './src/components',
          '@contexts': './src/contexts',
          '@services': './src/services',
          '@configs': './src/configs',
          '@utils': './src/utils',
          '@hooks': './src/hooks',
          '@interfaces': './src/interfaces/IMainInterfaces.ts',
          '@theme': './src/commounStyles.ts'
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};