module.exports = {
    presets: [
      [
        'next/babel',
        {
          'preset-env': {
            targets: {
              node: 'current',
            },
          },
        },
      ],
      '@babel/preset-typescript',
      '@babel/preset-react',
    ],
  };
  