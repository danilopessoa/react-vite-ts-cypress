// cypress.config.mjs
import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000', // Define a URL base para todos os testes.
    viewportWidth: 1920, // Largura da viewport do navegador.
    viewportHeight: 1080, // Altura da viewport do navegador.
    defaultCommandTimeout: 8000, // Tempo limite padrão para comandos do Cypress.
    pageLoadTimeout: 60000, // Tempo limite para o carregamento da página.
    requestTimeout: 5000, // Tempo limite para requisições HTTP.
    responseTimeout: 30000, // Tempo limite para respostas HTTP.
    video: true, // Habilita ou desabilita a gravação de vídeo dos testes.
    screenshotOnRunFailure: true, // Tira uma captura de tela quando um teste falha.
    env: {
      apiUrl: 'http://localhost:4000/api' // Define variáveis de ambiente.
    },
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}', // Padrão de arquivos de especificação para testes E2E.
    supportFile: 'cypress/support/e2e.ts', // Caminho para o arquivo de suporte.
    fixturesFolder: 'cypress/fixtures', // Pasta para arquivos de fixtures.
    // pluginsFile: 'cypress/plugins/index.js' // Caminho para o arquivo de plugins.
  },

  component: {
    devServer: {
      framework: 'react', // Biblioteca utilizado (e.g., 'react', 'vue').
      bundler: 'vite' // Bundler utilizado (e.g., 'webpack', 'vite').
    }
  }
});
