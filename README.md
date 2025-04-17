# 📰 News Manager

Gerenciador completo de notícias com frontend em **React** e backend em **NestJS + Prisma + MySQL** via **Docker**.

---

## 📦 Requisitos

- Docker + Docker Compose
- Node.js (recomendado para desenvolvimento local sem containers)
- MySQL (caso use fora do Docker)

---

## 🚀 Rodando tudo com Docker

1. Primeiro você deve clonar esse repo
1. Este comando sobe todos os serviços

```bash
docker-compose up --build
```
Para derrubar o Docker e apagar os volumes, se der Docker stop, as migrations pode conflitar na próxima subida, portanto o ideal é derrubar todos os volumes junto:

```bash
docker-compose down -v
```

Você pode rodar com ```-d``` como detached mode e executar os container em segundo plano

Acesse o frontend em: [http://localhost:3000](http://localhost:3000)  
Acesse a API em: [http://localhost:3001/noticias](http://localhost:3001/noticias)  
Acesse o banco de dados (phpMyAdmin): [http://localhost:8080](http://localhost:8080)

Login da base que sobe através do Prisma Seed no phpMyAdmin:
- **User:** newsmanager
- **Password:** newsmanager
- **Database:** newsmanager
---

## 🛠️ Rodando backend para desenvolvimento

```bash
cd backend
npm install
npm run start:dev
```

### Rodando seeds e migrations manualmente:
```bash
npx prisma generate
npx prisma migrate dev --name init
npm run seed
```

---

## 🧹 Limpando e refazendo as migrations

```bash
rm -rf prisma/migrations
npx prisma migrate reset
```

---

## 💻 Rodando frontend isolado para desenvolvimento

```bash
cd frontend
npm install
npm run dev
```

> A API precisa estar rodando em `http://localhost:3001`

---

## 📁 Estrutura do projeto

```bash
/backend     => NestJS + Prisma
/frontend    => React + Tailwind
/docker      => docker-compose + MySQL + phpMyAdmin
```

---

## Tests unitários

```bash
cd frontend
npm run test
``

```bash
cd backend
npm run test
``