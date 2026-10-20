# Starscream — Dossiê Decepticon

Landing page temática dedicada a Starscream, personagem do universo *Transformers*. O projeto apresenta o comandante aéreo dos Decepticons em formato de dossiê interativo, reunindo informações, imagens e referências às suas aparições em diferentes mídias.

Desenvolvi esta página como um projeto de portfólio para praticar a construção de uma experiência visual completa com tecnologias front-end fundamentais. A proposta foi transformar um tema de ficção em uma página imersiva, organizada e navegável, combinando uma identidade visual inspirada em arquivos táticos com interações que incentivam a exploração do conteúdo.

> **Tempo de desenvolvimento:** [4 meses 1-2 horas por dia 1-2 vezes por semana].  


## O que a página apresenta

- Capa temática com vídeo e animação vinculada à rolagem.
- Navegação por seções: início, história, galeria, aparições e curiosidades.
- Dossiê com dados do personagem, forma alternativa e aviso de ameaça.
- Seção de história com conteúdo expansível.
- Galeria de imagens e uma área dedicada aos Seekers.
- Registro de aparições com filtros por categoria e detalhes expansíveis.
- Cartões de curiosidades com animações de entrada.
- Campo interativo no rodapé que exibe uma resposta conforme o nome digitado.
- Layout com ajustes para diferentes larguras de tela e suporte a preferência por movimento reduzido em parte das animações.

## Tecnologias e recursos


| Tecnologia / recurso | O que é | Como foi utilizada e por que se adequa |
|---|---|---|
| **HTML5** | Linguagem de marcação para estruturar conteúdo na web. | Define a estrutura semântica da página, suas seções, navegação, imagens, vídeo, controles de filtro e elementos expansíveis. É suficiente para organizar uma landing page estática sem introduzir dependências desnecessárias. |
| **CSS3** | Linguagem de estilos para apresentação visual de páginas. | Implementa a identidade visual, cores, tipografia, layouts, efeitos, animações e media queries responsivas. Permite personalizar cada seção sem uma biblioteca visual adicional. |
| **JavaScript** | Linguagem de programação executada no navegador. | Controla interações como o comportamento do menu na rolagem, filtros de aparições, revelação de conteúdo e resposta ao campo de nome. |
| **GSAP 3.12.5** | Biblioteca JavaScript para animações. | É carregada por CDN para criar a sequência animada da capa e sincronizar a reprodução do vídeo com a rolagem. |
| **GSAP ScrollTrigger 3.12.5** | Plugin GSAP para vincular animações à rolagem. | É usado para fixar temporariamente a capa e controlar a linha do tempo da animação conforme a pessoa percorre a página. |
| **Intersection Observer API** | API nativa do navegador para observar elementos visíveis na tela. | Aciona efeitos de entrada em blocos e cartões quando eles aparecem na área visível, evitando depender de uma biblioteca adicional para esse comportamento. |
| **Google Fonts** | Serviço de fontes web. | Fornece as famílias Orbitron, Aldrich, Rajdhani e JetBrains Mono, usadas para reforçar o estilo tecnológico e a hierarquia visual. |

O projeto também usa elementos nativos do navegador, como eventos de rolagem, `<details>`/`<summary>`, vídeo HTML e atributos de acessibilidade nos controles.

## Organização dos arquivos

```text
.
├── index.html       # Estrutura e conteúdo da landing page
├── css/
│   └── style.css    # Estilos, identidade visual e responsividade
├── js/
│   └── script.js    # Interações e animações
└── images/          # Imagens, SVGs e vídeo utilizados na página
```

## Como visualizar

1. Clone ou baixe este repositório.
2. Abra a pasta do projeto no editor de sua preferência.
3. Inicie um servidor estático apontando para a pasta raiz do projeto (por exemplo, com uma extensão de servidor local no editor).
4. Abra no navegador o endereço local informado pelo servidor.

O projeto não possui etapa de instalação ou build. Para carregar as fontes do Google e as bibliotecas GSAP/ScrollTrigger servidas por CDN, é necessária uma conexão com a internet.

## Processo de desenvolvimento

As etapas abaixo descrevem a construção da página a partir da estrutura e dos recursos presentes no projeto. A ordem representa o fluxo de implementação documentado aqui, não um histórico automático de cada sessão de trabalho.

