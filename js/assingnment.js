const JAMBcandidates = [
    { name: "Chris", score: 250 },
    { name: "John", score: 180 },
    { name: "Mary", score: 220 },
    { name: "David", score: 195 },
    { name: "Sarah", score: 280 },
    { name: "Peter", score: 160 },
    { name: "Grace", score: 230 },
    { name: "Michael", score: 200 },
    { name: "Esther", score: 210 },
    { name: "Daniel", score: 175 },
    { name: "Blessing", score: 245 }
];

// Create an empty array for successful candidates
let successfulCandidates = [];

// Check all candidates
for (let candidate of JAMBcandidates) {
    if (candidate.score > 200) {
        successfulCandidates.push(candidate.name);
    }
}

// Check the result
if (successfulCandidates.length > 0) {
    console.log("These are the students who scored more than 200 in JAMB.");

    console.log("Successful candidates:", successfulCandidates);

    console.log("Total number of successful candidates:", successfulCandidates.length);
} else {
    console.log("No candidate scored above 200 in JAMB.");
}