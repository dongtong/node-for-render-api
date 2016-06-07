/**
 * Express Middlewares
 */
import path from 'path';
import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';
import logger from './logger.js';
import morgan from 'morgan';
import compression from 'compression';
import template from 'art-template';

module.exports = app => {

	// for supertest
	let port = process.env.PORT || (process.argv[2] || 3000);
	port = typeof port === 'number' ? port : 3000;

    app.set('port', port);
    app.set('json spaces', 4);
    
    // set art-template engine
    // =========================>
    // express 4.x base and extname should be ''
    template.config('base', '');
    template.config('extname', '');
    app.engine('.html', template.__express);
    app.set('view engine', '.html');
    app.set('views', path.join(path.dirname(__dirname), '/views'));
    // =========================>

    // for parsing application/json
    app.use(bodyParser.json());
    // for parsing application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({
    	extended: false
    }));

    // use cors middleware
    app.use(cors({
    	//origin: ["http://limitedDSN.com"],
    	methods: ['GET'],
    	allowedHeaders: ["Content-Type", "Authorization"]
    }));

    // logger
    app.use(morgan('common', {
    	stream: {
    		write: (msg) => {
    			logger.info(msg);
    		}
    	}
    }));

    // Gzip content to reduce request content size
    app.use(compression());

    // auth TODO
    
    // express deal with request
    // before filter
    app.use((req, res, next) => {
    	//req.body.id could overwrite the id of a model. for example, on update or create a user
		delete req.body.id;
		next();
    });

    app.use(express.static(path.dirname(__dirname) + '/public'));
    app.use(express.static(path.dirname(__dirname) + '/views'));

}
