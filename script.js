document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('chat-form');
    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const userInput = document.getElementById('user-input').value;
        const responseDiv = document.getElementById('chat-response');

        const response = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer sk-proj-roYi553BYSfdNmrKMYN4T3BlbkFJdIsonVTjY88IOuhRfBQN`
            },
            body: JSON.stringify({
                prompt: userInput,
                max_tokens: 150
            })
        });

        const data = await response.json();
        responseDiv.innerHTML = `<p>${data.choices[0].text}</p>`;
    });
});
