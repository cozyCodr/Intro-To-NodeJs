import { readfile } from "fs/promises"

process.on('uncaughtException', (e) => {
    console.log(e)
})
const result = await readfile(new URL('app.mjs', import.meta.url), 'utf-8')
