# layouts/shortcodes/

Shortcodes são componentes especiais usados **dentro dos posts** em Markdown.

## Shortcodes disponíveis

### `collapse` — bloco expansível (acordeão)

Cria um elemento `<details>` que o leitor pode abrir/fechar.

**Uso no Markdown:**
```
{{</* collapse summary="Clique para ver" content="Conteúdo oculto aqui!" */>}}
```

**Parâmetros:**

| Parâmetro | Obrigatório | Descrição |
|-----------|-------------|-----------|
| `summary` | ✅ | Texto do cabeçalho (sempre visível) |
| `content` | Não | Conteúdo expandido (suporta Markdown) |
| `openByDefault` | Não | `true` para começar aberto |

**Exemplo prático:**
```
{{</* collapse
  summary="O que é um objeto em Java?"
  content="Um objeto é uma instância de uma classe com **estado** e **comportamento**."
*/>}}
```

## Como criar um novo shortcode

1. Crie `layouts/shortcodes/meu-shortcode.html`
2. Use no Markdown: `{{</* meu-shortcode parametro="valor" */>}}`

## Shortcodes nativos do Hugo (não precisam de arquivo)

```
{{</* youtube ID_DO_VIDEO */>}}
{{</* figure src="img.jpg" caption="Legenda" */>}}
```

Referência: https://gohugo.io/content-management/shortcodes/
