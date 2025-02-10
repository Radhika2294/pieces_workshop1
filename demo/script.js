const facts = [
    "🌍 I’ve traveled to five national parks and dream of visiting them all!",
    "🐶 I’m a huge animal lover—dogs and cats make my heart melt!",
    "🌅 Sunsets are my favorite time of the day; I can watch them forever.",
    "✈️ Traveling is my therapy—I love exploring new places and cultures.",
    "🍕 I’m a foodie at heart and always on the hunt for the best local eats.",
    "🎉 My friends are like family, and I cherish every moment with them.",
    "☕ I believe coffee and good conversations can fix almost anything!",
    "📷 I love capturing moments—my phone gallery is filled with travel and pet pictures.",
    "🎶 Music is my constant companion; I have a playlist for every mood.",
    "📖 I enjoy reading—especially books that transport me to different worlds.",
    "🏕️ Camping under the stars is on my bucket list—I love nature’s quiet magic.",
    "🚗 Long drives with good music and great company are my idea of a perfect day.",
    "🎨 I like trying new creative hobbies, from painting to DIY crafts.",
    "🏡 I dream of having a cozy home with pets and a big bookshelf."
];

const factButton = document.getElementById('factButton');
const factDisplay = document.getElementById('factDisplay');

factButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * facts.length);
    factDisplay.textContent = facts[randomIndex];
}); 
