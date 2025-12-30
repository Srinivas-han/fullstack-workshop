const typeOf = (value) => {
  // Handle null
  if (value === null) return `null`;

  // Handle NaN
  if (typeof value === "number" && Number.isNaN(value)) {
    return `nan`;
  }

  const baseType = typeof value;

  // Primitive types
  const primitiveTypes = [
    "undefined",
    "string",
    "number",
    "boolean",
    "symbol",
    "function"
  ];

  if (primitiveTypes.includes(baseType)) {
    return `${baseType}`; // template literal
  }

  // Complex / built-in types using array method
  const complexTypes = [
    { check: Array.isArray, type: "array" },
    { check: (v) => v instanceof Date, type: "date" },
    { check: (v) => v instanceof Map, type: "map" },
    { check: (v) => v instanceof Set, type: "set" },
    { check: (v) => v instanceof RegExp, type: "regexp" },
    { check: (v) => v instanceof Error, type: "error" },
    { check: (v) => v instanceof Promise, type: "promise" }
  ];

  const match = complexTypes.find(({ check }) => check(value));
  if (match) return `${match.type}`; // template literal

  // Default case
  return `object`;
};

// Test cases
console.log(typeOf(null));                 // "null"
console.log(typeOf(undefined));            // "undefined"
console.log(typeOf(42));                   // "number"
console.log(typeOf(NaN));                  // "nan"
console.log(typeOf("hello"));              // "string"
console.log(typeOf(true));                 // "boolean"
console.log(typeOf(Symbol()));             // "symbol"
console.log(typeOf([]));                   // "array"
console.log(typeOf({}));                   // "object"
console.log(typeOf(() => {}));             // "function"
console.log(typeOf(new Date()));            // "date"
console.log(typeOf(new Map()));             // "map"
console.log(typeOf(new Set()));             // "set"
console.log(typeOf(/regex/));               // "regexp"
console.log(typeOf(new Error()));           // "error"
console.log(typeOf(Promise.resolve()));     // "promise"
