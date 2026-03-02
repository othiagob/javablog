# exampleSite/

Esta é a pasta mais importante para o dia a dia do blog.
É aqui que ficam a **configuração principal** e todo o **conteúdo** do site.

## Arquivos de configuração

| Arquivo | O que faz | Pode editar? |
|---------|-----------|--------------|
| `hugo.toml` | **Configuração principal** — título, idioma, menus, redes sociais, cor do tema | ✅ Sim — principal arquivo de configuração |
| `go.default.mod` | Define o módulo Hugo para build standalone (copiado para `go.mod` no build) | ⚠️ Não edite — parte do sistema de build |
| `go.toml` | Módulo alternativo que importa o tema do GitHub (usado no Vercel) | ⚠️ Não edite |
| `.gitignore` | Ignora a pasta `public/` (gerada pelo Hugo) no Git | ⚠️ Não edite |

## Subpastas

```
exampleSite/
├── hugo.toml   → Configuração do blog
├── content/    → Todos os textos e posts (edite aqui!)
├── layouts/    → Sobrescritas de layout (vazia, para customizações futuras)
└── static/     → Arquivos estáticos específicos do site (imagens, etc.)
```

## Principais configurações do hugo.toml

```toml
title = "Public Java"          # Nome do blog (aparece no cabeçalho e aba do browser)
author = "Thiago B."           # Seu nome (aparece nos posts)
copyright = "© 2026, ..."      # Rodapé

[params]
  color = 'linen'              # Cor de fundo: linen, wheat, gray, light
  github = 'othiagob'          # Seu usuário do GitHub (ícone aparece no header)
  name = 'Thiago B.'           # Nome exibido no perfil da homepage
  bio = '...'                  # Descrição curta exibida na homepage

[[menu.main]]                  # Links do menu de navegação
```

## ⚠️ Cuidados

- Mudar `baseURL` pode quebrar links — deixe como está a menos que mude de domínio
- Mudar `theme` pode fazer o site não carregar se o tema não for encontrado
