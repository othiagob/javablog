+++
title = "Markdown Lab 02: Mermaid, Math e Colapso"
date = "2026-03-05"
description = "Teste de diagramas, formulas e shortcode de conteudo recolhivel."
tags = ["markdown", "mermaid", "math"]
categories = ["Geral"]
author = "Thiago B."
mermaid = true
math = true
+++

Este segundo laboratorio valida recursos de documentacao tecnica para posts mais densos.

## Fluxo de estudo

```mermaid
flowchart LR
  A[Leitura] --> B[Resumo em Markdown]
  B --> C[Codigo de exemplo]
  C --> D[Publicacao]
```

## Formula curta

A complexidade de busca binaria eh $O(\log n)$, enquanto uma busca linear eh $O(n)$.

## Formula em destaque

$$
T(n) = 2T\left(\frac{n}{2}\right) + O(n)
$$

## Conteudo recolhivel

{{< collapse summary="Clique para ver um resumo rapido" content="Use este shortcode para esconder detalhes longos sem poluir a leitura." >}}

{{< collapse summary="Checklist de qualidade" content="Titulo claro; introducao objetiva; exemplos executaveis; conclusao curta." >}}

## JSON formatado

```json
{
  "project": "String[] args",
  "stack": ["Hugo", "Tailwind", "Markdown"],
  "status": "ok"
}
```
