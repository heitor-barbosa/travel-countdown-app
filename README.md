# 🌊 Travel Countdown App

Aplicação web desenvolvida com React e TypeScript para apresentar uma contagem regressiva e um roteiro completo de viagem para um casamento em Arraial d'Ajuda, Bahia.

O projeto simula uma página real para convidados, reunindo informações importantes como data do evento, local, roteiro por dia, hospedagem sugerida e opções de deslocamento.

## ✨ Funcionalidades

- Contagem regressiva em tempo real para o evento
- Página inicial com informações principais do casamento
- Roteiro dividido por dias
- Agenda com horários e descrições das atividades
- Sugestões de hospedagem
- Informações de deslocamento e voos
- Layout responsivo com identidade visual praiana
- Navegação interna por seções

## 🖼️ Preview
<img width="1919" height="908" alt="image" src="https://github.com/user-attachments/assets/39738c84-2537-48cc-9902-107e5977a376" />


## 🛠️ Tecnologias utilizadas

### Frontend

- React
- TypeScript
- Vite
- CSS3
- ESLint

### Backend

- Django
- PostgreSQL configurado via variáveis de ambiente


## 📁 Estrutura do projeto

```bash
travel-countdown-app/
├── backend/
│   ├── config/
│   │   ├── settings.py
│   │   ├── urls.py
│   │   ├── asgi.py
│   │   └── wsgi.py
│   └── manage.py
│
└── frontend/
    ├── public/
    │   ├── favicon.svg
    │   └── icons.svg
    ├── src/
    │   ├── assets/
    │   ├── App.tsx
    │   ├── App.css
    │   ├── index.css
    │   └── main.tsx
    ├── package.json
    ├── vite.config.ts
    └── eslint.config.js
```
## 🚀 Como rodar o frontend

```bash
cd frontend
npm install
npm run dev
```

A aplicação estará disponível em:  
http://localhost:5173

---

## ⚙️ Como rodar o backend

```bash
cd backend
python -m venv venv
```

Ativação do ambiente virtual:

```bash
# Windows
venv\Scripts\activate

# Linux/Mac
source venv/bin/activate
```

Configurar variáveis de ambiente (`.env`):

```env
DB_NAME=nome_do_banco
DB_USER=usuario
DB_PASSWORD=senha
DB_HOST=localhost
DB_PORT=5432
```

Executar:

```bash
python manage.py migrate
python manage.py runserver
```

Backend disponível em:  
http://localhost:8000

---

## 🎯 Objetivo do projeto

Aplicação focada em experiência do usuário e organização visual de informações, transformando dados de viagem em uma interface clara, intuitiva e funcional.

---

## 🧠 Destaques técnicos

- Componentização com React
- Tipagem estática com TypeScript
- Gerenciamento de estado com `useState`
- Atualização em tempo real com `useEffect` + `setInterval`
- Estrutura baseada em seções reutilizáveis
- Dados modelados com tipagem forte
- Separação clara entre lógica e apresentação
- Layout responsivo com CSS moderno

---

## 📌 Próximas melhorias

- API para gerenciamento de roteiro e eventos
- Autenticação de usuários
- Painel administrativo
- Cadastro dinâmico de atividades
- Confirmação de presença (RSVP)
- Persistência de dados em banco

---

## 👨‍💻 Autor

Heitor Barbosa Souza  
Desenvolvedor focado em aplicações web modernas, com experiência em backend e evolução para frontend com React e TypeScript.
