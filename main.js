const bunyan = require('bunyan');

const log = bunyan.createLogger({
    name: 'main',
    streams: [
        // print info and above to console
        {
            level: 'info',
            stream: process.stdout
        },
        // also save to file
        {
            level: 'info',
            path: `${__dirname}/log/application.log`
        }
    ]
});

const userObj = { username: 'Alice Bobsdottir', hitPoints: 127 };
const err = { problem: 'something broke' };

// log some things
log.info('application starting');
log.warn("don't do that");
log.info(userObj, 'user logged in');
log.error(err, 'there was an error');
log.info('finished');
