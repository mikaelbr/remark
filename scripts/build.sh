#!/bin/bash

set -e

rm -rf build
mkdir -p build
./node_modules/.bin/lessc --no-ie-compat lib/bekk.less > build/bekk.css