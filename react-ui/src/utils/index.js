export const suffix = (nmb) => {
  if (nmb === 1) {
    return 'a'
  } else if (nmb > 4||nmb === 0) {
    return ''
  } else {
    return 'ы'
  }
}
