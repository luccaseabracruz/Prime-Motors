# 🚙 PrimeMotors - Plataforma de anúncio de carros 🚙

🇧🇷
O Prime Motors é uma plataforma de compra e venda de veículos seminovos, uma página totalmente responsiva, contendo integração entre backend e frontend, dessa forma, a aplicação disponibiliza ao usuário, diversas ações, como:
- Cadastro de usuário (anunciante ou cliente);
- Edição dos dados do usuário;
- Deleção de um usuário;
- Criação de um anúncio;
- Edição dos dados de um anúncio;
- Deleção de um anúncio;
- Post de comentários dentro de um anúncio publicado;
- Edição de comentários;
- Deleção de comentários.

Por meio do Prime Motors, o cliente poderá se cadastrar na plataforma como um usuário vendedor ou um cliente que deseja adquirir um novo veículo. A partir disso, ele poderá navegar na plataforma, que dispõe de diversos filtros funcionais para melhor selecionar veículos de acordo com o desejo do comprador. Existe uma página especifica para cada anúncio publicado na plataforma onde o cliente consegue registrar um comentário e visualizar maiores informações sobre aquele automóvel em específico. Caso exista um maior interesse, é possível entrar em contato diretamente com o anunciante através do botão "Comprar" na página de detalhes do veículo, redirecionando-o para o Whatsapp do vendedor. Outra função interessante é a tag em verde na foto de capa do anúncio indicando que o produto foi cadastrado com um valor de, no mínimo, 5% abaixo da tabela Fipe daquele automóvel, caracterizando um bom negócio. No caso do usuário ser um vendedor, ele pode desativar o anúncio através do modal de edição de anúncios, se o mesmo já tiver sido comercializado. Dessa forma, o produto não ficará mais disponível no acervo de veículos da plataforma. Por último, foi implementado no backend o envio de email para recuperação de senha do usuário, sendo possível alterar o password caso o mesmo tenha esquecido.



Prime Motors is a platform for buying and selling used vehicles, a fully responsive page, with integration between backend and frontend, so the application provides the user with various actions, such as:

- User registration (advertiser or customer);
- Editing user data;
- Deleting a user;
- Creating an advertisement;
- Editing ad data;
- Deleting an ad;
- Posting comments within a published ad;
- Editing comments;
- Deleting comments.

Through Prime Motors, the customer can register on the platform as a sales user or a customer wishing to purchase a new vehicle. From there, they can browse the platform, which has several functional filters to better select vehicles according to the buyer's wishes. There is a specific page for each ad published on the platform where the customer can register a comment and view more information about that specific car. If you are interested, you can contact the advertiser directly via the "Buy" button on the vehicle details page, redirecting you to the seller's Whatsapp. Another interesting feature is the green tag on the cover photo of the ad indicating that the product has been registered with a value of at least 5% below the Fipe table for that car, characterizing a good deal. If the user is a seller, they can deactivate the ad via the ad editing modal if it has already been sold. This way, the product will no longer be available in the platform's vehicle collection. Lastly, the backend was implemented to send an email to recover the user's password, making it possible to change the password if the user has forgotten it.

As seller you can activate and deactivate your vehicles ads and they will not appear in the main page, just you will see it and, of course, can reactive it again, using the "edit" option.

If you forget your password, you can recover it by sending a password recovery message to your e-mail address. 

## Instructions

### Starting frontend
This project uses Node.js and postgreSQL. Before proceeding, ensure that you have Node.js and npm installed on your machine.

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
