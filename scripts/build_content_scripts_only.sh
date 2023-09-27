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

# build content
echo "Building content scripts and copying files to main build directory ..."
cd content_scripts
cp content-root.css ../build/content-root.css
npm run build
cp dist/* ../build
check_command_1
cd app
npm run build
check_command_2
cp build/content-main.js ../../build/content-react.js

# move back into scripts
cd ../../scripts

echo "Done"