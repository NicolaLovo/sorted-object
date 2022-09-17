export const Greeter = (name: string) => `Hello ${name}`;

interface Property<T> {
  key: string;
  value: T;
}
interface PropertyMap<T> {
  [key: string]: T;
}

class SortedObject<T> {
  private object: Property<T>[] = [];
  /**
   * Create a new Sorted object
   * @param  PropertyMap<T> object? [optional]: an object to create the SortedObject from
   */
  constructor(object?: PropertyMap<T>) {
    if (!object) return;
    Object.keys(object).forEach((key) => {
      this.object.push({ key, value: object[key] });
    });
  }
  /**
   * Print the contents of the SortedObject
   */
  log() {
    console.log(this.object);
  }

  /**
   * Add an item to the end of the SortedObject
   * @param Property<T> object: the object to add
   */
  push({ key, value }: { key: string; value: T }) {
    this.object.push({ key, value });
  }

  /**
   * Add an item to the beginning of the SortedObject
   * @param Property<T> object: the object to add
   */
  unshift({ key, value }: { key: string; value: T }) {
    this.object.unshift({ key, value });
  }

  /**
   * Remove the first item of the sorted object
   * @returns Property<T> the removed item
   */
  shift() {
    return this.object.shift();
  }

  /**
   * Remove the last item of the sorted object
   * @returns Property<T> the removed item
   */
  pop() {
    return this.object.pop();
  }

  /**
   * Get the value of a key
   * @returns T the value of the key
   */
  get(key: string) {
    return this.object.find((prop) => prop.key === key);
  }

  /**
   * Get the first key that matches the value
   * @returns string the key
   */
  keyOf(value: T) {
    return this.object.find((prop) => prop.value === value)?.key;
  }

  /**
   * Get the keys of the sorted object
   * @returns string[] the keys of the object
   */
  getKeys() {
    return this.object.map((prop) => prop.key);
  }
  /**
   * Get the values of the object
   * @returns PropertyMap<T>[] the values of the object
   */
  getValues() {
    return this.object.map((prop) => prop.value);
  }

  /**
   * [like array.splice] Remove and replace items in the SortedObject
   * @param start number the index to start at
   * @param deleteCount number the number of items to delete
   * @param items Property<T>[] the items to add
   * @returns Property<T>[] the deleted items
   */
  splice(start: number, deleteCount: number, ...items: Property<T>[]) {
    return this.object.splice(start, deleteCount, ...items);
  }

  /**
   * Get the length of the SortedObject
   * @returns number the length of the SortedObject
   */
  lenght() {
    return this.object.length;
  }

  /**
   * Sort the contents of the SortedObject
   * @param  {(a:Property<T>,b:Property<T>)=>number} sortFn? The sorting function to apply
   */
  sort(sortFn?: (a: Property<T>, b: Property<T>) => number) {
    this.object = this.object.sort(sortFn);
  }

  /**
   * Execute a function for each item in the SortedObject (does NOT mutate the object)
   * @param  {(prop:Property<T>,index:number)=>void} callback Callback function to execute
   */
  foreach(callback: (prop: Property<T>, index: number) => void) {
    this.object.forEach(callback);
  }

  /**
   * Map the contents of the SortedObject applying the callback to each one of them (MUTATES the object)
   * @param  {(prop:Property<T>,index:number)=>Property<T>} callback Callback function to execute
   */
  map(callback: (prop: Property<T>, index: number) => Property<T>) {
    this.object = this.object.map(callback);
  }

  /**
   * Filter the contents of the SortedObject applying the callback to each one of them (MUTATES the object)
   * @param  {(prop:Property<T>,index:number)=>boolean} callback Callback function to execute
   */
  filter(callback: (prop: Property<T>, index: number) => boolean) {
    this.object = this.object.filter(callback);
  }
}

const obj = new SortedObject<number>({ a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10 });
// obj.push({ key: 'a', value: 3 });
// obj.push({ key: 'b', value: 2 });
// obj.push({ key: 'c', value: 8 });
console.log(obj.keyOf(4));

// obj.sort((a, b) => a.value - b.value);
// obj.map(({ key, value }, index) => {
//   return { key, value: value + Math.floor(Math.random() * 10) };
// });
// obj.log();
// obj.sort((a, b) => a.value - b.value);
// obj.log();
