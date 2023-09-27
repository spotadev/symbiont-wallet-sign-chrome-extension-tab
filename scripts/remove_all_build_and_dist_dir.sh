#! /bin/sh

# move out of scripts folder
cd ..

if [ -d build ]
then
  echo "deleting build"
  rm -fr build
  echo "done deleting build"
else
  echo "No build to delete"
fi

if [ -d content_scripts/dist ]
then
  echo "deleting content_scripts/dist"
  rm -fr content_scripts/dist
  echo "done deleting content_scripts/dist"
else
  echo "No content_scripts/dist to delete"
fi

if [ -d content_scripts/app/build ]
then
  echo "deleting content_scripts/app/build"
  rm -fr content_scripts/app/build
  echo "done deleting content_scripts/app/build"
else
  echo "No content_scripts/app/build to delete"
fi

if [ -d tab/build ]
then
  echo "deleting tab/build"
  rm -fr tab/build
  echo "done deleting tab/build"
else
  echo "No tab/build to delete"
fi

if [ -d worker/build ]
then
  echo "deleting worker/build"
  rm -fr worker/build
  echo "done deleting worker/build"
else
  echo "No worker/build to delete"
fi

cd scripts