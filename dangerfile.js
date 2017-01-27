import { danger, fail } from 'danger';

// Make sure there are changelog entries
const hasChangelog = danger.git.modified_files.includes('changelog.md');
if (!hasChangelog) {
  fail('No Changelog changes!');
}
