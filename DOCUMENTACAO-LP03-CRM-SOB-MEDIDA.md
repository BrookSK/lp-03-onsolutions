# Documentação Técnica — Landing Page 03: CRM Sob Medida | ON Solutions Brasil

> Documento que reflete o estado **real** da implementação desta landing page.
> Não registra funcionalidades previstas que não tenham sido implementadas.

---

## 1. Objetivo e escopo

Landing page única, estática, responsiva e funcional para apresentar e converter o
serviço de **CRM sob medida** da ON Solutions Brasil. O objetivo comercial é levar o
visitante a iniciar uma conversa pelo WhatsApp com a mensagem pré-preenchida.

**Escopo (delimitação):**

- Desenvolve-se **apenas** esta página (LP03 — CRM Sob Medida).
- Não há outras páginas, rotas, painel administrativo, CMS, banco de dados nem backend.
- Conteúdo exclusivo de CRM — sem reaproveitar texto das LPs de Sistema Web ou ERP.

---

## 2. Estrutura de arquivos

| Arquivo                                   | Responsabilidade                                                        | Situação   |
|-------------------------------------------|-------------------------------------------------------------------------|------------|
| `index.html`                              | Marcação semântica, metadados (SEO), estrutura das seções               | Criado     |
| `assets/css/styles.css`                   | Todo o estilo (variáveis, layout, responsividade, animações)            | Criado     |
| `assets/js/main.js`                       | Lógica: WhatsApp dinâmico, desafios, header, carrossel, rastreamento    | Criado     |
| `assets/img/` (PNGs)                       | Logotipos ON Solutions e dos clientes                                   | **Pendente** (ver §19) |
| `assets/img/LEIA-ME.md`                   | Instruções para gerar os PNGs a partir do HTML de referência            | Criado     |
| `gerar-imagens.js`                        | Script Node que extrai os PNGs do HTML de referência (byte a byte)      | Criado     |
| `DOCUMENTACAO-LP03-CRM-SOB-MEDIDA.md`     | Este documento                                                          | Criado     |
| `README.md`                               | Visão geral e execução                                                   | Atualizado |

Arquivos **modificados** do estado inicial: apenas `README.md` (o projeto estava vazio).
Nenhum arquivo não relacionado foi alterado.

---

## 3. Arquitetura

- **Tecnologia:** HTML + CSS + JavaScript puro (vanilla), sem framework, sem build,
  sem dependências de runtime.
- **Justificativa:** o projeto estava vazio e a referência já era uma página única
  autossuficiente. Site estático é a solução mais simples, performática e de fácil
  manutenção para uma landing page única. Introduzir framework/backend ampliaria o
  escopo sem benefício.
- **Separação de responsabilidades:** diferentemente da referência (tudo embutido em
  um único HTML), separou-se CSS e JS em arquivos próprios, melhorando legibilidade e
  manutenção, sem alterar comportamento.
- **Node.js** é usado **apenas** como utilitário de desenvolvimento para gerar as
  imagens (`gerar-imagens.js`). A página em produção não depende de Node.

---

## 4. Estrutura da página (ordem das seções)

1. **Header** fixo (logo, nome, telefone, botão Orçamento) — `.top`
2. **Hero** (selo, título, subtítulo, benefícios, selos de confiança, card do WhatsApp) — `.hero`
3. **Identificação dos problemas** — `#dores` (4 desafios selecionáveis)
4. **Benefícios** — `#beneficios` (4 cards)
5. **Clientes e indicadores** — `#clientes` (3 indicadores + carrossel de logos)
6. **Como funciona** — `#como-funciona` (3 passos)
7. **Conversa gratuita** — `#oferta`
8. **Dúvidas frequentes** — `#duvidas` (3 perguntas em `<details>`)
9. **CTA final** — `#conversa`
10. **Footer** — `.foot`
11. **Botão fixo de WhatsApp** — `.sticky`

---

## 5. Identidade visual

**Paleta (variáveis CSS, preservadas da referência):**

```
--ink:#0B1220  --navy:#0F172A  --bg:#F5F8FB  --line:#E2E8F0
--text:#0F172A --soft:#52627A  --mint:#5EEAD4 --teal:#0D9488
--tealD:#0F766E --wa:#25D366   --waD:#1EBE5B
```

**Tipografia:** Poppins (400, 500, 600, 700, 800), carregada via Google Fonts com
`preconnect`.

