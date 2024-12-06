const score = document.getElementById('score');

const button = document.getElementById('result-change');

button.addEventListener('click', () => {

    const randomNumber = Math.floor(Math.random() * 100) + 1;

    score.textContent = randomNumber;

});

fetch('data.json')
    .then(response => response.json())
    .then(data => {

        const subjectsContainer = document.querySelector('.subjects');

        data.forEach(item => {

            const subjectDiv = document.createElement('div');
            subjectDiv.classList.add('subject', item.category.toLowerCase());

            const categorySpan = document.createElement('span');
            const iconImg = document.createElement('img');
            iconImg.src = item.icon;
            iconImg.alt = `${item.category} icon`;
            categorySpan.appendChild(iconImg);
            categorySpan.append(` ${item.category}`);

            const marksSpan = document.createElement('span');
            marksSpan.classList.add('marks');

            const scoreP = document.createElement('p');
            scoreP.textContent = item.score;

            const totalP = document.createElement('p');
            totalP.textContent = '/ 100';

            marksSpan.appendChild(scoreP);
            marksSpan.appendChild(totalP);

            subjectDiv.appendChild(categorySpan);
            subjectDiv.appendChild(marksSpan);

            subjectsContainer.appendChild(subjectDiv);
        });
    })
    .catch(error => console.error('Error fetching JSON data:', error));
