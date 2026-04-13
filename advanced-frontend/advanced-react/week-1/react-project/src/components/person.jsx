export function Person() {
  const name = "Albert";
  const age = 15;
  if (age > 18) {
    return `${name} is an adult`;
  } else {
    return `${name} is a minor`;
  }
}
