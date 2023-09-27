# Define a function to check the exit status of a command
check_command() {
  if [ $? -ne 0 ]; then
    echo "Command failed, stopping script."
    cd ../scripts
    kill -INT $$
  fi
}

# move out of scripts
cd ..

cd tab
echo "Building tab and copying tab files to main build directory ..."
npm run build
check_command
cp -f build/index.html ../build/tab.html
cp -f build/tab-main.js ../build/tab-main.js

# move back into scripts
cd ../scripts