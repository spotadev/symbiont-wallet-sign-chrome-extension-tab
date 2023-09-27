#! /bin/sh

# move out of scripts folder
cd ..

if [ -d node_modules ]
then
  echo "deleting node_modules"
  rm -fr node_modules
  echo "done deleting node_modules"
else
  echo "No node_modules to delete"
fi

if [ -d content_scripts/app/node_modules ]
then
  echo "deleting content_scripts/app/node_modules"
  rm -fr content_scripts/app/node_modules
  echo "done deleting content_scripts/app/node_modules"
else
  echo "No content_scripts/app/node_modules to delete"
fi

if [ -d tab/node_modules ]
then
  echo "deleting tab/node_modules"
  rm -fr tab/node_modules
  echo "done deleting tab/node_modules"
else
  echo "No tab/node_modules to delete"
fi

if [ -d worker/node_modules ]
then
  echo "deleting worker/node_modules"
  rm -fr worker/node_modules
  echo "done deleting worker/node_modules"
else
  echo "No worker/node_modules to delete"
fi

cd scripts