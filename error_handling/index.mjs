import { readFile, writeFile } from "fs/promises"

let template = await readFile(new URL("template.html", import.meta.url), 'utf-8')

const data = {
	title: "Brights Amazing Journey Begins",
	body: "Watch him as he grows his empire"
}

for (const [k, v] of Object.entries(data)) {
	template = template.replaceAll(`{${k}}`, v)
}


await writeFile(new URL("index.html", import.meta.url), template)