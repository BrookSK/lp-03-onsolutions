# Imagens da Landing Page 03 — CRM Sob Medida

Esta pasta deve conter os logotipos originais da ON Solutions e dos clientes,
extraídos do HTML de referência (`03-lp-crm-sob-medida.html`), onde estão
embutidos em Base64.

## Arquivos esperados (referenciados pelo `index.html`)

| Arquivo                     | Uso                                            |
|-----------------------------|------------------------------------------------|
| `favicon.png`               | Ícone da aba (64×64)                            |
| `on-solutions.png`          | Logo ON Solutions (header + card do WhatsApp)  |
| `cliente-braziliana.png`    | Logo Braziliana (carrossel)                     |
| `cliente-quatri.png`        | Logo Quatri Automação (carrossel)               |
| `cliente-brooks.png`        | Logo Brooks Construtora (carrossel)             |
| `cliente-crosshr.png`       | Logo CrossHR (carrossel)                         |
| `cliente-multilife.png`     | Logo MultiLife Care (carrossel)                 |
| `cliente-mafedo.png`        | Logo Mafedo Engenharia (carrossel)              |

> A identificação textual **Central RZ** é renderizada como texto (`.chip .wm`)
> no próprio HTML, exatamente como na referência — não é um arquivo de imagem.

## Como gerar os arquivos (byte a byte idênticos aos originais)

1. Coloque `03-lp-crm-sob-medida.html` na raiz do projeto.
2. Na raiz do projeto, rode:

   ```
   node gerar-imagens.js
   ```

3. Os 8 PNGs acima serão criados aqui, sem perda de qualidade. O script valida
   a assinatura PNG e o encerramento de cada arquivo.

Depois de gerar as imagens, o script `gerar-imagens.js` pode ser removido.
