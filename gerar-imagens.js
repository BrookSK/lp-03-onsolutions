/* ==========================================================================
   gerar-imagens.js
   Extrai as imagens Base64 do HTML de referência (03-lp-crm-sob-medida.html)
   e grava os PNGs originais, sem perda, em assets/img/.

   COMO USAR:
   1. Coloque o arquivo de referência "03-lp-crm-sob-medida.html" na raiz
      do projeto (mesma pasta deste script).
   2. Rode:  node gerar-imagens.js
   3. Os arquivos serão criados em assets/img/ com os nomes esperados pelo
      index.html. Depois disso este script pode ser removido.

   Por que assim? O HTML de referência traz os logotipos embutidos em Base64.
   Decodificar diretamente do arquivo original garante que os PNGs gerados
   sejam BYTE A BYTE idênticos aos originais (qualidade, proporção e aparência
   preservadas), sem risco de corrupção por transcrição manual.
   ========================================================================== */
"use strict";

const fs = require("fs");
const path = require("path");

const REF = path.join(__dirname, "03-lp-crm-sob-medida.html");
const OUT = path.join(__dirname, "assets", "img");

if (!fs.existsSync(REF)) {
  console.error("ERRO: coloque '03-lp-crm-sob-medida.html' na raiz do projeto e rode novamente.");
  process.exit(1);
}

fs.mkdirSync(OUT, { recursive: true });

const html = fs.readFileSync(REF, "utf8");

/* Ordem e mapeamento das imagens Base64 conforme aparecem no HTML de referência:
   1) favicon (ícone 64x64 no <link rel="icon">)
   2) logo ON Solutions (usado no header e no card do WhatsApp — mesma imagem, repetida)
   3..8) logotipos de clientes (ordem do carrossel):
          Braziliana, Quatri Automação, Brooks Construtora, CrossHR, MultiLife Care, Mafedo Engenharia
*/
const b64s = [];
const re = /data:image\/png;base64,([A-Za-z0-9+/=]+)/g;
let m;
while ((m = re.exec(html)) !== null) b64s.push(m[1]);

if (b64s.length < 8) {
  console.error("ERRO: esperava 8 imagens Base64 no HTML, encontrei " + b64s.length + ".");
  process.exit(1);
}

// A imagem da ON aparece 2x (header + card). Removemos a duplicata consecutiva mantendo a ordem.
const unique = [];
for (const b of b64s) {
  if (unique.length === 0 || unique[unique.length - 1] !== b) unique.push(b);
}

const names = [
  "favicon.png",
  "on-solutions.png",
  "cliente-braziliana.png",
  "cliente-quatri.png",
  "cliente-brooks.png",
  "cliente-crosshr.png",
  "cliente-multilife.png",
  "cliente-mafedo.png",
];

function isValidPng(buf) {
  // Assinatura PNG: 8 bytes. Encerramento IEND: 12 bytes (len+tipo+CRC).
  const sigOk = buf.slice(0, 8).toString("hex") === "89504e470d0a1a0a";
  const endOk = buf.slice(-12).toString("hex") === "0000000049454e44ae426082";
  return sigOk && endOk;
}

let ok = 0;
for (let i = 0; i < names.length && i < unique.length; i++) {
  const buf = Buffer.from(unique[i], "base64");
  const valid = isValidPng(buf);
  fs.writeFileSync(path.join(OUT, names[i]), buf);
  console.log(names[i] + "  (" + buf.length + " bytes)  PNG válido: " + valid);
  if (valid) ok++;
}
console.log("\nConcluído: " + ok + "/" + names.length + " imagens válidas gravadas em assets/img/.");