**Direção visual:** tecnológica, moderna, clean e comercial; fundos escuros com
gradientes radiais discretos, destaques em turquesa e verde WhatsApp.

---

## 6. Conteúdo (implementado)

- **Hero:** selo "Orçamento direto no WhatsApp"; título "CRM sob medida para organizar
  suas vendas"; subtítulo sobre contatos, conversas e propostas; 3 benefícios; selos
  "Conversa gratuita / Sem compromisso / Resposta pelo WhatsApp".
- **Desafios (`#dores`):** "Perco orçamento no WhatsApp."; "Não sei em que etapa está
  cada cliente."; "Minha equipe esquece de dar retorno."; "Não sei quanto vendo por canal."
- **Benefícios (`#beneficios`):** Funil de vendas visual; Histórico de cada cliente;
  Retorno automático; Propostas e orçamentos.
- **Indicadores:** 100+ projetos entregues; 50+ clientes ativos; Brasil e exterior.
- **Como funciona:** Você chama no WhatsApp → Entendemos o seu cenário → Você recebe a proposta.
- **Oferta:** gargalos da operação; o que resolver primeiro; caminho recomendado e faixa de investimento.
- **FAQ:** "Quanto custa?"; "Serve para o meu tipo de venda?"; "Minha equipe vai conseguir usar?"
- **CTA final:** "Pronto para falar sobre CRM sob medida?" + observação de 30 minutos sem custo.
- **Footer:** assinatura institucional + `contato@onsolutionsbrasil.com.br` + links LGPD e Política de privacidade.

Todo o texto comercial foi preservado literalmente da referência. Não foram inventados
benefícios, integrações, automações, indicadores, clientes ou promessas.

---

## 7. Funcionalidades

- **Header com scroll:** esconde ao rolar para baixo, reaparece ao rolar para cima,
  fica visível perto do topo e volta ao receber foco por teclado.
- **Seleção de desafios:** marca/desmarca individual, seleção múltipla, estado visual
  via `aria-pressed`, acessível por teclado.
- **Mensagem dinâmica do WhatsApp:** a seleção altera a mensagem e a prévia no Hero.
- **Sincronização:** todos os botões principais (`data-wa-main`) usam a mesma mensagem.
- **Carrossel de clientes:** loop infinito contínuo, duplicação dos itens, pausa no
  toque, respeito a `prefers-reduced-motion`.
- **FAQ expansível:** `<details>`/`<summary>` nativos (acessíveis, funcionam por teclado).

---

## 8. WhatsApp

- **Número:** `5511972243329`
- **Link-base:** `https://wa.me/5511972243329`
- **Mensagem padrão:** `Olá, vim do site e gostaria de saber mais sobre os serviços de CRM.`
- **Construção da URL:** `https://wa.me/<numero>?text=` + `encodeURIComponent(mensagem)`.
- **Pontos de contato:** telefone do header, botão Orçamento do header e botão fixo
  inferior — todos com `data-wa`, `data-wa-main` e `data-pos`.
- **Abertura:** `target="_blank"` + `rel="noopener"`.
- **Mensagens dinâmicas:**
  - 1 desafio: `... Meu maior desafio hoje: [desafio].`
  - 2+ desafios: `... Meus maiores desafios hoje: [a]; [b]; [c].`
- **Sincronização:** a função `sync()` reescreve `data-wa`/`href` de todos os
  `[data-wa-main]` e atualiza o balão `[data-bubble]` do Hero.

---

## 9. Seleção dos desafios

- 4 opções (`.pain` com `aria-pressed`), seleção múltipla.
- **Feedback visual (`[data-hint]`):**
  - nenhum selecionado → vazio;
  - 1 selecionado → "Pronto! Agora toque em 'Pedir orçamento no WhatsApp' para enviar.";
  - 2+ → "Você marcou N. Isso tem solução: toque em 'Pedir orçamento no WhatsApp' para enviar."
- A prévia (balão do Hero) e os botões ficam sempre sincronizados com a seleção.

---

## 10. Clientes e indicadores

- **Indicadores:** 100+ projetos entregues; 50+ clientes ativos; Brasil e exterior.
- **Logotipos (carrossel):** Braziliana, Quatri Automação, Brooks Construtora, CrossHR,
  MultiLife Care, Mafedo Engenharia — referenciados como PNGs em `assets/img/`.
- **Central RZ:** preservada como identificação **textual** (`.chip .wm`), exatamente
  como na referência (não é imagem).
