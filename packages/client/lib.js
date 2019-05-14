import lib from 'common'
const { math, Hello } = lib

import sayBanana from './src/sayBanana'

const sayYeah = () => {
  return 'Yeah!'
}

export default {
  math,
  Hello,
  sayYeah,
  sayBanana
}
