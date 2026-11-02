# LP03 — CRM Sob Medida | ON Solutions Brasil

Landing page única, estática e responsiva para o serviço de **CRM sob medida** da
ON Solutions Brasil, com foco em conversão via WhatsApp.

## Stack

HTML + CSS + JavaScript puro (sem framework, sem build, sem backend).

## Estrutura

```
index.html                  # marcação e metadados (SEO)
assets/css/styles.css       # estilos (variáveis, layout, responsividade, animações)
assets/js/main.js           # WhatsApp dinâmico, desafios, header, carrossel, tracking
assets/img/                 # logotipos (gerar com o script abaixo)
gerar-imagens.js            # extrai os PNGs do HTML de referência (uso único)
DOCUMENTACAO-LP03-CRM-SOB-MEDIDA.md
```

## Antes de abrir: gerar as imagens

Os logotipos estão embutidos em Base64 no HTML de referência. Para criá-los em
`assets/img/` sem perda:

```bash
# 1) coloque 03-lp-crm-sob-medida.html na raiz do projeto
# 2) rode:
node gerar-imagens.js
```

## Executar

Abra `index.html` no navegador ou sirva a pasta:

```bash
python -m http.server 8080   # depois acesse http://localhost:8080
```

## Documentação completa

Veja `DOCUMENTACAO-LP03-CRM-SOB-MEDIDA.md` (arquitetura, WhatsApp, rastreamento,
responsividade, SEO, acessibilidade, checklist de testes e pendências).

## Pendências

- Gerar as imagens em `assets/img/` (ver acima).
- Preencher IDs de rastreamento em `ON_TRACKING` (`assets/js/main.js`) para ativar GTM/GA4/Ads.
- Links legais do footer (`href="#"`) aguardam páginas de destino reais.
