export function getApiBase() {
  return import.meta.env.VITE_API_URL || '';
}

export default getApiBase;
