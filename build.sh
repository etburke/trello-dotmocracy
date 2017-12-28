#!/bin/bash
for filename in ./src/*.js; do
  echo $filename
  parcel build --no-minify $filename
done
