# WIKI — String[] args

Documentação completa do projeto. Cada arquivo explica uma pasta do blog:
o que cada arquivo faz, o que pode ser editado e o risco de cada mudança.

## Índice

| Arquivo | Pasta documentada |
|---------|-------------------|
| [assets.md](./assets.md) | `assets/` — CSS e estilos |
| [site.md](./site.md) | `site/` — configuração principal |
| [content.md](./content.md) | `site/content/` — páginas e posts |
| [content-homepage.md](./content-homepage.md) | `site/content/homepage/` — seções da homepage |
| [content-post.md](./content-post.md) | `site/content/post/` — posts do blog |
| [i18n.md](./i18n.md) | `i18n/` — traduções da interface |
| [layouts.md](./layouts.md) | `layouts/` — templates HTML (visão geral) |
| [layouts-default.md](./layouts-default.md) | `layouts/_default/` — templates principais |
| [layouts-partials.md](./layouts-partials.md) | `layouts/partials/` — componentes reutilizáveis |
| [layouts-shortcodes.md](./layouts-shortcodes.md) | `layouts/shortcodes/` — componentes para Markdown |
| [static.md](./static.md) | `static/` — arquivos públicos |
| [workflows.md](./workflows.md) | `.github/workflows/` — deploy automático |

## Regra de ouro

**Para o dia a dia** (escrever posts, mudar nome/bio): edite apenas `site/`.

**Para mudar o visual**: edite `assets/app.css` ou os parâmetros de cor no `hugo.toml`.

**Para mudar estrutura de páginas**: edite `layouts/` — exige HTML e conhecimento de Go templates.

## ⚠️ Nunca coloque arquivos .md dentro de `layouts/` ou `i18n/`

O Hugo tenta processar tudo nessas pastas como templates/traduções e vai falhar no build.
