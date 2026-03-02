# layouts/partials/

Componentes HTML reutilizáveis incluídos pelos templates principais.

## Arquivos

| Arquivo | O que renderiza | Impacto se editado |
|---------|-----------------|-------------------|
| `head.html` | Todo o `<head>`: meta tags, CSS, fonts, favicons | 🔴 Alto — afeta carregamento e SEO de todas as páginas |
| `header.html` | **Cabeçalho**: logo, navegação, botão dark mode, redes sociais | 🟡 Médio — muda o topo de todas as páginas |
| `footer.html` | **Rodapé**: copyright, link do Hugo | 🟢 Baixo — muda só o rodapé |
| `math.html` | Suporte a fórmulas matemáticas (KaTeX) | 🟢 Baixo — só afeta posts com fórmulas |
| `mermaid.html` | Suporte a diagramas Mermaid | 🟢 Baixo — só afeta posts com diagramas |

## Customizações comuns

### Adicionar link no menu
Não edite `header.html` — adicione ao `hugo.toml`:
```toml
[[menu.main]]
  name = "Projetos"
  url = "/projects/"
  weight = 30
```

### Adicionar ícones de redes sociais no header
Adicione ao `[params]` no `hugo.toml`:
```toml
[params]
  github    = 'othiagob'
  linkedin  = 'seu-usuario'
  # Outros: twitter, instagram, mastodon, bluesky, threads, rss
```

### Adicionar Google Analytics
Edite `head.html` — acrescente o script do GA antes do fechamento do bloco.

## ⚠️ Cuidados

- `header.html` contém o JavaScript do dark mode — tenha cuidado ao editar
- `head.html` controla o carregamento do CSS — erro aqui quebra o visual completamente
- Nunca crie arquivos `.md` nesta pasta
