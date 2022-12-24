cp package.json .env knexfile.js Dockerfile build/
cp -R migrations build/migrations
cd build 
npm install --only=production