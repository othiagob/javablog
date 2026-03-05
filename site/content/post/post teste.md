+++
title = "Publicação de Teste"
date = "2026-03-05"
description = "Copiei o conteudo do markdown do meu pc e colei aqui usando o mesmo cabeçalho de outro post."
tags = ["teste", "inicio"]
categories = ["Guias"]
author = "Thiago Borghardt"
+++

_A postagem dos serviços próprios ocorre sempre no inicio de cada mês de acordo com as datas de vencimento pré-estipuladas pela CAMARA_

> [!WARNING] _REQUISITOS PARA INICIAR A GERAÇÃO DAS MENSALIDADES_
> - [x] Verificar com o Sidney se já concluiu a analise de serviços próprios.
> - [x] Verificar com o Daniel se terminou de analisar o estoque e se foram fechados todos os lotes certinho.
> - [x] Existe um calendário com data máxima para realizar a postagem na **NOVA CMB**, o diretório onde se encontra o calendário atualizado está no fim do arquivo. [^1]
> - [x] Verificar com Wesley as contas do **HOSPITAL DAY CENTER CLINICA** ( Serviços Próprios )

> <center> CALENDÁRIO DE POSTAGEM 2026 </center>

| MÊS / COMPETÊNCIA CONTÁBIL DO PTU | PRAZO PARA POSTAGEM |
| --------------------------------- | ------------------- |
| ~~FEVEREIRO~~ - **01/2026**           | 05/02/2026        |
| MARÇO - **02/2026**               | 05/03/2026          |
| ABRIL - **03/2026**               | 08/04/2026          |
| MAIO - **04/2026**                | 07/05/2026          |
| JUNHO - **05/2026**               | 09/06/2026          |
| JULHO - **06/2026**               | 09/07/2026          |
| AGOSTO - **07/2026**              | 07/08/2026          |
| SETEMBRO - **08/2026**            | 08/09/2026          |
| OUTUBRO - **09/2026**             | 08/10/2026          |
| NOVEMBRO - **10/2026**            | 06/11/2026          |
| DEZEMBRO - **11/2026**            | 04/12/2026          |


#   MODÚLO ESTRUTURAL - GERANDO MENSALIDADES  

Na tela inicial do módulo estrutural vamos apertar as teclas **CTRL + G** para abrirmos o processamento de mensalidades.
Nesta tela de processamento iremos alterar o campo de vencimento deixando-os com a opção: **==15 DIAS APÓS A DATA DE EMISSÃO==**

![[vencimento_emissao.png]]

No campo congênere vamos deixar o padrão do intercâmbio eventual: **==INTERCÂMBIO NACIONAL, ESTADUAL E UNIMED RONDONIA==**. 
Depois vamos aplicando a tecla TAB até o fim dos campos para atualizar e mostrar a quantidade de itens a ser processados.

![[Pasted image 20260205085311.png]]

> Observação!
> Gerado todas as mensalidades, antes de iniciarmos a postagem vamos abrir o documento de cobrança no módulo estrutural pesquisando pela Unimed. 
> Vamos conferir algumas informações que são extremamente importantes.
> 1. Natureza de cobrança. - _==COBRANÇA COMPLETA==_
> 2. A data da emissão do documento. - _==Ajuste manual pós postagem no GIU.==_ [^2]
> 3. Data do vencimento do documento. - _==15 Dias após a data de emissão==_
> E por fim, vamos verificar dentro de cada documento de cobrança se não existe alguma conta de competência diferente da que estamos gerando.
> Caso haja alguma, vamos remove-la e anotar, para deixarmos para próxima competência.
> Outro ponto a ser observado é se a conta for **RECURSO DE GLOSA** ou **REFATURAMENTO**. Também não é postada agora.

#   MÓDULO PTU - CONFERÊNCIA DE CONTAS  

O módulo PTU será a parte do sistema aonde vamos gerar o **XML** com os arquivos complementares caso exista para postarmos no PORTAL GIU.
De primeiro momento, uma das coisas que vamos analisar é os documentos de cobranças com nomes de unimeds repetidos. Isto sinaliza que podem existir documentos de cobranças de: **REFATURAMENTO** ou **RECURSOS PRÓPRIOS**.

![[Pasted image 20260205092548.png]]

Nesta imagem acima, temos o exemplo das unimeds: **PORTO VELHO, CENTRAL NACIONAL E FEDERACAO DO PARANA**.
Vamos abrir todos os documentos e verificar se na descrição do lote existe os refaturamento ou recursos de glosas.

![[Pasted image 20260205092729.png]]

Encontrado alguma, basta remove-la e seguir para os próximos.

#   ENVIANDO O DOCUMENTO DE COBRANÇA - PTU A500  
Feito toda a conferência e a remoção das contas de recurso e refaturamento, analisado se todas os documentos estão com contas dentro da respectiva competência para postagem vamos realizar o processo de gerar o arquivo **XML** para compactar os arquivos e postar no portal.

