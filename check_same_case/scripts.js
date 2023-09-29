function sameCase(a, b) {
  if (/[a-zA-Z]/.test(a) && /[a-zA-Z]/.test(b))
    return (a == a.toUpperCase() && b == b.toUpperCase()) ||
      (a == a.toLowerCase() && b == b.toLowerCase())
      ? 1
      : 0;
  return -1;
}