- **Carrossel:** movimento automático contínuo, loop infinito por duplicação dos chips,
  velocidade proporcional à largura, pausa no toque, desativado sob `prefers-reduced-motion`.

---

## 11. Rastreamento

- Estrutura preparada para **GTM**, **GA4** e **Google Ads** via objeto `ON_TRACKING`
  (todos os campos **vazios** — nada é carregado até preencher).

```js
var ON_TRACKING = { gtmId: "", ga4Id: "", gadsId: "", gadsConversionLabel: "" };
```

- **Carregamento condicional:** scripts externos só são injetados se houver ID válido.
- **Eventos:** `whatsapp_click` (com `service` e `position`) e `generate_lead`.
  Conversão do Google Ads disparada apenas se `gadsId` **e** `gadsConversionLabel`
  estiverem preenchidos.
- **Posições rastreadas:** `topo-telefone`, `topo`, `barra-fixa` (via `data-pos`).
- **Origem do anúncio:** `ON_APPEND_ORIGIN = true` acrescenta `Origem: anúncio | Termo | Campanha`
  à mensagem quando houver `utm_term`/`kw`/`utm_campaign`/`gclid` na URL.
- Nenhum ID fictício foi inserido; nenhuma conversão é disparada sem ação do usuário.

---

## 12. Responsividade

- **Mobile-first**, com desktop a partir de `min-width: 860px`.
- Breakpoints específicos do CTA/largura: 340px, 380px, 400px, 430px e 860px.
- No desktop: Hero em 2 colunas, benefícios em 4 colunas, passos/indicadores em 3 colunas,
  oferta em 2 colunas.
- No mobile: reorganização vertical; telefone do header oculto abaixo de 860px; parte
  complementar do nome da marca (" Brasil") oculta abaixo de 400px.
- Botão fixo respeita `env(safe-area-inset-bottom)`; o footer reserva espaço inferior
  para não ser coberto.

---

## 13. SEO

| Item          | Valor                                                                          |
|---------------|--------------------------------------------------------------------------------|
| `title`       | CRM Sob Medida \| ON Solutions Brasil                                           |
| `description` | Contatos, conversas e propostas em um só lugar, com funil de vendas e retorno automático. |
| `canonical`   | https://onsolutionsbrasil.com.br/lp/crm-sob-medida/                            |
| `robots`      | noindex,follow  (preservado — **não** alterado)                                |
| `theme-color` | #0B1220                                                                         |
| `lang`        | pt-BR                                                                           |
| charset       | UTF-8                                                                           |
| viewport      | width=device-width, initial-scale=1, viewport-fit=cover                        |

Hierarquia de headings: um `h1` (Hero) e `h2`/`h3` nas seções.

---

## 14. Acessibilidade

- HTML semântico (`header`, `main`, `section`, `footer`).
- `aria-pressed` nos desafios; `aria-live="polite"` no feedback; `aria-label` em grupos
  e no carrossel; `aria-hidden` em ícones decorativos e nos clones do carrossel.
- Navegação por teclado: desafios são `<button>`; FAQ usa `<details>`/`<summary>`.
- Estados de foco visíveis (`:focus-visible`), com cor adaptada em fundos escuros.
- Respeito a `prefers-reduced-motion` (anima­ções e scroll suave desativados).
- `alt` descritivo nas imagens de logotipo.

---

## 15. Performance

- CSS e JS externos, enxutos; JS encapsulado em IIFE; sem bibliotecas de terceiros.
- Fontes com `preconnect` e `display=swap`.
- Scripts de rastreamento carregados **sob demanda** (nada carrega se `ON_TRACKING`
  estiver vazio).
- `requestAnimationFrame` no controle de scroll do header; `scroll` passivo.
- Imagens: **externalizadas** em `assets/img/` (ver §19). A externalização reduz o
  tamanho do HTML em relação aos Base64 embutidos da referência e permite cache do
  navegador, preservando qualidade/proporção originais quando gerados via
  `gerar-imagens.js`.

---

## 16. Execução

É um site estático. Para abrir localmente:

1. **Gerar as imagens** (uma vez): coloque `03-lp-crm-sob-medida.html` na raiz e rode
   `node gerar-imagens.js` (ver §19).
2. Abrir `index.html` diretamente no navegador **ou** servir a pasta:
   - `python -m http.server 8080`  → acessar `http://localhost:8080`
   - ou qualquer servidor estático.

Servir por HTTP é recomendado para o carregamento correto de fontes/recursos.

---

## 17. Manutenção

