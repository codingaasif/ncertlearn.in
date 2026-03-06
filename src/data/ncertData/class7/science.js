// src/data/class7/science.js

const science = {
  subjectName: "Science",
  chapters: [
    {
      id: 1,
      title: "Nutrition in Plants",
      content: {
        introduction: "All living organisms require food to survive. Plants can prepare their own food by a process called photosynthesis. In this chapter, we will learn how plants obtain nutrition and the different modes of nutrition in plants.",
        
        sections: [
          {
            title: "1.1 Mode of Nutrition in Plants",
            content: "Plants are autotrophs – they can prepare their own food. They use simple substances like carbon dioxide, water, and minerals to make complex food materials.",
            examples: [
              "Autotrophic nutrition: Plants make their own food",
              "Photosynthesis: Process of making food using sunlight",
              "Raw materials: CO₂ from air, water from soil"
            ]
          },
          {
            title: "1.2 Photosynthesis",
            content: "Photosynthesis is the process by which plants prepare food using sunlight, water, carbon dioxide, and chlorophyll.",
            examples: [
              "Equation: CO₂ + H₂O → (sunlight + chlorophyll) → Carbohydrate + O₂",
              "Required: Sunlight, chlorophyll, CO₂, water",
              "Products: Carbohydrates (food) and oxygen",
              "Occurs in: Leaves (mostly), green stems"
            ]
          },
          {
            title: "1.3 Other Modes of Nutrition in Plants",
            content: "Some plants cannot prepare their own food and depend on other sources. These are called heterotrophs.",
            examples: [
              "Parasitic plants: Cuscuta (dodder) grows on other plants",
              "Insectivorous plants: Pitcher plant, Venus flytrap eat insects",
              "Saprophytic plants: Fungi, mushrooms grow on dead matter",
              "Symbiotic plants: Lichen (algae + fungi) live together"
            ]
          }
        ],
        
        exercises: [
          {
            type: "explore",
            questions: [
              "What is photosynthesis? Write its equation.",
              "Why are plants called autotrophs?",
              "What are the raw materials for photosynthesis?",
              "Where does photosynthesis occur in plants?",
              "What is the role of chlorophyll in photosynthesis?",
              "Name a parasitic plant. How does it obtain food?",
              "Name an insectivorous plant. Why does it eat insects?",
              "What are saprophytes? Give an example.",
              "What is symbiosis? Give an example.",
              "Why is sunlight essential for plants?"
            ],
            answers: [
              "Photosynthesis: process of making food using sunlight. CO₂ + H₂O → C₆H₁₂O₆ + O₂",
              "Plants can make their own food using simple substances",
              "Carbon dioxide, water, sunlight, chlorophyll",
              "In leaves (and sometimes green stems)",
              "Chlorophyll traps sunlight energy",
              "Cuscuta – absorbs nutrients from host plant",
              "Pitcher plant – grows in nitrogen-deficient soil, gets nitrogen from insects",
              "Saprophytes grow on dead matter and absorb nutrients – mushrooms",
              "Symbiosis: both organisms benefit – lichen (algae + fungi)",
              "Sunlight provides energy for photosynthesis"
            ]
          }
        ],
        
        summary: [
          "■ Plants are autotrophs – they make their own food through photosynthesis.",
          "■ Photosynthesis requires sunlight, chlorophyll, CO₂, and water.",
          "■ Some plants are heterotrophs – parasitic, insectivorous, saprophytic.",
          "■ Symbiotic relationships help both organisms."
        ]
      }
    }
    // Add more chapters
  ]
};

export default science;