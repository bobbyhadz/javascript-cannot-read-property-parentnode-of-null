// Cannot read properties of null (reading 'parentNode') in JS

console.log('bobbyhadz.com');

const content = document.getElementById('content');
console.log(content); // 👉️ div#content

// ✅ Works
const parentNode = content.parentNode;
console.log(parentNode); // 👉️ div
