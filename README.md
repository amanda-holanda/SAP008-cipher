# Cifra de César
## 1. Prefácio

Cifrar significa codificar. A [cifra de César](https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar) é um dos primeiros tipos de criptografias conhecidas na história. O imperador romano Júlio César utilizava essa cifra para enviar ordens secretas aos seus generais no campo de batalha.

A cifra de César é uma das técnicas mais simples de cifrar uma mensagem. É um tipo de cifra por substituição, em que cada letra do texto original é substituida por outra que se encontra há um número fixo de posições (deslocamento) mais a frente do mesmo alfabeto.

Por exemplo se usarmos o deslocamento (*offset*) de 3 posições:

- Alfabeto sem cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
- Alfabeto com cifra: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C
- A letra A será D
- A palavra CASA será FDVD

Atualmente todas as cifras de substituição alfabética simples, são decifradas com facilidade e não oferecem muita segurança na comunicação por si mesma, mas a cifra de César muitas vezes pode fazer parte de um sistema mais complexo de criptografia, como a cifra de Vigenère, e tem aplicação no sistema ROT13.

## 2. Resumo do projeto

O projeto foi desenvolvido durante o período do Bootcamp da  Laboratória Brasil (turma SAP008). 

Este configura uma aplicação web de cifragem na qual utilizou-se HTML, CSS e JavaScript como suas principais ferramentas. A lógica do projeto teve como base o sistema de cifragem da Cifra de César, possibillitando que o usuário cifre ou decifre um texto indicando uma chave de deslocamento. Foi desenvolvido com base em um protótipo de baixa fidelidade desenhado a seguir:

![prototipo](https://uploaddeimagens.com.br/imagens/jlHAPe8)

O tema do projeto foi inspirado na Guerra da Ucrânica. Desenvolveu-se uma aplicação web de cifragem direcionada ao governo ucraniano com o objetivo dos integrantes do governo conseguirem se comunicar de forma segura internamente e evitar que suas mensagens sejam compreendidas pelo Governo Russo e outros países inimigos. 

Logo, os principais usuários do produto são os integrantes do governo ucraniano e o principal objetivo do produto é proporcionar segurança na comunicação do governo num contexto de guerra.

Dessa forma, o website foi desenvolvido com sua paleta de cores inspirada nas cores da bandeira da Ucrânia (azul e amarelo) e o seu nome “Ukraine Cipher” faz alusão a uma “Cifra da Ucrânia”. 

## 3. Interface do usuário

A interface do projeto foi projetada com o objetivo de que o usuário:

- Escolha um número indicando quantas posições de deslocamento de caracteres a cifragem deve utilizar;
- Insira uma mensagem (texto) para ser cifrada;
- Consiga ver o resultado da mensagem cifrada ao apertar o botão de cifrar.
- Insira uma mensagem (texto) para ser decifrada;
- Consiga ver o resultado da mensagem decifrada ao apertar o botão decifrar.

## 4. Estrutura de organização dos arquivos

A estruturação dos arquivos da aplicação web se dá da seguinte forma:

- index.html contém o código de estruturação da página web;
- style.css contém o código de estilização da página web;
- cipher.js contém a lógica do código para o mecanismo de cifragem e de decifragem;
- index.js contém a lógica do código de manipulação do DOM com interação do usuário na página.

## 5. Ferramentas utilizadas no projeto

- Visual Studio Code (para desenvolver o código);
- Notion (para o planning);
- Git

