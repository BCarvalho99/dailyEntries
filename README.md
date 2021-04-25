# SISTEMA SIMPLES PARA REGISTRO DE HORÁRIO

### - Desafio Avanade -

Proposta: Desenvolver qualquer ideia que utilizasse mais de três componentes Angular e quatro componentes Angular Material. 

Explicação: A aplicação tem como objetivo registrar o horário de entrada e de saída de determinado funcionário, mantendo o registro no histórico. 

Foi criado um componente pai (Home Component), o qual faz uma chamada para outros dois componentes, o componente de formulário, responsável por entregar os inputs de entrada e saída e o componente de histórico, responsável por exibir o retorno das informações armazenadas. 

Os Componentes de formulário tanto de entrada quanto de saída possuem o componente Input do Angular Material com um type time. Com a propriedade ngModel do Angular Forms um binding é feito para chamar as variáveis de entrada/saida do arquivo typescript. Já na tag de form o evento de submit ativa a função que envia os dados inseridos no formulário para o componente pai ( Home Component ), que ativa a propriedade nativa de binding de uma instância EventEmitter de Output. O componente de histórico usa a tabela do Angular Material para fazer a exibição dos registros de horários. Ele possui uma array que retorna as duas colunas ( entrada e saida) e faz um binding do componente pai para o componente filho ( formulário para home para histórico ) para receber os dados inseridos no @input ( estrutura no componente pai:  *[historicoHorarios]*). 

Além desses componentes maiores, existe a implementação de um componente simples (modalAlert) que é disparado quando é efetuado o evento de registro.



