# .github/workflows/

Contém o arquivo de automação do **GitHub Actions** — responsável pelo deploy
automático do blog no GitHub Pages.

## Arquivos

### `deploy.yml` — pipeline de build e deploy

Disparado automaticamente em todo push na branch `main`.

**Etapas do pipeline:**

| Etapa | O que faz |
|-------|-----------|
| Checkout | Baixa o código do repositório |
| Setup Hugo | Instala o Hugo Extended (gerador de site) |
| Setup Bun | Instala o Bun (runtime para os scripts de CSS) |
| Install dependencies | Instala os pacotes do `package.json` (Tailwind, PostCSS) |
| Build CSS | Compila `assets/app.css` → `assets/main.css` com PostCSS/Tailwind |
| Prepare Hugo modules | Copia `go.default.mod` para `go.mod` (modo standalone) |
| Build site | Gera o site estático com Hugo na pasta `./public/` |
| Setup Pages | Configura o GitHub Pages para receber o deploy |
| Upload artifact | Envia a pasta `./public/` como artefato do Pages |
| Deploy | Publica no GitHub Pages |

**Resultado:** Após ~2-3 minutos do push, o site atualiza em:
`https://othiagob.github.io/javablog/`

## Como funciona o deploy

```
push na main
    ↓
GitHub Actions executa deploy.yml
    ↓
Hugo gera HTML estático em ./public/
    ↓
GitHub Pages serve os arquivos publicamente
```

## ⚠️ Cuidados

- Não delete este arquivo — sem ele o deploy não acontece automaticamente
- Se mudar a versão do Hugo, atualize `HUGO_VERSION` no `deploy.yml`
- Se o build falhar, vá em **Actions** no GitHub para ver o log de erros
- Erros comuns: TOML inválido no `hugo.toml`, template HTML quebrado

## Verificar o status do deploy

No GitHub: `Repositório → Actions → último workflow run`

Verde ✅ = deploy OK | Vermelho ❌ = veja o log de erros