Os arquivos gerados são salvos na pasta: **POSTAGEM PTU**, que fica salva no desktop. Gerado, vamos conferir os PDF em anexo e deixar somente o que do boleto e o arquivo **XML** e clicar com botão direito para **ENVIAR PARA PASTA COMPACTADA**. E transformar os dois arquivos em .zip.

Durante a postagem no **PORTAL GIU**, haverá sinalizações de erro. Foi criado toda uma documentação com relatos e guias de como resolve-los.
[[CONSULTA RETORNO]]

#   RELATÓRIO DE POSTAGEM  
Após realizado a postagem de todos os documentos de cobrança, vamos tirar alguns relatórios e aplicar filtros que nos informe se existe alguma conta que ficou sem postar.

#### ESTRUTURAL 
> ==**CTRL + ALT + M**==
Estes comandos já vão abrir a aba para gerarmos o relatório de mensalidades emitidas.
Depois de aberto, temos 3 colunas com os seguintes nome: **FILTROS CONTRATO, FILTROS MENSALIDADE e FILTROS ADICIONAIS.**

1. **Filtros contrato**
	1. Vamos apenas preencher o campo de congênere, deixando o padrão do intercambio eventual.
2. **Filtros mensalidade**
	1. Período da analise: **Baseado na competência**
	2. Competência exemplo: **02/2026   02/2026**
3. **Filtros Adicionais**
	1. Vamos marcar apenas a opção: **NO EXCEL, EXPORTAR DADOS DA NOTA FISCAL**. Que fica na segunda coluna no campo inferior de opções.

#### RELATÓRIO GIU
O relatório do portal GIU é bem simples e intuitivo para retirar.
Vamos apenas selecionar e preencher os seguintes campos: 

![[Pasted image 20260205103021.png]]

#### FÓRMULAS & FILTROS NO EXCEL
Após baixado as duas planilhas, vamos formatar elas para preparar os filtros. A primeira formatação está no relatório gerado pelo GIU.

![[Pasted image 20260206161511.png]]

Este será o formato em que a planilha virá do GIU. Vamos ajustar os 3 campos marcados.
1. Na coluna: N. DOC 1 os números não veem formatos corretamente, o que vamos fazer é, pega-los copiando e colando em um arquivo de texto normal e colando-os novamente na coluna para transforma-los assim então em números inteiros. 
2. O campo 2 na seta é uma linha vazia que separa a planilha da linha 3. Vamos remover ela.
3. E a terceira também será removida por que ela cria um agrupamento causando assim problemas na hora de realizar a fórmula de filtragem dos documentos postados.

Ela ficará desta forma após feita toda formatação:

![[Pasted image 20260206162740.png]]

A diferença agora é que existem 3 novas colunas. 
> POSTADOS - 01/2026 ( COMPETÊNCIA DE POSTAGEM ) - 12/2025 ( COMPENTÊNCIA DA POSTAGEM ANTERIOR )

E criamos isso para uma conferencia extra, para termos certeza de que tudo foi postado corretamente.

> [!note] COLUNA B
> Esta coluna é usada apenas para referência na planilha que extraímos do estrutural. Criamos ela e preenchemos com este nome por que quando fizermos a fórmula ÍNDICE/CORRESP ele vai puxar essa referencia de POSTADO na linha do documento, e caso não haja essa palavra é por que não foi encontrado na planilha de documentos postado no GIU.

> [!NOTE] COLUNA C
> Esta coluna é uma conferência extra aonde verificamos se todos os documentos que estão nesse relatório do GIU também está no relatório do ESTRUTURAL. Os documentos que não estiverem vamos abrir no estrutural ou na NOVA CMB para verificar o que houve.


> [!NOTE] COLUNA D
> É a mesma coisa da coluna C com o diferencial que iremos usar como base para conferencia o excel da postagem da competência 12/2025. *==Dica: Utilize o excel gerado e enviado no e-mail para o pessoal do contábil.==*

> Obs: Boa parte das situações serão de documentos da competência em que estamos, ou seja, nesta ocasião ai em que postamos 01/2026 os documentos não encontrados em grande maioria serão os da competência 02/2026.  E por que foram postados ? 
> Por que estava com o prazo de vencimento próximo dos 90 dias, se a conta estiver audita, podemos analisar e postar para não perder a taxa administrativa.

---

# Documentação da Fórmula ÍNDICE + CORRESP (LibreOffice Calc)

## Objetivo

Esta fórmula é utilizada no **RELATÓRIO ESTRUTURAL** para buscar automaticamente informações existentes no arquivo externo **RELATÓRIO NOVA CMB.xlsx**, permitindo comparar dados entre os dois relatórios sem duplicação manual.

O propósito principal é:

- Localizar um registro específico (identificador)
- Encontrar a linha correspondente na base de comparação
- Retornar a informação associada a esse registro


## Fórmula utilizada

