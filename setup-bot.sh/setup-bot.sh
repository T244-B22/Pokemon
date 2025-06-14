bash
#!/bin/bash
Met à jour Termux, installe Node.js et lance le bot

pkg update -y && pkg upgrade -y
pkg install nodejs -y
npm install
node index.js
```
