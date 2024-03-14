# 🚙 PrimeMotors - Plataforma de anúncio de carros 🚙

🇧🇷
O Motors Shop é uma plataforma de compra e venda de veículos seminovos, uma página totalmente responsiva, contendo integração entre backend e frontend, dessa forma, a aplicação disponibiliza ao usuário, diversas ações, como:
- Cadastro de usuário (anunciante ou cliente);
- Edição dos dados do usuário;
- Deleção de um usuário;
- Criação de um anúncio;
- Edição dos dados de um anúncio;
- Deleção de um anúncio;
- Post de comentários dentro de um anúncio publicado;
- Edição de comentários;
- Deleção de comentários.

De forma básica, o cliente que irá utilizar o Motors Shop, irá se cadastrar na plataforma, como um usuário vendedor ou um cliente que deseja adquirir um novo veículo. A partir disso, ele poderá navegar na plataforma, que dispõe de diversos filtros funcionais para melhor selecionar veículos de acordo com o desejo do comprador, além disso, existe uma página especifica para cada anúncio publicado na plataforma, onde o cliente consegue registrar um comentário e visualizar maiores informações sobre aquele automóvel em específico. Caso exista um maior interesse, é possível entrar em contato diretamente com o anunciante através do botão "Comprar" na página de detalhes do veículo, isso o redirecionará para o Whatsapp do vendedor. Outra função interessante é a tag em verde que aparece na foto de capa do anúncio, isso significa que o produto foi cadastrado com um valor de no mínimo 5% abaixo da tabela Fipe daquele automóvel, caracterizando assim, um possível bom negócio. No caso do usuário ser um vendedor, ele pode desativar o anúncio através do modal de edição de anúncios, se o mesmo já tiver sido comercializado, dessa forma, o produto não ficará mais disponível no acervo de veículos da plataforma. Por último, implementamos no backend o envio de email para recuperação de senha do usuário, sendo possível alterar o password caso o mesmo tenha esquecido.

🇺🇸
Motor Shop is a site where you can buy-sell semi-new vehicles, it is responsiveness, with full backend/frontend integration, can be used with your desktop computer or smartphone/tablet. 

With Motor Shop you can:
- Register (seller or buyer);
- Edit your own infos;
- Create, Edit and Delete a listed vehicle;
- Create comments;
- Edit comments;
- Delete comments;

Basically, to use Motor Shop you need to register her/himself - and choose between seller or client - so then you can use the entire site, use filters, visit especific car page, see more pictures and details, also see the comments made by other users about the car.
If you - the user - notice a green flag with the simbol '$' it means that the price is 5% less than the normal/oficial price what it means that is a 'good deal'. Cool isn't?
If you are in the detailed car page, you can click "comprar" button and automatically be redirected to seller's whatsapp.

Being a seller you can activate and deactivate your vehicles ads and they will not appear in the main page, just you will see it and, of course, can reactive it again, using the "edit" option.

If you forgot your password, you can recover it too and an email will be sent to you, so you can recover you access and continue enjoying our platform.

## Instructions

### Starting frontend
This project uses node and postgreSQL. So, it is important to check if you already have these programs intalled on your machine.

    1. Clone this repository on your machine.
        $ git clone <ssh_key>

    2. Open the cloned repository folder

    3. On your terminal:
        $ cd ./frontend (to enter the frontend folder)
        $ npm install (to install all the dependencies)
        $ npm run dev (to check if it running properly)

    4. Pass the Local url provided in the terminal to the VITE_URL Env variable in the backend folder.
        ATTENTION: the url must be without "/" in the end!!!!!

### Starting backend

    1. Create a SQL database through PostgreSQL using your terminal:
        $ psql
        $ CREATE DATABASE <your_db_name>;

    2. On your terminal:
        $ cd ./backend (to enter the backend folder)
        $ npm install (to install all the dependencies)

    3. Populate the .env file with your the required information and run this command:
        $ npm run dev (to check if it is running properly)

    4. Migrate all the existent migrations with the following command:
        $ npm run typeorm migration:run -- -d src/data-source

    5. Enter the Local url link provided in the frontend terminal with cntrl + click, register your account and enjoy the app.

    OBS: remember to run the backend and frontend simutaneously.

### API Endpoints:

| Method | Endpoint                       | Description                           | Authentication                             |
| ------ | ------------------------------ | ------------------------------------- | ------------------------------------------ |
| POST   | /cars                          | Create car                            | Only Sellers user, token is required       |
| GET    | /cars                          | List all cars                         | Any user, token is not required            |
| GET    | /cars/:id/                     | Retrieve one car by ID                | Any user, token is not required            |
| PATCH  | /cars/:id/                     | Update a car                          | Just car owner, token is required          |
| DELETE | /cars/:id/                     | Delete a car                          | Just car owner, token is required          |
| POST   | /login                         | Generate authentication token         | Any user, token is not required            |
| POST   | /users/                        | User creation creation                | Any user, token is not required            |
| GET    | /users/                        | List all users                        | Any user, token is required                |
| GET    | /users/:id/                    | Retrieve one user by ID               | Any user, token is required                |
| PATCH  | /users/:id/                    | Update user by id                     | Just user owner account, token is required |
| DELETE | /users/:id/                    | Delete a user by ID                   | Just comment owner, token is required      |    
| GET    | /comments/                     | Retrive all comments from a given car | Just user owner account, token is required |
| POST   | /comments/:id/                 | Create a comment in a given car ID    | Any user, token is required                |
| GET    | /comments/:id/                 | Retrive a comment                     | Just comment owner, token is required      |
| PACTH  | /comments/:id/                 | Update a comment by ID                | Just comment owner, token is required      |
| DELETE | /comments/:id/                 | Delete a comment by ID                | Just comment owner, token is required      |
