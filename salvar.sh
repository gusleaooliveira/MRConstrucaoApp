#!/usr/bin/env bash

git init
# https://github.com/gusleaooliveira/MRConstrucoesApp.git
git remote add origin git@github.com:gusleaooliveira/MRConstrucoesApp.git
git add .
git commit -m "alteração feita em:$(date +%d/%m/%Y-%k:%M:%S)"
git push -u origin master
