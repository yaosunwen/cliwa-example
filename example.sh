#!/usr/bin/env bash

ls "$@"
sleep 10
cat /dev/urandom|base64|tr -cd 'a-zA-Z0-9'|head -c10
echo
sleep 10
cat /dev/urandom|base64|tr -cd 'a-zA-Z0-9'|head -c10
echo
echo 'DONE'
