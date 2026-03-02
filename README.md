# Thiago's Java Learning Blog

Um blog minimalista e sofisticado para documentar minha jornada de aprendizado em Java, construído com React, TypeScript, Tailwind CSS e implantado automaticamente no GitHub Pages.

## 🎯 Características

- **Design Minimalista**: Tipografia elegante com Playfair Display para títulos e Inter para corpo
- **Paleta Sofisticada**: Verde floresta (#2D5016) com fundo creme (#F5F3F0)
- **Renderização Markdown**: Posts em Markdown renderizados com Streamdown
- **Tema Claro/Escuro**: Suporte automático para preferência do sistema
- **Responsivo**: Design mobile-first que funciona em todos os dispositivos
- **Deploy Automático**: GitHub Actions compila e publica automaticamente no GitHub Pages

## 🚀 Como Começar

### Pré-requisitos

- Node.js 22+
- pnpm 10+

### Instalação

```bash
# Clonar o repositório
git clone https://github.com/othiagob/blog.git
cd blog

# Instalar dependências
pnpm install

# Iniciar servidor de desenvolvimento
pnpm run dev
```

O blog estará disponível em `http://localhost:3000`

## 📝 Criando Novos Posts

Posts são arquivos Markdown localizados em `/posts/`. Cada post deve ter o seguinte formato:

```markdown
---
title: "Título do Post"
date: "2026-03-01"
category: "Categoria"
excerpt: "Um resumo breve do post"
readingTime: 8
---

# Título do Post

Conteúdo do post em Markdown...
```

Após criar um novo post, faça commit e push para o repositório. O GitHub Actions automaticamente compilará o blog e publicará no GitHub Pages.

### Campos Obrigatórios

- **title**: Título do post
- **date**: Data no formato YYYY-MM-DD
- **category**: Categoria do post (ex: "Fundamentos", "Avançado")
- **excerpt**: Resumo breve (aparece na lista de posts)
- **readingTime**: Tempo estimado de leitura em minutos

## 🏗️ Estrutura do Projeto

```
blog/
├── client/
│   ├── public/              # Arquivos estáticos (favicon, robots.txt)
│   ├── src/
│   │   ├── components/      # Componentes React reutilizáveis
│   │   ├── hooks/           # Custom hooks (usePosts)
│   │   ├── pages/           # Páginas (Home, Post, Category)
│   │   ├── contexts/        # Contextos React (ThemeContext)
│   │   ├── App.tsx          # Roteamento principal
│   │   ├── main.tsx         # Ponto de entrada
│   │   └── index.css        # Estilos globais e temas
│   └── index.html           # HTML principal
├── posts/                   # Posts em Markdown
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Actions workflow
├── vite.config.ts           # Configuração Vite
└── package.json             # Dependências e scripts
```

## 🎨 Design Philosophy

Este blog segue a filosofia de **Modernismo Tipográfico Minimalista**:

- **Tipografia como Protagonista**: Hierarquia clara através de pesos e tamanhos
- **Espaço Negativo Generoso**: Respiração visual entre elementos
- **Paleta Monocromática**: Fundo creme com verde floresta como acento
- **Foco no Conteúdo**: Sem distrações, apenas o essencial

## 📦 Build e Deploy

### Build Local

```bash
pnpm run build
```

Gera os arquivos estáticos em `dist/public/`

### Deploy Automático

O repositório está configurado com GitHub Actions. Cada push para a branch `main` dispara automaticamente:

1. Instalação de dependências
2. Build do projeto
3. Deploy para GitHub Pages

O blog estará disponível em: `https://othiagob.github.io/blog/`

## 🛠️ Scripts Disponíveis

- `pnpm run dev` - Inicia servidor de desenvolvimento
- `pnpm run build` - Compila para produção
- `pnpm run preview` - Visualiza build de produção localmente
- `pnpm run check` - Verifica tipos TypeScript
- `pnpm run format` - Formata código com Prettier

## 📚 Posts Inclusos

1. **Introdução ao Java: Primeiros Passos** - Configuração do ambiente e primeiro programa
2. **Variáveis e Tipos de Dados em Java** - Tipos primitivos e conversões
3. **Estruturas de Controle: if, else e switch** - Tomando decisões em código

## 🎓 Tecnologias Utilizadas

- **React 19**: Framework UI
- **TypeScript**: Tipagem estática
- **Tailwind CSS 4**: Utility-first CSS
- **Vite**: Build tool
- **Wouter**: Roteamento leve
- **Streamdown**: Renderização Markdown
- **shadcn/ui**: Componentes UI

## 📄 Licença

MIT

## 👨‍💻 Autor

Thiago - Estudante de Ciência da Computação aprendendo autodidatamente TypeScript, Node.js e React.

---

**Última atualização**: Março de 2026
