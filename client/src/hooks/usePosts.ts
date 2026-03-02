import { useEffect, useState } from "react";
import { Streamdown } from "streamdown";

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readingTime: number;
  content: string;
}

// Mock data - In production, this would be fetched from the GitHub API or a build process
const MOCK_POSTS: Post[] = [
  {
    slug: "introducao-java",
    title: "Introdução ao Java: Primeiros Passos",
    excerpt:
      "Começando minha jornada com Java. Neste post, exploro os conceitos fundamentais da linguagem, configuração do ambiente e meu primeiro programa.",
    date: "2026-03-01",
    category: "Fundamentos",
    readingTime: 8,
    content: `# Introdução ao Java: Primeiros Passos

Java é uma linguagem de programação versátil e poderosa que domina o mundo da programação corporativa. Neste post, vou documentar meus primeiros passos nesta jornada.

## Por que Java?

Java é escolhido por empresas em todo o mundo porque oferece:

- **Portabilidade**: "Write once, run anywhere" (WORA)
- **Robustez**: Sistema de tipos forte e gerenciamento de memória
- **Comunidade**: Ecossistema maduro com inúmeras bibliotecas
- **Performance**: JVM otimiza código em tempo de execução

## Configuração do Ambiente

Primeiro, precisei instalar o JDK (Java Development Kit):

\`\`\`bash
# No Ubuntu
sudo apt-get install openjdk-17-jdk

# Verificar instalação
java -version
javac -version
\`\`\`

## Meu Primeiro Programa

Aqui está o clássico "Hello, World!":

\`\`\`java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
\`\`\`

Compilando e executando:

\`\`\`bash
javac HelloWorld.java
java HelloWorld
\`\`\`

## Próximos Passos

Agora que tenho o ambiente configurado, vou explorar:
- Tipos de dados e variáveis
- Estruturas de controle
- Orientação a objetos

Fico animado para continuar esta jornada!`,
  },
  {
    slug: "variaveis-tipos-dados",
    title: "Variáveis e Tipos de Dados em Java",
    excerpt:
      "Explorando os tipos primitivos do Java, declaração de variáveis e as melhores práticas para nomeação e uso.",
    date: "2026-02-25",
    category: "Fundamentos",
    readingTime: 10,
    content: `# Variáveis e Tipos de Dados em Java

Entender tipos de dados é fundamental em Java. Vou documentar o que aprendi sobre variáveis e tipos primitivos.

## Tipos Primitivos

Java possui 8 tipos primitivos:

\`\`\`java
// Inteiros
byte b = 127;           // 8 bits
short s = 32767;        // 16 bits
int i = 2147483647;     // 32 bits
long l = 9223372036854775807L;  // 64 bits

// Ponto flutuante
float f = 3.14f;        // 32 bits
double d = 3.14159;     // 64 bits

// Booleano
boolean flag = true;    // true ou false

// Caractere
char c = 'A';           // 16 bits Unicode
\`\`\`

## Declaração de Variáveis

A sintaxe básica é:

\`\`\`java
tipo nome = valor;
\`\`\`

Exemplos práticos:

\`\`\`java
int idade = 25;
String nome = "Thiago";
double salario = 5000.00;
boolean ativo = true;
\`\`\`

## Convenções de Nomeação

Seguindo as convenções Java:

- Variáveis: \`camelCase\` (ex: \`minhaVariavel\`)
- Constantes: \`UPPER_SNAKE_CASE\` (ex: \`MAX_VALOR\`)
- Classes: \`PascalCase\` (ex: \`MinhaClasse\`)

## Conversão de Tipos

Conversão implícita (widening):

\`\`\`java
int numero = 10;
long numeroLongo = numero;  // Automático
\`\`\`

Conversão explícita (narrowing):

\`\`\`java
double valor = 10.5;
int numero = (int) valor;  // Necessário casting
\`\`\`

Continuaremos explorando mais conceitos!`,
  },
];

export function usePosts() {
  const [posts, setPosts] = useState<Post[]>(MOCK_POSTS);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulating data loading
    setLoading(true);
    setTimeout(() => {
      setPosts(MOCK_POSTS);
      setLoading(false);
    }, 300);
  }, []);

  const getPostBySlug = (slug: string): Post | undefined => {
    return posts.find((post) => post.slug === slug);
  };

  const getPostsByCategory = (category: string): Post[] => {
    return posts.filter((post) => post.category === category);
  };

  const getCategories = (): string[] => {
    return Array.from(new Set(posts.map((post) => post.category)));
  };

  const getSortedPosts = (): Post[] => {
    return [...posts].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  };

  return {
    posts: getSortedPosts(),
    loading,
    error,
    getPostBySlug,
    getPostsByCategory,
    getCategories,
  };
}
