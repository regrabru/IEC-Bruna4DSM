# Monitor Climático – Testes com Jest (IEC Aula 08)

Este repositório contém os arquivos para realizar a **Atividade Prática (Individual)** da Aula 08 de IEC – Integração e Entrega Contínua.
Inclui testes unitários, teste de integração, simulação de erro e geração de relatório de cobertura.

## Requisitos
- Node.js 16+
- NPM

## Instalação
```bash
npm install
```

## Scripts
- **Rodar testes**: `npm test`
- **Cobertura**: `npm test -- --coverage`

## Estrutura
```
src/
  alerta.js             # classificarAlerta() e enviarNotificacao()
tests/
  alerta.test.js        # Exercício 1 (unitário)
  integracao.test.js    # Exercício 2 (integração)
  erro-simulado.test.js # Exercício 3 (comentado para você simular o erro)
jest.config.js
package.json
.gitignore
```

## Passo a passo (ligado à atividade da professora)
1. **Exercício 1 (Unitário)** – já implementado em `tests/alerta.test.js`.
2. **Exercício 2 (Integração)** – já implementado em `tests/integracao.test.js`.
3. **Exercício 3 (Simular erro)** – descomente o bloco em `tests/erro-simulado.test.js`, rode `npm test`,
   observe a falha e depois corrija o valor esperado para `"Crítico"`.
4. **Exercício 4 (Cobertura)** – rode:
   ```bash
   npm test -- --coverage
   ```
   Verifique a pasta `coverage/`.
5. **Exercício 5 (Commit + PR)** – faça commit e abra um Pull Request `feature/testes -> dev`,
   acompanhando o pipeline (lint + testes) no GitHub Actions.

> Baseado na Atividade Prática apresentada em aula (testes unitários, de integração, simulação de erro e cobertura).

Bom trabalho! 💪
