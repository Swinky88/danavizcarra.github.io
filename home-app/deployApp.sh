#!/bin/bash

echo "Copying Files from dist"
rm ../*.js
rm ../*.css
rm ../*.html
cp ./dist/home-app/* ../

