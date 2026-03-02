# exampleSite/content/post/

Aqui ficam todos os **posts do blog**.
Cada arquivo `.md` é um post publicado.

## Arquivos atuais

| Arquivo | Conteúdo | Status |
|---------|----------|--------|
| `_index.md` | Metadados da seção de posts | Não delete |
| `markdown-syntax.md` | Exemplo de sintaxe Markdown | 🗑️ Pode deletar |
| `placeholder-text.md` | Post de exemplo com texto genérico | 🗑️ Pode deletar |
| `emoji-support.md` | Demonstração de emojis | 🗑️ Pode deletar |
| `math-typesetting.md` | Demonstração de fórmulas matemáticas | 🗑️ Pode deletar |
| `rich-content.md` | Demonstração de vídeos/embeds | 🗑️ Pode deletar |

Os posts acima são exemplos do tema. **Substitua-os pelos seus próprios posts.**

## Como criar um post

1. Crie um arquivo `.md` nesta pasta
2. Use o cabeçalho abaixo como base:

```markdown
+++
title = "Título do Post"
date = "2026-03-02"
description = "Uma linha descrevendo o post"
tags = ["java", "oop"]
categories = ["Programação"]
author = "Thiago B."
+++

## Introdução

Seu conteúdo aqui em Markdown...
```

## Markdown suportado

O blog suporta todo o Markdown padrão:
- **Negrito**, *itálico*, `código inline`
- Blocos de código com syntax highlighting (` ```java `)
- Listas, tabelas, citações (`>`)
- Links e imagens
- HTML direto (habilitado no config)

## Rascunhos

Para criar um post sem publicar, adicione `draft = true` no cabeçalho.
Rascunhos não aparecem no site publicado.
