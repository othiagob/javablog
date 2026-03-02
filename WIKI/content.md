# exampleSite/content/

Aqui ficam **todos os textos do blog** — posts, páginas e seções da homepage.
É a pasta que você vai editar com mais frequência.

## Estrutura

```
content/
├── _index.md        → Página inicial (só metadados, não aparece como texto)
├── about.md         → Página "Sobre"  →  /about/
├── contact.md       → Página "Contato"  →  (opcional, removida do menu)
├── archives.md      → Página de arquivo com todos os posts  →  /archives/
├── homepage/        → Seções de texto que aparecem na página inicial
└── post/            → Todos os posts do blog  →  /post/nome-do-post/
```

## Como criar um novo post

Crie um arquivo `.md` dentro de `post/`:

```
content/post/meu-primeiro-post.md
```

Estrutura mínima do arquivo:

```markdown
+++
title = "Meu Primeiro Post"
date = "2026-03-02"
tags = ["java", "iniciante"]
categories = ["Programação"]
+++

Conteúdo do post em Markdown aqui.
```

## Campos do cabeçalho (front matter)

| Campo | Obrigatório | Descrição |
|-------|-------------|-----------|
| `title` | ✅ | Título do post |
| `date` | ✅ | Data no formato `"AAAA-MM-DD"` |
| `description` | Não | Resumo curto (aparece nos resultados de busca) |
| `tags` | Não | Lista de tags — ex: `["java", "oop"]` |
| `categories` | Não | Categoria — ex: `["Programação"]` |
| `draft = true` | Não | Marca como rascunho (não aparece no site publicado) |

## ⚠️ Cuidados

- Não delete `_index.md` — o Hugo precisa dele para montar a página inicial
- Não delete `archives.md` — é a página de arquivo do menu
- O nome do arquivo vira a URL: `meu-post.md` → `/post/meu-post/`
