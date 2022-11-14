import { LogoVetusta } from '@balonmanovetusta/ui';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Fragment } from 'react';
import { header, logo } from 'styles/components/Header.module.css';

const variants = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: { duration: 1 },
  },
};

export function Header() {
  return (
    <Fragment>
      <motion.header
        variants={variants}
        initial="hidden"
        animate="show"
        exit="hidden"
        className={header}
      >
        <div className={logo} aria-hidden="true">
          <Link
            href="/"
            title="Ir a la página principal"
            tabIndex={0}
            aria-hidden="true"
          >
            <LogoVetusta aria-hidden="true" width="100%" />
          </Link>
        </div>
        <Link href="/" title="Ir a la página principal" tabIndex={0}>
          <h1>Club Balonmano Vetusta</h1>
        </Link>
      </motion.header>
    </Fragment>
  );
}
