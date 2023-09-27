#! /bin/sh

# Define a function to check the exit status of a command
check_command_1() {
  if [ $? -ne 0 ]; then
    echo "Command failed, stopping script."
    cd ../scripts
    kill -INT $$
  fi
}

check_command_2() {
  if [ $? -ne 0 ]; then
    echo "Command failed, stopping script."
    cd ../../scripts
    kill -INT $$
  fi
}

# move out of scripts folder
cd ..

# cleanup
echo "(1/7) Preparing..."
if [ -d build ]
then
  rm -rf build
  echo "Deleted build"
else
  echo "build directory does not exist so did not delete it"
fi

mkdir build

# add meta files
cp manifest.json build/manifest.json
cp *.png build

# build worker
echo "(1/3) Building worker scripts ..."
cd worker
npm run build
check_command_1
cp build/background.js ../build
cd ..

# build content
echo "(2/3) Building content scripts ..."
cd content_scripts
cp content-root.css ../build/content-root.css
npm run build
cp dist/* ../build
check_command_1
cd app
npm run build
check_command_2
cp build/content-main.js ../../build/content-react.js
cd ../..

# build tab
echo "(3/3) Building tab page ..."
cd tab
npm run build
check_command_1
cp build/index.html ../build/tab.html
cp build/tab-main.js ../build/tab-main.js

# move back into scripts
cd ../scripts

echo "Done"