| O que alterar            | Onde                                                                 |
|--------------------------|----------------------------------------------------------------------|
| Textos das seções        | `index.html`                                                         |
| Telefone / número WA     | `assets/js/main.js` → `WA_NUMBER`; e o texto exibido no `index.html` |
| Mensagem padrão          | atributos `data-wa` no `index.html` (e base em `main.js`)            |
| Desafios                 | botões `.pain` (atributo `data-q`) no `index.html`                   |
| Estilos / cores          | `assets/css/styles.css` (variáveis em `:root`)                       |
| Rastreamento             | `assets/js/main.js` → objeto `ON_TRACKING` e flag `ON_APPEND_ORIGIN` |
| Imagens / logotipos      | `assets/img/` (regenerar com `gerar-imagens.js`)                     |

---

## 18. Checklist de testes (resultados reais)

| Teste                                                      | Como foi verificado                         | Resultado |
|------------------------------------------------------------|---------------------------------------------|-----------|
| Estrutura HTML balanceada                                  | lint de abertura/fechamento de tags (Node)  | OK (8 sections, 1 main/header/footer, 3 details, 4 buttons) |
| CSS e JS referenciados existem                             | checagem de caminhos locais (Node)          | OK        |
| `data-wa-main` presentes (telefone, topo, barra-fixa)      | lint (Node)                                 | OK (3)    |
| `data-pos` corretos                                        | lint (Node)                                 | OK (topo-telefone, topo, barra-fixa) |
| 4 desafios `.pain` e `data-service="CRM"`                  | lint (Node)                                 | OK        |
| Lógica de extração/dedup das imagens                       | self-test com PNGs sintéticos (Node)        | OK (8 encontrados, duplicata consecutiva removida) |
| Imagens Base64 decodificam para PNG íntegro                | decodificação + verificação de assinatura   | **Pendente** (ver §19/§20) |

> Observação: os testes acima foram executados via Node no ambiente de
> desenvolvimento. Não foi possível validar renderização visual em navegador real
> dentro deste ambiente; recomenda-se abrir a página nos dispositivos listados na §12.

---

## 19. Pendências

1. **Arquivos de imagem em `assets/img/`** — os logotipos (favicon, ON Solutions e os 6
   clientes) ainda **não** estão na pasta. A referência os traz embutidos em Base64.
   Para gerá-los **byte a byte idênticos aos originais**, coloque
   `03-lp-crm-sob-medida.html` na raiz e rode `node gerar-imagens.js`. Enquanto isso não
   for feito, os `<img>` aparecerão quebrados (os textos `alt` e o chip "Central RZ"
   permanecem visíveis).
2. **Links legais do footer** — "LGPD e proteção de dados" e "Política de privacidade"
   estão com `href="#"`, exatamente como na referência. Não existem páginas de destino
   reais no projeto; nenhuma URL foi inventada. Atualizar quando os documentos existirem.
3. **Rastreamento** — `ON_TRACKING` está vazio (GTM/GA4/Ads). Preencher os IDs e o
   `gadsConversionLabel` para ativar.

---

## 20. Observações técnicas e decisões

- **Separação de CSS/JS:** decisão de manutenção; comportamento idêntico à referência.
- **Externalização das imagens (decisão principal):** a referência embute as imagens em
  Base64 no HTML. Optou-se por referenciá-las como arquivos PNG em `assets/img/` para
  reduzir o peso do HTML e permitir cache. Para **não** correr risco de corromper os
  bytes originais por transcrição manual, as imagens são geradas por um script
  (`gerar-imagens.js`) que **decodifica diretamente do HTML de referência**, garantindo
  fidelidade exata. Durante a implementação, confirmou-se empiricamente que transcrever
  manualmente strings Base64 longas não é confiável (uma decodificação de teste produziu
  cabeçalho PNG válido e dimensões corretas, porém sem o encerramento `IEND` íntegro),
  por isso a geração automatizada a partir do arquivo original é o caminho adotado.
- **Carrossel:** o JS da referência tinha um fallback para um elemento `#cases-track`
  (inexistente nesta página). Como esta LP já traz os chips preenchidos no HTML, esse
  fallback nunca era usado; manteve-se apenas a lógica efetiva (duplicação dos chips
  presentes), sem alterar o comportamento visível.
- **Nenhum logotipo foi substituído por texto, chip ou imagem inventada.** A única
  identificação textual é "Central RZ", que já era texto na referência.
- **SEO `noindex,follow` preservado** — não alterado por iniciativa própria.
