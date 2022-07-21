import cac from 'cac'
import { startDevServer } from './server'

const cli = cac();
cli.command('[root]', 'Start the development server')
.alias('server')
.alias('dev')
.alias('start')
.action(async () => {
  await startDevServer()
})

cli.help();

cli.parse();
