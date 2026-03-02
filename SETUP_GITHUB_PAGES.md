# 🚀 Guia de Setup: GitHub Pages + GitHub Actions

Este guia explica como ativar o deploy automático do seu blog no GitHub Pages.

## ⚠️ Problema Encontrado

Seu repositório tem uma restrição de segurança que impede que workflows sejam criados via git push. Isso é uma proteção do GitHub. A solução é criar o workflow manualmente através da interface web.

## ✅ Solução: Criar Workflow Manualmente

### Passo 1: Acessar o Repositório

1. Vá para https://github.com/othiagob/blog
2. Clique na aba **"Actions"** no topo

### Passo 2: Criar Novo Workflow

1. Clique em **"New workflow"** ou **"set up a workflow yourself"**
2. Você verá um editor de arquivo
3. Nomeie o arquivo como: `deploy.yml`

### Passo 3: Copiar o Conteúdo do Workflow

Copie e cole o seguinte conteúdo no editor:

```yaml
name: Build and Deploy to GitHub Pages

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '22'

      - name: Install pnpm
        uses: pnpm/action-setup@v2
        with:
          version: 10

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Install dependencies
        run: pnpm install --frozen-lockfile

      - name: Build with Vite
        run: pnpm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist/public

  deploy:
    if: github.event_name == 'push' && github.ref == 'refs/heads/main'
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### Passo 4: Salvar o Workflow

1. Clique em **"Commit changes..."**
2. Escolha **"Commit directly to the main branch"**
3. Clique em **"Commit changes"**

### Passo 5: Configurar GitHub Pages

1. Vá para **Settings** do repositório
2. Clique em **Pages** (no menu esquerdo)
3. Em **"Build and deployment"**:
   - **Source**: Selecione **"GitHub Actions"**
4. Salve as configurações

### Passo 6: Disparar o Build

Após salvar o workflow, o GitHub Actions automaticamente:
1. Detectará o push do workflow
2. Executará o build
3. Fará deploy no GitHub Pages

Você pode acompanhar o progresso em **Actions** → **Build and Deploy to GitHub Pages**

## 📍 Acessar o Blog Online

Após o build completar com sucesso (você verá um ✅ verde), o blog estará disponível em:

```
https://othiagob.github.io/blog/
```

## 🔄 Próximas Vezes

Depois que o workflow estiver configurado, toda vez que você:
1. Criar um novo post em `/posts/`
2. Fazer commit e push para `main`

O GitHub Actions automaticamente:
- Fará build do projeto
- Publicará as mudanças no GitHub Pages

Sem precisar fazer nada manualmente!

## 📝 Exemplo: Adicionar Novo Post

```bash
# 1. Criar novo arquivo
echo '---
title: "Meu Novo Post"
date: "2026-03-02"
category: "Fundamentos"
excerpt: "Descrição do post"
readingTime: 5
---

# Conteúdo do post...' > posts/meu-novo-post.md

# 2. Fazer commit
git add posts/meu-novo-post.md
git commit -m "docs: Adicionar novo post sobre Java"

# 3. Push
git push origin main

# 4. Pronto! O GitHub Actions fará o resto automaticamente
```

## 🆘 Troubleshooting

### O build falhou?
- Vá em **Actions** e clique no workflow que falhou
- Veja os logs para identificar o erro
- Geralmente é falta de dependência ou erro de sintaxe

### O site não aparece online?
- Aguarde 2-3 minutos após o build completar
- Limpe o cache do navegador (Ctrl+Shift+Delete)
- Verifique se GitHub Pages está habilitado em Settings

### Posso testar localmente antes?
Sim! Execute:
```bash
pnpm run build
pnpm run preview
```

## 📚 Recursos Úteis

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Vite Build Guide](https://vitejs.dev/guide/build.html)

---

**Precisa de ajuda?** Entre em contato ou abra uma issue no repositório!
