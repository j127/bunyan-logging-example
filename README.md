# A Quick Example of Logging in Bunyan (Node.js)

Installing it: clone the repo and run `npm i`

Running it:

1. `npm start` to run the program. It just prints out human readable log.
2. `npm run logs:errors` to view the human readable `warn`/`error` logs (omitting the `info` level)
3. `npm run logs:raw` to view all the raw logs in JSON format.
4. `npm run logs:delete` to delete the log file.

Type `npm run` to see a list of scripts and what they do.

## Examples

Logging to console:

```text
$ npm start

[2018-06-25T22:23:16.548Z]  INFO: main/29928 on 12345abc: application starting
[2018-06-25T22:23:16.550Z]  WARN: main/29928 on 12345abc: don't do that
[2018-06-25T22:23:16.551Z]  INFO: main/29928 on 12345abc: user logged in (username="Alice Bobsdottir", hitPoints=127)
[2018-06-25T22:23:16.551Z] ERROR: main/29928 on 12345abc: there was an error (problem="something broke")
[2018-06-25T22:23:16.551Z]  INFO: main/29928 on 12345abc: finished
```

Getting warnings and errors from the logfile:

```
$ npm run logs:errors

[2018-06-25T22:20:15.490Z]  WARN: main/29459 on 12345abc: don't do that
[2018-06-25T22:20:15.490Z] ERROR: main/29459 on 12345abc: there was an error (problem="something broke")
[2018-06-25T22:23:16.550Z]  WARN: main/29928 on 12345abc: don't do that
```

Viewing the raw JSON logs:

```
$ npm run logs:raw

{"name":"main","hostname":"12345abc","pid":29459,"level":30,"msg":"application starting","time":"2018-06-25T22:20:15.488Z","v":0}
{"name":"main","hostname":"12345abc","pid":29459,"level":40,"msg":"don't do that","time":"2018-06-25T22:20:15.490Z","v":0}
{"name":"main","hostname":"12345abc","pid":29459,"level":30,"username":"Alice Bobsdottir","hitPoints":127,"msg":"user logged in","time":"2018-06-25T22:20:15.490Z","v":0}
{"name":"main","hostname":"12345abc","pid":29459,"level":50,"problem":"something broke","msg":"there was an error","time":"2018-06-25T22:20:15.490Z","v":0}
{"name":"main","hostname":"12345abc","pid":29459,"level":30,"msg":"finished","time":"2018-06-25T22:20:15.490Z","v":0}
{"name":"main","hostname":"12345abc","pid":29928,"level":30,"msg":"application starting","time":"2018-06-25T22:23:16.548Z","v":0}
{"name":"main","hostname":"12345abc","pid":29928,"level":40,"msg":"don't do that","time":"2018-06-25T22:23:16.550Z","v":0}
{"name":"main","hostname":"12345abc","pid":29928,"level":30,"username":"Alice Bobsdottir","hitPoints":127,"msg":"user logged in","time":"2018-06-25T22:23:16.551Z","v":0}
{"name":"main","hostname":"12345abc","pid":29928,"level":50,"problem":"something broke","msg":"there was an error","time":"2018-06-25T22:23:16.551Z","v":0}
{"name":"main","hostname":"12345abc","pid":29928,"level":30,"msg":"finished","time":"2018-06-25T22:23:16.551Z","v":0}
```
