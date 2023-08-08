const express = require('express');
var router = express.Router();
let a2021 = {
    'CONF' : {
        'COMM' : {
            'PERSON' : 'AWARD'
        } 
    }
}
let a2122 = {
        'conferences' : {
            'VAMUN' : {
                '' : {
                    'Delegation Award' : 'Outstanding Small'
                },
                'UNICEF' : {
                    'Archi Marrapu & Samhitha Maramreddy' : 'Honorable Mention'
                },
                'Children of Mount Olympus' : {
                    'Mantra Iyer' : "Best Delegate",
                    'Neha Asuri' : 'Outsdanding Delegate'
                },
                'The Town of New Thuringia' : {
                    'Tanish Jain' : 'Best Delegate',
                    'Ananya Enganti' : 'Honorable Mention'
                }
            },
            'WMHSMUN' : {
                '' : {
                    'Delegation Award' : 'Outstanding Large'
                },
                'Bandung' : {
                    'Arnav Bandam' : 'Outstanding Delegate'
                },
                'UNFPA' : {
                    'Asmita Kodityala' : 'Outstanding Delegate'
                },
                'UNCSTD' : {
                    'Neha Chandran' : 'Best Delegate',
                    'Poorna Prakash' : 'Honorable Mention'
                },
                'IOM' : {
                    'Vaishnavi Kuriti' : 'Honorable Mention',
                    'Tejavi Kumar' : 'Verbal Commendation'
                },
                'OAS' : {
                    'Rohith Yelisetty' : 'Honorable Mention'
                },
                'UNSC' : {
                    'Tommy Fan' : 'Outstanding Delegate'
                },
                'Arctic Council' : {
                    'Zarif Azher' : 'Outstanding Delegate'
                },
                'Court of Charlemagne' : {
                    'Nihal Shah' : 'Outstanding Delegate',
                    'Tessa Joseph' : 'Honorable Mention'
                },
                'Kuwait Cabinet' : {
                    'Thrisha Sakamuri' : 'Best Delegate'
                },
                'International Maritime Organization' : {
                    'Nathan Mo' : 'Honorable Mention'
                },
                'Met Board of Directors' : {
                    'Prithvi Seri' : 'Outstanding Delegate'
                },
                'Australasian Fire & Emergency Services' : {
                    'Sahithi Atluri' : "Best Delegate",
                    'Anirudh Mantha' : 'Honorable Mention'
                },
                'Brexit JCC: Vote Remain' : {
                    'Jessica Ye' : 'Best Delegate'
                },
                'Fall of the Ottoman Empire' : {
                    'Will Hancock' : 'Outstanding Delegate'
                },
                'Mount Olympus' : {
                    'Garv Jain' : 'Best Delegate',
                    'Nitin Kanchinadam' : 'Verbal Commendation'
                },
                'The Cabinet of Tsai Ing Wen' : {
                    'Jawand Singh' : 'Honorable Mention'
                },
                'The Presidency of Alexander Hamilton' : {
                    'Nandini Shyamala' : 'Best Delegate'
                },
                'Ad Hoc' : {
                    'Alexandra Fall' : 'Best Delegate'
                }
            },
            'YMUN' : {
                'World Health Organization' : {
                    'Ashritha Gandhari' : 'Best Delegate',
                    'Audrey Czarnecki' : 'Honorable Mention'
                },
                'UN Conference on Trade and Development' : {
                    'Arnav Bandam' : 'Honorable Mention'
                },
                'UN Office for Disaster Risk Reduction' : {
                    'Lavanya Krishna' : 'Outstanding Delegate'
                },
                'UN High Commissioner for Refugees' : {
                    'Adithiya Balaguru' : 'Honorable Mention'
                },
                'UN Human Rights Council' : {
                    'Lara Gurses' : 'Outstanding Delegate'
                },
                'World Bank' : {
                    'Sachin Kumar' : 'Best Delegate'
                },
                'UN Commission on Science and Technology for Development' : {
                    'Rohith Yelisetty' : 'Honorable Mention'
                },
                'Commission on Narcotics and Drugs' : {
                    'Tanmayee Maddineni' : 'Honorable Mention'
                },
                'UN Commission on Population and Development' : {
                    'Chinmayee Yerraguntla' : 'Best Delegate',
                    'Samhitha Maramreddy' : 'Outstanding Delegate'
                },
                'UN Development Programme' : {
                    'Poorna Prakash' : 'Outstanding Delegate'
                },
                'Association of Southeast Asian Nations' : {
                    'Krish Malik' : 'Best Delegate'
                },
                'Organization of American States' : {
                    'Neha Chandran' : 'Outstanding Delegate'
                },
                'Arab League' : {
                    'Ananya Enganti' : 'Best Delegate'
                },
                'Star Wars' : {
                    'Sahithi Atluri' : 'Best Delegate'
                },
                'Sokovia Accords' : {
                    'Anirudh Mantha' : 'Best Delegate'
                },
                'United Nations Space Force' : {
                    'Naisha Patel' : 'Best Delegate'
                },
                'JCC Ukraine 2015' : {
                    'Aria Merrill' : 'Best Delegate'
                },
                'Ad Hoc' : {
                    'Nitin Kanchinadam' : 'Best Delegate'
                }
            },
            'CHMUN' : {
                '' : {
                    'Delegation Award' : 'Best Large'
                },
                'International Monetary Fund' : {
                    'Anirudh Mantha & Rohith Yelisetty' : 'Best Delegation',
                    'Lucas Ribeiro & Vivian Gao' : 'Honorable Mention',
                    'Neha Chandran & Poorna Prakash' : 'Honorable Mention'
                },
                'United Nations High Commissioner for Human Rights' : {
                    'Meghana Gopannagari & Ashley Chen' : 'Outstanding Delegation',
                    'Lavanya Krishna & Anmol Karan' : 'Verbal Commendation',
                    'Chinmayee Yerraguntla & Adithiya Balaguru' : 'Verbal Commendation'
                },
                'International Atomic Energy Agency' : {
                    'Tanish Jain & Simar Narula' : 'Best Delegation',
                    'Japneet Kaur & Ruhani Chhabra' : 'Verbal Commendation'
                },
                'United Nations Environment Programme' : {
                    'Ashrita Gandhari & Dilnaaz Talwar' : 'Outstanding Delegation',
                    'Nathan Mo & Jay Siva' : 'Outstanding Delegation',
                    'Rishabh Chhabra & Punav Kheterpal' : 'Honorable Mention'
                },
                'Cabinet of Brazil' : {
                    'Suraj Vaddi' : 'Outstanding Delegate',
                    'Saloni Bedi' : 'Verbal Commendation'
                },
                'International Congress of Women at The Hague' : {
                    'Tessa Joseph' : 'Best Delegate',
                    'Niharika Chandna' : 'Honorable Mention'
                },
                'United Nations Security Council' : {
                    'Naish aPatel' : 'Best Delegate',
                    'Krish Malik' : 'Honorable Mention'
                },
                'Tik Tok Board of Directors' : {
                    'Catherine Pak' : 'Best Delegate'
                },
                'Hong Kong Independence 2047' : {
                    'Anuj Khemka' : 'Best Delegate',
                    'Nandini Shyamala' : 'Outstanding Delegate'
                },
                'Ad-Hoc Committee of the Secretary-General' : {
                    'Alexandra Fall' : 'Best Delegate'
                }
            },
            'VIMUNC' : {
                '' : {
                    'Delegation Award' : 'Best Large'
                },
                'Disarmament and International Security Committee' : {
                    'Dilnaaz Talwar & Ashrita Gandhari' : 'Outstanding Delegation',
                },
                'World Health Organization' : {
                    'Meghana Gopannagari & Ashley Chen' : 'Verbal Commendation'
                },
                'Special Political and Decolonization Committee' : {
                    'Eshani Das & Saloni Bedi' : 'Outstanding Delegation',
                    'Tejavi Kumar & Siya Bulusu' : 'Verbal Commendation'
                },
                'Economic and Financial Affairs Council' : {
                    'Erin Tran & Jason Yi' : 'Outstanding Delegation',
                    'Jia Mody & Nishita Paruchuri' : 'Honorable Mention',
                    'Agasthya Kansal & Lalit Boyapati' : 'Honorable Mention',
                    'Japneet Kaur & Samhitha Maramreddy' : 'Verbal Commendation'
                },
                'Knights of the Round Table' : {
                    'Sahithi Atluri' : 'Outstanding Delegate',
                    'Rishabh Chhabra' : 'Honorable Mention'
                },
                'United States Department of Agriculture' : {
                    'Sophia Suganuma' : 'Best Delegate',
                    'Zarif Azher' : 'Honorable Mention'
                },
                'Arab League' : {
                    'Thrisha Sakamuri' : 'Best Delegate',
                    'Mantra Iyer' : 'Verbal Commendation'
                },
                'JCC Crusades: Muslims' : {
                    'Neha Asuri' : 'Best Delegate',
                    'Jessica Ye' : 'Outstanding Delegate'
                },
                'JCC Crusades: Christians' : {
                    'Anuk Khemka' : 'Best Delegate'
                },
                'TikTok Board of Directors' : {
                    'Suraj Vaddi' : 'Best Delegate',
                    'Anirudh Mantha' : 'Outstanding Delegate',
                    'Arjun Bhat' : 'Verbal Commendation'
                },
                'United Nations Security Council: 2080' : {
                    'Naisha Patel' : 'Outstanding Delegate',
                    'Ananya Enganti' : 'Honorable Mention'
                },
                'Ad Hoc' : {
                    'Nitin Kanchinadam' : 'Best Delegate'
                }
            },
            'MCMUNC' : {
                '' : {
                    'Delegation Award' : 'Best Large!!!'
                },
                'United Nations Human Settlements Programme (UN Habitat)' : {
                    'Aayush Sethi & Lalit Boyapati' : 'Verbal Commendation',
                    'Poorna Prakash & Samhitha Maramreddy' : 'Honorable Mention',
                    'Chinmayee Yerraguntla & Adithiya Balaguru' : 'Outstanding Delegation'
                },
                'United Nations Office on Drugs and Crime (UNODC)' : {
                    'Rohith Yelisetty & Archi Marrapu' : 'Outstanding Delegation',
                    'Sumanth Kalluru & Tanmai Kalisipudi' : 'Honorable Mention'
                },
                'Social, Humanitarian, and Cultural Committee (SOCHUM)' : {
                    'Arnav Bandam & Siya Bulusu' : 'Honorable Mention',
                    'Asmita Kodityala & Tejavi Kumar' : 'Verbal Commendation',
                    'Nishita Paruchuri & Jia Mody' : 'Verbal Commendation'
                },
                'United Nations Department of Economic and Social Affairs (UNDESA)' : {
                    'Lavanya Krishna & Anmol Karan' :'Verbal Commendation',
                    'Grace Liu & Benjamin Reznikov' :'Verbal Commendation'
                },
                'Family Equality Council' : {
                    'Thrisha Sakamuri & Tessa Joseph' :'Best Delegation',
                    'Anirudh Mantha & Samhitha Singiresu' : 'Verbal Commendation'
                },
                'Golden Globes Board of Directors' : {
                    'Sahithi Atluri' : 'Best Delegate'
                },
                'The Republic of Taiwan 1949' : {
                    'Simar Narula' : 'Best Delegate'
                },
                'CIA Crypto AG Pre-2018' : {
                    'Jessica Ye' : 'Best Delegate'
                },
                'JCC Peloponnesian War: Athens' : {
                    'Nitin Kanchinadam' : 'Best Delegate'
                },
                'JCC Peloponnesian War: Sparta' : {
                    'Sachin Kumar' : 'Outstanding Delegate'
                },
                'The Council (Ad Hoc)' : {
                    'Catherine Pak' : 'Best Delegate'
                }
            }
        }
    }

