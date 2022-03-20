#!/bin/bash


### Call IBM informix REST API to create userdb

curl --location --request POST 'http://localhost:27018/' \
--header 'Content-Type: application/json' \
--header 'Cookie: informixRestListener.sessionId=YYpXbll576v/TjAkkxSGgxAS0Uqp/ciZgZNwOIQjkXB4VjsU45tnLetzg6cTz1zI' \
--data-raw '{
    name: "userdb"
}'
