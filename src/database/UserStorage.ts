import { Database } from "./Database";

interface User {
  name: string;
  password: string;
}

class UserStorageImpl {
  private STORAGE_KEY = "USERS";

  private getAllUsers(): User[] {
    const users = Database.get(this.STORAGE_KEY);
    if (!Array.isArray(users)) {
      return [];
    }
    return users;
  }

  addUser(user: User) {
    if (this.getUser(user.name)) {
      return false;
    }
    const users = this.getAllUsers();
    users.push(user);
    Database.set(this.STORAGE_KEY, users);
  }
  private getUser(username: string): User | null {
    return this.getAllUsers().find(user => user.name === username) || null;
  }

  login(username: string, password: string) {
    const user = this.getUser(username);
    if (user && user.password === password) {
      return user;
    }
    return null;
  }
}

export const UserStorage = new UserStorageImpl();
