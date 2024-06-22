
const chainingExamples = [
    {
        name: "Double even numbers and sum",
        description: "Filter even numbers, double them, then sum the result",
        code: "arr.filter(x => x % 2 === 0).map(x => x * 2).reduce((acc, curr) => acc + curr, 0)"
    },
    {
        name: "Find first prime number over 100",
        description: "Filter numbers over 100, then find the first prime number",
        code: "arr.filter(x => x > 100).find(x => { for(let i = 2; i <= Math.sqrt(x); i++) if(x % i === 0) return false; return x > 1; })"
    },
    {
        name: "Count unique values",
        description: "Map to unique values, filter out duplicates, then count",
        code: "arr.map(x => x).filter((value, index, self) => self.indexOf(value) === index).length"
    },
    {
        name: "Sum of squares of odd numbers",
        description: "Filter odd numbers, square them, then sum the results",
        code: "arr.filter(x => x % 2 !== 0).map(x => x * x).reduce((acc, curr) => acc + curr, 0)"
    },
    {
        name: "Capitalize and join words",
        description: "Filter non-empty strings, capitalize first letter, then join",
        code: "arr.filter(x => x.trim() !== '').map(x => x.charAt(0).toUpperCase() + x.slice(1)).join(' ')"
    },
    {
        name: "Factorial of max even number",
        description: "Find max even number and calculate its factorial",
        code: "arr.filter(x => x % 2 === 0).reduce((max, curr) => Math.max(max, curr), 0).toString().split('').reduce((fact, digit) => fact * (parseInt(digit) || 1), 1)"
    },
    {
        name: "Reverse sort unique squared numbers",
        description: "Square numbers, keep unique values, sort in descending order",
        code: "arr.map(x => x * x).filter((value, index, self) => self.indexOf(value) === index).sort((a, b) => b - a)"
    },
    {
        name: "Sum of digits of positive numbers",
        description: "Filter positive numbers, sum their digits, then sum results",
        code: "arr.filter(x => x > 0).map(x => x.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0)).reduce((acc, curr) => acc + curr, 0)"
    },
    {
        name: "Product of prime numbers",
        description: "Filter prime numbers and calculate their product",
        code: "arr.filter(x => { for(let i = 2; i <= Math.sqrt(x); i++) if(x % i === 0) return false; return x > 1; }).reduce((product, prime) => product * prime, 1)"
    },
    {
        name: "Longest word length",
        description: "Find the length of the longest word in the array",
        code: "arr.filter(x => typeof x === 'string').map(x => x.length).reduce((max, length) => Math.max(max, length), 0)"
    },
    {
        name: "Average of numbers divisible by 3",
        description: "Calculate the average of numbers divisible by 3",
        code: "arr.filter(x => x % 3 === 0).reduce((acc, curr, idx, arr) => idx === arr.length - 1 ? (acc + curr) / arr.length : acc + curr, 0)"
    },
    {
        name: "Concatenate alternating elements",
        description: "Concatenate elements at even indices, then odd indices",
        code: "arr.filter((_, i) => i % 2 === 0).concat(arr.filter((_, i) => i % 2 !== 0)).join('')"
    },
    {
        name: "Sum of ASCII values of uppercase letters",
        description: "Filter uppercase letters, convert to ASCII, and sum",
        code: "arr.filter(x => typeof x === 'string' && x.length === 1 && x === x.toUpperCase()).map(x => x.charCodeAt(0)).reduce((sum, ascii) => sum + ascii, 0)"
    },
    {
        name: "Product of numbers with digital root 7",
        description: "Filter numbers with digital root 7, calculate their product",
        code: "arr.filter(x => x.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0) % 9 === 7).reduce((product, num) => product * num, 1)"
    },
    {
        name: "Reverse words and sort by length",
        description: "Reverse each word, then sort by length descending",
        code: "arr.filter(x => typeof x === 'string').map(x => x.split('').reverse().join('')).sort((a, b) => b.length - a.length)"
    },
    {
        name: "Sum of perfect squares less than 100",
        description: "Filter perfect squares less than 100, then sum",
        code: "arr.filter(x => Math.sqrt(x) % 1 === 0 && x < 100).reduce((sum, square) => sum + square, 0)"
    },
    {
        name: "Concatenate strings with vowel count",
        description: "Filter strings, add vowel count, concatenate",
        code: "arr.filter(x => typeof x === 'string').map(x => `${x}(${(x.match(/[aeiou]/gi) || []).length})`).join('-')"
    },
    {
        name: "Product of numbers with unique digits",
        description: "Filter numbers with all unique digits, calculate product",
        code: "arr.filter(x => new Set(x.toString().split('')).size === x.toString().length).reduce((product, num) => product * num, 1)"
    },
    {
        name: "Longest palindrome",
        description: "Find the longest palindrome in the array",
        code: "arr.filter(x => typeof x === 'string' && x === x.split('').reverse().join('')).reduce((longest, current) => current.length > longest.length ? current : longest, '')"
    },
    {
        name: "Sum of numbers with prime digit sum",
        description: "Filter numbers whose digit sum is prime, then sum them",
        code: "arr.filter(x => { let sum = x.toString().split('').reduce((s, d) => s + parseInt(d), 0); for(let i = 2; i <= Math.sqrt(sum); i++) if(sum % i === 0) return false; return sum > 1; }).reduce((acc, curr) => acc + curr, 0)"
    },
    {
        name: "Alternate sum and product",
        description: "Alternate between summing and multiplying elements",
        code: "arr.reduce((result, curr, idx) => idx % 2 === 0 ? result + curr : result * curr, 0)"
    },
    {
        name: "Fibonacci-like sequence sum",
        description: "Generate Fibonacci-like sequence and sum elements",
        code: "arr.slice(0, 2).concat(arr.slice(2).map((_, i, a) => a[i] + a[i+1])).reduce((sum, num) => sum + num, 0)"
    },
    {
        name: "Cumulative product of prime factors",
        description: "Calculate cumulative product of prime factors for each number",
        code: "arr.map(x => { let factors = []; for(let i = 2; i <= x; i++) while(x % i === 0) { factors.push(i); x /= i; } return factors; }).map(factors => factors.reduce((product, factor) => product * factor, 1)).reduce((acc, curr) => acc * curr, 1)"
    },
    {
        name: "Alternating case concatenation",
        description: "Alternate uppercase and lowercase for each character in strings",
        code: "arr.filter(x => typeof x === 'string').map(x => x.split('').map((char, i) => i % 2 === 0 ? char.toUpperCase() : char.toLowerCase()).join('')).join('')"
    },
    {
        name: "Sum of numbers with palindromic squares",
        description: "Filter numbers whose squares are palindromes, then sum",
        code: "arr.filter(x => { let square = x * x; return square.toString() === square.toString().split('').reverse().join(''); }).reduce((sum, num) => sum + num, 0)"
    },
    {
        name: "Product of numbers with prime indices",
        description: "Multiply numbers at prime indices in the array",
        code: "arr.filter((_, i) => { for(let j = 2; j <= Math.sqrt(i); j++) if(i % j === 0) return false; return i > 1; }).reduce((product, num) => product * num, 1)"
    },
    {
        name: "Longest increasing subsequence length",
        description: "Find the length of the longest increasing subsequence",
        code: "arr.reduce((lis, num) => { let i = lis.findIndex(x => x >= num); if (i === -1) lis.push(num); else lis[i] = num; return lis; }, []).length"
    },
    {
        name: "Sum of numbers with binary palindrome representation",
        description: "Filter numbers whose binary representation is a palindrome, then sum",
        code: "arr.filter(x => { let binary = x.toString(2); return binary === binary.split('').reverse().join(''); }).reduce((sum, num) => sum + num, 0)"
    },
    {
        name: "Product of numbers with Collatz sequence length > 10",
        description: "Filter numbers with Collatz sequence length > 10, calculate product",
        code: "arr.filter(x => { let count = 0, n = x; while(n !== 1) { n = n % 2 === 0 ? n / 2 : 3 * n + 1; count++; } return count > 10; }).reduce((product, num) => product * num, 1)"
    },
    {
        name: "Concatenate strings with character frequency",
        description: "For each string, add most frequent character and its count",
        code: "arr.filter(x => typeof x === 'string').map(x => { let freq = {}; x.split('').forEach(c => freq[c] = (freq[c] || 0) + 1); let max = Math.max(...Object.values(freq)); let char = Object.keys(freq).find(k => freq[k] === max); return `${x}(${char}:${max})`; }).join('-')"
    },
    {
        name: "Sum of numbers with prime factor sum equal to length",
        description: "Filter numbers where sum of prime factors equals string length, then sum",
        code: "arr.filter(x => { let sum = 0, n = x; for(let i = 2; i <= n; i++) while(n % i === 0) { sum += i; n /= i; } return sum === x.toString().length; }).reduce((acc, curr) => acc + curr, 0)"
    },
    {
        name: "Product of numbers with digit product equal to length",
        description: "Filter numbers where product of digits equals string length, then multiply",
        code: "arr.filter(x => x.toString().split('').reduce((product, digit) => product * (parseInt(digit) || 1), 1) === x.toString().length).reduce((product, num) => product * num, 1)"
    },
    {
        name: "Concatenate strings with vowel-consonant ratio",
        description: "Add vowel-consonant ratio to each string and concatenate",
        code: "arr.filter(x => typeof x === 'string').map(x => { let v = (x.match(/[aeiou]/gi) || []).length; let c = (x.match(/[bcdfghjklmnpqrstvwxyz]/gi) || []).length; return `${x}(${v}:${c})`; }).join('-')"
    },
    {
        name: "Sum of numbers with prime digit average",
        description: "Filter numbers with prime average of digits, then sum",
        code: "arr.filter(x => { let avg = x.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0) / x.toString().length; for(let i = 2; i <= Math.sqrt(avg); i++) if(avg % i === 0) return false; return avg > 1; }).reduce((sum, num) => sum + num, 0)"
    },
    {
        name: "Product of numbers with ascending digits",
        description: "Filter numbers with digits in ascending order, calculate product",
        code: "arr.filter(x => x.toString().split('').every((digit, i, arr) => i === 0 || digit >= arr[i-1])).reduce((product, num) => product * num, 1)"
    },
    {
        name: "Concatenate strings with character range",
        description: "Add character range (lowest to highest) for each string",
        code: "arr.filter(x => typeof x === 'string').map(x => { let chars = x.split('').sort(); return `${x}(${chars[0]}-${chars[chars.length-1]})`; }).join('-')"
    },
    {
        name: "Sum of numbers with prime index sum",
        description: "Filter numbers where sum of prime indices of digits is prime, then sum",
        code: "arr.filter(x => { let sum = x.toString().split('').reduce((s, d, i) => { for(let j = 2; j <= Math.sqrt(i); j++) if(i % j === 0) return s; return i > 1 ? s + parseInt(d) : s; }, 0); for(let i = 2; i <= Math.sqrt(sum); i++) if(sum % i === 0) return false; return sum > 1; }).reduce((acc, curr) => acc + curr, 0)"
    },
    {
        name: "Product of numbers with digit XOR equal to length",
        description: "Filter numbers where XOR of digits equals string length, then multiply",
        code: "arr.filter(x => x.toString().split('').reduce((xor, digit) => xor ^ parseInt(digit), 0) === x.toString().length).reduce((product, num) => product * num, 1)"
    },
    {
        name: "Concatenate strings with palindrome substrings count",
        description: "Add count of palindrome substrings to each string and concatenate",
        code: "arr.filter(x => typeof x === 'string').map(x => { let count = 0; for(let i = 0; i < x.length; i++) for(let j = i; j < x.length; j++) if(x.slice(i, j+1) === x.slice(i, j+1).split('').reverse().join('')) count++; return `${x}(${count})`; }).join('-')"
    },
    {
        name: "Analyze text complexity",
        description: "Split text into words, calculate average word length, count unique words, and determine text complexity score",
        code: `
            arr.join(' ').toLowerCase().split(/\\W+/)
               .filter(word => word.length > 0)
               .reduce((acc, word) => {
                   acc.totalLength += word.length;
                   acc.wordCount++;
                   acc.uniqueWords.add(word);
                   return acc;
               }, { totalLength: 0, wordCount: 0, uniqueWords: new Set() })
               .then(result => ({
                   avgWordLength: result.totalLength / result.wordCount,
                   uniqueWordCount: result.uniqueWords.size,
                   complexityScore: (result.totalLength / result.wordCount) * (result.uniqueWords.size / result.wordCount)
               }))
        `
    },
    {
        name: "Advanced data transformation pipeline",
        description: "Filter numbers, apply multiple transformations, group by ranges, and calculate statistics",
        code: `
            arr.filter(x => typeof x === 'number' && !isNaN(x))
               .map(x => ({ original: x, squared: x ** 2, sqrt: Math.sqrt(x) }))
               .sort((a, b) => a.original - b.original)
               .reduce((acc, val) => {
                   const range = Math.floor(val.original / 10) * 10;
                   if (!acc[range]) acc[range] = { count: 0, sum: 0, items: [] };
                   acc[range].count++;
                   acc[range].sum += val.original;
                   acc[range].items.push(val);
                   return acc;
               }, {})
               .then(Object.entries)
               .map(([range, data]) => ({
                   range: range + '-' + (parseInt(range) + 9),
                   count: data.count,
                   average: data.sum / data.count,
                   items: data.items
               }))
               .sort((a, b) => b.count - a.count)
        `
    },
    {
        name: "Nested array flattening and processing",
        description: "Flatten nested arrays, filter unique values, perform calculations, and group results",
        code: `
            arr.flat(Infinity)
               .filter(x => typeof x === 'number' && !isNaN(x))
               .reduce((acc, val) => {
                   if (!acc.uniqueValues.has(val)) {
                       acc.uniqueValues.add(val);
                       acc.sum += val;
                       acc.product *= val;
                       acc.count++;
                   }
                   return acc;
               }, { uniqueValues: new Set(), sum: 0, product: 1, count: 0 })
               .then(result => ({
                   uniqueCount: result.uniqueValues.size,
                   sum: result.sum,
                   product: result.product,
                   average: result.sum / result.count,
                   median: [...result.uniqueValues].sort((a, b) => a - b)[Math.floor(result.uniqueValues.size / 2)]
               }))
        `
    },
    {
        name: "Advanced string manipulation and analysis",
        description: "Process strings, count occurrences, calculate letter frequency, and determine most common words",
        code: `
            arr.filter(x => typeof x === 'string')
               .map(str => str.toLowerCase().replace(/[^a-z\\s]/g, ''))
               .flatMap(str => str.split(/\\s+/))
               .filter(word => word.length > 0)
               .reduce((acc, word) => {
                   acc.wordCount[word] = (acc.wordCount[word] || 0) + 1;
                   word.split('').forEach(letter => {
                       acc.letterCount[letter] = (acc.letterCount[letter] || 0) + 1;
                   });
                   return acc;
               }, { wordCount: {}, letterCount: {} })
               .then(result => ({
                   totalWords: Object.values(result.wordCount).reduce((sum, count) => sum + count, 0),
                   uniqueWords: Object.keys(result.wordCount).length,
                   mostCommonWords: Object.entries(result.wordCount)
                       .sort((a, b) => b[1] - a[1])
                       .slice(0, 5)
                       .map(([word, count]) => ({ word, count })),
                   letterFrequency: Object.entries(result.letterCount)
                       .map(([letter, count]) => ({ letter, frequency: count / Object.values(result.letterCount).reduce((sum, c) => sum + c, 0) }))
                       .sort((a, b) => b.frequency - a.frequency)
               }))
        `
    },
    {
        name: "Complex data aggregation and analysis",
        description: "Group data, calculate statistics, and perform comparative analysis",
        code: `
            arr.filter(x => typeof x === 'object' && x !== null && 'category' in x && 'value' in x)
               .reduce((acc, item) => {
                   if (!acc[item.category]) acc[item.category] = [];
                   acc[item.category].push(item.value);
                   return acc;
               }, {})
               .then(Object.entries)
               .map(([category, values]) => ({
                   category,
                   count: values.length,
                   sum: values.reduce((sum, val) => sum + val, 0),
                   average: values.reduce((sum, val) => sum + val, 0) / values.length,
                   min: Math.min(...values),
                   max: Math.max(...values),
                   median: values.sort((a, b) => a - b)[Math.floor(values.length / 2)],
                   variance: values.reduce((variance, val) => variance + Math.pow(val - (values.reduce((sum, val) => sum + val, 0) / values.length), 2), 0) / values.length
               }))
               .sort((a, b) => b.sum - a.sum)
               .map((stats, index, array) => ({
                   ...stats,
                   percentageOfTotal: stats.sum / array.reduce((total, cat) => total + cat.sum, 0) * 100,
                   rankBySumDesc: index + 1,
                   rankByCountDesc: array.slice().sort((a, b) => b.count - a.count).findIndex(item => item.category === stats.category) + 1
               }))
        `
    },
    {
        name: "Time series data analysis",
        description: "Process time series data, calculate moving averages, and identify trends",
        code: `
            arr.filter(x => x && typeof x.date === 'string' && typeof x.value === 'number')
               .sort((a, b) => new Date(a.date) - new Date(b.date))
               .map((item, index, array) => ({
                   ...item,
                   movingAverage7: index >= 6 
                       ? array.slice(index - 6, index + 1).reduce((sum, i) => sum + i.value, 0) / 7 
                       : null,
                   movingAverage30: index >= 29
                       ? array.slice(index - 29, index + 1).reduce((sum, i) => sum + i.value, 0) / 30
                       : null
               }))
               .map((item, index, array) => ({
                   ...item,
                   trend: index > 0 
                       ? (item.value - array[index - 1].value) / array[index - 1].value * 100 
                       : null,
                   trendSMA7: index > 0 && item.movingAverage7 && array[index - 1].movingAverage7
                       ? (item.movingAverage7 - array[index - 1].movingAverage7) / array[index - 1].movingAverage7 * 100
                       : null
               }))
               .reduce((acc, item) => {
                   acc.data.push(item);
                   acc.totalValue += item.value;
                   acc.maxValue = Math.max(acc.maxValue, item.value);
                   acc.minValue = Math.min(acc.minValue, item.value);
                   return acc;
               }, { data: [], totalValue: 0, maxValue: -Infinity, minValue: Infinity })
               .then(result => ({
                   timeSeries: result.data,
                   summary: {
                       startDate: result.data[0].date,
                       endDate: result.data[result.data.length - 1].date,
                       totalValue: result.totalValue,
                       averageValue: result.totalValue / result.data.length,
                       maxValue: result.maxValue,
                       minValue: result.minValue,
                       totalGrowth: (result.data[result.data.length - 1].value - result.data[0].value) / result.data[0].value * 100
                   }
               }))
        `
    },
    {
        name: "Advanced data cleaning and normalization",
        description: "Clean, normalize, and standardize data from various sources",
        code: `
            arr.map(item => typeof item === 'object' && item !== null ? item : { value: item })
               .map(item => ({
                   ...item,
                   value: typeof item.value === 'string' ? parseFloat(item.value.replace(/[^0-9.-]/g, '')) : item.value
               }))
               .filter(item => !isNaN(item.value))
               .map(item => ({
                   ...item,
                   normalizedValue: (item.value - Math.min(...arr.map(i => i.value))) / 
                                    (Math.max(...arr.map(i => i.value)) - Math.min(...arr.map(i => i.value)))
               }))
               .reduce((acc, item) => {
                   acc.sum += item.value;
                   acc.sumSquared += item.value ** 2;
                   acc.items.push(item);
                   return acc;
               }, { sum: 0, sumSquared: 0, items: [] })
               .then(result => {
                   const mean = result.sum / result.items.length;
                   const variance = (result.sumSquared / result.items.length) - (mean ** 2);
                   const stdDev = Math.sqrt(variance);
                   return result.items.map(item => ({
                       ...item,
                       zScore: (item.value - mean) / stdDev
                   }));
               })
               .sort((a, b) => b.zScore - a.zScore)
        `
    },
    {
        name: "Network analysis on graph data",
        description: "Analyze connections in graph data, calculate node degrees, and identify central nodes",
        code: `
            arr.filter(x => x && typeof x.source === 'string' && typeof x.target === 'string')
               .reduce((acc, edge) => {
                   if (!acc.nodes[edge.source]) acc.nodes[edge.source] = { id: edge.source, degree: 0, connections: new Set() };
                   if (!acc.nodes[edge.target]) acc.nodes[edge.target] = { id: edge.target, degree: 0, connections: new Set() };
                   acc.nodes[edge.source].degree++;
                   acc.nodes[edge.target].degree++;
                   acc.nodes[edge.source].connections.add(edge.target);
                   acc.nodes[edge.target].connections.add(edge.source);
                   acc.edges.push(edge);
                   return acc;
               }, { nodes: {}, edges: [] })
               .then(graph => ({
                   nodes: Object.values(graph.nodes).map(node => ({
                       id: node.id,
                       degree: node.degree,
                       connections: Array.from(node.connections),
                       closnessCentrality: 1 / Object.values(graph.nodes).reduce((sum, otherNode) => {
                           if (node.id !== otherNode.id) {
                               // Simple BFS to find shortest path length
                               let queue = [[node.id]], visited = new Set([node.id]), level = 0;
                               while (queue.length > 0) {
                                   let nextQueue = [];
                                   for (let path of queue) {
                                       let current = path[path.length - 1];
                                       if (current === otherNode.id) return sum + level;
                                       for (let neighbor of graph.nodes[current].connections) {
                                           if (!visited.has(neighbor)) {
                                               visited.add(neighbor);
                                               nextQueue.push([...path, neighbor]);
                                           }
                                       }
                                   }
                                   queue = nextQueue;
                                   level++;
                               }
                           }
                           return sum;
                       }, 0)
                   })),
                   edges: graph.edges
               }))
               .then(graph => ({
                   ...graph,
                   summary: {
                       nodeCount: graph.nodes.length,
                       edgeCount: graph.edges.length,
                       averageDegree: graph.nodes.reduce((sum, node) => sum + node.degree, 0) / graph.nodes.length,
                       mostConnectedNodes: graph.nodes.sort((a, b) => b.degree - a.degree).slice(0, 5),
                       mostCentralNodes: graph.nodes.sort((a, b) => b.closnessCentrality - a.closnessCentrality).slice(0, 5)
                   }
               }))
        `
    },
];



