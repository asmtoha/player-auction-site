var fakeData = [
    {
        "id": 1,
        "name": "Mashrafe Mortaza",
        "img": "https://www.cricbuzz.com/a/img/v1/152x152/i1/c170920/mashrafe-mortaza.jpg",
        "nationality":"Bangladeshi",
        "sign":"✅",
        "salary": 7000
    },
    {
        "id": 2,
        "name": "Shakib Al-Hasan",
        "img": "https://www.cricbuzz.com/a/img/v1/152x152/i1/c170912/shakib-al-hasan.jpg",
        "nationality":"Bangladeshi",
        "sign":"✅",
        "salary": 4000
    },
    {
        "id": 3,
        "name": "Tamim Iqbal",
        "img": "https://www.cricbuzz.com/a/img/v1/152x152/i1/c170899/tamim-iqbal.jpg",
        "nationality":"Bangladeshi",
        "sign":"✅",
        "salary": 7000
    },
    {
        "id": 4,
        "name": "Mushfiqur Rahim",
        "img": "https://www.cricbuzz.com/a/img/v1/152x152/i1/c170916/mushfiqur-rahim.jpg",
        "nationality":"Bangladeshi",
        "sign":"✅",
        "salary": 3000
    },
    {
        "id": 5,
        "name": "Mahmudullah",
        "img": "https://www.cricbuzz.com/a/img/v1/152x152/i1/c170905/mahmudullah.jpg",
        "nationality":"Bangladeshi",
        "sign":"✅",
        "salary": 6400
    },
    {
        "id": 6,
        "name": "Mohammad Saifuddin",
        "img": "https://www.cricbuzz.com/a/img/v1/152x152/i1/c170907/mohammad-saifuddin.jpg",
        "nationality":"Bangladeshi",
        "sign":"✅",
        "salary": 5500
    },
    {
        "id": 7,
        "name": "Liton Das",
        "img": "https://www.cricbuzz.com/a/img/v1/152x152/i1/c170914/liton-das.jpg",
        "nationality":"Bangladeshi",
        "sign":"✅",
        "salary": 4500
    },
    {
        "id": 8,
        "name": "Mustafizur Rahman",
        "img": "https://www.cricbuzz.com/a/img/v1/152x152/i1/c170925/mustafizur-rahman.jpg",
        "nationality":"Bangladeshi",
        "sign":"✅",
        "salary": 4501
    },
    {
        "id": 9, "name": "Sabbir Rahman",
        "img": "https://www.cricbuzz.com/a/img/v1/152x152/i1/c170903/sabbir-rahman.jpg",
        "nationality":"Bangladeshi",
        "sign":"✅",
        "salary": 4000
    },
    {
        "id": 10, "name": "Soumya Sarkar",
        "img": "https://www.cricbuzz.com/a/img/v1/152x152/i1/c170900/soumya-sarkar.jpg",
        "nationality":"Bangladeshi",
        "sign":"✅",
        "salary": 3000
    },
    {
        "id": 11, "name": "Mehidy Hasan",
        "img": "https://www.cricbuzz.com/a/img/v1/152x152/i1/c148289/mehidy-hasan.jpg",
        "nationality":"Bangladeshi",
        "sign":"✅",
        "salary": 2500
    },
    {
        "id": 12, "name": "Rubel Hossain",
        "img": "https://www.cricbuzz.com/a/img/v1/152x152/i1/c170922/rubel-hossain.jpg",
        "nationality":"Bangladeshi",
        "sign":"✅",
        "salary": 3570
    },
    {
        "id": 13, "name": "Mosaddek Hossain",
        "img": "https://www.cricbuzz.com/a/img/v1/152x152/i1/c170909/mosaddek-hossain.jpg",
        "nationality":"Bangladeshi",
        "sign":"✅",
        "salary": 2345
    },
    {
        "id": 14,
        "name": "Mohammad Ashraful",
        "img": "https://www.cricbuzz.com/a/img/v1/152x152/i1/c155769/mohammad-ashraful.jpg",
        "nationality":"Bangladeshi",
        "sign":"✅",
        "salary": 4532
    },
    {
        "id": 15, "name": "Imrul Kayes",
        "img": "https://www.cricbuzz.com/a/img/v1/152x152/i1/c148273/imrul-kayes.jpg",
        "nationality":"Bangladeshi",
        "sign":"✅",
        "salary": 3242
    },
    {
        "id": 16, 
        "name": "David Warner", 
        "img": "https://www.cricbuzz.com/a/img/v1/152x152/i1/c170635/david-warner.jpg",
        "nationality":"Australian",
        "sign":"✅",
        "salary": 5600
    },
    {
        "id": 17,
        "name": "Kane Williamson",
        "img": "https://www.cricbuzz.com/a/img/v1/152x152/i1/c170733/kane-williamson.jpg",
        "nationality":"New Zealander",
        "sign":"✅",
        "salary": 6500
    },
    {
        "id": 18,
        "name": "Faf du Plessis",
        "img": "https://www.cricbuzz.com/a/img/v1/152x152/i1/c170639/faf-du-plessis.jpg",
        "nationality":"South African",
        "sign":"✅",
        "salary": 5432
    },
    {
        "id": 19,
        "name": "MS Dhoni",
        "img": "https://www.cricbuzz.com/a/img/v1/152x152/i1/c170677/ms-dhoni.jpg",
        "nationality":"Indian",
        "sign":"✅",
        "salary": 7000
    },
    {
        "id": 20,
        "name": "Virat Kohli",
        "img": "https://www.cricbuzz.com/a/img/v1/152x152/i1/c170661/virat-kohli.jpg",
        "nationality":"Indian",
        "sign":"✅",
        "salary": 6500
    }]
const shuffle = a => {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}

shuffle(fakeData);

export default fakeData;