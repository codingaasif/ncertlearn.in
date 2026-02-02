const ncertContent = {
  6: {
    mathematics: {
      chapters: [
        {
          id: 1,
          title: "Knowing Our Numbers",
          content: {
            introduction: "This chapter helps us understand large numbers, their comparison, estimation, and use of brackets.",
            sections: [
              {
                title: "Comparing Numbers",
                content: "How to compare large numbers using place values. Understanding ascending and descending order.",
                examples: [
                  "Compare 4,85,63,210 and 4,85,63,201",
                  "Arrange 234567, 234576, 234657 in ascending order"
                ]
              },
              {
                title: "Large Numbers in Practice",
                content: "Using large numbers in real life situations like population, distances, etc.",
                examples: [
                  "Population of Delhi is about 2 crores",
                  "Distance from Earth to Moon is 3,84,400 km"
                ]
              },
              {
                title: "Estimation",
                content: "Rounding off numbers to nearest tens, hundreds, thousands.",
                examples: [
                  "Round off 4,856 to nearest hundred: 4,900",
                  "Estimate 4,567 + 2,345 ≈ 4,600 + 2,300 = 6,900"
                ]
              }
            ],
            exercises: [
              {
                type: "very-short",
                questions: ["Write the numeral: Seven crore fifty-two lakh twenty-one thousand three hundred two"],
                answers: ["7,52,21,302"]
              },
              {
                type: "short",
                questions: ["Arrange in descending order: 847, 9754, 8320, 571"],
                answers: ["9754, 8320, 847, 571"]
              },
              {
                type: "long",
                questions: ["The population of a city was 2,43,56,918 in 2001. In 2011, it was found to be increased by 72,58,976. What was the population of the city in 2011?"],
                answers: ["3,16,15,894"]
              }
            ],
            summary: "We learned about reading and writing large numbers, comparing them, and using estimation in daily life."
          }
        },
        {
          id: 2,
          title: "Whole Numbers",
          content: {
            introduction: "Whole numbers are 0, 1, 2, 3, ... They follow certain properties for operations.",
            sections: [
              {
                title: "Properties of Whole Numbers",
                content: "Closure, commutative, associative, distributive properties and identity for addition and multiplication.",
                examples: [
                  "Closure: 5 + 6 = 11 (whole number)",
                  "Commutative: 3 + 4 = 4 + 3"
                ]
              },
              {
                title: "Patterns in Whole Numbers",
                content: "Observing patterns and relationships between numbers.",
                examples: [
                  "Pattern: 1, 3, 6, 10, 15 (triangular numbers)",
                  "Odd numbers: 1, 3, 5, 7, 9..."
                ]
              }
            ],
            exercises: [
              {
                type: "very-short",
                questions: ["Smallest whole number is _____"],
                answers: ["0"]
              },
              {
                type: "short",
                questions: ["Find 12 × 35 using distributive property"],
                answers: ["12 × 35 = 12 × (30 + 5) = 360 + 60 = 420"]
              }
            ],
            summary: "Whole numbers have special properties that make calculations easier."
          }
        },
        {
          id: 3,
          title: "Playing with Numbers",
          content: {
            introduction: "This chapter explores factors, multiples, prime and composite numbers, divisibility rules.",
            sections: [
              {
                title: "Factors and Multiples",
                content: "Understanding factors, multiples, prime factorization.",
                examples: [
                  "Factors of 12: 1, 2, 3, 4, 6, 12",
                  "Multiples of 5: 5, 10, 15, 20..."
                ]
              },
              {
                title: "Divisibility Rules",
                content: "Rules for divisibility by 2, 3, 4, 5, 6, 8, 9, 10, 11.",
                examples: [
                  "Is 378 divisible by 3? 3+7+8=18, yes",
                  "Is 2456 divisible by 4? Last two digits 56÷4=14, yes"
                ]
              }
            ],
            exercises: [
              {
                type: "very-short",
                questions: ["Is 1 a prime number?"],
                answers: ["No"]
              },
              {
                type: "short",
                questions: ["Find HCF of 18 and 24"],
                answers: ["6"]
              }
            ],
            summary: "Numbers can be played with using factors, multiples and divisibility rules."
          }
        },
        {
          id: 4,
          title: "Basic Geometrical Ideas",
          content: {
            introduction: "Introduction to point, line, line segment, ray, angles, polygons.",
            sections: [
              {
                title: "Points, Lines and Angles",
                content: "Basic definitions and properties of geometric elements.",
                examples: [
                  "Point: A location, no dimensions",
                  "Line: Infinite length, no endpoints"
                ]
              },
              {
                title: "Polygons",
                content: "Closed figures made of line segments.",
                examples: [
                  "Triangle: 3 sides",
                  "Quadrilateral: 4 sides"
                ]
              }
            ],
            exercises: [
              {
                type: "very-short",
                questions: ["How many endpoints does a line segment have?"],
                answers: ["Two"]
              },
              {
                type: "short",
                questions: ["Name the polygon with 5 sides"],
                answers: ["Pentagon"]
              }
            ],
            summary: "Basic concepts of geometry form the foundation for advanced geometry."
          }
        },
        {
          id: 5,
          title: "Understanding Elementary Shapes",
          content: {
            introduction: "Classifying and understanding different types of shapes and their properties.",
            sections: [
              {
                title: "Types of Triangles",
                content: "Scalene, isosceles, equilateral, acute, obtuse, right triangles.",
                examples: [
                  "Equilateral: All sides equal",
                  "Right triangle: One angle = 90°"
                ]
              },
              {
                title: "Quadrilaterals",
                content: "Square, rectangle, parallelogram, rhombus, trapezium.",
                examples: [
                  "Square: All sides equal, all angles 90°",
                  "Rectangle: Opposite sides equal, all angles 90°"
                ]
              }
            ],
            exercises: [
              {
                type: "very-short",
                questions: ["Number of diagonals in a quadrilateral"],
                answers: ["Two"]
              },
              {
                type: "short",
                questions: ["Classify triangle with sides 5cm, 5cm, 7cm"],
                answers: ["Isosceles triangle"]
              }
            ],
            summary: "Different shapes have different properties that help in identification and classification."
          }
        }
      ]
    },
    science: {
      chapters: [
        {
          id: 1,
          title: "Food: Where Does It Come From?",
          content: {
            introduction: "This chapter explores different food sources - plants and animals.",
            sections: [
              {
                title: "Food Variety",
                content: "Different types of food we eat and their sources.",
                examples: [
                  "Rice, wheat - from plants",
                  "Milk, eggs - from animals"
                ]
              },
              {
                title: "Plant Parts as Food",
                content: "Different parts of plants we eat: roots, stems, leaves, flowers, fruits, seeds.",
                examples: [
                  "Carrot - root",
                  "Spinach - leaves",
                  "Apple - fruit"
                ]
              }
            ],
            activities: [
              "Collect different types of food items and classify them",
              "Make a list of plant parts we eat"
            ],
            summary: "Food comes from both plants and animals, with plants providing various parts as food."
          }
        },
        {
          id: 2,
          title: "Components of Food",
          content: {
            introduction: "Understanding different nutrients in food and their importance.",
            sections: [
              {
                title: "Major Nutrients",
                content: "Carbohydrates, proteins, fats, vitamins, minerals, water, roughage.",
                examples: [
                  "Carbohydrates: Rice, bread",
                  "Proteins: Milk, pulses",
                  "Vitamins: Fruits, vegetables"
                ]
              },
              {
                title: "Balanced Diet",
                content: "Importance of eating all nutrients in right proportion.",
                examples: [
                  "Daily diet should include cereals, pulses, vegetables, fruits, milk"
                ]
              }
            ],
            activities: [
              "Test for starch using iodine solution",
              "Test for proteins using copper sulphate and caustic soda"
            ],
            summary: "A balanced diet with all nutrients is essential for good health."
          }
        },
        {
          id: 3,
          title: "Fibre to Fabric",
          content: {
            introduction: "How fibres are obtained and processed to make fabrics.",
            sections: [
              {
                title: "Types of Fibres",
                content: "Natural fibres (cotton, wool, silk) and synthetic fibres (nylon, polyester).",
                examples: [
                  "Cotton: From cotton plants",
                  "Wool: From sheep",
                  "Silk: From silkworms"
                ]
              },
              {
                title: "Making of Fabrics",
                content: "Processes: spinning, weaving, knitting.",
                examples: [
                  "Spinning: Making yarn from fibres",
                  "Weaving: Making fabric from yarn"
                ]
              }
            ],
            activities: [
              "Collect different types of fabrics",
              "Burn test to identify fibres"
            ],
            summary: "Fabrics are made from fibres through various processes like spinning and weaving."
          }
        },
        {
          id: 4,
          title: "Sorting Materials into Groups",
          content: {
            introduction: "Classifying materials based on their properties.",
            sections: [
              {
                title: "Properties of Materials",
                content: "Appearance, hardness, solubility, transparency, conductivity.",
                examples: [
                  "Metals: Shiny, hard, good conductors",
                  "Plastics: Non-conductors, flexible"
                ]
              },
              {
                title: "Uses Based on Properties",
                content: "How properties determine material use.",
                examples: [
                  "Metals for cooking utensils",
                  "Plastics for containers"
                ]
              }
            ],
            activities: [
              "Classify materials as transparent, translucent, opaque",
              "Test solubility of different substances"
            ],
            summary: "Materials are sorted based on properties which determine their uses."
          }
        }
      ]
    },
    "social-science": {
      chapters: [
        {
          id: 1,
          title: "What, Where, How and When?",
          content: {
            introduction: "Understanding history and how we study the past.",
            sections: [
              {
                title: "What is History?",
                content: "Study of past events, people, and societies.",
                examples: [
                  "Studying about kings and kingdoms",
                  "Understanding ancient civilizations"
                ]
              },
              {
                title: "Sources of History",
                content: "Archaeological sources, literary sources, inscriptions.",
                examples: [
                  "Archaeological: Tools, pottery, buildings",
                  "Literary: Books, manuscripts"
                ]
              }
            ],
            exercises: [
              {
                type: "short",
                questions: ["Name two archaeological sources"],
                answers: ["Pottery, coins"]
              },
              {
                type: "long",
                questions: ["Why do we study history?"],
                answers: ["To understand our past, learn from mistakes, know our culture and heritage"]
              }
            ],
            summary: "History helps us understand our past through various sources."
          }
        },
        {
          id: 2,
          title: "On the Trail of the Earliest People",
          content: {
            introduction: "Study of early humans and their lifestyle.",
            sections: [
              {
                title: "Early Humans",
                content: "Hunter-gatherers, their tools, food, shelter.",
                examples: [
                  "Stone tools for hunting",
                  "Cave paintings as evidence"
                ]
              },
              {
                title: "Sites of Early Humans",
                content: "Important archaeological sites in India.",
                examples: [
                  "Bhimbetka rock shelters",
                  "Hunsgi valley"
                ]
              }
            ],
            exercises: [
              {
                type: "short",
                questions: ["Why were stone tools used?"],
                answers: ["For hunting, cutting, digging"]
              }
            ],
            summary: "Early humans were hunter-gatherers who used stone tools."
          }
        },
        {
          id: 3,
          title: "From Gathering to Growing Food",
          content: {
            introduction: "Transition from hunting-gathering to agriculture.",
            sections: [
              {
                title: "Beginning of Agriculture",
                content: "Domestication of plants and animals.",
                examples: [
                  "Wheat and barley cultivation",
                  "Domestication of cattle"
                ]
              },
              {
                title: "Early Farming Sites",
                content: "Evidence of early agriculture in Indian subcontinent.",
                examples: [
                  "Mehrgarh (Pakistan)",
                  "Burzahom (Kashmir)"
                ]
              }
            ],
            exercises: [
              {
                type: "short",
                questions: ["Name two earliest crops"],
                answers: ["Wheat and barley"]
              }
            ],
            summary: "Agriculture marked a major shift in human civilization."
          }
        }
      ]
    },
    english: {
      chapters: [
        {
          id: 1,
          title: "Who Did Patrick's Homework?",
          content: {
            introduction: "A story about a boy who doesn't like doing homework.",
            summary: "Patrick finds an elf and makes him do his homework, but ends up learning himself.",
            vocabulary: [
              "brittle: easily broken",
              "ignoramus: an ignorant person",
              "wise: having knowledge"
            ],
            grammar: {
              focus: "Nouns and pronouns",
              examples: ["Patrick: proper noun", "he: pronoun"]
            },
            comprehension: [
              "Why didn't Patrick like doing homework?",
              "How did the elf help Patrick?"
            ],
            exercises: [
              {
                type: "vocabulary",
                questions: ["Find synonyms for 'tiny'"],
                answers: ["small, little, miniature"]
              },
              {
                type: "grammar",
                questions: ["Identify nouns in the sentence"],
                answers: ["Patrick, homework, school"]
              }
            ]
          }
        },
        {
          id: 2,
          title: "How the Dog Found Himself",
          content: {
            introduction: "A folk tale about how dogs became human companions.",
            summary: "A dog searches for a master stronger than anyone else.",
            vocabulary: [
              "master: owner or leader",
              "companion: friend or partner",
              "loyal: faithful"
            ],
            grammar: {
              focus: "Past tense",
              examples: ["found, searched, became"]
            },
            comprehension: [
              "Why did the dog want a master?",
              "Whom did the dog choose finally?"
            ],
            exercises: [
              {
                type: "vocabulary",
                questions: ["Antonym of 'strong'"],
                answers: ["weak"]
              }
            ]
          }
        }
      ]
    },
    hindi: {
      chapters: [
        {
          id: 1,
          title: "वह चिड़िया जो",
          content: {
            introduction: "कविता जो एक छोटी चिड़िया के बारे में है।",
            summary: "यह कविता एक छोटी चिड़िया के साहस और उत्साह को दर्शाती है।",
            शब्दार्थ: [
              "चिड़िया: पक्षी",
              "उड़ान: उड़ने की क्रिया",
              "साहस: बहादुरी"
            ],
            व्याकरण: {
              focus: "संज्ञा और सर्वनाम",
              examples: ["चिड़िया: जातिवाचक संज्ञा", "वह: सर्वनाम"]
            },
            प्रश्न: [
              "चिड़िया कहाँ उड़ रही थी?",
              "कविता का मुख्य संदेश क्या है?"
            ]
          }
        },
        {
          id: 2,
          title: "बचपन",
          content: {
            introduction: "लेखक के बचपन के संस्मरण।",
            summary: "लेखक अपने बचपन की यादों को साझा करते हैं।",
            शब्दार्थ: [
              "संस्मरण: यादें",
              "बाल्यकाल: बचपन",
              "सहपाठी: साथ पढ़ने वाला"
            ],
            व्याकरण: {
              focus: "क्रिया",
              examples: ["खेलता था, पढ़ता था, सोता था"]
            },
            प्रश्न: [
              "लेखक को अपना बचपन क्यों याद आता है?",
              "बचपन किसे कहते हैं?"
            ]
          }
        }
      ]
    },
    sanskrit: {
      chapters: [
        {
          id: 1,
          title: "शब्द परिचयः",
          content: {
            introduction: "संस्कृत भाषा के मूल शब्दों का परिचय।",
            summary: "संस्कृत के प्रारंभिक शब्दों और उनके प्रयोग का अध्ययन।",
            शब्दावली: [
              "पठति: पढ़ता है",
              "लिखति: लिखता है",
              "गच्छति: जाता है"
            ],
            व्याकरण: {
              focus: "धातु और प्रत्यय",
              examples: ["पठ् + ति = पठति"]
            },
            अभ्यास: [
              "धातु से शब्द बनाइए: गम्",
              "वाक्य बनाइए: बालकः पठति"
            ]
          }
        },
        {
          id: 2,
          title: "स्वर संधि",
          content: {
            introduction: "स्वरों के मेल से होने वाले परिवर्तन।",
            summary: "दो स्वरों के मेल से नए स्वर का निर्माण।",
            नियम: [
              "अ + अ = आ",
              "इ + इ = ई",
              "उ + उ = ऊ"
            ],
            उदाहरण: [
              "राम + अयन = रामायण",
              "देव + आलय = देवालय"
            ],
            अभ्यास: [
              "संधि विच्छेद करें: विद्यालय",
              "संधि करें: महा + ईश"
            ]
          }
        }
      ]
    }
  },

  7: {
    mathematics: {
      chapters: [
        {
          id: 1,
          title: "Integers",
          content: {
            introduction: "Integers include positive numbers, negative numbers and zero.",
            sections: [
              {
                title: "Addition and Subtraction",
                content: "Rules for adding and subtracting integers.",
                examples: [
                  "5 + (-3) = 2",
                  "-4 - (-2) = -2"
                ]
              },
              {
                title: "Multiplication and Division",
                content: "Rules for multiplication and division of integers.",
                examples: [
                  "(-3) × 4 = -12",
                  "(-15) ÷ 3 = -5"
                ]
              }
            ],
            exercises: [
              {
                type: "short",
                questions: ["Find: (-32) + 47"],
                answers: ["15"]
              }
            ],
            summary: "Integers follow specific rules for operations."
          }
        },
        {
          id: 2,
          title: "Fractions and Decimals",
          content: {
            introduction: "Working with fractions and decimal numbers.",
            sections: [
              {
                title: "Fraction Operations",
                content: "Addition, subtraction, multiplication and division of fractions.",
                examples: [
                  "2/3 + 1/4 = 11/12",
                  "3/5 × 2/7 = 6/35"
                ]
              },
              {
                title: "Decimal Operations",
                content: "Operations with decimal numbers.",
                examples: [
                  "2.5 + 3.75 = 6.25",
                  "4.2 × 3 = 12.6"
                ]
              }
            ],
            exercises: [
              {
                type: "short",
                questions: ["Convert 3/8 to decimal"],
                answers: ["0.375"]
              }
            ],
            summary: "Fractions and decimals are different representations of numbers."
          }
        },
        {
          id: 3,
          title: "Data Handling",
          content: {
            introduction: "Collection, organization and interpretation of data.",
            sections: [
              {
                title: "Mean, Median, Mode",
                content: "Measures of central tendency.",
                examples: [
                  "Mean: Average of numbers",
                  "Median: Middle value when arranged"
                ]
              },
              {
                title: "Graphical Representation",
                content: "Bar graphs, pie charts, pictographs.",
                examples: [
                  "Bar graph for comparing quantities",
                  "Pie chart for showing proportions"
                ]
              }
            ],
            exercises: [
              {
                type: "short",
                questions: ["Find mean of 5, 7, 9, 11"],
                answers: ["8"]
              }
            ],
            summary: "Data can be organized and interpreted using various methods."
          }
        }
      ]
    },
    science: {
      chapters: [
        {
          id: 1,
          title: "Nutrition in Plants",
          content: {
            introduction: "How plants make their own food through photosynthesis.",
            sections: [
              {
                title: "Photosynthesis",
                content: "Process by which plants make food using sunlight.",
                formula: "Carbon dioxide + Water → Glucose + Oxygen (in presence of sunlight and chlorophyll)",
                examples: ["Leaves are the main site of photosynthesis"]
              },
              {
                title: "Modes of Nutrition",
                content: "Autotrophic and heterotrophic nutrition.",
                examples: [
                  "Autotrophic: Green plants",
                  "Heterotrophic: Animals, fungi"
                ]
              }
            ],
            activities: [
              "Test for starch in leaves",
              "Show that sunlight is necessary for photosynthesis"
            ],
            summary: "Plants are autotrophs that make food through photosynthesis."
          }
        },
        {
          id: 2,
          title: "Nutrition in Animals",
          content: {
            introduction: "How animals obtain and utilize food.",
            sections: [
              {
                title: "Human Digestive System",
                content: "Process of digestion in humans.",
                examples: [
                  "Mouth: Mechanical and chemical digestion",
                  "Stomach: Protein digestion"
                ]
              },
              {
                title: "Types of Nutrition",
                content: "Herbivores, carnivores, omnivores.",
                examples: [
                  "Herbivore: Cow, deer",
                  "Carnivore: Lion, tiger",
                  "Omnivore: Human, bear"
                ]
              }
            ],
            activities: [
              "Model of digestive system",
              "Test for presence of starch in food"
            ],
            summary: "Animals have different modes of nutrition based on their food habits."
          }
        }
      ]
    },
    "social-science": {
      chapters: [
        {
          id: 1,
          title: "Tracing Changes Through a Thousand Years",
          content: {
            introduction: "Studying historical changes over a millennium.",
            sections: [
              {
                title: "Historical Periods",
                content: "Ancient, medieval and modern periods.",
                examples: [
                  "Ancient: Up to 8th century",
                  "Medieval: 8th to 18th century"
                ]
              },
              {
                title: "Sources for Medieval Period",
                content: "Coins, inscriptions, manuscripts, monuments.",
                examples: [
                  "Mughal monuments",
                  "Rajput inscriptions"
                ]
              }
            ],
            exercises: [
              {
                type: "short",
                questions: ["Name two medieval kingdoms"],
                answers: ["Delhi Sultanate, Vijayanagara"]
              }
            ],
            summary: "History helps trace changes over long periods."
          }
        },
        {
          id: 2,
          title: "New Kings and Kingdoms",
          content: {
            introduction: "Emergence of new dynasties in medieval India.",
            sections: [
              {
                title: "Early Medieval Dynasties",
                content: "Rajputs, Palas, Pratiharas, Cholas.",
                examples: [
                  "Cholas in South India",
                  "Rajputs in North India"
                ]
              },
              {
                title: "Administration",
                content: "Administrative systems of medieval kingdoms.",
                examples: [
                  "Land revenue systems",
                  "Local self-government"
                ]
              }
            ],
            exercises: [
              {
                type: "short",
                questions: ["Who founded Chola dynasty?"],
                answers: ["Vijayalaya"]
              }
            ],
            summary: "Many new kingdoms emerged in early medieval period."
          }
        }
      ]
    },
    english: {
      chapters: [
        {
          id: 1,
          title: "Three Questions",
          content: {
            introduction: "A story by Leo Tolstoy about a king seeking answers to three important questions.",
            summary: "A king learns that the most important time is now, the most important person is the one you are with, and the most important thing is to do good.",
            vocabulary: [
              "hermit: a religious person living alone",
              "council: a group of advisors",
              "seized: took hold of suddenly"
            ],
            grammar: {
              focus: "Direct and indirect speech",
              examples: ["He said, 'I am going' → He said that he was going"]
            },
            comprehension: [
              "What were the three questions?",
              "What answers did the king get?"
            ]
          }
        },
        {
          id: 2,
          title: "A Gift of Chappals",
          content: {
            introduction: "A heartwarming story about children's innocence and kindness.",
            summary: "Children give away a pair of chappals to a needy musician.",
            vocabulary: [
              "chappals: sandals",
              "scruffy: shabby, untidy",
              "generous: giving freely"
            ],
            grammar: {
              focus: "Tenses",
              examples: ["Present continuous: is walking", "Past simple: walked"]
            },
            comprehension: [
              "Why did the children give away the chappals?",
              "How did the elders react?"
            ]
          }
        }
      ]
    },
    hindi: {
      chapters: [
        {
          id: 1,
          title: "हम पंछी उन्मुक्त गगन के",
          content: {
            introduction: "कविता जो पक्षियों की आजादी और मनुष्य की सीमाओं के बारे में है।",
            summary: "कवि पक्षियों की स्वतंत्रता से प्रेरित होकर मानव जीवन की सीमाओं पर विचार करते हैं।",
            शब्दार्थ: [
              "उन्मुक्त: स्वतंत्र",
              "गगन: आकाश",
              "सीमा: सीमा, हद"
            ],
            व्याकरण: {
              focus: "विशेषण",
              examples: ["उन्मुक्त गगन", "नीला आकाश"]
            },
            प्रश्न: [
              "कवि पक्षियों से क्या सीखना चाहते हैं?",
              "मनुष्य की सीमाएँ क्या हैं?"
            ]
          }
        }
      ]
    },
    sanskrit: {
      chapters: [
        {
          id: 1,
          title: "सुभाषितानि",
          content: {
            introduction: "संस्कृत के सुभाषित (सुंदर कथन)।",
            summary: "विभिन्न संस्कृत सुभाषितों का संग्रह और उनका अर्थ।",
            सुभाषित: [
              "अहिंसा परमो धर्मः",
              "सत्यमेव जयते"
            ],
            अर्थ: [
              "अहिंसा सबसे बड़ा धर्म है",
              "सत्य की ही विजय होती है"
            ],
            व्याख्या: [
              "इन सुभाषितों में जीवन के महत्वपूर्ण सिद्धांत हैं"
            ]
          }
        }
      ]
    }
  },

  8: {
    mathematics: {
      chapters: [
        {
          id: 1,
          title: "Rational Numbers",
          content: {
            introduction: "Numbers that can be expressed as p/q where q ≠ 0.",
            sections: [
              {
                title: "Properties",
                content: "Closure, commutative, associative, distributive properties.",
                examples: [
                  "2/3 + 4/5 = 22/15",
                  "-3/7 × 5/8 = -15/56"
                ]
              },
              {
                title: "Representation",
                content: "On number line and between two rational numbers.",
                examples: [
                  "Find 3 rational numbers between 1/2 and 3/4",
                  "Represent -2/3 on number line"
                ]
              }
            ],
            exercises: [
              {
                type: "short",
                questions: ["Find additive inverse of -5/9"],
                answers: ["5/9"]
              }
            ],
            summary: "Rational numbers have properties similar to integers."
          }
        },
        {
          id: 2,
          title: "Linear Equations in One Variable",
          content: {
            introduction: "Equations of the form ax + b = 0.",
            sections: [
              {
                title: "Solving Equations",
                content: "Methods to solve linear equations.",
                examples: [
                  "2x + 3 = 7 → x = 2",
                  "3(x-4) = 21 → x = 11"
                ]
              },
              {
                title: "Word Problems",
                content: "Forming and solving equations from word problems.",
                examples: [
                  "Age problems",
                  "Number problems"
                ]
              }
            ],
            exercises: [
              {
                type: "short",
                questions: ["Solve: 5x - 3 = 2x + 9"],
                answers: ["x = 4"]
              }
            ],
            summary: "Linear equations help solve real-life problems."
          }
        }
      ]
    },
    science: {
      chapters: [
        {
          id: 1,
          title: "Crop Production and Management",
          content: {
            introduction: "Scientific methods of growing crops.",
            sections: [
              {
                title: "Agricultural Practices",
                content: "Preparation of soil, sowing, irrigation, harvesting.",
                examples: [
                  "Ploughing: Loosening soil",
                  "Irrigation: Watering crops"
                ]
              },
              {
                title: "Crop Protection",
                content: "Protection from weeds, pests, diseases.",
                examples: [
                  "Weeding: Removing unwanted plants",
                  "Pesticides: Chemicals to kill pests"
                ]
              }
            ],
            activities: [
              "Visit to a farm",
              "Growing seeds in different conditions"
            ],
            summary: "Scientific methods increase crop yield."
          }
        },
        {
          id: 2,
          title: "Microorganisms: Friend and Foe",
          content: {
            introduction: "Microscopic organisms and their roles.",
            sections: [
              {
                title: "Useful Microorganisms",
                content: "In food, medicine, environment.",
                examples: [
                  "Yeast in bread making",
                  "Antibiotics from fungi"
                ]
              },
              {
                title: "Harmful Microorganisms",
                content: "Disease causing microorganisms.",
                examples: [
                  "Bacteria causing diseases",
                  "Viruses causing infections"
                ]
              }
            ],
            activities: [
              "Observing yeast fermentation",
              "Microscope observation"
            ],
            summary: "Microorganisms can be both useful and harmful."
          }
        }
      ]
    },
    "social-science": {
      chapters: [
        {
          id: 1,
          title: "How, When and Where",
          content: {
            introduction: "Understanding historical methodology.",
            sections: [
              {
                title: "Historical Dates",
                content: "Importance of dates in history.",
                examples: [
                  "1857: First war of independence",
                  "1947: Indian independence"
                ]
              },
              {
                title: "Sources",
                content: "Official records, surveys, reports.",
                examples: [
                  "British administrative records",
                  "Census reports"
                ]
              }
            ],
            exercises: [
              {
                type: "short",
                questions: ["Why are dates important in history?"],
                answers: ["To understand chronology of events"]
              }
            ],
            summary: "History studies how, when and where events happened."
          }
        },
        {
          id: 2,
          title: "From Trade to Territory",
          content: {
            introduction: "How East India Company established British rule.",
            sections: [
              {
                title: "East India Company",
                content: "Trading company that became political power.",
                examples: [
                  "Battle of Plassey: 1757",
                  "Battle of Buxar: 1764"
                ]
              },
              {
                title: "Expansion",
                content: "Methods of expansion: wars, alliances, doctrines.",
                examples: [
                  "Subsidiary Alliance",
                  "Doctrine of Lapse"
                ]
              }
            ],
            exercises: [
              {
                type: "short",
                questions: ["Who won Battle of Plassey?"],
                answers: ["British East India Company"]
              }
            ],
            summary: "British rule began with trade and expanded to territory."
          }
        }
      ]
    },
    english: {
      chapters: [
        {
          id: 1,
          title: "The Best Christmas Present",
          content: {
            introduction: "A story about the true meaning of Christmas gifts.",
            summary: "A man repairs an old desk and discovers a letter leading to a heartwarming reunion.",
            vocabulary: [
              "antique: old and valuable",
              "restore: repair to original condition",
              "sentimental: emotional value"
            ],
            grammar: {
              focus: "Adjectives",
              examples: ["old desk", "best present", "Christmas celebration"]
            },
            comprehension: [
              "What was the best Christmas present?",
              "Why was the letter important?"
            ]
          }
        }
      ]
    },
    hindi: {
      chapters: [
        {
          id: 1,
          title: "ध्वनि",
          content: {
            introduction: "कविता जो प्रकृति की विभिन्न ध्वनियों के बारे में है।",
            summary: "कवि प्रकृति की विभिन्न ध्वनियों का वर्णन करते हैं।",
            शब्दार्थ: [
              "ध्वनि: आवाज",
              "प्रकृति: नेचर",
              "मधुर: मीठा"
            ],
            व्याकरण: {
              focus: "क्रिया विशेषण",
              examples: ["धीरे-धीरे", "तेजी से", "मधुर स्वर में"]
            },
            प्रश्न: [
              "कविता में किन ध्वनियों का वर्णन है?",
              "प्रकृति की ध्वनियाँ कैसी हैं?"
            ]
          }
        }
      ]
    },
    sanskrit: {
      chapters: [
        {
          id: 1,
          title: "सुभाषितानि",
          content: {
            introduction: "संस्कृत के नैतिक और शिक्षाप्रद कथन।",
            summary: "विभिन्न संस्कृत सुभाषितों का संकलन।",
            सुभाषित: [
              "विद्या ददाति विनयम्",
              "अति सर्वत्र वर्जयेत्"
            ],
            अर्थ: [
              "विद्या विनय देती है",
              "अति (अधिकता) सब जगह त्यागनी चाहिए"
            ],
            व्याख्या: [
              "ये सुभाषित जीवन के महत्वपूर्ण मूल्य सिखाते हैं"
            ]
          }
        }
      ]
    }
  },

  9: {
    mathematics: {
      chapters: [
        {
          id: 1,
          title: "Number Systems",
          content: {
            introduction: "Real numbers including rational and irrational numbers.",
            sections: [
              {
                title: "Irrational Numbers",
                content: "Numbers that cannot be expressed as p/q.",
                examples: [
                  "√2, √3, π",
                  "Proof that √2 is irrational"
                ]
              },
              {
                title: "Real Numbers",
                content: "Representation on number line, operations.",
                examples: [
                  "Represent √5 on number line",
                  "Laws of exponents for real numbers"
                ]
              }
            ],
            exercises: [
              {
                type: "short",
                questions: ["Classify as rational or irrational: 1.010010001..."],
                answers: ["Irrational"]
              }
            ],
            summary: "Number system includes rational and irrational numbers."
          }
        },
        {
          id: 2,
          title: "Polynomials",
          content: {
            introduction: "Algebraic expressions with one or more terms.",
            sections: [
              {
                title: "Polynomial Basics",
                content: "Degree, coefficients, types of polynomials.",
                examples: [
                  "2x² + 3x - 5: Quadratic polynomial",
                  "4x³ - 2x + 1: Cubic polynomial"
                ]
              },
              {
                title: "Remainder Theorem",
                content: "If p(x) is divided by (x-a), remainder is p(a).",
                examples: [
                  "Find remainder when x³ - 3x² + 4 is divided by (x-1)",
                  "p(1) = 1 - 3 + 4 = 2"
                ]
              }
            ],
            exercises: [
              {
                type: "short",
                questions: ["Find zero of polynomial p(x) = 2x - 6"],
                answers: ["x = 3"]
              }
            ],
            summary: "Polynomials are fundamental in algebra."
          }
        }
      ]
    },
    science: {
      chapters: [
        {
          id: 1,
          title: "Matter in Our Surroundings",
          content: {
            introduction: "Physical nature of matter and its characteristics.",
            sections: [
              {
                title: "States of Matter",
                content: "Solid, liquid, gas, plasma.",
                examples: [
                  "Solid: Definite shape and volume",
                  "Liquid: Definite volume, no definite shape"
                ]
              },
              {
                title: "Change of State",
                content: "Melting, freezing, evaporation, condensation.",
                examples: [
                  "Melting: Solid to liquid",
                  "Evaporation: Liquid to gas"
                ]
              }
            ],
            activities: [
              "Study of diffusion in liquids",
              "Effect of temperature on evaporation"
            ],
            summary: "Matter exists in different states with different properties."
          }
        },
        {
          id: 2,
          title: "Is Matter Around Us Pure?",
          content: {
            introduction: "Classification of matter into pure substances and mixtures.",
            sections: [
              {
                title: "Types of Mixtures",
                content: "Homogeneous and heterogeneous mixtures.",
                examples: [
                  "Homogeneous: Salt solution, air",
                  "Heterogeneous: Soil, concrete"
                ]
              },
              {
                title: "Separation Techniques",
                content: "Methods to separate mixtures.",
                examples: [
                  "Filtration, distillation",
                  "Chromatography, centrifugation"
                ]
              }
            ],
            activities: [
              "Separate mixture using filtration",
              "Separate colors using chromatography"
            ],
            summary: "Matter can be classified based on purity."
          }
        }
      ]
    },
    "social-science": {
      chapters: [
        {
          id: 1,
          title: "The French Revolution",
          content: {
            introduction: "Revolution that changed France and influenced the world.",
            sections: [
              {
                title: "Causes",
                content: "Social, economic, political causes.",
                examples: [
                  "Social inequality: Three estates",
                  "Financial crisis: Empty treasury"
                ]
              },
              {
                title: "Events",
                content: "Storming of Bastille, Reign of Terror.",
                examples: [
                  "1789: Storming of Bastille",
                  "1793-94: Reign of Terror"
                ]
              }
            ],
            exercises: [
              {
                type: "short",
                questions: ["When did French Revolution begin?"],
                answers: ["1789"]
              }
            ],
            summary: "French Revolution established ideas of liberty, equality, fraternity."
          }
        }
      ]
    },
    english: {
      chapters: [
        {
          id: 1,
          title: "The Fun They Had",
          content: {
            introduction: "A science fiction story about future education.",
            summary: "Children in 2157 discover a book about schools of the past.",
            vocabulary: [
              "telebook: electronic book",
              "mechanical teacher: robot teacher",
              "attic: room under roof"
            ],
            grammar: {
              focus: "Future tense",
              examples: ["will have", "shall go", "will be reading"]
            },
            comprehension: [
              "How was education different in 2157?",
              "What did Margie find unusual about old schools?"
            ]
          }
        }
      ]
    },
    hindi: {
      chapters: [
        {
          id: 1,
          title: "दो बैलों की कथा",
          content: {
            introduction: "प्रेमचंद की प्रसिद्ध कहानी।",
            summary: "दो बैलों की मित्रता और उनके संघर्ष की कहानी।",
            शब्दार्थ: [
              "बैल: बैल",
              "मित्रता: दोस्ती",
              "संघर्ष: संघर्ष"
            ],
            व्याकरण: {
              focus: "मुहावरे",
              examples: ["दिन-रात एक करना", "काम आना"]
            },
            प्रश्न: [
              "बैलों की मित्रता कैसी थी?",
              "कहानी का संदेश क्या है?"
            ]
          }
        }
      ]
    },
    sanskrit: {
      chapters: [
        {
          id: 1,
          title: "स्वर्णकाकः",
          content: {
            introduction: "एक नैतिक कहानी स्वर्ण (सोने) के कौवे के बारे में।",
            summary: "एक कौवे की लालच और उसके परिणामों की कहानी।",
            शब्दावली: [
              "स्वर्ण: सोना",
              "काक: कौवा",
              "लोभ: लालच"
            ],
            नैतिक: "लालच बुरी बला है",
            प्रश्न: [
              "कौवे ने क्या गलती की?",
              "कहानी से क्या सीख मिलती है?"
            ]
          }
        }
      ]
    }
  },

  10: {
    mathematics: {
      chapters: [
        {
          id: 1,
          title: "Real Numbers",
          content: {
            introduction: "Fundamental theorem of arithmetic and irrational numbers.",
            sections: [
              {
                title: "Euclid's Division Lemma",
                content: "For positive integers a and b, there exist unique integers q and r such that a = bq + r, 0 ≤ r < b.",
                examples: [
                  "For a=25, b=4: 25=4×6+1",
                  "q=6, r=1"
                ]
              },
              {
                title: "Fundamental Theorem of Arithmetic",
                content: "Every composite number can be expressed as product of primes uniquely.",
                examples: [
                  "120 = 2³ × 3 × 5",
                  "Prime factorization is unique"
                ]
              }
            ],
            exercises: [
              {
                type: "short",
                questions: ["Use Euclid's algorithm to find HCF of 135 and 225"],
                answers: ["45"]
              }
            ],
            summary: "Real numbers form the foundation of mathematics."
          }
        },
        {
          id: 2,
          title: "Polynomials",
          content: {
            introduction: "Polynomials of degree 2 and their properties.",
            sections: [
              {
                title: "Quadratic Polynomials",
                content: "Polynomials of degree 2: ax² + bx + c.",
                examples: [
                  "x² - 3x + 2",
                  "2x² + 5x - 3"
                ]
              },
              {
                title: "Relationship between zeros and coefficients",
                content: "For ax² + bx + c, sum of zeros = -b/a, product = c/a.",
                examples: [
                  "For x² - 5x + 6, zeros are 2 and 3",
                  "Sum: 2+3=5, product: 2×3=6"
                ]
              }
            ],
            exercises: [
              {
                type: "short",
                questions: ["Find zeros of x² - 2x - 8"],
                answers: ["4, -2"]
              }
            ],
            summary: "Polynomials have important relationships between zeros and coefficients."
          }
        }
      ]
    },
    science: {
      chapters: [
        {
          id: 1,
          title: "Chemical Reactions and Equations",
          content: {
            introduction: "Types of chemical reactions and balancing equations.",
            sections: [
              {
                title: "Types of Reactions",
                content: "Combination, decomposition, displacement, double displacement.",
                examples: [
                  "Combination: A + B → AB",
                  "Decomposition: AB → A + B"
                ]
              },
              {
                title: "Balancing Equations",
                content: "Law of conservation of mass.",
                examples: [
                  "2H₂ + O₂ → 2H₂O",
                  "Count atoms on both sides"
                ]
              }
            ],
            activities: [
              "Observe different types of reactions",
              "Practice balancing equations"
            ],
            summary: "Chemical reactions involve rearrangement of atoms."
          }
        },
        {
          id: 2,
          title: "Acids, Bases and Salts",
          content: {
            introduction: "Properties and reactions of acids, bases and salts.",
            sections: [
              {
                title: "Indicators",
                content: "Substances that show different colors in acid and base.",
                examples: [
                  "Litmus: Red in acid, blue in base",
                  "Phenolphthalein: Colorless in acid, pink in base"
                ]
              },
              {
                title: "pH Scale",
                content: "Measure of acidity or basicity (0-14).",
                examples: [
                  "pH < 7: Acidic",
                  "pH = 7: Neutral",
                  "pH > 7: Basic"
                ]
              }
            ],
            activities: [
              "Test household substances with indicators",
              "Prepare natural indicators"
            ],
            summary: "Acids, bases and salts have characteristic properties."
          }
        }
      ]
    },
    "social-science": {
      chapters: [
        {
          id: 1,
          title: "Rise of Nationalism in Europe",
          content: {
            introduction: "Development of nationalism in 19th century Europe.",
            sections: [
              {
                title: "French Revolution",
                content: "Spread of ideas of nation and citizenship.",
                examples: [
                  "Liberty, Equality, Fraternity",
                  "French revolutionary wars"
                ]
              },
              {
                title: "Unification of Germany and Italy",
                content: "Role of nationalism in unification.",
                examples: [
                  "Germany: Bismarck",
                  "Italy: Mazzini, Garibaldi"
                ]
              }
            ],
            exercises: [
              {
                type: "short",
                questions: ["Who was called 'Iron Chancellor'?"],
                answers: ["Otto von Bismarck"]
              }
            ],
            summary: "Nationalism played key role in shaping modern Europe."
          }
        }
      ]
    },
    english: {
      chapters: [
        {
          id: 1,
          title: "A Letter to God",
          content: {
            introduction: "A story about faith and human nature.",
            summary: "A farmer writes a letter to God asking for help, and receives an unexpected response.",
            vocabulary: [
              "conscience: moral sense",
              "faith: strong belief",
              "crook: dishonest person"
            ],
            grammar: {
              focus: "Parts of speech",
              examples: ["noun: letter, God", "verb: wrote, received", "adjective: good, bad"]
            },
            comprehension: [
              "Why did Lencho write to God?",
              "What was the postmaster's reaction?"
            ]
          }
        }
      ]
    },
    hindi: {
      chapters: [
        {
          id: 1,
          title: "बड़े भाई साहब",
          content: {
            introduction: "प्रेमचंद की कहानी भाई-भाई के संबंधों पर।",
            summary: "एक छोटे भाई और उसके बड़े भाई के बीच के संबंधों की कहानी।",
            शब्दार्थ: [
              "आदर्श: आदर्श",
              "अनुशासन: अनुशासन",
              "स्नेह: प्यार"
            ],
            व्याकरण: {
              focus: "संबंधबोधक",
              examples: ["के लिए", "के बारे में", "के सामने"]
            },
            प्रश्न: [
              "छोटे भाई का बड़े भाई के प्रति कैसा व्यवहार था?",
              "कहानी का मुख्य विषय क्या है?"
            ]
          }
        }
      ]
    },
    sanskrit: {
      chapters: [
        {
          id: 1,
          title: "सुभाषितानि",
          content: {
            introduction: "संस्कृत के शिक्षाप्रद और नैतिक वचन।",
            summary: "विभिन्न संस्कृत सुभाषितों का संग्रह।",
            सुभाषित: [
              "सत्यं ब्रूयात् प्रियं ब्रूयात्",
              "विद्या विमुक्तये"
            ],
            अर्थ: [
              "सत्य बोलो, प्रिय बोलो",
              "विद्या मुक्ति देती है"
            ]
          }
        },
        {
          id: 2,
          title: "सुभाषितानि",
          content: {
            introduction: "संस्कृत साहित्य के मूल्यवान कथन।",
            summary: "नैतिक और आध्यात्मिक शिक्षा से युक्त सुभाषित।",
            सुभाषित: [
              "अहिंसा परमो धर्मः",
              "धर्मो रक्षति रक्षितः"
            ],
            अर्थ: [
              "अहिंसा सबसे बड़ा धर्म है",
              "धर्म की रक्षा करने वाले की रक्षा धर्म करता है"
            ]
          }
        },
        {
          id: 3,
          title: "सुभाषितानि",
          content: {
            introduction: "संस्कृत के प्रसिद्ध सुभाषितों का तीसरा भाग।",
            summary: "जीवन के विभिन्न पहलुओं पर संस्कृत सुभाषित।",
            सुभाषित: [
              "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत",
              "उद्यमेन हि सिध्यन्ति कार्याणि न मनोरथैः"
            ],
            अर्थ: [
              "जब-जब धर्म की हानि होती है",
              "उद्यम से ही कार्य सिद्ध होते हैं, केवल इच्छा से नहीं"
            ]
          }
        },
        {
          id: 4,
          title: "सुभाषितानि",
          content: {
            introduction: "संस्कृत सुभाषितों का अंतिम संकलन।",
            summary: "विविध विषयों पर संस्कृत के सुंदर कथन।",
            सुभाषित: [
              "विद्वान् सर्वत्र पूज्यते",
              "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन"
            ],
            अर्थ: [
              "विद्वान की सब जगह पूजा होती है",
              "कर्म करने में तेरा अधिकार है, फल में नहीं"
            ]
          }
        }
      ]
    }
  }
};

export default ncertContent;