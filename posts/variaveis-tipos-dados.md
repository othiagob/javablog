---
title: "Variáveis e Tipos de Dados em Java"
date: "2026-02-25"
category: "Fundamentos"
excerpt: "Explorando os tipos primitivos do Java, declaração de variáveis e as melhores práticas para nomeação e uso."
readingTime: 10
---

# Variáveis e Tipos de Dados em Java

Entender tipos de dados é fundamental para programar em Java. Neste post, vou documentar tudo o que aprendi sobre variáveis, tipos primitivos e conversões de tipos.

## Os 8 Tipos Primitivos do Java

Java possui exatamente oito tipos primitivos que são a base de qualquer programa. Cada um tem um tamanho específico em memória e um propósito particular.

### Tipos Inteiros

Os tipos inteiros armazenam números sem casas decimais. A escolha entre eles depende do intervalo de valores que você precisa representar:

```java
byte b = 127;                    // 8 bits, intervalo: -128 a 127
short s = 32767;                 // 16 bits, intervalo: -32.768 a 32.767
int i = 2147483647;              // 32 bits, intervalo: -2.147.483.648 a 2.147.483.647
long l = 9223372036854775807L;   // 64 bits, intervalo: muito grande
```

Note que para valores `long`, é necessário adicionar o sufixo `L` ao final do número.

### Tipos de Ponto Flutuante

Estes tipos representam números com casas decimais:

```java
float f = 3.14f;      // 32 bits, precisão simples (sufixo 'f' obrigatório)
double d = 3.14159;   // 64 bits, precisão dupla (padrão para decimais)
```

### Tipo Booleano

Armazena apenas dois valores possíveis:

```java
boolean ativo = true;
boolean inativo = false;
```

### Tipo Caractere

Representa um único caractere Unicode:

```java
char letra = 'A';
char numero = '5';
char simbolo = '@';
```

## Declaração de Variáveis

A sintaxe básica para declarar uma variável em Java é:

```java
tipo nome = valor;
```

Exemplos práticos:

```java
int idade = 25;
String nome = "Thiago";
double salario = 5000.00;
boolean ativo = true;
char inicial = 'T';
```

## Convenções de Nomeação

Seguir convenções de nomeação é importante para manter o código legível e profissional. Java segue estas convenções:

- **Variáveis e métodos**: `camelCase` - primeira palavra em minúscula, próximas com primeira letra maiúscula
  - Exemplos: `minhaVariavel`, `calcularSalario()`, `verificarAtivo()`

- **Constantes**: `UPPER_SNAKE_CASE` - todas em maiúscula com underscores
  - Exemplos: `MAX_VALOR`, `TAXA_JUROS`, `TAMANHO_MAXIMO`

- **Classes**: `PascalCase` - primeira letra de cada palavra em maiúscula
  - Exemplos: `MinhaClasse`, `CalculadoraSalario`, `VerificadorAtivo`

## Conversão de Tipos

### Conversão Implícita (Widening)

Quando convertemos um tipo menor para um tipo maior, Java faz isso automaticamente sem perda de dados:

```java
int numero = 10;
long numeroLongo = numero;        // Automático
double numeroDouble = numeroLongo; // Automático
```

A ordem de "tamanho" é: byte → short → int → long → float → double

### Conversão Explícita (Narrowing)

Quando convertemos um tipo maior para um tipo menor, precisamos fazer um casting explícito, pois pode haver perda de dados:

```java
double valor = 10.5;
int numero = (int) valor;  // Necessário casting, resultado: 10 (perde a parte decimal)

long numeroLongo = 100L;
int numero2 = (int) numeroLongo;  // Casting necessário
```

## Escopo de Variáveis

O escopo determina onde uma variável pode ser acessada:

```java
public class ExemploEscopo {
    int variavel_classe = 10;  // Acessível em toda a classe
    
    public void metodo() {
        int variavel_metodo = 20;  // Acessível apenas neste método
        
        if (true) {
            int variavel_bloco = 30;  // Acessível apenas neste bloco
        }
        // variavel_bloco não é acessível aqui
    }
}
```

## Boas Práticas

Ao trabalhar com variáveis, sigo estas boas práticas:

1. **Nomes descritivos**: Use nomes que claramente indicam o propósito da variável
2. **Inicialize variáveis**: Sempre atribua um valor inicial quando possível
3. **Use o tipo apropriado**: Escolha o tipo que melhor representa seus dados
4. **Evite variáveis globais**: Mantenha o escopo das variáveis o mais restrito possível
5. **Use constantes**: Para valores que não mudam, use `final` e nomeie como constante

## Exemplo Prático

Aqui está um exemplo que combina vários conceitos:

```java
public class CalculadoraSalario {
    private static final double TAXA_IMPOSTO = 0.15;  // Constante
    
    public static void main(String[] args) {
        String nome = "João";
        int horas = 40;
        double valorHora = 50.00;
        
        double salarioBruto = horas * valorHora;
        double imposto = salarioBruto * TAXA_IMPOSTO;
        double salarioLiquido = salarioBruto - imposto;
        
        System.out.println("Nome: " + nome);
        System.out.println("Salário Bruto: R$ " + salarioBruto);
        System.out.println("Imposto: R$ " + imposto);
        System.out.println("Salário Líquido: R$ " + salarioLiquido);
    }
}
```

## Conclusão

Dominar tipos de dados e variáveis é essencial para programar em Java. Estes conceitos fundamentais aparecem em praticamente todo código que você escreverá. No próximo post, vou explorar estruturas de controle e como usar variáveis para tomar decisões em seus programas.
