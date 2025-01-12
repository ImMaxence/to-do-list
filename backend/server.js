import express from 'express';
import session from 'express-session';
import passport from './configurations/passportConfig.js';
import sequelize from './configurations/dbConfig.js';
import authRoutes from './routes/authRoutes.js';
import dotenv from 'dotenv';
import { ensureAuthenticated } from './middlewares/ensureAuthenticated.js';
import cors from 'cors';

dotenv.config();

const app = express();

app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}));

app.use(session({ secret: process.env.SESSION_SECRET, resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/auth', authRoutes);

app.get('/profile', ensureAuthenticated, (req, res) => {
    console.log('User:', req.user);
    res.send(req.user);
});

app.listen(3001, async () => {
    await sequelize.sync();
    console.log('server started');
});