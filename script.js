const quizData = [
    // PART 1 & 2 (Giữ nguyên theo đề gốc bạn đã gửi ở các turn trước)
    { p: "PART 1: LISTENING (T/F)", q: "Question 1. Living in the countryside is always boring and stressful.", options: ["True", "False"], correct: 1 },
    { p: "PART 1: LISTENING (T/F)", q: "Question 2. The air quality is usually much cleaner in the countryside.", options: ["True", "False"], correct: 0 },
    { p: "PART 1: LISTENING (T/F)", q: "Question 3. There are usually more entertainment options in a city than in a village.", options: ["True", "False"], correct: 0 },
    { p: "PART 1: LISTENING (T/F)", q: "Question 4. The cost of living in rural areas is generally more affordable than in the city.", options: ["True", "False"], correct: 0 },
    { p: "PART 1: LISTENING (T/F)", q: "Question 5. Neighbors in the countryside often have a deep feeling of belonging.", options: ["True", "False"], correct: 0 },
    { p: "PART 2: LISTENING (MCQ)", q: "Question 6. What is the main topic of the conversation?", options: ["An exciting trip to a big city.", "A recent eco-tourism experience.", "Planning a beach holiday.", "Protecting the environment."], correct: 1 },
    { p: "PART 2: LISTENING (MCQ)", q: "Question 7. Which activity was the highlight of Mai's trip?", options: ["Shopping", "Factory visit", "Boat trip to see wildlife", "Luxury hotel"], correct: 2 },
    { p: "PART 2: LISTENING (MCQ)", q: "Question 8. What did the guide suggest to reduce waste?", options: ["Reusable water bottles", "More plastic bottles", "Packaged food", "Leaving rubbish"], correct: 0 },
    { p: "PART 2: LISTENING (MCQ)", q: "Question 9. How did Mai feel after the trip?", options: ["Tired", "Excited", "Proud and happy", "Disappointed"], correct: 2 },
    { p: "PART 2: LISTENING (MCQ)", q: "Question 10. Nam and Mai agree that eco-tourism helps ________.", options: ["Nature", "Local people and environment", "Save money", "Build hotels"], correct: 1 },

    // --- CẬP NHẬT CHÍNH XÁC TỪ CÂU 11 ĐẾN 21 ---
    { p: "PART 3: LANGUAGE KNOWLEDGE", q: "Question 11. Nam: 'I’m sorry, I’m going to be late for our meeting.' - Lan: '______'", options: ["You're welcome.", "That’s alright.", "Not at all.", "It's too bad."], correct: 1 },
    { p: "PART 3: LANGUAGE KNOWLEDGE", q: "Question 12. Mai: 'Thank you very much for helping me with my homework.' - Phong: '______'", options: ["No problem.", "I'm fine.", "Yes, of course.", "I hope so."], correct: 0 },
    { p: "PART 3: LANGUAGE KNOWLEDGE", q: "Question 13. The city council has tried to introduce more green areas to improve the ______ environment.", options: ["urban", "rural", "natural", "industrial"], correct: 0 },
    { p: "PART 3: LANGUAGE KNOWLEDGE", q: "Question 14. She has a strong ______ for collecting traditional handicraft items from different villages.", options: ["benefit", "passion", "pollution", "transport"], correct: 1 },
    { p: "PART 3: LANGUAGE KNOWLEDGE", q: "Question 15. Many people in the village depend on ______ to earn a living by making things like pottery and silk.", options: ["agriculture", "commerce", "craftsmanship", "technology"], correct: 2 },
    { p: "PART 3: LANGUAGE KNOWLEDGE", q: "Question 16. If you want to see the local wildlife, you should visit the ______ park.", options: ["modern", "historical", "national", "commercial"], correct: 2 },
    { p: "PART 3: LANGUAGE KNOWLEDGE", q: "Question 17. While my mother ______ dinner, the lights suddenly went out.", options: ["cooks", "is cooking", "was cooking", "has cooked"], correct: 2 },
    { p: "PART 3: LANGUAGE KNOWLEDGE", q: "Question 18. I wish I ______ enough money to travel around the world.", options: ["have", "had", "will have", "am having"], correct: 1 },
    { p: "PART 3: LANGUAGE KNOWLEDGE", q: "Question 19. He agreed ______ me with the heavy luggage at the airport.", options: ["helping", "to help", "help", "helped"], correct: 1 },
    { p: "PART 3: LANGUAGE KNOWLEDGE", q: "Question 20. My brother ______ in Ho Chi Minh City since 2020.", options: ["is living", "lived", "has lived", "was living"], correct: 2 },
    { p: "PART 3: LANGUAGE KNOWLEDGE", q: "Question 21. They are considering ______ to a smaller town because of the high cost of living in the city.", options: ["move", "to move", "moving", "moved"], correct: 2 },

    // PART 4: READING (THEO ĐỀ GỐC)
    { p: "PART 4: READING", q: "Question 22. In the past, most Vietnamese people lived in rural villages.", options: ["True", "False"], correct: 0 },
    { p: "PART 4: READING", q: "Question 23. Urbanization has not played a role in lifestyle changes.", options: ["True", "False"], correct: 1 },
    { p: "PART 4: READING", q: "Question 24. Nuclear families are becoming more common in cities.", options: ["True", "False"], correct: 0 },
    { p: "PART 4: READING", q: "Question 25. The cost of living in the city is cheaper than in the countryside.", options: ["True", "False"], correct: 1 },
    { p: "PART 4: READING", q: "Question 26. People in cities have more options for entertainment.", options: ["True", "False"], correct: 0 },
    { p: "PART 4: READING", q: "Question 27. In the past, which family structure was most popular?", options: ["Nuclear family", "Extended family", "Single-parent family", "Small family"], correct: 1 },
    { p: "PART 4: READING", q: "Question 28. According to the text, urbanization leads to ________.", options: ["Traditional values", "Modern amenities", "Traffic congestion", "Lifestyle changes"], correct: 3 },
    { p: "PART 4: READING", q: "Question 29. What does the word 'it' in paragraph 3 refer to?", options: ["Higher education", "City life", "Modern amenities", "Technology"], correct: 1 },
    { p: "PART 4: READING", q: "Question 30. Which is NOT mentioned as a drawback of city life?", options: ["Traffic congestion", "Air pollution", "High crime rates", "Loss of traditional family values"], correct: 2 },
    { p: "PART 4: READING", q: "Question 31. Main idea of the passage?", options: ["Modern transportation", "Family values", "Transition and changes in lifestyle", "Importance of technology"], correct: 2 },

    // PART 5: WRITING (SẮP XẾP CÂU CHUYỂN THÀNH 4 ĐÁP ÁN)
    { p: "PART 5: WRITING (WORD ORDER)", q: "Question 32. has / since / the environment / a positive impact / on / the clean-up campaign / had / 2024.", 
      options: [
        "The clean-up campaign has had a positive impact on the environment since 2024.",
        "The environment has had a positive impact on the clean-up campaign since 2024.",
        "The clean-up campaign since 2024 had a positive impact on the environment.",
        "Since 2024, the environment had has a positive impact on clean-up campaign."
      ], correct: 0 },
    { p: "PART 5: WRITING (WORD ORDER)", q: "Question 33. I / wish / had / understand / the lecture / I / to / more easily / could.", 
      options: [
        "I wish I had understand the lecture more easily could.",
        "I wish I could understand the lecture more easily.",
        "I wish the lecture could understand more easily I.",
        "I wish I could to understand the lecture more easily."
      ], correct: 1 },
    { p: "PART 5: WRITING (WORD ORDER)", q: "Question 34. decided / not / to / because / they / were / their trip / it / too / expensive / postpone.", 
      options: [
        "They decided because it was too expensive to postpone their trip.",
        "Because it was too expensive they decided postpone their trip.",
        "They decided to postpone their trip because it was too expensive.",
        "Postpone their trip they decided because it was too expensive."
      ], correct: 2 },
    { p: "PART 5: WRITING (WORD ORDER)", q: "Question 35. although / polluted / the air / is / the city / I / love / living / still / in.", 
      options: [
        "I still love living in the city although the air is polluted.",
        "Although the air is polluted, I still love living in the city.",
        "Both A and B are correct.",
        "The air is polluted although I still love living in the city."
      ], correct: 2 }
];

let currentIndex = 0;
let score = 0;

function loadQuiz() {
    if (currentIndex >= quizData.length) {
        showResults();
        return;
    }
    const currentQuiz = quizData[currentIndex];
    document.getElementById('part-title').innerText = currentQuiz.p;
    document.getElementById('question-text').innerText = currentQuiz.q;
    document.getElementById('current-pos').innerText = currentIndex + 1;
    
    const optionsGrid = document.getElementById('options');
    optionsGrid.innerHTML = '';
    
    currentQuiz.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerText = opt;
        btn.onclick = () => {
            if (idx === currentQuiz.correct) score++;
            currentIndex++;
            loadQuiz();
            document.getElementById('score-correct').innerText = score;
        };
        optionsGrid.appendChild(btn);
    });
}

function showResults() {
    document.getElementById('quiz-section').style.display = 'none';
    const resultScreen = document.getElementById('result-screen');
    resultScreen.style.display = 'block';
    const finalScore = (score / quizData.length * 10).toFixed(1);
    document.getElementById('final-stats').innerHTML = `Số câu đúng: ${score}/35. <br> <b>Tổng điểm: ${finalScore}/10</b>`;
}

loadQuiz();