let a2223 = {
        'conferences' : {
            'MCMUNC' : {
                '' : {
                    'Delegation Award' : 'Best Large'
                },
                'United Nations Office on Outer Space Affairs (UNOOSA)' : {
                    'Japneet Kaur & Samhitha Maramreddy' : 'Honorable Mention',
                    'Arnav Bandam & Siya Bulusu' : 'Honorable Mention',
                    'Ashritha Gandhari & Neha Chandran' : 'Outstanding Delegation',
                },
                'United Nations Environment Programme' : {
                    'Aastha Doshi & Nithia Senthilnathan' : "Verbal Commendation",
                    'Poorna Prakash & Tanmayee Maddineni' : 'Outstanding Delegation',
                    'Jia Mody & Nishita Parachuri' : 'Best Delegation',
                },
                'United Nations Office for the Coordination of Humanitarian Affairs' : {
                    'Adithiya Balaguru & Rohith Yelisetty' : 'Verbal Commendation',
                    'Anmol Karan & Lalit Boyapati' : 'Honorable Mention',
                    'Dilnaaz Talwar & Asmita Kodityala' : 'Outstanding Delegation'
                },
                'British House of Commons' : {
                    'Sahithi Atluri' : 'Honorable Mention',
                },
                'USA Gymnastics Executive Leadership Team' : {
                    'Vaishnavi Kuriti' : 'Verbal Commendation',
                    'Mantra Iyer' : 'Best Delegate'
                },
                'Midieval European Kingdoms' : {
                    'Jordan Hadjimichael' : 'Outstanding Delegate'
                },
                'Lost City of Atlantis' : {
                    'Suraj Vaddi' : "Best Delegate"
                },
                'Death Note' : {
                    'Sachin Satishkumar' : 'Best Delegate'
                },
                'JCC East vs. West Coast Hip Hop: West Coast' : {
                    'Aria Merrill' : 'Best Delegate'
                },
                'JCC East vs. West Coast Hip Hop: East Coast' : {
                    'Zac Baker' : 'Honorable Mention',
                    'Naisha Patel' : 'Best Delegate'
                },
                'AdHoc Committee of the Secretary General' : {
                    'Tanish Jain' : 'Best Delegate'
                }
            },
            'WMHSMUN' : {
                'Novice - Economic and Social Council (ECOSOC)' : {
                    'Dina Kurdi & Shurbhi Singla' : 'Outstanding Delegation'
                },
                'Disarmament and International Security Committee (DISEC)' : {
                    'Punav Khetarpal & Parth Gupta' : 'Verbal Commendation'
                },
                'Novice - World Health Organization (WHO)' : {
                    'Aditi Kodukula' : 'Outstanding Delegate',
                    'Hasset Bekele' : 'Verbal Commendation',
                    'Dylan Truncellito' : 'Verbal Commendation'
                },
                'Novice - United Nations High Commissioner for Refugees (UNHCR)' : {
                    'Jamie Kim' : 'Outstanding Delegate',
                    'Jahnavi Guduru' : 'Honorable Mention'
                },
                'UN Ocean Conference 2022' : {
                    'Arjun Bhat' : 'Verbal Commendation',
                    'Arnav Bandam' : 'Verbal Commendation'
                },
                'Economic Commission for Latin America & the Caribbean' : {
                    'Poorna Prakash' : 'Verbal Commendation'
                },
                'Novice - Disney Board of Imagineers' : {
                    'Neha Chandran' : 'Best Delegate',
                    'Anmol Karan' : 'Outstanding Delegate'
                },
                'The Presidential Commission on the Status of Women' : {
                    'Thrisha Sakamuri' : 'Honorable Mention'
                },
                'UN LGBTI Core Group' : {
                    'Nihal Shah' : 'Best Delegate',
                    'Aryan Rajput' : 'Outstanding Delegate'
                },
                'The Unofficial House of Burgesses: Williamsburg and the American Revolution' : {
                    'Simar Narula' : 'Outstanding Delegate'
                },
                'Iran Nuclear Deal' : {
                    'Zarif Azher' : 'Honorable Mention'
                },
                'Presidential Climate Commission: South Africa' : {
                    'Tessa Joseph' : 'Verbal Commendation'
                },
                'College Board 2020' : {
                    'Sahithi Atluri' : 'Best Delegate'
                },
                'Novice - Heroes of Olympus' : {
                    'Matt Sprintson' : 'Best Delegate',
                    'Jordan Hadjimichael' : 'Outstanding Delegate'
                },
                'Novice - United Animals General Assembly' : {
                    'Rohith Yelisetty' : 'Outstanding Delegate'
                },
                'Stamping out the Spark: War Council of the Galactic Empire (Star Wars)' : {
                    'Naisha Patel' : 'Outstanding Delegate',
                    'Ananya Enganti' : 'Honorable Mention'
                },
                "The Fall of the Qing Dynasty: Emperor Puyi's Court" : {
                    'Aria Merril' : 'Outstanding Delegate',
                    'Jawand Singh' : 'Verbal Commendation'
                },
                'The Future of Prussia: Frederick the Great and the Seven Years War' : {
                    'Nandini Shyamala' : 'Best Delegate'
                },
                'Second Red Scare JCC: Russian Bolsheivk Party' : {
                    'Anirudh Mantha' : 'Outstanding Delegate'
                },
                'Second Red Scare JCC: House Un-American Activities Committee (HUAC)' : {
                    'Suraj Vaddi' : 'Honorable Mention'
                }
            },
            'CHMUN' : {
                '' : {
                    'Delegation Award' : 'Best Large'
                },
                'United Nations Human Rights Council (UNHRC)' : {					
                    "Nihal Shah & Tessa Joseph" : "Best Delegate",
                    'Jahnavi Guduru & Claire Guo' : 'Honorable Mention'
                }
            },
            'ILMUNC' : {
                'Disarmament and International Security Committee (DISEC)' : {
                    'Rohith Yelisetty & Chinmayee Yerraguntla' : 'Outstanding Delegate',
                    'Christine Qiao & Julia Shi' : 'Honorable Mention'
                },
                'United Nations Legal Committee (LEGAL)' : {
                    'Shanna Chung & Justin Kim' : 'Honorable Mention'
                },
                'Specialized Political and Decolonization Committee (SPECPOL)' : {
                    'Ashrita Gandhari & Dilnaaz Talwar' : 'Best Delegate',
                    'Amrit Singh & Vikram Rudraraju' : 'Verbal Commendation'
                },
                'Economic and Financial Affairs Council (ECOFIN)' : {
                    'Sumanth Kalluru & Jean Lavigne du Cadet' : 'Outstanding Delegate'
                },
                'United Nations Development Programme (UNDP)' : {
                    'Om Gole & Punav Khetharpal' : 'Best Delegate',
                    'Jahnavi Guduru & Myra Joshi' : 'Verbal Commendation',
                    'Aayush Sethi & Lalit Boyapati' : 'Verbal Commendation'
                },
                'Social, Humanitarian, and Cultural Committee (SOCHUM)' : {
                    'Tanmai Kalisipudi & Simrith Ranjan' : 'Verbal Commendation',
                    'Jamie Kim & Akshaya Lohia' : 'Verbal Commendation',
                    'Asmita Kodityala & Siya Bulsu' : 'Verbal Commendation'
                },
                'Special Summit on Climate 2032' : {
                    'Gia Irudhayanathan & Aryan Garg' : 'Verbal Commendation'
                },
                'United Nations Environment Programme (UNEP)' : {
                    'Ashnie Trikha & Hasset Bekele' : 'Outstanding Delegate',
                    'Arjun Bhat & Zarif Azher' : 'Honorable Mention',
                    'Aditi Kodukula & Raghav Kasi' :'Honorable Mention'
                },
                'World Meteorological Association (WMO)' : {
                    'Dina Kurdi & Ryan Singh' : 'Outstanding Delegate'
                },
                'World Health Organization (WHO)' : {
                    'Thrisha Sakamuri & Aryan Rajput' : 'Outstanding Delegate',
                    'Pranav Elavarthi & Vaishnavi Kuriti' : 'Verbal Commendation'
                },
                'United Nations Office on Drugs and Crime (UNODC)' : {
                    'Matt Sprintson & Jordan Hadjimichael' : 'Best Delegation',
                    'Anirudh Chintakindi & Agasthya Kansal' : 'Honorable Mention'
                },
                'United Nations Security Council (UNSC)' : {
                    'Aditya Vasantarao & Sachin Satishkumar' : 'Honorable Mention'
                },
                'Press Corps' : {
                    'Zac Baker' : 'Verbal Commendation'
                },
                'United Nations Committee on the Peaceful Uses of Outer Space (UNCOPOUS)' : {
                    'Krish Malik' : 'Honorable Mention'
                },
                'Oscars Board of Governers' : {
                    'Suraj Vaddi' : 'Verbal Commendation'
                },
                'ASEAN' : {
                    'Simar Narula' : 'Honorable Mention'
                },
                'JCC The Tudors: Queen Elizabeth' : {
                    'Naisha Patel' : 'Honorable Mention'
                },
                'JCC The Tudors: Mary Queen of Scots' : {
                    'Nandini Shyamala' : 'Best Delegate'
                },
                'Paris Peace Conference 1919' : {
                    'Anirudh Mantha' : 'Verbal Commendation'
                },
                'Hype House' : {
                    'Garv Jain' : 'Outstanding Delegate'
                },
                'Mexican Multinational' : {
                    'Jessica Ye' :'Honorable Mention'
                },
                'Ad-Hoc Committee of the Secretary General' : {
                    'Tanish Jain' : 'Best Delegate'
                }
            },
            'NAIMUN' : {
                '' : {
                    'Delegation Award' : 'Best Large'
                },
                'Disarmament and International Security Committee (DISEC)' : {
                    'Aastha Doshi & Myra Joshi' : 'Verbal Commendation',
                    'Jean Lavigne Du Cadet & Sumanth Kalluru' : 'Honorable Mention'
                },
                'Social, Cultural, and Humanitarian Committee (SOCHUM)' : {
                    'Jamie Kim & Julia Shi' : 'Outstanding Delegation'
                },
                'Special Political and Decolonization Committee, 1993 (SPECPOL)' : {
                    'Punav Khetharpal & Om Gole' : 'Verbal Commendation'
                },
                'United Nations Human Rights Council (UNHRC)' : {
                    'Shanna Chung & Vikram Rudraraju' : 'Verbal Commendation'
                },
                'Pacific Island Cooperation Summit' : {
                    'Rushil Umaretiya & Tanmai Kalisipudi' : 'Verbal Commendation',
                    'Aryan Garg & Gia Irudhayanathan' : 'Verbal Commendation'
                },
                'Commission on the Status of Women' : {
                    'Jahnavi Guduru & Claire Guo' : 'Honorable Mention'
                },
                'Organization of Islamic Cooperation (OIC)' : {
                    'Ryan Singh & Aditi Kodukula' : 'Outstanding Delegation'
                },
                "Unrepresented Nations and People's Organization" : {
                    'Krish Malik & Sahithi Atluri' : 'Outstanding Delegation'
                },
                'Pan-African Parliament' : {
                    'Thrisha Sakamuri & Tessa Joseph' : 'Best Delegation'
                },
                'United Nations Security Council: Congo Crisis, 1966' : {
                    'Tanish Jain & Simar Narula' : 'Best Delegation'
                },
                'The World Health Organization (WHO)' : {
                    'Archi Marrapu' : 'Outstanding Delegate'
                },
                'United Nations Educational, Scientific, and Cultural Organization (UNESCO)' : {
                    'Raghav Kasi' : 'Verbal Commendation',
                    'Akshaya Lohia' : 'Book Award'
                },
                'Chapultepec Peace Accords, 1992' : {
                    'Neha Chandran' : 'Best Delegate',
                    'Chinmayee Yerraguntla' : 'Honorable Mention'
                },
                'Earth First!' : {
                    'Zarif Azher' : 'Outstanding Delegate',
                    'Poorna Prakash' : 'Verbal Commendation'
                },
                'New Culture Movement in China: PKU School Board, 1917' : {
                    'Jessica Ye' : 'Outstanding Delegate'
                },
                'Ad-Hoc Committee of the Secretary-General' : {
                    'Suraj Vaddi' : 'Best Delegate'
                },
                'JCC The Fall of Edo: The Tokugawa Shogunate' : {
                    'Rohith Yelisetty' : 'Honorable Mention'
                },
                'JCC The Fall of Edo: The Imperial Court' : {
                    'Anirudh Chintakindi' : 'Best Delegate'
                },
                'Bronze Age Power Council, 1200 BCE' : {
                    'Aryan Rajput' : 'Best Delegate'
                },
                'The Women Have Awoken: Revolutionary Association of the Women of Afghanistan (RAWA), 1977' : {
                    'Lavanya Krishna' :'Honorable Mention'
                },
                'Jhansi Ki Rani: The Court of Queen Lakshmibai, 1854' : {
                    'Sachin Kumar' : 'Best Delegate'
                },
                'Cochabamba Water War, 1999' : {
                    'Rishabh Chhabra' : 'Verbal Commendation'
                },
                'The Hand of God and the House of Saud- Newcastle Board of Directors, 2022' : {
                    'Adithiya Balaguru' : 'Honorable Mention'
                },
                'How to Undemocratically Save Democracy: European Council, 2020' : {
                    'Jawand Singh' : 'Honorable Mention'
                },
                "Uncle, 'It's Over': Kosovo Independence, 2007" : {
                    'Arnav Bandam' : 'Verbal Commendation'
                },
                'The Indonesian National Revolution: Japan' : {
                    'Anirudh Mantha' : 'Best Delegate'
                },
                'The Indonesian National Revolution: Republican Party' : {
                    'Naisha Patel' : 'Book Award'
                },
                'The Indonesian National Revolution: Socialist Party' : {
                    'Jordan Hadjemichael' : 'Best Delegate'
                },
                'The Indonesian National Revolution: Netherlands Indies Civil Administration (NICA)' : {
                    'Aria Merril' : 'Best Delegate'
                },
                'The Indonesian National Revolution: Allied Coalition' : {
                    'Ananya Enganti' : 'Verbal Commendation'
                }
            }
        }
    }

router.get('/awards', function(req, res) {
    res.render('awards')
})
router.get('/22-23', function(req,res) {
    res.render('22-23')
})
router.get('/21-22', function(req, res) {
    res.render('21-22')
})
router.get('/20-21', function(req, res) {
    res.render('20-21')
})
router.get('/19-20', function(req, res) {
    res.render('19-20')
})

router.get('/21-22/:conference', function(req, res) {
    let conf = String(req.params['conference'])
    let out = {
        'conference' : {
            [conf] : a2122.conferences[conf]
        }
    }
    res.render('displayawards', out)
});
router.get('/22-23/:conference', function(req, res) {
    let conf = String(req.params['conference'])
    let out = {
        'conference' : {
            [conf] : a2223.conferences[conf]
        }
    }
    res.render('displayawards', out)
});
module.exports = router;