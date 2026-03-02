# assets/

Contém os arquivos de CSS do tema.

## Arquivos

| Arquivo | O que faz | Pode editar? |
|---------|-----------|--------------|
| `app.css` | **Fonte do CSS** — aqui ficam as classes Tailwind e estilos personalizados do tema | ✅ Sim — é aqui que você customiza cores, fontes e layout |
| `main.css` | CSS compilado pelo PostCSS a partir do `app.css` | ⚠️ Não edite diretamente — é gerado automaticamente no build |
| `custom.css` | Arquivo para seus estilos extras, sem mexer no tema base | ✅ Sim — adicione aqui qualquer CSS personalizado |

## Como funciona

```
app.css  →  PostCSS (Tailwind)  →  main.css  →  usado pelo Hugo no build
```

## Exemplos de customização

Para mudar a cor do tema, edite `exampleSite/hugo.toml`:
```toml
[params]
  color = 'linen'  # opções: linen, wheat, gray, light
```

Para estilos mais avançados, edite `app.css` — mas tenha cuidado pois altera o visual de todo o blog.
