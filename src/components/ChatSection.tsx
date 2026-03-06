import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { Send, Bot, User } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";

const apiKey = process.env.GEMINI_API_KEY || (import.meta as any).env?.VITE_GEMINI_API_KEY || "";
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

type Message = {
  id: string;
  role: 'user' | 'model';
  text: string;
};

export default function ChatSection() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'model',
      text: "Hola, soy la IA oficial de la comunidad. Fui entrenado con la experiencia de los 10 pilares y las normas mundiales del asfalto. Solo los miembros de pago tienen consultas ilimitadas, pero hoy te regalo una prueba. ¿Qué quieres saber?"
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const suggestedQuestions = [
    "Diferencias entre Betún PG y VG.",
    "Beneficios del Asfalto Drenante.",
    "¿Cómo me suscribo a la comunidad?"
  ];

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSend = async (text: string) => {
    if (!text.trim()) return;

    const newUserMsg: Message = { id: Date.now().toString(), role: 'user', text };
    setMessages(prev => [...prev, newUserMsg]);
    setInputValue('');
    setIsLoading(true);

    if (text === "¿Cómo me suscribo a la comunidad?") {
      setTimeout(() => {
        setMessages(prev => [...prev, {
          id: Date.now().toString(),
          role: 'model',
          text: "¡Excelente decisión! Puedes unirte a nuestra comunidad privada y acceder a todos los beneficios por solo $9.99/mes. [Haz clic aquí para suscribirte](#pricing)."
        }]);
        setIsLoading(false);
      }, 600);
      return;
    }

    if (!ai) {
      setTimeout(() => {
        setMessages(prev => [...prev, {
          id: Date.now().toString(),
          role: 'model',
          text: "⚠️ Error de conexión: La API Key de Gemini no está configurada. Si estás desplegando en Cloudflare Pages, asegúrate de añadir la variable de entorno VITE_GEMINI_API_KEY con tu clave."
        }]);
        setIsLoading(false);
      }, 600);
      return;
    }

    try {
      const response = await ai.models.generateContent({
        model: "gemini-3.1-pro-preview",
        contents: `Eres el "Ingeniero IA", un experto en infraestructura vial, asfalto, y pavimentos. Responde de manera profesional, concisa y técnica a la siguiente pregunta: ${text}`,
      });
      
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        role: 'model',
        text: response.text || "Lo siento, no pude procesar tu solicitud."
      }]);
    } catch (error) {
      console.error("Error calling Gemini:", error);
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        role: 'model',
        text: "Hubo un error al conectar con mis servidores. Por favor, intenta de nuevo más tarde."
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="chat-ia" className="py-24 bg-asphalt relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Habla con el <span className="text-canal-light">Ingeniero IA</span></h2>
          <p className="text-xl text-gray-400">Tu asistente personal experto en infraestructura vial, disponible 24/7.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Left Column: Bot Info & Animation */}
          <Card className="lg:col-span-1 flex flex-col items-center text-center bg-asphalt-light rounded-3xl border border-white/10 shadow-2xl lg:sticky lg:top-24 overflow-hidden relative">
            <Spotlight
              className="-top-40 left-0 md:left-20 md:-top-20"
              fill="white"
            />
            
            <div className="w-full h-[300px] relative z-10">
              <SplineScene 
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </div>

            <div className="p-8 w-full relative z-10 flex flex-col items-center">
              <h3 className="text-2xl font-bold mb-2 text-white">Ingeniero IA</h3>
              <p className="text-gray-400 text-sm mb-6">
                Entrenado con miles de normativas y la experiencia de los 10 pilares del asfalto.
              </p>
              <div className="w-full h-px bg-white/10 mb-6"></div>
              <div className="w-full flex flex-col gap-2">
                 <p className="text-xs text-gray-500 font-medium text-left mb-2 uppercase tracking-wider">Preguntas sugeridas</p>
                 {suggestedQuestions.map((q, i) => (
                    <button
                      key={i}
                      onClick={() => handleSend(q)}
                      disabled={isLoading}
                      className="text-left text-sm bg-asphalt hover:bg-white/5 border border-white/10 text-gray-300 p-3 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {q}
                    </button>
                  ))}
              </div>
            </div>
          </Card>

          {/* Right Column: Chat Interface */}
          <div className="lg:col-span-2 bg-asphalt-light border border-white/10 rounded-3xl shadow-2xl flex flex-col h-[600px] lg:h-[700px] overflow-hidden">
            {/* Chat Header */}
            <div className="bg-asphalt p-6 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                <div>
                  <h3 className="font-bold text-lg text-white">Sesión de Consulta</h3>
                  <p className="text-sm text-gray-400">Prueba gratuita en curso</p>
                </div>
              </div>
              <div className="bg-white/5 px-3 py-1 rounded-full border border-white/10 text-xs text-gray-400 font-mono">
                Gemini 3.1 Pro
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 bg-asphalt-lighter/30">
              {messages.map((msg) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={msg.id}
                  className={`flex gap-3 sm:gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                >
                  <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shrink-0 ${
                    msg.role === 'user' ? 'bg-traffic text-asphalt' : 'bg-canal text-white'
                  }`}>
                    {msg.role === 'user' ? <User className="w-4 h-4 sm:w-5 sm:h-5" /> : <Bot className="w-4 h-4 sm:w-5 sm:h-5" />}
                  </div>
                  <div className={`max-w-[85%] sm:max-w-[80%] rounded-2xl p-4 text-sm sm:text-base leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-traffic text-asphalt rounded-tr-sm font-medium'
                      : 'bg-asphalt border border-white/10 text-gray-200 rounded-tl-sm'
                  }`}>
                    {msg.text.includes('[Haz clic aquí') ? (
                      <span dangerouslySetInnerHTML={{ __html: msg.text.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-traffic hover:underline font-bold" onclick="document.getElementById(\'pricing\').scrollIntoView({behavior:\'smooth\'}); return false;">$1</a>') }} />
                    ) : (
                      msg.text
                    )}
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-3 sm:gap-4 flex-row">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shrink-0 bg-canal text-white">
                    <Bot className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="bg-asphalt border border-white/10 rounded-2xl rounded-tl-sm p-4 flex items-center gap-2 h-[56px]">
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 sm:p-6 bg-asphalt border-t border-white/10">
              <form
                onSubmit={(e) => { e.preventDefault(); handleSend(inputValue); }}
                className="relative flex items-center"
              >
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Pregúntale al Ingeniero IA..."
                  className="w-full bg-asphalt-lighter border border-white/20 rounded-2xl pl-4 sm:pl-6 pr-14 sm:pr-16 py-3 sm:py-4 text-white focus:outline-none focus:border-traffic focus:ring-1 focus:ring-traffic transition-all shadow-inner"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim() || isLoading}
                  className="absolute right-2 bg-traffic hover:bg-traffic-hover disabled:opacity-50 disabled:hover:bg-traffic text-asphalt p-2 sm:p-3 rounded-xl transition-colors"
                >
                  <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </form>
              <p className="text-center text-xs text-gray-500 mt-3">
                El Ingeniero IA puede cometer errores. Considera verificar la información importante.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
