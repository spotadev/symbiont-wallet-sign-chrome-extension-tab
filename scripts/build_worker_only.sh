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

cd worker
echo "Building worker and copying files to main build directory ..."
npm run build
check_command
cp build/background.js ../build

# move back into scripts
cd ../scripts
