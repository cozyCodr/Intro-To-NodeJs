import { readfile } from "fs"

readfile(new URL('app.mjs', import.meta.url), 'utf-8', (err, data) => {
    if (err) {
        throw err
    } else {
        // Do something Else
    }
})