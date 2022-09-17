export const Greeter = (name: string) => `Hello ${name}`;

interface Property<T> {
  key: string;
  value: T;
}

class SortedObject<T> {
  private object: Property<T>[] = [];
  constructor(object?: { [key: string]: T }) {
    if (!object) return;
    Object.keys(object).forEach((key) => {
      this.object.push({ key, value: object[key] });
    });
  }
  log() {
    console.log(this.object);
  }

  push({ key, value }: { key: string; value: T }) {
    this.object.push({ key, value });
  }
  unshift({ key, value }: { key: string; value: T }) {
    this.object.unshift({ key, value });
  }
  shift() {
    return this.object.shift();
  }
  pop() {
    return this.object.pop();
  }
  get(key: string) {
    return this.object.find((prop) => prop.key === key);
  }
  keyOf(value: T) {
    return this.object.find((prop) => prop.value === value)?.key;
  }

  slice(start: number, end?: number) {
    this.object = this.object.slice(start, end);
  }
  splice(start: number, deleteCount: number, ...items: Property<T>[]) {
    return this.object.splice(start, deleteCount, ...items);
  }

  sort(sortFn?: (a: Property<T>, b: Property<T>) => number) {
    this.object = this.object.sort(sortFn);
  }
  foreach(callback: (prop: Property<T>, index: number) => void) {
    this.object.forEach(callback);
  }
  map(callback: (prop: Property<T>, index: number) => Property<T>) {
    this.object = this.object.map(callback);
  }
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
