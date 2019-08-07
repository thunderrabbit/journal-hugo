#!/bin/bash
cd ~/journal-hugo

open http://localhost:1313/

echo "building"
hugo server --watch=false
