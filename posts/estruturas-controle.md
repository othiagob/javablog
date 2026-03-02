---
title: "Estruturas de Controle: if, else e switch"
date: "2026-02-20"
category: "Fundamentos"
excerpt: "Aprendendo a tomar decisões em código usando if/else, operadores ternários e switch statements."
readingTime: 12
---

# Estruturas de Controle: if, else e switch

Estruturas de controle são fundamentais para criar programas que tomam decisões. Neste post, vou explorar como usar `if`, `else` e `switch` para controlar o fluxo de execução do código.

## Declaração if

A estrutura `if` permite executar um bloco de código apenas se uma condição for verdadeira:

```java
int idade = 18;

if (idade >= 18) {
    System.out.println("Você é maior de idade");
}
```

## Declaração if-else

Quando você quer executar um bloco se a condição for verdadeira e outro se for falsa, use `if-else`:

```java
int idade = 15;

if (idade >= 18) {
    System.out.println("Você é maior de idade");
} else {
    System.out.println("Você é menor de idade");
}
```

## Declaração if-else if-else

Para múltiplas condições, você pode encadear várias estruturas `if-else`:

```java
int nota = 85;

if (nota >= 90) {
    System.out.println("Conceito: A");
} else if (nota >= 80) {
    System.out.println("Conceito: B");
} else if (nota >= 70) {
    System.out.println("Conceito: C");
} else if (nota >= 60) {
    System.out.println("Conceito: D");
} else {
    System.out.println("Conceito: F");
}
```

## Operadores de Comparação

Para criar condições, usamos operadores de comparação:

| Operador | Descrição | Exemplo |
|----------|-----------|---------|
| `==` | Igual a | `idade == 18` |
| `!=` | Diferente de | `idade != 18` |
| `>` | Maior que | `idade > 18` |
| `<` | Menor que | `idade < 18` |
| `>=` | Maior ou igual | `idade >= 18` |
| `<=` | Menor ou igual | `idade <= 18` |

## Operadores Lógicos

Para combinar múltiplas condições, usamos operadores lógicos:

```java
int idade = 25;
boolean temCarteira = true;

// AND (&&) - ambas as condições devem ser verdadeiras
if (idade >= 18 && temCarteira) {
    System.out.println("Pode dirigir");
}

// OR (||) - pelo menos uma condição deve ser verdadeira
if (idade < 18 || !temCarteira) {
    System.out.println("Não pode dirigir");
}

// NOT (!) - inverte o resultado
if (!(idade < 18)) {
    System.out.println("É maior de idade");
}
```

## Operador Ternário

Para condições simples, o operador ternário oferece uma sintaxe mais concisa:

```java
int idade = 20;
String status = (idade >= 18) ? "Maior de idade" : "Menor de idade";
System.out.println(status);  // Saída: Maior de idade
```

A sintaxe é: `condição ? valor_se_verdadeiro : valor_se_falso`

## Declaração switch

Quando você tem muitas condições baseadas em um único valor, `switch` é mais legível que múltiplos `if-else`:

```java
int dia = 3;
String nomeDia;

switch (dia) {
    case 1:
        nomeDia = "Segunda-feira";
        break;
    case 2:
        nomeDia = "Terça-feira";
        break;
    case 3:
        nomeDia = "Quarta-feira";
        break;
    case 4:
        nomeDia = "Quinta-feira";
        break;
    case 5:
        nomeDia = "Sexta-feira";
        break;
    case 6:
        nomeDia = "Sábado";
        break;
    case 7:
        nomeDia = "Domingo";
        break;
    default:
        nomeDia = "Dia inválido";
}

System.out.println(nomeDia);  // Saída: Quarta-feira
```

## Switch com String

A partir do Java 7, você pode usar `switch` com Strings:

```java
String cor = "vermelho";

switch (cor) {
    case "vermelho":
        System.out.println("Cor quente");
        break;
    case "azul":
        System.out.println("Cor fria");
        break;
    case "verde":
        System.out.println("Cor natural");
        break;
    default:
        System.out.println("Cor desconhecida");
}
```

## Switch Expression (Java 14+)

Java 14 introduziu uma sintaxe mais moderna para switch:

```java
int dia = 3;
String nomeDia = switch (dia) {
    case 1 -> "Segunda-feira";
    case 2 -> "Terça-feira";
    case 3 -> "Quarta-feira";
    case 4 -> "Quinta-feira";
    case 5 -> "Sexta-feira";
    case 6 -> "Sábado";
    case 7 -> "Domingo";
    default -> "Dia inválido";
};

System.out.println(nomeDia);  // Saída: Quarta-feira
```

## Exemplo Prático: Validador de Senha

Aqui está um exemplo que combina vários conceitos:

```java
public class ValidadorSenha {
    public static void main(String[] args) {
        String senha = "Abc123!@";
        
        boolean temMaiuscula = !senha.equals(senha.toLowerCase());
        boolean temMinuscula = !senha.equals(senha.toUpperCase());
        boolean temNumero = senha.matches(".*\\d.*");
        boolean temEspecial = senha.matches(".*[!@#$%^&*].*");
        boolean temTamanho = senha.length() >= 8;
        
        if (temMaiuscula && temMinuscula && temNumero && temEspecial && temTamanho) {
            System.out.println("Senha forte!");
        } else if (temMaiuscula && temMinuscula && temNumero && temTamanho) {
            System.out.println("Senha média");
        } else {
            System.out.println("Senha fraca");
        }
    }
}
```

## Boas Práticas

Ao usar estruturas de controle, sigo estas práticas:

1. **Mantenha condições simples**: Se uma condição ficar muito complexa, considere extrair para um método
2. **Use nomes descritivos**: Para variáveis booleanas, use nomes que indicam claramente o resultado
3. **Evite aninhamento profundo**: Se você tem muitos níveis de `if` aninhados, refatore seu código
4. **Prefira switch para múltiplos valores**: É mais legível que vários `if-else`
5. **Use operadores lógicos apropriados**: Escolha `&&` ou `||` baseado na lógica necessária

## Conclusão

Estruturas de controle são a base de qualquer programa. Dominá-las permite escrever código que reage de forma apropriada a diferentes situações. No próximo post, vou explorar loops e como repetir blocos de código.
