cp package.json build/package.json
cp .env build/.env 
cp knexfile.js build/knexfile.js 
cp -R migrations build/migrations
cd build 
npm install --only=production