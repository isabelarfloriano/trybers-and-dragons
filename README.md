# Projeto Trybers and Dragons! 	:dragon_face:

Projeto desenvolvido em TypeScript com objetivo de aplicar os princípios da arquitetura `SOLID` e os princípios de `POO` em uma estrutura de jogos de interpretação de papéis, mais conhecidos como jogos `RPG` (_Role Playing Game_). 

<details>
  <summary><strong>Contexto da Aplicação</strong></summary><br />
  
  No projeto, é possível criar personagens de diferentes raças, como anões, elfos, hobbits, orcs e dragões, bem como arquétipos como magos, necromantes, guardas ou guerreiros. É possível inserir informações para cada personagem, como nome, pontos de vida, tipo de energia, destreza e defesa. Além disso, com os personagens e monstros criados, é possível realizar batalhas em dois modos: personagem contra personagem ou personagem contra vários inimigos ou personagens rivais.
</details>

<details>
  <summary><strong>Como instalar e rodar o projeto com Docker</strong></summary><br />
  
  Realize o clone do repositório em sua máquina e utilize os comandos a seguir para executar a aplicação com o Docker:
   - `docker-compose up -d`
   - `docker exec -it trybers_and_dragons bash`
   - `npm install`
    
  ⚠ Atenção ⚠ Caso opte por utilizar o Docker, **TODOS** os comandos disponíveis no `package.json` (npm start, npm test, npm run dev, ...) devem ser executados **DENTRO** do container, ou seja, no terminal que aparece após a execução do comando `docker exec` citado acima. 
  
  Depois que as dependências forem instaladas, é importante verificar os arquivos na pasta `./src`, onde se encontram as classes criadas para construir os personagens. Nos arquivos `./src/index.ts`, há alguns exemplos disponíveis e, se desejar explorá-los, pode-se construir personagens e realizar batalhas, executando o script de código no terminal através do comando `npm start`.
  
  Ao final, basta utilizar o comando `docker-compose down` parando a aplicação.
</details>
