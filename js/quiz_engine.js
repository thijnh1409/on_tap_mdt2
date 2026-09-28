let currentQuestions = [];

function shuffleArray(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

function cleanOptionText(text) {
    return text.replace(/^[a-d]\.\s*/i, '');
}

function initQuiz() {
    const container = document.getElementById('quiz-container');
    container.innerHTML = ''; 
    
    // originalQuestions được lấy từ mảng định nghĩa bên file HTML
    currentQuestions = originalQuestions.map(q => {
        let formattedOptions = q.options.map((opt, i) => ({
            text: cleanOptionText(opt),
            isCorrect: i === q.answer
        }));
        return {
            question: q.question,
            image: q.image || null, 
            options: formattedOptions
        };
    });
    
    shuffleArray(currentQuestions);

    currentQuestions.forEach((q, index) => {
        shuffleArray(q.options);

        const questionDiv = document.createElement('div');
        questionDiv.className = 'bg-gray-50 p-6 rounded-lg border border-gray-200';
        
        let optionsHtml = '';
        q.options.forEach((opt, optIndex) => {
            const optId = `q${index}_opt${optIndex}`;
            optionsHtml += `
                <label class="option-label" for="${optId}">
                    <div class="flex items-start">
                        <input type="radio" name="question${index}" id="${optId}" value="${opt.isCorrect}">
                        <span class="ml-2">${opt.text}</span>
                    </div>
                </label>
            `;
        });

        let imageHtml = q.image ? `<img src="${q.image}" alt="Hình ảnh minh họa" class="max-w-full h-auto mt-4 mb-4 rounded border border-gray-300 shadow-sm">` : '';

        questionDiv.innerHTML = `
            <h3 class="text-lg font-semibold mb-2 text-gray-800">
                <span class="text-blue-600">Câu ${index + 1}:</span> ${q.question}
            </h3>
            ${imageHtml}
            <div class="space-y-2 pl-2 mt-4" id="options-container-${index}">
                ${optionsHtml}
            </div>
        `;
        container.appendChild(questionDiv);
    });

    document.getElementById('submit-btn').classList.remove('hidden');
    document.getElementById('retry-btn').classList.add('hidden');
    document.getElementById('score-display').classList.add('hidden');

    if (window.MathJax) {
        MathJax.typesetPromise();
    }
}

function checkAnswers() {
    let score = 0;
    
    currentQuestions.forEach((q, index) => {
        const optionsContainer = document.getElementById(`options-container-${index}`);
        const labels = optionsContainer.querySelectorAll('label');
        
        const allRadios = optionsContainer.querySelectorAll('input[type="radio"]');
        allRadios.forEach(r => r.disabled = true);

        labels.forEach(label => {
            const radio = label.querySelector('input[type="radio"]');
            const isCorrect = radio.value === 'true';

            if (isCorrect) {
                if (radio.checked) {
                    label.classList.add('correct-answer');
                    score++;
                } else {
                    label.classList.add('missed-answer');
                }
            } else if (radio.checked) {
                label.classList.add('wrong-answer');
            }
        });
    });

    document.getElementById('score-value').innerText = score;
    document.getElementById('total-value').innerText = currentQuestions.length;
    document.getElementById('score-display').classList.remove('hidden');
    
    document.getElementById('submit-btn').classList.add('hidden');
    document.getElementById('retry-btn').classList.remove('hidden');
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.getElementById('submit-btn').addEventListener('click', checkAnswers);
document.getElementById('retry-btn').addEventListener('click', initQuiz);
window.onload = initQuiz;