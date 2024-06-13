Configuração do Projeto
Este projeto utiliza Firebase para autenticação e outros serviços. Por motivos de segurança, o arquivo src/infra/firebase.js que contém as configurações do Firebase não está incluído no repositório. Você precisará fornecer suas próprias credenciais do Firebase para utilizar o sistema.

Passos para Obter Suas Próprias Credenciais do Firebase
Crie um Projeto no Firebase:

Acesse o console do Firebase.
Clique em "Adicionar Projeto" e siga as instruções para criar um novo projeto.
Configure o App Web:

Dentro do console do Firebase, vá até a seção "Configurações do Projeto" e selecione "Configurações Gerais".

Na aba "Seus apps", clique no ícone </> para configurar um novo app web.

Siga as instruções para registrar seu app e obter suas credenciais.
Adicione as Credenciais ao Projeto:

No seu projeto local, crie o arquivo firebase.js em src/infra/.

Adicione as credenciais que você obteve no Firebase ao arquivo firebase.js. Ele deve ter a seguinte estrutura:

```

// src/infra/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };

```
Instale as Dependências:

Execute ```npm install``` para instalar todas as dependências necessárias.
Inicie o Projeto:

Use ```npm start``` para iniciar o projeto.