```
=ÍNDICE(
 'file:///C:/Users/tborghardt/Desktop/RELATÓRIOS POSTAGEM/RELATÓRIO NOVA CMB.xlsx'#$Faturas.B$1:B$1048576;
 CORRESP(
   F4;
   'file:///C:/Users/tborghardt/Desktop/RELATÓRIOS POSTAGEM/RELATÓRIO NOVA CMB.xlsx'#$Faturas.A$1:A$1048576;
   0
 )
)
```

---

## Visão geral do funcionamento

A fórmula realiza o seguinte processo:

1. Lê o valor existente na célula **F4** da planilha atual (RELATÓRIO ESTRUTURAL)
2. Procura esse valor na **coluna A** da aba **Faturas** do arquivo **RELATÓRIO NOVA CMB.xlsx**
3. Identifica a linha onde o valor foi encontrado
4. Retorna o conteúdo correspondente da **coluna B** dessa mesma linha

Em termos práticos:

> Localiza um identificador e retorna o dado relacionado a ele.

---

## Estrutura da Fórmula

A fórmula é composta por duas funções principais:

- `CORRESP` → encontra a linha
- `ÍNDICE` → retorna o valor

---

## 1. Referência ao arquivo externo

```
'file:///C:/Users/tborghardt/Desktop/RELATÓRIOS POSTAGEM/RELATÓRIO NOVA CMB.xlsx'#$Faturas
```

Indica:

- Caminho completo do arquivo externo
- Planilha interna chamada **Faturas**

O prefixo `file:///` é o padrão utilizado pelo LibreOffice para acessar arquivos locais.

### Observações

- O arquivo precisa estar acessível no mesmo caminho
- Se for movido, a fórmula pode quebrar
- Pode solicitar atualização de vínculo ao abrir

---

## 2. Função CORRESP (Localização da linha)

```
CORRESP(
 F4;
 '...xlsx'#$Faturas.A$1:A$1048576;
 0
)
```

### Função

Localizar a posição (número da linha) onde o valor de `F4` aparece na coluna A.

### Parâmetros

**F4**

- Valor que será pesquisado
- Normalmente um identificador único
- Exemplos: número de fatura, protocolo, código interno

**A$1:A$1048576**

- Coluna A inteira da aba Faturas
- Intervalo máximo de linhas do Excel/Calc
- Garante que novos registros também sejam considerados

**0 (correspondência exata)**

- Exige igualdade total entre os valores
- Se houver diferença de texto, espaços ou formatação, não encontra

### Resultado do CORRESP

Retorna apenas o **número da linha**.

Exemplo:

- F4 = 12345
- Encontrado na linha 87
- CORRESP retorna: **87**

---

## 3. Função ÍNDICE (Retorno do valor)

```
ÍNDICE(
 '...xlsx'#$Faturas.B$1:B$1048576;
 [linha_encontrada]
)
```

### Função

Buscar o valor correspondente na coluna B usando a linha encontrada pelo CORRESP.

### Parâmetros

**B$1:B$1048576**

- Coluna que contém o dado de interesse
- Pode representar:
  - Valor financeiro
  - Status
  - Data
  - Descrição
  - Informação de controle

**[linha_encontrada]**

- Número retornado pela função CORRESP

### Resultado final

Retorna o valor da **coluna B** na mesma linha onde o identificador foi localizado na coluna A.

---

## Fluxo lógico completo

1. Ler o identificador em F4
2. Procurar na coluna A da planilha Faturas
3. Obter o número da linha correspondente
4. Ir até a coluna B dessa linha
5. Retornar o valor encontrado

---

## Motivo para usar ÍNDICE + CORRESP

Vantagens em relação ao PROCV:

- Não depende da posição fixa das colunas
- Permite buscar para a esquerda ou direita
- Mais robusto para planilhas grandes
- Reduz risco de erro após alterações estruturais
- Melhor para processos de auditoria e conferência

---

## Dependências para funcionamento correto

- Arquivo externo deve existir no mesmo caminho
- Aba deve se chamar exatamente **Faturas**
- Valores comparados devem ser idênticos
- Não pode haver diferenças de:
  - Espaços extras
  - Formatação texto vs número
  - Caracteres ocultos

---

## Possíveis erros comuns

**#N/D**

- Valor de F4 não encontrado na coluna A

**#REF**

- Arquivo externo movido ou renomeado

**Resultado incorreto**

- Identificadores duplicados
- Diferença de tipo (texto vs número)

---

## Boas práticas de melhoria

- Limitar intervalo (ex: A$1:A$50000) para melhor desempenho
- Padronizar identificadores como texto
- Utilizar `SEERRO` para evitar quebra visual

Exemplo:

```
=SEERRO( [fórmula] ; "Não encontrado" )
```

---

## Resumo executivo

A fórmula realiza um cruzamento entre relatórios:

- Usa um identificador do RELATÓRIO ESTRUTURAL
- Procura esse identificador no RELATÓRIO NOVA CMB
- Retorna automaticamente o dado relacionado

Isso permite conferência, validação e automação do processo sem intervenção manual.
