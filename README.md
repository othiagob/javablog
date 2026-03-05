# String[] args

Blog pessoal de Thiago B. — programação, Java e Tibia.

**Acesse:** https://othiagob.github.io/javac/

> ✨ **Última atualização:** 05/03/2026 - Reorganização estrutural concluída

---

## 🚀 Quick Start

```bash
# Instalar dependências
bun install

# Desenvolvimento (com hot reload)
bun dev

# Build de produção
bun build
```

O site estará disponível em: http://localhost:1313/javac/

---

## 📁 Estrutura do Projeto

```
javac/
├── WIKI/              → Documentação detalhada de cada pasta
├── assets/            → CSS (Tailwind) — estilos do tema
├── exampleSite/       → ⭐ O site em si: configuração e conteúdo
│   ├── hugo.toml      → Configuração principal do blog ← edite aqui
│   └── content/       → Todos os textos e posts ← edite aqui
├── i18n/              → Traduções da interface (pt-br, en, es...)
├── layouts/           → Templates HTML que geram as páginas
├── static/            → Arquivos públicos (ícones, imagens, JS)
├── .github/workflows/ → Deploy automático para o GitHub Pages
├── go.mod             → Módulo Hugo (não editar)
├── package.json       → Scripts de build (Bun + PostCSS)
└── postcss.config.mjs → Configuração do processador de CSS
```

---

## 🧹 Limpeza de Arquivos Gerados

Antes de começar, **remova arquivos desnecessários** que não devem estar no repositório:

```bash
# Execute o script de limpeza
chmod +x cleanup.sh
./cleanup.sh
```

**O script remove:**
- `/public/` - Site compilado (gerado no build)
- `/resources/` - Cache do Hugo
- `exampleSite/public/` - Build local
- Arquivos de configuração duplicados/obsoletos

**✅ Após a limpeza:** Os arquivos gerados não serão mais commitados graças ao `.gitignore` atualizado.

---

## 📝 Como Criar um Post

1. Crie um arquivo `.md` em `exampleSite/content/post/`:
   ```markdown
   ---
   title: "Meu Novo Post"
   date: 2026-03-05T10:00:00-03:00
   draft: false
   tags: ["java", "programação"]
   categories: ["tutoriais"]
   ---
   
   Conteúdo do post em Markdown...
   ```

2. Teste localmente:
   ```bash
   bun dev
   ```

3. Commit e push para publicar automaticamente!

---

## 📚 Documentação Completa

- **[⚡ REFERENCIA-RAPIDA.md](./REFERENCIA-RAPIDA.md)** — Comandos e atalhos essenciais
- **[📖 GUIA-DO-REPOSITORIO.md](./GUIA-DO-REPOSITORIO.md)** — Guia completo de todo o projeto
- **[📁 WIKI/](./WIKI/index.md)** — Documentação detalhada de cada pasta

**O que você encontra:**
- Descrição detalhada de cada pasta e arquivo
- O que cada arquivo faz e quando editar
- Workflows de desenvolvimento
- FAQ e troubleshooting
- Comandos rápidos e referências

---

## 🚢 Deploy

Todo push na branch `main` **publica automaticamente** via GitHub Actions:

1. ✅ Compila o CSS com Tailwind
2. ✅ Gera o site estático com Hugo
3. ✅ Publica no GitHub Pages

**URL de produção:** https://othiagob.github.io/javac/

---

## 🎨 Personalização

### Mudar cor do tema
Edite `exampleSite/hugo.toml`:
```toml
[params]
  color = 'linen'  # opções: wheat, gray, light, dark, etc.
```

### Customizar estilos
Edite `assets/app.css` ou `assets/custom.css` e rode:
```bash
bun run build:css
```

### Adicionar página ao menu
Edite `exampleSite/hugo.toml`:
```toml
[[menu.main]]
  identifier = "projetos"
  name = "Projetos"
  url = "/projects/"
  weight = 30
```

---

## 🛠️ Tecnologias

- **Hugo** v0.145.0 - Gerador de sites estáticos
- **Tailwind CSS** v4 - Framework CSS utility-first
- **Bun** - Runtime JavaScript rápido
- **PostCSS** - Processador CSS
- **GitHub Actions** - CI/CD

---

## 📄 Licença

MIT License - veja [LICENSE](./LICENSE) para detalhes
