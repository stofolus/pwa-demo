class DatabaseImpl {
  private LOCAL_STORAGE_KEY = 'PWA-DEMO';
  private fallbackStorage = {
    data: {} as {[key: string]: string},
    setItem: function(key: string, value: string) {
      this.data[key] = value;
    },
    getItem: function(key: string) {
      return this.data[key];
    }
  };

  set(key: string, value: any) {
    const stringifiedValue = JSON.stringify(value);
    if(!window.localStorage) {
      this.fallbackStorage.setItem(key, stringifiedValue);
      return;
    }
    window.localStorage.setItem(key, stringifiedValue);
  }

  get(key: string) {
    if(!window.localStorage) {
      return JSON.parse(this.fallbackStorage.getItem(key) || '{}');
    }
    return JSON.parse(window.localStorage.getItem(key) || '{}' );
  }
}

export const Database = new DatabaseImpl();