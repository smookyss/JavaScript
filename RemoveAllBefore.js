function removeAllBefore(values, b) {
  const bIndex = values.indexOf(b);
  if (bIndex < 0) {
    return values;
  }

  return values.slice(bIndex);
}
