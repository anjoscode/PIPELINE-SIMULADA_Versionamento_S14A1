// pipeline_simulada.js
// Simulação de uma pipeline de CI/CD com logs reais

function log(nivel, mensagem) {
  const agora = new Date().toLocaleTimeString('pt-BR');
  console.log(`[${agora}] [${nivel}] ${mensagem}`);
}

function esperar(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function etapaBuild() {
  log('INFO', 'Iniciando etapa de Build...');
  await esperar(800);
  log('INFO', 'Lendo arquivos do projeto...');
  await esperar(600);
  log('INFO', 'Compilando módulos: auth.js, database.js, server.js');
  await esperar(700);
  log('WARNING', 'Variável "porta" declarada mas não utilizada em server.js (linha 42)');
  await esperar(400);
  log('INFO', 'Build concluído com sucesso.');
}

async function etapaTestes() {
  log('INFO', 'Iniciando etapa de Testes...');
  await esperar(600);
  log('INFO', 'Executando teste: autenticacao_usuario.test.js');
  await esperar(500);
  log('INFO', 'PASSOU: login com credenciais válidas');
  await esperar(300);
  log('INFO', 'PASSOU: bloqueio após 3 tentativas incorretas');
  await esperar(400);
  log('INFO', 'Executando teste: conexao_banco.test.js');
  await esperar(700);
  log('WARNING', 'Tempo de resposta do banco acima do esperado: 1.8s (limite recomendado: 1.0s)');
  await esperar(500);
  log('ERROR', 'FALHOU: conexao_banco.test.js - não foi possí­vel conectar em localhost:5432');
  await esperar(300);
  log('ERROR', 'DatabaseService.connect() - timeout após 3 tentativas');
}

async function etapaValidacao() {
  log('INFO', 'Iniciando etapa de Validação...');
  await esperar(400);
  log('ERROR', 'Etapa de Validação abortada: testes obrigatários não foram concluí­dos.');
}

async function rodarPipeline() {
  console.log('');
  console.log('================================================');
  console.log('   PIPELINE CI/CD - Projeto: sistema-escolar    ');
  console.log('================================================');
  console.log('');

  try {
    await etapaBuild();
    console.log('');
    await etapaTestes();
    console.log('');
    await etapaValidacao();
  } catch (e) {
    log('ERROR', `Erro inesperado na pipeline: ${e.message}`);
  }

  console.log('');
  console.log('================================================');
  console.log('   PIPELINE FINALIZADA COM FALHA                ');
  console.log('================================================');
  console.log('');
}

rodarPipeline();