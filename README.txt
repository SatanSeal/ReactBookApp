to run the app:
1) first terminal: cd server && node server
2) second terminal: cd client && npm start

for run on server:
1) cd client && npm run build
2) cd .. && node server

DBs Structure:
    bookDB:
        id: serial primary
        title: text
        description: text
        admin: boolean
    UserDB:
        id: serial primary
        username: text
        email: text
        password: text
