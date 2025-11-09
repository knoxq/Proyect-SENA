document.addEventListener('DOMContentLoaded', () => {
    const chatboxToggler = document.querySelector('.chatbox-toggler');
    const chatbox = document.querySelector('.chatbox');
    const closeBtn = document.querySelector('.close-btn');
    const chatboxBody = document.querySelector('.chatbox-body');
    const chatInput = document.querySelector('.chatbox-footer input');
    const sendBtn = document.querySelector('.chatbox-footer button');

    chatboxToggler.addEventListener('click', () => {
        chatbox.classList.toggle('active');
    });

    closeBtn.addEventListener('click', () => {
        chatbox.classList.remove('active');
    });

    sendBtn.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    function sendMessage() {
        const userInput = chatInput.value.trim();
        if (userInput) {
            addMessage(userInput, 'sent');
            chatInput.value = '';
            showTypingIndicator();
            setTimeout(() => {
                hideTypingIndicator();
                const aiResponse = getAIResponse(userInput);
                addMessage(aiResponse, 'received');
            }, 1000);
        }
    }

    function addMessage(text, type) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', type);
        const p = document.createElement('p');
        p.textContent = text;
        messageDiv.appendChild(p);
        chatboxBody.appendChild(messageDiv);
        chatboxBody.scrollTop = chatboxBody.scrollHeight;
    }

    function showTypingIndicator() {
        const typingDiv = document.createElement('div');
        typingDiv.classList.add('message', 'received', 'typing-indicator');
        const p = document.createElement('p');
p.innerHTML = '<span class="dot"></span><span class="dot"></span><span class="dot"></span>';
        typingDiv.appendChild(p);
        chatboxBody.appendChild(typingDiv);
        chatboxBody.scrollTop = chatboxBody.scrollHeight;
    }

    function hideTypingIndicator() {
        const typingIndicator = document.querySelector('.typing-indicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }

    function getAIResponse(userInput) {
        const responses = {
            "hola": "¡Hola! Soy tu asistente virtual de CoffeeTivApp. ¿En qué puedo ayudarte hoy? Puedes preguntarme sobre cómo registrar lotes, ver tu historial y más.",
            "adios": "¡Hasta luego! Si necesitas algo más, no dudes in preguntar. ¡Que tengas un excelente día!",
            "gracias": "¡De nada! Estoy aquí para hacer tu experiencia más fácil. ¿Hay algo más en lo que pueda ayudarte?",
            "default": "Lo siento, no he entendido bien. Podrías intentar reformular tu pregunta? Recuerda que puedo ayudarte con el registro de lotes, actividades, historial y navegación general."
        };

        const lowerCaseInput = userInput.toLowerCase();

        if (lowerCaseInput.includes("historial") || lowerCaseInput.includes("reportes")) {
            return "Puedes ver el historial de actividades y los reportes de cosecha directamente en la sección 'Historial y Reportes'. ¿Te gustaría que te guíe hasta allí?";
        } else if (lowerCaseInput.includes("lote") || lowerCaseInput.includes("lotes")) {
            return "Para registrar un nuevo lote de café, dirígete a la sección 'Registro de Lotes'. Allí podrás ingresar toda la información relevante.";
        } else if (lowerCaseInput.includes("actividad")) {
            return "Puedes registrar una nueva actividad agrícola, como la fertilización o la poda, en la sección 'Registro de Actividades'.";
        } else if (lowerCaseInput.includes("inventario")) {
            return "Gestiona tus insumos como fertilizantes y herramientas en la sección 'Inventario de Insumos'.";
        } else if (lowerCaseInput.includes("ayuda") || lowerCaseInput.includes("menu")) {
            return "Claro, puedo ayudarte a navegar. Puedes registrar cultivos, gestionar tu inventario, solicitar asistencia técnica, ver alertas y consultar tu historial. ¿Qué te gustaría hacer?";
        }

        return responses[lowerCaseInput] || responses['default'];
    }
});
