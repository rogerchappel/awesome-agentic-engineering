import fs from 'node:fs';

const data = JSON.parse(fs.readFileSync('data/resources.json', 'utf8'));
const badge = '[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)';
const toc = data.categories.map((category) => `- [${category.title}](#${slug(category.title)})`).join('\n');
const sections = data.categories.map((category) => {
  const resources = category.resources
    .map((resource) => `- [${resource.name}](${resource.url}) — ${resource.description}`)
    .join('\n');
  return `## ${category.title}\n\n${category.description}\n\n${resources}`;
}).join('\n\n');

const readme = `# ${data.metadata.title}\n\n${badge}\n\n${data.metadata.description}\n\nThis is a curated, practical field guide for people building software with coding agents: tools worth knowing, workflows that hold up under review, and safety checks that keep autonomy bounded. It follows the awesome-list tradition while using an original taxonomy for agentic engineering.\n\n## How to use this list\n\n- Start with **Coding agents and agentic IDEs** if you want tools that directly change code.\n- Use **Verification, evaluation, and observability** before trusting automated changes.\n- Pair **Safety, governance, and secure execution** with any workflow that can touch secrets, dependencies, infrastructure, or releases.\n- Treat entries as starting points, not endorsements. Evaluate licenses, security posture, maintenance, and fit for your environment.\n\n## Contents\n\n${toc}\n\n${sections}\n\n## Curation principles\n\n- Prefer practical projects, standards, and docs that help teams ship safer agent-assisted software.\n- Include tools with clear public documentation, active maintenance signals, or durable ecosystem importance.\n- Avoid bulk dumping links, thin wrappers, growth-hacked projects, or entries without a concrete engineering use case.\n- Keep descriptions original, specific, and useful to a practitioner deciding what to inspect next.\n\n## Contributing\n\nContributions are welcome. Please read [CONTRIBUTING.md](CONTRIBUTING.md) and [docs/curation-policy.md](docs/curation-policy.md) before opening an issue or pull request.\n\n## Attribution\n\nInspired by the awesome-list format and the category represented by [sindresorhus/awesome](https://github.com/sindresorhus/awesome). This repository does not copy that list's contents, branding, wording, or structure; descriptions and taxonomy here are original.\n\n## License\n\nContent is licensed under [CC BY 4.0](LICENSE).\n`;

fs.writeFileSync('README.md', `${readme.trimEnd()}\n`);

function slug(value) {
  return value.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-');
}
