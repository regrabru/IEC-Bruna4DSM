# Aula 09 – Testes de Integração + Segurança Automatizada

Projeto pronto para cumprir a atividade prática:
- Teste de integração real (processarAlerta)
- Mock de função externa (Jest)
- Verificação de segurança (npm audit)
- Workflow de auditoria no GitHub Actions

## Requisitos
- Node.js 16+
- NPM

## Instalação e testes
```bash
npm install
npm test
npm test -- --coverage
```

## Segurança
```bash
npm run audit        # npm audit --audit-level=moderate
npm audit fix        # tenta corrigir vulnerabilidades
```

## GitHub Actions (Segurança)
Workflow em `.github/workflows/security.yml` roda o `npm audit` em pushes e PRs.
Abra uma branch `feature/seguranca`, faça commit e crie PR para `dev`.
