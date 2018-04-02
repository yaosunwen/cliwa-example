'use strict'

const {createLogger, format, transports} = require('winston');
const { combine, timestamp, label, splat, printf } = format;

function printformat(info) {
    return `${info.timestamp} [${info.level}] ${info.message}`;
}

const logger = new createLogger({
    format: combine(
        timestamp(),
        splat(),
        printf(printformat)
    ),
    transports: [
        // new transports.File({
        //     level: 'info',
        //     filename: './logs/app.log',
        //     handleExceptions: true,
        //     json: true,
        //     maxsize: 1024*1024*1024, //1G
        //     maxFiles: 10,
        //     colorize: false
        // }),
        new transports.Console({
            level: 'debug',
            handleExceptions: true,
            json: false,
            colorize: false
        })
    ],
    exitOnError: false
});

module.exports = {
    logger
};
