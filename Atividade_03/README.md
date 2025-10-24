# Atividade 3 – Integração Contínua com GitHub Actions

Nesta atividade, aprendemos a configurar e personalizar o GitHub Actions para o projeto do INPE.

## Exercícios

1. **Ativar GitHub Actions**
   - Habilitar a aba Actions no repositório.
   - Criar arquivo inicial de workflow `ci.yml`.

2. **Criar workflow inicial**
   - Configuração de um workflow simples para branch `dev`.
   - Teste básico com comando `echo`.

3. **Testar o workflow**
   - Editar `README.md` e commitar na `dev`.
   - Conferir no Actions se a mensagem aparece nos logs.

4. **Personalizar o workflow**
   - Alterar mensagem para: `"Pipeline do projeto INPE executado com sucesso!"`.

5. **Criar trigger para PR**
   - Garantir que o pipeline execute também em Pull Requests para `dev`.

---

## Resultado Esperado
- Pipeline visível na aba **Actions** do GitHub.
- Logs mostrando a execução automática a cada commit ou PR.
