echo "# faker_fingerprint" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/baofu8001/faker_fingerprint.git
git push -u origin main


npm init -y
npm install useragent chrome-extension systeminformation i18next font-manager electron moment-timezone axios faker seedrandom webpack --save