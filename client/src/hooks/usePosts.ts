import { useEffect, useState } from "react";

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readingTime: number;
  content: string;
}

const MOCK_POSTS: Post[] = [
  {
    slug: "tibia-por-que-ainda-jogo",
    title: "Tibia em 2026: por que ainda jogo esse MMO de 1997",
    excerpt:
      "Um jogo lançado há quase 30 anos, com gráficos pixelados e morte punitiva. Por que diabos eu ainda passo horas nele? Uma reflexão honesta sobre o que torna Tibia especial.",
    date: "2026-03-02",
    category: "Tibia",
    readingTime: 6,
    content: `# Tibia em 2026: por que ainda jogo esse MMO de 1997

Se você nunca jogou Tibia, a primeira impressão é estranha: gráficos isométricos pixel art, movimentação lenta, morte que faz você perder experiência e itens, e zero tutoriais úteis. Não parece nada atraente.

E ainda assim, quando abro o cliente às 22h, sinto aquela faísca familiar.

## O que é Tibia?

Tibia é um MMORPG criado pela CipSoft em 1997, um dos mais antigos ainda em operação. Você escolhe uma vocação (Knight, Paladin, Sorcerer ou Druid), cria um personagem, e é jogado num mundo aberto enorme chamado **Tibia**.

Não tem missão de tutorial. Não tem mapa marcando onde ir. Você simplesmente... existe. E precisa descobrir como sobreviver.

## A punição que te faz amar

A mecânica mais odiada de Tibia é também o coração do jogo: **death penalty**. Quando você morre, perde porcentagem de experiência e — se não tiver bênção — perde itens aleatórios do seu inventário.

Isso cria uma tensão constante. Cada dungeon tem peso real. Cada decisão importa.

No mundo do gaming moderno, onde você pode morrer mil vezes sem consequência, Tibia é refrescantemente brutal.

## A comunidade é outra era

Jogar Tibia é como voltar aos anos 2000 da internet. As pessoas conversam. Formam partys. Criam amizades reais que duram anos.

Não tem chat de voz obrigatório, não tem sistema de matchmaking. Você simplesmente encontra alguém caçando na mesma região e pergunta: *"Party?"*

## Por que ainda jogo

Porque Tibia me dá algo raro em jogos modernos: **consequência real + recompensa proporcional**.

Quando você finalmente chega ao level que sonhava, usando a build que estudou por semanas, com o guild que construiu com outras pessoas — isso significa algo.

Nenhum achievement digital substituiu essa sensação.

Se você nunca jogou, o server é gratuito em **tibia.com**. Cria um personagem, vai pra Rookgaard, e vê se a magia te pega também.`,
  },
  {
    slug: "introducao-java",
    title: "Introdução ao Java: primeiros passos",
    excerpt:
      "Começando minha jornada com Java. Conceitos fundamentais, configuração do ambiente de desenvolvimento e meu primeiro programa rodando.",
    date: "2026-03-01",
    category: "Programação",
    readingTime: 8,
    content: `# Introdução ao Java: primeiros passos

Java é uma das linguagens mais presentes no mercado de trabalho. Comecei a estudá-la com o objetivo de entender o backend enterprise e expandir meu repertório além do ecossistema JavaScript.

## Por que Java?

- **Portabilidade**: "Write once, run anywhere" — o bytecode roda em qualquer JVM
- **Tipagem forte**: me força a pensar no tipo de cada dado desde o início
- **Mercado**: inúmeras vagas, especialmente em empresas consolidadas
- **Ecossistema maduro**: Spring, Hibernate, Maven — ferramentas battle-tested

## Configurando o ambiente

Instalei o **JDK 21** (versão LTS mais recente):

\`\`\`bash
# Manjaro / Arch Linux
sudo pacman -S jdk21-openjdk

# Verificar instalação
java -version
javac -version
\`\`\`

Também instalei o **IntelliJ IDEA Community** para ter autocompletar e debugger decentes.

## Meu primeiro programa

\`\`\`java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
\`\`\`

Para compilar e executar via terminal:

\`\`\`bash
javac HelloWorld.java
java HelloWorld
# Output: Hello, World!
\`\`\`

## O que me surpreendeu

A verbosidade inicial é real — \`System.out.println\` é gigante comparado a \`console.log\`. Mas entendo o raciocínio: Java é explícito por design.

A JVM também é fascinante. O código não compila direto para binário nativo — gera bytecode que roda numa máquina virtual otimizada. É por isso que Java funciona em qualquer sistema operacional.

## Próximos passos

Estou seguindo o plano:
1. Variáveis e tipos de dados
2. Estruturas de controle
3. Orientação a objetos
4. Collections e generics

Nos próximos posts vou documentar cada etapa.`,
  },
  {
    slug: "variaveis-tipos-dados",
    title: "Variáveis e tipos de dados em Java",
    excerpt:
      "Os 8 tipos primitivos do Java, como declarar variáveis corretamente, convenções de nomeação e casting entre tipos.",
    date: "2026-02-25",
    category: "Programação",
    readingTime: 10,
    content: `# Variáveis e tipos de dados em Java

Antes de qualquer lógica, preciso entender onde os dados vivem. Java tem um sistema de tipos estático e forte — cada variável tem um tipo definido em tempo de compilação.

## Os 8 tipos primitivos

\`\`\`java
// Inteiros
byte  b = 127;                    // 8 bits  (-128 a 127)
short s = 32_767;                 // 16 bits
int   i = 2_147_483_647;          // 32 bits (o mais usado)
long  l = 9_223_372_036_854_775_807L;  // 64 bits

// Ponto flutuante
float  f = 3.14f;   // 32 bits (precisão simples)
double d = 3.14159; // 64 bits (preferido para decimais)

// Outros
boolean flag = true;  // true ou false
char    c    = 'A';   // 16 bits, caractere Unicode
\`\`\`

O underscore em números (\`2_147_483_647\`) é só para legibilidade — o compilador ignora.

## Declarando variáveis

\`\`\`java
// Tipo explícito
int idade = 25;
String nome = "Thiago";

// var — inferência de tipo (Java 10+)
var pontos = 1500;        // int
var personagem = "Thiago B."; // String
\`\`\`

\`String\` não é primitivo — é uma classe. Mas é tão usada que parece primitiva.

## Convenções de nomeação

| Elemento | Convenção | Exemplo |
|----------|-----------|---------|
| Variáveis | camelCase | \`minhaVariavel\` |
| Constantes | UPPER_SNAKE_CASE | \`MAX_LEVEL\` |
| Classes | PascalCase | \`MinhaClasse\` |
| Métodos | camelCase | \`calcularDano()\` |

## Casting entre tipos

**Widening** (automático — sem perda de dados):

\`\`\`java
int  numero = 42;
long grande = numero; // OK, automático
\`\`\`

**Narrowing** (explícito — pode perder dados):

\`\`\`java
double preco = 19.99;
int    semCentavos = (int) preco; // = 19, trunca o decimal
\`\`\`

## O que aprendi

A distinção entre primitivos e objetos é fundamental em Java. Primitivos vivem na stack, objetos no heap — isso vai importar muito quando chegarmos em performance e garbage collection.`,
  },
];

export function usePosts() {
  const [posts, setPosts] = useState<Post[]>(MOCK_POSTS);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setPosts(MOCK_POSTS);
      setLoading(false);
    }, 100);
  }, []);

  const getPostBySlug = (slug: string | undefined): Post | undefined =>
    posts.find((post) => post.slug === slug);

  const getPostsByCategory = (category: string): Post[] =>
    posts.filter((post) => post.category === category);

  const getCategories = (): string[] =>
    Array.from(new Set(posts.map((post) => post.category)));

  const getSortedPosts = (): Post[] =>
    [...posts].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

  return {
    posts: getSortedPosts(),
    loading,
    error,
    getPostBySlug,
    getPostsByCategory,
    getCategories,
  };
}
