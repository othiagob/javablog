#!/bin/bash
# Script de limpeza completa do repositório
# Executa a remoção de todos os arquivos desnecessários

set -e

echo "🧹 Limpeza do repositório..."
echo ""

# PASTAS GERADAS
rm -rf public 2>/dev/null || true
rm -rf resources 2>/dev/null || true
rm -rf site/public 2>/dev/null || true

# ARQUIVOS TEMPORÁRIOS
rm -f .hugo_build.lock 2>/dev/null || true
rm -f site/.hugo_build.lock 2>/dev/null || true

# ARQUIVOS REDUNDANTES
rm -f site/configTaxo.toml 2>/dev/null || true
rm -f site/go.toml 2>/dev/null || true
rm -f site/LICENSE 2>/dev/null || true
rm -f site/go.mod 2>/dev/null || true

# IMAGENS DESNECESSÁRIAS (não utilizadas no projeto)
rm -f images/java.png 2>/dev/null || true
rm -f images/pagespeed.png 2>/dev/null || true
rm -f images/screenshot.png 2>/dev/null || true
rm -f images/screenshot_dark.png 2>/dev/null || true
rm -f images/tn.png 2>/dev/null || true

# DOCUMENTAÇÃO DESNECESSÁRIA (criada no processo de análise)
rm -f GUIA-DO-REPOSITORIO.md 2>/dev/null || true
rm -f ARQUIVOS-PARA-REMOVER.md 2>/dev/null || true
rm -f RESUMO-DA-LIMPEZA.md 2>/dev/null || true
rm -f REFERENCIA-RAPIDA.md 2>/dev/null || true
rm -f EXECUTAR-AGORA.md 2>/dev/null || true
rm -f cleanup.sh 2>/dev/null || true
rm -f WIKI/exampleSite.md 2>/dev/null || true

echo "✅ Limpeza concluída!"
echo ""
echo "Próximos passos:"
echo ""
echo "git rm -r --cached public/ resources/ site/public/ 2>/dev/null || true"
echo "git rm --cached site/{configTaxo.toml,go.toml,LICENSE,go.mod} 2>/dev/null || true"
echo "git add ."
echo "git commit -m \"chore: limpeza do repositório - removidos arquivos desnecessários\""
echo "git push origin main"
