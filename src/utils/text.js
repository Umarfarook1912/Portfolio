export const truncateText = (text = '', maxLength = 120) => {
  const trimmed = text.trim();
  if (trimmed.length <= maxLength) {
    return { text: trimmed, truncated: false };
  }

  const sliced = trimmed.slice(0, maxLength).replace(/\s+\S*$/, '');
  return { text: `${sliced}…`, truncated: true };
};
