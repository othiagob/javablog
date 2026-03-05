+++
title = "Markdown Lab 01: Blocos, Listas e Tabelas"
date = "2026-03-05"
description = "Post de teste com recursos avancados de Markdown para validar o visual do blog."
tags = ["markdown", "guia", "conteudo"]
categories = ["Geral"]
author = "Thiago B."
+++

Este post eh um sandbox para testar componentes visuais que vamos usar nos proximos textos do **String[] args**.

## Titulos e hierarquia

### Subtitulo nivel 3

Texto com **negrito**, *italico*, ~~riscado~~, `inline code`, <mark>marca-texto</mark>, H<sub>2</sub>O e x<sup>2</sup>.

> Bloco de citacao para destacar uma ideia importante.
>
> "Escrever bem em Markdown reduz retrabalho na revisao."

## Listas

- Lista nao ordenada
- Item com link para [Hugo](https://gohugo.io/)
- Item com teclado: <kbd>Ctrl</kbd> + <kbd>K</kbd>

1. Lista ordenada
2. Segundo item
3. Terceiro item

- [x] Checklist concluido
- [ ] Checklist pendente

## Tabela de comparacao

| Recurso | Markdown puro | Com Hugo |
|---|---|---|
| Tabela | Sim | Sim |
| Shortcode | Nao | Sim |
| Mermaid | Nao | Sim |

## Bloco de codigo

```java
public class Main {
  public static void main(String[] args) {
    System.out.println("Hello, String[] args");
  }
}
```

```bash
hugo server --config exampleSite/hugo.toml --contentDir exampleSite/content
```

## Nota de rodape

Essa frase tem uma referencia de rodape.[^rodape]

[^rodape]: Rodape funcionando com Goldmark.
