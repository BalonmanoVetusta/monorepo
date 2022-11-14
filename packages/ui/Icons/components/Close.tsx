// This is copied from Material Design Icons, see:
//   - https://systemuicons.com/
import { motion } from 'framer-motion';
import { Svg } from '../../Svg';

export function Close({ title = 'Close', pathProps = {}, ...props } = {}) {
  return (
    <Svg viewBox="0 0 24 24" title={title} as={motion.svg} {...props}>
      <motion.path
        d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41Z"
        fill="currentColor"
        stroke="currentColor"
        {...pathProps}
      />
    </Svg>
  );
}
