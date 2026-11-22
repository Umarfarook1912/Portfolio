const slugify = (value = '') =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

export const deriveHighlights = (description = '') => {
  const fromSentences = description
    .split(/(?<=[.!?])\s+/)
    .map((part) => part.replace(/[.!?]+$/, '').trim())
    .filter((part) => part.length > 24);

  if (fromSentences.length >= 2) {
    return fromSentences.slice(0, 3);
  }

  return description
    .split(/[,;—–-]/)
    .map((part) => part.trim())
    .filter((part) => part.length > 18)
    .slice(0, 3);
};

export const normalizeShowcaseItem = (item, index, fallbackCategory) => {
  const name = item.title || item.name || `Project ${index + 1}`;
  const description = item.description || '';
  const projectUrl = item.projectUrl || item.githubUrl || '#';

  return {
    id: item.id || `${slugify(name)}-${index}`,
    name,
    category: item.category || fallbackCategory,
    description,
    highlights: item.highlights?.length ? item.highlights : deriveHighlights(description),
    image: item.imageUrl || item.image || '',
    imageAlt: `${name} preview`,
    projectUrl,
    githubUrl: item.githubUrl || '',
  };
};

export const normalizeShowcaseList = (items = [], fallbackCategory) =>
  items.map((item, index) => normalizeShowcaseItem(item, index, fallbackCategory));
