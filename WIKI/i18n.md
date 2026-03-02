# i18n/

Traduções dos textos fixos da interface do tema (botões, labels, navegação).

## Como funciona

O Hugo lê o arquivo correspondente ao idioma definido em `exampleSite/hugo.toml`:

```toml
DefaultContentLanguage = "pt"   # usa i18n/pt.yaml
```

O arquivo de idioma substitui automaticamente os textos do tema.

## Arquivos disponíveis

| Arquivo | Idioma |
|---------|--------|
| `pt-br.yaml` | 🇧🇷 Português (Brasil) — **idioma ativo** |
| `pt.yaml` | Português |
| `en.yaml` | Inglês |
| `es.yaml` | Espanhol |
| `de.yaml` | Alemão |
| `fr.yaml` | Francês |
| `ja.yaml` | Japonês |
| `zh.yaml` | Chinês |
| *(e outros)* | Vários idiomas |

## O que é traduzido

Atualmente o tema só tem dois textos de interface:

```yaml
- id: prev_page
  translation: 'Página Anterior'

- id: next_page
  translation: 'Próxima Página'
```

## Como adicionar uma tradução

Se o tema adicionar novos textos de interface, edite `pt-br.yaml` e adicione:

```yaml
- id: id_do_texto
  translation: 'Tradução em português'
```

## ⚠️ Cuidados

- Não delete `pt-br.yaml` — é o arquivo de idioma ativo do blog
- Os outros arquivos de idioma não são usados, mas não atrapalham
