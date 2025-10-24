function classificarAlerta(valor) {
  if (valor > 80) return "Crítico";
  if (valor >= 60) return "Alto";
  return "Baixo";
}
module.exports = { classificarAlerta };
