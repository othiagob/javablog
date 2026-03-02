# Public Java

Blog pessoal de Thiago B. — programação, Java e Tibia.

**Acesse:** https://othiagob.github.io/javablog/

---

## Estrutura do projeto

```
blog/
├── WIKI/              → Documentação de cada pasta do projeto
├── assets/            → CSS (Tailwind) — estilos do tema
├── exampleSite/       → O site em si: configuração e conteúdo
│   ├── hugo.toml      → Configuração principal do blog ← edite aqui
│   └── content/       → Todos os textos e posts ← edite aqui
├── i18n/              → Traduções da interface
├── layouts/           → Templates HTML que geram as páginas
├── static/            → Arquivos públicos (ícones, imagens, JS)
├── .github/workflows/ → Deploy automático para o GitHub Pages
├── go.mod             → Módulo Hugo (não editar)
├── package.json       → Scripts de build (Bun + PostCSS)
└── postcss.config.mjs → Configuração do processador de CSS
```

## Documentação

Toda a documentação detalhada está na pasta **[WIKI/](./WIKI/index.md)**.

## Deploy

Todo push na branch `main` publica o site automaticamente via GitHub Actions.
