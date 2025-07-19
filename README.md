# 📱 TaskBuddy

**TaskBuddy** is a modern mobile task management app built with React Native (using Expo) that helps users manage their daily tasks efficiently. It features a calendar-based task selector, user authentication with Firebase, task creation, editing, deletion, and real-time sync.

---

## 🚀 Features

- ✅ User Registration and Login (with Firebase Auth)
- 📅 Calendar-style task selector
- 📝 Create, edit, and delete tasks
- 🔔 Mark tasks as complete/incomplete
- 🔄 Real-time task sync (Firestore)
- 🧠 Clean and intuitive UI with reusable components
- 🔒 Secure data storage

---

## 🛠️ Tech Stack

| Tech        | Description                              |
|-------------|------------------------------------------|
| React Native| Cross-platform mobile development        |
| Expo        | Simplified React Native development      |
| Firebase    | Backend services: Auth & Firestore       |
| TypeScript  | Type safety and scalable development     |
| React Navigation | Navigation between app screens     |
| React Native Calendars | Calendar UI for task planning |


## 📦 Project Structure

TaskBuddy/
├── assets/ # Static assets (icons, images)
├── components/ # Reusable UI components
├── constants/ # Global styles and theme
├── hooks/ # Custom hooks
├── screens/ # App screens (Login, Home, Task, etc.)
├── services/ # Firebase and helper services
├── navigation/ # Navigation stack and routing
├── app/ # Entry point with providers
├── firebaseConfig.ts # Firebase setup
├── app.json # Expo config
└── README.md # Project documentation


## 🔧 Setup Instructions

### 1. Prerequisites

- Node.js & npm installed
- Expo CLI: `npm install -g expo-cli`
- Firebase project created

### 2. Clone the Repository

```bash
git clone https://github.com/Molonia2002/TaskBuddy.git
cd TaskBuddy
3. Install Dependencies

npm install
4. Set Up Firebase
Go to Firebase Console

Create a new project

Enable Email/Password in Authentication

Create a Firestore database in test mode

Copy your Firebase config keys

Update firebaseConfig.ts with:


export const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
};
5. Run the App

npx expo start
Scan the QR code with your Expo Go app or run on emulator.

👤 User Flow
Register or login

View task calendar

Create new task for a specific date

View, mark as complete, or delete tasks

Log out

📸 Screenshots
(Include screenshots of Login screen, Home screen, Task calendar, etc.)

🧪 Coming Soon
Push notifications

Google Calendar sync

Dark mode

Offline storage

🛡️ License
This project is licensed under the MIT License.

🙌 Contributing
Pull requests are welcome! If you'd like to contribute:

Fork the repo

Create a branch: git checkout -b feature/my-feature

Commit and push

Open a PR

📬 Contact
Developer: Favour Molonia
GitHub: @Molonia2002
