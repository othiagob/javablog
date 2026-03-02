# layouts/

Contém os **templates HTML** que definem como cada página do blog é renderizada.
O Hugo usa esses arquivos para gerar o HTML final.

> ⚠️ **Atenção:** Editar estes arquivos requer conhecimento de HTML e da
> linguagem de templates do Go. Erros aqui podem quebrar o site visualmente
> ou impedir o build.
>
> ⚠️ **Nunca crie arquivos .md dentro de `layouts/`** — o Hugo tenta
> parsear tudo nessa pasta como template Go e vai falhar no build.

## Estrutura

```
layouts/
├── 404.html          → Página de "não encontrado"
├── _default/         → Templates principais (base, lista, post individual)
├── partials/         → Componentes reutilizáveis (cabeçalho, rodapé, etc.)
└── shortcodes/       → Componentes especiais usados dentro do Markdown
```

## Quando você precisaria editar aqui

- Mudar o cabeçalho ou rodapé → `partials/header.html` ou `partials/footer.html`
- Mudar como os posts são listados → `_default/list.html`
- Mudar como um post individual aparece → `_default/single.html`
- Adicionar scripts ou meta tags globais → `partials/head.html`
- Criar novos shortcodes para usar nos posts → `shortcodes/`

## Como o Hugo resolve os templates

O Hugo usa este diretório antes de qualquer tema — ou seja, você pode criar
arquivos aqui para **sobrescrever** partes do tema sem alterar o tema base.

Veja detalhes de cada subpasta em:
- [layouts-default.md](./layouts-default.md)
- [layouts-partials.md](./layouts-partials.md)
- [layouts-shortcodes.md](./layouts-shortcodes.md)
