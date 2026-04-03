/* eslint-disable no-dupe-keys */
// src/data/ncertData/class7/math.js

const mathematics = {
  subjectName: "Mathematics",
  chapters: [
    // Chapter 1: Large Numbers in Our Surroundings
    {
      id: 1,
      title: "Large Numbers in Our Surroundings",
      content: {
        introduction: "In this chapter, we will explore large numbers like lakh and crore, understand their scale, and learn how to read, write, and estimate them. We will also look at interesting patterns in multiplication and apply these concepts to real-world scenarios.",
        sections: [
          {
            title: "1.1 A Lakh Varieties!",
            content: `In the town of Chintamani in Karnataka, there lives a farmer named Ishwarappa. He regularly goes to the market to buy seeds for growing rice in his field. During one such trip, he overheard Ramanna and Lakshmma talking. Ramanna says, "Earlier, our country had about one lakh varieties of rice. Farmers used to conserve different varieties of seeds and use them to grow rice. Now, we are left with only a few varieties. Farmers also have to come to the market to buy seeds." Lakshamma says, "There is a seed bank near my house. So far, they have collected about a hundred indigenous varieties of rice seeds from different places. You can also buy seeds from there."

            You have probably heard the word 'lakh' before. Do you know how big one lakh is? Let's find out.

            Ishwarappa shared this incident with his daughter Roxi and son Aistu.
            Aistu was surprised to learn that the country once had about one lakh varieties of rice. He wondered, "One lakh! I have only tasted 3 varieties so far. If we try to taste one new variety each day, would it take 100 lifetimes to taste all varieties?" What do you think? Take a guess.`,
            examples: [],
            exercises: [
              "Observe the pattern and fill in the boxes below.",
            ],
            images: [
              "Images related to the conversation and the 100-year lifespan problem are present in the original PDF."
            ]
          },
          {
            title: "Understanding the Scale of One Lakh",
            content: `But how much is one lakh? Roxi and Aistu found that if they ate one variety of rice per day, they wouldn't even come close to eating one lakh varieties in their lifetime. Roxi suggests, "What if we eat 2 varieties of rice per day? Could we eat 1 lakh varieties of rice in 100 years?"

            What if a person eats 3 varieties of rice per day? Could they taste all 1 lakh varieties in a lifetime of 100 years? Find out.

            Aistu says, "We know that if we ignore leap years, there are 365 days in a year. If we live for y years, the number of days in our lifetime will be 365 × y."`,
            examples: [
              "Choose a number for y. For your chosen y, how close is the number of days in y years to 1 lakh?"
            ],
            exercises: [
              "1. According to the 2011 census, the population of Chintamani town was about 75,000. How much less is 75,000 than one lakh?",
              "2. In the year 2024, the estimated population of Chintamani town was 1,06,000. How much more is 1,06,000 than one lakh?",
              "3. By how much did the population of Chintamani town increase from 2011 to 2024?"
            ]
          },
          {
            title: "Realizing Large Numbers",
            content: `You might have come across interesting facts like these—

            • The 'Statue of Unity' of Sardar Vallabhbhai Patel in Gujarat is the tallest statue in the world, its height is about 180 meters.
            • The Kunchikal Falls in Karnataka is said to fall from a height of about 450 meters.

            It is not always easy to estimate how large these measurements are. But when we compare them with something we are already familiar with, we get a better understanding of their size; let's look at an example.

            Look at the picture on the right. Somu is 1 meter tall. If each floor is four times his height, what is the approximate height of the building?

            ? Which is taller, the Statue of Unity or this building? How much taller? m.

            We can see that the height of the Statue of Unity is about 4 times the height of Somu's building.

            ? How much taller is Kunchikal Falls compared to Somu's building? m.

            ? How many floors should Somu's building have so that its height equals the height of the waterfall?`,
            examples: [],
            exercises: [],
            images: [
              "A diagram showing Somu (1m tall) next to a multi-story building is present in the original PDF."
            ]
          },
          {
            title: "Is One Lakh a Very Large Number?",
            content: `Ishwarappa asked Roxi and Aistu, "Is one lakh small or big?" Roxi believes one lakh is a large number—

            • "We had one lakh varieties of rice— that's a lot."
            • "Living for 1 lakh days would mean living for 274 years— that's a really long time!"
            • "If one lakh people stand shoulder to shoulder in a line, they could stretch for 38 kilometers."

            But Aistu thinks it's not that big—

            • "Did you know that the cricket stadium in Ahmedabad has a seating capacity of more than one lakh people? One lakh people in such a small area!"
            • "Most humans have between 80,000 and 1,20,000 hairs on their head. Imagine how one lakh hairs fit in such a small space!"
            • "I've heard that there are some species of fish where a single female fish can comfortably lay about one lakh eggs at a time. Some even lay up to ten lakh eggs at once."

            ? How do you see one lakh — is it a large number or a small one?`,
            examples: [],
            exercises: []
          },
          {
            title: "Writing and Reading Numbers",
            content: `We have already been using commas (,) in the Indian place value system for 5-digit numbers, e.g., 45,830. As numbers get larger, using commas makes reading them easier.

            We use commas between digits, like— between the "ten thousand" place and the "lakh" place, as you have seen before (1,00,000).

            The number name for 12,78,830 is twelve lakh seventy-eight thousand eight hundred thirty. Similarly, the number 15,75,000 would be said in words as fifteen lakh seventy-five thousand.

            Write the following numbers in words—
            (a) 3,00,600 (b) 5,04,085
            (c) 27,30,000 (d) 70,53,138

            Write the corresponding number in the Indian place value system for each of the following—
            (a) One lakh twenty-three thousand four hundred fifty-six
            (b) Four lakh seven thousand seven hundred four
            (c) Fifty lakh five thousand fifty
            (d) Ten lakh two hundred thirty-five`,
            examples: [
              "Example: 12,78,830 is twelve lakh seventy-eight thousand eight hundred thirty.",
              "Example: 15,75,000 is fifteen lakh seventy-five thousand."
            ],
            exercises: [
              "Write in words: (a) 3,00,600 (b) 5,04,085 (c) 27,30,000 (d) 70,53,138",
              "Write in numbers (Indian system): (a) One lakh twenty-three thousand four hundred fifty-six (b) Four lakh seven thousand seven hundred four (c) Fifty lakh five thousand fifty (d) Ten lakh two hundred thirty-five"
            ],
            noteForTeachers: "Encourage students to make connections between these facts. For example, can the entire population of Chintamani town be seated in a stadium? How can we imagine that one lakh people in a 38 km long line can sit together in a stadium?"
          },
          {
            title: "1.2 Land of Dashes",
            content: `Here in the Land of Dashes, there are special calculators with special buttons.

            1. Happy Thousand has a +1000 button. How many times should it be pressed to show the following—
            (a) Three thousand? 3 times
            (b) 10,000?
            (c) Fifty-three thousand?
            (d) 90,000?
            (e) One lakh?
            (f) 153 times?
            (g) How many thousands are needed to make 1 lakh?

            2. Dominant Ten has only a +10 button. How many times should it be pressed to show the following—
            (a) Five hundred?
            (b) 780?
            (c) 1000?
            (d) 3700?
            (e) 10,000?
            (f) One lakh?
            (g) 435 times?

            3. Smart Hundred has only a +100 button. How many times should it be pressed to show the following—`,
            examples: [],
            exercises: [
              "(a) Four hundred? times",
              "(b) 3,700?",
              "(c) 10,000?",
              "(d) Fifty-three thousand?",
              "(e) 90,000?",
              "(f) 97,600?",
              "(g) 1,00,000?",
              "(h) 582 times?",
              "(i) How many hundreds are needed to make ten thousand?",
              "(j) How many hundreds are needed to make one lakh?",
              "(k) Smart Hundred says, 'There are some numbers that Dominant Ten and Happy Thousand cannot show, but I can show.' Is this statement true? Think and find out."
            ]
          },
          {
            title: "Clever Chitti's Calculator",
            content: `4. Clever Chitti has a different kind of calculator. It has the following buttons — +1, +10, +100, +1000, +10000, +100000, and +1000000. There are always many ways to get the job done. "How so?" you might ask. To get the number 321, she presses +10 thirty-two times and +1 once. Will she get 321? Alternatively, she could press +100 twice, +10 twelve times, and +1 once.

            5. Two different ways to get 5072 are shown below. These two ways can be expressed as —
            (a) (50 × 100) + (7 × 10) + (2 × 1) = 5072
            (b) (3 × 1000) + (20 × 100) + (72 × 1) = 5072

            ? Find a different way to get 5072 and write an expression for it.`,
            examples: [],
            exercises: [
              "For each number given below, write expressions by pressing buttons in at least two different ways to obtain the number. Think like Chitti and be creative.",
            ],
            tableData: {
              headers: ["Button", "5072"],
              rows: [
                ["+10,00,000", ""],
                ["+1,00,000", ""],
                ["+10,000", ""],
                ["+1,000", "3"],
                ["+100", "50"],
                ["+20", ""],
                ["+10", "7"],
                ["+1", "2"]
              ]
            }
          },
          {
            title: "Clever Chitti's Questions",
            content: `Clever Chitti has some questions for you—

            (a) You have to press buttons exactly 30 times to make a number. What is the largest 3-digit number you can make? What is the smallest 3-digit number you can make?
            (b) 997 can be obtained by pressing buttons 25 times. Can 997 be made by pressing buttons fewer or more than 25 times?

            Create similar questions and challenge your classmates.`,
            examples: [],
            exercises: []
          },
          {
            title: "Simple SiFi's Calculator",
            content: `Simple SiFi has a different kind of calculator. It has the following buttons — +1, +10, +100, +1,000, +10,000, +1,00,000. It should be used as minimally as possible.

            How can we get the numbers (a) 5072 and (b) 8300 by pressing the fewest buttons?

            Find out which button and how many times it should be pressed to get the desired numbers in the table below. The aim is to press as few buttons as possible.

            Here is one way to get the number 5072. In this method, the buttons were pressed a total of 23 times. Is there any other way to get 5072 by pressing the buttons fewer than 23 times? Write an expression for it.`,
            examples: [],
            exercises: [
              "1. For the numbers given in the previous 'Find Out', find out how each number can be obtained by pressing the fewest buttons and write the corresponding expression.",
              "2. Do you see any relationship between each number and the fewest number of button presses?",
              "3. If you notice, the expression for the fewest button presses shows the Indian place value notation of numbers. Think about why this is so."
            ],
            tableData: {
              headers: ["Button", "5072"],
              rows: [
                ["+10,00,000", ""],
                ["+1,00,000", ""],
                ["+10,000", ""],
                ["+1,000", "5"],
                ["+100", "0"],
                ["+10", "6"],
                ["+1", "12"]
              ]
            }
          },
          {
            title: "Introducing Crore",
            content: `What if the +10,00,000 button is pressed 10 times? What number will you get? How many zeros will it have? What will we call it? This number will be 100 lakh, which is also called 1 crore. One crore is written as 1,00,00,000 in the Indian place value system. It has 7 zeros after 1.`,
            examples: [],
            exercises: []
          },
          {
            title: "1.3 Crore and Crores of Things!",
            content: `The table below shows some numbers according to both the Indian and American systems of naming digits and placing commas (the American system is also called the International system). Observe the positions of commas in both systems carefully.`,
            tableData: {
              headers: ["Indian System", "", "American/International System", ""],
              rows: [
                ["1,000", "One thousand", "1,000", "One thousand"],
                ["10,000", "Ten thousand", "10,000", "Ten thousand"],
                ["1,00,000", "One lakh", "100,000", "One hundred thousand"],
                ["10,00,000", "Ten lakh", "1,000,000", "One million"],
                ["1,00,00,000", "One crore", "10,000,000", "Ten million"],
                ["10,00,00,000", "Ten crore", "100,000,000", "One hundred million"],
                ["1,00,00,00,000", "One arab or Hundred crore", "1,000,000,000", "One billion"]
              ]
            },
            content: `Note that in the Indian system, digits are grouped, and commas are placed from right to left in a 3-2-2... pattern (thousands, lakhs, crores, etc.). In the American system, digits are grouped evenly, and commas are placed from right to left in a 3-3-3-3... pattern (thousands, millions, billions, etc.).

            Countries like Bhutan, Nepal, Sri Lanka, Pakistan, Bangladesh, Maldives, Afghanistan, and Myanmar also adopt the Indian system of naming numbers. The word 'lakh' originates from the Sanskrit word "laksha", and 'crore' originates from the Sanskrit word "koti". The American system is also used in many countries.

            Observe the number of zeros in 1 lakh and 1 crore carefully.
            1 lakh is written by putting 5 zeros after 1.
            1 crore is written by putting 7 zeros after 1.

            1 lakh is one hundred times one thousand, one crore is one hundred times one lakh, and one arab is one hundred times one crore (meaning one hundred thousand is 1 lakh, 100 lakh is 1 crore, and 100 crore is 1 arab).

            ? How many zeros are in one thousand lakh?
            ? How many zeros are in one hundred thousand?

            The number 9876501234 can be easily read by putting commas —

            (a) 9,87,65,01,234 → 9 arab 87 crore 65 lakh 1 thousand and 234 or 987 crore 65 lakh 1 thousand 234 (in the Indian system).
            (b) 9,876,501,234 → 9 billion 876 million 501 thousand 234 (in the American system).`,
            exercises: [
              "1. Place commas according to the Indian place value system and write the number names in both Indian and American systems—",
              "(a) 4050678 (b) 48121620 (c) 20022002 (d) 246813579 (e) 345000543 (f) 1020304050",
              "2. Write the following numbers in the Indian place value system—",
              "(a) One crore one lakh one thousand ten",
              "(b) One billion one million one thousand one",
              "(c) Ten crore twenty lakh thirty thousand forty",
              "(d) Nine billion eighty million seven hundred thousand six hundred",
              "3. Compare and put the appropriate sign '<', '>' or '='—",
              "(a) 30 thousand ____ 3 lakh",
              "(b) 500 lakh ____ 5 million",
              "(c) 800 thousand ____ 8 million",
              "(d) 640 crore ____ 60 billion"
            ]
          },
          {
            title: "1.4 Exact and Approximate Values",
            content: `What do you think about this conversation? Have you ever read or heard such news or statements? Many times, the exact number is not needed, and only an approximate value is sufficient. For example, according to the 2011 census, the population of Chintamani town is 76,068. Instead of this, saying that the population is about 75,000 is enough to estimate how large the number is.`,
            examples: [],
            exercises: []
          },
          {
            title: "Rounding Up and Down",
            content: `There are some situations where rounding a number upward is appropriate (when the rounded number is greater than the actual number, it is rounded up). For example, if a school has 732 people including students, teachers, staff, and the principal, they might order 750 sweets instead of 700.

            There are some situations where rounding downward is good (when the rounded number is less than the actual number, it is rounded down). For example, if an item costs ₹470, the shopkeeper might quote the price around ₹450 instead of ₹500.

            ? Think and share situations where it would be appropriate to (a) round up (b) round down (c) either round up or down is fine, and (d) when exact numbers are needed.`,
            examples: [],
            exercises: []
          },
          {
            title: "Nearest Neighbor",
            content: `With large numbers, it is useful to know the nearest thousand, lakh, or crore. For example, the nearest numbers for the number 6,72,85,183 are shown in the table below—`,
            tableData: {
              headers: ["To the nearest", "Number"],
              rows: [
                ["Thousand", "6,72,85,000"],
                ["Ten thousand", "6,72,90,000"],
                ["Lakh", "6,73,00,000"],
                ["Ten lakh", "6,70,00,000"],
                ["Crore", "7,00,00,000"]
              ]
            },
            exercises: [
              ">>> Similarly, write the five nearest numbers for these numbers—",
              "(a) 3,87,69,957 (b) 29,05,32,481",
              ">>> I have a number for which all five nearest numbers are 5,00,00,000. This number could be a topic for math discussion? How many such numbers are there?"
            ]
          },
          {
            title: "Roxi and Aistu's Estimations",
            content: `Roxi and Aistu are estimating the values of simple expressions.

            1. 4,63,128 + 4,19,682,
            Roxi — "Their sum is close to 8,00,000 and more than 8,00,000."
            Aistu — "Their sum is close to 9,00,000 and less than 9,00,000."

            (a) Are these estimates correct? Whose estimate is closest to the sum?
            (b) Will their sum be more than 8,50,000 or less than 8,50,000? Why do you think so?
            (c) Will their sum be more than 8,83,128 or less than 8,83,128? Why do you think so?
            (d) The exact value of 4,63,128 + 4,19,682 = ___________.

            2. 14,63,128 – 4,90,020
            Roxi — "Their difference is close to 10,00,000 and less than 10,00,000."
            Aistu — "Their difference is close to 9,00,000 and more than 9,00,000."

            (a) Are these estimates correct? Whose estimate is closest to the difference?
            (b) Will the difference be more than 9,50,000 or less than 9,50,000? Why do you think so?
            (c) Will the difference be more than 9,63,128 or less than 9,63,128? Why do you think so?
            (d) The exact value of 14,63,128 – 4,90,020 = ___________.`,
            examples: [],
            exercises: [],
            noteForTeachers: "Ask students questions like, 'If the sum of two numbers is less than 8,50,000, what could the numbers be?'"
          },
          {
            title: "Population of Cities",
            content: `Look at the population of some Indian cities in the table below—`,
            tableData: {
              headers: ["S.No.", "City", "Population (2011)", "Population (2001)"],
              rows: [
                ["1", "Mumbai", "1,24,42,373", "1,19,78,450"],
                ["2", "New Delhi", "1,10,07,835", "98,79,172"],
                ["3", "Bengaluru", "84,25,970", "43,01,326"],
                ["4", "Hyderabad", "68,09,970", "36,37,483"],
                ["5", "Ahmedabad", "55,70,585", "35,20,085"],
                ["6", "Chennai", "46,81,087", "43,43,645"],
                ["7", "Kolkata", "44,86,679", "45,72,876"],
                ["8", "Surat", "44,67,797", "24,33,835"],
                ["9", "Vadodara", "35,52,371", "16,90,000"],
                ["10", "Pune", "31,15,431", "25,38,473"],
                ["11", "Jaipur", "30,46,163", "23,22,575"],
                ["12", "Lucknow", "28,15,601", "21,85,927"],
                ["13", "Kanpur", "27,67,031", "25,51,337"],
                ["14", "Nagpur", "24,05,665", "20,52,066"],
                ["15", "Indore", "19,60,631", "14,74,968"],
                ["16", "Thane", "18,18,872", "12,62,551"],
                ["17", "Bhopal", "17,98,218", "14,37,354"],
                ["18", "Visakhapatnam", "17,28,128", "13,45,938"],
                ["19", "Pimpri-Chinchwad", "17,27,692", "10,12,472"],
                ["20", "Patna", "16,84,222", "13,66,444"]
              ]
            },
            exercises: [
              "Based on the information in the table, answer the following questions using approximate values—",
              "1. What is your general observation about this data? Share with the class.",
              "2. What is an appropriate title for the above table?",
              "3. What is the population of Pune in 2011? Approximately how much has it increased compared to 2001?",
              "4. Which city's population increased the most between 2001 and 2011?",
              "5. Are there cities whose population approximately doubled? Which cities are these?",
              "6. By what number should Patna's population be multiplied to make it approximately equal to Mumbai's population?"
            ]
          },
          {
            title: "1.5 Patterns in Products",
            content: `Roxi and Aistu are playing a multiplication game. They observed an interesting technique for multiplying a number by 10, 100, or 1000, etc.

            A Shortcut Method for Multiplication
            Roxi solves 116 × 5 in the following way—
            116 × 5 = 116 × (10/2) = 58 × 10 = 580

            Aistu calculates the value of 824 × 25 like this—
            824 × 25 = 824 × (100/4) = 206 × 100 = 20600

            Can you explain, using the meaning of multiplication and division, why multiplying a number by 5 is the same as dividing it by 2 and then multiplying by 10?`,
            examples: [],
            exercises: [
              "1. Find quick methods to calculate these products—",
              "(a) 2 × 1768 × 50",
              "(b) 72 × 125 [Hint — 125 = 1000/8]",
              "(c) 125 × 40 × 8 × 25",
              "2. Calculate these products quickly—",
              "(a) 25 × 12 =",
              "(b) 25 × 240 =",
              "(c) 250 × 120 =",
              "(d) 2500 × 12 =",
              "(e) × = 120000000"
            ]
          },
          {
            title: "How Long is the Product?",
            content: `Each box below shows interesting patterns in multiplication. Solve them to find the pattern. Extend the multiplication based on the pattern found.`,
            examples: [
              "11 × 11 = \n111 × 111 = \n1111 × 1111 =",
              "66 × 61 = \n666 × 661 = \n6666 × 6661 =",
              "3 × 5 = \n33 × 35 = \n333 × 335 =",
              "101 × 101 = \n102 × 102 = \n103 × 103 ="
            ],
            exercises: [
              "Observe the number of digits in both numbers being multiplied and their product in each case. Is there a relationship between the number of digits in the numbers being multiplied and their product?",
              "Roxi says that the product of two 2-digit numbers can only be a 3 or 4-digit number. Is she correct?",
              "To find out if Roxi's statement is correct, should we try all possible multiplications with 2-digit numbers? Or is there another more suitable way to find out?",
              "She explains her reasoning, 'We want to know about the number of digits in the product of two 2-digit numbers. To find the smallest such product, I take 10 × 10. So all other products will be greater than 100. To find the largest such product, I multiply the smallest 3-digit numbers, 100 × 100 = 10,000. Therefore, the product of two 2-digit numbers will always be less than 10,000.'",
              "Will multiplying a 3-digit number by another 3-digit number always yield a 4-digit number?",
              "Will multiplying a 4-digit number by a 2-digit number always yield a 5-digit number?",
              "Look at the multiplication statements below. Do you see any pattern? Check if this pattern applies to other numbers as well."
            ]
          },
          {
            title: "Fascinating Facts About Large Numbers",
            content: `Some interesting facts about large numbers are hidden below. Calculate the product or quotient to uncover these facts. Once you find the product or quotient, read the number in both Indian and American systems. After finding each number, share your thoughts and questions about the fact with the class.`,
            images: [
              "Pages 16 and 17 of the original PDF contain visual puzzles where multiplication and division problems reveal interesting facts (e.g., distance to the sun, number of rice grains, etc.)"
            ]
          },
          {
            title: "Large Number Fact",
            content: `1 gram of healthy soil can contain from 10 crore to 1 billion bacteria and from 1 lakh to 10 lakh fungi that can aid plant growth and health.

            Share facts about large numbers that you know or are familiar with, along with your classmates.`,
            examples: [],
            exercises: []
          },
          {
            title: "1.6 Have You Ever Wondered...?",
            content: `Aistu is delighted by all these interesting facts about large numbers. While thinking about them, he posed an unusual question, "Can the entire population of Mumbai fit into one lakh buses?"

            What do you think?
            How can we find out?

            Suppose a bus can seat 50 people, then 1 lakh buses can seat 1 lakh × 50 = 50 lakh people.
            The population of Mumbai is more than 1 crore 24 lakh (we saw this in the table earlier). Therefore, the entire population of Mumbai cannot fit into 1 lakh buses.

            ? About 2,500 passengers were on board the R.M.S. Titanic. Could the population of Mumbai fit into 5,000 such ships?

            Inspired by this unique question, Roxi wondered. "If I travel 100 kilometers each day, can I reach the moon in 10 years?" (The distance between the Earth and the moon is 3,84,400 kilometers.)

            How much distance could she travel in one year?
            How much distance could she travel in 10 years?
            Isn't it easier to do these calculations step by step? You can use this method for all large calculations.

            ? If you travel 1,000 kilometers per day, find out if you can reach the sun in your lifetime? (You saw the distance between the Earth and the sun on the previous 'page 16'.)

            ? Imagine necessary approximations and answer the questions below—
            (a) If a sheet of paper weighs 5 grams, can you lift one lakh sheets of paper together?
            (b) If 250 babies are born every minute in the entire world, can 10 lakh (1 million) babies be born in a day?
            (c) Can you count 10 lakh coins in a day? Assume you can count 1 coin per second.

            ? Think and create such interesting questions and share them with your class.`,
            examples: [],
            exercises: []
          },
          {
            title: "Find Out",
            content: `1. Using all digits from 0 to 9 exactly once to form a 10-digit number (the first digit cannot be 0), write—
            (a) the largest multiple of 5 (b) the smallest even number

            2. The number 10,30,285 in words is 'ten lakh thirty thousand two hundred eighty-five', which has 14 letters (in Hindi? The original asks in Hindi context. For English, we can adapt to count English letters or just present the problem as is). Write the name of a 7-digit number that has the maximum number of letters.

            3. Write a 9-digit number such that interchanging any two digits yields a larger number. How many such numbers are there?

            4. From the number 12345123451234512345, cut out 10 digits in such a way that the remaining number is possibly the largest.

            5. The words 'barah' (twelve) and 'terah' (thirteen) have common letters (ra and ha). The words 'terah' (thirteen) and 'chaudah' (fourteen) share the letter 'ha', and the words 'chaudah' (fourteen) and 'pandrah' (fifteen) share the letters 'da' and 'ha'. How far would you have to count to find two consecutive numbers that have no common letters (in their Hindi spelling)? (This is a language-specific puzzle. For an English version, we could ask about English number names, e.g., 'one' and 'two' share no letters? But 'two' and 'three' share 't'? This requires careful adaptation.)

            6. Suppose you write all numbers 1, 2, 3, 4, ..., 9, 10, 11, ... The tenth digit you write is 1 and the eleventh digit is 0, and this is part of the number 10.
            (a) What will be the 1000th digit? Which number will it be part of?
            (b) In which number will the 10 lakhth digit occur?
            (c) When will you have written the digit 5 for the 5000th time?

            7. A calculator has only +10,000 and +100 buttons. Write an expression describing the number of button presses to make the following numbers—
            (a) 20,800 (b) 92,100 (c) 1,20,500 (d) 65,30,000 (e) 70,25,700

            8. How many lakhs make one billion?

            9. You are given two sets of number cards numbered 1 to 9. Place a number card in each box below to achieve the following results—
            (a) The largest possible sum (b) The smallest possible difference between the two resulting numbers (A diagram with boxes would be present).

            10. You are given some number cards — 4,000, 13,000, 300, 70,000, 1,50,000, 20, and 5. Using these cards, you can perform any operations you wish to get as close as possible to the numbers below. Each card can be used only once to form a specific number.
            (a) 1,10,000 — I can get close to it with 4000 × (20 + 5) + 13000 = 1,13,000.
            (b) 2,00,000 —
            (c) 5,80,000 —
            (d) 12,45,000 —
            (e) 20,90,800 —

            11. Find out how many coins would need to be stacked to match the height of the 'Statue of Unity'. Assume each coin has a thickness of 1 millimeter.

            12. The wingspan of a very large seabird, the albatross, is about 7 feet wide. They are known to migrate across oceans. An albatross can cover about 900 to 1,000 kilometers in a day. The longest recorded single journey is 12,000 kilometers. Approximately how many days would such a journey take to cross the Pacific Ocean?

            13. The bird 'Limosa' (Bar-tailed Godwit) holds the record for the longest non-stop flight. It traveled 13,560 kilometers from Alaska to Australia without stopping. This journey started on 13 October 2022 and lasted continuously for about 11 days. Find the approximate distance it covered each day. Find out approximately how much distance it covered each hour.

            14. Bald eagles are known to fly at altitudes of 4,500 to 6,000 meters above ground. The height of Mount Everest is about 8,850 meters. An airplane can fly at altitudes of 10,000 to 12,800 meters. How many times larger are these heights compared to Somu's building? (Refer back to Somu's building height from earlier.)`
          },
          {
            title: "Summary",
            content: `• We encountered large numbers like lakh, crore, arab; million and billion. We learned how to write and read these numbers in the Indian and American (International) systems.
            (a) 1 lakh has 5 zeros after 1 — 1,00,000
            (b) 1 crore has 7 zeros after 1 — 1,00,00,000
            (c) 1 million has 6 zeros after 1 — 10,00,000 (which is also 10 lakh)
            (d) 1 arab has 9 zeros after 1 — 1,00,00,00,000 (also called 100 crore or 1 billion)

            • We generally round large numbers upward or downward. Sometimes it is enough to know how big or small something is.

            • To get a sense of large numbers or quantities, we can check how many times larger they are compared to numbers or quantities we are more familiar with.

            • We saw how to factorize numbers and regroup them to simplify multiplication.

            • We used some interesting ideas, like — "Can a person watch 1,000 movies in a year?"`,
            examples: [],
            exercises: []
          },
          {
            title: "Fun with Matchsticks",
            content: `We can write digits in the way shown in the figure below.`,
            images: [
              "A figure showing how digits 0-9 can be formed using matchsticks is present."
            ],
            content: `You can use matchsticks or just draw lines to show matchsticks to write digits in this way. To make the digit 7, 3 matchsticks are needed. Make the number 5,108. How many matchsticks are needed for this?

            1. Make the number 42,019. It will require exactly 23 matchsticks.
            2. Starting from 42,019, by moving exactly two matchsticks, make a larger number. One example is 42,078. What other numbers larger than 42,019 can you make in this way?
            3. Preetam wants to place a digit '1' somewhere among the digits '4', '2', '0', '1', and '9'. Where should he place the digit '1' to get the largest possible number?
            4. What other numbers can he make by placing the digit '1'?

            1. Make or write the number 63,890.
            2. Starting from 63,890, by rearranging exactly four matchsticks, make a larger number. One example is 88,078. What other numbers larger than 63,890 can you make in this way?

            1. Make any number using exactly 24 matchsticks or lines.
            2. What is the largest number that can be made using 24 matchsticks or lines?
            3. What is the smallest number that can be made using 24 matchsticks or lines?

            Create your own questions and challenge each other.`,
            examples: [],
            exercises: []
          }
        ],
        summary: [
          "We learned about large numbers like lakh and crore.",
          "We can use estimation to understand the size of large numbers.",
          "Comparing with familiar objects helps grasp large magnitudes.",
          "Multiplication can be simplified using factors and regrouping.",
          "We explored patterns and posed 'what if' questions about large quantities."
        ]
      }
    },
    // Chapter 2: Algebraic Expressions
    {
      id: 2,
      title: "Algebraic Expressions",
      content: {
        introduction: "In this chapter, we will learn about mathematical expressions, how to compare them, and how to evaluate complex expressions using the concept of terms and brackets.",
        sections: [
          {
            title: "2.1 Simple Expressions",
            content: `You must have seen mathematical phrases like 13 + 2, 20 – 4, 12 × 5, and 18 ÷ 3. Such phrases are called arithmetic expressions.

            Every arithmetic expression has a value, which is the number obtained by evaluating it. For example, the value of the expression 13 + 2 is 15. This expression can be read as '13 plus 2' or 'sum of 13 and 2'.

            We use the equals sign '=' to represent or show the relationship between an arithmetic expression and its value. For example—

            13 + 2 = 15

            Example 1 — Mallika spends ₹25 per day on food at school. Write an expression for the total amount she spends on food in a week from Monday to Friday.

            The expression for the total amount is 5 × 25.
            5 × 25 is '5 times 25' or 'product of 5 and 25'.

            Different expressions can have the same value. Here are different ways to express 12 using two numbers and one of the four mathematical operations +, −, ×, and ÷ —

            10 + 2, 15 – 3, 3 × 4, 24 ÷ 2

            ? Choose your favorite number and write as many expressions as you can that have that value.`,
            examples: [],
            exercises: []
          },
          {
            title: "Comparing Expressions",
            content: `Just as we compare numbers using the signs '=', '<', and '>', we can also compare expressions. We compare expressions based on their values and accordingly use the sign 'is equal to', 'is greater than', or 'is less than'. For example—

            10 + 2 > 7 + 1

            because the value of 10 + 2 is 12, which is greater than the value of 7 + 1, which is 8. Similarly,

            13 - 2 < 4 × 3`,
            examples: [],
            exercises: [
              "1. Fill in the blanks to make the expressions on both sides of the '=' sign equal—",
              "(a) 13 + 4 = ______ + 6",
              "(b) 22 + ______ = 6 × 5",
              "(c) 8 × ______ = 64 ÷ 2",
              "(d) 34 - ______ = 25",
              "2. Arrange the following expressions in increasing order of their values.",
              "(a) 67 – 19",
              "(b) 67 – 20",
              "(c) 35 + 25",
              "(d) 5 × 11",
              "(e) 120 ÷ 3"
            ]
          },
          {
            title: "Example 2 and 3",
            content: `Example 2 — Which expression is larger? 1023 + 125 or 1022 + 128?

            Estimating a situation without calculating the exact values can help us answer. Raja had 1023 marbles and today he got 125 more marbles. Now he has 1023 + 125 marbles. Joy had 1022 marbles and today he got 128 more marbles. Now he has 1022 + 128 marbles. Who has more marbles?

            We can represent this situation as shown in the figure on the right. Let's start, Raja had 1 more marble than Joy. But today Joy got 3 more marbles than Raja. We can see that now Joy has 2 more marbles than Raja. That is —

            1023 + 125 < 1022 + 128

            Example 3 — Which expression is larger? 113 – 25 or 112 – 24?

            Imagine a situation: Raja had 113 marbles. Out of these, 25 marbles were lost. So he has 113 – 25 marbles left. Joy had 112 marbles and today he lost 24 marbles. Now he has 112 – 24 marbles left. Who has more marbles left?

            Therefore —

            113 – 25 = 112 – 24`,
            examples: [],
            exercises: [
              "For each pair of given expressions, use '>', '<', or '=' to compare them. Can you do this without complex calculations? Express your reasoning for each case."
            ],
            images: [
              "A diagram likely showing the marble comparison is present in the original PDF."
            ]
          },
          {
            title: "2.2 Reading and Evaluating Complex Expressions",
            content: `Sometimes, when an expression is not accompanied by a context, there can be more than one way to find its value. In such situations, we need some tools and rules to specify how to evaluate the expression more accurately.

            Taking an example from language, look at the given sentences—

            (a) Sentence — Shalini is sitting with a friend with toys.
            Meaning — The friend has toys, and Shalini is sitting with her.

            (b) Sentence — Shalini is sitting with a friend, with toys.
            Meaning — Shalini has toys, and she is sitting with her friend.

            Without punctuation, this sentence can be interpreted in two different ways. The proper use of commas guides how the sentence should be understood.

            Let's look at an expression whose value can be found in more than one way.

            Example 4 — Mallesh brought 30 marbles to the playground. Arun brought 5 bags of marbles, and each bag had 4 marbles. How many marbles did Mallesh and Arun bring to the playground? Mallesh wrote a mathematical expression to summarize this —

            30 + 5 × 4

            Without knowing the context behind this expression, Purna evaluated it and got 140. She first added 30 and 5 to get 35, then multiplied 35 by 4 to get 140.

            Mallesh evaluated the expression and got 50. He multiplied 5 and 4 to get 20, then added 20 to 30 to get 50.

            In this context, Mallesh is correct, but why did Purna get it wrong?

            Just by looking at the expression 30 + 5 × 4, it is not clear whether we should do the addition or multiplication first. Just as punctuation is used in language to resolve doubts, in mathematics, the concepts of brackets and terms are used to resolve doubts when evaluating expressions.`,
            examples: [],
            exercises: []
          },
          {
            title: "Brackets in Expressions",
            content: `In the expression 30 + 5 × 4 for finding the number of marbles, we had to multiply 5 and 4 first, and then add this product to 30. This order of operations is made clear by using brackets as follows—

            30 + (5 × 4)

            When evaluating an expression with brackets, we must find the value of the expression inside the brackets before performing other operations. Therefore, in the above expression, we first find the value of 5 × 4 and then do the addition. Thus, this expression correctly represents the number of marbles.

            30 + (5 × 4) = 30 + 20 = 50

            Example 5 — Irfan bought a packet of biscuits for ₹15 and a packet of toor dal for ₹56. He gave the shopkeeper ₹100. Write an expression that can help us calculate the money Irfan should get back from the shopkeeper.

            Irfan spent ₹15 on the biscuit packet and ₹56 on the toor dal. So the total cost in rupees is 15 + 56. He gave the shopkeeper ₹100. So he should get back the remainder after subtracting the total cost from ₹100. Can we write the expression like this—

            100 - 15 + 56?

            Can we first subtract 15 from 100 and then add 56 to the result? Doing so would give us 141. It is illogical that he gets back more money than he paid! In this situation, we can use brackets—

            100 - (15 + 56)

            First, evaluating the expression inside the brackets, we get 100 – 71, which is 29. So, Irfan will get ₹29 back.`,
            examples: [],
            exercises: []
          },
          {
            title: "Terms in Expressions",
            content: `Suppose we have an expression without any brackets, like 30 + 5 × 4. Does it have any meaning?

            When expressions have more than one operation and the order of operations is not specified by brackets, we use the concept of terms to determine the order.

            Terms are parts of an expression that are separated by the '+' sign. For example, in 12 + 7, the terms are 12 and 7, as marked below.

            12 + 7 = 12 + 7

            We will mark each term of the expression in a similar way as above. Note that this method of marking terms is not a standard method. It will be done this way until you become familiar with this concept.

            Now, what are the terms in 83 – 14? We know that subtracting a number is the same as adding its inverse. Recall that the inverse of a given number has the opposite sign. For example, the inverse of 14 is –14, and the inverse of –14 is 14. Thus, subtracting 14 from 83 is the same as adding –14 to 83. That is —

            83 – 14 = 83 + (–14)

            Thus, the terms of the expression 83 – 14 are 83 and –14.

            ? Verify with other examples that converting subtraction to addition in this way does not change the value of the expression.

            ? Can you explain, using the token model of integers you studied in Class 6 Mathematics textbook, why subtracting a number is the same as adding its inverse?

            To identify terms, all subtractions in an expression are converted to additions in this way. Here are some other examples of expressions and their terms—

            –18 – 3 = –18 + –3

            6 × 5 + 3 = (6 × 5) + 3

            2 – 10 + 4 × 6 = 2 + (–10) + (4 × 6)

            Note that 6 × 5 and 4 × 6 are single terms because there is no '+' sign within them. Some expressions are given in the table below. Complete the table.`,
            tableData: {
              headers: ["Expression", "Expression as sum of terms", "Terms"],
              rows: [
                ["13 – 2 + 6", "13 + (–2) + 6", "13, –2, 6"],
                ["5 + 6 × 3", "5 + (6 × 3)", "5, 6 × 3"],
                ["4 + 15 – 9", "", ""],
                ["23 – 2 × 4 + 16", "", ""],
                ["28 + 19 – 8", "", ""]
              ]
            },
            content: `Now we will see how terms are used to determine the order of operations to find the value of an expression.

            We will start with expressions that only involve addition (with all subtractions appropriately converted to additions).

            Does changing the order of adding the terms give a different value?`,
            examples: [],
            exercises: []
          },
          {
            title: "Swapping and Grouping",
            content: `Let's consider a simple expression with only two terms.

            Example 6 — Madhu is flying a drone from the roof. The drone goes up 6 meters and then comes down 4 meters. Write an expression to show how high the drone's final position is from the roof.

            The drone is 6 – 4 = 2 meters above the roof. Writing this as a sum of terms —

            6 + (–4) = 2

            If we swap the terms, does the sum change?

            –4 + 6 = 2

            In this case, it does not.

            We already know that when both terms are positive numbers, swapping the terms does not change the sum.

            Will it be the same even when the terms include negative numbers? Take some other expressions and check.

            ? Can you explain, using the token model of integers we saw in the Class 6 Mathematics textbook, why this happens?

            Thus, in an expression with two terms, swapping the terms does not change its value.

            Now consider an expression with three terms—

            (–7) + 10 + (–11)

            Let's find the sum of these terms in two different ways as follows—

            (By finding the sum of the first two terms and then adding that sum to the third term)
            (–7) + 10 = 3, then 3 + (–11) = –8

            (By finding the sum of the last two terms and then adding that sum to the first term)
            10 + (–11) = –1, then (–7) + (–1) = –8

            What do you observe? In both cases, the sum is the same.

            Again, we know that when adding positive numbers, grouping them in either of the above two ways gives the same sum.

            Will it be the same even when the terms include negative numbers? Take some more expressions and check.

            ? Can you explain, using the token model of integers you studied in the Class 6 Mathematics textbook, why this happens?

            Thus, grouping the terms of an expression in any of the given ways yields the same value.

            Let's reconsider the expression (–7) + 10 + (–11). What happens if we change the order and add –7 and –11 first, and then add this sum to 10? Will we get the same sum as before?

            (–7) + (–11) = –18, then –18 + 10 = –8

            We see that adding the terms of the expression (–7) + 10 + (–11) in any order gives the same sum, –8.

            Does adding the terms of any expression in any order give the same value? Take some more expressions and check. Also consider expressions with more than 3 terms.

            Thus, adding terms in any order gives the same value. That is, in an expression involving only addition, it does not matter in which order the terms are added; all orders yield the same value.

            Now let's consider expressions that also involve multiplication and division, and where the order of operations is not specified by brackets. The value of such expressions is found by first finding the value of each term. Once the values of all terms are found, they are added together.

            For example, the value of the expression 30 + 5 × 4 is found as follows —

            30 + 5 × 4 = 30 + (5 × 4) = 30 + 20 = 50

            The value of the expression 5 × (3 + 2) + 7 × 8 + 3 is found as follows —

            5 × (3 + 2) + 7 × 8 + 3 = (5 × (3 + 2)) + (7 × 8) + 3

            Here, first the value of (3 + 2) is found, and then this sum is multiplied by 5 (= 25). The value of the term 7 × 8 is 56. The solution for this expression is 25 + 56 + 3 = 84.

            Manasa is finding the sum of a long list of numbers. It takes her five minutes to add them all, and she gets the answer 11749. Then she realizes that she forgot to include the fourth number, 9055. Will she have to start adding from the beginning again?

            In mathematics, instead of saying "swapping terms does not change the sum", we call it the commutative property of addition. Similarly, "grouping does not change the sum" is called the associative property of addition.`,
            examples: [],
            exercises: []
          },
          {
            title: "Swapping Order of Things in Daily Life",
            content: `Manasa is going out to play. Her mother says, "Wear your cap and shoes!" What should she wear first? She can wear her cap first and then her shoes, or she can wear her shoes first and then her cap.

            In both situations, Manasa will look exactly the same. Imagine another situation — Manasa's mother says, "Wear your socks and shoes." Now the order is important. She should wear socks first and then shoes. If she wears shoes first and then socks, she will feel very uncomfortable and look very different.`,
            examples: [],
            exercises: []
          },
          {
            title: "Some More Expressions and Their Terms",
            content: `Example 7 — Amu, Charan, Madhu, and John went to a hotel and ordered four dosas. Each dosa costs ₹23, and they want to thank the waiter by giving a tip of ₹5. Write an expression representing the total cost.

            Cost of 4 dosas = 4 × 23

            Can the total cost including the tip be written as 4 × 23 + 5? Finding its value, we get—

            4 × 23 + 5 = (4 × 23) + 5 = 92 + 5 = 97

            Thus, the correct way to write the expression is 4 × 23 + 5.

            If the total number of dosas increases to 7 and the tip remains the same, how much money will they have to pay? Write an expression for this situation and identify its terms.

            Example 8 — Students in a class are playing "Fire on the mountain, run, run, run!" Whenever the teacher says a number, students have to arrange themselves in groups of that number. Anyone who does not become part of the announced group size is out of the game.

            Ruby wanted to rest, so she sat aside in the class and watched them play. The other 33 students were playing the game. The teacher said '5'. As the students arranged themselves in groups, Ruby wrote 6 × 5 + 3 (she thought of it as 3 more than 6 × 5).

            ? Think and discuss why she wrote this. The expression written as a sum of terms is —

            33

            For each situation given below, write an expression and identify its terms —
            If the teacher had said '4', Ruby would write _____________
            If the teacher had said '7', Ruby would write _____________
            Write an expression for the number of students in your class in a similar way as above.

            Example 9 — Raghu bought 100 kg of rice from the wholesale market and packed them into packets of 2 kg each. He already had four packets of 2 kg each. Write an expression for the number of 2 kg rice packets he has now, and identify the terms.

            He already had 4 packets. The number of new 2 kg rice packets is 100 ÷ 2, which we also write as 100/2.

            Now, the number of 2 kg rice packets he has is 4 + 100/2. Its terms are — 4 and 100/2.

            Example 10 — Kannan has to pay ₹432 to the shopkeeper using ₹1 and ₹5 coins and ₹10, ₹20, ₹50, and ₹100 notes. How can he do this?

            There is more than one possibility. For example —
            432 = 4 × 100 + 1 × 20 + 1 × 10 + 2 × 1
            i.e., 4 notes of ₹100, 1 note of ₹20, 1 note of ₹10, and 2 coins of ₹1.

            432 = 8 × 50 + 1 × 10 + 4 × 5 + 2 × 1
            i.e., 8 notes of ₹50, 1 note of ₹10, 4 coins of ₹5, and 2 coins of ₹1.

            Identify the terms in both expressions above.
            Can you think of some other ways to give ₹432 to someone?

            Example 11 — Two pictures are given here. Which of the two arrangements matches the expression 5 × 2 + 3?`,
            images: [
              "Two arrangements of yellow and blue squares are shown in the original PDF."
            ],
            content: `Let's write this expression as a sum of terms.

            5 × 2 + 3 = (5 × 2) + 3 = 10 + 3 = 13

            This expression 5 × 2 + 3 can be understood as 3 more than 5 × 2, which represents the arrangement on the left.

            What would be the expression for the arrangement on the right using the number of yellow and blue squares? Do you remember using brackets? We need to use brackets for this.

            2 × (5 + 3)

            Note that this arrangement can also be represented as —

            5 + 3 + 5 + 3

            or

            5 × 2 + 3 × 2`,
            examples: [],
            exercises: []
          },
          {
            title: "Find Out",
            content: `1. Find the value of the expressions given below by writing their terms—
            (a) 28 – 7 + 8 (b) 39 – 2 × 6 + 11
            (c) 40 – 10 + 10 + 10 (d) 48 – 10 × 2 + 16 ÷ 2
            (e) 6 × 3 – 4 × 8 × 5

            2. Write a story or situation for each of the expressions given below and find their values—
            (a) 89 + 21 – 10 (b) 5 × 12 – 6
            (c) 4 × 9 + 2 × 6

            3. For each of the situations given below, write an expression describing the situation, identify its terms, and find the value of the expression.
            (a) Queen Alia gave 100 gold coins to Princess Elsa and Princess Anna last year. Princess Elsa used the coins to start a business and doubled her coins. Princess Anna bought jewelry and now has only half of her coins left. Write an expression to describe how many gold coins Princess Elsa and Princess Anna have together.
            (b) The metro train ticket between two stations costs ₹40 for an adult and ₹20 for a child. What is the total cost of tickets for —
                (i) four adults and three children?
                (ii) two groups each consisting of three adults?
            (c) Write an expression describing the relationship between the measurements shown in the figure and find the total height of the window.`,
            images: [
              "A diagram of a window with measurements is present in the original PDF."
            ]
          },
          {
            title: "Removing Brackets — I",
            content: `Let's find the value of this expression —
            200 – (40 + 3) = 200 – 43 = 157

            And then subtract it from 200. But it is easier to first subtract 40 from 200 —
            200 – 40 = 160
            And then subtract 3 from 160 —
            160 – 3 = 157

            What we did here was 200 – 40 – 3. Note that we did not do this —
            200 – 40 + 3

            Hence, 200 – (40 + 3) = 200 – 40 – 3

            Example 12 — We have seen this earlier in a situation where Irfan buys a biscuit packet for ₹15 and a toor dal packet for ₹56. When he paid ₹100, the money he got back could also be calculated as follows—

            Money received back = 100 – 15 – 56

            Here, we did 100 – 15 – 56.

            Hence, 100 – (15 + 56) = 100 – 15 – 56

            Note that when removing brackets preceded by a minus sign, the signs of the terms inside the brackets change. Observe carefully the signs of 40 and 3 in the first example, and 15 and 56 in the second example.

            Example 13 — Consider the expression 500 – (250 – 100). Is it possible to write this expression without brackets?

            To find the value of this expression, we need to subtract 250 – 100 = 150 from 500 — 500 – (250 – 100) = 500 – 150 = 350

            If we directly subtract 250 from 500, we would have subtracted 100 more than we needed to. Therefore, to get the same value as 500 – (250 – 100), we should add 100 back to the expression 500 – 250. This order of operations is 500 – 250 + 100. Thus —
            500 – (250 – 100) = 500 – 250 + 100

            Check that 500 – (250 – 100) is not equal to 500 – 250 – 100.

            Again, note that when removing brackets preceded by a minus sign, the signs of the terms inside the brackets change. In this case, the signs of 250 and –100 change to –250 and 100, respectively.

            Example 14 — Heera has a collection of rare coins. She has 28 coins in one bag and 35 coins in another bag. She gives 10 coins from the second bag as a gift to her friend. Write an expression for the number of coins left with Heera.

            This can be represented by 28 + (35 – 10).

            We know that this is the same as 28 + {35 + (–10)} because terms can be added in any order. This expression can normally be written as 28 + 35 + (–10) or 28 + 35 – 10. Thus —

            28 + (35 – 10) = 28 + 35 – 10 = 53

            When brackets are not preceded by a minus sign, the signs of the terms inside do not change when the brackets are removed. Observe the signs of the terms 35 and –10 in the above example.

            When to change signs and when not to? Instead of memorizing this, you can figure it out for yourself by thinking about the meanings of the expressions.`,
            examples: [],
            exercises: []
          },
          {
            title: "Changes in Terms (Ticker) I",
            content: `If we increase or decrease the value of one term in an expression, what effect does it have on the value of the expression?

            Some expressions are given in three columns below. In each column, one or two terms of the first expression have been changed. Look at the example in the first column and fill in the blanks with as little calculation as possible.`,
            examples: [],
            exercises: [
              "1. Fill in the blanks with numbers and the empty boxes with operations and signs so that the expressions on both sides of the equals sign are equal.",
              "(a) 24 + (6 – 4) = 24 + 6 ___ 4",
              "(b) 38 + ( ___ – 4) = 38 + 9 – 4",
              "(c) 24 – (6 + 4) = 24 ___ 6 – 4",
              "(d) 24 – 6 – 4 = 24 – 6 ___ 4",
              "(e) 27 – (8 + 3) = 27 ___ 8 ___ 3",
              "(f) 27 – ( ___ – 3) = 27 – 8 + 3",
              "2. Remove the brackets and write an expression with the same value.",
              "(a) 14 + (12 + 10)",
              "(b) 14 – (12 + 10)",
              "(c) 14 + (12 – 10)",
              "(d) 14 – (12 – 10)",
              "(e) –14 + (12 – 10)",
              "(f) 14 – (–12 – 10)",
              "3. Find the values of the expressions given below. For each pair, first try to guess if their values are equal. When are the two expressions equal?",
              "(a) (6 + 10) – 2 and 6 + (10 – 2)",
              "(b) 16 – (8 – 3) and (16 – 8) – 3",
              "(c) 27 – (18 + 4) and 27 + (–18 – 4)",
              "4. In each group of given expressions, identify the groups that have the same value. You do not need to find their values, but instead use your understanding of terms.",
              "(a) 319 + 537, 319 – 537, –537 + 319, 537 – 319",
              "(b) 87 + 46 – 109, 87 + 46 – 109, 87 – 46 + 109, 87 – (46 + 109), (87 – 46) + 109",
              "5. Use brackets at appropriate places in the expressions to obtain the indicated values.",
              "(a) 34 – 9 + 12 = 13",
              "(b) 56 – 14 – 8 = 34",
              "(c) –22 – 12 + 10 + 22 = –22",
              "6. Using the logic of changing term values, fill in the blanks so that the expressions on both sides of the equals (=) sign are equal.",
              "(a) 423 + ______ = 419 + ______",
              "(b) 207 – 68 = 210 – ______",
              "7. Using the numbers 2, 3, and 5 as needed, and using the operations '+' and '–' and brackets, create expressions with as many different values as possible. For example, 2 – 3 + 5 = 4 and 3 – (5 – 2) = 0.",
              "8. Whenever Yashoda has to subtract 9 from a number, she subtracts 10 and adds 1 to it. For example, 36 – 9 = 26 + 1.",
              "(a) Do you think she always gets the correct answer? Why?",
              "(b) Can you think of other similar tricks? Give some examples.",
              "9. Consider these two expressions — (a) 73 – 14 + 1, (b) 73 – 14 – 1. For each expression, identify the expressions from the group below that are equal to it.",
              "(a) 73 – (14 + 1)",
              "(b) 73 – (14 – 1)",
              "(c) 73 + (–14 + 1)",
              "(d) 73 + (–14 – 1)"
            ]
          },
          {
            title: "Removing Brackets — II",
            content: `Example 15 — Lhamo and Novu went to a restaurant. Each of them ordered one vada and one rasgulla. The price of one vada is ₹43 and the price of one rasgulla is ₹24. Write an expression for the amount they will have to pay.

            Since each of them had one vada and one rasgulla, each person's share can be represented by 43 + 24.

            ? How much money do they have to pay in total? Can this be represented by the expression 2 × 43 + 24? Writing it as a sum of terms, we get —

            2 × 43 + 24

            The meaning of this expression is 24 more than 2 × 43. But we want an expression that means double of (43 + 24). We can use brackets to write such an expression — 2 × (43 + 24)

            Therefore, we can say that together they have to pay 2 × (43 + 24). This is also the same as paying for two vadas and two rasgullas —

            2 × 43 + 2 × 24

            That is —
            2 × (43 + 24) = 2 × 43 + 2 × 24

            ? If another friend, Sangmu, joins them and orders the same food items, what will be the expression for the total money to be paid?

            Example 16 — In the Republic Day parade, Boy Scouts and Girl Guides are marching together. Scouts are marching in 4 rows, and each row has 5 scouts. Guides are marching in 3 rows, and each row has 5 guides (see the figure below). How many scouts and guides are marching in this parade?

            The number of Boy Scouts marching is 4 × 5. The number of Girl Guides marching is 3 × 5. The total number of scouts and guides will be 4 × 5 + 3 × 5.

            This can also be found by first finding the total number of rows, which is 4 + 3, and then multiplying their sum by the number of students standing in each row. Thus, the number of boys and girls can also be found by (4 + 3) × 5.

            4 × 5 + 3 × 5 = (4 + 3) × 5

            Evaluating these expressions, we get —

            4 × 5 + 3 × 5 = 20 + 15 = 35
            (4 + 3) × 5 = 7 × 5 = 35

            Thus, 4 × 5 + 3 × 5 = (4 + 3) × 5

            5 × 4 + 3 ≠ 5 × (4 + 3). Can you explain why this is so?

            Is 5 × (4 + 3) = 5 × (3 + 4) = (3 + 4) × 5?

            The observation we made in the last two examples can be seen in a general way as follows—

            Consider 10 × 98 + 3 × 98. This means we need to add 98 taken 10 times and 98 taken 3 times.

            Clearly, this is the same as 98 taken (10 + 3) = 13 times. Thus —

            10 × 98 + 3 × 98 = (10 + 3) × 98

            Writing this equality in another way, we get —

            (10 + 3) × 98 = 10 × 98 + 3 × 98

            By swapping the numbers in the multiplication above, this can be seen as follows —

            98 × 10 + 98 × 3 = 98 × (10 + 3) and
            98 × (10 + 3) = 98 × 10 + 98 × 3

            Now let's consider the expression 14 × 10 – 6 × 10. This means subtracting 10 taken 6 times from 10 taken 14 times.

            Clearly, this is 10 taken (14 – 6) = 8 times. Thus —

            14 × 10 – 6 × 10 = (14 – 6) × 10

            or

            (14 – 6) × 10 = 14 × 10 – 6 × 10

            This property (which is called the distributive property) can be summarized nicely as follows —

            A multiple of a sum (or difference) is equal to the sum (or difference) of the multiples.`,
            images: [
              "A diagram showing 4 rows of 5 scouts and 3 rows of 5 guides is present in the original PDF."
            ]
          },
          {
            title: "Changes in Terms (Ticker) II",
            content: `Let's understand what happens when we change numbers in a multiplication.

            Example 17 — Given that 53 × 18 = 954. Find 63 × 18.
            Because 63 × 18 means 63 times 18.
            Therefore, 63 × 18 = (53 + 10) × 18 = 53 × 18 + 10 × 18 = 954 + 180 = 1134

            Example 18 — Find an efficient way to find the value of 97 × 25.
            97 × 25 means 97 times 25.
            We can write this as (100 – 3) × 25.
            We know that this is the same as the difference between 100 times 25 and 3 times 25 —
            97 × 25 = 100 × 25 – 3 × 25
            Find the value of the above.

            Use this method to find the following products —
            (a) 95 × 8 (b) 104 × 15 (c) 49 × 50

            Do you get the solution faster with this method compared to the method you normally use for multiplication?

            What other products similar to the ones above can be found quickly?`,
            examples: [],
            exercises: [
              "1. Fill in the blanks with numbers and the boxes with signs so that the expressions on both sides are equal.",
              "(a) 3 × (6 + 7) = 3 × 6 + 3 × 7",
              "(b) (8 + 3) × 4 = 8 × 4 + 3 × 4",
              "(c) 3 × (5 + 8) = 3 × 5 ___ 3 × 8",
              "(d) (9 + 2) × 4 = 9 × 4 ___ 2 × 4",
              "(e) 3 × ( ___ + 4) = 3 × 5 + 3 × 4",
              "(f) ( ___ + 6) × 4 = 13 × 4 + 6 × 4",
              "(g) 3 × ( ___ + ___ ) = 3 × 5 + 3 × 2",
              "(h) ( ___ + ___ ) × ___ = 2 × 4 + 3 × 4",
              "(i) 5 × (9 – 2) = 5 × 9 – 5 × ___",
              "(j) (5 – 2) × 7 = 5 × 7 – 2 × 7",
              "(k) 5 × (8 – 3) = 5 × 8 ___ 5 × 3",
              "(l) (8 – 3) × 7 = 8 × 7 ___ 3 × 7",
              "(m) 5 × (12 – ___ ) = 5 × 7",
              "(n) (15 – ___ ) × 7 = 6 × 7",
              "(o) 5 × ( ___ – ___ ) = 5 × 9 – 5 × 4",
              "(p) ( ___ – ___ ) × 7 = 17 × 7 – 9 × 7",
              "2. By analyzing the expressions on the right and left, fill in the boxes below with '>', '<', or '='. To figure this out, use reasoning and your understanding of terms and brackets without solving the expressions.",
              "(a) (8 – 3) × 29 ☐ (3 – 8) × 29",
              "(b) 15 + 9 × 18 ☐ (15 + 9) × 18",
              "(c) 23 × (17 – 9) ☐ 23 × 17 + 23 × 9",
              "(d) (34 – 28) × 42 ☐ 34 × 42 – 28 × 42",
              "3. Here is a way to make 14: 2 × (1 + 6) = 14. Are there other ways to get 14? Fill them in the blanks below—",
              "(a) ___ × ( ___ + ___ ) = 14",
              "(b) ___ × ( ___ + ___ ) = 14",
              "(c) ___ × ( ___ + ___ ) = 14",
              "(d) ___ × ( ___ + ___ ) = 14",
              "4. Find the sum of numbers in each picture below (in at least two different ways). Explain how you solved it using expressions."
            ],
            images: [
              "Several diagrams with numbers arranged in rows or groups are present for the 'Find Out' section."
            ]
          },
          {
            title: "Find Out",
            content: `1. Read the situations given ahead. Write an appropriate expression for each of them and find their values.

            (a) The district market in Begur is open all seven days of the week. Rahim sends 9 kilograms of mangoes from his garden and Shyam sends 11 kilograms of mangoes from his garden to this market every day. Find the total quantity of mangoes sent by them to the local district market in one week.

            (b) Beenu earns ₹20,000 each month. She spends ₹5000 on rent, ₹5000 on food, and ₹2000 on other items each month. How much money will Beenu save at the end of one year?

            (c) A snail climbs 3 cm up a pole during the day and slips down 2 cm at night while sleeping. The pole is 10 cm high and has delicious food at its top. In how many days will the snail reach the food?

            2. Melvin reads a story of two pages every day except Tuesdays and Saturdays. How many stories will he complete reading in 8 weeks? Which of the following expressions represents this situation?
            (a) 5 × 2 × 8
            (b) (7 − 2) × 8
            (c) 8 × 7
            (d) 7 × 2 × 8
            (e) 7 × 5 − 2
            (f) (7 + 2) × 8
            (g) 7 × 8 − 2 × 8
            (h) (7 − 5) × 8

            3. Find different ways to find the values of the expressions given below—
            (a) 1 – 2 + 3 – 4 + 5 – 6 + 7 – 8 + 9 – 10
            (b) 1 – 1 + 1 – 1 + 1 – 1 + 1 – 1 + 1 – 1

            4. Compare the pairs of expressions given below using '<', '>', or '=' or by using reasoning.
            (a) 49 – 7 + 8 ☐ 49 – 7 + 8
            (b) 83 × 42 – 18 ☐ 83 × 40 – 18
            (c) 145 – 17 × 8 ☐ 145 – 17 × 6
            (d) 23 × 48 – 35 ☐ 23 × (48 – 35)
            (e) (16 – 11) × 12 ☐ –11 × 12 + 16 × 12
            (f) (76 – 53) × 88 ☐ 88 × (53 – 76)
            (g) 25 × (42 + 16) ☐ 25 × (43 + 15)
            (h) 36 × (28 – 16) ☐ 35 × (27 – 15)

            5. Without calculating, identify which expression is equal to the given expression. You can rewrite the expressions by using terms and removing brackets. There may be more than one expression equal to the given expression.

            (a) 83 – 37 – 12
                (i) 84 – 38 – 12
                (ii) 84 – (37 + 12)
                (iii) 83 – 38 – 13
                (iv) –37 + 83 – 12

            (b) 93 + 37 × 44 + 76
                (i) 37 + 93 × 44 + 76
                (ii) 93 + 37 × 76 + 44
                (iii) (93 + 37) × (44 + 76)
                (iv) 37 × 44 + 93 + 76

            6. Choose a number and create ten different expressions that have that value.`
          },
          {
            title: "Summary",
            content: `• We have been reading and evaluating simple expressions for some time. Here, we started by revisiting the meaning and values of some simple expressions.

            • We learned how to compare some expressions by reasoning instead of directly calculating their values.
            • To read and solve complex expressions without confusion, we use terms and brackets.
            • When an expression is written as a sum of terms, changing the order of the terms or grouping the terms does not change the value of the expression. This is due to the 'commutative property of addition' and the 'associative property of addition', respectively.
            • While finding the value of expressions inside brackets, we observed that when we remove a bracket preceded by a minus sign, the signs of the terms written inside the bracket change.
            • We also learned about the "distributive property" — multiplying an expression inside a bracket by a number is the same as multiplying that number by each term inside the bracket.`,
            examples: [],
            exercises: []
          },
          {
            title: "Puzzles",
            content: `Using three 3's and the four operations (addition, subtraction, multiplication, and division) as needed, along with brackets, we can create many expressions. For example, (3 + 3)/3 = 2, 3 + 3 – 3 = 3, 3 × 3 + 3 = 12, and many more like this.

            Using four 4's, create expressions that have all values from 1 to 20.

            Using the numbers 1, 2, 3, 4, and 5 only once in any order, obtain as many values as possible between –10 and +10.

            Using the digits 0 to 9 only once in any order, create an expression that has the value 100.

            What other interesting questions like these can you ask?`,
            examples: [],
            exercises: []
          }
        ],
        summary: [
          "We learned about arithmetic expressions and their values.",
          "We can compare expressions without calculating by using reasoning.",
          "Terms and brackets help in evaluating complex expressions clearly.",
          "The order of addition does not affect the sum (commutative and associative properties).",
          "Brackets preceded by a minus sign change the signs of the terms inside when removed.",
          "The distributive property links multiplication with addition/subtraction."
        ]
      }
    },
    // Chapter 3: A Glimpse Beyond the Point
    {
      id: 3,
      title: "A Glimpse Beyond the Point",
      content: {
        introduction: "In this chapter, we will explore the need for smaller units of measurement, understand tenths and hundredths, and learn how to read, write, and compare decimal numbers. We will also see how decimals are used in various real-life contexts like length, weight, and money.",
        sections: [
          {
            title: "3.1 The Need for Smaller Units",
            content: `Sonu's mother was fixing a toy. She was trying to join two pieces with the help of a screw. Sonu was watching his mother with great curiosity. She was unable to join the pieces. Sonu asked, why did that happen? His mother said that the screw was not of the correct size.

            She brought another screw from the box and succeeded in fixing the toy. Both screws looked similar to Sonu. But when he looked closely, he found that there was a slight difference in their lengths.

            Sonu was curious about how such a small difference in lengths could have such an effect. He was inquisitive to know the difference in lengths. He was also eager to know how small this difference was, because both screws looked almost alike.

            In the picture given ahead, the screws are placed on a scale. Measure them and write their lengths in the given spaces.`,
            images: [
              "A diagram showing two screws placed on a scale is present in the original PDF."
            ],
            exercises: [
              "Between 2 cm and 3 cm",
              "More than 2 1/10 cm but less than 2 3/10 cm",
              "2 7/10 cm",
              "Which scale helped you measure the lengths of these screws most accurately and why?"
            ]
          },
          {
            title: "Understanding Tenths",
            content: `What does 2 7/10 cm (the length of the first screw) mean?

            As seen on the scale, the 1 cm unit length between two consecutive numbers is divided into 10 equal parts. To get the length 2 7/10 cm, we go from 0 to 2 and then take 7 parts of 1/10 after that. The total length of this screw is 2 cm + 7/10 cm. Similarly, we can understand the meaning of length 3 2/10 cm.

            We read 2 7/10 cm as two and seven-tenths centimeters and 3 2/10 cm as three and two-tenths centimeters.

            Can you explain why the unit was divided into smaller parts to measure these screws?

            Measure the following objects using a scale and write their measurements in centimeters in the same way as shown for the screws earlier — a pen, a sharpener, and any other object of your choice.

            Write the measurements of the objects shown in the picture—`,
            images: [
              "A picture of various objects with their measurements to be written."
            ]
          },
          {
            title: "3.2 One Tenth",
            content: `In the picture given below, the length of the pencil is 3 4/10 units, which can also be read as 3 units and four tenths, i.e., it can be read as (3 × 1) + (4 × 1/10) units.

            This length is the same as 34 tenths of a unit because 10 tenths make one unit.

            34 × 1/10 = 34/10 = 10/10 + 10/10 + 10/10 + 4/10 = 1 + 1 + 1 + 4/10 = 3 and 4/10

            Below, some numbers are shown with fractional units, and it is also given how they are read —

            4 1/10 → four and one-tenth
            4/10 → four one-tenths or four-tenths
            41/10 → forty-one tenths or forty-one one-tenths
            41 1/10 → forty-one and one-tenth

            For the objects shown below, write their lengths in two ways and read them aloud. An example of a USB charging cable is given. (Note that the unit length used in each diagram is not the same.)

            This USB cable length is 4 and 8/10 units or 48/10 units.

            Arrange these lengths in increasing order —
            (a) 9/10 (b) 1 7/10 (c) 130/10 (d) 13 1/10 (e) 10 5/10 (f) 7/10 (g) 6 7/10 (h) 4/10

            Arrange the following lengths in increasing order — 4 1/10, 4/10, 41/10, 41 1/10

            Sonu is measuring some parts of his body. The length of Sonu's lower arm is 2 7/10 units, and the length of his upper arm is 3 6/10 units. What is the total length of his arm?

            Let's find the total length by considering the lengths of the lower and upper arms as 2 units and 7 tenths, and 3 units and 6 tenths, respectively.

            So, here we have (2 + 3) units and (7 + 6) tenths. Together, they make 5 units and 13 tenths. But 13 tenths are equal to 1 unit and 3 tenths. Therefore, the total length is 6 units and 3 tenths.

            (a) (2 + 3) + (7/10 + 6/10) = (2 + 3) + (13/10) = 5 + 13/10 = 5 + 10/10 + 3/10 = 5 + 1 + 3/10 = 6 + 3/10 = 6 3/10

            Alternatively, both lengths can be converted to tenths and then added.

            (c) 27 tenths and 36 tenths together equal 63 tenths. i.e., 27/10 + 36/10 = 63/10

            63/10 is the same as 60 tenths (60/10) and 3 tenths (3/10), which is 6 units and 3 tenths, i.e., 6 3/10.

            (b) 2 7/10 + 3 6/10 = 5 13/10 = 6 3/10`,
            images: [
              "A diagram of a pencil being measured is present.",
              "A diagram of a USB cable is present.",
              "A diagram of a bee with measurements of its head, thorax, and abdomen is present."
            ],
            exercises: [
              "Here are the lengths of the body parts of a bee. Find its total length. (Head: 2 3/10 units, Thorax: 5 4/10 units, Abdomen: 7 5/10 units)",
              "As shown in the figure, the length of Shailaja's hand is 12 4/10 units, and the length of her palm is 6 7/10 units. What is the length of her longest finger (middle finger)?",
              "This finger length can be found by evaluating (12 + 4/10) - (6 + 7/10). It can be done in various ways. For example — (a) (12 + 4/10) - (6 + 7/10) = (12 - 6) + (4/10 - 7/10) = 6 - 3/10 = 5 + 1 - 3/10 = 5 + 10/10 - 3/10 = 5 + 7/10 = 5 7/10. Discuss what is being done here and why.",
              "(b) 12 4/10 - 6 7/10 = 11 14/10 - 6 7/10 = 5 7/10. It is convenient to start subtraction from the tenths, like with whole numbers. We cannot subtract 7 tenths from 4 tenths. So, we split one unit from 12 and convert it into 10 tenths. Now this number has 11 units and 14 tenths. We subtract 7 tenths from 14 tenths and then subtract 6 units from 11 units.",
              "Try to find the difference between these two lengths by converting them into tenths.",
              "The length of a Celestial Pearl Danio is 2 4/10 cm, and the length of a Philippine Goby is 9/10 cm. What is the difference in their lengths?",
              "How much bigger are these fish compared to your finger?",
              "Look at the given sequences of numbers. Identify the change after each term and extend the pattern.",
              "(a) 4, 4 3/10, 4 6/10, __, __, __",
              "(b) 8 2/10, 8 7/10, 9 2/10, __, __, __",
              "(c) 7 6/10, 8 7/10, __, __, __",
              "(d) 5 7/10, 5 3/10, __, __, __",
              "(e) 13 5/10, 13, 12 5/10, __, __, __",
              "(f) 11 5/10, 10 4/10, 9 3/10, __, __, __"
            ]
          },
          {
            title: "3.3 One Hundredth",
            content: `The length of a sheet of paper was 8 9/10 units, which can also be called 8 units and 9 tenths. It is folded in half along its length. What is its length now?

            We can say that its length is between 4 4/10 units and 4 5/10 units. But we cannot tell its exact measurement because there are no such marks. Earlier, we divided a unit into 10 one-tenths to measure smaller lengths. We can do something similar here and divide each tenth into 10 parts.

            What is the length of this small part obtained? How many such small parts make one unit?

            As shown in the figure below, each tenth has 10 small parts, and one unit has 10 tenths. Therefore, one unit will have 100 such small parts. Hence, the length of one such part is 1/100 of a unit.

            Now, we return to our question: what is the length of this folded paper? We see that it ends at 4 4/10 and 5/100, which is read as 4 units, 4 tenths, and 5 hundredths.

            ? How many hundredths make one tenth? Can we also say that this length is 4 units and 45 hundredths?

            Look at the figure given below. Observe the marked points and the corresponding lengths measured from 0. Fill in the lengths in the empty boxes.

            In the first figure, the length of the wire is given in three different ways. Can you see why these express the same length?
            1 + 4/10 + 4/100 = 1 + 14/100 = 114/100

            Write the measurements for the lengths shown below and read the measurements in words —`,
            images: [
              "A diagram showing a folded paper.",
              "A diagram showing the division of a unit into tenths and hundredths.",
              "A diagram showing a wire and its length expressed in different forms.",
              "A diagram with various lines and lengths to be measured and written in decimal form."
            ],
            exercises: [
              "Identify the longest and shortest lengths in each group. Mark each length on a scale.",
              "(a) 3/10, 3/100, 33/10",
              "(b) 45/100, 54/100, 5/10, 4/10",
              "(c) 3/100, 3/10, 3 10/100",
              "(d) 8/10, 2/100, 9/100, 1 8/100",
              "(e) 7 3/10, 5/100, 7 5/10, 7 41/100",
              "(f) 65/10, 15/100, 5 87/100, 5 7/100",
              "What will be the sum of 15 3/10 4/100 and 2 6/10 8/100? This can be solved in various ways. Some methods are shown below —",
              "(a) First method: (15 + 2) + (3/10 + 6/10) + (4/100 + 8/100) = 17 + 9/10 + 12/100 = 17 + 9/10 + 1/10 + 2/100 = 17 + 10/10 + 2/100 = 18 2/100",
              "(b) Second method: 15 3/10 4/100 + 2 6/10 8/100 = 17 9/10 12/100 = 17 10/10 2/100 = 18 2/100 (Ten hundredths equals one tenth).",
              "Are these two methods different?",
              "Look at the sum given below for 483 + 268. Do you see any similarities between the methods shown above and this method? (400 + 80 + 3) + (200 + 60 + 8) = (400 + 200) + (80 + 60) + (3 + 8) = 600 + 140 + 11 = 600 + 150 + 1 = 700 + 50 + 1 = 751",
              "One can also convert 15 3/10 4/100 and 2 6/10 8/100 into hundredths and find the sum as shown below —",
              "(c) (15 + 2) + (34/100 + 68/100) = 17 + 102/100 = 17 + 1 + 2/100 = 18 + 2/100",
              "(d) (1534/100) + (268/100) = 1802/100 = 1800/100 + 2/100 = 18 + 2/100",
              "Find the difference: What is the difference between 25 9/10 and 6 4/10 7/100?",
              "One method to solve this —",
              "25 9/10 -> 25 8/10 10/100 -> 25 8/10 10/100",
              "-6 4/10 7/100 -> -6 4/10 7/100 -> -6 4/10 7/100",
              "= 19 4/10 3/100",
              "Solve this by converting into hundredths. Find the difference — 15 3/10 4/100 - 2 6/10 8/100?",
              "One method to solve this is —",
              "15 3/10 4/100 and 15 2/10 14/100 and 14 12/10 14/100",
              "-2 6/10 8/100   -2 6/10 8/100   -2 6/10 8/100 = 12 6/10 6/100 = 12 6/10 6/100",
              "Look at the subtraction process for 653 – 268 below. Do you see any similarities between this process and the methods above?",
              "(600 + 50 + 3) - (200 + 60 + 8) = (600 - 200) + (50 - 60) + (3 - 8) = (600 - 200) + (40 - 60) + (13 - 8) = (600 - 200) + (40 - 60) - 5 = (500 - 200) + (140 - 60) + 5 = 300 + 80 + 5 = 385"
            ]
          },
          {
            title: "Find Out",
            content: `Find the sums and differences —
            (a) 3/10 + 3 4/100
            (b) 9 5/10 7/100 + 2 1/10 3/100
            (c) 15 6/10 4/100 + 14 3/10 6/100
            (d) 7 7/100 - 4 4/100
            (e) 8 6/100 - 5 3/100
            (f) 12 6/10 2/100 - 9/10 9/100`
          },
          {
            title: "3.4 Decimal Place Value",
            content: `You must have noticed that whenever we need to measure an object more accurately, we divide one part into 10 smaller equal parts. That is, we divide one unit into 10 tenths, and then each tenth into 10 hundredths, and then use these smaller parts for measurement.

            ? Can we not divide a unit into 4 equal parts, 5 equal parts, 8 equal parts, or any other number of equal parts?

            Yes, we can. The example given below presents a comparison of how the same length is represented in two different situations when the unit is divided into 10 or 4 equal parts.

            Even if more accurate measurement is needed, each quarter can be further divided into four equal parts. Then each part measures 1/16 of a unit, meaning 16 such parts make 1 unit.

            So why always divide a unit into 10 parts?

            The reason is the special role played by 10 in the Indian place value system. In a whole number written in the Indian place value system, for example, in 284, the place value of 2 is hundred (100), the place of 8 is tens (10), and the place of 4 is ones (1). The place value of each place is 10 times the place value of the place immediately to its right. Comparatively, each place is 10 times smaller than the place immediately to its left.

            10 units make 1 ten.
            10 tens make 1 hundred.
            10 hundreds make 1 thousand, and so on.

            To extend this system of writing numbers to quantities smaller than one, we divide a unit into 10 equal parts. What do we get? This gives one tenth. Dividing one tenth into 10 equal parts gives one hundredth, and so on.

            Can we extend this further?

            When 1/100 is divided into 10 equal parts, what will the fraction be?

            It will be 1/1000, meaning one thousand such parts make one unit. Therefore, this part is called one thousandth.

            Just as moving to the left of 1,00,000 gives larger place values at each step, similarly, moving to the right of 1/1000, we can get smaller place values at each step.

            1,00,000 -> 10,000 -> 1000 -> 100 -> 10 -> 1 -> 1/10 -> 1/100 -> 1/1000 -> 1/10000 (Each step to the left is multiplied by 10, each step to the right is divided by 10)

            This method of writing numbers is called the 'decimal system' because it is based on the number 10. In Latin, 'decem' means ten, which is cognate with the Sanskrit word 'dasha'. Many Indian languages have similar cognate words for 10, including Odia, Konkani, Marathi, Gujarati, Hindi, Kashmiri, Bodo, and Assamese. We will study more about other methods of writing numbers in higher classes.

            How Big?
            We already know that 10 hundreds make 1000, and 100 hundreds make 10000.
            We can ask similar questions about fractional parts —
            (a) How many thousandths make one unit?
            (b) How many thousandths make one-tenth?
            (c) How many thousandths make one-hundredth?
            (d) How many tenths make one ten?
            (e) How many hundredths make one ten?

            Create some more questions like these and answer them.

            Notation, Writing, and Reading Numbers
            We have been writing numbers in a specific way, like 4 × 100 (4 hundreds) + 5 × 10 (5 tens) + 6 × 1 (6 ones). For 456, can we similarly omit writing tenths and hundredths?

            Can the quantity 4 2/10 be written as 42 (ignoring the 1/10 in 2 × 1/10)? If yes, how would we know whether 42 means 4 tens and 2 ones or 4 units and 2 tenths?

            Similarly, 705 could mean —
            (a) 7 hundreds, 0 tens, and 5 ones (700 + 0 + 5)
            (b) 7 tens, 0 units, and 5 tenths (70 + 0 + 5/10)
            (c) 7 units, 0 tenths, and 5 hundredths (7 + 0/10 + 5/100)

            Because these are different quantities, we need different methods to write them.

            To identify the place where the fractional part begins between two whole numbers, we use a point ('.') as a separator, which is called the decimal point.

            Then the above quantities are written in decimal notation as follows —`,
            tableData: {
              headers: ["Quantity", "Decimal Notation"],
              rows: [
                ["7 hundreds and 5 ones (700 + 0 + 5)", "705"],
                ["7 tens and 5 tenths (70 + 0 + 5/10)", "70.5"],
                ["7 units and 5 hundredths (7 + 0 + 5/100)", "7.05"]
              ]
            },
            content: `When these numbers are shown through place values, they are as follows —`,
            tableData2: {
              headers: ["Decimal Number", "Hundreds", "Tens", "Ones", "Tenths", "Hundredths"],
              rows: [
                ["705", "7", "0", "5", "", ""],
                ["70.5", "", "7", "0", "5", ""],
                ["7.05", "", "", "7", "0", "5"]
              ]
            },
            exercises: [
              "How can we write 234 tenths in decimal form? 234 tenths = 234/10 = 200/10 + 30/10 + 4/10 = 20 + 3 + 4/10 = 23.4",
              "Write these numbers in decimal form — (a) 234 hundredths (b) 105 tenths"
            ]
          },
          {
            title: "3.5 Units of Measurement",
            subSections: [
              {
                title: "Length Conversion",
                content: `We have been measuring length using a ruler for several years. We also know that 1 cm = 10 mm.

                How many cm are in 1 mm? 1 mm = 1/10 cm = 0.1 cm (i.e., one-tenth of a cm)

                How many cm are in the following? (a) 5 mm (b) 12 mm

                5 mm = 5/10 cm = 0.5 cm
                12 mm = 10 mm + 2 mm = 1 cm + 2/10 cm = 1.2 cm

                How many mm are equal to 5.6 cm? There are 10 mm in 1 cm, so 5.6 cm = (5 cm + 0.6 cm) = 56 mm.

                Fill in the blanks (mm < – > cm) —`,
                tableData: {
                  headers: ["12 mm = 1.2 cm", "56 mm = 5.6 cm", "70 mm = ____________", "____ = 0.9 cm", "134 mm = ____________", "____ = 203.6 cm"]
                },
                content: `The figures below show how small some objects are. Try to find an approximate measurement for each.`,
                list: [
                  "Three blue strips represent symbolic relative measurements for making marks with a pen: fine line, medium line, and thick line.",
                  "The thickness of human hair is about 0.1 mm.",
                  "The thickness of a newspaper can be from 0.05 mm to 0.08 mm.",
                  "Mustard seeds have a thickness of 1-2 mm.",
                  "The total length of the smallest known ant species, Carebara bruni, is 0.8 – 1 mm. These are found in Sri Lanka and China.",
                  "The shell diameter of the smallest land snail species discovered, Acmella nana, is 0.7 mm. These are found in Malaysia."
                ],
                content2: `We also know that 1 m = 100 cm. Based on this, we can say that 1 cm = 1/100 m = 0.01 m.

                (a) 10 cm (b) 15 cm are equal to how many meters?

                10 cm = 10/100 m = 0.1 m. Because each cm is one-hundredth of a meter. So, 15 cm can be written as —

                15 cm = 15/100 m = 10/100 m + 5/100 m = 1/10 m + 5/100 m = 0.15 m

                Fill in the blanks below. (cm < – > m) —`,
                tableData2: {
                  headers: ["36 cm = ______", "50 cm = ______", "____ = 0.89 m", "4 cm = ______", "325 cm = ______", "____ = 2.07 m"]
                },
                content3: `How many mm are there in 1 meter? Can we write 1 mm = 1/1000 m?

                Here are some more interesting facts about small objects in nature.`,
                list2: [
                  "Typically, a hummingbird egg is about 1.3 cm long and 0.9 cm wide.",
                  "The Philippine goby is about 0.9 cm long. It is found in the Philippines and other South Asian countries.",
                  "The smallest known jellyfish, the Irukandji, has a bell size of 0.5 – 2.5 cm. Its tentacles can be up to 1 m long. It is found in Australia. Its venom can be fatal to humans.",
                  "The world's smallest known octopus is the Wolfi octopus, also called the Star-sucker pygmy octopus. Its typical size is about 1–2.5 cm, and it weighs less than 1 gram. They are found in the Pacific Ocean."
                ]
              },
              {
                title: "Weight Conversion",
                content: `Let's look at a kilogram (kg). We know that 1 kg = 1000 g. We can say that 1 g = 1/1000 kg = 0.001 kg.

                How many kilograms are equal to 5 g? 5 g = 5/1000 kg = 0.005 kg.

                How many kilograms are equal to 10 g? 10 g = 10/1000 kg = 1/100 kg = 0.010 kg.

                Because each gram is a thousandth of a kg, 254 grams can be written as —

                254 g = 254/1000 kg = (200/1000 + 50/1000 + 4/1000) kg = (2/10 + 5/100 + 4/1000) kg = 0.254 kg

                Fill in the blanks (g < – > kg) —`,
                tableData: {
                  headers: ["465 g = ______", "68 g = ______", "1560 g = ______", "704 g = ______", "____ = 0.56 kg", "____ = 2.5 kg"]
                },
                content2: `Look at the figure below which shows different quantities of rice. Starting from a pile of 1 gram, successive piles or packets are 10 times heavier than the previous one. The total weight of rice in this picture is 11.111 kg.

                Also, 1 gram (g) = 1000 milligrams (mg). So, 1 mg = 1/1000 g = 0.001 g.`
              },
              {
                title: "Rupees – Paise Conversion",
                content: `You must have heard of 'paise'. 100 paise are equal to 1 rupee. Just as we have coins and notes for rupees, until some time ago, coins were used for paise as well. There were coins for 1 paisa, 10 paise, 20 paise, 25 paise, and 50 paise. Coins of 25 paise and lower denominations were discontinued in 2011. However, we still see paise in bills, account statements, etc.

                1 rupee = 100 paise.
                1 paisa = 1/100 rupee = 0.01 rupee. Because each paisa is one-hundredth of a rupee, therefore:

                75 paise = 75/100 rupee = (70/100 + 5/100) rupee = (7/10 + 5/100) rupee = 0.75 rupee

                Fill in the blanks below (rupees < – > paise) —`,
                tableData: {
                  headers: ["10 paise = ______", "____ = ₹ 0.05", "____ = ₹ 0.36", "_____ = ₹ 0.50", "99 paise = ______", "250 paise = ______"]
                },
                content2: `During the 1970s, a masala dosa cost only 50 paise, a banana could be bought for 20–25 paise, a handful of mint was available for 2–3 paise, and the price of 1 kg of rice was ₹ 2.45.

                Discuss with adults in your school about the prices of various goods and services during their childhood. Try to find old coins and postage stamps.`
              }
            ]
          },
          {
            title: "3.6 Locating and Comparing Decimals",
            content: `Let's consider the decimal number 1.4. It is equal to 1 unit and 4 tenths. This means that the unit between 1 and 2 is divided into 10 equal parts, and four of these parts are taken. So, 1.4 lies between 1 and 2. Draw a number line and divide the unit between 1 and 2 into 10 equal parts. Take the fourth part. This is how we get 1.4 on the number line.

            Write the names of all the divisions between 1 and 1.1 on the number line.

            Identify and write the decimal numbers corresponding to the given letters.`,
            images: [
              "A number line with points marked A, B, C, D, E between 1 and 2 is present.",
              "A number line with points marked A, B, C, D, E between 3.5 and 4 is present."
            ],
            content2: `The Dilemma of Zero!

            Sonu says that 0.2 can also be written as 0.20, 0.200; Zara thinks that putting zeros on the right might change the value of the decimal number. What do you think?

            We can find the answer to this question by looking at the quantities represented by these numbers using place values.`,
            tableData: {
              headers: ["Decimal Number", "Ones", "Tenths", "Hundredths", "Thousandths"],
              rows: [
                ["0.2", "0", "2", "0", "0"],
                ["0.20", "0", "2", "0", "0"],
                ["0.200", "0", "2", "0", "0"],
                ["0.02", "0", "0", "2", "0"],
                ["0.002", "0", "0", "0", "2"]
              ]
            },
            content3: `We can see that 0.2, 0.20, 0.200 are all the same because they represent the same quantity, which is 2 tenths. However, 0.2, 0.02, and 0.002 are different.

            ? Can you tell which of the above numbers is the smallest and which is the largest?

            ? Which of these numbers are equal? 4.5, 4.05, 0.405, 4.50, 4.005, 04.50

            Now look at the number lines given in figure (a). At each level, a specific part of the number line has been enlarged to locate the number 4.185.

            In the final number line of figure (b), identify the decimal number indicated by '?'.

            Draw similar number lines for the following decimal numbers —
            (a) 9.876 (b) 0.407

            In the number line shown below, which decimal numbers do the boxes marked 'a', 'b', and 'c' represent?

            The box marked 'b' corresponds to the decimal number 7.5. Did you notice how this happened? There are 5 units between 5 and 10, which are divided into 10 equal parts. So, every 2 divisions make one unit. Hence, each division is 1/2 unit. What numbers do 'a' and 'c' represent?

            Using similar logic, find the decimal numbers for the boxes given below.

            Which number is greater — 6.456 or 6.465?

            To answer this, we can locate the position of both decimal numbers on a number line and show which number is larger.

            We can also do this by comparing the digits at each corresponding place, as we did with whole numbers.

            This comparison is being shown step-by-step in the method below. Note that the visualization given below is not to scale.

            We start by comparing the most significant digits (with the highest place value) of the two numbers. If these digits are equal, we compare the digits at the next smaller place value. We continue this process until we reach a place where the digits are not equal. At this place, the number with the larger digit will be greater than the other number.

            ? Why can we stop at this point? Can we be sure that whatever digits come after this will not affect our conclusion?

            Which decimal number is larger?
            (a) 1.23 or 1.32 (b) 3.81 or 13.800 (c) 1.009 or 1.090

            Nearest Decimal
            Consider the decimal numbers 0.9, 1.1, 1.01, and 1.11. Identify the decimal number closest to 1.

            Let's compare these decimal numbers. Arranging them in ascending order with 1, we get 0.9 < 1.01 < 1.1 < 1.11. Among the numbers close to 1, 1.01 is 1/100 away from 1, while 0.9 is 10/100 away from 1. Hence, 1.01 is the closest to 1.

            Which of the above numbers is closest to 1.09?

            Which of these numbers is closest to 4 — 3.56, 3.65, 3.099?

            Which of these numbers is closest to 1 — 0.8, 0.69, 1.08?

            In each situation below, try to form the decimal number closest to 25 using the digits 4, 1, 8, 2, and 5 only once.`,
            images: [
              "Figure (a) showing a series of zoomed-in number lines to locate 4.185",
              "Figure (b) showing a final number line with a '?'",
              "A number line with points a, b, c marked between 5 and 10"
            ]
          },
          {
            title: "3.7 Adding and Subtracting Decimals",
            content: `Priya needs 2.7 m of cloth for her skirt, and Shailaja needs 3.5 m of cloth for her kurta. What is the total quantity of cloth required?

            First, we need to find the sum of 2.7 m + 3.5 m.

            Earlier, we saw how to add 2 7/10 + 3 5/10 (also shown below). Can you do this sum using decimal notation as well? It is shown below. Share your estimation.

            2 7/10 + 3 5/10 = 5 12/10 = 6 2/10

            2.7 + 3.5 = 6.2

            So, 6.2 m of cloth is required.

            How much longer is Shailaja's cloth compared to Priya's?

            We need to find the difference between 3.5 m and 2.7 m. Again, observe how the difference of 3 5/10 – 2 7/10 and 3.5 m – 2.7 m is calculated.

            3 5/10 – 2 7/10 = 2 15/10 – 2 7/10 = 0 8/10

            3.5 – 2.7 = 0.8

            As you can see, the standard procedure used for adding and subtracting whole numbers can also be used for adding and subtracting decimals.

            A detailed illustration of the place value involved in the calculation for 75.345 + 86.691 is shown below. Its condensed form is shown right next to it.`,
            detailedCalc: `(7 × 10) + (5 × 1) + (3 × 1/10) + (4 × 1/100) + (5 × 1/1000) + (8 × 10) + (6 × 1) + (6 × 1/10) + (9 × 1/100) + (1 × 1/1000) = (15 × 10) + (12 × 1) + (10 × 1/10) + (13 × 1/100) + (6 × 1/1000) = 162.036`,
            condensedCalc: `75.345 + 86.691 = 162.036`,
            content2: `Write the detailed place value calculation for 84.691 – 77.345 and write its condensed form.`,
            exercises: [
              "1. Find the sum —",
              "(a) 5.3 + 2.6",
              "(b) 18 + 8.8",
              "(c) 2.15 + 5.26",
              "(d) 9.01 + 9.10",
              "(e) 29.19 + 9.91",
              "(f) 0.934 + 0.6",
              "(g) 0.75 + 0.03",
              "(h) 6.236 + 0.487",
              "2. Find the difference —",
              "(a) 5.6 – 2.3",
              "(b) 18 – 8.8",
              "(c) 10.4 – 4.5",
              "(d) 17 – 16.198",
              "(e) 17 – 0.05",
              "(f) 34.505 – 18.1",
              "(g) 9.9 – 9.09",
              "(h) 6.236 – 0.487"
            ]
          },
          {
            title: "Decimal Sequences",
            content: `Look at this sequence of decimal numbers and identify the change after each term —
            4.4, 4.8, 5.2, 5.6, 6.0, …
            We can see that each next term is found by adding 0.4 to the previous term.

            Continuing this sequence, write the next three terms.

            Similarly, identify the change and write the next three terms for each sequence given below. Try to do this calculation mentally.
            (a) 4.4, 4.45, 4.5, …
            (b) 25.75, 26.25, 26.75, …
            (c) 10.56, 10.67, 10.78, …
            (d) 13.5, 16, 18.5, …
            (e) 8.5, 9.4, 10.3, …
            (f) 5, 4.95, 4.90, …
            (g) 12.45, 11.95, 11.45, …
            (h) 36.5, 33, 29.5, …

            Create your own sequences and challenge your classmates to extend the pattern.

            Estimating Sums and Differences
            Sonu has been looking at sums and differences of decimal numbers and says, "If we add two decimal numbers, their sum will always be greater than the sum of their whole number parts. Also, this sum will always be less than the sum of their whole number parts increased by 2."

            Let's use an example to understand this statement. If the numbers to be added are 25.936 and 8.202, his statement means that their sum will be greater than 25 + 8 (the whole number parts) and less than (25+1) + (8+1).

            What do you think about the above statement? Check if it is true for these numbers. Will it be true for any two decimal numbers?

            What can you say about the sum of 25.93603259 and 8.202?

            Thus, develop a method to narrow down the range of whole numbers within which the difference of two decimal numbers will lie.`,
            noteForTeachers: "Estimating the result before calculation can help identify if there has been any error in the calculation."
          },
          {
            title: "3.8 More on the Decimal System",
            subSections: [
              {
                title: "Decimal and Measurement Disasters",
                content: `Decimal point and unit conversion errors can sometimes seem small, but they can lead to serious problems. Here are some real incidents where such errors caused major issues.

                • In 2013, the finance department of the Amsterdam city council (Netherlands) sent €188 million instead of €1.8 million in housing benefits due to a programming error, where the payment was made in euro cents instead of euros. (1 euro cent = 1/100 euro)

                • In 1983, a decimal error nearly caused a disaster for an Air Canada Boeing 767. Personnel incorrectly calculated the fuel load as 22,300 pounds instead of kilograms, about half of what was needed (1 pound ~ 0.453 kg). Mid-air, when the aircraft began to run out of fuel, the pilots had to make an emergency landing at a disused airfield. Fortunately, all passengers survived.

                There have been many incidents due to erroneous reading of decimal numbers while administering medicine. For example, reading 0.05 mg as 0.5 mg could lead to using ten times the prescribed dose of a medicine. Therefore, it is crucial to pay special attention to the units and the place of the decimal point.

                Misleading Decimal Notation
                Sarayu receives a message, "The bus will arrive at the station 4.5 hours after noon." When will she reach the bus station — 4:05 p.m., 4:50 p.m., 4:25 p.m.?

                None of these. Here, 0.5 hours means dividing an hour into 10 equal parts and taking 5 of them. Each part is 6 minutes (60 minutes/10) long. 5 such parts make 30 minutes. So, she will reach the bus station at 4:30 p.m.

                Here is a short story of a decimal mishap. A girl measured the width of an open space as 2 feet 5 inches and asked a carpenter to make a door 2.5 feet wide. The carpenter makes a door 2 feet 6 inches wide (because 1 foot = 12 inches, so 0.5 feet = 6 inches) and it doesn't close properly.

                If you watch cricket matches, you might have noticed numbers that look like decimals, such as 'Overs remaining: 5.5'. What does this mean — 5 overs and 5 balls? Or 5 overs and 3 balls? Here, 5.5 overs means 5 5/6 overs (since 1 over = 6 balls), i.e., 5 overs and 5 balls.

                In what other places might we see such non-decimal notations that look like decimals?

                A Glimpse into History – Decimal Notation Over Time
                Many Indian astronomers and mathematicians have texts containing decimal fractions, i.e., fractions with denominators like 1/10, 1/100, 1/1000, including the important 8th-century work on arithmetic and algebra by Sridharacharya. The modern form of decimal notation was described in detail around 950 CE by the Arab mathematician Abu'l-Hasan al-Uqlidisi in his book "Al-Fusul fi al-Hisab al-Hindi" (Chapters on Indian Arithmetic). He represented the number 0.059375 as 0059375.

                In the fifteenth century, different notations were used to separate the whole number part from the fractional part —
                • A vertical mark above the last digit of the whole number part
                • Use of different colors
                • Use of numerical superscripts to indicate the number of decimal places (0.36 would be written as 36)

                In the sixteenth century, a Scottish mathematician John Napier and a German mathematician Christopher Clavius used a point/period ('.') to separate the whole and fractional parts, while a French mathematician Francois Viete used a comma (',') instead.

                Currently, many countries use a comma to separate the integer and fractional parts. In these countries, 1,000.5 is written as 1000,5 (with a space as a thousands separator). However, in the Indian place value system, the decimal point is recognized as the most popular notation for writing numbers with fractional parts.`
              }
            ]
          },
          {
            title: "Find Out",
            content: `1. Convert the following fractions into decimals —
            (a) 5/10 (b) 16/100 (c) 12/1000 (d) 254/1000

            2. Convert the following decimals into a sum of tenths, hundredths, and thousandths —
            (a) 0.34 (b) 1.02 (c) 0.8 (d) 0.362

            3. In the number line given below, which decimal number does each letter represent?
            (Number line with points A, B, C, D, E marked between 10 and 11)

            4. Using each digit 0 – 9 not more than once, fill in the boxes below in an attempt to get a sum closest to 10.5. (Diagram with addition boxes)

            5. Write the following fractions in decimal form —
            (a) 1/2 (b) 3/2 (c) 1/4 (d) 3/4 (e) 1/5 (f) 4/5`
          },
          {
            title: "Summary",
            content: `• We can divide a unit into smaller parts to get more accurate measurements.

            • We extended the Indian place value system and observed that:
              » 1 unit = 10 tenths
              » 1 tenth = 10 hundredths
              » 1 hundredth = 10 thousandths
              » 10 hundredths = 1 tenth
              » 100 hundredths = 1 unit

            • In the Indian place value system, a decimal point (.) is used to separate the whole number part of a number from its fractional part.

            • We also learned how to compare decimal numbers, how to locate them on a number line, and how to perform addition and subtraction operations on them.`
          }
        ],
        summary: [
          "Smaller units like tenths and hundredths are needed for accurate measurement.",
          "The decimal system extends the place value pattern to numbers less than one.",
          "A decimal point separates the whole number part from the fractional part.",
          "Decimals can be compared by comparing digits at each place value.",
          "Decimals are used in various real-life contexts such as length, weight, and money.",
          "Adding and subtracting decimals is similar to adding and subtracting whole numbers."
        ]
      }
    },
    // Chapter 4 Useful Expressions with Literal Numbers
    {
      id: 4,
      title: "Useful Expressions with Literal Numbers",
      content: {
        introduction: "In this chapter, we will understand a concise way of expressing mathematical relationships and patterns. We will see how this helps us think about and interpret these relationships and why they might be true.",
        sections: [
          {
            title: "4.1 The Idea of Literal Numbers",
            content: `Example 1 — Shabnam is 3 years older than Aftab. When Aftab was 10 years old, Shabnam would have been 13 years old. Now Aftab is 18 years old, how old will Shabnam be?

            If Aftab's age is given, how would you find Shabnam's age? It's simple, we add 3 to Aftab's age to find Shabnam's age.

            Can we write this as an expression? Shabnam's age is 3 years more than Aftab's age. In short, this can be written as —

            Shabnam's age = Aftab's age + 3

            Such mathematical relationships are usually represented in a short form. Instead of writing the phrase 'Aftab's age' in the above relation, it is customary to use a convenient symbol. Usually, letters or short phrases are used for this purpose.

            Let's denote Aftab's age by the letter 'a' (we can use any other letter) and Shabnam's age by the letter 's'. Then the expression to find Shabnam's age will be a + 3, which can be written as — s = a + 3

            If the value of a is 23 (Aftab's age in years), what is Shabnam's age?
            Substituting a with 23 in the expression 'a + 3', we get s = 23 + 3 = 26 years.

            The numbers that are represented using letters like 'a' and 's' are called literal numbers. Mathematical expressions that contain literal numbers, like the expression a + 3, are called algebraic expressions.

            If Shabnam's age is given, write an expression to find Aftab's age.
            We know that Aftab is 3 years younger than Shabnam. So, Aftab's age will be 3 years less than Shabnam's age. This can be written as —
            Aftab's age = Shabnam's age – 3

            Again, if we denote Aftab's age by the letter 'a' and Shabnam's age by the letter 's', then the algebraic expression will be a = s – 3, i.e., 3 less than s.

            If Shabnam's age is 20 years, find Aftab's age using this expression.

            Example 2 — Parthiv is making patterns with matchsticks. He is placing identical L's one after another. Each L uses two matchsticks, as shown in Figure 4.2.

            How many matchsticks are needed to make 5 L's? They will be 5 × 2.
            How many matchsticks are needed to make 7 L's? They will be 7 × 2.
            How many matchsticks are needed to make 45 L's? They will be 45 × 2.

            Now, what is the relationship between the number of L's and the number of matchsticks?
            Let's first describe the relation or pattern here. Each L requires 2 matchsticks. Therefore, the number of matchsticks required will be twice the number of L's. This can be written as —
            Number of matchsticks = 2 × Number of L's

            Now we can use any letter to represent the number of L's. Let's use 'n'. The algebraic expression for the matchsticks will be — 2 × n

            This expression tells how many matchsticks are needed to make L's. To find the number of matchsticks, we substitute n with the number of L's.

            Example 3 — Ketki makes and supplies coconut and jaggery ladoos. The price of one coconut is ₹35 and the price of 1 kilogram (kg) of jaggery is ₹60.

            If she buys 10 coconuts and 5 kg of jaggery, how much money should she pay?
            Cost of 10 coconuts = 10 × 35
            Cost of 5 kg jaggery = 5 × 60
            Total cost = 10 × 35 + 5 × 60 = 350 + 300 = 650

            If she buys 8 coconuts and 9 kg of jaggery, how much money will she have to pay?

            Write an algebraic expression to find the total money to be paid for a given number of coconuts and quantity of jaggery.

            Let's identify the relationships and then write the expression.`,
            tableData: {
              headers: ["Required Quantity", "Relationship", "Expression"],
              rows: [
                ["Cost of coconuts", "Number of coconuts × 35", "c × 35"],
                ["Cost of jaggery", "Number of kg of jaggery × 60", "j × 60"]
              ]
            },
            content: `Here, 'c' represents the number of coconuts and 'j' represents the number of kilograms of jaggery. The total amount to be paid will be —
            Cost of coconuts + Cost of jaggery
            The corresponding algebraic expression can be written as — c × 35 + j × 60

            Use this expression to find the total amount to be paid for 7 coconuts and 4 kg of jaggery.

            Note that for different values of 'c' and 'j', the value of the expression also changes. Writing this expression as a sum of terms, we get — c × 35 + j × 60

            Example 4 — We are familiar with calculating the perimeter of common shapes. Write expressions for perimeters.

            The perimeter of a square is 4 times the length of its side. This can be written as the expression 4 × q, where q represents the length of the side.

            What is the perimeter of a square with a side of 7 cm? Use the expression to find it.

            You must have understood how the use of literal numbers and algebraic expressions helps us express general mathematical relationships concisely. Mathematical relationships expressed in this way are called formulas.`,
            exercises: [
              "1. Write formulas for the perimeter of —",
              "(a) an equilateral triangle",
              "(b) a regular pentagon (as we learned last year, we use the word 'regular' to indicate that all sides are equal and all angles are equal).",
              "(c) a regular hexagon",
              "2. Muniratnam has a pipe 20 m long. He needs a longer water pipe for his garden. He joins another pipe of some length to it. Give an expression for the total length of the pipe. Use the literal number 'k' to denote the length of the other pipe in meters.",
              "3. If Kirtika has the following number of notes of ₹100, ₹20, and ₹5, tell how much total money she has? Complete the given table —",
              "4. Venkatlakshmi has a flour mill. The roller mill takes 10 seconds to start. Once started, it takes 8 seconds to grind each kilogram of grain into flour. Assuming the machine was off initially, which of the following expressions represents the total time taken to completely grind y kilograms of grain?",
              "(a) 10 + 8 + y (b) (10 + 8) × y",
              "(c) 10 × 8 × y (d) 10 + 8 × y",
              "(e) 10 × y + 8",
              "5. Using a letter of your choice, write an algebraic expression for each.",
              "(a) 5 more than a number (b) 4 less than a number",
              "(c) 2 less than 13 times a number (d) 13 less than 2 times a number",
              "6. Describe situations corresponding to the following algebraic expressions —",
              "(a) 8 × x + 3 × y",
              "(b) 15 × j - 2 × k",
              "7. If in a calendar month, a 2 × 3 grid is chosen as shown in the figure, write expressions for the dates in the empty boxes if the date in the middle of the bottom row is 'w'."
            ]
          },
          {
            title: "4.2 Revisiting Arithmetic Expressions",
            content: `We learned to write expressions as sums of terms, which made reading arithmetic expressions easier for us. Sometimes they could be read in many ways, leading to confusion. We used swapping (adding two numbers in any order) and grouping (adding numbers by grouping them in convenient ways) to find the value of expressions in simpler ways. Swapping and grouping terms does not change the value of an expression. We learned to use brackets in expressions, including those with a minus sign outside. We learned the distributive property (a multiple of a sum is equal to the sum of the multiples).

            Let's revisit these concepts and find the values of the following expressions —

            1. 23 - 10 × 2
            2. 83 + 28 - 13 + 32
            3. 34 - 14 + 20
            4. 42 + 15 - (8 - 7)
            5. 68 - (18 + 13)
            6. 7 × 4 + 9 × 6
            7. 20 + 8 × (16 - 6)

            Let's first find the value of the expression 23 – 10 × 2. First, we will write the terms of the expression. Note that among these terms, one term is a number, while the other term needs to be converted into a number before adding the two terms.

            23 – 10 × 2 = 23 + (-10 × 2) = 23 + (-20) = 3

            Now, let's find the value of the second expression. All terms of this expression are numbers. If we pay attention to the terms, we find that swapping the terms or grouping them makes finding the value easier.

            Now, let's look at the fifth expression. It has a bracket with a minus sign outside. We can find its value in two ways. First, by solving the bracket (like on the left side) or by removing the bracket appropriately (like on the right side).

            Now find the values of the other arithmetic expressions.

            When literal numbers in algebraic expressions are replaced with numbers, the values of algebraic expressions are also obtained in the form of numbers. As in Example 1, when Aftab's age was 23 years, to find Shabnam's age, we substituted the literal number 'a' with 23 in the expression a + 3 and got the value 26.`,
            exercises: []
          },
          {
            title: "4.3 Removing the Multiplication Sign in Algebraic Expressions",
            content: `Look at this sequence of numbers —
            4, 8, 12, 16, 20, 24, 28, ...

            How can we describe this sequence or pattern? It's simple — these are the numbers that come in the table of 4 (multiples of 4 in increasing order).

            Which is the third term of this sequence? It is 4 × 3.
            Which is the 29th term of this sequence? It is 4 × 29.

            ? Find the algebraic expression for the nth term of this sequence.

            Note that here 'n' is a literal number representing a position in the sequence.

            4 × n

            Since this is a sequence of multiples of 4, it can be seen that the nth term will be 4 times n — 4 × n

            In standard practice, we omit the multiplication sign and write 4 × n concisely as 4n. We write the number first, followed by the letter.

            If k = 4, find the value of the expression 7k. The value is 7 × 4 = 28.
            When m = 2, find the value of the expression 5m + 3. Here, 5m means 5 × m, so for m = 2, the value of the expression is 5 × 2 + 3 = 13.

            Find the Errors, Correct the Errors
            Below are some simplifications where literal numbers have been replaced with numbers and the value of the expression has been found.

            1. Observe each of these and identify if there is any error.
            2. If you think there is an error, try to explain what the error might be.
            3. Then correct them and find the value of the expression.`,
            images: ["Examples of simplifications with potential errors are shown."]
          },
          {
            title: "4.4 Simplification of Algebraic Expressions",
            content: `Earlier, we obtained expressions for the perimeter of regular shapes in terms of their sides. Now, let's find an expression for the perimeter of a rectangle.

            As before, we will first describe how to find the perimeter when the length and breadth of a rectangle are known.

            Find the sum of: length + breadth + length + breadth.

            Let's use the literal numbers l and b for length and breadth, respectively. So we have —
            p = l + b + l + b

            As we know, these letters represent numbers. Therefore, the terms of any expression can be added in any order. Hence, the above expression can be written as —
            p = l + l + b + b

            Since l + l = 2 × l = 2l and b + b = 2 × b = 2b, therefore —
            p = 2l + 2b

            Notice that the initial expression we got for the perimeter (l + b + l + b) and the final expression (2l + 2b) look different. Yet, they are equivalent, because we applied the same rules and operations to the initial expression that we applied to numbers earlier. They are equivalent in the sense that when the literal numbers are replaced with numbers, both yield the same value.

            For example, if we put l = 3, b = 4, we get —
            l + b + l + b = 3 + 4 + 3 + 4 = 14
            or 2l + 2b = 2 × 3 + 2 × 4 = 14

            We call the expression 2l + 2b the simplified form of l + b + l + b. Let's look at some other examples of simplification.

            Example 5 — The table below shows the number of pencils and erasers sold at a shop over three days. The price of each pencil is c and the price of each eraser is d. Find the total money earned by the shopkeeper on these three days.`,
            tableData: {
              headers: ["", "Day 1", "Day 2", "Day 3"],
              rows: [
                ["Pencils (price 'c')", "5", "3", "10"],
                ["Erasers (price 'd')", "4", "6", "1"]
              ]
            },
            content: `First, let's find the money earned from the sale of pencils.
            The money earned by selling pencils on the first day is 5c. Similarly, the money earned by selling pencils on the second day is _____ and on the third day is _______.

            The total money earned from pencil sales is 5c + 3c + 10c. Can we simplify this expression further and reduce the number of terms?

            The expression means adding 5 times c to 3 times c, and then adding this to 10 times c. So, altogether, the literal number c has been added (5 + 3 + 10) times. This value is the same as what we have seen as the distributive property for numbers. Thus —

            5 × c + 3 × c + 10 × c = (5 + 3 + 10) × c

            (5 + 3 + 10) × c can be simplified to 18 × c = 18c

            If c = ₹50, find the total amount earned from pencil sales.

            Write an expression for the total money earned from eraser sales, then simplify the expression. The expression for the total money earned from pencil and eraser sales over these three days is 18c + 11d.

            Can the expression 18c + 11d be simplified further?

            This expression cannot be simplified further because it contains different literal numbers. It is now in its simplest form.

            In this problem, we saw the expression 5c + 3c + 10c simplify to the expression 18c.

            Check if substituting c with different numbers yields the same value for both expressions.

            Example 6 — A large rectangle is divided into two smaller rectangles as shown below. Write an expression to find the area of the large rectangle.

            The areas of the smaller rectangles are 4v square units and 3v square units. The area of the large rectangle can be found in two ways —
            (i) Using its first side v and the other side (4 + 3), or (ii) by adding the areas of the smaller rectangles.

            The first method gives us 7v, and the second method gives us 4v + 3v. We know that these are both equal — 4v + 3v = 7v, and this is the required expression for the area of the large rectangle.

            As before, a large rectangle is divided into two smaller rectangles as shown below. Write an expression to find the area of rectangle AEFD.

            In this situation, the area of rectangle AEFD can also be found in two ways — (i) by directly using the sides n and (12 – 4), or (ii) by subtracting the area of rectangle EBCF from the area of rectangle ABCD.

            The first method gives us 8n, and the second method gives us 12n – 4n, and these are equal, as 12n – 4n = 8n. This is the expression for the area of rectangle AEFD.

            Terms that have the same literal numbers are called like terms. For example — (5c, c, 10c) and (12n – 4n). Terms that have different literal numbers are called unlike terms, for example — (18c, 11d).

            Example 7 — A shop rents out chairs and tables for one day. To rent them, the following amount must be paid initially for each item.`,
            tableData1: {
              headers: ["Item", "Amount"],
              rows: [
                ["Chair", "₹40"],
                ["Table", "₹75"]
              ]
            },
            content: `When the furniture is returned, the shopkeeper returns some amount as follows.`,
            tableData2: {
              headers: ["Item", "Amount returned"],
              rows: [
                ["Chair", "₹6"],
                ["Table", "₹10"]
              ]
            },
            content: `If x chairs and y tables are rented, write an expression for the total amount paid (initially).

            Let's find the amount paid initially for x chairs and y tables, and the amount received back after returning the furniture.

            Describe the method to obtain these amounts.

            The initial amount paid in rupees is 40x + 75y, and the total amount returned in rupees is 6x + 10y.

            Therefore, the net amount paid = (40x + 75y) – (6x + 10y)

            Can we simplify this expression? If yes, how? If no, why not?

            When we recall the method of removing brackets in an algebraic expression, we get —

            (40x + 75y) – (6x + 10y) = (40x + 75y) – 6x – 10y

            Since terms can be added in any order, and when the remaining bracket is opened, the expression becomes 40x + 75y + (-6x) + (-10y).

            We can group the like terms together. Doing so, we get —

            40x + (-6x) + 75y + (-10y) = (40 - 6)x + (75 - 10)y = 34x + 65y

            The expression (40x + 75y) – (6x + 10y) has been simplified to 34x + 65y, which is the net amount paid in rupees.

            Could we have written the initial expression as (40x + 75y) + (-6x - 10y)?

            Example 8 — Charu reached three stages of a quiz competition. Her scores in the three stages are 7p – 3q, 8p – 4q, and 6p – 2q. Here, p represents the points for a correct answer, and q represents the points deducted as a penalty for a wrong answer.

            What does each expression mean?

            If a correct answer gives 4 points (p = 4) and the penalty for a wrong answer is 1 point (q = 1), find Charu's score in the first stage.

            Charu's score is 7 × 4 – 3 × 1. We can find the value of this expression by writing it as a sum of terms.
            7 × 4 – 3 × 1 = 7 × 4 + (-3 × 1) = 28 + (-3) = 25

            What are her scores in the second and third stages?

            What if there is no penalty for wrong answers? In that case, what would be the value of q? What would be her final score after all three stages? Her final score will be the sum of the scores of the three stages —

            (7p - 3q) + (8p - 4q) + (6p - 2q)

            Since terms can be added in any order, we can remove the brackets and write —
            7p + (-3q) + 8p + (-4q) + 6p + (-2q)
            = 7p + 8p + 6p + (-3q) + (-4q) + (-2q) (by swapping and grouping terms)
            = (7 + 8 + 6)p + [-(3 + 4 + 2)]q
            = 21p + (-9q)
            = 21p - 9q

            Charu's total score after three stages is 21p – 9q. Her friend Krithika's score after three stages is 23p – 7q.

            ? Suggest some possible scores for Krithika in the three stages such that their sum is 23p – 7q.

            Can we tell who scored more and why?
            How many more points did Krithika score than Charu can be found by finding the difference between their scores.
            23p – 7q – (21p – 9q)

            Simplify this expression.

            Example 9 — Simplify the expression 4(x + y) – y.
            This expression can be simplified using the distributive property.
            4(x + y) – y = 4x + 4y – y = 4x + 4y + (-y) = 4x + (4 - 1)y = 4x + 3y

            Example 10 — Are the expressions 5u and 5 + u the same?

            The expression 5u means 5 times the number u, and the expression 5 + u means 5 more than the number u. Since these are different operations, they should give different values for most values of u.

            Let's check this.

            Fill in the blanks below by substituting the literal numbers with numbers, an example is shown. Then compare the values of 5u and 5 + u.`,
            tableData: {
              headers: ["u", "5u", "5 + u"],
              rows: [
                ["1", "5", "6"],
                ["2", "", ""],
                ["3", "", ""],
                ["10", "", ""]
              ]
            },
            content: `If the expressions 5u and 5 + u were equivalent, they should give the same value for any given value of u. But we can see that they do not give the same value. Therefore, these two expressions are not equivalent.

            Are the expressions 10y – 3 and 10(y – 3) equivalent?
            10y – 3, in simple form, means 10 × y – 3, i.e., 3 less than 10 times y.
            10(y – 3), in simple form, means 10 × (y – 3), i.e., 10 times (y minus 3).
            Let's compare the values of these expressions for different values of y.`,
            tableData2: {
              headers: ["y", "10y – 3", "10(y – 3)"],
              rows: [
                ["1", "", ""],
                ["2", "", ""],
                ["3", "", ""],
                ["10", "", ""]
              ]
            },
            content: `Do you think the two expressions are equivalent after filling in the blanks in both tables?

            Example 11 — What is the sum of the numbers in the given figure? (Unknown values are represented by literal numbers.) There are many methods. Some of them are as follows.

            1. Adding row-wise gives — (4 × 3) + (r + s) + (r + s) + (4 × 3)
            2. Adding like terms together gives — (8 × 3) + (r + r) + (s + s)
            3. Adding the top half and doubling it gives — 2 × (4 × 3 + r + s)

            The three expressions may look different. We can simplify each expression. We see that they are all equal — 2r + 2s + 24`,
            images: ["A grid with numbers 3 in corners and r, s in the middle cells."],
            exercises: [
              "1. Find the sum of the numbers in each figure given below. Write the corresponding expressions and simplify them. Try to find the sum of numbers in each figure in at least three different ways and see if you get the same value.",
              "2. Express each of the given expressions in simplified form —",
              "(c) p – q + p – q",
              "(d) p + q – p + q",
              "(e) p + q – (p + q)",
              "(f) p – q – p – q",
              "(g) 2d – d – d – d",
              "(h) 2d – d – d – c",
              "(i) 2d – d – (d – c)",
              "(j) 2d – (d – d) – c",
              "(k) 2d – d – c – c"
            ]
          },
          {
            title: "Find the Errors, Correct the Errors",
            content: `Below, some algebraic expressions have been simplified. The expressions on the right should be in their simplest form.

            • Observe each expression and see if there is any error.
            • If you think there is an error, try to explain what the error might be.
            • Then simplify it correctly.`,
            tableData: {
              headers: ["Expression", "Simplest form (given)", "Correct simplest form"],
              rows: [
                ["1. 3a + 2b", "5", ""],
                ["2. 3b – 2b – b", "0", ""],
                ["3. 6(p + 2)", "6p + 8", ""],
                ["4. (4x + 3y) – (3x + 4y)", "x + y", ""],
                ["5. 5 – (2 – 6z)", "3 – 6z", ""],
                ["6. 2 + (x + 3)", "2x – 6", ""],
                ["7. 2y + (3y – 6)", "-y + 6", ""],
                ["8. 7p – p + 5q – 2q", "7p + 3q", ""],
                ["9. 5(2w + 3x + 4w)", "10w + 15x + 20w", ""],
                ["10. 3j + 6k + 9h + 12", "3(j + 2k + 3h + 4)", ""],
                ["11. 4(2r + 3s + 5) – 20", "8r + 12s", ""]
              ]
            },
            content: `? Look at all the correct simplified forms (like brackets removed, like terms added, and constant terms added). Is there any relationship between the number of terms in these expressions and the number of literal numbers?`
          },
          {
            title: "4.5 Identify Patterns and State Relationships",
            content: `In the first part, we got a glimpse of how algebraic expressions can be used to explain general patterns and relationships concisely and elegantly. Now, we continue to find general relationships between quantities in different situations, find patterns, and even explain why these patterns occur.

            Remember two things. First, the importance of describing them in common language. Second, remember to visualize the mathematical relationships before trying to write them as expressions.

            Find the Formula
            Look at the given figure. Each time, the number machine 'Y' takes 2 numbers as input at the top, performs some operations, and gives the result at the bottom. Each time, the machine performs the same operations on its inputs.

            Find the formula for this number machine.

            The formula for the number machine above is 'subtract the second number from twice the first number'. When written as an algebraic expression, the formula is 2a – b. For the first set of inputs, the expression is 2 × 5 – 2 = 8. Check if this formula is correct for each set of inputs.

            ? Find the formulas for the number machines given below and write the expression for each set of inputs.

            ? Now create a formula of your own. Write some number machines as examples using that formula. Challenge your classmates to find it.`,
            noteForTeachers: "Not just solving problems, but also creating new problems is a part of learning mathematics.",
            images: ["A diagram of a number machine with inputs and outputs.", "Several other number machine diagrams with missing inputs or outputs."],
            content2: `Describing Patterns Using Algebraic Expressions

            Example 12 — Somjeet observed a repeating pattern on the border of a saree.

            Somjeet wonders if there is a way to describe all the positions where (i) Design A, (ii) Design B, and (iii) Design C are present.

            Let's start with Design C. It appears first at the third position, then for the second time at the sixth position.

            Where will Design C appear for the nth time?
            We can see that this design appears at positions that are multiples of 3. Therefore, for the nth time, Design C will be present at position 3n.

            Similarly, find formulas for the positions of the other designs for the nth time.
            The positions where B is present are — 2, 5, 8, 11, 14, and so on in sequence.
            We can see that the position of Design B for the nth time is one less than the position of Design C for the nth time. Thus, the position of Design B for the nth time is — 3n – 1

            Similarly, the expression for the position of Design A for the nth time is 3n – 2.

            For a given position number, can we tell which design will be present there? Which design will be present at position 122?

            As seen earlier, if the position number is a multiple of 3, then clearly Design C will be there. If the position number is one less than a multiple of 3, then Design B is there, and if it is two less than a multiple of 3, then Design A is present.

            Can the remainder obtained by dividing the position number by 3 be used for this? Observe the table below carefully.`,
            tableData: {
              headers: ["Position Number", "Quotient when divided by 3", "Remainder"],
              rows: [
                ["99", "33", "0"],
                ["122", "40", "2"],
                ["148", "49", "1"]
              ]
            },
            content3: `? Use this table to find the design present at positions 99, 122, and 148.`,
            images: ["A repeating pattern of three designs A, B, C on a border."]
          },
          {
            title: "Patterns in a Calendar",
            content: `Here is the calendar for November 2024. Take a 2 × 2 square as marked in the calendar. The numbers in this square show an interesting property.`,
            tableData: {
              headers: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
              rows: [
                ["", "", "", "", "", "1", "2"],
                ["3", "4", "5", "6", "7", "8", "9"],
                ["10", "11", "12", "13", "14", "15", "16"],
                ["17", "18", "19", "20", "21", "22", "23"],
                ["24", "25", "26", "27", "28", "29", "30"]
              ]
            },
            content: `Let's take the marked 2 × 2 square and take the numbers on the diagonals: 12 and 20; 13 and 19. Find their sums; 12 + 20, 13 + 19. What do you observe? They are equal.

            They are equal.

            Let's extend the calendar numbers beyond 30 to create extended rows.`,
            tableData2: {
              headers: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
              rows: [
                ["", "", "", "", "", "1", "2"],
                ["3", "4", "5", "6", "7", "8", "9"],
                ["10", "11", "12", "13", "14", "15", "16"],
                ["17", "18", "19", "20", "21", "22", "23"],
                ["24", "25", "26", "27", "28", "29", "30"],
                ["31", "32", "33", "34", "35", "36", "37"],
                ["38", "39", "40", "41", "42", "43", "44"]
              ]
            },
            content2: `Will the sums of diagonal numbers be equal for every 2 × 2 square in this extended grid? How can we be sure?

            To be sure, we cannot check all 2 × 2 squares, as there are an infinite number of squares.

            Let's consider a 2 × 2 square. Its top-left number could be any number. Let's call it 'a'.

            If we know the top-left number, how will we find the other numbers in this 2 × 2 square?

            Let's first describe the other numbers in words, as we have been doing —

            • The number to the right of 'a' will be 1 more than it.
            • The number below 'a' will be 7 more than it.
            • The number diagonally opposite 'a' will be 8 more than it.`,
            tableData3: {
              headers: ["a", "a + 1"],
              rows: [
                ["a + 7", "a + 8"]
              ]
            },
            content3: `Thus, the other numbers in the 2 × 2 square can be represented as shown in the grid. Now, let's find the sums of the diagonal numbers; a + (a + 8) and (a + 1) + (a + 7)

            Now, let's simplify these.
            Since terms can be added in any order, the brackets can be removed.
            a + (a + 8) = a + a + 8 = 2a + 8
            (a + 1) + (a + 7) = a + 1 + a + 7 = a + a + 1 + 7 = 2a + 8

            We see that the sums of both diagonals are equal, which is 2a + 8 (8 more than twice a).

            ? Take any 2 × 2 square and, taking its top-left number as 'a', verify this expression for the sum of diagonal numbers.

            Thus, we have demonstrated that for any value of 'a', i.e., for any 2 × 2 square, the sums of the diagonal numbers are equal.

            This problem is an example that shows the power of algebraic modeling in checking whether a pattern will hold consistently.

            From the calendar with infinite rows, consider a group of numbers in the shape shown below.`,
            tableData4: {
              rows: [
                ["", "8", "", ""],
                ["14", "15", "16", ""],
                ["", "22", "", ""]
              ]
            },
            content4: `? Find the sum of all the numbers. Compare it with the middle number 15. Repeat this for another group of numbers in this shape. What do you observe?

            We observe that the total sum is always 5 times the middle number.

            ? Will this always be true? How would you show it?

            (Hint — Consider a general group of numbers in this shape. Take the middle number as 'a'. Express the other numbers in terms of 'a'.)

            Find other shapes for which the sum of the numbers inside the shape is always a multiple of one of them.`,
            images: ["A shape (like a plus sign or cross) marked on a calendar grid."]
          },
          {
            title: "Patterns with Matchsticks",
            content: `Look at the figures given below. This is a pattern made with matchsticks. Can you identify the pattern?`,
            images: ["Three steps of a pattern using matchsticks to form triangles."],
            content2: `We can see that step 1 has 1 triangle, step 2 has 2 triangles, step 3 has 3 triangles, and so on.

            Can you tell how many matchsticks will be in the next step (step 5)? It will be 11. You can also draw the diagram and see.

            ? How many matchsticks will be in step 33, step 84, and step 108? Surely, we could draw and count, but is there a quicker way to answer using the existing pattern?

            What is the general rule for finding the number of matchsticks in the next step? We can see that to get the next step from the previous one, 2 matchsticks are added, i.e., the number of matchsticks increases by 2 each time.`,
            tableData: {
              headers: ["Step Number", "1", "2", "3", "4", "5", "6"],
              rows: [
                ["Number of matchsticks", "3", "5", "7", "9", "11", "13"]
              ]
            },
            content3: `Using this, consider a method to find the number of matchsticks in step 33 (without writing all the consecutive numbers).

            Since 2 matchsticks are added each time, how many times will 2 be added for step 33? Look at the table below and try to find out.`,
            tableData2: {
              headers: ["Step Number", "1", "2", "3", "4", "5", "6"],
              rows: [
                ["Number of matchsticks", "3", "5", "7", "9", "11", "13"],
                ["Expressed as", "3", "3 + 2", "3 + 2 + 2", "3 + 2 + 2 + 2", "3 + 2 + 2 + 2 + 2", ""]
              ]
            },
            content4: `The number of matchsticks required to make 33 triangles (step number 33) is 3 + 2 × 32. Similarly, find the number of matchsticks required for step number 84 and step number 108.`
          },
          {
            title: "Summary",
            content: `• Algebraic expressions are used to model patterns between quantities and to form mathematical relationships and formulas for making predictions.

            • Algebraic expressions use not only numbers but also literal numbers. The rules for solving arithmetic expressions also apply to algebraic expressions. These rules can be used to transform algebraic expressions into their simplest forms.

            • Algebraic expressions can be described in common language, and situations given in common language can be translated into algebraic expressions. Patterns or relationships that are easily written using algebra can often be long and complex in common language. This is an advantage of algebra.`
          }
        ],
        summary: [
          "Literal numbers (letters) are used to represent unknown or general numbers.",
          "Algebraic expressions are formed using numbers, literal numbers, and operations.",
          "Formulas are general mathematical relationships expressed using algebraic expressions.",
          "Like terms (with same literal factors) can be combined by adding their coefficients.",
          "Unlike terms cannot be combined.",
          "Algebra is a powerful tool for describing patterns and relationships concisely."
        ]
      }
    },
      // chapter 5 Lines and Angles
    {
      id: 5,
      title: "Lines and Angles",
      content: {
        introduction: "In this chapter, we will explore the relationships between lines on a flat surface. We will learn about intersecting lines, perpendicular lines, parallel lines, and the angles formed when a transversal cuts parallel lines.",
        sections: [
          {
            title: "5.1 Across the Line",
            content: `Take a square piece of paper, fold it in different ways, and then unfold it. Now, using a ruler and pencil, draw lines along the creases made on the paper. You will see various lines on the paper. Take any pair of lines and observe their relationship with each other. Do they meet each other? Do you think that lines which do not meet inside the paper would meet if extended outside the paper?

            In this chapter, we will explore the relationships between lines on a flat surface. The top of a table, your piece of paper, a blackboard, and a bulletin board are all examples of flat surfaces. Let's look at a pair of lines that meet each other. You will notice that they meet at a point. On a flat surface, when a pair of lines meets at a point, it means that the lines intersect each other. Let's see what happens when two lines intersect each other.

            ? How many angles do these intersecting lines form?
            In Figure 5.2, we can see that where line l intersects line m, four angles are formed.

            Can two straight lines intersect at more than one point?`,
            images: ["Figure 5.1", "Figure 5.2"]
          },
          {
            title: "Activity 1",
            content: `Draw two lines on a flat sheet of paper such that they intersect each other. Measure all four angles formed with the help of a protractor. Make four such pairs of intersecting lines and measure the angles formed at the intersection points.

            What pattern do you see among these angles?

            ? In Figure 5.2, if the measure of ∠a is 120°, can you find the measures of ∠b, ∠c, and ∠d without drawing and measuring them?

            We know that the total measure of ∠a and ∠b is 180°, because when they come together, they form a straight angle whose measure is 180°. Therefore, if the measure of ∠a is 120°, then the measure of ∠b must be 60°.

            Similarly, the total measure of ∠b and ∠c is 180°, so if ∠b is 60°, then ∠c must be 120°. And the total measure of ∠c and ∠d is 180°, so if ∠c is 120°, then ∠d must be 60°.

            Thus, in Figure 5.2, the measures of ∠a and ∠c are 120°, and the measures of ∠b and ∠d are 60°.

            Hence, when two lines intersect each other and form four angles a, b, c, and d, as shown in Figure 5.2, then ∠a and ∠c will be equal, and ∠b and ∠d will be equal.

            Is this fact always true for every pair of intersecting lines?

            Check this for different measures of ∠a. Can you explain why this property will hold true for any measure of ∠a using these measurements?

            Without guessing the values of ∠a in Figure 5.2, we can generalize our reasoning. We know that the measure of a straight angle is 180°. Therefore, ∠a + ∠b = ∠a + ∠d = 180°. Thus, ∠b and ∠d will always be equal. Similarly, ∠b + ∠a = ∠b + ∠c = 180°. Therefore, ∠a and ∠c must be equal.

            Adjacent angles formed when two lines intersect each other are called linear pairs, such as ∠a and ∠b. The sum of the angles in a linear pair is always 180°.`,
            examples: [],
            exercises: []
          },
          {
            title: "Vertically Opposite Angles",
            content: `The opposite angles formed when two lines intersect each other are called vertically opposite angles, such as ∠b and ∠d. Vertically opposite angles are always equal to each other.

            From the above reasoning, we conclude that whenever two lines intersect, the vertically opposite angles are equal. Such reasoning in mathematics is called a proof.

            ? In Figure 5.3, list all the linear pairs and vertically opposite angles you see.

            Measurement and Geometry

            You might have noticed that when you measure linear pairs, sometimes their sum is not 180°, or when you measure vertically opposite angles, sometimes they may be unequal. What are the reasons for this? There could be various reasons—

            • Measurement errors due to improper use of measuring instruments like a protractor.
            • Differences in the thickness of the drawn lines. In geometry, an 'ideal' line has no thickness, but it is impossible for us to draw lines without thickness.

            In geometry, we create ideal representations of lines and other shapes we see around us and analyze the relationships between them. For example, we know that the angle formed by a straight line is 180°. Therefore, if another line divides this angle into two parts, the sum of the two parts must be 180°. We have reached this point through reasoning alone, not by measurement. When we measure with an instrument, these measurements may not be as accurate as our prediction due to the reasons mentioned above, but they are very close to our prediction. This is why geometry has wide applications in various fields, such as physics, art, engineering, and architecture.`,
            images: ["Figure 5.3"]
          },
          {
            title: "5.2 Perpendicular Lines",
            content: `Can you create a pair of intersecting lines such that all four angles are equal? Can you find out what the measure of each angle would be?

            If two lines intersect and all four angles are equal, then each angle must be a right angle (90°).

            Perpendicular lines are a pair of lines that intersect each other at a right angle (90°). In Figure 5.4, we can say that lines l and m are perpendicular to each other.`,
            images: ["Figure 5.4"]
          },
          {
            title: "5.3 Between the Lines",
            content: `Observe Figure 5.5 and describe the way the line segments meet or cross each other in each situation using appropriate mathematical terms (a point, an endpoint, a midpoint, a junction—where two lines meet, intersect) along with the degree measure of each angle.

            For example, line segments FG and FH meet at endpoint F at an angle of 115°.

            If line segments ST and UV are extended, is it possible for these lines to meet? If line segments OP and QR are extended, is it possible for these lines to meet? Here are some examples of lines we see around us—

            What is common in the lines in the figures above? They do not seem likely to intersect each other. Such lines are called parallel lines.

            A pair of lines that lie on the same plane and never meet each other, no matter how far we extend them on both ends, are called parallel lines.

            Name some parallel lines you can see in your classroom.

            Parallel lines are often used in artworks and shading.

            ? Which pairs of lines in Figure 5.6 appear to be parallel?

            Note for Teachers — It is important that the lines lie on the same plane. A line drawn on a table and a line drawn on a board may never meet, but that does not make them parallel.`,
            images: ["Figure 5.5", "Examples of parallel lines around us", "Figure 5.6"]
          },
          {
            title: "5.4 Parallel and Perpendicular Lines in Paper Folding",
            content: `Take a flat square piece of paper (use a newspaper for this activity).

            • How would you describe the opposite edges of the paper? They are ______ to each other.
            • How would you describe the adjacent edges of the paper? Adjacent edges are ______ to each other. They meet at a point. They form a right angle.
            • Fold the paper horizontally in half. This creates a new line (see Figure 5.7).
            • How many parallel lines do you see now? How is the new line segment related to the vertical sides?
            • Make another horizontal fold in the folded paper. How many parallel lines do you see now?
            • What happens if you do this once more? How many parallel lines will you get? Is there a pattern here? If you make another horizontal fold, check if this pattern continues.
            • Make a vertical fold in the square paper. This new vertical line is ______ to the previously made horizontal lines.
            • Fold the sheet along the diagonal. Can you find a fold that creates a line parallel to the diagonal line?`,
            images: ["Figure 5.7"]
          },
          {
            title: "Another Activity",
            content: `Here is another activity for you to practice.

            • Take a square piece of paper, fold it in half, and unfold it.
            • Fold the edges towards the center line and unfold those folds.
            • Fold the top right corner and the bottom left corner onto the fold line in such a way that triangles are formed. See Figure 5.8.
            • These triangular folds should not cross the fold line.
            • Are a, b, and c parallel to p, q, and r respectively? If yes, why? If not, why not?

            Notation

            In mathematics, we use arrow marks (>) to show parallel lines. If there is more than one set of parallel lines (as in Figure 5.9), the second set is shown with two arrow marks, and so on. Perpendicular lines are marked with a square angle between them.`,
            images: ["Figure 5.8", "Figure 5.9"]
          },
          {
            title: "Find Out",
            content: `1. In Figure 5.10, draw some lines perpendicular to the given lines on the dotted paper.

            2. In Figure 5.11, use the notations given above (single arrow mark, double arrow mark, etc.) to mark the parallel lines. Mark the angle between perpendicular lines with the square symbol.
            (a) How did you identify the perpendicular lines?
            (b) How did you identify the parallel lines?

            3. On the dotted paper given below, draw different sets of parallel lines. The line segments can be of different lengths, but their endpoints must be on the dots.

            4. Using your understanding, describe what parallel lines look like and try to draw lines parallel to the given line segments on this dotted paper.

            (a) Did you find drawing some of these lines challenging? (b) Which lines were challenging to draw? (c) How did you do it?

            5. In Figure 5.13, which line is parallel to line a — line b or line c? How did you ensure this?

            Note for Teachers — On rectangular dotted paper, it is easy to draw vertical, horizontal, and lines at 45°, but drawing a line parallel to a line with a different orientation is a bit difficult. Let students use their intuition for this.

            From the previous exercises, we saw that sometimes it is difficult for us to ensure whether two lines are parallel or not. To ensure this, we use the concept of transversals.`,
            images: ["Figure 5.10", "Figure 5.11", "Figure 5.12", "Figure 5.13"]
          },
          {
            title: "5.5 Transversal Lines",
            content: `Here we see what happens when two lines intersect in different ways. Let's find out what happens when one line intersects two different lines.

            In Figure 5.14, line t intersects lines l and m. Here, t is a transversal line (a line that intersects two lines is called a transversal). Note that when a line crosses a set of two lines, 8 angles are formed.

            ? Is it possible that all 8 angles have different measures? If yes, why? If not, why not?

            ? What are your thoughts on the 5 different angles 6, 5, 4, 3, and 2?

            In Figure 5.14, because ∠1 and ∠3 are vertically opposite angles, they are equal in measure. Are there other pairs of vertically opposite angles? We can see that there are 4 pairs of vertically opposite angles, and in each pair, the angles are equal to each other.

            Thus, when two lines are intersected by a transversal, 8 angles are formed, which can have at most 4 different measures.`,
            images: ["Figure 5.14"]
          },
          {
            title: "5.6 Corresponding Angles",
            content: `In Figure 5.14, we see that the transversal t forms two groups of angles — one with line l and the other with line m. Based on their position, the angles in the first group correspond to angles in the second group. ∠1 and ∠5 are called corresponding angles. Similarly, ∠2 and ∠6, ∠3 and ∠7, ∠4 and ∠8 are corresponding angles formed when transversal t intersects lines l and m.`,
            examples: []
          },
          {
            title: "Activity 3",
            content: `Draw a pair of lines and a transversal such that they form two different angles.

            Step 1 — Draw line l and a transversal t intersecting line l at point X.

            Step 2 — Measure ∠a formed by lines l and t. (Let's assume it is 60°.)

            How many different angles are formed now?
            If one angle is 60°, the other angle in the linear pair must be 120°. So we have two different angles.

            Now we want to draw another line intersecting transversal t such that it also forms only 60° and 120°.

            Step 3 — Mark a point Y on line t.

            Step 4 — Draw a line m passing through point Y that makes a 60° angle with line t. We can do this either by copying ∠a using tracing paper or by measuring the angles with a protractor.

            What did you observe about lines l and m? Do they appear parallel to each other? Yes, they certainly appear parallel to each other.

            Angles ∠a and ∠b, formed on lines l and m by transversal t, are corresponding angles. These corresponding angles are equal to each other.

            From this, we can see that —

            When a transversal makes a pair of corresponding angles equal on a pair of lines, then the lines of that pair are parallel to each other.

            Suppose a transversal intersects two parallel lines, what can be said about the corresponding angles?`,
            images: ["Step diagrams for Activity 3"]
          },
          {
            title: "Activity 4",
            content: `In Figure 5.19, lines l and m are parallel (what notation is used in the figure to mark parallel lines?). Line t is a transversal to these two lines. ∠a and ∠b are corresponding angles. Take a tracing paper, trace ∠a onto it. Now place this tracing paper over ∠b and see if the angles coincide exactly. You will see that the angles are equal. Check the other corresponding angles in the figure with the help of a protractor. Are all corresponding angles equal to each other?

            Corresponding angles formed when a transversal intersects a pair of parallel lines are always equal to each other.`,
            images: ["Figure 5.19"]
          },
          {
            title: "Activity 5",
            content: `In Figure 5.20, draw a transversal for lines l and m such that a pair of corresponding angles are equal. You can measure the angles with a protractor.

            Are you finding it difficult to draw a transversal that makes the corresponding angles equal?

            When the lines in a pair are not parallel to each other, the corresponding angles formed by a transversal can never be equal to each other.`,
            images: ["Figure 5.20"]
          },
          {
            title: "5.7 Drawing Parallel Lines",
            content: `Can you draw a pair of parallel lines using a ruler and a set square?

            Figure 5.21 shows how you can do this.

            Draw a line l using a ruler. By sliding your set square, you can draw two lines perpendicular to line l.

            Are these two lines parallel to each other? How did we ensure that they are parallel to each other? What angles are formed between these lines and line l?

            Because we used the set square, the measure of the angles is 90°. The positions of the lines are different, but they make the same angle with l. If line l is seen as a transversal to the two new lines, then the measure of the corresponding angles is 90°.

            As we know that these are corresponding angles and are equal, we can be sure that these lines are parallel.

            As shown in Figure 5.22, draw two more parallel lines using the longer side of the set square.

            How did you know that these two lines are parallel? Can you check if the corresponding angles are equal or not?

            Note for Teachers — Students should be encouraged to use the tracing method and protractor to check the equality of corresponding angles. Pay attention to the language used to establish the relationship between corresponding angles and parallel lines. The equality of corresponding angles is both necessary and sufficient for a pair of lines to be parallel to each other.

            Can you draw a line parallel to line l that passes through point A? How will you do it using the tools in your geometry box? Describe your method.`,
            images: ["Figure 5.21", "Figure 5.22", "Figure 5.23"]
          },
          {
            title: "Creating Parallel Lines by Folding Paper",
            content: `Let's try to create parallel lines by folding paper. How can we draw a line parallel to a given line l (given as a fold) that passes through point A?

            We know how to get a line perpendicular to line l by folding a piece of paper. Now, try to fold the paper for this perpendicular line to l in such a way that it passes through point A. Let's call the line from this new fold t.

            Now, fold the paper for a line perpendicular to t that again passes through point A. Let's call this line m. Lines l and m are parallel to each other.

            Why are lines l and m parallel to each other?`,
            images: ["Figure 5.24"]
          },
          {
            title: "5.8 Alternate Angles",
            content: `In Figure 5.25, ∠d is called the alternate angle to ∠f, and ∠c is called the alternate angle to ∠e.

            You can find the alternate angle to a given angle. Suppose we want to find the alternate angle to ∠f. First, we find the corresponding angle to ∠f, which is ∠b, and then find the vertically opposite angle to ∠b, which is ∠d.

            In Figure 5.25, if the measure of ∠f is 120°, what is the measure of its alternate angle ∠d? If we know the measure of ∠b, can we find the measure of ∠d? Because these two are vertically opposite angles. Remember that vertically opposite angles are always equal.

            What is the measure of ∠b? Its measure is 120°, because it is the corresponding angle to ∠f.

            Therefore, the measure of ∠d will also be 120°.

            In fact, ∠f = ∠b, whatever the measure of ∠f. Why? Because ∠b is the corresponding angle to ∠f. Similarly, ∠b = ∠d, whatever the measure of ∠b. Why? Because ∠d is the vertically opposite angle to ∠b. Therefore, this situation will always be the same—

            From our understanding of corresponding angles, we have proven without any measurement that alternate angles are always equal.

            Alternate angles formed when a transversal intersects a pair of parallel lines are always equal to each other.

            Example 1 — In Figure 5.26, parallel lines l and m are intersected by transversal t. If the measure of ∠6 is 135°, what will be the measures of the other angles?

            Solution — If the measure of ∠6 is 135°, then the measure of ∠2 will also be 135° because it is the corresponding angle to ∠6, and lines l and m are parallel.

            ∠8 measures 135° because it is the vertically opposite angle to ∠6. ∠4 measures 135° because it is the corresponding angle to ∠8.

            ∠2 measures 135° because it is the vertically opposite angle to ∠4.

            Thus, ∠2, ∠4, ∠6, and ∠8 all measure 135°.

            ∠5 and ∠6 form a linear pair, meaning their measures add up to 180°. If ∠6 measures 135°, then ∠5 = 180° − 135° = 45°.

            Similarly, we can find that the measures of ∠1, ∠3, and ∠7 are 45°.

            Example 2 — In Figure 5.27, lines l and m are intersected by transversal t. If ∠a measures 120° and ∠f measures 70°, are lines l and m parallel to each other?

            Solution — ∠a measures 120°, so ∠b will measure 60°, because ∠a and ∠b form a linear pair.

            ∠b is the corresponding angle to ∠f. If l and m were parallel, then ∠b should be equal to ∠f, but they are not equal.

            Therefore, lines l and m are not parallel to each other, because the corresponding angles formed by transversal t are not equal.

            Example 3 — In Figure 5.28, transversal t intersects parallel lines l and m. If the measure of ∠3 is 50°, what will be the measure of ∠6?

            Solution — ∠3 measures 50°, so ∠2 will measure 130°, because ∠2 and ∠3 form a linear pair, and the sum of angles in a linear pair is always 180°. ∠2 and ∠6 are corresponding angles and should be equal because lines l and m are parallel. Therefore, ∠6 measures 130°.

            Angles ∠3 and ∠6 are called interior angles on the same side of the transversal. Is there a relationship between angles ∠3 and ∠6? You can try to find this relationship by taking different measures for ∠3 and observing the measure of ∠6. Once you find this relationship, try to verify it and prove that it is always true. You will find that the sum of the interior angles on the same side of the transversal is always 180°.

            Example 4 — In Figure 5.29, line segment AB is parallel to line segment CD, and line segment AD is parallel to line segment BC. ∠ADC measures 60°. What are the measures of ∠CAB, ∠ABC, and ∠BCD?

            Solution — Let's look at parallel lines AB and CD. AD is a transversal to these two lines.

            We know that when a transversal intersects a pair of parallel lines, the sum of the interior angles on the same side of the transversal is 180°.

            Therefore, ∠ADC + ∠DAB = 180°
            Or 60° + ∠DAB = 180°
            Thus, ∠DAB = 120°

            Can we find ∠CAB from this?
            ∠DAB = ∠DAC + ∠CAB
            Thus, 120° = 65° + ∠CAB
            Therefore, ∠CAB = 55°

            Now let's look at parallel line segments AD and BC. Transversal CD intersects these two. Therefore, ∠ADC + ∠BCD = 180°, because these are interior angles on the same side of the transversal. Since ∠ADC is given as 60°, ∠BCD = 120°. Similarly, we get ∠ABC = 60°.

            Thus, in Figure 5.29, ∠CAB = 55°, ∠ABC = 60°, and ∠BCD = 120°.`,
            images: ["Figure 5.25", "Figure 5.26", "Figure 5.27", "Figure 5.28", "Figure 5.29"]
          },
          {
            title: "Find Out",
            content: `1. Find the marked angles in the figures given below—

            2. In the figures given below, find the value of the angles indicated by the mark 'a'—

            3. In the figures given below, what are the values of angles x and y?

            4. In Figure 5.33, ∠ABC = 45° and ∠IKJ = 78°. Find ∠GEH, ∠HEF, and ∠FED.

            5. In Figure 5.34, AB is parallel to CD, and CD is parallel to EF. Also, EA is perpendicular to AB. If ∠BEF = 55°, find the values of x and y.

            6. In Figure 5.35, what is the measure of angle ∠NOP?

            (Hint — Draw lines through points N and O parallel to LM and PQ.)`,
            images: ["Figure 5.30", "Figure 5.31", "Figure 5.32", "Figure 5.33", "Figure 5.34", "Figure 5.35"]
          },
          {
            title: "5.9 Parallel Illusions",
            content: `It seems there are no parallel lines here. Or are there?

            What are the reasons for these illusions?`,
            images: ["Optical illusion images related to parallel lines"]
          }
        ],
        summary: [
          "When two lines intersect, four angles are formed. Vertically opposite angles are equal, and the sum of angles in a linear pair is 180°.",
          "When two lines intersect and form 90° angles between them (i.e., all four angles are equal), the lines are called perpendicular to each other.",
          "When two lines on a plane never intersect each other, they are called parallel lines.",
          "When a line l intersects another pair of lines, it is called a transversal and forms 2 groups of 4 angles each. Each angle in the first group has a corresponding angle in the second group.",
          "When a transversal intersects a pair of parallel lines, the corresponding angles are equal. If a transversal intersects a pair of lines and the corresponding angles are equal, then the lines of the pair are parallel.",
          "When a transversal intersects a pair of parallel lines, the alternate angles are equal.",
          "When a transversal intersects a pair of parallel lines, the sum of the interior angles on the same side of the transversal is always 180°."
        ]
      }
    },
      // chapter 6 Number Play
    {
      id: 6,
      title: "Number Play",
      content: {
        introduction: "In this chapter, we will explore various patterns and properties of numbers, including parity (even/odd), magic squares, the Virahanka-Fibonacci sequence, and cryptarithmetic puzzles.",
        sections: [
          {
            title: "6.1 Numbers Tell Us",
            content: `What do the numbers in the given figure tell us?

            Recall the mathematics textbook of Class 6. Now they are calling out numbers using a different rule.

            ? What do you think these numbers signify?

            The children rearrange themselves, and each child speaks a number based on this new arrangement.

            ? Can you figure out what these numbers are telling? Observe and try to find out.

            There is a rule here — each child speaks the number of children standing in front of them who are taller than them. Check whether the number spoken by each child matches this rule in both arrangements.

            ? Write the number that each child should speak based on this rule for the arrangement shown below.`,
            images: ["Diagrams of children standing in a line with numbers"]
          },
          {
            title: "Find Out",
            content: `1. Arrange the cutouts of the sticker pictures given at the end of this book, or draw line segments and create an arrangement based on their height so that their sequence reads as follows—
            (a) 0, 1, 1, 2, 4, 1, 5
            (b) 0, 0, 0, 0, 0, 0, 0
            (c) 0, 1, 2, 3, 4, 5, 6
            (d) 0, 1, 0, 1, 0, 1, 0
            (e) 0, 1, 1, 1, 1, 1, 1
            (f) 0, 0, 0, 3, 3, 3, 3

            2. Consider each of the statements given below and identify whether the statement is always true, sometimes true, or always false. Share your reasoning.
            (a) If a person says '0', then such persons are the tallest in that group.
            (b) If a person is the tallest, then their number is '0'.
            (c) The number of the first person is '0'.
            (d) If a person is not first or last in the row (i.e., they are standing somewhere in the middle), they cannot say '0'.
            (e) The person who says the largest number is the shortest.
            (f) What is the maximum possible number in a group of 8 people?`
          },
          {
            title: "6.2 Parity Check",
            content: `Kishor has some number cards and is working on a puzzle. There are 5 boxes, and each box should contain only 1 number card. The sum of the numbers on the cards placed in these boxes should be 30. Can you help him find a way to do this?

            Can you find which 5 cards will sum to 30? Is it possible? There are many ways to choose 5 cards from this collection.

            Is there a way to find a solution without checking all possibilities? Let's find out.

            Add some even numbers. What type of number do you get? Does it matter how many such numbers you add?

            Any even number can be arranged into pairs without remainder. Some even numbers are shown arranged in pairs.

            As we see in the figure, no matter how many even numbers we add, the resulting number can be arranged into pairs without any remainder. In other words, this sum will always be an even number.

            Now take some odd numbers and add them. What type of number do you get? Does it matter how many odd numbers you add?

            Odd numbers cannot be arranged into pairs. An odd number is one more than a collection of pairs. Some odd numbers are shown below.

            Can you also think of an odd number as one less than a collection of pairs? The figure shows that the sum of two odd numbers is always even. The other figures given here are examples verifying this proof!

            What can you say about adding three odd numbers? Can the resulting sum be arranged into pairs?

            Find out what happens in the case of the sum of (a) 4 odd numbers, (b) 5 odd numbers, and (c) 6 odd numbers.

            Now, let's return to the puzzle that Kishor was trying to solve. There are 5 empty boxes. This means he has an odd number of boxes. All the number cards have odd numbers written on them.

            Their sum should be 30, which is an even number. Because the sum of any 5 odd numbers will never be an even number. Therefore, Kishor can never arrange these cards in the boxes such that their sum is 30.

            Two siblings, Martin and Maria, were born exactly one year apart. Today they are celebrating their birthday. Maria says that the sum of their ages is 112 years. Is this possible? If yes, why? If not, why not?

            Because they were born one year apart, their ages will be two consecutive numbers. Could their ages be 51 and 52 years? 51 + 52 = 103. Try taking some other consecutive numbers and see if their sum is 112.

            In the counting numbers 1, 2, 3, 4, 5, ..., even and odd numbers appear alternately. In any two consecutive numbers, one will always be even and the other will always be odd!

            What will be the sum of an even number and an odd number? We can see that their sum cannot be arranged into pairs, so it will be an odd number.

            Since 112 is an even number and the ages of Martin and Maria (in years) are consecutive numbers, their sum cannot be 112.

            We use the word 'parity' to describe the property of being even or odd.

            For example, the sum of any two consecutive numbers being an odd number is a parity. Similarly, the sum of any two odd numbers being an even number is a parity.`,
            images: ["Diagrams showing even numbers arranged in pairs", "Diagrams showing odd numbers with one leftover", "Diagrams showing sum of two odd numbers forming pairs"]
          },
          {
            title: "Find Out",
            content: `1. Using your understanding of pictorial representations of odd and even numbers, find the parity of each of the following sums—
            (a) Sum of 2 even numbers and 2 odd numbers (even + even + odd + odd)
            (b) Sum of 2 odd numbers and 3 even numbers
            (c) Sum of 5 even numbers
            (d) Sum of 8 odd numbers

            2. Lata has an odd number of ₹1 coins, an odd number of ₹5 coins, and an even number of ₹10 coins in her piggy bank. When she calculated the total amount, she got ₹205. Did she make a mistake in her calculation? If there is no mistake, how many coins of each type could she have? If she made a mistake, explain why it might have happened.

            3. We know that —
            (a) even + even = even
            (b) odd + odd = even
            (c) even + odd = odd
            Similarly, find the parity for the following situations —
            (d) even – even = ___________________
            (e) odd – odd = ___________________
            (f) even – odd = ___________________
            (g) odd – even = ___________________

            Small Squares in a Grid
            A 3 × 3 grid has 9 small squares, which is an odd number. Similarly, a 3 × 4 grid has 12 small squares, which is an even number.
            Here, the parity of 3 × 4 is even.
            Given the dimensions of a grid, can you tell the parity of the number of small squares without calculating the product?`,
            examples: [
              "Find the parity of the number of small squares in these grids—",
              "(a) 27 × 13",
              "(b) 42 × 78",
              "(c) 135 × 654"
            ]
          },
          {
            title: "Parity of Expressions",
            content: `Consider the algebraic expression 3n + 4. For different values of n, this expression has different parities—`,
            tableData: {
              headers: ["n", "Value of 3n + 4", "Parity of the value"],
              rows: [
                ["3", "13", "Odd"],
                ["8", "28", "Even"],
                ["10", "34", "Even"]
              ]
            },
            content: `Write an expression whose parity is always even.

            Here are some examples, like 100p and 48w – 2. Try to find more such expressions.

            Write expressions whose parity is always odd.

            Write some other expressions like 3n + 4 whose parity can be either odd or even.

            The value of the expression 6k + 2 gives 8, 14, 20, ... (for k = 1, 2, 3, ...). Many even numbers are missing from this list.

            Are there expressions that can be used to generate the entire list of all even numbers? (Hint — All even numbers have a factor of 2.)

            Are there expressions that can be used to generate the entire list of all odd numbers?

            We have already seen how we can express the nth term in the sequence of multiples of 4, where n is a literal number representing a position in the sequence (e.g., first, twenty-third, one hundred seventeenth, etc.).

            What is the nth term of the multiples of 2? In other words, what is the nth even number?

            Let's consider odd numbers to answer this question.

            What is the 100th odd number?

            To answer this question, consider the following question—

            What is the 100th even number?

            It is 2 × 100 = 200.

            Does this help us find the 100th odd number? Let's compare the sequences of even and odd numbers term by term.

            Even numbers — 2, 4, 6, 8, 10, 12, ...
            Odd numbers — 1, 3, 5, 7, 9, 11, ...

            We see that at any position, the value of the odd number sequence is one less than the value of the even number sequence. Thus, the 100th odd number is 200 – 1 = 199.

            ? Write a formula to find the nth odd number.

            Let's first describe the method we learned to find an odd number at a given position —

            (a) Find the even number at that position. It is 2 times the position number.
            (b) Then subtract 1 from this even number.

            Writing this process as expressions, we get —
            (a) 2n (b) 2n – 1

            Thus, 2n is the formula that gives the nth even number, and 2n – 1 is the formula that gives the nth odd number.`
          },
          {
            title: "6.3 Some Discoveries in a Grid",
            content: `Look at this 3 × 3 grid. It is filled according to a simple rule, using the numbers 1 to 9 without repetition. The numbers written outside the grid are circled.

            ? Can you figure out what the circled numbers represent?

            The numbers in the yellow circles are the sums of the corresponding rows and columns. Fill in the grids below based on the rule mentioned above.

            Create some similar questions yourself and challenge your classmates.

            Try to solve the given problem?

            You might have experienced that it is not possible to find a solution for this grid. Why is this the case?

            The minimum possible sum is 6 = 1 + 2 + 3. The maximum possible sum is 24 = 9 + 8 + 7. Clearly, any number inside the circles cannot be less than 6 or greater than 24. In this grid, the sums 5 and 26 are given. Therefore, it is impossible!

            In the grid we solved earlier, Kishor observed that the sum of all the numbers in the circles was always 90. Vidya observed that the sum of the numbers in the circles for all three rows or all three columns was always 45. Check if this holds true for the grid you solved earlier.

            Why must the sum of the row sums or column sums always be 45?

            From this grid, we can see that the sum of all the row sums will be equal to the sum of the numbers from 1 to 9. The same can be observed for the column sums. The sum of numbers from 1 to 9 is 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 = 45.

            If the sum of the numbers in each row, each column, and each diagonal is the same number, then such a square grid is called a magic square. This sum is called the magic sum. The diagonals are shown in the figure.

            Trying to create a magic square by filling the grid randomly with numbers can be difficult. This is because there are many ways to fill a 3 × 3 grid using the numbers 1 to 9 without repetition. In fact, it can be found that there are exactly 3,62,880 such ways. You might be surprised that the number of ways to fill the grid in this manner can be found without writing them all down. We will see how this is done in higher classes.

            Instead, we should proceed in a systematic way to create a magic square. For this, let's ask ourselves some questions.

            1. What could be the magic sum? Can it be any number? Let's focus only on the row sums for a moment. We have seen that in a 3 × 3 grid with numbers 1 to 9, the total of the row sums will always be 45. Because in a magic square, all row sums are equal, and adding them gives 45. Hence, each of them must be 15. Thus, we get the following observation — Observation 1: In a magic square made using the numbers 1 to 9, the magic sum must be 15.

            2. Which numbers can possibly appear at the center of a magic square?

            Let's consider these possibilities one by one. Can the center number be 9? If so, then 8 must appear in some other square. For example, in this square, we would need 8 + 9 + another number = 15.

            But this is not possible. Because no matter where we write 8, this problem will always remain.

            Therefore, 9 cannot be at the center. Can the center number be 1?

            If so, then 2 must appear in some other square. Here, we would need 2 + 1 + another number = 15. But this is not possible, because we are only using numbers from 1 to 9. No matter where we write 2, this problem will always remain.

            Therefore, the number 1 also cannot be at the center.

            Using similar reasoning, find out which numbers from 1 to 9 can appear at the center.

            Through this exploration, we will arrive at the following interesting observation — Observation 2: In a magic square filled with the numbers 1 to 9, the number appearing at the center must be 5.

            Now let's see where the smallest number (1) and the largest number (9) should appear in a magic square. Our second observation tells us that they must appear in one of the peripheral positions. Let's classify these positions into two categories —

            Can 1 appear in a corner square? For example, can it be placed as shown in the adjacent square?

            If yes, then to get 15, there should be three ways to pair 1 with two other numbers. We get 1 + 5 + 9 = 1 + 6 + 8 = 15. Is any other combination possible?

            Similarly, can 9 be placed in a corner square?

            Observation 3: The numbers 1 and 9 cannot appear in a corner position; therefore, they must appear in one of the middle positions (edge centers).

            Can you find other possible positions for 1 and 9?

            Now we have a complete row or a complete column for the magic square! Try to complete it! (Hint — First fill the row containing 1 and 9.)`,
            images: ["3x3 grids with circled sums", "Positions in a 3x3 grid", "Corner and edge positions"]
          },
          {
            title: "Find Out",
            content: `1. How many different magic squares can be made using the numbers 1 to 9?

            2. Create a magic square using the numbers 2 to 10. What strategy will you use to do this? Compare it with the magic squares made from numbers 1 to 9.

            3. Take a magic square and—
            (a) Increase each number by 1.
            (b) Double each number.
            In each case, is the resulting grid also a magic square? How does the magic sum change in each case?

            4. What other operations can be performed on a magic square to obtain another magic square?

            5. Discuss methods to create a magic square using any collection of 9 consecutive numbers (such as 2–10, 3–11, 9–17, etc.).`
          },
          {
            title: "Generalizing a 3 × 3 Magic Square",
            content: `We can explain how the numbers in a magic square are related to each other, i.e., how the structure of a magic square is built.

            Choose one of the magic squares you created using consecutive numbers. If the number at the center is represented by the literal number m, then express how the other numbers are related to m, i.e., how much more or less they are than m. (Hint — Recall how we explained a 2 × 2 grid in a calendar month using algebraic expressions in the chapter on Algebraic Expressions.)

            Once you have the generalized form, share your observations with the class.

            Find Out
            1. Using this generalized form, find the magic square when the center number is 25.
            2. What expression do you get when you add the three terms of any row, column, or diagonal?
            3. Write the results for the following situations—
            (a) Adding 1 to each term of the generalized form.
            (b) Doubling each term of the generalized form.
            4. Create a magic square whose magic sum is 60.
            5. Is it possible to obtain a magic square by filling 9 non-consecutive numbers?

            The First 4 × 4 Magic Square
            The first recorded 4 × 4 magic square is found in a 10th-century inscription at the Parshvanath Jain temple in Khajuraho, India, and is called the 'Chautisa Yantra'.`,
            magicSquare4x4: [
              [7, 12, 1, 14],
              [2, 13, 8, 11],
              [16, 3, 10, 5],
              [9, 6, 15, 4]
            ],
            content: `'Chautisa' means 34. Why do you think people called it 'Chautisa Yantra'? The sum of the numbers in each row, column, and diagonal of this magic square is 34. Can you find other patterns of 4 numbers in this square where the sum of 4 numbers in each row, column, or diagonal is 34?`
          },
          {
            title: "Magic Squares in History and Culture",
            content: `The first recorded magic squares were created more than 2000 years ago in ancient China, known as the Lo Shu square. Legend has it that during a devastating flood in the Lo River, a god sent a turtle to save the people. The turtle carried a 3 × 3 grid on its back, with the numbers 1 to 9 arranged in a magical pattern.

            Magic squares have been studied in various parts of the world at different times, including India, Japan, Central Asia, and Europe.

            Indian mathematicians have worked extensively on magic squares. Their texts describe general methods for constructing these magic squares, which we have discussed above. The work of Indian mathematicians was not limited to creating 3 × 3 and 4 × 4 grids; they extended them to 5 × 5 and other larger square grids. We will study these in higher classes.

            The appearance of magic squares is not limited to mathematical texts. They have been found in many places in India. The image on the right is a 3 × 3 magic square found on a pillar of a temple in Palani, Tamil Nadu. This temple was built around the 8th century. 3 × 3 magic squares can also be found in homes and shops in India. The 'Navagraha Yantra' shown below is one such example.`,
            magicSquare3x3: [
              [2, 7, 6],
              [9, 5, 1],
              [4, 3, 8]
            ],
            navagrahaYantra: [
              ["Budh", "Shukra", "Chandra", "", "9", "4", "1", "1", "0"],
              ["", "", "", "", "8", "6", "5", "1", "2"],
              ["", "", "", "", "7", "10", "5", "1", "2"],
              ["", "", "", "", "1", "9", "7", "6", "13"],
              ["", "", "", "", "8", "10", "5", "1", "2"],
              ["", "", "", "", "11", "9", "7", "6", "13"],
              ["", "", "", "", "8", "10", "5", "1", "2"],
              ["Ketu", "Shani", "Rahu", "", "14", "9", "16", "15", "13"],
              ["", "", "", "", "11", "19", "17", "12", "?"]
            ],
            content2: `Note that a different magic sum is associated with each planet. An image of the 'Kubera Yantra' is shown below —`,
            kuberaYantra: [
              [27, 20, 25],
              [22, 24, 26],
              [23, 28, 21]
            ]
          },
          {
            title: "6.4 Nature's Favorite Sequence — Virahanka-Fibonacci Numbers!",
            content: `The sequence 1, 2, 3, 5, 8, 13, 21, 34, ... (Virahanka-Fibonacci numbers) is one of the most famous sequences in all of mathematics. It can be seen everywhere in the world of art, science, and mathematics. Although these numbers appear many times in the field of science, it is remarkable that they were first discovered in the context of art (specifically poetry).

            Thus, the Virahanka-Fibonacci numbers provide a beautiful illustration of the close relationships between art, science, and mathematics.

            Discovery of Virahanka Numbers
            Virahanka numbers first appeared thousands of years ago in the texts of Sanskrit and Prakrit linguists studying their poetic compositions!

            In the poetic compositions of many Indian languages, such as Prakrit, Sanskrit, Marathi, Malayalam, Tamil, and Telugu, each syllable is classified as short (laghu) or long (guru).

            A long syllable is pronounced for a longer duration than a short syllable — in fact, exactly twice as long. In musical terms, a short syllable takes one beat, and a long syllable takes two beats.

            From this simple system of poetic meter, countless mathematical questions arose, which were extensively considered by the ancient poets of these languages. In the process of asking and answering questions related to poems, many important mathematical discoveries were made.

            One particularly important question was: How many rhythms can be created for 8 beats by combining short syllables (1 beat) and long syllables (2 beats)? In other words, how many ways can a person fill eight beats with short and long syllables, where a short syllable takes one beat and a long syllable takes two beats?

            Here are some possibilities —
            • guru, guru, guru, guru
            • laghu, laghu, laghu, laghu, laghu, laghu, laghu, laghu
            • laghu, guru, guru, laghu, guru
            • guru, guru, laghu, laghu, guru
            • ...
            Can you find other possibilities?

            Writing this in more mathematical terms — In how many ways can the number 8 be written as a sum of 1s and 2s?

            For example —
            8 = 2 + 2 + 2 + 2
            8 = 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1
            8 = 1 + 2 + 2 + 1 + 2
            8 = 2 + 2 + 1 + 1 + 2
            ... and so on.

            Can you think of any other ways?

            Here, all the ways of writing the numbers 1, 2, 3, and 4 as a sum of 1s and 2s are given —`,
            tableData: {
              headers: ["n", "Different ways", "Number of ways"],
              rows: [
                ["1", "1", "1"],
                ["2", "1+1, 2", "2"],
                ["3", "1+1+1, 1+2, 2+1", "3"],
                ["4", "1+1+1+1, 1+1+2, 1+2+1, 2+1+1, 2+2", "5"]
              ]
            },
            content: `In the West, these numbers are called Fibonacci numbers, after the Italian mathematician Fibonacci, who wrote about them around 1202 CE, about 500 years after Virahanka. As we can see, Fibonacci was neither the first nor the second or third person to write about these numbers. But sometimes the term "Virahanka-Fibonacci numbers" is used so that everyone understands what is being referred to.

            So, how many rhythms are there for 8 beats with short and long syllables? We take the 8th term of the Virahanka sequence 1, 2, 3, 5, 8, 13, 21, 34, 55, ... Thus, there are 34 rhythms for 8 beats.

            Write the number that comes after 55 in this sequence. We have seen that in this sequence, the next number is obtained by adding the previous two numbers. Check whether this holds true for the numbers given above. The next number is — 34 + 55 = 89.

            Write the next three numbers in this sequence —
            1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ____, ____, ____, ____, ____

            If you had to write one more number in the above sequence, can you tell (without adding the previous two numbers) whether this number will be even or odd?

            What is the parity of each number in this sequence? Do you see any pattern in the sequence of parities?

            Today, Virahanka-Fibonacci numbers form the basis of many mathematical and artistic principles, from poetic compositions (verses) to drumming, from painting and architecture to science. Perhaps the most wonderful manifestations of these numbers occur in the art of nature! For example, the number of petals in a daisy flower is usually a Virahanka number.

            How many petals can you see in each of the following flowers?`,
            images: ["Daisy flower with 13 petals", "Daisy flower with 21 petals", "Daisy flower with 34 petals"]
          },
          {
            title: "6.5 Digit Puzzles (Cryptarithmetic)",
            content: `You have performed arithmetic operations with numbers. What are your thoughts on performing these operations with letters?

            In the calculations below, digits have been replaced by letters. Each letter represents a specific digit (0–9). You have to find out which digit each letter represents.

            Here we have a 1-digit number T. Adding it to itself twice gives a 2-digit sum. The unit digit of this sum is the same single digit that was added.

            What could U and T be? Can T be the digit 2? Can it be 3?

            When you search, you will find that T = 5 and UT = 15.

            Let's look at another example on the right. Here, K2 means that it is a 2-digit number with the unit digit 2 and the tens digit K. Adding K2 to itself gives a 3-digit number HMM. Which digit should correspond to the letter M?

            In this sum, the tens and units places have the same digit.

            What about H? Can it be 2? Can it be 3?

            Solving such questions can be interesting and fun! Here are some more such questions for you to try. Find out which digit each letter represents.

            Share the ideas you thought about for these questions with your classmates. You might also discover some new approaches.

            YY + Z + 3D = ZOO

            B5 + KP + C = ED5

            KP + C + 1FF = PRR

            Such questions are called cryptarithmetic questions or alphametic puzzles.`,
            images: ["Addition problems with letters: T + T + T = UT", "K2 + K2 = HMM"]
          },
          {
            title: "Find Out",
            content: `1. An electric bulb is on. Dinesh presses its button 77 times. Will the bulb be on or off now? Why?

            2. Lilita has a large ancient encyclopedia. When she opens it, many open pages fall out. She counts a total of 50 pages printed on both sides. Can the sum of the numbers on these open pages be 6000? If yes, why, or if not, why not?

            3. Here is a 2 × 3 grid. The parity of the sum for each row and column is written in the circle. 'e' stands for even number and 'o' stands for odd number. Fill these boxes with 3 odd numbers (o) and 3 even numbers (e) such that the parity of the row and column sums is satisfied.

            4. Create a 3 × 3 magic square with a magic sum of 0. All numbers cannot be zero. Use negative numbers as needed.

            5. Fill in the following blanks with 'odd' or 'even'—
            (a) The sum of an odd number of even numbers is ______.
            (b) The sum of an even number of odd numbers is ______.
            (c) The sum of an even number of even numbers is ______.
            (d) The sum of an odd number of odd numbers is ______.

            6. What is the parity of the sum of numbers from 1 to 100?

            7. In the Virahanka sequence, two consecutive numbers are 987 and 1597. What are the next two numbers and the previous two numbers in this sequence?

            8. Angad wants to climb a staircase with 8 steps. The rule of his game is that he can take only 1 step or 2 steps at a time. For example, one of his paths is 1, 2, 2, 1, 2. How many different ways can he reach the top?

            9. What is the parity of the 20th term of the Virahanka sequence?

            10. Identify the true statements—
            (a) The expression 4m – 1 always gives odd numbers.
            (b) All even numbers can be expressed in the form 6j – 4.
            (c) Both expressions 2p + 1 and 2q – 1 describe all odd numbers.
            (d) The expression 2f + 3 represents both even and odd numbers.

            11. Solve the following cryptarithmetic problems —`,
            cryptarithmeticExamples: [
              "AA + BB = BCC",
              "AB + CD = EFG"
            ]
          }
        ],
        summary: [
          "In the first activity, we saw how information about a sequence of numbers (e.g., measurements) can be represented and how they can be arranged without any information about the actual numbers.",
          "We studied the concept of number parity, learning about numbers that can be arranged in pairs (even numbers) and numbers that cannot be arranged in pairs (odd numbers).",
          "We learned how to determine the parity of sums and products.",
          "While exploring sums in a grid, we could determine that filling a grid based on row and column sums is impossible in some cases. We extended this fact to construct magic squares.",
          "We saw how Virahanka numbers were historically discovered through the arts. The Virahanka sequence is 1, 2, 3, 5, 8, 13, 34, 55, ...",
          "We became mathematical detectives through cryptarithmetic, where digits are replaced by letters."
        ]
      }
    },
    // chapter 7 A Story of Three Intersecting Lines
    {
      id: 7,
      title: "A Story of Three Intersecting Lines",
      content: {
        introduction: "A triangle is the most fundamental closed shape. It contains three corner points called vertices, and three line segments called sides that connect the vertices in pairs. In this chapter, we will learn how to construct triangles given different sets of measurements, explore the triangle inequality, understand the angle sum property, and classify triangles based on sides and angles.",
        sections: [
          {
            title: "Introduction",
            content: `A triangle is the most fundamental closed shape. As we know, it contains the following points —

            • Three corner points which we call the vertices of the triangle, and
            • Three line segments, i.e., the sides of the triangle, which connect the vertices in pairs.

            Triangles appear in various shapes. Some of these shapes are shown below —

            Note the symbol used to represent a triangle and how the triangles are named using their vertices. When naming a triangle, its vertices can appear in any order.

            When three lines meet at the corners, three angles are formed, which we call the angles of that triangle. For example, in ΔABC, these angles are ∠CAB, ∠ABC, and ∠BCA, which we denote as ∠A, ∠B, and ∠C respectively.

            What happens when all three vertices lie on a straight line?`,
            images: ["Various triangles of different shapes"]
          },
          {
            title: "7.1 Equilateral Triangle",
            content: `Among all triangles, equilateral triangles are the most symmetric. These are triangles whose sides are all equal in length. Let's try to construct them.

            ? Construct a triangle whose sides are all 4 cm long.

            How did you construct this triangle and what tools did you use? Can it be constructed using only a ruler and a pencil?

            It is certainly possible to construct this triangle using only a ruler, but it might require many attempts. Suppose we draw a base of length 4 cm and name it AB (see the figure below). Now, if we try to mark the third point C using a ruler such that AC = 4 cm, it is possible that BC may not be 4 cm. If this happens, we would have to repeatedly try to mark C such that we get BC = 4 cm.

            How can we make this construction more efficient?

            Recall the method from the previous class (in the chapter 'Playing with Constructions') for solving a similar problem using a compass. We had to mark the 'peak' point that was at a distance of 5 cm from two other points. The same method we used to obtain that point can be used here.

            After constructing AB = 4 cm, we can use the following method —

            Step 1 — Using a compass, draw a sufficiently long arc of radius 4 cm with center A, as shown in the figure below. Point C will lie somewhere on this arc. How do we mark it?

            Step 2 — Now, draw another arc of radius 4 cm with center B.

            Let C be the intersection point of these two arcs.

            This construction ensures that both AC and BC are 4 cm long. Can you tell why?

            Step 3 — Join AC and BC to obtain the desired equilateral triangle.`,
            images: ["Step-by-step construction of an equilateral triangle"]
          },
          {
            title: "7.2 Constructing a Triangle from Given Sides",
            content: `How do we construct triangles that are not equilateral?

            Construct a triangle whose sides are 4 cm, 5 cm, and 6 cm long. Like the previous situation, this triangle can also be constructed using only a ruler, but it would require many attempts.

            How can we construct this triangle more efficiently?

            Take one of these given lengths as the base of the triangle, for example, choose 4 cm as the base. Let A and B be the vertices of this base, and let the third vertex be C. Suppose AC = 5 cm and BC = 6 cm.

            As we did in the case of the equilateral triangle, let's first find all the points that are at a distance of 5 cm from A. These points lie on a circle with center A and radius 5 cm. Point C must also lie somewhere on this circle. How do we find it?

            We will use the fact that this point C is at a distance of 6 cm from point B. Draw an arc of radius 6 cm with center B.

            The desired point C will be one of the intersection points of these two circles.

            Why is this intersection point the third vertex of the triangle? The reason is the same as for constructing equilateral triangles, as explained earlier. This point lies on both circles. Hence, its distance from A is the radius of the circle centered at A (5 cm), and its distance from B is the radius of the circle centered at B (6 cm).

            Note that it is not necessary to draw full circles to obtain the third vertex. Let's summarize the steps of this construction (see Figures 7.2 and 7.3) —

            Step 1 — Construct a base AB of one side length. Let's choose AB = 4 cm (see Figure 7.1).

            Step 2 — With center A, draw a sufficiently long arc of radius 5 cm (see Figure 7.2).

            Step 3 — With center B, draw an arc of radius 6 cm so that it intersects the first arc (see Figure 7.3).

            Step 4 — The point where the two arcs meet is the desired third vertex C. Join AC and BC to obtain ΔABC.`,
            images: ["Figure 7.1", "Figure 7.2", "Figure 7.3"]
          },
          {
            title: "Construct",
            content: `? Construct triangles with sides of the following lengths (all units in cm) —
            (a) 4, 4, 6
            (b) 3, 4, 5
            (c) 1, 5, 5
            (d) 4, 6, 8
            (e) 3.5, 3.5, 3.5

            We have seen that triangles with all three sides equal are called equilateral triangles. Triangles with two sides equal are called isosceles triangles.`
          },
          {
            title: "Find Out",
            content: `1. Use points on the given circles or center points to construct isosceles triangles.

            2. Use points on the given circles or centers to construct isosceles and equilateral triangles. All these circles have the same radii.

            (A and B are centers of circles with equal radii)
            (A, B, and C are centers of circles with equal radii)`,
            images: ["Diagrams with circles for constructing isosceles triangles"]
          },
          {
            title: "Is it Possible to Construct Triangles of Any Length?",
            content: `Can you construct triangles with sides of any given lengths? Are there lengths for which constructing a triangle is impossible? Let's find out.

            Construct a triangle whose sides are 3 cm, 4 cm, and 8 cm long. Are you able to construct such a triangle?

            Here is another set of lengths — 2 cm, 3 cm, and 6 cm. Check whether it is possible to form a triangle with sides of these lengths.

            Try to find other sets of side lengths for which constructing a triangle is impossible. See if you can find any pattern in these sets.

            We see that for some sets of lengths, constructing a triangle is possible, but for others, it is not. How can we check whether a triangle exists for a given set of lengths? One method is to actually try to construct the triangle and see if it is possible. Is there another, more efficient method to check this?

            Triangle Inequality
            Consider the lengths 10 cm, 15 cm, and 30 cm. Is it possible for a triangle with sides of these lengths to exist?

            Let's study a property of triangles to answer this question. Imagine a small flat plot of land with a tent, a tree, and a pole. Suppose you are at the entrance of the tent and you want to go to the tree. Which path is shorter — (i) the straight line path to the tree (red path) or (ii) the straight line path from the tent to the pole, and then from the pole to the tree (yellow path)?

            Clearly, the direct straight line path from the tent to the tree is shorter than the path that goes via the pole. In fact, the direct straight line path is the shortest possible path between two points.

            Will the direct path between two points always be shorter than a path that goes through a third point? Clearly, the answer is 'yes'.

            Can this understanding be used to say something about the existence of a triangle with sides of lengths 10 cm, 15 cm, and 30 cm?

            Let's assume that a triangle with this set of lengths exists. Remember, we are not yet sure if the triangle exists; we are just assuming it does. Let's draw a rough sketch.

            Does everything look correct in this triangle?

            If this triangle were possible, then the direct path between any two vertices should be shorter than the path that goes through the third vertex. Is this true for our rough sketch?

            Let's consider the path between B and C.

            The length of the direct path = BC = 10 cm.

            What is the length of the path passing through A? It is the sum of the lengths of segments BA and AC.

            Length of the indirect path = BA + AC = 15 cm + 30 cm = 45 cm.

            Is the length of the direct path shorter than the length of the indirect path?

            Now consider the path between A and B.

            Length of the direct path = AB = 15 cm.

            Length of the indirect path through C = AC + CB = 30 cm + 10 cm = 40 cm.

            Is the length of the direct path shorter than the length of the indirect path? Yes.

            Finally, consider the path between C and A.

            Length of the direct path = CA = 30 cm.

            Length of the indirect path = CB + BA = 10 cm + 15 cm = 25 cm.

            Is the length of the direct path shorter than the length of the indirect path? In this case, the direct path length is greater than the indirect path length, which is absurd. Can such a triangle exist? No.

            Therefore, a triangle with sides of lengths 10 cm, 15 cm, and 30 cm cannot exist.

            Thus, without constructing it, we were able to determine why a triangle with lengths 10 cm, 15 cm, and 30 cm cannot exist. We were able to do this using spatial intuition and reasoning.

            Recall how we used similar intuition and reasoning to discover properties of intersecting and parallel lines. We will continue to do this as we discover more geometric properties.

            Can we determine whether a triangle with sides 3 cm, 3 cm, and 7 cm exists? Verify your answer by constructing it.

            "In the rough sketch shown in Figure 7.4, is it possible to assign the lengths in a different order so that the direct paths are always shorter than the indirect paths? If this is possible, then a triangle could exist."

            Is such a rearrangement of lengths in a triangle possible?`,
            images: ["Rough sketch of a triangle with sides 10, 15, 30"]
          },
          {
            title: "Find Out",
            content: `1. We have checked through construction that triangles with side lengths 3 cm, 4 cm, 8 cm and 2 cm, 3 cm, 6 cm are not possible. Check whether you could have figured this out without constructing the triangles.

            2. Can we tell whether a triangle exists for each of the following sets of lengths?
            (a) 10 km, 10 km, and 25 km
            (b) 5 mm, 10 mm, and 20 mm
            (c) 12 cm, 20 cm, and 40 cm

            You may have experienced that using a rough sketch and comparing the lengths of direct paths with their corresponding indirect paths is equivalent to comparing each length with the sum of the other two lengths, and three such comparisons need to be made.

            3. In each set of lengths observed so far, you must have noticed that in at least two comparisons, one direct length was less than the sum of the other two lengths (if not, check again). For example, for the set of lengths 10 cm, 15 cm, and 30 cm, the two comparisons where this happens are —
            10 < 15 + 30
            15 < 10 + 30
            But this does not happen for the third length — 30 > 10 + 15.

            Will this always be the case? That is, for any set of lengths, will there be at least two comparisons where one length is less than the sum of the other two? Find out for different sets of lengths.

            Furthermore, for a given set of lengths, can we immediately identify which length is less than the sum of the other two without any calculation?
            (Hint — Consider the lengths in increasing order.)

            Given three side lengths, what comparison do we need to make to check for the existence of a triangle?

            If each length is less than the sum of the other two lengths, we say that these lengths satisfy the triangle inequality. For example, the set 3, 4, 5 satisfies the triangle inequality, while the set 10, 15, 30 does not satisfy the triangle inequality.

            We have seen that lengths that do not satisfy the triangle inequality cannot be the side lengths of a triangle, such as 10, 15, 30.

            Does a triangle with sides 4 cm, 5 cm, and 8 cm exist? These satisfy the triangle inequality — 8 < 4 + 5 = 9.

            Why do we not need to check the other two sides?

            This means that the lengths of all direct paths are less than the lengths of the indirect paths. Does this confirm the existence of a triangle?

            If even one direct path length were larger, we could conclude that the triangle certainly cannot exist. But in this case, we can only say that a triangle may exist or may not exist.

            For a triangle to exist, the two arcs we draw to obtain the third vertex must necessarily intersect. Is it possible to determine whether this will happen without actually performing the construction?

            Visualizing the Construction of Circles
            Let's imagine we start the construction by taking the longest side as the base. Suppose AB is the base of length 8 cm. The next step is to draw sufficiently long arcs corresponding to the other two lengths, 4 cm and 5 cm.

            Instead of just drawing arcs, let's draw full circles. Suppose we draw a circle with center A and radius 4 cm.

            Now suppose we draw a circle with center B and radius 5 cm. Can you draw a rough sketch of the resulting figure?

            Note that in the given figure, AX = 4 cm and AB = 8 cm. So, what is BX? Does this length help in visualizing the resulting figure?

            Because BX = 4 cm and the radius of the circle centered at B is 5 cm, it is clear that these two circles will intersect at two points.

            What does this fact tell us about the existence of a triangle? Points A and B, together with either of the two intersection points of the circles, will give us the desired triangle. Thus, a triangle with sides of lengths 4 cm, 5 cm, and 8 cm exists.`,
            images: ["Figure 7.5 showing two circles intersecting"]
          },
          {
            title: "Find Out",
            content: `1. Which of the following sets of lengths can be the side lengths of a triangle? Explain your answers. Note that the unit of measurement is the same for all three lengths in each set.
            (a) 2, 2, 5 (b) 3, 4, 6 (c) 2, 4, 8 (d) 5, 5, 8 (e) 10, 20, 25 (f) 10, 20, 35 (g) 24, 26, 28

            From the previous questions, we see that whenever a set of three lengths satisfies the triangle inequality (each length < sum of the other two), then a triangle with those side lengths exists.

            Is it always true that a triangle exists when a set of three lengths satisfies the triangle inequality? How can we be sure of this?

            We can be sure of the existence of a triangle only if we can show that when the triangle inequality is satisfied, the two circles intersect internally (as in Figure 7.5). But what other possibilities can occur when two circles are drawn? Let's study them by drawing figures.

            The following different situations are possible —
            Situation 1 — The circles touch each other
            Situation 2 — The circles do not intersect
            Situation 3 — The circles intersect internally

            Note that when constructing these circles, we —
            (a) Take the length of base AB as the largest of the given lengths.
            (b) Take the radii of the circles as the other two smaller lengths.

            Which of the above situations will allow us to form a triangle? Clearly, triangles will only be formed when the circles intersect internally (Situation 3).

            ? Let's study each of these situations to find a relationship between the radii (the two smaller lengths) and AB (the largest length).

            Situation 1 — The circles touch each other at one point
            For this situation to occur,
            Sum of the two radii = AB
            Or, sum of the two smaller lengths = the largest length.

            Situation 2 — The circles do not intersect internally
            What should be the relationship between the radii and AB for this situation to occur? It can be seen from the figure that
            Sum of the two radii < AB
            Or, sum of the two smaller lengths < the largest length.

            Situation 3 — The circles intersect internally
            AB is made up of one radius and a part of the other radius. Therefore,
            Sum of the two radii > AB
            Or, sum of the two smaller lengths > the largest length.

            Can we use this analysis to say that a triangle exists when its lengths satisfy the triangle inequality?

            If the given lengths satisfy the triangle inequality, then the sum of the two smaller lengths is greater than the largest length. This means we are in Situation 3, where the circles intersect internally, and therefore a triangle exists.

            ? What kind of circles are formed for a set of lengths that does not satisfy the triangle inequality? Find three examples each of sets of lengths for which the circles —
            (a) touch each other at one point
            (b) do not intersect each other.

            ? Create a complete procedure that can be used to check for the existence of a triangle.

            Conclusion
            If a given set of three lengths satisfies the triangle inequality, then a triangle with sides of those lengths exists. If the set does not satisfy the triangle inequality, then no triangle exists with sides of those lengths.`,
            images: ["Diagrams showing three situations of circle intersections"]
          },
          {
            title: "Find Out",
            content: `1. Check whether a triangle exists for each of the following sets of lengths (lengths are in the same unit) —
            (a) 1, 100, 100 (b) 3, 6, 9 (c) 1, 1, 5 (d) 5, 10, 12

            2. Does an equilateral triangle with sides 50, 50, 50 (in the same unit) exist? In general, does an equilateral triangle with any side length exist? Justify your answer.

            3. For each of the following, give at least 5 possible values for the third side length such that a triangle exists with these side lengths (decimal values can also be chosen) —
            (a) 1, 100 (b) 5, 5 (c) 3, 7

            See if you can describe all possible lengths of the third side for each case so that a triangle exists with sides of these lengths. For example, in case (a), all numbers between 99 and 101 are possible.`
          },
          {
            title: "7.3 Constructing Triangles from Given Sides and Angles",
            content: `We have seen how to construct triangles when their side lengths are given. Now we will take up constructions where some angle measures are given instead of side lengths.

            Two Sides and the Included Angle
            How do we construct a triangle when its two sides and the included angle are given? Here are some examples showing the measures of the included angle —

            Construct a triangle ABC in which AB = 5 cm, AC = 4 cm, and ∠A = 45°. Let's take one of the given sides, AB, as the base of the triangle.

            Step 1 — Construct a side AB of length 5 cm.
            Step 2 — Construct ∠A = 45° by drawing the other ray of the angle.
            Step 3 — On this ray, mark point C such that AC = 4 cm.
            Step 4 — Join BC to obtain the desired triangle.`,
            images: ["Step-by-step construction of triangle with two sides and included angle"]
          },
          {
            title: "Find Out",
            content: `1. Construct triangles for the following measurements where the angle is between the sides —
            (a) 3 cm, 75°, 7 cm
            (b) 6 cm, 25°, 3 cm
            (c) 3 cm, 120°, 8 cm

            We have seen that not all sets of side lengths allow a triangle to exist. Is there any combination of measures for two sides and the included angle where constructing a triangle is not possible? Justify your answer using what you observed while constructing them.`
          },
          {
            title: "Two Angles and the Included Side",
            content: `In this situation, we are given two angles and a side. This side is a part of both angles and is called the included side. Here are some examples of such measures —

            Construct a triangle ABC in which AB = 5 cm, ∠A = 45°, and ∠B = 80°. Let's take the given side as the base.

            Step 1 — Draw base AB of length 5 cm.
            Step 2 — Draw ∠A and ∠B of measures 45° and 80° respectively.
            Step 3 — The intersection point of the two new line segments is the third vertex C.`,
            images: ["Step-by-step construction of triangle with two angles and included side"]
          },
          {
            title: "Find Out",
            content: `1. Construct triangles for the following measurements —
            (a) 75°, 5 cm, 75°
            (b) 25°, 3 cm, 60°
            (c) 120°, 6 cm, 30°

            Is a Triangle Always Possible?
            Can triangles be formed for every combination of two angles and their included side? Find out.

            Just as when we are given three sides, a triangle does not necessarily form every time, similarly, a triangle does not always form from every combination of two angles and the included side.

            ? Find examples of measurements of two angles and their included side for which constructing a triangle is not possible.

            Let's try to demonstrate such a situation. Once the base is drawn, try to imagine how the other two sides would have to be so that they do not meet each other. Here are some clear examples —

            If one of these two angles is a right angle and the other is greater than or equal to 90°, it is clear that no triangle is possible in such a situation.

            Now, let's make one of the base angles an acute angle of 40°. What should the value of the other angle possibly be so that these lines do not meet?

            It is clear that if the line through B is sufficiently tilted to the right, it will not meet line l.

            (a) Try to find a possible ∠B (marked in the figure above) for this to happen.
            (b) What could be the minimum value of ∠B for these lines not to meet?

            The blue line is the line that does not meet l and is tilted minimally to the right. It is clear from the figure that the line that makes the minimum ∠B must be parallel to line l. Let's call this parallel line m.

            Can you tell the actual value of ∠B in this situation?
            (Hint — Note that AB is a transversal.)

            We have seen that when two lines are parallel, the sum of the interior angles on the same side of the transversal is 180°. Therefore, ∠B = 140°.

            So, for which values of ∠B will a triangle not exist? Does the length AB play any role in this?

            From the above discussion, it can be seen that the length AB plays no role in determining the existence of a triangle. We can say that when ∠B is 140° or greater, a triangle cannot exist.`,
            images: ["Diagrams showing non-intersecting lines"]
          },
          {
            title: "Find Out",
            content: `1. For each of the following angles, find another angle such that a triangle is (i) possible (ii) not possible. Find at least two different angles for each category.
            (a) 30° (b) 70° (c) 54° (d) 144°

            2. Determine which of the following pairs can be angles of a triangle and which cannot —
            (a) 35°, 150° (b) 70°, 30° (c) 90°, 85° (d) 50°, 150°

            ? Similar to the triangle inequality, can you create a rule that describes the two angles for which a triangle can be constructed?

            Can the sum of the two angles be used to create this rule?

            When the sum of the given two angles is less than 180°, a triangle with these angles exists. If this sum is 180° or more, then no triangle exists with these angles.

            Let's take two angles. Suppose we take angles of 60° and 70°, whose sum is less than 180°. Suppose the included side is 5 cm.

            What could be the measure of the third angle? If the length of the base is changed to some other value, say 7 cm, will this measure change? Construct and find out.

            In general, once the two angles are fixed, does the third angle depend on the length of the included side? Try with different pairs of angles and side lengths.

            Measurements may show that the length of the side has no effect (or very little effect) on the third angle. With this observation, let's see if we can find the third angle without constructing and measuring.

            Try experimenting with different triangles to see if there is a relationship between any two angles and the third angle. What data will you collect to find this relationship, and how will you organize the collected data?

            Consider a triangle ABC where ∠B = 50° and ∠C = 70°. Let's see how we can find ∠A without constructing any triangle.

            We saw that the concept of parallel lines was useful in determining that the sum of any two angles of a triangle is less than 180°. Parallel lines can also be used to find the third angle ∠BAC.

            Suppose we draw a line XY through vertex A parallel to base BC.

            We can see that new angles have been formed. These angles are ∠XAB and ∠YAC. What are their measures?

            Because line XY is parallel to base BC, ∠XAB = ∠B and ∠YAC = ∠C, as they are alternate angles formed by transversals AB and AC.

            Therefore, ∠XAB = 50° and ∠YAC = 70°. Can we find ∠BAC from this? We know that ∠XAB, ∠YAC, and ∠BAC together form an angle of 180°. Therefore,

            ∠XAB + ∠YAC + ∠BAC = 180°
            50° + ∠BAC + 70° = 180°
            120° + ∠BAC = 180°
            Thus, ∠BAC = 180° - 120° = 60°.

            Now, take any suitable length for BC and construct a triangle to verify if this situation is actually possible.`,
            images: ["Figure 7.6 - Triangle with line through vertex parallel to base"]
          },
          {
            title: "Find Out",
            content: `1. If two angles are given, find the third angle of the triangle using a parallel line.
            (a) 36°, 72° (b) 150°, 15° (c) 90°, 30° (d) 75°, 45°

            2. Can you construct a triangle where all angles are equal to 70°? If two angles are 70°, what will be the third angle? If all angles of a triangle are equal, what will be the measure of each angle? Explore and find out.

            3. Here is a triangle where we know that ∠B = ∠C and ∠A = 50°. Can you try to find ∠B and ∠C without constructing?`,
            images: ["Triangle with two equal angles"]
          },
          {
            title: "Angle Sum Property",
            content: `What can we say about the sum of the angles of a triangle?

            Consider a triangle ABC. To find the sum of its angles, we can use the same method of drawing a line parallel to the base — construct a line through A parallel to BC.

            We need to find ∠A + ∠B + ∠C.

            We know that ∠B = ∠XAB and ∠C = ∠YAC.

            Therefore, ∠A + ∠B + ∠C = ∠A + ∠XAB + ∠YAC = 180°, because these three angles together form a straight angle.

            Thus, we have proved that the sum of the three angles of any triangle is 180°. This amazing result is called the angle sum property of triangles.

            Spend some time thinking about how we discovered this angle sum property. Initially, the relationship between the third angle and the other two angles was not clear. But the simple idea of drawing a line parallel to the base through the vertex (see Figure 7.7) immediately made this relationship clear. This elegant idea can be found in 'The Elements', an influential book in the history of mathematics. The credit for writing this book is given to the Greek mathematician Euclid, who lived around 300 BCE.

            This solution is another example of how creative thinking plays a key role in mathematics!

            There is a convenient method to verify this angle sum property. In this method, triangular paper cutouts are folded. Can you see how this method shows that the sum of angles in this triangle is 180°?`,
            images: ["Figure 7.7 - Angle sum property demonstration", "Folding method for angle sum property"]
          },
          {
            title: "Exterior Angle",
            content: `When a side of a triangle is extended, the angle formed by it with another side is called the exterior angle of the triangle. In this figure, ∠ACD is an exterior angle.

            If ∠A = 50° and ∠B = 60°, find ∠ACD.

            By the angle sum property, we know that
            50° + 60° + ∠ACB = 180°
            110° + ∠ACB = 180°
            Therefore, ∠ACB = 70°.

            Since ∠ACD = 180° - 70° = 110° (as ∠ACB and ∠ACD form a straight angle).

            Find the exterior angle for different measures of ∠A and ∠B. Do you see any relationship between the exterior angle and these two angles?
            (Hint — By the angle sum property, we have ∠A + ∠B + ∠ACB = 180°. We also have ∠ACD + ∠ACB = 180°, as they form a straight angle. What does this imply?)`,
            images: ["Diagram showing exterior angle of a triangle"]
          },
          {
            title: "7.4 Constructions Related to Altitudes of a Triangle",
            content: `Another useful set of measurements related to a triangle concerns the height of each vertex with respect to its opposite side.

            In the world around us, we talk about the heights of various objects, such as a person's height, a tree's height, a building's height, etc. What do we mean by the word 'height'?

            Consider a triangle ABC. How high is vertex A from the opposite side BC, and how can it be measured?

            Suppose AD is the perpendicular line segment drawn from A to BC. The length of AD is the height from vertex A to side BC. The line segment AD is one of the 'altitudes' of this triangle.

            In the figure below, the other altitudes BE and CF are the perpendiculars drawn from the other vertices to their corresponding opposite sides.

            Whenever we use the word 'height' of a triangle, it generally refers to the length of an altitude, regardless of which side we take as the base (in Figure 7.8, this altitude is AD).

            What will be the altitude from A to side BC in this triangle?

            (We extend BC and then drop a perpendicular from A to this line.)

            Altitude Using Paper Folding
            Cut out a triangular piece of paper. Fix one of the three sides as the base. Fold it so that the resulting crease is an altitude from the top vertex to the base. Justify why the crease must be perpendicular to the base.

            Constructing an Altitude of a Triangle
            Construct a triangle. Take BC as the base and name the vertices A, B, and C.

            Draw the altitude from A to side BC.

            Drawing the altitude using only a ruler would not be accurate. To obtain an exact 90° angle, we use a set square along with a ruler.

            Can you see how this is done?

            Step 1 — Place the ruler along the base. Now place the set square on the ruler as shown in the figure so that one edge of the set square touches the ruler.

            Step 2 — Slide the set square along the ruler until the vertical edge of the set square touches vertex A.

            Step 3 — Using the vertical edge of the set square, draw the perpendicular from A to BC.

            Is there a triangle where one side is also an altitude? Imagine such a triangle and draw a rough sketch. We see that this happens in triangles where one angle is a right angle. A triangle with a right angle is called a right-angled triangle or simply a right triangle.`,
            images: ["Figure 7.8 - Altitude AD", "Other altitudes BE and CF", "Extending base to draw altitude", "Using set square to draw altitude"]
          },
          {
            title: "7.5 Types of Triangles",
            content: `In our study of triangles, we have encountered the following types of triangles — equilateral, isosceles, scalene, and right-angled triangles.

            Have you seen any other type of triangle?

            The classification of equilateral and isosceles triangles was based on the equality of sides.

            In an equilateral triangle, all sides are equal in length. In an isosceles triangle, two sides are equal in length. In a scalene triangle, all sides are of different lengths.

            Can a similar classification be done based on the equality of angles? Is there a relationship between these two classifications? We will answer this question in a later chapter.

            When we classified a triangle as a right-angled triangle, we used the measures of angles.

            What are the other types of triangles based on angle measures?

            One classification of triangles based on their angle measures is acute-angled, right-angled, and obtuse-angled triangles. We already know what a right-angled triangle is. It is a triangle that has one right angle. Similarly, an obtuse-angled triangle has one obtuse angle.

            What could be an acute-angled triangle? Can we define it as a triangle with one acute angle? Why not?

            An acute-angled triangle has all three angles acute.`,
            images: ["Equilateral triangle", "Isosceles triangle", "Scalene triangle", "Acute-angled triangle", "Right-angled triangle", "Obtuse-angled triangle"]
          },
          {
            title: "Find Out",
            content: `1. Construct a triangle ABC in which BC = 5 cm, AB = 6 cm, and CA = 5 cm. Construct the altitude from A to side BC.

            2. Construct a triangle TRY in which RY = 4 cm, TR = 7 cm, and ∠R = 140°. Construct the altitude from T to side RY.

            3. Construct a right-angled triangle ABC in which ∠B = 90° and AC = 5 cm. How many different triangles are possible with these measurements?
            (Hint — Note that other measurements can take any value. Take AC as the base. What values can ∠A and ∠C take so that the other angle is 90°?)

            4. Through construction, find out whether it is possible to construct an equilateral triangle that is (i) right-angled and (ii) obtuse-angled. Also, construct an isosceles triangle that is (i) right-angled and (ii) obtuse-angled.`
          },
          {
            title: "Summary",
            content: `• Using a compass simplifies the construction of triangles when their side lengths are given.

            • A set of three lengths satisfies the triangle inequality when each length is less than the sum of the other two lengths.

            • The side lengths of a triangle satisfy the triangle inequality, and if a given set of lengths satisfies the triangle inequality, then a triangle with those side lengths can be constructed.

            • Triangles can also be constructed when the following measurements are given —
            (a) two sides and the included angle
            (b) two angles and the included side

            • The sum of the angles of a triangle is always 180°.

            • An altitude of a triangle is the perpendicular line segment drawn from a vertex to the opposite side.

            • Equilateral triangles have all sides of equal length. Isosceles triangles have two sides of equal length, and scalene triangles have all three sides of different lengths.

            • Triangles can be classified based on their angle measures as acute-angled triangles, right-angled triangles, and obtuse-angled triangles.`
          },
          {
            title: "Something from Before!",
            content: `The Shortest Path Across a Box

            A spider sits at one corner of a box. It wants to reach the farthest opposite corner (marked in the figure). Since it cannot fly, it can only reach that opposite corner by walking on the surfaces of the box. Which shortest path can it take?

            Take a cardboard box and mark the path that you think is the shortest from one corner to the opposite corner. Compare the length of this path with the lengths of the paths marked by your friends.`,
            images: ["Diagram of a box with corners marked"]
          }
        ]
      }
    },
      // chapter 8 Working with Fractions
    {
      id: 8,
      title: "Working with Fractions",
      content: {
        introduction: "In this chapter, we will learn how to multiply and divide fractions. We will explore the rules for these operations, understand the relationship between the product and the factors, and see how these concepts apply to real-life situations. We will also learn about the historical development of fraction arithmetic in India.",
        sections: [
          {
            title: "8.1 Multiplication of Fractions",
            content: `Aaron walks 3 kilometers in one hour. How far can he walk in 5 hours?

            This is a simple question. We know that to find the distance, we need the product of 5 and 3, i.e., we multiply 5 and 3.

            Distance covered in 1 hour = 3 km

            Therefore, distance covered in 5 hours = 5 × 3 km = 3 + 3 + 3 + 3 + 3 km = 15 km.

            ? Aaron's pet turtle walks very slowly. It only walks 1/4 kilometer in one hour. How far can it walk in 3 hours?

            Here, the distance covered in one hour is a fraction. That doesn't matter. The total distance covered is calculated in the same way as multiplication.

            Distance covered in 1 hour = 1/4 km

            Therefore, distance covered in 3 hours = 3 × 1/4 km = 1/4 + 1/4 + 1/4 km = 3/4 km.

            The turtle can walk 3/4 km in 3 hours.

            Let's consider a situation where the time spent walking is a fraction of an hour.

            We saw that Aaron can walk 3 kilometers in one hour. How far can he walk in 1/5 hour?

            We will calculate the total distance covered by multiplication.

            Distance covered in 1 hour = 3 km

            Distance covered in 1/5 hour = 1/5 × 3 km

            Finding the product
            Distance covered in 1 hour = 3 km
            The distance covered in 1/5 hour is equal to the length obtained by dividing 3 kilometers into 5 equal parts, which is 3/5 km.

            This tells us that 1/5 × 3 = 3/5.

            How far can Aaron walk in 2/5 hours?

            Once again we have —

            Distance covered = 2/5 × 3 km

            Finding the product

            1. First, we can find the distance covered in 1/5 hour.
            2. Since the duration is double of 1/5, we multiply this distance by 2 to get the total distance covered.

            This calculation is as follows —

            Distance covered in 1 hour = 3 km

            1. Distance covered in 1/5 hour = length of one part obtained by dividing 3 km into 5 equal parts = 3/5 km
            2. Multiplying this distance by 2 gives us 2 × 3/5 = 6/5 km.

            From the above, we can see that 2/5 × 3 = 6/5.

            Discussion
            We performed this multiplication as follows —

            • First, we divided the multiplicand 3 by the denominator of the multiplier, 5, giving us 3/5.
            • Then, we multiplied this result by the numerator of the multiplier, 2, giving us 6/5.`,
            images: []
          },
          {
            title: "Find Out",
            content: `5. Multiply and convert to a mixed fraction.
            (a) 7 × 3/5
            (b) 4 × 1/3
            (c) 9/7 × 6
            (d) 13/11 × 6

            So far, we have learned to multiply a whole number by a fraction and a fraction by a whole number. What happens when both numbers in the multiplication are fractions?

            Multiplying Two Fractions
            We know that Aaron's pet turtle can only walk 1/4 km in one hour. How far can it walk in half an hour?

            Using the multiplication method to solve such problems gives us —

            Distance covered in 1/2 hour = 1/2 × 1/4 km.

            Finding the product
            Distance covered in 1 hour = 1/4 km.
            Therefore, the distance covered in 1/2 hour will be the length obtained by dividing 1/4 into 2 equal parts.

            To find this, it is useful to represent fractions using a unit square as a whole.

            Unit square as a whole
            1/4 of the whole

            Now we divide this 1/4 into 2 equal parts. What do we get?

            What fraction of the whole is shaded?

            Because the whole has been divided into 8 equal parts and one part is shaded, we can say that 1/8 of the whole is shaded. Therefore, the distance covered by the turtle in 1/2 hour is 1/8 km.

            This shows that 1/2 × 1/4 = 1/8.

            If the turtle walks faster and can cover 2/5 km in one hour, how far will it walk in 3/4 hour?

            Distance covered = 3/4 × 2/5 km.

            Finding the product

            (i) First, find the distance covered in 1/4 hour.
            (ii) Then, multiply the result by 3 to find the distance covered in 3/4 hour.

            (i) Distance covered in 1/4 hour (in km) = each part obtained by dividing 2/5 into 4 equal parts.

            Taking the unit square as the whole, the shaded part in Figure 8.1 is the area we get by dividing 2/5 into 4 equal parts.

            What fraction of the whole is this?

            The whole is divided into 5 rows and 4 columns, giving 5 × 4 = 20 equal parts.
            Number of shaded parts = 2.

            Therefore, distance covered in 1/4 hour = 2/20.

            (ii) Now we need to multiply 2/20 by 3. Distance covered in 3/4 hour = 3 × 2/20 = 6/20.
            Thus, 3/4 × 2/5 = 6/20 = 3/10.

            Discussion
            In the situation of multiplying one fraction by another, we follow the same method we used when multiplying a fraction by a whole number. We multiplied as follows —

            (2/5) ÷ 4 = 2/20 (Dividing the multiplicand by 4)
            Using this understanding, multiply 5/4 × 2/3.

            Let's first represent 3/2 using a unit square as the whole. Since 3/2 is one whole and a half fraction, it can be seen as follows —

            Following the steps of multiplication, we first need to divide the fraction 3/2 into 4 equal parts. This can be done as shown by the yellow region in Figure 8.2. This represents the fraction obtained by dividing 3/2 into 4 equal parts. What is its value?

            We see that the whole is divided into 2 rows and 4 columns, giving 2 × 4 = 8 equal parts.
            Total number of shaded parts = 3. Therefore, the shaded yellow part = 3/8.

            Now, in the next step, the result is multiplied by 5. This gives the product of 5/4 and 3/2.
            5/4 × 3/2 = (5 × 3)/(8) = 15/8.

            Relationship between Area of a Rectangle and Fraction Multiplication
            What are the length and breadth of the shaded rectangle in Figure 8.3? Since we started with a unit square (side 1 unit), the length and breadth are 1/2 unit and 1/4 unit.

            What is the area of this rectangle? We see that 8 such rectangles together form a square of unit area. Therefore, the area of each rectangle is 1/8 square unit.

            Do you see a relationship between the area and the product of length and breadth?

            The area of a rectangle with fractional sides is equal to the product of its sides. In general, if we want to find the product of two fractions, we can find the area of a rectangle with those fractions as sides.`,
            images: ["Unit square representation", "Figure 8.1", "Figure 8.2", "Figure 8.3"]
          },
          {
            title: "Find Out",
            content: `1. Find the following products. Use a unit square as a whole to represent the fractions.
            (a) 1/3 × 1/5
            (b) 1/4 × 1/3
            (c) 1/5 × 1/2
            (d) 1/6 × 1/5

            Now find 1/12 × 1/18.

            Representing fractions using a unit square for this is a very complex task. Let's find the product by observing what we did in the above situations.

            In each situation, the whole is divided into rows and columns.
            The number of rows is the denominator of the multiplicand, which in this case is 18.
            The number of columns is the denominator of the multiplier, which in this case is 12.
            Thus, the whole is divided into 18 × 12 equal parts.

            Therefore, 1/18 × 1/12 = 1/(18×12) = 1/216.

            Thus, when two unit fractions are multiplied, their product is 1 over the product of the denominators.

            We can express this as — 1/b × 1/d = 1/(b × d).

            2. Find the following products. Use a unit square as a whole to represent the fractions and show the operations.
            (a) 2/3 × 4/5
            (b) 1/4 × 2/3
            (c) 3/5 × 1/2
            (d) 4/6 × 3/5`
          },
          {
            title: "Multiplying Numerators and Denominators",
            content: `Now find 5/12 × 7/18.

            Let's find the product by step-by-step multiplication as before. First, by dividing the whole into 18 rows and 12 columns, we get 12 × 18 equal parts.

            Then, we multiply this result by 5 to get the product. This is (5 × 7)/(12 × 18).

            Therefore, 5/12 × 7/18 = (5 × 7)/(12 × 18) = 35/216.

            From this, we can see that in general —

            a/b × c/d = (a × c)/(b × d).

            This formula in its general form was first stated by Brahmagupta in his work 'Brahmasphuta-siddhanta' in 628 CE.

            The above formula also works when the multiplier or multiplicand is a whole number. We can write a whole number as a fraction with denominator 1. For example —

            3 × 3/4 can be written as 3/1 × 3/4 = (3 × 3)/(1 × 4) = 9/4.

            And 3/5 × 4 can be written as 3/5 × 4/1 = (3 × 4)/(5 × 1) = 12/5.`
          },
          {
            title: "Product of Fractions — Simplification to Lowest Terms",
            content: `? Multiply the following fractions and express the product in its lowest terms.

            12/7 × 5/24

            Instead of multiplying the numerators (12 and 5) and denominators (7 and 24) first and then simplifying, we can do this —

            12/7 × 5/24 = (12 × 5)/(7 × 24)

            We see that the numbers in the circles have a common factor of 12. We know that a fraction remains the same when the numerator and denominator are divided by a common factor. In this case, we can divide them by 12.

            (12 × 5)/(7 × 24) = (1 × 5)/(7 × 2) = 5/14.

            Let's perform another calculation using this method.

            14/15 × 25/42 = (14 × 25)/(15 × 42) = (1 × 5)/(3 × 3) = 5/9.

            When multiplying fractions, we can divide the numerator and denominator by their common factors before multiplying the numerators and denominators. This is called cancelling common factors.

            A Glimpse of History
            The process of simplifying a fraction to its lowest terms is called 'apavartana' in India. This process is so famous that it is mentioned even in a non-mathematical text. The Jain scholar Umaswati (150 CE) used it as an analogy in a philosophical text!`,
            images: []
          },
          {
            title: "Find Out",
            content: `1. A water tank is being filled by a tap. If the tap is open for 1 hour, 7/10 of the tank is filled. How much of the tank will be filled if the tap is left open for the following times —
            (a) 1/3 hour
            (b) 2/3 hour
            (c) 3/4 hour
            (d) 7/10 hour
            (e) How long should the tap be left open to fill the tank completely?

            2. The government took 1/6 of Somu's land for building a road. How much of the land does Somu have left? He gives half of the remaining land to his daughter Krishna and 1/3 of the remaining to his son Bora. He keeps the remaining land for himself.
            (a) What fraction of the original land did Krishna receive?
            (b) What fraction of the original land did Bora receive?
            (c) What fraction of the original land did Somu keep for himself?

            3. Find the area of a rectangle whose sides are 3 3/4 feet and 9 3/5 feet.

            4. Tssewang planted four saplings in a row in his garden. The distance between two saplings is 3/4 meter. Find the distance between the first and the last sapling.
            (Hint — Draw a rough sketch of four saplings with a distance of 3/4 meter between two saplings.)

            5. Which is heavier — 12/15 of 500 grams or 3/20 of 4 kilograms?

            Is the product always greater than the numbers being multiplied?
            As we know, when a number is multiplied by 1, the product always remains unchanged. Now we will look at multiplication of pairs of numbers where neither number is 1.
            When we multiply two counting numbers greater than 1, such as 3 and 5, the product is greater than both numbers being multiplied.
            3 × 5 = 15. The product 15 is greater than both 3 and 5.
            But what happens when we multiply 1/4 and 8?
            1/4 × 8 = 2. In the above multiplication, the product 2 is greater than 1/4 but less than 8.
            What happens when we multiply 3/4 and 2/5?
            3/4 × 2/5 = 6/20 = 3/10.
            Let's compare this product 3/10 with the numbers 3/4 and 2/5. For this, let's express 3/4 as 15/20 and 2/5 as 8/20.
            From this, we can see that the product is smaller than both numbers.

            What do you think — when is the product greater than both numbers being multiplied, when is it between them, and when is it smaller than both?
            (Hint — The relationship between the product and the numbers being multiplied depends on whether they are between 0 and 1 or greater than 1. Take different pairs of numbers and observe their products. Consider the following questions for each multiplication.)`,
            tableData: {
              headers: ["Situation", "Multiplication", "Relationship"],
              rows: [
                ["Situation 1", "Both numbers are greater than 1.<br/>(e.g., 4/3 × 4)", "Product (16/3) is greater than both numbers."],
                ["Situation 2", "Both numbers are between 0 and 1.<br/>(e.g., 3/4 × 2/5)", "Product (3/10) is smaller than both numbers."],
                ["Situation 3", "One number is between 0 and 1, and one number is greater than 1.<br/>(e.g., 3/4 × 5)", "Product (15/4) is less than the number greater than 1 and greater than the number between 0 and 1."]
              ]
            },
            content: `Create more examples for each situation and carefully observe the relationship between the product and the numbers being multiplied.

            ? What conclusion can you draw about the relationship between the numbers being multiplied and the product? Fill in the blanks —

            - When one of the numbers being multiplied is between 0 and 1, the product is ______ (greater/smaller) than the other number.
            - When one of the numbers being multiplied is greater than 1, the product is ______ (greater/smaller) than the other number.`
          },
          {
            title: "Order of Multiplication",
            content: `2/3 × ? = 3. Can you find the answer?
            We know what to multiply 2/3 by to get 1. To get 3, we simply need to multiply it by 3.
            2/3 × (3/2) × 3 = 3.
            Therefore, 3 ÷ 2/3 = 3 × 3/2 = 9/2.

            What is 1/5 ÷ 1/2?
            Rewriting this as a multiplication problem, we get 1/2 × ? = 1/5.
            How do we solve this?
            1/2 × 2 × 1/5 = 1/5.
            Therefore, 1/5 ÷ 1/2 = 1/5 × 2 = 2/5.

            What is 2/3 ÷ 3/5?
            Rewriting this as a multiplication problem, we get 3/5 × ? = 2/3.
            How will we solve this?
            3/5 × 5/3 × 2/3 = 2/3.
            Therefore, 2/3 ÷ 3/5 = 2/3 × 5/3 = 10/9.`
          },
          {
            title: "Discussion",
            content: `Observe how we found the answer in each of the division problems above. How is division of two fractions performed? Can we formulate a rule for this?

            Let's consider the last problem.

            In each division problem, we have a dividend, a divisor, and a quotient. The technique we are using to find the quotient is —

            1. First, we find the number which, when multiplied by the divisor, gives 1. We see that this number is a fraction whose numerator is the denominator of the divisor and whose denominator is the numerator of the divisor.
            For the divisor 3/5, this fraction is 5/3. We call 5/3 the reciprocal of 3/5.
            When we multiply a fraction by its reciprocal, we get 1. Therefore, the first step in our technique is — find the reciprocal of the divisor.

            2. Then, we multiply the dividend by this reciprocal to obtain the quotient.

            In summary, to divide two fractions —
            • Find the reciprocal of the divisor.
            • Multiply this reciprocal by the dividend to get the quotient.

            Therefore, a/b ÷ c/d = d/c × a/b = (d × a)/(c × b).

            This can be rewritten as — a/b ÷ c/d = a/b × d/c = (a × d)/(b × c).

            The methods and formulas for addition, subtraction, and multiplication of fractions that you learned earlier, and these methods and formulas for division of fractions, were first clearly stated in their general form by Brahmagupta in his work 'Brahmasphuta-siddhanta' (628 CE).

            Thus, using the Brahmagupta formula above, for example, to find the value of 2/3 ÷ 3/5, we write —

            2/3 ÷ 3/5 = 2/3 × 5/3 = (2 × 5)/(3 × 3) = 10/9.

            Example 3 — A milkman pours 1/4 liter of milk equally into 5 cups. How much milk is there in each cup?

            According to the Brahmagupta method, we perform division as follows —

            The reciprocal of 5 (divisor) is 1/5.
            Multiplying this reciprocal by the dividend (1/4) gives us — 1/5 × 1/4 = 1/20.

            Therefore, each cup contains 1/20 liter of milk.

            Example 4 — Some of the oldest examples of working with non-unit fractions are found in the most ancient geometric texts, the Shulba Sutras. Here is an example from Baudhayana's Shulba Sutra (c. 800 BCE).

            An area of 7 1/2 square units is to be covered with square bricks, each with side 1/5 unit.
            How many such square bricks are needed?

            Area of each square brick = 1/5 × 1/5 = 1/25 square units.
            Total area to be covered = 7 1/2 square units = 15/2 square units.

            As (number of bricks) × (area of one brick) = total area,
            Number of bricks = 15/2 ÷ 1/25.

            The reciprocal of the divisor is 25.
            Multiplying this reciprocal by the dividend gives us — 25 × 15/2 = (25 × 15)/2 = 375/2.

            Example 5 — This problem was also discussed by Chaturveda Prithudaka Swami (c. 860 CE) in his commentary on Brahmagupta's 'Brahmasphuta-siddhanta'.

            Four fountains fill a tank. The first fountain can fill the tank in one day. The second can fill it in half a day. The third can fill it in one-fourth of a day. The fourth fountain can fill the tank in 1/5 of a day. If they are all opened together, how long will it take them to fill the tank?

            Let's solve this problem step by step.

            How many times in one day will —
            • The first fountain fill the tank? = 1 ÷ 1 = 1
            • The second fountain fill the tank? = 1 ÷ 1/2 = 2
            • The third fountain fill the tank? = 1 ÷ 1/4 = 4
            • The fourth fountain fill the tank? = 1 ÷ 1/5 = 5

            Together, the four fountains will fill the tank 1 + 2 + 4 + 5 = 12 times in one day.

            Thus, the four fountains together will take 1/12 of a day to fill the tank.`,
            images: []
          },
          {
            title: "Fractional Relationships",
            content: `Here is a square with some lines drawn inside it.

            What fraction of the whole square's area does the shaded region occupy?

            There are different methods to solve this problem. One of them is —

            Let the area of the whole square be 1 square unit.

            We can see that the top right square occupies 1/4 of the area of the whole square (in Figure 8.5).

            Let's look at this red square. The triangle inside it (in yellow) has an area half of the red square's area. Therefore,

            Area of the yellow triangle = 1/2 × 1/4 = 1/8 square unit.

            What fraction of this yellow triangle is shaded? The shaded region occupies 3/4 of the area of the yellow triangle. Can you find out why?

            Area of the shaded region = 3/4 × 1/8 = 3/32 square unit.

            Thus, the shaded region occupies 3/32 of the area of the whole square.

            In each of the figures given below, find the fraction of the larger square occupied by the shaded region.

            In the next chapter, we will solve more such interesting problems.`,
            images: ["Figure 8.4", "Figure 8.5", "Figure 8.6", "Additional figures for practice"]
          },
          {
            title: "A Donation of a Damma",
            content: `The following problem is translated from the work 'Lilavati' composed by Bhaskaracharya (Bhaskara II) in 1150 CE.

            "O wise one! A miser gave a beggar 1/2 of 2/3 of 3/4 of 1/5 of 1/16 of 1/4 of a damma. If you know the mathematics of fractions well, tell me, how many cowries did the miser give to the beggar?"

            Damma refers to a silver coin used in those days. The story says that 1 damma was equivalent to 1280 cowries. Let's see what fraction of a damma the person gave —

            1/2 × 2/3 × 3/4 × 1/5 × 1/16 × 1/4 of a damma

            Solving this, we get 6/7680.

            Simplifying this to its lowest terms, we get — 6/7680 = 1/1280.

            Therefore, the beggar was given 1 cowrie.

            You can see the wit of Bhaskaracharya in the answer. The miser gave the beggar only a single coin of the smallest value, i.e., just one cowrie.

            Around the 12th century, various types of coins were in circulation in different empires of the Indian subcontinent. Mostly, gold coins called 'Dinar' (Gadyana and Huna); silver coins called 'Damma' or 'Tanka'; copper coins called 'Kasu' or 'Pana' and 'Mashaka'; and 'Cowries' were used. The exact exchange (conversion) rates of these coins depended on the region, time period, economic conditions, weight of the coins, and their purity.

            Gold coins had a higher value and were used for large transactions and accumulating wealth. Silver coins were mostly used for daily transactions. Copper coins had a lower value and were used for small transactions. The cowrie was the lowest denomination currency and was used for very small transactions or as change.

            If we assume that 1 gold Dinar = 12 silver Dammas, 1 silver Damma = 4 copper Panas, 1 copper Pana = 6 Mashakas, and 1 Pana = 30 cowries,

            Then 1 copper Pana = ? gold Dinar, 1 cowrie = ? copper Pana, 1 cowrie = ? gold Dinar.`,
            images: []
          },
          {
            title: "A Historical Glimpse",
            content: `As you have seen, fractions are important numbers that play a significant role in various daily life problems, including dividing and sharing quantities or magnitudes equally. The general concept of non-unit fractions, along with arithmetic operations of addition, subtraction, multiplication, and division that we use today, was largely developed in India. The ancient Indian geometric texts are called Shulba Sutras. They were composed before 800 BCE. These texts were related to the construction of altars for rituals. They made extensive use of general non-unit fractions. This also included dividing such fractions, as we saw in Example 3.

            Fractions had made their place in India's popular culture well before 150 CE, as evidenced by an informal reference to expressing fractions in lowest terms in the philosophical work of the renowned Jain scholar Umaswati.

            The general rules for arithmetic operations on fractions that we use today were first codified by Brahmagupta in his work 'Brahmasphuta-siddhanta' in 628 CE. We have already seen his methods for adding and subtracting general fractions. For multiplying general fractions, Brahmagupta wrote —

            "The product of two or more fractions is obtained by dividing the product of the numerators by the product of the denominators." (Brahmasphuta-siddhanta, Verse 12.1.3)

            The formula is: a/b × c/d = (a × c)/(b × d).

            For dividing general fractions, Brahmagupta wrote —

            "Division of fractions is performed by interchanging the numerator and denominator of the divisor; then the numerator of the dividend is multiplied by the new numerator and the denominator by the new denominator."

            Bhaskara II, in his book 'Lilavati' (1150 CE), further clarified Brahmagupta's statement in the context of the concept of the reciprocal.

            "Division of one fraction by another is equal to the product of the first fraction with the reciprocal of the second." (Lilavati, Verse 2.3.40)

            Both verses are equivalent to the formula: a/b ÷ c/d = a/b × d/c = (a × d)/(b × c).

            Bhaskara I, in his commentary 'Aryabhatiya Bhashya' (629 CE) on Aryabhata's work (499 CE), described the geometric interpretation of multiplication of fractions (which we saw earlier) as dividing a square into equal parts corresponding to length and width, thus partitioning it into rectangles.

            Many other Indian mathematicians, such as Sridharacharya (c. 750 CE), Mahaviracharya (c. 850 CE), Chaturveda Prithudaka Swami (c. 860 CE), and Bhaskara II (c. 1150 CE), further developed the use of fraction arithmetic.

            The Indian theory of fractions and arithmetic operations on them was transmitted and further developed by Arab and African mathematicians like Al-Hassar (c. 1192 CE) in Morocco. This theory spread to Europe through the Arabs over the next few centuries and only came into general use in Europe around the 17th century. After that, it spread throughout the world. This theory is truly indispensable in modern mathematics today.`,
            images: []
          },
          {
            title: "Find Out",
            content: `1. Evaluate the following —
            (a) 3 ÷ 7/9
            (b) 14/4 ÷ 2
            (c) 2/3 ÷ 2/3
            (d) 14/6 ÷ 7/3
            (e) 4/3 ÷ 3/4
            (f) 7/4 ÷ 1/7
            (g) 8/2 ÷ 4/15
            (h) 1/5 ÷ 1/9
            (i) 1/6 ÷ 11/12
            (j) 3/2 ÷ 1/3

            2. For each question given below, choose the expression that describes the solution. Then simplify it.
            (a) Maria bought 8 meters of ribbon to decorate bags made for school. She used 1/4 meter of ribbon for each bag and used up all the ribbon. How many bags did she decorate?
                (i) 8 × 1/4
                (ii) 1/8 × 1/4
                (iii) 8 ÷ 1/4
                (iv) 1/4 ÷ 8
            (b) 1/2 meter of ribbon is used to make 8 badges. What is the length of ribbon used to make each badge?
                (i) 8 × 1/2
                (ii) 1/2 ÷ 1/8
                (iii) 8 ÷ 1/2
                (iv) 1/2 ÷ 8
            (c) A baker needs 1/6 kg of flour to make a large loaf. He has 5 kg of flour. How many loaves can he make?
                (i) 5 × 1/6
                (ii) 1/6 ÷ 5
                (iii) 5 ÷ 1/6
                (iv) 5 × 6

            3. If 1/4 kg of flour is used to make 12 loaves, how much flour is used to make 6 loaves?

            4. This problem is mentioned in the book 'Pati Ganita' written by Sridharacharya in the 9th century CE, "O friend! Think and tell, what will be obtained by adding 1 ÷ 1/6, 1 ÷ 1/10, 1 ÷ 1/13, 1 ÷ 1/9, and 1 ÷ 1/2?" What will be the friend's answer?

            5. Meera is reading a novel which has 400 pages. She read 1/5 of the total pages yesterday and 3/10 of the total pages today. How many more pages does she need to read to complete the novel?

            6. A car travels 16 km using 1 liter of petrol. How far will it travel using 2 3/4 liters of petrol?

            7. Amritpal chooses a destination for his holidays. If he goes by train, it will take him 5 1/2 hours to reach there. If he goes by airplane, it will take him 1/2 hour. How much time will he save by going by airplane?

            8. Mariam's grandmother makes a cake. Mariam and her cousin eat 4/5 of the cake. The remaining cake is divided equally among Mariam's three friends. What fraction of the cake does each friend get?

            9. Choose one or more options to describe the product of (565/465) × (707/676) —
            (a) > 565/465
            (b) < 565/465
            (c) > 707/676
            (d) < 707/676
            (e) > 1
            (f) < 1

            10. What fraction of the whole square is shaded?

            11. A group of ants set out in search of food. As they search, they keep dividing equally at each point (as shown in Figure 8.7) and reach two food sources — one group near the mango tree and the other near the sugarcane field. What fraction of the original group reached each food source?

            12. What is 1 – 1/2?
            What is (1 – 1/2) × (1 – 1/3)?
            What is (1 – 1/2) × (1 – 1/3) × (1 – 1/4) × (1 – 1/5)?
            What is (1 – 1/2) × (1 – 1/3) × (1 – 1/4) × (1 – 1/5) × (1 – 1/6) × (1 – 1/7) × (1 – 1/8) × (1 – 1/9) × (1 – 1/10)?
            Make a general statement and explain it.`,
            images: ["Figure 8.7"]
          }
        ],
        summary: [
          "Brahmagupta's formula for multiplication of fractions: a/b × c/d = (a × c)/(b × d).",
          "When multiplying fractions, if there are common factors in numerators and denominators, we can cancel them before multiplying.",
          "In multiplication, when one of the numbers being multiplied is between 0 and 1, the product is smaller than the other number. When one of the numbers being multiplied is greater than 1, the product is greater than the other number.",
          "The reciprocal of a fraction a/b is b/a. When a fraction is multiplied by its reciprocal, the product is 1.",
          "Brahmagupta's formula for division of fractions: a/b ÷ c/d = a/b × d/c = (a × d)/(b × c).",
          "In division, when the divisor is between 0 and 1, the quotient is greater than the dividend. When the divisor is greater than 1, the quotient is smaller than the dividend."
        ]
      }
    }
  ]
};

export default mathematics;