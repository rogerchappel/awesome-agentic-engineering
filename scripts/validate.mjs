import fs from 'node:fs';
import assert from 'node:assert/strict';

const data = JSON.parse(fs.readFileSync('data/resources.json', 'utf8'));
const readme = fs.existsSync('README.md') ? fs.readFileSync('README.md', 'utf8') : '';
const errors = [];
const categoryIds = new Set();
const urls = new Map();
const names = new Map();
let previousCategoryTitle = '';

if (!data.metadata?.title) errors.push('metadata.title is required');
if (!Array.isArray(data.categories) || data.categories.length < 5) errors.push('at least five categories are required');

for (const category of data.categories ?? []) {
  check(/^[a-z0-9-]+$/.test(category.id), `category id must be kebab-case: ${category.id}`);
  check(!categoryIds.has(category.id), `duplicate category id: ${category.id}`);
  categoryIds.add(category.id);
  check(category.title && category.title.length <= 80, `category title invalid: ${category.id}`);
  check(category.description?.split(/\s+/).length >= 8, `category description too short: ${category.id}`);
  check(Array.isArray(category.resources) && category.resources.length >= 4, `category needs at least four resources: ${category.id}`);
  for (const resource of category.resources ?? []) {
    check(resource.name && resource.name.length <= 80, `resource name invalid in ${category.id}`);
    check(/^https:\/\//.test(resource.url), `resource must use https URL: ${resource.name}`);
    check(descriptionWordCount(resource.description) >= data.metadata.minimumDescriptionWords, `description too short: ${resource.name}`);
    check(Array.isArray(resource.tags) && resource.tags.length >= 2, `resource needs at least two tags: ${resource.name}`);
    const normalizedUrl = resource.url.replace(/\/$/, '').toLowerCase();
    const normalizedName = resource.name.toLowerCase();
    check(!urls.has(normalizedUrl), `duplicate URL: ${resource.url} also used by ${urls.get(normalizedUrl)}`);
    check(!names.has(normalizedName), `duplicate name: ${resource.name} also used in ${names.get(normalizedName)}`);
    urls.set(normalizedUrl, resource.name);
    names.set(normalizedName, category.id);
  }
}

if (readme) {
  check(readme.includes(data.metadata.title), 'README title is missing');
  for (const category of data.categories ?? []) {
    check(readme.includes(`## ${category.title}`), `README missing category: ${category.title}`);
    for (const resource of category.resources ?? []) {
      check(readme.includes(`[${resource.name}](${resource.url})`), `README missing resource: ${resource.name}`);
    }
  }
}

if (errors.length) {
  console.error(errors.map((error) => `- ${error}`).join('\n'));
  process.exitCode = 1;
} else {
  console.log(`Validated ${data.categories.length} categories and ${urls.size} resources.`);
}

function check(condition, message) {
  try {
    assert.ok(condition);
  } catch {
    errors.push(message);
  }
}

function descriptionWordCount(value = '') {
  return value.trim().split(/\s+/).filter(Boolean).length;
}
