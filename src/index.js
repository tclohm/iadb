import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const data = require('../data/cars.json');

/**
 * Get all car makes
 * @returns {string[]} Array of make names
 */
export function getMakes() {
  return data.makes.map(make => make.name);
}

/**
 * Get all models for a given make
 * @param {string} make - The car make (case-insensitive)
 * @returns {string[]} Array of model names, or empty array if make not found
 */
export function getModels(make) {
  const found = data.makes.find(m => m.name.toLowerCase() === make.toLowerCase());
  return found ? found.models : [];
}

/**
 * Check if a make exists in the database
 * @param {string} make - The car make (case-insensitive)
 * @returns {boolean}
 */
export function isValidMake(make) {
  return data.makes.some(m => m.name.toLowerCase() === make.toLowerCase());
}

/**
 * Check if a model exists for a given make
 * @param {string} make - The car make (case-insensitive)
 * @param {string} model - The car model (case-insensitive)
 * @returns {boolean}
 */
export function isValidModel(make, model) {
  const models = getModels(make);
  return models.some(m => m.toLowerCase() === model.toLowerCase());
}

/**
 * Search makes by partial string
 * @param {string} query - Partial make name (case-insensitive)
 * @returns {string[]} Array of matching make names
 */
export function searchMakes(query) {
  return data.makes
    .filter(m => m.name.toLowerCase().includes(query.toLowerCase()))
    .map(m => m.name);
}

/**
 * Search models across all makes or within a specific make
 * @param {string} query - Partial model name (case-insensitive)
 * @param {string} [make] - Optional make to narrow the search
 * @returns {Array<{make: string, model: string}>} Array of matching make/model pairs
 */
export function searchModels(query, make) {
  const makes = make ? data.makes.filter(m => m.name.toLowerCase() === make.toLowerCase()) : data.makes;
  const results = [];
  for (const m of makes) {
    for (const model of m.models) {
      if (model.toLowerCase().includes(query.toLowerCase())) {
        results.push({ make: m.name, model });
      }
    }
  }
  return results;
}

/**
 * Get the full dataset
 * @returns {Object} Raw JSON data
 */
export function getAll() {
  return data;
}
