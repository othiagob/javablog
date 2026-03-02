# layouts/_default/

Templates principais que definem a estrutura de todas as páginas do blog.

## Arquivos

| Arquivo | O que faz | Impacto se editado |
|---------|-----------|-------------------|
| `baseof.html` | **Template base** — estrutura HTML comum a todas as páginas (`<html>`, `<head>`, `<body>`) | 🔴 Alto — afeta **todo** o site |
| `list.html` | Template de **listagem** — página inicial, lista de tags, categorias, arquivo | 🟡 Médio — afeta páginas de lista |
| `single.html` | Template de **post individual** — como cada post é exibido | 🟡 Médio — afeta todos os posts |

## Como funciona a hierarquia

```
baseof.html  →  estrutura base de todas as páginas
    ↓
list.html    →  preenche o bloco "main" para páginas de lista
single.html  →  preenche o bloco "main" para posts individuais
```

## Exemplos de customização

**`single.html`** — adicionar tempo de leitura, botão de compartilhar, etc.

**`list.html`** — mudar como os posts aparecem na listagem.

**`baseof.html`** — adicionar Google Analytics ou scripts globais:
```html
{{- partial "head.html" . -}}
<script async src="https://analytics..."></script>
```

## ⚠️ Cuidados

- A sintaxe de template Go é sensível — um `{{` sem fechar quebra o build
- Nunca crie arquivos `.md` nesta pasta — o Hugo os trata como templates
- Faça commit antes de grandes alterações para poder reverter
