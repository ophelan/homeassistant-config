import { uglify } from 'rollup-plugin-uglify';

export default {
  input: 'button-card.js',
  output: {
    file: 'bundle.js',
    format: 'iife'
  },
  plugins: [
    // uglify()
  ]
};

// rollup.config.js

// export default {
//   input: 'main.js',
//   output: {
//     file: 'bundle.js',
//     format: 'iife'
//   },
//   plugins: [
//     resolve(),
//     commonJS({
//       include: 'node_modules/**'
//     })
//   ]
// };