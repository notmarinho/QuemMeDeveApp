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
          '@models': './src/models',
          '@screens': './src/screens',
          '@interfaces': './src/interfaces/IMainInterfaces.ts',
          '@theme': './src/commonStyles.ts',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
