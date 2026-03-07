const mathematics = {
  subjectName: "Mathematics",
  chapters: [
    {
      id: 1,
      title: "Sets",
      content: {
        introduction:
          "The concept of set serves as a fundamental part of present day mathematics. Today this concept is being used in almost every branch of mathematics. Sets are used to define the concepts of relations and functions. The study of geometry, sequences, probability, etc. requires the knowledge of sets. The theory of sets was developed by German mathematician Georg Cantor (1845-1918). He first encountered sets while working on 'problems on trigonometric series'.",

        sections: [
          {
            title: "1.1 Sets and their Representations",
            content:
              "In everyday life, we often speak of collections of objects of a particular kind. In mathematics also, we come across collections, for example, of natural numbers, points, prime numbers, etc. A set is a well-defined collection of objects. The following points may be noted: (i) Objects, elements and members of a set are synonymous terms. (ii) Sets are usually denoted by capital letters A, B, C, X, Y, Z, etc. (iii) The elements of a set are represented by small letters a, b, c, x, y, z, etc. If a is an element of a set A, we say that 'a belongs to A' and use the symbol ∈. Thus, we write a ∈ A. If b is not an element of a set A, we write b ∉ A.",
            examples: [
              "The collection of odd natural numbers less than 10, i.e., 1, 3, 5, 7, 9 is a set.",
              "The collection of vowels in the English alphabet, namely, a, e, i, o, u is a set.",
              "The collection of five most renowned mathematicians of the world is not a well-defined collection, because the criterion for determining a mathematician as most renowned may vary from person to person. Thus, it is not a set.",
            ],
            subSections: [
              {
                title: "Methods of Representing a Set",
                content:
                  "There are two methods of representing a set: (i) Roster or tabular form (ii) Set-builder form.",
                subSections: [
                  {
                    title: "(i) Roster form",
                    content:
                      "In roster form, all the elements of a set are listed, the elements are being separated by commas and are enclosed within braces { }. The order in which the elements are listed is immaterial. An element is not generally repeated.",
                    examples: [
                      "The set of all even positive integers less than 7 is {2, 4, 6}.",
                      "The set of all natural numbers which divide 42 is {1, 2, 3, 6, 7, 14, 21, 42}.",
                      "The set of odd natural numbers is represented by {1, 3, 5, . . .}. The dots tell us that the list of odd numbers continues indefinitely.",
                    ],
                  },
                  {
                    title: "(ii) Set-builder form",
                    content:
                      "In set-builder form, all the elements of a set possess a single common property which is not possessed by any element outside the set. We describe the element of the set by using a symbol x (or any other letter) which is followed by a colon ':'. After the colon, we write the characteristic property possessed by the elements of the set and then enclose the whole description within braces. The colon stands for 'such that'.",
                    examples: [
                      "The set V = {a, e, i, o, u} in set-builder form is written as V = {x : x is a vowel in the English alphabet}.",
                      "The set A = {x : x is a natural number and 3 < x < 10} is read as 'the set of all x such that x is a natural number and x lies between 3 and 10.' Hence, the numbers 4, 5, 6, 7, 8 and 9 are the elements of the set A.",
                    ],
                  },
                ],
              },
            ],
          },
          {
            title: "1.2 The Empty Set",
            content:
              "A set which does not contain any element is called the empty set or the null set or the void set. It is denoted by the symbol Φ or {}.",
            examples: [
              "Let A = {x : 1 < x < 2, x is a natural number}. Then A is the empty set, because there is no natural number between 1 and 2.",
              "B = {x : x² - 2 = 0 and x is a rational number}. Then B is the empty set because the equation x² - 2 = 0 is not satisfied by any rational value of x.",
              "C = {x : x is an even prime number greater than 2}. Then C is the empty set, because 2 is the only even prime number.",
            ],
          },
          {
            title: "1.3 Finite and Infinite Sets",
            content:
              "A set which is empty or consists of a definite number of elements is called finite. Otherwise, the set is called infinite. The number of distinct elements of a finite set S is denoted by n(S).",
            examples: [
              "Let W be the set of the days of the week. Then W is finite.",
              "Let S be the set of solutions of the equation x² - 16 = 0. Then S is finite.",
              "Let G be the set of points on a line. Then G is infinite.",
            ],
          },
          {
            title: "1.4 Equal Sets",
            content:
              "Two sets A and B are said to be equal if they have exactly the same elements, and we write A = B. Otherwise, the sets are said to be unequal, and we write A ≠ B. A set does not change if one or more elements of the set are repeated.",
            examples: [
              "Let A = {1, 2, 3, 4} and B = {3, 1, 4, 2}. Then A = B.",
              "Let A be the set of prime numbers less than 6 and P the set of prime factors of 30. Then A and P are equal, since 2, 3 and 5 are the only prime factors of 30 and also these are less than 6.",
              "The sets A = {1, 2, 3} and B = {2, 2, 1, 3, 3} are equal.",
            ],
          },
          {
            title: "1.5 Subsets",
            content:
              "A set A is said to be a subset of a set B if every element of A is also an element of B. In other words, A ⊂ B if whenever a ∈ A, then a ∈ B. The empty set φ is a subset of every set. Every set A is a subset of itself, i.e., A ⊂ A. If A ⊂ B and A ≠ B, then A is called a proper subset of B and B is called a superset of A. If a set A has only one element, we call it a singleton set.",
            examples: [
              "The set Q of rational numbers is a subset of the set R of real numbers, and we write Q ⊂ R.",
              "If A is the set of all divisors of 56 and B the set of all prime divisors of 56, then B is a subset of A and we write B ⊂ A.",
              "Let A = {a, e, i, o, u} and B = {a, b, c, d}. Then A is not a subset of B, also B is not a subset of A.",
            ],
            subSections: [
              {
                title: "1.5.1 Subsets of set of real numbers",
                content:
                  "There are many important subsets of R. These include: The set of natural numbers N = {1, 2, 3, 4, 5, ...}. The set of integers Z = {..., -3, -2, -1, 0, 1, 2, 3, ...}. The set of rational numbers Q = {x : x = p/q, p, q ∈ Z and q ≠ 0}. The set of irrational numbers, denoted by T, is composed of all other real numbers. Thus T = {x : x ∈ R and x ∉ Q}. Some of the obvious relations among these subsets are: N ⊂ Z ⊂ Q, Q ⊂ R, T ⊂ R, N ⊄ T.",
              },
              {
                title: "1.5.2 Intervals as subsets of R",
                content:
                  "Let a, b ∈ R and a < b. Then: Open interval (a, b) = {y : a < y < b}. Closed interval [a, b] = {x : a ≤ x ≤ b}. Intervals closed at one end and open at the other: [a, b) = {x : a ≤ x < b} and (a, b] = {x : a < x ≤ b}. The number (b - a) is called the length of any of these intervals.",
                examples: [
                  "The set {x : x ∈ R, -5 < x ≤ 7} can be written in the form of interval as (-5, 7].",
                  "The interval [-3, 5) can be written in set-builder form as {x : -3 ≤ x < 5}.",
                ],
              },
            ],
          },
          {
            title: "1.6 Universal Set",
            content:
              "Usually, in a particular context, we have to deal with the elements and subsets of a basic set which is relevant to that particular context. This basic set is called the 'Universal Set'. The universal set is usually denoted by U, and all its subsets by the letters A, B, C, etc.",
            examples: [
              "For the set of all integers, the universal set can be the set of rational numbers or, for that matter, the set R of real numbers.",
              "In human population studies, the universal set consists of all the people in the world.",
            ],
          },
          {
            title: "1.7 Venn Diagrams",
            content:
              "Most of the relationships between sets can be represented by means of diagrams which are known as Venn diagrams. These diagrams consist of rectangles and closed curves usually circles. The universal set is represented usually by a rectangle and its subsets by circles.",
          },
          {
            title: "1.8 Operations on Sets",
            content:
              "There are some operations which when performed on two sets give rise to another set.",
            subSections: [
              {
                title: "1.8.1 Union of sets",
                content:
                  "The union of two sets A and B is the set which consists of all the elements of A and all the elements of B, the common elements being taken only once. The symbol '∪' is used to denote the union. Symbolically, A ∪ B = {x : x ∈ A or x ∈ B}.",
                examples: [
                  "Let A = {2, 4, 6, 8} and B = {6, 8, 10, 12}. Find A ∪ B. Solution: A ∪ B = {2, 4, 6, 8, 10, 12}",
                  "Let A = {a, e, i, o, u} and B = {a, i, u}. Show that A ∪ B = A. Solution: A ∪ B = {a, e, i, o, u} = A. This example illustrates that if B ⊂ A, then A ∪ B = A.",
                ],
              },
              {
                title: "1.8.2 Intersection of sets",
                content:
                  "The intersection of sets A and B is the set of all elements which are common to both A and B. The symbol ∩ is used to denote the intersection. Symbolically, A ∩ B = {x : x ∈ A and x ∈ B}. If A and B are two sets such that A ∩ B = φ, then A and B are called disjoint sets.",
                examples: [
                  "Consider the sets A = {2, 4, 6, 8} and B = {6, 8, 10, 12}. Find A ∩ B. Solution: A ∩ B = {6, 8}.",
                  "Let A = {2, 4, 6, 8} and B = {1, 3, 5, 7}. Then A and B are disjoint sets, because there are no elements which are common to A and B.",
                ],
              },
              {
                title: "1.8.3 Difference of sets",
                content:
                  "The difference of the sets A and B in this order is the set of elements which belong to A but not to B. Symbolically, we write A - B and read as 'A minus B'. Using the set-builder notation, A - B = {x : x ∈ A and x ∉ B}. The sets A - B, A ∩ B and B - A are mutually disjoint sets.",
                examples: [
                  "Let A = {1, 2, 3, 4, 5, 6}, B = {2, 4, 6, 8}. Find A - B and B - A. Solution: A - B = {1, 3, 5} and B - A = {8}. We note that A - B ≠ B - A.",
                  "Let V = {a, e, i, o, u} and B = {a, i, k, u}. Find V - B and B - V. Solution: V - B = {e, o} and B - V = {k}.",
                ],
              },
            ],
          },
          {
            title: "1.9 Complement of a Set",
            content:
              "Let U be the universal set and A a subset of U. Then the complement of A is the set of all elements of U which are not the elements of A. Symbolically, we write A' to denote the complement of A with respect to U. Thus, A' = {x : x ∈ U and x ∉ A}. Obviously A' = U - A.",
            examples: [
              "Let U = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10} and A = {1, 3, 5, 7, 9}. Find A'. Solution: A' = {2, 4, 6, 8, 10}.",
              "Let U be universal set of all the students of Class XI of a coeducational school and A be the set of all girls in Class XI. Find A'. Solution: A' is clearly the set of all boys in the class.",
            ],
            subSections: [
              {
                title: "Some Properties of Complement Sets",
                content:
                  "1. Complement laws: (i) A ∪ A' = U (ii) A ∩ A' = φ \n 2. De Morgan's law: (i) (A ∪ B)' = A' ∩ B' (ii) (A ∩ B)' = A' ∪ B' \n 3. Law of double complementation: (A')' = A \n 4. Laws of empty set and universal set: φ' = U and U' = φ",
              },
            ],
          },
        ],
      },
    },
    // second chapter
    {
      id: 2,
      title: "Relations and Functions",
      content: {
        introduction:
          "Much of mathematics is about finding a pattern - a recognisable link between quantities that change. In our daily life, we come across many patterns that characterise relations such as brother and sister, father and son, teacher and student. In mathematics also, we come across many relations such as number m is less than number n, line l is parallel to line m, set A is a subset of set B. In all these, we notice that a relation involves pairs of objects in certain order. In this Chapter, we will learn how to link pairs of objects from two sets and then introduce relations between the two objects in the pair. Finally, we will learn about special relations which will qualify to be functions.",

        sections: [
          {
            title: "2.1 Cartesian Products of Sets",
            content:
              "Given two non-empty sets P and Q. The cartesian product P × Q is the set of all ordered pairs of elements from P and Q, i.e., P × Q = {(p, q) : p ∈ P, q ∈ Q}. If either P or Q is the null set, then P × Q will also be empty set, i.e., P × Q = φ. Two ordered pairs are equal, if and only if the corresponding first elements are equal and the second elements are also equal. If there are p elements in A and q elements in B, then there will be pq elements in A × B, i.e., if n(A) = p and n(B) = q, then n(A × B) = pq. If A and B are non-empty sets and either A or B is an infinite set, then so is A×B. A × A × A = {(a, b, c) : a, b, c ∈ A}. Here (a, b, c) is called an ordered triplet.",
            examples: [
              "If (x + 1, y - 2) = (3, 1), find the values of x and y. Solution: x + 1 = 3 and y - 2 = 1. Solving we get x = 2 and y = 3.",
              "If P = {a, b, c} and Q = {r}, form the sets P × Q and Q × P. Are these two products equal? Solution: P × Q = {(a, r), (b, r), (c, r)} and Q × P = {(r, a), (r, b), (r, c)}. Since (a, r) is not equal to (r, a), we conclude that P × Q ≠ Q × P.",
              "If R is the set of all real numbers, the cartesian products R × R represents the set of all points in two dimensional space and R × R × R represents the set of all points in three-dimensional space.",
            ],
          },
          {
            title: "2.2 Relations",
            content:
              "A relation R from a non-empty set A to a non-empty set B is a subset of the cartesian product A × B. The subset is derived by describing a relationship between the first element and the second element of the ordered pairs in A × B. The second element is called the image of the first element. The set of all first elements of the ordered pairs in a relation R from a set A to a set B is called the domain of the relation R. The set of all second elements in a relation R from a set A to a set B is called the range of the relation R. The whole set B is called the codomain of the relation R. Note that range ⊂ codomain. The total number of relations that can be defined from a set A to a set B is the number of possible subsets of A × B. If n(A) = p and n(B) = q, then n(A × B) = pq and the total number of relations is 2^pq.",
            examples: [
              "Let A = {1, 2, 3, 4, 5, 6}. Define a relation R from A to A by R = {(x, y) : y = x + 1}. Then R in roster form is R = {(1, 2), (2, 3), (3, 4), (4, 5), (5, 6)}. The domain = {1, 2, 3, 4, 5}. The range = {2, 3, 4, 5, 6} and the codomain = {1, 2, 3, 4, 5, 6}.",
              "Let A = {1, 2} and B = {3, 4}. Find the number of relations from A to B. Solution: A × B = {(1, 3), (1, 4), (2, 3), (2, 4)}. Since n(A × B) = 4, the number of subsets of A × B is 2^4. Therefore, the number of relations from A into B will be 16.",
            ],
          },
          {
            title: "2.3 Functions",
            content:
              "A relation f from a set A to a set B is said to be a function if every element of set A has one and only one image in set B. In other words, a function f is a relation from a non-empty set A to a non-empty set B such that the domain of f is A and no two distinct ordered pairs in f have the same first element. If f is a function from A to B and (a, b) ∈ f, then f(a) = b, where b is called the image of a under f and a is called the preimage of b under f. The function f from A to B is denoted by f: A → B. A function which has either R or one of its subsets as its range is called a real valued function. Further, if its domain is also either R or a subset of R, it is called a real function.",
            examples: [
              "Let N be the set of natural numbers and the relation R be defined on N such that R = {(x, y) : y = 2x, x, y ∈ N}. The domain of R is N, the codomain is also N, and the range is the set of even natural numbers. Since every natural number n has one and only one image, this relation is a function.",
              "Let N be the set of natural numbers. Define a real valued function f: N → N by f(x) = 2x + 1. Then f(1)=3, f(2)=5, f(3)=7, and so on.",
              "Examine if the relation R = {(2,1),(3,1),(4,2)} is a function. Solution: Since 2, 3, 4 are the elements of domain having their unique images, this relation R is a function.",
            ],
            subSections: [
              {
                title: "2.3.1 Some functions and their graphs",
                content: "",
                subSections: [
                  {
                    title: "(i) Identity function",
                    content:
                      "Let R be the set of real numbers. Define the real valued function f: R → R by y = f(x) = x for each x ∈ R. Such a function is called the identity function. Here the domain and range of f are R. The graph is a straight line passing through the origin.",
                  },
                  {
                    title: "(ii) Constant function",
                    content:
                      "Define the function f: R → R by y = f(x) = c, x ∈ R where c is a constant. Here domain of f is R and its range is {c}. The graph is a line parallel to x-axis.",
                  },
                  {
                    title: "(iii) Polynomial function",
                    content:
                      "A function f: R → R is said to be polynomial function if for each x in R, y = f(x) = a₀ + a₁x + a₂x² + ... + aₙxⁿ, where n is a non-negative integer and a₀, a₁, a₂, ..., aₙ ∈ R.",
                    examples: [
                      "The functions defined by f(x) = x³ - x² + 2, and g(x) = x⁴ + √2x are some examples of polynomial functions, whereas the function h defined by h(x) = x^(2/3) + 2x is not a polynomial function.",
                    ],
                  },
                  {
                    title: "(iv) Rational functions",
                    content:
                      "Rational functions are functions of the type f(x)/g(x), where f(x) and g(x) are polynomial functions of x defined in a domain, where g(x) ≠ 0.",
                  },
                  {
                    title: "(v) The Modulus function",
                    content:
                      "The function f: R → R defined by f(x) = |x| for each x ∈ R is called modulus function. For each non-negative value of x, f(x) = x. But for negative values of x, f(x) = -x. i.e., f(x) = { x, if x ≥ 0; -x, if x < 0 }",
                  },
                  {
                    title: "(vi) Signum function",
                    content:
                      "The function f: R → R defined by f(x) = { 1, if x > 0; 0, if x = 0; -1, if x < 0 } is called the signum function. The domain of the signum function is R and the range is the set {-1, 0, 1}.",
                  },
                  {
                    title: "(vii) Greatest integer function",
                    content:
                      "The function f: R → R defined by f(x) = [x], x ∈ R assumes the value of the greatest integer, less than or equal to x. Such a function is called the greatest integer function. For example, [x] = -1 for -1 ≤ x < 0; [x] = 0 for 0 ≤ x < 1; [x] = 1 for 1 ≤ x < 2, and so on.",
                  },
                ],
              },
              {
                title: "2.3.2 Algebra of real functions",
                content:
                  "In this Section, we shall learn how to add two real functions, subtract a real function from another, multiply a real function by a scalar (here by a scalar we mean a real number), multiply two real functions and divide one real function by another.",
                subSections: [
                  {
                    title: "(i) Addition of two real functions",
                    content:
                      "Let f: X → R and g: X → R be any two real functions, where X ⊂ R. Then, we define (f + g): X → R by (f + g)(x) = f(x) + g(x), for all x ∈ X.",
                  },
                  {
                    title: "(ii) Subtraction of a real function from another",
                    content:
                      "Let f: X → R and g: X → R be any two real functions, where X ⊂ R. Then, we define (f - g): X → R by (f - g)(x) = f(x) - g(x), for all x ∈ X.",
                  },
                  {
                    title: "(iii) Multiplication by a scalar",
                    content:
                      "Let f: X → R be a real valued function and α be a scalar (a real number). Then the product αf is a function from X to R defined by (αf)(x) = α f(x), x ∈ X.",
                  },
                  {
                    title: "(iv) Multiplication of two real functions",
                    content:
                      "The product of two real functions f: X → R and g: X → R is a function fg: X → R defined by (fg)(x) = f(x) g(x), for all x ∈ X. This is also called pointwise multiplication.",
                  },
                  {
                    title: "(v) Quotient of two real functions",
                    content:
                      "Let f and g be two real functions defined from X → R, where X ⊂ R. The quotient of f by g denoted by f/g is a function defined by (f/g)(x) = f(x)/g(x), provided g(x) ≠ 0, x ∈ X.",
                  },
                ],
              },
            ],
          },
        ],
      }
    },
    // third chapter,
    {
      id: 3,
      title: "Trigonometric Functions",
      content: {
        introduction:
          "The word 'trigonometry' is derived from the Greek words 'trigon' and 'metron' and it means 'measuring the sides of a triangle'. The subject was originally developed to solve geometric problems involving triangles. It was studied by sea captains for navigation, surveyors to map out new lands, by engineers and others. Currently, trigonometry is used in many areas such as the science of seismology, designing electric circuits, describing the state of an atom, predicting the heights of tides in the ocean, analysing a musical tone and in many other areas. In this Chapter, we will generalise the concept of trigonometric ratios to trigonometric functions and study their properties.",

        sections: [
          {
            title: "3.1 Angles",
            content:
              "Angle is a measure of rotation of a given ray about its initial point. The original ray is called the initial side and the final position of the ray after rotation is called the terminal side of the angle. The point of rotation is called the vertex. If the direction of rotation is anticlockwise, the angle is said to be positive and if the direction of rotation is clockwise, then the angle is negative. The measure of an angle is the amount of rotation performed to get the terminal side from the initial side.",
            subSections: [
              {
                title: "3.1.1 Degree measure",
                content:
                  "If a rotation from the initial side to terminal side is (1/360)th of a revolution, the angle is said to have a measure of one degree, written as 1°. A degree is divided into 60 minutes, and a minute is divided into 60 seconds. One sixtieth of a degree is called a minute, written as 1', and one sixtieth of a minute is called a second, written as 1″. Thus, 1° = 60', 1' = 60″.",
              },
              {
                title: "3.1.2 Radian measure",
                content:
                  "Angle subtended at the centre by an arc of length 1 unit in a unit circle (circle of radius 1 unit) is said to have a measure of 1 radian. In a circle of radius r, an arc of length l will subtend an angle whose measure is l/r radian. Thus, if in a circle of radius r, an arc of length l subtends an angle θ radian at the centre, we have θ = l/r or l = rθ.",
              },
              {
                title: "3.1.3 Relation between degree and radian",
                content:
                  "Since a circle subtends at the centre an angle whose radian measure is 2π and its degree measure is 360°, it follows that 2π radian = 360° or π radian = 180°. The above relation enables us to express a radian measure in terms of degree measure and a degree measure in terms of radian measure. Radian measure = (π/180) × Degree measure. Degree measure = (180/π) × Radian measure.",
                examples: [
                  "Convert 40°20' into radian measure. Solution: 40°20' = 40⅓° = (121/3)°. Therefore, radian measure = (π/180) × (121/3) = 121π/540 radian.",
                  "Convert 6 radians into degree measure. Solution: 6 radians = (180/π) × 6 = (1080×7)/(22) = 343° + (7×60)/11 minute = 343°38'11″ approximately.",
                  "Find the radius of the circle in which a central angle of 60° intercepts an arc of length 37.4 cm. Solution: l = 37.4 cm, θ = 60° = π/3 radian. r = l/θ = (37.4 × 3)/π = (37.4 × 3 × 7)/22 = 35.7 cm.",
                ],
              },
            ],
          },
          {
            title: "3.2 Trigonometric Functions",
            content:
              "Consider a unit circle with centre at origin of the coordinate axes. Let P(a,b) be any point on the circle with angle AOP = x radian, i.e., length of arc AP = x. We define cos x = a and sin x = b. Since ΔOMP is a right triangle, we have OM² + MP² = OP² or a² + b² = 1. Thus, for every point on the unit circle, we have a² + b² = 1 or cos²x + sin²x = 1.",
            subSections: [
              {
                title: "Trigonometric Functions",
                content:
                  "We define other trigonometric functions in terms of sine and cosine functions: tan x = sin x / cos x, cot x = cos x / sin x, sec x = 1 / cos x, cosec x = 1 / sin x.",
              },
              {
                title: "3.2.1 Sign of trigonometric functions",
                content:
                  "For a point P(a,b) on the unit circle, in the first quadrant (0 < x < π/2) a and b are both positive, in the second quadrant (π/2 < x < π) a is negative and b is positive, in the third quadrant (π < x < 3π/2) a and b are both negative and in the fourth quadrant (3π/2 < x < 2π) a is positive and b is negative. Therefore, sin x is positive for 0 < x < π, and negative for π < x < 2π. Similarly, cos x is positive for 0 < x < π/2, negative for π/2 < x < 3π/2 and positive for 3π/2 < x < 2π.",
              },
              {
                title: "3.2.2 Domain and range of trigonometric functions",
                content:
                  "Domain of y = sin x and y = cos x is the set of all real numbers and range is the interval [-1, 1]. Domain of y = cosec x is {x: x ∈ R and x ≠ nπ, n ∈ Z} and range is {y: y ∈ R, y ≥ 1 or y ≤ -1}. Domain of y = sec x is {x: x ∈ R and x ≠ (2n+1)π/2, n ∈ Z} and range is {y: y ∈ R, y ≤ -1 or y ≥ 1}. Domain of y = tan x is {x: x ∈ R and x ≠ (2n+1)π/2, n ∈ Z} and range is the set of all real numbers. Domain of y = cot x is {x: x ∈ R and x ≠ nπ, n ∈ Z} and range is the set of all real numbers.",
              },
            ],
            examples: [
              "If cos x = -3/5, x lies in the third quadrant, find the values of other five trigonometric functions. Solution: cos x = -3/5, sec x = -5/3. sin²x = 1 - cos²x = 1 - 9/25 = 16/25. Since x lies in third quadrant, sin x is negative. Therefore sin x = -4/5, cosec x = -5/4, tan x = sin x/cos x = 4/3, cot x = 3/4.",
              "If cot x = -5/12, x lies in second quadrant, find the values of other five trigonometric functions. Solution: cot x = -5/12, tan x = -12/5. sec²x = 1 + tan²x = 1 + 144/25 = 169/25. Since x lies in second quadrant, sec x is negative. Therefore sec x = -13/5, cos x = -5/13. sin x = tan x cos x = (-12/5) × (-5/13) = 12/13, cosec x = 13/12.",
              "Find the value of sin(31π/3). Solution: sin(31π/3) = sin(10π + π/3) = sin(π/3) = √3/2.",
            ],
          },
          {
            title: "3.3 Trigonometric Functions of Sum and Difference of Two Angles",
            content:
              "In this Section, we shall derive expressions for trigonometric functions of the sum and difference of two numbers (angles) and related expressions.",
            subSections: [
              {
                title: "Basic Identities",
                content:
                  "sin(-x) = -sin x, cos(-x) = cos x. cos(x + y) = cos x cos y - sin x sin y. cos(x - y) = cos x cos y + sin x sin y. cos(π/2 - x) = sin x. sin(π/2 - x) = cos x. sin(x + y) = sin x cos y + cos x sin y. sin(x - y) = sin x cos y - cos x sin y.",
              },
              {
                title: "Identities for tan and cot",
                content:
                  "tan(x + y) = (tan x + tan y)/(1 - tan x tan y). tan(x - y) = (tan x - tan y)/(1 + tan x tan y). cot(x + y) = (cot x cot y - 1)/(cot y + cot x). cot(x - y) = (cot x cot y + 1)/(cot y - cot x).",
              },
              {
                title: "Multiple and Submultiple Angle Identities",
                content:
                  "cos 2x = cos²x - sin²x = 2cos²x - 1 = 1 - 2sin²x = (1 - tan²x)/(1 + tan²x). sin 2x = 2 sin x cos x = (2 tan x)/(1 + tan²x). tan 2x = (2 tan x)/(1 - tan²x). sin 3x = 3 sin x - 4 sin³x. cos 3x = 4 cos³x - 3 cos x. tan 3x = (3 tan x - tan³x)/(1 - 3 tan²x).",
              },
              {
                title: "Sum-to-Product Identities",
                content:
                  "cos x + cos y = 2 cos((x+y)/2) cos((x-y)/2). cos x - cos y = -2 sin((x+y)/2) sin((x-y)/2). sin x + sin y = 2 sin((x+y)/2) cos((x-y)/2). sin x - sin y = 2 cos((x+y)/2) sin((x-y)/2).",
              },
              {
                title: "Product-to-Sum Identities",
                content:
                  "2 cos x cos y = cos(x+y) + cos(x-y). -2 sin x sin y = cos(x+y) - cos(x-y). 2 sin x cos y = sin(x+y) + sin(x-y). 2 cos x sin y = sin(x+y) - sin(x-y).",
              },
            ],
            examples: [
              "Prove that 3 sin(π/6) sec(π/3) - 4 sin(5π/6) cot(π/4) = 1. Solution: L.H.S. = 3 × (1/2) × 2 - 4 sin(π - π/6) × 1 = 3 - 4 sin(π/6) = 3 - 4 × 1/2 = 1.",
              "Find the value of sin 15°. Solution: sin 15° = sin(45° - 30°) = sin45°cos30° - cos45°sin30° = (1/√2)×(√3/2) - (1/√2)×(1/2) = (√3 - 1)/(2√2).",
              "Find the value of tan(13π/12). Solution: tan(13π/12) = tan(π + π/12) = tan(π/12) = tan(π/4 - π/6) = (tan(π/4) - tan(π/6))/(1 + tan(π/4)tan(π/6)) = (1 - 1/√3)/(1 + 1/√3) = (√3 - 1)/(√3 + 1) = 2 - √3.",
              "Prove that (sin(x+y))/(sin(x-y)) = (tan x + tan y)/(tan x - tan y). Solution: L.H.S. = (sin x cos y + cos x sin y)/(sin x cos y - cos x sin y). Dividing numerator and denominator by cos x cos y, we get (tan x + tan y)/(tan x - tan y).",
              "Show that tan 3x tan 2x tan x = tan 3x - tan 2x - tan x. Solution: Since 3x = 2x + x, tan 3x = tan(2x + x) = (tan 2x + tan x)/(1 - tan 2x tan x). Cross-multiplying: tan 3x - tan 3x tan 2x tan x = tan 2x + tan x. Rearranging: tan 3x tan 2x tan x = tan 3x - tan 2x - tan x.",
              "Prove that (cos 7x + cos 5x)/(sin 7x - sin 5x) = cot x. Solution: Using sum-to-product identities, L.H.S. = (2 cos 6x cos x)/(2 cos 6x sin x) = cos x/sin x = cot x.",
            ],
          },
        ],
      },
    },
    // fourth chapter,
    {
      id: 4,
      title: "Complex Numbers and Quadratic Equations",
      content: {
        introduction:
          "In earlier classes, we have studied linear equations in one and two variables and quadratic equations in one variable. We have seen that the equation x² + 1 = 0 has no real solution as x² + 1 = 0 gives x² = -1 and square of every real number is non-negative. So, we need to extend the real number system to a larger system so that we can find the solution of the equation x² = -1. In fact, the main objective is to solve the equation ax² + bx + c = 0, where D = b² - 4ac < 0, which is not possible in the system of real numbers.",

        sections: [
          {
            title: "4.1 Complex Numbers",
            content:
              "Let us denote √-1 by the symbol i. Then, we have i² = -1. This means that i is a solution of the equation x² + 1 = 0. A number of the form a + ib, where a and b are real numbers, is defined to be a complex number. For the complex number z = a + ib, a is called the real part, denoted by Re z and b is called the imaginary part denoted by Im z of the complex number z. Two complex numbers z₁ = a + ib and z₂ = c + id are equal if a = c and b = d.",
            examples: [
              "If 4x + i(3x - y) = 3 + i(-6), where x and y are real numbers, then find the values of x and y. Solution: Equating real and imaginary parts, 4x = 3, 3x - y = -6. Solving simultaneously, x = 3/4 and y = 33/4.",
            ],
          },
          {
            title: "4.2 Algebra of Complex Numbers",
            content:
              "In this Section, we shall develop the algebra of complex numbers.",
            subSections: [
              {
                title: "4.2.1 Addition of two complex numbers",
                content:
                  "Let z₁ = a + ib and z₂ = c + id be any two complex numbers. Then, the sum z₁ + z₂ is defined as follows: z₁ + z₂ = (a + c) + i(b + d), which is again a complex number. For example, (2 + i3) + (-6 + i5) = (2 - 6) + i(3 + 5) = -4 + i8.",
                list: [
                  "The closure law: The sum of two complex numbers is a complex number.",
                  "The commutative law: z₁ + z₂ = z₂ + z₁.",
                  "The associative law: (z₁ + z₂) + z₃ = z₁ + (z₂ + z₃).",
                  "The existence of additive identity: There exists the complex number 0 + i0 (denoted as 0), called the additive identity, such that z + 0 = z.",
                  "The existence of additive inverse: To every complex number z = a + ib, we have the complex number -a + i(-b) (denoted as -z), called the additive inverse, such that z + (-z) = 0.",
                ],
              },
              {
                title: "4.2.2 Difference of two complex numbers",
                content:
                  "Given any two complex numbers z₁ and z₂, the difference z₁ - z₂ is defined as follows: z₁ - z₂ = z₁ + (-z₂). For example, (6 + 3i) - (2 - i) = (6 + 3i) + (-2 + i) = 4 + 4i.",
              },
              {
                title: "4.2.3 Multiplication of two complex numbers",
                content:
                  "Let z₁ = a + ib and z₂ = c + id be any two complex numbers. Then, the product z₁z₂ is defined as follows: z₁z₂ = (ac - bd) + i(ad + bc). For example, (3 + i5)(2 + i6) = (3×2 - 5×6) + i(3×6 + 5×2) = -24 + i28.",
                list: [
                  "The closure law: The product of two complex numbers is a complex number.",
                  "The commutative law: z₁z₂ = z₂z₁.",
                  "The associative law: (z₁z₂)z₃ = z₁(z₂z₃).",
                  "The existence of multiplicative identity: There exists the complex number 1 + i0 (denoted as 1), called the multiplicative identity such that z.1 = z.",
                  "The existence of multiplicative inverse: For every non-zero complex number z = a + ib, we have the complex number a/(a²+b²) + i(-b)/(a²+b²) (denoted by 1/z or z⁻¹), called the multiplicative inverse such that z.(1/z) = 1.",
                  "The distributive law: z₁(z₂ + z₃) = z₁z₂ + z₁z₃ and (z₁ + z₂)z₃ = z₁z₃ + z₂z₃.",
                ],
              },
              {
                title: "4.2.4 Division of two complex numbers",
                content:
                  "Given any two complex numbers z₁ and z₂, where z₂ ≠ 0, the quotient z₁/z₂ is defined by z₁/z₂ = z₁(1/z₂).",
              },
              {
                title: "4.2.5 Power of i",
                content:
                  "i² = -1, i³ = i²·i = -i, i⁴ = (i²)² = (-1)² = 1. In general, for any integer k, i⁴ᵏ = 1, i⁴ᵏ⁺¹ = i, i⁴ᵏ⁺² = -1, i⁴ᵏ⁺³ = -i.",
              },
              {
                title: "4.2.6 The square roots of a negative real number",
                content:
                  "Note that i² = -1 and (-i)² = i² = -1. Therefore, the square roots of -1 are i, -i. If a is a positive real number, √-a = √a √-1 = √a i. Note that √a × √b ≠ √ab if both a and b are negative real numbers.",
              },
              {
                title: "4.2.7 Identities",
                content:
                  "(z₁ + z₂)² = z₁² + z₂² + 2z₁z₂. (z₁ - z₂)² = z₁² - 2z₁z₂ + z₂². (z₁ + z₂)³ = z₁³ + 3z₁²z₂ + 3z₁z₂² + z₂³. (z₁ - z₂)³ = z₁³ - 3z₁²z₂ + 3z₁z₂² - z₂³. z₁² - z₂² = (z₁ + z₂)(z₁ - z₂).",
              },
            ],
            examples: [
              "Express (-5i)(1/8 i) in the form of a + bi. Solution: (-5i)(1/8 i) = -5/8 i² = -5/8 (-1) = 5/8 = 5/8 + i0.",
              "Express (5 - 3i)³ in the form a + ib. Solution: (5 - 3i)³ = 5³ - 3×5²×(3i) + 3×5(3i)² - (3i)³ = 125 - 225i - 135 + 27i = -10 - 198i.",
            ],
          },
          {
            title: "4.3 The Modulus and the Conjugate of a Complex Number",
            content:
              "Let z = a + ib be a complex number. Then, the modulus of z, denoted by |z|, is defined to be the non-negative real number √(a² + b²), i.e., |z| = √(a² + b²) and the conjugate of z, denoted as z̄, is the complex number a - ib, i.e., z̄ = a - ib.",
            list: [
              "z z̄ = |z|²",
              "|z₁z₂| = |z₁||z₂|",
              "|z₁/z₂| = |z₁|/|z₂|, provided |z₂| ≠ 0",
              "z̄₁z̄₂ = z̄₁ z̄₂",
              "z̄₁ ± z₂ = z̄₁ ± z̄₂",
              "(z₁/z₂)̄ = z̄₁/z̄₂, provided z₂ ≠ 0",
            ],
            examples: [
              "Find the multiplicative inverse of 2 - 3i. Solution: z⁻¹ = z̄/|z|² = (2 + 3i)/(2² + (-3)²) = (2 + 3i)/13 = 2/13 + (3/13)i.",
              "Express (5 + √2i)/(1 - √2i) in the form a + ib. Solution: Multiply numerator and denominator by (1 + √2i): = (5 + 5√2i + √2i - 2)/(1 + 2) = (3 + 6√2i)/3 = 1 + 2√2i.",
            ],
          },
          {
            title: "4.4 Argand Plane and Polar Representation",
            content:
              "The complex number x + iy which corresponds to the ordered pair (x, y) can be represented geometrically as the unique point P(x, y) in the XY-plane and vice-versa. The plane having a complex number assigned to each of its point is called the complex plane or the Argand plane. The modulus of the complex number x + iy = √(x² + y²) is the distance between the point P(x, y) and the origin O(0, 0). The x-axis and y-axis in the Argand plane are called, respectively, the real axis and the imaginary axis. The representation of a complex number z = x + iy and its conjugate z̄ = x - iy in the Argand plane are, respectively, the points P(x, y) and Q(x, -y). Geometrically, the point (x, -y) is the mirror image of the point (x, y) on the real axis.",
          },
        ],
      },
    },

    {
      id: 5,
      title: "Linear Inequalities",
      content: {
        introduction:
          "In earlier classes, we have studied equations in one variable and two variables and also solved some statement problems by translating them in the form of equations. Now a natural question arises: 'Is it always possible to translate a statement problem in the form of an equation? For example, the height of all the students in your class is less than 160 cm. Your classroom can occupy almost 60 tables or chairs or both. Here we get certain statements involving a sign '<' (less than), '>' (greater than), '≤' (less than or equal) and '≥' (greater than or equal) which are known as inequalities. In this Chapter, we will study linear inequalities in one and two variables. The study of inequalities is very useful in solving problems in the field of science, mathematics, statistics, economics, psychology, etc.",

        sections: [
          {
            title: "5.1 Inequalities",
            content:
              "Let us consider the following situations: (i) Ravi goes to market with ₹200 to buy rice, which is available in packets of 1kg. The price of one packet of rice is ₹30. If x denotes the number of packets of rice, which he buys, then the total amount spent by him is ₹30x. Since, he has to buy rice in packets only, he may not be able to spend the entire amount of ₹200. Hence 30x < 200. (ii) Reshma has ₹120 and wants to buy some registers and pens. The cost of one register is ₹40 and that of a pen is ₹20. In this case, if x denotes the number of registers and y, the number of pens which Reshma buys, then the total amount spent by her is ₹(40x+20y) and we have 40x + 20y ≤ 120.",
          },
          {
            title: "5.2 Algebraic Solutions of Linear Inequalities in One Variable and their Graphical Representation",
            content:
              "Any solution of an inequality in one variable is a value of the variable which makes it a true statement. While solving inequalities, we follow the same rules as solving linear equations except with a difference that the sign of inequality is reversed whenever we multiply (or divide) both sides of an inequality by a negative number.",
            list: [
              "Rule 1: Equal numbers may be added to (or subtracted from) both sides of an inequality without affecting the sign of inequality.",
              "Rule 2: Both sides of an inequality can be multiplied (or divided) by the same positive number. But when both sides are multiplied or divided by a negative number, then the sign of inequality is reversed.",
            ],
            examples: [
              "Solve 30x < 200 when (i) x is a natural number, (ii) x is an integer. Solution: 30x < 200 ⇒ x < 20/3. (i) When x is natural number, solution set = {1,2,3,4,5,6}. (ii) When x is integer, solution set = {..., -3, -2, -1, 0, 1, 2, 3, 4, 5, 6}.",
              "Solve 5x - 3 < 3x + 1 when (i) x is an integer, (ii) x is a real number. Solution: 5x - 3 < 3x + 1 ⇒ 2x < 4 ⇒ x < 2. (i) When x is integer, solution set = {..., -4, -3, -2, -1, 0, 1}. (ii) When x is real number, solution set = (-∞, 2).",
              "Solve 4x + 3 < 6x + 7. Solution: 4x + 3 < 6x + 7 ⇒ -2x < 4 ⇒ x > -2. Solution set = (-2, ∞).",
              "Solve (5 - 2x)/3 ≤ x/6 - 5. Solution: Multiply by 6: 2(5 - 2x) ≤ x - 30 ⇒ 10 - 4x ≤ x - 30 ⇒ -5x ≤ -40 ⇒ x ≥ 8. Solution set = [8, ∞).",
              "Solve 7x + 3 < 5x + 9 and show the graph on number line. Solution: 7x + 3 < 5x + 9 ⇒ 2x < 6 ⇒ x < 3. The graphical representation shows all points less than 3.",
            ],
          },
          {
            title: "Solved Examples",
            content: "Practical applications of linear inequalities.",
            examples: [
              "The marks obtained by a student in first and second terminal examination are 62 and 48, respectively. Find the minimum marks he should get in the annual examination to have an average of at least 60 marks. Solution: Let x be the marks in annual examination. Then (62 + 48 + x)/3 ≥ 60 ⇒ 110 + x ≥ 180 ⇒ x ≥ 70. Thus, the student must obtain a minimum of 70 marks.",
              "Find all pairs of consecutive odd natural numbers, both of which are larger than 10, such that their sum is less than 40. Solution: Let x be the smaller odd number. Then x > 10 and x + (x+2) < 40 ⇒ 2x + 2 < 40 ⇒ x < 19. So 10 < x < 19, and x is odd. Thus x can be 11, 13, 15, 17. The pairs are (11,13), (13,15), (15,17), (17,19).",
            ],
          },
          {
            title: "System of Linear Inequalities",
            content: "Solving multiple inequalities simultaneously.",
            examples: [
              "Solve -8 ≤ 5x - 3 < 7. Solution: -8 ≤ 5x - 3 < 7 ⇒ -5 ≤ 5x < 10 ⇒ -1 ≤ x < 2.",
              "Solve -5 ≤ (5 - 3x)/2 ≤ 8. Solution: Multiply by 2: -10 ≤ 5 - 3x ≤ 16 ⇒ -15 ≤ -3x ≤ 11 ⇒ 5 ≥ x ≥ -11/3 ⇒ -11/3 ≤ x ≤ 5.",
              "Solve the system: 3x - 7 < 5 + x and 11 - 5x ≤ 1. Solution: From first: 3x - 7 < 5 + x ⇒ 2x < 12 ⇒ x < 6. From second: 11 - 5x ≤ 1 ⇒ -5x ≤ -10 ⇒ x ≥ 2. Combined solution: 2 ≤ x < 6.",
            ],
          },
          {
            title: "Applications in Real Life",
            content: "Using inequalities to solve practical problems.",
            examples: [
              "In an experiment, a solution of hydrochloric acid is to be kept between 30° and 35° Celsius. What is the range of temperature in degree Fahrenheit if conversion formula is C = (5/9)(F - 32)? Solution: 30 < C < 35 ⇒ 30 < (5/9)(F - 32) < 35 ⇒ Multiply by 9/5: 54 < F - 32 < 63 ⇒ 86 < F < 95. Thus the range is between 86°F and 95°F.",
              "A manufacturer has 600 litres of a 12% solution of acid. How many litres of a 30% acid solution must be added so that acid content in the resulting mixture will be more than 15% but less than 18%? Solution: Let x litres of 30% acid solution be added. Then 30% x + 12% of 600 > 15% of (x+600) and 30% x + 12% of 600 < 18% of (x+600). Solving these inequalities gives the range of x.",
            ],
          },
        ],
      },
    },

    {
      id: 6,
      title: "Permutations and Combinations",
      content: {
        introduction:
          "Suppose you have a suitcase with a number lock. The number lock has 4 wheels each labelled with 10 digits from 0 to 9. The lock can be opened if 4 specific digits are arranged in a particular sequence with no repetition. Somehow, you have forgotten this specific sequence of digits. You remember only the first digit which is 7. In order to open the lock, how many sequences of 3-digits you may have to check with? To answer this question, you may, immediately, start listing all possible arrangements of 9 remaining digits taken 3 at a time. But, this method will be tedious, because the number of possible sequences may be large. Here, in this Chapter, we shall learn some basic counting techniques which will enable us to answer this question without actually listing 3-digit arrangements. In fact, these techniques will be useful in determining the number of different ways of arranging and selecting objects without actually listing them.",

        sections: [
          {
            title: "6.1 Fundamental Principle of Counting",
            content:
              "If an event can occur in m different ways, following which another event can occur in n different ways, then the total number of occurrence of the events in the given order is m × n. This is known as the fundamental principle of counting or the multiplication principle. The above principle can be generalised for any finite number of events. For example, for 3 events, the principle is as follows: If an event can occur in m different ways, following which another event can occur in n different ways, following which a third event can occur in p different ways, then the total number of occurrence to the events in the given order is m × n × p.",
            examples: [
              "Mohan has 3 pants and 2 shirts. How many different pairs of a pant and a shirt can he dress up with? Solution: There are 3 ways in which a pant can be chosen and for each choice of a pant, there are 2 choices of a shirt. Therefore, there are 3 × 2 = 6 pairs.",
              "Sabnam has 2 school bags, 3 tiffin boxes and 2 water bottles. In how many ways can she carry these items (choosing one each)? Solution: A school bag can be chosen in 2 ways. After a school bag is chosen, a tiffin box can be chosen in 3 ways. Hence, there are 2 × 3 = 6 pairs of school bag and a tiffin box. For each of these pairs, a water bottle can be chosen in 2 ways. Hence, there are 6 × 2 = 12 different ways.",
              "Find the number of 4 letter words, with or without meaning, which can be formed out of the letters of the word ROSE, where the repetition of the letters is not allowed. Solution: The first place can be filled in 4 ways, second place in 3 ways, third place in 2 ways and fourth place in 1 way. Thus, the number of ways is 4 × 3 × 2 × 1 = 24.",
              "Given 4 flags of different colours, how many different signals can be generated, if a signal requires the use of 2 flags one below the other? Solution: The upper place can be filled in 4 ways and the lower place can be filled in 3 ways. Hence, the required number of signals = 4 × 3 = 12.",
              "How many 2 digit even numbers can be formed from the digits 1, 2, 3, 4, 5 if the digits can be repeated? Solution: The unit's place can be filled by 2 or 4 only, i.e., in 2 ways. The ten's place can be filled by any of the 5 digits in 5 ways. Therefore, the required number of two digits even numbers is 2 × 5 = 10.",
            ],
          },
          {
            title: "6.2 Permutations",
            content:
              "A permutation is an arrangement in a definite order of a number of objects taken some or all at a time.",
            subSections: [
              {
                title: "6.2.1 Permutations when all the objects are distinct",
                content:
                  "The number of permutations of n different objects taken r at a time, where 0 < r ≤ n and the objects do not repeat is n(n-1)(n-2)...(n-r+1), which is denoted by ⁿPᵣ. Thus, ⁿPᵣ = n(n-1)(n-2)...(n-r+1).",
              },
              {
                title: "6.2.2 Factorial notation",
                content:
                  "The notation n! represents the product of first n natural numbers, i.e., 1 × 2 × 3 × ... × (n-1) × n is denoted as n!. We read this symbol as 'n factorial'. We define 0! = 1. Clearly, for a natural number n, n! = n(n-1)! = n(n-1)(n-2)! and so on.",
                examples: [
                  "Evaluate (i) 5! (ii) 7! (iii) 7! - 5!. Solution: (i) 5! = 1×2×3×4×5 = 120. (ii) 7! = 5040. (iii) 7! - 5! = 5040 - 120 = 4920.",
                  "Compute (i) 7!/5! (ii) 12!/(10!×2!). Solution: (i) 7!/5! = (7×6×5!)/5! = 42. (ii) 12!/(10!×2!) = (12×11×10!)/(10!×2) = 66.",
                ],
              },
              {
                title: "6.2.3 Derivation of the formula for ⁿPᵣ",
                content:
                  "ⁿPᵣ = n!/(n-r)!, where 0 ≤ r ≤ n. In particular, when r = n, ⁿPₙ = n!/0! = n!. Also, ⁿP₀ = 1 = n!/(n-0)!.",
              },
              {
                title: "6.2.4 Permutations when all the objects are not distinct",
                content:
                  "The number of permutations of n objects, where p₁ objects are of one kind, p₂ are of second kind, ..., pₖ are of kᵗʰ kind and the rest, if any, are of different kind is n!/(p₁! p₂! ... pₖ!).",
                examples: [
                  "Find the number of permutations of the letters of the word ALLAHABAD. Solution: There are 9 objects of which there are 4A's and 2L's. Therefore, the required number of arrangements = 9!/(4!2!) = 7560.",
                  "How many 4-digit numbers can be formed by using the digits 1 to 9 if repetition of digits is not allowed? Solution: The required 4-digit numbers = ⁹P₄ = 9!/5! = 3024.",
                  "How many numbers lying between 100 and 1000 can be formed with the digits 0,1,2,3,4,5 if repetition is not allowed? Solution: The required number = ⁶P₃ - ⁵P₂ = 120 - 20 = 100.",
                  "Find the number of different 8-letter arrangements that can be made from the letters of the word DAUGHTER so that (i) all vowels occur together (ii) all vowels do not occur together. Solution: (i) 6! × 3! = 4320. (ii) 8! - 4320 = 36000.",
                ],
              },
            ],
          },
          {
            title: "6.3 Combinations",
            content:
              "A combination is a selection of objects without regard to order. The number of combinations of n different objects taken r at a time is denoted by ⁿCᵣ and is given by ⁿCᵣ = n!/[r!(n-r)!], where 0 ≤ r ≤ n. Note that ⁿCₙ = 1, ⁿC₀ = 1, and ⁿCᵣ = ⁿCₙ₋ᵣ.",
            subSections: [
              {
                title: "Relationship between permutation and combination",
                content: "ⁿPᵣ = ⁿCᵣ × r! and therefore ⁿCᵣ = ⁿPᵣ / r!.",
              },
            ],
            examples: [
              "If ⁿC₉ = ⁿC₈, find ⁿC₁₇. Solution: Since ⁿC₉ = ⁿC₈, we have n = 9+8 = 17. Therefore, ⁿC₁₇ = ¹⁷C₁₇ = 1.",
              "A committee of 3 persons is to be constituted from a group of 2 men and 3 women. In how many ways can this be done? How many of these committees would consist of 1 man and 2 women? Solution: Total ways = ⁵C₃ = 10. Number with 1 man and 2 women = ²C₁ × ³C₂ = 2 × 3 = 6.",
              "What is the number of ways of choosing 4 cards from a pack of 52 playing cards? In how many of these (i) four cards are of the same suit (ii) four cards belong to four different suits? Solution: Total ways = ⁵²C₄ = 270725. (i) Same suit = 4 × ¹³C₄ = 2860. (ii) Different suits = ¹³C₁ × ¹³C₁ × ¹³C₁ × ¹³C₁ = 28561.",
              "A group consists of 4 girls and 7 boys. In how many ways can a team of 5 members be selected if the team has (i) no girl? (ii) at least one boy and one girl? (iii) at least 3 girls? Solution: (i) ⁷C₅ = 21. (ii) ⁷C₁×⁴C₄ + ⁷C₂×⁴C₃ + ⁷C₃×⁴C₂ + ⁷C₄×⁴C₁ = 7 + 84 + 210 + 140 = 441. (iii) ⁴C₃×⁷C₂ + ⁴C₄×⁷C₁ = 84 + 7 = 91.",
            ],
          },
          {
            title: "Miscellaneous Examples",
            content: "Advanced applications of permutations and combinations.",
            examples: [
              "How many words, with or without meaning, each of 3 vowels and 2 consonants can be formed from the letters of the word INVOLUTE? Solution: Number of ways to select = ⁴C₃ × ⁴C₂ = 4 × 6 = 24. Each selection can be arranged in 5! ways. So total words = 24 × 120 = 2880.",
              "Find the number of words with or without meaning which can be made using all the letters of the word AGAIN. If these words are written as in a dictionary, what will be the 50th word? Solution: Total words = 5!/2! = 60. Words starting with A = 24, with G = 12, with I = 12. Total so far = 48. The 49th word is NAAGI and the 50th word is NAAIG.",
              "How many numbers greater than 1000000 can be formed by using the digits 1,2,0,2,4,2,4? Solution: Numbers beginning with 1 = 6!/(3!2!) = 60, with 2 = 6!/(2!2!) = 180, with 4 = 6!/3! = 120. Total = 360.",
              "In how many ways can 5 girls and 3 boys be seated in a row so that no two boys are together? Solution: First seat the 5 girls in 5! ways. There are 6 cross-marked places for boys. The 3 boys can be seated in ⁶P₃ ways. Total = 5! × ⁶P₃ = 14400.",
            ],
          },
        ],
      },
    },

    {
      id: 7,
      title: "Binomial Theorem",
      content: {
        introduction:
          "In earlier classes, we have learnt how to find the squares and cubes of binomials like a + b and a - b. Using them, we could evaluate the numerical values of numbers like (98)² = (100 - 2)², (999)³ = (1000 - 1)³, etc. However, for higher powers like (98)⁵, (101)⁶, etc., the calculations become difficult by using repeated multiplication. This difficulty was overcome by a theorem known as binomial theorem. It gives an easier way to expand (a + b)ⁿ, where n is an integer or a rational number. In this Chapter, we study binomial theorem for positive integral indices only.",

        sections: [
          {
            title: "7.1 Binomial Theorem for Positive Integral Indices",
            content:
              "Let us have a look at the following identities done earlier: (a + b)⁰ = 1, (a + b)¹ = a + b, (a + b)² = a² + 2ab + b², (a + b)³ = a³ + 3a²b + 3ab² + b³, (a + b)⁴ = a⁴ + 4a³b + 6a²b² + 4ab³ + b⁴. In these expansions, we observe that (i) The total number of terms in the expansion is one more than the index. (ii) Powers of the first quantity 'a' go on decreasing by 1 whereas the powers of the second quantity 'b' increase by 1, in the successive terms. (iii) In each term of the expansion, the sum of the indices of a and b is the same and is equal to the index of a + b.",
            subSections: [
              {
                title: "Pascal's Triangle",
                content:
                  "The coefficients of the expansions are arranged in an array called Pascal's triangle. This array of numbers is known as Pascal's triangle, after the name of French mathematician Blaise Pascal. It is also known as Meru Prastara by Pingla. For example, the row for index 5 is 1 5 10 10 5 1. Using this row, we can expand (2x + 3y)⁵ = 32x⁵ + 240x⁴y + 720x³y² + 1080x²y³ + 810xy⁴ + 243y⁵.",
              },
            ],
          },
          {
            title: "7.2 Binomial Theorem",
            content:
              "The binomial theorem states that for any positive integer n, (a + b)ⁿ = ⁿC₀aⁿ + ⁿC₁aⁿ⁻¹b + ⁿC₂aⁿ⁻²b² + ... + ⁿCₙ₋₁abⁿ⁻¹ + ⁿCₙbⁿ. The proof is obtained by applying principle of mathematical induction.",
            list: [
              "The notation ∑_{k=0}^{n} ⁿCₖ aⁿ⁻ᵏ bᵏ stands for the expansion.",
              "The coefficients ⁿCᵣ occurring in the binomial theorem are known as binomial coefficients.",
              "There are (n + 1) terms in the expansion of (a + b)ⁿ.",
              "In the successive terms, the index of a goes on decreasing by unity, starting from n in the first term to 0 in the last term. At the same time the index of b increases by unity, starting from 0 to n.",
              "In every term of the expansion, the sum of the indices of a and b is n.",
            ],
            examples: [
              "Expand (x² + 3/x)⁴, x ≠ 0. Solution: Using binomial theorem, (x² + 3/x)⁴ = ⁴C₀(x²)⁴ + ⁴C₁(x²)³(3/x) + ⁴C₂(x²)²(3/x)² + ⁴C₃(x²)(3/x)³ + ⁴C₄(3/x)⁴ = x⁸ + 12x⁵ + 54x² + 108/x + 81/x⁴.",
              "Compute (98)⁵. Solution: 98 = 100 - 2, so (98)⁵ = (100 - 2)⁵ = ⁵C₀(100)⁵ - ⁵C₁(100)⁴·2 + ⁵C₂(100)³·2² - ⁵C₃(100)²·2³ + ⁵C₄(100)·2⁴ - ⁵C₅·2⁵ = 10000000000 - 5×100000000×2 + 10×1000000×4 - 10×10000×8 + 5×100×16 - 32 = 9039207968.",
              "Which is larger (1.01)¹⁰⁰⁰⁰⁰⁰ or 10,000? Solution: (1.01)¹⁰⁰⁰⁰⁰⁰ = (1 + 0.01)¹⁰⁰⁰⁰⁰⁰ = 1 + 1000000×0.01 + other positive terms = 1 + 10000 + other positive terms > 10000. Hence (1.01)¹⁰⁰⁰⁰⁰⁰ > 10000.",
              "Using binomial theorem, prove that 6ⁿ - 5n always leaves remainder 1 when divided by 25. Solution: (1+5)ⁿ = ⁿC₀ + ⁿC₁·5 + ⁿC₂·5² + ... + ⁿCₙ·5ⁿ ⇒ 6ⁿ = 1 + 5n + 5²(ⁿC₂ + ⁿC₃·5 + ... + 5ⁿ⁻²) ⇒ 6ⁿ - 5n = 1 + 25(ⁿC₂ + 5·ⁿC₃ + ... + 5ⁿ⁻²) = 25k + 1. Thus when divided by 25, 6ⁿ - 5n leaves remainder 1.",
            ],
            subSections: [
              {
                title: "7.2.1 Some special cases",
                content: "",
                list: [
                  "(x - y)ⁿ = ⁿC₀xⁿ - ⁿC₁xⁿ⁻¹y + ⁿC₂xⁿ⁻²y² - ... + (-1)ⁿⁿCₙyⁿ",
                  "(1 + x)ⁿ = ⁿC₀ + ⁿC₁x + ⁿC₂x² + ... + ⁿCₙxⁿ. In particular, for x = 1, 2ⁿ = ⁿC₀ + ⁿC₁ + ⁿC₂ + ... + ⁿCₙ.",
                  "(1 - x)ⁿ = ⁿC₀ - ⁿC₁x + ⁿC₂x² - ... + (-1)ⁿⁿCₙxⁿ. In particular, for x = 1, 0 = ⁿC₀ - ⁿC₁ + ⁿC₂ - ... + (-1)ⁿⁿCₙ.",
                ],
              },
            ],
          },
        ],
      },
    },
    {
      id: 8,
      title: "Sequences and Series",
      content: {
        introduction:
          "In mathematics, the word 'sequence' is used in much the same way as it is in ordinary English. When we say that a collection of objects is listed in a sequence, we usually mean that the collection is ordered in such a way that it has an identified first member, second member, third member and so on. For example, population of human beings or bacteria at different times form a sequence. The amount of money deposited in a bank, over a number of years form a sequence. Depreciated values of certain commodity occur in a sequence. Sequences have important applications in several spheres of human activities. Sequences, following specific patterns are called progressions. In this Chapter, besides discussing more about A.P.; arithmetic mean, geometric mean, relationship between A.M. and G.M., special series in forms of sum to n terms of consecutive natural numbers, sum to n terms of squares of natural numbers and sum to n terms of cubes of natural numbers will also be studied.",

        sections: [
          {
            title: "8.1 Sequences",
            content:
              "A sequence is an arrangement of numbers in definite order according to some rule. The various numbers occurring in a sequence are called its terms. We denote the terms of a sequence by a₁, a₂, a₃, ..., aₙ, ... etc., the subscripts denote the position of the term. The nᵗʰ term is the number at the nᵗʰ position of the sequence and is denoted by aₙ. The nᵗʰ term is also called the general term of the sequence. A sequence containing finite number of terms is called a finite sequence. A sequence is called infinite, if it is not a finite sequence. A sequence can be regarded as a function whose domain is the set of natural numbers or some subset of it.",
            examples: [
              "Consider the sequence of even natural numbers 2, 4, 6, ... Here aₙ = 2n where n is a natural number.",
              "In the sequence of odd natural numbers 1, 3, 5, ..., the nᵗʰ term is given by aₙ = 2n - 1.",
              "The Fibonacci sequence 1, 1, 2, 3, 5, 8, ... is generated by a₁ = a₂ = 1, aₙ = aₙ₋₂ + aₙ₋₁ for n > 2.",
              "Write the first three terms of the sequence defined by aₙ = 2n + 5. Solution: a₁ = 7, a₂ = 9, a₃ = 11.",
              "What is the 20th term of the sequence defined by aₙ = (n-1)(2-n)(3+n)? Solution: a₂₀ = 19 × (-18) × 23 = -7866.",
            ],
          },
          {
            title: "8.2 Series",
            content:
              "Let a₁, a₂, a₃, ..., aₙ be a given sequence. Then, the expression a₁ + a₂ + a₃ + ... + aₙ + ... is called the series associated with the given sequence. The series is finite or infinite according as the given sequence is finite or infinite. Series are often represented in compact form, called sigma notation, using the Greek letter Σ (sigma) as means of indicating the summation involved. Thus, the series a₁ + a₂ + a₃ + ... + aₙ is abbreviated as Σ_{k=1}^{n} aₖ.",
            examples: [
              "Let the sequence aₙ be defined as a₁ = 1, aₙ = aₙ₋₁ + 2 for n ≥ 2. Find first five terms and write corresponding series. Solution: a₁ = 1, a₂ = 3, a₃ = 5, a₄ = 7, a₅ = 9. The series is 1 + 3 + 5 + 7 + 9 + ...",
            ],
          },
          {
            title: "8.3 Geometric Progression (G.P.)",
            content:
              "A sequence a₁, a₂, a₃, ..., aₙ, ... is called geometric progression, if each term is non-zero and aₖ₊₁/aₖ = r (constant), for k ≥ 1. By letting a₁ = a, we obtain a geometric progression, a, ar, ar², ar³, ..., where a is called the first term and r is called the common ratio of the GP.",
            subSections: [
              {
                title: "8.3.1 General term of a G.P.",
                content: "The nᵗʰ term of a G.P. is given by aₙ = arⁿ⁻¹.",
                examples: [
                  "Find the 10th and nᵗʰ terms of the G.P. 5, 25, 125, ... Solution: a = 5, r = 5. So a₁₀ = 5(5)⁹ = 5¹⁰ and aₙ = 5(5)ⁿ⁻¹ = 5ⁿ.",
                  "Which term of the G.P. 2, 8, 32, ... is 131072? Solution: Let 131072 be the nᵗʰ term. Then 2(4)ⁿ⁻¹ = 131072 ⇒ 4ⁿ⁻¹ = 65536 = 4⁸ ⇒ n-1 = 8 ⇒ n = 9.",
                  "In a G.P., the 3rd term is 24 and the 6th term is 192. Find the 10th term. Solution: ar² = 24 and ar⁵ = 192. Dividing gives r³ = 8 ⇒ r = 2. Then a = 6. So a₁₀ = 6(2)⁹ = 3072.",
                ],
              },
              {
                title: "8.3.2 Sum to n terms of a G.P.",
                content:
                  "The sum Sₙ of first n terms of a G.P. is given by Sₙ = a(1-rⁿ)/(1-r) when r ≠ 1, and Sₙ = na when r = 1. Equivalently, Sₙ = a(rⁿ-1)/(r-1).",
                examples: [
                  "Find the sum of first n terms and the sum of first 5 terms of the geometric series 1 + 2/3 + 4/9 + ... Solution: a = 1, r = 2/3. So Sₙ = 3[1 - (2/3)ⁿ] and S₅ = 3[1 - (2/3)⁵] = 211/81.",
                  "How many terms of the G.P. 3, 3/2, 3/4, ... are needed to give the sum 3069/512? Solution: Using Sₙ = a(1-rⁿ)/(1-r) with a = 3, r = 1/2, we get 6(1 - (1/2)ⁿ) = 3069/512 ⇒ 1 - (1/2)ⁿ = 3069/3072 ⇒ (1/2)ⁿ = 3/3072 = 1/1024 ⇒ 2ⁿ = 1024 = 2¹⁰ ⇒ n = 10.",
                  "The sum of first three terms of a G.P. is 13/12 and their product is -1. Find the common ratio and the terms. Solution: Let the terms be a/r, a, ar. Then a³ = -1 ⇒ a = -1. Also -1/r -1 - r = 13/12 ⇒ 12r² + 25r + 12 = 0 ⇒ r = -3/4 or r = -4/3. The terms are -4/3, -1, -3/4 or -3/4, -1, -4/3.",
                  "Find the sum of the sequence 7, 77, 777, 7777, ... to n terms. Solution: Sₙ = 7/9[9+99+999+...] = 7/9[(10-1)+(10²-1)+...] = 7/9[10(10ⁿ-1)/9 - n] = 7[10(10ⁿ-1)/81 - n/9].",
                  "A person has 2 parents, 4 grandparents, 8 great grandparents, and so on. Find the number of his ancestors during the ten generations preceding his own. Solution: a = 2, r = 2, n = 10. S₁₀ = 2(2¹⁰-1) = 2046.",
                ],
              },
              {
                title: "8.3.3 Geometric Mean (G.M.)",
                content:
                  "The geometric mean of two positive numbers a and b is the number √(ab). Given any two positive numbers a and b, we can insert n numbers G₁, G₂, ..., Gₙ between them such that a, G₁, G₂, ..., Gₙ, b is a G.P. Then Gₖ = a(b/a)^{k/(n+1)}.",
                examples: [
                  "Insert three numbers between 1 and 256 so that the resulting sequence is a G.P. Solution: Let G₁, G₂, G₃ be three numbers. Then 256 = r⁴ ⇒ r = ±4. For r = 4, the numbers are 4, 16, 64. For r = -4, the numbers are -4, 16, -64.",
                ],
              },
            ],
          },
          {
            title: "8.4 Relationship Between A.M. and G.M.",
            content:
              "Let A and G be A.M. and G.M. of two given positive real numbers a and b, respectively. Then A = (a+b)/2 and G = √(ab). We have A - G = (√a - √b)²/2 ≥ 0, so A ≥ G.",
            examples: [
              "If A.M. and G.M. of two positive numbers a and b are 10 and 8, respectively, find the numbers. Solution: (a+b)/2 = 10 ⇒ a+b = 20, √(ab) = 8 ⇒ ab = 64. Then (a-b)² = (a+b)² - 4ab = 400 - 256 = 144 ⇒ a-b = ±12. Solving with a+b = 20 gives a = 16, b = 4 or a = 4, b = 16.",
            ],
          },
          {
            title: "Miscellaneous Examples",
            content: "Advanced applications of sequences and series.",
            examples: [
              "If a, b, c, d and p are different real numbers such that (a²+b²+c²)p² - 2(ab+bc+cd)p + (b²+c²+d²) ≤ 0, then show that a, b, c and d are in GP. Solution: The expression can be written as (ap-b)² + (bp-c)² + (cp-d)² ≥ 0. Since sum of squares is non-negative and given expression ≤ 0, we have (ap-b)² + (bp-c)² + (cp-d)² = 0 ⇒ ap-b = 0, bp-c = 0, cp-d = 0 ⇒ b/a = c/b = d/c = p. Hence a, b, c, d are in GP.",
            ],
          },
        ],
      },
    },
    {
      id: 9,
      title: "Straight Lines",
      content: {
        introduction:
          "We are familiar with two-dimensional coordinate geometry from earlier classes. Mainly, it is a combination of algebra and geometry. A systematic study of geometry by the use of algebra was first carried out by celebrated French philosopher and mathematician René Descartes, in his book La Géométry, published in 1637. This book introduced the notion of the equation of a curve and related analytical methods into the study of geometry. The resulting combination of analysis and geometry is referred now as analytical geometry. In this Chapter, we shall continue the study of coordinate geometry to study properties of the simplest geometric figure - straight line. Despite its simplicity, the line is a vital concept of geometry and enters into our daily experiences in numerous interesting and useful ways. Main focus is on representing the line algebraically, for which slope is most essential.",

        sections: [
          {
            title: "9.1 Slope of a Line",
            content:
              "A line in a coordinate plane forms two angles with the x-axis, which are supplementary. The angle (say) θ made by the line l with positive direction of x-axis and measured anti clockwise is called the inclination of the line. Obviously 0° ≤ θ ≤ 180°. If θ is the inclination of a line l, then tan θ is called the slope or gradient of the line l. The slope of a line whose inclination is 90° is not defined. The slope of a line is denoted by m. Thus, m = tan θ, θ ≠ 90°.",
            subSections: [
              {
                title: "9.1.1 Slope of a line when coordinates of any two points on the line are given",
                content:
                  "Let P(x₁, y₁) and Q(x₂, y₂) be two points on non-vertical line l whose inclination is θ. The slope m of the line through the points (x₁, y₁) and (x₂, y₂) is given by m = (y₂ - y₁)/(x₂ - x₁).",
                examples: [
                  "Find the slope of the line passing through the points (3, -2) and (-1, 4). Solution: m = (4 - (-2))/(-1 - 3) = 6/(-4) = -3/2.",
                  "Find the slope of the line passing through the points (3, -2) and (7, -2). Solution: m = (-2 - (-2))/(7 - 3) = 0/4 = 0.",
                  "Find the slope of the line passing through the points (3, -2) and (3, 4). Solution: m = (4 - (-2))/(3 - 3) = 6/0, which is not defined.",
                ],
              },
              {
                title: "9.1.2 Conditions for parallelism and perpendicularity of lines in terms of their slopes",
                content:
                  "Two non-vertical lines are parallel if and only if their slopes are equal. Two non-vertical lines are perpendicular to each other if and only if their slopes are negative reciprocals of each other, i.e., m₁m₂ = -1.",
              },
              {
                title: "9.1.3 Angle between two lines",
                content:
                  "If θ is the acute angle between two lines with slopes m₁ and m₂, then tan θ = |(m₂ - m₁)/(1 + m₁m₂)|, provided 1 + m₁m₂ ≠ 0.",
                examples: [
                  "If the angle between two lines is π/4 and slope of one of the lines is 1/2, find the slope of the other line. Solution: tan(π/4) = |(m - 1/2)/(1 + m/2)| = 1. This gives m = 3 or m = -1/3.",
                  "Line through the points (-2,6) and (4,8) is perpendicular to the line through the points (8,12) and (x,24). Find the value of x. Solution: m₁ = (8-6)/(4+2) = 1/3, m₂ = (24-12)/(x-8) = 12/(x-8). Since lines are perpendicular, (1/3)×(12/(x-8)) = -1 ⇒ x = 4.",
                ],
              },
            ],
          },
          {
            title: "9.2 Various Forms of the Equation of a Line",
            content:
              "For the equation of L, we wish to construct a statement or condition for the point P that is true, when P is on L, otherwise false. The statement is an algebraic equation involving the variables x and y.",
            subSections: [
              {
                title: "9.2.1 Horizontal and vertical lines",
                content:
                  "If a horizontal line L is at a distance a from the x-axis, then equation of the line L is either y = a or y = -a. Similarly, the equation of a vertical line at a distance b from the y-axis is either x = b or x = -b.",
                examples: [
                  "Find the equations of the lines parallel to axes and passing through (-2,3). Solution: The line parallel to x-axis is y = 3. The line parallel to y-axis is x = -2.",
                ],
              },
              {
                title: "9.2.2 Point-slope form",
                content:
                  "The equation of a line with slope m passing through the fixed point (x₀, y₀) is given by y - y₀ = m(x - x₀).",
                examples: [
                  "Find the equation of the line through (-2,3) with slope -4. Solution: y - 3 = -4(x + 2) ⇒ 4x + y + 5 = 0.",
                ],
              },
              {
                title: "9.2.3 Two-point form",
                content:
                  "The equation of the line passing through the points (x₁, y₁) and (x₂, y₂) is given by y - y₁ = [(y₂ - y₁)/(x₂ - x₁)](x - x₁).",
                examples: [
                  "Write the equation of the line through the points (1, -1) and (3, 5). Solution: y + 1 = (5+1)/(3-1)(x - 1) ⇒ y + 1 = 3(x - 1) ⇒ 3x - y - 4 = 0.",
                ],
              },
              {
                title: "9.2.4 Slope-intercept form",
                content:
                  "The equation of a line with slope m and y-intercept c is given by y = mx + c. If the line has slope m and x-intercept d, then its equation is y = m(x - d).",
                examples: [
                  "Write the equation of the lines for which tan θ = 1/2, where θ is the inclination and (i) y-intercept is -3/2 (ii) x-intercept is 4. Solution: (i) y = (1/2)x - 3/2 ⇒ 2y - x + 3 = 0. (ii) y = (1/2)(x - 4) ⇒ 2y - x + 4 = 0.",
                ],
              },
              {
                title: "9.2.5 Intercept form",
                content:
                  "The equation of a line making intercepts a and b on the x- and y-axes respectively is given by x/a + y/b = 1.",
                examples: [
                  "Find the equation of the line which makes intercepts -3 and 2 on the x- and y-axes respectively. Solution: x/(-3) + y/2 = 1 ⇒ 2x - 3y + 6 = 0.",
                ],
              },
            ],
          },
          {
            title: "9.3 Distance of a Point From a Line",
            content:
              "The distance of a point from a line is the length of the perpendicular drawn from the point to the line. The perpendicular distance d of a line Ax + By + C = 0 from a point (x₁, y₁) is given by d = |Ax₁ + By₁ + C|/√(A² + B²).",
            subSections: [
              {
                title: "9.3.1 Distance between two parallel lines",
                content:
                  "The distance d between two parallel lines y = mx + c₁ and y = mx + c₂ is given by d = |c₁ - c₂|/√(1 + m²). If lines are in general form Ax + By + C₁ = 0 and Ax + By + C₂ = 0, then d = |C₁ - C₂|/√(A² + B²).",
                examples: [
                  "Find the distance of the point (3, -5) from the line 3x - 4y - 26 = 0. Solution: d = |3(3) + (-4)(-5) - 26|/√(9+16) = |9+20-26|/5 = 3/5.",
                  "Find the distance between the parallel lines 3x - 4y + 7 = 0 and 3x - 4y + 5 = 0. Solution: d = |7 - 5|/√(9+16) = 2/5.",
                ],
              },
            ],
          },
          {
            title: "Miscellaneous Examples",
            content: "Advanced applications of straight lines.",
            examples: [
              "If the lines 2x + y - 3 = 0, 5x + ky - 3 = 0 and 3x - y - 2 = 0 are concurrent, find the value of k. Solution: Solving first and third lines gives intersection point (1,1). Substituting in second line: 5(1) + k(1) - 3 = 0 ⇒ k = -2.",
              "Find the distance of the line 4x - y = 0 from the point P(4,1) measured along the line making an angle of 135° with the positive x-axis. Solution: Equation of line with slope -1 through P is x + y - 5 = 0. Intersection with 4x - y = 0 gives Q(1,4). Distance PQ = √[(4-1)² + (1-4)²] = √18 = 3√2.",
              "Assuming that straight lines work as the plane mirror for a point, find the image of the point (1,2) in the line x - 3y + 4 = 0. Solution: Let Q(h,k) be the image. Midpoint lies on the line and PQ is perpendicular to the given line. Solving gives h = 6/5, k = 7/5.",
            ],
          },
        ],
      },
    },

    {
      id: 10,
      title: "Conic Sections",
      content: {
        introduction:
          "In the preceding Chapter, we have studied various forms of the equations of a line. In this Chapter, we shall study about some other curves, viz., circles, ellipses, parabolas and hyperbolas. The names parabola and hyperbola are given by Apollonius. These curves are in fact, known as conic sections or more commonly conics because they can be obtained as intersections of a plane with a double napped right circular cone. These curves have a very wide range of applications in fields such as planetary motion, design of telescopes and antennas, reflectors in flashlights and automobile headlights, etc.",

        sections: [
          {
            title: "10.1 Sections of a Cone",
            content:
              "Let l be a fixed vertical line and m be another line intersecting it at a fixed point V and inclined to it at an angle α. Suppose we rotate the line m around the line l in such a way that the angle α remains constant. Then the surface generated is a double-napped right circular hollow cone. The point V is called the vertex; the line l is the axis of the cone. The rotating line m is called a generator of the cone. The vertex separates the cone into two parts called nappes.",
            subSections: [
              {
                title: "10.1.1 Circle, ellipse, parabola and hyperbola",
                content:
                  "When the plane cuts the nappe (other than the vertex) of the cone, we have the following situations: (a) When β = 90°, the section is a circle. (b) When α < β < 90°, the section is an ellipse. (c) When β = α, the section is a parabola. (d) When 0 ≤ β < α, the plane cuts through both the nappes and the curve of intersection is a hyperbola.",
              },
              {
                title: "10.1.2 Degenerated conic sections",
                content:
                  "When the plane cuts at the vertex of the cone, we have the following cases: (a) When α < β ≤ 90°, the section is a point. (b) When β = α, the plane contains a generator of the cone and the section is a straight line (degenerated case of a parabola). (c) When 0 ≤ β < α, the section is a pair of intersecting straight lines (degenerated case of a hyperbola).",
              },
            ],
          },
          {
            title: "10.2 Circle",
            content:
              "A circle is the set of all points in a plane that are equidistant from a fixed point in the plane. The fixed point is called the centre of the circle and the distance from the centre to a point on the circle is called the radius of the circle. The equation of a circle with centre (h, k) and radius r is (x - h)² + (y - k)² = r².",
            examples: [
              "Find an equation of the circle with centre at (0,0) and radius r. Solution: x² + y² = r².",
              "Find the equation of the circle with centre (-3,2) and radius 4. Solution: (x + 3)² + (y - 2)² = 16.",
              "Find the centre and the radius of the circle x² + y² + 8x + 10y - 8 = 0. Solution: Completing squares, (x + 4)² + (y + 5)² = 49. So centre is (-4, -5) and radius is 7.",
              "Find the equation of the circle which passes through the points (2, -2) and (3,4) and whose centre lies on the line x + y = 2. Solution: Solving (2-h)²+(-2-k)² = r², (3-h)²+(4-k)² = r², and h+k=2 gives h=0.7, k=1.3, r²=12.58. So equation is (x-0.7)²+(y-1.3)²=12.58.",
            ],
          },
          {
            title: "10.3 Parabola",
            content:
              "A parabola is the set of all points in a plane that are equidistant from a fixed line and a fixed point (not on the line) in the plane. The fixed line is called the directrix of the parabola and the fixed point F is called the focus. A line through the focus and perpendicular to the directrix is called the axis of the parabola. The point of intersection of parabola with the axis is called the vertex of the parabola.",
            subSections: [
              {
                title: "10.3.1 Standard equations of parabola",
                content:
                  "The standard equations of parabolas with vertex at origin and axis along coordinate axes are: y² = 4ax (focus (a,0), directrix x = -a), y² = -4ax (focus (-a,0), directrix x = a), x² = 4ay (focus (0,a), directrix y = -a), x² = -4ay (focus (0,-a), directrix y = a).",
              },
              {
                title: "10.3.2 Latus rectum",
                content:
                  "Latus rectum of a parabola is a line segment perpendicular to the axis of the parabola, through the focus and whose end points lie on the parabola. The length of the latus rectum of the parabola y² = 4ax is 4a.",
              },
            ],
            examples: [
              "Find the coordinates of the focus, axis, the equation of the directrix and latus rectum of the parabola y² = 8x. Solution: Comparing with y² = 4ax, a = 2. Focus is (2,0), axis is x-axis, directrix is x = -2, latus rectum length = 4a = 8.",
              "Find the equation of the parabola with focus (2,0) and directrix x = -2. Solution: Since focus is on positive x-axis and directrix is x = -2, the parabola is of form y² = 4ax with a = 2. So equation is y² = 8x.",
              "Find the equation of the parabola with vertex at (0,0) and focus at (0,2). Solution: Since focus is on positive y-axis, equation is x² = 4ay with a = 2. So x² = 8y.",
              "Find the equation of the parabola which is symmetric about the y-axis, and passes through the point (2,-3). Solution: Since symmetric about y-axis and passes through (2,-3) in fourth quadrant, it opens downward with equation x² = -4ay. Substituting (2,-3) gives 4 = -4a(-3) ⇒ a = 1/3. So equation is x² = -4(1/3)y or 3x² = -4y.",
            ],
          },
          {
            title: "10.4 Ellipse",
            content:
              "An ellipse is the set of all points in a plane, the sum of whose distances from two fixed points in the plane is a constant. The two fixed points are called the foci of the ellipse. The mid point of the line segment joining the foci is called the centre of the ellipse. The line segment through the foci of the ellipse is called the major axis and the line segment through the centre and perpendicular to the major axis is called the minor axis. The end points of the major axis are called the vertices of the ellipse.",
            subSections: [
              {
                title: "10.4.1 Relationship between semi-major axis, semi-minor axis and the distance of the focus from the centre",
                content:
                  "If a is the length of semi-major axis, b is the length of semi-minor axis, and c is the distance from the centre to a focus, then c² = a² - b².",
              },
              {
                title: "10.4.2 Eccentricity",
                content:
                  "The eccentricity of an ellipse is the ratio of the distances from the centre of the ellipse to one of the foci and to one of the vertices of the ellipse. It is denoted by e, where e = c/a. Since c < a, we have 0 < e < 1.",
              },
              {
                title: "10.4.3 Standard equations of an ellipse",
                content:
                  "The standard equation of an ellipse with centre at origin and major axis along x-axis is x²/a² + y²/b² = 1, where a > b. The foci are at (±c, 0) and vertices at (±a, 0). The standard equation of an ellipse with centre at origin and major axis along y-axis is x²/b² + y²/a² = 1, where a > b. The foci are at (0, ±c) and vertices at (0, ±a).",
              },
              {
                title: "10.4.4 Latus rectum",
                content:
                  "Latus rectum of an ellipse is a line segment perpendicular to the major axis through any of the foci and whose end points lie on the ellipse. The length of the latus rectum is 2b²/a.",
              },
            ],
            examples: [
              "Find the coordinates of the foci, the vertices, the length of major axis, the minor axis, the eccentricity and the latus rectum of the ellipse x²/25 + y²/9 = 1. Solution: Here a = 5, b = 3, c = √(25-9) = 4. Foci: (±4,0), vertices: (±5,0), major axis length = 10, minor axis length = 6, eccentricity e = 4/5, latus rectum = 2(9)/5 = 18/5.",
              "Find the coordinates of the foci, the vertices, the lengths of major and minor axes and the eccentricity of the ellipse 9x² + 4y² = 36. Solution: Writing in standard form: x²/4 + y²/9 = 1. Here a = 3, b = 2, c = √(9-4) = √5. Since major axis is along y-axis, foci: (0, ±√5), vertices: (0, ±3), major axis length = 6, minor axis length = 4, eccentricity e = √5/3.",
              "Find the equation of the ellipse whose vertices are (±13,0) and foci are (±5,0). Solution: Here a = 13, c = 5. Then b² = a² - c² = 169 - 25 = 144, so b = 12. Equation: x²/169 + y²/144 = 1.",
              "Find the equation of the ellipse, with major axis along the x-axis and passing through the points (4,3) and (-1,4). Solution: Using x²/a² + y²/b² = 1 and substituting the points gives 16/a² + 9/b² = 1 and 1/a² + 16/b² = 1. Solving gives a² = 247/7, b² = 247/15. So equation: x²/(247/7) + y²/(247/15) = 1.",
            ],
          },
          {
            title: "10.5 Hyperbola",
            content:
              "A hyperbola is the set of all points in a plane, the difference of whose distances from two fixed points in the plane is a constant. The two fixed points are called the foci of the hyperbola. The mid-point of the line segment joining the foci is called the centre of the hyperbola. The line through the foci is called the transverse axis and the line through the centre and perpendicular to the transverse axis is called the conjugate axis. The points at which the hyperbola intersects the transverse axis are called the vertices of the hyperbola.",
            subSections: [
              {
                title: "10.5.1 Eccentricity",
                content:
                  "The eccentricity of a hyperbola is the ratio e = c/a, where c is the distance from the centre to a focus and a is the distance from the centre to a vertex. Since c > a, we have e > 1.",
              },
              {
                title: "10.5.2 Standard equation of Hyperbola",
                content:
                  "The standard equation of a hyperbola with centre at origin and transverse axis along x-axis is x²/a² - y²/b² = 1, where b² = c² - a². The foci are at (±c, 0) and vertices at (±a, 0). The standard equation of a hyperbola with centre at origin and transverse axis along y-axis is y²/a² - x²/b² = 1. The foci are at (0, ±c) and vertices at (0, ±a).",
              },
              {
                title: "10.5.3 Latus rectum",
                content:
                  "Latus rectum of hyperbola is a line segment perpendicular to the transverse axis through any of the foci and whose end points lie on the hyperbola. The length of the latus rectum is 2b²/a.",
              },
            ],
            examples: [
              "Find the coordinates of the foci and the vertices, the eccentricity, the length of the latus rectum of the hyperbola x²/9 - y²/16 = 1. Solution: Here a = 3, b = 4, c = √(9+16) = 5. Foci: (±5,0), vertices: (±3,0), eccentricity e = 5/3, latus rectum = 2(16)/3 = 32/3.",
              "Find the coordinates of the foci and the vertices, the eccentricity, the length of the latus rectum of the hyperbola y² - 16x² = 16. Solution: Dividing by 16: y²/16 - x²/1 = 1. Here a = 4, b = 1, c = √(16+1) = √17. Foci: (0, ±√17), vertices: (0, ±4), eccentricity e = √17/4, latus rectum = 2(1)/4 = 1/2.",
              "Find the equation of the hyperbola with foci (0,±3) and vertices (0,±√11/2). Solution: Since foci are on y-axis, equation is y²/a² - x²/b² = 1. Here a = √11/2, c = 3. Then b² = c² - a² = 9 - 11/4 = 25/4. So equation: y²/(11/4) - x²/(25/4) = 1 or 4y²/11 - 4x²/25 = 1.",
              "Find the equation of the hyperbola where foci are (0,±12) and the length of the latus rectum is 36. Solution: Since foci are on y-axis, c = 12. Latus rectum = 2b²/a = 36 ⇒ b² = 18a. Also c² = a² + b² ⇒ 144 = a² + 18a ⇒ a² + 18a - 144 = 0 ⇒ a = 6 (taking positive). Then b² = 108. Equation: y²/36 - x²/108 = 1.",
            ],
          },
          {
            title: "Miscellaneous Examples",
            content: "Applications of conic sections in real-world problems.",
            examples: [
              "The focus of a parabolic mirror is at a distance of 5 cm from its vertex. If the mirror is 45 cm deep, find the distance AB. Solution: Taking vertex at origin and axis along positive x-axis, equation is y² = 20x. When x = 45, y² = 900 ⇒ y = ±30. So AB = 60 cm.",
              "A beam is supported at its ends by supports which are 12 metres apart. There is a deflection of 3 cm at the centre and the deflected beam is in the shape of a parabola. How far from the centre is the deflection 1 cm? Solution: Taking vertex at lowest point, equation x² = 4ay. Passing through (6, 3/100) gives a = 300. For deflection 1 cm, y = 2/100, then x² = 4×300×2/100 = 24 ⇒ x = 2√6 metres.",
              "A rod AB of length 15 cm rests in between two coordinate axes such that end A lies on x-axis and end B lies on y-axis. A point P(x,y) on the rod is such that AP = 6 cm. Show that the locus of P is an ellipse. Solution: From geometry, cos θ = x/9, sin θ = y/6. Since cos²θ + sin²θ = 1, we get x²/81 + y²/36 = 1, which is an ellipse.",
            ],
          },
        ],
      },
    },
    {
      id: 11,
      title: "Introduction to Three Dimensional Geometry",
      content: {
        introduction:
          "You may recall that to locate the position of a point in a plane, we need two intersecting mutually perpendicular lines in the plane. These lines are called the coordinate axes and the two numbers are called the coordinates of the point with respect to the axes. In actual life, we do not have to deal with points lying in a plane only. For example, consider the position of a ball thrown in space at different points of time or the position of an aeroplane as it flies from one place to another at different times during its flight. Similarly, if we were to locate the position of the lowest tip of an electric bulb hanging from the ceiling of a room or the position of the central tip of the ceiling fan in a room, we will not only require the perpendicular distances of the point to be located from two perpendicular walls of the room but also the height of the point from the floor of the room. Therefore, we need not only two but three numbers representing the perpendicular distances of the point from three mutually perpendicular planes. So, a point in space has three coordinates. In this Chapter, we shall study the basic concepts of geometry in three dimensional space.",

        sections: [
          {
            title: "11.1 Coordinate Axes and Coordinate Planes in Three Dimensional Space",
            content:
              "Consider three planes intersecting at a point O such that these three planes are mutually perpendicular to each other. These three planes intersect along the lines X'OX, Y'OY and Z'OZ, called the x, y and z-axes, respectively. These lines constitute the rectangular coordinate system. The planes XOY, YOZ and ZOX, called respectively the XY-plane, YZ-plane and the ZX-plane, are known as the three coordinate planes. The point O is called the origin of the coordinate system. The three coordinate planes divide the space into eight parts known as octants.",
          },
          {
            title: "11.2 Coordinates of a Point in Space",
            content:
              "Given a point P in space, we drop a perpendicular PM on the XY-plane with M as the foot of this perpendicular. Then, from the point M, we draw a perpendicular ML to the x-axis, meeting it at L. Let OL be x, LM be y and MP be z. Then x, y and z are called the x, y and z coordinates, respectively, of the point P in the space. Thus, to each point P in the space there corresponds an ordered triplet (x, y, z) of real numbers. Conversely, given any triplet (x, y, z), we can locate the point P in space. The coordinates of the origin O are (0,0,0). The coordinates of any point on the x-axis will be as (x,0,0) and the coordinates of any point in the YZ-plane will be as (0,y,z).",
            examples: [
              "In Fig 11.3, if P is (2,4,5), find the coordinates of F. Solution: For the point F, the distance measured along OY is zero. Therefore, the coordinates of F are (2,0,5).",
              "Find the octant in which the points (-3,1,2) and (-3,1,-2) lie. Solution: From the table of signs, the point (-3,1,2) lies in second octant and the point (-3,1,-2) lies in octant VI.",
            ],
          },
          {
            title: "11.3 Distance between Two Points",
            content:
              "The distance between two points P(x₁, y₁, z₁) and Q(x₂, y₂, z₂) is given by PQ = √[(x₂ - x₁)² + (y₂ - y₁)² + (z₂ - z₁)²]. In particular, the distance between the origin O(0,0,0) and any point Q(x₂, y₂, z₂) is OQ = √(x₂² + y₂² + z₂²).",
            examples: [
              "Find the distance between the points P(1, -3, 4) and Q(-4, 1, 2). Solution: PQ = √[(-4-1)² + (1+3)² + (2-4)²] = √(25 + 16 + 4) = √45 = 3√5.",
              "Show that the points P(-2,3,5), Q(1,2,3) and R(7,0,-1) are collinear. Solution: PQ = √14, QR = √56 = 2√14, PR = √126 = 3√14. Since PQ + QR = PR, the points are collinear.",
              "Are the points A(3,6,9), B(10,20,30) and C(25,-41,5) the vertices of a right angled triangle? Solution: AB² = 686, BC² = 4571, CA² = 2709. Since CA² + AB² ≠ BC², the triangle is not right angled.",
              "Find the equation of set of points P such that PA² + PB² = 2k², where A and B are the points (3,4,5) and (-1,3,-7) respectively. Solution: Let P(x,y,z). Then (x-3)²+(y-4)²+(z-5)² + (x+1)²+(y-3)²+(z+7)² = 2k². Simplifying gives 2x² + 2y² + 2z² - 4x - 14y + 4z = 2k² - 109.",
            ],
          },
          {
            title: "Miscellaneous Examples",
            content: "Advanced applications of three dimensional geometry.",
            examples: [
              "Show that the points A(1,2,3), B(-1,-2,-1), C(2,3,2) and D(4,7,6) are the vertices of a parallelogram ABCD, but it is not a rectangle. Solution: AB = 6, BC = √43, CD = 6, DA = √43. Since AB = CD and BC = AD, ABCD is a parallelogram. AC = √3, BD = √155. Since AC ≠ BD, it is not a rectangle.",
              "Find the equation of the set of the points P such that its distances from the points A(3,4,-5) and B(-2,1,4) are equal. Solution: Let P(x,y,z). Then PA = PB gives √[(x-3)²+(y-4)²+(z+5)²] = √[(x+2)²+(y-1)²+(z-4)²]. Squaring and simplifying gives 10x + 6y - 18z - 29 = 0.",
              "The centroid of a triangle ABC is at the point (1,1,1). If the coordinates of A and B are (3,-5,7) and (-1,7,-6) respectively, find the coordinates of the point C. Solution: Using centroid formula, (x₁+x₂+x₃)/3 = 1, (y₁+y₂+y₃)/3 = 1, (z₁+z₂+z₃)/3 = 1. Solving gives C(1,1,2).",
            ],
          },
        ],
      },
    },
    {
      id: 12,
      title: "Limits and Derivatives",
      content: {
        introduction:
          "This chapter is an introduction to Calculus. Calculus is that branch of mathematics which mainly deals with the study of change in the value of a function as the points in the domain change. First, we give an intuitive idea of derivative (without actually defining it). Then we give a naive definition of limit and study some algebra of limits. Then we come back to a definition of derivative and study some algebra of derivatives. We also obtain derivatives of certain standard functions.",

        sections: [
          {
            title: "12.1 Intuitive Idea of Derivatives",
            content:
              "Physical experiments have confirmed that a body dropped from a tall cliff covers a distance of 4.9t² metres in t seconds. The objective is to find the velocity of the body at time t = 2 seconds from this data. By computing average velocities for various intervals of time ending at t = 2 seconds, we observe that as the time intervals become smaller, the average velocities approach a common limit. This limit is the instantaneous velocity at t = 2 seconds. In other words, the instantaneous velocity v(t) of a body at time t = 2 is equal to the slope of the tangent of the curve s = 4.9t² at t = 2.",
          },
          {
            title: "12.2 Limits",
            content:
              "The concept of limit is fundamental to calculus. For a function f(x), as x approaches a, if f(x) approaches a value l, then l is called the limit of f(x) as x approaches a, written as lim_{x→a} f(x) = l. There are two ways x can approach a: from the left (x < a) and from the right (x > a). The left hand limit is denoted by lim_{x→a⁻} f(x) and the right hand limit by lim_{x→a⁺} f(x). If both these limits exist and are equal, then the limit of the function exists at that point.",
            examples: [
              "For f(x) = x², as x approaches 0, f(x) approaches 0. So lim_{x→0} f(x) = 0.",
              "For f(x) = |x|, x ≠ 0, as x approaches 0, f(x) approaches 0. So lim_{x→0} f(x) = 0.",
              "For f(x) = (x² - 4)/(x - 2), x ≠ 2, as x approaches 2, f(x) approaches 4. So lim_{x→2} f(x) = 4.",
              "Consider f(x) = { 1, if x ≤ 0; 2, if x > 0 }. Here lim_{x→0⁻} f(x) = 1 and lim_{x→0⁺} f(x) = 2. Since they are different, lim_{x→0} f(x) does not exist.",
              "For f(x) = x + 10, as x approaches 5 from either side, f(x) approaches 15. So lim_{x→5} f(x) = 15.",
              "For f(x) = x³, as x approaches 1 from either side, f(x) approaches 1. So lim_{x→1} f(x) = 1.",
            ],
            subSections: [
              {
                title: "12.2.1 Algebra of limits",
                content:
                  "If lim_{x→a} f(x) and lim_{x→a} g(x) exist, then: (i) lim_{x→a} [f(x) + g(x)] = lim_{x→a} f(x) + lim_{x→a} g(x). (ii) lim_{x→a} [f(x) - g(x)] = lim_{x→a} f(x) - lim_{x→a} g(x). (iii) lim_{x→a} [f(x)·g(x)] = lim_{x→a} f(x) · lim_{x→a} g(x). (iv) lim_{x→a} [f(x)/g(x)] = [lim_{x→a} f(x)] / [lim_{x→a} g(x)], provided lim_{x→a} g(x) ≠ 0.",
              },
              {
                title: "12.2.2 Limits of polynomials and rational functions",
                content:
                  "For a polynomial function f(x) = a₀ + a₁x + a₂x² + ... + aₙxⁿ, lim_{x→a} f(x) = f(a). For a rational function f(x) = g(x)/h(x), lim_{x→a} f(x) = g(a)/h(a) provided h(a) ≠ 0. If h(a) = 0, the limit may or may not exist.",
                examples: [
                  "Find lim_{x→1} [x³ - x² + 1]. Solution: = 1³ - 1² + 1 = 1.",
                  "Find lim_{x→3} [x(x + 1)]. Solution: = 3(3 + 1) = 12.",
                  "Find lim_{x→2} (x² - 4)/(x³ - 4x² + 4x). Solution: = lim_{x→2} (x+2)(x-2)/[x(x-2)²] = lim_{x→2} (x+2)/[x(x-2)] which is not defined as denominator → 0.",
                  "Find lim_{x→1} [(x-2)/(x²-x) - 1/(x³-3x²+2x)]. Solution: Simplifying to a single fraction gives (x²-4x+3)/[x(x-1)(x-2)] = (x-3)/[x(x-2)]. Then limit as x→1 gives (1-3)/[1(1-2)] = 2.",
                ],
              },
              {
                title: "Theorem",
                content:
                  "For any positive integer n, lim_{x→a} (xⁿ - aⁿ)/(x - a) = n aⁿ⁻¹. This result is true even if n is any rational number and a is positive.",
                examples: [
                  "Evaluate lim_{x→1} (x¹⁵ - 1)/(x¹⁰ - 1). Solution: = [lim (x¹⁵-1)/(x-1)] ÷ [lim (x¹⁰-1)/(x-1)] = 15(1)¹⁴ ÷ 10(1)⁹ = 15/10 = 3/2.",
                  "Evaluate lim_{x→0} (√(1+x) - 1)/x. Solution: Put y = 1+x, then as x→0, y→1. So limit = lim_{y→1} (y¹ᐟ² - 1¹ᐟ²)/(y-1) = (1/2)(1)⁻¹ᐟ² = 1/2.",
                ],
              },
            ],
          },
          {
            title: "12.3 Limits of Trigonometric Functions",
            content:
              "Two important limits: (i) lim_{x→0} sin x/x = 1. (ii) lim_{x→0} (1 - cos x)/x = 0. These are proved using the Sandwich Theorem and geometric considerations.",
            examples: [
              "Evaluate lim_{x→0} sin 4x / sin 2x. Solution: = lim [ (sin 4x)/(4x) × (2x)/(sin 2x) × 2 ] = 2 × 1 × 1 = 2.",
              "Evaluate lim_{x→0} tan x / x. Solution: = lim (sin x/x) × (1/cos x) = 1 × 1 = 1.",
            ],
          },
          {
            title: "12.4 Derivatives",
            content:
              "The derivative of a function f at a point a is defined as f'(a) = lim_{h→0} [f(a+h) - f(a)]/h, provided this limit exists. Geometrically, the derivative represents the slope of the tangent to the curve y = f(x) at the point (a, f(a)). The derivative of f at x is defined as f'(x) = lim_{h→0} [f(x+h) - f(x)]/h, wherever the limit exists.",
            examples: [
              "Find the derivative of f(x) = 3x at x = 2. Solution: f'(2) = lim_{h→0} [3(2+h) - 3(2)]/h = lim_{h→0} 3h/h = 3.",
              "Find the derivative of f(x) = 2x² + 3x - 5 at x = -1. Solution: f'(-1) = lim_{h→0} [2(-1+h)²+3(-1+h)-5 - (2-3-5)]/h = lim_{h→0} (2h² - h)/h = lim_{h→0} (2h - 1) = -1.",
              "Find the derivative of sin x at x = 0. Solution: f'(0) = lim_{h→0} sin(0+h) - sin 0 / h = lim_{h→0} sin h/h = 1.",
              "Find the derivative of f(x) = 10x. Solution: f'(x) = lim_{h→0} [10(x+h) - 10x]/h = lim_{h→0} 10h/h = 10.",
              "Find the derivative of f(x) = x². Solution: f'(x) = lim_{h→0} [(x+h)² - x²]/h = lim_{h→0} (2xh + h²)/h = lim_{h→0} (2x + h) = 2x.",
              "Find the derivative of f(x) = 1/x. Solution: f'(x) = lim_{h→0} [1/(x+h) - 1/x]/h = lim_{h→0} [-h/(x(x+h))]/h = lim_{h→0} -1/[x(x+h)] = -1/x².",
            ],
            subSections: [
              {
                title: "12.4.1 Algebra of derivative of functions",
                content:
                  "If f and g are two functions whose derivatives exist, then: (i) (f ± g)' = f' ± g'. (ii) (fg)' = f'g + fg' (Product rule or Leibnitz rule). (iii) (f/g)' = (f'g - fg')/g², wherever g ≠ 0 (Quotient rule).",
              },
              {
                title: "Theorem",
                content: "Derivative of f(x) = xⁿ is nxⁿ⁻¹ for any positive integer n. This result is true for all real powers.",
              },
              {
                title: "12.4.2 Derivative of polynomials and trigonometric functions",
                content:
                  "For a polynomial f(x) = aₙxⁿ + aₙ₋₁xⁿ⁻¹ + ... + a₁x + a₀, the derivative is f'(x) = n aₙxⁿ⁻¹ + (n-1)aₙ₋₁xⁿ⁻² + ... + 2a₂x + a₁. Standard derivatives: d/dx(sin x) = cos x, d/dx(cos x) = -sin x.",
                examples: [
                  "Compute the derivative of 6x¹⁰⁰ - x⁵⁵ + x. Solution: = 600x⁹⁹ - 55x⁵⁴ + 1.",
                  "Find the derivative of f(x) = 1 + x + x² + ... + x⁵⁰ at x = 1. Solution: f'(x) = 1 + 2x + 3x² + ... + 50x⁴⁹. At x = 1, f'(1) = 1 + 2 + 3 + ... + 50 = 1275.",
                  "Find the derivative of f(x) = (x+1)/x. Solution: Using quotient rule with u = x+1, v = x, u' = 1, v' = 1, f'(x) = (1·x - (x+1)·1)/x² = -1/x².",
                  "Compute the derivative of sin x. Solution: d/dx(sin x) = lim_{h→0} [sin(x+h) - sin x]/h = lim_{h→0} [2 cos((2x+h)/2) sin(h/2)]/h = cos x.",
                  "Compute the derivative of tan x. Solution: d/dx(tan x) = lim_{h→0} [tan(x+h) - tan x]/h = sec²x.",
                  "Compute the derivative of sin² x. Solution: Using product rule, d/dx(sin x·sin x) = cos x·sin x + sin x·cos x = 2 sin x cos x = sin 2x.",
                ],
              },
            ],
          },
          {
            title: "Miscellaneous Examples",
            content: "Advanced applications of derivatives from first principles.",
            examples: [
              "Find the derivative of f(x) = (2x+3)/(x-2) from first principle. Solution: f'(x) = lim_{h→0} [f(x+h)-f(x)]/h. After simplification, f'(x) = -7/(x-2)².",
              "Find the derivative of f(x) = x + 1/x from first principle. Solution: f'(x) = lim_{h→0} [x+h + 1/(x+h) - x - 1/x]/h = 1 - 1/x².",
              "Find the derivative of f(x) = sin x + cos x from first principle. Solution: f'(x) = cos x - sin x.",
              "Find the derivative of f(x) = sin x/x from first principle. Solution: f'(x) = (x cos x - sin x)/x².",
              "Compute derivative of f(x) = sin 2x. Solution: d/dx(sin 2x) = 2 cos 2x.",
              "Compute derivative of g(x) = cot x. Solution: Using quotient rule on cos x/sin x gives -cosec² x. Alternatively, using cot x = 1/tan x gives the same result.",
              "Find the derivative of h(x) = (x⁵ - cos x)/sin x. Solution: Using quotient rule, h'(x) = [(5x⁴ + sin x) sin x - (x⁵ - cos x) cos x]/sin² x.",
            ],
          },
        ],
      },
    },
{
      id: 13,
      title: "Statistics",
      content: {
        introduction:
          "We know that statistics deals with data collected for specific purposes. We can make decisions about the data by analysing and interpreting it. In earlier classes, we have studied methods of representing data graphically and in tabular form. This representation reveals certain salient features or characteristics of the data. We have also studied the methods of finding a representative value for the given data. This value is called the measure of central tendency. Recall mean (arithmetic mean), median and mode are three measures of central tendency. A measure of central tendency gives us a rough idea where data points are centred. But, in order to make better interpretation from the data, we should also have an idea how the data are scattered or how much they are bunched around a measure of central tendency. Consider the runs scored by two batsmen in their last ten matches. The mean and median of both are same (53), but the variability in scores is different. Thus, measures of central tendency are not sufficient to give complete information about data. Variability is another factor which is required to be studied. This single number describing variability is called a 'measure of dispersion'.",

        sections: [
          {
            title: "13.1 Measures of Dispersion",
            content:
              "The dispersion or scatter in a data is measured on the basis of the observations and the types of the measure of central tendency used. There are following measures of dispersion: (i) Range, (ii) Quartile deviation, (iii) Mean deviation, (iv) Standard deviation.",
          },
          {
            title: "13.2 Range",
            content:
              "Range of a series = Maximum value - Minimum value. The range of data gives us a rough idea of variability or scatter but does not tell about the dispersion of the data from a measure of central tendency.",
            examples: [
              "For batsman A with scores 30, 91, 0, 64, 42, 80, 30, 5, 117, 71, Range = 117 - 0 = 117.",
              "For batsman B with scores 53, 46, 48, 50, 53, 53, 58, 60, 57, 52, Range = 60 - 46 = 14.",
            ],
          },
          {
            title: "13.3 Mean Deviation",
            content:
              "Mean deviation about a central value 'a' is the mean of the absolute values of the deviations of the observations from 'a'. M.D.(a) = (Sum of absolute values of deviations from a)/(Number of observations). Mean deviation from mean and median are commonly used.",
            subSections: [
              {
                title: "13.3.1 Mean deviation for ungrouped data",
                content:
                  "For n observations x₁, x₂, ..., xₙ, M.D.(x̄) = (1/n)∑|xᵢ - x̄| and M.D.(M) = (1/n)∑|xᵢ - M|, where M is the median.",
                examples: [
                  "Find the mean deviation about the mean for the data: 6, 7, 10, 12, 13, 4, 8, 12. Solution: x̄ = 9. Absolute deviations: 3,2,1,3,4,5,1,3. Sum = 22. M.D. = 22/8 = 2.75.",
                  "Find the mean deviation about the median for the data: 3, 9, 5, 3, 12, 10, 18, 4, 7, 19, 21. Solution: Arranging: 3,3,4,5,7,9,10,12,18,19,21. Median = 9. Absolute deviations: 6,6,5,4,2,0,1,3,9,10,12. Sum = 58. M.D. = 58/11 = 5.27.",
                ],
              },
              {
                title: "13.3.2 Mean deviation for grouped data",
                content:
                  "For discrete frequency distribution: M.D.(x̄) = (1/N)∑fᵢ|xᵢ - x̄| and M.D.(M) = (1/N)∑fᵢ|xᵢ - M|, where N = ∑fᵢ. For continuous frequency distribution, we use mid-points of classes.",
                examples: [
                  "Find mean deviation about the mean for the data: xᵢ: 2,5,6,8,10,12 with frequencies: 2,8,10,7,8,5. Solution: N=40, ∑fᵢxᵢ=300, x̄=7.5. ∑fᵢ|xᵢ-x̄| = 92. M.D. = 92/40 = 2.3.",
                  "Find mean deviation about the median for the data: xᵢ: 3,6,9,12,13,15,21,22 with frequencies: 3,4,5,2,4,5,4,3. Solution: N=30, median class has cumulative frequency 18, median = 13. ∑fᵢ|xᵢ-M| = 149. M.D. = 149/30 = 4.97.",
                  "Find mean deviation about the mean for the continuous distribution: Classes: 10-20,20-30,30-40,40-50,50-60,60-70,70-80 with frequencies: 2,3,8,14,8,3,2. Solution: Using mid-points, x̄ = 45, ∑fᵢ|xᵢ-x̄| = 400, M.D. = 400/40 = 10.",
                  "Calculate mean deviation about median for the data: Classes: 0-10,10-20,20-30,30-40,40-50,50-60 with frequencies: 6,7,15,16,4,2. Solution: N=50, median class 20-30, median = 28, ∑fᵢ|xᵢ-M| = 508, M.D. = 508/50 = 10.16.",
                ],
              },
              {
                title: "13.3.3 Limitations of mean deviation",
                content:
                  "In a series with high variability, median may not be representative. The sum of deviations from mean (ignoring signs) is more than from median, so mean deviation about mean is not very scientific. Also, being based on absolute values, it cannot be subjected to further algebraic treatment.",
              },
            ],
          },
          {
            title: "13.4 Variance and Standard Deviation",
            content:
              "To overcome the sign problem, we take squares of deviations. The mean of squares of deviations from mean is called variance and is denoted by σ². The positive square root of variance is called standard deviation (σ). For n observations x₁, x₂, ..., xₙ, σ² = (1/n)∑(xᵢ - x̄)² and σ = √[(1/n)∑(xᵢ - x̄)²].",
            subSections: [
              {
                title: "13.4.1 Standard deviation of a discrete frequency distribution",
                content:
                  "For a discrete frequency distribution, σ² = (1/N)∑fᵢ(xᵢ - x̄)² and σ = √[(1/N)∑fᵢ(xᵢ - x̄)²].",
                examples: [
                  "Find the variance of the data: 6,8,10,12,14,16,18,20,22,24. Solution: Using step-deviation method with assumed mean 14, x̄ = 15, ∑(xᵢ-x̄)² = 330, variance = 33, σ = √33 = 5.74.",
                  "Find variance and standard deviation for: xᵢ: 4,8,11,17,20,24,32 with frequencies: 3,5,9,5,4,3,1. Solution: N=30, x̄=14, ∑fᵢ(xᵢ-x̄)²=1374, variance = 1374/30 = 45.8, σ = √45.8 = 6.77.",
                ],
              },
              {
                title: "13.4.2 Standard deviation of a continuous frequency distribution",
                content:
                  "Replace each class by its mid-point and use the formula for discrete distribution. Alternative formula: σ = (1/N)√[N∑fᵢxᵢ² - (∑fᵢxᵢ)²]. For shortcut method with step-deviation: σ = (h/N)√[N∑fᵢyᵢ² - (∑fᵢyᵢ)²] where yᵢ = (xᵢ - A)/h.",
                examples: [
                  "Calculate mean, variance and standard deviation for the distribution: Classes: 30-40,40-50,50-60,60-70,70-80,80-90,90-100 with frequencies: 3,7,12,15,8,3,2. Solution: x̄ = 62, ∑fᵢ(xᵢ-x̄)² = 10050, variance = 10050/50 = 201, σ = √201 = 14.18.",
                  "Find standard deviation for the data: xᵢ: 3,8,13,18,23 with frequencies: 7,10,15,10,6. Solution: Using formula σ = (1/N)√[N∑fᵢxᵢ² - (∑fᵢxᵢ)²] with N=48, ∑fᵢxᵢ=614, ∑fᵢxᵢ²=9652, we get σ = (1/48)√(48×9652 - 614²) = 6.12.",
                ],
              },
            ],
          },
          {
            title: "Miscellaneous Examples",
            content: "Applications of variance and standard deviation.",
            examples: [
              "The variance of 20 observations is 5. If each observation is multiplied by 2, find the new variance. Solution: New variance = k² × original variance = 4 × 5 = 20.",
              "The mean of 5 observations is 4.4 and variance is 8.24. If three observations are 1, 2 and 6, find the other two. Solution: Let the others be x and y. From mean, x + y = 13. From variance, x² + y² = 97. Solving gives x = 4, y = 9 or x = 9, y = 4.",
              "If each observation is increased by a constant a, show that variance remains unchanged. Solution: New mean = old mean + a, deviations remain same, so variance unchanged.",
              "The mean and standard deviation of 100 observations were calculated as 40 and 5.1, but one observation 50 was taken instead of 40. Find correct mean and standard deviation. Solution: Correct sum = 4000 - 50 + 40 = 3990, correct mean = 39.9. Correct sum of squares = 162601 - 2500 + 1600 = 161701, correct variance = (161701/100) - (39.9)² = 25, correct σ = 5.",
            ],
          },
        ],
      },
    },
    {
      id: 14,
      title: "Probability",
      content: {
        introduction:
          "We have studied about random experiment and sample space associated with an experiment. The sample space serves as a universal set for all questions concerned with the experiment. Consider the experiment of tossing a coin two times. An associated sample space is S = {HH, HT, TH, TT}. Now suppose that we are interested in those outcomes which correspond to the occurrence of exactly one head. We find that HT and TH are the only elements of S corresponding to the occurrence of this happening (event). These two elements form the set E = {HT, TH}. The set E is a subset of the sample space S. This suggests that a subset of sample space is associated with an event and an event is associated with a subset of sample space.",

        sections: [
          {
            title: "14.1 Event",
            content:
              "Any subset E of a sample space S is called an event. The event E of a sample space S is said to have occurred if the outcome ω of the experiment is such that ω ∈ E. If the outcome ω is such that ω ∉ E, we say that the event E has not occurred.",
            subSections: [
              {
                title: "14.1.1 Types of events",
                content:
                  "Events can be classified into various types on the basis of the elements they have.",
                list: [
                  "Impossible and Sure Events: The empty set φ is called an impossible event and S, i.e., the whole sample space is called the sure event.",
                  "Simple Event: If an event E has only one sample point of a sample space, it is called a simple (or elementary) event.",
                  "Compound Event: If an event has more than one sample point, it is called a Compound event.",
                ],
                examples: [
                  "In the experiment of rolling a die, S = {1,2,3,4,5,6}. Let E be the event 'the number appears on the die is a multiple of 7'. Since no outcome satisfies this condition, E = φ is an impossible event.",
                  "In the experiment of tossing two coins, S = {HH, HT, TH, TT}. The simple events are E₁ = {HH}, E₂ = {HT}, E₃ = {TH}, E₄ = {TT}.",
                  "In the experiment of tossing a coin thrice, the event 'exactly one head appeared' is a compound event as it contains multiple sample points like {HTT, THT, TTH}.",
                ],
              },
              {
                title: "14.1.2 Algebra of events",
                content:
                  "We can combine events using set operations similar to combining sets.",
                list: [
                  "Complementary Event: For every event A, there corresponds another event A' called the complementary event to A. It is also called the event 'not A'. A' = {ω : ω ∈ S and ω ∉ A} = S - A.",
                  "The Event 'A or B': Event 'A or B' = A ∪ B = {ω : ω ∈ A or ω ∈ B}.",
                  "The Event 'A and B': Event 'A and B' = A ∩ B = {ω : ω ∈ A and ω ∈ B}.",
                  "The Event 'A but not B': Event 'A but not B' = A - B = A ∩ B'.",
                ],
                examples: [
                  "Consider the experiment of rolling a die. Let A be the event 'getting a prime number' = {2,3,5} and B be the event 'getting an odd number' = {1,3,5}. Then: (i) 'A or B' = A ∪ B = {1,2,3,5}. (ii) 'A and B' = A ∩ B = {3,5}. (iii) 'A but not B' = A - B = {2}. (iv) 'not A' = A' = {1,4,6}.",
                ],
              },
              {
                title: "14.1.3 Mutually exclusive events",
                content:
                  "Two events A and B are called mutually exclusive events if the occurrence of any one of them excludes the occurrence of the other event, i.e., if they cannot occur simultaneously. In this case the sets A and B are disjoint, i.e., A ∩ B = φ. Simple events of a sample space are always mutually exclusive.",
                examples: [
                  "In the experiment of rolling a die, consider events A = {1,3,5} (odd number) and B = {2,4,6} (even number). Clearly A ∩ B = φ, so A and B are mutually exclusive events.",
                  "In the same experiment, consider events A = {1,3,5} (odd number) and B = {1,2,3} (number less than 4). Here 3 ∈ A and 3 ∈ B, so A ∩ B ≠ φ. Therefore, A and B are not mutually exclusive events.",
                ],
              },
              {
                title: "14.1.4 Exhaustive events",
                content:
                  "Events E₁, E₂, ..., Eₙ are called exhaustive events if at least one of them necessarily occurs whenever the experiment is performed, i.e., E₁ ∪ E₂ ∪ ... ∪ Eₙ = S. If further Eᵢ ∩ Eⱼ = φ for i ≠ j, then events are called mutually exclusive and exhaustive events.",
                examples: [
                  "In the experiment of throwing a die, consider events A = {1,2,3} (number less than 4), B = {3,4} (number greater than 2 but less than 5), C = {5,6} (number greater than 4). Then A ∪ B ∪ C = S, so A, B, C are exhaustive events.",
                  "Three coins are tossed. Consider events A = {TTT} (no head), B = {HTT, THT, TTH} (exactly one head), C = {HHT, HTH, THH, HHH} (at least two heads). Then A ∪ B ∪ C = S and A ∩ B = φ, A ∩ C = φ, B ∩ C = φ. So A, B, C are mutually exclusive and exhaustive events.",
                ],
              },
            ],
          },
          {
            title: "14.2 Axiomatic Approach to Probability",
            content:
              "In this approach some axioms or rules are depicted to assign probabilities. Let S be the sample space of a random experiment. The probability P is a real valued function whose domain is the power set of S and range is the interval [0,1] satisfying the following axioms: (i) For any event E, P(E) ≥ 0. (ii) P(S) = 1. (iii) If E and F are mutually exclusive events, then P(E ∪ F) = P(E) + P(F). It follows from (iii) that P(φ) = 0.",
            subSections: [
              {
                title: "14.2.1 Probability of an event",
                content:
                  "For a sample space S = {ω₁, ω₂, ..., ωₙ}, the axiomatic definition of probability implies: (i) 0 ≤ P(ωᵢ) ≤ 1 for each ωᵢ ∈ S. (ii) P(ω₁) + P(ω₂) + ... + P(ωₙ) = 1. (iii) For any event A, P(A) = Σ P(ωᵢ) for all ωᵢ ∈ A.",
                examples: [
                  "Let a sample space be S = {ω₁, ω₂, ..., ω₆}. Check validity of assignments: (a) All 1/6 - valid. (b) 1,0,0,0,0,0 - valid. (c) 1/8, 2/3, 1/3, 1/3, -1/4, -1/3 - not valid due to negative probabilities. (d) 1/12, 1/12, 1/6, 1/6, 1/6, 3/2 - not valid as last probability > 1. (e) 0.1,0.2,0.3,0.4,0.5,0.6 - not valid as sum = 2.1 > 1.",
                ],
              },
              {
                title: "14.2.2 Probabilities of equally likely outcomes",
                content:
                  "Let S be a sample space and E be an event, such that n(S) = n and n(E) = m. If each outcome is equally likely, then P(E) = m/n = Number of outcomes favourable to E / Total possible outcomes.",
              },
              {
                title: "14.2.3 Probability of the event 'A or B'",
                content:
                  "For any two events A and B associated with a random experiment, P(A ∪ B) = P(A) + P(B) - P(A ∩ B). If A and B are mutually exclusive, then P(A ∪ B) = P(A) + P(B).",
                examples: [
                  "In tossing a coin thrice with equally likely outcomes, let A = {HHT, HTH, THH} and B = {HTH, THH, HHH}. Then P(A) = 3/8, P(B) = 3/8, P(A ∩ B) = 2/8. So P(A ∪ B) = 3/8 + 3/8 - 2/8 = 4/8 = 1/2.",
                ],
              },
              {
                title: "14.2.4 Probability of event 'not A'",
                content: "P(A') = 1 - P(A).",
              },
            ],
          },
          {
            title: "Solved Examples",
            content: "Applications of probability concepts.",
            examples: [
              "One card is drawn from a well shuffled deck of 52 cards. Find probability that it is (i) a diamond (ii) not an ace (iii) a black card (iv) not a diamond (v) not a black card. Solution: (i) P(diamond) = 13/52 = 1/4. (ii) P(not ace) = 1 - 4/52 = 12/13. (iii) P(black card) = 26/52 = 1/2. (iv) P(not diamond) = 1 - 1/4 = 3/4. (v) P(not black card) = 1 - 1/2 = 1/2.",
              "A bag contains 9 discs: 4 red, 3 blue, 2 yellow. A disc is drawn at random. Find probability it is (i) red (ii) yellow (iii) blue (iv) not blue (v) either red or blue. Solution: (i) P(red) = 4/9. (ii) P(yellow) = 2/9. (iii) P(blue) = 3/9 = 1/3. (iv) P(not blue) = 1 - 1/3 = 2/3. (v) P(red or blue) = 4/9 + 1/3 = 7/9.",
              "Two students Anil and Ashima appeared in an exam. P(Anil qualifies) = 0.05, P(Ashima qualifies) = 0.10, P(both qualify) = 0.02. Find probability that (a) both will not qualify (b) atleast one will not qualify (c) only one will qualify. Solution: (a) P(not both) = 1 - P(E∪F) = 1 - (0.05+0.10-0.02) = 0.87. (b) P(atleast one not) = 1 - P(both) = 0.98. (c) P(only one) = P(E) + P(F) - 2P(E∩F) = 0.05+0.10-0.04 = 0.11.",
              "A committee of two persons is selected from two men and two women. Find probability of having (a) no man (b) one man (c) two men. Solution: Total ways = ⁴C₂ = 6. (a) P(no man) = ²C₂/6 = 1/6. (b) P(one man) = (²C₁ × ²C₁)/6 = 4/6 = 2/3. (c) P(two men) = ²C₂/6 = 1/6.",
            ],
          },
          {
            title: "Miscellaneous Examples",
            content: "Advanced probability problems.",
            examples: [
              "Veena visits four cities A, B, C, D in random order. Find probability that (i) she visits A before B (ii) A before B and B before C. Solution: Total orders = 4! = 24. (i) In half of the orders A comes before B, so probability = 1/2. (ii) For A before B and B before C, there are 4 orders, so probability = 4/24 = 1/6.",
              "Find probability that a hand of 7 cards from a deck of 52 contains (i) all Kings (ii) 3 Kings (iii) atleast 3 Kings. Solution: Total hands = ⁵²C₇. (i) P(all Kings) = (⁴C₄ × ⁴⁸C₃)/⁵²C₇ = 1/7735. (ii) P(3 Kings) = (⁴C₃ × ⁴⁸C₄)/⁵²C₇ = 9/1547. (iii) P(atleast 3 Kings) = 9/1547 + 1/7735 = 46/7735.",
              "If A, B, C are three events, prove that P(A∪B∪C) = P(A)+P(B)+P(C)-P(A∩B)-P(A∩C)-P(B∩C)+P(A∩B∩C). Solution: Using set theory and probability axioms, this formula can be derived by considering E = B∪C and applying union formula.",
              "In a relay race with five teams A, B, C, D, E, find probability that (a) A, B, C finish first, second, third respectively (b) A, B, C are first three to finish in any order. Solution: Total finishing orders for first three = ⁵P₃ = 60. (a) Only one order ABC, so probability = 1/60. (b) 3! = 6 orders, so probability = 6/60 = 1/10.",
            ],
          },
        ],
      },
    },

    // add more chapters here

  ],
};

export default mathematics;