const copyb = document.getElementById('Copy')
const sentence = document.getElementById('quoteDisplay')

const Quotes = [
    "Attitude is a choice. Happiness is a choice. Optimism is a choice. Kindness is a choice. Giving is a choice.Respect is a choice. Whatever choice you make makes you. Choose wisely.",

    "“Believe in yourself. You are braver than you think, more talented than you know, and capable of more than you imagine.”",

    "Attitude is a choice. Happiness is a choice. Optimism is a choice. Kindness is a choice. Giving is a choice.Respect is a choice. Whatever choice you make makes you. Choose wisely.",

    "“Believe in yourself. You are braver than you think, more talented than you know, and capable of more than you imagine.”",

    "“Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.”",

    "“Believe in yourself. You are braver than you think, more talented than you know, and capable of more than you imagine.”",

    "“Live the Life of Your Dreams: Be brave enough to live the life of your dreams according to your vision and purpose instead of the expectations and opinions of others.”",


    "“It’s only after you’ve stepped outside your comfort zone that you begin to change, grow, and transform.”",

    "“The truth is, unless you let go, unless you forgive yourself, unless you forgive the situation, unless you realize that the situation is over, you cannot move forward.”",


    "“Do what is right, not what is easy nor what is popular.”",


    "“Success is not how high you have climbed, but how you make a positive difference to the world.”",

    "“Start each day with a positive thought and a grateful heart.”",

    "“Be grateful for what you already have while you pursue your goals.If you aren’t grateful for what you already have, what makes you think you would be happy with more.”",

    "“Life is about accepting the challenges along the way, choosing to keep moving forward, and savoring the journey.”",

    "“Be brave to stand for what you believe in even if you stand alone.”",


    "“Letting go means to come to the realization that some people are a part of your history, but not a part of your destiny.”",

    "“Never lose hope. Storms make people stronger and never last forever.”",
];

function newQuote() {
    const randomIndex = Math.floor(Math.random() * Quotes.length)

    const quote = Quotes[randomIndex];

    document.getElementById("quoteDisplay").innerHTML = quote;




}


copyb.addEventListener('click', () => {
    const textarea = document.createElement('textarea')
    textarea.value = sentence.textContent
    document.body.appendChild(textarea)


    textarea.select()
    Document.execCommand('Copy')


    document.body.removeChild(textarea)
    alert("quote copied")

})



