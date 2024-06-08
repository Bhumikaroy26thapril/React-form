import React, { useState } from 'react';

const initialFormData = {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    phoneNo: '',
    country: '',
    city: '',
    panNo: '',
    aadharNo: ''
};
const countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Democratic Republic of the Congo",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "East Timor",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Ivory Coast",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Kosovo",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Korea",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestine",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Korea",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican City",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe"
];


const countryCities = {
    "Afghanistan": ["Kabul", "Kandahar", "Herat", "Mazar-i-Sharif", "Jalalabad", "Kunduz", "Lashkar Gah", "Taloqan", "Puli Khumri", "Khost", "Ghazni", "Sheberghan", "Sar-e Pol", "Chaghcharan", "Farah", "Pul-i-Alam", "Gardez", "Zaranj"],
    "Albania": ["Tirana", "Durres", "Vlore", "Shkoder", "Fier", "Korce", "Elbasan", "Berat", "Lushnje", "Kavaje", "Patos", "Kruje", "Lezhe", "Kucove", "Kukes", "Bajram Curri", "Sarande", "Permet"],
    "Algeria": ["Algiers", "Oran", "Constantine", "Annaba", "Batna", "Setif", "Sidi Bel Abbes", "Blida", "Tlemcen", "Bejaia", "Tiaret", "Ech Chettia", "Guelma", "El Oued", "Skikda", "Medea", "Tizi Ouzou", "Biskra"],
    "Andorra": ["Andorra la Vella", "Escaldes-Engordany", "Encamp", "Sant Julia de Loria", "La Massana", "Canillo"],
    "Angola": ["Luanda", "Huambo", "Lobito", "Benguela", "Kuito", "Lubango", "Malanje", "Namibe", "Soyo", "Cabinda", "Uige", "Saurimo", "Sumbe", "Cuito Caunavale", "Ndalatando", "Lucapa", "Camacupa", "Mbanza Congo"],
    "Antigua and Barbuda": ["St. John's", "All Saints", "Liberta", "Bolans", "Piggotts", "English Harbour", "Falmouth", "Carlisle", "Parham", "Potters Village", "Codrington", "Swetes", "Seaview Farm"],
    "Argentina": ["Buenos Aires", "Cordoba", "Rosario", "Mendoza", "San Miguel de Tucuman", "La Plata", "Mar del Plata", "Salta", "Santa Fe", "San Juan", "Resistencia", "Santiago del Estero", "Corrientes", "Posadas", "San Salvador de Jujuy"],
    "Armenia": ["Yerevan", "Gyumri", "Vanadzor", "Vagharshapat", "Hrazdan", "Abovyan", "Kapan", "Ararat", "Armavir", "Gavarr", "Artashat", "Goris", "Masis", "Ashtarak", "Sevan"],
    "Australia": ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide", "Gold Coast", "Canberra", "Newcastle", "Central Coast", "Wollongong", "Sunshine Coast", "Hobart", "Geelong", "Townsville", "Cairns"],
    "Austria": ["Vienna", "Graz", "Linz", "Salzburg", "Innsbruck", "Klagenfurt", "Villach", "Wels", "Steyr", "Dornbirn", "Wiener Neustadt", "Baden", "Wolfsberg", "Leoben", "Klosterneuburg"],
    "Azerbaijan": ["Baku", "Ganja", "Sumqayit", "Mingachevir", "Lankaran", "Shirvan", "Shaki", "Yevlakh", "Barda", "Goycay", "Khachmaz", "Sheki", "Bilasuvar", "Naftalan", "Quba"],
    "Bahamas": ["Nassau", "Lucaya", "Freeport", "West End", "Cooper's Town", "Marsh Harbour", "High Rock", "Andros Town", "Clarence Town", "Dunmore Town", "Rock Sound", "Arthur's Town", "George Town", "Alice Town"],
    "Bahrain": ["Manama", "Riffa", "Muharraq", "Hamad Town", "A'ali", "Isa Town", "Sitra", "Jidhafs", "Al-Malikiyah", "Al-Muharraq", "Adliya", "Sanabis", "Tubli", "Saar", "Budaiya"],
    "Bangladesh": ["Dhaka", "Chittagong", "Khulna", "Rajshahi", "Comilla", "Rangpur", "Barisal", "Sylhet", "Narayanganj", "Mymensingh", "Mymensingh", "Narsingdi", "Jessor", "Tangail", "Bogra"],
    "Barbados": ["Bridgetown", "Speightstown", "Oistins", "Bathsheba", "Holetown", "Crane", "Black Rock", "Hillaby", "Bridgetown", "Bathsheba", "Speightstown", "Oistins"],
    "Belarus": ["Minsk", "Gomel", "Mogilev", "Vitebsk", "Hrodna", "Brest", "Babruysk", "Baranovichi", "Borisov", "Pinsk", "Orsha", "Mozyr", "Lida", "Molodechno", "Slutsk"],
    "Belgium": ["Brussels", "Antwerp", "Ghent", "Charleroi", "Liege", "Bruges", "Namur", "Leuven", "Mons", "Aalst", "Mechelen", "La Louviere", "Kortrijk", "Hasselt", "Ostend"],
    "Belize": ["Belmopan", "Belize City", "San Ignacio", "Orange Walk Town", "Dangriga", "Corozal Town", "Punta Gorda", "Benque Viejo del Carmen", "San Pedro", "Cayo", "Stann Creek", "Toledo"],
    "Benin": ["Porto-Novo", "Cotonou", "Abomey-Calavi", "Parakou", "Djougou", "Bohicon", "Kandi", "Lokossa", "Ouidah", "Abomey", "Natitingou", "Save", "Nikki", "Tchaourou"],
    "Bolivia": ["La Paz", "Sucre", "Santa Cruz de la Sierra", "El Alto", "Cochabamba", "Oruro", "Tarija", "Potosi", "Sacaba", "Montero", "Trinidad", "Yacuiba", "Riberalta", "Quillacollo", "Cobija", "Villazon", "Warnes", "San Ignacio de Velasco"],
    "Bosnia and Herzegovina": ["Sarajevo", "Banja Luka", "Tuzla", "Zenica", "Mostar", "Bijeljina", "Prijedor", "Brcko", "Trebinje", "Doboj", "Cazin", "Bihac", "Velika Kladusa", "Sanski Most", "Bugojno", "Livno", "Travnik", "Konjic"],
    "Botswana": ["Gaborone", "Francistown", "Molepolole", "Serowe", "Selibe Phikwe", "Maun", "Lobatse", "Palapye", "Ramotswa", "Thamaga", "Mochudi", "Kanye", "Mahalapye", "Mogoditshane", "Letlhakane", "Tonota", "Ghanzi", "Jwaneng"],
    "Brazil": ["Sao Paulo", "Rio de Janeiro", "Brasilia", "Salvador", "Fortaleza", "Belo Horizonte", "Manaus", "Curitiba", "Recife", "Porto Alegre", "Belem", "Goiania", "Guarulhos", "Campinas", "Nova Iguaçu", "Sao Luis", "Sao Goncalo", "Maceio"],
    "Brunei": ["Bandar Seri Begawan", "Kuala Belait", "Seria", "Tutong", "Bangar"],
    "Bulgaria": ["Sofia", "Plovdiv", "Varna", "Burgas", "Ruse", "Stara Zagora", "Pleven", "Sliven", "Dobrich", "Shumen", "Pernik", "Yambol", "Haskovo", "Pazardzhik", "Blagoevgrad", "Veliko Tarnovo", "Gabrovo", "Asenovgrad"],
    "Burkina Faso": ["Ouagadougou", "Bobo-Dioulasso", "Koudougou", "Ouahigouya", "Banfora", "Dedougou", "Kaya", "Tenkodogo", "Fada N'gourma", "Hounde", "Garango", "Kongoussi", "Diapaga", "Nouna", "Zorgo", "Reo", "Kombissiri", "Gorom-Gorom"],
    "Burundi": ["Bujumbura", "Gitega", "Ngozi", "Ruyigi", "Muyinga", "Kayanza", "Muramvya", "Bururi", "Makamba", "Cibitoke", "Rutana", "Feruzi", "Isale", "Rumonge", "Bugarama", "Kabezi", "Bubanza", "Gashikanwa"],
    "Cabo Verde": ["Praia", "Mindelo", "Santa Maria", "Cova Figueira", "Pedra Badejo", "Assomada", "Porto Novo", "Espargos", "Tarrafal", "Ponta do Sol", "Porto dos Mosteiros", "Ribeira Brava", "Calheta de Sao Miguel", "Vila do Maio", "Ribeira Grande"],
    "Cambodia": ["Phnom Penh", "Siem Reap", "Battambang", "Sihanoukville", "Poipet", "Prey Veng", "Kampong Cham", "Kampong Chhnang", "Kampong Speu", "Kampot", "Koh Kong", "Kratié", "Stung Treng", "Pursat", "Ta Khmau", "Svay Rieng", "Sisophon"],
    "Cameroon": ["Yaounde", "Douala", "Garoua", "Kousseri", "Bamenda", "Maroua", "Bafoussam", "Mokolo", "Ngaoundere", "Bertoua", "Ebolowa", "Loum", "Kumba", "Foumban", "Nkongsamba", "Bafia", "Mbouda", "Dschang"],
    "Canada": ["Toronto", "Montreal", "Vancouver", "Calgary", "Edmonton", "Ottawa", "Winnipeg", "Quebec City", "Hamilton", "Kitchener", "London", "Victoria", "St. Catharines", "Halifax", "Oshawa", "Windsor", "Sherbrooke", "Saskatoon"],
    "Central African Republic": ["Bangui", "Bimbo", "Berberati", "Carnot", "Bambari", "Bria", "Bouar", "Bossangoa", "Bozoum", "Nola", "Kaga-Bandoro", "Sibut", "Mobaye", "Nanga Boguila", "Bossembele", "Obo", "Alindao", "Batangafo"],
    "Chad": ["N'Djamena", "Moundou", "Sarh", "Abeche", "Kelo", "Koumra", "Pala", "Am Timan", "Bongor", "Mongo", "Doba", "Ati", "Faya-Largeau", "Lai", "Massaguet", "Kyabe", "Benoye", "Biltine"],
    "Chile": ["Santiago", "Puente Alto", "Maipu", "La Florida", "Concepcion", "La Serena", "Antofagasta", "Valparaiso", "Talcahuano", "San Bernardo", "Temuco", "Iquique", "Rancagua", "Talca", "Arica", "Coquimbo", "Puerto Montt", "Chillan"],
    "China": ["Shanghai", "Beijing", "Guangzhou", "Shenzhen", "Wuhan", "Tianjin", "Chongqing", "Hong Kong", "Dongguan", "Nanjing", "Taipei", "Chengdu", "Hangzhou", "Xi'an", "Shenyang", "Harbin", "Suzhou", "Jinan"],
    "Colombia": ["Bogota", "Medellin", "Cali", "Barranquilla", "Cartagena", "Cucuta", "Bucaramanga", "Pereira", "Santa Marta", "Ibague", "Villavicencio", "Soledad", "Pasto", "Monteria", "Neiva", "Sincelejo", "Armenia", "Manizales"],
    "Comoros": ["Moroni", "Mutsamudu", "Fomboni", "Domoni", "Sima"],
    "Congo": ["Brazzaville", "Pointe-Noire", "Dolisie", "Nkayi", "Impfondo", "Ouesso", "Owando", "Loandjili", "Kinkala", "Sibiti", "Mossendjo", "Madingou", "Brazzaville-Mfilou", "Gamboma", "Makoua", "Ewo", "Loubomo"],
    "Costa Rica": ["San Jose", "Limon", "San Francisco", "Alajuela", "Liberia", "Paraiso", "Puntarenas", "San Vicente", "San Isidro", "Curridabat", "San Vicente", "San Rafael Abajo", "Nicoya", "Puerto Limon", "Heredia", "San Pablo"],
    "Croatia": ["Zagreb", "Split", "Rijeka", "Osijek", "Zadar", "Slavonski Brod", "Pula", "Sesvete", "Karlovac", "Varazdin", "Sibenik", "Sisak", "Velika Gorica", "Vinkovci", "Vukovar", "Dubrovnik", "Bjelovar"],
    "Cuba": ["Havana", "Santiago de Cuba", "Camaguey", "Holguin", "Guantanamo", "Santa Clara", "Las Tunas", "Bayamo", "Cienfuegos", "Pinar del Rio", "Manzanillo", "Matanzas", "Ciego de Avila", "Sancti Spiritus", "Cardenas", "Palma Soriano"],
    "Cyprus": ["Nicosia", "Limassol", "Larnaca", "Famagusta", "Paphos", "Kyrenia", "Protaras", "Morphou", "Aradippou", "Paralimni", "Lakatamia", "Tsada", "Polis", "Latsia", "Deryneia", "Aglandjia"],
    "Czech Republic": ["Prague", "Brno", "Ostrava", "Plzen", "Liberec", "Olomouc", "Usti nad Labem", "Hradec Kralove", "Ceske Budejovice", "Pardubice", "Havirov", "Zlin", "Kladno", "Most", "Opava", "Frydek-Mistek"],
    "Democratic Republic of the Congo": ["Kinshasa", "Lubumbashi", "Mbuji-Mayi", "Kananga", "Kisangani", "Bukavu", "Tshikapa", "Likasi", "Kolwezi", "Mbandaka", "Matadi", "Uvira", "Butembo", "Goma", "Isiro", "Bunia"],
    "Denmark": ["Copenhagen", "Aarhus", "Odense", "Aalborg", "Esbjerg", "Randers", "Kolding", "Vejle", "Horsens", "Roskilde", "Herning", "Silkeborg", "Naestved", "Fredericia", "Helsingor", "Viborg"],
    "Djibouti": ["Djibouti", "Ali Sabieh", "Tadjoura", "Obock", "Dikhil", "Arta", "Holhol"],
    "Dominica": ["Roseau", "Portsmouth", "Marigot", "Berekua", "Mahaut", "Saint Joseph", "Wesley", "Soufriere", "La Plaine", "Salisbury", "Castle Bruce", "Pointe Michel", "Grand Fond", "Petite Soufriere"],
    "Dominican Republic": ["Santo Domingo", "Santiago de los Caballeros", "Santo Domingo Este", "Santo Domingo Oeste", "San Pedro de Macoris", "La Romana", "San Cristobal", "Puerto Plata", "Santo Domingo Norte", "Santiago", "San Francisco de Macoris", "San Felipe de Puerto Plata", "Higuey", "La Vega", "Barahona", "Bonao"],
    "East Timor": ["Dili", "Maliana", "Suai", "Aileu", "Ainaro", "Lospalos", "Baucau", "Viqueque", "Manatuto", "Gleno", "Ermera", "Same", "Maliana", "Liquica", "Lautem", "Ainaro", "Suai"],
    "Ecuador": ["Quito", "Guayaquil", "Cuenca", "Santo Domingo de los Colorados", "Machala", "Manta", "Portoviejo", "Duran", "Ambato", "Riobamba", "Quevedo", "Loja", "Ibarra", "Esmeraldas", "Babahoyo", "Latacunga"],
    "Egypt": ["Cairo", "Alexandria", "Giza", "Shubra El-Kheima", "Port Said", "Suez", "Luxor", "Mansura", "El-Mahalla El-Kubra", "Tanta", "Asyut", "Ismailia", "Fayyum", "Zagazig", "Aswan", "Damietta"],
    "El Salvador": ["San Salvador", "Santa Ana", "San Miguel", "Mejicanos", "Soyapango", "Delgado", "Sonsonate", "San Marcos", "Usulutan", "Apopa", "Cojutepeque", "San Martin", "Ilopango", "Zacatecoluca", "Ahuachapan", "La Union", "Colon"],
    "Equatorial Guinea": ["Malabo", "Bata", "Ebebiyin", "Aconibe", "Anisoc", "Luba", "Evinayong", "Mongomo", "Mikomeseng", "Rebola", "Nsok", "Ayene", "Nsang", "Añisoc", "Mbini", "Evinayong", "Bidjabidjan"],
    "Eritrea": ["Asmara", "Keren", "Massawa", "Assab", "Mendefera", "Barentu", "Adi Keyh", "Edd", "Dekemhare", "Ak'ordat", "Teseney", "Addi Ugri", "Segeneiti", "Adi Quala", "Emba Derho", "Mai Edaga"],
    "Estonia": ["Tallinn", "Tartu", "Narva", "Parnu", "Kohtla-Jarve", "Viljandi", "Rakvere", "Sillamae", "Maardu", "Kuressaare", "Voru", "Valga", "Haapsalu", "Johvi", "Paide", "Keila"],
    "Eswatini": ["Mbabane", "Manzini", "Lobamba", "Siteki", "Mhlume", "Big Bend", "Piggs Peak", "Simunye", "Malkerns", "Nhlangano", "Hluti", "Mankayane", "Bhunya", "Lavumisa", "Sidvokodvo"],
    "Ethiopia": ["Addis Ababa", "Dire Dawa", "Mek'ele", "Adama", "Bahir Dar", "Gonder", "Dessie", "Jimma", "Hawassa", "Jijiga", "Shashamane", "Debre Markos", "Dilla", "Sodo", "Arba Minch", "Gambela"],
    "Fiji": ["Suva", "Lautoka", "Nadi", "Labasa", "Ba", "Levuka", "Savusavu", "Sigatoka", "Nausori", "Tavua", "Rakiraki", "Navua", "Nadi", "Lami", "Korovou", "Nadi", "Savusavu"],
    "Finland": ["Helsinki", "Espoo", "Tampere", "Vantaa", "Oulu", "Turku", "Jyvaskyla", "Lahti", "Kuopio", "Pori", "Kouvola", "Joensuu", "Lappeenranta", "Hameenlinna", "Vaasa", "Seinajoki"],
    "France": ["Paris", "Marseille", "Lyon", "Toulouse", "Nice", "Nantes", "Strasbourg", "Montpellier", "Bordeaux", "Lille", "Rennes", "Reims", "Le Havre", "Saint-Etienne", "Toulon", "Grenoble"],
    "Gabon": ["Libreville", "Port-Gentil", "Franceville", "Oyem", "Moanda", "Mouila", "Lambarene", "Tchibanga", "Koulamoutou", "Makokou", "Bitam", "Mounana", "Lastoursville", "Ndjole", "Fougamou"],
    "Gambia": ["Banjul", "Serekunda", "Brikama", "Bakau", "Lamin", "Farafenni", "Soma", "Gunjur", "Sukuta", "Basse Santa Su", "Bansang", "Barra", "Essau", "Georgetown", "Juffureh"],
    "Georgia": ["Tbilisi", "Kutaisi", "Batumi", "Rustavi", "Zugdidi", "Gori", "Poti", "Samtredia", "Khashuri", "Senaki", "Zestaponi", "Marneuli", "Telavi", "Akhaltsikhe", "Kobuleti"],
    "Germany": ["Berlin", "Hamburg", "Munich", "Cologne", "Frankfurt", "Stuttgart", "Dusseldorf", "Dortmund", "Essen", "Bremen", "Dresden", "Leipzig", "Hanover", "Nuremberg", "Duisburg", "Bochum"],
    "Ghana": ["Accra", "Kumasi", "Tamale", "Sekondi-Takoradi", "Sunyani", "Cape Coast", "Obuasi", "Tema", "Madina", "Ashiaman", "Koforidua", "Wa", "Techiman", "Ho", "Nungua", "Teshie"],
    "Greece": ["Athens", "Thessaloniki", "Patras", "Heraklion", "Larissa", "Volos", "Ioannina", "Chania", "Chalcis", "Katerini", "Salamis", "Serres", "Drama", "Alexandroupoli", "Kozani", "Elefsina"],
    "Grenada": ["St. George's", "Gouyave", "Grenville", "Victoria", "Sauteurs", "Hillsborough", "Chantimelle", "L'Anse aux Epines", "Petit Martinique"],
    "Guatemala": ["Guatemala City", "Mixco", "Villa Nueva", "Quetzaltenango", "San Miguel Petapa", "Escuintla", "Jalapa", "Chimaltenango", "Coatepeque", "Quetzaltenango", "Petaluma", "Chinautla", "Chichicastenango", "Totonicapan", "Puerto Barrios"],
    "Guinea": ["Conakry", "Nzerekore", "Kankan", "Kindia", "Boke", "Gueckedou", "Kissidougou", "Labé", "Siguiri", "Macenta", "Mamou", "Dabola", "Pita", "Telimele", "Fria", "Kamsar"],
    "Guinea-Bissau": ["Bissau", "Bafata", "Gabu", "Bissora", "Cacheu", "Bolama", "Fulacunda", "Buba", "Catio", "Quebo", "Bubaque", "Bissau", "Catio", "Bolama", "Mansoa", "Quinhámel"],
    "Guyana": ["Georgetown", "Linden", "New Amsterdam", "Bartica", "Skeldon", "Anna Regina", "Rosignol", "Mabaruma", "Mahdia", "Ituni", "Vreed en Hoop", "Fort Wellington", "Parika", "Lethem", "Kwakwani", "Mahaica"],
    "Haiti": ["Port-au-Prince", "Carrefour", "Delmas", "Cap-Haitien", "Petionville", "Port-de-Paix", "Jacmel", "Les Cayes", "Leogane", "Miragoane", "Gonaives", "Hinche", "Fort-Liberte", "Trou-du-Nord", "Verrettes", "Desarmes"],
    "Honduras": ["Tegucigalpa", "San Pedro Sula", "Choloma", "La Ceiba", "El Progreso", "Ciudad Choluteca", "Comayagua", "La Lima", "Danli", "Puerto Cortes", "Roatan", "Villanueva", "Siguatepeque", "Juticalpa", "La Entrada"],
    "Hungary": ["Budapest", "Debrecen", "Szeged", "Miskolc", "Pecs", "Gyor", "Nyiregyhaza", "Kecskemet", "Szekesfehervar", "Szombathely", "Paradsasvar", "Sopron", "Kaposvar", "Eger", "Nagykanizsa", "Dunaujvaros"],
    "Iceland": ["Reykjavik", "Kopavogur", "Hafnarfjordur", "Akureyri", "Reykjanesbær", "Mosfellsbær", "Akranes", "Selfoss", "Saudarkrokur", "Fjarðabyggð", "Isafjordur", "Husavik", "Borgarnes", "Egilsstaðir", "Hveragerði", "Sandgerði"],
    "India": ["Mumbai", "Delhi", "Bangalore", "Hyderabad", "Ahmedabad", "Chennai", "Kolkata", "Surat", "Pune", "Jaipur", "Lucknow", "Kanpur", "Nagpur", "Visakhapatnam", "Indore", "Thane"],
    "Indonesia": ["Jakarta", "Surabaya", "Bandung", "Medan", "Bekasi", "Tangerang", "Makassar", "South Tangerang", "Semarang", "Depok", "Palembang", "Batam", "Bogor", "Bandar Lampung", "Padang", "Denpasar"],
    "Iran": ["Tehran", "Mashhad", "Isfahan", "Karaj", "Tabriz", "Shiraz", "Ahvaz", "Qom", "Kermanshah", "Urmia", "Rasht", "Kerman", "Hamadan", "Yazd", "Ardabil", "Zahedan"],
    "Iraq": ["Baghdad", "Basra", "Sulaymaniyah", "Erbil", "Najaf", "Karbala", "Nasiriyah", "Amara", "Dhi Qar", "Kirkuk", "Diwaniyah", "Hilla", "Ramadi", "Kut", "Fallujah", "Mosul"],
    "Ireland": ["Dublin", "Cork", "Limerick", "Galway", "Waterford", "Drogheda", "Dundalk", "Swords", "Bray", "Navan", "Ennis", "Tralee", "Carlow", "Newbridge", "Naas", "Athlone"],
    "Israel": ["Jerusalem", "Tel Aviv", "Haifa", "Rishon LeZion", "Petah Tikva", "Ashdod", "Netanya", "Beersheba", "Holon", "Bnei Brak", "Ramat Gan", "Rehovot", "Bat Yam", "Ashkelon", "Jaffa", "Herzliya"],
    "Italy": ["Rome", "Milan", "Naples", "Turin", "Palermo", "Genoa", "Bologna", "Florence", "Bari", "Catania", "Venice", "Verona", "Messina", "Padua", "Trieste", "Taranto"],
    "Ivory Coast": ["Abidjan", "Bouake", "Daloa", "Yamoussoukro", "San-Pedro", "Divo", "Korhogo", "Anyama", "Abobo", "Gagnoa", "Man", "Dabou", "Duekoue", "Seguela", "Issia", "Grand-Bassam"],
    "Jamaica": ["Kingston", "Spanish Town", "Portmore", "Montego Bay", "Mandeville", "May Pen", "Old Harbour", "Linstead", "Half Way Tree", "Savanna-la-Mar", "Port Antonio", "Saint Ann's Bay", "Bog Walk", "Constant Spring", "Ewarton", "Hayes"],
    "Japan": ["Tokyo", "Yokohama", "Osaka", "Nagoya", "Sapporo", "Fukuoka", "Kobe", "Kyoto", "Kawasaki", "Saitama", "Hiroshima", "Sendai", "Kitakyushu", "Chiba", "Sakai", "Niigata"],
    "Jordan": ["Amman", "Zarqa", "Irbid", "Russeifa", "Wadi Al Seer", "Adjloun", "Aqaba", "Madaba", "As Salt", "Ar Ramtha", "Mafraq", "Al Jubayhah", "Jarash", "Al Quwaysimah", "Ajloun", "Sahab"],
    "Kazakhstan": ["Nur-Sultan", "Almaty", "Karaganda", "Shymkent", "Taraz", "Nur-Sultan", "Nur-Sultan", "Aktobe", "Pavlodar", "Nur-Sultan", "Semey", "Nur-Sultan", "Kostanay", "Petropavl", "Oral", "Temirtau"],
    "Kenya": ["Nairobi", "Mombasa", "Kisumu", "Nakuru", "Eldoret", "Thika", "Kitale", "Malindi", "Garissa", "Kakamega", "Kisii", "Machakos", "Nyeri", "Meru", "Kilifi", "Embu"],
    "Kiribati": ["Tarawa", "Betio Village", "South Tarawa", "Bikenibeu Village", "Temaraia Village", "Teaoraereke Village", "Buota Village", "Bairiki Village", "Eita Village", "Ambo Village", "Tabwakea Village", "London Village", "Banraeaba Village", "Utiroa Village", "Taburao Village", "Rawannawi Village"],
    "Kosovo": ["Pristina", "Prizren", "Pec", "Gjakova", "Peja", "Mitrovica", "Ferizaj", "Gjilan", "Podujeva", "Urosevac", "Istok", "Shtime", "Suva Reka", "Kacanik", "Vushtrri", "Zvecan"],
    "Kuwait": ["Kuwait City", "Al Ahmadi", "Hawalli", "As Salimiyah", "Sabah as Salim", "Al Farwaniyah", "Al Fahahil", "Kuwait City", "Ar Rumaythiyah", "Ar Riqqah", "Salwa", "Al Manqaf", "Janub as Surrah", "Bayan", "Al Jahra"],
    "Kyrgyzstan": ["Bishkek", "Osh", "Jalal-Abad", "Karakol", "Tokmok", "Uzgen", "Balykchy", "Kyzyl-Kiya", "Naryn", "Talas", "Kara-Balta", "Kara-Suu", "Toktogul", "Isfana", "Cholpon-Ata", "Kant"],
    "Laos": ["Vientiane", "Pakse", "Savannakhet", "Luang Prabang", "Xam Nua", "Thakhek", "Muang Xay", "Xaignabouli", "Phonsavan", "Xayaburi", "Phonthong", "Muang Phalan", "Xaignabouri", "Thakhek", "Phongsaly", "Saravan"],
    "Latvia": ["Riga", "Daugavpils", "Liepaja", "Jelgava", "Jurmala", "Ventspils", "Rezekne", "Jekabpils", "Valmiera", "Ogre", "Tukums", "Cesis", "Salaspils", "Kuldiga", "Olaine", "Bauska"],
    "Lebanon": ["Beirut", "Tripoli", "Sidon", "Zahle", "Tyre", "Jounieh", "Batroun", "Aley", "Baalbek", "Byblos", "Zahlé", "Bcharré", "Zahle", "Jezzine", "Halba", "Rashaya"],
    "Lesotho": ["Maseru", "Teyateyaneng", "Mafeteng", "Hlotse", "Mohale's Hoek", "Maputsoe", "Qacha's Nek", "Quthing", "Butha-Buthe", "Mokhotlong", "Thaba-Tseka"],
    "Liberia": ["Monrovia", "Gbarnga", "Kakata", "Bensonville", "Harper", "Voinjama", "Buchanan", "Zwedru", "New Yekepa", "Greenville", "Ganta", "Robertsport", "Fish Town", "Sanniquellie", "Saclepea"],
    "Libya": ["Tripoli", "Benghazi", "Misratah", "Tarhuna", "Al Khums", "Zawiya", "Zliten", "Tobruk", "Sabha", "Sirte", "Al Marj", "Derna", "Yafran", "Gharyan", "Ajdabiya"],
    "Liechtenstein": ["Vaduz", "Schaan", "Triesen", "Balzers", "Eschen", "Mauren", "Triesenberg", "Ruggell", "Gamprin", "Schellenberg"],
    "Lithuania": ["Vilnius", "Kaunas", "Klaipeda", "Šiauliai", "Panevezys", "Alytus", "Dainava (Kaunas)", "Marijampole", "Mazeikiai"],
    "Luxembourg": ["Luxembourg City", "Esch-sur-Alzette", "Dudelange", "Schifflange", "Bettembourg", "Pétange", "Ettelbruck", "Diekirch", "Strassen", "Bertrange", "Belvaux", "Differdange", "Mamer", "Soleuvre", "Wiltz", "Rodange"],
    "Madagascar": ["Antananarivo", "Toamasina", "Antsirabe", "Fianarantsoa", "Mahajanga", "Toliara", "Antsiranana", "Antanifotsy", "Ambovombe", "Ambilobe", "Taolanaro", "Ambanja", "Manakara", "Morondava", "Marovoay", "Farafangana"],
    "Malawi": ["Lilongwe", "Blantyre", "Mzuzu", "Zomba", "Kasungu", "Mangochi", "Karonga", "Salima", "Nkhotakota", "Liwonde", "Nsanje", "Rumphi", "Mchinji", "Dedza", "Balaka", "Mulanje"],
    "Malaysia": ["Kuala Lumpur", "George Town", "Ipoh", "Shah Alam", "Petaling Jaya", "Johor Bahru", "Kota Kinabalu", "Malacca City", "Kuching", "Alor Setar", "Kuantan", "Kuala Terengganu", "Seremban", "Putrajaya", "Kangar", "Labuan"],
    "Maldives": ["Male", "Addu City", "Fuvahmulah", "Hithadhoo", "Kulhudhuffushi", "Thinadhoo", "Naifaru", "Hinnavaru", "Dhidhdhoo", "Eydhafushi", "Muli", "Ungoofaaru", "Veymandoo", "Felidhoo", "Foammulah", "Mahibadhoo"],
    "Mali": ["Bamako", "Sikasso", "Mopti", "Koutiala", "Kayes", "Ségou", "Gao", "Markala", "Kati", "Koulikoro", "Nioro du Sahel", "Bougouni", "Tombouctou", "Kolokani", "Kita", "Koro"],
    "Malta": ["Valletta", "Birkirkara", "Mosta", "Qormi", "Zabbar", "Sliema", "San Pawl il-Bahar", "Zejtun", "St. Julian's", "Hamrun", "Rabat", "Mellieha", "Luqa", "Attard", "Mdina", "Victoria"],
    "Marshall Islands": ["Majuro", "Arno Atoll", "Mili Atoll", "Jaluit Atoll", "Kwajalein Atoll", "Wotje Atoll", "Ailinglaplap Atoll", "Maloelap Atoll", "Ebon Atoll", "Likiep Atoll", "Ailinglaplap Atoll", "Ujae Atoll", "Lae Atoll", "Kili Island", "Jabat Island", "Mejit Island"],
    "Mauritania": ["Nouakchott", "Nouadhibou", "Zouérat", "Néma", "Kaédi", "Rosso", "Atar", "Adrar", "Tidjikja", "Atar", "Kiffa", "Akjoujt", "Aleg", "Magta Lajar", "Boutilimit", "Bir Moghrein"],
    "Mauritius": ["Port Louis", "Beau Bassin-Rose Hill", "Vacoas-Phoenix", "Curepipe", "Quatre Bornes", "Triolet", "Goodlands", "Centre de Flacq", "Bel Air Rivière Sèche", "Mahébourg", "Saint Pierre", "Le Hochet", "Grand Baie", "Rose Belle", "Plaine Magnien", "Pailles"],
    "Mexico": ["Mexico City", "Ecatepec de Morelos", "Guadalajara", "Puebla", "Juarez", "Tijuana", "Leon", "Zapopan", "Monterrey", "Nezahualcoyotl", "Culiacan", "Chihuahua", "Naucalpan", "Merida", "San Luis Potosi", "Aguascalientes"],
    "Micronesia": ["Palikir", "Weno", "Tofol", "Colonia", "Lelu", "Kolonia", "Malem", "Nevek", "U,wa", "Kitti", "Dolap", "Faraulep", "Sokehs", "Kaselehlie", "Tonoas", "Nukuoro"],
    "Moldova": ["Chisinau", "Tiraspol", "Balti", "Bender", "Rîbnita", "Cahul", "Ungheni", "Soroca", "Orhei", "Dubasari", "Comrat", "Edinet", "Causeni", "Straseni", "Floresti", "Drochia"],
    "Monaco": ["Monaco"],
    "Mongolia": ["Ulaanbaatar", "Erdenet", "Darkhan", "Choibalsan", "Khovd", "Olgii", "Ulaangom", "Bayankhongor", "Arvaikheer", "Uliastai", "Baruun-Urt", "Mandalgovi", "Hodrogo", "Sainshand", "Moron", "Dzuunharaa"],

    "Montenegro": ["Podgorica", "Niksic", "Herceg Novi", "Pljevlja", "Bijelo Polje", "Cetinje", "Bar", "Berane", "Ulcinj", "Tivat", "Kotor", "Jadran-Nova Varos", "Mojkovac", "Rozaje", "Tuzi", "Danilovgrad"],
    "Morocco": ["Casablanca", "Fez", "Tangier", "Marrakech", "Salé", "Rabat", "Meknes", "Oujda", "Kenitra", "Agadir", "Tetouan", "Temara", "Safi", "Mohammedia", "Khouribga", "El Jadida"],
    "Mozambique": ["Maputo", "Matola", "Beira", "Nampula", "Chimoio", "Nacala", "Quelimane", "Tete", "Xai-Xai", "Maxixe", "Lichinga", "Pemba", "Dondo", "António Enes", "Inhambane", "Cuamba"],
    "Myanmar": ["Yangon", "Mandalay", "Naypyidaw", "Mawlamyine", "Bago", "Pathein", "Monywa", "Sittwe", "Meiktila", "Mergui", "Taunggyi", "Myitkyina", "Prome", "Hinthada", "Lashio", "Pakokku"],
    "Namibia": ["Windhoek", "Rundu", "Walvis Bay", "Oshakati", "Swakopmund", "Katima Mulilo", "Grootfontein", "Rehoboth", "Otjiwarongo", "Okahandja", "Keetmanshoop", "Ongwediva", "Lüderitz", "Mariental", "Tsumeb", "Usakos"],
    "Nauru": ["Yaren", "Denigomodu", "Buada", "Anabar", "Uaboe", "Boe", "Baiti", "Anibare", "Ijuw", "Ewa", "Meneng", "Nibok", "Yangor", "Yaren District", "Anabar", "Baiti District"],
    "Nepal": ["Kathmandu", "Pokhara", "Patan", "Biratnagar", "Birgunj", "Dharan", "Bharatpur", "Janakpur", "Dhangadhi", "Butwal", "Hetauda", "Itahari", "Bhaktapur", "Dipayal", "Dhankuta", "Waling"],
    "Netherlands": ["Amsterdam", "Rotterdam", "The Hague", "Utrecht", "Eindhoven", "Tilburg", "Groningen", "Almere Stad", "Breda", "Nijmegen", "Enschede", "Haarlem", "Arnhem", "Zaanstad", "Amersfoort", "Apeldoorn"],
    "New Zealand": ["Auckland", "Wellington", "Christchurch", "Hamilton", "Tauranga", "Lower Hutt", "Dunedin", "Palmerston North", "Napier", "Hastings", "Nelson", "Rotorua", "Whangārei", "New Plymouth", "Invercargill", "Whanganui"],
    "Nicaragua": ["Managua", "León", "Masaya", "Matagalpa", "Chinandega", "Granada", "Ciudad Sandino", "Juigalpa", "Esteli", "Tipitapa", "Chinandega", "El Viejo", "Nueva Guinea", "Jinotega", "Bluefields", "Ocotal"],
    "Niger": ["Niamey", "Zinder", "Maradi", "Agadez", "Alaghsas", "Arlit", "Birni-N'Konni", "Dogondoutchi", "Dosso", "Gaya", "Madaoua", "Magaria", "Matameye", "Mirriah", "Say", "Tahoua"],
    "Nigeria": ["Lagos", "Kano", "Ibadan", "Kaduna", "Port Harcourt", "Benin City", "Maiduguri", "Zaria", "Abuja", "Aba", "Jos", "Ilorin", "Oyo", "Enugu", "Abeokuta", "Onitsha"],
    "North Korea": ["Pyongyang", "Hamhung", "Nampo", "Hungnam", "Wonsan", "Sinuiju", "Hyesan", "Kanggye", "Sariwon", "Songnim", "Pyongsong", "Haeju", "Kaesong", "Chongjin", "Anju", "Kilju"],
    "North Macedonia": ["Skopje", "Bitola", "Kumanovo", "Prilep", "Tetovo", "Veles", "Ohrid", "Gostivar", "Stip", "Strumica", "Kavadarci", "Struga", "Kochani", "Kicevo", "Lipkovo", "Radovis"],
    "Norway": ["Oslo", "Bergen", "Trondheim", "Stavanger", "Drammen", "Fredrikstad", "Kristiansand", "Sandnes", "Tromso", "Sarpsborg", "Skien", "Alesund", "Sandefjord", "Haugesund", "Tonsberg", "Moss"],
    "Oman": ["Muscat", "Seeb", "Salalah", "Bawshar", "Sohar", "As Suwayq", "Ibri", "Saham", "Barka", "Rustaq", "Suhar", "Al Buraimi", "Nizwa", "Sur", "Bahla", "Ibra"],
    "Pakistan": ["Karachi", "Lahore", "Faisalabad", "Rawalpindi", "Multan", "Gujranwala", "Hyderabad", "Peshawar", "Quetta", "Islamabad", "Sargodha", "Sialkot", "Bahawalpur", "Sukkur", "Jhang", "Sheikhupura"],
    "Palau": ["Ngerulmud", "Koror", "Arakabesan", "Meyungs", "Ibobang", "Airai", "Nekken", "Chol", "Ulimang", "Ulimang", "Iyebukel", "Melekeok", "Ngaramash", "Ngkeklau", "Ngetbong", "Ngiwal"],
    "Palestine": ["Gaza City", "Hebron", "Nablus", "Rafah", "Jabalia", "Khan Yunis", "Beit Lahia", "Tulkarm", "Qalqilyah", "Yatta", "Ramallah", "Jericho", "Al-Bireh", "Dura", "Beit Jala", "Beit Sahour"],
    "Panama": ["Panama City", "San Miguelito", "Tocumen", "David", "Arraijan", "Colon", "Las Cumbres", "La Chorrera", "Pacora", "Santiago", "Chitre", "Vista Alegre", "Chilibre", "Cativa", "Nuevo Arraijan", "Changuinola"],
    "Papua New Guinea": ["Port Moresby", "Lae", "Arawa", "Mount Hagen", "Popondetta", "Madang", "Kokopo", "Mendi", "Kimbe", "Goroka", "Wewak", "Bulolo", "Daru", "Wabag", "Kavieng", "Kiunga"],
    "Paraguay": ["Asunción", "Ciudad del Este", "San Lorenzo", "Lambare", "Fernando de la Mora", "Limpio", "Capiatá", "Ñemby", "Encarnación", "Colonia Mariano Roque Alonso", "Itauguá", "Villa Hayes", "Pedro Juan Caballero", "Villarrica", "Caaguazú", "Caacupe"],
    "Peru": ["Lima", "Arequipa", "Callao", "Trujillo", "Chiclayo", "Iquitos", "Huancayo", "Piura", "Chimbote", "Cusco", "Pucallpa", "Tacna", "Ica", "Juliaca", "Sullana", "Chincha Alta"],
    "Philippines": ["Quezon City", "Manila", "Davao City", "Caloocan", "Cebu City", "Zamboanga City", "Taguig", "Antipolo", "Pasig", "Cagayan de Oro", "Parañaque", "Valenzuela", "Las Piñas", "Makati", "Bacolod", "General Santos"],
    "Poland": ["Warsaw", "Kraków", "Łódź", "Wrocław", "Poznań", "Gdańsk", "Szczecin", "Bydgoszcz", "Lublin", "Katowice", "Białystok", "Gdynia", "Częstochowa", "Sosnowiec", "Radom", "Mokotów"],
    "Portugal": ["Lisbon", "Porto", "Vila Nova de Gaia", "Amadora", "Braga", "Funchal", "Coimbra", "Agualva-Cacém", "Setúbal", "Almada", "Queluz", "Oeiras", "Barreiro", "Rio de Mouro", "Maia", "Aveiro"],
    "Qatar": ["Doha", "Ar Rayyan", "Umm Salal Muhammed", "Al Wakrah", "Al Khor", "Ash Shihaniyah", "Dukhan", "Musay'id", "Ras Laffan Industrial City", "Al Shamal", "Al Ru'ays", "Madinat ash Shamal", "Al Ghuwayriyah", "Fuwayrit"],
    "Romania": ["Bucharest", "Cluj-Napoca", "Timișoara", "Iași", "Constanța", "Craiova", "Brașov", "Galați", "Ploiești", "Oradea", "Brăila", "Arad", "Pitești", "Sibiu", "Bacău", "Târgu Mureș"],
    "Russia": ["Moscow", "Saint Petersburg", "Novosibirsk", "Yekaterinburg", "Nizhny Novgorod", "Kazan", "Chelyabinsk", "Omsk", "Samara", "Rostov-on-Don", "Ufa", "Krasnoyarsk", "Voronezh", "Perm", "Volgograd", "Krasnodar"],
    "Rwanda": ["Kigali", "Butare", "Gitarama", "Ruhengeri", "Gisenyi", "Byumba", "Cyangugu", "Kibuye", "Kibungo", "Nyanza", "Rwamagana", "Kibeho", "Muhanga", "Rusizi", "Nyamata", "Kibuye"],
    "Saint Kitts and Nevis": ["Basseterre", "Middle Island", "Charlestown", "Gingerland", "Cotton Ground", "Saint Paul’s", "Dieppe Bay Town", "Tabernacle", "Monkey Hill", "Trinity", "Cayon", "Half Way Tree", "Old Road Town", "Sandy Point Town", "Palmetto Point", "Cayon"],
    "Saint Lucia": ["Castries", "Vieux Fort", "Micoud", "Soufriere", "Dennery", "Gros Islet", "Laborie", "Anse La Raye", "Canaries", "Dacretin", "Choc", "Bisee", "La Pointe", "Choiseul", "Grande Riviere"],
    "Saint Vincent and the Grenadines": ["Kingstown", "Kingstown Park", "Georgetown", "Byera Village", "Biabou", "Barrouallie", "Port Elizabeth", "Layou", "Chateaubelair", "Dovers", "Rilland Hill", "Victoria Village", "Port Elizabeth", "Lowmans Hill", "Port Elizabeth", "Chateaubelair"],
    "Samoa": ["Apia", "Asau", "Mulifanua", "Faleula", "Safotu", "Leulumoega", "Satupa‘itea", "Lufilufi", "Gataivai", "Vailoa", "Fasito‘outa", "Vaiusu", "Siusega", "Tufulele", "Fasitoo-Tai", "Siutu"],
    "San Marino": ["San Marino", "Serravalle", "Borgo Maggiore", "Domagnano", "Fiorentino", "Acquaviva", "Montegiardino", "Chiesanuova", "San Giovanni", "Borgo Maggiore", "Domagnano", "Fiorentino", "Acquaviva", "Montegiardino", "Chiesanuova", "San Giovanni"],
    "Sao Tome and Principe": ["São Tomé", "Neves", "Santana", "São João dos Angolares", "Guadalupe", "Santo Amaro", "Santa Cruz", "São Tomé", "Neves", "Santana", "São João dos Angolares", "Guadalupe", "Santo Amaro", "Santa Cruz", "São Tomé"],
    "Saudi Arabia": ["Riyadh", "Jeddah", "Mecca", "Medina", "Sulţānah", "Dammam", "Ta’if", "Tabuk", "Al Hufuf", "Al Mubarraz", "Buraydah", "Khamis Mushait", "Al Hufuf", "Hail", "Najran", "Yanbu"],
    "Senegal": ["Dakar", "Thiès", "Kaolack", "Ziguinchor", "Tiébo", "Tambacounda", "Saint-Louis", "Matam", "Louga", "Kolda", "Richard Toll", "Joal-Fadiout", "Dara", "Guinguinéo", "Kédougou", "Bignona"],
    "Serbia": ["Belgrade", "Novi Sad", "Niš", "Zemun", "Kragujevac", "Čačak", "Subotica", "Leskovac", "Novi Pazar", "Kraljevo", "Zrenjanin", "Pančevo", "Kruševac", "Smederevo", "Valjevo", "Vranje"],
    "Seychelles": ["Victoria", "Anse Boileau", "Bel Ombre", "Cascade", "Anse Royale", "Takamaka", "Port Glaud", "Beau Vallon", "Glacis", "Anse Etoile", "Pointe Larue", "Baie Lazare", "Au Cap", "Bel Ombre", "Grand Anse Mahe", "Beau Vallon"],
    "Sierra Leone": ["Freetown", "Kenema", "Bo", "Koidu", "Makeni", "Lunsar", "Port Loko", "Kabala", "Segbwema", "Waterloo", "Kailahun", "Magburaka", "Pujehun", "Kambia", "Masiaka", "Mattru"],
    "Singapore": ["Singapore"],
    "Slovakia": ["Bratislava", "Košice", "Prešov", "Nitra", "Žilina", "Banská Bystrica", "Trnava", "Martin", "Trenčín", "Poprad", "Prievidza", "Zvolen", "Považská Bystrica", "Nove Zamky", "Michalovce", "Spisska Nova Ves"],
    "Slovenia": ["Ljubljana", "Maribor", "Celje", "Kranj", "Velenje", "Koper", "Novo Mesto", "Ptuj", "Trbovlje", "Kamnik", "Jesenice", "Domžale", "Nova Gorica", "Murska Sobota", "Škofja Loka", "Izola"],
    "Solomon Islands": ["Honiara", "Gizo", "Auki", "Kirakira", "Tulagi", "Lata", "Taro", "Munda", "Buala", "Makira", "Kagata", "Malu'u", "Buala", "Noro", "Fera"],
    "Somalia": ["Mogadishu", "Hargeisa", "Bosaso", "Galkayo", "Berbera", "Kismayo", "Marka", "Jamaame", "Baidoa", "Borama", "Beledweyne", "Qardho", "Garoowe", "Burco", "Eyl", "Jilib"],
    "South Africa": ["Johannesburg", "Cape Town", "Durban", "Pretoria", "Port Elizabeth", "Bloemfontein", "Soweto", "East London", "Newcastle", "Krugersdorp", "Botshabelo", "Witbank", "Nelspruit", "Vereeniging", "Kimberley", "Rustenburg"],
    "South Korea": ["Seoul", "Busan", "Incheon", "Daegu", "Daejeon", "Gwangju", "Suwon", "Ulsan", "Changwon", "Seongnam", "Goyang", "Yongin", "Bucheon", "Jeonju", "Ansan", "Cheongju"],
    "South Sudan": ["Juba", "Wau", "Malakal", "Yei", "Aweil", "Nimule", "Rumbek", "Bor", "Yambio", "Torit", "Tonj", "Maridi", "Renk", "Kapoeta", "Tambura", "Kajo Keji"],
    "Spain": ["Madrid", "Barcelona", "Valencia", "Seville", "Zaragoza", "Málaga", "Murcia", "Palma", "Las Palmas de Gran Canaria", "Bilbao", "Alicante", "Córdoba", "Valladolid", "Vigo", "Gijón", "Hospitalet de Llobregat"],
    "Sri Lanka": ["Colombo", "Dehiwala-Mount Lavinia", "Moratuwa", "Jaffna", "Negombo", "Pita Kotte", "Sri Jayawardenepura Kotte", "Kandy", "Trincomalee", "Kalmunai", "Galle", "Point Pedro", "Batticaloa", "Katunayaka", "Valvedditturai", "Matara"],
    "Sudan": ["Khartoum", "Omdurman", "Nyala", "Port Sudan", "Kassala", "El Obeid", "Al Qadarif", "Kosti", "Wad Madani", "El Fasher", "Ad-Damazin", "Geneina", "Rabak", "Sennar", "Al-Ubayyid", "Atbara"],
    "Suriname": ["Paramaribo", "Lelydorp", "Nieuw Nickerie", "Moengo", "Nieuw Amsterdam", "Mariënburg", "Wageningen", "Albina", "Groningen", "Brownsweg", "Onverwacht", "Totness", "Benzdorp", "Leiding", "Baboen", "Kajana"],
    "Sweden": ["Stockholm", "Gothenburg", "Malmö", "Uppsala", "Sollentuna", "Västerås", "Örebro", "Linköping", "Helsingborg", "Jönköping", "Norrköping", "Lund", "Umeå", "Gävle", "Borås", "Södertälje"],
    "Switzerland": ["Zurich", "Geneva", "Basel", "Lausanne", "Bern", "Winterthur", "Lucerne", "St. Gallen", "Lugano", "Biel/Bienne", "Thun", "Köniz", "La Chaux-de-Fonds", "Schaffhausen", "Fribourg", "Chur"],
    "Syria": ["Damascus", "Aleppo", "Homs", "Hama", "Latakia", "Dayr al-Zawr", "Ar-Raqqah", "Idlib", "As-Suwayda", "Daraa", "Tartus", "Manbij", "Al-Bab", "Jarabulus", "As-Safira", "Tadmur"],
    "Taiwan": ["Taipei", "Kaohsiung", "Taichung", "Tainan", "Banqiao", "Hsinchu", "Taoyuan City", "Keelung", "Chiayi", "Pingtung", "Yilan", "Zhubei", "Taitung City", "Nantou", "Magong", "Douliu"],
    "Tajikistan": ["Dushanbe", "Khujand", "Kulob", "Qurghonteppa", "Istaravshan", "Konibodom", "Kofarnihon", "Tursunzoda", "Isfara", "Panjakent", "Khorugh", "Yovon", "Vahdat", "Hisor", "Boshkengash", "Farkhor"],
    "Tanzania": ["Dar es Salaam", "Dodoma", "Mwanza", "Zanzibar City", "Arusha", "Mbeya", "Morogoro", "Tanga", "Kahama", "Tabora", "Zanzibar City", "Kigoma", "Sumbawanga", "Kigoma", "Moshi", "Tabora"],
    "Thailand": ["Bangkok", "Nonthaburi", "Nakhon Ratchasima", "Chiang Mai", "Hat Yai", "Udon Thani", "Pak Kret"],
    "Timor-Leste": ["Dili", "Same", "Aileu", "Baucau", "Maliana", "Liquica", "Suai", "Viqueque", "Maubara", "Los Palos", "Lautem", "Gleno", "Turiscai", "Ainaro", "Ermera", "Venilale"],
    "Togo": ["Lomé", "Sokodé", "Kara", "Palimé", "Atakpamé", "Bassar", "Tsevie", "Aného", "Sansanné-Mango", "Dapaong", "Tsévié", "Niamtougou", "Bafilo", "Notse", "Sotouboua", "Tabligbo"],
    "Tonga": ["Nuku'alofa", "Neiafu", "Haveluloto", "Vaini", "Pangai", "Hihifo", "Tatakamotonga", "Niutoua", "Toko", "Kolonga", "Ha'akame", "Nukunuku", "Tofoa", "Kolovai", "Lapaha", "Ha'ateiho"],
    "Trinidad and Tobago": ["Port of Spain", "Chaguanas", "San Fernando", "Arima", "Point Fortin", "Couva", "Tunapuna", "Scarborough", "Sangre Grande", "Paradise", "Penal", "Toco", "Siparia", "Princes Town", "Rio Claro", "Fyzabad"],
    "Tunisia": ["Tunis", "Sfax", "Sousse", "Kairouan", "Bizerte", "Gabès", "Ariana", "Kasserine", "Gafsa", "La Soukra", "Ettadhamen", "Rades", "Gabès", "Ben Arous", "Monastir", "Nabeul"],
    "Turkey": ["Istanbul", "Ankara", "Izmir", "Bursa", "Adana", "Gaziantep", "Konya", "Antalya", "Eskisehir", "Diyarbakir", "Kayseri", "Mercin", "Samsun", "Malatya", "Adapazari", "Erzurum"],
    "Turkmenistan": ["Ashgabat", "Turkmenabat", "Dasoguz", "Mary", "Balkanabat", "Bayramaly", "Türkmenbaşy", "Tejen", "Abadan", "Atamyrat", "Yylanly", "Bereket", "Magdanly", "Gazanjyk", "Boldumsaz", "Köneürgench"],
    "Tuvalu": ["Funafuti", "Fongafale", "Vaiaku", "Asau", "Mali Island", "Nukufetau", "Nukulaelae", "Nanumanga", "Nanumea", "Niulakita", "Niutao", "Nui", "Nukufetau", "Nukulaelae", "Vaitupu", "Motulalo"],
    "Uganda": ["Kampala", "Gulu", "Lira", "Mbarara", "Jinja", "Bwizibwera", "Mbale", "Mukono", "Kasese", "Masaka", "Entebbe", "Njeru", "Kitgum", "Arua", "Iganga", "Fort Portal"],
    "Ukraine": ["Kyiv", "Kharkiv", "Odesa", "Dnipro", "Donetsk", "Zaporizhzhia", "Lviv", "Kryvyi Rih", "Mykolaiv", "Mariupol", "Luhansk", "Sevastopol", "Vinnytsia", "Makiivka", "Simferopol", "Kherson"],
    "United Arab Emirates": ["Dubai", "Abu Dhabi", "Sharjah", "Al Ain", "Ajman", "Ras Al Khaimah", "Fujairah", "Umm Al Quwain", "Khor Fakkan", "Kalba", "Jebel Ali", "Dibba Al-Hisn", "Hatta", "Al Ruwais", "Al Quoz", "Dhaid"],
    "United Kingdom": ["London", "Birmingham", "Manchester", "Glasgow", "Liverpool", "Newcastle upon Tyne", "Sheffield", "Leeds", "Bristol", "Edinburgh", "Cardiff", "Leicester", "Bradford", "Belfast", "Nottingham", "Southampton"],
    "United States": ["New York City", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose", "Austin", "Jacksonville", "San Francisco", "Columbus", "Fort Worth", "Indianapolis"],
    "Uruguay": ["Montevideo", "Salto", "Ciudad de la Costa", "Montevideo", "Paysandú", "Las Piedras", "Rivera", "Maldonado", "Tacuarembó", "Melo", "Mercedes", "Artigas", "San José de Mayo", "Durazno", "Florida", "Barros Blancos"],
    "Uzbekistan": ["Tashkent", "Namangan", "Samarkand", "Andijan", "Bukhara", "Nukus", "Qarshi", "Fergana", "Margilan", "Navoiy", "Termiz", "Urgench", "Shahrisabz", "Jizzakh", "Angren", "Chirchiq"],
    "Vanuatu": ["Port Vila", "Luganville", "Norsup", "Isangel", "Sola", "Lakatoro", "Saratamata", "Port-Olry", "Lénakel", "Port-Olry", "Sola", "Lakatoro", "Saratamata", "Lénakel", "Norsup", "Isangel"],
    "Vatican City": ["Vatican City"],
    "Venezuela": ["Caracas", "Maracaibo", "Maracay", "Valencia", "Barquisimeto", "Ciudad Guayana", "Barcelona", "Maturín", "Puerto La Cruz", "Petare", "Turmero", "Ciudad Bolívar", "Barinas", "Santa Teresa", "Cumana", "San Cristóbal"],
    "Vietnam": ["Ho Chi Minh City", "Hanoi", "Haiphong", "Da Nang", "Biên Hòa", "Nha Trang", "Can Tho", "Qui Nhon"],
    "Yemen": ["Sana'a", "Al Hudaydah", "Ta'izz", "Aden", "Ibb", "Dhamar", "Al Mukalla", "Hajjah", "Sayyan", "Zabid", "Sa'dah", "Hajjah", "Al Bayda'", "Lahij", "Zinjibar", "Amran"],
    "Zambia": ["Lusaka", "Ndola", "Kitwe", "Kabwe", "Chingola", "Mufulira", "Luanshya", "Livingstone", "Kasama", "Chipata", "Chililabombwe", "Solwezi", "Kansanshi", "Kafue", "Mazabuka", "Choma"],
    "Zimbabwe": ["Harare", "Bulawayo", "Chitungwiza", "Mutare", "Gweru", "Epworth", "Kwekwe", "Kadoma", "Masvingo", "Chinhoyi", "Marondera", "Norton", "Chegutu", "Bindura", "Zvishavane", "Victoria Falls"]
}

const FormComponent = () => {
    const [formData, setFormData] = useState(initialFormData);
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        const newErrors = validateForm(formData);
        console.log(newErrors);
        if (Object.keys(newErrors).length === 0) {
            setSubmitted(true);
        } else {
            setErrors(newErrors);
        }
    };

    const validateForm = (data) => {
        let errors = {};
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!data.password || !passwordRegex.test(data.password)) {
            errors.password = "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.";
        }
    
        // PAN number validation (10 characters, all uppercase alphabets followed by four digits, followed by one uppercase alphabet)
        const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
        if (!data.panNo || !panRegex.test(data.panNo)) {
            errors.panNo = "PAN number should be in the format ABCDE1234F.";
        }
    
        // Aadhar number validation (12 digits)
        const aadharRegex = /^\d{12}$/;
        if (!data.aadharNo || !aadharRegex.test(data.aadharNo)) {
            errors.aadharNo = "Aadhar number should be 12 digits long.";
        }
        const phoneRegex = /^\+?\d{10}$/;
        if (!data.phoneNo || !phoneRegex.test(data.phoneNo)) {
            errors.phoneNo = "Please enter a valid phone number.";
        }
        for (const key in data) {
            if (!data[key] || data[key].trim() === '') {
                errors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
            }
        }
        return errors;
    };

    return (
        <div className="form-container">
            <h2>Registration Form</h2>
            <form onSubmit={handleSubmit}>
                <label >First Name : </label>
                <input type='text' name='firstName' onChange={handleChange} />
                {errors.firstName && <div className="error">{errors.firstName}</div>}
                <label >Last Name : </label>
                <input type='text' name='lastName' onChange={handleChange} />
                {errors.lastname && <div className="error">{errors.lastname}</div>}
                <label >User Name : </label>
                <input type='text' name='username' onChange={handleChange} />
                {errors.username && <div className="error">{errors.username}</div>}
                <label >User Email Id : </label>
                <input type='email' name='email' onChange={handleChange} />
                {errors.email && <div className="error">{errors.email}</div>}
                <label >User password : </label>
                <input type='password' name='password' onChange={handleChange} />
                {errors.password && <div className="error">{errors.password}</div>}
                <label >User Phone Number : </label>
                <input type='text' name='phoneNo' onChange={handleChange} />
                {errors.phoneNo && <div className="error">{errors.phoneNo}</div>}
                <label>Country:</label>
                <select name="country" value={formData.country} onChange={handleChange}>
                    <option value="">Select Country</option>
                    {countries.map((country, index) => (
                        <option key={index} value={country}>
                            {country}
                        </option>
                    ))}
                </select>
                {errors.country && <div className="error">{errors.country}</div>}
                <label>City:</label>
                {formData.country && <select name="city" value={formData.city} onChange={handleChange} disabled={!formData.country}>
                    <option value="">Select City</option>
                    {countryCities[formData.country].map((city, index) => (
                        <option key={index} value={city}>
                            {city}
                        </option>
                    ))}
                </select>}
                {errors.city && <div className="error">{errors.city}</div>}
                <label >User Pan Number : </label>
                <input type='text' name='panNo' onChange={handleChange} />
                {errors.panNo && <div className="error">{errors.panNo}</div>}
                <label >User Aadhar Number : </label>
                <input type='text' name='aadharNo' onChange={handleChange} />
                {errors.aadharNo && <div className="error">{errors.aadharNo}</div>}
                <button type='submit'>submit</button>
            </form>
            {submitted && <div className='success'> Succesfully Submitted the form</div>}
        </div>
    );
};

export default FormComponent;
