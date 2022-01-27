export class Registry {
    #storage = {};
    
    get(key) {
        if (!this.#storage.hasOwnProperty(key)) {
            throw new Error(`Class ${key} hasn't instance yet!`); 
        }
        return this.#storage[key];
    }

    set(key, value) {
        if (!this.#storage.hasOwnProperty(key)) {
            this.#storage[key] = value;
        }
    }
}