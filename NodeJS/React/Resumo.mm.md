# Resumo da Documentação do React

## Introdução ao React
- O React é uma biblioteca JavaScript para construir interfaces de usuário.
- Permite criar componentes reutilizáveis e gerenciar o estado da aplicação de forma eficiente.

## Componentes
- Os componentes são a unidade fundamental no React.
- Podem ser criados como funções (Componentes Funcionais) ou classes (Componentes de Classe).
- Permitem o reuso de código e a construção de interfaces modulares.
- Exemplos:
1. <code>`export function MyDiv() { return <div> Olá mundo </div> }`</code>
2. em `App.js` usa-se um componente `<Mydiv />`:


## JSX
- JSX é uma sintaxe que combina HTML e JavaScript.
- Permite escrever estruturas de componentes de forma declarativa.
- Facilita a criação de elementos e sua renderização no DOM.

## Estado e Ciclo de Vida
- O estado é um objeto que armazena informações mutáveis ​​relacionadas a um componente.
- O ciclo de vida do componente descreve os diferentes estágios pelos quais ele passa, desde a criação até a destruição.
- Métodos de ciclo de vida, como `componentDidMount` e `componentWillUnmount`, permitem executar ações em momentos específicos.

## Renderização Condicional
- A renderização condicional permite mostrar diferentes elementos com base em uma condição.
- Pode ser feita usando operadores lógicos, operadores ternários ou estruturas de controle, como `if` e `switch`.

## Manipulação de Eventos
- Os eventos são tratados de maneira semelhante aos eventos DOM tradicionais.
- Permitem que os componentes respondam a ações do usuário, como cliques e digitação.

## Comunicação entre Componentes
- A comunicação entre componentes pode ser feita através de props (propriedades) ou por meio de um gerenciamento de estado compartilhado, como o Redux.

## Reconciliação e Chaves
- A reconciliação é o processo em que o React atualiza a árvore de elementos para refletir as mudanças no estado ou nas props.
- O uso de chaves (keys) ajuda o React a identificar de forma eficiente os elementos da lista que foram alterados, adicionados ou removidos.

## Hooks
- Os hooks são funções especiais que permitem usar recursos do React em componentes funcionais.
- Permitem adicionar estado, lidar com efeitos colaterais e muito mais, sem precisar escrever uma classe.
- Exemplos:
    <code>const [count, setCount] = useState(0)</code>
    1. `useState` é um hook que define um valor padrão 0 para uma variável que no caso é `count`
    2. `setCount` serve para redefinir o valor do count alterando-a

## Contexto
- O Contexto permite compartilhar dados entre componentes sem precisar passar manualmente as props através de todos os níveis da árvore de componentes.

## Referências
- [Documentação oficial do React](https://reactjs.org/docs/getting-started.html)