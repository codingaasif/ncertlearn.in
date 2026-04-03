/* eslint-disable no-dupe-keys */
// src/data/ncertData/class8/math.js

const mathematics = {
  subjectName: "Mathematics",
  chapters: [
    // chapter 1 Square and Cube Numbers
    {
      id: 1,
      title: "Square and Cube Numbers",
      content: {
        introduction:
          "Queen Ratnamanjuri wrote a will that included a puzzle along with the details of her jewels. Her son Khoisanam and his 99 relatives were invited to read the will. The queen wanted to give all her jewels to her son, but she knew that if she did so, all her 99 relatives would trouble her son forever. The queen knew that she had taught her son everything he would need to solve the puzzle in the will. This is what the queen wrote in her will—",
        sections: [
          {
            title: "The Locker Puzzle",
            content: `"I have created a puzzle. If all 100 of you solve it together, you will share the jewels equally. If any one of you solves it first, that person will inherit all the jewels. Good luck to you all."

            The minister took Khoisanam and his 99 relatives to a secret room containing 100 lockers. The minister explained the puzzle as follows—

            "Each person is assigned a number from 1 to 100."

            • The person with number 1 opens every locker.
            • The person with number 2 toggles (i.e., if a locker is open, they close it; if it is closed, they open it) every second locker (2nd, 4th, 6th...).
            • The person with number 3 toggles every third locker (3rd, 6th, 9th...).
            • The person with number 4 toggles every fourth locker (4th, 8th, 12th...).
            This process continues until all 100 people have had their turn. In the end, only a few lockers remain open, and the numbers on them reveal the secret code about the jewels."

            Even before the process began, Khoisanam understood which lockers would be open in the end. How did he figure this out?

            Hint — Find out how many times each locker is toggled.`,
            images: ["Diagram of lockers"],
          },
          {
            title: "Understanding the Solution",
            content: `If a locker is toggled an odd number of times, it will be open. Otherwise, it will remain closed. The number of times a locker is toggled is equal to the number of factors of that locker number.

            For example, consider locker number 6. Person 1 opens it, person 2 closes it, person 3 opens it, and person 6 closes it. The numbers 1, 2, 3, and 6 are all the factors of 6. If the number of factors is even, the locker is toggled an even number of times and will end up closed.

            For any number, each factor has a corresponding 'co-factor' that multiplies with it to give the number. For the number 6, 1 and 6 form one pair of co-factors, and 2 and 3 form another pair.

            Does every number have an even number of factors?

            For the number 1: 1 × 1 — the only factor is 1.
            For the number 4: 1 × 4, 2 × 2 — factors are 1, 2, and 4.
            For the number 9: 1 × 9, 3 × 3 — factors are 1, 3, and 9.

            In some cases, a factor pair consists of the same number, like 2 × 2. Can you find other numbers where the number of factors is odd?

            For example, 36 has a factor pair 6 × 6, where both numbers are 6. Does this number have an odd number of factors? If every factor of 36 has a distinct co-factor besides 6, then we can be sure that 36 has an odd number of factors. Is this statement true? Check it.

            Thus, based on the above understanding, the numbers 1, 4, 9, 16, etc., have an odd number of factors — 1 × 1, 2 × 2, 3 × 3, 4 × 4, ...

            The product obtained by multiplying a number by itself is called a square number or a perfect square. Only perfect squares have an odd number of factors because each of them has a factor that, when multiplied by itself, gives the number. Therefore, every locker whose number is a perfect square will remain open.

            List the numbers of the lockers that remain open.

            Khoisanam immediately collects the clues from these 10 lockers and reads them: "The passcode includes the first five lockers that were toggled exactly twice."

            Which are these five lockers?

            The lockers toggled exactly twice are those with prime numbers, because each prime number has exactly two factors: 1 and the number itself. Therefore, the code is 2-3-5-7-11.`,
            images: [],
          },
          {
            title: "1.1 Square Numbers",
            content: `Why are numbers like 1, 4, 9, 16, … called squares? We know that the area of a square (in square units) is equal to the product of its sides. The table below shows the areas of squares with different side lengths.`,
            tableData: {
              headers: ["Side Length (in units)", "Area (in square units)"],
              rows: [
                ["1", "1 × 1 = 1"],
                ["2", "2 × 2 = 4"],
                ["3", "3 × 3 = 9"],
                ["4", "4 × 4 = 16"],
                ["5", "5 × 5 = 25"],
                ["10", "10 × 10 = 100"],
              ],
            },
            // eslint-disable-next-line no-dupe-keys
            content: `We use the following notation for squares:

            1 × 1 = 1² = 1
            2 × 2 = 2² = 4
            3 × 3 = 3² = 9
            4 × 4 = 4² = 16
            5 × 5 = 5² = 25
            ...
            In general, for any number n, we write n × n = n², which is read as 'n squared'.

            Can we make a square with side 3/5 or 2.5 units? Yes, their area would be (3/5)² = (3/5) × (3/5) = 9/25 square units, and (2.5)² = 2.5 × 2.5 = 6.25 square units.

            Squares of natural numbers are called perfect squares. For example, 1, 4, 9, 16, 25, … are all perfect squares.

            Patterns and Properties of Perfect Squares
            Find the squares of the first 30 natural numbers and enter them in the table below.`,
            tableData2: {
              headers: [
                "Number",
                "Square",
                "Number",
                "Square",
                "Number",
                "Square",
              ],
              rows: [
                ["1² = 1", "11² = 121", "21² = 441"],
                ["2² = 4", "12² = __", "22² = __"],
                ["3² = 9", "13² = __", "23² = __"],
                ["4² = 16", "14² = __", "24² = __"],
                ["5² = 25", "15² = __", "25² = __"],
                ["6² = __", "16² = __", "26² = __"],
                ["7² = __", "17² = __", "27² = __"],
                ["8² = __", "18² = __", "28² = __"],
                ["9² = __", "19² = __", "29² = __"],
                ["10² = __", "20² = __", "30² = __"],
              ],
            },
            content2: `What patterns did you observe in the above table? Share your observations with your classmates.

            Study the squares given in the table. What are the units digits of these square numbers? All these numbers end in 0, 1, 4, 5, 6, or 9. None of them end in 2, 3, 7, or 8.

            If a number ends in 0, 1, 4, 5, 6, or 9, is it always a square number? 16 and 36 are both square numbers ending in 6. However, 26 also ends in 6 but is not a square. So, we cannot determine whether a number is a square just by looking at its units digit. But the units digit can tell us when a number is NOT a square. If a number ends in 2, 3, 7, or 8, we can say for sure that it is not a perfect square.

            Write 5 numbers whose units digit tells you they are not squares.

            The squares of 1², 9², 11², 19², 21², and 29² all end in 1. Now write the next two such squares. Note that if a number ends in 1 or 9, its square ends in 1.

            Let's consider square numbers ending in 6 — 16 = 4², 36 = 6², 196 = 14², 256 = 16², 576 = 24², and 676 = 26².

            Which of the following numbers have 6 as their units digit?
            (i) 38 (ii) 34 (iii) 46 (iv) 56 (v) 74 (vi) 82

            From the table you completed, find more patterns by observing the numbers and their squares.

            Consider the following numbers and their squares.

            If a number ends with 3 zeros, how many zeros will its square end with?

            What observation did you make about the number of zeros at the end of a number and the number of zeros at the end of its square? Will this always be true? Can we say that the number of zeros at the end of a square can only be an even number?

            What are your thoughts on the reverse relationship between a number and its square?`,
            images: ["Patterns showing numbers and their squares"],
          },
          {
            title: "Perfect Squares and Odd Numbers",
            content: `Let's look at the differences between consecutive squares. What did you observe?

            4 – 1 = 3, 9 – 4 = 5, 16 – 9 = 7, 25 – 16 = 9.

            Does this pattern continue for the next few square numbers?

            From this pattern, we see that adding consecutive odd numbers starting from 1 gives consecutive square numbers, as shown below.

            1 = 1 = 1²
            1 + 3 = 4 = 2²
            1 + 3 + 5 = 9 = 3²
            1 + 3 + 5 + 7 = 16 = 4²
            1 + 3 + 5 + 7 + 9 = 25 = 5²
            1 + 3 + 5 + 7 + 9 + 11 = 36 = 6²
            1 + 3 + 5 + 7 + 9 + 11 + 13 = 49 = 7²
            and so on.

            Thus, we can say that a natural number is not a perfect square if it cannot be expressed as the sum of consecutive odd numbers starting from 1. We can use this result to find out whether a natural number is a perfect square.

            For example, consider 38.
            38 – 1 = 37
            37 – 3 = 34
            34 – 5 = 29
            29 – 7 = 22
            22 – 9 = 13
            13 – 11 = 2
            2 – 13 = –11
            This shows that 38 cannot be expressed as the sum of consecutive odd numbers starting from 1.

            How many natural numbers lie between two consecutive perfect squares? Have you observed any pattern?

            How many square numbers are there between 1 and 100? How many square numbers are there between 101 and 200? Using the square table you completed earlier, fill in the values in the spaces below and tabulate the number of squares in each block of 100. Also, tell which is the largest square less than 1000?

            501 – 600, 601 – 700, 701 – 800, 801 – 900, 901 – 1000

            Perfect Squares and Triangular Numbers
            Do you remember triangular numbers?

            Can you see any relationship between triangular numbers and square numbers? Extend the pattern shown and draw the next step.`,
            images: [
              "Diagrams showing the relationship between triangular numbers and square numbers",
            ],
          },
          {
            title: "Square Roots",
            content: `The area of a square is 49 square centimeters. What is the length of its side? We know that 7 × 7 = 49 or 7² = 49. Therefore, the side of a square with area 49 sq cm is 7 cm. We say that the square root of 49 is 7. In general, if y = x², then the square root of y is x.

            What is the square root of 64? We know that 8 × 8 = 64. So, the square root of 64 is 8. What about –8 × –8? 8² = 64 and (–8)² = 64. Therefore, the square roots of 64 are +8 and –8.

            Every perfect square number has two integer square roots. One is positive and the other is negative. The square root of a number is denoted by the symbol √. Therefore, √64 = ±8 and √100 = ±10.

            Note that √8² = ±8 and √10² = ±10. In general, √n² = ±n. In this chapter, we will consider only positive square roots.

            If we are given a number like 327 or 576, how will we find out if it is a perfect square? If it is a perfect square, how can we find its square root?

            We know that perfect square numbers end in 1, 4, 9, 6, 5, or an even number of zeros. However, this condition is not sufficient to guarantee a number is a square.

            We can say for sure that 327 is not a perfect square number. But we cannot say for sure whether 576 is a perfect square number.

            1. We can list all perfect square numbers in order and see if 576 is among them. We know that 20² = 400. We can find the squares of 21, 22, 23, ... until we get 576 or a number greater than it.
            20² = 400
            21² = 441
            22² = 484
            23² = 529
            24² = 576
            However, this process is not suitable for large numbers.

            2. Recall that every square number can be represented as the sum of consecutive odd numbers starting from 1.
            Consider √81.
            81 – 1 = 80
            80 – 3 = 77
            77 – 5 = 72
            72 – 7 = 65
            65 – 9 = 56
            56 – 11 = 45
            45 – 13 = 32
            32 – 15 = 17
            17 – 17 = 0
            We subtracted consecutive odd numbers starting from 1 from 81 until we got 0 at the 9th step. Therefore, √81 = 9.
            Can we find the square root of 729 using this method? Yes, but it will take a long time.

            3. We know that a perfect square can be obtained by multiplying an integer by itself. Can prime factorization help us determine if a number is a perfect square?

            Yes, if we split the prime factors of a number into two equal groups, the product of the prime factors in either group gives the square root of the number.

            Is 324 a perfect square?
            324 = 2 × 2 × 3 × 3 × 3 × 3
            These can be grouped as follows:
            324 = (2 × 3 × 3) × (2 × 3 × 3) = (2 × 3 × 3)² = 18²
            We can also write the prime factors in pairs as:
            324 = (2 × 2) × (3 × 3) × (3 × 3)
            This shows that 324 is a perfect square.
            324 = (2 × 3 × 3)² = 18². Therefore, 18² = 324.

            Is 156 a perfect square?
            The prime factorization of 156 is 2 × 2 × 3 × 13. We cannot make pairs of these factors. Therefore, 156 is not a perfect square.

            Using prime factorization, find out whether 1156 and 2800 are perfect squares.

            We can estimate the square root of a large perfect square by limiting the range using known perfect squares.

            For example, to find √1936, we can reason as follows—
            (i) 1936 lies between 1600 (40²) and 2500 (50²). Therefore, 40 < √1936 < 50.
            (ii) The last digit of 1936 is 6. Therefore, the last digit of its square root must be 4 or 6. It could be 44 or 46.
            (iii) To check, we can compare 1936 with the square of 45. 45² = (40 + 5)² = 40² + 2 × 40 × 5 + 5² = 1600 + 400 + 25 = 2025.
            (iv) 2025 > 1936. Therefore, 40 < √1936 < 45.
            (v) From (ii) and (iv), we can guess and check that √1936 = 44.

            Consider the following situation.

            Arif and Bijoy play a game. One says a number, and the other has to find its square root.

            Bijoy needs to estimate the square root of 250. We know that 100 < 250 < 400, and √100 = 10, √400 = 20. Therefore, 10 < √250 < 20.
            But we are still not close to the number whose square is 250. We know that 15² = 225 and 16² = 256.
            Therefore, 15 < √250 < 16. Since 256 is closer to 250 than 225, √250 is approximately 16. We also know it is less than 16.

            Here is another problem involving estimating square roots.

            Akhil has a piece of cloth with an area of 125 sq cm. He wants to know if he can cut a square handkerchief with side 15 cm. If not, what is the maximum integer side length square handkerchief he can cut from this piece?

            125 is not a perfect square. The nearest perfect squares are 11² = 121 and 12² = 144. Therefore, the largest square handkerchief with integer side length that can be cut from this cloth has side 11 cm.`,
            images: [],
          },
          {
            title: "Let's Find Out",
            content: `1. Which of the following numbers are not perfect squares?
            (i) 2032 (ii) 2048 (iii) 1027 (iv) 1089

            2. Which of 64², 108², 292², 36² has 4 as its units digit?

            3. If 125² = 15625, what is the value of 126²?
            (i) 15625 + 126 (ii) 15625 + 26 (iii) 15625 + 253 (iv) 15625 + 251 (v) 15625 + 51

            4. Find the side length of a square whose area is 441 square meters.

            5. Find the smallest square number that is divisible by 4, 9, and 10.

            6. Find the smallest number by which 9408 must be multiplied so that the product becomes a perfect square. Also, find the square root of the product.

            7. How many numbers lie between the squares of the following numbers?
            (i) 16 and 17 (ii) 99 and 100

            8. Fill in the missing numbers in the following pattern:
            1² + 2² + 2² = 3²
            2² + 3² + 6² = 7²
            3² + 4² + 12² = 13²
            4² + 5² + 20² = (___)²
            9² + 10² + (___)² = (___)²

            9. How many small squares are there in the given figure? Write the prime factorization of the number of small squares.`,
            images: ["Figure with small squares"],
          },
          {
            title: "1.2 Cube Numbers",
            content: `You are already familiar with the term 'cube' from geometry. A cube is a solid shape where all edges meet at right angles and are equal in length. How many unit cubes (1 cm side) are needed to make a cube of side 2 cm?

            How many unit cubes are needed to make a cube of side 3 cm?

            Let's consider the numbers 1, 8, 27, ...
            These numbers are called perfect cubes. Can you tell why they are called cubes? Each of these numbers is obtained by multiplying a number by itself three times. We see that:
            1 = 1 × 1 × 1
            8 = 2 × 2 × 2
            27 = 3 × 3 × 3

            Is 9 a perfect cube?
            We see that 2 × 2 × 2 = 8 and 3 × 3 × 3 = 27. This shows that 9 is not a perfect cube, and neither is any number between 10 and 26 a perfect cube.

            Can you estimate the number of unit cubes in a cube of side 4 units?
            It has 64 unit cubes! If you look carefully, each layer of this cube has 4 × 4 unit cubes. Each square layer has 16 unit cubes (4 × 4), and there are 4 such layers.
            Therefore, the total number of unit cubes is 4 × 4 × 4 = 64.
            Similarly, 5³ = 5 × 5 × 5 = 125.
            In general, for any number n, we write the cube n × n × n as n³.

            Complete the following table:`,
            tableData: {
              headers: ["Number", "Cube", "Number", "Cube"],
              rows: [
                ["1³ = 1", "11³ = 1331", "21³ = __", "31³ = __"],
                ["2³ = 8", "12³ = 1728", "22³ = __", "32³ = __"],
                ["3³ = 27", "13³ = 2197", "23³ = __", "33³ = __"],
                ["4³ = 64", "14³ = 2744", "24³ = __", "34³ = __"],
                ["5³ = 125", "15³ = 3375", "25³ = __", "35³ = __"],
                ["6³ = __", "16³ = __", "26³ = __", "36³ = __"],
                ["7³ = __", "17³ = 4913", "27³ = __", "37³ = __"],
                ["8³ = __", "18³ = 5832", "28³ = __", "38³ = __"],
                ["9³ = __", "19³ = 6859", "29³ = __", "39³ = __"],
                ["10³ = __", "20³ = 8000", "30³ = __", "40³ = __"],
              ],
            },
            // eslint-disable-next-line no-dupe-keys
            content: `What patterns do you observe in the above table?

            We know that for squares, the possible units digits are 0, 1, 4, 5, 6, 9. What are the possible units digits for perfect cubes?

            Can you find the number of 1-digit, 2-digit, and 3-digit perfect cubes, similar to squares? What observations do you make?

            Can a perfect cube end with two zeros (00)? Explain.

            Just as we can square fractions, decimals, or negative numbers like (2/3)², (13.08)², and (–6)², we can also calculate cubes of numbers like (2/3)³, (13.08)³, and (–6)³.
            (2/3)³ = (2/3) × (2/3) × (2/3) = 8/27
            (13.08)³ = 13.08 × 13.08 × 13.08 = 2237.810112
            (–6)³ = (–6) × (–6) × (–6) = –216

            Taxicab Numbers
            Once, when Srinivasa Ramanujan was working at Cambridge University with G.H. Hardy, Hardy came to visit Ramanujan in the hospital. Hardy had arrived in a taxi numbered 1729. He remarked that 1729 was a 'very dull number' and feared it might be a bad omen. Ramanujan immediately replied, "No, Hardy, it is a very interesting number. It is the smallest natural number that can be expressed as the sum of two cubes in two different ways."
            1729 = 1³ + 12³ = 9³ + 10³
            As a result of this story, 1729 is known as the Hardy-Ramanujan number. Numbers that can be expressed as the sum of two cubes in two different ways are called taxicab numbers.

            The next two taxicab numbers after 1729 are 4104 and 13832. Find the two ways to express each of these as the sum of two positive cubes.

            How did Ramanujan know this? Ramanujan had a deep love for numbers. He played with numbers throughout his life. During Ramanujan's time at Cambridge, his colleagues were often amazed by his ability to see deep patterns in numbers. However, this seemed frivolous to others. His colleague John Littlewood once said, "Every positive integer was one of his personal friends."

            Perfect Cubes and Consecutive Odd Numbers
            Consecutive odd numbers also play a role with cubes. Observe the following pattern carefully:
            1 = 1 = 1³
            3 + 5 = 8 = 2³
            7 + 9 + 11 = 27 = 3³
            13 + 15 + 17 + 19 = 64 = 4³
            21 + 23 + 25 + 27 + 29 = 125 = 5³
            31 + 33 + 35 + 37 + 39 + 41 = 216 = 6³
            Continuing this pattern, we get the following sum of consecutive odd numbers:
            91 + 93 + 95 + 97 + 99 + 101 + 103 + 105 + 107 + 109.
            Can you find the sum without calculating?`,
            images: ["Diagrams of cubes"],
          },
          {
            title: "Cube Roots",
            content: `We know that 8 = 2³. We call 2 the cube root of 8 and denote it as 2 = ∛8.
            In general, if y = x³, then the cube root of y is x. It is denoted as x = ∛y.
            Therefore, ∛8 = ∛2³ = 2.
            Similarly, ∛27 = ∛3³ = 3 and ∛1000 = ∛10³ = 10.
            In general, ∛n³ = n.

            How can we find out if a number is a cube? Let's take inspiration from the example of squares and see if we can use prime factors.

            Let's see if 3375 is a perfect cube.
            3375 = 3 × 3 × 3 × 5 × 5 × 5
            Can the factors be divided into three equal groups? For 3375, we can make three groups of (3 × 5).
            Therefore, 3375 = (3 × 5) × (3 × 5) × (3 × 5) = (3 × 5)³ = 15³.

            Another method is to check if the factors can be split into triplets:
            3375 = (3 × 3 × 3) × (5 × 5 × 5) = 3³ × 5³ = (15)³
            This means ∛3375 = 15.

            Is 500 a perfect cube?
            500 = 2 × 2 × 5 × 5 × 5. We see that the factors cannot be divided into three equal groups. Therefore, 500 is not a perfect cube.`,
            tableData: {
              headers: [
                "Prime factorization of a number",
                "Prime factorization of its cube",
              ],
              rows: [
                ["4 = 2 × 2", "4³ = 64 = 2 × 2 × 2 × 2 × 2 × 2 = 2³ × 2³"],
                ["6 = 2 × 3", "6³ = 216 = 2 × 2 × 2 × 3 × 3 × 3 = 2³ × 3³"],
                ["15 = 3 × 5", "15³ = 3375 = 3 × 3 × 3 × 5 × 5 × 5 = 3³ × 5³"],
                [
                  "12 = 2 × 2 × 3",
                  "12³ = 1728 = 2 × 2 × 2 × 2 × 2 × 2 × 3 × 3 × 3 = 2³ × 2³ × 3³",
                ],
              ],
            },
            content2: `Observe that each prime factor of a number appears three times in the prime factorization of its cube.

            Find the cube roots of the following numbers:
            (i) ∛64 = ?
            (ii) ∛512 = ?
            (iii) ∛729 = ?

            Consecutive Differences
            We know that the difference between consecutive perfect squares gives us a sequence of odd numbers. Observe the figure below. The differences in the sequence of perfect squares are shown. After two steps, all differences become constant.

            Find the differences between consecutive perfect cubes until the differences become constant.

            Perfect cubes: 1, 8, 27, 64, 125, 216, ...`,
            images: ["Figure showing constant second differences for squares"],
          },
          {
            title: "1.3 A Glimpse of History",
            content: `The first lists of perfect squares and perfect cubes were compiled by the Babylonians around 1700 BCE. These lists, found on clay tablets, were used to quickly find square roots and cube roots. They were used to solve problems related to land measurement, architectural design, and other geometric calculations.

            In ancient Sanskrit texts, the word 'varga' was used both for a square shape/its area and for the square of a number. Similarly, the word 'ghana' was used for a solid cube as well as for the product of a number multiplied by itself three times. The fourth power was called 'varga-varga'. These terms were in use in India at least as early as the 3rd century BCE.

            According to Aryabhata (499 CE):
            "A square shape with four equal sides and the number representing its area are called varga. The product of two equal numbers is also called varga."
            Thus, the origin of the term 'varga' for the square power comes from the geometric representation of a square shape.

            Why is the mathematical operation of √ (square root, cube root, etc.) called 'mula' (root)?

            This is because in ancient India, the Sanskrit word 'mula' (meaning: root of a plant, base, cause, origin) was used for the mathematical operation of taking a square root. In Sanskrit, 'varga-mula' was used for square root, and 'ghana-mula' for cube root. Subsequently, the mathematical concept of the Sanskrit word 'mula' was imitated in Arabic and Latin through their words for the root of a plant, 'jizr' and 'radix' respectively. The use of the word 'mula' in India dates back to at least the 1st century BCE. Another term used was 'pada' (foot, base, cause, origin). According to Brahmagupta (628 CE), "The 'pada' (root) of a 'krti' (square) is that which is its square."`,
            images: ["Image of a clay tablet"],
          },
          {
            title: "Let's Find Out",
            content: `1. Find the cube roots of 27000 and 10648.

            2. By which number should 1323 be multiplied to make it a perfect cube?

            3. State whether the following statements are true or false. Also, explain your reasoning.
            (i) The cube of an odd number will be even.
            (ii) There is no perfect cube that ends with 8.
            (iii) The cube of a 2-digit number can be a 3-digit number.
            (iv) The cube of a 2-digit number can have seven or more digits.
            (v) The number of factors of a cube number is odd.

            4. You are told that 1331 is a perfect cube. Without factorizing the number, can you guess what its cube root is? Similarly, guess the cube roots of 4913, 12167, and 32768.

            5. Which is the largest among the following? Explain your reasoning.
            (i) 67³ – 66³
            (ii) 43³ – 42³
            (iii) 67² – 66²
            (iv) 43² – 42²`,
          },
        ],
        summary: [
          "A number obtained by multiplying a number by itself is called a square number. Squares of natural numbers are called perfect squares.",
          "All perfect squares end in 0, 1, 4, 5, 6, or 9. Squares can only have an even number of zeros at the end.",
          "Square root is the inverse operation of squaring. Every perfect square has two integer square roots (positive and negative). The positive square root is denoted by the symbol √. For example, √9 = 3.",
          "A number obtained by multiplying a number by itself three times is called a cube. For example, 1, 8, 27, ... are cubes.",
          "A number is a perfect square if its prime factors can be divided into two equal groups.",
          "A number is a perfect cube if its prime factors can be divided into three equal groups.",
          "The symbol ∛ denotes the cube root. For example, ∛27 = 3.",
        ],
      },
    },
    // chapter 2  The Game of Exponents
    {
      id: 2,
      title: "The Game of Exponents",
      content: {
        introduction:
          "In this chapter, we will explore exponential growth through the fascinating activity of folding paper. We will learn about exponential notation, the laws of exponents, and how to use scientific notation to represent very large and very small numbers. We will also explore combinations, the power of zero and negative exponents, and understand the scale of large numbers in our world.",
        sections: [
          {
            title: "2.1 Experiencing the Game of Exponents",
            content: `An Impossible Feat!

            Take the largest possible piece of paper. First, fold it once. Fold it again, and keep folding it continuously.

            ? How many times can you fold the paper?

            Astu says, "I've heard that you can't fold a paper more than 7 times."

            Roxi says, "What if we use a thin paper, like a newspaper or tissue paper?"

            Try this process with different types of paper and see what happens.

            ? You can fold the paper as many times as you want. Suppose you fold the paper 30 times. What will be the thickness of the paper after 30 folds? Take a guess.

            Let's find out what the thickness will be after folding the paper 46 times. Assume the thickness of the paper is 0.001 cm.`,
            tableData: {
              headers: [
                "Fold",
                "Thickness (cm)",
                "Fold",
                "Thickness (cm)",
                "Fold",
                "Thickness (cm)",
              ],
              rows: [
                ["1", "0.002", "7", "0.128", "13", "8.192"],
                ["2", "0.004", "8", "0.256", "14", "16.384"],
                ["3", "0.008", "9", "0.512", "15", "32.768"],
                ["4", "0.016", "10", "1.024", "16", "65.536"],
                ["5", "0.032", "11", "2.048", "17", "≈ 131 cm"],
                ["6", "0.064", "12", "4.096", "", ""],
              ],
            },
            content: `(We use the symbol '≈' to mean 'approximately equal to'.)

            After 10 folds, the thickness of the paper is just over 1 cm, i.e., 1.024 cm. After 17 folds, the thickness will be approximately 131 cm, which is a little more than 4 feet.

            ? In your opinion, what should be the thickness of the paper after 30 folds? What should it be after 45 folds? Make an estimate.

            ? Complete the table below.`,
            tableData2: {
              headers: [
                "Fold",
                "Thickness",
                "Fold",
                "Thickness",
                "Fold",
                "Thickness",
              ],
              rows: [
                ["18", "≈ 262 cm", "21", "≈ 10.4 m", "24", "???"],
                ["19", "≈ 524 cm", "22", "???"],
                ["20", "≈ 10.4 m", "23", "???"],
                ["???"],
              ],
            },
            content: `After 26 folds, the thickness of the paper is approximately 670 meters. So, you will understand that this is only 140 meters less than the height of the world's tallest tower, the 'Burj Khalifa' in Dubai (which is 830 meters high).`,
            tableData3: {
              headers: ["Fold", "Thickness", "Fold", "Thickness"],
              rows: [
                ["27", "≈ 1.3 km", "29", "???"],
                ["28", "???"],
              ],
            },
            content: `After 30 folds, the thickness of the paper is approximately 10.7 kilometers. This is a typical altitude at which airplanes fly. Also, you will see that this thickness is just a few meters less than the deepest point discovered in the oceans, the Mariana Trench (which has a depth of 11 kilometers).

            It is extremely difficult to comprehend that after folding the paper just 46 times, its thickness will be more than 700,000 kilometers. This is a multiplicative increase in power. It is also called exponential growth. Let's analyze this growth. We have seen earlier that after each fold, the thickness of the paper doubles.`,
            tableData4: {
              headers: ["Fold", "Thickness", "Fold", "Thickness"],
              rows: [
                ["4 folds", "0.016 cm", "9 folds", "0.512 cm"],
                ["5 folds", "0.032 cm", "10 folds", "1.024 cm"],
                ["6 folds", "0.064 cm"],
              ],
            },
            content: `Observe the change in thickness after two folds. How much has it increased? After three folds, the thickness increases by 8 (= 2 × 2 × 2) times. If this is true, check it. In general, after 10 folds, the thickness increases by 1024 (= 2 multiplied by itself 10 times), as shown in the table below.`,
            tableData5: {
              headers: ["Folds", "Thickness Increase", "Growth Factor"],
              rows: [
                [
                  "0 to 10",
                  "1.024 cm - 0.001 cm = 1.023 cm",
                  "1.024 cm ÷ 0.001 = 1024",
                ],
                [
                  "10 to 20",
                  "10.485 m - 1.024 cm ≈ 10.474 m",
                  "10.485 m ÷ 1.024 cm = 1024",
                ],
                [
                  "20 to 30",
                  "10.737 km - 10.485 m ≈ 10.726 km",
                  "10.737 km ÷ 10.485 m = 1024",
                ],
                [
                  "30 to 40",
                  "10995 km - 10.737 km ≈ 10984.2 km",
                  "10995 km ÷ 10.737 km = 1024",
                ],
              ],
            },
          },
          {
            title: "2.2 Exponential Notation and Operations",
            content: `The initial thickness of the paper was 0.001 cm.

            After folding the paper once, its thickness becomes 0.001 cm × 2 = 0.002 cm.

            After folding the same paper twice, its thickness becomes —
            0.001 cm × 2 × 2 = 0.004 cm or 0.001 cm × 2² = 0.004 cm (in short form).

            Now, after folding the paper three times, its thickness becomes —
            0.001 cm × 2 × 2 × 2 or 0.001 cm × 2³ = 0.008 cm.

            When the paper is folded 4 times, its thickness becomes 0.001 cm × 2 × 2 × 2 × 2 or 0.001 cm × 2⁴ = 0.016 cm.

            For folding the paper 7 times, the expression for thickness will be 0.001 cm × 2 × 2 × 2 × 2 × 2 × 2 × 2 or 0.001 cm × 2⁷ = 0.128 cm.

            Thus, we understand that square numbers can be represented by n² and cube numbers by n³.

            n × n = n² (read as n squared or n raised to the power 2)
            n × n × n = n³ (read as n cubed or n raised to the power 3)
            n × n × n × n = n⁴ (read as n raised to the power 4 or n to the fourth power)
            n × n × n × n × n × n × n = n⁷ (read as n raised to the power 7 or n to the seventh power)
            This process continues similarly.

            In general, multiplying n by itself a times is denoted as nᵃ.

            5⁴ = 5 × 5 × 5 × 5 = 625
            5⁴ is the exponential form of 625. Here, the number 4 is the exponent and the number 5 is the base. 5⁴ is read as '5 raised to the power 4' or '5 to the fourth power'. Powers of 5 are denoted like 5¹, 5², 5³, 5⁴, etc.

            2 × 2 × 2 × 2 × 2 × 2 × ... × 2 × 2 × 2 = 2¹⁰ = 1024

            Recall the number 1024 from the previous page. There, after folding the paper 10 times, the thickness increased by 1024 times.

            ? Which of the following expressions represents the thickness of the paper after 10 folds? The initial thickness is represented by the literal number v.
            (i) 10v (ii) 10 + v (iii) 2 × 10 × v (iv) 2¹⁰ (v) 2¹⁰v (vi) 10²v

            Some more examples of exponential notation are —

            4 × 4 × 4 = 4³ = 64
            (-4) × (-4) × (-4) = (-4)³ = -64

            Similarly, a × a × a × b × b can be expressed as a³b² (read as a cubed b squared).
            a × a × b × b × b × b can be expressed as a²b⁴ (read as a squared b to the power 4).

            Remember that 4 + 4 + 4 = 3 × 4 = 12, whereas 4 × 4 × 4 = 4³ = 64.

            ? Express the number 32400 as a product of its prime factors, and show the prime factors in their exponential form.

            32400 = 2 × 2 × 2 × 2 × 5 × 5 × 3 × 3 × 3 × 3
            Its exponential form is: 32400 = 2⁴ × 5² × 3⁴

            ? What will be the value of (-1)⁵? Is this number positive or negative? What about (-1)⁵⁶?

            ? Is (-2)⁴ = 16? Verify.`,
            images: [],
          },
          {
            title: "Let's Find Out",
            content: `1. Express the following in exponential form.
            (i) 6 × 6 × 6 × 6
            (ii) y × y
            (iii) b × b × b × b
            (iv) 5 × 5 × 7 × 7 × 7
            (v) 2 × 2 × a × a
            (vi) a × a × a × c × c × c × c × d

            2. Find the prime factorization of the following numbers and express them in exponential form.
            (i) 648 (ii) 405 (iii) 540 (iv) 3600

            3. Write the numerical value of each of the following expressions.
            (i) 2 × 10³
            (ii) 7² × 2³
            (iii) 3 × 4⁴
            (iv) (-3)² × (-5)²
            (v) 3² × 10⁴
            (vi) (-2)⁵ × (-10)⁶`,
          },
          {
            title: "Shining Stones...",
            content: `Three daughters, with curiosity in their eyes,
            Received three baskets each as a royal prize.
            In each basket were three silver keys,
            Each daughter simply opens three large chambers with ease.
            In each chamber, there are tables, one, two, three,
            See on each, three sparkling necklaces shine brightly.
            On each necklace, three excellent diamonds are set.
            Can you count these glittering jewels? Do not fret!

            Hint — Find the number of baskets and chambers.

            How many chambers were there in total?

            The above information can be represented by the following figure.

            According to the figure, the number of chambers is 3⁴. This can be calculated by multiplying 3 by itself four times.`,
            images: [
              "Diagram showing the hierarchy: daughters -> baskets -> keys -> chambers -> tables -> necklaces -> diamonds",
            ],
          },
          {
            title: "Calculating the Diamonds",
            content: `3 × 3 = 9
            9 × 3 = 27
            27 × 3 = 81

            How many diamonds were there in total? Can we find this with just one multiplication using the product above?

            The number of diamonds is 3 × 3 × 3 × 3 × 3 × 3 × 3 = 3⁷.

            We can write — 3⁷ = (3 × 3 × 3 × 3) × (3 × 3 × 3).

            We had calculated 3⁴ (= 81). To find 3⁷, we can multiply 3⁴ (=81) by 3³ (=27).
            3⁷ = 3⁴ × 3³ = 81 × 27 = 2187.

            3⁷ can also be written as 3² × 3⁵. Can you explain why this can be done? This can be easily extended to a product where the bases are the same literal numbers.

            Write the product p⁴ × p⁶ in exponential form.

            p⁴ × p⁶ = (p × p × p × p) × (p × p × p × p × p × p) = p¹⁰.

            We can generalize this as — nᵃ × nᵇ = nᵃ⁺ᵇ, where a and b are counting numbers.

            Based on the above observation, calculate the following expressions.
            (i) 2⁹ (ii) 5⁷ (iii) 4⁶

            Let's discuss! 4⁶ can be found in two ways.`,
            tableData: {
              headers: ["Method 1", "Method 2"],
              rows: [
                [
                  "(4 × 4 × 4) × (4 × 4 × 4) = 4³ × 4³",
                  "(4 × 4) × (4 × 4) × (4 × 4) = 4² × 4² × 4²",
                ],
                ["= 64 × 64 = 4096", "= 16 × 16 × 16 = 4096"],
                [
                  "4⁶ is the square of 4³ — 4³ × 4³",
                  "4⁶ is the cube of 4² — 4² × 4² × 4²",
                ],
                [
                  "This can also be written as (4³)²",
                  "This can also be written as (4²)³",
                ],
              ],
            },
            content: `Similarly, 7⁴ = (7 × 7) × (7 × 7) = 7² × 7² = (7²)².

            And 2¹⁰ = (2 × 2) × (2 × 2) × (2 × 2) × (2 × 2) × (2 × 2) = 2² × 2² × 2² × 2² × 2² = (2²)⁵.

            Is 2¹⁰ the same as (2⁵)²? Write it as a product.

            2¹⁰ = (2 × 2 × 2 × 2 × 2) × (2 × 2 × 2 × 2 × 2) = (2⁵) × (2⁵) = (2⁵)².

            In general, (nᵃ)ᵇ = (nᵇ)ᵃ = nᵃˣᵇ = nᵃᵇ, where a and b are counting numbers.

            Write the following expressions as a power of a power in at least two ways.
            (i) 8⁶ (ii) 7¹⁵ (iii) 9¹⁴ (iv) 5⁸`,
            images: [],
          },
          {
            title: "The Magical Pond",
            content: `In the middle of a beautiful magical pond, a shiny pink lotus flower is blooming. In this pond, the number of lotus flowers doubles every day. After 30 days, the entire pond is filled with lotus flowers.

            Which day was it when the pond was half full?

            If the pond is completely filled with lotus flowers on the 30th day, how much of it was filled with lotus flowers on the 29th day?

            Since the number of lotus flowers doubles every day, the pond should be half full on the 29th day.

            Write the number of lotus flowers (in exponential form) when the pond is —
            (i) completely full (ii) half full.

            There is another pond where the number of lotus flowers triples every day. When both ponds have no flowers, Damayanti puts one lotus flower in the pond where the flowers double every day. After four days, she takes all the lotus flowers from there and puts them into the pond where the flowers triple every day. After four days, how many lotus flowers will be in the second pond (where flowers triple)?

            After the first 4 days, the number of lotus flowers is 1 × 2 × 2 × 2 × 2 = 2⁴.
            After the next 4 days, the number of lotus flowers is 2⁴ × 3 × 3 × 3 × 3 = 2⁴ × 3⁴.

            What would have happened if Damayanti had changed the order of putting flowers into the ponds? How many lotus flowers would there be?
            1 × 3⁴ × 2⁴ = (3 × 3 × 3 × 3) × (2 × 2 × 2 × 2)

            Can this product be expressed as mⁿ, where m and n are counting numbers?`,
            images: [],
          },
          {
            title: "Regrouping Numbers",
            content: `Regrouping the numbers, we get —
            = (3 × 2) × (3 × 2) × (3 × 2) × (2 × 2) = (3 × 2)⁴ = 6⁴

            In general, mᵃ × nᵃ = (mn)ᵃ, where a is a counting number.

            Observe the above. Use this observation to calculate the value of 2⁵ × 5⁵.

            Simplify 10⁴/5⁴ and write it in exponential form.

            In general, we can say that mᵃ/nᵃ = (m/n)ᵃ.`,
            images: [],
          },
          {
            title: "How Many Combinations?",
            content: `Astu has 4 outfits and 3 caps. In how many different ways can Astu combine an outfit and a cap?

            For each cap, he can choose any one of the 4 outfits. Therefore, for 3 caps, the number of combinations is 4 + 4 + 4 = 4 × 3 = 12. We can also understand it this way: for each outfit, Astu can choose any one of the 3 caps. Therefore, for 4 outfits, the number of combinations is 3 + 3 + 3 + 3 = 3 × 4 = 12.

            ? Roxi has 7 outfits, 2 caps, and 3 pairs of shoes. In how many ways can Roxi get dressed?
            Hint — Try to draw a diagram similar to the one above.

            Astu and Roxi received a safe containing old stamps and coins collected by their great-grandfather. This safe was secured with a 5-digit passcode. No one knew anything about the passcode. They had no choice but to try every passcode until it opened. Coincidentally, the lock opened only after they had tried all possible combinations. How many passcodes did they check?

            If you cannot solve a problem, try to simplify it so that you can solve it. This technique can be useful for problem-solving.

            Suppose instead of a 5-digit lock, we have a 2-digit lock. Try to find out how many passcodes are possible for this lock.

            Here, there are 10 options (0 to 9) for the first digit. For each of these options, there are 10 options for the second digit (if the first digit is 0, then 00, 01, 02, 03, ..., 09 are possible). Therefore, the total number of combinations for a 2-digit lock is 10 × 10 = 100.

            Now suppose we have a 3-digit lock. For each of the 100 passcodes (2-digit), there are 10 options for the third digit. Therefore, the total combinations for a 3-digit lock will be 100 × 10 = 1000. You can also list them all, like 000, 001, 002, ..., 997, 998, 999.

            How many passcodes are possible for a 5-digit lock?

            There are 10 options for each digit. Therefore, for a 5-digit lock, the number of passcodes is 10 × 10 × 10 × 10 × 10 = 10⁵ = 100,000. This is equivalent to writing all numbers from 0 to 99,999 with 5 digits, like 00000, 00001, 00002, ..., 00010, 00011, ..., 00100, 00101, ..., 00999, ..., 30456, ..., 99998, 99999.

            Astu says, "Next time, I'll buy a lock that has 6 slots with letters from A to Z. I think that will be more secure."

            ? How many passcodes are possible for such a lock?

            ? Consider how many combinations are possible in different contexts. Some examples are —
            (i) PIN codes for places in India — The PIN code for Vidisha in Madhya Pradesh is 464001. The PIN code for Zemabawk in Mizoram is 760017.
            (ii) Mobile numbers
            (iii) Vehicle registration numbers

            Try to understand how numbers or codes are allocated.`,
            images: ["Diagram showing combinations of outfits and caps"],
          },
          {
            title: "2.3 The Other Side of Exponents",
            content: `Imagine a long line of length 16 units. On erasing half of it, the result is 16 ÷ 2 = 8 units.
            Since 16 = 2⁴, we can write 2⁴ ÷ 2 = 2³ = 8.

            On erasing half of it again, the result is (2⁴ ÷ 2) ÷ 2 = 2⁴ ÷ 2² = 2⁴⁻² = 2² = 4 units.

            On halving 16 cm a third time, the result is 2⁴ ÷ 2³ = 2⁴⁻³ = 2¹ = 2 units.

            From this, we can find that 2⁴ ÷ 2³ = 2⁴⁻³ = 2¹.

            What will be 2¹⁰⁰ ÷ 2²⁵?

            In general, nᵃ ÷ nᵇ = nᵃ⁻ᵇ, where n ≠ 0 and a and b are counting numbers and a > b.

            Why can n not be zero?

            We have not yet understood the situation where the exponent is 0. For example, what is 2⁰?

            Let's define 2⁰ in such a way that the above general form holds true.
            2⁰ = 2⁴⁻⁴ = 2⁴ ÷ 2⁴ = (2 × 2 × 2 × 2) / (2 × 2 × 2 × 2) = 1.

            In fact, for any literal number a, 2⁰ = 2ᵃ⁻ᵃ = 2ᵃ ÷ 2ᵃ = 1.

            In general, xᵃ ÷ xᵃ = xᵃ⁻ᵃ = x⁰. Therefore, x⁰ = 1, where x ≠ 0 and a is a counting number.

            What happens when a long line of length 2⁴ units is halved 5 times?
            2⁴ ÷ 2⁵ = (2 × 2 × 2 × 2) / (2 × 2 × 2 × 2 × 2) = 1/2 units.

            Using the general form, we get 2⁴ ÷ 2⁵ = 2⁴⁻⁵ = 2⁻¹. Therefore, 2⁻¹ = 1/2.

            When a long line of length 2⁴ units is halved 10 times, we get 2⁴ ÷ 2¹⁰ = 2⁴⁻¹⁰ = 2⁻⁶ units.

            Expanding, 2⁴ ÷ 2¹⁰ = (2 × 2 × 2 × 2) / (2 × 2 × 2 × 2 × 2 × 2 × 2 × 2 × 2 × 2) = 1/2⁶ = 1/64. This can also be written as 2⁻⁶.

            Similarly, 10⁻³ = 1/10³, 7⁻² = 1/7², etc.

            Can we write 10³ = 1/10⁻³?
            We can write — 1/10⁻³ = 1 / (1/10³) = 1 ÷ 1/10³ = 1 × 10³ = 10³.

            Similarly, 7² = 1/7⁻² and 4ᵃ = 1/4⁻ᵃ.

            In general, n⁻ᵃ = 1/nᵃ and nᵃ = 1/n⁻ᵃ, where n ≠ 0.

            Consider the general forms we have identified. We needed a and b to be counting numbers. Can a and b be any integer? Will the general forms still hold true?

            Write the equivalent forms of the following.
            (i) 2⁻⁴ (ii) 10⁻⁵ (iii) (-7)⁻² (iv) (-5)⁻³ (v) 10⁻¹⁰⁰

            Solve the following questions and write the answers in exponential form.
            (i) 2⁻⁴ × 2⁷
            (ii) 3² × 3⁻⁵ × 3⁶
            (iii) p³ × p⁻¹⁰
            (iv) 2⁴ × (-4)⁻²
            (v) 8ᵖ × 8^q`,
            images: [],
          },
          {
            title: "Exponent Lines",
            content: `Let's arrange the powers of 4 along a line.

            Can we say that the number 16384 (4⁷) is 16 (4²) times larger than 1024 (4⁵)? Yes, since 4⁷ ÷ 4⁵ = 4².

            How many times larger is 4² than 4²?

            Use the power line of 7 to answer the following questions.`,
            images: [
              "Number line showing powers of 4: 4⁰=1, 4¹=4, 4²=16, 4³=64, 4⁴=256, 4⁵=1024, 4⁶=4096, 4⁷=16384",
              "Number line showing powers of 7: 7⁻²=1/49, 7⁻¹=1/7, 7⁰=1, 7¹=7, 7²=49, 7³=343, 7⁴=2401",
            ],
          },
          {
            title: "2.4 Powers of 10",
            content: `When writing numbers in expanded form using Indian digits, we use numbers like 10, 100, 1000, ... For example —
            47561 = (4 × 10000) + (7 × 1000) + (5 × 100) + (6 × 10) + 1.

            The above number can be written using powers of 10 as follows —
            (4 × 10⁴) + (7 × 10³) + (5 × 10²) + (6 × 10¹) + (1 × 10⁰).

            ? Write these numbers using the above method — (i) 172 (ii) 5642 (iii) 6374

            ? How can we write 561.903?
            561.903 = (5 × 100) + (6 × 10) + 1 + (9 × 1/10) + (0 × 1/100) + (3 × 1/1000).

            Writing this using powers of 10, we get —
            561.903 = (5 × 10²) + (6 × 10¹) + (1 × 10⁰) + (9 × 10⁻¹) + (0 × 10⁻²) + (3 × 10⁻³).`,
            images: [],
          },
          {
            title: "Scientific Notation",
            content: `Let's look at some facts related to large numbers —

            (i) The Sun is located at a distance of 30,000,000,000,000,000,000 meters from the center of our Milky Way galaxy.
            (ii) The number of stars in our galaxy is 100,000,000,000.
            (iii) The mass of the Earth is 5,976,000,000,000,000,000,000,000 kg.

            As the number of digits increases, it becomes difficult to read the numbers correctly. We might make mistakes in counting the number of zeros or place commas incorrectly. In such situations, reading the value can also lead to errors. For example, you should have received ₹50,000, but you received ₹5,000. In some situations, the number of zeros is more important than the leading digit.

            Can we use exponential notation to simplify these very large numbers and read them correctly?

            For example, the number 5900 can be expressed as follows —
            5900 = 590 × 10 = 590 × 10¹
                 = 59 × 100 = 59 × 10²
                 = 5.9 × 1000 = 5.9 × 10³
                 = 0.59 × 10000 = 0.59 × 10⁴

            Any number between 1 and 10 can be written as a product of a power of 10. For example —
            5900 = 5.9 × 10³, 20800 = 2.08 × 10⁴, 80,000,000 = 8 × 10⁶

            Write the facts about large numbers that you read earlier in scientific notation.

            In scientific notation or standard form, we write numbers as x × 10ʸ, where x ≥ 1 and x < 10 is the coefficient, and the exponent y is an integer. Often, the exponent y is more important than the coefficient x. When we write Mumbai's population of 2 crore as 2 × 10⁷, the 7 is more important than the 2. Certainly, if 2 is changed to 3, the population increases by half, i.e., from 2 crore to 3 crore. On the other hand, if 7 is changed to 8, the population changes by 10 times, i.e., the population becomes 2 crore to 20 crore. Therefore, in standard form, the exponent must be clearly described, as it indicates the number of digits in the number.

            If we say that Kohima's population is 1,42,395, it suggests that we are confident about the units place. When we use large numbers, in most situations, we care more about how large the quantity or measurement is rather than the exact value. If we are confident that the population is approximately 1 lakh 42 thousand, we can also write it as 1.42 × 10⁵. If the population is approximately 1 lakh 40 thousand, we can write it as 1.4 × 10⁵. The number of digits in the coefficient indicates how precise our information about the number is. The most important part of any number written in standard form is the exponent, followed by the first digit of the coefficient. The subsequent digits of the coefficient are minor corrections to the preceding digit.

            Often, these values are rounded estimates, averages, or approximations that serve the purpose.

            The distance between the Sun and Saturn is 14,335,000,000,000 meters = 1.4335 × 10¹² meters.
            The distance between Saturn and Uranus is 14,390,000,000,000 meters = 1.439 × 10¹² meters.
            The distance between the Sun and the Earth is 149,600,000,000 meters = 1.496 × 10¹¹ meters.

            ? Can you tell which of the three distances is the shortest?

            The number line below shows the distance between the Sun and Saturn (1.435 × 10¹² meters). Mark the relative position of the Earth on this number line. Note that the distance between the Sun and the Earth is 1.496 × 10¹¹ meters.

            Write the following numbers in scientific notation.
            (i) 59,853 (ii) 65,950 (iii) 34,30,000 (iv) 70,04,00,00,000`,
            images: [
              "Number line from 1.0 × 10¹² to 2.0 × 10¹² marked with Sun and Saturn",
            ],
          },
          {
            title: "2.5 Have You Ever Wondered?",
            content: `In Class 7's mathematics textbook 'Ganit Prakash', in the chapter on large numbers, we drew attention to interesting ideas and experiments. Let's continue this journey.

            Nanjundappa wants to donate jaggery equal to Roxi's weight and wheat equal to Astu's weight. He wonders how much it will cost.

            What will be the value (in rupees) of the donated jaggery? What will be the value (in rupees) of the donated wheat?

            To find the above, let's first describe the relationships between the quantities involved.

            Cost of jaggery (in rupees) = Roxi's weight (in kg) × cost of 1 kg jaggery
            Cost of wheat (in rupees) = Astu's weight (in kg) × cost of 1 kg wheat

            ? Make necessary and logical assumptions to find the answer. Remember, Roxi is 13 years old and Astu is 11 years old.

            Assume Roxi's weight is 45 kg and the cost of 1 kg jaggery is ₹70. The value of the donated jaggery is 45 × 70 = ₹3150.
            Also, assume Astu's weight is 50 kg and the cost of 1 kg wheat is ₹50. The value of the donated wheat is 50 × 50 = ₹2500.

            The custom of donating goods equal to one's body weight is called 'Tulabhara' or 'Tulabharam'. This is an ancient tradition. Although it is still practiced in many places in South India. It is a symbol of devotion (surrender) and gratitude. It also supports the community.

            ? Roxi thinks, "If we use ₹1 coins instead of jaggery, how many coins would be needed equal to my weight?" Tell how we can find this out. For such questions, you might consider following the suggested steps.
            1. Estimation — Make an intuitive guess without any calculation.
            2. Calculate using estimation and approximation.
               (i) Describe the relationships between the quantities needed to find the answer.
               (ii) If the required information is not available, make reasonable assumptions and approximations.
               (iii) Calculate and find the answer, and check how accurate your estimate was.

            ? Would the number of coins be in the hundreds, thousands, lakhs, crores, or even more? Make an intuitive guess.

            ? Using necessary and possible assumptions and approximations for unknown values, find the answer using a ₹1 coin. Note that we are looking for a reasonably close estimate, not an exact answer.

            Your initial guess might be far from the answer, and that is perfectly fine. As you repeat this in different situations, you will get better at it. Estimating and approximating can help develop intuition about numbers and various quantities.

            Astu asks, "What if we use ₹5 coins or ₹10 notes instead? How many rupees would that be?"

            ? First, make an intuitive guess, then find out (make necessary and possible assumptions about unknown details and find the answer).

            Astu says, "When I grow up, I want to donate notebooks equal to my weight every year."
            Roxi says, "When I grow up, I want to donate food grains equal to my weight every year."

            ? How many people could benefit from Roxi and Astu's proposals each year? Guess again before finding out.

            Roxi and Astu heard someone say — "We have walked 400 kilometers to reach this place. We arrived early this morning."

            ? How long ago would they have started their journey?

            ? Make necessary assumptions and approximations to find the answer. Estimate before calculating and check how accurate your estimate was.

            Note for Teachers — Estimates may vary, and consequently, the answers obtained from calculations based on these estimates may also vary. This is perfectly fine. Modeling the situation correctly is important, which can sometimes be done in different ways. The accuracy of estimated numbers or quantities can improve with feedback and practice.

            Walking long distances on foot is a traditional practice under religious or spiritual discipline. People following different religions in our country undertake pilgrimages or spiritual walks, although their names or purposes may differ. Ajmer Sharif Dargah Ziyarat, Pandharpur Wari, Kanwar Yatra, Sabarimala Yatra, Shravanabelagola, Sammet Shikharji Yatra, Lumbini to Sarnath Yatra, etc., are some famous pilgrimages.

            Before the advent of modern transport, people used to travel from one place to another on foot. Sometimes, traders and scholars would walk thousands of kilometers across deserts, mountains, and rivers to different parts of the world.

            ? If a person walks without stopping, how many times could they circle the Earth in their lifetime? Assume the circumference of the Earth is 40,000 kilometers.`,
            images: [],
          },
          {
            title: "Linear Growth vs. Exponential Growth",
            content: `Roxi tells Astu about a science fiction novel she read where they build a ladder to reach the moon.

            Roxi says, "I wonder how many steps such a ladder would have if we actually had one."

            ? What do you think about this? First, make an intuitive guess.

            ? Would the number of steps be in the thousands, lakhs, crores, or even more?

            To find this out, we need to know the distance between two consecutive steps. Let's assume a possible distance of 20 cm. Estimate the problem shown in the figure.

            We need to find how many 20 cm make 3,84,400 km.

            If we calculate this, we get 1,922,000,000 steps, which is 192 crore 20 lakh steps or 1.922 billion steps. The fixed increase in distance from Earth with each step (an increase of 20 cm after each step) is called linear growth.

            To cover the distance between the Earth and the Moon, linear growth requires 1,922,000,000 steps. Whereas in such a situation, with exponential growth, a piece of paper needs to be folded only 46 times. Also, note that linear growth is additive, while exponential growth is multiplicative.

            In this chapter, we have already understood some examples of exponential growth, such as "Shining Stones...", "The Magical Pond", "How Many Combinations?". We will also discuss some other interesting examples in the next chapter and in the next class.

            Can you give some examples of linear growth and exponential growth?`,
            images: [
              "Diagram comparing linear and exponential growth: ladder vs. folded paper",
            ],
          },
          {
            title: "Understanding Large Numbers",
            content: `In the previous year, we learned about lakh and crore, as well as million and billion. One lakh is 10⁵ (1,00,000), one crore is 10⁷, and one arab (billion) is 10⁹ (1,00,00,00,000), while one million is 10⁶ (1,000,000) and one billion is 10⁹ (1,000,000,000).

            You are familiar with the size of the world's human population. Have you ever wondered how many ants there are in the world or how many years ago humans appeared? In this section, we will study numbers even larger than arab and billion. We will use powers of 10 to represent and compare these numbers in each situation.

            10⁰: By mid-2025, only two northern white rhinos remain in the world. Both are female and live in the Ol Pejeta Conservancy in Kenya (= 2 × 10⁰).
            10¹: By the beginning of 2024, the total number of Hainan gibbons was only 42 (≈ 4 × 10¹).
            10²: By mid-2025, only 242 kakapo (owls, parrots) are alive (≈ 2 × 10²).
            10³: Fewer than 3000 Komodo dragons (a type of giant lizard) remain in the world, found in Indonesia (≈ 3 × 10³).
            10⁴: An estimate of the number of maned wolves in 2005 found that there were more than 17,000. Most of them are found in Brazil (1.7 × 10⁴).
            10⁵: By 2018, approximately 4.15 lakh African elephants inhabited the world (≈ 4 × 10⁵).
            10⁶: By 2025, the estimated number of American alligators in the world is 5 million (5 × 10⁶).
            10⁷: The global population of camels is estimated to be more than 3.5 crore or 35 million (3.5 × 10⁷). Among these, about 2.5 lakh camels are found in India. The global population of horses is approximately 5.8 crore or 58 million (5.8 × 10⁷). About half of these horses are found in the USA.
            10⁸: The estimated global population of water buffaloes is more than 20 crore (200 million) (2 × 10⁸), most of which are found in Asia.
            10⁹: The global population of the starling bird was estimated to be around 1.3 arab or 1.3 billion. By 2025, the global human population is 8.2 arab or 8.2 billion (8.2 × 10⁹).`,
            images: [
              "Image of a flock of starlings flying over a farm in Britain. This flock of starlings is a mesmerizing aerial display, often called a 'murmuration'.",
            ],
          },
          {
            title: "Comparing Numbers",
            content: `The global human population is about 8 × 10⁹, and the number of African elephants is about 4 × 10⁵. Can we say that there are approximately 20,000 people for every African elephant?

            10¹⁰: The estimated number of chickens alive at any given time globally is ≈ 33 billion (3.3 × 10¹⁰).
            10¹²: The estimated number of trees globally (in 2023) is 3 trillion (3 × 10¹²). We know that 1 trillion is equal to 100 arab (billion). Also, 1 trillion is equal to 1000 billion.
            10¹⁴: The estimated number of mosquitoes worldwide (in 2023) is 110 trillion. Also, the derived estimate of Antarctic krill is 500 trillion (5 × 10¹⁴).
            10¹⁵: The estimated number of crickets is 1 quadrillion (1 × 10¹⁵). The estimated number of earthworms is also 1 quadrillion.
            10¹⁶: The estimated global population of ants is 20 quadrillion (2 × 10¹⁶). The number of ants alone exceeds the combined number of all wild birds and wild mammals.
            10²¹: The number of sand grains on all the beaches and deserts of the Earth. This quantity is so large that for each ant, 10 small sandcastles could be made.
            10²³: The estimated number of stars in the observable universe is 2 × 10²³.
            10²⁵: The estimated number of water drops on Earth is 2 × 10²⁵ (assuming 16 drops per milliliter).

            Calculate and write your answer using scientific notation.
            (i) How many ants are there per human in the world?
            (ii) If a flock of starlings contains 10,000 birds, how many flocks of starlings would there be in the world?
            (iii) If each tree has approximately 10⁴ leaves, find the total number of leaves on all trees in the world.
            (iv) If you stack papers on top of each other, how many papers would you need to reach the moon?

            A Different Way to Tell Your Age!
            "What is your age?" asked Astu.
            "I just turned 13 a few weeks ago," said Roxi.
            "What is your age?" asked Astu again.
            "I am 4840 days old," said Roxi.
            "What is your age?" asked Astu once more.
            "My age is ___________ hours," said Roxi.
            Estimate this number before finding it out.

            Astu — "I am 4070 days old today. Can you find my date of birth?"

            If you live for 10 lakh seconds, how old will you be?

            We will consider the approximate time and time scales of some events and phenomena and use powers of 10 to represent and compare these quantities.

            Time (in seconds) | Comparison with real-world events/phenomena
            --- | ---
            10⁰ = 1 second | - Time taken for a ball thrown upwards to return to the surface (usually a few seconds)
            10¹ = 10 seconds | Time taken for one complete circulation of blood in the body — 10 to 20 seconds (1 × 10¹ – 2 × 10¹ seconds). <br>- Typical time for a traffic signal (red light).
            10² ≈ 1.6 minutes | Time taken to make a cup of tea — 5 to 10 minutes (≈ 4 × 10² – 8 × 10² seconds). <br>- Time taken for light to reach Earth from the Sun — about 8 minutes (≈ 5 × 10² seconds).
            10³ ≈ 16.6 minutes | Satellites in low Earth orbit take 90 minutes (≈ 5.5 × 10³ seconds) to 2 hours to complete one orbit.
            10⁴ ≈ 2.7 hours | Time taken to digest food — it takes about 2 to 4 hours for food to pass through the stomach.
            10⁵ ≈ 1.16 days | Lifespan of a mayfly (a species of fly) — about 1 day (≈ 9 × 10⁴ seconds).
            10⁶ ≈ 11.57 days | Consider some events or phenomena whose time is (i) 10⁵ seconds and (ii) 10⁶ seconds, and write them in scientific notation.
            10⁷ ≈ 115.7 days | Time spent sleeping in a year — about 4 months. <br>- Time taken by the Mars orbiter to reach Mars — 298 days (≈ 2.65 × 10⁷ seconds). <br>- Time taken by Mars to complete one full orbit around the Sun — 687 Earth days or 1.88 Earth years (≈ 6 × 10⁷ seconds).
            10⁸ ≈ 3.17 years | Typical lifespan of dogs — 3 to 15 years.
            10⁹ ≈ 31.7 years | Orbital period of Halley's Comet — 75 to 79 years. Its next expected return is the year 2061 (≈ 2.4 × 10⁹ seconds). <br>- Time taken by Neptune to complete one full orbit around the Sun — 60,190 Earth days (165 Earth years) or 89,666 Neptune days or 1 Neptune year (≈ 5.2 × 10⁹ seconds). One day on Neptune is about 16.1 hours.
            10¹⁰ ≈ 317 years | The Chola dynasty ruled for over 900 years (≈ 3 × 10¹⁰ seconds) from the 3rd century BCE to the 12th century CE.
            10¹¹ ≈ 3,170 years | Age of the oldest known living tree — about 5000 years (≈ 1.57 × 10¹¹ seconds). <br>- The last glacial maximum — 19,000–26,000 years ago (≈ 6 × 10¹¹ – 8.2 × 10¹¹ seconds).
            10¹² ≈ 31,700 years | Early modern humans (Homo sapiens) first appeared 2–3 lakh years ago (≈ 7 × 10¹² – 9 × 10¹² seconds). The entire human population at that time could fit in a large cricket stadium.
            10¹³ ≈ 3.17 × 10⁵ years | It is believed that the steppe mammoth appeared about 8 to 18 lakh years ago.
            10¹⁴ ≈ 3.17 million years | Kelenken guillermoi, a type of terror bird. Its fossil is 15 million years old (≈ 4.7 × 10¹⁴ seconds).
            10¹⁵ ≈ 31.7 million years | Age of the Himalayas — 5.5 crore years or 55 million years. In this sequence, growth continues at a few millimeters each year. <br>- Dinosaurs went extinct 6.6 crore years or 66 million years ago (≈ 2 × 10¹⁵ seconds). <br>- Dinosaurs first appeared 20 crore or 200 million years ago (≈ 6 × 10¹⁵ seconds). <br>- The Sun takes about 23 crore years to complete one full orbit around the galaxy (≈ 7 × 10¹⁵ seconds).
            10¹⁶ ≈ 3.17 × 10⁸ years | Origin of plants on Earth — 47 crore or 470 million years ago.
            10¹⁷ ≈ 3.17 billion years | According to the oldest fossil evidence, bacteria first appeared about 3.7 billion years ago.
            10¹⁸ ≈ 31.7 billion years | The Milky Way galaxy formed 13.6 billion years ago. Also, the universe was created 13.8 billion years ago.

            Note that a human's lifespan is about 10⁹ seconds, whereas 10¹⁸ seconds ago, the universe as we know it did not exist according to modern physics! Thus, exponential notation can be used to write very large numbers concisely.

            Calculate and write your answer using scientific notation.
            (i) If it takes 1 second to count one star, how long would it take to count all the stars in the universe? Write the answer as the number of seconds using scientific notation.
            (ii) If a person drinks a glass of water (200 ml) in 10 seconds, how long would it take them to drink all the water available on Earth?

            Very large numbers are often beyond our experience and understanding. To understand them, we can connect them to and compare them with numbers we are familiar with. This helps us know how large a number or measurement is.`,
            images: [],
          },
          {
            title: "2.6 A Glimpse of History",
            content: `In the Buddhist text Lalitavistara (1st century BCE), we see number names up to odd powers of 10 like 10⁵³. This occurs in a dialogue between the mathematician Arjuna and the Bodhisattva Prince Gautama, which is as follows —

            "100 koti is called an ayut (10⁹), 100 ayut is called a niyut (10¹¹), 100 niyut is called a kankara (10¹³), ... 100 sarva-bala is called a visamjna-gati (10⁴⁷), 100 visamjna-gati is called a sarvajna (10⁴⁹), 100 sarvajna is called a vibhutangam (10⁵¹), 100 vibhutangam is called a tallakshana (10⁵³)."

            Mahaviracharya, in his book Ganita-sara-sangraha, provides a list of 24 terms (i.e., up to 10²³). An unknown Jain text, Amalasiddhi, gives a list with names for each power of 10 up to 10⁹⁶ (dasha-ananta). The Pali grammar text Kaccayana gives a list of number names up to 10¹⁴⁰, which is called asankhyeya.

            In Jain and Buddhist texts, bases like sahassa (thousand) and koti (ten million) are used to express large powers of 10. For example, prayut (10⁶) would be ten sat-sahassa (ten hundred thousand).

            Modern naming is similar to this. We say —
            One hundred thousand is one lakh. 100 × 1000 = 1,00,000 = 10² × 10³ = 10⁵.
            One hundred lakh is one crore. 100 × 1,00,000 = 1,00,00,000 = 10² × 10⁵ = 10⁷.
            One hundred crore is one arab. 100 × 1,00,00,000 = 1,00,00,00,000 = 10² × 10⁷ = 10⁹.
            One hundred arab is one kharab. 100 × 1,00,00,00,000 = 1,00,00,00,00,000 = 10² × 10⁹ = 10¹¹.
            Continuing this sequence, one hundred kharab is one neel (10¹³), one hundred neel is one padma (10¹⁵), one hundred padma is one shankh (10¹⁷), and one hundred shankh is one maha-shankh (10¹⁹).

            In the American or international system, we say —
            One thousand thousand is one million. 1000 × 1000 = 1,000,000 = 10³ × 10³ = 10⁶.
            One thousand million is one billion. 1000 × 1,000,000 = 1,000,000,000 = 10³ × 10⁶ = 10⁹.
            One thousand billion is one trillion. 1000 × 1,000,000,000 = 1,000,000,000,000 = 10³ × 10⁹ = 10¹².
            Continuing this sequence, one thousand trillion is one quadrillion (10¹⁵). This pattern continues. Look carefully at these names: million (10⁶), billion (10⁹), trillion (10¹²), quadrillion (10¹⁵), quintillion (10¹⁸), sextillion (10²¹), septillion (10²⁴), octillion (10²⁷), nonillion (10³⁰), decillion (10³³).

            What does the first part of each name indicate?

            The number 10¹⁰⁰ is called a googol. The estimated number of atoms in the universe is between 10⁷⁸ and 10⁸². The number 10ᵍᵒᵒᵒˡ is called a googolplex. It is difficult to imagine how large this number is.

            Currently, the highest denomination currency note in India is the ₹500 note. Estimate which is the highest denomination currency note ever made in the world? The highest denomination special banknote ever was the 1 sextillion pengő (10²¹ or 1 milliard bilpengő) note. It was printed in Hungary in 1946 but was never issued. In 2009, a 100 trillion (10¹⁴) Zimbabwean dollar note was printed in Zimbabwe. At the time of printing, its value was approximately $30.`,
            images: [],
          },
          {
            title: "Let's Find Out",
            content: `1. Find the units digit in the value of 2²²⁴ ÷ 4³². [Hint — 4 = 2²]
            2. There are 5 bottles in a box. A new box is brought every day. After 40 days, how many bottles will be there?
            3. Write the given number as a product of two or more powers in three different ways. The exponents can be any integer.
            (i) 64³ (ii) 192⁸ (iii) 32⁻⁵
            4. Check each statement given below and find out whether it is 'always true', 'sometimes true', or 'never true'. Explain your reasoning.
            (i) Cube numbers are also square numbers.
            (ii) Fourth powers are also square numbers.
            (iii) The fifth power of a number is divisible by the cube of that number.
            (iv) The product of two cube numbers is a cube number.
            (v) q⁴⁶ is both a fourth power and a sixth power (q is a prime number).
            5. Simplify these and write in exponential form.
            (i) 10⁻² × 10⁻⁵
            (ii) 5⁷ ÷ 5⁴
            (iii) 9⁻⁷ ÷ 9⁴
            (iv) (13⁻²)⁻³
            (v) m⁵n¹²/(mn)⁹
            6. If 12² = 144, then what is the value of the following?
            (i) (1.2)² (ii) (0.12)² (iii) (0.012)² (iv) 120²
            7. Circle the equal numbers.
            2⁴ × 3⁶, 6⁴ × 3², 6¹⁰, 18² × 6², 6²⁴
            8. Identify the larger number in each of the following options.
            (i) 4³ or 3⁴ (ii) 2⁸ or 8² (iii) 100² or 2¹⁰⁰
            9. A dairy plans to produce 8.5 billion packets of milk in a year. It wants to put a unique identification code on each packet. If it uses digits from 0 to 9 for this, how many digits should the code have?
            10. 64 is a square number (8²) and a cube number (4³). Are there other such numbers that are both squares and cubes? Is there a general method to find such numbers?
            11. A digital locker has a 5-character alphanumeric (can contain both digits and letters) passcode of length 5. Some examples of passcodes are G89PO, 38098, BRJKW, and 003AZ. How many such passcodes are possible?
            12. In 2024, the global population of sheep was about 10⁹, and the population of goats was about the same as that of sheep. What is the total population of sheep and goats?
            (i) 2⁰ (ii) 10¹¹ (iii) 10¹⁰ (iv) 10¹⁸ (v) 2 × 10⁹ (vi) 10⁹ + 10⁹
            13. Calculate and write your answer in scientific notation.
            (i) If each person in the world has 30 trees, find the total number of trees.
            (ii) There are approximately 100 million honeybee hives in the world. If each hive has 50,000 honeybees, find the total number of honeybees.
            (iii) The human body contains approximately 38 trillion bacterial cells. Find the number of bacteria living in the bodies of all humans in the world.
            (iv) Find the total time spent eating over a lifetime, in seconds.
            14. What date was it 1 billion seconds ago?`,
            images: [],
          },
        ],
        summary: [
          "We analyzed some situations, asked questions, and made initial estimates. Then, we modeled the problem statement and used assumptions and approximations to calculate and obtain answers.",
          "We experienced how rapid exponential growth, also called multiplicative growth, can be compared to additive growth.",
          "n × n × n × n × ... × n (a times) can be written as nᵃ, and n⁻ᵃ = 1/nᵃ.",
          "Operations with exponents follow these rules: nᵃ × nᵇ = nᵃ⁺ᵇ; (nᵃ)ᵇ = nᵃˣᵇ; nᵃ ÷ nᵇ = nᵃ⁻ᵇ (n ≠ 0); nᵃ × mᵃ = (n × m)ᵃ; nᵃ ÷ mᵃ = (n ÷ m)ᵃ (m ≠ 0); n⁰ = 1 (n ≠ 0).",
          "Scientific notation for a number is the standard form x × 10ʸ, where x ≥ 1 and x < 10, and y is an integer. For example, 308100000 = 3.081 × 10⁸.",
          "Engaging in thought experiments can be used to understand how large a number or quantity is.",
        ],
      },
    },
    // Chapter 3: The Story of Numbers
    {
      id: 3,
      title: "The Story of Numbers",
      content: {
        introduction:
          "In this chapter, we will journey through the fascinating history of how numbers and number systems developed across different civilizations. We will explore various counting methods, understand the concept of base, place value, and the revolutionary invention of zero, leading to the modern Hindu numeral system used worldwide today.",
        sections: [
          {
            title: "3.1 Reema's Curiosity",
            content: `On a lazy Sunday, Reema was flipping through the pages of an old book when suddenly a page slipped out, flew in the air, and fell to the ground. She picked it up and stared at some unusual symbols on it. "Oh! What is this?" she exclaimed in amazement.

            Reema ran to her father with the page as if it were a secret treasure. Her father looked at the page and smiled. He said, "Around 4000 years ago, a civilization flourished in a place called Mesopotamia in the western part of Asia. It included a large part of present-day Iraq and some other neighboring countries. This is one of their ways of writing numbers."

            Reema's eyes lit up. "Really! These different symbols were numbers?" Her curiosity grew, and many questions arose in her mind.

            Sensing Reema's curiosity, her father began to explain how the idea of numbers and number representation evolved over time across different geographical regions, eventually reaching its modern form. Now, get ready to travel back in time with them!

            From the Stone Age centuries ago, humans needed to count. They used to determine the quantity of fruits, vegetables, grains, etc., available to them, the number of their livestock, details of trade of goods, the number of offerings given in rituals, etc. They also wanted to keep records of past days so they could know and predict when important events like new moons, full moons, or the arrival of a season would occur. However, when they spoke or wrote such numbers, they did not use the modern numerals that we use today.

            The structure of the modern oral and written numbers used today originated in India thousands of years ago. Ancient Indian texts, such as the Yajurveda Samhita, list names of numbers based on powers of 10, much like how we read those numbers orally today. For example, they listed names for numbers from one (ekaka), ten (dasha), hundred (shata), thousand (sahasra), ten thousand (ayuta), etc., up to 10¹² and beyond.

            The origin and development of the way we write our numbers using digits 0 to 9 also happened in India around 2000 years ago. The earliest known example of numbers written using 10 digits, including the digit 0 (which was then marked as a dot), is found in the Bakhshali manuscript (c. 3rd century CE). In 499 CE, Aryabhata was the first mathematician to fully articulate the Indian system with 10 symbols and use it to explain scientific calculations.

            The Indian number system reached the Arab world by around 800 CE. It was popularized in the Arab world by the great Persian mathematician Al-Khwarizmi (after whom the word 'algorithm' is coined) through his book 'On the Calculation with Hindu Numerals' (825 CE) and by the famous philosopher Al-Kindi through his book 'On the Use of the Hindu Numerals' (830 CE).

            By around 1100 CE, Hindu numerals had reached Europe and some parts of Africa from the Arab world. Although Al-Khwarizmi's book 'On the Calculation with Hindu Numerals' had been translated into Latin, it was actually the Italian mathematician Fibonacci who, around 1200 CE, prepared Europe to adopt the Indian number system. But at that time, Roman numerals were so deeply ingrained in European thought and writing that Indian numerals did not come into widespread use for several centuries. However, by the time of the European Renaissance and the 17th century, adopting them had become absolutely necessary, otherwise it would have hindered the scientific progress of that time.

            "The ingenious method of expressing every possible number using a set of ten symbols (each symbol having a place value and an absolute value) emerged in India. The idea seems so commonplace nowadays that its significance and profound importance are no longer appreciated. Its simplicity lies in the way it facilitated calculations and placed arithmetic foremost among useful inventions."

            — Pierre-Simon Laplace (1749 – 1827)

            Thereafter, the use of these ten digits spread to every continent, and today they are used in every corner of the world.

            Since European scholars gained an understanding of Indian numerals from the Arab world, they called these numerals 'Arabic numerals' from their European perspective. On the other hand, as mentioned above, Arab scholars like Al-Khwarizmi and Al-Kindi called them 'Hindu numerals'. During the colonial period in Europe, the European term 'Arabic numerals' became widely prevalent. However, this error is now being corrected in many textbooks and documents around the world, including Europe. The most common terms we use today for numbers are 'Hindu numerals', 'Indian numerals', and the transitional 'Hindu-Arabic numerals'. It is worth noting here that the word 'Hindu' refers not to a religion, but to the region or the people from where these numerals originated.

            The structure of the digits 0, 1, 2, ..., 9 used today in the Indian number system evolved over a long period, as shown below —`,
            images: [
              "Diagram showing the evolution of Indian numerals",
              "Map showing the spread of Hindu numerals from India to the Arab world to Europe",
            ],
          },
          {
            title: "Counting Processes",
            content: `Imagine we are living in the Stone Age, about ten thousand years ago. Suppose we have a herd of cows. Here are some natural questions we might ask about the herd —

            Question 1. How can we ensure that all cows have returned safely to their place after grazing?
            Question 2. Do we have fewer cows than our neighbor?
            Question 3. If we have fewer cows, how many more cows do we need to have the same number as our neighbor?

            We need to solve these questions without using number names or written numbers according to the Hindu number system. Tell how we can solve this? Some possible methods are given below.

            Method 1 — We can use pebbles, sticks, or any other objects available in abundance to solve the questions. Let's take sticks. For each cow in the herd, we can place one stick. The collected sticks at the end represent the number of cows, which can be used to find out if any cow is lost.

            This method of placing one stick corresponding to each cow, where no two cows are associated with the same stick, is called one-to-one mapping. This mapping can be used as a method to represent numbers, as shown in the following table.`,
            tableData: {
              headers: ["Number", "Representation (using sticks)"],
              rows: [
                ["1", "|"],
                ["2", "||"],
                ["3", "|||"],
                ["4", "||||"],
                ["5", "|||||"],
                ["...", "..."],
              ],
            },
            content: `? How would you use sticks to answer the other two questions (Questions 2 and 3)?

            Method 2 — We can use a standard sequence of sounds or names. For example, we can use the sounds of letters from any language. While counting, we can create a one-to-one mapping between objects and letters, i.e., associate each object to be counted with a letter following the alphabetical order. This mapping can be used as a method for oral representation of numbers.

            For example, if we use the letters 'a' to 'z' of English, we get the following number representation.`,
            tableData2: {
              headers: [
                "Number",
                "Representation (using letter sounds or names)",
              ],
              rows: [
                ["1", "a"],
                ["2", "b"],
                ["3", "c"],
                ["4", "d"],
                ["5", "e"],
                ["...", "..."],
                ["26", "z"],
              ],
            },
            content: `An obvious limitation of using only the letters of the English alphabet in this way is that it cannot be used to count groups of more than 26 objects.

            How many numbers can you represent using the sounds of letters from your language?

            Method 3 — We can use a sequence of written symbols as follows —`,
            tableData3: {
              headers: ["Number", "Representation", "Number", "Representation"],
              rows: [
                ["1", "I", "11", "XI"],
                ["2", "II", "12", "XII"],
                ["3", "III", "13", "XIII"],
                ["4", "IIII or IV", "14", "XIV"],
                ["5", "V", "15", "XV"],
                ["6", "VI", "16", "XVI"],
                ["7", "VII", "17", "XVII"],
                ["8", "VIII", "18", "XVIII"],
                ["9", "VIIII or IX", "19", "XIX"],
                ["10", "X", "20", "XX"],
              ],
            },
            content: `Can you extend this method to represent larger numbers as well? And how?

            After the above discussion, we see that to count or to find the size of a collection, we need a standard sequence of objects, names, or written symbols that must have a fixed order. Let's call this standard sequence the number system. Counting a collection of objects can be done by creating a one-to-one mapping between the objects and the standard sequence, following a sequential order.

            Since there is no end to numbers, creating an endless standard sequence or number system to easily count numbers is a challenge. Using sticks provides an endless standard sequence or number system. However, it is not convenient for counting a large collection because we need as many sticks as the number of objects to be counted. Method 2, using sounds of language letters, is convenient for counting but it is not an endless standard sequence or number system. The standard sequence or number system given in Method 3 was actually the system used in Europe, later replaced by the Hindu number system. It is called the Roman numeral system. It was widely used in Europe for centuries and was convenient for many purposes, but it also had the drawback of requiring a large number of symbols to write any large number. We will learn more about this system of writing numbers later.`,
            images: [],
          },
          {
            title: "Let's Find Out",
            content: `1. Suppose you are using a number system that uses sticks to represent numbers, as described in Method 1. Without using the number names or numerals of the Hindu number system, describe how to add, subtract, multiply, and divide two numbers or two collections of sticks.

            2. One way to extend the number system given in Method 2 is to use a sequence of more than one letter. For example, we could use 'aa' for 27. How would you extend this system to represent all numbers? There could be many ways to do this.

            3. Try to create your own number system.`,
          },
          {
            title: "3.2 Some Early Number Systems",
            subSections: [
              {
                title: "I. Using Body Parts",
                content: `Many communities around the world have used their hands and other body parts for counting. Let's see how a community in Papua New Guinea used this method and still uses body parts as a standard sequence or number system today.`,
                images: [
                  "Diagram showing body parts used for counting by a Papua New Guinea community",
                ],
              },
              {
                title: "II. Tally Marks on Bones and Other Surfaces",
                content: `Making marks on a surface, like a bone or a cave wall, is one of the oldest methods of representing numbers. These symbols are also called tally marks.

                In this method, one mark is made for each object being counted. The collection of marks obtained at the end represents the total number of objects. This method is similar to the method of counting using sticks (Method 1), the only difference is that instead of adding a stick, a mark is made.

                Archaeologists have discovered ancient bones from 20,000 years ago that appear to have tally marks on them. The oldest known such bones, where marks indicate numbers, are the Ishango Bone and the Lebombo Bone. The Ishango Bone was discovered in the Republic of Congo, dating back 20,000 to 35,000 years. The marks on it are arranged in columns, possibly indicating a calendar system. The Lebombo Bone, discovered in South Africa, is an even older tally stick. It has 29 marks and is estimated to be around 44,000 years old. It is considered one of the oldest mathematical artifacts. It might have been used as a lunar calendar or a counting stick.`,
                images: [
                  "Image of the Lebombo Bone",
                  "Image of the Ishango Bone",
                ],
              },
              {
                title: "III. Number Names from Repeated Counting by Two",
                content: `The following words were used for numbers by the Gumulgal, an Aboriginal group from Australia.

                Gumulgal (Australia)
                1. urapon
                2. ukasar
                3. ukasar-urapon
                4. ukasar-ukasar
                5. ukasar-ukasar-urapon
                6. ukasar-ukasar-ukasar

                ? Can you tell how their number names are formed? The name for number 3 is formed by combining the number names for 2 and 1. The name for number 4 is formed by using the number name for 2 twice.

                ? Can you see how the names for other numbers are formed?

                Numbers are counted by repeated use of 2 (in terms of 2s), and using this, number names are written — 3 = 2 + 1, 4 = 2 + 2, 5 = 2 + 2 + 1, 6 = 2 + 2 + 2. The Gumulgal called any number greater than 6 'ras'.

                There is a very interesting and surprising historical event related to this number system. Let's look at the following number systems of the Bushmen of South Africa and the natives of South America.

                Despite being geographically so far apart and with no evidence of contact, these three groups developed similar number systems. Historians are amazed at how this happened. One theory is that perhaps the ancestors of the people of these three groups were the same, who used this number system. Over time, their descendants migrated and settled in these places.

                The Gumulgal number system had number names only up to 6, yet we can see the origin of an idea here. The method of representing numbers by repeated counting by 2 is superior to other methods, such as tally marks. The idea that took a comprehensive form in various number systems is this: counting in groups of a certain size (like 2 in the case of the Gumulgal system) and using words or symbols related to that group size to represent larger numbers. Some common group sizes used in different number systems are 2, 5, 10, and 20. You can see that the Roman system (Table 1) incorporates the concept of counting in groups of 5.

                Counting in a fixed group size and using this concept to represent numbers is an important concept in the history of the development of number systems.

                One reason for this concept at that time might also have been the human limitation in instantly perceiving the size of a given collection. Let's try the following activity.

                ? Quickly count the number of objects in each box below —

                What size group can you look at and instantly tell the number of objects without counting? Most people find it difficult to count groups of 5 or more objects at a glance.

                The difficulty in knowing the number of 5 or more objects at a glance might have prompted people of that time to replace a group of 5 or more with a new symbol, as shown in the system depicted in Table 1.

                What difficulties might arise in using a number system that counts only in groups of a single size? How would you represent a number like 1345 in a system that counts only by repeated use of 5?

                Although counting in groups of a fixed size and using it to represent numbers is more convenient than the tally method, this method can be more difficult for large numbers. Let's now see a refined version of this in the next system.`,
                images: [],
              },
              {
                title: "IV. Roman Numerals",
                content: `We have already seen numbers up to 20 in the Roman numeral system (Table 1). We saw that in the Roman numeral system, I is used for 1, V for 5, and X for 10.

                To obtain Roman numerals for any number up to 39, first, the number is grouped into groups of 10 as much as possible. The remainder is then grouped into groups of 5 as much as possible. Finally, the remaining ones are grouped into groups of 1.

                Example — Let's take the number 27.
                27 = 10 + 10 + 5 + 1 + 1
                Therefore, the Roman numeral for 27 is XXVII.

                Instead of representing 50 as XXXXX, a new symbol (L) was introduced. Just as the number 4 is represented as 1 less than 5, i.e., IV, similarly, 40 is represented as 10 less than 50, i.e., XL. However, users of this system did not always follow this. Sometimes 40 was also written as XXXX.

                The Roman numeral system uses new symbols to represent certain specific large numbers. Let's call the numbers for which there is a new basic symbol as key numbers. Here are some key numbers of the Roman system and their associated numerals.`,
                tableData: {
                  headers: ["Key Number", "Roman Numeral"],
                  rows: [
                    ["1", "I"],
                    ["5", "V"],
                    ["10", "X"],
                    ["50", "L"],
                    ["100", "C"],
                    ["500", "D"],
                    ["1000", "M"],
                  ],
                },
                content: `These symbols are also used to represent other numbers. For example, consider the number 2367. Let's write it as a sum of key numbers starting from 1000. First, we take as many 1000s as possible, then as many 500s, and so on. We get — 2367 = 1000 + 1000 + 100 + 100 + 100 + 50 + 10 + 5 + 1 + 1.
                Therefore, in Roman numerals, this number is MMCCCLXVII.`,
                images: [],
              },
            ],
          },
          {
            title: "Let's Find Out",
            content: `1. Represent the following numbers in the Roman system.
            (i) 1222 (ii) 2999 (iii) 302 (iv) 715

            We see how much more effective this system is compared to some of the number systems discussed earlier. It seems that this system might have originated from the ancient Greek number system prevalent in Rome around the 8th century BCE. Over time, this system evolved. With the expansion of the Roman Empire, it spread throughout Europe.

            The effectiveness of this system lies not in grouping based on a single group size, but in grouping based on a sequence of group sizes (called key numbers) and then representing the given number by this sequence of key numbers. This feature of the Roman system is a remarkable contribution to the development of number systems in history.

            Despite being more efficient than other systems, the Roman system is not very capable of performing arithmetic operations, especially multiplication and division, with ease.

            ? Example — Try adding the following Roman numerals without converting them to Hindu numerals.
            (a) CCXXXII + CCCXXIII

            Let's try to find the total number of I, X, and C, and group them starting from the largest possible key number. At first glance, it seems that the largest key number is 'C', but note that 5 Cs (500) make one D. Therefore, their sum is — ...`,
            images: ["Addition of Roman numerals CCXXXII and CCCXXIII"],
          },
          {
            title: "Let's Find Out (Continued)",
            content: `Now try this yourself.
            (b) LXXXVII + LXXVIII

            How would you multiply two numbers given in Roman numerals without converting them to Hindu numerals? Try finding the product of the following pairs of key numbers: V × L, L × D, V × D, and VII × IX.

            People using the Roman system used a calculating device called an abacus to perform their arithmetic operations. We will learn about the abacus in the next section. However, only trained individuals used this device.

            While considering the number systems discussed above, it should not be assumed that historically one system developed as an improvement over another that preceded it. This should also be kept in mind while studying the number systems that follow. The actual story of the development of each number system is highly complex and often not clearly known. Therefore, we will not try to discover it from this chapter.`,
          },
          {
            title: "Let's Find Out",
            content: `1. A group of indigenous people living on an island in the Pacific Ocean uses different sequences of number names for counting different objects. Why do they do this? Think and tell.

            2. Consider the numbers beyond 6 in the Gumulgal number system, which uses counting by repeated use of 2. Find methods for performing various arithmetic operations (+, −, ×, ÷) on numbers in this system without using Hindu numerals. Use this to evaluate the following.
            (i) (ukasar-ukasar-ukasar-ukasar-urapon) + (ukasar-ukasar-ukasar-urapon)
            (ii) (ukasar-ukasar-ukasar-ukasar-urapon) – (ukasar-ukasar-ukasar)
            (iii) (ukasar-ukasar-ukasar-ukasar-urapon) × (ukasar-ukasar)
            (iv) (ukasar-ukasar-ukasar-ukasar-ukasar-ukasar-ukasar) ÷ (ukasar-ukasar)

            3. Identify the features of the Hindu number system that make it more effective than the Roman number system.

            4. Using the concepts discussed in this section, try to refine the number system made earlier.`,
          },
          {
            title: "3.3 The Concept of Base",
            subSections: [
              {
                title: "I. The Egyptian Number System",
                content: `Now we will observe a written number system developed by the Egyptians around 3000 BCE. In this system, we use key numbers to group and represent a given number. However, the main feature of this system is the sequence of key numbers.

                Imagine you are making a collection of pebbles. Let the first key number for one pebble be 1. Make a group of 10 collections of the previous key number (1) together. The size of this group is the second key number, which is 10. Make a group of 10 collections of the previous key number (10) together. The size of this group is the third key number, which is 10 × 10 = 100. And in this way, we can get the next key numbers.

                Each key number is 10 times the previous key number. Since the first key number is 1, all these numbers are powers of 10. The symbols for these numbers are as follows —

                1 | 10 | 10² | 10³ | 10⁴ | 10⁵ | 10⁶ | 10⁷
                --- | --- | --- | --- | --- | --- | --- | ---
                | (heel bone) | (coil of rope) | (lotus flower) | (pointing finger) | (tadpole) | (man with arms raised) | (sun)

                Like Roman numerals, a given number can be counted in groups of key numbers. This starts with the largest key number smaller than the given number. Then it is used to represent the numeral.

                For example, the number 324, which is equal to 100 + 100 + 100 + 10 + 10 + 4, is written as (three lotus flowers) (two coils of rope) (four heel bones).`,
                images: [
                  "Hieroglyphs for Egyptian key numbers",
                  "Example of 324 in Egyptian numerals",
                ],
              },
            ],
          },
          {
            title: "Let's Find Out",
            content: `1. Represent the following numbers in the Egyptian number system: 10458, 1023, 2660, 784, 1111, 70707.

            2. What numbers do these Egyptian numerals represent?`,
            images: ["Egyptian numerals to be decoded"],
          },
          {
            title:
              "II. Variations in the Egyptian System and the Notion of Base",
            content: `? Instead of grouping 10 collections of the same size as the previous key number together (as was done in the Egyptian system), could we obtain a number system by grouping 5 collections of the same size as the previous key number together? Can this 5 be replaced by any positive integer?

            Let's check this possibility. Let the first key number be 1.

            Make a group of 5 collections of the same size as the previous key number (1) together. The size of this group is the second key number, which is 5.

            Make a group of 5 collections of the same size as the previous key number (5) together. The size of this group is the third key number, which is 5 × 5 = 25.

            Make a group of 5 collections of the same size as the previous key number (25) together. The size of this group is the fourth key number, which is 5 × 25 = 125.

            Thus, we have a new number system where each key number is 5 times the previous key number. Since the first key number is 1, all these numbers are powers of 5.
            5⁰ = 1, 5¹ = 5, 5² = 25, 5³ = 125, 5⁴ = 625, 5⁵ = 3125.

            Represent the number 143 in this new number system.

            Let's start grouping. We start with 5³ = 125, as it is the largest key number less than 143. We get —
            143 = 125 + 5 + 5 + 5 + 1 + 1 + 1.
            Therefore, the representation for the number 143 in the new system is (one '125' symbol) (three '5' symbols) (three '1' symbols).

            In number systems that have key numbers —
            (a) The first key number is 1.
            (b) Each subsequent key number is obtained by multiplying the current key number by a fixed number n. This is called a base-n number system.

            The Egyptian number system is a base-10 system, and the system we created is a base-5 system. The base-10 system is also called the decimal number system.`,
            images: [],
          },
          {
            title: "Let's Find Out",
            content: `1. Write the following numbers in the base-5 system using the given symbols: 15, 50, 137, 293, 651.

            2. Is there any number that cannot be represented in our base-5 system described above? Why or why not?

            3. Calculate the key numbers of a base-7 system. In general, what are the key numbers of a base-n system?

            The key numbers of a base-n number system are the powers of n starting from n⁰ = 1: 1, n, n², n³, ……….

            Advantages of a Base-n System
            What are the advantages of taking key numbers that are all powers of a number? Let's perform some arithmetic operations using key numbers to understand this.

            ? Example — Find the sum of the following Egyptian numerals.

            Let's try to find the total number of heel bones and coils of rope, and group them starting from the largest possible key number. Their sum is —`,
            images: ["Addition of Egyptian numerals"],
          },
          {
            title: "Let's Find Out (Continued)",
            content: `1. Find the sum of the following Egyptian numerals.

            2. Find the sum of the following numerals in the base-5 system created from the Hindu numeral system. Remember, in this system, multiplying a key number by 5 gives the next key number.

            Compare the regrouping in addition performed in a base-n system with that performed in the Roman system. In the Roman system, grouping and regrouping must be done carefully because each key number is not always grouped into the same size to obtain the next key number.

            The advantage of a base system becomes even clearer in the process of multiplication.

            How to multiply two numbers in Egyptian numerals?

            Let's first consider the product of two key numbers.

            ? 1. What is obtained by multiplying a key number by 10? Find the following products.
            (i) 1 × 10 (ii) 10 × 10 (iii) 100 × 10 (iv) 1000 × 10

            Each key number is a power of 10, so multiplying it by 10 increases its power by 1, giving the next key number.

            ? 2. What is obtained by multiplying a key number by 100 (10²)? Find the following products.
            (i) 1 × 100 (ii) 10 × 100 (iii) 100 × 100 (iv) 1000 × 100

            Find the following products.
            Therefore, the product of any two key numbers is another key number.

            Does this property also hold for our base-5 system? Does it hold for any base system?

            What conclusion can we draw about the product of a number and 10 in the Egyptian system?

            (ii) ... is equal to ... Therefore, ...

            Will the distributive property apply here? Just as it applies for (a + b) × n, it also applies when a number has more than two terms. For example, (a + b + c) × n = an + bn + cn. Therefore,

            ( + + ) × = ( × ) + ( × ) + ( × ) = + + =

            Find the product of the following.

            What would be a simple rule for multiplying a number by in the Egyptian system?

            As we have seen, the process of multiplying two numbers involves the multiplication of key numbers. When key numbers are powers of a number, their product is another key number. This fact simplifies the multiplication process. However, this is not the case with Roman numerals, making multiplication difficult with them.

            Therefore, a number system whose key numbers are powers of a number, i.e., a base number system, is effective not only for number representation but also for performing arithmetic operations.

            The concept of a base number system was a significant change in the history of the development of number systems. Our modern Hindu number system is based on this structure.`,
            images: [],
          },
          {
            title: "The Abacus Using the Decimal System",
            content: `Around the 11th century, even those who used Roman numerals started using the abacus, a calculating device based on the decimal system. It was a board with lines, as shown in Figure 3.1. On this board, starting from the line representing 1, each successive line was represented as a consecutive power of 10.

            Numbers were represented on it as follows —

            The given number was first grouped into key numbers (powers of 10), just as we have been grouping numbers until now.

            For each power of 10, as many counters were placed on its line as the number of times that grouping appeared. The presence of a counter above the line gives a value of 5 on that line (e.g., 5 units, 5 tens, etc.).

            For example, let's take the number 3426. It can be grouped as follows — 3426 = 1000 + 1000 + 1000 + 100 + 100 + 100 + 100 + 10 + 10 + 1 + 1 + 1 + 1 + 1 + 1 + 1.
            This number is represented as shown in Figure 3.1. Note how 6 units are represented.

            To understand how the abacus was used for calculation, consider a simple addition problem — 2907 + 43. The two given numbers are taken on either side of the vertical dividing line of the abacus.

            How would you use it to find the sum?

            The counters on each line were brought together. What to do if the total on a line exceeds 10?

            Hint — In this problem, 7 units and 3 units make 10, which gives the value of one counter for the line representing tens.`,
            images: ["Figure 3.1 - Abacus"],
          },
          {
            title: "III. Limitations of the Egyptian System",
            content: `Even after being a system capable of relatively effective number representation up to numbers like one crore (10⁷) and capable of performing relatively simple calculations, the Egyptian system had one drawback.

            To represent very large numbers, an endless sequence of symbols for higher powers of 10 was needed. Here we see the fundamental challenge of number representation re-emerging in another form.

            The final concept in the history of the development of number systems not only solves the above problem but also remarkably simplifies number representation and calculation.`,
            images: [],
          },
          {
            title: "Let's Find Out",
            content: `1. Can there be a number whose Egyptian numeral representation contains a particular symbol 10 or more times? Why not?

            2. Create your own base-4 number system and represent the numbers 1 to 16 in it.

            3. Give a simple rule for multiplying a given number by 5 in our base-5 system.`,
          },
          {
            title: "3.4 Place Value Representation",
            content: `Initially, the number system used in ancient Mesopotamia had different symbols for different key numbers. Later, it became a base-60 system, also called the sexagesimal system, which was a highly effective number representation.

            At that time, many people were confused about why they chose base-60. Various theories exist to explain this, ranging from the relationship between 60 and the periods of some important events (such as the duration of a lunar month, which had 30 days, or the time taken for the sun to complete one orbit around the Earth, assuming Earth is stationary), to the ease of representing fractions (we will not discuss this here), and the previous sequence of key numbers in Mesopotamia — 1, 10, 60, 600, 3600, 36000... simply settling into powers of 60.

            The influence of the Mesopotamian sexagesimal system, also known as the Babylonian number system, can still be seen in our time measurement units today, such as 1 hour = 60 minutes and 1 minute = 60 seconds. In this system, the symbol  was used for 1 and the symbol  for 10.

            Now, let's pause for a moment and consider how an effective number system could be created using the features of the known Mesopotamian system.

            Let's give our own symbols to their key numbers —
            Note that while creating these symbols, we have used the Indian digits or numerals themselves. We could have created our own symbols, but for ease of remembrance and use, we have chosen the familiar numerals 1, 2, 3.

            Using the symbols for 1 and 10, numbers from 1 to 59 can be shown or represented as follows —`,
            tableData: {
              headers: ["Number", "Representation", "Number", "Representation"],
              rows: [
                ["1", "1", "10", "10"],
                ["2", "2", "11", "11"],
                ["3", "3", "12", "12"],
                ["4", "4", "20", "20"],
                ["5", "5", "30", "30"],
                ["6", "6", "40", "40"],
                ["7", "7", "50", "50"],
                ["8", "8", "59", "59"],
                ["9", "9", "", ""],
              ],
            },
            content: `Example — Let's represent the number 640 in this system. Grouping it into key numbers, we see that — 640 = (10) × 60 + 40.
            If we use the Egyptian number system, this number would be represented by 10 symbols for 1 and 4 symbols for 10. Here, it will be represented by 10 symbols for 60? No, that would be inconvenient. Instead, we use the symbol for 10 (which represents the number of times 60 is taken) and the symbol for 40.

            Can we represent it more concisely? We can simply represent this number as — (10)(40)
            which can be read as ten times 60 and one time 40, exactly as we wrote in the equation.

            Example — Let's try to represent another number, 7530.
            7530 = (2) × 3600 + (5) × 60 + 30.
            Therefore, its representation would be (2)(5)(30).

            Note that when a number is grouped into powers of 60 for representation, the power of 60 cannot appear 60 or more times. If it does, then 60 of them can be grouped into the next power of 60. For example, consider the expression below —
            (1) × 3600 + (70) × 60 + 2 = (1) × 60² + (60 + 10) × 60 + 2 = (1) × 60² + 60² + (10) × 60 + 2 = (2) × 60² + (10) × 60 + 2.
            Therefore, any number can be represented using numbers between 1 and 59 as digits for the key numbers.

            Now, what if we make the representation even more concise by removing the symbols for the different powers of 60?

            This is exactly the representation used by the people of Mesopotamia. In their numerals, the rightmost group of symbols indicated the number of units. The group to its left indicated the number of 60s. The next group to the left indicated the number of 3600s, and so on. Whenever a power of 60 was missing in the number, a space was left in that place.

            It does not seem that the people of Mesopotamia arrived at this idea in the same way we did. Some scholars suggest that the similarity between the symbols given for the key numbers 1 and 60 in their earlier number system, and their accidental use, might have led them to this idea.`,
            images: ["A replica of a Mesopotamian tablet"],
          },
          {
            title: "Let's Find Out",
            content: `1. Represent the following numbers in the Mesopotamian system.
            (i) 63 (ii) 132 (iii) 200 (iv) 60 (v) 3605

            We can see how the Mesopotamian system, by using the positions where symbols are written, eliminated the need to create an endless sequence of symbols for the key numbers. Such a number system (which has a base) that uses the position of each symbol to determine the key number it corresponds to is called a positional number system or a place value system.

            The concept of place value is a crucial point in the history of the development of number systems. This concept provided an excellent solution to the problem of representing an endless sequence of numbers using a limited number of symbols.

            However, the Mesopotamian system cannot be considered a fully developed place value system. Moreover, it had some ambiguities that created confusion when reading a number.

            Observe the representation of the number 60. What would be the representation of the number 3600?

            When writing numerals, the spaces (gaps) between symbols were not given as they are here. Maintaining consistent spacing across different manuscripts written by different individuals was also difficult. This led to ambiguities. For example, consider the representations of the numbers below —`,
            tableData: {
              headers: ["Number", "Representation"],
              rows: [
                ["1", "1"],
                ["60", "1 1"],
                ["3600", "1 1 1"],
                ["61", "1 1"],
                ["2", "2"],
                ["3602", "2 1 1"],
              ],
            },
            content: `Due to this ambiguity about which symbols correspond to which power of 60, the same representation could be read in different ways. Even in our representation, where uniform spacing is used between symbols for different powers of 60, it is difficult to know the number of spaces between two groups of symbols, as can be seen in the representation of 36002.

            To solve the problem caused by spaces, the people of Mesopotamia later adopted the wonderful solution of using a 'placeholder' symbol to mark the gap. This is similar to the 0 (zero) used in our system. Thus, zero (the symbol representing emptiness) is indispensable as a 'placeholder' in any place value system where numbers are written unambiguously.

            Even after solving the problem caused by spaces, other ambiguities remained in this system. For example, the placeholder symbol was primarily used between numbers, not at the end. Therefore, they could not use it to represent numbers like 3600.`,
            images: [],
          },
          {
            title: "II. The Maya Number System",
            content: `A civilization called the 'Maya civilization' developed in Central America, which made vast intellectual and cultural progress from the 3rd to the 10th century CE. Among their intellectual achievements is a place value system conceived independently from the people of Asia. They also used a placeholder symbol for the modern '0', which looked like a shell.

            The Maya number system was approximately a base-20 system.`,
            tableData: {
              headers: ["Key Numbers", "Symbols"],
              rows: [
                ["1", "• (dot)"],
                ["5", "— (bar)"],
                ["0", " (shell)"],
              ],
            },
            content: `In the Maya number system, symbols were placed vertically to represent a number.

            How is it read?
            The value of the symbols: The lowest group of symbols corresponds to the number of units. The group above it corresponds to the number of 20s. The group above that corresponds to the number of 360s? Actually, the third key number was 360 (instead of 400).

            Here we encounter a puzzling phenomenon. Why was their third key number 360 instead of 400? Some scholars believe this might have some connection with their calendar.

            In the Maya number system, a dot • was used for 1, and a bar — was used for 5. These symbols were used to represent numbers from 1 to 19.

            Symbols associated with different key numbers were written one below the other, with the bottommost group of symbols corresponding to the number of units. The group above it corresponded to the number of 20s. The group above that corresponded to the number of 360s. And so on.

            ? Represent the given numbers using the Maya number system.
            (i) 77 (ii) 100 (iii) 361 (iv) 721

            Since the Maya system is not a true base-20 system, it lacks the convenience of a base system for calculations. Nevertheless, their use of place value notation and a placeholder symbol for zero is considered a significant advancement in the history of number systems.

            An interesting fact is that we can still see the use of base-20 in the number names of some European languages.`,
            images: ["Maya numerals", "Vertical representation in Maya system"],
          },
          {
            title: "III. The Chinese Number System",
            content: `The people of China used two number systems — a written system for writing quantities, and a rod-based system for calculation. In the rod-based number system, the numerals are called rod numerals. Here we will discuss rod numerals, which were more effective for writing numbers and performing calculations than the Chinese written system.

            Rod numerals in China were developed by around the 3rd century CE and remained in use until the 17th century. It was a decimal system (base-10). The symbols for 1 to 9 were as follows —`,
            tableData: {
              headers: ["Number", "Rod Numeral (Jong)", "Rod Numeral (Heong)"],
              rows: [
                ["1", "|", "—"],
                ["2", "||", "="],
                ["3", "|||", "≡"],
                ["4", "||||", "≡≡"],
                ["5", "|||||", "≡≡≡"],
                ["6", "T", "⊥"],
                ["7", "┬", "┬"],
                ["8", "┴", "┴"],
                ["9", "┼", "┼"],
              ],
            },
            content: `Like the Mesopotamian system, the Chinese rod numerals used a space to indicate the absence of a place value. However, due to the somewhat more uniform size of the symbols for 1 to 9, identifying the spaces in the Chinese system was relatively easier than in the Mesopotamian system.

            Note how similar the rod numerals are to the Hindu system. With a symbol for zero, the Chinese system would be a fully developed place value system.`,
            images: [],
          },
          {
            title: "IV. The Hindu Number System",
            content: `? What is the place of the Hindu and Indian number system in the development of ideas of number representation? What are its key numbers? Does this system use a place value system?

            As can be seen, the Hindu number system is a place value system. A symbol for zero has existed in the Hindu number system since at least 200 BCE. Due to the use of 0 as a digit and the use of a single digit for each place, there is no ambiguity whatsoever when reading or writing numerals in this system. This is why the Hindu number system is now used throughout the world.

            The use of zero as a digit and, in the true sense, as a number was an achievement that truly transformed the world of mathematics and science. In Indian mathematics, zero was not only used as a placeholder in the place value system but was also given the status of a number like other numbers. To perform calculations using Hindu numerals and to explain scientific calculations, Aryabhata, in his work 'Aryabhatiya' (499 CE), clearly used the arithmetic properties of the number 0 (such as adding any number to 0 gives the same number, and multiplying any number by 0 gives 0), as we learned in the previous class. In 628 CE, Brahmagupta, in his work 'Brahmasphuta-siddhanta', codified the use of 0 as a number like any other number (with which basic mathematical operations can be performed).

            By presenting zero as a number along with negative numbers, Brahmagupta created what is known in modern terms as a ring, i.e., a set of numbers that is closed under addition, subtraction, and multiplication. In other words, performing addition, subtraction, or multiplication on any two numbers from the set yields another number within the same set. These new ideas laid the foundation of modern mathematics, especially the fields of algebra and analysis.

            Hopefully, this has given you insight into all the concepts we use today in writing numbers and performing calculations. The discovery of zero and the resulting Indian number system is truly one of the greatest, most creative, and most influential inventions ever, one that is constantly visible in our daily lives. Moreover, it forms the basis of modern science, technology, computation, accounting, surveying, etc. So, when you write numbers next time, do think about the extraordinary history behind them and the profound concepts that came into play at the time of their invention.`,
            images: [
              "Bakhshali manuscript showing zero",
              "Aryabhata",
              "Brahmagupta",
            ],
          },
        ],
        summary: [
          "To represent numbers, we need a standard sequence of objects, names, or written symbols that have a fixed order. This standard sequence is called a number system.",
          "The symbols used to represent numbers in a written number system are called numerals.",
          "In a number system, key numbers are those that can be easily identified and used as reference points for understanding other numbers and performing calculations with them. They provide stability to the number system, helping users orient themselves and comprehend quantities, especially large ones.",
          "A number system whose key numbers are powers of n is called a base-n number system.",
          "Number systems that have a base and use the position of a symbol to determine the key number it represents are called positional number systems or place value systems.",
          "Place value representation was used by the Mesopotamian (Babylonian) civilization, the Maya civilization, the Chinese civilization, and the Indian civilization.",
          "The numeral system we use throughout the world today is the Hindu number system (sometimes also called the Indian number system or the Hindu-Arabic number system). It is a place value system with (typically) 10 digits. It includes the digit 0, which is treated like other digits. Due to the use of 0 as a number, this system enables us to write all numbers unambiguously using a limited set of symbols and also enables us to perform calculations efficiently. This system originated in India around 2000 years ago, and later spread throughout the world, and is considered one of the greatest inventions in human history.",
        ],
      },
    },
    // chapter 4 Quadrilaterals
    {
      id: 4,
      title: "Quadrilaterals",
      content: {
        introduction:
          "In this chapter, we will study some interesting types of four-sided figures and solve problems based on them. Such figures are generally known as quadrilaterals. The word 'quadrilateral' originates from the Latin words 'quadri' meaning four and 'latus' meaning sides. Observe the figures below.",
        images: [
          "Figures (i), (ii), (iii) showing quadrilaterals, and other figures not quadrilaterals",
        ],
      },
      sections: [
        {
          title: "4.1 Rectangle and Square",
          content: `We know what a rectangle is. Let's define it.

          Rectangle — A rectangle is a quadrilateral in which —
          (i) All angles are right angles (90°).
          (ii) Opposite sides are equal in length.

          This definition precisely describes the conditions that a quadrilateral must satisfy to be called a rectangle.

          ? Are there other ways to define a rectangle?

          Let's consider a problem related to constructing rectangles.

          A Carpenter's Problem
          A carpenter has two thin wooden strips that he wants to join together as shown in Figure 1, so that when a thread is passed through their endpoints, the thread forms a rectangle.

          The carpenter already has one strip 8 cm long. What should be the length of the other strip? Also, tell where the two strips should be joined?

          Let's create a model of the structure the carpenter wants to build. The strips can be represented by line segments. The strips are the diagonals of the quadrilateral formed by joining the endpoints of the strips or line segments. For the resulting quadrilateral to be a rectangle, we need to answer the following questions —

          ? 1. What is the length of the other diagonal?
          ? 2. Where is the intersection point of the two diagonals?
          ? 3. What should be the angle between the diagonals?

          ? Let's answer these questions using geometric reasoning (deduction). If this is challenging, try constructing some rectangles and measuring them.

          Let's assume that we have constructed the diagonals such that their endpoints become the vertices of the rectangle, as shown in Figure 2, to find the answers to these questions.

          Deduction 1 — What is the length of the other diagonal?
          The conclusion of Deduction 1 can be found using congruence as follows —

          Since ABCD is a rectangle, therefore:
          AB = CD
          ∠BAD = ∠CDA = 90°
          AD is a common side to both triangles.

          Therefore, by the Side-Angle-Side (SAS) congruence rule, ΔADC ≅ ΔDAB.

          Hence, AC = BD, as they are corresponding sides of congruent triangles. This shows that the diagonals of a rectangle are equal in length.

          Therefore, the other diagonal must also be 8 cm long. You can verify this property by constructing some rectangles and measuring them.

          Deduction 2 — What is the intersection point of the two diagonals?
          Deduction 2 can also be obtained from congruence. Since we need to understand the relationship between OA and OC, and OB and OD, which two triangles of rectangle ABCD should we consider?

          Blue angles are equal as they are vertically opposite angles.

          Since ∠B = 90°, ∠3 + ∠1 = 90°. Consider ∠1 and ∠2 to show congruence. Are they equal?

          In ΔBCD, since ∠3 + ∠2 + 90° = 180°, therefore ∠3 + ∠2 = 90°.

          Hence, ∠1 = ∠2 (= 90° − ∠3).

          Thus, by the Angle-Angle-Side (AAS) congruence rule, ΔAOB ≅ ΔCOD.

          Therefore, OA = OC and OB = OD, as they are corresponding parts of congruent triangles.

          Hence, O is the midpoint of AC and BD.

          This shows that the diagonals of a rectangle always bisect each other.

          Therefore, to form a rectangle, the diagonals should be drawn such that they are equal in length and bisect each other.

          When the diagonals intersect at the midpoint, we can say that the diagonals bisect each other. Bisecting a length means dividing it into two equal parts.

          Construct some rectangles and verify this property by measuring the diagonals and the parts of the diagonals from the intersection point.

          ? Can the following equalities be used to prove ΔAOD ≅ ΔCOB?
          AO = CO (proved above)
          ∠AOB = ∠COD (vertically opposite angles)
          AD = CB

          Deduction 3 — What are the angles between the diagonals?
          Let's check if we draw two diagonals as shown in the adjacent figure such that they are equal in length, bisect each other, and make an arbitrary angle of 60° between them. What quadrilateral is obtained?

          ? Can you find all the other angles?

          Using our understanding of vertically opposite angles and linear pairs, we can find the other angles formed between the diagonals.

          In ΔAOB, since OA = OB, the base angles opposite them will be equal. Let that measure be a.

          ? Can you find the value of a?

          In ΔAOB, a + a + 60 = 180 (sum of interior angles of a triangle). Hence, 2a = 120°. Thus, a = 60°. Similarly, we can find the values of other angles using this method.

          Can we now identify what type of quadrilateral ABCD is? Note that the sum of angles at each vertex is 90° (30° + 60°).

          What can we say about the sides of this quadrilateral?

          We can see that ΔAOB ≅ ΔCOD and ΔAOD ≅ ΔCOB. Therefore, AB = CD and AD = CB, as they are corresponding parts of congruent triangles.

          Hence, ABCD is a rectangle and satisfies the definition of a rectangle.

          If the angle between the diagonals is changed, will ABCD remain a rectangle? Can we generalize this?

          Let the angle between the diagonals be x.

          We can calculate the four angles between the diagonals as x, x, 180 – x, and 180 – x.

          Can you find the other angles of the quadrilateral?

          Since we know that ΔAOB is an isosceles triangle, we can denote the measure of its base angles by a.

          ? What is the value of a (in degrees) in terms of x? Here,
          a + a + x = 180 (sum of interior angles of a triangle)
          2a = 180 – x
          a = (180 – x)/2 = 90 – x/2.

          Similarly, in isosceles triangle ΔAOD, let the base angle be b.
          b + b + (180 – x) = 180
          2b = 180 – (180 – x)
          2b = 180 – 180 + x
          2b = x
          b = x/2.

          All vertex angles of the quadrilateral are a + b, which is
          90 – x/2 + x/2 = 90°.

          Thus, each angle of quadrilateral ABCD measures 90°.

          ? What can we say about AB & CD and AD & BC?
          Here, ΔAOB ≅ ΔCOD and ΔAOD ≅ ΔCOB. Therefore, AB = CD and AD = CB, as they are corresponding sides of congruent triangles.

          Hence, regardless of the angle between the diagonals, if the diagonals are equal in length and bisect each other, then each angle of the resulting quadrilateral will be 90°, and each pair of opposite sides will be equal. Thus, the quadrilateral will be a rectangle.

          Now we understand how to place the wooden strips so that the thread passing through their endpoints forms the vertices of a rectangle! The strips must be equal in length and joined at their midpoints.

          In fact, this method is used to construct rectangles. Carpenters in Europe use this method to make rectangular frames. It is known that farmers in Mozambique, a country in Africa, use this method to build the rectangular foundation of houses when constructing homes.

          Method for Discovering Properties
          As we have been observing in previous classes, properties of geometric objects or shapes like parallel lines, angles, and triangles can be deduced through geometric reasoning. In this chapter, we will continue to deduce properties of special types of quadrilaterals.

          Once you deduce a property of a quadrilateral, it would be appropriate to verify it practically with a quadrilateral, whether its structure is drawn on paper or it is a common quadrilateral-shaped surface.

          If you are unable to deduce a property through reasoning, you can take any quadrilateral shape, experiment, and observe the property through measurement. Note that these observations provide important insights into the property. However, with that insight, we can only make a conjecture. A conjecture is a statement that we are highly confident about, but it is not yet confirmed to be always true. For example, constructing some rectangles and observing through measurement that their diagonals bisect each other does not mean that this will always happen. Can we be sure that the 1000th rectangle we construct will also have this property? The only way to be certain about this property is to provide a proof of that statement, as we did in Deduction 2.

          Note for Teachers — Gradually encourage students to deduce or verify properties. Whenever students face challenges while doing so, encourage them to experiment, observe, and use their intuition to discover properties.

          The carpenter's problem shows that a rectangle can also be defined as follows —

          Rectangle — A rectangle is a quadrilateral whose diagonals are equal and bisect each other.

          Note how this definition differs from the one given earlier. Yet, both definitions encompass the same class of quadrilaterals. Additionally, we find that the earlier definition can be simplified.

          In the earlier definition, we stated that (i) opposite sides are equal in length, and (ii) all angles are 90°. Would our statement be flawed if we defined a rectangle as a quadrilateral in which each angle measures 90°?

          If you think this definition is incomplete, try constructing a quadrilateral in which each angle measures 90° but opposite sides are not equal.

          Can you construct such a quadrilateral? Let's prove why this is impossible.

          Deduction 4 — What will be the shape of a quadrilateral whose each angle is 90°?
          Consider a quadrilateral ABCD in which each angle measures 90°. What can we say about the opposite sides of such a quadrilateral?

          Join B and D. Triangles ΔBAD and ΔDCB appear congruent. Is this reasoning appropriate?

          Two equalities can be seen directly in the triangles. What can we say about ∠1 and ∠2?

          Recall that we solved exactly this type of problem in Deduction 2. We can use the same reasoning here.

          Since ∠B = 90°, ∠3 + ∠1 = 90°.
          In ΔBCD, ∠3 + ∠2 + 90° = 180° ⇒ ∠3 + ∠2 = 90°.
          Therefore, ∠1 = ∠2.

          Thus, by the AAS congruence condition, ΔBAD ≅ ΔDCB.
          Hence, AD = CB and DC = BA, as they are corresponding sides of congruent triangles.

          Would it be wrong to write ΔBAD ≅ ΔCDB? If yes, why?

          Thus, we have proved that when all angles of a quadrilateral are right angles, the opposite sides are equal in length. Therefore, that quadrilateral is a rectangle. Hence, a rectangle can be defined in simpler terms as follows —

          Rectangle — A rectangle is a quadrilateral in which each angle measures 90°.

          Let's list the properties of a rectangle.

          Property 1 — Each angle of a rectangle measures 90°.
          Property 2 — Opposite sides of a rectangle are equal.

          Are the opposite sides of a rectangle parallel?
          This certainly seems to be the case. This fact can be verified using the properties of a transversal.

          Note that AB is a transversal for AD and BC, and ∠A + ∠B = 90° + 90° = 180°.
          When the sum of interior angles on the same side of a transversal is 180°, the lines are parallel. Using this fact, we can conclude that lines AD and BC are parallel, which we denote as AD || BC.

          Can you similarly show that AB is parallel to DC (AB || DC)?

          Property 3 — Opposite sides of a rectangle are parallel to each other.
          Property 4 — The diagonals of a rectangle are always equal in length. Also, they bisect each other.

          A Special Rectangle
          Which of the quadrilaterals below are not rectangles?

          All the above quadrilaterals are rectangles, including figure (iv). Figure (iv) is a rectangle because each of its angles measures 90°. However, it is a special rectangle in which all sides are equal in length. We know that this quadrilateral is also called a square.

          Square — A square is a quadrilateral in which each angle measures 90° and all sides are equal in length.

          Thus, every square is also a rectangle, but we can clearly say that not every rectangle is a square.

          This relationship can be represented diagrammatically using a Venn diagram. We have seen Venn diagrams before. In a Venn diagram, a set of objects is represented as points inside a closed curve. Typically, these closed curves are ovals or circles. For example, the set of all squares is represented like this.

          Every point in this region represents a square, including all possible squares.

          Since every square is a rectangle, the two sets can be represented by a Venn diagram as follows —

          Let's consider the carpenter's problem again. If the wooden strips are placed so that the thread passing through the endpoints forms a square, what must we do?

          Let's try to make a square similar to the previous situation, with one diagonal of length 8 cm. When solving the carpenter's problem for a rectangle, we observed that to obtain a quadrilateral with all angles 90° (and opposite sides equal), the diagonals must be drawn such that —
          (i) they are all equal in length, and (ii) they bisect each other.

          What is needed? Can this be achieved by choosing the angle between the diagonals appropriately? Can you figure this out through reasoning or experiment?

          Deduction 5 — What should be the angle between the diagonals?
          The angle between the diagonals can be found using the concept of congruence. Suppose we join equal diagonals such that they bisect each other and a square is obtained. Let's name this square ABCD.

          Which two triangles can be used to find the angles between the diagonals through their congruence?

          By the SSS congruence rule, ΔBOA ≅ ΔBOC.

          Can this be used to find the angles ∠BOA and ∠BOC formed by the diagonals?
          Since these angles are corresponding angles of congruent triangles, they are equal to each other. Additionally, these angles together form a straight angle. Hence, ∠BOA + ∠BOC = 180°. Therefore, each angle must measure 90°.

          This shows that the diagonals of a square bisect each other at right angles. That is, the diagonals should be drawn such that they are equal in length and bisect each other at right angles. Since the endpoints of the diagonals uniquely determine the vertices of a quadrilateral, joining the endpoints of the diagonals yields a square.

          Using this fact, construct a square with a diagonal of length 8 cm.

          Properties of a Square
          Since a square is a special type of rectangle, all properties of a rectangle apply to a square as well.
          Verify using geometric reasoning from Deduction 1 and Deduction 2 whether the above facts are true. Also, check if they can be applied to a square.

          Property 1 — All sides of a square are equal to each other.
          Property 2 — All opposite sides of a square are parallel to each other.
          Property 3 — Each angle of a square measures 90°.
          Property 4 — The diagonals of a square are equal and bisect each other at 90°.

          A square has one more special property.
          What are the measures of ∠1, ∠2, ∠3, and ∠4? Let's see how we can find this through reasoning or experiment.

          In ΔADC,
          ∠1 + ∠3 + 90° = 180°.
          Since AD = DC, we get ∠1 = ∠3.
          Hence, ∠1 = ∠3 = 45°.
          Similarly, find the values of ∠2 and ∠4.
          Thus, it is clear that a square has another property —

          Property 5 — The diagonals of a square bisect the vertex angles. We can also state this as: the diagonals of a square bisect its vertex angles.`,
          images: [
            "Figure 1",
            "Figure 2",
            "Venn diagram of squares",
            "Venn diagram of squares inside rectangles",
            "Square ABCD with diagonals",
          ],
        },
        {
          title: "Let's Find Out",
          content: `1. Find all other interior angles of the rectangles given below.

            2. Construct a quadrilateral in which each diagonal is 8 cm long, they bisect each other, and make the following angles.
            (i) 30° (ii) 40° (iii) 90° (iv) 140°

            3. Let O be the center of a circle. Line segments PL and AM are two diameters of the circle, and they are perpendicular to each other. What type of quadrilateral is APML? Find out through reasoning and/or experiment.

            4. We have seen how to make a 90° angle by folding paper. Suppose we don't have paper, but we have two sticks of equal length and a thread. How will we make a 90° angle using these?

            5. We have seen that a property of a rectangle is that its opposite sides are parallel. Can this be used as a definition of a rectangle? In other words, will every quadrilateral with opposite sides parallel and equal be a rectangle?`,
        },
        {
          title: "4.2 Angles of a Quadrilateral",
          content: `Is it possible to construct a quadrilateral in which three angles are equal to 90° and the fourth angle is not 90°?

            Through constructions, you might have observed that this is not possible.

            ? But why not?

            This is due to a general property related to the angles of quadrilaterals.

            We know that the sum of the three interior angles of a triangle is 180°. There is a similar regularity for the sum of angles of a quadrilateral. Consider a quadrilateral SOME.

            Draw a diagonal SM. We get two triangles ΔSEM and ΔSOM.

            In ΔSEM, ∠1 + ∠2 + ∠3 = 180°.
            In ΔSOM, ∠4 + ∠5 + ∠6 = 180°.

            What do we get by adding all six angles? We get —
            ∠1 + ∠2 + ∠3 + ∠4 + ∠5 + ∠6 = 180° + 180° = 360°
            or (∠1 + ∠4) + (∠3 + ∠6) + ∠2 + ∠5 = 360°.

            Since (∠1 + ∠4), (∠3 + ∠6), ∠2, and ∠5 are the angles of quadrilateral SOME, we get the following result —

            The sum of all angles of any quadrilateral is 360°.

            The above statement shows that it is impossible for a quadrilateral to have three right angles and the fourth angle not be a right angle.`,
          images: ["Quadrilateral SOME with diagonal SM"],
        },
        {
          title: "4.3 Quadrilaterals with Opposite Sides Parallel",
          content: `In a rectangle (and also in a square), opposite sides are parallel.

            Are there quadrilaterals in which opposite sides are parallel but which are not rectangles?

            Let's try to construct one.

            This task can be done simply by drawing pairs of parallel lines. For this task, we must ensure that the lines do not meet at right angles.

            How are parallel lines constructed using a ruler and set square or a compass and ruler? Recalling previous knowledge, construct such a figure.

            Observe quadrilateral ABCD carefully. Its opposite sides are parallel, but it is not a rectangle.

            Therefore, there exists a large group of quadrilaterals in which opposite sides are parallel. Such quadrilaterals are called parallelograms.

            Is a rectangle a parallelogram?

            We know that in a rectangle, opposite sides are parallel. Hence, it satisfies the definition of a parallelogram. Therefore, it certainly is a parallelogram. Specifically, a rectangle is a special type of parallelogram in which each angle measures 90°. Let's understand this relationship using a Venn diagram.

            Let's construct the following figures to understand the relationship between the angles and sides of a parallelogram.

            Construct a parallelogram in which adjacent sides are 4 cm and 5 cm, and the angle between them is 30°.

            Step 1 — Draw line segments AB = 4 cm and AD = 5 cm such that the angle between them is 30°.
            Step 2 — Draw a line through point D parallel to AB, and draw a line through point B parallel to AD. Mark the point where the two lines intersect each other as C.

            What are the measures of the remaining angles of the parallelogram? What are the lengths of the other sides? Can you find out through reasoning and experiment?`,
          images: [
            "Venn diagram of parallelograms and rectangles",
            "Construction steps of parallelogram",
          ],
        },
        {
          title:
            "Deduction 6 — What can we say about the angles of a parallelogram?",
          content: `In parallelogram ABCD, AB || CD and AD is their transversal.
            ∠A + ∠D = 180° (sum of interior angles on the same side of a transversal).

            Therefore, ∠D = 180 – ∠A = 180 – 30 = 150°.

            Similarly, AD || BC and AB and CD are its transversals.
            Therefore, ∠A + ∠B = 180°.
            Hence, ∠C + ∠D = 180°.

            Using these equations, we get ∠B = 150° and ∠C = 30°.

            In this parallelogram, we observed that both pairs of opposite angles are equal, and the sum of adjacent angles is 180°.

            Thus,
            ∠A + ∠B = 180°, ∠A + ∠D = 180°, ∠C + ∠D = 180°, and ∠B + ∠C = 180°.
            And ∠A = ∠C and ∠B = ∠D.

            Since adjacent angles are interior angles on the same side of a transversal for a pair of parallel lines, their sum must be 180°.

            ? What do you think about opposite angles? Will they be equal in all parallelograms? If yes, how can we be sure?

            Let's assume one of these angles is x. What will be the measure of the remaining angles?

            Since ∠P + ∠R = 180°, ∠R = 180 – ∠P = 180 – x.
            Similarly, since ∠A + ∠R = 180°, ∠A = 180 – ∠R = 180 – (180 – x) = 180 – 180 + x = x.

            Hence, ∠P = ∠A = x.
            Similarly, we can find that ∠R = ∠E = 180 – x.

            Thus, this shows that opposite angles of a parallelogram are always equal.`,
          images: ["Parallelogram PARE"],
        },
        {
          title:
            "Deduction 7 — What can we say about the sides of a parallelogram?",
          content: `Observing a parallelogram, it seems that opposite sides are equal. Can we use congruence again to show this? Which two triangles should we consider?

            In ΔABD and ΔCDB, angles marked with one arc are equal because they are opposite angles of a parallelogram.
            Since AD || BC and BD is a transversal, angles marked with two arcs are equal because they are alternate interior angles.

            Hence, by the AAS rule, the triangles are congruent, i.e., ΔABD ≅ ΔCDB.
            Therefore, AD = CB and AB = CD.

            Thus, opposite sides of a parallelogram are equal.

            Is it wrong to write ΔABD ≅ ΔCBD? If yes, why?

            From previous deductions, we can find the remaining sides and angles of the parallelogram.

            Let's list the properties of a parallelogram.

            Property 1 — Opposite sides of a parallelogram are equal.
            Property 2 — Opposite sides of a parallelogram are parallel.
            Property 3 — In a parallelogram, opposite angles are equal, and the sum of adjacent angles is 180°.

            ? Are the diagonals of a parallelogram always equal? Check this with the parallelogram you constructed.

            We see that the diagonals of a parallelogram are not necessarily equal.

            ? Do the diagonals bisect each other? Do they intersect at their midpoints? Provide reasoning or experiment to find this out.`,
          images: ["Parallelogram ABCD with diagonal BD"],
        },
        {
          title:
            "Deduction 8 — What is the intersection point of the two diagonals of a parallelogram?",
          content: `Just as we did for a rectangle, we can check whether the two diagonals of parallelogram EASY bisect each other by examining the congruence of ΔAOE and ΔYOS.

            AE = YS (opposite sides of a parallelogram).
            Angles marked with one arc and two arcs are equal to each other because they are alternate interior angles for parallel lines.

            Thus, by the ASA rule, the triangles are congruent, hence ΔAOE ≅ ΔYOS.

            Therefore, OA = OY and OE = OS, as they are corresponding sides of congruent triangles. Thus, O is the midpoint of both diagonals.

            ? Would it be wrong to write ΔAOE ≅ ΔSOY? If yes, why?

            Property 4 — The diagonals of a parallelogram bisect each other.

            ? Do the diagonals of a parallelogram intersect at a specific angle?`,
          images: ["Parallelogram EASY with diagonals intersecting at O"],
        },
        {
          title: "4.4 Quadrilaterals with Sides of Equal Length",
          content: `? Is a square the only quadrilateral with all sides equal in length? Let's find the answer to this question through construction.

            Draw two sides AD and AB of equal length that are not perpendicular to each other.

            ? Can we complete the quadrilateral from the given figure so that all its sides are of equal length?

            Mark a point C such that its distance from B and D is equal to AB (or AD). To do this, measure AB using a compass. With this length as radius, draw arcs from points B and D.

            Now we have a quadrilateral with all sides equal in length, and one of its angles is 50°. Note that we can take any angle less than 180° (instead of 50°) to construct a quadrilateral.

            A quadrilateral with all sides equal in length is called a rhombus.

            Find the measures of the other angles of rhombus ABCD we constructed. Provide reasoning or experiment to find this.

            Deduction 9 — What can we say about the angles of a rhombus?
            Consider rhombus GAME.

            In ΔGAE, since GE = GA, therefore a = d.
            Similarly, in ΔMAE, since ME = MA, therefore b = c.

            ? How can we show that ΔGAE ≅ ΔMAE?
            Hence, a = b, c = d, and ∠G = ∠M (as they are corresponding angles of congruent triangles).

            Thus, we get a = b = c = d.

            These facts hold true for every rhombus. Let's apply these facts to rhombus ABCD we constructed earlier. Let the four equal angles formed by the diagonal be of measure a (as shown in the figure).

            In ΔADB,
            a + a + 50 = 180°.
            Hence, a = 65°.

            Thus, the angles of rhombus ABCD measure 50°, 130°, 50°, and 130°.

            Hence, in a rhombus, opposite angles are equal to each other.

            Interestingly, we can also find the other angles of rhombus ABCD using another method. We saw that in a general rhombus GAME, the four angles formed by a diagonal are all equal to each other.

            Consider lines EM, GA, and their transversal AE. Since alternate angles are equal, EM || GA.
            Similarly, consider lines GE, AM, and their transversal AE. Since alternate angles are equal, GE || AM.

            We know that opposite sides are parallel, so GAME is also a parallelogram. Hence, every rhombus is a parallelogram, and all properties of a parallelogram apply to a rhombus as well. Therefore, the sum of adjacent angles in a rhombus is 180°, and opposite angles are equal (verify by applying the facts from Deduction 6 to a rhombus). Hence, in rhombus ABCD,

            Thus, a rhombus is a parallelogram, and a rectangle is also a parallelogram. How can this be shown using a Venn diagram?

            Where would the set of squares be in this diagram?
            We know that a square is also a rectangle. Since the opposite sides of a square are parallel.

            Let's list the properties of a rhombus.

            Property 1 — All sides of a rhombus are equal to each other.
            Property 2 — Opposite sides of a rhombus are parallel to each other.
            Property 3 — In a rhombus, the sum of adjacent angles is 180°, and opposite angles are equal.

            Are the diagonals of a rhombus equal in length?
            Property 4 — The diagonals of a rhombus bisect each other.
            Property 5 — The diagonals of a rhombus bisect its angles.

            ? Do the diagonals of a rhombus intersect at a specific angle? Provide reasoning or experiment to find this out.

            Deduction 10 — What can we say about the angles formed at the intersection point of the diagonals of a rhombus?
            ? In rhombus GAME, why do we get ΔGEO ≅ ΔMEO?
            Hence, ∠GOE = ∠MOE (corresponding angles of congruent triangles). Since their sum is 180°, each angle must measure 90°.

            Property 6 — The diagonals of a rhombus intersect each other at 90°.`,
          images: [
            "Construction steps of rhombus",
            "Rhombus GAME with diagonals",
            "Rhombus ABCD with diagonal",
            "Venn diagram of rhombus, rectangle, parallelogram",
            "Rhombus GAME with diagonals intersecting at O",
          ],
        },
        {
          title: "Let's Find Out",
          content: `1. Find the measures of the remaining angles of the following quadrilaterals.

            2. Construct a parallelogram based on the properties of its diagonals, where the lengths of the diagonals are 7 cm and 5 cm, and they intersect at an angle of 140°.

            3. Construct a rhombus using the properties of its diagonals, where the lengths of the diagonals are 4 cm and 5 cm.`,
        },
        {
          title: "4.5 Playing with Quadrilaterals",
          subSections: [
            {
              title: "Geoboard Activity",
              content: `Take a geoboard and some rubber bands. If you don't have these, you can use the dot grid paper given at the end of the book for this activity.

                Arrange two rubber bands of equal length perpendicular to each other to form the diagonals. Then join the ends.

                What type of quadrilateral did you get? Verify your answer. Extend one of the diagonals by 2 cm on both sides.

                What type of quadrilateral will you get now? Justify your answer.`,
              images: ["Geoboard activity images"],
            },
            {
              title: "Joining Triangles",
              content: `1. Take two cardboard cutouts of an equilateral triangle with side 8 cm.

                ? Can you join the above cardboard cutouts to form a quadrilateral?

                ? What type of quadrilateral is this? Verify your answer.

                2. Take two cardboard cutouts of an isosceles triangle with sides 8 cm and 6 cm.

                ? What are the different ways to join the above to form a quadrilateral? Joining them in these ways gives —

                ? What type of quadrilaterals are the two quadrilaterals shown above? Verify your answer.

                3. Take two cardboard cutouts of a scalene triangle with sides 6 cm, 9 cm, and 12 cm.

                ? What are the different ways to join them to form a quadrilateral?

                ? Can you identify the different quadrilaterals obtained by joining the triangles? After identifying the quadrilateral, verify your answer.`,
              images: [
                "Two equilateral triangles joined",
                "Two isosceles triangles joined in two ways",
                "Two scalene triangles joined",
              ],
            },
          ],
        },
        {
          title: "4.6 Kite and Trapezium",
          subSections: [
            {
              title: "Kite",
              content: `One way to join two triangles with sides 6 cm, 9 cm, and 12 cm is —

                This quadrilateral resembles a kite. Note that its adjacent sides are of equal length.

                Kite — A kite is a quadrilateral that can be named ABCD, where AB = BC and CD = DA.

                Property 1 — In kite ABCD, diagonal BD —
                (i) bisects ∠ABC and ∠ADC.
                (ii) bisects diagonal AC, i.e., AO = OC. Also, it is perpendicular to AC.
                Hint — Does ΔAOB ≅ ΔCOB?`,
              images: ["Kite ABCD"],
            },
            {
              title: "Trapezium",
              content: `A parallelogram is a quadrilateral in which opposite sides are parallel. If we relax this condition, we get a new type of quadrilateral. It is called a trapezium.

                Trapezium — A trapezium is a quadrilateral in which at least one pair of opposite sides is parallel.

                Construct a trapezium. Also, measure its base angles (marked in the figure).

                Can you find the remaining angles without measuring them? Since PQ || SR, we know —

                Property 1 — ∠S + ∠P = 180° and ∠R + ∠Q = 180°.

                Using these facts, the remaining angles can be easily found. After finding them, verify your answer.

                When the non-parallel sides of a trapezium are equal in length, it is called an isosceles trapezium.

                How do we construct an isosceles trapezium?

                Construct an isosceles trapezium UVWX such that UV || XW. Measure ∠U.

                Mark points X and W such that UX = VW.

                Can you find the values of the remaining angles without measuring?

                Does it appear that the base angles ∠U and ∠V on the same side of the parallel sides are also equal? Can we find congruent triangles here?

                Consider line segments XY and WZ perpendicular to UV.

                ? What type of quadrilateral is XWZY?
                Since XW || UV,
                a = 180° – ∠XYZ = 90° and b = 180° – ∠WZY = 90° (sum of interior angles on the same side of a transversal is 180°).
                Hence, XWZY is a rectangle.

                ? Now, it can be shown that ΔUXY ≅ ΔVWZ (how?).
                Hence, ∠U = ∠V.

                Using this fact, the remaining angles of the isosceles trapezium can be found. Verify your answer by measuring the angles.

                Property 2 — In an isosceles trapezium, the base angles adjacent to each of the parallel sides are equal.`,
              images: ["Trapezium PQRS", "Isosceles trapezium UVWX"],
            },
          ],
        },
        {
          title: "Let's Find Out",
          content: `1. Find all angles and sides of the quadrilateral obtained by joining two equilateral triangles of side 4 cm.

            2. Construct a kite whose diagonals are 6 cm and 8 cm long.

            3. Find the measures of the remaining angles of the following trapezium.

            4. Draw a Venn diagram showing the sets of parallelograms, kites, trapeziums, rectangles, and squares. Then answer the following questions —
            (i) Which quadrilateral is both a kite and a parallelogram?
            (ii) Can there be a quadrilateral that is both a kite and a rectangle?
            (iii) Is every kite a rhombus? If not, what is the relationship between these two types of quadrilaterals?

            5. If PAIR and RODS are two rectangles, find ∠IOD.

            6. Construct a square with a diagonal of 6 cm without using a protractor.

            7. CASE is a square. Points U, V, W, and X are the midpoints of the sides of the square. What type of quadrilateral is UVWX? Determine this using geometric reasoning, construction, and measurement. Find methods to construct another square inside a square. Note that the vertices of the inner square lie on the sides of the outer square, as shown in figure (b).

            8. If a quadrilateral has all four sides equal and one angle is 90°, will it be a square? Find the answer using geometric reasoning, construction, and measurement.

            9. What type of quadrilateral has opposite sides equal? Verify your answer.
            Hint — Draw a diagonal and check for congruent triangles.

            10. Will the sum of all angles of the quadrilateral in the figure be 360°? Find your answer using geometric reasoning as well as by constructing this figure and using measurement.

            11. State whether the following statements are true or false. Verify your answer.
            (i) A quadrilateral whose diagonals are equal in length and bisect each other is definitely a square.
            (ii) A quadrilateral with three right angles is definitely a rectangle.
            (iii) A quadrilateral whose diagonals bisect each other is definitely a parallelogram.
            (iv) A quadrilateral whose diagonals are perpendicular to each other is definitely a rhombus.
            (v) A quadrilateral with opposite angles equal is definitely a parallelogram.
            (vi) A quadrilateral is a rectangle if all its angles are equal.
            (vii) Isosceles trapeziums are parallelograms.`,
        },
      ],
      summary: [
        "A rectangle is a quadrilateral in which each angle measures 90°. Properties of a rectangle:",
        "• Opposite sides of a rectangle are equal.",
        "• Opposite sides of a rectangle are parallel to each other.",
        "• The diagonals of a rectangle are equal in length and bisect each other.",
        "A square is a quadrilateral in which each angle measures 90° and all sides are equal in length. Properties of a square:",
        "• Opposite sides of a square are parallel to each other.",
        "• The diagonals of a square are equal in length and bisect each other at 90°.",
        "• The diagonals of a square bisect the angles of the square.",
        "A parallelogram is a quadrilateral whose opposite sides are parallel. Properties of a parallelogram:",
        "• Opposite sides of a parallelogram are equal.",
        "• In a parallelogram, the sum of adjacent angles is 180°, and opposite angles are equal.",
        "• The diagonals of a parallelogram bisect each other.",
        "A rhombus is a quadrilateral whose all sides are equal in length. Properties of a rhombus:",
        "• Opposite sides of a rhombus are parallel to each other.",
        "• In a rhombus, the sum of adjacent angles is 180°, and opposite angles are equal.",
        "• The diagonals of a rhombus bisect each other at right angles.",
        "• The diagonals of a rhombus bisect its angles.",
        "A kite is a quadrilateral that has two pairs of adjacent sides of equal length that are not overlapping.",
        "A trapezium is a quadrilateral in which at least one pair of opposite sides is parallel.",
        "The sum of the measures of the angles of a quadrilateral is 360°.",
      ],
    },
    // chapter 5 Is it a Multiple?
    {
      id: 5,
      title: "Is it a Multiple?",
      content: {
        introduction:
          "In this chapter, we will explore the properties of multiples and divisibility. We will investigate sums of consecutive numbers, parity of expressions, and develop shortcut methods (divisibility rules) for checking divisibility by numbers like 3, 9, and 11. We will also learn about digital roots and solve cryptarithmetic puzzles.",
        sections: [
          {
            title: "5.1 Is it a Multiple?",
            content: `Sum of Consecutive Numbers

            Anshu is exploring sums of consecutive numbers. He has written them as follows —

            Now he is surprised —
            • "Can I write every natural number as a sum of consecutive numbers?"
            • "Which numbers can I write as a sum of consecutive numbers in more than one way?"
            • "Oh! I understand that all odd numbers can be written as the sum of two consecutive numbers. Can we write all even numbers as a sum of consecutive numbers?"
            • "Can I write 0 as a sum of consecutive numbers? Perhaps I should use negative numbers."

            ? Explore these questions and other questions that come to your mind, and discuss all the questions in your class.

            ? Take any 4 consecutive numbers, for example, 3, 4, 5, and 6. Place '+' and '–' signs between the numbers. How many different possibilities are there for writing the numbers this way? Write them all.`,
            images: [
              "Sums of consecutive numbers: 3=1+2, 5=2+3, 6=1+2+3, 7=3+4, 9=4+5=2+3+4, 10=1+2+3+4",
            ],
          },
          {
            title: "Parity of Expressions",
            content: `Now take any 4 numbers, place '+' and '–' signs in 8 different ways between them, and find the value of the resulting expression. What observations do you make about their parity? Repeat this process with other groups of 4 numbers.

            Is there a method that can explain why this happens?

            Hint — Consider the rules for the parity of the sum or difference of two numbers.

            Explanation 1 — Let's consider any one of the 8 expressions formed from four numbers a, b, c, and d. When the sign of any one term is changed, the value of the expression always increases or decreases by an even number. Let's see why this happens.

            Consider an expression — a + b – c – d. If we change +b to –b, we get a – b – c – d. What is the difference between the numbers? The difference is —
            (a + b – c – d) – (a – b – c – d)
            = a + b – c – d – a + b + c + d (note how the signs changed when we opened the second bracket)
            = 2b (which is an even number).

            If the difference between two numbers is even, can their parity be different? No, therefore, either both numbers are even or both are odd.

            Now let's see what happens when we change a negative sign to a positive sign.

            In the expression a + b – c – d, change any one negative sign to a positive sign and find the difference between the two numbers.

            What result do you get from your observation?

            Starting from any expression and changing one or more '+' and '–' signs, we can obtain 7 expressions. Thus, the parity of all expressions is the same.

            Explanation 2 — We know that —
            odd ± odd = even
            even ± even = even
            odd ± even = odd

            We have understood that the parity of a + b and a – b remains the same regardless of the parity of a and b. In short, the parity of a ± b is always the same. By this reasoning, the parity of a ± b + c and a ± b – c is the same. Continuing this way, we can say that all expressions of the form a ± b ± c ± d have the same parity.

            Explanation 3 — This can also be explained using the positive and negative token model, which you studied in the chapter on integers. Try to consider how this is possible.

            There are different ways to choose four numbers a, b, c, d and combine them using '+' and '–' signs. Mathematical reasoning allows us to prove that the parity of all a ± b ± c ± d combinations is always the same without solving each combination individually.

            In mathematics, many problems can be considered and solved in different ways. The method you understood here might be your favorite, but it can be interesting and enlightening to know what others think about it. Therefore, two tasks are suggested for this — 'Share' and 'Listen'.

            Is the phenomenon of all expressions having the same parity limited to taking 4 numbers? What do you think about this?

            'What if ... ?', 'Will this always happen?' – Being surprised, asking questions, and making conjectures is as much a part of mathematics as solving a problem.`,
            images: [],
          },
          {
            title: "Decomposing Even Numbers",
            content: `We know how to identify even numbers. Without calculating, find out which of the following arithmetic expressions are even.

            Using our understanding of how parity behaves under different operations, find out which of the following algebraic expressions yield an even number for any integer value of the literal numbers (variables).

            For any integer values of m and q, the value of the expression 4m + 2q will always be an even number. We can verify this in two different ways —

            • We know that for any integers m and q, 4m and 2q will be even. Therefore, their sum will also be even.

            • The expression 4m + 2q is equivalent to 2(2m + q). Here, the expression 2(2m + q) means twice (2m + q). In other words, this expression has a factor of 2. Hence, for any integers m and q, the value of this expression will always be even.

            For example, if m = 4 and q = –9, then the value of the expression 4m + 2q is 4 × 4 + 2 × (–9) = –2, which is an even number.

            In the expression x² + 2, x² will be even if x is even, and x² will be odd if x is odd. Therefore, the value of the expression x² + 2 will not always be even. One example where the value is even and one where it is not — (i) if x = 6, then x² + 2 = 38; (ii) if x = 3, then x² + 2 = 11.

            ? Similarly, find and explain which other expressions always yield even numbers. For each expression, give suitable examples where the value is even and where it is not.

            ? Write some algebraic expressions whose value is always an even number.`,
            images: [],
          },
          {
            title: "Pairing for Groups of Four",
            content: `? Take a pair of even numbers and add them. Is this sum divisible by 4? Try this for different pairs of even numbers. When is the sum a multiple of 4, and when is it not? Is there a general rule or pattern?

            Based on the remainder obtained when dividing by 4, even numbers can be of two types.

            Even numbers that are multiples of 4 leave a remainder of 0 when divided by 4.
            Even numbers that are not multiples of 4 leave a remainder of 2 when divided by 4.

            When is the sum of two even numbers a multiple of 4?

            This problem is similar to the question of finding when the sum of two numbers results in an even number. Can you see it?

            Here are three cases to check —`,
            tableData: {
              headers: [
                "Explanation with Algebra and Visualization",
                "Example",
              ],
              rows: [
                [
                  "Adding two even numbers that are multiples of 4 always gives a multiple of 4.<br/>4p and 4q<br/>4p + 4q = 4(p + q)",
                  "4, 12, 16, 24, 36<br/>12 + 16 = 4(3 + 4) = 28<br/>16 + 28 = 4(4 + 7) = 44",
                ],
                [
                  "Adding two even numbers that are not multiples of 4 always gives a multiple of 4, because adding their remainders, which are 2, gives 4.<br/>(4p + 2) and (4q + 2)<br/>(4p + 2) + (4q + 2) = 4p + 4q + 4 = 4(p + q + 1)",
                  "2, 6, 10, 18, 22, 42<br/>2 + 6 = 8<br/>6 + 10 = 16<br/>22 + 6 = 28",
                ],
              ],
            },
            content: `What happens when we add a multiple of 4 and an even number that is not a multiple of 4? Is this similar to the parity of the sum of an even and an odd number?

            ? Look at the following expressions and visualizations, and write their corresponding explanation and examples.`,
            images: ["Visualization for 4p + (4q+2) = 4(p+q) + 2"],
          },
          {
            title: "Always, Sometimes, or Never",
            content: `We verify various statements about factors and multiples and determine whether the statement is 'always true', 'sometimes true', or 'never true'.

            We know that the sum of any two multiples of 2 is also a multiple of 2.

            1. If 8 divides two numbers separately, then it will definitely divide their sum as well.`,
            tableData: {
              headers: [
                "Explanation with Algebra and Visualization",
                "Example",
              ],
              rows: [
                [
                  "8 is a factor of two numbers; in other words, both numbers are multiples of 8.<br/>8a and 8b",
                  "8 and 16<br/>16 and 56<br/>80 and 120",
                ],
                [
                  "Since multiples of 8 are obtained by repeatedly adding 8, the sum of two multiples of 8 will also be a multiple of 8.<br/>8a + 8b = 8(a + b)",
                  "8 + 16 = 8(1 + 2) = 24<br/>16 + 56 = 72<br/>80 + 120 = 200",
                ],
              ],
            },
            content: `Statement 1 is always true. Determine if this holds true for subtraction.

            In general, if a divides M and a divides N, then a will divide M + N and a will divide M – N. In other words, if M and N are multiples of a, then M + N and M – N are also multiples of a.

            2. If a number is divisible by 8, then 8 will divide the two numbers (separately) whose sum is that number.`,
            tableData2: {
              headers: [
                "Explanation with Algebra and Visualization",
                "Example",
              ],
              rows: [
                [
                  "A number divisible by 8 is a multiple of 8.<br/>8m",
                  "8, 16, 56, 72",
                ],
                [
                  "A number divisible by 8 can be expressed as the sum of two multiples of 8, or as the sum of two numbers that are not multiples of 8.<br/>8m = 8a + 8b<br/>8m = p + q (p and q are not multiples of 8)",
                  "72 = 48 + 24 (8×9 = 8×6 + 8×3)<br/>72 = 50 + 22",
                ],
              ],
            },
            content: `Therefore, Statement 2 is sometimes true.

            3. If a number is divisible by 7, then all its multiples will be divisible by 7.`,
            tableData3: {
              headers: [
                "Explanation with Algebra and Visualization",
                "Example",
              ],
              rows: [
                [
                  "Numbers divisible by 7 have 7 as a factor.<br/>7j",
                  "14 = 7 × 2 (j = 2)<br/>42 = 7 × 6 (j = 6)<br/>98 = 7 × 14 (j = 14)",
                ],
                [
                  "There are m rows of j columns in total. Hence, this is also a multiple of 7.<br/>(7j) × m",
                  "Some multiples of 14 —<br/>28 = (7 × 2) × 2<br/>70 = (7 × 2) × 5<br/>154 = (7 × 2) × 11",
                ],
              ],
            },
            content: `The number 7jm or (7 × j × m) has 7 as a factor. We can see that Statement 3 is always true.

            In general, if A is divisible by k, then all multiples of A will be divisible by k.

            4. If a number is divisible by 12, then it will also be divisible by all factors of 12.`,
            tableData4: {
              headers: [
                "Explanation with Algebra and Visualization",
                "Example",
              ],
              rows: [
                [
                  "A number divisible by 12 is a multiple of 12.<br/>12m",
                  "12, 24, 36, 48, 108, 132",
                ],
                [
                  "Multiples of 12 will include factors of 12 in their factorization.<br/>12m = 2 × 6 × m = 3 × 4 × m",
                  "12<br/>12<br/>12<br/>12<br/>12<br/>12<br/>12<br/>12",
                ],
              ],
            },
            content: `In general, if A is divisible by k, then A will also be divisible by all factors of k. Hence, Statement 4 is always true.

            5. If a number is divisible by 7, then it will be divisible by any multiple of 7.`,
            tableData5: {
              headers: [
                "Explanation with Algebra and Visualization",
                "Example",
              ],
              rows: [
                [
                  "Numbers divisible by 7 are multiples of 7.<br/>7k",
                  "42 (7 × 6) is divisible by 7, but it is not divisible by 28 (7 × 4). 42 (7 × 6) is divisible by 7 and is also divisible by 14 (7 × 2).",
                ],
                [
                  "A multiple of 7, 7k, will be divisible by 7m if and only if m is a factor of k.<br/>If k = ym, then 7k ÷ 7m = 7ym ÷ 7m = y",
                  "42 (7 × 6) is divisible by 7, but it is not divisible by 28 (7 × 4). 42 (7 × 6) is divisible by 7 and is also divisible by 14 (7 × 2).",
                ],
              ],
            },
            content: `We can see that this statement is only sometimes true.`,
            images: [],
          },
          {
            title: "Let's Find Out",
            content: `Check each of the following statements and determine whether it is 'always true', 'sometimes true', or 'never true'.

            6. If a number is divisible by both 9 and 4, then it will definitely be divisible by 36.

            7. If a number is divisible by both 6 and 4, then it will definitely be divisible by 24.

            In general, if A is divisible by k and A is also divisible by m, then A will be divisible by the least common multiple of k and m. This is because A is a multiple of k and also a multiple of m. Therefore, the prime factorization of A must include the prime factors of the least common multiple of k and m.

            8. When you add an odd number to an even number, you get a multiple of 6.

            We know that all multiples of 6 are even numbers. The sum of an odd number and an even number will be an odd number. Hence, this statement will never be true. We can also explain this algebraically. Suppose —

            Where 2n is an even number, 2m + 1 is an odd number, and 6j is a multiple of 6. Then —

            2n + (2m + 1) = 6j ⇒ 2(n + m) + 1 = 6j ⇒ 2(n + m) = 6j – 1

            This means 2(n + m), which is an even number, should equal 6j – 1, which is an odd number. This will never be true.`,
            images: [],
          },
          {
            title: "What Remains?",
            content: `Find a number that leaves a remainder of 3 when divided by 5. Write some other such numbers.

            ? Which algebraic expression encompasses all such numbers?
            (i) 3k + 5 (ii) 3k – 5 (iii) 3k/5 (iv) 5k + 3 (v) 5k – 2 (vi) 5k – 3

            Numbers that leave a remainder of 0 when divided by 5 are multiples of 5. We need numbers that leave a remainder of 3 when divided by 5. These numbers are 3 more than the multiples of 5. Multiples of 5 are of the form 5k. Therefore, numbers that leave a remainder of 3 when divided by 5 will be of the form 5k + 3.

            ? Let's consider another expression, 5k – 2, and look at its values for different values of k. Numbers that leave a remainder of 3 when divided by 5 can also be seen as 2 less than multiples of 5, e.g., 5k – 2 = 3, 8, 13, 18, 23 where k ≥ 1.

            ? Are there other expressions that generate numbers that are 3 more than a multiple of 5?

            ? Let's find out.

            1. The sum of four consecutive numbers is 34. What are these numbers?

            2. Suppose p is the largest among five consecutive numbers. Express the other four numbers in terms of p.

            3. For each statement given below, determine whether it is 'always true', 'sometimes true', or 'never true'. Explain your answer. Give examples that support your reasoning and counterexamples where appropriate. Confirm your reasoning using algebra.
            (i) The sum of two even numbers is a multiple of 3.
            (ii) If a number is not divisible by 18, then it will not be divisible by 9 either.
            (iii) If two numbers are not divisible by 6, then their sum will not be divisible by 6.
            (iv) The sum of a multiple of 6 and a multiple of 9 is a multiple of 3.
            (v) The sum of a multiple of 6 and a multiple of 3 is a multiple of 9.

            4. Find some numbers that leave a remainder of 2 when divided by 3 and also leave a remainder of 2 when divided by 4. Write an algebraic expression that represents all such numbers.

            5. "I have some pebbles, not too many,
            When I divide them into groups of 3, one is left here.
            If I try to pair them up, I just can't,
            Because one stubborn pebble is left behind.
            When I divide into groups of 5, still one is left here,
            But when I divide into groups of 7, it's perfectly fine.
            Keeping more than 100 is not easy for me,
            You'll be called clever if you guess the number of pebbles, you see."

            6. Tathagat has written many numbers that leave a remainder of 2 when divided by 6. He confirms, "If you add any three such numbers, the sum will always be a multiple of 6." Is Tathagat's confirmation correct?

            7. When divided by 7, the number 661 leaves a remainder of 3, and the number 4779 leaves a remainder of 5. Without calculating, can you tell what the remainder will be when the following expressions are divided by 7? Show the solution algebraically and visually.
            (i) 4779 + 661 (ii) 4779 – 661

            8. Find the number that leaves a remainder of 2 when divided by 3, a remainder of 3 when divided by 4, and a remainder of 4 when divided by 5. What is the smallest such number? Can you tell why this number is the smallest?`,
            images: [],
          },
          {
            title: "5.2 Quick Tests for Divisibility",
            content: `Previously, you learned convenient methods to check whether a number given in the Indian numeral system is divisible by 2, 4, 5, 8, and 10. Let's revisit them.

            Divisibility by 10, 5, and 2 — If the units digit of a number is 0, then it is divisible by 10. Let's understand why this happens through algebra.

            In the Indian system, we can write a general form of a number using a set of literal numbers. For example, a 5-digit number can be represented as edcba, which represents e × 10000 + d × 1000 + c × 100 + b × 10 + a. The literal numbers e, d, c, b, and a represent each digit of the 5-digit number. Any number can be written in general form as ... d c b a, where the literal numbers a, b, c, and d represent the units, tens, hundreds, and thousands digits respectively, and so on. As a sum of place values, this number is —

            (For example, in the number 4075, d = 4, c = 0, b = 7, a = 5)

            We know that every place value except the units place is a multiple of 10. Therefore, 10b, 100c, … are all multiples of 10. We can say that a number is divisible by 10 only if the units digit a is 0.

            Based on the above, use algebra to explain how the shortcut methods for checking divisibility by 5, 2, 4, and 8 work.

            Now, let's understand the shortcut methods for checking divisibility by some other numbers and how they work.

            Shortcut Method for Divisibility by 9
            Without actually performing the calculation, can you tell which of the following numbers are divisible by 9 — 999, 909, 900, 90, 990?
            All these numbers are divisible by 9.

            ? Can we say that any number formed using only the digits '0' and '9' in any order will always be divisible by 9?

            Yes, if each digit is either 0 or 9, then in the expanded form, each term will be 9 × (place value) or 0 × (place value). This means that each term will be a multiple of 9. For example —

            99009 = 9 × 10000 + 9 × 1000 + 0 × 100 + 0 × 10 + 9 × 1

            Note that this shortcut method cannot identify all multiples of 9. We cannot identify multiples of 9 just by looking at the units digit, as we can for multiples of 2, 5, and 10. Both 99 and 109 have a units digit of 9, but 99 is divisible by 9 while 109 is not.

            ? Is 10 divisible by 9? If not, what is the remainder?
            Check the divisibility of other multiples of 10 (10, 20, 30, ...) by 9. You will see that for any multiple of 10, the remainder is equal to the number of tens.

            ? Similarly, when multiples of 100 (100, 200, 300, …) are divided by 9, observe the remainders. What did you observe?
            For any multiple of 100, the remainder is equal to the number of hundreds.

            ? Use this observation to find the remainder when 427 is divided by 9.

            We see that in 427, the number of hundreds is 4. Thus, the corresponding remainder (when divided by 9) will be 4. In 427, the number of tens is 2, so the corresponding remainder will be 2. 7 is also left. Adding all these remainders, we get 4 + 2 + 7 = 13. We can form one more group of 9 with 13. After that, the remainder is 4. Hence, 427 ÷ 9 leaves a remainder of 4.

            ? Will this happen for larger numbers?

            You can see that this holds true for any place value.

            1 = 0 + 1
            10 = 9 + 1
            100 = 99 + 1
            1000 = 999 + 1
            10000 = 9999 + 1, and so on.

            Thus, each digit represents the remainder when the corresponding place value is divided by 9.

            For example, to find the remainder when 7309 is divided by 9, we can simply sum all its digits: 7 + 3 + 0 + 9 = 19. This can be seen as follows —

            This means that the number 7309 is 19 more than some multiple of 9. Now, the digits 1 and 9 can be added further to get 1 + 9 = 10. Now we can say that 7309 is 10 more than a multiple of 9. Repeating this step for the number 10, we get a remainder of 1 + 0 = 1. Therefore, 7309 leaves a remainder of 1 when divided by 9.

            A number is divisible by 9 only if the sum of its digits is divisible by 9. Also, we keep adding the digits of a number until we get a single-digit sum. This resulting single digit represents the remainder when the number is divided by 9.

            Look at each of the following statements. Which statements are correct and why?
            (i) If a number is divisible by 9, then the sum of its digits will be divisible by 9.
            (ii) If the sum of the digits of a number is divisible by 9, then the number will be divisible by 9.
            (iii) If a number is not divisible by 9, then the sum of its digits will not be divisible by 9.
            (iv) If the sum of the digits of a number is not divisible by 9, then the number will not be divisible by 9.

            Learning mathematics is not just about knowing some shortcut methods and following procedures, but understanding 'why' a method works.`,
            images: [],
          },
          {
            title: "Let's Find Out",
            content: `1. Without performing division, find out whether the given numbers are divisible by 9.
            (i) 123 (ii) 405 (iii) 8888 (iv) 93547 (v) 358095

            2. Find the smallest multiple of 9 that has no odd digits.

            3. Find the multiple of 9 that is closest to the number 6000.

            4. How many multiples of 9 are there between 4300 and 4400?`,
          },
          {
            title: "Shortcut Method for Divisibility by 3",
            content: `We know that all multiples of 9 are also multiples of 3. That is, if a number is divisible by 9, it will also be divisible by 3. Additionally, there are other multiples of 3 that are not multiples of 9, such as 15, 33, and 87.

            The shortcut method for divisibility by 3 is similar to the method for divisibility by 9. A number is divisible by 3 if the sum of its digits is divisible by 3. Find the remainders when powers of 10 are divided by 3. Explain how this method works.`,
            images: [],
          },
          {
            title: "Shortcut Method for Divisibility by 11",
            content: `Interestingly, the shortcut method for divisibility by 11 is also based on checking remainders with place values. Let's see how.`,
            tableData: {
              headers: ["Place Value", "Relation with 11"],
              rows: [
                [
                  "Units (1)",
                  "11 × 0 = 0<br/>1 = 11 × 0 + 1 → 1 is one more than a multiple of 11.",
                ],
                [
                  "Tens (10)",
                  "11 × 1 = 11<br/>10 = 11 × 1 – 1 → 10 is one less than a multiple of 11.",
                ],
                [
                  "Hundreds (100)",
                  "11 × 9 = 99<br/>100 = 11 × 9 + 1 → 100 is one more than a multiple of 11.",
                ],
                [
                  "Thousands (1000)",
                  "11 × 91 = 1001<br/>1000 = 11 × 91 – 1 → 1000 is one less than a multiple of 11.",
                ],
              ],
            },
            content: `This alternating pattern of being one more and one less than a multiple of 11 continues for higher place values.

            Since 400 has 4 hundreds, 400 is 4 more than a multiple of 11 (396 + 4). Since 60 has 6 tens, 60 is 6 less than a multiple of 11 (66 – 6). Since 2 has 2 units, 2 is 2 more than a multiple of 11, i.e., 2 = (0 + 2).

            Using these observations, can you tell whether the number 462 is divisible by 11?

            What could be a general method or shortcut method for checking divisibility by 11?`,
            tableData2: {
              headers: ["Step", "Purpose", "Example for number 320185"],
              rows: [
                [
                  "1. Sum the digits of place values that are 'one more' (than a multiple of 11), i.e., place values corresponding to 1, 100, 10,000, etc.",
                  "To find how much excess we have from a multiple of 11 for these place values.",
                  "Excess total: 2 + 1 + 5 = 8<br/>Deficit total: 3 + 0 + 8 = 11",
                ],
                [
                  "2. Sum the digits of place values that are 'one less' (than a multiple of 11), i.e., place values corresponding to 10, 1000, 100000, etc.",
                  "To find how much deficit we have from a multiple of 11 for these place values.",
                  "Excess total: 3 + 0 + 8 = 11",
                ],
                [
                  "3. Calculate the difference between these two sums, i.e., (Total excess) – (Total deficit).",
                  "To know the remainder when divided by 11.",
                  "(11 is 3 less than a multiple of 11) The difference between the two sums is 8 – 11 = –3. This indicates that the number 320185 is 3 less or 8 more than a multiple of 11.",
                ],
              ],
            },
            content: `? If this difference is 11 or a multiple of 11, what does it indicate about the remainder when the number is divided by 11?

            Using this shortcut method, find out whether the given numbers are divisible by 11. Also, if a number is not divisible by 11, find the remainder.
            (i) 158 (ii) 841 (iii) 481 (iv) 5529 (v) 90904 (vi) 857076

            Observe the following procedure.`,
            tableData3: {
              headers: ["Steps to Follow", "Example for number 328105"],
              rows: [
                [
                  "1. Starting from the units digit, place '+' and '–' signs alternately before each digit.",
                  "– 3 + 2 – 8 + 1 – 0 + 5",
                ],
                [
                  "2. Find the value of the expression.",
                  "– 3 + 2 – 8 + 1 – 0 + 5 = –3",
                ],
                [
                  "3. This result indicates the remainder when the number is divided by 11.",
                  "328105 is 3 less or 8 more than a multiple of 11.",
                ],
              ],
            },
            content: `Is the method we just saw similar to or different from the method we saw earlier?

            Using the shortcut method, fill in the blanks in the table below.`,
            tableData4: {
              headers: [
                "Number",
                "Divisible by",
                "2",
                "3",
                "4",
                "5",
                "6",
                "8",
                "9",
                "10",
                "11",
                "12",
              ],
              rows: [
                [
                  "990",
                  "Yes/No",
                  "Yes",
                  "Yes",
                  "No",
                  "Yes",
                  "Yes",
                  "No",
                  "Yes",
                  "Yes",
                  "Yes",
                  "No",
                ],
                ["158", "", "", "", "", "", "", "", "", "", ""],
                ["6275", "", "", "", "", "", "", "", "", "", ""],
                ["6686", "", "", "", "", "", "", "", "", "", ""],
                ["6392", "", "", "", "", "", "", "", "", "", ""],
                ["104297", "", "", "", "", "", "", "", "", "", ""],
                ["142856", "", "", "", "", "", "", "", "", "", ""],
                ["306040", "", "", "", "", "", "", "", "", "", ""],
                ["6839", "", "", "", "", "", "", "", "", "", ""],
              ],
            },
            images: [],
          },
          {
            title: "Some Other Points on Divisibility Shortcuts",
            content: `Shortcut Methods for Divisibility by Other Numbers

            How can we find out if a number is divisible by 6?

            Can divisibility by 6 be checked by checking divisibility by its factors 2 and 3? Use the shortcut methods for divisibility by 2 and 3 on the given numbers and verify your answer by actually dividing each number by 6 — 38, 225, 186, 64.

            How can we check divisibility by 24? Can this be done by checking divisibility by its factors 4 and 6? Why or why not?

            Divisibility by 24 cannot be determined by checking divisibility by 4 and 6. For example, the number 12 is divisible by both 4 and 6, but not by 24.

            Instead, we can check divisibility by 24 by checking divisibility by 3 and 8.

            Explain why divisibility by 24 can be checked by checking divisibility by 3 and 8, whereas checking divisibility by 4 and 6 is not sufficient for checking divisibility by 24.

            Shortcut methods for checking divisibility exist for all numbers up to 100, but for only a few numbers greater than 100. You can try to understand how these shortcut methods work after learning some concepts in higher classes.`,
            images: [],
          },
          {
            title: "Digital Root",
            content: `Take a number. Keep adding its digits until you get a single-digit number. The resulting single-digit number is called the digital root of the given number. For example, the digital root of the number 489710 is 2 — (4 + 8 + 9 + 7 + 1 + 0 = 29, 2 + 9 = 11, 1 + 1 = 2).

            What special property do you think this digital root has? Recall that we did something similar when finding the shortcut method for divisibility by 9.

            ? Which numbers between 600 and 700 have a digital root of (i) 5 (ii) 7 (iii) 3?

            ? Write the digital roots of any 12 consecutive numbers. What did you observe?

            We have seen that the digital root of multiples of 9 is always 9.

            ? Now find the digital roots of some consecutive multiples of — (i) 3 (ii) 4 (iii) 6.

            What are the digital roots of numbers that are one more than the multiples of 6? What did you observe? Try to explain the pattern you observed.

            "I am made of digits, each small and odd,
            My digital root is not 1, this is quite a prod!
            My digits, their sum, which is my essence core,
            Together they point to a number strong and more.
            I say with pride, that root is the largest odd single-digit number you can see,
            What is my name? Which number could I be?"

            In the work 'Mahasiddhanta' by Aryabhata II (c. 950 CE), a method for calculating the digital root of a number is described, where the digits of the number are summed repeatedly until a single digit is obtained. This method has been used to verify calculations of arithmetic operations.

            Let's Find Out
            1. The digital root of an 8-digit number is 5. What will be the digital root of the number that is 10 more than that number?

            2. Write any number. Generate a sequence of numbers by repeatedly adding 11. What will be the digital root of the numbers in this sequence? Share your observations.

            3. What will be the digital root of the number 9a + 36b + 13?

            4. Through investigation, guess whether there is any pattern or relationship between —
            (i) a number and its digital root.
            (ii) the digital root of a number and the remainder obtained when the number is divided by 3 or 9.`,
            images: [],
          },
          {
            title: "5.3 Uncovering Hidden Digits",
            content: `Last year, you saw cryptarithmetic puzzles, where each letter represents a digit, each digit is represented by at most one letter, and the first digit of a number is never 0.

            Solve the cryptarithmetic puzzles given below.`,
            cryptarithmeticExamples: [
              "ON + QR = A1",
              "AB + 1B = 6A",
              "ON + 37 = PO",
              "QR + QR = PRR",
            ],
            content: `Now, let's try to solve some cryptarithmetic equations related to multiplication.

            VPQ × 8 = RS

            Anshu says, "Oh, this means that multiplying a 2-digit number by 8 gives a 2-digit number. I know that 10 × 8 = 80, but the units digit of 10 and 80 are the same, which we don't need. By this reasoning, PQ cannot be 11 because P and Q are different digits. 12 × 8 = 96 satisfies all conditions. Can PQ be 13? Consider.

            This is not possible because 13 × 8 = 104. For all 2-digit numbers greater than 12, the product with 8 yields a 3-digit number.

            Try to solve this — GH × H = 9K

            This means that multiplying a 2-digit number by a 1-digit number gives a 2-digit number in the 90s. Look at the correspondence of the units digits in this cryptic equation. Choose the answer to this question from the options below.

            11 × 9 = 99, 12 × 8 = 96, 46 × 2 = 92, 24 × 4 = 96, 47 × 2 = 94, 31 × 3 = 93, 16 × 6 = 96

            Another question: BYE × 6 = RAY

            Anshu says, "Since the product is a three-digit number, B cannot be 2 or more. If B = 2, i.e., 200, then the product would be more than 1200. Hence, B = 1."

            What can you say about 'Y'? Which digits are possible or not possible?

            Y cannot be 7 or more, because if Y = 7, then 170 × 6 = 1020, but we need a 3-digit product. Using patterns, properties, and reasoning related to numbers and operations, we can solve cryptic equations.

            You can use patterns, properties, and reasoning related to numbers and operations to solve cryptarithmetic puzzles.

            Solve the following.
            (i) UT × 3 = PUT
            (ii) AB × 5 = BC
            (iii) L2N × 2 = 2NP
            (iv) X4 × 4 = ZX
            (v) PP × QQ = PRP
            (vi) JK × 6 = KKK`,
            images: [],
          },
          {
            title: "Let's Find Out",
            content: `1. If 31z5 is a multiple of 9, where z is a digit, then what is the value of z? Explain why there are two answers to this question.

            2. Snehal confirms — "I take a number that leaves a remainder of 8 when divided by 12. I take another number that is 4 less than a multiple of 12. Their sum will always be a multiple of 8." Check her confirmation and verify your conclusion.

            3. When is the sum of two multiples of 3 a multiple of 6, and when is it not? Explain the different possible situations and generalize the pattern.

            4. Shrilatha says, "I have a number that is divisible by 9. If I reverse the digits of this number, it is still divisible by 9."
            (i) Check whether her conjecture holds true for any multiple of 9.
            (ii) Is it possible to make any other change to the digits so that the resulting number is still a multiple of 9?

            5. If 48a23b is a multiple of 18, list all possible pairs of values for a and b.

            6. If 3p7q8 is divisible by 44, list all possible pairs of values for p and q.

            7. Find three consecutive numbers where the first number is a multiple of 2, the second number is a multiple of 3, and the third number is a multiple of 4.

            8. Write five multiples of 36 between 45,000 and 47,000. Share your method with your class.

            9. In a sequence of five consecutive even numbers, the middle number is 5p. Express the other four numbers in the sequence in terms of p.

            10. Write a 6-digit number that is divisible by 15, and the number obtained by reversing its digits is divisible by 6.

            11. Deepak confirms that "Some multiples of 11, when doubled, remain multiples of 11, but other multiples of 11, when doubled, do not remain multiples of 11." If his conjecture is correct, verify it and explain your conclusion.

            12. Determine whether the following statements are 'always true', 'sometimes true', or 'never true'. Explain your reasoning.
            (i) The product of a multiple of 6 and a multiple of 3 is a multiple of 9.
            (ii) The sum of three consecutive even numbers will be divisible by 6.
            (iii) If abcdef is a multiple of 6, then badcef will also be a multiple of 6.
            (iv) 8(7b – 3) – 4(11b + 1) is a multiple of 12.

            13. Choose any 3 numbers. When will their sum be divisible by 3? Explore all possible situations and generalize.

            14. Is the product of two consecutive integers always a multiple of 2? Why? What do you think about the product of three consecutive integers? Is it always a multiple of 6? Why or why not? What can you say about the product of four consecutive integers? What about the product of five consecutive integers?

            15. Solve the home equations.
            (i) EF × E = GGG
            (ii) WOW × 5 = MEOW

            16. Which of the following Venn diagrams represent the relationships between the multiples of 4, 8, and 32?`,
            images: [
              "Venn diagrams showing relationships between multiples of 4, 8, and 32",
            ],
          },
        ],
        summary: [
          "We explored various properties of divisibility and learned that —",
          "• If a is divisible by b, then all multiples of a will be divisible by b.",
          "• If a is divisible by b, then a will be divisible by all factors of b.",
          "• If a divides m and a divides n, then a divides m + n and m – n.",
          "We learned shortcut methods for checking divisibility by 3, 9, and 11 and understood how they work.",
          "Through all of the above, and using algebra, visualization, examples, and counterexamples, we were introduced to mathematical thinking and reasoning.",
        ],
      },
    },
    // chapter 6 The More You Distribute, The More It Grows
    {
      id: 6,
      title: "The More You Distribute, The More It Grows",
      content: {
        introduction:
          "In the previous chapter, we saw how letter symbols are used in algebra to concisely write general statements about patterns and relationships. Algebra can also be used to prove conjectures and conclusions (as you saw many such properties in the previous chapter) and to solve various types of problems. The distributive property is a property that shows the relationship between multiplication and addition, which has been explained concisely using algebra. In this chapter, we will explore various patterns of multiplication. We will also understand how to express these multiplication patterns using the distributive property in algebraic language.",
        sections: [
          {
            title: "6.1 Some Properties of Multiplication",
            content: `Increase in Products

            Consider the multiplication of two numbers, say 23 × 27.

            1. If the first number (23) is increased by 1, how much will the product increase?
            2. If the second number (27) is increased by 1, how much will the product change?
            3. When both numbers are increased by 1, how much will the product change?

            Do you see a pattern that can help generalize our observation about the product of any two numbers?

            Let's first consider a simpler problem: Find the increase in the product when 27 is increased by 1. From the definition of multiplication (and the commutative property), it is clear that the product increases by 23. This can also be seen using the distributive property of multiplication. If a, b, c are three numbers, then —

            a(b + c) = ab + ac

            This property can be clearly shown using a diagram —

            This is called the distributive property of multiplication over addition. Using the identity a(b + c) = ab + ac with a = 23, b = 27, and c = 1, we get —

            Recall that here a(b + c) and 23(27 + 1) mean a × (b + c) and 23 × (27 + 1) respectively. We usually do not write the '×' sign before or after brackets, just like in expressions like 5a, xy, etc.

            Similarly, we can expand (a + b)c using the distributive property as follows —

            (a + b)c = c(a + b) (commutativity of multiplication)
                     = ca + cb (distributivity)
                     = ac + bc (commutativity of multiplication)

            Using the distributive property, we can generally find how much the product will increase if one or both numbers are increased by 1. Let the initial two numbers be a and b. If one of them (say b) is increased by 1, we get —

            a × (b + 1) = a × b + a × 1 = ab + a

            Therefore, the increase is a.

            Now let's see what happens if both numbers in a product are increased by 1. We see that if both a and b in the product ab are increased by 1, we get (a + 1)(b + 1).

            How do we expand this?

            Considering (a + 1) as a single term, the distributive property gives us —

            (a + 1)(b + 1) = (a + 1)b + (a + 1)1

            Using the distributive property again, we get —

            = ab + b + a + 1

            Thus, when each of a and b is increased by 1, the product ab increases by a + b + 1.

            If a = 23 and b = 27, we get —

            (23 + 1)(27 + 1) = 23 × 27 + (27 + 23 + 1)

            If we expand (a + 1)(b + 1) by first considering (b + 1) as a single term, what do we get? Try solving it?

            What if we increase the first number by 1 and decrease the second number by 1? Will there be any change in their product?

            Let's take the product of two numbers a and b again, ab. If a is increased by 1 and b is decreased by 1, then their product becomes (a + 1)(b – 1). Expanding this, we get —

            (a + 1)(b – 1) = (a + 1)b – (a + 1)1
                          = ab + b – (a + 1)
                          = ab + b – a – 1
                          = ab + (b – a – 1)

            Will the product always increase? Find three examples where the product decreases.

            What happens when a and b are negative integers?

            Check the above situations by substituting different values for a and b. For example, a = –5, b = 8; a = –4, b = –5, etc.

            We have seen that integers also satisfy the distributive property, i.e., if x, y, and z are any three integers, then x(y + z) = xy + xz.

            Thus, the expressions we have for the increase in product will also hold when the literal numbers (variables) take negative integer values.

            Recall that two algebraic expressions are equal if their values remain the same when the literal numbers are replaced by numbers. These numbers can be any integers. Mathematical statements expressing the equality of two mathematical expressions are called identities, such as —

            a(b + 8) = ab + 8a, (a + 1)(b – 1) = ab + b – a – 1, etc.

            If one of the two numbers is increased by m and the other by n, how much will their product change?

            If a and b are the initial numbers to be multiplied, after the increase they become a + m and b + n.

            (a + m)(b + n) = (a + m)b + (a + m)n
                           = ab + mb + an + mn

            Hence, the increase in the product is an + bm + mn.

            Note that this is the sum of the products of each term of (a + m) with each term of (b + n).

            This identity can be shown as follows —

            This identity can be used to find out how the product changes when the numbers being multiplied are increased or decreased by any amount. Can you understand how this identity can be used when one or both numbers are decreased?

            Let's reconsider the situation where one number is increased by 1 and the other is decreased by 1. Let's write the product (a + 1)(b – 1) as (a + 1)(b + (–1)). Taking m = 1 and n = –1 in Identity 1, we get —

            ab + (1) × b + a × (–1) + (1) × (–1) = ab + b – a – 1,

            which is the same expression we obtained earlier.

            ? Using Identity 1, find out how the product changes when —
            (i) one number is decreased by 2 and the other is increased by 3.
            (ii) one number is decreased by 3 and the other is decreased by 4.

            ? Without converting subtraction to addition, find the product and verify your answers.

            Generalizing this, we can obtain the product (a + u)(b – v) as follows —

            (a + u)(b – v) = (a + u)b – (a + u)v
                           = ab + ub – (av + uv)
                           = ab + ub – av – uv

            Check that this is the same as taking m = u and n = –v in Identity 1.

            According to Identity 1, the product (a + u)(b – v) is the sum of the products of each term of a + u (a and u) with each term of b – v (b and –v). Note that the signs of the terms in the product are determined using the same rules as for integer multiplication.

            Now you must have understood how the rules of integer multiplication help us solve different problems using the same identity!

            ? Expand (i) (a – u)(b + v), (ii) (a – u)(b – v). We get —

            (a – u)(b + v) = ab – ub + av – uv, and
            (a – u)(b – v) = ab – ub – av + uv

            The distributive property is not limited to two terms inside a bracket.

            Example 1 — Write 3a/2 (a – b + 1/5) in expanded form.

            3a/2 (a – b + 1/5) = (3a/2 × a) – (3a/2 × b) + (3a/2 × 1/5)

            These terms can be simplified as follows —

            3a/2 × a = 3/2 × (a × a) = 3/2 a²
            3a/2 × b = 3/2 × (a × b) = 3/2 ab
            3a/2 × 1/5 = (3/2 × 1/5) a = 3/10 a

            Hence, we get —

            3a/2 (a – b + 1/5) = (3/2)a² – (3/2)ab + (3/10)a

            Can the sum of any two terms be combined into a single term?
            For example, can (3/2)a² and (3/10)a be added to get a single term?
            We see that since the variable parts of the two terms are not completely the same, they cannot be simplified into a single term. Hence, the expression cannot be simplified further.
            Recall that terms with the same variable part are called like terms.

            Example 2 — Expand (a + b)(a + b).
            Here, (a + b)(a + b) = (a + b)a + (a + b)b
                               = a × a + b × a + a × b + b × b
                               = a² + ba + ab + b²

            Since ba = ab, we have two terms with the same variable part ab (i.e., like terms), so they can be added —
            ba + ab = ab + ab = 2ab

            Hence, we get —
            (a + b)(a + b) = a² + 2ab + b²

            Example 3 — Expand (a + b)(a² + 2ab + b²).
            (a + b)(a² + 2ab + b²) = (a + b)a² + (a + b) × 2ab + (a + b)b²
                                  = (a × a²) + b × a² + (a × 2ab) + (b × 2ab) + a × b² + (b × b²)

            These terms can be simplified as follows —
            a × a² = a³ (why?)
            b × a² = a²b
            a × 2ab = 2 × a × a × b = 2a²b
            b × 2ab = 2 × a × b × b = 2ab²
            a × b² = ab²
            b × b² = b³

            Therefore, (a + b)(a² + 2ab + b²) = a³ + a²b + 2a²b + 2ab² + ab² + b³

            We see that a²b and 2a²b have the same variable part (or are like terms). Hence, they can be added —
            a²b + 2a²b = (1 + 2)a²b = 3a²b

            Similarly, ab² and 2ab² are like terms, so they can be added —
            ab² + 2ab² = (1 + 2)ab² = 3ab²

            We get —
            (a + b) × (a² + 2ab + b²) = a³ + 3a²b + 3ab² + b³

            A Glimpse of History
            In the calculations of mathematicians from many ancient civilizations, especially ancient Egypt, Mesopotamia, Greece, China, and India, the distributive property of multiplication over addition was implicit. For example, mathematicians Euclid (in geometric form) and Aryabhata (in algebraic form) used the distributive rule extensively in an implicit way in their mathematical and scientific work. The explicit statement of the distributive property was first given by Brahmagupta in his work 'Brahmasphuta-siddhanta' (Verse 12.55). In it, he called the use of this property for multiplication 'Khanda Gunanam' (multiplication by parts). His verse states: "The multiplicand is divided into two or more parts whose sum equals it; the multiplier is multiplied by each of these parts and the results are added." That is, if there are two parts, using letter symbols, this is equivalent to the identity (a + b)c = ac + bc. In the subsequent verse (Verse 12.56), Brahmagupta describes a method for fast multiplication using this distributive property, which we will study in detail in the next section.`,
            images: [
              "Diagram showing distributive property a(b+c) = ab + ac",
              "Diagram showing identity (a+m)(b+n) expansion",
              "Multiplication grid",
            ],
          },
          {
            title: "Let's Find Out",
            content: `1. Observe the following multiplication grid. Each number inside the grid is formed by the product of two numbers. If the middle number of the 3 × 3 grid is represented by the expression pq as shown in the figure, then write expressions for the other numbers in the grid.

            2. Expand the following products.
            (i) (3 + u)(v – 3)
            (ii) (2/3)(15 + 6a)
            (iii) (10a + b)(10c + d)
            (iv) (3 – x)(x – 6)
            (v) (–5a + b)(c + d)
            (vi) (5 + z)(v + 9)

            3. Give three examples where one number is increased by 2 and the other is decreased by 4, yet their product remains unchanged.

            4. Expand (i) (a + ab – 3b²)(4 + b) and (ii) (4y + 7)(y + 11z – 3)

            5. Expand (i) (a – b)(a + b) (ii) (a – b)(a² + ab + b²) and (iii) (a – b)(a³ + a²b + ab² + b³). Do you see a pattern in these? What would be the next identity in the pattern you see? Can you verify it by expanding the identity?`,
            images: ["Multiplication grid with expressions"],
          },
          {
            title: "Fast Multiplication Using the Distributive Property",
            content: `The distributive property can be used to develop fast multiplication methods for specific types of numbers.

            When one of the numbers to be multiplied is 11, 101, 1001, ...........

            ? Use the following multiplication to find the product in a single step when multiplying a number by 11.
            (i) 3874 × 11 (ii) 5678 × 11

            Let's do the first multiplication:
            3874 × 11 = 3874(10 + 1) = 38740 + 3874

            Note how the digits are being added.

            Let's take a 4-digit number d c b a. Here, d is in the thousands place, c in the hundreds, b in the tens, and a in the units.

            dcba × (10 + 1) = dcba × 10 + dcba

            Thus,

                  d   c   b   a   0
            +         d   c   b   a
            -------------------------
                  d  (c+d) (b+c) (a+b) a

            This can be used to obtain the product in a single line.

            Steps for 3874 × 11:
            Step 1: Write the last digit 4.
            Step 2: 4 + 7 = 11, write 1, carry over 1.
            Step 3: 7 + 8 + carry 1 = 16, write 6, carry over 1.
            Step 4: 8 + 3 + carry 1 = 12, write 2, carry over 1.
            Step 5: 3 + carry 1 = 4, write 4.
            Result: 42614.

            State the general rule for multiplying any number (with any number of digits) by 11, and write the product in a single line.

            Calculate — (i) 94 × 11 (ii) 495 × 11 (iii) 3279 × 11 (iv) 4791256 × 11

            Can we make a similar rule for multiplying a number by 101?
            Multiply 3874 by 101.

            Let's take a 4-digit number dcba.
            dcba × 101 = dcba × (100 + 1) = dcba × 100 + dcba

            Thus,

                  d   c   b   a   0   0
            +               d   c   b   a
            -----------------------------
                  d   c  (b+d) (a+c)  b   a

            Use the above expression to find the value (product) of 3874 × 101 in a single line.

            What could be the general rule for multiplying any number by 101 and writing the product in a single line? Extend this rule for multiplication by 1001, 10001,........

            Using the above rule, find the product of the following.
            (i) 89 × 101 (ii) 949 × 101 (iii) 265831 × 1001 (iv) 1111 × 1001 (v) 9734 × 99 (vi) 23478 × 999

            Such methods of applying the distributive property to multiply two numbers easily were discussed extensively in the ancient mathematical texts of Brahmagupta (628 CE), Sridharacharya (750 CE), and Bhaskaracharya (Lilavati, 1150 CE). Brahmagupta called such methods for fast multiplication using the distributive property 'Ishta Gunana' in his work 'Brahmasphuta-siddhanta' (Verse 12.56).`,
            images: [],
          },
          {
            title: "6.2 Special Cases of the Distributive Property",
            subSections: [
              {
                title: "Square of the Sum or Difference of Two Numbers",
                content: `The area of a square with side 60 units is 3600 square units (60²), and the area of a square with side 5 units is 25 square units (5²). Can we use this to find the area of a square with side 65 units?

                As shown in the figure, a square of side 65 units can be divided into 4 parts: a square of side 60 units, a square of side 5 units, and two rectangles with sides 60 and 5 units. The area of the square of side 65 units is the sum of the areas of all its components. Can you find the area of the four parts in the given figure?

                We get —

                65² = (60 + 5)² = 60² + 5² + 2 × (60 × 5) = 3600 + 25 + 600 = 4225 square units.

                Multiply (60 + 5) × (60 + 5) using the distributive property.

                (60 + 5) × (60 + 5) = 60 × 60 + 5 × 60 + 60 × 5 + 5 × 5 = 60² + 2 × (60 × 5) + 5²

                What if we write 65² as (30 + 35)² or (52 + 13)²? Draw figures and verify the area obtained.

                Let's look at the general expression for the square of the sum of two numbers, (a + b)².

                Using the distributive property, (a + b)² can be expanded as —

                (a + b) × (a + b) = a × a + a × b + b × a + b × b = a² + 2ab + b²

                We have already seen this in Example 2.

                Identity 1A: (a + b)² = a² + 2ab + b²

                If a and b are any two integers, will the value of (a + b)² always be greater than a² + b²? If not, when will it be greater?

                Use Identity 1A to find the values of 104² and 37².
                (Hint — Express 104 and 37 as a sum or difference of numbers whose squares are easy to calculate.)

                ? Using Identity 1A, write the expanded form for the following:
                (i) (m + 3)² (ii) (6 + p)²

                ? Write the expanded form of (6x + 5)².`,
                tableData: {
                  headers: ["Using Distributive Property", "Using Identity"],
                  rows: [
                    [
                      "(6x + 5)² = (6x + 5)(6x + 5)<br/>= (6x × 6x) + (5 × 6x) + (6x × 5) + 5 × 5<br/>= (6x)² + 2(6x × 5) + 5²<br/>= 36x² + 60x + 25",
                      "(6x + 5)² = (6x)² + 5² + 2 × (6x × 5)<br/>= 36x² + 25 + 60x",
                    ],
                  ],
                },
                content: `If you have difficulty remembering or using the general rule, you can use the distributive property to multiply and obtain the desired result.

                ? Expand (3j + 2k)² using both the identity and the distributive property.

                ? Can we find the value of (60 – 5)² or 55² using 60² (= 3600) and 5² (= 25)? Let's try to solve this geometrically by constructing a square of side 55 units inside a square of side 60 units.

                The area of the square of side 55 units is (60 – 5)² = 55².

                We can find the area of the square of side 55 units by subtracting the areas of two rectangles with sides 60 and 5 units from the area of the square of side 60 units, which gives 60² – (60 × 5) – (5 × 60). Doing this subtracts the area of the small square of side 5 units twice. What can we do to this expression to get the actual area?

                We can add the area of the square of side 5 units back to this expression. Thus, we will subtract that area only once.

                Therefore,

                (60 – 5)² = 60² – (60 × 5) – (5 × 60) + 5²
                          = 3600 – 300 – 300 + 25
                          = 3025

                The area of the square of side 55 units is 3025 square units.

                We have seen what we get when expanding (a + b)². What is the expanded form of (a – b)²?

                Using the distributive property,

                (a – b)² = (a – b) × (a – b)
                         = (a)² – ba – ab + (b)²
                         = a² – 2ab + b²

                ? To find the expansion of (a – b)², we can also use the expansion of (a + b)². Consider how.

                Hint — (a – b)² = (a + (–b))²

                Now we can directly use the expansion of (a + b)².

                (a + (–b))² = (a)² + (–b)² + 2 × (a) × (–b) = a² + b² – 2ab

                Identity 1B: (a – b)² = a² + b² – 2ab

                ? Using geometry, write the expanded form of (a – b)² similarly to 55².

                ? Using Identity 1B, find the value of (a) 99² and (b) 58².

                ? Expand the following using both Identity 1B and the distributive property.
                (i) (b – 6)² (ii) (–2a + 3)² (iii) (7y – 3/(4z))²`,
                images: [
                  "Square of side 65 divided into 4 parts",
                  "Square of side 60 with square of side 55 inside",
                ],
              },
              {
                title: "Checking Patterns",
                content: `Pattern 1

                Observe the following pattern.

                2(2² + 1²) = 3² + 1²
                2(3² + 1²) = 4² + 2²
                2(6² + 5²) = 11² + 1²
                2(5² + 3²) = 8² + 2²

                ? Take a pair of natural numbers. Find the sum of their squares. Can you write this sum as the sum of two squares?
                ? Try to do this with other pairs of numbers. Did you find a pattern?
                ? Note — 2(5² + 6²) = (6 + 5)² + (6 – 5)²
                ? Are the following identities helpful in explaining the above pattern?
                (a + b)² = a² + 2ab + b²
                (a – b)² = a² – 2ab + b²
                (a + b)² + (a – b)² = (a² + 2ab + b²) + (a² – 2ab + b²)
                Adding like terms: a² + a² = 2a², b² + b² = 2b², and 2ab – 2ab = 0.
                We get — 2(a² + b²) = (a + b)² + (a – b)²

                Pattern 2
                ? Here is a related pattern. Try to explain this pattern using algebra to determine if it always holds.
                9 × 9 – 1 × 1 = 10 × 8
                8 × 8 – 6 × 6 = 14 × 2
                7 × 7 – 2 × 2 = 9 × 5
                10 × 10 – 4 × 4 = 14 × 6

                Here, the pattern appears to be a² – b² = (a + b) × (a – b). Is this a valid identity?
                Using the distributive property, we get —
                (a + b) × (a – b) = a² – ab + ba – b² = a² – b²

                Identity 1C: (a + b) × (a – b) = a² – b²

                You have already seen this identity earlier in 'Let's Find Out 5 (i)'.

                ? Using Identity 1C, calculate 98 × 102 and 45 × 55.

                ? Show geometrically that (a + b) × (a – b) = a² – b².`,
                images: [],
              },
            ],
          },
          {
            title: "Let's Find Out",
            content: `1. Which expression is larger — (a – b)² or (b – a)²? Justify your answer.

            2. Express 100 as the difference of two squares.

            3. Using the identities learned so far, find the values of 406², 72², 145², 1097², and 124².

            4. Are patterns 1 and 2 valid only for counting numbers? Do they also apply to negative integers? What can be said about these patterns for fractions? Justify your answer.`,
          },
          {
            title: "6.3 Identify the Error and Correct It",
            content: `The following algebraic expressions have been expanded and simplified to their simplest forms.

            (i) Check each simplification and see if there is any error.
            (ii) If there is an error, explain what the error is.
            (iii) Then write the correct expression.`,
            tableData: {
              headers: [
                "Expression",
                "Simplified form (given)",
                "Corrected form",
              ],
              rows: [
                ["(x + 2)(x – 3)", "x² – 6", ""],
                ["(a – 5)²", "a² – 10a + 25", ""],
                ["(3m + 2)(3m – 2)", "9m² – 6m – 4", ""],
                ["(4y + 5)(y – 2)", "4y² – 8y + 5y – 10", ""],
              ],
            },
            images: [],
          },
          {
            title: "6.4 This Way or That Way, All Roads Lead to the Gulf",
            content: `Observe the pattern in the figure below. Draw the next figure in the sequence. How many circles are there in it? How many circles will there be in the figure at the 10th step? Write an expression for the number of circles in the figure at step k.

            There are many ways to explain this pattern. Some possibilities are given below —`,
            images: [
              "Step 1: 3 circles (1+2), Step 2: 8 circles (1+2+3+2?), pattern of circles forming a plus shape",
            ],
          },
          {
            title: "Methods for the Pattern",
            content: `Method 1:
            Step 1: 2² – 1 = (1 + 1)² – 1
            Step 2: 3² – 1 = (2 + 1)² – 1
            Step 3: 4² – 1 = (3 + 1)² – 1
            Step 4: 5² – 1 = (4 + 1)² – 1
            ...
            Step k: (k + 1)² – 1

            Method 2:
            Step 1: 1 × 2 + 1 = 1 × (1 + 1) + 1
            Step 2: 2 × 3 + 2 = 2 × (2 + 1) + 2
            Step 3: 3 × 4 + 3 = 3 × (3 + 1) + 3
            Step 4: 4 × 5 + 4 = 4 × (4 + 1) + 4
            ...
            Step k: k × (k + 1) + k

            Method 3:
            Step 1: 1² + 2 × 1
            Step 2: 2² + 2 × 2
            Step 3: 3² + 2 × 3
            Step 4: 4² + 2 × 4
            ...
            Step k: k² + 2k

            Method 4:
            Step 1: 1 × 3 = 1 × (1 + 2)
            Step 2: 2 × 4 = 2 × (2 + 2)
            Step 3: 3 × 5 = 3 × (3 + 2)
            Step 4: 4 × 6 = 4 × (4 + 2)
            ...
            Step k: k × (k + 2)

            Is your method similar to any of these methods, or is it different? Each expression we identified appears different, but are they really different? Since they describe the same pattern, they should all be equivalent. Let's solve each expression and find out.

            On correctly solving, all methods yield the same answer: k² + 2k. The expression k² + 2k represents the number of circles at step k of this pattern.

            Use the above formula to find the number of circles at step 15.

            Consider the pattern made from square tiles in the figure below.

            How many square tiles are there in each figure?
            How many square tiles are there in step 4 of the sequence? How many square tiles are there in the 10th step?
            Write an algebraic expression for the number of tiles at step n. Share your methods with the class.

            In the figure below, find the area of the shaded (inner) part. All 4 rectangles have the same dimensions.

            Tangad's Method: The total area is a square with side (m + n), whose area is (m + n)². Subtracting the area of 4 rectangles from the total area gives the area of the inner shaded region.

            Yusuf's Method: The shaded region is a square with side length (n – m). Hence, its area is (n – m)².

            Expand both expressions to verify that (m + n)² – 4mn = (n – m)².

            In the figure, find the area of the part with diagonal lines. Here, the sides of all three rectangles are equal (Figure 1).

            Anubha's Method: Required area = Area(ABCD) – Area(EFGH)
            Area(ABCD) = x²
            Area(EFGH) = xy
            Required area = x² – xy

            Vaishnavi's Method: QS = y + x + y = x + 2y
            Area(PQSR) = x(x + 2y)
            Required area = Area(PQSR) – (Area of the three rectangles) = x(x + 2y) – 3xy

            Aditya's Method: Required area is twice the area of JKLM.
            JK = (x – y)/2, KM = x
            Area(JKML) = x × (x – y)/2
            Required area = 2 × Area(JKML) = 2x × (x – y)/2 = x(x – y)

            By expanding the expressions, verify that all three expressions are equivalent. If x = 8 and y = 3, find the area of the shaded region.

            Write an expression for the area of the region bounded by the dashed line or dotted line in the given figure. Use more than one method to obtain the answer. Substitute p = 6, r = 3.5, and s = 9 to calculate the area.`,
            images: [
              "Pattern of square tiles (L-shapes)",
              "Square with inner shaded region and 4 rectangles",
              "Rectangle ABCD with inner rectangle EFGH and three rectangles",
              "Figure with dashed lines",
            ],
          },
          {
            title: "Let's Find Out",
            content: `1. Calculate the products using the suggested identities.
            (i) Value of 46², using Identity 1A for (a + b)²
            (ii) Value of 397 × 403, using Identity 1C for (a + b)(a – b)
            (iii) Value of 91², using Identity 1B for (a – b)²
            (iv) Value of 43 × 45, using Identity 1C for (a + b)(a – b)

            2. Use appropriate identities or the distributive property to find each of the following products.
            (i) (p – 1)(p + 11)
            (ii) (3a – 9b)(3a + 9b)
            (iii) –(2y + 5)(3y + 4)
            (iv) (6x + 5y)²
            (v) (2x – 1/2)²
            (vi) (7p) × (3r) × (p + 2)

            3. Identify the appropriate algebraic expression(s) for each statement.
            (i) Expression that is two more than a square number
                2 + s, (s + 2)², s² + 2, s² + 4, 2s², 2²s
            (ii) Sum of the squares of two consecutive numbers
                m² + n², (m + n)², m² + 1, m² + (m + 1)², m² + (m – 1)², (m + (m + 1))², (2m)² + (2m + 1)²

            4. Consider a 2 by 2 square of numbers in a calendar, as shown in the figure.
            Find the product of the numbers on each diagonal — 4 × 12 = 48, 5 × 11 = 55. Do this for other 2 by 2 squares. What do you observe about the products of the diagonals? Explain why this happens.
            Hint — Label the numbers in each 2 by 2 square as follows.

            | a | a+1 |
            | a+7 | a+8 |

            5. Verify which of the following statements are true.
            (i) The value of (K+1)(K+2) – (K+3) is always 2.
            (ii) The value of (2q+1)(2q-3) is a multiple of 4.
            (iii) Squares of even numbers are multiples of 4, and squares of odd numbers are one more than multiples of 8.
            (iv) The value of (6n+2)² – (4n+3)² is 5 less than a square number.

            6. When a number is divided by 7, the remainder is 3, and when another number is divided by 7, the remainder is 5. What will be the remainder when their sum, difference, and product are divided by 7?

            7. Select three consecutive numbers. Square the middle number and subtract the product of the other two numbers. Repeat this process with other groups of numbers. What pattern do you observe? How would you write this as an algebraic equation? Expand both sides of the equation to verify that it is a valid identity.

            8. What is the algebraic expression representing the following steps?
            Add any two numbers. Multiply this sum by half the sum of the two numbers. Prove that this result is half the square of the sum of the two numbers.

            9. Which expression is larger? Find out without fully calculating the product.
            (i) 14 × 26 or 16 × 24 (ii) 25 × 75 or 26 × 74

            10. A small park is being built in Dhauli. Its plan is shown in the figure. Two square plots, each with area g² square feet, will have greenery. The remaining entire area (w feet wide) is a walkway that needs to be tiled. Write an expression for the area that needs to be tiled.

            11. For each pattern shown below —
            (i) Draw the next figure in the sequence.
            (ii) How many basic units will be there in step 10?
            (iii) Write an expression describing the number of basic units at step y.`,
            images: [
              "Calendar grid for February",
              "Park plan with two squares and walkway",
              "Patterns of basic units (dots arranged in various shapes)",
            ],
          },
        ],
        summary: [
          "We multiplied two expressions, each having two terms, by expanding the distributive property. The general formula for this is (a + b) × (c + d) = ac + ad + bc + bd.",
          "We saw some special cases of the above identity:",
          "• (a + b)² = a² + 2ab + b²",
          "• (a – b)² = a² – 2ab + b²",
          "• (a + b)(a – b) = a² – b²",
          "We considered various patterns and explored how to understand them using algebra. We saw that there are often many ways to solve a problem and reach the same correct answer. Solving the same problem in different ways is a creative process.",
        ],
      },
    },
    // chapter 7 Proportionality
    {
      id: 7,
      title: "Proportionality - 1",
      content: {
        introduction:
          "In this chapter, we will explore the concept of proportionality. We will learn about ratios, how to determine if two ratios are in proportion, and how to use proportional reasoning to solve various real-life problems. We will also learn about the 'Rule of Three' (Trairashika) and how to divide a quantity in a given ratio.",
        sections: [
          {
            title: "7.1 Observing Similarity in Change",
            content: `We are familiar with all the digital images given below. Often, we change the size and layout of these images according to our needs. Observe the group of images below —

            We can see that the sizes of all images are different.

            ? Which of the above images appear similar to you and which appear different? After observation, images (a), (c), and (d) appear similar, even though their sizes are different.

            ? Do images (b) and (e) appear similar to the other three? No, these images are somewhat distorted. In image (b), the tiger appears elongated, and in image (e), it appears compressed and fat!

            ? Why is this?

            You can see that images (a), (c), and (d) are rectangular, but (e) is square. Perhaps this is why (e) appears of a different shape. But (b) is also rectangular. Why does it look different from the other rectangular images?

            To answer this question, can we measure the rectangles and see a pattern?`,
            tableData: {
              headers: ["Image", "Width (in mm)", "Height (in mm)"],
              rows: [
                ["Image (a)", "60", "40"],
                ["Image (b)", "40", "20"],
                ["Image (c)", "30", "20"],
                ["Image (d)", "90", "60"],
                ["Image (e)", "60", "60"],
              ],
            },
            content: `? Why do images (a), (c), and (d) appear similar? And why do (b) and (e) appear different?

            When we compare image (a) with image (c), we find that the width and height of (c) are half of those of (a). The change in both width and height has been done by the same factor. In this case, it is 1/2. Since the width and height have been changed by the same factor, the images appear similar.

            When we compare image (a) with image (b), we find that the width of image (b) is 20 mm less than that of image (a). The height of (b) is also 20 mm less than the height of (a). Even though the difference (by subtraction) is the same, the images appear different. Has the change in width and height been done by the same factor? The height of (b) is half the height of (a), but the width of (b) is not half the width of (a). Since the width and height have not been changed by the same factor, the images appear different.

            ? Can you tell by what factor the width and height of image (d) have been changed compared to image (a)? Are the factors the same?

            Images (a), (c), and (d) appear similar because their width and height have been changed by the same factor. Therefore, we can say that the change in their width and height is proportional.`,
            images: ["Images (a) to (e) of a tiger"],
          },
          {
            title: "7.2 Ratio",
            content: `In mathematics, we use the concept of ratio to represent proportional relationships.

            We can say that the ratio of width to height of image (a) is — 60 : 40. The numbers 60 and 40 are called the terms of this ratio.

            The ratio of width to height of image (c) is 30 : 20, and the ratio of image (d) is 90 : 60.

            If the ratio is in the form a : b, we can say that for every 'a' units of the first quantity, there are 'b' units of the second quantity.

            Thus, for image (a), we can say that for every 60 mm of width, there is 40 mm of height.

            We can say that the ratios of width to height of images (a), (c), and (d) are proportional because the terms of these ratios change by the same factor. Let's see how —

            Multiplying both terms by 1/2, we get — 60 × 1/2 : 40 × 1/2, which is 30 : 20. This is the ratio of width to height for image (c).

            By what factor should the ratio 60 : 40 (image (a)) be multiplied to get 90 : 60 (image (d))?

            To compare whether ratios are proportional, a systematic method is to convert them to their simplest form. Also, check if their simplest forms are the same.`,
            images: [],
          },
          {
            title: "7.3 Ratio in its Simplest Form",
            content: `We convert a ratio to its simplest form by dividing its terms by their greatest common divisor (GCD).

            In image (a), the terms are 60 and 40. What is the GCD of 60 and 40? The GCD of 60 and 40 is 20. Dividing the terms of image (a) by 20 gives us the ratio 3 : 2, which is in its simplest form.

            The ratio of image (d) is 90 : 60. Dividing both terms by 30 (the GCD of 90 and 60) gives us the simplest form 3 : 2. Therefore, the ratios of images (a) and (d) are proportional.

            What is the simplest form of the ratios of images (b) and (e)?

            The ratio of image (b) is 40 : 20, its simplest form is 2 : 1.
            The ratio of image (e) is 60 : 60, its simplest form is 1 : 1.

            These ratios are not the same as 3 : 2. Hence, we can say that the width-to-height ratios of images (b) and (e) are not proportional to the ratios of images (a), (c), and (d).

            When two ratios are the same in their simplest form, we can say that the ratios are in proportion or that the ratios are proportional. To show that ratios are proportional, we use the symbol (::). Thus, a : b :: c : d indicates that the ratios a : b and c : d are proportional.

            Therefore,
            60 : 40 :: 30 : 20 and 60 : 40 :: 90 : 60.`,
            images: [],
          },
          {
            title: "7.4 Problem Solving with Proportional Reasoning",
            content: `? Example 1 — Are the ratios 3 : 4 and 72 : 96 proportional? 3 : 4 is already in its simplest form. To get the simplest form of 72 : 96, we need to divide both terms by their GCD.

            ? What is the GCD of 72 and 96?
            The GCD of 72 and 96 is 24. Dividing both terms by 24 gives us 3 : 4. Since both ratios are the same in their simplest form, the given ratios are proportional.

            Example 2 — Kesang wanted to make lemonade for a festival. She made 6 glasses of lemonade in a vessel and added 10 spoons of sugar. Her father thought that more people might attend the festival. So, he asked her to make 18 more glasses of lemonade.

            ? How many spoons of sugar should Kesang add to maintain the same sweetness in the lemonade solution?

            To maintain the same sweetness, the ratio of the number of glasses of lemonade to the number of spoons of sugar should be proportional. For 6 glasses of lemonade, she used 10 spoons of sugar. The ratio of glasses of lemonade to spoons of sugar is 6 : 10. If she needs to make 18 glasses of lemonade, how many spoons of sugar should she use? We can write this problem as —

            6 : 10 :: 18 : ?

            We know that for ratios to be proportional, each term of the ratio must be changed by the same factor.

            ? How can we find the factor of change in the ratio?
            The first term has increased from 6 to 18. To find the factor of change, we divide 18 by 6, which gives 3.

            The second term must also be changed by the same factor. When 10 is multiplied by the factor 3, it becomes 30. Thus — 6 : 10 :: 18 : 30.

            Therefore, Kesang should use 30 spoons of sugar to make 18 glasses of lemonade with the same sweetness as before.

            Example 3 — Nitin and Hari were building a wall around their house. Nitin was building a long wall of length 60 feet, and Hari was building a small wall of length 40 feet. Nitin used 3 bags of cement, but Hari used only 2 bags of cement. Nitin was worried that the wall built by Hari would not be as strong as the wall he built because Hari used less cement.

            Is Nitin thinking correctly?

            In this situation, we should compare the ratios of the lengths of the walls built by Nitin and Hari to the number of cement bags they used. Also, we need to understand whether these ratios are proportional.

            For Nitin: ratio 60 : 3, i.e., 20 : 1 (simplest form).
            For Hari: ratio 40 : 2, i.e., 20 : 1 (simplest form).

            Since both ratios are proportional, both walls are equally strong. Nitin should not worry about this!

            Example 4 — My school has 5 teachers and 170 students. The ratio of teachers to students is 5 : 170. Calculate the number of teachers and students in your school and tell what the ratio of teachers to students is? Write it in the space below.

            Is the ratio of teachers to students in your school proportional to the ratio in my school?

            Example 5 — Measure the width and height (to the nearest centimeter) of the blackboard in your classroom. What is the ratio of the width to the height of the blackboard?

            Can you draw a rectangle in your notebook whose width and height are proportional to the ratio of the blackboard?

            Compare the rectangle you drew with the rectangles drawn by your classmates. Do they all look similar?

            Note for Teachers — Give some more examples like these that students can relate to. Also, ask them to explain why they think they are correct. Engaging with these problems and finding solutions through the process of proportional reasoning should go hand-in-hand with the learning processes.

            Example 6 — When Nilima was 3 years old, her mother's age was 10 times hers. What was the ratio of Nilima's age to her mother's age? When Nilima is 12 years old, what will be the ratio of their ages? Will this ratio remain the same?

            When Nilima is 3 years old, the ratio of her age to her mother's age is 3 : 30 (her mother's age is 10 times Nilima's age). In simplest form, this is 1 : 10.

            When Nilima is 12 years old (i.e., after 9 years), the ratio of their ages will be 12 : 39 (after 9 years, her mother will be 39 years old). In simplest form, this ratio is 4 : 13.

            When we add (or subtract) the same number to the terms of a ratio, the ratio changes. Also, it is not necessary that it will be proportional to the original ratio.

            Example 7 — Write the missing numbers for the following ratios that are proportional to 14 : 21.

            __ : 42, 6 : __, 2 : __

            In the first ratio, we don't know the first term, but the second term is 42. This is double the second term of 14 : 21. Therefore, the first term should also be double the first term (14). Hence, the proportional ratio is 28 : 42.

            For the second ratio, the first term is 6. What factor should 14 be multiplied by to get 6? Could it be an integer, or should it be a fraction?

            We can write this as 14y = 6, so y = 6/14 = 3/7.
            Therefore, we need to multiply 21 (the second term of the ratio 14 : 21) by the same factor 3/7.
            21 × 3/7 = 9. Hence, the ratio is 6 : 9.

            For the third ratio, the first term is 2.
            We can see that when we divide 14 (the first term of the ratio 14 : 21) by 7 (the GCD of 14 and 21), we get 2.
            If we also divide 21 by 7, we get 3. Hence, the ratio is 2 : 3.

            Filter Coffee!
            Filter coffee is a beverage made by mixing coffee decoction with milk. Manjunath usually prepares a cup of filter coffee at his coffee shop by mixing 15 ml of coffee decoction with 35 ml of milk.

            In this situation, we can say that the ratio of coffee decoction to milk is 15 : 35.

            If a customer wants strong filter coffee, Manjunath prepares it by mixing 20 ml of coffee decoction with 30 ml of milk. This ratio is 20 : 30.

            ? Why is this coffee stronger? Also, when they want less strong filter coffee, he prepares a mixture of 10 ml of coffee and 40 ml of milk. This ratio is 10 : 40.

            ? Why is this coffee less strong?

            The following table shows different ratios of mixing coffee decoction with milk by Manjunath. In the last column, write whether the coffee is stronger, normal, or weaker than the normal coffee.`,
            tableData: {
              headers: [
                "Coffee Decoction (in ml)",
                "Milk (in ml)",
                "Normal/Stronger/Weaker",
              ],
              rows: [
                ["300", "600", ""],
                ["150", "500", ""],
                ["200", "400", ""],
                ["24", "56", ""],
                ["100", "300", ""],
              ],
            },
            images: [],
          },
          {
            title: "Let's Find Out",
            content: `1. Circle the correct statements of proportion below.
            (i) 4 : 7 :: 12 : 21 (ii) 8 : 3 :: 24 : 6
            (iii) 7 : 12 :: 12 : 7 (iv) 21 : 6 :: 35 : 10
            (v) 12 : 18 :: 28 : 12 (vi) 24 : 8 :: 9 : 3

            2. Write 3 ratios proportional to 4 : 9.
            _____ : _____   _____ : _____   _____ : _____

            3. Write the missing numbers for the given ratios that are proportional to 18 : 24.
            3 : _____   12 : _____   20 : _____   27 : _____

            4. Look at the given rectangles. Which rectangles are similar to each other? You can verify this by measuring their width and height using a scale and comparing their ratios.

            5. Look at the rectangle below. Can you draw a smaller rectangle and a larger rectangle in your notebook with the same ratio of width to height? Compare your rectangles with your classmates' drawings. Are they all similar? If they are different from your drawings, why do you think that is? Are they incorrect?

            6. The figure below shows a small part of a long brick wall with a pattern made of colored bricks. This pattern continues in every part of the wall. What is the ratio of brown bricks to colored bricks? Try to express this ratio in its simplest form.

            7. Let's draw some human figures. Measure the body parts of your friend, like the length of their head, arms, and legs, and write the ratios given below.
            Head : Torso
            Torso : Arm
            Torso : Leg
            Torso : ..........
            Draw a figure with head, torso, arms, and legs according to the above ratios.
            Does the figure appear more realistic when the ratios are proportional? Why or why not?

            Note for Teachers — In all these activities, encourage students to reason why the figures are proportional.`,
            images: [
              "Rectangles for comparison",
              "Rectangle for scaling",
              "Brick wall pattern",
              "Human figure proportions",
            ],
          },
          {
            title: "Trairashika — The Rule of Three",
            content: `Example 8 — In a school with 120 students, the cook prepares 15 kg of rice for the midday meal. One day, due to rain, only 80 students were present in the school. How many kilograms of rice should the cook prepare so that no food is wasted?

            The ratio of the number of students to the quantity of rice should be proportional.

            Therefore, 120 : 15 :: 80 : ?

            What is the factor of change in the first term?
            This can be found by dividing the first terms: 80/120 = 2/3.
            So, the number of students decreases by a factor of 2/3.
            Multiplying the rice quantity by the same factor, we get —
            15 × (2/3) = 10.

            Therefore, the cook should prepare 10 kg of rice that day.

            The above situation is a specific example of using proportional reasoning to find a solution to a problem. Four quantities are related proportionally, three of them are known, and we need to find the fourth unknown quantity.

            To solve such problems, we can write the two proportional ratios algebraically as follows —
            a : b :: c : d

            We know that for the two ratios to be proportional, term c must be a multiple of term a by some factor. Let the factor be f. Similarly, term d must be a multiple of term b by the same factor f. Therefore,
            c = f a ...(1)
            d = f b ...(2)

            From (1) and (2), we can say that f = c/a and f = d/b. Hence, c/a = d/b.
            Multiplying both sides by ab, we get
            ab × c/a = ab × d/b
            bc = ad, or ad = bc.

            Thus, when a : b :: c : d, then ad = bc. This is called cross-multiplication of the terms.

            Since ad = bc, we can write d = bc/a.

            If the cross-multiplication results in equal products, then the two ratios are proportional. This cross-multiplication can be used to find the fourth unknown quantity.

            In ancient India, Aryabhata (199 CE) and others called such proportionality problems 'Rule of Three' problems. In these, three numbers were given — Pramana (here indicating 'a'), Phala (here indicating 'b'), and Ichchha (here indicating 'c'). To find the Ichchha-phala (here indicating 'd'), Aryabhata says, "Multiply the Phala by the Ichchha and divide the resulting product by the Pramana."

            In other words, Aryabhata says,
            Pramana : Phala :: Ichchha : Ichchha-phala

            Therefore,
            Pramana × Ichchha-phala = Phala × Ichchha

            Thus,
            Ichchha-phala = (Phala × Ichchha) / Pramana

            Using the cross-multiplication method proposed by Aryabhata, ancient Indians solved complex problems related to proportionality.

            Example 9 — A car travels a distance of 90 kilometers in 150 minutes. If it continues at the same speed, how much distance will it travel in 4 hours?

            If it continues at the same speed, the ratio of time taken should be proportional to the ratio of distance traveled.

            150 : 90 :: 4 : ?

            Is this the correct way to set up the problem?

            No, because the number 150 is in minutes, but the number 4 is in hours. The second ratio should use the same unit for time as the first ratio. Since 4 hours equals 240 minutes, the correct form is —

            150 : 90 :: 240 : ?

            How can you find the distance traveled in 240 minutes?
            Discuss with your classmates and find the answer using different strategies.

            Note for Teachers — Instead of just giving a 'method' to solve the distance problem, encourage students to find the answer through various strategies. Students can use their understanding of equivalent fractions and equivalent ratios to obtain the answer.

            We can write the above proportion as —
            150 : 90 :: 240 : x
            By cross-multiplication, we get
            150 × x = 240 × 90
            x = (240 × 90) / 150 = 144

            Hence, the distance traveled by the car in 4 hours is 144 kilometers.

            Example 10 — A farmer in Himachal Pradesh sells a 200-gram tea packet for ₹200. A large farmer in Meghalaya sells 1 kilogram of tea for ₹800. Are the ratios of weight and price proportional in both places? Tell which tea is relatively more expensive (costly)?`,
            images: [],
          },
          {
            title: "Let's Find Out (Continued)",
            content: `The ratio of weight to price for Himachal tea is 200 : 200.
            What is the ratio of weight to price for Meghalaya tea? Is it 1 : 800?
            No, that would not be appropriate because we are considering weight in grams for Himachal. Therefore, after converting the weight of tea for Meghalaya into grams, the ratio of weight to price becomes 1000 : 800.

            To verify whether the given ratios are proportional, we need to check if they are the same in their simplest form.

            The ratio of weight to price for Himachal tea in simplest form is 1 : 1.
            The ratio of weight to price for Meghalaya tea in simplest form is 5 : 4.

            Therefore, these ratios are not proportional.

            Tell which of the two teas is more expensive? Why?

            Note for Teachers — Encourage the class to discuss which tea is more expensive. Ask students how they arrived at this conclusion and what the reasons could be for that tea being more expensive.

            To answer which tea is more expensive, we should compare the price of the same weight of tea in both places.

            What is the price of 1 kilogram of tea in Meghalaya? It is ₹800.
            In Himachal, if the price of 200 grams of tea is ₹200, what will be the price of 1 kilogram of tea? Let the price of 1 kilogram of tea be x rupees. 200 grams is 1/5 of 1 kilogram.
            Therefore, (1/5) × x = 200.
            Multiplying both sides by 5, we get
            (1/5) × x × 5 = 200 × 5
            x = 1000.

            Thus, the price of 1 kilogram of tea in Meghalaya is ₹800, and in Himachal, it is ₹1000. Therefore, the tea from Himachal is more expensive.

            Activity 1 — Choose a dish of your interest. Find all its ingredients and the required quantities to make it for your family. Suppose you are celebrating a festival and want to invite 15 guests. Find the quantity of ingredients needed to make the same dish for the guests.`,
            images: [],
          },
          {
            title: "Let's Find Out",
            content: `1. The Earth travels approximately 940 million kilometers around the Sun in 1 year. How many kilometers will it travel in one week?

            2. A mason is building a house in the shape shown in the figure. He needs to construct outer and inner walls that separate the two rooms. He needs approximately 1450 bricks to build a 10-foot wall. How many bricks will he need in total to build the house? Assume all walls have the same height and thickness.

            3. Puneet's father reaches Kanpur from Lucknow in 2 hours by driving a motorcycle at a speed of 50 kilometers per hour. If he drives the motorcycle at a speed of 75 kilometers per hour, how much time will he take to reach Kanpur? Can we represent this problem as a proportion?

            Will Puneet's father take more time or less time to reach Kanpur? Pay attention to this point. Although this problem seems similar to the previous ones, it cannot be solved using the Rule of Three.

            As the speed increases, the travel time will decrease. Therefore, this problem cannot be represented as 50 : 2 :: 75 : ?

            Activity 2 — Go to the market and collect information about the prices of different sizes of the same shampoo, such as pouch, small bottle, medium bottle, large bottle, and create a table as shown below. Find out whether the volume of shampoo is proportional to its price.`,
            tableData: {
              headers: ["Container", "Volume", "Price"],
              rows: [
                ["Pouch", "6 ml", "₹2"],
                ["Small Bottle", "180 ml", "₹154"],
                ["Medium Bottle", "340 ml", "₹276"],
                ["Large Bottle", "1000 ml", "₹540"],
              ],
            },
            content: `Let's compare the ratios from this sample table.

            The ratio of the volumes of the shampoo pouch and small bottle is 6 : 180. The ratio of their prices is 2 : 154. Are these ratios proportional?

            In your opinion, why are the ratios of prices and volumes not proportional?

            Discuss the profit and loss for different bottle sizes for the company and the customers. What suggestions would you give to the customer and the company to reduce the ecological footprint? Does the same apply to other products?

            Create a similar table for other products available in the market that have different prices for different measures, such as rice or flour.

            Observe products whose prices are proportional to their different measures. Discuss the proportionality of measures and their prices for the same product in class.

            Note for Teachers — Assign a project to the students. Start this project by dividing the class into groups. Each group will collect the prices of different measures of a single product from a shop. For example, they should note the price of 500 grams of rice, 1 kilogram of rice, and 10 kilograms of rice. Students should create a table of measures and prices and present it in front of the class. Also, students should discuss whether the prices are proportional or not, and why.`,
            images: ["House plan for brick calculation"],
          },
          {
            title: "7.5 Share, But Not Equally!",
            content: `Activity 3 — Make a pair. Take 12 countable objects or counters. These could be coins, seeds, or pebbles. Now, you two share them in different ways.

            If you share them equally, what will be the ratio of the number of countable objects available to each of you?
            Each of you will get 6 counters. Hence, the ratio will be 6 : 6 or in simplest form 1 : 1.

            Let's not share equally.
            If your partner gets 5 counters, how many counters will you get? What will be the ratio of the counters you get? The ratio of your partner's counters to yours is 5 : 7.

            Now, if you both want to share the counters in the ratio 3 : 1, how many counters will each of you get?

            Share the counters in different ways and see which pair is in the ratio 3 : 1. One method of distributing the counters in the ratio 3 : 1 is as follows —
            1. Your partner takes 3 counters, and you take 1 counter. Then 8 counters remain.
            2. Your partner takes another 3 counters, and you take another 1 counter. Then 4 counters remain.
            3. Your partner takes another 3 counters, and you take 1 counter. Then no counters remain.

            Thus, your partner received a total of 9 counters, and you received 3 counters.

            When we share 12 counters between two people in the ratio 3 : 1, the first person gets 9 counters, and the second person gets 3 counters.

            Now, if you want to share 42 counters between two people in the ratio 4 : 3, how will you share them?

            Using the above process would take more time. There is a simpler method available for dividing a 'whole into parts' in a specified ratio.

            You need to divide 42 into groups such that your partner gets 4 groups and you get 3 groups.

            What is the size of each group?
            If your partner gets 4 groups and you get 3 groups, then the total number of groups is 7. Hence, the size of each group will be 42 ÷ 7 = 6.

            When you share 42 counters in the ratio 4 : 3, then by multiplying the number of groups by the size of each group, your partner gets 24 counters, and you get 18 counters.

            In general, when we want to divide a quantity, say x, in the ratio m : n, we can do the following —
            1. We need to divide x into groups so that it can be split into two parts such that the first part has m groups and the second part has n groups.
            2. But what is the size of each group? It can be found by dividing x by the number of groups. The number of groups is m + n. Hence, the size of each group is x/(m + n).
            3. Therefore, the first part will have m × x/(m + n) objects, and the second part will have n × x/(m + n) objects.

            Thus, if we want to divide a quantity x in the ratio m : n, its parts will be m × x/(m + n) and n × x/(m + n). We can see that m × x/(m + n) : n × x/(m + n) :: m : n.

            Example 11 — Prashanti and Bhuvan started a stationery business near their school. Prashanti invested ₹75,000, and Bhuvan invested ₹25,000. At the end of the first month, they made a profit of ₹4,000. They decided to share the profit in the same ratio as their investments. What is the profit share of each person?

            The ratio of their investments is 75,000 : 25,000.
            Converting this ratio to its simplest form, we get 3 : 1.
            3 + 1 = 4, and dividing the profit of ₹4,000 by 4 gives ₹1,000.
            Prashanti's share is 3 × 1000, and Bhuvan's share is 1 × 1000.
            Therefore, Prashanti received a profit of ₹3,000, and Bhuvan received ₹1,000.

            Example 12 — In a 40 kg mixture, the ratio of sand to cement is 3 : 1. How much more cement should be added to the mixture to make the ratio of sand to cement 5 : 2?

            Let's find the quantity of sand and cement in the original mixture. The ratio is 3 : 1, and the total weight is 40 kg.
            Therefore, the weight of sand = (3/(3+1)) × 40 = 30 kg.
            The weight of cement = (1/(3+1)) × 40 = 10 kg.

            The weight of sand remains 30 kg in the new mixture as well, but now the new ratio of sand to cement is 5 : 2. The question is — 5 : 2 :: 30 : ?
            If the ratio is 5 : 2, then the second term will be (2/5) times the first term. Since the new ratio is 5 : 2, the second term should also be (2/5) times 30.
            (2/5) × 30 = 12.
            If the ratio of sand to cement is 5 : 2, the new mixture should have 12 kg of cement. The mixture already has 10 kg of cement. We should add 2 kg more cement to the original mixture.`,
            images: ["Diagram showing division of 42 in ratio 4:3"],
          },
          {
            title: "Unit Conversions",
            content: `Sometimes, to compare ratios, we need to convert from one system to another. Some unit conversions are given here for your reference.

            Length
            1 meter = 3.281 feet

            Area
            1 square meter = 10.764 square feet
            1 acre = 43,560 square feet
            1 hectare = 10,000 square meters
            1 hectare = 2.471 acres

            Volume
            1 milliliter = 1 cubic centimeter
            1 liter = 1000 milliliters or 1000 cubic centimeters

            Temperature Conversion between Fahrenheit and Celsius
            0° Celsius = 32° Fahrenheit, and
            Fahrenheit = (9/5) × Celsius + 32, or Celsius = (5/9) × (Fahrenheit – 32)
            For example, 25° Celsius is 77° Fahrenheit.`,
            images: [],
          },
          {
            title: "Let's Find Out",
            content: `1. Anagh prepares fruit juice by mixing 600 ml of orange juice with 900 ml of apple juice. Write the ratio of orange juice to apple juice in its simplest form.

            2. Last year, we hired 3 buses for an educational tour. There were a total of 162 students and teachers on that tour. All seats in the buses were full. This year, we have 204 students. How many buses will we need? Will all buses be full?

            3. The area of Delhi is 1484 square kilometers, and the area of Mumbai is 550 square kilometers. The population of Delhi is approximately 3 crore, and that of Mumbai is 2 crore. Which city is more densely populated? How did you find out?

            4. The ratio of the neck length to the rest of the body length of a crane with height 155 cm is 4 : 6. If the ratio of your neck length to the rest of your body length were the same, how long would your neck be?

            5. Let's solve an ancient problem from the Lilavati text. In ancient times, weight was measured in a unit called 'Pala', and the currency unit was 'Nishka'. "If 2 1/2 Pala of saffron costs 3 Nishka, then, O wise merchant! Tell me quickly, how much saffron can be sold for 9 Nishka?"

            6. Herman is a girl and her age is 1 year. Herman's elder brother's age is 5 years. What will be Herman's age when the ratio of Herman's age to her brother's age is 1 : 2?

            7. The mass of equal volumes of gold and water are in the ratio 37 : 2. If the mass of 1 liter of water is 1 kilogram, what will be the mass of 1 liter of gold?

            8. Using 10 tons of cow dung manure per acre is considered a good agricultural practice. A farmer plans to grow tomatoes on a plot of land measuring 200 feet in length and 500 feet in width. How much cow dung manure will he need? (Please see the unit conversion section described earlier in this chapter.)

            9. A tap takes 15 seconds to fill a mug. The volume of the mug is 500 milliliters. If the capacity of a bucket is 10 liters, how long will the same tap take to fill the bucket?

            10. The price of one acre of land is ₹15,00,000. What will be the price of a 2400 square foot plot of the same land?

            11. A tractor can plow a field faster than a pair of bullocks. A farmer wants to plow his 20-acre field. A pair of bullocks takes 6 hours to plow one acre. If the farmer uses the pair of bullocks to plow the field, how much time will it take?

            12. A ₹10 coin is made of 'Cupro-Nickel', an alloy of copper and nickel. This alloy is obtained by mixing copper and nickel in the ratio 3 : 1. The mass of the coin is 7.74 grams. If the price of copper is ₹906 per kilogram and the price of nickel is ₹1,341 per kilogram, what is the value of these metals in a ₹10 coin?`,
          },
        ],
        summary: [
          "A ratio in the form a : b indicates that for every 'a' units of the first quantity, there are 'b' units of the second quantity. 'a' and 'b' are the terms of the ratio.",
          "Two ratios — a : b and c : d — are proportional (written as a : b :: c : d) if their terms change by the same factor, i.e., ad = bc.",
          "If x is divided into two parts in the ratio m : n, then the first part is m × x/(m + n) and the second part is n × x/(m + n).",
        ],
      },
    },
  ],
};

export default mathematics;
