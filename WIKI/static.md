# static/

Arquivos **públicos e estáticos** — são copiados diretamente para a raiz do site
gerado, sem processamento pelo Hugo.

Tudo aqui fica acessível em `https://othiagob.github.io/javablog/nome-do-arquivo`.

## Arquivos

| Arquivo | O que é | Pode substituir? |
|---------|---------|-----------------|
| `favicon.ico` | Ícone que aparece na aba do browser | ✅ Sim — substitua pelo seu |
| `apple-touch-icon.png` | Ícone quando salva o site na tela do iPhone | ✅ Sim |
| `github.svg` | Ícone do GitHub (usado no menu/header) | ⚠️ Não altere o nome |
| `linkedin.svg` | Ícone do LinkedIn | ⚠️ Não altere o nome |
| `instagram.svg` | Ícone do Instagram | ⚠️ Não altere o nome |
| `twitter.svg` | Ícone do Twitter/X | ⚠️ Não altere o nome |
| `mastodon.svg` | Ícone do Mastodon | ⚠️ Não altere o nome |
| `bluesky.svg` | Ícone do Bluesky | ⚠️ Não altere o nome |
| `threads.svg` | Ícone do Threads | ⚠️ Não altere o nome |
| `rss.svg` | Ícone do RSS feed | ⚠️ Não altere o nome |
| `theme.svg` / `theme.png` | Ícone do botão de alternar dark/light mode | ⚠️ Não altere o nome |
| `highlight.min.js` | Biblioteca de syntax highlighting para código | ⚠️ Não delete |

## Como adicionar imagens aos posts

Coloque imagens aqui (ou em subpastas) e referencie no Markdown:

```markdown
![Descrição da imagem](/javablog/minha-imagem.jpg)
```

Ou crie uma pasta `static/images/` para organizar melhor:
```markdown
![Java logo](/javablog/images/java-logo.png)
```

## ⚠️ Cuidados

- Não renomeie os arquivos de ícones SVG — o template os referencia pelo nome exato
- Não delete `highlight.min.js` — o syntax highlight dos blocos de código depende dele
- Arquivos grandes aqui aumentam o tempo de carregamento do site
