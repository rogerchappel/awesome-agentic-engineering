import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const data = JSON.parse(fs.readFileSync('data/resources.json', 'utf8'));

test('resource list has enough depth for a useful launch', () => {
  const count = data.categories.reduce((sum, category) => sum + category.resources.length, 0);
  assert.ok(count >= 40, `expected at least 40 resources, got ${count}`);
});

test('each category has a distinct tactical purpose', () => {
  const descriptions = data.categories.map((category) => category.description.toLowerCase());
  assert.equal(new Set(descriptions).size, descriptions.length);
});

test('roger-owned tools are labelled explicitly', () => {
  const roger = data.categories.find((category) => category.id === 'roger-tools');
  assert.ok(roger, 'roger-tools category is present');
  for (const resource of roger.resources) {
    assert.ok(resource.tags.includes('rogerchappel'), `${resource.name} should include rogerchappel tag`);
  }
});
