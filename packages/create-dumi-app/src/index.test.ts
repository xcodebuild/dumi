import { join } from 'path';
import { rimraf } from '@umijs/utils';
import { existsSync } from 'fs';
import runGenerator from './index';

const fixtures = join(__dirname, 'fixtures');
const cwd = join(fixtures, 'generate');

test('generate app', async () => {
  await runGenerator({
    cwd,
    args: {
      _: [],
      $0: '',
    },
  });
  expect(existsSync(join(cwd, 'docs', 'index.zh-CN.md'))).toEqual(true);
  rimraf.sync(cwd);
});