const callbackFunctions = {
    map: [
        { name: "Double each element", func: "x => x * 2" },
        { name: "Square each element", func: "x => x * x" },
        { name: "Convert to string", func: "x => x.toString()" },
        { name: "Add 10 to each", func: "x => x + 10" },
        { name: "Negative of each", func: "x => -x" },
        { name: "Reciprocal of each", func: "x => 1 / x" },
        { name: "To fixed 2 decimals", func: "x => x.toFixed(2)" },
        { name: "Absolute value", func: "x => Math.abs(x)" },
        { name: "Cube each element", func: "x => x ** 3" },
        { name: "Add index to element", func: "(x, i) => x + i" },
        { name: "Multiply by 100", func: "x => x * 100" },
        { name: "Subtract 5", func: "x => x - 5" },
        { name: "Square root", func: "x => Math.sqrt(x)" },
        { name: "Celsius to Fahrenheit", func: "x => (x * 9/5) + 32" },
        { name: "Fahrenheit to Celsius", func: "x => (x - 32) * 5/9" },
        { name: "To binary string", func: "x => x.toString(2)" },
        { name: "To hexadecimal string", func: "x => x.toString(16)" },
        { name: "Round to nearest integer", func: "x => Math.round(x)" },
        { name: "Floor value", func: "x => Math.floor(x)" },
        { name: "Ceiling value", func: "x => Math.ceil(x)" },
        { name: "Sine of each", func: "x => Math.sin(x)" },
        { name: "Cosine of each", func: "x => Math.cos(x)" },
        { name: "Tangent of each", func: "x => Math.tan(x)" },
        { name: "Logarithm (base 10)", func: "x => Math.log10(x)" },
        { name: "Natural logarithm", func: "x => Math.log(x)" },
        { name: "Exponential (e^x)", func: "x => Math.exp(x)" },
        { name: "Bitwise NOT", func: "x => ~x" },
        { name: "Left shift by 1", func: "x => x << 1" },
        { name: "Right shift by 1", func: "x => x >> 1" },
        { name: "Unsigned right shift by 1", func: "x => x >>> 1" },
        { name: "To ASCII code", func: "x => x.charCodeAt(0)" },
        { name: "From ASCII code", func: "x => String.fromCharCode(x)" },
        { name: "Is even?", func: "x => x % 2 === 0" },
        { name: "Is odd?", func: "x => x % 2 !== 0" },
        { name: "Is positive?", func: "x => x > 0" },
        { name: "Is negative?", func: "x => x < 0" },
        { name: "Is zero?", func: "x => x === 0" },
        { name: "Factorial", func: "x => x <= 1 ? 1 : x * (x-1)" },
        { name: "Fibonacci sequence", func: "x => x <= 1 ? x : fib(x-1) + fib(x-2)" },
        { name: "Add random number", func: "x => x + Math.random()" },
        { name: "To percentage", func: "x => x * 100 + '%'" },
        { name: "Inverse boolean", func: "x => !x" },
        { name: "To fixed 3 decimals", func: "x => x.toFixed(3)" },
        { name: "Multiply by π", func: "x => x * Math.PI" },
        { name: "Divide by 2", func: "x => x / 2" },
        { name: "Power of 2", func: "x => 2 ** x" },
        { name: "Cube root", func: "x => Math.cbrt(x)" },
        { name: "To octal string", func: "x => x.toString(8)" },
        { name: "Multiply by -1", func: "x => x * -1" },
        { name: "Add 1000", func: "x => x + 1000" }
    ],
    filter: [
        { name: "Even numbers", func: "x => x % 2 === 0" },
        { name: "Odd numbers", func: "x => x % 2 !== 0" },
        { name: "Greater than 5", func: "x => x > 5" },
        { name: "Less than or equal to 10", func: "x => x <= 10" },
        { name: "Between 3 and 7", func: "x => x > 3 && x < 7" },
        { name: "Divisible by 3", func: "x => x % 3 === 0" },
        { name: "Not zero", func: "x => x !== 0" },
        { name: "Positive numbers", func: "x => x > 0" },
        { name: "Negative numbers", func: "x => x < 0" },
        { name: "Integer numbers", func: "x => Number.isInteger(x)" },
        { name: "Float numbers", func: "x => !Number.isInteger(x)" },
        { name: "Prime numbers", func: "x => { for(let i = 2; i < x; i++) if(x % i === 0) return false; return x > 1; }" },
        { name: "Perfect squares", func: "x => Math.sqrt(x) % 1 === 0" },
        { name: "Divisible by 5", func: "x => x % 5 === 0" },
        { name: "Greater than average", func: "(x, i, arr) => x > arr.reduce((a,b) => a+b) / arr.length" },
        { name: "Less than 100", func: "x => x < 100" },
        { name: "Between 0 and 1", func: "x => x > 0 && x < 1" },
        { name: "Multiples of 7", func: "x => x % 7 === 0" },
        { name: "Powers of 2", func: "x => (x & (x - 1)) === 0 && x !== 0" },
        { name: "Contains digit 5", func: "x => x.toString().includes('5')" },
        { name: "Palindrome numbers", func: "x => x.toString() === x.toString().split('').reverse().join('')" },
        { name: "Fibonacci numbers", func: "x => { let a=0,b=1,c; while(c<x) c=a+b,a=b,b=c; return x===c; }" },
        { name: "Armstrong numbers", func: "x => x === x.toString().split('').reduce((a,d) => a + Math.pow(parseInt(d), 3), 0)" },
        { name: "Perfect numbers", func: "x => x === Array.from({length: x}, (_, i) => i).filter(i => x % i === 0).reduce((a, b) => a + b, 0)" },
        { name: "Numbers with 3 digits", func: "x => x >= 100 && x < 1000" },
        { name: "Leap years", func: "x => (x % 4 === 0 && x % 100 !== 0) || (x % 400 === 0)" },
        { name: "Numbers divisible by their reverse", func: "x => x % parseInt(x.toString().split('').reverse().join('')) === 0" },
        { name: "Numbers with sum of digits > 10", func: "x => x.toString().split('').reduce((a, b) => parseInt(a) + parseInt(b)) > 10" },
        { name: "Numbers with even number of digits", func: "x => x.toString().length % 2 === 0" },
        { name: "Numbers with odd number of digits", func: "x => x.toString().length % 2 !== 0" },
        { name: "Numbers greater than their square root", func: "x => x > Math.sqrt(x)" },
        { name: "Numbers less than their cube root", func: "x => x < Math.cbrt(x)" },
        { name: "Numbers with all even digits", func: "x => x.toString().split('').every(d => parseInt(d) % 2 === 0)" },
        { name: "Numbers with all odd digits", func: "x => x.toString().split('').every(d => parseInt(d) % 2 !== 0)" },
        { name: "Numbers divisible by the sum of their digits", func: "x => x % x.toString().split('').reduce((a, b) => parseInt(a) + parseInt(b), 0) === 0" },
        { name: "Numbers with digit sum divisible by 3", func: "x => x.toString().split('').reduce((a, b) => parseInt(a) + parseInt(b), 0) % 3 === 0" },
        { name: "Numbers with more than 5 divisors", func: "x => Array.from({length: x}, (_, i) => i + 1).filter(i => x % i === 0).length > 5" },
        { name: "Numbers with exactly 3 divisors", func: "x => Array.from({length: x}, (_, i) => i + 1).filter(i => x % i === 0).length === 3" },
        { name: "Numbers that are both square and cube", func: "x => Math.cbrt(x) % 1 === 0 && Math.sqrt(x) % 1 === 0" },
        { name: "Numbers with alternating even-odd digits", func: "x => x.toString().split('').every((d, i) => i % 2 === parseInt(d) % 2)" },
        { name: "Numbers that are sum of two squares", func: "x => Array.from({length: Math.sqrt(x)}, (_, i) => i + 1).some(a => Math.sqrt(x - a*a) % 1 === 0)" },
        { name: "Numbers with digit product > 100", func: "x => x.toString().split('').reduce((a, b) => parseInt(a) * parseInt(b)) > 100" },
        { name: "Numbers with unique digits", func: "x => new Set(x.toString().split('')).size === x.toString().length" },
        { name: "Numbers divisible by 11", func: "x => x % 11 === 0" },
        { name: "Numbers with repeating digits", func: "x => new Set(x.toString().split('')).size < x.toString().length" },
        { name: "Numbers that are difference of two squares", func: "x => Array.from({length: Math.sqrt(x)}, (_, i) => i + 1).some(a => Math.sqrt(x + a*a) % 1 === 0)" },
        { name: "Numbers with ascending digits", func: "x => x.toString().split('').every((d, i, arr) => i === 0 || d >= arr[i-1])" },
        { name: "Numbers with descending digits", func: "x => x.toString().split('').every((d, i, arr) => i === 0 || d <= arr[i-1])" },
        { name: "Numbers divisible by their digit sum", func: "x => x % x.toString().split('').reduce((a, b) => parseInt(a) + parseInt(b), 0) === 0" }
    ],
    reduce: [
        { name: "Sum all elements", func: "(acc, curr) => acc + curr" },
        { name: "Multiply all elements", func: "(acc, curr) => acc * curr" },
        { name: "Find maximum", func: "(acc, curr) => Math.max(acc, curr)" },
        { name: "Sum of absolute values", func: "(acc, curr) => acc + Math.abs(curr)" },
        { name: "Longest string", func: "(acc, curr) => curr.length > acc.length ? curr : acc", initVal: "''" },
        { name: "Factorial of sum", func: "(acc, curr) => acc * (curr + 1)", initVal: "1" },
        { name: "Count elements by type", func: "(acc, curr) => { acc[typeof curr] = (acc[typeof curr] || 0) + 1; return acc; }", initVal: "{}" },
        { name: "Sum of even indices", func: "(acc, curr, idx) => idx % 2 === 0 ? acc + curr : acc", initVal: "0" },
        { name: "Product of positive numbers", func: "(acc, curr) => curr > 0 ? acc * curr : acc", initVal: "1" },
        { name: "Count negative numbers", func: "(acc, curr) => curr < 0 ? acc + 1 : acc", initVal: "0" },
        { name: "Sum of odd indices", func: "(acc, curr, idx) => idx % 2 !== 0 ? acc + curr : acc", initVal: "0" },
    { name: "Sum all elements", func: "(acc, curr) => acc + curr" },
    { name: "Multiply all elements", func: "(acc, curr) => acc * curr" },
    { name: "Find maximum", func: "(acc, curr) => Math.max(acc, curr)" },
    { name: "Find minimum", func: "(acc, curr) => Math.min(acc, curr)" },
    { name: "Count occurrences", func: "(acc, curr) => { acc[curr] = (acc[curr] || 0) + 1; return acc; }", initVal: "{}" },
    { name: "Concatenate strings", func: "(acc, curr) => acc + ' ' + curr" },
    { name: "Average of elements", func: "(acc, curr, idx, arr) => idx === arr.length - 1 ? (acc + curr) / arr.length : acc + curr" },
    { name: "Find longest string", func: "(acc, curr) => curr.length > acc.length ? curr : acc" },
    { name: "Sum of squares", func: "(acc, curr) => acc + curr * curr" },
    { name: "Product of even numbers", func: "(acc, curr) => curr % 2 === 0 ? acc * curr : acc", initVal: "1" },
    { name: "Flatten array", func: "(acc, curr) => acc.concat(Array.isArray(curr) ? curr.reduce((a, c) => a.concat(c), []) : curr)", initVal: "[]" },
    { name: "Group by property", func: "(acc, curr) => { (acc[curr.category] = acc[curr.category] || []).push(curr); return acc; }", initVal: "{}" },
    { name: "Count by condition", func: "(acc, curr) => { acc[curr > 0 ? 'positive' : 'negative']++; return acc; }", initVal: "{positive: 0, negative: 0}" },
    { name: "Find most frequent element", func: "(acc, curr) => { acc[curr] = (acc[curr] || 0) + 1; return acc.max && acc[curr] > acc[acc.max] ? {...acc, max: curr} : {...acc, max: acc.max || curr}; }", initVal: "{}" },
    { name: "Reverse string", func: "(acc, curr) => curr + acc", initVal: "''" },
    { name: "Calculate factorial", func: "(acc, curr) => acc * curr", initVal: "1" },
    { name: "Find median", func: "(acc, curr, idx, arr) => idx === arr.length - 1 ? (arr.sort((a, b) => a - b)[Math.floor(arr.length / 2)] + arr.sort((a, b) => a - b)[Math.ceil(arr.length / 2)]) / 2 : curr" },
    { name: "Remove duplicates", func: "(acc, curr) => acc.includes(curr) ? acc : [...acc, curr]", initVal: "[]" },
    { name: "Create HTML list", func: "(acc, curr) => acc + `<li>${curr}</li>`", initVal: "'<ul>'" },
    { name: "Sum of digits", func: "(acc, curr) => acc + curr.toString().split('').reduce((a, b) => a + parseInt(b), 0)", initVal: "0" },
    { name: "Find second largest", func: "(acc, curr) => curr > acc[0] ? [curr, acc[0]] : (curr > acc[1] ? [acc[0], curr] : acc)", initVal: "[-Infinity, -Infinity]" },
    { name: "Calculate variance", func: "(acc, curr, idx, arr) => idx === arr.length - 1 ? acc.map(x => Math.pow(x - arr.reduce((a, b) => a + b) / arr.length, 2)).reduce((a, b) => a + b) / arr.length : [...acc, curr]", initVal: "[]" },
    { name: "Create frequency map", func: "(acc, curr) => { acc.set(curr, (acc.get(curr) || 0) + 1); return acc; }", initVal: "new Map()" },
    { name: "Find mode", func: "(acc, curr) => { acc[curr] = (acc[curr] || 0) + 1; return acc[curr] > (acc.mode?.count || 0) ? {mode: curr, count: acc[curr]} : acc; }", initVal: "{}" },
    { name: "Calculate dot product", func: "(acc, curr, idx, arr) => acc + curr * (arr[idx + arr.length / 2] || 0)" },
    { name: "Find longest increasing subsequence", func: "(acc, curr) => curr > acc[acc.length - 1] ? [...acc, curr] : acc", initVal: "[-Infinity]" },
    { name: "Calculate running average", func: "(acc, curr, idx) => [...acc, (curr + (idx > 0 ? acc[idx - 1] * idx : 0)) / (idx + 1)]", initVal: "[]" },
    { name: "Find peak elements", func: "(acc, curr, idx, arr) => (idx === 0 || curr > arr[idx - 1]) && (idx === arr.length - 1 || curr > arr[idx + 1]) ? [...acc, curr] : acc", initVal: "[]" },
    { name: "Calculate cumulative sum", func: "(acc, curr) => [...acc, (acc[acc.length - 1] || 0) + curr]", initVal: "[]" },
    { name: "Group by length", func: "(acc, curr) => { (acc[curr.length] = acc[curr.length] || []).push(curr); return acc; }", initVal: "{}" },
    { name: "Find longest palindrome", func: "(acc, curr) => curr === curr.split('').reverse().join('') && curr.length > acc.length ? curr : acc", initVal: "''" },
    { name: "Calculate moving average", func: "(acc, curr, idx, arr) => idx < 2 ? acc : [...acc, (curr + arr[idx-1] + arr[idx-2]) / 3]", initVal: "[]" },
    { name: "Find common elements", func: "(acc, curr) => acc.filter(x => curr.includes(x))" },
    { name: "Calculate exponential moving average", func: "(acc, curr, idx) => idx === 0 ? curr : curr * 0.1 + acc * 0.9" },
    { name: "Find longest word", func: "(acc, curr) => curr.length > acc.length ? curr : acc", initVal: "''" },
    { name: "Calculate percentage change", func: "(acc, curr, idx, arr) => idx === 0 ? acc : [...acc, ((curr - arr[idx-1]) / arr[idx-1]) * 100]", initVal: "[]" },
    { name: "Find missing number", func: "(acc, curr) => acc ^ curr", initVal: "array.length" },
    { name: "Calculate geometric mean", func: "(acc, curr) => acc * curr", initVal: "1" },
    { name: "Find majority element", func: "(acc, curr) => curr === acc.element ? {element: acc.element, count: acc.count + 1} : acc.count === 0 ? {element: curr, count: 1} : {element: acc.element, count: acc.count - 1}", initVal: "{element: null, count: 0}" },
    { name: "Calculate Fibonacci sequence", func: "(acc, _, idx) => idx <= 1 ? acc : [...acc, acc[idx-1] + acc[idx-2]]", initVal: "[0, 1]" },
    { name: "Find intersection of arrays", func: "(acc, curr) => acc.filter(x => curr.includes(x))" },
    { name: "Calculate running product", func: "(acc, curr) => [...acc, (acc[acc.length - 1] || 1) * curr]", initVal: "[]" },
    { name: "Find unique elements", func: "(acc, curr) => acc.includes(curr) ? acc : [...acc, curr]", initVal: "[]" },
    { name: "Calculate harmonic mean", func: "(acc, curr, idx, arr) => idx === arr.length - 1 ? arr.length / acc : acc + 1/curr", initVal: "0" },
    { name: "Find longest common prefix", func: "(acc, curr) => acc.split('').filter((char, idx) => curr[idx] === char).join('')" },
    { name: "Calculate running max", func: "(acc, curr) => [...acc, Math.max(curr, acc[acc.length - 1] || -Infinity)]", initVal: "[]" },
    { name: "Find most frequent pair", func: "(acc, curr, idx, arr) => idx < arr.length - 1 ? {...acc, [`${curr},${arr[idx+1]}`]: (acc[`${curr},${arr[idx+1]}`] || 0) + 1} : acc", initVal: "{}" },
    { name: "Calculate running min", func: "(acc, curr) => [...acc, Math.min(curr, acc[acc.length - 1] || Infinity)]", initVal: "[]" },
    { name: "Find longest alternating subsequence", func: "(acc, curr, idx, arr) => idx === 0 || (curr - arr[idx-1]) * (arr[idx-1] - acc[acc.length-1]) < 0 ? [...acc, curr] : acc", initVal: "[]" },
],
forEach: [
    { name: "Log each element", func: "x => console.log(x)" },
    { name: "Double and log", func: "x => console.log(x * 2)" },
    { name: "Log index and element", func: "(x, i) => console.log(`Index ${i}: ${x}`)" },
    { name: "Push to new array", func: "x => newArr.push(x)" },
    { name: "Sum to external variable", func: "x => sum += x" },
    { name: "Count elements", func: "() => count++" },
    { name: "Log if greater than 5", func: "x => { if(x > 5) console.log(x); }" },
    { name: "Multiply by index", func: "(x, i) => console.log(x * i)" },
    { name: "Log even indices", func: "(x, i) => { if(i % 2 === 0) console.log(x); }" },
    { name: "Create object from array", func: "(x, i) => obj[`key${i}`] = x" },
    { name: "Log elements in reverse", func: "(x, i, arr) => console.log(arr[arr.length - 1 - i])" },
    { name: "Calculate running sum", func: "(x, i, arr) => { sum += x; console.log(`Sum up to index ${i}: ${sum}`); }" },
    { name: "Log elements meeting condition", func: "x => { if(typeof x === 'string') console.log(x); }" },
    { name: "Capitalize strings", func: "x => { if(typeof x === 'string') console.log(x.toUpperCase()); }" },
    { name: "Log array with current element removed", func: "(x, i, arr) => console.log(arr.filter((_, index) => index !== i))" },
    { name: "Log element and its square", func: "x => console.log(`${x} squared is ${x * x}`)" },
    { name: "Log elements divisible by 3", func: "x => { if(x % 3 === 0) console.log(x); }" },
    { name: "Log element types", func: "x => console.log(`${x} is a ${typeof x}`)" },
    { name: "Create HTML list items", func: "x => console.log(`<li>${x}</li>`)" },
    { name: "Log elements in scientific notation", func: "x => { if(typeof x === 'number') console.log(x.toExponential()); }" },
    { name: "Log elements as binary", func: "x => { if(typeof x === 'number') console.log(x.toString(2)); }" },
    { name: "Log elements as hexadecimal", func: "x => { if(typeof x === 'number') console.log(x.toString(16)); }" },
    { name: "Log elements with their factorial", func: "x => { if(Number.isInteger(x) && x >= 0) console.log(`${x}! = ${factorial(x)}`); }" },
    { name: "Log elements with their square root", func: "x => { if(typeof x === 'number' && x >= 0) console.log(`√${x} = ${Math.sqrt(x)}`); }" },
    { name: "Log elements with their cube", func: "x => console.log(`${x}³ = ${Math.pow(x, 3)}`)" },
    { name: "Log elements as percentage of total", func: "(x, i, arr) => console.log(`${x} is ${(x / arr.reduce((a, b) => a + b) * 100).toFixed(2)}% of the total`)" },
    { name: "Log elements with their absolute value", func: "x => console.log(`|${x}| = ${Math.abs(x)}`)" },
    { name: "Log elements rounded to nearest integer", func: "x => { if(typeof x === 'number') console.log(`${x} rounded is ${Math.round(x)}`); }" },
    { name: "Log elements with their sine value", func: "x => { if(typeof x === 'number') console.log(`sin(${x}) = ${Math.sin(x)}`); }" },
    { name: "Log elements with their cosine value", func: "x => { if(typeof x === 'number') console.log(`cos(${x}) = ${Math.cos(x)}`); }" },
    { name: "Log elements with their tangent value", func: "x => { if(typeof x === 'number') console.log(`tan(${x}) = ${Math.tan(x)}`); }" },
    { name: "Log elements with their natural logarithm", func: "x => { if(typeof x === 'number' && x > 0) console.log(`ln(${x}) = ${Math.log(x)}`); }" },
    { name: "Log elements with their base-10 logarithm", func: "x => { if(typeof x === 'number' && x > 0) console.log(`log10(${x}) = ${Math.log10(x)}`); }" },
    { name: "Log elements with their ASCII code", func: "x => { if(typeof x === 'string' && x.length === 1) console.log(`ASCII code of '${x}' is ${x.charCodeAt(0)}`); }" },
    { name: "Log elements with their length", func: "x => console.log(`Length of ${x} is ${x.toString().length}`)" },
    { name: "Log elements in reverse order", func: "(x, i, arr) => console.log(arr[arr.length - 1 - i])" },
],
    find: [
        { name: "First even number", func: "x => x % 2 === 0" },
        { name: "First element > 10", func: "x => x > 10" },
        { name: "First negative number", func: "x => x < 0" },
        { name: "First string with 'a'", func: "x => typeof x === 'string' && x.includes('a')" },
        { name: "First prime number", func: "x => { for(let i = 2; i < x; i++) if(x % i === 0) return false; return x > 1; }" },
        { name: "First falsy value", func: "x => !x" },
        { name: "First element divisible by 3 and 5", func: "x => x % 3 === 0 && x % 5 === 0" },
        { name: "First string longer than 5 characters", func: "x => typeof x === 'string' && x.length > 5" },
        { name: "First number between 20 and 30", func: "x => x > 20 && x < 30" },
        { name: "First perfect square", func: "x => Math.sqrt(x) % 1 === 0" },
        { name: "First element with decimal part", func: "x => x % 1 !== 0" },
        { name: "First uppercase string", func: "x => typeof x === 'string' && x === x.toUpperCase()" },
        { name: "First element divisible by 7", func: "x => x % 7 === 0" },
        { name: "First palindrome", func: "x => typeof x === 'string' && x === x.split('').reverse().join('')" },
        { name: "First number greater than 100", func: "x => x > 100" },
        { name: "First string starting with 'A'", func: "x => typeof x === 'string' && x.startsWith('A')" },
        { name: "First element that's a multiple of 4", func: "x => x % 4 === 0" },
        { name: "First number with more than 3 digits", func: "x => x.toString().length > 3" },
        { name: "First string containing a number", func: "x => typeof x === 'string' && /\d/.test(x)" },
        { name: "First element that's a power of 2", func: "x => (x & (x - 1)) === 0 && x !== 0" },
        { name: "First negative even number", func: "x => x < 0 && x % 2 === 0" },
        { name: "First string with only lowercase letters", func: "x => typeof x === 'string' && x === x.toLowerCase() && x !== x.toUpperCase()" },
        { name: "First number divisible by 6", func: "x => x % 6 === 0" },
        { name: "First element greater than the average", func: "(x, i, arr) => x > arr.reduce((sum, curr) => sum + curr, 0) / arr.length" },
        { name: "First string ending with 'ing'", func: "x => typeof x === 'string' && x.endsWith('ing')" },
        { name: "First number that's a multiple of 3 but not 2", func: "x => x % 3 === 0 && x % 2 !== 0" },
        { name: "First element that's NaN", func: "x => isNaN(x)" },
        { name: "First string with exactly 3 characters", func: "x => typeof x === 'string' && x.length === 3" },
        { name: "First number between 50 and 60", func: "x => x > 50 && x < 60" },
        { name: "First element that's a perfect cube", func: "x => Math.cbrt(x) % 1 === 0" },
        { name: "First string containing 'hello'", func: "x => typeof x === 'string' && x.includes('hello')" },
        { name: "First number divisible by 8", func: "x => x % 8 === 0" },
        { name: "First element that's infinity", func: "x => x === Infinity || x === -Infinity" },
        { name: "First string with more than 10 characters", func: "x => typeof x === 'string' && x.length > 10" },
        { name: "First number that's a multiple of 5 but not 10", func: "x => x % 5 === 0 && x % 10 !== 0" },
        { name: "First element that's a boolean", func: "x => typeof x === 'boolean'" },
        { name: "First string containing only digits", func: "x => typeof x === 'string' && /^\d+$/.test(x)" },
        { name: "First number between 75 and 85", func: "x => x > 75 && x < 85" },
        { name: "First element that's an empty string", func: "x => x === ''" },
        { name: "First number divisible by 9", func: "x => x % 9 === 0" },
        { name: "First string with a space", func: "x => typeof x === 'string' && x.includes(' ')" },
        { name: "First element that's an object", func: "x => typeof x === 'object' && x !== null" },
        { name: "First number greater than 1000", func: "x => x > 1000" },
        { name: "First string starting and ending with the same letter", func: "x => typeof x === 'string' && x[0].toLowerCase() === x[x.length - 1].toLowerCase()" },
        { name: "First element divisible by 11", func: "x => x % 11 === 0" },
        { name: "First number with sum of digits > 10", func: "x => x.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0) > 10" },
        { name: "First string containing a vowel", func: "x => typeof x === 'string' && /[aeiou]/i.test(x)" },
        { name: "First element that's a function", func: "x => typeof x === 'function'" },
        { name: "First number between 90 and 100", func: "x => x > 90 && x < 100" }
    ],
    some: [
        { name: "Any even number", func: "x => x % 2 === 0" },
        { name: "Any element > 10", func: "x => x > 10" },
        { name: "Any negative number", func: "x => x < 0" },
        { name: "Any string with 'a'", func: "x => typeof x === 'string' && x.includes('a')" },
        { name: "Any prime number", func: "x => { for(let i = 2; i < x; i++) if(x % i === 0) return false; return x > 1; }" },
        { name: "Any falsy value", func: "x => !x" },
        { name: "Any element divisible by 7", func: "x => x % 7 === 0" },
        { name: "Any string longer than 5 characters", func: "x => typeof x === 'string' && x.length > 5" },
        { name: "Any number between 20 and 30", func: "x => x > 20 && x < 30" },
        { name: "Any perfect square", func: "x => Math.sqrt(x) % 1 === 0" },
        { name: "Any element with decimal part", func: "x => x % 1 !== 0" },
        { name: "Any uppercase string", func: "x => typeof x === 'string' && x === x.toUpperCase()" },
        { name: "Any palindrome", func: "x => typeof x === 'string' && x === x.split('').reverse().join('')" },
        { name: "Any number greater than 100", func: "x => x > 100" },
        { name: "Any string starting with 'A'", func: "x => typeof x === 'string' && x.startsWith('A')" },
        { name: "Any element that's a multiple of 4", func: "x => x % 4 === 0" },
        { name: "Any number with more than 3 digits", func: "x => x.toString().length > 3" },
        { name: "Any string containing a number", func: "x => typeof x === 'string' && /\d/.test(x)" },
        { name: "Any element that's a power of 2", func: "x => (x & (x - 1)) === 0 && x !== 0" },
        { name: "Any negative even number", func: "x => x < 0 && x % 2 === 0" },
        { name: "Any string with only lowercase letters", func: "x => typeof x === 'string' && x === x.toLowerCase() && x !== x.toUpperCase()" },
        { name: "Any number divisible by 6", func: "x => x % 6 === 0" },
        { name: "Any element greater than the average", func: "(x, i, arr) => x > arr.reduce((sum, curr) => sum + curr, 0) / arr.length" },
        { name: "Any string ending with 'ing'", func: "x => typeof x === 'string' && x.endsWith('ing')" },
        { name: "Any number that's a multiple of 3 but not 2", func: "x => x % 3 === 0 && x % 2 !== 0" },
        { name: "Any element that's NaN", func: "x => isNaN(x)" },
        { name: "Any string with exactly 3 characters", func: "x => typeof x === 'string' && x.length === 3" },
        { name: "Any number between 50 and 60", func: "x => x > 50 && x < 60" },
        { name: "Any element that's a perfect cube", func: "x => Math.cbrt(x) % 1 === 0" },
        { name: "Any string containing 'hello'", func: "x => typeof x === 'string' && x.includes('hello')" },
        { name: "Any number divisible by 8", func: "x => x % 8 === 0" },
        { name: "Any element that's infinity", func: "x => x === Infinity || x === -Infinity" },
        { name: "Any string with more than 10 characters", func: "x => typeof x === 'string' && x.length > 10" },
        { name: "Any number that's a multiple of 5 but not 10", func: "x => x % 5 === 0 && x % 10 !== 0" },
        { name: "Any element that's a boolean", func: "x => typeof x === 'boolean'" },
        { name: "Any string containing only digits", func: "x => typeof x === 'string' && /^\d+$/.test(x)" },
        { name: "Any number between 75 and 85", func: "x => x > 75 && x < 85" },
        { name: "Any element that's an empty string", func: "x => x === ''" },
        { name: "Any number divisible by 9", func: "x => x % 9 === 0" },
        { name: "Any string with a space", func: "x => typeof x === 'string' && x.includes(' ')" },
        { name: "Any element that's an object", func: "x => typeof x === 'object' && x !== null" },
        { name: "Any number greater than 1000", func: "x => x > 1000" },
        { name: "Any string starting and ending with the same letter", func: "x => typeof x === 'string' && x[0].toLowerCase() === x[x.length - 1].toLowerCase()" },
        { name: "Any element divisible by 11", func: "x => x % 11 === 0" },
        { name: "Any number with sum of digits > 10", func: "x => x.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0) > 10" },
        { name: "Any string containing a vowel", func: "x => typeof x === 'string' && /[aeiou]/i.test(x)" },
        { name: "Any element that's a function", func: "x => typeof x === 'function'" },
        { name: "Any number between 90 and 100", func: "x => x > 90 && x < 100" },
        { name: "Any element that's null", func: "x => x === null" },
    ],
    every: [
        { name: "All positive numbers", func: "x => x > 0" },
        { name: "All integers", func: "x => Number.isInteger(x)" },
        { name: "All less than 100", func: "x => x < 100" },
        { name: "All strings", func: "x => typeof x === 'string'" },
        { name: "All arrays", func: "x => Array.isArray(x)" },
        { name: "All truthy values", func: "x => !!x" },
        { name: "All elements divisible by 2", func: "x => x % 2 === 0" },
        { name: "All numbers", func: "x => typeof x === 'number'" },
        { name: "All elements greater than 0 and less than 10", func: "x => x > 0 && x < 10" },
        { name: "All strings with length > 3", func: "x => typeof x === 'string' && x.length > 3" },
        { name: "All elements not null", func: "x => x !== null" },
        { name: "All elements defined", func: "x => x !== undefined" },
        { name: "All finite numbers", func: "x => Number.isFinite(x)" },
        { name: "All elements with length property", func: "x => x.hasOwnProperty('length')" },
        { name: "All objects", func: "x => typeof x === 'object' && x !== null" },
        { name: "All elements divisible by 3", func: "x => x % 3 === 0" },
        { name: "All strings starting with 'a'", func: "x => typeof x === 'string' && x.startsWith('a')" },
        { name: "All numbers less than 1000", func: "x => x < 1000" },
        { name: "All elements that are functions", func: "x => typeof x === 'function'" },
        { name: "All elements with toString method", func: "x => typeof x.toString === 'function'" },
        { name: "All numbers greater than -10", func: "x => x > -10" },
        { name: "All strings with uppercase first letter", func: "x => typeof x === 'string' && x[0] === x[0].toUpperCase()" },
],

}