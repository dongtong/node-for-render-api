import fs from 'fs';
import winston from 'winston';

// If logs directory does not exist, then create it under root
if(!fs.existsSync('logs')) {
	fs.mkdirSync('logs');
}

module.exports = new winston.Logger({
		transports: [
			new winston.transports.File({
				level: 'info',
				filename: 'logs/app.log',
				maxsize: 1048576,
				maxFiles: 10,
				colorize: false
			})
		]
	});