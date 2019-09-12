#!/bin/bash
cd ~/journal-hugo/content/journal
rm -rf 19* 200* 2010 2011 2012 2013 2014 2015 2016 2017 2018

cd ~/journal-hugo

open http://localhost:1313/

echo "building"
hugo server --watch=true