1. **Definição do objetivo e do conteúdo** — estabelecer a proposta de apresentar Starscream como um dossiê temático e organizar as informações em áreas distintas, como história, galeria, aparições e curiosidades.
2. **Direção visual** — aplicar uma linguagem visual inspirada em arquivos táticos, com fundos escuros, cores de destaque, imagens do personagem e fontes de aparência tecnológica.
3. **Estrutura da página** — organizar a navegação, a capa, as seções de conteúdo e o rodapé em HTML.
4. **Estilização e composição** — desenvolver os estilos em CSS para os painéis, cartões, galeria, tipografia, efeitos visuais e apresentação das informações.
5. **Interações com JavaScript** — implementar a animação da capa controlada pela rolagem, o comportamento do menu, as transições de entrada, os filtros de aparições e a resposta do campo interativo.
6. **Responsividade e movimento** — incluir media queries para reorganizar componentes em telas menores e uma regra de preferência por movimento reduzido para parte das animações.


## Inteligência artificial como apoio ao aprendizado

A inteligência artificial foi utilizada como apoio ao aprendizado e à resolução de dificuldades, não como substituta do desenvolvimento ou das decisões do autor. Ela pode ajudar a esclarecer conceitos de front-end, explicar trechos de código, investigar erros, comparar abordagens e refletir sobre boas práticas.

As sugestões precisam ser compreendidas, avaliadas e adaptadas ao contexto do projeto. A implementação, a escolha do que fazia sentido para a página e a revisão do resultado continuam sendo parte do trabalho do desenvolvedor.


## Inteligência artificial no processo de design

No processo visual, a IA pode servir como apoio para explorar referências, experimentar ideias de composição, avaliar combinações de cores e tipografia e comparar direções para a apresentação do conteúdo. A contribuição deve ser descrita de acordo com o que ocorreu de fato, sem atribuir à ferramenta decisões ou criações que foram feitas pelo autor.

Neste projeto, a identidade final se materializa na estética de dossiê Decepticon, nos painéis escuros, nos destaques em vermelho, roxo e laranja, na tipografia tecnológica e na organização visual das seções. Para tornar o relato fiel ao processo, complete:

## Aprendizados e desafios

O projeto reúne desafios de organização de conteúdo longo em uma única página, composição de uma identidade visual consistente e coordenação de interações com a rolagem. A capa, por exemplo, combina uma linha do tempo GSAP com o vídeo, enquanto filtros e elementos expansíveis ajudam a tornar o conteúdo de aparições mais explorável.

Também foi uma oportunidade para praticar JavaScript no navegador, observar elementos com a Intersection Observer API e adaptar a apresentação com CSS responsivo. Os principais desafios enfrentados e as soluções encontradas podem ser detalhados aqui:

- **Ferramenta(s) de IA utilizada(s):** [ChatGPT e claude].
- **Como ajudou neste projeto:** [Usei a IA como apoio para esclarecer dúvidas de desenvolvimento front-end, compreender melhor conceitos e explorar diferentes maneiras de resolver questões que surgiram durante a criação da página. As sugestões serviram como ponto de partida para estudar as alternativas e decidir o que fazia sentido aplicar ao projeto.]
- **O que aprendi ou passei a compreender melhor:** [O processo reforçou minha compreensão de como HTML, CSS e JavaScript se complementam na construção de uma página interativa. Também pratiquei avaliar sugestões com senso crítico, adaptar ideias ao contexto do projeto e manter minhas próprias decisões durante a implementação.]

## Créditos e uso de mídia

O repositório contém imagens, ilustrações, um vídeo e outros recursos visuais. Os arquivos do projeto não identificam de forma completa a autoria ou a licença de cada material.

- **Créditos das imagens e do vídeo:** []..

Transformers e seus personagens pertencem aos respectivos titulares. Este projeto é uma iniciativa de portfólio, sem indicação de afiliação oficial.

## Próximos passos
- Dar credito aos devidos autores de imagens e videos
- Revisar e completar os créditos e as licenças dos recursos visuais.
- Revisar o comportamento da página em diferentes navegadores e dispositivos.
- Avaliar melhorias de acessibilidade e carregamento de mídia.

## Autor

**Matheus** — [GitHub](https://github.com/Snakww)
