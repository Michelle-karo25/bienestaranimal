import React, { useState, useEffect, useRef } from 'react';
import { Send, Paperclip, Smile } from 'lucide-react';

const ChatScreen = ({ participantName = "Usuario", animalName = "Mascota", onBack }) => {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'system', text: `¡Hola! Estás chateando sobre la solicitud de adopción de ${animalName}.`, time: '10:00 AM' },
    { id: 2, sender: 'participant', text: `Hola, me gustaría saber más sobre ${animalName}. ¿Es compatible con otros perros?`, time: '10:05 AM' },
    { id: 3, sender: 'me', text: `¡Claro! ${animalName} es muy sociable y se lleva bien con otros perros. ¿Tienes alguna otra pregunta?`, time: '10:07 AM' },
  ]);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      const newMsg = {
        id: messages.length + 1,
        sender: 'me',
        text: newMessage.trim(),
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages([...messages, newMsg]);
      setNewMessage('');
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col">
      {/* Chat Header */}
      <div className="bg-white shadow-md p-4 flex items-center justify-between fixed top-0 left-0 right-0 z-10">
        <button onClick={onBack} className="text-blue-600 hover:text-blue-800">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
        </button>
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-bold text-gray-800">{participantName}</h2>
          <p className="text-sm text-gray-500">Sobre: {animalName}</p>
        </div>
        <div className="w-6 h-6"></div> {/* Placeholder para alinear */}
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 pt-20 pb-20"> {/* Ajusta padding para header y input */}
        {messages.map(msg => (
          <div 
            key={msg.id} 
            className={`flex mb-4 ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-[70%] p-3 rounded-xl shadow-sm ${
              msg.sender === 'me' 
                ? 'bg-blue-600 text-white rounded-br-none' 
                : msg.sender === 'participant' 
                  ? 'bg-gray-200 text-gray-800 rounded-bl-none'
                  : 'bg-gray-100 text-gray-600 text-center' // System messages
            }`}>
              <p className="text-sm">{msg.text}</p>
              <span className={`block text-right mt-1 ${msg.sender === 'me' ? 'text-blue-200' : 'text-gray-500'} text-xs`}>
                {msg.time}
              </span>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Chat Input */}
      <form onSubmit={handleSendMessage} className="bg-white border-t border-gray-200 p-4 flex items-center fixed bottom-0 left-0 right-0 z-10">
        <button type="button" className="text-gray-500 hover:text-blue-600 p-2 rounded-full">
          <Paperclip className="w-6 h-6" />
        </button>
        <button type="button" className="text-gray-500 hover:text-blue-600 p-2 rounded-full mr-2">
          <Smile className="w-6 h-6" />
        </button>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Escribe un mensaje..."
          className="flex-1 px-4 py-2 rounded-full bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button 
          type="submit" 
          className="ml-2 bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors"
        >
          <Send className="w-6 h-6" />
        </button>
      </form>
    </div>
  );
};

export default ChatScreen;