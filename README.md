**TECNOLOGIAS UTILIZADAS:**

Frontend

- Angular
- Material Design
- Materialize
- Bootstrap

Backend

- NestJS
- Prisma ORM
- MySQL
- Swagger

---

**NSTRUÇÕES PARA EXECUTAR O PROJETO**

**PARA EXECUTAR O FRONTEND, SIGA OS SEGUINTES PASSOS:**

1. Clone o projeto.
2. Acesse a pasta do frontend.
3. Execute o comando npm install.
4. Execute o comando npm run start.

**PARA EXECUTAR O BACKEND, SIGA OS SEGUINTES PASSOS:**

1. Acesse a pasta do backend.
2. Crie um arquivo chamado .env e adicione as seguintes variáveis:

```
MYSQL_HOST_PORT=3306
MYSQL_PORT=3306
MYSQL_DATABASE=product_db
MYSQL_ROOT_PASSWORD=123456
DATABASE_URL=mysql://root:123456@localhost:3306/product_db
SWAGGER_USER=admin
SWAGGER_PASSWORD=123456
```
3. Execute o comando npm run prisma:migrate:local

> **DICA:**
> Se você tiver o Docker Compose instalado, execute o comando npm run db:up para subir os containers do banco de dados e Adminer. Assim, você poderá acessar os dados do banco na rota localhost:8080.

4. Em seguida, execute o comando npm run start:dev

> Observação: o backend foi criado com NestJS e com os decorators do NestJS, é possível gerar uma documentação para API, nesse caso o Swagger, para visualizar os endpoints documentados. Acesse a URL localhost:3000/swagger-docs e faça login com as seguintes credenciais:


```
Usuário: admin
Senha: 123456
```
