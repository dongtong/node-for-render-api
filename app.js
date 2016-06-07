import express from 'express';
import consign from 'consign';

// for supertest
let port = process.env.PORT || (process.argv[2] || 3000);
port = typeof port === 'number' ? port : 3000;

// app
const app = express();

consign()
    .include('libs/config.js')
    .then('libs/middlewares.js')
	.then('routes')
	.then('libs/boot.js')
	.into(app);