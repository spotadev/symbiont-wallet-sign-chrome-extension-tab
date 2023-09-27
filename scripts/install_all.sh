#! /bin/sh

# move out of scripts folder
cd ..

# install dependencies for worker
echo "(1/3) Installing dependencies for worker..."
cd worker
npm install
cd ..

# build content
echo "(2/3) Install depenednecies for content scripts..."
cd content_scripts
npm install
cd app
npm install
cd ../..

# install dependencies for tab
echo "(3/3) Installing dependencies for tab page..."
cd tab
npm install
cd ../scripts

echo "Done."