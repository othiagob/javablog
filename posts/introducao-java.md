---
title: "Introdução ao Java: Primeiros Passos"
date: "2026-03-01"
category: "Fundamentos"
excerpt: "Começando minha jornada com Java. Neste post, exploro os conceitos fundamentais da linguagem, configuração do ambiente e meu primeiro programa."
readingTime: 8
---

# Introdução ao Java: Primeiros Passos

Java é uma linguagem de programação versátil e poderosa que domina o mundo da programação corporativa. Neste post, vou documentar meus primeiros passos nesta jornada fascinante.

## Por que Java?

Java é escolhido por empresas em todo o mundo porque oferece características únicas que a diferenciam de outras linguagens. A portabilidade é um dos seus maiores trunfos, com o conceito de "Write once, run anywhere" (WORA), que permite que o mesmo código execute em qualquer plataforma que tenha a Java Virtual Machine (JVM) instalada.

Além disso, Java oferece robustez através de um sistema de tipos forte e gerenciamento automático de memória, reduzindo significativamente erros em tempo de execução. A comunidade é extremamente ativa e madura, com um ecossistema vasto de bibliotecas e frameworks. A performance também é notável, pois a JVM otimiza o código em tempo de execução através de compilação just-in-time (JIT).

## Configuração do Ambiente

Para começar, precisei instalar o JDK (Java Development Kit), que inclui o compilador e a máquina virtual necessários para desenvolver e executar aplicações Java.

```bash
# No Ubuntu/Debian
sudo apt-get update
sudo apt-get install openjdk-17-jdk

# Verificar instalação
java -version
javac -version
```

Após a instalação, é importante configurar a variável de ambiente `JAVA_HOME` para que outras ferramentas possam localizar o JDK:

```bash
# Adicionar ao ~/.bashrc ou ~/.zshrc
export JAVA_HOME=/usr/lib/jvm/java-17-openjdk-amd64
export PATH=$JAVA_HOME/bin:$PATH
```

## Meu Primeiro Programa

Todo desenvolvedor começa com o clássico "Hello, World!". Este simples programa nos ajuda a verificar se o ambiente está configurado corretamente.

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```

Para compilar e executar este programa:

```bash
# Compilar - gera HelloWorld.class
javac HelloWorld.java

# Executar
java HelloWorld

# Saída esperada:
# Hello, World!
```

## Entendendo a Estrutura

Vamos analisar o programa linha por linha:

- `public class HelloWorld`: Define uma classe pública chamada HelloWorld. Em Java, todo código deve estar dentro de uma classe.
- `public static void main(String[] args)`: Este é o ponto de entrada da aplicação. A JVM procura por este método quando você executa o programa.
- `System.out.println()`: Imprime uma linha de texto no console.

## Próximos Passos

Agora que tenho o ambiente configurado e entendo a estrutura básica, vou explorar:

- **Tipos de dados e variáveis**: Entender como Java armazena e manipula dados
- **Estruturas de controle**: if/else, loops (for, while), switch
- **Orientação a objetos**: Classes, objetos, herança, polimorfismo
- **Tratamento de exceções**: Como lidar com erros de forma elegante

Fico animado para continuar esta jornada e aprofundar meu conhecimento em Java!
