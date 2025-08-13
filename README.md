# DevConnector

DevConnector is a social platform for developers to **connect, share ideas, and collaborate**.  
It features **user authentication**, **profile management**, and **post sharing** — built with a **React + Redux** frontend and a **Django** backend.

---

## 🚀 Features

- **User Authentication**
  - Secure register, login, and logout
  - Token-based authentication (JWT)
- **Developer Profiles**
  - Create and update your profile
  - Add skills, bio, and social links
- **Posts & Interaction**
  - Create, edit, and delete posts
  - Like and comment on posts
- **Developer Networking**
  - Explore other developers’ profiles and connect

---

## 🛠 Tech Stack

**Frontend**
- React
- Redux Toolkit
- Axios

**Backend**
- Django
- Django REST Framework (DRF)
- JWT Authentication

**Database**
- PostgreSQL (SQLite for development)

---

## 📦 Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/DevConnector.git
cd DevConnector
```
2️⃣ Backend Setup (Django)

```bash
cd backend
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```
3️⃣ Frontend Setup (React + Redux)
```bash
cd ../frontend
npm install
npm start
