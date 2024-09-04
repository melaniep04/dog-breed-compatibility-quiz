document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const answers = {
        q1: parseInt(formData.get('q1')),
        q2: parseInt(formData.get('q2')),
        q3: parseInt(formData.get('q3')),
        q4: parseInt(formData.get('q4')),
        q5: parseInt(formData.get('q5')),
        q6: parseInt(formData.get('q6')),
        q7: parseInt(formData.get('q7'))
    };

    const breeds = {
        "Husky": { hypoallergenic: 0, energyLevel: 3, shedding: 3, size: 3, personality: 2, training: 2, volume: 3 },
        "Labrador Retriever": { hypoallergenic: 0, energyLevel: 2, shedding: 2, size: 2, personality: 2, training: 2, volume: 2 },
        "Golden Retriever": { hypoallergenic: 0, energyLevel: 2, shedding: 3, size: 2, personality: 2, training: 2, volume: 2 },
        "German Shepherd": { hypoallergenic: 0, energyLevel: 3, shedding: 3, size: 3, personality: 3, training: 2, volume: 2 },
        "Poodle": { hypoallergenic: 1, energyLevel: 2, shedding: 1, size: 2, personality: 2, training: 2, volume: 1 },
        "Bulldog": { hypoallergenic: 0, energyLevel: 1, shedding: 1, size: 2, personality: 1, training: 1, volume: 1 },
        "Rottweiler": { hypoallergenic: 0, energyLevel: 3, shedding: 2, size: 3, personality: 3, training: 2, volume: 2 },
        "Beagle": { hypoallergenic: 0, energyLevel: 2, shedding: 2, size: 2, personality: 2, training: 2, volume: 2 },
        "Dachshund": { hypoallergenic: 0, energyLevel: 1, shedding: 2, size: 1, personality: 2, training: 1, volume: 1 },
        "German Shorthaired Pointer": { hypoallergenic: 0, energyLevel: 3, shedding: 2, size: 3, personality: 2, training: 2, volume: 2 },
        "Pembroke Welsh Corgi": { hypoallergenic: 0, energyLevel: 2, shedding: 2, size: 2, personality: 2, training: 2, volume: 2 },
        "Australian Shepherd": { hypoallergenic: 0, energyLevel: 3, shedding: 3, size: 2, personality: 2, training: 2, volume: 3 },
        "Yorkshire Terrier": { hypoallergenic: 1, energyLevel: 2, shedding: 1, size: 1, personality: 2, training: 2, volume: 1 },
        "Boxer": { hypoallergenic: 0, energyLevel: 3, shedding: 2, size: 2, personality: 2, training: 2, volume: 2 },
        "Cavalier King Charles Spaniel": { hypoallergenic: 0, energyLevel: 1, shedding: 2, size: 1, personality: 2, training: 2, volume: 1 },
        "Cocker Spaniel": { hypoallergenic: 0, energyLevel: 2, shedding: 3, size: 2, personality: 2, training: 2, volume: 2 },
        "Maltese": { hypoallergenic: 1, energyLevel: 1, shedding: 1, size: 1, personality: 2, training: 2, volume: 1 },
        "Shih Tzu": { hypoallergenic: 1, energyLevel: 1, shedding: 1, size: 1, personality: 2, training: 1, volume: 1 },
        "Pomeranian": { hypoallergenic: 1, energyLevel: 1, shedding: 1, size: 1, personality: 2, training: 1, volume: 1 }
    };

    const scores = Object.entries(breeds).map(([breed, traits]) => {
        let score = 0;
        score += Math.abs(traits.hypoallergenic - answers.q1);
        score += Math.abs(traits.energyLevel - answers.q2);
        score += Math.abs(traits.shedding - answers.q3);
        score += Math.abs(traits.size - answers.q4);
        score += Math.abs(traits.personality - answers.q5);
        score += Math.abs(traits.training - answers.q6);
        score += Math.abs(traits.volume - answers.q7);
        return { breed, score };
    });

    scores.sort((a, b) => a.score - b.score);
    const topThreeBreeds = scores.slice(0, 3);

    const resultDiv = document.getElementById('results');
    resultDiv.innerHTML = '<h2>Your Top Dog Breed Matches</h2>';
    topThreeBreeds.forEach(({ breed }) => {
        const breedInfo = {
            "Husky": { img: 'images/husky-image.jpg', description: 'Friendly and energetic, great for active families.' },
            "Labrador Retriever": { img: 'images/labrador-retriever-image.jpg', description: 'Loyal and outgoing, known for their friendly nature.' },
            "Golden Retriever": { img: 'images/golden-retriever-image.jpg', description: 'Gentle and intelligent, a great family dog.' },
            "German Shepherd": { img: 'images/german-shepherd-image.jpg', description: 'Smart and courageous, excellent for protection.' },
            "Poodle": { img: 'images/poodle-image.jpg', description: 'Elegant and intelligent, hypoallergenic coat.' },
            "Bulldog": { img: 'images/bulldog-image.jpg', description: 'Docile and courageous, low activity needs.' },
            "Rottweiler": { img: 'images/rottweiler-image.jpg', description: 'Confident and good-natured, strong and loyal.' },
            "Beagle": { img: 'images/beagle-image.jpg', description: 'Friendly and curious, great with kids.' },
            "Dachshund": { img: 'images/dachshund-image.jpg', description: 'Playful and lively, known for their unique shape.' },
            "German Shorthaired Pointer": { img: 'images/german-shorthaired-pointer-image.jpg', description: 'Active and versatile, great for hunting and exercise.' },
            "Pembroke Welsh Corgi": { img: 'images/pembroke-welsh-corgi-image.jpg', description: 'Lively and affectionate, great for families.' },
            "Australian Shepherd": { img: 'images/australian-shepherd-image.jpg', description: 'Energetic and intelligent, needs lots of exercise.' },
            "Yorkshire Terrier": { img: 'images/yorkshire-terrier-image.jpg', description: 'Small and spunky, great for apartment living.' },
            "Boxer": { img: 'images/boxer-image.jpg', description: 'Fun-loving and active, great for families.' },
            "Cavalier King Charles Spaniel": { img: 'images/cavalier-king-charles-spaniel-image.jpg', description: 'Gentle and affectionate, good with children.' },
            "Cocker Spaniel": { img: 'images/cocker-spaniel-image.jpg', description: 'Loving and friendly, known for their long ears.' },
            "Maltese": { img: 'images/maltese-image.jpg', description: 'Small and affectionate, hypoallergenic coat.' },
            "Shih Tzu": { img: 'images/shih-tzu-image.jpg', description: 'Friendly and outgoing, known for their long coat.' },
            "Pomeranian": { img: 'images/pomeranian-image.jpg', description: 'Energetic and playful, small in size.' }
        };

        const breedData = breedInfo[breed];
        resultDiv.innerHTML += `
            <div class="breed">
                <img src="${breedData.img}" alt="${breed}">
                <h3>${breed}</h3>
                <p>${breedData.description}</p>
            </div>
        `;
    });

    resultDiv.style.display = 'block'; 

    
    resultDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

