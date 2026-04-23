import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const AdmZip = require('./node_modules/adm-zip/adm-zip.js');
import { mkdirSync } from 'fs';

mkdirSync('./invoicefast_extracted', { recursive: true });

const z = new AdmZip('./thezip2.zip', { readEntries: false });
const entries = z.getEntries();
for (const entry of entries) {
  console.log(entry.entryName);
  if (!entry.isDirectory) {
    try {
      z.extractEntryTo(entry, './invoicefast_extracted', true, true);
    } catch(e) {
      console.log('  ERROR:', e.message);
    }
  }
}
console.log('done');
