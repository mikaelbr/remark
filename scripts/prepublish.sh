#!/bin/bash

set -e

rm -r build
mkdir -p build
./node_modules/.bin/lessc --no-ie-compat lib/bekk.less > build/bekk.css