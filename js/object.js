const MarketList = {
    crayfish: 1000,
    maggi: 500,
    tomato: 300,
    pepper: 200,
}

let sum = 0;

for (const key in MarketList) {
    console.log(`${key}: ${MarketList[key]}`);

    sum += MarketList[key];
}
console.log(` Total Items: #${sum}`);


const popularMovies2026 = {
    title:"Spider-Man: Brand New Day",
    monthOfRelease: "July",
    cast: ["Tom Holland", "Zendaya", "Jacob Batalon"],
    yearOfRelease: 2026,
    rating: 5,
}
console.log(popularMovies2026.title);


// Accesing Vlues in an Object
console.log(popularMovies2026.title);

// Changing Values in an Object
let changingValues = popularMovies2026.rating = 8
console.log("Changing Values:", changingValues);


// changing values of a title key in an object
popularMovies2026.title = "Spider-Man: No Way Home"
console.log("Changing Title:", popularMovies2026.title);


// Delete
let deleteValues = delete popularMovies2026.monthOfRelease
console.log("Deleting Values:", deleteValues);
console.log( popularMovies2026);


const carBrands = {
    name: "Benz",
    models: {
        sClassSeries: {
            VBoot: {
                color: ["black", "white", "Red"],
                Price: 100000
            },
        },

        aClassSeries: {
            AMG: {
                color: "Red",
                Price: 50000
            }
        }
    }
}
console.log("Brand:", carBrands.models.sClassSeries.VBoot.color[2])



const carBrand = {
    name: "Benz",
    models: {
        sClassSeries: {
            VBoot: {
                color: ["black", "white", "Red"],
                Price: 100000
            }
        },

        aClassSeries: {
            AMG: {
                color: "Red",
                Price: 50000
            }
        }
    }
};

// Display the brand name
console.log("Brand:", carBrand["name"]);

// Display all S-Class VBoot colours
console.log("Black:", carBrand["models"]["sClassSeries"]["VBoot"]["color"][0]);
console.log("White:", carBrand["models"]["sClassSeries"]["VBoot"]["color"][1]);
console.log("Red:", carBrand["models"]["sClassSeries"]["VBoot"]["color"][2]);

// Display AMG colour
console.log("AMG Colour:", carBrand["models"]["aClassSeries"]["AMG"]["color"]);

// Display prices
console.log("VBoot Price:", carBrand["models"]["sClassSeries"]["VBoot"]["Price"]);
console.log("AMG Price:", carBrand["models"]["aClassSeries"]["AMG"]["Price"]);