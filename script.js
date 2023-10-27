console.log("Script loaded successfully!");

const strains = [
    {
        name: 'JL#2',
        thc: '23%',
        cbd: '7%',
        terpenes: 'Myrcene/Limonene/Caryophyllene',
        floweringTime: 9
    },
    {
        name: 'Pie Hoe',
        thc: '27%',
        cbd: '2%',
        terpenes: 'Limonene/Linalool/Pinene',
        floweringTime: 10
    },
    {
        name: 'SFVxTK',
        thc: '18%',
        cbd: '5%',
        terpenes: 'Caryophyllene/Humulene/Myrcene',
        floweringTime: 8
    },
    {
        name: 'Sunday Driver',
        thc: '25%',
        cbd: '6%',
        terpenes: 'Linalool/Pinene/Limonene',
        floweringTime: 11
    },
    {
        name: 'Danny Noonan',
        thc: '29%',
        cbd: '3%',
        terpenes: 'Limonene/Myrcene/Caryophyllene',
        floweringTime: 9
    },
    {
        name: 'Kyrgyz Gold',
        thc: '17%',
        cbd: '8%',
        terpenes: 'Pinene/Linalool/Myrcene',
        floweringTime: 10
    },
    {
        name: 'KYRG-21',
        thc: '20%',
        cbd: '9%',
        terpenes: 'Caryophyllene/Myrcene/Limonene',
        floweringTime: 9
    },
    {
        name: 'KYRG-151',
        thc: '28%',
        cbd: '1%',
        terpenes: 'Linalool/Caryophyllene/Humulene',
        floweringTime: 10
    },
    {
        name: 'KYRG-11',
        thc: '22%',
        cbd: '4%',
        terpenes: 'Myrcene/Pinene/Caryophyllene',
        floweringTime: 8
    },
    {
        name: 'Gold Cracker',
        thc: '24%',
        cbd: '0%',
        terpenes: 'Humulene/Myrcene/Linalool',
        floweringTime: 11
    },
    {
        name: 'Santhica27',
        thc: '19%',
        cbd: '5%',
        terpenes: 'Limonene/Pinene/Linalool',
        floweringTime: 9
    },
    {
        name: 'Tisza',
        thc: '26%',
        cbd: '6%',
        terpenes: 'Linalool/Caryophyllene/Pinene',
        floweringTime: 10
    
},
{   
    name: 'Lovrin',
    thc: '28%',
    cbd: '3%',
    terpenes: 'Humulene/Myrcene/Caryophyllene',
    floweringTime: 8
},
{
    name: 'Carmagnola',
    thc: '21%',
    cbd: '4%',
    terpenes: 'Limonene/Humulene/Pinene',
    floweringTime: 9
},
{
    name: 'Jiangji',
    thc: '25%',
    cbd: '2%',
    terpenes: 'Caryophyllene/Myrcene/Limonene',
    floweringTime: 10
},
{
    name: 'Divided Sky',
    thc: '24%',
    cbd: '7%',
    terpenes: 'Linalool/Caryophyllene/Myrcene',
    floweringTime: 9
},
{
    name: 'Blazin Grapefruit',
    thc: '27%',
    cbd: '1%',
    terpenes: 'Myrcene/Limonene/Pinene',
    floweringTime: 10
},
{
    name: 'Bialobreski',
    thc: '22%',
    cbd: '8%',
    terpenes: 'Pinene/Limonene/Caryophyllene',
    floweringTime: 8
},
{
    name: 'Girl Scout Cookies',
    thc: '29%',
    cbd: '5%',
    terpenes: 'Limonene/Linalool/Myrcene',
    floweringTime: 11
},
{
    name: 'Lil Sebastian',
    thc: '20%',
    cbd: '9%',
    terpenes: 'Caryophyllene/Pinene/Humulene',
    floweringTime: 9
},
{
    name: 'Superbud Autoflower',
    thc: '18%',
    cbd: '6%',
    terpenes: 'Linalool/Myrcene/Caryophyllene',
    floweringTime: 8
},
{
    name: 'Congo',
    thc: '24%',
    cbd: '4%',
    terpenes: 'Myrcene/Pinene/Limonene',
    floweringTime: 10
},
{
    name: 'White Lemon',
    thc: '25%',
    cbd: '3%',
    terpenes: 'Limonene/Caryophyllene/Humulene',
    floweringTime: 9
},
{
    name: 'Wappa',
    thc: '28%',
    cbd: '2%',
    terpenes: 'Linalool/Pinene/Myrcene',
    floweringTime: 10
},
{
    name: 'Pineapple Express',
    thc: '27%',
    cbd: '6%',
    terpenes: 'Caryophyllene/Myrcene/Limonene',
    floweringTime: 11
},
{
    name: 'Candyland',
    thc: '19%',
    cbd: '8%',
    terpenes: 'Limonene/Linalool/Pinene',
    floweringTime: 9
},
{
    name: 'BGKC-45',
    thc: '22%',
    cbd: '7%',
    terpenes: 'Linalool/Myrcene/Caryophyllene',
    floweringTime: 10
},
{
    name: 'BGKC #4-1',
    thc: '21%',
    cbd: '4%',
    terpenes: 'Pinene/Humulene/Limonene',
    floweringTime: 9
},
{
    name: 'Brain Wreck',
    thc: '24%',
    cbd: '0%',
    terpenes: 'Caryophyllene/Myrcene/Linalool',
    floweringTime: 10
},
{
    name: 'Sweet Purple X Purple Erkel X Girl Scout Cookies',
    thc: '29%',
    cbd: '1%',
    terpenes: 'Limonene/Pinene/Caryophyllene',
    floweringTime: 11
},
{
    name: 'Sour Diesel X Unknown',
    thc: '26%',
    cbd: '5%',
    terpenes: 'Linalool/Myrcene/Humulene',
    floweringTime: 9
},
{
    name: 'Special K X Chronic Kushberry',
    thc: '20%',
    cbd: '6%',
    terpenes: 'Myrcene/Caryophyllene/Limonene',
    floweringTime: 10
},
{
    name: 'Unknown',
    thc: '23%',
    cbd: '8%',
    terpenes: 'Limonene/Myrcene/Pinene',
    floweringTime: 9
},
{
    name: 'Mendo Breath',
    thc: '28%',
    cbd: '4%',
    terpenes: 'Caryophyllene/Linalool/Myrcene',
    floweringTime: 10
},
{
    name: 'Purple Erkel X Girl Scout Cookies',
    thc: '24%',
    cbd: '7%',
    terpenes: 'Limonene/Humulene/Linalool',
    floweringTime: 9
},
{
    name: 'Girl Scout Cookies',
    thc: '25%',
    cbd: '2%',
    terpenes: 'Pinene/Caryophyllene/Myrcene',
    floweringTime: 11
},
{
    name: 'Kush-It',
    thc: '27%',
    cbd: '5%',
    terpenes: 'Limonene/Myrcene/Caryophyllene',
    floweringTime: 9
},
{
    name: '818',
    thc: '21%',
    cbd: '9%',
    terpenes: 'Linalool/Humulene/Pinene',
    floweringTime: 8
},
{
    name: 'OG Kush X Meadband X Master Kush',
    thc: '28%',
    cbd: '3%',
    terpenes: 'Caryophyllene/Myrcene/Limonene',
    floweringTime: 10
},
{
    name: 'Purple Kush X Super Silver Haze',
    thc: '25%',
    cbd: '4%',
    terpenes: 'Linalool/Pinene/Caryophyllene',
    floweringTime: 9
},
{
    name: 'Sensi Star',
    thc: '29%',
    cbd: '1%',
    terpenes: 'Limonene/Myrcene/Humulene',
    floweringTime: 11
},
{
    name: 'Mendo Breath',
    thc: '19%',
    cbd: '7%',
    terpenes: 'Caryophyllene/Pinene/Linalool',
    floweringTime: 9
},
{
    name: 'C4 X Blue Dream X Hardy',
    thc: '23%',
    cbd: '8%',
    terpenes: 'Myrcene/Linalool/Caryophyllene',
    floweringTime: 10
},
{
    name: 'Sensi Star X San Fernando Monster',
    thc: '27%',
    cbd: '6%',
    terpenes: 'Limonene/Caryophyllene/Myrcene',
    floweringTime: 9
},
{
    name: 'Sour Diesel X Unknown',
    thc: '20%',
    cbd: '9%',
    terpenes: 'Linalool/Myrcene/Pinene',
    floweringTime: 8
},
{
    name: 'Pure Kush X 808 OG Kush',
    thc: '26%',
    cbd: '5%',
    terpenes: 'Caryophyllene/Linalool/Humulene',
    floweringTime: 10
},
{
    name: 'OG Kush X Super Silver Haze',
    thc: '24%',
    cbd: '2%',
    terpenes: 'Myrcene/Limonene/Pinene',
    floweringTime: 11
},
{
    name: 'OG Kush X San Fernando Monster',
    thc: '28%',
    cbd: '1%',
    terpenes: 'Limonene/Caryophyllene/Linalool',
    floweringTime: 9
},
{
    name: 'OG Kush X Purple Bubblegum X C4',
    thc: '25%',
    cbd: '3%',
    terpenes: 'Pinene/Myrcene/Caryophyllene',
    floweringTime: 10
},
{
    name: 'OG Kush X Bubba Kush',
    thc: '27%',
    cbd: '4%',
    terpenes: 'Limonene/Humulene/Myrcene',
    floweringTime: 9
},
{
    name: 'Tahoe OG',
    thc: '20%',
    cbd: '6%',
    terpenes: 'Caryophyllene/Myrcene/Linalool',
    floweringTime: 10
},
{
    name: 'Kush-It',
    thc: '26%',
    cbd: '7%',
    terpenes: 'Limonene/Caryophyllene/Pinene',
    floweringTime: 9
},
{
    name: 'Canna-tsu',
    thc: '23%',
    cbd: '8%',
    terpenes: 'Linalool/Myrcene/Humulene',
    floweringTime: 8
},
{
    name: 'Sour Diesel X Cherry Pie',
    thc: '29%',
    cbd: '2%',
    terpenes: 'Limonene/Myrcene/Caryophyllene',
    floweringTime: 11
},
{
    name: 'Hell Fire',
    thc: '25%',
    cbd: '3%',
    terpenes: 'Pinene/Limonene/Linalool',
    floweringTime: 9
},
{
    name: 'Doubl Tangie Banana',
    thc: '24%',
    cbd: '9%',
    terpenes: 'Myrcene/Caryophyllene/Pinene',
    floweringTime: 10
},
{
    name: 'grape Tangie Banana',
    thc: '28%',
    cbd: '4%',
    terpenes: 'Limonene/Myrcene/Linalool',
    floweringTime: 9
},
{
    name: 'CBD Strain',
    thc: '19%',
    cbd: '5%',
    terpenes: 'Caryophyllene/Pinene/Humulene',
    floweringTime: 8
},
{
    name: 'Banana Split',
    thc: '27%',
    cbd: '6%',
    terpenes: 'Limonene/Myrcene/Linalool',
    floweringTime: 10
},
{
    name: 'Cinex',
    thc: '20%',
    cbd: '7%',
    terpenes: 'Myrcene/Caryophyllene/Pinene',
    floweringTime: 9
},
{
    name: 'ChemDog',
    thc: '26%',
    cbd: '8%',
    terpenes: 'Linalool/Myrcene/Humulene',
    floweringTime: 10
},
{
    name: 'Blue Essence',
    thc: '24%',
    cbd: '0%',
    terpenes: 'Limonene/Myrcene/Caryophyllene',
    floweringTime: 11
},
{
    name: 'Black 84',
    thc: '28%',
    cbd: '1%',
    terpenes: 'Pinene/Limonene/Linalool',
    floweringTime: 9
},
{
    name: 'Sour Tsunami',
    thc: '23%',
    cbd: '2%',
    terpenes: 'Myrcene/Caryophyllene/Humulene',
    floweringTime: 10
},
{
    name: 'C4 x Canna-Tsu',
    thc: '27%',
    cbd: '3%',
    terpenes: 'Limonene/Myrcene/Pinene',
    floweringTime: 9
},
{
    name: 'C4',
    thc: '25%',
    cbd: '4%',
    terpenes: 'Caryophyllene/Linalool/Myrcene',
    floweringTime: 10
},
{
    name: 'Tangie',
    thc: '28%',
    cbd: '5%',
    terpenes: 'Myrcene/Limonene/Linalool',
    floweringTime: 9
},
{
    name: 'Clifford',
    thc: '20%',
    cbd: '6%',
    terpenes: 'Pinene/Caryophyllene/Myrcene',
    floweringTime: 10
},
{
    name: 'Acrata Trainwreck',
    thc: '27%',
    cbd: '7%',
    terpenes: 'Limonene/Myrcene/Caryophyllene',
    floweringTime: 9
},
{
    name: 'Sleestack x Skunk',
    thc: '23%',
    cbd: '8%',
    terpenes: 'Linalool/Pinene/Humulene',
    floweringTime: 8
},
{
    name: 'Amnesia Haze',
    thc: '29%',
    cbd: '0%',
    terpenes: 'Myrcene/Limonene/Linalool',
    floweringTime: 11
},
{
    name: 'Fire Angel',
    thc: '25%',
    cbd: '1%',
    terpenes: 'Pinene/Myrcene/Caryophyllene',
    floweringTime: 9
},
{
    name: 'Golden Ticket',
    thc: '24%',
    cbd: '2%',
    terpenes: 'Limonene/Myrcene/Humulene',
    floweringTime: 10
},
{
    name: 'Cherry Diesel',
    thc: '28%',
    cbd: '3%',
    terpenes: 'Caryophyllene/Pinene/Linalool',
    floweringTime: 9
},
{
    name: 'Killawatt',
    thc: '26%',
    cbd: '4%',
    terpenes: 'Myrcene/Limonene/Pinene',
    floweringTime: 11
},
{
    name: 'Sour Tsunami',
    thc: '27%',
    cbd: '5%',
    terpenes: 'Limonene/Caryophyllene/Myrcene',
    floweringTime: 9
},
{
    name: 'Sour Kush',
    thc: '24%',
    cbd: '0%',
    terpenes: 'Linalool/Myrcene/Caryophyllene',
    floweringTime: 9
},
{
    name: 'New York Sour Diesel',
    thc: '25%',
    cbd: '1%',
    terpenes: 'Pinene/Limonene/Myrcene',
    floweringTime: 10
},
{
    name: 'Mothers Milk',
    thc: '28%',
    cbd: '2%',
    terpenes: 'Limonene/Caryophyllene/Linalool',
    floweringTime: 11
},
{
    name: 'Blueberry',
    thc: '26%',
    cbd: '3%',
    terpenes: 'Myrcene/Pinene/Caryophyllene',
    floweringTime: 9
},
{
    name: 'Primus OG',
    thc: '20%',
    cbd: '4%',
    terpenes: 'Limonene/Myrcene/Linalool',
    floweringTime: 10
},
{
    name: 'Sour Tsunami',
    thc: '27%',
    cbd: '5%',
    terpenes: 'Pinene/Caryophyllene/Myrcene',
    floweringTime: 9
},
{
    name: 'ACDC',
    thc: '24%',
    cbd: '6%',
    terpenes: 'Limonene/Myrcene/Caryophyllene',
    floweringTime: 11
},
{
    name: 'Kona Kush',
    thc: '29%',
    cbd: '7%',
    terpenes: 'Linalool/Pinene/Myrcene',
    floweringTime: 9
},
{
    name: 'Glue on Fire #1',
    thc: '23%',
    cbd: '8%',
    terpenes: 'Caryophyllene/Myrcene/Limonene',
    floweringTime: 10
},
{
    name: 'Outer Space',
    thc: '27%',
    cbd: '9%',
    terpenes: 'Limonene/Linalool/Caryophyllene',
    floweringTime: 9
},
{
    name: 'Bio Diesel',
    thc: '20%',
    cbd: '0%',
    terpenes: 'Myrcene/Pinene/Linalool',
    floweringTime: 10
},
{
    name: 'Red Eye OG',
    thc: '26%',
    cbd: '1%',
    terpenes: 'Limonene/Myrcene/Caryophyllene',
    floweringTime: 9
},
{
    name: 'Strawberry Lemonade',
    thc: '25%',
    cbd: '2%',
    terpenes: 'Pinene/Limonene/Linalool',
    floweringTime: 11
},
{
    name: 'Jack Herrer',
    thc: '28%',
    cbd: '3%',
    terpenes: 'Myrcene/Caryophyllene/Pinene',
    floweringTime: 9
},
{
    name: 'Super Jack',
    thc: '23%',
    cbd: '4%',
    terpenes: 'Limonene/Linalool/Myrcene',
    floweringTime: 10
},
{
    name: 'Primus OG',
    thc: '29%',
    cbd: '5%',
    terpenes: 'Pinene/Caryophyllene/Limonene',
    floweringTime: 11
},
{
    name: 'Snoop Master',
    thc: '24%',
    cbd: '6%',
    terpenes: 'Limonene/Myrcene/Linalool',
    floweringTime: 9
},
{
    name: 'Tangerine Dream',
    thc: '28%',
    cbd: '7%',
    terpenes: 'Caryophyllene/Myrcene/Pinene',
    floweringTime: 10
},
    {
        name: 'Dirks OG',
        thc: '26%',
        cbd: '8%',
        terpenes: 'Limonene/Linalool/Caryophyllene',
        floweringTime: 9
    }
];
const terpeneFlavors = {
    'Limonene': 'a burst of zesty lemon and citrus fruits, reminiscent of a sunny orchard',
    'Myrcene': 'deep earthy undertones with musky notes, complemented by hints of juicy grapes and sweet tropical fruits',
    'Caryophyllene': 'a bold spicy kick, with warm peppery nuances and a comforting touch of cloves',
    'Linalool': 'soothing floral notes, evoking fields of blooming lavender under a summer sky',
    'Pinene': 'a refreshing scent of pine forest, bringing to mind a tranquil walk among towering trees',
    'Humulene': 'a robust woody essence, paired with subtle earthy tones and the fresh scent of green hops',
    'Terpinolene': 'a medley of sweet fruits, with traces of apples and lilacs, rounded off by a hint of herbal freshness',
    'Ocimene': 'a vibrant splash of sweet and tropical aromas, reminiscent of a lush rainforest canopy',
    'Camphene': 'a cool forest scent, with whispers of damp woods and fresh ferns',
    'Bisabolol': 'a delicate touch of floral chamomile, evoking a calm and serene meadow',

};

