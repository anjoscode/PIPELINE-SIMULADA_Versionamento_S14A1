Versionamento de Código e Sistemas de Mensageria - S14A1
Título da atividade: Lendo logs de uma pipeline de CI/CD.

Perguntas
1. Quais etapas da pipeline foram executadas? Liste na ordem em que apareceram.
R: Etapa de Build, Etapa de Testes e Etapa de Validação.

2. Em qual etapa a pipeline falhou? O que o log de ERROR diz sobre o motivo da falha?
R: Na Etapa de Testes. O log de ERROR diz que o teste de conexão falhou porque não foi possível conectar em localhost:5432, mostrando um timeout após 3 tentativas na função DatabaseService.connect(). O log de ERROR indica que o teste de conexão falhou porque não foi possível conectar em localhost:5432, apresentando um timeout após 3 tentativas na função DatabaseService.connect().

3. Havia algum log de WARNING antes do ERROR aparecer? O que ele indicava?
Sim, havia dois. O Primeiro Warning (Build) indicava uma variável "porta" declarada, mas não utilizada em server.js (linha 42). O Segundo Warning (Testes) indicava que o tempo de resposta do banco de dados estava em 1.8s, ficando acima do limite recomendado de 1.0s.

4. Com base nos logs, o problema estava no código do sistema ou na conexão com o banco de dados? Como você chegou a essa conclusão?
R:  Na conexão com o banco de dados. Cheguei a essa conclusão percebendo que o código compilou e os testes de autenticação passaram com sucesso, indicando que o sistema em si estava correto, o erro ocorreu na tentativa de comunicação externa com o banco (localhost:5432).

5. Se você fosse avisar a equipe sobre essa falha, quais informações dos logs você incluiria na mensagem? Por quê?
Eu incluiria o nome do projeto, a etapa de testes, o erro de timeout na porta 5432 e o aviso de lentidão, porque essas informações permitem que a equipe de infraestrutura ou banco de dados identifique rapidamente o serviço instável ou inacessível e agilize a correção.
