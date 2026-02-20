export default function createDevCors() {
  return function devCors(req, res, next) {
    const originHeader = req.headers && req.headers.origin;
    const isLocalOrigin = typeof originHeader === 'string' && /^https?:\/\/localhost(?::\d+)?$/.test(originHeader);

    // Only used in development environments; callers should guard by checking NODE_ENV
    res.setHeader('Access-Control-Allow-Origin', isLocalOrigin ? originHeader : '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', 'true');

    if (req.method === 'OPTIONS') {
      res.statusCode = 204;
      return res.end();
    }

    return typeof next === 'function' ? next() : undefined;
  };
}
