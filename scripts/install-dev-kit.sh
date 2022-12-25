echo "Axe API Dev Kit -- Version 1.0\n"

# Delete the axe-api directory
if [ -d "./axe-api" ] 
then
  read -p "-> 'axe-api' folder is exists. Would you like to DELETE it (y/N)?" -n 1 -r
  echo
  if [[ $REPLY =~ ^[Yy]$ ]]
  then
    rm -rf axe-api
    echo "-> 'axe-api' folder has been deleted."
  fi
fi

# Delete the dev-kit directory
if [ -d "./dev-kit" ] 
then
  read -p "-> 'dev-kit' folder is exists. Would you like to DELETE it (y/N)?" -n 1 -r
  echo
  if [[ $REPLY =~ ^[Yy]$ ]]
  then
    rm -rf dev-kit
    echo "-> 'dev-kit' folder has been deleted."
  fi
fi

# Ask the forked repository url
echo "-> What is the SSH URL of the forked repository (git@github.com:user/axe-api.git): "
read -r forked

echo "\n"

# Pull the repositories
git clone $forked
echo "\n"

git clone git@github.com:axe-api/dev-kit.git
echo "\n"

# Install dependencies
cd axe-api && npm install
cd ../dev-kit && npm install

echo "\n"

echo "-> Axe API development environment is ready!\n\n"