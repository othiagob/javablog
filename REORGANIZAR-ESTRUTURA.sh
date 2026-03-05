#!/bin/bash
# Script para reorganizar o repositório - renomear exampleSite para site

set -e

echo "🔄 Reorganizando estrutura do repositório..."
echo ""

# Renomear exampleSite para site
if [ -d "exampleSite" ]; then
  echo "📁 Renomeando exampleSite/ → site/"
  mv exampleSite site
  echo "✅ Pasta renomeada com sucesso!"
else
  echo "ℹ️ Pasta site/ já existe (ou exampleSite/ não foi encontrada)"
fi

# Remover arquivo de documentação antigo
if [ -f "WIKI/exampleSite.md" ]; then
  echo "🗑️ Removendo WIKI/exampleSite.md (substituído por WIKI/site.md)"
  rm -f WIKI/exampleSite.md
  echo "✅ Arquivo removido"
fi

echo ""
echo "✅ Reorganização concluída!"
echo ""
echo "Próximos passos:"
echo "  1. Revise as mudanças: git status"
echo "  2. Teste o build local: bun dev"
echo "  3. Commit: git add . && git commit -m 'refactor: renomear exampleSite para site'"
echo "  4. Push: git push origin main"
