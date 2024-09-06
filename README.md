# Cypress Acessibilidade com Axe e LambdaTest

Este projeto integra **Cypress** com a biblioteca de testes de acessibilidade **Axe-core** para realizar verificações automatizadas de acessibilidade em páginas web. A execução dos testes é feita na plataforma de nuvem **LambdaTest**, permitindo testes em diversos navegadores e sistemas operacionais.

## Requisitos

Certifique-se de ter os seguintes requisitos instalados antes de configurar o projeto:

- **Node.js** (versão 14.x ou superior)
- **NPM** (ou **Yarn**)
- Conta no **LambdaTest** para rodar os testes na nuvem

## Instalação

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/cypress-acessibilidade.git
   cd cypress-acessibilidade
   ```

2. **Instale as dependências:**

   Execute o comando abaixo para instalar todas as dependências do projeto:

   ```bash
   npm install
   ```

   As principais dependências incluem:

   - Cypress
   - cypress-axe
   - axe-core
   - LambdaTest Cypress CLI

## Configuração

### Cypress

O arquivo de configuração do Cypress está localizado em `cypress.config.js`. Aqui, você pode ajustar as especificações dos testes, a base URL e outras configurações necessárias para o seu projeto.

### LambdaTest

Credenciais do LambdaTest: No arquivo `lambdatest-config.json`, insira seu nome de usuário e chave de acesso do LambdaTest:

```json
{
  "lambdatest_auth": {
    "username": "seu_nome_de_usuario",
    "access_key": "sua_chave_de_acesso"
  },
  ...
}
```

## Executando os Testes

### Executando localmente

Para executar os testes de acessibilidade localmente, utilize o comando:

```bash
npx cypress open
```

No modo interativo, selecione o arquivo de teste `test-a11y.spec.cy.js` para executar os testes de acessibilidade.

### Executando no LambdaTest

Para rodar os testes no LambdaTest, execute o seguinte comando:

```bash
lambdatest-cypress run --config lambdatest-config.json
```

## Estrutura de Arquivos

![Estrutura de Arquivos](https://github.com/user-attachments/assets/71c408bd-2fab-437f-aeff-a19a5161d991)

## Exemplo de Teste de Acessibilidade

Aqui está um exemplo de como realizar um teste de acessibilidade com Cypress e Axe no arquivo `test-a11y.spec.cy.js`:

```javascript
describe('Teste de Acessibilidade com Cypress e Axe', () => {
  it('Deve verificar a acessibilidade da página inicial', () => {
    cy.visit('https://seu-site.com');
    cy.injectAxe(); // Injeta o axe-core na página
    cy.checkA11y(); // Verifica as violações de acessibilidade
  });
});
```

## Recursos Adicionais

- [Documentação do Cypress](https://docs.cypress.io/)
- [axe-core](https://github.com/dequelabs/axe-core)
- [LambdaTest](https://www.lambdatest.com/)
