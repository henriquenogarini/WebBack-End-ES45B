const fs = require('fs');

class Users {
  constructor(filePath) {
    this.users = fs.readFileSync(filePath, 'utf-8')
      .split('\n')
      .map(u => u.trim())
      .filter(Boolean);
  }

  getSortedUsers() {
    return this.users.sort((a, b) => a.localeCompare(b));
  }
}

module.exports = Users;
