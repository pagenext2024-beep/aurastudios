# AURA | Creative Studio

Este é o repositório do site AURA Creative Studio.

## Como rodar localmente (VS Code / Terminal)

### Pré-requisitos

Certifique-se de ter o **Node.js** instalado em sua máquina. Recomendamos a versão LTS (v20 ou superior).

### Passo a Passo

1.  **Instalar dependências**
    Abra o terminal na pasta do projeto e execute:
    ```bash
    npm install
    ```

2.  **Rodar o projeto**
    Para iniciar o servidor de desenvolvimento:
    ```bash
    npm run dev:client
    ```
    
    Ou, se você quiser rodar com o backend (embora este projeto seja focado no frontend):
    ```bash
    npm run dev
    ```

3.  **Acessar**
    Abra seu navegador em: `http://localhost:5000`

## Estrutura do Projeto

- `client/`: Código fonte do Frontend (React + Vite)
- `server/`: Código do Backend (Node.js)
- `shared/`: Tipos compartilhados
