# exampleSite/content/homepage/

Contém as seções de texto que aparecem na **página inicial** do blog,
logo abaixo do avatar/bio, antes da lista de posts.

## Arquivos

| Arquivo | O que faz | Pode editar? |
|---------|-----------|--------------|
| `index.md` | Define a seção como "headless" (invisível no Hugo, só organiza os outros) | ⚠️ Não edite |
| `work.md` | **Primeiro bloco** de texto da homepage — aparece com um botão de ação | ✅ Sim |
| `about.md` | **Segundo bloco** de texto da homepage — aparece com outro botão | ✅ Sim |

## Como editar

Cada arquivo tem um cabeçalho como:

```yaml
---
title: 'Título do bloco'
button: 'Texto do botão'
weight: 1   # ordem de exibição (menor = aparece primeiro)
---

Texto da seção em Markdown.
```

## ⚠️ Cuidados

- Se deletar `work.md` ou `about.md`, os blocos somem da homepage — OK se quiser
- O `button` leva para a página com o mesmo nome da URL (`/about/`, etc.)
- Não delete `index.md` — o Hugo precisa dele para processar a pasta
