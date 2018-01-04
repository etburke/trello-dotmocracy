#!/bin/bash
for filename in ./src/*.js; do
  echo $filename
  parcel build --no-minify $filename
done

for filename in `find ./src -name "*.html.js" -type f`; do
  echo $filename
  parcel build --no-minify $filename
done
