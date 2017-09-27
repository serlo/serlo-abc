#!/bin/bash
mv app.travis.json app.json
yarn exp:login -- --non-interactive --username $1 --password $2
yarn exp:publish -- --non-interactive
