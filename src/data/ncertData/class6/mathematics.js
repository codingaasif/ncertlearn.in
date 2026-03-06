// mathematics.js

const mathematics = {
  subjectName: "Mathematics",
      chapters: [
        {
          id: 1,
          title: "Patterns in Mathematics",
          content: {
            introduction:
              "Mathematics is the discovery of patterns and the explanation of why these patterns exist. Patterns are commonly found all around us—in nature, in our homes and schools, and in the movement of the sun, moon, and stars. We see these patterns from shopping to cooking, from throwing a ball to playing games, and so on. Additionally, they help us understand weather cycles and use technology. Discovering and understanding patterns can be enjoyable and creative work. This is why mathematicians view mathematics as both an art and a science.",

            sections: [
              {
                title: "1.1 What is Mathematics?",
                content:
                  "Mathematics is the discovery of patterns and the explanation of why these patterns exist. Patterns are commonly found all around us—in nature, in our homes and schools, and in the movement of the sun, moon, and stars. We see these patterns from shopping to cooking, from throwing a ball to playing games, and so on. Additionally, they help us understand weather cycles and use technology. It's worth noting that the goal of mathematics is not just to find out which patterns exist, but also to find explanations for why they exist. Such explanations can often be used in applications outside the contexts where they were discovered, helping to advance humanity.",
                examples: [
                  "Understanding the patterns in the movement of stars, planets, and their satellites led humans to develop the theory of gravitation. As a result, we have been able to launch our own satellites and send rockets to the moon and Mars.",
                  "Understanding patterns in genomes has helped us detect and treat diseases.",
                ],
              },
              {
                title: "1.2 Patterns in Numbers",
                content:
                  "Among the most fundamental patterns seen in mathematics are number patterns, especially patterns in whole numbers—0, 1, 2, 3, 4, ... The branch of mathematics that studies patterns in whole numbers is called Number Theory. Number sequences are among the most fundamental and captivating types of patterns that mathematicians study.",
                examples: [
                  "All '1's sequence: 1, 1, 1, 1, 1, 1, 1, ....",
                  "Counting numbers: 1, 2, 3, 4, 5, 6, 7, ....",
                  "Odd numbers: 1, 3, 5, 7, 9, 11, 13, ....",
                  "Even numbers: 2, 4, 6, 8, 10, 12, 14, ....",
                  "Triangular numbers: 1, 3, 6, 10, 15, 21, 28, ....",
                  "Square numbers: 1, 4, 9, 16, 25, 36, 49, ....",
                  "Cube numbers: 1, 8, 27, 64, 125, 216, ....",
                  "Fibonacci numbers: 1, 2, 3, 5, 8, 13, 21, ....",
                  "Powers of 2: 1, 2, 4, 8, 16, 32, 64, ....",
                  "Powers of 3: 1, 3, 9, 27, 81, 243, 729, ....",
                ],
              },
              {
                title: "1.3 Visualizing Number Sequences",
                content:
                  "Many number sequences can be visualized using pictures. Visualizing mathematical objects through pictures or diagrams can be a very useful way to understand mathematical patterns and concepts.",
                examples: [
                  "Triangular numbers: Points arranged in equilateral triangles",
                  "Square numbers: Points arranged in squares",
                  "Cube numbers: Points arranged in cubes (3D representation)",
                ],
              },
              {
                title: "1.4 Relationships Between Number Sequences",
                content:
                  "Sometimes number sequences can be related to each other in surprising ways. For example, when we start adding odd numbers, we get square numbers.",
                examples: [
                  "1 = 1",
                  "1 + 3 = 4",
                  "1 + 3 + 5 = 9",
                  "1 + 3 + 5 + 7 = 16",
                  "1 + 3 + 5 + 7 + 9 = 25",
                  "1 + 3 + 5 + 7 + 9 + 11 = 36",
                ],
                formula: "The sum of the first n odd numbers equals n²",
              },
              {
                title: "1.5 Patterns in Shapes",
                content:
                  "Other important and fundamental patterns found in mathematics are patterns in shapes. These shapes can be in one, two, or three dimensions (1D, 2D, 3D), or even in higher dimensions. The branch of mathematics that studies patterns in shapes is called Geometry.",
                examples: [
                  "Regular Polygons: Triangle (3 sides), Square (4 sides), Pentagon (5 sides), Hexagon (6 sides), Heptagon (7 sides), Octagon (8 sides), Nonagon (9 sides), Decagon (10 sides)",
                  "Complete Graphs: 2 points with 1 line, 3 points with 3 lines, 4 points with 6 lines, 5 points with 10 lines, 6 points with 15 lines",
                  "Stacked Squares: 1 square, 4 squares (2×2), 9 squares (3×3), 16 squares (4×4)",
                  "Stacked Triangles: 1 triangle, 4 triangles (2 rows), 9 triangles (3 rows), 16 triangles (4 rows)",
                ],
              },
              {
                title: "1.6 Relationship with Number Sequences",
                content:
                  "Often, shape sequences are related to number sequences in surprising ways. Such relationships can help in studying and understanding both the shape sequences and the related number sequences.",
                examples: [
                  "In regular polygons, the number of sides gives counting numbers: 3, 4, 5, 6, 7, 8, 9, 10, ...",
                  "In complete graphs, the number of lines gives triangular numbers: 1, 3, 6, 10, 15, ...",
                  "In stacked squares, the number of small squares gives square numbers: 1, 4, 9, 16, ...",
                  "In stacked triangles, the number of small triangles gives square numbers: 1, 4, 9, 16, ...",
                ],
              },
            ],

            exercises: [
              {
                type: "explore",
                questions: [
                  "Can you think of other examples where mathematics helps us in daily life?",
                  "How has mathematics helped propel humanity forward? (Consider scientific experiments; running economy and democracy; constructing buildings; making TVs, mobile phones, computers, etc.)",
                  "Can you identify the pattern in each sequence from Table 1?",
                  "Rewrite each sequence with their next three numbers and explain the rule.",
                  "Why are 1, 3, 6, 10, 15, ... called triangular numbers?",
                  "Why are 1, 4, 9, 16, 25, ... called square numbers?",
                  "Why are 1, 8, 27, 64, 125, ... called cube numbers?",
                  "36 is both a triangular number and a square number. Can you draw pictures to illustrate this?",
                  "What would you call the sequence of hexagonal numbers? Draw them and find the next number.",
                  "Can you create a pictorial representation of the 'powers of 2' sequence?",
                  "What is the sum of the first 10 odd numbers?",
                  "What is the sum of the first 100 odd numbers?",
                  "Find the value of: 1 + 2 + 3 + ... + 99 + 100 + 99 + ... + 3 + 2 + 1",
                  "What happens when you add consecutive triangular numbers? (1+3, 3+6, 6+10, 10+15, ...)",
                  "What happens when you add powers of 2 starting from 1 and then add 1 to each sum?",
                  "Find the number of sides in regular polygons. What number sequence do you get?",
                  "Count the number of lines in complete graphs. What number sequence do you get?",
                  "How many small squares are there in stacked squares sequence? What number sequence?",
                  "How many small triangles are there in stacked triangles sequence? What number sequence?",
                  "In Koch snowflake sequence, how many line segments are there at each stage? (3, 12, 48, ...)",
                ],
                answers: [
                  "Examples: weather forecasting, GPS navigation, traffic light timing, cooking measurements, sports scoring, etc.",
                  "Mathematics helped in space exploration, medical imaging, computer development, architecture, etc.",
                  "Each sequence follows a specific rule like adding 1, adding 2, multiplying by 2, etc.",
                  "Check your notebook for the rules you discovered.",
                  "Because they can be arranged as dots in the shape of equilateral triangles.",
                  "Because they can be arranged as dots in the shape of squares.",
                  "Because they can be arranged as dots in the shape of cubes.",
                  "Draw a triangle with 36 dots and a square with 36 dots (6×6).",
                  "Hexagonal numbers: 1, 7, 19, 37, 61, ... Next number would be 61.",
                  "Powers of 2 can be shown as doubling dots or squares.",
                  "Sum of first 10 odd numbers = 10² = 100",
                  "Sum of first 100 odd numbers = 100² = 10,000",
                  "The value equals 100² = 10,000",
                  "You get square numbers: 4, 9, 16, 25, ...",
                  "You get one less than powers of 2: 1, 3, 7, 15, 31, ...",
                  "Counting numbers: 3, 4, 5, 6, 7, 8, 9, 10, ...",
                  "Triangular numbers: 1, 3, 6, 10, 15, ...",
                  "Square numbers: 1, 4, 9, 16, 25, ...",
                  "Square numbers: 1, 4, 9, 16, 25, ...",
                  "Three times powers of 4: 3, 12, 48, 192, ...",
                ],
              },
            ],

            summary:
              "Mathematics can be seen as the discovery of patterns and the explanation of why those patterns exist. Among the most fundamental patterns found in mathematics are number sequences. Some important examples include counting numbers, odd numbers, even numbers, square numbers, triangular numbers, cube numbers, Fibonacci numbers, and powers of 2. Sometimes number sequences can be related to each other in attractive and remarkable ways. For example, adding the sequence of odd numbers starting from 1 gives square numbers. Visualizing number sequences using pictures can help in understanding the sequences and the relationships between them. Shape sequences are another fundamental type of pattern in mathematics. Some important examples include regular polygons, complete graphs, stacked triangles and squares, and Koch snowflake iterations. Shape sequences also display many interesting relationships with number sequences.",
          },
        },
        {
          id: 2,
          title: "Lines and Angles",
          content: {
            introduction:
              "In this chapter, we will learn about some basic concepts of geometry including points, lines, rays, line segments, and angles. These ideas are fundamental to 'plane geometry' and will help in understanding more advanced topics in geometry, such as constructing different shapes and analyzing them.",

            sections: [
              {
                title: "2.1 Point",
                content:
                  "Mark a dot on paper with the sharp tip of a pencil. The sharper the tip, the finer the dot. This fine mark introduces you to the concept of a point. A point determines an exact location, but it has no length, breadth, or height. Some models of a point are: the tip of a compass, the sharp end of a pencil, the pointed end of a needle. If you mark three points on paper, you will need to distinguish between them. For this, the three points can be denoted by capital English letters, such as Z, P, and T. These points are read as point Z, point P, and point T. Undoubtedly, these points determine exact locations and should be imagined as being extremely small, almost invisible.",
                examples: [
                  "Tip of a compass",
                  "Sharp end of a pencil",
                  "Pointed end of a needle",
                ],
              },
              {
                title: "2.2 Line Segment",
                content:
                  "Fold a piece of paper and then open it. Do you see a crease mark on the paper? This crease gives an idea of a line segment. It has two end points A and B. Mark two points A and B on paper. Try to join these two points by all possible paths (Figure 2.1). Which is the shortest path from A to B? This shortest path joining A and B (including points A and B) is called a line segment. It is denoted by AB or BA. Points A and B are the end points of this line segment AB.",
                examples: [
                  "The crease on a folded paper represents a line segment",
                  "The shortest distance between two points is a line segment",
                ],
              },
              {
                title: "2.3 Line",
                content:
                  "Imagine that the line segment from A to B (i.e., AB) is extended indefinitely in one direction beyond A and in the other direction beyond B (see Figure 2.2). This is a model of a line. Do you think you can draw an entire line? No? (Why?) The line passing through two points A and B is denoted by AB. It extends indefinitely in both directions. Sometimes a line is also denoted by letters like l or m. Note that any two points determine a unique line that passes through both points.",
                examples: [
                  "A line extends infinitely in both directions",
                  "Any two points determine a unique line",
                ],
              },
              {
                title: "2.4 Ray",
                content:
                  "A ray is a part of a line that starts from a point (called the initial point or origin of the ray) and extends infinitely in one direction. Some models of a ray are: a beam of light from a lighthouse, a beam of light from a torch, a ray of sunlight. Look at the given figure of a ray (Figure 2.3). Two points are marked on this ray. Point A is the initial point and another point P lies on the ray, then we denote this ray as AP.",
                examples: [
                  "Light from a lighthouse",
                  "Beam from a torch",
                  "Sun ray",
                ],
              },
              {
                title: "2.5 Angle",
                content:
                  "An angle is formed by two rays with a common initial point. In Figure 2.8, rays BD and BE form an angle with common initial point B. B is the vertex of the angle, and rays BD and BE are the arms of the angle. How can we name this angle? Using only the vertex, we can simply call it angle B. To be more specific, we can use a point on each arm along with the vertex. In this case, the angle can be called angle DBE or angle EBD. The word 'angle' can also be denoted by the symbol '∠', such as ∠DBE or ∠EBD. Remember that when writing an angle, the letter representing the vertex should be in the middle.",
                examples: [
                  "Angle formed by opening a book",
                  "Angle formed by compass arms",
                  "Angle formed by scissors blades",
                  "Angle in spectacles, purse, etc.",
                ],
              },
              {
                title: "2.6 Comparing Angles",
                content:
                  "Look at the animals with open mouths shown below. Can you see angles in them? If yes, mark the arms and vertex in each. Some mouths are open wider than others. You can understand that the more the jaws rotate, the larger the angle. Can you arrange the angles in these pictures from smallest to largest?",
                examples: [
                  "Comparing angles by superimposition",
                  "When two angles have the same vertex and their arms completely superimpose, they have equal measures",
                ],
              },
              {
                title: "2.7 Making Rotating Arms",
                content:
                  "Let's make 'rotating arms' using two paper straws and a clip by following these steps: 1. Take two paper straws and a clip. 2. Insert the straws into the arms of the clip. 3. Your rotating arm is ready. Make several rotating arms with different angles between the clip arms. After superimposition, arrange the angles in order from smallest to largest.",
                examples: ["Activity with paper straws and clip"],
              },
              {
                title: "2.8 Special Types of Angles",
                content:
                  "Let's look at Vidya's book again. Observe her opening the book cover in different positions. When she needs to write while holding the book, she flips the cover completely. When she needs to open the book on a table, she gives a half-turn which lies on a straight line. Observe the angle formed between the arms in this position. Such an angle is called a Straight Angle (Figure 2.11).",
                examples: [
                  "Straight Angle: 180°",
                  "Right Angle: 90° (half of a straight angle)",
                  "Perpendicular lines: Lines that meet at right angles",
                ],
              },
              {
                title: "Classification of Angles",
                content:
                  "Angles are classified into three groups as shown below. All right angles are in the second group. What common characteristic do the other two groups have? Angles in the first group are all less than a right angle. In other words, they are less than one-fourth of a complete rotation. Such angles are called Acute Angles. Angles in the third group are greater than a right angle but less than a straight angle. The rotation is more than one-fourth but less than half of a complete rotation. Such angles are called Obtuse Angles.",
                examples: [
                  "Acute Angle: less than 90°",
                  "Right Angle: exactly 90°",
                  "Obtuse Angle: greater than 90° but less than 180°",
                  "Reflex Angle: greater than 180° but less than 360°",
                ],
              },
              {
                title: "2.9 Measuring Angles",
                content:
                  "We have seen how to compare two angles. But can we actually quantify how big an angle is using a number, without comparing it to another angle? We saw how a circle can help us compare different angles. Perhaps a circle can be used to determine measurements of angles? To determine exact measurements of angles, mathematicians came up with an idea. They divided the angle formed at the center of a circle into 360 equal angles or parts. The measure of each of these equal unit parts is 1 degree, written as 1°. This unit is used to measure any angle. The measure of an angle is the number of 1° units it contains.",
                examples: [
                  "A full rotation = 360°",
                  "A straight angle = 180°",
                  "A right angle = 90°",
                ],
              },
              {
                title: "A Pinch of History",
                content:
                  "Why is a full rotation divided into 360°? We don't fully know the reason. The history of dividing the circle into 360 parts takes us back to ancient times. The Rigveda, a book of humanity thousands of years old, mentions a wheel with 360 spokes (Hymn 1.164.48). Many ancient calendars, about three thousand years old, were used in India, Western Asia, Babylon, and Egypt. These calendars had 360 days in a year. Additionally, Babylonian mathematicians often used divisions of 60 and 360 due to their use of sexagesimal numbers. They counted using base 60. The most important practical reason mathematicians have used 360 for years might be that 360 is the smallest number divisible by all numbers from 1 to 10 except 7. So one can divide a circle into 1, 2, 3, 4, 5, 6, 8, 9, or 10 equal parts, and each part will still be a whole number! Note that 360 is also divisible by 12 (the number of months in a year) and 24 (the number of hours in a day). All these facts make 360 extremely useful.",
              },
              {
                title: "Angle Bisector",
                content:
                  "At each step, we folded in half. The process of obtaining half of a given angle is called 'bisecting the angle'. The line that bisects a given angle is called the angle bisector. Identify the angle bisectors in the protractor you made yourself. Try making different angles by folding paper using the concept of angle bisector.",
                examples: [
                  "Folding paper to create 45°, 22.5°, 67.5°, 112.5°, 135°, 157.5° angles",
                ],
              },
              {
                title: "2.10 Constructing Angles",
                content:
                  "Vidya wants to construct a 30° angle using a protractor and name it ∠TIN. In ∠TIN, I will be the vertex, and IT and IN will be the arms of the angle. Taking arm IN as the base, the other arm IT should have a turn of 30°.",
                examples: [
                  "Step 1: Draw base IN",
                  "Step 2: Place protractor center at I with IN aligned with 0° line",
                  "Step 3: Mark point T at 30°",
                  "Step 4: Join I to T using ruler",
                ],
              },
              {
                title: "2.11 Types of Angles and Their Measures",
                content:
                  "We have read about different types of angles in this chapter. We saw that a straight angle is 180° and a right angle is 90°. How do we describe other types of angles—acute and obtuse—in terms of degrees?",
                examples: [
                  "Acute Angle: Angles smaller than a right angle, i.e., less than 90° and greater than 0°",
                  "Obtuse Angle: Angles greater than a right angle but smaller than a straight angle, i.e., greater than 90° and less than 180°",
                  "Reflex Angle: Angles greater than a straight angle but smaller than a full angle, i.e., greater than 180° and less than 360°",
                ],
              },
            ],

            exercises: [
              {
                type: "explore",
                questions: [
                  "Rihan marked a point on paper. How many lines can he draw passing through that point?",
                  "Sheetal marked two points on paper. How many distinct lines can she draw passing through both points?",
                  "In Figure 2.4, name the line segments. Which of the five marked points lie on only one line segment? Which points lie on any two line segments?",
                  "Name the rays in Figure 2.5. Is T the initial point of each ray?",
                  "Draw a rough figure and label suitably: a. OP and OQ meet at point O. b. XY and PQ intersect at point M. c. Points E and F lie on line l but point D does not lie on it. d. Point P lies on AB.",
                  "In Figure 2.6, name: a. Five points b. One line c. Four rays d. Five line segments",
                  "In Figure 2.7, OA is a ray. It starts from O and passes through point A. It also passes through point B. a. Can we name it OB? Why? b. Can we write OA as AO? Why or why not?",
                  "Can you find angles in the given figures? Draw the arms of any one angle and name the vertex.",
                  "Draw an angle marking arms ST and SR.",
                  "Explain why ∠APC can be written as ∠P?",
                  "Name the angles marked in the figure below.",
                  "Mark three points on paper such that they are not collinear. Label them A, B, and C. Draw all possible lines passing through pairs of these points. How many lines do you get? Name them. How many angles can you make using A, B, and C? Name them all and mark each with an arc as in Figure 2.9.",
                  "Mark four points on paper such that no three are collinear. Label them A, B, C, and D. Draw all possible lines passing through pairs of these points. How many lines do you get? Name them. How many angles can you name using A, B, C, and D? Write them and mark each with an arc as in Figure 2.9.",
                  "Fold a rectangular paper and draw a line along the fold. Name the angles formed between the fold and the sides of the paper and compare them. Make different angles by rotating the rectangular paper and compare them. Also tell which angle is the largest and which is the smallest.",
                  "In each case, tell which angle is larger and why: a. ∠AOB or ∠XOY b. ∠AOB or ∠XOB c. ∠XOB or ∠XOC",
                  "Which angle is larger—∠XOY or ∠AOB? Give reasons.",
                  "How many right angles are there in your classroom windows? Can you see more right angles in your classroom?",
                  "Join point A to other points on the grid with straight lines to get a straight angle. What are the different ways to do this?",
                  "Now join point A to other points on the grid with straight lines to get a right angle. What are the different ways to do this?",
                  "Make a slanting crease by folding paper. Now make another crease perpendicular to the previous slanting crease. a. How many right angles do you have? Give a logical explanation why these angles are exactly right angles. b. Describe how you folded so that someone who doesn't know this process can follow your procedure to make a right angle.",
                  "Identify acute, right, obtuse, and straight angles in the previous figures.",
                  "Draw some acute angles and obtuse angles in different orientations.",
                  "Do you know what the words 'acute' and 'obtuse' mean? Acute means sharp and obtuse means blunt. Why do you think these words were chosen?",
                  "Find how many acute angles are in the figures below. What will be the next figure and how many acute angles will it have? Do you see any pattern in the numbers?",
                  "Write the measures of the following angles: a. ∠KAL b. ∠WAL c. ∠TAK",
                  "List all possible angles shown in Figure 2.23. Have you found them all? Now estimate the measure of all angles. Then check the angle measures using a protractor. Record all your numbers (degree measures) in a table. See how close your estimates are to the actual measures.",
                  "Construct the following angles using a protractor: a. 110° b. 40° c. 75° d. 112° e. 134°",
                  "Construct an angle equal in measure to the angle given below. Write all steps used in constructing this angle.",
                  "In each grid below, join point A to other points on the grid with a straight line to get: a. An acute angle b. An obtuse angle. Mark the angles with arcs so that the desired angles can be identified. One has been done for you.",
                  "Find the measure of each angle using a protractor. Classify each angle as acute, obtuse, right, or reflex: a. ∠PTR b. ∠PTQ c. ∠PTW d. ∠WTP",
                  "In this figure, ∠TER = 80°. What will be the measure of ∠BET? What will be the measure of ∠SET?",
                  "Construct angles with the following degree measures: a. 140° b. 82° c. 195° d. 70° e. 35°",
                  "Estimate the measure of each angle and then measure with a protractor. Classify these angles as acute, obtuse, right, or reflex.",
                  "Draw a figure with three acute angles, one right angle, and two obtuse angles.",
                  "Draw the letter M such that the angles on both sides are 40° and the angle in the middle is 60°.",
                  "Draw the letter Y such that three angles of 150°, 60°, and 150° are formed.",
                  "The Ashoka Chakra has 24 spokes. What is the degree measure of the angle between two adjacent spokes? What will be the largest acute angle between two spokes?",
                  "Puzzle: I am an acute angle. If you double my measure, you still get an acute angle. If you triple my measure, you still get an acute angle. If you quadruple my measure, you still get an acute angle. But if you multiply my measure by five, you get an obtuse angle. What are the possible measures of my angle?",
                ],
                answers: [
                  "Infinite lines can pass through a single point",
                  "Exactly one line passes through two distinct points",
                  "Check figure for specific points",
                  "Rays: TA, TB, etc. T is the initial point for some rays",
                  "Draw accordingly",
                  "a. Points: A, B, C, D, E b. Line: AE c. Rays: OA, OB, OC, OD d. Segments: AB, BC, CD, DE, EA",
                  "a. Yes, because OB is the same ray extended b. No, because OA starts at O, while AO would start at A",
                  "Answers will vary based on observation",
                  "Draw accordingly",
                  "Because P is the vertex of the angle",
                  "Check figure for specific angles",
                  "3 lines: AB, BC, CA; 3 angles: ∠ABC, ∠BCA, ∠CAB",
                  "6 lines: AB, AC, AD, BC, BD, CD; 12 angles can be named",
                  "The folded line creates two pairs of equal angles",
                  "a. ∠XOY b. ∠XOB c. ∠XOC",
                  "∠XOY is larger",
                  "Answers will vary based on classroom observation",
                  "Join A to points in opposite direction to form 180°",
                  "Join A to points forming 90° angles",
                  "a. 4 right angles b. Fold such that creases are perpendicular",
                  "Identify based on angle measures",
                  "Draw accordingly",
                  "Acute = sharp, Obtuse = blunt - because acute angles look sharp, obtuse angles look blunt",
                  "Pattern of increasing acute angles",
                  "a. 30° b. Check figure c. Check figure",
                  "List all possible angles in the figure",
                  "Construct using protractor steps",
                  "Construct using protractor steps",
                  "Construct using grid points",
                  "Measure and classify using protractor",
                  "∠BET = 100°, ∠SET = 100°",
                  "Construct using protractor",
                  "Check with protractor",
                  "Draw accordingly",
                  "Draw accordingly",
                  "Draw accordingly",
                  "15° between adjacent spokes; largest acute angle would be less than 90°",
                  "Possible measures: 1° to 18° (since 5×18=90° which is right angle, so must be less than 18° to keep 5× acute, but 4×18=72° which is acute, so up to 18° works)",
                ],
              },
            ],

            activities: [
              "Paper folding to understand points, lines, and line segments",
              "Making rotating arms with straws and clip to understand angles",
              "Creating a paper protractor by folding",
              "Games: Angle guessing game with teams",
              "Finding angles in real-life objects: clock, door, swing, slanting boards, insects",
            ],

            summary: [
              "■ A point determines a location. It is denoted by a capital English letter.",
              "■ The shortest distance joining two points represents a line segment. The line segment joining points S and T is denoted by ST.",
              "■ Extending a line segment ST indefinitely in both directions gives a line. It is denoted by ST or sometimes by a small English letter like m.",
              "■ A ray is a part of a line that starts from a point D on the line and extends infinitely in one direction. It is denoted by DP, where P is another point on the ray.",
              "■ When two rays appear to emerge from a common initial point, an angle is formed. Two rays OP and OM form angle ∠POM (also called ∠MOP). Here O is the vertex of the angle and rays OP and OM are the arms of the angle.",
              "■ The amount of rotation or the turn required to bring one arm of the angle to the other around the vertex is the size of the angle.",
              "■ Angle sizes are measured in degrees. A full rotation or turn is considered 360 degrees, denoted by '360°'.",
              "■ The degree measure of an angle can be measured using a protractor.",
              "■ Angles can be straight angles (180°), right angles (90°), acute angles (greater than 0° and less than 90°), obtuse angles (greater than 90° and less than 180°), and reflex angles (greater than 180° and less than 360°).",
            ],
          },
        },
        // ncertContent.js - Add this as Chapter 3

        {
          id: 3,
          title: "Number Play",
          content: {
            introduction:
              "We use numbers in different contexts and different ways to organize our lives. We have used numbers for counting and to solve daily life problems related to numbers using basic operations like addition, subtraction, multiplication, and division. In this chapter, we will continue our journey by playing with numbers, observing numbers around us, noticing patterns, and using various operations on numbers in new ways. Think about different situations where we use numbers. Make a list of five different situations where we use numbers. Look at the list made by your classmates, share it, and discuss it.",

            sections: [
              {
                title: "3.1 Numbers Can Tell Us Something",
                content:
                  "What do numbers tell us? Some children are standing in a row in a garden. Each child speaks a number. What do you think these numbers mean? The children now rearrange themselves and each child speaks a number again based on their arrangement. Can you understand what these numbers represent? Hint: Do their heights have any contribution here? A child says '1' when only one child taller than them is standing next to them. A child says '2' when both children standing next to them are taller. A child says '0' when none of the children standing next to them are taller. Each child tells the number of neighbors around them who are taller.",
                examples: [
                  "Children standing in a row calling out numbers based on taller neighbors",
                  "A child says '1' when only one adjacent child is taller",
                  "A child says '2' when both adjacent children are taller",
                  "A child says '0' when no adjacent children are taller",
                ],
              },
              {
                title: "3.2 Supercells",
                content:
                  "Observe the numbers written in the table below. Why have some numbers been colored? Discuss. If a number in a cell is greater than the numbers in adjacent cells, it is colored. 626 is colored because it is greater than 577 and 345, while 200 is not colored because it is smaller than 577. The number 198 is colored because it has only one adjacent cell with the number 109, and 198 is greater than 109.",
                examples: [
                  "A cell is a 'Supercell' if its number is greater than all its adjacent cells",
                  "Adjacent cells are those immediately left, right, above, and below",
                  "626 is a supercell because it's greater than 577 and 345",
                  "198 is a supercell because it's greater than its only neighbor 109",
                ],
              },
              {
                title: "3.3 Number Patterns on the Number Line",
                content:
                  "We are now familiar with the number line. Let's see if we can place some numbers at their appropriate positions on the number line. Here are the numbers: 2180, 2754, 1500, 3600, 9950, 9590, 1050, 3050, 5030, 5300, and 8400.",
                examples: [
                  "Place numbers on the number line at appropriate positions",
                  "Identify the smallest and largest numbers in sequences",
                ],
              },
              {
                title: "3.4 Playing with Digits",
                content:
                  "We start writing numbers from 1, 2, 3, ... There are 9 single-digit numbers. Find out how many 2-digit, 3-digit, 4-digit, and 5-digit numbers there are in total.",
                examples: [
                  "1-digit numbers: 1 to 9 → 9 numbers",
                  "2-digit numbers: 10 to 99 → 90 numbers",
                  "3-digit numbers: 100 to 999 → 900 numbers",
                  "4-digit numbers: 1000 to 9999 → 9000 numbers",
                  "5-digit numbers: 10000 to 99999 → 90000 numbers",
                ],
              },
              {
                title: "Sum of Digits of Numbers",
                content:
                  "When Komal adds the digits of some numbers, she finds that all of them have the same sum. For example, the sum of digits of 68 is the same as that of 176 or 545. 68 → 6+8=14, 176 → 1+7+6=14, 545 → 5+4+5=14.",
                examples: [
                  "68: 6+8 = 14",
                  "176: 1+7+6 = 14",
                  "545: 5+4+5 = 14",
                ],
              },
              {
                title: "Digit Detective",
                content:
                  "After writing numbers from 1 to 100, Dinesh wonders how many times he wrote the digit '7'. How many times will the digit '7' appear in numbers from 1 to 100? How many times from 1 to 1000?",
                examples: [
                  "1 to 100: digit '7' appears 20 times",
                  "1 to 1000: digit '7' appears 300 times",
                ],
              },
              {
                title: "3.5 Attractive Palindromic Patterns",
                content:
                  "What pattern do you see in these numbers: 66, 848, 575, 797, 1111. These numbers read the same from left to right and from right to left. Such numbers are called palindromes or palindromic numbers.",
                examples: [
                  "66 reads the same forwards and backwards",
                  "848 reads the same forwards and backwards",
                  "575 reads the same forwards and backwards",
                  "797 reads the same forwards and backwards",
                  "1111 reads the same forwards and backwards",
                ],
              },
              {
                title: "Palindromic Numbers Using Digits 1, 2, 3",
                content:
                  "Some palindromic numbers made using digits 1, 2, 3 are 121, 313, and 222. Write all three-digit palindromic numbers that can be formed using these digits.",
                examples: ["111, 121, 131, 212, 222, 232, 313, 323, 333"],
              },
              {
                title: "Reverse and Add Palindromes",
                content:
                  "Now look at these sums and find out what's happening. Follow these steps: Start with a two-digit number. Reverse this number and add it to the original number. If the result is a palindrome, stop. Otherwise, add the result to its reverse and repeat these steps. Try this process with some other numbers as well. Some numbers may require repeating this process many times to get a palindrome.",
                examples: [
                  "Example: 68 + 86 = 154, 154 + 451 = 605, 605 + 506 = 1111 (palindrome)",
                  "Example: 79 + 97 = 176, 176 + 671 = 847, 847 + 748 = 1595, 1595 + 5951 = 7546, 7546 + 6457 = 14003, 14003 + 30041 = 44044 (palindrome)",
                ],
              },
              {
                title: "3.6 Kaprekar's Magic Number",
                content:
                  "D.R. Kaprekar was a mathematics teacher at a government school in Devlali, Maharashtra. He loved playing with numbers. He discovered many fascinating patterns in numbers that were not known before. In 1949, while playing with 4-digit numbers, he discovered a magical fact by chance.",
                examples: [
                  "Step 1: Take any 4-digit number (with at least two different digits)",
                  "Step 2: Arrange digits in descending order to get the largest number (A)",
                  "Step 3: Arrange digits in ascending order to get the smallest number (B)",
                  "Step 4: Subtract B from A to get C",
                  "Step 5: Repeat steps 2-4 with C",
                  "You will always reach the magic number 6174 (Kaprekar constant)",
                ],
              },
              {
                title: "3.7 Numbers in Clocks and Calendars",
                content:
                  "In a regular 12-hour clock, some times show patterns. For example: 4:44, 10:10, and 12:21. Try to find all such possible times in a 12-hour clock. Manish's birthday is on 20/12/2012, where the digits '2', '0', '1', and '2' repeat in the same order. Find some other dates like this from the past. His sister Meghna's birthday is on 11/02/2011, which reads the same from left to right and right to left. Find all such possible dates from the past.",
                examples: [
                  "Clock palindromes: 12:21, 1:01, 2:02, 3:03, 4:04, 5:05, 6:06, 7:07, 8:08, 9:09, 10:01",
                  "Date palindrome: 11/02/2011 reads same forwards and backwards",
                ],
              },
              {
                title: "3.8 Mental Math",
                content:
                  "Observe the figure below. What do you think about the drawn lines and numbers? By adding the numbers in the middle column in different ways, we can get the numbers in the side columns (1500 + 1500 + 400 = 3400). The numbers in the middle column can be used multiple times as needed to achieve the desired sum. Show the numbers from the middle column and side columns with arrows to achieve the desired sum.",
                examples: [
                  "38,800 = 25,000 + 400 × 2 + 13,000",
                  "3400 = 1500 + 1500 + 400",
                ],
              },
              {
                title: "Addition and Subtraction",
                content:
                  "Using the numbers given in the box below, we are allowed to add and subtract to get the desired number. An example is given for clarification. Example of adding two 5-digit numbers to get another 5-digit number: 12,350 + 24,545 = 36,895. Example of subtracting two 5-digit numbers to get a 5-digit number: 48,952 - 24,547 = 24,405.",
                examples: [
                  "12,350 + 24,545 = 36,895",
                  "48,952 - 24,547 = 24,405",
                ],
              },
              {
                title: "3.9 Playing with Number Patterns",
                content:
                  "Below, some numbers are arranged in patterns. Find the sum of numbers in each figure below. Should we add them one by one, or can we use a quicker method? Share and discuss in class the different methods you used to solve these questions.",
                examples: [
                  "Grid patterns with repeated numbers",
                  "Finding sums using multiplication instead of repeated addition",
                ],
              },
              {
                title: "3.10 An Unsolved Mystery - The Collatz Conjecture",
                content:
                  "Look at the sequences given below. The same rule applies to all sequences: Start with any number; if the number is even, halve it; if the number is odd, multiply it by 3 and add 1. Repeat this process. Notice that all four sequences on page 68 eventually reach 1. In 1937, German mathematician Lothar Collatz conjectured that every such sequence will always reach 1, no matter which whole number we start with. Many mathematicians are still working on this today. It remains an unsolved problem whether the Collatz conjecture is true. The Collatz conjecture is one of the most famous unsolved problems in mathematics.",
                examples: [
                  "Starting from 12: 12, 6, 3, 10, 5, 16, 8, 4, 2, 1",
                  "Starting from 17: 17, 52, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1",
                  "Starting from 21: 21, 64, 32, 16, 8, 4, 2, 1",
                  "Starting from 22: 22, 11, 34, 17, 52, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1",
                ],
              },
              {
                title: "3.11 Simple Estimation",
                content:
                  "Sometimes we don't know the exact number of things and don't need to; an estimate is sufficient for the purpose. For example, your school principal knows the exact number of students enrolled in your school, but you probably only know the approximate number. How many students are there in your school? About 150? 400? 1000? Promita's class has 32 children. The other two sections of her class have 29 and 35 children. So she estimated that there are about 100 children in her class. Her school also has classes 7-10 along with class 6, each with 3 sections. She assumed each class has the same number of children and estimated that the approximate number of students in her school is about 500.",
                examples: [
                  "Estimating number of students in school",
                  "Estimating distances",
                  "Estimating time",
                  "Estimating costs",
                ],
              },
              {
                title: "3.12 Games and Winning Strategies",
                content:
                  "Numbers can also be used to play games and develop winning strategies. Here is a famous game called 21. Play it with a classmate. Try playing it at home too.",
                examples: [
                  "Game 1 Rules: The first player says a number between 1 and 3. Then both players take turns adding 1, 2, or 3 to the previously said number. The player who reaches 21 first wins!",
                  "Game 2 Rules: The first player says a number between 1 and 10. Then both players take turns adding 1, 2, or 3 to the first number. The player who reaches 99 first wins!",
                ],
              },
            ],

            exercises: [
              {
                type: "explore",
                questions: [
                  "Think about different situations where we use numbers. Make a list of five different situations where we use numbers.",

                  // Section 3.1 Questions
                  "Can children rearrange themselves so that the children standing at the ends say '2'?",
                  "Can we arrange the children in a row so that all say '0'?",
                  "Can two children standing together say the same number?",
                  "In a group of 5 children with different heights, can they stand so that four say '1' and the last says '0'? Why or why not?",
                  "In this group of 5 children, is the sequence 1, 1, 1, 1, 1 possible?",
                  "Is the sequence 0, 1, 2, 1, 0 possible? Why or why not?",
                  "How would you arrange 5 children so that the maximum number of children say '2'?",

                  // Section 3.2 Questions
                  "Mark or color the supercells in the table below: [6828 6709 4353 7803 7087 3088 0005 5835 2]",
                  "Fill the table below with 4-digit numbers so that every colored cell is a supercell: [5346 1258 9635]",
                  "Fill the table below to get the maximum number of supercells. Use numbers between 100 and 1000 without repetition.",
                  "In the above table with 9 numbers, how many supercells are there?",
                  "How many supercells are possible in cells with different numbers? Do you see any pattern? What would be the way to fill the given table to get the maximum number of supercells? Find out and share your plan.",
                  "Can you fill an empty supercell table with numbers without repetition so that there are no supercells? Why or why not?",
                  "Will the cell with the largest number in a table always be a supercell? Can the cell with the smallest number in a table be a supercell? Why or why not?",
                  "Fill a table so that the cell with the second largest number is not a supercell.",
                  "Fill a table so that the cell with the second largest number is not a supercell, but the cell with the second smallest number is a supercell. Is this possible?",
                  "Create other versions of this puzzle and challenge your classmates.",

                  // Section 3.3 Questions
                  "Identify the marked numbers on the number line below and complete the given number sequences. Circle the smallest number and put a box around the largest number in the above sequences.",

                  // Section 3.4 Questions
                  "Find out how many 2-digit, 3-digit, 4-digit, and 5-digit numbers there are in total.",
                  "a. Write other numbers whose digit sum is 14. b. What is the smallest number whose digit sum is 14? c. What is the largest 5-digit number whose digit sum is 14? d. What is the largest number that can be formed with digit sum 14? Can you tell an even larger number?",
                  "Find the sum of digits of all numbers from 40 to 70. Share your observations with the class.",
                  "Find the sum of 3-digit numbers whose digits are consecutive (like 345). Do you see a pattern? Will this pattern continue?",
                  "How many times does the digit '7' appear in numbers from 1 to 100? From 1 to 1000?",

                  // Section 3.5 Questions
                  "Write all three-digit palindromic numbers that can be formed using digits 1, 2, and 3.",
                  "Find some numbers where you couldn't reach a palindrome by reversing and adding.",
                  "Starting with a 2-digit number, do we always get a palindrome by repeatedly adding the number to its reverse? Explore and find out.",
                  "I am a 5-digit palindrome. I am an odd number. My tens digit is twice my ones digit. My hundreds digit is twice my tens digit. Who am I?",

                  // Section 3.6 Questions
                  "Try following the Kaprekar steps with any other 4-digit number. Find out what happens. Check with your friends what number they got.",
                  "Repeat these steps with some 3-digit numbers. Which number starts repeating?",

                  // Section 3.7 Questions
                  "Find all possible times showing patterns in a 12-hour clock (like 4:44, 10:10, 12:21).",
                  "Find some other dates from the past where digits repeat in the same order (like 20/12/2012).",
                  "Find all possible palindrome dates from the past (like 11/02/2011).",
                  "Why do we change calendars every year? Can't we reuse a calendar from a previous year? Will a calendar repeat after some years? Will all dates and days of a year exactly match with another year's calendar?",
                  "Using digits 4, 7, 3, and 2, Pratibha makes the largest 4-digit number 7432 and the smallest 4-digit number 2347. The difference between these numbers is 7432 - 2347 = 5085. Their sum is 9779. Choose 4 digits to solve each statement: a. Difference between largest and smallest is greater than 5085. b. Difference between largest and smallest is less than 5085. c. Sum of largest and smallest is greater than 9779. d. Sum of largest and smallest is less than 9779.",
                  "What is the sum of the largest and smallest 5-digit palindromes? What is their difference?",
                  "The clock shows 10:01 now. How many minutes until the clock shows the next palindrome? What about the next after that?",
                  "How many steps will it take to reach the Kaprekar constant starting from 5683?",

                  // Section 3.8 Questions
                  "Can we make 1000 using the numbers in the middle column? Why not? What about 14000, 15000, and 16000? Yes, it's possible. Explore and see how. Which thousand cannot be made?",
                  "Write an example for each situation below where possible: [Table with addition/subtraction scenarios] Were you able to find suitable examples for all situations? If not, think and discuss the reason. Prepare some more questions like these and challenge your classmates.",
                  "Always, Sometimes, Never: Determine if each statement is 'always true', 'only sometimes true', or 'never true'. Write your reasoning and discuss in class. a. 5-digit number + 5-digit number gives a 5-digit number. b. 4-digit number + 2-digit number gives a 4-digit number. c. 4-digit number + 2-digit number gives a 6-digit number. d. 5-digit number - 5-digit number gives a 5-digit number. e. 5-digit number - 2-digit number gives a 3-digit number.",

                  // Section 3.9 Questions
                  "Find the sum of numbers in each pattern below. Should we add them one by one or use a quicker method? Share your methods in class.",

                  // Section 3.10 Questions
                  "Create some more Collatz sequences starting from any whole number of your choice. Do you always reach 1?",
                  "Do you think every such sequence in Collatz's conjecture will reach 1? Why or why not?",

                  // Section 3.11 Questions
                  "Estimate the number of steps you take: a. From where you are sitting to the classroom door b. Around the school field from end to end c. From the classroom door to the school gate d. From your school to your home",
                  "Estimate the number of times you blink your eyes or take a breath: a. In one minute b. In one hour c. In one day",
                  "Find objects around you whose count is: a. In the thousands b. More than ten thousand",
                  "Try to estimate within 30 seconds. Check your estimate with your friends. 1. Number of words in your mathematics textbook: a. More than 5000 b. Less than 5000 2. Number of students coming to school by bus: a. More than 200 b. Less than 200 3. Roshan wants to buy milk and 3 types of fruits to make fruit custard for 5 people. He estimates the cost to be ₹100. Do you agree? Why or why not? 4. Estimate the distance between Gandhinagar (Gujarat) and Kohima (Nagaland). (Hint: Look at the map of India to locate these cities) 5. Sheetal is in class 6 and says she has spent about 13,000 hours in school so far. Do you agree? Why or why not? 6. In ancient times, people used to walk long distances due to lack of transport. Assuming you walk at your normal speed, approximately how much time would it take to go: a. From your current location to a favorite nearby place b. From your current location to the capital of a neighboring state c. From the southernmost point of India to the northernmost point of India 7. Create some estimation questions and challenge your classmates.",

                  // Section 3.12 Questions
                  "In this grid, there is only one supercell (larger than all its neighbors). If you swap two digits of any one number here, you get 4 supercells. Find which digits should be swapped: [16,200 39,344 29,765 23,609 62,871 45,306 19,381 50,319 38,408]",
                  "Starting from your birth year, how many steps will it take to reach the Kaprekar constant?",
                  "We are a group of five-digit numbers between 35,000 and 75,000 with all odd digits. What is the largest number in our group? What is the smallest number in our group? Which number in our group is closest to 50,000?",
                  "Estimate the total number of holidays you get in a year including weekends, festivals, and vacations. Now find out the exact number of holidays and see how close your estimate was.",
                  "Estimate the capacity of a jug, a bucket, and a tank on the roof in liters.",
                  "Write one 5-digit number and two 3-digit numbers such that their sum is 18,670.",
                  "Choose a number between 210 and 390. Create a pattern similar to the number pattern given in section 3.9, with this chosen number as the sum.",
                  "Recall the powers of 2 sequence from Table 1 of Chapter 1. Why is the Collatz conjecture true for all starting numbers in this sequence?",
                  "If someone starts with the number 100, check whether the Collatz conjecture applies.",
                  "Starting from zero, players take turns adding a number between 1 and 3. The player who reaches 22 first wins. What would be the winning strategy now?",
                ],
                answers: [
                  "Shopping, counting money, measuring ingredients, telling time, sports scores",

                  // Section 3.1 Answers
                  "Yes, by arranging tallest to shortest or shortest to tallest",
                  "Yes, by arranging in increasing order of height",
                  "Yes, if they have the same height or if the pattern allows",
                  "Yes, by arranging heights in specific order: shortest, tallest, second shortest, second tallest, medium",
                  "No, because ends can't both have two taller neighbors",
                  "Yes, by arranging heights in specific pattern",
                  "Arrange in alternating pattern: shortest, tallest, medium, second tallest, second shortest",

                  // Section 3.2 Answers
                  "Supercells: 6828, 6709, 7803, 3088?",
                  "Answers will vary based on arrangement",
                  "Fill with numbers in increasing order to maximize supercells",
                  "Maximum 3 supercells in 3×3 grid",
                  "Pattern: alternating high and low numbers",
                  "Yes, by arranging in strictly increasing or decreasing order",
                  "Yes, largest number always supercell; smallest never supercell",
                  "Place second largest between two larger numbers",
                  "Possible with careful arrangement",

                  // Section 3.4 Answers
                  "2-digit: 90, 3-digit: 900, 4-digit: 9000, 5-digit: 90000",
                  "a. 59, 68, 77, 86, 95, 149, etc. b. 59 c. 99,950 d. 1,111,111,111,111,110?",
                  "Sums follow pattern based on digits",
                  "Consecutive digit numbers: 123+234+345+...+789 = pattern",
                  "1-100: 20 times; 1-1000: 300 times",

                  // Section 3.5 Answers
                  "111, 121, 131, 212, 222, 232, 313, 323, 333",
                  "196 is famous example that may never reach palindrome",
                  "Yes, for 2-digit numbers it always works",
                  "The number is 58,885?",

                  // Section 3.6 Answers
                  "Always reaches 6174",
                  "3-digit numbers reach 495 (Kaprekar constant for 3 digits)",

                  // Section 3.7 Answers
                  "12:21, 1:01, 2:02, 3:03, 4:04, 5:05, 6:06, 7:07, 8:08, 9:09, 10:01",
                  "21/12/2012, 01/01/2010?",
                  "11/02/2011, 22/02/2022?",
                  "Calendar repeats every 28 years generally",
                  "a. 9732-2347=7385>5085 b. 4327-2347=1980<5085 c. 7432+2347=9779 equal d. 4327+1234=5561<9779",
                  "Largest 5-digit palindrome: 99999, smallest: 10001, sum: 110000, difference: 89998",
                  "Next palindrome at 11:11 (70 minutes), then 12:21 (another 70 minutes)",
                  "5683 → 8712 → 6174 (2 steps)",

                  // Section 3.8 Answers
                  "1000 can't be made from given numbers; 14000, 15000, 16000 possible",
                  "Answers will vary",
                  "a. Sometimes b. Sometimes c. Never d. Sometimes e. Sometimes",

                  // Section 3.10 Answers
                  "Yes, always reaches 1",
                  "Conjecture suggests yes, but unproven",

                  // Section 3.11 Answers
                  "Personal estimates",
                  "Personal estimates",
                  "Personal observations",
                  "Math textbook: ~50,000 words; Bus students: varies",
                  "No, probably less",
                  "~2000 km",
                  "No, ~7,800 hours (6 years × 6 hours × 220 days)",
                  "Personal estimates",

                  // Section 3.12 Answers
                  "Swap digits in 39,344 to create multiple supercells",
                  "Calculate based on birth year",
                  "Largest: 75,555? Smallest: 35,555? Closest to 50000: 53,333?",
                  "Personal estimate",
                  "Jug: 2L, Bucket: 15L, Tank: 1000L",
                  "12,345 + 345 + 6,000? = 18,690?",
                  "Answers will vary",
                  "Powers of 2 always reduce to 1 through halving",
                  "Yes, 100 → 50 → 25 → 76 → 38 → 19 → 58 → 29 → 88 → 44 → 22 → 11 → 34 → 17 → 52 → 26 → 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1",
                  "Aiming for multiples of 4 (22 mod 4 = 2)",
                ],
              },
            ],

            activities: [
              "Children standing in a row activity to understand numbers based on taller neighbors",
              "Supercell puzzle: Finding numbers greater than all neighbors",
              "Digit sum exploration: Finding numbers with same digit sum",
              "Digit detective: Counting occurrences of a digit in number range",
              "Palindrome creation: Making palindromic numbers and reverse-and-add process",
              "Kaprekar routine: Discovering 6174 magic number",
              "Clock and calendar palindrome hunting",
              "Mental math with column addition patterns",
              "Collatz conjecture exploration with different starting numbers",
              "Estimation games: Steps, blinks, breaths, distances",
              "21 game and 99 game strategy development",
            ],

            summary: [
              "■ Numbers can be used for many different purposes such as conveying information, creating and discovering patterns, making important estimates, creating and solving puzzles, playing games, and winning strategies.",
              "■ Thinking about using numbers in a systematic and correct way is a useful skill and ability (called computational thinking).",
              "■ Many problems about numbers are very easy to pose but very difficult to solve. In fact, there are many such problems that remain unsolved (for example, the Collatz conjecture).",
            ],
          },
        },
        // ncertContent.js - Add this as Chapter 4
        {
          id: 4,
          title: "Data Handling and Presentation",
          content: {
            introduction:
              "If you ask your classmates about their favorite colors, you will get a list of colors. This list is an example of data. Similarly, if you measure the weight of each student in your class, you will get a collection of weight measurements—which is also data. Collections of facts, numbers, measurements, observations, or other descriptions of objects that provide information about those objects are called data. We live in the age of information. We constantly see large amounts of data presented to us in new and interesting ways. In this chapter, we will learn about some of these methods of presenting data. We will also discover how some of these methods can be used to correctly display, interpret, and draw conclusions from data.",

            sections: [
              {
                title: "4.1 Collection and Organization of Data",
                content:
                  "Navya and Naresh are discussing their favorite sports. To find out the most popular sport in their class, what should Navya and Naresh do? Can you help them? Naresh and Navya decided to go to each student in the class and ask what their favorite sport is. Then they prepared a list. Navya shows a list: Mehnar - Kabaddi, Jubimon - Hockey, Simran - Kabaddi, Nand - Satoliya (Pitti), Ankita - Kabaddi, Imon - Hockey, Yuvraj - Cricket, Rehana - Hockey, Anan - Badminton, Kompal - Football, Tahira - Cricket, Pushkal - Satoliya (Pindu), Daisy - Badminton, Jeevika - Satoliya (Pindu), Leela - Hockey, Afshan - Hockey, Keerat - Cricket, Gurpreet - Hockey, Ashen - Kabaddi, Bhavya - Cricket, Sarah - Kabaddi, Anaya - Kababdi, Jivisha - Satoliya (Pitti), Rajesh - Football, Thara - Football, Soumya - Cricket, Navjot - Hockey, Hemal - Satoliya (Pitti), Devbrat - Football, Ananya - Hockey, Hardik - Cricket. She happily says, 'I have collected the data. Now I can tell the most popular sport.' Some other children are looking at the list and wondering. They said, 'We still cannot see the most popular sport. How can we get it from this list?'",
                examples: [
                  "Data collection through survey",
                  "List of favorite sports of students",
                  "Need to organize data for better understanding",
                ],
              },
              {
                title: "Tally Marks and Frequency Table",
                content:
                  "Mr. Nilesh is a teacher. He decided to bring sweets to class to celebrate the New Year. The nearby sweet shop has jalebi, gulab jamun, gujiya, barfi, and rasgulla available. He wanted to know the students' preferences. He wrote the names of sweets on the board and asked each student to tell their preference. He put a tally mark 'I' for each student, and when the count reached 5, he drew a line crossing the previous four marks as 'ꞏꞏꞏꞏ'.",
                examples: [
                  "Jalebi: 6 students",
                  "Gulab Jamun: 9 students",
                  "Gujiya: 13 students",
                  "Barfi: 3 students",
                  "Rasgulla: 7 students",
                ],
              },
              {
                title: "Organizing Data in Ascending Order",
                content:
                  "Ms. Sandhya asked her students about their shoe sizes. She wrote the collected data on the board: 4, 5, 3, 4, 3, 4, 5, 5, 4, 5, 5, 4, 5, 6, 4, 3, 5, 6, 4, 6, 4, 5, 7, 5, 6, 4, 5. Then she arranged the shoe sizes in ascending order: 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 7.",
                examples: [
                  "Maximum shoe size: 7",
                  "Minimum shoe size: 3",
                  "Number of students with size 5: 9",
                  "Number of students with size greater than 4: 9+4+1 = 14",
                ],
              },
              {
                title: "4.2 Pictographs",
                content:
                  "Pictographs are a visual and suggestive way of showing data without writing numbers. Look at the picture below, you might have seen such pictures in previous classes. This picture helps you understand at a glance the different modes of transport used by students. Based on this picture, answer the following questions: Which mode of transport is used by the most students? Which mode of transport is used by the least students? Pictographs represent data through pictures of objects. This helps in answering questions about the data at a glance. In the given pictograph, one symbol represents one student. There are also pictographs where one symbol represents many people or objects.",
                examples: [
                  "Private Car: 4 students",
                  "Public Bus: 5 students",
                  "School Bus: 11 students",
                  "Bicycle: 3 students",
                  "Walking: 11 students",
                ],
              },
              {
                title: "Example: Sleep Duration Survey",
                content:
                  "Nandkishore collected answers from children at his middle school in Berasia to the question: 'How many hours of sleep do you get at night?' He prepared a pictograph of this data.",
                examples: [
                  "Always (9+ hours): 5 symbols × 10 = 50 children",
                  "Sometimes: 2.5 symbols × 10 = 25 children",
                  "Never: 4 symbols × 10 = 40 children",
                ],
              },
              {
                title: "Drawing a Pictograph",
                content:
                  "One day, Lakhanpal collected data on how many students were absent in each class: Class I: 35, II: 4, III: 20, IV: 15, V: 7. He decided to create a pictograph using one symbol to represent one student. At the same time, his friends Zarina and Sangeeta collected data on students present in each class: Class I: 30, II: 35, III: 20, IV: 25, V: 30, VI: 25, VII: 30, VIII: 20. If they want to show this data using pictographs, will they still use one symbol for each student like Lakhanpal did? If yes, what challenges might they face? Zarina came up with a plan to deal with this problem—since there are many students, she decided to use one symbol to represent 5 students. This saved both time and space. Sangeeta decided to use one symbol to represent 10 students. But then she had difficulty representing 25 and 35 students in the pictograph. She thought she could use half a symbol to represent 5 students.",
                examples: [
                  "Using appropriate scale in pictographs",
                  "1 symbol = 5 students",
                  "1 symbol = 10 students",
                  "Half symbol for intermediate values",
                ],
              },
              {
                title: "4.3 Bar Graphs",
                content:
                  "Have you seen graphs like this on TV or in newspapers? Like pictographs, bar graphs can help us quickly understand and interpret information such as highest values, comparison of values across different categories, etc. However, when the amount of data is large, presenting it through pictographs not only takes more time but can sometimes be difficult. Let's see how this data can be presented through a bar graph. Let's take the data collected by Lakhanpal about the number of students absent in each class on a particular day.",
                examples: [
                  "Class I: 35 absent",
                  "Class II: 4 absent",
                  "Class III: 20 absent",
                  "Class IV: 15 absent",
                  "Class V: 7 absent",
                ],
              },
              {
                title: "Interpreting Bar Graphs",
                content:
                  "Let's look at traffic data collected by traffic police at a busy intersection in Delhi. The number of vehicles passing through this intersection every hour from 6 AM to 12 PM is shown in the bar graph below. 1 unit length represents 100 vehicles. We can see that at this intersection, maximum traffic is shown by the longest bar, which is for the time interval 7–8 AM. The bar graph shows that 1200 vehicles passed through the intersection during this time. The second longest bar is for 8–9 AM. During this period, 1000 vehicles passed through the intersection. Similarly, minimum traffic is shown by the shortest bar, for the time interval 6–7 AM. During this period, only about 150 vehicles passed through this intersection. The second shortest bar is for the time interval 11 AM–12 PM, when 600 vehicles passed through. During the two-hour period from 8–10 AM, the number of vehicles passing through this intersection is approximately 1000 + 800 = 1800 vehicles, as shown by this bar graph.",
                examples: [
                  "6-7 AM: 150 vehicles",
                  "7-8 AM: 1200 vehicles",
                  "8-9 AM: 1000 vehicles",
                  "9-10 AM: 800 vehicles",
                  "10-11 AM: 700 vehicles",
                  "11 AM-12 PM: 600 vehicles",
                ],
              },
              {
                title: "Population Growth Bar Graph",
                content:
                  "The bar graph above shows India's population growth in each decade over 50 years. The numbers shown are in crores (10 millions). If we had to take 1 unit to represent one person, it would not be possible to draw the bars. So we have taken a scale of 1 unit = 10 crore. This bar diagram is shown in the figure. So a bar of 5 units represents 50 crore and a bar of 8 units represents 80 crore.",
                examples: [
                  "Scale: 1 unit = 10 crore",
                  "1951-1960: 36 crore",
                  "1961-1970: 44 crore",
                  "1971-1980: 54 crore",
                  "1981-1990: 65 crore",
                  "1991-2000: 76 crore",
                ],
              },
              {
                title: "4.4 Drawing Bar Graphs",
                content:
                  "In a previous example, Mr. Nilesh prepared a frequency table for his class students' favorite sweets. Let's draw a bar graph for this data: Jalebi: 6, Gulab Jamun: 9, Gujiya: 13, Barfi: 3, Rasgulla: 7.",
                examples: [
                  "Step 1: Draw a horizontal line and a vertical line",
                  "Step 2: Along the horizontal line, write the name of each sweet",
                  "Step 3: Choose an appropriate scale (1 unit = 1 student)",
                  "Step 4: Draw bars of heights corresponding to frequencies",
                ],
              },
              {
                title: "Example: Runs Scored by Smriti",
                content:
                  "The number of runs scored by Smriti in 8 matches is given in the table below: Match 1: 80, Match 2: 50, Match 3: 100, Match 4: 90, Match 5: 0, Match 6: 90, Match 7: 50. In this example, the minimum score is 0 and the maximum score is 100. Taking a scale of 1 unit length = 1 run would mean we would have to take steps of 1 from 0 to 100 runs. This would be unnecessarily complicated. Instead, let's take 1 unit length = 10 runs. We mark this scale on the vertical line and draw bars according to the score of each match.",
                examples: [
                  "Scale: 1 unit = 10 runs",
                  "Match 1: 8 units (80 runs)",
                  "Match 2: 5 units (50 runs)",
                  "Match 3: 10 units (100 runs)",
                  "Match 4: 9 units (90 runs)",
                  "Match 5: 0 units (0 runs)",
                  "Match 6: 9 units (90 runs)",
                  "Match 7: 5 units (50 runs)",
                ],
              },
              {
                title: "Example: Imran's Family Expenses",
                content:
                  "The following table shows Imran's family's monthly expenses on various items: House Rent: ₹3000, Food: ₹3400, Education: ₹800, Electricity: ₹400, Transport: ₹600, Miscellaneous: ₹1200. Steps to show this data as a bar graph: Draw two perpendicular lines—one horizontal and one vertical. Along the horizontal line, mark the 'items' with equal spacing between them. Along the vertical line, mark the corresponding expenses. Choose an appropriate scale. Suppose 1 unit length = ₹200, then mark the corresponding values (₹200, ₹400, etc.) on the vertical line. Finally, calculate the height of bars for different items: House Rent: 3000÷200 = 15 units, Food: 3400÷200 = 17 units, Education: 800÷200 = 4 units, Electricity: 400÷200 = 2 units, Transport: 600÷200 = 3 units, Miscellaneous: 1200÷200 = 6 units.",
                examples: [
                  "Scale: 1 unit = ₹200",
                  "House Rent: 15 units",
                  "Food: 17 units",
                  "Education: 4 units",
                  "Electricity: 2 units",
                  "Transport: 3 units",
                  "Miscellaneous: 6 units",
                ],
              },
              {
                title: "4.5 Artistic and Aesthetic Considerations",
                content:
                  "Besides the steps described in the previous section, some other more artistic and aesthetic aspects can be considered for visually representing data to make them more impactful. When using bar graphs, pictographs, etc. to visualize data, it is important to place this data appropriately in the desired space. As we have seen earlier, this can be done by choosing an appropriate scale. It is also desirable that the data looks attractive and is easy to understand, so that the viewer can easily grasp the information being conveyed.",
                examples: [
                  "Using appropriate scales",
                  "Color combinations",
                  "Horizontal vs vertical bars",
                  "Choosing between bar graphs and pictographs",
                ],
              },
              {
                title: "Example: Highest Mountains by Continent",
                content:
                  "Consider an example. Here is a table with the name of the highest mountain on each continent and its corresponding height in meters: Asia - Everest - 8848 m, South America - Aconcagua - 6962 m, North America - Denali - 6194 m, Africa - Kilimanjaro - 5895 m, Europe - Elbrus - 5642 m, Antarctica - Vinson Massif - 4892 m, Australia - Kosciuszko - 2228 m. How much taller is Mount Everest than Mount Kosciuszko? Is there a big difference between the heights of Mount Denali and Mount Kilimanjaro? It is not so easy to see these facts from a table of numbers.",
                examples: [
                  "Everest: 8848 m",
                  "Aconcagua: 6962 m",
                  "Denali: 6194 m",
                  "Kilimanjaro: 5895 m",
                  "Elbrus: 5642 m",
                  "Vinson Massif: 4892 m",
                  "Kosciuszko: 2228 m",
                ],
              },
              {
                title: "Infographics",
                content:
                  "When visualizations of data like bar graphs are made more beautiful with more detailed artistic and visual imagination, they are called information graphics or infographics for short. The purpose of infographics is to communicate information more clearly, quickly, and in an attractive way using appealing visuals. Taking the example of the highest mountains on each continent mentioned above, we used vertical bars instead of horizontal ones to make the mountains more informative. But we could use triangles instead of rectangles, which look more like mountains. We can also combine colors. For example, this infographic might appear more attractive and suggestive at first glance, but it also has some difficulties. Our goal with the bar graph was to show the heights of different mountains through bars of appropriate heights, but the widths of these bars should be equal. Using equal widths was only to clarify that we are only comparing heights. But in this infographic, taller triangles are also wider. Are taller mountains always wider? This infographic is providing additional information that could be misleading or even incorrect. Sometimes, more attractive pictures can be misleading at the information level.",
                examples: [
                  "Using mountain-shaped triangles instead of rectangular bars",
                  "Adding colors to enhance visual appeal",
                  "Potential for misleading representations",
                  "Importance of maintaining accurate proportions",
                ],
              },
            ],

            exercises: [
              {
                type: "explore",
                questions: [
                  // Section 4.1 Questions
                  "How would you find the most popular sport among Naresh and Navya's classmates?",
                  "What is the most popular sport in their class?",
                  "Try to find the most popular sport among your classmates.",
                  "Put a ✓ mark for questions that require collecting data and ✗ for questions that do not require collecting data: a. What is the most popular TV show among her classmates? b. When did India gain independence? c. How much water is being wasted in her neighborhood? d. What is the capital of India?",

                  // Sweet shop questions
                  "Complete the table to help Mr. Nilesh buy the right number of sweets: a. How many students chose jalebi? b. Barfi was chosen by _____ students. c. How many students chose gujiya? d. Rasgulla was chosen by _____ students. e. How many students chose gulab jamun?",
                  "Is the given table sufficient to distribute the right type of sweet to each child? Explain. If not, what is the alternative?",

                  // Shoe size questions
                  "Help Ms. Sandhya find answers to the following questions: a. The maximum shoe size in the class is _____. b. The minimum shoe size in the class is _____. c. _____ students wear size 5 shoes. d. _____ students wear shoes larger than size 4.",
                  "How did arranging the data in ascending order help answer the above questions?",
                  "Are there other ways to organize data?",
                  "Write the names of trees you see in your surroundings. When you go from home to school (or walk from one place to another), fill the data you obtain in the following table: [Tree names and counts]. a. Which tree was found in maximum number? b. Which tree was found in minimum number? c. Were there two trees found in equal numbers?",
                  "Take a blank paper and paste a small news item from a newspaper. Each student can use a different article. Now prepare a table on the paper as shown below. Count the number of letters 'c', 'e', 'i', 'r', and 'x' in the words of this small news item and complete the following table. a. The most frequent letter is _____. b. The least frequent letter is _____. c. List the five letters 'c', 'e', 'i', 'r', and 'x' in ascending order of their frequency. Now compare the order of your list with the lists of your classmates. Is your order the same or approximately the same as others? (Most students will likely get the order 'c', 'e', 'i', 'r', 'x'!) Why do you think this happens? d. Write the process you followed to complete this task. e. Discuss with your friends about the processes they followed. f. If you do this same task with another news item, what process would you follow?",

                  // Section 4.2 Pictograph questions
                  "The given pictograph shows the number of books borrowed by students from the library of Middle School, Ginnori in a week: [Monday: 4 books, Tuesday: 5 books, Wednesday: 3 books, Thursday: 6 books, Friday: 4 books, Saturday: 2 books]. a. On which day were the minimum number of books borrowed? b. How many books were borrowed during the week? c. On which day were the maximum number of books borrowed? What could be the possible reason?",

                  "Magan Bhai sells kites in Jamnagar. 6 shopkeepers from nearby villages come to buy kites from him. The number of kites sold by these 6 shopkeepers is given below: Chaman: 250, Rani: 300, Rukhsana: 100, Jasmeet: 450, Jetha Lal: 250, Poonam Ben: 700. Prepare a pictograph using one kite symbol to represent 100 kites. Answer the following questions: a. How many symbols will represent the kites bought by Rani? b. Who bought the maximum number of kites? c. Who bought more kites between Jasmeet and Chaman? d. Rukhsana says that Poonam Ben bought more than double the number of kites bought by Rani. Is she correct? Why?",

                  // Section 4.3 Bar graph questions
                  "How many total vehicles passed through the intersection between 6 AM and 12 PM?",
                  "Why do you think there was so little traffic during 6-7 AM compared to other hours between 7 AM and 12 PM?",
                  "Why do you think traffic was maximum between 7-8 AM?",
                  "Why do you think traffic kept decreasing every hour after 8 AM until 12 PM?",

                  "Based on the population bar graph, what questions would you like to ask your friends?",
                  "How much did India's population increase over 50 years? How much was the population growth in each decade?",

                  // Section 4.4 Drawing bar graphs questions
                  "Samantha visited a tea garden and collected data on insects she saw there: Beetle: 6, Grasshopper: 10, Butterflies: 5, Locust: 3, Cricket: 2. Help her draw a bar graph for this data.",

                  "Pooja collected data on the number of tickets sold for different cities in Madhya Pradesh at Bhopal railway station during a 2-hour period: Vidisha: 24, Jabalpur: 20, Seoni: 16, Indore: 28, Sagar: 16. She prepared a bar graph of this data on the board to discuss with her students, but someone erased part of the graph. a. Write the number of tickets sold for Vidisha above its bar. b. Write the number of tickets sold for Jabalpur above its bar. c. Vidisha's bar is 6 units long and Jabalpur's bar is 5 units long. What is the scale of this graph? d. Draw the correct bar for Sagar. e. Mark the correct numbers on the vertical line including the scale. f. Are the bars drawn for Seoni and Indore correct? If not, draw the correct bars.",

                  "Chinu listed the different modes of transport passing on the road in front of his house from 9 to 10 AM: [Long list of vehicles]. a. Prepare a frequency distribution table for the given data. b. Which mode of transport was used the most? c. If you were there to collect this data, how would you do it? Write the related steps or process.",

                  "Throw a dice 30 times and note the number obtained each time. Using tally marks, prepare a frequency distribution table. Now find the number that: a. Appeared the least number of times. b. Appeared the most number of times. c. Appeared an equal number of times.",

                  "Faiz prepared a frequency distribution table of wickets taken by Jasprit Bumrah in his last 30 matches: [Wickets taken: 0,1,2,3,4,5,6,7; Number of matches: 2,4,6,8,5,3,1,1]. a. What information does this table provide? b. What could be the title of this table? c. What caught your attention in this table? d. In how many matches did Bumrah take 4 wickets? e. Mayank says, 'If we want to find the total number of wickets taken by him in the last 30 matches, we will have to add the numbers 0,1,2,3,...,7.' Will Mayank be able to find the total number of wickets through this process? Why? f. How many total wickets did Jasprit Bumrah take in his last 30 matches? How would you find the correct number from the table?",

                  "The following pictograph shows the number of tractors in five different villages: [Village A: 5 symbols, Village B: 8 symbols, Village C: 3 symbols, Village D: 6 symbols, Village E: 4 symbols, with 1 symbol = 1 tractor]. Look at this pictograph and answer the following questions: a. Which village has the minimum number of tractors? b. Which village has the maximum number of tractors? c. How many more tractors does village C have compared to village B? d. Komal says, 'The number of tractors in village D is half the number of tractors in village E.' Is she correct?",

                  "The number of girl students in each class of a school is shown in a pictograph: [Class 1: 5 symbols, Class 2: 6 symbols, Class 3: 4 symbols, Class 4: 7 symbols, Class 5: 5 symbols, Class 6: 8 symbols, Class 7: 3 symbols, Class 8: 4 symbols, with 1 symbol = 4 girls]. Look at this pictograph and answer the following questions: a. Which class has the minimum number of girls? b. What is the difference between the number of girls in class 5 and class 6? c. If two more girls took admission in class 2, what change would occur in the graph? d. How many girls are there in class 7?",

                  "Mudhol Hound (a breed of Indian dogs) is mostly found in Bagalkot and Vijayapura districts of North Karnataka. The government has initiated a project to save this breed, providing assistance to those who raise these dogs. Due to this initiative, the number of such dogs has increased. The number of Mudhol dogs in 6 villages of Karnataka is as follows: Village A: 18, Village B: 36, Village C: 12, Village D: 48, Village E: 18, Village F: 24. Prepare a pictograph for the above and answer the following questions: a. What scale or key would be appropriate for this pictograph? b. How many symbols will you use to represent the number of dogs in Village B? c. Kamini said that the total number of dogs in Village B and Village D would be more than the total number in the other 4 villages. Is she correct? Give reasons for your answer.",

                  "A survey was conducted with 120 school students to find out which activity they prefer to do in their free time: Playing: 45, Reading story books: 30, Watching TV: 20, Listening to music: 10, Painting: 15. Draw a bar graph for the above data taking a scale of 1 unit length = 5 students. Apart from playing, which activity is preferred by the most students?",

                  "Students and teachers of a primary school decided to plant saplings in their school courtyard and in a nearby village during the first week of July. The description of saplings planted by them is shown in the bar graph below. a. The total number of saplings planted on Wednesday and Thursday is _____. b. The total number of saplings planted during the week is _____. c. Maximum number of saplings were planted on _____ and minimum number were planted on _____. What do you think could be the reason for this situation? Why were more saplings planted on certain days of the week and fewer on other days? Can you think of possible reasons or explanations? How would you try to find out if your explanations are correct?",

                  "The number of tigers in India decreased significantly between 1900 and 1970. 'Project Tiger' was started in 1973 to save tigers in India. Starting from 2006, the exact numbers of tigers in India began to be known. Shagupta and Divya gathered information about the number of tigers in India between 2006 and 2022. They recorded the information every four years. They created a frequency distribution table for this data and drew a bar graph to present this data, but some mistakes have occurred in the graph. Can you find these mistakes and correct them? [Data: Year: 2006, 2010, 2014, 2018, 2022; Tiger count: 1400, 1700, 2200, 3000, 3700]",

                  // Section 4.5 Artistic considerations questions
                  "If you want to visually represent the heights of the tallest students in each class of your school, would you use a bar graph with horizontal bars or vertical bars? Why?",

                  "If you are creating a table of the longest rivers in each continent and their lengths, which type of bar graph would you prefer—vertical bars or horizontal bars? Why? Try to get this information and then create the corresponding table and bar graph. Which continent has the longest rivers?",
                ],
                answers: [
                  // Section 4.1 Answers
                  "By organizing the data using tally marks or frequency table",
                  "Cricket appears most frequently (5 times)",
                  "Personal survey needed",
                  "a. ✓ b. ✗ c. ✓ d. ✗",

                  // Sweet shop answers
                  "a. 6 students b. 3 students c. 13 students d. 7 students e. 9 students",
                  "The table shows total counts but not individual preferences. A list with student names would be needed to ensure each child gets their preferred sweet.",

                  // Shoe size answers
                  "a. 7 b. 3 c. 9 d. 14",
                  "It makes it easy to find minimum, maximum, and count specific values",
                  "Yes, frequency tables, pictographs, bar graphs",
                  "Personal observation",
                  "Letter frequency will vary by article, but 'e' is typically most common in English",

                  // Section 4.2 Pictograph answers
                  "a. Saturday b. 24 books c. Thursday, possibly because it's library day",
                  "a. 3 symbols b. Poonam Ben c. Jasmeet d. Yes, 700 > 2×300 = 600",

                  // Section 4.3 Bar graph answers
                  "Total: 150+1200+1000+800+700+600 = 4450 vehicles",
                  "Early morning before rush hour",
                  "Morning rush hour when people go to work/school",
                  "Traffic decreases as morning rush hour ends",

                  "Various questions possible",
                  "Increase from 36 crore to 76 crore, a 40 crore increase",

                  // Section 4.4 Drawing bar graphs answers
                  "Bar graph with 1 unit = 1 insect",

                  "a. 24 b. 20 c. 1 unit = 4 tickets d. 16 tickets = 4 units e. Scale 0-28 by 4s f. Seoni (16) and Indore (28) need adjustment",

                  "a. Motorcycle: 15, Car: 6, Auto: 8, Bus: 4, Bicycle: 8, Bullock cart: 2, Scooter: 8 b. Motorcycle c. Tally marks on paper or clicker counter",

                  "Personal experiment results will vary",

                  "a. Wickets taken by Bumrah in last 30 matches b. 'Bumrah's Bowling Performance' c. Most matches with 2-3 wickets d. 5 matches e. No, need to multiply wickets by matches f. (0×2)+(1×4)+(2×6)+(3×8)+(4×5)+(5×3)+(6×1)+(7×1) = 0+4+12+24+20+15+6+7 = 88 wickets",

                  "a. Village C b. Village B c. Village B has 5 more (8-3=5) d. No, D has 6, E has 4, so D has 2 more, not half",

                  "a. Class 7 b. 8-5=3 symbols difference = 12 girls c. Would need half symbol d. 3×4 = 12 girls",

                  "a. 1 symbol = 6 dogs b. 6 symbols c. B(36)+D(48)=84, others total 18+12+18+24=72, so yes, 84 > 72",

                  "Story reading (30 students) is most popular after playing",

                  "a. 70+50=120 b. 60+40+70+50+80+90+60=450 c. Friday, Tuesday",

                  "Correct graph should have years in order 2006-2010-2014-2018-2022 with bars increasing: 1400, 1700, 2200, 3000, 3700",

                  // Section 4.5 Answers
                  "Vertical bars, because height is being compared",
                  "Horizontal bars might be better for river lengths as they are distances along the ground. Asia has the longest rivers (Yangtze, Yellow, Mekong)",
                ],
              },
            ],

            activities: [
              "Conduct a survey in class to find most popular sport, color, or TV show",
              "Create frequency tables using tally marks for various classroom data",
              "Measure and record shoe sizes of classmates",
              "Tree counting walk from home to school",
              "Letter frequency analysis in newspaper articles",
              "Create pictographs for different datasets",
              "Draw bar graphs for traffic, population, or expense data",
              "Dice rolling experiment for frequency distribution",
              "Cricket wicket analysis using Bumrah's data",
              "Create infographics for mountain heights",
              "Calendar and clock pattern exploration",
            ],

            summary: [
              "■ Collections of facts, numbers, measurements, observations, or other descriptions of objects that provide information about those objects are called data.",
              "■ For simplest analysis and interpretation, data can be organized in tabular form using tally marks.",
              "■ The number of times a particular value, measurement, or observation appears is called its frequency.",
              "■ Pictographs represent data in the form of pictures/objects or parts of objects. Each picture represents a frequency, which could be 1 or more than 1. This is called the scale of the pictograph and must be specified.",
              "■ Bar graphs have bars of equal width, with length or height indicating their frequency of occurrence. The scale converting length or height to frequency must again be specified.",
              "■ Choosing an appropriate scale for a pictograph or bar graph is important to convey correct and effective intended information about the data and to make the graph visually attractive.",
              "■ Other aspects of a graph also contribute to its effectiveness and visual appeal, such as how colors are used, what pictures are drawn alongside, and whether the bars are horizontal or vertical. These aspects correspond to the artistic and aesthetic sides of data presentation.",
              "■ However, making graphical representations of data more attractive or fancy can sometimes be misleading and lead to wrong impressions.",
              "■ By correctly reading pictographs and bar graphs, we can immediately understand the presented data and draw conclusions about them.",
            ],
          },
        },
        // ncertContent.js - Add this as Chapter 5

        {
          id: 5,
          title: "Prime Time",
          content: {
            introduction:
              "In this chapter, we will explore the fascinating world of numbers, their multiples, factors, prime numbers, and divisibility rules. We'll play games with numbers and discover interesting patterns that mathematicians have studied for thousands of years.",

            sections: [
              {
                title: "5.1 Common Multiples and Common Factors",
                content:
                  "Let's play the 'Idli-Vada' game! In this game, children sit in a circle and count numbers in sequence. For every multiple of a smaller number, they say 'Idli', for every multiple of a larger number, they say 'Vada', and for common multiples, they say 'Idli-Vada'. This game helps us understand common multiples and factors in a fun way.",
                examples: [
                  "For numbers 2 and 3: multiples of 2: 2,4,6,8,10,12... (Idli), multiples of 3: 3,6,9,12,15... (Vada), common multiples: 6,12,18... (Idli-Vada)",
                  "For numbers 4 and 6: common multiples are 12, 24, 36...",
                  "The smallest common multiple is called the Least Common Multiple (LCM)",
                ],
              },
              {
                title: "Jump for the Jackpot",
                content:
                  "Jumpy and Grampy play a game. Grampy places a treasure on a number. Jumpy chooses a jump size. Starting from 0, Jumpy must jump on multiples of his chosen number. He gets the treasure if he lands on the number where Grampy placed it. If Grampy placed treasure on 24, which jump sizes will get Jumpy to 24? Jump sizes 4: 4→8→12→16→20→24→28... Other successful jump sizes: 2, 3, 6, 8, and 12. What about jump sizes 1 and 24? Yes, they will also reach 24. Numbers 1, 2, 3, 4, 6, 8, 12, 24 all divide 24 completely. These are called factors or divisors of 24.",
                examples: [
                  "Factors of 24: 1, 2, 3, 4, 6, 8, 12, 24",
                  "Factors of 36: 1, 2, 3, 4, 6, 9, 12, 18, 36",
                  "Common factors of 24 and 36: 1, 2, 3, 4, 6, 12",
                ],
              },
              {
                title: "Two Treasures Game",
                content:
                  "Grampy made the game harder. He placed two treasures on two different numbers. Jumpy must choose one jump size and stick to it. Jumpy gets the treasure only if he reaches both numbers with his chosen jump size. Grampy placed treasures on 14 and 36. Jumpy chooses jump size 7. Will he reach both treasures? Starting from 0: 7→14→21→28→35→42... He reaches 14 but not 36. So he doesn't get the treasure. What jump size should he have chosen? Factors of 14: 1, 2, 7, 14. Factors of 36: 1, 2, 3, 4, 6, 9, 12, 18, 36. With jump sizes 1 or 2, he will reach both 14 and 36. Notice that 1 and 2 are common factors of 14 and 36. The possible jump sizes that reach both treasures are the common factors of the two numbers where treasure is placed.",
                examples: [
                  "Common factors of 14 and 36: 1, 2",
                  "Common factors of 15 and 30: 1, 3, 5, 15",
                  "Common factors of 12 and 18: 1, 2, 3, 6",
                ],
              },
              {
                title: "Exploring Number Patterns",
                content:
                  "Observe the table below. What do you understand from this table? In the table: 1. Is there something common among the shaded box numbers? 2. Is there something common among the circled numbers? 3. Which numbers are both shaded and circled? What are these numbers called?",
                examples: [
                  "Numbers from 31 to 70 arranged in a grid",
                  "Shaded numbers might be multiples of certain numbers",
                  "Circled numbers might be prime numbers",
                  "Numbers that are both could be special numbers",
                ],
              },
              {
                title: "5.2 Prime Numbers",
                content:
                  "Guna and Anshu want to pack figs grown on their farm. Guna wants to put 12 figs in each box and Anshu wants to put 7 figs in each box. How many arrangements are possible? Think of different ways and find out: 1. Guna can arrange 12 figs in rectangular form. 2. Anshu can arrange 7 figs in rectangular form. Guna made a list of arrangements. Look at the number of rows and columns in each arrangement. How are they related to 12? For example, in the second arrangement, 12 figs are arranged in two columns with 6 figs each: 12 = 2 × 6. Anshu can only make one arrangement: 7 × 1 or 1 × 7! No other rectangular arrangement is possible.",
                examples: [
                  "12 can be arranged as: 1×12, 2×6, 3×4, 4×3, 6×2, 12×1",
                  "7 can only be arranged as: 1×7, 7×1",
                  "Numbers that can be arranged in more than one way are composite",
                  "Numbers that can be arranged in only one way (apart from 1× itself) are prime",
                ],
              },
              {
                title: "Prime and Composite Numbers",
                content:
                  "In each of Guna's arrangements, multiplying the number of rows by columns gives 12. So the number of rows or columns are factors of 12. We can see that 12 can be arranged in more than one rectangular form because it has more than two factors. The number 7 can only be arranged in one way because it has only two factors: 1 and 7. Numbers that have only two factors are called Prime Numbers. Some early prime numbers are: 2, 3, 5, 7, 11, 13, 17, 19. Note that any prime number has factors 1 and the number itself. Numbers that have more than two factors are called Composite Numbers. The first few composite numbers are: 4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 20. What about the number 1, which has only one factor? 1 is neither prime nor composite.",
                examples: [
                  "Prime numbers: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29...",
                  "Composite numbers: 4, 6, 8, 9, 10, 12, 14, 15, 16...",
                  "How many prime numbers between 21 and 30? (23, 29 → 2 primes)",
                  "How many composite numbers between 21 and 30? (21,22,24,25,26,27,28,30 → 8 composites)",
                ],
              },
              {
                title: "Sieve of Eratosthenes",
                content:
                  "Here's an interesting way to find all prime numbers up to 100. Follow these steps and see what result you get: Step 1: Cross out 1 because it is neither prime nor composite. Step 2: Circle 2 and cross out all other multiples of 2, like 4, 6, 8... Step 3: You'll see the next uncrossed number is 3. Circle 3 and cross out all other multiples of 3, like 6, 9, 12... Step 4: The next uncrossed number is 5. Circle 5 and cross out all other multiples of 5 except 5 itself: 10, 15, 20... Step 5: Continue this process until all numbers in the list are either circled or crossed out. All circled numbers are prime numbers. All crossed out numbers except 1 are composite numbers. This method is called the Sieve of Eratosthenes, named after the Greek mathematician Eratosthenes who lived over 2200 years ago.",
                examples: [
                  "Primes up to 100: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97",
                  "This method works by eliminating all composite numbers, leaving only primes",
                ],
              },
              {
                title: "Twin Primes",
                content:
                  "Pairs of prime numbers that differ by 2 are called Twin Primes. For example, 3 and 5 are twin primes, similarly 17 and 19 are twin primes.",
                examples: [
                  "Twin primes up to 100: (3,5), (5,7), (11,13), (17,19), (29,31), (41,43), (59,61), (71,73)",
                  "The difference between twin primes is always 2",
                ],
              },
              {
                title: "5.3 Co-prime Numbers",
                content:
                  "Which pairs are safe? Let's look at the treasure hunt game again. This time, treasures are placed on two numbers. Jumpy will get the treasure only if he reaches both numbers with the same jump size. There's a new rule: 1 is not allowed as a jump size. Where should Grampy place the treasures so that Jumpy cannot reach both numbers? Will placing treasures on 12 and 26 work? No! With jump size 2, Jumpy can reach both 12 and 26. What about 4 and 9? Without using jump size 1, Jumpy cannot reach both numbers. So Grampy knows that the pair 4 and 9 is safe for him. Check if these pairs are safe: a. 15 and 39 b. 4 and 15 c. 18 and 29 d. 20 and 55. What is special about safe pairs? They have no common factor other than 1. Two numbers that have no common factor other than 1 are called Co-prime Numbers.",
                examples: [
                  "4 and 9 are co-prime (factors of 4: 1,2,4; factors of 9: 1,3,9; common factor: only 1)",
                  "15 and 39 are NOT co-prime (common factor: 3)",
                  "8 and 15 are co-prime",
                  "17 and 21 are co-prime",
                ],
              },
              {
                title: "Co-prime Art",
                content:
                  "Look at the string art figures shown below. In the first figure, there are 12 pegs. The string is tied to every 4th peg (we can say the string interval is 4). In the second figure, there are 13 pegs and the string interval is 3. What do you think about the other figures? Look at these figures, share your observations in class and discuss. In some figures, the string touches every peg, and in some, it doesn't. Is this related to whether the two numbers (number of pegs and string interval) are co-prime?",
                examples: [
                  "12 pegs, interval 4: string doesn't touch all pegs (4 and 12 have common factor 4)",
                  "13 pegs, interval 3: string touches all pegs (3 and 13 are co-prime)",
                  "Draw similar figures for: a. 15 pegs, interval 10 b. 10 pegs, interval 7 c. 14 pegs, interval 6 d. 8 pegs, interval 7",
                ],
              },
              {
                title: "5.4 Prime Factorization",
                content:
                  "Checking if two numbers are co-prime: Teacher: Are 56 and 63 co-prime? Anshu and Guna: If they have any common factor other than 1, they won't be co-prime. Let's check. Anshu: I can write 56 = 14 × 4 and 63 = 21 × 3. So 14 and 4 are factors of 56. Similarly, 21 and 3 are factors of 63. They don't have any common factors, so these numbers are co-prime. Guna: Wait, I can also write 56 = 7 × 8 and 63 = 9 × 7. We can see that 7 is a factor of both numbers. So they are not co-prime. Clearly Guna is correct because 7 is a common factor. But where did Anshu make a mistake? 56 = 14 × 4 tells us that 14 and 4 are factors of 56, but it doesn't reveal all factors of 56. Similarly for 63. This shows we need a more systematic approach to check whether two numbers are co-prime or not.",
                examples: [
                  "56 = 7 × 8, 63 = 9 × 7 → common factor 7",
                  "80 = 40 × 2 = 20 × 4 = 10 × 8 = 16 × 5",
                  "63 = 9 × 7 = 3 × 21",
                ],
              },
              {
                title: "Prime Factorization Method",
                content:
                  "Let's take the number 56 as an example, which is composite. We saw that 56 = 4 × 14. So 4 and 14 are both factors of 56. Now take one of them, say 14, which is composite, and write 14 = 2 × 7. So 56 = 4 × 2 × 7. Here 4 is composite, and 4 = 2 × 2. So 56 = 2 × 2 × 2 × 7. The factors 2 and 7 mentioned here are prime numbers. We cannot divide them further. In conclusion, we have written 56 as a product of prime numbers. This is called the Prime Factorization of 56. The individual factors are called Prime Factors. For example, 2 and 7 are prime factors of 56. Every number greater than 1 has a prime factorization. The concept is: keep writing a composite number in the form of factors until only prime numbers remain.",
                examples: [
                  "56 = 2 × 2 × 2 × 7",
                  "36 = 2 × 2 × 3 × 3",
                  "30 = 2 × 3 × 5",
                  "63 = 3 × 3 × 7",
                ],
              },
              {
                title: "Uniqueness of Prime Factorization",
                content:
                  "The number 1 has no prime factorization. It is not divisible by any prime number. What would be the prime factorization of a prime number like 7? It is just 7 (we cannot divide it further). Let's look at more examples: We wrote 63 as 3 × 3 × 7 in different ways. Are they different? Actually, no! The same prime numbers 3 and 7 appear in both cases. In both cases, the number 3 appears twice and 7 appears once. In the figure, prime factorization of 36 is shown in four different ways. See that in all four cases, we get 2 twice and 3 twice. Multiply them again and check. We get 36 in all four cases. If we ignore the order of prime factors, there is only one prime factorization for any number. Order doesn't matter. As we saw in these examples, we can reach the result through different paths. Can you explain why 30 = 2 × 3 × 5, no matter how you multiply 2, 3, and 5? When we multiply numbers, we can do it in any order. The result will be the same. This is due to the commutative and associative properties of multiplication.",
                examples: [
                  "36 = 2 × 2 × 3 × 3 (always, regardless of order)",
                  "225 = 3 × 3 × 5 × 5",
                  "30 = 2 × 3 × 5",
                ],
              },
              {
                title: "Prime Factorization of Products",
                content:
                  "When finding prime factorization of a number, we first write it as a product of two factors. For example, 72 = 12 × 6. Then we find prime factorization of each factor. In the above example, 12 = 2 × 2 × 3 and 6 = 2 × 3. Can you now tell the prime factorization of 72? To get the prime factorization of the original number, we need to combine the factors: 72 = 2 × 2 × 3 × 2 × 3 = 2 × 2 × 2 × 3 × 3.",
                examples: [
                  "72 = 8 × 9 = (2×2×2) × (3×3) = 2³ × 3²",
                  "84 = 12 × 7 = (2×2×3) × 7 = 2² × 3 × 7",
                ],
              },
              {
                title: "Checking Divisibility Using Prime Factorization",
                content:
                  "We can say that if a number is divisible by another number, then the prime factorization of the second number will be included in the prime factorization of the first number. We say that 48 is divisible by 12 because when we divide 48 by 12, we get remainder 0. How can we check if one number divides another without long division? Example: Is 168 divisible by 12? Find prime factorizations of both: 168 = 2 × 2 × 2 × 3 × 7 and 12 = 2 × 2 × 3. Since we can multiply in any order, it's clear that 168 = 2 × 2 × 3 × 2 × 7 = 12 × 14. So 168 is divisible by 12.",
                examples: [
                  "168 ÷ 12 = 14 (exactly divisible)",
                  "Check if 75 is divisible by 21: 75 = 3 × 5 × 5, 21 = 3 × 7. Since 7 is not a factor of 75, 75 is NOT divisible by 21.",
                  "Check if 42 is divisible by 12: 42 = 2 × 3 × 7, 12 = 2 × 2 × 3. The prime factor 2 appears twice in 12 but only once in 42, so 42 is NOT divisible by 12.",
                ],
              },
              {
                title: "5.5 Tests for Divisibility of Numbers",
                content:
                  "So far, we have found factors of numbers in various contexts to determine whether a number is prime, or whether a pair of numbers is co-prime. Finding factors of small numbers is easy. How can we find factors of large numbers? Let's take the number 8560. Does it have any factors from 2 to 10 (2, 3, 4, 5, ..., 9, 10)? Whether these numbers are factors can be easily determined without long division. Can you find them?",
                examples: [
                  "Tests for divisibility help us check quickly without actual division",
                ],
              },
              {
                title: "Divisibility by 10",
                content:
                  "Let's take 10 as an example. Is 8560 divisible by 10? Another way: Is 10 a factor of 8560? For this, we look at the pattern of multiples of 10. Some initial multiples of 10 are: 10, 20, 30, 40... Continue this sequence and observe the pattern. Is 125 a multiple of 10? Does this number appear in the previous sequence? Why or why not? Can you now tell if 8560 is divisible by 10? Consider this statement: Numbers that are divisible by 10 end in '0'. Do you agree?",
                examples: [
                  "10, 20, 30, 40, 50, 60, 70, 80, 90, 100... all end in 0",
                  "8560 ends in 0, so it's divisible by 10",
                  "125 ends in 5, so it's NOT divisible by 10",
                ],
              },
              {
                title: "Divisibility by 5",
                content:
                  "5 is another number whose divisibility can be easily checked. How do we do it? Make a list of multiples of 5, like 5, 10, 15, 20, 25... What do you see in these numbers? Do you see a pattern in their last digit? What is the largest number less than 399 that is divisible by 5? Is 8560 divisible by 5? Consider this statement: Numbers that are divisible by 5 end in either '0' or '5'. Do you agree?",
                examples: [
                  "5, 10, 15, 20, 25, 30, 35, 40... end in 0 or 5",
                  "8560 ends in 0, so it's divisible by 5",
                  "399 is not divisible by 5 (ends in 9), largest less than 399 divisible by 5 is 395",
                ],
              },
              {
                title: "Divisibility by 2",
                content:
                  "Some initial multiples of 2 are: 2, 4, 6, 8, 10, 12, 14, 16, 18, 20... What do you see here? Do you notice any pattern in their last digit? Is 682 divisible by 2? Can we answer this without long division? Is 8560 divisible by 2? Why or why not? Consider this statement: Numbers that are divisible by 2 end in '0', '2', '4', '6', or '8'. Do you agree? What are all multiples of 2 between 399 and 411?",
                examples: [
                  "Even numbers: 2,4,6,8,10,12... end in 0,2,4,6,8",
                  "682 ends in 2, so it's divisible by 2",
                  "8560 ends in 0, so it's divisible by 2",
                  "Multiples of 2 between 399 and 411: 400,402,404,406,408,410",
                ],
              },
              {
                title: "Divisibility by 4",
                content:
                  "Whether a number is divisible by 4 can also be easily checked. Look at its multiples: 4, 8, 12, 16, 20, 24, 28, 32... Do you see any pattern that could be used? For 10, 5, and 2, there were patterns in the last digit that we used to check divisibility. Similarly, can we tell by looking at the last digit whether a number is divisible by 4? This pattern doesn't apply here. Look at 12 and 22 - they have the same last digit, but 12 is a multiple of 4 while 22 is not. Similarly, 14 and 24 have the same last digit, but 14 is not a multiple of 4 while 24 is. The same with 16 and 26, or 18 and 28. This means we cannot tell by looking at just the last digit whether a number is a multiple of 4.",
                examples: [
                  "12 is divisible by 4 (12÷4=3), 22 is not",
                  "24 is divisible by 4, 14 is not",
                  "16 is divisible by 4, 26 is not",
                  "28 is divisible by 4, 18 is not",
                ],
              },
              {
                title: "Rule for Divisibility by 4",
                content:
                  "Can we answer this question by looking at more digits of the number? Make a list of multiples of 4 between 1 and 200 and find the pattern. Find numbers between 330 and 340 that are divisible by 4. Also, find numbers between 1730 and 1740, and between 2030 and 2040 that are divisible by 4. What do you see? Is 8536 divisible by 4? Consider these statements: 1. When checking divisibility by 4, only the last two digits of the number matter. 2. If the number formed by the last two digits is divisible by 4, then the original number is divisible by 4. 3. If a number is divisible by 4, then the number formed by its last two digits is divisible by 4. Do you agree? Why or why not?",
                examples: [
                  "330 to 340: numbers divisible by 4 are 332, 336",
                  "1730 to 1740: 1732, 1736",
                  "2030 to 2040: 2032, 2036",
                  "8536: last two digits 36, 36÷4=9, so 8536 is divisible by 4",
                ],
              },
              {
                title: "Divisibility by 8",
                content:
                  "It's interesting that divisibility by 8 can also be easily checked. Can we use the last two digits for this? Find numbers between 120 and 140 that are divisible by 8. Also, find numbers between 1120 and 1140, and between 3120 and 3140 that are divisible by 8. What do you see? Change the last two digits of 8560 so that the resulting number is a multiple of 8. Consider these statements: 1. When checking if a number is divisible by 8, only the last three digits matter. 2. If the number formed by the last three digits is divisible by 8, then the original number is divisible by 8. 3. If the original number is divisible by 8, then the number formed by its last three digits is divisible by 8. Do you agree? Why or why not?",
                examples: [
                  "120 to 140: multiples of 8 are 120, 128, 136",
                  "1120 to 1140: 1120, 1128, 1136",
                  "3120 to 3140: 3120, 3128, 3136",
                  "8560: last three digits 560, 560÷8=70, so 8560 is divisible by 8",
                ],
              },
              {
                title: "5.6 Fun with Numbers",
                content:
                  "Special Numbers: Look at the four numbers in this box: 9, 16, 25, 43. Which number do you think is special? Why do you think so? See what Guna's classmates shared: Kanakavati says, '9 is special because it's a single-digit number while others are two-digit.' Gurpreet says, '9 is special because it's the only number that's a multiple of 3.' Murugan says, '16 is special because it's the only even number and the only multiple of 4.' Gopika says, '25 is special because it's the only multiple of 5.' Yajniki says, '43 is special because it's the only prime number.' Radha says, '43 is special because it's the only number that's not a square.'",
                examples: [
                  "9 is a square number (3²) and a multiple of 3",
                  "16 is a square number (4²) and a multiple of 4",
                  "25 is a square number (5²) and a multiple of 5",
                  "43 is a prime number",
                ],
              },
              {
                title: "A Prime Puzzle",
                content:
                  "The figure on the left shows a puzzle. The figure on the right is its solution. Think about what rules might be used to solve the puzzle. Rules: Fill the grid with only prime numbers so that the product of each row equals the number on the right of the row, and the product of each column equals the number below the column.",
                examples: [
                  "3×3 grid puzzle with products given",
                  "Only prime numbers can be used (2,3,5,7,11,13,17,19,23...)",
                ],
              },
            ],

            exercises: [
              {
                type: "explore",
                questions: [
                  // Section 5.1 Questions
                  "At which number will 'Idli-Vada' be said for the tenth time?",
                  "If the game is played for numbers 1 to 90, find: a. How many times will a child say 'Idli' (including times when 'Idli-Vada' is said)? b. How many times will a child say 'Vada' (including times when 'Idli-Vada' is said)? c. How many times will a child say 'Idli-Vada'?",
                  "What will happen if the game is played up to 900? How will your answers change?",
                  "Is this figure related to the 'Idli-Vada' game in any way? (Hint: Imagine playing this game up to 30. If you play up to 60, draw a similar figure.)",
                  "Now play the 'Idli-Vada' game with different number pairs: a. 2 and 5 b. 3 and 7 c. 4 and 6. We'll say 'Idli' for multiples of the smaller number, 'Vada' for multiples of the larger number, and 'Idli-Vada' for common multiples. If the game is played up to 60, draw figures similar to Figure 5.1.",
                  "Yesterday we played this game with 2 numbers. We ended by saying 'Idli' or 'Idli-Vada'. No one said only 'Vada'. Which other number could it be from: 2, 3, 5, 8, 10?",

                  // Section 5.2 Questions
                  "Find all multiples of 40 between 310 and 410.",
                  "Who am I? a. I am a number less than 40, one of my factors is 7, and the sum of my digits is 8. b. I am a number less than 100, two of my factors are 3 and 5, and one of my digits is 1 more than the other.",
                  "A number whose sum of all factors is twice the number is called a Perfect Number. 28 is a perfect number. Its factors are 1, 2, 4, 7, 14, and 28, their sum is 56 which is twice 28. Find a perfect number between 1 and 10.",
                  "Find common factors: a. 20 and 28 b. 35 and 50 c. 4, 8 and 12 d. 5, 15 and 25",
                  "Find three numbers that are multiples of 25 but not multiples of 50.",
                  "Anshu and her friends are playing the 'Idli-Vada' game with two numbers, both less than 10. If someone says 'Idli-Vada' for the first time after 50, what are the two numbers that were called 'Idli' and 'Vada'?",
                  "In the treasure hunt game, Grampy placed treasures on 28 and 70. What jump size should be chosen to reach both numbers?",
                  "In the figure below, multiplication has erased all numbers except the common multiples. Find out what those numbers could be and write the missing numbers in the empty spaces. [Multiples of __, Multiples of __, Common multiples: 72, 48, 24]",
                  "Find the smallest number that is a multiple of all numbers from 1 to 10 except 7.",
                  "Find the smallest number that is a multiple of all numbers from 1 to 10.",

                  // Section 5.3 Questions
                  "Which of these number pairs are co-prime? a. 18 and 35 b. 15 and 37 c. 30 and 415 d. 17 and 69 e. 81 and 18",
                  "While playing the 'Idli-Vada' game with different number pairs, Anshu noticed something interesting! 1. Sometimes, the first common multiple was equal to the product of both numbers. 2. In other situations, the first common multiple was smaller than the product of both numbers. Find examples for each statement above. How is this related to whether the number pair is co-prime?",
                  "Draw similar string art figures for: a. 15 pegs, interval 10 b. 10 pegs, interval 7 c. 14 pegs, interval 6 d. 8 pegs, interval 7",

                  // Section 5.4 Questions
                  "Are the following number pairs co-prime? First guess, then check your answer by finding prime factorization: a. 30 and 45 b. 57 and 85 c. 121 and 1331 d. 343 and 216",
                  "Is the first number divisible by the second number? Use prime factorization: a. 225 and 27 b. 96 and 24 c. 343 and 17 d. 999 and 99",
                  "The prime factorization of the first number is 2×3×7 and the prime factorization of the second number is 3×7×11. Are these numbers co-prime? Does one number divide the other?",
                  "Guna says, 'Any two prime numbers are co-prime.' Is he correct?",

                  // Section 5.5 Questions
                  "2024 is a leap year (February has 29 days). A leap year occurs in every year that is a multiple of 4, except those years that are divisible by 100 but not by 400. a. From your birth year until now, which years were leap years? b. How many leap years will there be from 2024 to 2099?",
                  "Find the largest and smallest 4-digit numbers that are divisible by 4 and are also palindromes.",
                  "Find out and determine whether each statement is always true, sometimes true, or never true. You can give examples to support your reasoning: a. The sum of two even numbers is a multiple of 4. b. The sum of two odd numbers is a multiple of 4.",
                  "Find the remainder when each of the following numbers is divided by (a) 10, (b) 5, (c) 2: 78, 99, 173, 572, 980, 1111, 2345",
                  "The teacher asked whether 14560 is divisible by 2, 4, 5, 8, and 10. Guna checked divisibility by only two of these numbers and said that 14560 is divisible by all of them. Which two numbers could they be?",
                  "Which of the following numbers are divisible by all of 2, 4, 5, 8, and 10? 572, 2352, 5600, 6000, 77622160",
                  "Write two numbers whose product is 10000. The units digit of both numbers should not be zero.",

                  // Section 5.6 Questions
                  "Below are some boxes, each containing four numbers. For each box, try to say how each number is special compared to the others. Share with your classmates and find out who gave the same reasons as you. Did anyone give different reasons that you might not have thought of? [Boxes with numbers like: 8, 12, 16, 21; 11, 21, 31, 41; 36, 49, 64, 81]",
                ],
                answers: [
                  // Section 5.1 Answers
                  "At LCM of the two numbers × 10",
                  "Depends on the number pair chosen",
                  "Pattern would continue with more occurrences",
                  "Yes, it shows common multiples pattern",
                  "Draw figures showing common multiples",
                  "The number could be 5 or 10",

                  // Section 5.2 Answers
                  "40, 80, 120, 160, 200, 240, 280, 320, 360, 400",
                  "a. 35 (factors: 1,5,7,35; sum of digits 3+5=8) b. 45 (factors include 3 and 5; digits 4 and 5 differ by 1)",
                  "6 (factors: 1,2,3,6; sum = 12 = 2×6)",
                  "a. 1,2,4 b. 1,5 c. 1,2,4 d. 1,5",
                  "25, 75, 125 (multiples of 25 not divisible by 50 are odd multiples of 25)",
                  "Numbers could be 7 and 8 (LCM = 56, first common multiple after 50)",
                  "Common factors of 28 and 70: 1,2,7,14. So jump sizes 1,2,7,14 will work (but 1 not allowed in some versions)",
                  "Numbers could be multiples of 24, with common multiples 24,48,72",
                  "LCM of 1-10 except 7 = LCM(1,2,3,4,5,6,8,9,10) = 360",
                  "LCM of 1-10 = 2520",

                  // Section 5.3 Answers
                  "a. Yes (18=2×3×3, 35=5×7) b. Yes (15=3×5, 37 prime) c. No (30=2×3×5, 415=5×83, common factor 5) d. Yes (17 prime, 69=3×23) e. No (81=3⁴, 18=2×3², common factor 3²=9)",
                  "For co-prime numbers, first common multiple = product; for numbers with common factors, LCM < product",
                  "Draw accordingly",

                  // Section 5.4 Answers
                  "a. No (30=2×3×5, 45=3²×5, common factors 3,5) b. Yes (57=3×19, 85=5×17) c. No (121=11², 1331=11³, common factor 11) d. Yes (343=7³, 216=2³×3³)",
                  "a. No (225=3²×5², 27=3³, needs 3³) b. Yes (96=2⁵×3, 24=2³×3) c. No (343=7³, 17 prime) d. Yes (999=3³×37, 99=3²×11, needs 11? Actually 999÷99=10.09, not integer - check: 99=3²×11, 999 lacks factor 11, so NO)",
                  "Not co-prime (common factor 3×7=21). First number = 42, second = 231, neither divides the other",
                  "Yes, any two distinct primes have only 1 as common factor",

                  // Section 5.5 Answers
                  "a. Personal answer based on birth year b. From 2024 to 2099: 2024,2028,2032,2036,2040,2044,2048,2052,2056,2060,2064,2068,2072,2076,2080,2084,2088,2092,2096 → 19 leap years",
                  "Largest: 8888 (divisible by 4, palindrome), Smallest: 1001? 1001 not divisible by 4 (ends 01). 1111? No. 1221? 21 not divisible by 4. Actually smallest 4-digit palindrome divisible by 4 is 2112 (12÷4=3)",
                  "a. Sometimes true (2+2=4 yes, 4+6=10 not multiple of 4) b. Sometimes true (1+3=4 yes, 3+5=8 yes, 5+7=12 yes, but 1+5=6 not multiple of 4)",
                  "Remainders: 78: (a)8 (b)3 (c)0; 99: (a)9 (b)4 (c)1; 173: (a)3 (b)3 (c)1; 572: (a)2 (b)2 (c)0; 980: (a)0 (b)0 (c)0; 1111: (a)1 (b)1 (c)1; 2345: (a)5 (b)0 (c)1",
                  "If divisible by 8 and 5, then divisible by 40, which implies divisible by 2,4,10 as well. So 8 and 5.",
                  "5600, 6000, 77622160 (check last three digits for 8, last two for 4, last digit for 2,5,10)",
                  "16 × 625 = 10000 (16 ends in 6, 625 ends in 5)",

                  // Section 5.6 Answers
                  "Box 1 (8,12,16,21): 8-cube, 12-composite, 16-square, 21-product of primes; Box 2 (11,21,31,41): 11-prime, 21-composite, 31-prime, 41-prime; Box 3 (36,49,64,81): all perfect squares",
                ],
              },
            ],

            activities: [
              "Play the 'Idli-Vada' game with classmates to understand common multiples",
              "Treasure hunt game with different jump sizes to find common factors",
              "Arrange figs or counters in rectangles to understand prime and composite numbers",
              "Sieve of Eratosthenes activity to find all prime numbers up to 100",
              "String art activity to explore co-prime numbers",
              "Prime factorization tree diagrams",
              "Divisibility rules practice with large numbers",
              "Find special numbers in given sets and explain why they're special",
              "Prime number grid puzzles",
            ],

            summary: [
              "■ If a number is divisible by another number, then the second number is a factor of the first number. For example, 4 is a factor of 12 because 12 is divisible by 4 (12 ÷ 4 = 3).",
              "■ Numbers like 2, 3, 5, 7, 11,... are called Prime Numbers. They have exactly two factors: 1 and the number itself.",
              "■ Composite numbers like 4, 6, 8, 9,... have more than two factors. They have at least one factor other than 1 and itself. For example, 8 has factor 4, 9 has factor 3.",
              "■ Every number greater than 1 can be written as a product of prime factors. This is called the Prime Factorization of the number. For example, 84 = 2 × 2 × 3 × 7.",
              "■ A number has only one prime factorization, where the order of factors doesn't matter.",
              "■ Two numbers that have no common factor other than 1 are called Co-prime Numbers.",
              "■ To check if two numbers are co-prime, find their prime factorizations and see if they have any common prime factor. If not, they are co-prime.",
              "■ If the prime factorization of the first number is contained in the prime factorization of the second number, then the first number is a factor of the second number.",
              "■ Divisibility rules help us check factors quickly: divisible by 2 if last digit is even; by 4 if last two digits form a number divisible by 4; by 5 if last digit is 0 or 5; by 8 if last three digits form a number divisible by 8; by 10 if last digit is 0.",
            ],
          },
        },
        // ncertContent.js - Add this as Chapter 6
        {
          id: 6,
          title: "Perimeter and Area",
          content: {
            introduction:
              "In this chapter, we will explore the concepts of perimeter and area of various shapes. We will learn how to calculate the perimeter of rectangles, squares, triangles, and regular polygons. We will also understand how to find the area of rectangles, squares, and triangles, and apply these concepts to solve real-life problems.",

            sections: [
              {
                title: "6.1 Perimeter",
                content:
                  "Do you remember what the perimeter of a closed plane figure is? Let's refresh our understanding. The perimeter of any closed plane figure is the distance covered along its boundary when you go around it once. For a polygon (a closed plane figure made of line segments), the perimeter is defined as the sum of the lengths of all its sides—the total distance along its outer boundary. Perimeter of a polygon = Sum of the lengths of all its sides. Let's now recall the formulas for the perimeter of a rectangle, square, and triangle.",
                examples: [
                  "Perimeter is the total distance around a shape",
                  "For any polygon, perimeter = sum of all sides",
                ],
              },
              {
                title: "Perimeter of a Rectangle",
                content:
                  "Consider a rectangle ABCD with length 12 cm and breadth 8 cm. What will be its perimeter? Perimeter of rectangle = Sum of lengths of all four sides = AB + BC + CD + DA = AB + BC + AB + BC (since opposite sides are equal) = 2 × AB + 2 × BC = 2 × (AB + BC) = 2 × (12 cm + 8 cm) = 2 × 20 cm = 40 cm. Opposite sides of a rectangle are always equal. So AB = CD and AD = BC. From this example we see that: Perimeter of a rectangle = length + breadth + length + breadth. Perimeter of a rectangle = 2 × (length + breadth). The perimeter of a rectangle is twice the sum of its length and breadth.",
                examples: [
                  "Rectangle with length 12 cm, breadth 8 cm → Perimeter = 40 cm",
                  "Formula: P = 2 × (l + b)",
                ],
              },
              {
                title: "Perimeter of a Square",
                content:
                  "Debojit wants to put a colored tape around a square photo frame with side 1 m, as shown in the figure. How long a colored tape does he need? Since Debojit wants to put tape around the square photo frame, he needs to find the perimeter of the square photo frame. Therefore, length of tape required = Perimeter of square = Sum of lengths of all four sides of the square = 1 m + 1 m + 1 m + 1 m = 4 m. We know that all four sides of a square are equal in length. So instead of adding each side, we can multiply the length of one side by 4. Hence, length of tape required = 4 × 1 m = 4 m. From this example we see that: Perimeter of a square = 4 × length of one side. The perimeter of a square is quadruple the length of one side.",
                examples: [
                  "Square with side 1 m → Perimeter = 4 m",
                  "Formula: P = 4 × s",
                ],
              },
              {
                title: "Perimeter of a Triangle",
                content:
                  "Consider a triangle with three sides 4 cm, 5 cm, and 7 cm. Find the perimeter of this triangle. Perimeter of triangle = 4 cm + 5 cm + 7 cm = 16 cm. Perimeter of a triangle = Sum of the lengths of its three sides.",
                examples: [
                  "Triangle with sides 4 cm, 5 cm, 7 cm → Perimeter = 16 cm",
                  "Formula: P = a + b + c",
                ],
              },
              {
                title: "Example: Table Cover Border",
                content:
                  "Akshi wants to put lace around a rectangular tablecloth of length 3 m and breadth 2 m. How long a lace does Akshi need? Solution: Length of rectangular tablecloth = 3 m. Breadth of rectangular tablecloth = 2 m. Akshi wants to put lace around the tablecloth. Therefore, the length of lace required will be equal to the perimeter of the rectangular tablecloth. Now, perimeter of rectangular tablecloth = 2 × (length + breadth) = 2 (3 m + 2 m) = 2 × 5 m = 10 m. Hence, the length of lace required is 10 m.",
                examples: ["Tablecloth 3 m × 2 m → Lace needed = 10 m"],
              },
              {
                title: "Example: Park Laps",
                content:
                  "Usha takes three rounds around a square park of side 75 m. Find the distance covered by her. Solution: Perimeter of square park = 4 × length of one side = 4 × 75 m = 300 m. Distance covered by Usha in one round = 300 m. Therefore, total distance covered by Usha in three rounds = 3 × 300 m = 900 m.",
                examples: [
                  "Square park side 75 m → One lap = 300 m → Three laps = 900 m",
                ],
              },
              {
                title: "Running Tracks Puzzle",
                content:
                  "Each track is a rectangle. Akshi's track has length 70 m and breadth 40 m. One complete round on this track covers 220 m, i.e., 2 × (70+40) m = 220 m. This is the distance covered by Akshi in one round. Toshi's track is a square with each side 60 m. One complete round on this track covers 240 m, i.e., 4 × 60 m = 240 m. This is the distance covered by Toshi in one round.",
                examples: [
                  "Akshi's rectangular track: 70 m × 40 m → Perimeter = 220 m",
                  "Toshi's square track: 60 m side → Perimeter = 240 m",
                ],
              },
              {
                title: "Estimation and Verification",
                content:
                  "Take a piece of paper or newspaper. Cut this piece in different ways to create some random shapes. Estimate the total length of boundaries of each shape. Now measure the perimeter of each shape using a scale or measuring tape and verify. Akshi says that this triangle has a perimeter of 9 units. Toshi believes it cannot be 9 units and that the perimeter will be more than 9 units. What do you think? In this figure, there are two different types of units: straight lines and diagonal lines. Measure the length of red lines and blue lines—are they equal? We will call red lines straight units and blue lines diagonal units. So the perimeter of this triangle is 6 straight units + 3 diagonal units. We can write this in short form as: 6s + 3d units.",
                examples: [
                  "Perimeter on grid paper can be measured in straight and diagonal units",
                  "Different shapes can have same area but different perimeters",
                ],
              },
              {
                title: "Perimeter of Regular Polygons",
                content:
                  "Like squares, closed figures that have all sides equal and all angles equal are called Regular Polygons. We studied regular polygons in Chapter 1, 'Shape Sequences 1'. Examples of regular polygons include: Equilateral triangle (with all three sides and all three angles equal) and Regular pentagon (with all five sides and all five angles equal).",
                examples: [
                  "Equilateral triangle: all sides equal, all angles equal (60°)",
                  "Regular pentagon: all sides equal, all angles equal (108°)",
                ],
              },
              {
                title: "Perimeter of an Equilateral Triangle",
                content:
                  "We know that the perimeter of any triangle is the sum of the lengths of its three sides. Using this concept, we can find the perimeter of an equilateral triangle. Perimeter of equilateral triangle = AB + BC + CA = AB + BC + AC = AB + AB + AB (since all sides are equal) = 3 × length of one side. Perimeter of equilateral triangle = 3 × length of one side. What is common between a square and an equilateral triangle?",
                examples: [
                  "Equilateral triangle with side 5 cm → Perimeter = 15 cm",
                  "Formula: P = 3 × s",
                ],
              },
              {
                title: "Cut and Join",
                content:
                  "A rectangular paper piece with dimensions 6 cm × 4 cm is cut into two equal pieces, as shown in the figure. These two pieces are joined in different ways. For example, arrangement (a) has perimeter 28 cm. Find the perimeter of all other arrangements shown below. Arrange the two pieces shown in the figure to make a shape with perimeter 22 cm.",
                examples: [
                  "Rectangular piece 6 cm × 4 cm cut diagonally",
                  "Different arrangements give different perimeters",
                  "Same area can have different perimeters",
                ],
              },
              {
                title: "6.2 Area",
                content:
                  "In previous classes, we have studied the areas of closed (regular and irregular) figures. Let's recall some key points. The measure of the region enclosed by a closed figure is called its area. Do you remember how we found formulas for the area of rectangles and squares using grid paper in previous classes? Area of a square = side × side. Area of a rectangle = length × breadth. Let's look at some real-life problems involving these concepts.",
                examples: [
                  "Area is the amount of space inside a closed figure",
                  "Square area = s × s",
                  "Rectangle area = l × b",
                ],
              },
              {
                title: "Example: Carpet on Floor",
                content:
                  "A floor is 5 m long and 4 m wide. A square carpet of side 3 m is laid on the floor. Find the area of the floor that is not carpeted. Solution: Length of floor = 5 m. Breadth of floor = 4 m. Area of floor = length × breadth = 5 m × 4 m = 20 square m. Length of square carpet = 3 m. Area of carpet = side × side = 3 m × 3 m = 9 square m. So the area of the floor covered by carpet is 9 square m. Therefore, the area of the floor that is not carpeted = Area of floor − Area of carpeted floor = 20 square m − 9 square m = 11 square m.",
                examples: [
                  "Floor 5 m × 4 m = 20 m²",
                  "Carpet 3 m × 3 m = 9 m²",
                  "Uncovered area = 20 − 9 = 11 m²",
                ],
              },
              {
                title: "Example: Flower Beds in Plot",
                content:
                  "Four square flower beds of side 4 m are made at the four corners of a plot of land 12 m long and 10 m wide. Find the area of the remaining plot excluding the flower beds. Solution: Length of plot (l) = 12 m. Width of plot (w) = 10 m. Area of entire plot = length (l) × width (w) = 12 m × 10 m = 120 square m. Each flower bed has side length (s) = 4 m. Area of one flower bed = side (s) × side (s) = 4 m × 4 m = 16 square m. Hence, area of 4 flower beds = 4 × 16 square m = 64 square m. Therefore, area of remaining plot = Area of entire plot − Area of 4 flower beds = 120 square m − 64 square m = 56 square m.",
                examples: [
                  "Plot 12 m × 10 m = 120 m²",
                  "Four flower beds 4 m × 4 m each = 64 m² total",
                  "Remaining area = 120 − 64 = 56 m²",
                ],
              },
              {
                title: "Tangram Area Exploration",
                content:
                  "Cut out the tangram pieces given at the end of your textbook. 1. Find out how many pieces have the same area. 2. How many times larger is shape D compared to shape C? What is the relationship between C, D, and E? 3. Which shape has larger area—shape D or shape F? Give reason for your answer. 4. Which shape has larger area—shape F or G? Give reason for your answer. 5. How does the area of shape A compare to shape G? Is it twice as large? Is it four times as large? Hint: After cutting the tangram pieces, by placing one piece over another, we find that pieces A and B have the same area, pieces C and E have the same area. You can see that pieces C and E together completely cover D. This means that D has twice the area of C or E.",
                examples: [
                  "Tangram has 7 pieces",
                  "A and B have equal area",
                  "C and E have equal area",
                  "D = C + E, so D has twice the area of C",
                ],
              },
              {
                title: "Estimating Area Using Grid Paper",
                content:
                  "Look at the figures below and guess which one has a larger area. We can estimate the area of any simple closed figure using squared paper or graph paper, where each square measures 1 unit × 1 unit or 1 square unit. To estimate the area, we will trace the shape on a transparent paper and place this paper on squared paper or graph paper. Then follow these rules: 1. One full small square on squared paper or graph paper is taken as 1 square unit. 2. Ignore areas less than half a square. 3. If more than half of a square is covered by the region, count it as 1 square unit. 4. If exactly half a square is covered, take its area as ½ square unit.",
                examples: [
                  "Full square = 1 unit²",
                  "Half square = ½ unit²",
                  "More than half = 1 unit²",
                  "Less than half = 0 unit²",
                ],
              },
              {
                title: "Let's Explore: Why Squares for Area?",
                content:
                  "Generally, why do we measure area in squares? Draw a circle with diameter (width) of 3 units on a graph sheet. Count the squares to estimate the area of the circular region. Why don't we use circles instead of squares to measure area? In the figure shown, we can see that circles cannot be packed without leaving gaps between them. Therefore, measuring area exactly using circles as units would be difficult. In the figure, two identical rectangles are filled with circles in two different ways—the first rectangle has 42 circles and the second has 44 circles. Try filling a given space using different shapes (triangles and rectangles) without overlapping or leaving gaps, and find out the advantages of using a square shape over any other shape for finding area. Write down the points that show why squares are the best shape for measuring area.",
                examples: [
                  "Circles leave gaps when packed",
                  "Squares tile perfectly without gaps",
                  "Squares are ideal for area measurement",
                ],
              },
              {
                title: "Let's Explore: Rectangles with Fixed Area",
                content:
                  "On a square grid paper (1 square = 1 square unit), draw as many rectangles as possible with sides as whole numbers and area 24 square units. a. Which rectangle has the largest perimeter? b. Which rectangle has the smallest perimeter? c. If you take a rectangle of area 32 square cm, what would be your answer? Looking at any given area, is it possible to identify the shape of the rectangle with maximum and minimum perimeter? Give examples and reasons for your answer.",
                examples: [
                  "Area 24: possible rectangles 1×24, 2×12, 3×8, 4×6",
                  "Largest perimeter: 1×24 (P = 50 units)",
                  "Smallest perimeter: 4×6 (P = 20 units)",
                  "For fixed area, square gives minimum perimeter",
                ],
              },
              {
                title: "6.3 Area of a Triangle",
                content:
                  "Draw a rectangle on a piece of paper and draw one of its diagonals. Cut along the diagonal to get two triangles. Check if both triangles completely overlap each other. Do they have the same area? You can also try this with a square. Can you draw any conclusions from this process? Write them here. Now look at the figures below. Is the area of the blue rectangle greater than, less than, or equal to the area of the yellow triangle? Why? Can you see any relationship between the blue rectangle and the yellow triangle and their areas? Write the relationship here.",
                examples: [
                  "A diagonal divides a rectangle into two equal triangles",
                  "Each triangle has area = half of rectangle area",
                  "Triangle area = ½ × base × height",
                ],
              },
              {
                title: "Teacher's Note",
                content:
                  "Help students connect their conclusions and write the relationships they observe in their own words. This will lead them to a simple statement. Recall the definition of a diagonal in class. Draw suitable triangles on grid paper to verify the conclusions and relationships obtained from observing the given exercises.",
                examples: [
                  "Guide students to discover area formulas",
                  "Use grid paper for verification",
                ],
              },
              {
                title: "Making 'More' or 'Less'",
                content:
                  "Observe these two figures. Is there any similarity or difference? Using 9 unit squares (area 9 square units), we have made two figures with different perimeters—here the first figure has perimeter 12 units and the second has perimeter 20 units. Arrange or draw figures with area 9 square units to get other perimeters. Remember that the sides of squares should align completely with each other in at least one direction, and all squares together should form a connected figure. Using 9 unit squares, solve the following: 1. What is the smallest possible perimeter? 2. What is the largest possible perimeter? 3. Draw a figure with perimeter 18 units. 4. Can you draw a figure of another shape for each of the above three perimeters, or is only one figure possible with that perimeter? What is your reasoning?",
                examples: [
                  "9 squares arranged in 3×3 square → P = 12 units (minimum)",
                  "9 squares arranged in straight line → P = 20 units (maximum)",
                  "Same area can give different perimeters",
                ],
              },
              {
                title: "Adding a Square to a Shape",
                content:
                  "Let's try something trickier. Below is a figure with perimeter 24 units. Without recalculating the entire perimeter, observe, think, and find out what change will occur in the perimeter if a new square is added to the figure as shown. Place the new square at different positions and think about what changes occur in the perimeter. Can you place this square so that the perimeter: a) increases; b) decreases; c) remains the same?",
                examples: [
                  "Adding a square can increase, decrease, or not change perimeter",
                  "Depends on where the square is attached",
                ],
              },
              {
                title: "House Floor Plan",
                content:
                  "The figure below shows the floor plan of Charan's house. This is a rectangular plot. Look at this map. What do you observe? Some measurements are given. a. Find the missing measurements. b. Find the area of his house. Now find the missing measurements and area of Sharan's house. The map is given below. Some measurements are given. a. Find the missing measurements. b. Find the area of his house. What would be the dimensions of each room in Sharan's house? Compare the areas and perimeters of Sharan's and Charan's houses.",
                examples: [
                  "Floor plans with multiple rooms",
                  "Find missing lengths using given dimensions",
                  "Calculate total area by adding room areas",
                ],
              },
              {
                title: "Area Puzzles",
                content:
                  "In each green figure, find the missing side length or area value.",
                examples: [
                  "Composite shapes where some dimensions are unknown",
                  "Use area relationships to find missing values",
                ],
              },
            ],

            exercises: [
              {
                type: "explore",
                questions: [
                  // Section 6.1 Questions
                  "Find the missing values: a. Perimeter of rectangle = 14 cm; breadth = 2 cm; length = ______? b. Perimeter of square = side length 20 cm = ______? c. Perimeter of rectangle = length 12 m, breadth 3 m = ______?",
                  "A rectangle is made using a wire piece with side lengths 5 cm and 3 cm. If the wire is straightened and made into a square, what will be the length of one side of the square?",
                  "If the perimeter of a triangle is 55 cm and the lengths of two sides are 20 cm and 14 cm respectively, find the length of the third side.",
                  "Find the cost of fencing a rectangular park of length 150 m and breadth 120 m at the rate of ₹40 per meter.",
                  "A piece of thread is 36 cm long. What will be the length of each side if the thread is used to make: a. A square b. A triangle with all sides of equal length, and c. A regular hexagon (a closed figure with six sides of equal length)?",
                  "A farmer has a rectangular plot of length 230 m and breadth 160 m. He wants to make three complete rounds of fencing around the plot with rope, as shown in the figure. Find the total length of rope used by the farmer.",

                  // Akshi and Toshi track questions
                  "Find the total distance covered by Akshi in 5 rounds.",
                  "Find the total distance covered by Toshi in 7 rounds. Who covered more distance, Akshi or Toshi?",
                  "Think and mark the positions as directed: a. Mark point 'A' where Akshi will reach after running 250 m. b. Mark point 'B' where Akshi will reach after running 500 m. c. Now Akshi has run 1000 m. How many complete rounds has she made on her track? Mark point 'C' at this position. d. Mark point 'X' where Toshi will reach after running 250 m. e. Mark point 'Y' where Toshi will reach after running 500 m. f. Now Toshi has run 1000 m. How many complete rounds has she made on her track? Mark point 'Z' at this position.",
                  "Deep Thinking: Generally in races, all runners have the same finish line. Here there are two square race tracks, with the inner track having each side 100 m and the outer track having each side 150 m. The finish line for both runners is shown by flags in the figure, located at the midpoint of one of the sides of the tracks. If the total race is 350 m, we need to find where the starting positions of both runners should be on these two tracks so that after running 350 m, both reach the same finish line. Mark the starting point of the runner on the inner track as A and the starting point of the runner on the outer track as B.",

                  // Grid perimeter questions
                  "Find the perimeter of the given figures using straight and diagonal line units.",

                  // Cut and join questions
                  "Find the perimeter of all other arrangements shown.",
                  "Arrange the two pieces to make a shape with perimeter 22 cm.",

                  // Section 6.2 Questions
                  "A rectangular garden is 25 m long and has an area of 300 square m. What is the breadth of this garden?",
                  "What will be the cost of tiling a rectangular plot of land 500 m long and 200 m wide at the rate of ₹8 per 100 square m?",
                  "A rectangular coconut plantation is 100 m long and 50 m wide. If each coconut tree requires 25 square m of space, how many trees can be planted maximum in this plantation?",
                  "Find the area of the figures given below by dividing them into rectangular parts (all measurements are in meters).",

                  // Tangram questions
                  "Find out how many pieces have the same area.",
                  "How many times larger is shape D compared to shape C? What is the relationship between C, D, and E?",
                  "Which shape has larger area—shape D or shape F? Give reason for your answer.",
                  "Which shape has larger area—shape F or G? Give reason for your answer.",
                  "How does the area of shape A compare to shape G? Is it twice as large? Is it four times as large?",
                  "Can you now write the area of the large square made from all seven pieces in terms of the area of shape C?",
                  "Arrange these seven pieces to form a rectangle. Now what is the area of this rectangle in terms of the area of shape 'C'? Give reason for your answer.",
                  "Are the perimeters of the square and rectangle made from these seven pieces different or the same? Explain your answer.",

                  // Area estimation questions
                  "Find the area of the following figures.",

                  // Area of corridor and playground
                  "Find the area (in square meters) of the outer floor of your corridor.",
                  "Find the area (in square meters) of your school's playground.",

                  // Section 6.3 Questions
                  "Find the area of blue triangle BAD.",
                  "Find the area of red triangle ABE.",

                  // Making 'More' or 'Less' questions
                  "Using 9 unit squares: 1. What is the smallest possible perimeter? 2. What is the largest possible perimeter? 3. Draw a figure with perimeter 18 units. 4. Can you draw a figure of another shape for each of the above three perimeters, or is only one figure possible with that perimeter? What is your reasoning?",

                  // Adding a square questions
                  "Can you place a new square so that the perimeter: a) increases; b) decreases; c) remains the same?",

                  // House floor plan questions
                  "For Charan's house: a. Find the missing measurements. b. Find the area of his house.",
                  "For Sharan's house: a. Find the missing measurements. b. Find the area of his house. What would be the dimensions of each room in Sharan's house? Compare the areas and perimeters of Sharan's and Charan's houses.",

                  // Area puzzles
                  "In each green figure, find the missing side length or area value.",

                  // Final exercise questions
                  "State the dimensions of a rectangle whose area is equal to the sum of the areas of two rectangles with dimensions 5 m × 10 m and 2 m × 7 m.",
                  "A rectangular park has area 1000 square m and length 50 m. Find the breadth of the park.",
                  "A room floor is 5 m long and 4 m wide. A square carpet of side 3 m is laid on the floor. Find the area of the floor that is not carpeted.",
                  "Flower beds of length 2 m and breadth 1 m are made by digging the four corners of a park 15 m long and 12 m wide. How much area is now available for making a lawn?",
                  "Figures A and B have area 18 square units and 20 square units respectively. Figure A has larger perimeter than figure B. Draw two figures that satisfy this situation.",
                  "Draw a rectangular border on a page of your book that is 1 cm away from the top and bottom and 1.5 cm away from the left and right sides. What will be the perimeter of the border?",
                  "Draw a rectangle of size 12 units × 8 units. Inside it, draw another rectangle that does not touch the outer rectangle and occupies exactly half the area.",
                  "A square paper is folded in half and then cut into two rectangles. Without knowing the size of the square, which one of the following statements will always be true? a. The area of each rectangle will be greater than the area of the square. b. The perimeter of the square will be greater than the sum of the perimeters of both rectangles. c. The sum of the perimeters of both rectangles will always be equal to 1½ times the perimeter of the square. d. The area of the square will always be three times greater than the sum of the areas of both rectangles.",
                ],
                answers: [
                  // Section 6.1 Answers
                  "a. length = 5 cm (since 2×(l+2)=14 → l+2=7 → l=5) b. Perimeter = 80 cm c. Perimeter = 30 m",
                  "Perimeter of rectangle = 2×(5+3)=16 cm. Square side = 16÷4 = 4 cm",
                  "Third side = 55 − (20+14) = 55 − 34 = 21 cm",
                  "Perimeter = 2×(150+120)=540 m. Cost = 540 × ₹40 = ₹21,600",
                  "a. Square side = 36÷4 = 9 cm b. Equilateral triangle side = 36÷3 = 12 cm c. Regular hexagon side = 36÷6 = 6 cm",
                  "Perimeter = 2×(230+160)=780 m. Three rounds = 3×780 = 2340 m",

                  // Akshi and Toshi answers
                  "Akshi: 5 × 220 = 1100 m",
                  "Toshi: 7 × 240 = 1680 m. Toshi covered more distance (1680 > 1100)",
                  "Positions marked on the tracks: a. A at 250 m from start; b. B at 500 m from start; c. 1000÷220 = 4 full rounds + remainder, C at position after 4 rounds + 120 m; d. X at 250 m from start; e. Y at 500 m from start; f. 1000÷240 = 4 full rounds + remainder, Z at position after 4 rounds + 40 m",
                  "Inner track perimeter = 400 m, outer track = 600 m. For 350 m race, inner runner starts 50 m before finish line, outer runner starts 250 m before finish line? Need to calculate positions where both reach finish after 350 m.",

                  // Grid perimeter answers
                  "Perimeter values will depend on specific figures",

                  // Cut and join answers
                  "Different arrangements yield different perimeters",
                  "Arrangement with perimeter 22 cm is possible",

                  // Section 6.2 Answers
                  "Breadth = Area ÷ length = 300 ÷ 25 = 12 m",
                  "Area = 500×200 = 100,000 m². Cost = (100,000÷100) × ₹8 = 1000 × ₹8 = ₹8,000",
                  "Area = 100×50 = 5000 m². Number of trees = 5000÷25 = 200 trees",
                  "Areas calculated by dividing into rectangles",

                  // Tangram answers
                  "A and B have same area; C and E have same area",
                  "D is twice the area of C (C+E = D)",
                  "D and F need comparison based on tangram pieces",
                  "F and G need comparison",
                  "A is twice the area of G? Actually A = 4×G?",
                  "Large square area = 16×C (since C is 1/16 of total?)",
                  "Rectangle formed from tangram also has area 16×C",
                  "Perimeters are different",

                  // Area estimation answers
                  "Area values depend on specific figures",

                  // Area of corridor and playground
                  "Personal measurements needed",

                  // Section 6.3 Answers
                  "Triangle BAD area = half of rectangle ABCD",
                  "Triangle ABE area = half of rectangle ABCD",

                  // Making 'More' or 'Less' answers
                  "1. Minimum perimeter = 12 units (3×3 square) 2. Maximum perimeter = 20 units (straight line) 3. Figure with P=18 units possible 4. Multiple shapes possible for same perimeter",

                  // Adding a square answers
                  "a. Increases when attached at a single point b. Decreases when filling a cavity c. Remains same when attached along a full side",

                  // House floor plan answers
                  "Missing measurements found by addition/subtraction",
                  "Total area = sum of room areas",

                  // Area puzzles answers
                  "Missing values found using area relationships",

                  // Final exercise answers
                  "Area sum = (5×10)+(2×7)=50+14=64 m². Possible rectangle: 8 m × 8 m (square) or 16 m × 4 m etc.",
                  "Breadth = 1000÷50 = 20 m",
                  "Floor area = 5×4=20 m², Carpet area = 3×3=9 m², Uncovered = 20−9=11 m²",
                  "Park area = 15×12=180 m², Flower bed area each = 2×1=2 m², Four beds = 8 m², Remaining = 180−8=172 m²",
                  "Draw figures accordingly",
                  "Page dimensions needed, then calculate",
                  "Inner rectangle should have area 48 units² (half of 96)",
                  "Statement (c) is true: sum of perimeters of both rectangles = 1½ × perimeter of square",
                ],
              },
            ],

            activities: [
              "Measure perimeters of various objects in classroom using measuring tape",
              "Cut paper into different shapes and compare perimeters",
              "Create tangram pieces and explore area relationships",
              "Draw rectangles with fixed area on grid paper and compare perimeters",
              "Estimate area of irregular shapes using grid paper",
              "Design floor plans for houses with given dimensions",
              "Cut and join paper pieces to create shapes with specific perimeters",
              "Explore how adding a square to a shape affects its perimeter",
              "Verify triangle area formula by cutting rectangles diagonally",
            ],

            summary: [
              "■ The perimeter of a polygon is equal to the sum of the lengths of all its sides.",
              "  a. The perimeter of a rectangle is twice the sum of its length and breadth.",
              "  b. The perimeter of a square is four times the length of one side.",
              "■ The measure of the region enclosed by a closed figure is called its area.",
              "■ Area is generally measured in square units.",
              "■ The area of a rectangle is the product of its length and breadth. The area of a square is obtained by multiplying the length of one side by itself.",
              "■ Two closed figures can have the same area but different perimeters, or the same perimeter but different areas.",
              "■ The area of regions can be estimated (determined) by dividing such regions into unit squares or into more general shapes like rectangles and triangles whose areas can be calculated.",
            ],
          },
        },
        // ncertContent.js - Add this as Chapter 7

        {
          id: 7,
          title: "Fractions",
          content: {
            introduction:
              "Recall that when whole objects are shared equally, fractions tell us how much each person gets. Shabnam: Do you remember, if one roti is shared equally between two children, how much roti will each child get? Mukta: Each child will get half a roti. Shabnam: Half of one is written as ½ in fractions. We sometimes read it as 'one by two'. Mukta: If one roti is shared equally among 4 children, how much roti will each child get? Shabnam: Each child will get ¼ roti. Mukta: And which part is larger, ½ roti or ¼ roti? Shabnam: When 2 children share 1 roti equally, each gets ½ roti. When 4 children share 1 roti equally, each gets ¼ roti. Since the second group has more children sharing the same number of rotis, each child gets a smaller portion. Therefore, ½ roti is greater than ¼ roti. So, ½ > ¼.",

            sections: [
              {
                title: "7.1 Fractional Units and Equal Parts",
                content:
                  "Beni: Which fraction is larger? 1/5 or 1/9? Arivan: 9 is greater than 5. So I think 1/5 is larger than 1/9. Am I correct? Beni: No! This is a common mistake. Think of these fractions as parts. Arivan: If a roti is shared among 5 children, each gets 1/5 part of the roti. If the roti is shared among 9 children, each gets 1/9 part of the roti. Beni: Absolutely correct! Now think again, which part is larger? Arivan: If I share something among more people, I get a smaller portion. So 1/5 > 1/9. Beni: Now you've understood correctly! Oh, so 1/100 is larger than 1/200! When a unit is divided into several equal parts, each part is called a fractional unit. These are all fractional units: ½, ⅓, ¼, ⅕, ⅙, … 1/10, … 1/50, … 1/100, etc. We sometimes call fractional units as unit fractions.",
                examples: [
                  "½ > ¼ > ⅛ (larger denominator means smaller parts)",
                  "Unit fractions: ½, ⅓, ¼, ⅕, ⅙, ...",
                  "When sharing among more people, each gets a smaller portion",
                ],
              },
              {
                title: "Knowledge from the Past!",
                content:
                  "The use and naming of fractions has been happening in India since ancient times. In the Rigveda, the fraction ¾ is called 'tri-pad'. It has the same meaning as the words used for ¾ in many Indian languages today, such as in Hindi colloquial language, 'teen pav' and in Tamil, 'mukkal'. In fact, the words we use for fractions in many Indian languages today have been prevalent since ancient times.",
                examples: [
                  "Ancient Indian names for fractions",
                  "Connection to modern Indian languages",
                ],
              },
              {
                title: "7.2 Fractional Units as Parts of a Whole",
                content:
                  "The given picture shows a whole chikki. Below is a picture of the chikki broken into 2 parts. How much of the original chikki is each piece? We can see that the larger piece has 3 parts of ¼ chikki. So we can measure the larger piece using the fractional unit ¼. We see that the larger piece is ¾ of the chikki. A whole chikki cut into 6 equal parts. A whole chikki cut into 6 equal parts in another way. When a whole chikki is divided into 6 equal parts in different ways, we get pieces of ⅙ chikki of different shapes. Are they of the same size?",
                examples: [
                  "Whole chikki divided into parts",
                  "¾ means three parts of ¼ each",
                  "Different ways to divide into equal parts give same fraction value",
                ],
              },
              {
                title: "7.3 Measuring with Fractional Units",
                content:
                  "Take a paper strip. We will consider this paper strip to be one unit long. Fold the strip into two equal parts and then open the strip again. Considering the strip length as one unit, what are the lengths of the two new parts of the strip created by the fold mark? If you fold the previously folded strip again into two equal parts, what will you get? Now you will get four equal parts. 2 times ¼ = 2/4, 3 times ¼ = ¾, 4 times ¼ = 4/4. Repeat this again. Fill in the empty boxes.",
                examples: [
                  "Paper folding to understand fractions",
                  "½ = 2/4 = 4/8 (equivalent fractions)",
                  "Collecting fractional units together tells us the total quantity",
                ],
              },
              {
                title: "Reading Fractions",
                content:
                  "We usually read the fraction ¾ as 'three-quarters' or 'three by four', but reading it as '3 times ¼' helps us understand the size of the fraction, because it clearly shows the fractional unit (¼) and how many such fractional units (3) are there. Recall what we call the top number and bottom number of a fraction. In the fraction ⅚, 5 is the numerator and 6 is the denominator.",
                examples: [
                  "¾ = 3 × ¼",
                  "Numerator: top number, Denominator: bottom number",
                  "Denominator tells the fractional unit, numerator tells how many",
                ],
              },
              {
                title: "7.4 Marking Fractions on the Number Line",
                content:
                  "We have marked lengths equal to 1, 2, 3, ... units on the number line. Let's now try to mark fractional lengths on the number line. How long is the blue line? Write the fraction that tells the length of the blue line in the box. The distance between 0 and 1 is one unit long. It is divided into two equal parts. So each part is ½ unit long. Therefore the blue line is ½ unit long. Now, can you find the length of the blue lines shown below? Write it in the box.",
                examples: [
                  "Number line divided into equal parts",
                  "Fractions on number line: ½, ⅓, ¼, etc.",
                  "Fractions less than 1 lie between 0 and 1",
                ],
              },
              {
                title: "7.5 Mixed Fractions",
                content:
                  "Fractions Greater Than One: You just marked some fractions on the number line. Did you notice that all the blue lines were less than 1 in length and all the black lines were greater than 1 in length? Write all the fractions you marked on the number line earlier. Let's now classify these fractions into two groups: Length less than 1 unit, Length greater than 1 unit. Did you notice anything common in fractions greater than 1 unit? In all fractions smaller than 1 unit, the numerator is smaller than the denominator, while in fractions greater than 1 unit, the numerator is greater than the denominator.",
                examples: [
                  "Proper fractions: numerator < denominator (value < 1)",
                  "Improper fractions: numerator > denominator (value > 1)",
                  "3/2, 5/2, 7/2 are all greater than 1",
                ],
              },
              {
                title: "Writing Improper Fractions as Mixed Numbers",
                content:
                  "We have seen that 3/2 = 1 + ½. Similarly, we can write other fractions. For example, 4/3 = ⅓ + ⅓ + ⅓ + ⅓ = 1 + ⅓ (since 3 × ⅓ = 1). We have seen that 3/2 = 1 + ½, so this number is also called 'two and two-thirds'? Actually 3/2 is 'one and a half'. Wait, let's be careful: 3/2 = 1 + ½ which is 'one and a half'. For 4/3 = 1 + ⅓ which is 'one and one-third'. For 7/3 = 2 + ⅓ which is 'two and one-third'. We write this as 2⅓. This is called a mixed fraction/mixed number. A mixed fraction/mixed number has a whole number part (called the whole part) and a fraction that is less than 1 (called the fractional part).",
                examples: [
                  "3/2 = 1 + ½ = 1½",
                  "4/3 = 1 + ⅓ = 1⅓",
                  "7/3 = 2 + ⅓ = 2⅓",
                  "9/2 = 4 + ½ = 4½",
                ],
              },
              {
                title: "Converting Mixed Numbers to Fractions",
                content:
                  "Jaya: I know how to convert mixed numbers to fractions! When I have 3 + ¾, that means 1 + 1 + 1 + ¾. 1 = ¼ + ¼ + ¼ + ¼. So I get, (¼+¼+¼+¼) + (¼+¼+¼+¼) + (¼+¼+¼+¼) + (¼+¼+¼) = 15/4. Therefore, (4 × ¼) + (4 × ¼) + (4 × ¼) + (3 × ¼) = 15/4.",
                examples: [
                  "3¾ = 15/4",
                  "Method: whole number × denominator + numerator, over denominator",
                ],
              },
              {
                title: "7.6 Equivalent Fractions",
                content:
                  "Using Fraction Wall to Find Equal Fractional Lengths! In the previous section, you used paper folding with fractional units to represent different fractions. Let's do some more activities with the same paper strips. Are the lengths of ½ and 2/4 equal? Are the lengths of 2/4 and 4/8 equal? We can say that ½ = 2/4 = 4/8. These are 'equivalent fractions' that represent the same length, but expressed in terms of different fractional units. Now using paper strips, check whether ⅓ and 2/6 are equivalent fractions or not? Make your own fraction wall using strips as shown in the figure below.",
                examples: ["½ = 2/4 = 4/8", "⅓ = 2/6 = 3/9", "¼ = 2/8 = 3/12"],
              },
              {
                title: "Understanding Equivalent Fractions Using Equal Parts",
                content:
                  "One roti is divided equally among four children. How much part of the roti did each child get? The attached figure shows the distribution of one roti among four children. The fraction of roti received by each child is ¼. You can express this situation through division method, addition method, and multiplication method. By division: 1 ÷ 4 = ¼. By addition: 1 = ¼ + ¼ + ¼ + ¼. By multiplication: 1 = 4 × ¼.",
                examples: ["1 ÷ 4 = ¼", "1 = ¼ + ¼ + ¼ + ¼", "1 = 4 × ¼"],
              },
              {
                title: "Simplest Form of a Fraction",
                content:
                  "A fraction is said to be in its lowest or simplest form when the numerator and denominator have no common factor other than 1. In other words, a fraction is said to be in its lowest terms if its numerator and denominator are as small as possible. To express any fraction in lowest terms, an equivalent fraction can be found whose numerator and denominator are as small as possible. Let's see how to express a fraction in its lowest terms. Example: Is the fraction 16/20 in lowest terms? No, 16 and 20 have a common factor of 4. Let's express 16/20 in lowest terms. We know that both 16 (numerator) and 20 (denominator) are divisible by 4. So, (16÷4)/(20÷4) = 4/5. Now, 4 and 5 have no other common factor. Therefore, the lowest term of 16/20 is 4/5. So 4/5 can be called the simplest form of 16/20, because 4 and 5 have no common factor other than 1.",
                examples: [
                  "16/20 = 4/5 (dividing by 4)",
                  "36/60 = 3/5 (dividing by 12)",
                  "18/30 = 9/15 = 3/5 (step by step)",
                ],
              },
              {
                title: "7.7 Comparing Fractions",
                content:
                  "Which fraction is larger, 4/7 or 7/9? Comparing two fractions like this directly can be difficult. Although we know how to get equivalent fractions with the same denominator. Let's see how we can use this: 4/5 = (4×9)/(5×9) = 36/45, 7/9 = (7×5)/(9×5) = 35/45. Since 36/45 > 35/45, therefore 4/5 > 7/9! Let's try this for another pair: 7/9 and 17/21. A common multiple of 9 and 21 is 63, so we can write: 7/9 = (7×7)/(9×7) = 49/63, 17/21 = (17×3)/(21×3) = 51/63. Since 49/63 < 51/63, therefore 7/9 < 17/21! In summary: Steps to compare two or more fractions: Step 1—Convert the given fractions into equivalent fractions so that they all have the same denominator/same fractional unit. Step 2—Now compare only the numerators, i.e., how many fractional units are in each equivalent fraction.",
                examples: [
                  "Compare 3/4 and 5/8: 3/4 = 6/8, 6/8 > 5/8, so 3/4 > 5/8",
                  "Compare 2/3 and 3/5: 2/3 = 10/15, 3/5 = 9/15, 10/15 > 9/15, so 2/3 > 3/5",
                ],
              },
              {
                title: "7.8 Adding and Subtracting Fractions",
                content:
                  "Meena's father made some chikki. Meena ate ½ of it and her younger brother ate ¼ of it. How much part of the chikki did Meena and her brother eat together? We can reach the answer through visualization. Take a piece of chikki and first divide it into two parts as shown. As shown in the figure, Meena ate half of it. Now divide the remaining part into two parts as shown in the figure. Each of these pieces is ¼ of the whole chikki. As shown in the figure, Meena's brother ate ¼ part of the whole chikki. Total chikki eaten is ½ (by Meena) and ¼ (by her brother). Total chikki eaten = ½ + ¼ = ¼ + ¼ + ¼ = 3 × ¼ = ¾. How much part of the whole chikki is left?",
                examples: ["½ + ¼ = ¾", "Visual addition of fractions"],
              },
              {
                title:
                  "Adding Fractions with Same Denominator or Same Fractional Unit",
                content:
                  "Example: Find the sum of 2/5 and 1/5. Let's represent both with rectangular strips. Here both fractions have the same fractional unit, which is ⅕, so each strip will be divided into 5 equal parts. So 2/5 will be shown like this, and 1/5 will be shown like this. The sum of both fractions is like finding the total number of shaded parts, each representing the same fractional unit ⅕. In this case, the total number of shaded parts is 3. Since each shaded part represents the fractional unit ⅕, we see that 3 shaded parts together represent the fraction ⅗. So, 2/5 + 1/5 = 3/5. Example: Find the sum of 4/7 and 6/7. Let's again represent both with rectangular strips. Here both fractions have the same fractional unit, i.e., 1/7, so each strip will be divided into 7 equal parts. Then 4/7 will be shown like this, and 6/7 will be shown like this. In this case, the total number of shaded parts is 10, and each shaded part represents the fractional unit 1/7. Therefore, 10 shaded parts together represent the fraction 10/7, as can be seen in the strip below. When adding fractions with the same fractional unit, add the number of fractional units from each fraction.",
                examples: [
                  "2/5 + 1/5 = 3/5",
                  "4/7 + 6/7 = 10/7",
                  "Add numerators, keep denominator same",
                ],
              },
              {
                title:
                  "Adding Fractions with Different Denominators or Fractional Units",
                content:
                  "Example: Find the sum of ¼ and ⅓. To add fractions with different fractional units, first convert the fractions into equivalent fractions with the same denominator or same fractional unit. Here we can make the common denominator 3 × 4 = 12, i.e., we can find equivalent fractions with fractional unit 1/12. Let's write equivalent fractions for each given fraction: ¼ = (1×3)/(4×3) = 3/12, ⅓ = (1×4)/(3×4) = 4/12. Now 3/12 and 4/12 have the same fractional unit, which is 1/12. So, ¼ + ⅓ = 3/12 + 4/12 = 7/12.",
                examples: [
                  "¼ + ⅓ = 7/12",
                  "Convert to common denominator then add numerators",
                ],
              },
              {
                title: "Brahmagupta's Method for Adding Fractions",
                content:
                  "This method of addition, which works for adding any number of fractions, was first described by Brahmagupta in 628 CE. We will describe the history of the development of fractions in more detail later in the chapter. For now, let's understand the steps of Brahmagupta's method for adding fractions. Brahmagupta's Method for Adding Fractions: 1. Find equivalent fractions so that all fractions have the same fractional unit. This can be done by finding a common multiple of the denominators (for example, the product of denominators or the least common multiple of denominators). 2. Add these equivalent fractions with the same fractional unit. This can be done by adding the numerators and keeping the denominator the same. 3. If necessary, write the obtained result in lowest terms.",
                examples: [
                  "Brahmagupta (628 CE) first described fraction addition",
                  "Method still used today",
                ],
              },
              {
                title:
                  "Subtracting Fractions with Same Fractional Unit or Denominator",
                content:
                  "Brahmagupta's method applies equally when subtracting fractions. Let's start with the problem of subtracting 4/7 from 6/7, i.e., what is 6/7 – 4/7? To solve this problem, we can use rectangular strips again. Here, first represent the larger fraction with a rectangular strip, as shown. Each shaded part represents 1/7. Now we need to subtract 4/7. To do this, we remove 4 shaded parts. So we have 2 shaded parts left, i.e., 6/7 – 4/7 = 2/7. Try doing this exercise with a number line as well.",
                examples: [
                  "6/7 – 4/7 = 2/7",
                  "Subtract numerators, keep denominator same",
                ],
              },
              {
                title:
                  "Subtracting Fractions with Different Fractional Units or Denominators",
                content:
                  "Example: What is ¾ – ⅔? As we already know how to subtract fractions with the same fractional unit, let's convert the given fractions into equivalent fractions with the same fractional unit. So, ¾ – ⅔ = 9/12 – 8/12 = 1/12. Brahmagupta's Method for Subtracting Two Fractions: 1. Convert the given fractions into equivalent fractions with the same fractional unit, i.e., same denominator. 2. Subtract fractions with the same fractional unit. This can be done by keeping the denominator the same and subtracting the numerators. 3. Simplify the obtained result to lowest terms if necessary.",
                examples: [
                  "¾ – ⅔ = 9/12 – 8/12 = 1/12",
                  "Convert to common denominator then subtract numerators",
                ],
              },
              {
                title: "7.9 A Pinch of History",
                content:
                  "Do you know what fractions were called in ancient India? In Sanskrit, it is also called 'bhinna', which means broken. It was also called 'bhaga' or 'amsa', meaning part or piece. The way we write fractions today originated in India. In ancient Indian mathematical texts like the Bakhshali manuscript (around 300 CE), when they wanted to write ½, they wrote it as ½, which is actually very similar to how we write it today. This method of writing and working with fractions continued to be used in India for many subsequent centuries, including by Aryabhata (499 CE), Brahmagupta (628 CE), Sridharacharya (around 750 CE), and Mahaviracharya (around 850 CE), among others. The line segment between the numerator and denominator in '½' and other fractions was later written by the Moroccan mathematician Al-Hassar (in the 12th century). Over the next few centuries, this notation spread to Europe and throughout the world.",
                examples: [
                  "Ancient India: fractions called 'bhinna' (broken)",
                  "Bakhshali manuscript (300 CE): similar notation to today",
                  "Brahmagupta (628 CE): formalized fraction operations",
                  "Al-Hassar (12th century): introduced fraction bar",
                ],
              },
              {
                title: "Puzzle!",
                content:
                  "If we use the same fractional units, it's easy to add fractional units to get a sum of 1. For example: ½ + ½ = 1, ⅓ + ⅓ + ⅓ = 1, ¼ + ¼ + ¼ + ¼ = 1, etc. Can you think of a way to get 1 by adding all different fractional units? It is not possible to get 1 by adding two different fractional units. The reason is that ½ is the largest fractional unit, and ½ + ½ = 1. To get different fractional units, we would have to replace at least one ½ with a smaller fractional unit, but then the sum would be less than 1! So getting a sum of 1 with two different fractional units is not possible. However, we can try to find a way to write 1 as the sum of three different fractional units.",
                examples: [
                  "Same units: ½+½=1, ⅓+⅓+⅓=1",
                  "Different units: ½+⅓+⅙=1 (only solution for three different unit fractions)",
                ],
              },
            ],

            exercises: [
              {
                type: "explore",
                questions: [
                  // Section 7.1 Questions
                  "Fill in the blanks with fractions: 1. Three guavas weigh 1 kg. If they are approximately the same size, then each guava weighs approximately ____ kg. 2. A wholesaler packed 1 kg of rice into four packets of equal weight. The weight of each packet is ____ kg. 3. Four friends shared 3 glasses of sugarcane juice equally among themselves. Each drank ____ glasses of sugarcane juice. 4. A big fish weighs ½ kg. A small fish weighs ¼ kg. The combined weight of both fish is ____ kg.",
                  "Find words used for fractions in different languages in your home, town, or state and discuss them. Ask your grandparents, parents, teachers, and classmates what words they use for different fractions, like one and a half, three-quarters, one-quarter, half, quarter, and two and a half. Write them here.",
                  "Arrange the given fraction words from smallest to largest and fill in the empty boxes: one and a half, three-quarters, one-quarter, half, quarter, two and a half. Write your answer here.",

                  // Section 7.2 Questions
                  "The figures below show different fractional units of a whole chikki. How much of the whole chikki is each piece? [Various chikki fraction diagrams]",

                  // Section 7.3 Questions
                  "Continue this table for ½ for 2 more steps.",
                  "Can you make a similar table for ¼?",
                  "Make ⅓ with the help of paper strips. Can you use this to make ⅙?",
                  "Draw a picture and write an addition statement as above: a. 5 times ¼ roti b. 9 times ¼ roti",
                  "Match each fractional unit with the correct picture: ⅓, ⅕, ⅛, ⅙ [with corresponding fraction diagrams]",

                  // Section 7.4 Questions
                  "Show lengths of 1/10, 3/10, and 4/5 on the number line.",
                  "Write five more fractions of your choice and show them on the number line.",
                  "How many fractions are there between 0 and 1? Think, discuss with your classmates, and write your answer.",
                  "What is the length of the blue line and black line shown below? The distance between 0 and 1 is 1 unit long and it is divided into two equal parts. So each part is ½ long. Therefore the blue line is ½ unit long. Write the fraction that tells the length of the black line in the box.",
                  "Write the fractions that tell the length of the black lines in the respective boxes.",

                  // Section 7.5 Questions
                  "How many whole units are there in 7/2?",
                  "How many whole units are there in 4/3 and 7/3?",
                  "Find the number of whole units in each of the following fractions: a. 8/3 b. 11/5 c. 9/4",
                  "Can all fractions greater than 1 be written as mixed numbers like this?",
                  "Write the following fractions as mixed fractions (for example, 9/2 = 4½): a. 9/2 b. 9/5 c. 21/19 d. 47/9 e. 12/11 f. 19/6",
                  "Write the following mixed numbers as fractions: (a) 3¼ (b) 7⅔ (c) 9 4/9 (d) 3⅙ (e) 2 3/11 (f) 3 9/10",

                  // Section 7.6 Questions
                  "Looking at the fraction wall, answer the following questions: 1. Are the lengths of ½ and 3/6 equal? 2. Are ⅔ and 4/6 equivalent fractions? Why? 3. How many pieces of length ⅙ will make a length of ½? 4. How many pieces of length ⅙ will make a length of ⅓?",
                  "Are 3/6, 4/8, 5/10 equivalent fractions? Why?",
                  "Write two equivalent fractions for 2/6.",
                  "Write as many equivalent fractions as possible for 4/6: 4/6 = __ = __ = __ = ...",
                  "Three rotis are divided equally among four children. Show the division in a picture and write how much part each child gets as a fraction. Also write the corresponding division operation, addition operation, and multiplication operation.",
                  "Draw a picture to show and write how much part each child gets when 2 rotis are divided equally among 4 children. Also write the corresponding division operation, addition operation, and multiplication operation.",
                  "Anil was in a group where 2 cakes were divided equally among 5 children. How much cake did Anil get? Now if my group has 10 children, how many cakes would I need so that each gets the same amount of cake as Anil? What would happen if we put two such groups together? One group where 2 cakes are divided equally among 5 children and another group where 4 cakes are divided equally among 10 children?",
                  "Find the missing numbers: a. 5 glasses of juice divided equally among 4 friends is the same as ____ glasses of juice divided equally among 8 friends. So, 5/4 = __/8. b. 4 kg of potatoes filled equally into 3 bags. To fill 12 kg of potatoes equally, ___ bags would be needed? So, 4/3 = 12/__.",
                  "7 rotis divided equally among 5 children and ______ rotis divided equally among ______ children would be the same. So, 7/5 = □/□.",
                  "In which group does each child get more chikki? When 1 chikki is divided equally among 2 children or when 5 chikkis are divided equally among 8 children.",
                  "What about the following groups? In which group will each child get a larger share? When 1 chikki is divided equally among 2 children or when 4 chikkis are divided equally among 7 children.",
                  "Now decide in which group the children get a larger share? Group 1—3 glasses of sugarcane juice divided equally among 4 children. Group 2—7 glasses of sugarcane juice divided equally among 10 children. Group 1—4 glasses of sugarcane juice divided equally among 7 children. Group 2—5 glasses of sugarcane juice divided equally among 7 children. Which groups are easier to compare? Why?",

                  // Equivalent fractions for comparison
                  "Find equivalent fractions for the given fraction pairs so that they have the same fractional unit: a. 7/2 and 3/5 b. 8/3 and 5/6 c. 3/4 and 3/5 d. 6/7 and 8/5 e. 9/4 and 5/2 f. 1/10 and 2/9 g. 8/3 and 11/4 h. 13/6 and 1/9",

                  // Simplest form
                  "Express the following fractions in lowest terms: a. 17/51 b. 64/144 c. 126/147 d. 525/112",

                  // Section 7.7 Questions
                  "Compare the following fractions and give reasons for your answer: a. 8/5 and 2/1 b. 4/3 and 7/1 c. 7/10 and 14/1 d. 12/8 and 5/1 e. 9/5 and 4/2",
                  "Write the following fractions in ascending order: a. 7/11, 2/1 b. 19/5, 7/10, 15/5",
                  "Write the following fractions in descending order: a. 25/7, 13/17 b. 3/12, 7/5, 16/8, 4/32, 4/5, 12/4",

                  // Section 7.8 Questions
                  "Add the following fractions using Brahmagupta's method: a. 2/7 + 5/7 + 6/7 b. 3/4 + 1/3 c. 2/3 + 5/6 d. 2/3 + 2/7 e. 3/4 + 1/3 + 1/5 f. 2/3 + 4/5 g. 4/5 + 2/3 h. 3/5 + 5/8 i. 9/2 + 5/4 j. 8/3 + 2/7 k. 3/4 + 1/3 + 1/5 l. 2/3 + 4/5 + 3/7 m. 9/2 + 5/4 + 7/6",
                  "Rahim mixed 2/3 liter of yellow paint with 3/4 liter of blue paint to make green paint. How many liters of green paint did he make?",
                  "Geeta bought 2/5 meter of lace and Shameem bought 3/4 meter of lace to make a complete border for a tablecloth of perimeter 1 meter. Find the total length of lace bought by both. Is the bought lace sufficient to cover the complete border?",
                  "Subtract the following using Brahmagupta's method: a. 8/3 – 2/3 b. 4/5 – 2/5 c. 5/6 – 1/6 d. 9/2 – 3/2",
                  "Subtract as indicated: a. 13/4 – 10/4 b. 18/5 – 23/5 c. 29/7 – 45/7",
                  "Solve the following questions: a. Jaya's school is 10 km from her home. She travels ½ km by auto and walks the remaining distance to reach school every day. How much does she walk each day to reach school? b. Jivika takes 10/3 minutes to complete one round of the park and her friend Namita takes 13/4 minutes to do the same. Who takes less time to complete one round and by how much?",

                  // Section 7.9 Puzzle
                  "Can you find three different unit fractions whose sum is 1? (Hint: ½ + ⅓ + ⅙ = 1)",
                  "Can you find four different unit fractions whose sum is 1? (There are six solutions, can you find at least one?)",
                ],
                answers: [
                  // Section 7.1 Answers
                  "1. ⅓ kg 2. ¼ kg 3. ¾ glasses 4. ¾ kg",
                  "Answers will vary based on local languages",
                  "¼ (quarter), ½ (half), ¾ (three-quarters), 1¼ (one and a quarter), 1½ (one and a half), 2½ (two and a half)",

                  // Section 7.2 Answers
                  "Fraction values depend on the diagrams",

                  // Section 7.3 Answers
                  "Table continues with equivalent fractions",
                  "Yes, similar table for ¼",
                  "Yes, ⅓ folded again gives ⅙",
                  "a. 5/4 b. 9/4",
                  "Match accordingly",

                  // Section 7.4 Answers
                  "Draw on number line",
                  "Any five fractions",
                  "Infinite fractions between 0 and 1",
                  "Black line length = 1½ (or 3/2)",
                  "Various black line lengths",

                  // Section 7.5 Answers
                  "7/2 = 3½, so 3 whole units",
                  "4/3 = 1⅓ → 1 whole; 7/3 = 2⅓ → 2 wholes",
                  "a. 8/3 = 2⅔ → 2 wholes b. 11/5 = 2⅕ → 2 wholes c. 9/4 = 2¼ → 2 wholes",
                  "Yes, all improper fractions can be written as mixed numbers",
                  "a. 4½ b. 1⅘ c. 1 2/19 d. 5 2/9 e. 1 1/11 f. 3⅙",
                  "a. 13/4 b. 23/3 c. 85/9 d. 19/6 e. 25/11 f. 39/10",

                  // Section 7.6 Answers
                  "1. Yes 2. Yes, both represent same amount 3. Three pieces (3/6 = ½) 4. Two pieces (2/6 = ⅓)",
                  "Yes, all equal ½",
                  "2/6 = 1/3 = 3/9 = 4/12, etc.",
                  "4/6 = 2/3 = 8/12 = 12/18 = 16/24, etc.",
                  "Each child gets ¾ roti. Division: 3÷4=¾, Addition: ¾+¾+¾+¾=3, Multiplication: 4×¾=3",
                  "Each child gets ½ roti. Division: 2÷4=½, Addition: ½+½+½+½=2, Multiplication: 4×½=2",
                  "Anil gets 2/5 cake. For 10 children, need 4 cakes (since 4/10 = 2/5). Two groups together would have 6 cakes for 15 children = 6/15 = 2/5, same as before.",
                  "a. 10 glasses (5/4 = 10/8) b. 9 bags (4/3 = 12/9)",
                  "14 rotis among 10 children (7/5 = 14/10)",
                  "Compare 1/2 = 4/8 and 5/8 → 5/8 > 4/8, so second group gets more",
                  "Compare 1/2 = 7/14 and 4/7 = 8/14 → 8/14 > 7/14, so second group gets more",
                  "Group 1: 3/4 = 30/40, Group 2: 7/10 = 28/40 → Group 1 gets more. Group 1: 4/7, Group 2: 5/7 → Group 2 gets more. Groups with same denominator are easier to compare.",

                  // Equivalent fractions
                  "a. 35/10 and 6/10 b. 16/6 and 5/6 c. 15/20 and 12/20 d. 30/35 and 56/35 e. 9/4 and 10/4 f. 9/90 and 20/90 g. 32/12 and 33/12 h. 13/6 and ?",

                  // Simplest form
                  "a. 1/3 b. 4/9 c. 6/7 d. 75/16",

                  // Section 7.7 Answers
                  "a. 8/5 vs 2 = 10/5 → 2 > 8/5 b. 4/3 vs 7 = 21/3 → 7 > 4/3 c. 7/10 vs 14 = 140/10 → 14 > 7/10 d. 12/8 = 1.5 vs 5 → 5 > 1.5 e. 9/5 = 1.8 vs 2 = 10/5 → 2 > 1.8",
                  "a. 7/11, 2/1 = 22/11 → 7/11 < 22/11 b. 7/10 = 0.7, 19/5 = 3.8, 15/5 = 3 → ascending: 7/10, 15/5, 19/5",
                  "a. 25/7 ≈ 3.57, 13/17 ≈ 0.76 → descending: 25/7, 13/17 b. 3/12=0.25, 7/5=1.4, 16/8=2, 4/32=0.125, 4/5=0.8, 12/4=3 → descending: 12/4, 16/8, 7/5, 4/5, 3/12, 4/32",

                  // Section 7.8 Answers
                  "a. 13/7 b. 9/12+4/12=13/12 c. 4/6+5/6=9/6=3/2 d. 14/21+6/21=20/21 e. 45/60+20/60+12/60=77/60 f. 10/15+12/15=22/15 g. 12/15+10/15=22/15 h. 24/40+25/40=49/40 i. 18/4+5/4=23/4 j. 56/21+6/21=62/21 k. Same as e, 77/60 l. 70/105+84/105+45/105=199/105 m. 27/6+15/6+14/6=56/6=28/3",
                  "2/3 + 3/4 = 8/12 + 9/12 = 17/12 = 1 5/12 liters",
                  "2/5 + 3/4 = 8/20 + 15/20 = 23/20 = 1.15 m. Perimeter is 1 m, so 1.15 m > 1 m, yes it's sufficient.",
                  "a. 6/3 = 2 b. 2/5 c. 4/6 = 2/3 d. 6/2 = 3",
                  "a. 3/4 b. -5/5 = -1 c. -16/7",
                  "a. Distance to school = 10 km, auto = ½ km, so walk = 10 – ½ = 9½ km = 19/2 km b. Jivika: 10/3 ≈ 3.33 min, Namita: 13/4 = 3.25 min → Namita takes less by 10/3 – 13/4 = 40/12 – 39/12 = 1/12 minute",

                  // Section 7.9 Puzzle
                  "½ + ⅓ + ⅙ = 1",
                  "One solution: ½ + ¼ + ⅙ + 1/12 = 1. Others include ½ + ⅓ + 1/7 + 1/42, etc.",
                ],
              },
            ],

            activities: [
              "Paper folding to create fractional parts (halves, quarters, eighths)",
              "Fraction wall construction using paper strips",
              "Sharing food items (rotis, chikkis) equally among friends",
              "Number line representation of fractions",
              "Equivalent fraction games with paper strips",
              "Fraction addition and subtraction with visual aids",
              "Research local language names for fractions",
              "Unit fraction puzzle exploration",
            ],

            summary: [
              "■ Fractions as equal parts—When a whole unit is divided into equal parts and shared, a fraction is obtained.",
              "■ Fractional units—When a whole unit is divided into equal parts, each part is called a fractional unit.",
              "■ Reading fractions—In a fraction like 5/6, 5 is called the numerator and 6 is called the denominator. It is read as 'five by six'.",
              "■ Mixed fractions have a whole number part and a fractional part.",
              "■ Number line—Fractions can be represented on a number line. There is a point on the number line corresponding to each fraction.",
              "■ Equivalent fractions—When two or more fractions represent the same part, they are called equivalent fractions.",
              "■ Lowest terms—A fraction whose numerator and denominator have no common factor other than 1 is said to be in lowest terms or simplest form.",
              "■ Brahmagupta's method for adding fractions—When adding fractions, convert them to equivalent fractions with the same fractional unit (i.e., same denominator), then add the number of fractional units from each fraction. This is done by adding the numerators while keeping the denominator the same.",
              "■ Brahmagupta's method for subtracting fractions—When subtracting fractions, convert them to equivalent fractions with the same fractional unit (i.e., same denominator), then subtract the number of fractional units. This is done by subtracting the numerators while keeping the denominator the same.",
            ],
          },
        },
        // ncertContent.js - Add this as Chapter 8

        {
          id: 8,
          title: "Playing with Constructions",
          content: {
            introduction:
              "In this chapter, we will explore various geometric constructions using a compass and ruler. We will learn how to create beautiful patterns, construct squares and rectangles, and discover interesting properties of diagonals. We'll also learn how to find points that are equidistant from given points, which helps in creating complex figures.",

            sections: [
              {
                title: "8.1 Artwork",
                content:
                  "Observe the following constructions carefully and try to draw them freehand. Now take a compass and ruler in your hands. Let's see if we can draw these figures with the help of these tools. Before that, let's get familiar with the compass. Observe how the compass is made. What all can we draw with the help of a compass? Find out. Do you know about curves? These can all be figures drawn by pencil on paper, including straight lines, circles, and other shapes, as shown in the figure below.",
                examples: [
                  "Freehand drawing vs. compass and ruler drawing",
                  "Compass can draw circles and arcs",
                  "Ruler draws straight lines",
                ],
              },
              {
                title: "Exploring the Compass",
                content:
                  "Mark a point 'P' on paper. Then mark as many points as possible at a distance of 4 cm from point P in different directions. Think: Imagine all points at a distance of 4 cm from point P. How do they appear? Try to draw this and check by taking some points on the curved line whether the points marked on the curve are correct? Are they exactly at a distance of 4 cm from P? Find out, if you haven't done so yet, see if a compass can be used for this task. For this, mark some points at a distance of 4 cm from point P with the help of a compass. How can this be done?",
                examples: [
                  "All points at a fixed distance from a center form a circle",
                  "Center P, radius 4 cm",
                ],
              },
              {
                title: "Drawing a Circle",
                content:
                  "Open a compass with a ruler so that the compass point and pencil tip are at a distance of 4 cm on the ruler. (See Figure 8.2) Now, try to draw the complete curve with the compass. (Hint: Keep the compass point fixed and only rotate the pencil) What is the shape of this curve? It is a circle! The distance between the center and any point on the circle is called its radius.",
                examples: [
                  "Circle with center P and radius 4 cm",
                  "All points on circle are equidistant from center",
                ],
              },
              {
                title: "Constructing Figures",
                content:
                  "After exploring the use of the compass, proceed to redraw the figures given in Figure 8.1. Can you draw these figures similar to those shown there? If you wish, try again. Does using tools make the construction easier? Now try to draw the following figures.",
                examples: [
                  "Practice drawing various curved figures",
                  "Combine circles and arcs to create patterns",
                ],
              },
              {
                title: "Construction 1: A Person",
                content:
                  "How would you draw this figure? This figure has two components. You might have found a way to draw the first part. Look at this to draw the second part. The challenge here is where to place the compass point and what radius to take to draw this curve. Fix a radius in the compass and try placing the compass point at different places to see from which points we get the curve. Estimate where to place the compass point.",
                examples: [
                  "Figure of a person made of circles and arcs",
                  "Head: full circle",
                  "Body and neck: arcs and curves",
                ],
              },
              {
                title: "Construction 2: Wavy Wave",
                content:
                  "Draw this. Since the length of the central line segment is not specified, we can take it of any length. We take AB as a central line segment, where AB = 8 cm. Here, the first wave is drawn as a semicircle.",
                examples: [
                  "Wave pattern using semicircles",
                  "Semicircles drawn above and below the line",
                ],
              },
              {
                title: "Construction 3: Eyes",
                content:
                  "How would you draw these eyes with the help of a compass? For hints, refer to the end of this chapter. Draw any other artwork of your choice with the help of a ruler and compass.",
                examples: [
                  "Eye shapes using intersecting arcs",
                  "Symmetrical patterns",
                ],
              },
              {
                title: "8.2 Squares and Rectangles",
                content:
                  "Let's look at some basic shapes whose boundaries are made of straight lines. What are these shapes like? Yes, these are our familiar squares and rectangles. But what makes them squares or rectangles? Consider this rectangle ABCD. Points A, B, C, and D are the vertices of the rectangle. Lines (line segments) AB, BC, CD, and DA are its sides. ∠A, ∠B, ∠C, and ∠D are its angles. The blue sides AB and CD are called opposite sides, because they are situated opposite each other.",
                examples: [
                  "Rectangle ABCD with vertices A,B,C,D",
                  "Opposite sides: AB and CD, AD and BC",
                  "All angles are 90°",
                ],
              },
              {
                title: "Properties of Rectangles and Squares",
                content:
                  "Similarly, AD and BC are the other pair of opposite sides. Recall that in a rectangle: R1) Opposite sides are equal in length, and R2) All angles are 90°. As done in the context of rectangles, for a square too, the corners and sides are defined in the same way. A square satisfies the following two properties: S1) All sides are equal, and S2) All angles are 90°.",
                examples: [
                  "Rectangle: opposite sides equal, all angles 90°",
                  "Square: all sides equal, all angles 90°",
                ],
              },
              {
                title: "Naming Rectangles",
                content:
                  "Look at the rectangle in Figure 8.4, named ABCD. There are other ways to name this rectangle, such as BCDA, CDAB, DABC, ADCB, DCBA, CBAD, and BADC. So, can a rectangle be named using any combination of the labels of its corners? No! For example, it cannot be named ABDC or ACBD. Can you see which names are valid and which are not? In a valid name, the order of the corners starting from any corner continues in the same direction around the rectangle.",
                examples: [
                  "Valid names: ABCD, BCDA, CDAB, DABC (cyclic order)",
                  "Invalid names: ABDC, ACBD (not following cyclic order)",
                ],
              },
              {
                title: "Rotated Squares and Rectangles",
                content:
                  "Here in the figure, a square piece of paper is given, with all sides equal and all angles 90°. It is rotated as shown in the figure. Is it still a square? Let's check if it still satisfies the properties of a square: • Are all its sides still equal? Yes • Are all angles still 90°? Yes. Rotating a square does not change the length of its sides or the measure of its angles. Therefore, this rotated figure satisfies both properties of a square, so it is still a square. By the same logic, a rotated rectangle remains a rectangle.",
                examples: [
                  "Rotating doesn't change side lengths or angles",
                  "A rotated square is still a square",
                  "A rotated rectangle is still a rectangle",
                ],
              },
              {
                title: "8.3 Constructing Squares and Rectangles",
                content:
                  "Now, we will begin constructing squares and rectangles. How would you construct a square of side 6 cm? You can look at the following figures for help. A square PQRS of side 6 cm is constructed. Can you understand why PS should be 6 cm long?",
                examples: [
                  "Step-by-step construction of square",
                  "Using perpendicular lines and compass to mark equal sides",
                ],
              },
              {
                title: "8.4 An Exploration in Rectangles",
                content:
                  "Construct a rectangle ABCD with AB = 7 cm and BC = 4 cm. Imagine a point X that can be marked anywhere on side AD. Similarly, imagine a point Y that can be moved anywhere on side BC. Note that X can also be placed at endpoints A and D. Similarly, Y can be placed at endpoints B and C. At which positions will points X and Y be closest to each other? When do you think they will be at maximum distance from each other? What does your intuition say? Discuss with your classmates.",
                examples: [
                  "Exploring distances between points on opposite sides",
                  "Minimum distance when X and Y are aligned vertically",
                  "Maximum distance at opposite corners",
                ],
              },
              {
                title: "Recording Observations",
                content:
                  "Now, verify your guesses by actually placing points X and Y on the sides and measuring. How close or far are they? The distance between X and Y can be found by measuring the length of line segment XY. How can the minimum distance between X and Y be compared to the length of AB? Try different positions of X and Y and check if there are other positions where they are closest or farthest. You can make multiple copies of this rectangle taking different positions of X and Y.",
                examples: [
                  "Table to record distances: Distance of X from A, Distance of Y from B, Length of XY",
                ],
              },
              {
                title: "Special Case: Equal Distances",
                content:
                  "Have you checked what happens to the length of XY when X and Y are placed at equal distances from A and B respectively? For example, in situations like: Distance of X from A = 5 mm, Distance of Y from B = 5 mm; Distance of X from A = 1 cm, Distance of Y from B = 1 cm; etc. Observe each of these situations: 1. How does the length of XY compare to the length of AB? 2. The shape of quadrilateral ABYX.",
                examples: [
                  "When distances are equal, XY forms interesting patterns",
                  "Compare XY with AB",
                ],
              },
              {
                title: "Breaking Rectangles",
                content:
                  "Construct a rectangle that can be divided into 3 identical squares. If this seems difficult, let's try to simplify the problem. Can you construct a rectangle that can be divided into two identical squares? Can you try this? It would be wise to plan first and then construct. But how do we plan? Can you think of any method? One way is to draw a rough figure of the final shape and visualize it.",
                examples: [
                  "Rectangle divided into equal squares",
                  "For 2 squares: length = 2 × breadth",
                  "For 3 squares: length = 3 × breadth",
                ],
              },
              {
                title: "Using Rough Figures",
                content:
                  "What conclusions can we draw from this figure? Can you identify equal sides? Since both squares are identical, AB = BC and FE = ED. Since ABEF and BCDE are squares, all sides of each of these squares are equal. This is written as: AF = AB = BE = FE, and BE = BC = CD = ED. Therefore, all small line segments are equal. A convention is followed to show equal sides. This is done by marking a symbol '|' on these sides.",
                examples: [
                  "Marking equal sides with hash marks",
                  "Identifying relationships between sides",
                ],
              },
              {
                title: "Constructing Without Given Measurements",
                content:
                  "Can you try to construct it based on the above analysis? Remember, you are asked to construct a rectangle that can be divided into three identical squares, and no measurements are given. To construct rectangle ACDF, we can assign any length to AF. For example, if we set AF = 4 cm, what should be the length of AC? Can the rectangle now be completed? Actually, we can start construction by drawing AF without measuring its length with a ruler. After that, we can draw a perpendicular to AF long enough to contain the other side. Since AB = AF, we need to cut a length equal to AF on the above perpendicular, which will give us point B. How do we do this without a ruler? Can this be done using a compass?",
                examples: [
                  "Using compass to transfer length AF to perpendicular",
                  "Completing the rectangle",
                ],
              },
              {
                title: "8.5 Exploring Diagonals of Rectangles and Squares",
                content:
                  "Consider a rectangle PQRS. Join PR and QS. These two line segments are called the diagonals of this rectangle. Compare the lengths of the diagonals. First guess, then draw the rectangle marking the points as shown in the figure and measure the diagonals. In rectangle PQRS, the right angles at P and R are called opposite angles. The other pair of opposite angles are at Q and S. Note that a diagonal divides each pair of opposite angles into two smaller angles. In the given figure, diagonal PR divides ∠R into two smaller angles called g and h. The same diagonal also divides angle P into angles c and d. Are g and h equal? Are c and d equal? Guess first, then measure the angles. What do you see? Identify the pairs of angles that are equal.",
                examples: [
                  "Diagonals of a rectangle are equal in length",
                  "Diagonals bisect each other",
                  "Diagonals do not necessarily bisect angles",
                ],
              },
              {
                title: "Exploring Angle Bisectors",
                content:
                  "How to construct a rectangle where the diagonals bisect the opposite angles into equal parts? How will you record your observations? First, identify the parameters that need attention. They are the sides of the rectangle and the 8 angles formed by the two diagonals. Are there any other measurements you would like to keep an eye on?",
                examples: [
                  "When diagonals bisect angles, the rectangle becomes a square",
                  "In a square, diagonals bisect angles into 45° each",
                ],
              },
              {
                title: "Construction: Rectangle with Given Diagonal Angles",
                content:
                  "1. Construct a rectangle in which a diagonal divides the opposite angles into 60° and 30°. Let's start with a rough figure. In what order can its parts be constructed? We systematically create the possible sequence of drawing. Step 1: Draw line AB of any length. What will be the next point to mark? Step 2: We know the line on which point D lies. Draw a perpendicular line through point A on AB. Now ∠A is divided into two angles. One angle is 60°. Check what the other angle is. There are at least two methods to find point D: First, we can use the fact that in a rectangle all angles are right angles. Second, opposite sides of a rectangle are equal.",
                examples: [
                  "Using given angle conditions to construct rectangle",
                  "Two methods: using right angles or using equal opposite sides",
                ],
              },
              {
                title: "Construction: Rectangle with Given Side and Diagonal",
                content:
                  "2. Construct a rectangle with one side 5 cm and diagonal length 7 cm. Let's draw a rough diagram. Let's decide the steps of construction. Which line can be drawn first? Step 1: Base CD of length 5 cm can be easily constructed. Now what? Step 2: Draw a perpendicular line at point C to CD. We'll call this line 'l'. This is easy because we know this line 'l' will be perpendicular to the base. Point B should lie somewhere on this line. How will we find this? What else do we know about the position of B? We know that it is at a distance of 7 cm from D.",
                examples: [
                  "Using circle to find point at given distance",
                  "Intersection of perpendicular line and circle gives point B",
                ],
              },
              {
                title: "Method 1: Drawing Full Circle",
                content:
                  "One method is to take a ruler and rotate it so that point B is obtained on line 'l' at a distance of 7 cm from point D. But this requires trial and error. Another more efficient method doesn't require trial and error. For this, instead of finding the desired point at distance 7 cm from D, let's find a way to get all points that are at a distance of 7 cm from D. We know what this shape is. Step 3 Method 1: Taking D as center, draw a circle of radius 7 cm. Can you determine point B here? Recall that it is at a distance of 7 cm from D and lies on line 'l'. Consider the point where this circle and line intersect. What is its distance from D? Check your figure if needed. What do you see? The point where the circle intersects line 'l' is the desired point B.",
                examples: [
                  "Circle with center D radius 7 cm",
                  "Intersection of circle and perpendicular line gives B",
                ],
              },
              {
                title: "Method 2: Drawing Only an Arc",
                content:
                  "Was it necessary to draw the full circle to determine point B? We can see that near line 'l', only an arc needs to be drawn. So the third step can be done as shown in the figure. After marking three points of the rectangle, we now only need to complete this rectangle. Recall that we were in a similar situation in the previous question. We saw two methods to complete the rectangle from here. We can use either of these methods. Draw perpendiculars to DC and BC passing through points D and B respectively. The point where these lines intersect is the fourth point A. Check whether ABCD is really a rectangle satisfying properties R1 and R2.",
                examples: [
                  "Drawing only arc instead of full circle",
                  "Completing rectangle using perpendicular lines",
                ],
              },
              {
                title: "8.6 Points Equidistant from Two Given Points",
                content:
                  "Redraw this figure. Note that all line segments forming the border of the house above are 5 cm long. The first task is to identify the sequence in which the lines and arcs should be drawn. Can you complete this figure? Try! We need to determine point A, which is at a distance of 5 cm from both points B and C. You might have experienced that this can be done with just a ruler. However, this may involve a lot of trial and error. How can this construction be simplified? If you've guessed that it can be done with a compass, you're right. Go ahead and find out how point A can be determined without 'trial and error'.",
                examples: [
                  "House figure made of line segments and arcs",
                  "Point A equidistant from B and C (both 5 cm)",
                ],
              },
              {
                title: "Using Intersecting Circles",
                content:
                  "There is similarity between determining point A in this problem and determining point B in the third step of the solution of the second example in the previous section. Draw a curve whose all points are at a distance of 5 cm from B. It should be a circle with center B and radius 5 cm. Does this help in determining point A? Construct and explore in this figure. The point on the circle whose distance from C is 5 cm can determine point A. Again, this can be done using a ruler. But can we also use a compass for this?",
                examples: [
                  "Draw circle with center B radius 5 cm",
                  "Draw circle with center C radius 5 cm",
                  "Intersection of circles gives point A",
                ],
              },
              {
                title: "Step 3: Method 1 - Full Circles",
                content:
                  "With center C and radius 5 cm, draw a circle with the help of a compass. What do you see? Look at the point where both circles intersect. How far is this point from B? How far is this point from C? So point A is located here.",
                examples: [
                  "Two circles intersect at two points",
                  "Both intersection points are equidistant from B and C",
                ],
              },
              {
                title: "Step 3: Method 2 - Only Arcs",
                content:
                  "Think: Was it necessary to draw both circles completely to get point A? We only needed parts of these circles. Therefore, point A could also be obtained by drawing arcs of radius 5 cm from points B and C.",
                examples: [
                  "Draw arcs instead of full circles",
                  "Intersection of arcs gives point A",
                ],
              },
              {
                title: "Completing the House",
                content:
                  "Join A to B and C with straight lines. After obtaining point A, only the remaining arcs need to be constructed. How will we do this? Can we use the fact that A is at a distance of 5 cm from both B and C? Step 4: Take a radius of 5 cm in the compass and draw arcs from A touching B and C; as shown in the figure below. Now the house is ready!",
                examples: [
                  "Draw arcs from A through B and C",
                  "Complete the house shape",
                ],
              },
            ],

            exercises: [
              {
                type: "explore",
                questions: [
                  // Section 8.1 Questions
                  "What radius should be set in the compass to draw this semicircle? What should be the length of AX?",
                  "Take a central line (segment) of different length and try to draw waves on it.",
                  "Redraw the figures where the waves are smaller than a semicircle (as seen in the neck of 'A Person' on the previous page). The challenge here is that both waves should be identical. This might be difficult.",

                  // Section 8.2 Questions
                  "Draw a rectangle and four squares on dot paper (as shown in Figure 8.3). What will you do to redraw the figure so that the four squares are placed symmetrically around the rectangle? Discuss with your classmates.",
                  "Identify if there is any square in this collection. Use measurement if necessary.",
                  "Think: Without using measuring tools in the above figure, is it possible to tell whether the sides are equal or not, whether the angles are right angles or not? Can we determine this just by looking at the positions of vertices on dot paper?",
                  "Draw at least 3 rotated squares and 3 rotated rectangles on dot paper. Draw them so that their corners are on the dots of the dot paper. Check whether the squares and rectangles you have drawn satisfy their respective properties.",

                  // Section 8.3 Questions
                  "Construct a rectangle with sides 6 cm and 4 cm. After construction, check if it satisfies both properties of a rectangle.",
                  "Construct a rectangle with sides 2 cm and 10 cm. After construction, check if it satisfies both properties of a rectangle.",
                  "Is it possible to construct a four-sided figure in which: • All angles are equal to 90°, but • Opposite sides are not equal?",

                  // Section 8.4 Questions
                  "Complete the table for different positions of X and Y and find XY lengths.",
                  "Complete the table for cases when X and Y are at equal distances from A and B respectively.",
                  "How does the maximum distance between X and Y compare to the length of AC or BD?",
                  "Construct a rectangle that can be divided into three identical squares.",
                  "Construct a rectangle that can be divided into two identical squares.",
                  "State the side lengths of a rectangle that cannot be divided into: • two identical squares • three identical squares",

                  // Section 8.5 Questions
                  "Construct a rectangle in which a diagonal divides the opposite angles into 50° and 40°.",
                  "Construct a rectangle in which a diagonal divides the opposite angles into 45° and 45°. What do you observe about its sides?",
                  "Construct a rectangle with one side 4 cm and diagonal length 8 cm.",
                  "Construct a rectangle with one side 3 cm and diagonal length 7 cm.",

                  // Section 8.6 Questions
                  "Construct a larger house with all sides 7 cm long.",
                  "Using the concepts involved in the construction of the house, try to recreate 'A Person', 'Wavy Wave', and 'Eyes' from the Artwork section.",
                  "Can a four-sided figure with all sides equal be constructed that is not a square? If such a figure exists, can you construct it?",

                  // Hints for Eyes
                  "Look carefully at the figure. You will see two very light horizontal line segments. In geometric constructions, we sometimes need to draw some auxiliary curves or figures that are not part of the final figure but help in the construction. The process of drawing the upper and lower curves of the eye is the same as used in the figure 'A Person'. Points A and B are where the compass point is placed when drawing the curves of the eye. Remember that the upper and lower curves together should form a symmetrical figure. To do this, where should points A and B be placed or determined? Make an estimate.",

                  // Hints for Four Equal Sides
                  "For the purpose of construction, let's assume the side length is 5 cm. Consider the given figure. To construct this four-sided figure, we need only one more point. Suppose that point is D, which should be at a distance of 5 cm from points B and C. How can such a point be found? Can any method used in the 'house' problem be used here?",
                ],
                answers: [
                  // Section 8.1 Answers
                  "Radius = half of AB length; AX = half of AB",
                  "Experiment with different lengths",
                  "Requires careful measurement and symmetry",

                  // Section 8.2 Answers
                  "Place squares at equal distances from rectangle corners",
                  "Check using dot paper or measurement",
                  "On dot paper, you can check if all sides have same dot count and if angles are square corners",
                  "Draw and verify using properties",

                  // Section 8.3 Answers
                  "Construct using perpendicular lines and equal sides",
                  "Same method as above",
                  "No, if all angles are 90°, opposite sides must be equal (property of rectangle)",

                  // Section 8.4 Answers
                  "Table of XY lengths for various positions",
                  "When distances equal, XY may be parallel to AB",
                  "Maximum distance = diagonal length",
                  "Rectangle with length = 3 × breadth",
                  "Rectangle with length = 2 × breadth",
                  "Any rectangle where length/breadth is not an integer for 2 squares; not multiple of 3 for 3 squares",

                  // Section 8.5 Answers
                  "Construct using angle conditions",
                  "When angles are 45°, rectangle becomes a square (all sides equal)",
                  "Use circle method: diagonal as radius",
                  "Use circle method: diagonal as radius",

                  // Section 8.6 Answers
                  "Follow same method with 7 cm sides",
                  "Use intersecting circles and arcs method",
                  "Yes, a rhombus (all sides equal but angles not 90°) can be constructed",

                  // Additional answers
                  "Points A and B should be placed symmetrically for the eyes",
                  "Use intersecting circles method from house construction",
                ],
              },
            ],

            activities: [
              "Freehand drawing of geometric patterns",
              "Compass practice: drawing circles and arcs of different radii",
              "Constructing squares and rectangles with given dimensions",
              "Exploring distances between points on opposite sides of a rectangle",
              "Dividing rectangles into equal squares",
              "Constructing figures using intersecting circles (house, person, eyes)",
              "Exploring diagonal properties of rectangles and squares",
              "Creating symmetric patterns and artwork",
            ],

            summary: [
              "■ All points on a circle are at the same distance from the center; this distance is called the radius.",
              "■ A compass can be used to construct circles and their parts.",
              "■ To plan the construction of a given figure, drawing a rough figure first can be helpful.",
              "■ A rectangle can be constructed if its sides or one side and the diagonal are given.",
              "■ A square is a special rectangle with all sides equal.",
              "■ Rotating a square or rectangle does not change its properties.",
              "■ Points equidistant from two given points can be found by drawing intersecting circles or arcs.",
              "■ Diagonals of a rectangle are equal in length.",
              "■ In a square, diagonals bisect the angles (45° each).",
            ],
          },
        },
        // ncertContent.js - Add this as Chapter 9
        {
          id: 9,
          title: "Symmetry",
          content: {
            introduction:
              "Look around you, you can find many objects that catch your attention. Some of them are shown below. The pictures above appear beautiful. No matter from which side we look at a flower, it appears beautiful, attractive, and the same from all sides. What do you think about a butterfly? Butterflies have very attractive colors. Do you find anything else attractive about butterflies? Looking at all the figures above, it seems that some parts of the figure are repeated, and these repetitions appear to occur in a definite pattern. Can you see what is repeated in the rangoli design? When the flower is rotated by 90 degrees around the center, its red petals come back to themselves. The same happens with other parts of the rangoli.",
            examples: [
              "Flowers appear the same from all sides",
              "Butterflies have symmetrical patterns",
              "Rangoli designs repeat patterns",
              "Some objects have symmetry, others don't",
            ],
          },

          sections: [
            {
              title: "9.1 Line of Symmetry",
              content:
                "In figure (a) below, there is a blue triangle with a dotted line drawn. What will happen if you fold the triangle along the dotted line? When folded along the line, one half of the triangle completely covers the other half. These are called mirror halves! What do you think about figure (b) with 4 puzzle pieces and a dotted line passing through them? Are these mirror halves? No, when we fold along the line, the left half does not completely cover the right half. When a line divides a figure into two parts that completely cover each other upon folding, that line is called the line of symmetry of the figure.",
              examples: [
                "Line of symmetry divides figure into mirror halves",
                "Folding test: if halves match, line is symmetry line",
                "Some figures have no line of symmetry",
              ],
            },
            {
              title: "Figures with More Than One Line of Symmetry",
              content:
                "Does a square have only one line of symmetry? Take a square piece of paper. Find all its lines of symmetry by folding. Here the paper is folded in different ways creating several lines of symmetry. • Fold the paper in half vertically. • Then fold the paper in half horizontally (that means you folded it twice). Now, open the folds. Again, fold the square in half along the diagonal (this is the third fold), as shown in the figure. Open the fold again. Now fold it in half along the other diagonal (this is the fourth fold), as shown in the figure. Open the fold again.",
              examples: [
                "Square has 4 lines of symmetry: vertical, horizontal, and two diagonals",
                "Rectangle has 2 lines of symmetry (vertical and horizontal)",
                "Circle has infinite lines of symmetry",
              ],
            },
            {
              title: "Reflection",
              content:
                "So far we have been saying that when we fold a figure along its line of symmetry, both parts completely cover each other. We can also say that the part on one side of the line of symmetry is reflected to the other side by the line. Similarly, the part on the other side of the line of symmetry is reflected to the first side. Let's understand this by marking some points on the figure. The figure below shows a square with its corners marked A, B, C, and D. Let's take its vertical line of symmetry. When we reflect this square along this line, the points on the right side B and C are reflected to the left side, taking the positions of points A and D respectively. What happens to points A and D? Point A takes the position of point B, and point D takes the position of point C.",
              examples: [
                "Reflection across line of symmetry",
                "Points map to corresponding points on other side",
                "The line of symmetry acts like a mirror",
              ],
            },
            {
              title: "Making Shapes with Lines of Symmetry",
              content:
                "So far we have seen symmetrical and asymmetrical figures. How are such symmetrical figures made? Let's explore this.",
              examples: [
                "Ink-blot technique",
                "Paper folding and cutting",
                "Punching holes in folded paper",
              ],
            },
            {
              title: "Ink-Blot Devils",
              content:
                "You have done this before in Class 5. Take a piece of paper. Fold it in half. Sprinkle some drops of ink (or paint) on one half. Now press both halves together and then open the paper again. • What do you see? • Is the resulting figure symmetrical? • If yes, where is the line of symmetry? • Is there any other line of symmetry along which folding would give two identical parts? • Try to get more such patterns.",
              examples: [
                "Ink-blot creates symmetric pattern",
                "Fold line becomes line of symmetry",
              ],
            },
            {
              title: "Paper Folding and Cutting",
              content:
                "This is another method of creating symmetric shapes. In both these pictures, after folding the paper, cut along the dotted line shown in the figure. Draw a rough figure predicting what the figure will look like when the paper is opened. Do you see a line of symmetry in this figure? Where is it? Create different symmetric shapes by folding and cutting. There are more ways of folding and cutting paper pieces to obtain symmetric shapes. Use thin colored rectangular paper. Fold it multiple times as shown in the figure and cut the paper to create some complex patterns. Identify the lines of symmetry in the repeating figures. Cut such papers to create decorative shapes for festive occasions.",
              examples: [
                "Fold paper, cut shape, unfold to get symmetric design",
                "Multiple folds create patterns with multiple lines of symmetry",
              ],
            },
            {
              title: "Punching Game",
              content:
                "The fold is a line of symmetry. Punch holes at different places in a folded square sheet of paper with the help of a punching machine and create different symmetrical patterns.",
              examples: [
                "Holes appear in symmetric positions when unfolded",
                "Pattern depends on fold lines",
              ],
            },
            {
              title: "9.2 Rotational Symmetry",
              content:
                "The paper windmill shown in the picture appears symmetric, but there is no line of symmetry here. If you fold it, the two halves will not completely cover each other. On the other hand, if you rotate it by 90° about the red dot at the center, this windmill will look exactly the same as before. We say that this windmill has rotational symmetry. Whenever rotational symmetry is discussed, there is a fixed point about which the object is rotated. This fixed point is called the centre of rotation.",
              examples: [
                "Windmill has rotational symmetry but not line symmetry",
                "Rotating by 90° gives same appearance",
                "Centre of rotation is fixed point",
              ],
            },
            {
              title: "Angle of Rotational Symmetry",
              content:
                "Will the above windmill look exactly the same when rotated by an angle smaller than 90°? No! The angle through which a figure can be rotated to look exactly the same as before is called the angle of rotational symmetry, or simply the angle of symmetry (in short). For the windmill, the angles of symmetry are 90° (quarter turn), 180° (half turn), 270° (three-quarter turn), and 360° (full turn). Note that when any figure is rotated by 360°, it returns to its original position. So 360° is always an angle of symmetry. Thus, we see that the windmill has 4 angles of symmetry. Do you know any other figure that has exactly 4 angles of symmetry?",
              examples: [
                "Square has 4 angles of symmetry: 90°, 180°, 270°, 360°",
                "Rectangle has 2 angles of symmetry: 180°, 360°",
                "Equilateral triangle has 3 angles of symmetry: 120°, 240°, 360°",
              ],
            },
            {
              title: "How many angles of symmetry does a square have?",
              content:
                "How much rotation is needed to get the original square? After a 90° rotation, we get an overlapping square. This rotation moves point A to the position of point B, point B to the position of point C, point C to the position of point D, and point D back to the position of point A. Do you know where to mark the centre of rotation? What are its other angles of symmetry?",
              examples: [
                "Square: 90°, 180°, 270°, 360°",
                "Centre of rotation is the center of the square",
              ],
            },
            {
              title: "Example: Strip Figure",
              content:
                "For the strip given below, find the angles of symmetry. Solution: Let's rotate this strip about its center in the clockwise direction. Do we get the original position after a 180° rotation? No. Why? After another 180° rotation from the obtained position, we get the original position. This figure returns to its original position only after a complete rotation, i.e., after a 360° rotation. Therefore, we say that this figure does not have rotational symmetry.",
              examples: [
                "Figure with only 360° symmetry has no rotational symmetry",
                "Need at least one angle less than 360°",
              ],
            },
            {
              title: "Rotational Symmetry in Figures with Radial Arms",
              content:
                "Look at the given figure, it has 4 radial arms. How many angles of symmetry does it have? What are they? Note that the angle between each two adjacent central dotted lines is 90°. Can you change the angles between these radial arms so that the resulting figure still has 4 angles of symmetry? Try drawing it.",
              examples: [
                "4 radial arms at 90° intervals → 4 angles of symmetry",
                "Equal spacing gives rotational symmetry",
              ],
            },
            {
              title: "Finding Rotational Symmetry",
              content:
                "To check if a drawn figure actually has 4 angles of symmetry, you can draw the figure on two different papers. Cut out the radial arms on one paper. Keeping the figure on the other paper fixed, rotate the cut-out figure on it to check for rotational symmetry. How would you modify this figure so that it has only 2 angles of symmetry?",
              examples: [
                "Use cut-out method to verify rotational symmetry",
                "Modify arm spacing to change symmetry",
              ],
            },
            {
              title: "Figures with 3 Angles of Symmetry",
              content:
                "We have seen figures with 4 and 2 angles of symmetry. Can we get a figure with exactly 3 angles of symmetry? Can you use radial arms for this? Let's try with 3 radial arms as in the figure below. How many angles of symmetry does it have and what are they? A figure with three radial arms is given below. Make a copy of this figure and cut it out. Determine its angles of symmetry by rotating the cut-out on the figure. We see that only after a complete rotation, i.e., 360°, does this figure return to its original position. Therefore, this figure has no rotational symmetry, because its only angle of symmetry is 360°.",
              examples: [
                "3 unequal arms → no rotational symmetry",
                "Need equal angles between arms",
              ],
            },
            {
              title: "Creating 3-Fold Rotational Symmetry",
              content:
                "However, can a change be made in this figure so that it has 3 angles of symmetry? Can this be done by changing the angles between the dotted lines? If a figure with three radial arms has rotational symmetry, then the rotated version must overlap with the original. Here rough diagrams of both positions are given. If these two figures have to overlap, what can you say about their angles? Note that ∠A must overlap with ∠B, ∠B must overlap with ∠C, and ∠C must overlap with ∠A. Therefore, ∠A = ∠B = ∠C. What should this angle be? We know that a full rotation is 360°. This is equally distributed among the three angles, so each angle = 360°/3 = 120°. Thus, a figure with 3 radial arms exhibits rotational symmetry when the angle between adjacent dotted lines is 120°. Use paper cut-outs to verify this observation.",
              examples: [
                "3 arms at 120° intervals → 3 angles of symmetry: 120°, 240°, 360°",
              ],
            },
            {
              title: "General Rule for Radial Arms",
              content:
                "Now how many angles of symmetry does this figure have and what are they? Can you create figures with radial arms that have: a. Exactly 5 angles of symmetry? b. 6 angles of symmetry? Also find the angle of symmetry for each figure. Hint: For the first case, take 5 radial arms. What should be the angle between two adjacent radial arms?",
              examples: [
                "n radial arms equally spaced → n angles of symmetry",
                "Angle between arms = 360°/n",
                "Angles of symmetry: multiples of 360°/n",
              ],
            },
            {
              title: "Symmetry in a Circle",
              content:
                "A circle is a fascinating figure. What happens when you rotate a circle about its center in the clockwise direction? It coincides with itself. It doesn't matter at what angle you rotate it. So for a circle, every angle is an angle of symmetry. Now, take a point on the circumference of a circle and join it to the center. Extend it to make a diameter of the circle. Is this diameter a line of reflective symmetry of the circle? Yes. Every diameter is a line of symmetry of the circle.",
              examples: [
                "Circle has infinite lines of symmetry (all diameters)",
                "Circle has infinite angles of symmetry (any rotation)",
              ],
            },
            {
              title: "Rotational Symmetry in Daily Life",
              content:
                "Like wheels, we can find many objects in our surroundings that have rotational symmetry. Find them. Some are shown below: Fan, Flower, Wheel.",
              examples: [
                "Ceiling fan blades have rotational symmetry",
                "Flowers often have rotational symmetry",
                "Wheels have rotational symmetry",
              ],
            },
          ],

          exercises: [
            {
              type: "explore",
              questions: [
                // Section 9.1 Questions
                "Have you been able to see lines of symmetry in the figures given at the beginning of this chapter? What do you think about the clouds figure?",
                "Identify the lines of symmetry in the following figures, if they exist.",

                // More than one line of symmetry
                "Are there any other ways to fold the square so that both halves cover each other? How many lines of symmetry does a figure like a square have?",

                // Reflection
                "If we reflect this figure along the diagonal passing through A and C, what will happen? Where will points A, B, C, and D go? If we reflect it along the horizontal line of symmetry, what will happen?",

                // Paper folding and cutting
                "In each given figure, a hole is punched in a folded square sheet of paper and then the paper is opened. Identify the line along which the paper was folded. Figure (d) is made with one hole. Find out how the paper was folded.",
                "Lines of symmetry are given, find the other holes: [various figures with partial holes]",
                "Below are some questions related to paper cutting. Consider a vertical fold. We represent it as follows: [vertical fold symbol]. Similarly, a horizontal fold is represented as follows: [horizontal fold symbol].",
                "In each situation below, after cutting, when the paper is opened, estimate the shape of the hole and verify it.",
                "Suppose you have to obtain each of these shapes with some folds and one straight cut. How would you do it? a. The hole in the center is a square. b. The hole in the center is a square. Note—For both questions above, check whether the four-sided figure in the center satisfies both properties of a square.",
                "How many lines of symmetry do these figures have? b. A triangle with equal sides and equal angles c. A hexagon with equal sides and equal angles",
                "Trace each figure and draw the lines of symmetry, if any: [various shapes]",
                "Find the lines of symmetry in the column below: [various letters and symbols]",
                "Draw the following: a. A triangle with exactly one line of symmetry b. A triangle with exactly three lines of symmetry c. A triangle with no line of symmetry. Is it possible to draw a triangle with exactly two lines of symmetry?",
                "Draw the following. In each case, the figure must have at least one curved boundary. a. A figure with exactly one line of symmetry b. A figure with exactly two lines of symmetry c. A figure with exactly four lines of symmetry",
                "Draw the following figures on square paper. Complete them so that the blue line is the line of symmetry. Problem (a) has been done for you. Hint — For (c) and (f), see if rotating the book helps!",
                "Draw the following figures on square paper. Complete each of them so that the resulting figure has two blue lines as lines of symmetry.",
                "Draw the following line figures on a dot grid. Draw two more lines for each figure to create a figure with one line of symmetry.",

                // Section 9.2 Questions
                "Can you make a figure with radial arms that has exactly 7 angles of symmetry? What will be its smallest angle of symmetry? Will the angle measure be a whole number in this case? If not, express it as a mixed fraction.",
                "Let's find angles of symmetry in some other types of figures. Find the angles of symmetry about the marked point • in the given figures.",
                "Which of the following figures have more than one angle of symmetry?",
                "State the order of rotational symmetry for each figure.",
                "Let's list the angles of symmetry for all the above cases: • Angles of symmetry when there are exactly 2 angles of symmetry: 180°, 360° • Angles of symmetry when there are exactly 3 angles of symmetry: 120°, 240°, 360° • Angles of symmetry when there are exactly 4 angles of symmetry: 90°, 180°, 270°, 360°. Do you see any common fact about the angles of symmetry in all these cases? The numbers in the first row are multiples of 180. The numbers in the second row are multiples of 120, and the numbers in the third row are multiples of 90. In each case, the angles are multiples of the smallest angle. You might enthusiastically ask: does this always happen? What do you think?",
                "True or False: • Every figure will have 360° as an angle of symmetry. • If the smallest angle of symmetry of a figure is a natural number, it will be a factor of 360°.",
                "Do all figures have a smallest angle of symmetry? It turns out that except for the most symmetric shape, like a circle, all figures have this smallest angle. Let's now discuss the circle.",
                "Color the sectors of the circle below in such a way that the figure has (i) 3 angles of symmetry (ii) 4 angles of symmetry (iii) What would be the number of possible angles of symmetry if these sectors are colored in different ways with different colors?",
                "Apart from the circle and square, draw two other figures that have both reflective symmetry and rotational symmetry.",
                "Draw a rough sketch of the following wherever possible: a. A triangle with at least two lines of symmetry and at least two angles of symmetry. b. A triangle with only one line of symmetry but no rotational symmetry. c. A quadrilateral with rotational symmetry but no reflective symmetry. d. A quadrilateral with reflective symmetry but no rotational symmetry.",
                "The smallest angle of symmetry of a figure is 60°. What are the other angles of symmetry of this figure?",
                "A figure has an angle of symmetry of 60°. Two angles of symmetry of this figure are less than 60°. What will be the smallest angle of symmetry?",
                "Can we get a figure with rotational symmetry whose smallest angle of symmetry is (a) 45°? (b) 17°?",
                "This is a picture of the new Parliament House in Delhi: a. Does the outer boundary of this picture have reflective symmetry? If so, draw the lines of symmetry. How many are there? b. Does it have rotational symmetry about its center? If so, find the angles of rotational symmetry.",
                "How many lines of symmetry do the figures in the first shape sequence of regular polygons in Chapter 1, Table 3 have? What number sequence do you get?",
                "How many angles of symmetry do the figures in the first shape sequence of regular polygons in Chapter 1, Table 3 have? What number sequence do you get?",
                "How many lines of symmetry do the figures in the last shape sequence of Koch snowflake in Chapter 1, Table 3 have? How many angles of symmetry?",
                "How many lines of symmetry and angles of symmetry does the Ashoka Chakra have?",

                // Playing with Tiles
                "a. Use the colored tiles given at the end of the book to complete this figure so that it has exactly two lines of symmetry. b. Using 16 such tiles, create a figure that has exactly: 1. One line of symmetry. 2. Two lines of symmetry. c. Create creative symmetric designs using these tiles.",

                // Game
                "Draw a 6×6 grid. Two players take turns drawing a line filling two adjacent squares. This line can be drawn either horizontally or vertically. These lines cannot overlap. The game continues until a player cannot draw any more line. The player who cannot draw a line loses the game. What should be the winning strategy for this game?",
              ],
              answers: [
                // Section 9.1 Answers
                "Flower, rangoli, pinwheel have symmetry; clouds don't",
                "Answers depend on figures",
                "Square has 4 lines of symmetry",
                "Points map accordingly",
                "Various fold patterns",
                "Symmetrical hole patterns",
                "Various cut patterns",
                "Various shapes",
                "Various answers",
                "Various answers",
                "Various answers",
                "a. Isosceles triangle b. Equilateral triangle c. Scalene triangle; No, triangle cannot have exactly 2 lines of symmetry",
                "Creative drawings",
                "Complete symmetric figures",
                "Complete with two lines of symmetry",
                "Add lines to create symmetry",

                // Section 9.2 Answers
                "7 arms → angle = 360/7° ≈ 51.43° (51 3/7°)",
                "Answers depend on figures",
                "Check each figure",
                "Order = number of distinct positions",
                "Yes, always true: angles of symmetry are multiples of smallest angle",
                "True; True (except circle)",
                "Circle has infinite angles of symmetry",
                "Various colorings possible",
                "Regular hexagon, regular pentagon, etc.",
                "a. Equilateral triangle b. Isosceles triangle c. Kite or parallelogram? d. Isosceles trapezoid",
                "120°, 180°, 240°, 300°, 360°",
                "30° (since 60° is an angle, smaller angles exist, so 30° is factor)",
                "a. Yes (360/45=8) b. No (360/17 not integer)",
                "a. Yes, probably 2 lines b. Yes, 180° rotation",
                "Regular n-gon has n lines of symmetry",
                "Regular n-gon has n angles of symmetry (multiples of 360/n)",
                "Koch snowflake has 6 lines of symmetry and 6 angles of symmetry (60°, 120°, 180°, 240°, 300°, 360°)",
                "Ashoka Chakra has 24 spokes → 24 lines of symmetry and 24 angles of symmetry (multiples of 15°)",

                // Tiles answers
                "Creative designs",

                // Game strategy
                "Player who makes the last move wins; try to create symmetry",
              ],
            },
          ],

          activities: [
            "Find symmetrical objects in nature (flowers, leaves, butterflies)",
            "Paper folding to find lines of symmetry",
            "Ink-blot symmetry creation",
            "Paper cutting to create symmetric designs",
            "Punching holes in folded paper",
            "Creating rangoli designs with symmetry",
            "Exploring rotational symmetry with cut-outs",
            "Making pinwheels and exploring their symmetry",
            "Tile arrangement for symmetric patterns",
            "Grid game for strategic thinking",
          ],

          summary: [
            "■ When a figure appears to be made of parts that repeat a definite pattern, we say that the figure has symmetry. Such figures are called symmetrical figures.",
            "■ A line that cuts a plane figure into two parts such that when folded along that line, both parts completely overlap each other is called the line of symmetry or axis of symmetry of the figure.",
            "■ A figure can have multiple lines of symmetry.",
            "■ When some figures are rotated by a certain angle about a fixed point, they look exactly the same as the original. Such an angle is called the angle of symmetry of the figure. A figure in which the angle of rotation is always between 0° and 360° is said to have rotational symmetry. The fixed point about which the figure is rotated is called the centre of rotation.",
            "■ A figure can have several angles of symmetry.",
            "■ Some figures may have a line of symmetry but no angle of symmetry, while it is also possible to have angle of symmetry but no lines of symmetry. Some figures may have both angles of symmetry and lines of symmetry.",
          ],
        },
        // ncertContent.js - Add this as Chapter 10
        {
          id: 10,
          title: "The Other Side of Zero",
          content: {
            introduction:
              "Recall that the first numbers we learned in mathematics were counting numbers 1, 2, 3, 4,... After that, we learned that there are even more numbers. For example, the number 0, which represents 'nothing' and comes before 1. The history of zero in India and now throughout the world has been very important. For instance, in the Indian number system, we write numbers using 10 digits from 0 to 9, which makes it possible to write both very large and very small numbers. After this, we also learned about more numbers that lie between 0, 1, 2, 3, 4,... such as ½, ³/₂, and 13/10. They are called fractions. Are there even more numbers beyond these? 0 is an additional number that we didn't know about before. It is smaller than 1 and comes before it. Could there possibly be even more numbers that come before zero and are smaller than zero? In other words, we have seen the number line— However, this is a number 'ray', which we learned in geometry. It starts from zero and extends infinitely to the right. Do numbers exist to the left of 0 as well, so that the number ray can become a complete number line? In this chapter, we will learn about this.",

            sections: [
              {
                title: "10.1 Bella's Funny Building",
                content:
                  "Children go to visit Bella's ice cream factory and taste her delicious ice cream. To make the factory even more interesting for children, Bella bought a multi-storey building and filled it with attractions. She named it 'Bella's Funny Building'. But this was no ordinary building! Observe that some floors of the 'Funny Building' are below the ground floor. What shops do you see on these floors? What is on the ground floor? A lift is used to go up and down between floors. It has two buttons—'+' to go up and '–' to go down. Have you seen a lift before? To go from the Welcome Room to the Art Center, you have to press the '+' button twice. Pressing the button twice is written as ++ or +2. To go down two floors, you have to press the '–' button twice, which we write as – – or –2. So when you press +1 (if you press the + button once), you go up 1 floor, and when you press –1 (if you press the – button once), you go down 1 floor.",
                examples: [
                  "Pressing + button: go up floors",
                  "Pressing – button: go down floors",
                  "+ + + is written as +3",
                  "– – – – is written as –4",
                ],
              },
              {
                title: "Numbering the Floors of the 'Funny Building'",
                content:
                  "Upon entering the 'Funny Building', the Welcome Room is on the ground floor. Starting from the ground floor, you can reach the Food Court by pressing +1, and the Art Center by pressing +2. So we can say that the Food Court is on floor +1 and the Art Center is on floor +2. Starting from the ground floor, to reach the Toy Store you have to press –1. So the Toy Store is on floor –1. Similarly, starting from the ground floor, to reach the Video Game Shop you have to press –2. So the Video Game Shop is on floor –2. The ground floor is called floor 0. Can you tell why? Write the numbers of all floors of the 'Funny Building'. Have you noticed that +3 is the floor number of the Book Center, but it is also the number of floors you go up when you press +3. Similarly, –3 is a floor number, but it is also the number of floors you go down when you press –3.",
                examples: [
                  "Ground floor = 0",
                  "Floors above ground: +1, +2, +3, ...",
                  "Floors below ground: –1, –2, –3, ...",
                  "A number with '+' is positive, with '–' is negative",
                ],
              },
              {
                title: "Positive and Negative Numbers",
                content:
                  "A number with a '+' sign is called a positive number. A number with a '–' sign is called a negative number. In the 'Funny Building', floors above and below are numbered taking floor 0 as the reference or starting point. Floors above the ground floor are numbered with positive numbers. To go up from the ground floor, you have to press the '+' button a certain number of times. Floors below the ground floor are numbered with negative numbers. To go to floors below the ground floor, you have to press the '–' button. Zero is neither a positive nor a negative number. We do not put '+' or '–' signs before 0.",
                examples: [
                  "Positive numbers: +1, +2, +3, ...",
                  "Negative numbers: –1, –2, –3, ...",
                  "Zero (0) is neither positive nor negative",
                ],
              },
              {
                title: "Expressing Movement",
                content:
                  "Start from the Food Court and press +2 in the lift. Where will you reach? We can represent this as an expression: Starting floor + Movement = Target floor. Starting floor is +1 (Food Court) and the number of buttons pressed is +2. So you reach target floor (+1) + (+2) = +3 (Book Store).",
                examples: [
                  "Starting floor + movement = target floor",
                  "(+1) + (+2) = +3",
                  "Movement can be positive (up) or negative (down)",
                ],
              },
              {
                title: "Combining Button Presses",
                content:
                  "Gurmeet was in the Sports Shop and wanted to go down two floors. But by mistake, he pressed the '+' button twice. To cancel this, he pressed the '–' button three times. How many floors below or above the Sports Shop will Gurmeet reach? Gurmeet will go down one floor. We can represent the result of combined button presses as an expression: (+2) + (–3) = –1",
                examples: [
                  "Combining movements: (+2) + (–3) = –1",
                  "Positive and negative movements combine",
                ],
              },
              {
                title: "Return to Zero!",
                content:
                  "Basanti is on the ground floor and in a hurry, by mistake she presses +3. What can she do to cancel this and remain on the ground floor? She can cancel it by pressing –3. That is, (+3) + (–3) = 0. We call –3 the additive inverse of +3. Similarly, +3 is the additive inverse of –3. Another way to think about additive inverse: If Basanti presses +4 in the lift and then presses –4, where will she reach? If you are on floor +4 and you press its inverse –4, then you come back to 0, which is the ground floor. If you are on floor –2, and you press its inverse +2, then you go to (–2) + (+2) = 0. This means you will reach the ground floor again.",
                examples: [
                  "Additive inverse: number + its inverse = 0",
                  "Inverse of +3 is –3",
                  "Inverse of –2 is +2",
                  "Inverse of 0 is 0",
                ],
              },
              {
                title: "Comparing Numbers Using Floors",
                content:
                  "Who is on the lowest floor? 1. Jay is in the Art Center, so he is on floor +2. 2. Asin is in the Sports Center, so he is on floor ______. 3. Binu is in the Cinema Center, so he is on floor ______. 4. Aman is in the Toy Store, so he is on floor ______. Floor +3 is below floor +4, so we can write +3 < +4. We can also write this as +4 > +3. Can we write –3 < –4 or –4 < –3? Since floor –4 is below floor –3, this means –4 < –3. We can also write this as –3 > –4.",
                examples: [
                  "Positive numbers: higher number = higher floor",
                  "Negative numbers: more negative = lower floor",
                  "All negative numbers are less than 0",
                  "All positive numbers are greater than 0",
                ],
              },
              {
                title: "Finding Which Button to Press - Subtraction",
                content:
                  "In previous classes, we understood subtraction as 'taking away'. For example, there are 10 books in a drawer. I took 4 books from them. How many books are left in the drawer? We can get the answer by subtraction: 10 – 4 = 6, or after taking away four from ten, six remain. You may also be familiar with other ways of subtraction related to describing difference and equality. For example, consider this situation: 'I have 10 rupees and my sister has 6 rupees.' Now, I can ask the question 'How many more rupees does my sister need to have the same as me?' We can write this in two ways: 6 + ? = 10 or 10 – 6 = ? Here we see the relationship between 'finding the missing addend' and 'subtraction'. We will use this meaning of subtraction for subtracting positive and negative numbers as 'making equal' or 'finding the missing number'.",
                examples: [
                  "Subtraction as taking away: 10 – 4 = 6",
                  "Subtraction as finding difference: 10 – 6 = 4",
                  "Relation: a – b = c means b + c = a",
                ],
              },
              {
                title: "Subtraction Using Floors",
                content:
                  "Your starting floor is 'Art Center' and target floor is 'Sports Center'. Which button should you press? You need to go up three floors, so you should press +3. We can write this as an expression using subtraction: Target floor – Starting floor = Required movement. In the above example, starting floor is +2 (Art Center) and target floor is +5. To reach from +2 to +5, you need to press +3. Therefore, (+5) – (+2) = (+3). Explanation: Recall the relationship between addition and subtraction. To find the missing number in 3 + ? = 5, we can use subtraction as 5 – 3 = 2. So subtraction is like finding the missing addend.",
                examples: [
                  "Target – Start = Movement",
                  "(+5) – (+2) = +3 (up 3 floors)",
                  "(-1) – (-2) = +1 (up 1 floor)",
                  "(-1) – (+3) = -4 (down 4 floors)",
                  "(+2) – (-2) = +4 (up 4 floors)",
                ],
              },
              {
                title: "Larger Numbers in a Mine",
                content:
                  "The given picture shows a mine. This is a place where rocks are dug to extract minerals. A truck is on the ground level, but minerals are both above and below ground level. There is a high-speed lift that carries people and raw material up and down. Some levels are marked in the picture. Ground level is marked as 0. Levels above ground are marked with positive numbers and levels below ground with negative numbers. This number indicates how many meters above or below ground level it is.",
                examples: [
                  "Mine shaft with levels above and below ground",
                  "Positive: above ground, Negative: below ground",
                  "(+40) + (+60) = +100",
                  "(-90) + (-55) = -145",
                  "(+40) - (-50) = +90",
                  "(-90) - (+40) = -130",
                ],
              },
              {
                title: "How Many Negative Numbers Are There?",
                content:
                  "In Bella's Funny Building, there were only six floors above and five floors below, i.e., numbers from –5 to +6. In the mine example above, we have numbers from –200 to +180. But we can imagine even larger buildings and mines. Just as positive numbers increase without end in the upward direction (+1, +2, +3, ...), similarly negative numbers increase without end in the downward direction (–1, –2, –3, ...). Positive and negative numbers together with zero are called integers. They extend on both sides of zero: ... –3, –2, –1, 0, +1, +2, +3, ...",
                examples: [
                  "Integers: ..., -3, -2, -1, 0, 1, 2, 3, ...",
                  "No largest or smallest integer",
                  "Extend infinitely in both directions",
                ],
              },
              {
                title: "Adding, Subtracting, and Comparing Any Numbers",
                content:
                  "To add and subtract large integers, we can imagine a large lift. In fact, we can imagine a lift that starts from zero level and can go up and down forever. Even if there is no building or mine, just an 'infinite lift'! We can use this imagination to add or subtract integers. For example, we need to solve +2000 – (–200). We can imagine a lift that is 2000 levels above ground and 200 levels below ground. Recall that: Target level – Starting level = Required movement. To go from starting level –200 to target level +2000, we need to press +2200 (+200 to reach zero, and then +2000 more to reach +2000). Therefore, (+2000) – (–200) = +2200. Note that (+2000) + (+200) also equals +2200.",
                examples: [
                  "Infinite lift concept for large numbers",
                  "Target – Start = Movement",
                  "(+2000) – (–200) = +2200",
                  "Subtracting a negative = adding its positive",
                ],
              },
              {
                title: "Back to the Number Line",
                content:
                  "The 'infinite lift' we saw earlier in this chapter looks like a number line, doesn't it? In fact, if we rotate it by 90°, it becomes a number line. This tells us how to complete a ray into a number line. It also answers the question we asked at the beginning of this chapter. To the left of zero, we write negative numbers –1, –2, –3, ... Usually, we remove the '+' sign from positive numbers and write them simply as 1, 2, 3, ...",
                examples: [
                  "Number line: negative to left, positive to right",
                  "Smaller numbers are to the left of larger numbers",
                  "2 < 5; –3 < –2; –5 < –3",
                  "5 + 4 = 9 (start + movement = target)",
                  "9 – 5 = 4 (target – start = movement)",
                  "9 + (–6) = 3 (6 steps back)",
                  "3 – 9 = –6 (target – start = movement)",
                ],
              },
              {
                title: "Using an Unmarked Number Line",
                content:
                  "You can use the above number line only for adding, subtracting, and comparing small numbers. You can also solve these operations using an imaginary 'infinite number line' or 'unmarked number line', like this: This line only shows the position of zero. Other numbers are not marked on it. It is convenient to use this unmarked number line for addition and subtraction of integers. You can take any scale according to your imagination to mark numbers on the number line and mark the positions of numbers on it.",
                examples: [
                  "Unmarked Number Line (UNL) for visualization",
                  "(+85) + (–60) = 25",
                  "(–100) – (+250) = –350 or 250 + ? = –100 gives ? = –350",
                ],
              },
              {
                title: "Converting Subtraction to Addition and Vice Versa",
                content:
                  "Recall: Target floor – Starting floor = Required movement. Target floor = Starting floor + Required movement. If we start from 2 and want to reach –3, how much movement do we need? First method: Looking at the number line, we find that we need to move –5 (i.e., 5 steps backward). Therefore, –3 – 2 = –5. So the required movement is –5. Second method: Split the journey from 2 to –3 into two parts. a. From 2 to 0, movement is 0 – 2 = –2. b. From 0 to –3, movement is –3 – 0 = –3. Total movement is the sum of both movements: –3 + (–2) = –5. Look at both colored expressions. In the second expression, there is no subtraction! Thus, we can always convert subtraction into addition. The number being subtracted can be replaced by its additive inverse and then added. Similarly, if a number is being added, it can be replaced by its additive inverse and then subtracted. Thus, we can always convert addition into subtraction as well.",
                examples: [
                  "(+7) – (+5) = (+7) + (–5)",
                  "(–3) – (+8) = (–3) + (–8)",
                  "(+8) – (–2) = (+8) + (+2)",
                  "(+6) – (–9) = (+6) + (+9)",
                ],
              },
              {
                title: "10.2 Token Model",
                content:
                  "The lift operator in Bella's Funny Building got bored. For his own entertainment, he keeps a box filled with many positive 'green' and negative 'red' tokens. Every time he presses the '+' button, he picks up a positive 'green' token from the box and puts it in his pocket. Similarly, every time he presses the '–' button, he picks up a negative 'red' token and puts it in his pocket. He starts from the ground floor with an empty pocket. After an hour, he checks his pocket and finds 5 positive and 3 negative tokens. Tell which floor he is on now? He must have pressed '+' 5 times and '–' 3 times. And (+5) + (–3) = +2. So now he is on floor +2.",
                examples: [
                  "Green token = +1 (positive)",
                  "Red token = –1 (negative)",
                  "One green + one red cancel (zero pair)",
                  "(+5) + (–3) = +2 (after removing zero pairs)",
                ],
              },
              {
                title: "Adding with Tokens",
                content:
                  "Here's another way to calculate: A positive token and a negative token cancel each other, and this pair has value zero. (Having these two tokens in his pocket meant he pressed '+' once and '–' once, which cancel each other.) We can say that one positive and one negative token make a 'zero pair'. When you remove all zero pairs, you are left with two positive tokens, so (+5) + (–3) = +2. We can do other additions like this using tokens. Example: Add +5 and –8. In the figure, we see that we can remove five zero pairs and we are left with –3. Therefore, (+5) + (–8) = –3.",
                examples: [
                  "Remove zero pairs (one + and one –)",
                  "Remaining tokens give the result",
                  "(+5) + (–8) = –3",
                ],
              },
              {
                title: "Subtracting with Tokens",
                content:
                  "We have seen how to add integers with positive and negative tokens. Can we also subtract using tokens? Example: Let's subtract (+5) – (+4). This is simple. From 5 positives, take away 4 positives. So (+5) – (+4) = +1. Example: Let's subtract (–7) – (–5). From 7 negatives, take away 5 negatives. So (–7) – (–5) = –2. Is (–7) – (–5) the same as (–7) + (+5)?",
                examples: [
                  "Take away positives from positives",
                  "Take away negatives from negatives",
                  "Need zero pairs when not enough tokens",
                ],
              },
              {
                title: "Subtraction Needing Zero Pairs",
                content:
                  "Example: (+5) – (+6). Start with 5 positives. But here there are not enough positives to take away 6 positives. To handle this problem, we can add extra zero pairs (one positive and one negative). We know that adding zero pairs to the given set of tokens does not change its value. Now you can take away 6 positives. See what remains? So (+5) – (+6) = –1. Example: (+4) – (–6). Start with 4 positives. We need to take away 6 negatives from these, but there aren't enough negatives. No problem with that. We add some zero pairs, because this will not change the value of the given set of tokens. But how many zero pairs? We need to take away 6 negatives, so we add 6 zero pairs. Now take away 6 negatives. So, (+4) – (–6) = +10.",
                examples: [
                  "Add zero pairs when needed",
                  "Then take away required tokens",
                  "(+5) – (+6) = –1",
                  "(+4) – (–6) = +10",
                ],
              },
              {
                title: "10.3 Integers in Other Places",
                content:
                  "Transactions (Deposits and Withdrawals): Suppose you open an account in a local bank with your savings of ₹100 from last month. Now your balance in the bank is ₹100. The next day you earn ₹60 and deposit it in the bank (this amount is shown as a 'credit' in your passbook). Your new bank balance is ₹100 + ₹60 = ₹160. Then you buy clothes for ₹200 using your debit card. This amount is shown as a 'debit' in your passbook. Your new bank balance is ₹160 – ₹200 = –₹40. Now what is your bank balance? Is it possible? Yes, some banks temporarily allow your balance to become negative. If your balance becomes negative, the bank charges some additional fees as interest or penalty. With your big purchase strategy from the previous day, your business income the next day was ₹200. What is your balance now? You can think of deposits as positive numbers and withdrawals as negative numbers. The sum of your total deposits (positive numbers) and withdrawals (negative numbers) is your total bank balance. It can be either positive or negative. Generally, you should try to keep a positive balance in your bank account.",
                examples: [
                  "Deposits = positive, Withdrawals = negative",
                  "Balance = sum of deposits and withdrawals",
                  "Can be positive or negative",
                ],
              },
              {
                title: "Geographical Cross-section",
                content:
                  "We measure the heights of geographical features like mountains, plateaus, deserts, etc., starting from 'sea level'. Height at sea level is 0 m. Heights above sea level are shown with positive numbers, and depths below sea level are shown with negative numbers.",
                examples: [
                  "Sea level = 0",
                  "Above sea level: positive heights",
                  "Below sea level: negative depths",
                ],
              },
              {
                title: "Temperature",
                content:
                  "On summer days, you might have heard about heatwaves in the news. As a result, you feel very hot. Can you tell what the temperature might be at that time? On winter days, the temperature is very cold. Find out what was the maximum temperature in summer and minimum temperature in winter in your area last year. When we measure temperature, we use the unit Celsius (°C). The thermometers shown indicate temperatures of 40°C and 15°C.",
                examples: [
                  "Temperature above 0°C: positive",
                  "Temperature below 0°C: negative",
                  "Water freezes at 0°C",
                ],
              },
              {
                title: "10.4 Explorations with Integers",
                content:
                  "An Empty Integer Grid: There is something special about the numbers in these two grids. Let's find out what it is. Top row: 4 + (–1) + (–3) = 0, 5 + (–3) + (–5) = ? Bottom row: (–1) + (–1) + 2 = 0, (–8) + (–2) + 7 = ? Left column: 4 + (–3) + (–1) = 0, 5 + 0 + (–8) = ? Right column: (–3) + 1 + 2 = 0, (–5) + (–5) + 7 = ? In each grid, the numbers in two rows (top row and bottom row) and two columns (left column and right column) when added give the same number. We can call this sum the 'border sum'. The 'border sum' of the first grid is 0.",
                examples: [
                  "Magic square-like integer puzzles",
                  "Border sum: sum of top row + bottom row + left column + right column",
                  "Finding missing numbers to achieve target border sum",
                ],
              },
              {
                title: "Amazing Grid of Numbers!",
                content:
                  "Further in the chapter, there is a grid with some numbers shown. Follow the given steps until no numbers remain. Stop when no uncrossed numbers remain. Add the circled numbers. In the example below, the circled numbers are –1, 9, –7, –2. If you add them, you get –1.",
                examples: [
                  "Grid elimination game",
                  "Circle numbers according to pattern",
                  "Sum of circled numbers gives same result each time",
                ],
              },
              {
                title: "10.5 A Pinch of History",
                content:
                  "Like common fractions, common integers (including zero and negative numbers) were first conceived and used in Asia thousands of years ago. Later, in modern times, they eventually spread throughout the world. The first known example of using negative numbers is in the context of accounting. One of China's most mathematical works, 'Chapters on Mathematical Arts' (Jiuzhang Suanshu), was completed by the first or second century CE. In this chapter, positive and negative numbers were represented by red and black rods, just as we represented them using red and green tokens. In ancient times, the culture of accounting was also very widespread in India. Kautilya, in his Arthashastra (around 300 BCE), wrote in detail about the concepts of credit and debit. This included the notion that account balances could be negative. Clear use of negative numbers in the context of accounting is seen in many ancient Indian works, including the Bakhshali manuscript from around 300 CE. In this manuscript, negative numbers were written using a special symbol placed after the number (not before the number as we do today).",
                examples: [
                  "Ancient China: red (positive) and black (negative) rods",
                  "Ancient India: credit/debit concept in Arthashastra",
                  "Bakhshali manuscript (300 CE): special symbol for negative",
                  "Brahmagupta (628 CE): first systematic rules for integers",
                ],
              },
              {
                title: "Brahmagupta's Rules",
                content:
                  "Brahmagupta, in his book Brahmasphutasiddhanta (628 CE), was the first to use positive numbers, negative numbers, and zero uniformly for addition, subtraction, multiplication, and division. Brahmagupta clearly gave several essential rules for positive, negative, and zero. These rules paved the way for modern mathematics that we use today. Some of Brahmagupta's main rules for addition and subtraction of positive numbers, negative numbers, and zero are described below:",
                examples: [
                  "Brahmagupta's addition rules:",
                  "1. Sum of two positives is positive (2 + 3 = 5)",
                  "2. Sum of two negatives is negative (–2 + –3 = –5)",
                  "3. Sum of positive and negative: subtract smaller from larger, take sign of larger (–5 + 3 = –2, 5 + –3 = 2)",
                  "4. Number + its additive inverse = 0 (2 + –2 = 0)",
                  "5. Number + 0 = number (–2 + 0 = –2)",
                  "Brahmagupta's subtraction rules:",
                  "1. Larger positive minus smaller positive = positive (3 – 2 = 1)",
                  "2. Smaller positive minus larger positive = negative (2 – 3 = –1)",
                  "3. Subtracting a negative = adding its positive (2 – (–3) = 2 + 3)",
                  "4. Number minus itself = 0 (2 – 2 = 0, –2 – (–2) = 0)",
                  "5. Number minus 0 = number (–2 – 0 = –2), 0 minus number = its inverse (0 – (–2) = 2)",
                ],
              },
            ],

            exercises: [
              {
                type: "explore",
                questions: [
                  // Section 10.1 Questions
                  "What do you press to go up four floors? What do you press to go down three floors?",
                  "Start from floor +2 and press –3 in the lift. Where will you reach? Represent this as an expression.",
                  "Complete the given expressions (thinking in terms of start floor and movement in the Funny Building): a. (+1) + (+4) = ________ b. (+4) + (+1) = ________ c. (+4) + (–3) = ________ d. (–1) + (+2) = ________ e. (–1) + (+1) = ________ f. (0) + (+2) = ________ g. (0) + (–2) = ________",
                  "Starting from different floors, find the movements needed to reach floor (–5). For example, if I start from floor +2, I need to press –7 to reach –5. So the expression is (+2) + (–7) = –5. Similarly, find other starting positions and required movements to reach –5 and write the expressions.",

                  // Combined button presses
                  "Evaluate the given expressions considering the results of combined button presses: a. (+1) + (+4) = b. (+4) + (+1) = c. (+4) + (–3) + (–2) = d. (–1) + (+2) + (–3) =",

                  // Additive inverses
                  "State the additive inverses of the given numbers: +4, –4, –3, 0, +2, –1. Connect with the additive inverse by drawing a line.",

                  // Comparing numbers
                  "Using the Funny Building, compare the given numbers and fill in < or > in the box: a. –2 ☐ +5 b. –5 ☐ +4 c. –5 ☐ –3 d. +6 ☐ –6 e. 0 ☐ –4 f. 0 ☐ +4",
                  "Imagine more floors in the Funny Building and compare the numbers. Fill in < or >: a. –10 ☐ –12 b. +17 ☐ –10 c. 0 ☐ –20 d. +9 ☐ –9 e. –25 ☐ –7 f. +15 ☐ –17",
                  "In the building shown as a line on the right, if floor A = –12, floor D = –1, and floor E = +1, then state the numbers of floors B, C, F, G, and H.",
                  "Mark the following floors in the building shown on the right: a. –7 b. –4 c. +3 d. –10",

                  // Subtraction
                  "Find 15 – 5, 100 – 10, 74 – 34 in this context.",

                  // More subtraction
                  "Complete the given expressions. You can think of them as finding the required movement to go from the starting floor to the target floor: a. (+1) – (+4) = b. (0) – (+2) = c. (+4) – (+1) = d. (0) – (–2) = e. (+4) – (–3) = f. (–4) – (–3) = g. (–1) – (+2) = h. (–2) – (–2) = i. (–1) – (+1) = j. (+3) – (–3) =",

                  // Mine shaft
                  "Complete the given expressions: a. (+40) + ______ = +200 b. (+40) + ______ = –200 c. (–50) + ______ = +200 d. (–50) + ______ = –200 e. (–200) – (–40) = ______ f. (+200) – (+40) = ______ g. (–200) – (+40) = ______ Check your answers by thinking about movement in the mine shaft.",

                  // Large numbers
                  "Try to find the following expressions by drawing or imagining a similar lift: a. –125 + (–30) b. +105 – (–55) c. +105 + (+55) d. +80 – (–150) e. +80 + (+150) f. –99 – (–200) g. –99 + (+200) h. +1500 – (–1500)",

                  // Number line
                  "Mark 3 positive and 3 negative numbers on the number line above.",
                  "Write the above 3 marked negative numbers in the given box.",
                  "Is 2 > –3? Why? Is –2 < 3? Why?",
                  "Solve: a. –5 + 0 b. 7 + (–7) c. –10 + 20 d. 10 – 20 e. 7 – (–7) f. –8 – (–10)?",

                  // Unmarked number line
                  "Complete the following expressions using an unmarked number line: a. –125 + (–30) b. +105 – (–55) c. +80 – (–150) d. –99 – (–200)",

                  // Token model
                  "Complete the addition using tokens: a. (+6) + (+4) b. (–3) + (–2) c. (+5) + (–7) d. (–2) + (+6)",
                  "Remove zero pairs from the token pairs given below. In each situation, which floor is the lift operator on? What would be the corresponding addition statement in each situation?",
                  "Evaluate the following differences using tokens. Also check that you get the same result that you now know from other methods. Complete the subtraction: a. (+10) – (+7) b. (–8) – (–4) c. (–9) – (–4) d. (+9) – (+12) e. (–5) – (–7) f. (–2) – (–6)",
                  "Complete the subtraction: a. (–5) – (–7) b. (+10) – (+13) c. (–7) – (–9) d. (+3) – (+8) e. (–2) – (–7) f. (+3) – (+15)",
                  "Try subtraction: –3 – (+5). How many zero pairs do you need to add? What will be the result?",
                  "Evaluate the following using tokens: a. (–3) – (+10) b. (+8) – (–7) c. (–5) – (+9) d. (–9) – (+10) e. (+6) – (–4) f. (–2) – (+7)",

                  // Bank account
                  "Suppose you open a bank account with ₹0, then you deposit ₹30, ₹40, and ₹50, and withdraw ₹40, ₹50, and ₹60. What is the balance in your bank account now?",
                  "Suppose you open a bank account with ₹0 and withdraw ₹1, 2, 4, 8, 16, 32, 64, and 128 from the same account, then you deposit ₹256 in one go. What is the balance in your bank account now?",
                  "Why is a positive bank balance generally considered better? What situations might arise where a temporarily negative balance could be meaningful?",

                  // Geographical cross-section
                  "Looking at the geographical cross-section, write the corresponding heights: a. b. c. d. e. f. g.",
                  "In this geographical cross-section, which is the highest point and which is the lowest point?",
                  "Can you write points A, B, ..., G in descending order of heights? Can you write the points in ascending order of heights?",
                  "What is the highest place on Earth above sea level? What is its height?",
                  "What is the lowest point on land or ocean floor relative to sea level? What is its height? (This height should be negative.)",

                  // Temperature
                  "Do you know that there are some places in India where the temperature sometimes goes below 0°C? Find such places in India where the temperature commonly drops below 0°C. What do these places have in common? Why is it colder there compared to other places?",
                  "In the Leh region of Ladakh, it becomes extremely cold during winter. Look at the table below, which shows temperatures at different times on a day in November in Leh. Match the correct time of day and night with the corresponding temperature: [Temperature: 14°C, 8°C, –2°C, –4°C; Time: 02:00 a.m., 11:00 p.m., 02:00 p.m., 11:00 a.m.]",

                  // Integer grid explorations
                  "Calculate for the second grid above and find the border sum.",
                  "Complete the grid to get the required border sum: [Grid puzzles with border sum 4, –2, –4]",
                  "For the last grid above with border sum –4, show more than one way to fill it.",
                  "Which other grids can be filled in different ways? What could be the reasons?",
                  "Create a border integer square puzzle and challenge your classmates to complete it.",

                  // Amazing grid game
                  "Try again, this time choose different numbers. What sum of these numbers did you get? Is it different from before? Try a few more times.",
                  "Play the same kind of game with the grid given below. What answer do you get?",
                  "What could be special about these grids? Is there magic in the numbers or in the way they are arranged, or both? Can you make more such grids?",

                  // Final exercises
                  "Write all integers between the given pairs in increasing order: a. 0 and –7 b. –4 and 4 c. –8 and –15 d. –30 and –23",
                  "Name three numbers whose sum is –8.",
                  "Here are two dice with numbers on their faces: –1, 2, –3, 4, –5, 6. When throwing these dice, the smallest possible sum is –10 = (–5) + (–5) and the largest possible sum is 12 = (6) + (6). Some numbers between (–10) and (+12) are not possible to obtain by adding numbers on these two dice. Find such numbers.",
                  "Solve these: [8 – 13, (–8) – (13), (–13) – (–8), (–13) + (–8), 8 + (–13), (–8) – (–13), (13) – 8, 13 – (–8)]",
                  "Find the years for the following: a. Which year was 150 years before the current year? b. Which year was 2200 years before the current year? (Hint: Remember there was no year 0.) c. Which year will it be 320 years after 680 BCE?",
                  "Complete the following sequences: a. (–40), (–34), (–28), (–22), ____, ____, ____ b. 3, 4, 2, 5, 1, 6, 0, 7, ____, ____, ____ c. ____, ____, 12, 6, 1, (–3), (–6), ____, ____, ____, ____",
                  "Here are six integer cards: (+1), (+7), (+18), (–5), (–2), (–9). You can select any cards and create an expression using addition and subtraction. Here is an expression: (+18) + (+1) – (+7) – (–2) which has value (+14). Select more than one card from the given cards and create an expression whose value is around (–30).",
                  "The sum of two positive integers is always positive, but (positive integer) – (positive integer) can be positive or negative. What can you say about: a. (positive) – (negative) b. (positive) + (negative) c. (negative) + (negative) d. (negative) – (negative) e. (negative) – (positive) f. (negative) + (positive)",
                  "This string has 100 tokens arranged in a special pattern. What is the value of this string?",
                ],
                answers: [
                  // Section 10.1 Answers
                  "+4, –3",
                  "(+2) + (–3) = –1",
                  "a. +5 b. +5 c. +1 d. +1 e. 0 f. +2 g. –2",
                  "Various expressions: (–3)+(–2)=–5, (0)+(–5)=–5, (–1)+(–4)=–5, etc.",

                  // Combined button presses
                  "a. +5 b. +5 c. –1 d. –2",

                  // Additive inverses
                  "Inverses: –4, +4, +3, 0, –2, +1",

                  // Comparing numbers
                  "a. –2 < +5 b. –5 < +4 c. –5 < –3 d. +6 > –6 e. 0 > –4 f. 0 < +4",
                  "a. –10 > –12 b. +17 > –10 c. 0 > –20 d. +9 > –9 e. –25 < –7 f. +15 > –17",
                  "B = –9, C = –5, F = +3, G = +5, H = +7",
                  "Mark accordingly",

                  // Subtraction
                  "10, 90, 40",

                  // More subtraction
                  "a. –3 b. –2 c. +3 d. +2 e. +7 f. –1 g. –3 h. 0 i. –2 j. +6",

                  // Mine shaft
                  "a. +160 b. –240 c. +250 d. –150 e. –160 f. +160 g. –240",

                  // Large numbers
                  "a. –155 b. +160 c. +160 d. +230 e. +230 f. +101 g. +101 h. +3000",

                  // Number line
                  "Various answers",
                  "Various answers",
                  "Yes, 2 > –3 because positive > negative; Yes, –2 < 3 because negative < positive",
                  "a. –5 b. 0 c. 10 d. –10 e. 14 f. 2",

                  // Unmarked number line
                  "a. –155 b. +160 c. +230 d. +101",

                  // Token model
                  "a. +10 b. –5 c. –2 d. +4",
                  "Various answers based on tokens",
                  "a. +3 b. –4 c. –5 d. –3 e. +2 f. +4",
                  "a. +2 b. –3 c. +2 d. –5 e. +5 f. –12",
                  "Need 5 zero pairs, result = –8",
                  "a. –13 b. +15 c. –14 d. –19 e. +10 f. –9",

                  // Bank account
                  "Deposits: 30+40+50=120, Withdrawals: 40+50+60=150, Balance = 120–150 = –30",
                  "Withdrawals: 1+2+4+8+16+32+64+128=255, Deposit: 256, Balance = –255+256 = 1",
                  "Positive balance avoids interest/fees; temporary negative may be allowed for business needs",

                  // Geographical cross-section
                  "Various heights from diagram",
                  "Highest = G, Lowest = D",
                  "Descending: G>F>E>C>B>A>D, Ascending: D<A<B<C<E<F<G",
                  "Mount Everest, 8848 m",
                  "Mariana Trench, –10994 m",

                  // Temperature
                  "Places like Leh, Dras, Kargil in Himalayas; high altitude causes cold",
                  "14°C → 02:00 p.m., 8°C → 11:00 a.m., –2°C → 02:00 a.m., –4°C → 11:00 p.m.",

                  // Integer grid explorations
                  "Second grid border sum = ?",
                  "Various solutions possible",
                  "Multiple solutions exist",
                  "Grids with symmetry may have multiple solutions",
                  "Create own puzzle",

                  // Amazing grid game
                  "Sum likely same each time (–1)",
                  "Same pattern",
                  "Magic in arrangement, can create more",

                  // Final exercises
                  "a. –6,–5,–4,–3,–2,–1 b. –3,–2,–1,0,1,2,3 c. –14,–13,–12,–11,–10,–9 d. –29,–28,–27,–26,–25,–24",
                  "e.g., –2, –3, –3",
                  "Possible sums: all integers from –10 to 12 except possibly some? Check systematically",
                  "8–13=–5, (–8)–13=–21, (–13)–(–8)=–5, (–13)+(–8)=–21, 8+(–13)=–5, (–8)–(–13)=5, 13–8=5, 13–(–8)=21",
                  "a. Current year – 150 b. Current year – 2200 (note no year 0) c. 680 BCE + 320 = 360 BCE",
                  "a. –16, –10, –4 b. –1, 8, –2 c. 30, 20, –8, –9, –9?",
                  "e.g., (+18) + (–5) + (–9) – (+7) – (–2) = 18–5–9–7+2 = –1, need –30, so larger negatives",
                  "a. positive b. could be positive or negative c. negative d. could be positive or negative e. negative f. could be positive or negative",
                  "Pattern: 1,–2,3,–4,... up to 100, sum = –50",
                ],
              },
            ],

            activities: [
              "Model positive and negative numbers using a building with floors above and below ground",
              "Use a lift simulation to practice addition and subtraction of integers",
              "Token model activity with green (positive) and red (negative) counters",
              "Bank account simulation with deposits and withdrawals",
              "Temperature recording and comparing above/below freezing",
              "Geographical cross-section drawing with heights above/below sea level",
              "Integer grid puzzles with border sums",
              "Number line games for adding and subtracting integers",
              "Snakes and Ladders style integer board game",
              "Research project on historical development of negative numbers",
            ],

            summary: [
              "■ There are numbers that are less than zero. They are written with a '–' sign in front (for example, –2), and are called negative numbers. They lie to the left of zero on the number line.",
              "■ Numbers ..., –4, –3, –2, –1, 0, 1, 2, 3, 4, ... are called integers. Numbers 1, 2, 3, 4, ... are called positive integers, and numbers ..., –4, –3, –2, –1 are called negative integers. Zero (0) is neither positive nor negative.",
              "■ For every given number, there is another number that when added to the given number gives zero. This is called the additive inverse of the number. For example, the additive inverse of 7 is –7, and the additive inverse of –543 is 543.",
              "■ Addition can be understood as starting position + movement = target position.",
              "■ Addition can also be understood as combining movements: movement 1 + movement 2 = resultant movement.",
              "■ Subtraction can be understood as target position – starting position = movement.",
              "■ In general, we can add two numbers following Brahmagupta's rules of addition:",
              "  a. If both numbers are positive, adding them gives a positive number (e.g., 2 + 3 = 5).",
              "  b. If both numbers are negative, add the numbers (without signs), then put a negative sign in front of the result (–2 + (–3) = –5).",
              "  c. If one number is positive and the other is negative, subtract the smaller number (without sign) from the larger number (without sign), and give the result the sign of the larger number (e.g., –5 + 3 = –2).",
              "  d. A number and its additive inverse sum to zero (e.g., 2 + (–2) = 0).",
              "  e. Adding a number and zero gives the number itself (e.g., –2 + 0 = –2).",
              "■ We can solve subtraction of two integers by converting it into an addition problem, then following the rules of addition. Subtracting an integer is the same as adding its additive inverse.",
              "■ Integers can be compared: ... –3 < –2 < –1 < 0 < +1 < +2 < +3 < ... Smaller numbers are to the left of larger numbers on the number line.",
              "■ We can interpret positive and negative numbers as credits and debits. We can also interpret positive numbers as distances above a reference point, and similarly negative numbers as distances below a reference point. Note that temperature measurement is also recorded as positive and negative. When we measure temperature in degrees Celsius, temperatures above the freezing point of water are called positive temperatures, and temperatures below the freezing point of water are called negative temperatures.",
            ],
          },
        },
        // Add more chapters here as needed
      ],
};

export default mathematics;
