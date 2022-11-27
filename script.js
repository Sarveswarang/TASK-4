

// task 4
// question n2 display all flag
// question 3 display all country name, region,subregion,population
var request =new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function() 
{
    var data = request.response
    var result=JSON.parse(data);
    for(var i=0;i<result.length;i++)
        {

 console.log("COUNTRY FLAGS = ",result[i].flag);
 console.log( " NAME = ", result[i].name.common,"REGION =  ",result[i].region,"SUBREGIO = " ,result[i].subregion,"POPULATION = ",result[i].population);
}
}

// question 1 comparing JSON SAME OBJECTS
var obj1={
   "name":"person 1",
    "age":"5"
};
var obj2={
    "age":"5",
    "name":"person 2"
}
console.log( (obj1===obj2));
//OUTPUT
// script.js:30 false
// script.js:16 COUNTRY FLAGS =  🇲🇷
// script.js:17  NAME =  Mauritania REGION =   Africa SUBREGIO =  Western Africa POPULATION =  4649660
// script.js:16 COUNTRY FLAGS =  🇦🇼
// script.js:17  NAME =  Aruba REGION =   Americas SUBREGIO =  Caribbean POPULATION =  106766
// script.js:16 COUNTRY FLAGS =  🇦🇷
// script.js:17  NAME =  Argentina REGION =   Americas SUBREGIO =  South America POPULATION =  45376763
// script.js:16 COUNTRY FLAGS =  🇸🇪
// script.js:17  NAME =  Sweden REGION =   Europe SUBREGIO =  Northern Europe POPULATION =  10353442
// script.js:16 COUNTRY FLAGS =  🇲🇻
// script.js:17  NAME =  Maldives REGION =   Asia SUBREGIO =  Southern Asia POPULATION =  540542
// script.js:16 COUNTRY FLAGS =  🇲🇽
// script.js:17  NAME =  Mexico REGION =   Americas SUBREGIO =  North America POPULATION =  128932753
// script.js:16 COUNTRY FLAGS =  🇳🇿
// script.js:17  NAME =  New Zealand REGION =   Oceania SUBREGIO =  Australia and New Zealand POPULATION =  5084300
// script.js:16 COUNTRY FLAGS =  🇪🇨
// script.js:17  NAME =  Ecuador REGION =   Americas SUBREGIO =  South America POPULATION =  17643060
// script.js:16 COUNTRY FLAGS =  🇼🇫
// script.js:17  NAME =  Wallis and Futuna REGION =   Oceania SUBREGIO =  Polynesia POPULATION =  11750
// script.js:16 COUNTRY FLAGS =  🇦🇽
// script.js:17  NAME =  Åland Islands REGION =   Europe SUBREGIO =  Northern Europe POPULATION =  29458
// script.js:16 COUNTRY FLAGS =  🇲🇪
// script.js:17  NAME =  Montenegro REGION =   Europe SUBREGIO =  Southeast Europe POPULATION =  621718
// script.js:16 COUNTRY FLAGS =  🇵🇰
// script.js:17  NAME =  Pakistan REGION =   Asia SUBREGIO =  Southern Asia POPULATION =  220892331
// script.js:16 COUNTRY FLAGS =  🇵🇳
// script.js:17  NAME =  Pitcairn Islands REGION =   Oceania SUBREGIO =  Polynesia POPULATION =  56
// script.js:16 COUNTRY FLAGS =  🇿🇲
// script.js:17  NAME =  Zambia REGION =   Africa SUBREGIO =  Eastern Africa POPULATION =  18383956
// script.js:16 COUNTRY FLAGS =  🇸🇨
// script.js:17  NAME =  Seychelles REGION =   Africa SUBREGIO =  Eastern Africa POPULATION =  98462
// script.js:16 COUNTRY FLAGS =  🇲🇾
// script.js:17  NAME =  Malaysia REGION =   Asia SUBREGIO =  South-Eastern Asia POPULATION =  32365998
// script.js:16 COUNTRY FLAGS =  🇳🇴
// script.js:17  NAME =  Norway REGION =   Europe SUBREGIO =  Northern Europe POPULATION =  5379475
// script.js:16 COUNTRY FLAGS =  🇺🇿
// script.js:17  NAME =  Uzbekistan REGION =   Asia SUBREGIO =  Central Asia POPULATION =  34232050
// script.js:16 COUNTRY FLAGS =  🇻🇺
// script.js:17  NAME =  Vanuatu REGION =   Oceania SUBREGIO =  Melanesia POPULATION =  307150
// script.js:16 COUNTRY FLAGS =  🇹🇫
// script.js:17  NAME =  French Southern and Antarctic Lands REGION =   Antarctic SUBREGIO =  undefined POPULATION =  400
// script.js:16 COUNTRY FLAGS =  🇨🇽
// script.js:17  NAME =  Christmas Island REGION =   Oceania SUBREGIO =  Australia and New Zealand POPULATION =  2072
// script.js:16 COUNTRY FLAGS =  🇸🇬
// script.js:17  NAME =  Singapore REGION =   Asia SUBREGIO =  South-Eastern Asia POPULATION =  5685807
// script.js:16 COUNTRY FLAGS =  🇸🇷
// script.js:17  NAME =  Suriname REGION =   Americas SUBREGIO =  South America POPULATION =  586634
// script.js:16 COUNTRY FLAGS =  🇪🇭
// script.js:17  NAME =  Western Sahara REGION =   Africa SUBREGIO =  Northern Africa POPULATION =  510713
// script.js:16 COUNTRY FLAGS =  🇲🇫
// script.js:17  NAME =  Saint Martin REGION =   Americas SUBREGIO =  Caribbean POPULATION =  38659
// script.js:16 COUNTRY FLAGS =  🇨🇷
// script.js:17  NAME =  Costa Rica REGION =   Americas SUBREGIO =  Central America POPULATION =  5094114
// script.js:16 COUNTRY FLAGS =  🇭🇲
// script.js:17  NAME =  Heard Island and McDonald Islands REGION =   Antarctic SUBREGIO =  undefined POPULATION =  0
// script.js:16 COUNTRY FLAGS =  🇮🇪
// script.js:17  NAME =  Ireland REGION =   Europe SUBREGIO =  Northern Europe POPULATION =  4994724
// script.js:16 COUNTRY FLAGS =  🇦🇶
// script.js:17  NAME =  Antarctica REGION =   Antarctic SUBREGIO =  undefined POPULATION =  1000
// script.js:16 COUNTRY FLAGS =  🇦🇺
// script.js:17  NAME =  Australia REGION =   Oceania SUBREGIO =  Australia and New Zealand POPULATION =  25687041
// script.js:16 COUNTRY FLAGS =  🇱🇾
// script.js:17  NAME =  Libya REGION =   Africa SUBREGIO =  Northern Africa POPULATION =  6871287
// script.js:16 COUNTRY FLAGS =  🇶🇦
// script.js:17  NAME =  Qatar REGION =   Asia SUBREGIO =  Western Asia POPULATION =  2881060
// script.js:16 COUNTRY FLAGS =  🇬🇱
// script.js:17  NAME =  Greenland REGION =   Americas SUBREGIO =  North America POPULATION =  56367
// script.js:16 COUNTRY FLAGS =  🇲🇺
// script.js:17  NAME =  Mauritius REGION =   Africa SUBREGIO =  Eastern Africa POPULATION =  1265740
// script.js:16 COUNTRY FLAGS =  🇰🇿
// script.js:17  NAME =  Kazakhstan REGION =   Asia SUBREGIO =  Central Asia POPULATION =  18754440
// script.js:16 COUNTRY FLAGS =  🇮🇴
// script.js:17  NAME =  British Indian Ocean Territory REGION =   Africa SUBREGIO =  Eastern Africa POPULATION =  3000
// script.js:16 COUNTRY FLAGS =  🇦🇱
// script.js:17  NAME =  Albania REGION =   Europe SUBREGIO =  Southeast Europe POPULATION =  2837743
// script.js:16 COUNTRY FLAGS =  🇧🇭
// script.js:17  NAME =  Bahrain REGION =   Asia SUBREGIO =  Western Asia POPULATION =  1701583
// script.js:16 COUNTRY FLAGS =  🇵🇬
// script.js:17  NAME =  Papua New Guinea REGION =   Oceania SUBREGIO =  Melanesia POPULATION =  8947027
// script.js:16 COUNTRY FLAGS =  🇧🇮
// script.js:17  NAME =  Burundi REGION =   Africa SUBREGIO =  Eastern Africa POPULATION =  11890781
// script.js:16 COUNTRY FLAGS =  🇮🇳
// script.js:17  NAME =  India REGION =   Asia SUBREGIO =  Southern Asia POPULATION =  1380004385
// script.js:16 COUNTRY FLAGS =  🇺🇾
// script.js:17  NAME =  Uruguay REGION =   Americas SUBREGIO =  South America POPULATION =  3473727
// script.js:16 COUNTRY FLAGS =  🇱🇨
// script.js:17  NAME =  Saint Lucia REGION =   Americas SUBREGIO =  Caribbean POPULATION =  183629
// script.js:16 COUNTRY FLAGS =  🇧🇧
// script.js:17  NAME =  Barbados REGION =   Americas SUBREGIO =  Caribbean POPULATION =  287371
// script.js:16 COUNTRY FLAGS =  🇳🇨
// script.js:17  NAME =  New Caledonia REGION =   Oceania SUBREGIO =  Melanesia POPULATION =  271960
// script.js:16 COUNTRY FLAGS =  🇱🇻
// script.js:17  NAME =  Latvia REGION =   Europe SUBREGIO =  Northern Europe POPULATION =  1901548
// script.js:16 COUNTRY FLAGS =  🇪🇪
// script.js:17  NAME =  Estonia REGION =   Europe SUBREGIO =  Northern Europe POPULATION =  1331057
// script.js:16 COUNTRY FLAGS =  🇳🇺
// script.js:17  NAME =  Niue REGION =   Oceania SUBREGIO =  Polynesia POPULATION =  1470
// script.js:16 COUNTRY FLAGS =  🇧🇱
// script.js:17  NAME =  Saint Barthélemy REGION =   Americas SUBREGIO =  Caribbean POPULATION =  4255
// script.js:16 COUNTRY FLAGS =  🇵🇷
// script.js:17  NAME =  Puerto Rico REGION =   Americas SUBREGIO =  Caribbean POPULATION =  3194034
// script.js:16 COUNTRY FLAGS =  🇬🇩
// script.js:17  NAME =  Grenada REGION =   Americas SUBREGIO =  Caribbean POPULATION =  112519
// script.js:16 COUNTRY FLAGS =  🇲🇴
// script.js:17  NAME =  Macau REGION =   Asia SUBREGIO =  Eastern Asia POPULATION =  649342
// script.js:16 COUNTRY FLAGS =  🇨🇾
// script.js:17  NAME =  Cyprus REGION =   Europe SUBREGIO =  Southern Europe POPULATION =  1207361
// script.js:16 COUNTRY FLAGS =  🇮🇲
// script.js:17  NAME =  Isle of Man REGION =   Europe SUBREGIO =  Northern Europe POPULATION =  85032
// script.js:16 COUNTRY FLAGS =  🇬🇷
// script.js:17  NAME =  Greece REGION =   Europe SUBREGIO =  Southern Europe POPULATION =  10715549
// script.js:16 COUNTRY FLAGS =  🇸🇾
// script.js:17  NAME =  Syria REGION =   Asia SUBREGIO =  Western Asia POPULATION =  17500657
// script.js:16 COUNTRY FLAGS =  🇱🇹
// script.js:17  NAME =  Lithuania REGION =   Europe SUBREGIO =  Northern Europe POPULATION =  2794700
// script.js:16 COUNTRY FLAGS =  🇨🇼
// script.js:17  NAME =  Curaçao REGION =   Americas SUBREGIO =  Caribbean POPULATION =  155014
// script.js:16 COUNTRY FLAGS =  🇩🇲
// script.js:17  NAME =  Dominica REGION =   Americas SUBREGIO =  Caribbean POPULATION =  71991
// script.js:16 COUNTRY FLAGS =  🇳🇪
// script.js:17  NAME =  Niger REGION =   Africa SUBREGIO =  Western Africa POPULATION =  24206636
// script.js:16 COUNTRY FLAGS =  🇰🇬
// script.js:17  NAME =  Kyrgyzstan REGION =   Asia SUBREGIO =  Central Asia POPULATION =  6591600
// script.js:16 COUNTRY FLAGS =  🇹🇹
// script.js:17  NAME =  Trinidad and Tobago REGION =   Americas SUBREGIO =  Caribbean POPULATION =  1399491
// script.js:16 COUNTRY FLAGS =  🇹🇬
// script.js:17  NAME =  Togo REGION =   Africa SUBREGIO =  Western Africa POPULATION =  8278737
// script.js:16 COUNTRY FLAGS =  🇵🇸
// script.js:17  NAME =  Palestine REGION =   Asia SUBREGIO =  Western Asia POPULATION =  4803269
// script.js:16 COUNTRY FLAGS =  🇲🇬
// script.js:17  NAME =  Madagascar REGION =   Africa SUBREGIO =  Eastern Africa POPULATION =  27691019
// script.js:16 COUNTRY FLAGS =  🇭🇷
// script.js:17  NAME =  Croatia REGION =   Europe SUBREGIO =  Southeast Europe POPULATION =  4047200
// script.js:16 COUNTRY FLAGS =  🇫🇴
// script.js:17  NAME =  Faroe Islands REGION =   Europe SUBREGIO =  Northern Europe POPULATION =  48865
// script.js:16 COUNTRY FLAGS =  🇭🇹
// script.js:17  NAME =  Haiti REGION =   Americas SUBREGIO =  Caribbean POPULATION =  11402533
// script.js:16 COUNTRY FLAGS =  🇲🇸
// script.js:17  NAME =  Montserrat REGION =   Americas SUBREGIO =  Caribbean POPULATION =  4922
// script.js:16 COUNTRY FLAGS =  🇨🇰
// script.js:17  NAME =  Cook Islands REGION =   Oceania SUBREGIO =  Polynesia POPULATION =  18100
// script.js:16 COUNTRY FLAGS =  🇹🇱
// script.js:17  NAME =  Timor-Leste REGION =   Asia SUBREGIO =  South-Eastern Asia POPULATION =  1318442
// script.js:16 COUNTRY FLAGS =  🇲🇶
// script.js:17  NAME =  Martinique REGION =   Americas SUBREGIO =  Caribbean POPULATION =  378243
// script.js:16 COUNTRY FLAGS =  🇨🇺
// script.js:17  NAME =  Cuba REGION =   Americas SUBREGIO =  Caribbean POPULATION =  11326616
// script.js:16 COUNTRY FLAGS =  🇹🇼
// script.js:17  NAME =  Taiwan REGION =   Asia SUBREGIO =  Eastern Asia POPULATION =  23503349
// script.js:16 COUNTRY FLAGS =  🇸🇿
// script.js:17  NAME =  Eswatini REGION =   Africa SUBREGIO =  Southern Africa POPULATION =  1160164
// script.js:16 COUNTRY FLAGS =  🇺🇦
// script.js:17  NAME =  Ukraine REGION =   Europe SUBREGIO =  Eastern Europe POPULATION =  44134693
// script.js:16 COUNTRY FLAGS =  🇧🇲
// script.js:17  NAME =  Bermuda REGION =   Americas SUBREGIO =  North America POPULATION =  63903
// script.js:16 COUNTRY FLAGS =  🇰🇷
// script.js:17  NAME =  South Korea REGION =   Asia SUBREGIO =  Eastern Asia POPULATION =  51780579
// script.js:16 COUNTRY FLAGS =  🇵🇪
// script.js:17  NAME =  Peru REGION =   Americas SUBREGIO =  South America POPULATION =  32971846
// script.js:16 COUNTRY FLAGS =  🇮🇶
// script.js:17  NAME =  Iraq REGION =   Asia SUBREGIO =  Western Asia POPULATION =  40222503
// script.js:16 COUNTRY FLAGS =  🇲🇩
// script.js:17  NAME =  Moldova REGION =   Europe SUBREGIO =  Eastern Europe POPULATION =  2617820
// script.js:16 COUNTRY FLAGS =  🇸🇲
// script.js:17  NAME =  San Marino REGION =   Europe SUBREGIO =  Southern Europe POPULATION =  33938
// script.js:16 COUNTRY FLAGS =  🇻🇪
// script.js:17  NAME =  Venezuela REGION =   Americas SUBREGIO =  South America POPULATION =  28435943
// script.js:16 COUNTRY FLAGS =  🇬🇾
// script.js:17  NAME =  Guyana REGION =   Americas SUBREGIO =  South America POPULATION =  786559
// script.js:16 COUNTRY FLAGS =  🇰🇾
// script.js:17  NAME =  Cayman Islands REGION =   Americas SUBREGIO =  Caribbean POPULATION =  65720
// script.js:16 COUNTRY FLAGS =  🇰🇭
// script.js:17  NAME =  Cambodia REGION =   Asia SUBREGIO =  South-Eastern Asia POPULATION =  16718971
// script.js:16 COUNTRY FLAGS =  🇨🇨
// script.js:17  NAME =  Cocos (Keeling) Islands REGION =   Oceania SUBREGIO =  Australia and New Zealand POPULATION =  544
// script.js:16 COUNTRY FLAGS =  🇲🇹
// script.js:17  NAME =  Malta REGION =   Europe SUBREGIO =  Southern Europe POPULATION =  525285
// script.js:16 COUNTRY FLAGS =  🇱🇰
// script.js:17  NAME =  Sri Lanka REGION =   Asia SUBREGIO =  Southern Asia POPULATION =  21919000
// script.js:16 COUNTRY FLAGS =  🇮🇱
// script.js:17  NAME =  Israel REGION =   Asia SUBREGIO =  Western Asia POPULATION =  9216900
// script.js:16 COUNTRY FLAGS =  🇸🇩
// script.js:17  NAME =  Sudan REGION =   Africa SUBREGIO =  Northern Africa POPULATION =  43849269
// script.js:16 COUNTRY FLAGS =  🇻🇮
// script.js:17  NAME =  United States Virgin Islands REGION =   Americas SUBREGIO =  Caribbean POPULATION =  106290
// script.js:16 COUNTRY FLAGS =  🇪🇷
// script.js:17  NAME =  Eritrea REGION =   Africa SUBREGIO =  Eastern Africa POPULATION =  5352000
// script.js:16 COUNTRY FLAGS =  🇲🇱
// script.js:17  NAME =  Mali REGION =   Africa SUBREGIO =  Western Africa POPULATION =  20250834
// script.js:16 COUNTRY FLAGS =  🇸🇴
// script.js:17  NAME =  Somalia REGION =   Africa SUBREGIO =  Eastern Africa POPULATION =  15893219
// script.js:16 COUNTRY FLAGS =  🇳🇫
// script.js:17  NAME =  Norfolk Island REGION =   Oceania SUBREGIO =  Australia and New Zealand POPULATION =  2302
// script.js:16 COUNTRY FLAGS =  🇰🇲
// script.js:17  NAME =  Comoros REGION =   Africa SUBREGIO =  Eastern Africa POPULATION =  869595
// script.js:16 COUNTRY FLAGS =  🇳🇮
// script.js:17  NAME =  Nicaragua REGION =   Americas SUBREGIO =  Central America POPULATION =  6624554
// script.js:16 COUNTRY FLAGS =  🇷🇺
// script.js:17  NAME =  Russia REGION =   Europe SUBREGIO =  Eastern Europe POPULATION =  144104080
// script.js:16 COUNTRY FLAGS =  🇺🇬
// script.js:17  NAME =  Uganda REGION =   Africa SUBREGIO =  Eastern Africa POPULATION =  45741000
// script.js:16 COUNTRY FLAGS =  🇳🇷
// script.js:17  NAME =  Nauru REGION =   Oceania SUBREGIO =  Micronesia POPULATION =  10834
// script.js:16 COUNTRY FLAGS =  🇨🇭
// script.js:17  NAME =  Switzerland REGION =   Europe SUBREGIO =  Western Europe POPULATION =  8654622
// script.js:16 COUNTRY FLAGS =  🇵🇹
// script.js:17  NAME =  Portugal REGION =   Europe SUBREGIO =  Southern Europe POPULATION =  10305564
// script.js:16 COUNTRY FLAGS =  🇹🇯
// script.js:17  NAME =  Tajikistan REGION =   Asia SUBREGIO =  Central Asia POPULATION =  9537642
// script.js:16 COUNTRY FLAGS =  🇸🇸
// script.js:17  NAME =  South Sudan REGION =   Africa SUBREGIO =  Middle Africa POPULATION =  11193729
// script.js:16 COUNTRY FLAGS =  🇧🇻
// script.js:17  NAME =  Bouvet Island REGION =   Antarctic SUBREGIO =  undefined POPULATION =  0
// script.js:16 COUNTRY FLAGS =  🇫🇲
// script.js:17  NAME =  Micronesia REGION =   Oceania SUBREGIO =  Micronesia POPULATION =  115021
// script.js:16 COUNTRY FLAGS =  🇦🇸
// script.js:17  NAME =  American Samoa REGION =   Oceania SUBREGIO =  Polynesia POPULATION =  55197
// script.js:16 COUNTRY FLAGS =  🇨🇿
// script.js:17  NAME =  Czechia REGION =   Europe SUBREGIO =  Central Europe POPULATION =  10698896
// script.js:16 COUNTRY FLAGS =  🇧🇼
// script.js:17  NAME =  Botswana REGION =   Africa SUBREGIO =  Southern Africa POPULATION =  2351625
// script.js:16 COUNTRY FLAGS =  🇹🇳
// script.js:17  NAME =  Tunisia REGION =   Africa SUBREGIO =  Northern Africa POPULATION =  11818618
// script.js:16 COUNTRY FLAGS =  🇦🇮
// script.js:17  NAME =  Anguilla REGION =   Americas SUBREGIO =  Caribbean POPULATION =  13452
// script.js:16 COUNTRY FLAGS =  🇬🇼
// script.js:17  NAME =  Guinea-Bissau REGION =   Africa SUBREGIO =  Western Africa POPULATION =  1967998
// script.js:16 COUNTRY FLAGS =  🇸🇰
// script.js:17  NAME =  Slovakia REGION =   Europe SUBREGIO =  Central Europe POPULATION =  5458827
// script.js:16 COUNTRY FLAGS =  🇲🇭
// script.js:17  NAME =  Marshall Islands REGION =   Oceania SUBREGIO =  Micronesia POPULATION =  59194
// script.js:16 COUNTRY FLAGS =  🇩🇿
// script.js:17  NAME =  Algeria REGION =   Africa SUBREGIO =  Northern Africa POPULATION =  44700000
// script.js:16 COUNTRY FLAGS =  🇯🇲
// script.js:17  NAME =  Jamaica REGION =   Americas SUBREGIO =  Caribbean POPULATION =  2961161
// script.js:16 COUNTRY FLAGS =  🇲🇿
// script.js:17  NAME =  Mozambique REGION =   Africa SUBREGIO =  Eastern Africa POPULATION =  31255435
// script.js:16 COUNTRY FLAGS =  🇪🇸
// script.js:17  NAME =  Spain REGION =   Europe SUBREGIO =  Southern Europe POPULATION =  47351567
// script.js:16 COUNTRY FLAGS =  🇭🇳
// script.js:17  NAME =  Honduras REGION =   Americas SUBREGIO =  Central America POPULATION =  9904608
// script.js:16 COUNTRY FLAGS =  🇳🇱
// script.js:17  NAME =  Netherlands REGION =   Europe SUBREGIO =  Western Europe POPULATION =  16655799
// script.js:16 COUNTRY FLAGS =  🇿🇦
// script.js:17  NAME =  South Africa REGION =   Africa SUBREGIO =  Southern Africa POPULATION =  59308690
// script.js:16 COUNTRY FLAGS =  🇦🇿
// script.js:17  NAME =  Azerbaijan REGION =   Asia SUBREGIO =  Western Asia POPULATION =  10110116
// script.js:16 COUNTRY FLAGS =  🇲🇰
// script.js:17  NAME =  North Macedonia REGION =   Europe SUBREGIO =  Southeast Europe POPULATION =  2077132
// script.js:16 COUNTRY FLAGS =  🇬🇲
// script.js:17  NAME =  Gambia REGION =   Africa SUBREGIO =  Western Africa POPULATION =  2416664
// script.js:16 COUNTRY FLAGS =  🇱🇷
// script.js:17  NAME =  Liberia REGION =   Africa SUBREGIO =  Western Africa POPULATION =  5057677
// script.js:16 COUNTRY FLAGS =  🇱🇺
// script.js:17  NAME =  Luxembourg REGION =   Europe SUBREGIO =  Western Europe POPULATION =  632275
// script.js:16 COUNTRY FLAGS =  🇨🇻
// script.js:17  NAME =  Cape Verde REGION =   Africa SUBREGIO =  Western Africa POPULATION =  555988
// script.js:16 COUNTRY FLAGS =  🇧🇸
// script.js:17  NAME =  Bahamas REGION =   Americas SUBREGIO =  Caribbean POPULATION =  393248
// script.js:16 COUNTRY FLAGS =  🇬🇪
// script.js:17  NAME =  Georgia REGION =   Asia SUBREGIO =  Western Asia POPULATION =  3714000
// script.js:16 COUNTRY FLAGS =  🇰🇮
// script.js:17  NAME =  Kiribati REGION =   Oceania SUBREGIO =  Micronesia POPULATION =  119446
// script.js:16 COUNTRY FLAGS =  🇹🇿
// script.js:17  NAME =  Tanzania REGION =   Africa SUBREGIO =  Eastern Africa POPULATION =  59734213
// script.js:16 COUNTRY FLAGS =  🇨🇳
// script.js:17  NAME =  China REGION =   Asia SUBREGIO =  Eastern Asia POPULATION =  1402112000
// script.js:16 COUNTRY FLAGS =  🇬🇹
// script.js:17  NAME =  Guatemala REGION =   Americas SUBREGIO =  Central America POPULATION =  16858333
// script.js:16 COUNTRY FLAGS =  🇸🇹
// script.js:17  NAME =  São Tomé and Príncipe REGION =   Africa SUBREGIO =  Middle Africa POPULATION =  219161
// script.js:16 COUNTRY FLAGS =  🇩🇪
// script.js:17  NAME =  Germany REGION =   Europe SUBREGIO =  Western Europe POPULATION =  83240525
// script.js:16 COUNTRY FLAGS =  🇸🇱
// script.js:17  NAME =  Sierra Leone REGION =   Africa SUBREGIO =  Western Africa POPULATION =  7976985
// script.js:16 COUNTRY FLAGS =  🇹🇩
// script.js:17  NAME =  Chad REGION =   Africa SUBREGIO =  Middle Africa POPULATION =  16425859
// script.js:16 COUNTRY FLAGS =  🇬🇧
// script.js:17  NAME =  United Kingdom REGION =   Europe SUBREGIO =  Northern Europe POPULATION =  67215293
// script.js:16 COUNTRY FLAGS =  🇸🇮
// script.js:17  NAME =  Slovenia REGION =   Europe SUBREGIO =  Central Europe POPULATION =  2100126
// script.js:16 COUNTRY FLAGS =  🇹🇭
// script.js:17  NAME =  Thailand REGION =   Asia SUBREGIO =  South-Eastern Asia POPULATION =  69799978
// script.js:16 COUNTRY FLAGS =  🇮🇩
// script.js:17  NAME =  Indonesia REGION =   Asia SUBREGIO =  South-Eastern Asia POPULATION =  273523621
// script.js:16 COUNTRY FLAGS =  🇲🇵
// script.js:17  NAME =  Northern Mariana Islands REGION =   Oceania SUBREGIO =  Micronesia POPULATION =  57557
// script.js:16 COUNTRY FLAGS =  🇬🇺
// script.js:17  NAME =  Guam REGION =   Oceania SUBREGIO =  Micronesia POPULATION =  168783
// script.js:16 COUNTRY FLAGS =  🇫🇮
// script.js:17  NAME =  Finland REGION =   Europe SUBREGIO =  Northern Europe POPULATION =  5530719
// script.js:16 COUNTRY FLAGS =  🇾🇹
// script.js:17  NAME =  Mayotte REGION =   Africa SUBREGIO =  Eastern Africa POPULATION =  226915
// script.js:16 COUNTRY FLAGS =  🇬🇮
// script.js:17  NAME =  Gibraltar REGION =   Europe SUBREGIO =  Southern Europe POPULATION =  33691
// script.js:16 COUNTRY FLAGS =  🇹🇲
// script.js:17  NAME =  Turkmenistan REGION =   Asia SUBREGIO =  Central Asia POPULATION =  6031187
// script.js:16 COUNTRY FLAGS =  🇽🇰
// script.js:17  NAME =  Kosovo REGION =   Europe SUBREGIO =  Southeast Europe POPULATION =  1775378
// script.js:16 COUNTRY FLAGS =  🇨🇮
// script.js:17  NAME =  Ivory Coast REGION =   Africa SUBREGIO =  Western Africa POPULATION =  26378275
// script.js:16 COUNTRY FLAGS =  🇲🇦
// script.js:17  NAME =  Morocco REGION =   Africa SUBREGIO =  Northern Africa POPULATION =  36910558
// script.js:16 COUNTRY FLAGS =  🇩🇴
// script.js:17  NAME =  Dominican Republic REGION =   Americas SUBREGIO =  Caribbean POPULATION =  10847904
// script.js:16 COUNTRY FLAGS =  🇬🇭
// script.js:17  NAME =  Ghana REGION =   Africa SUBREGIO =  Western Africa POPULATION =  31072945
// script.js:16 COUNTRY FLAGS =  🇻🇦
// script.js:17  NAME =  Vatican City REGION =   Europe SUBREGIO =  Southern Europe POPULATION =  451
// script.js:16 COUNTRY FLAGS =  🇯🇪
// script.js:17  NAME =  Jersey REGION =   Europe SUBREGIO =  Northern Europe POPULATION =  100800
// script.js:16 COUNTRY FLAGS =  🇹🇷
// script.js:17  NAME =  Turkey REGION =   Asia SUBREGIO =  Western Asia POPULATION =  84339067
// script.js:16 COUNTRY FLAGS =  🇹🇻
// script.js:17  NAME =  Tuvalu REGION =   Oceania SUBREGIO =  Polynesia POPULATION =  11792
// script.js:16 COUNTRY FLAGS =  🇮🇷
// script.js:17  NAME =  Iran REGION =   Asia SUBREGIO =  Southern Asia POPULATION =  83992953
// script.js:16 COUNTRY FLAGS =  🇪🇬
// script.js:17  NAME =  Egypt REGION =   Africa SUBREGIO =  Northern Africa POPULATION =  102334403
// script.js:16 COUNTRY FLAGS =  🇩🇰
// script.js:17  NAME =  Denmark REGION =   Europe SUBREGIO =  Northern Europe POPULATION =  5831404
// script.js:16 COUNTRY FLAGS =  🇰🇪
// script.js:17  NAME =  Kenya REGION =   Africa SUBREGIO =  Eastern Africa POPULATION =  53771300
// script.js:16 COUNTRY FLAGS =  🇧🇬
// script.js:17  NAME =  Bulgaria REGION =   Europe SUBREGIO =  Southeast Europe POPULATION =  6927288
// script.js:16 COUNTRY FLAGS =  🇿🇼
// script.js:17  NAME =  Zimbabwe REGION =   Africa SUBREGIO =  Southern Africa POPULATION =  14862927
// script.js:16 COUNTRY FLAGS =  🇦🇴
// script.js:17  NAME =  Angola REGION =   Africa SUBREGIO =  Middle Africa POPULATION =  32866268
// script.js:16 COUNTRY FLAGS =  🇳🇬
// script.js:17  NAME =  Nigeria REGION =   Africa SUBREGIO =  Western Africa POPULATION =  206139587
// script.js:16 COUNTRY FLAGS =  🇵🇱
// script.js:17  NAME =  Poland REGION =   Europe SUBREGIO =  Central Europe POPULATION =  37950802
// script.js:16 COUNTRY FLAGS =  🇸🇳
// script.js:17  NAME =  Senegal REGION =   Africa SUBREGIO =  Western Africa POPULATION =  16743930
// script.js:16 COUNTRY FLAGS =  🇸🇭
// script.js:17  NAME =  Saint Helena, Ascension and Tristan da Cunha REGION =   Africa SUBREGIO =  Western Africa POPULATION =  53192
// script.js:16 COUNTRY FLAGS =  🇱🇧
// script.js:17  NAME =  Lebanon REGION =   Asia SUBREGIO =  Western Asia POPULATION =  6825442
// script.js:16 COUNTRY FLAGS =  🇼🇸
// script.js:17  NAME =  Samoa REGION =   Oceania SUBREGIO =  Polynesia POPULATION =  198410
// script.js:16 COUNTRY FLAGS =  🇵🇭
// script.js:17  NAME =  Philippines REGION =   Asia SUBREGIO =  South-Eastern Asia POPULATION =  109581085
// script.js:16 COUNTRY FLAGS =  🇬🇬
// script.js:17  NAME =  Guernsey REGION =   Europe SUBREGIO =  Northern Europe POPULATION =  62999
// script.js:16 COUNTRY FLAGS =  🇸🇻
// script.js:17  NAME =  El Salvador REGION =   Americas SUBREGIO =  Central America POPULATION =  6486201
// script.js:16 COUNTRY FLAGS =  🇰🇼
// script.js:17  NAME =  Kuwait REGION =   Asia SUBREGIO =  Western Asia POPULATION =  4270563
// script.js:16 COUNTRY FLAGS =  🇹🇴
// script.js:17  NAME =  Tonga REGION =   Oceania SUBREGIO =  Polynesia POPULATION =  105697
// script.js:16 COUNTRY FLAGS =  🇴🇲
// script.js:17  NAME =  Oman REGION =   Asia SUBREGIO =  Western Asia POPULATION =  5106622
// script.js:16 COUNTRY FLAGS =  🇦🇫
// script.js:17  NAME =  Afghanistan REGION =   Asia SUBREGIO =  Southern Asia POPULATION =  40218234
// script.js:16 COUNTRY FLAGS =  🇰🇳
// script.js:17  NAME =  Saint Kitts and Nevis REGION =   Americas SUBREGIO =  Caribbean POPULATION =  53192
// script.js:16 COUNTRY FLAGS =  🇨🇫
// script.js:17  NAME =  Central African Republic REGION =   Africa SUBREGIO =  Middle Africa POPULATION =  4829764
// script.js:16 COUNTRY FLAGS =  🇷🇸
// script.js:17  NAME =  Serbia REGION =   Europe SUBREGIO =  Southeast Europe POPULATION =  6908224
// script.js:16 COUNTRY FLAGS =  🇦🇲
// script.js:17  NAME =  Armenia REGION =   Asia SUBREGIO =  Western Asia POPULATION =  2963234
// script.js:16 COUNTRY FLAGS =  🇧🇩
// script.js:17  NAME =  Bangladesh REGION =   Asia SUBREGIO =  Southern Asia POPULATION =  164689383
// script.js:16 COUNTRY FLAGS =  🇱🇦
// script.js:17  NAME =  Laos REGION =   Asia SUBREGIO =  South-Eastern Asia POPULATION =  7275556
// script.js:16 COUNTRY FLAGS =  🇨🇱
// script.js:17  NAME =  Chile REGION =   Americas SUBREGIO =  South America POPULATION =  19116209
// script.js:16 COUNTRY FLAGS =  🇵🇫
// script.js:17  NAME =  French Polynesia REGION =   Oceania SUBREGIO =  Polynesia POPULATION =  280904
// script.js:16 COUNTRY FLAGS =  🇵🇦
// script.js:17  NAME =  Panama REGION =   Americas SUBREGIO =  Central America POPULATION =  4314768
// script.js:16 COUNTRY FLAGS =  🇺🇸
// script.js:17  NAME =  United States REGION =   Americas SUBREGIO =  North America POPULATION =  329484123
// script.js:16 COUNTRY FLAGS =  🇳🇵
// script.js:17  NAME =  Nepal REGION =   Asia SUBREGIO =  Southern Asia POPULATION =  29136808
// script.js:16 COUNTRY FLAGS =  🇲🇲
// script.js:17  NAME =  Myanmar REGION =   Asia SUBREGIO =  South-Eastern Asia POPULATION =  54409794
// script.js:16 COUNTRY FLAGS =  🇫🇰
// script.js:17  NAME =  Falkland Islands REGION =   Americas SUBREGIO =  South America POPULATION =  2563
// script.js:16 COUNTRY FLAGS =  🇭🇺
// script.js:17  NAME =  Hungary REGION =   Europe SUBREGIO =  Central Europe POPULATION =  9749763
// script.js:16 COUNTRY FLAGS =  🇵🇼
// script.js:17  NAME =  Palau REGION =   Oceania SUBREGIO =  Micronesia POPULATION =  18092
// script.js:16 COUNTRY FLAGS =  🇬🇶
// script.js:17  NAME =  Equatorial Guinea REGION =   Africa SUBREGIO =  Middle Africa POPULATION =  1402985
// script.js:16 COUNTRY FLAGS =  🇬🇳
// script.js:17  NAME =  Guinea REGION =   Africa SUBREGIO =  Western Africa POPULATION =  13132792
// script.js:16 COUNTRY FLAGS =  🇦🇪
// script.js:17  NAME =  United Arab Emirates REGION =   Asia SUBREGIO =  Western Asia POPULATION =  9890400
// script.js:16 COUNTRY FLAGS =  🇹🇨
// script.js:17  NAME =  Turks and Caicos Islands REGION =   Americas SUBREGIO =  Caribbean POPULATION =  38718
// script.js:16 COUNTRY FLAGS =  🇻🇬
// script.js:17  NAME =  British Virgin Islands REGION =   Americas SUBREGIO =  Caribbean POPULATION =  30237
// script.js:16 COUNTRY FLAGS =  🇱🇮
// script.js:17  NAME =  Liechtenstein REGION =   Europe SUBREGIO =  Western Europe POPULATION =  38137
// script.js:16 COUNTRY FLAGS =  🇧🇦
// script.js:17  NAME =  Bosnia and Herzegovina REGION =   Europe SUBREGIO =  Southeast Europe POPULATION =  3280815
// script.js:16 COUNTRY FLAGS =  🇲🇼
// script.js:17  NAME =  Malawi REGION =   Africa SUBREGIO =  Eastern Africa POPULATION =  19129955
// script.js:16 COUNTRY FLAGS =  🇧🇹
// script.js:17  NAME =  Bhutan REGION =   Asia SUBREGIO =  Southern Asia POPULATION =  771612
// script.js:16 COUNTRY FLAGS =  🇨🇲
// script.js:17  NAME =  Cameroon REGION =   Africa SUBREGIO =  Middle Africa POPULATION =  26545864
// script.js:16 COUNTRY FLAGS =  🇦🇩
// script.js:17  NAME =  Andorra REGION =   Europe SUBREGIO =  Southern Europe POPULATION =  77265
// script.js:16 COUNTRY FLAGS =  🇬🇵
// script.js:17  NAME =  Guadeloupe REGION =   Americas SUBREGIO =  Caribbean POPULATION =  400132
// script.js:16 COUNTRY FLAGS =  🇨🇬
// script.js:17  NAME =  Republic of the Congo REGION =   Africa SUBREGIO =  Middle Africa POPULATION =  5657000
// script.js:16 COUNTRY FLAGS =  🇷🇪
// script.js:17  NAME =  Réunion REGION =   Africa SUBREGIO =  Eastern Africa POPULATION =  840974
// script.js:16 COUNTRY FLAGS =  🇧🇫
// script.js:17  NAME =  Burkina Faso REGION =   Africa SUBREGIO =  Western Africa POPULATION =  20903278
// script.js:16 COUNTRY FLAGS =  🇯🇴
// script.js:17  NAME =  Jordan REGION =   Asia SUBREGIO =  Western Asia POPULATION =  10203140
// script.js:16 COUNTRY FLAGS =  🇨🇩
// script.js:17  NAME =  DR Congo REGION =   Africa SUBREGIO =  Middle Africa POPULATION =  108407721
// script.js:16 COUNTRY FLAGS =  🇹🇰
// script.js:17  NAME =  Tokelau REGION =   Oceania SUBREGIO =  Polynesia POPULATION =  1411
// script.js:16 COUNTRY FLAGS =  🇻🇳
// script.js:17  NAME =  Vietnam REGION =   Asia SUBREGIO =  South-Eastern Asia POPULATION =  97338583
// script.js:16 COUNTRY FLAGS =  🇸🇽
// script.js:17  NAME =  Sint Maarten REGION =   Americas SUBREGIO =  Caribbean POPULATION =  40812
// script.js:16 COUNTRY FLAGS =  🇧🇪
// script.js:17  NAME =  Belgium REGION =   Europe SUBREGIO =  Western Europe POPULATION =  11555997
// script.js:16 COUNTRY FLAGS =  🇺🇲
// script.js:17  NAME =  United States Minor Outlying Islands REGION =   Americas SUBREGIO =  North America POPULATION =  300
// script.js:16 COUNTRY FLAGS =  🇧🇷
// script.js:17  NAME =  Brazil REGION =   Americas SUBREGIO =  South America POPULATION =  212559409
// script.js:16 COUNTRY FLAGS =  🇧🇿
// script.js:17  NAME =  Belize REGION =   Americas SUBREGIO =  Central America POPULATION =  397621
// script.js:16 COUNTRY FLAGS =  🇦🇬
// script.js:17  NAME =  Antigua and Barbuda REGION =   Americas SUBREGIO =  Caribbean POPULATION =  97928
// script.js:16 COUNTRY FLAGS =  🇵🇾
// script.js:17  NAME =  Paraguay REGION =   Americas SUBREGIO =  South America POPULATION =  7132530
// script.js:16 COUNTRY FLAGS =  🇧🇯
// script.js:17  NAME =  Benin REGION =   Africa SUBREGIO =  Western Africa POPULATION =  12123198
// script.js:16 COUNTRY FLAGS =  🇧🇳
// script.js:17  NAME =  Brunei REGION =   Asia SUBREGIO =  South-Eastern Asia POPULATION =  437483
// script.js:16 COUNTRY FLAGS =  🇧🇴
// script.js:17  NAME =  Bolivia REGION =   Americas SUBREGIO =  South America POPULATION =  11673029
// script.js:16 COUNTRY FLAGS =  🇩🇯
// script.js:17  NAME =  Djibouti REGION =   Africa SUBREGIO =  Eastern Africa POPULATION =  988002
// script.js:16 COUNTRY FLAGS =  🇬🇫
// script.js:17  NAME =  French Guiana REGION =   Americas SUBREGIO =  South America POPULATION =  254541
// script.js:16 COUNTRY FLAGS =  🇨🇦
// script.js:17  NAME =  Canada REGION =   Americas SUBREGIO =  North America POPULATION =  38005238
// script.js:16 COUNTRY FLAGS =  🇵🇲
// script.js:17  NAME =  Saint Pierre and Miquelon REGION =   Americas SUBREGIO =  North America POPULATION =  6069
// script.js:16 COUNTRY FLAGS =  🇯🇵
// script.js:17  NAME =  Japan REGION =   Asia SUBREGIO =  Eastern Asia POPULATION =  125836021
// script.js:16 COUNTRY FLAGS =  🇷🇼
// script.js:17  NAME =  Rwanda REGION =   Africa SUBREGIO =  Eastern Africa POPULATION =  12952209
// script.js:16 COUNTRY FLAGS =  🇻🇨
// script.js:17  NAME =  Saint Vincent and the Grenadines REGION =   Americas SUBREGIO =  Caribbean POPULATION =  110947
// script.js:16 COUNTRY FLAGS =  🇮🇸
// script.js:17  NAME =  Iceland REGION =   Europe SUBREGIO =  Northern Europe POPULATION =  366425
// script.js:16 COUNTRY FLAGS =  🇧🇾
// script.js:17  NAME =  Belarus REGION =   Europe SUBREGIO =  Eastern Europe POPULATION =  9398861
// script.js:16 COUNTRY FLAGS =  🇭🇰
// script.js:17  NAME =  Hong Kong REGION =   Asia SUBREGIO =  Eastern Asia POPULATION =  7500700
// script.js:16 COUNTRY FLAGS =  🇱🇸
// script.js:17  NAME =  Lesotho REGION =   Africa SUBREGIO =  Southern Africa POPULATION =  2142252
// script.js:16 COUNTRY FLAGS =  🇫🇯
// script.js:17  NAME =  Fiji REGION =   Oceania SUBREGIO =  Melanesia POPULATION =  896444
// script.js:16 COUNTRY FLAGS =  🇦🇹
// script.js:17  NAME =  Austria REGION =   Europe SUBREGIO =  Central Europe POPULATION =  8917205
// script.js:16 COUNTRY FLAGS =  🇨🇴
// script.js:17  NAME =  Colombia REGION =   Americas SUBREGIO =  South America POPULATION =  50882884
// script.js:16 COUNTRY FLAGS =  🇬🇦
// script.js:17  NAME =  Gabon REGION =   Africa SUBREGIO =  Middle Africa POPULATION =  2225728
// script.js:16 COUNTRY FLAGS =  🇸🇦
// script.js:17  NAME =  Saudi Arabia REGION =   Asia SUBREGIO =  Western Asia POPULATION =  34813867
// script.js:16 COUNTRY FLAGS =  🇬🇸
// script.js:17  NAME =  South Georgia REGION =   Antarctic SUBREGIO =  undefined POPULATION =  30
// script.js:16 COUNTRY FLAGS =  🇪🇹
// script.js:17  NAME =  Ethiopia REGION =   Africa SUBREGIO =  Eastern Africa POPULATION =  114963583
// script.js:16 COUNTRY FLAGS =  🇧🇶
// script.js:17  NAME =  Caribbean Netherlands REGION =   Americas SUBREGIO =  Caribbean POPULATION =  25987
// script.js:16 COUNTRY FLAGS =  🇲🇨
// script.js:17  NAME =  Monaco REGION =   Europe SUBREGIO =  Western Europe POPULATION =  39244
// script.js:16 COUNTRY FLAGS =  🇰🇵
// script.js:17  NAME =  North Korea REGION =   Asia SUBREGIO =  Eastern Asia POPULATION =  25778815
// script.js:16 COUNTRY FLAGS =  🇮🇹
// script.js:17  NAME =  Italy REGION =   Europe SUBREGIO =  Southern Europe POPULATION =  59554023
// script.js:16 COUNTRY FLAGS =  🇳🇦
// script.js:17  NAME =  Namibia REGION =   Africa SUBREGIO =  Southern Africa POPULATION =  2540916
// script.js:16 COUNTRY FLAGS =  🇲🇳
// script.js:17  NAME =  Mongolia REGION =   Asia SUBREGIO =  Eastern Asia POPULATION =  3278292
// script.js:16 COUNTRY FLAGS =  🇸🇧
// script.js:17  NAME =  Solomon Islands REGION =   Oceania SUBREGIO =  Melanesia POPULATION =  686878
// script.js:16 COUNTRY FLAGS =  🇾🇪
// script.js:17  NAME =  Yemen REGION =   Asia SUBREGIO =  Western Asia POPULATION =  29825968
// script.js:16 COUNTRY FLAGS =  🇷🇴
// script.js:17  NAME =  Romania REGION =   Europe SUBREGIO =  Southeast Europe POPULATION =  19286123
// script.js:16 COUNTRY FLAGS =  🇸🇯
// script.js:17  NAME =  Svalbard and Jan Mayen REGION =   Europe SUBREGIO =  Northern Europe POPULATION =  2562
// script.js:16 COUNTRY FLAGS =  🇫🇷
// script.js:17  NAME =  France REGION =   Europe SUBREGIO =  Western Europe POPULATION =  67391582