window.onload = function() {
    const parent1Dropdown = document.getElementById('parent1');
    const parent2Dropdown = document.getElementById('parent2');

    strains.forEach(strain => {
        parent1Dropdown.innerHTML += `<option value="${strain.name}">${strain.name}</option>`;
        parent2Dropdown.innerHTML += `<option value="${strain.name}">${strain.name}</option>`;
    });
}

function generateDescription() {
    const parent1 = document.getElementById('parent1').value;
    const parent2 = document.getElementById('parent2').value;
    
    const parent1Data = strains.find(strain => strain.name === parent1);
    const parent2Data = strains.find(strain => strain.name === parent2);
    
    const avgTHC = (parseFloat(parent1Data.thc) + parseFloat(parent2Data.thc)) / 2;
    const avgCBD = (parseFloat(parent1Data.cbd) + parseFloat(parent2Data.cbd)) / 2;
    const avgFloweringTime = (parent1Data.floweringTime + parent2Data.floweringTime) / 2;
    
    const combinedTerpenes = [...new Set([...parent1Data.terpenes.split('/'), ...parent2Data.terpenes.split('/')])];
    
    // Generate flavor descriptions based on the terpenes
    const flavorDescriptions = combinedTerpenes.map(terpene => terpeneFlavors[terpene] || terpene).join(', ');

    // Determine effects based on terpenes
    const sativaTerpenes = ['Limonene', 'Pinene'];
    const hybridTerpenes = ['Myrcene', 'Caryophyllene'];
    const indicaTerpenes = ['Linalool', 'Humulene'];

    let sativaCount = 0;
    let hybridCount = 0;
    let indicaCount = 0;

    combinedTerpenes.forEach(terpene => {
        if (sativaTerpenes.includes(terpene)) sativaCount++;
        if (hybridTerpenes.includes(terpene)) hybridCount++;
        if (indicaTerpenes.includes(terpene)) indicaCount++;
    });

    let effectDescription;
    if (sativaCount > hybridCount && sativaCount > indicaCount) {
        effectDescription = "This strain promises an energizing and uplifting experience, typical of Sativa strains.";
    } else if (hybridCount > sativaCount && hybridCount > indicaCount) {
        effectDescription = "Expect a balanced high with a mix of relaxation and energy, reminiscent of Hybrid strains.";
    } else if (indicaCount > sativaCount && indicaCount > hybridCount) {
        effectDescription = "The effects lean towards relaxation and calmness, much like Indica strains.";
    } else {
        effectDescription = "The unique blend of terpenes suggests a novel experience waiting to be discovered.";
    }

    const description = `The hybrid of ${parent1} and ${parent2} will have an estimated THC content of ${avgTHC.toFixed(2)}% and CBD of ${avgCBD.toFixed(2)}%. The flowering time is expected to be around ${avgFloweringTime.toFixed(1)} weeks. Dive into a symphony of flavors with ${flavorDescriptions}. ${effectDescription}`;
    
    document.getElementById('output').innerText = description;

}
