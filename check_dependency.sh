#!/bin/bash

rm -rf ./node_modules && npm install && npm run test && npm run build && npm run dev
