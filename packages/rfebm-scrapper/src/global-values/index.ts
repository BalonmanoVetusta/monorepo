const { env } = process ?? Bun ?? Deno ?? {};

export const {
  RFEBM_BASE_URL = 'https://www.rfebm.com/competiciones',
  ISQUAD_HANDBALL = 'https://balonmano.isquad.es',
  RFEBM_AMBITO_ZERO = 0,
  RFEBM_AMBITO_ONE = 1,
  RFEBM_COURT_COMPETITIONS_SELECTION = 0,
  ISQUAD_TOKEN = '3196a2e896f030126138678fa6a5c19e',
  ISQUAD_SEC = '8bbbcd3eaebf094cebb543f342d5a87c',
} = env ?? {};
