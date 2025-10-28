/**
 * Funções do Monitor Climático (INPE) para a Aula 08 - IEC.
 * classificarAlerta: retorna nível de alerta baseado em um valor numérico.
 * enviarNotificacao: "envia" uma notificação (simulada) dado um nível de alerta.
 */

function classificarAlerta(valor) {
  if (valor > 80) return "Crítico";
  if (valor > 50) return "Alto";
  return "Moderado";
}

function enviarNotificacao(alerta) {
  return `Notificação enviada: ${alerta}`;
}

module.exports = { classificarAlerta, enviarNotificacao };
