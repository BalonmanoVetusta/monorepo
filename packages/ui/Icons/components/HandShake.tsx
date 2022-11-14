// This is copied from Material Design Icons, see:
//   - https://github.com/Templarian/MaterialDesign
//   - https://materialdesignicons.com
import { motion } from 'framer-motion';
import { Svg } from '../../Svg';

export function HandShake({
  title = 'Apretón de manos',
  pathProps = {},
  ...props
} = {}) {
  return (
    <Svg as={motion.svg} viewBox="0 0 24 24" title={title} {...props}>
      <motion.path
        {...pathProps}
        d="M11 6h3l3.29-3.3a1 1 0 0 1 1.42 0l2.58 2.59a1 1 0 0 1 0 1.41L19 9h-8v2a1 1 0 0 1-1 1 1 1 0 0 1-1-1V8a2 2 0 0 1 2-2m-6 5v4l-2.29 2.29a1 1 0 0 0 0 1.41l2.58 2.59a1 1 0 0 0 1.42 0L11 17h4a1 1 0 0 0 1-1v-1h1a1 1 0 0 0 1-1v-1h1a1 1 0 0 0 1-1v-1h-7v1a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V9Z"
      />
    </Svg>
  );
}
