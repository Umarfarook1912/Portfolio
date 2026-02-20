import dotenv from 'dotenv';
import path from 'path';

// Centralized env loader for local/dev use. Loads .env.local if present.
const envPath = path.resolve(process.cwd(), '.env.local');
dotenv.config({ path: envPath });

// Export a no-op so other modules can import if necessary
export default null;
