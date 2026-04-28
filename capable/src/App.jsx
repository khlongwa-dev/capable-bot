import { useState, useRef, useEffect } from "react";

/* ─────────────────────────────────────────────────────
   HOOK — detect mobile screen
───────────────────────────────────────────────────── */
function useIsMobile() {
  const [mobile, setMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );
  useEffect(() => {
    const handler = () => setMobile(window.innerWidth < 768);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return mobile;
}

/* ─────────────────────────────────────────────────────
   TOPIC DATA
───────────────────────────────────────────────────── */
const topics = [
  {
    id: 1,
    badge: "ML",
    title: "Machine Learning",
    color: "#7c6af7",
    bg: "rgba(124,106,247,0.10)",
    readMore: "https://developers.google.com/machine-learning/crash-course",
    description: `Machine Learning (ML) is a subset of artificial intelligence that enables systems to learn and improve from experience without being explicitly programmed. Instead of following hard-coded rules, ML algorithms identify patterns in data and use those patterns to make decisions.\n\nThere are three main learning paradigms: supervised learning (from labelled data), unsupervised learning (discovering patterns in unlabelled data), and reinforcement learning (learning through trial-and-error with an environment).\n\nCommon algorithms include linear regression, decision trees, random forests, support vector machines, and gradient boosting. ML powers spam filters, recommendation systems, fraud detection, and predictive maintenance across industries.`,
    svg: (
      <svg viewBox="0 0 320 160" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
        <rect width="320" height="160" fill="rgba(124,106,247,0.07)" />
        <circle cx="160" cy="80" r="52" fill="none" stroke="rgba(124,106,247,0.25)" strokeWidth="1" />
        <circle cx="160" cy="80" r="34" fill="none" stroke="rgba(124,106,247,0.4)" strokeWidth="1" />
        <circle cx="160" cy="80" r="16" fill="rgba(124,106,247,0.45)" />
        {[0,45,90,135,180,225,270,315].map((a, i) => {
          const r1=56, r2=72;
          const x1=160+r1*Math.cos(a*Math.PI/180), y1=80+r1*Math.sin(a*Math.PI/180);
          const x2=160+r2*Math.cos(a*Math.PI/180), y2=80+r2*Math.sin(a*Math.PI/180);
          return <g key={i}><line x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(124,106,247,0.6)" strokeWidth="1.5"/><circle cx={x2} cy={y2} r="4" fill="#7c6af7"/></g>;
        })}
        <text x="160" y="84" textAnchor="middle" fill="white" fontSize="10" fontFamily="sans-serif" fontWeight="bold">ML</text>
      </svg>
    ),
  },
  {
    id: 2,
    badge: "NLP",
    title: "Natural Language Processing",
    color: "#2dd4bf",
    bg: "rgba(45,212,191,0.10)",
    readMore: "https://www.nltk.org/",
    description: `Natural Language Processing (NLP) is the branch of AI concerned with enabling computers to understand, interpret, and generate human language in a meaningful way. It bridges the gap between human communication and machine understanding.\n\nCore NLP tasks include tokenisation, part-of-speech tagging, named entity recognition, sentiment analysis, machine translation, and text summarisation. Modern NLP is largely driven by transformer architectures like BERT, GPT, and T5.\n\nNLP is used in virtual assistants, chatbots, sentiment analysis of customer reviews, automated document classification, language translation, and clinical notes processing in healthcare.`,
    svg: (
      <svg viewBox="0 0 320 160" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
        <rect width="320" height="160" fill="rgba(45,212,191,0.07)" />
        {[["Hello",40,45],["Bonjour",110,30],["Hola",195,50],["你好",258,36],["مرحبا",52,108],["Ciao",172,112],["Olá",265,100]].map(([w,x,y],i) => (
          <g key={i}>
            <rect x={x-22} y={y-14} width={String(w).length*7+18} height="24" rx="12" fill="rgba(45,212,191,0.15)" stroke="rgba(45,212,191,0.35)" strokeWidth="1"/>
            <text x={x+String(w).length*3.5-4} y={y+4} textAnchor="middle" fill="#2dd4bf" fontSize="10" fontFamily="sans-serif">{w}</text>
          </g>
        ))}
        <text x="160" y="150" textAnchor="middle" fill="rgba(45,212,191,0.5)" fontSize="9" fontFamily="sans-serif">language understanding layer</text>
      </svg>
    ),
  },
  {
    id: 3,
    badge: "DL",
    title: "Deep Learning",
    color: "#f472b6",
    bg: "rgba(244,114,182,0.10)",
    readMore: "https://www.deeplearning.ai/",
    description: `Deep Learning is a specialised subfield of ML that uses artificial neural networks with many layers to learn representations of data at multiple levels of abstraction. It has revolutionised computer vision, speech recognition, and NLP.\n\nDeep learning models automatically discover the features needed for detection or classification from raw data, eliminating manual feature engineering. Key architectures include CNNs for images, RNNs for sequences, and Transformers for language.\n\nApplications include image recognition, speech-to-text, drug discovery, autonomous vehicles, and generative models like DALL-E and Stable Diffusion. Deep learning requires substantial compute and large datasets.`,
    svg: (
      <svg viewBox="0 0 320 160" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
        <rect width="320" height="160" fill="rgba(244,114,182,0.07)" />
        {[[50,3],[120,4],[200,4],[270,3]].map(([x, count], li) =>
          Array.from({length: count}, (_, n) => {
            const y = 25 + n * (110 / (count - 1));
            return <circle key={`${li}-${n}`} cx={x} cy={y} r="9" fill="rgba(244,114,182,0.25)" stroke="#f472b6" strokeWidth="1.5"/>;
          })
        )}
        {[[50,3,120,4],[120,4,200,4],[200,4,270,3]].map(([x1,c1,x2,c2], li) =>
          Array.from({length: c1}, (_,a) =>
            Array.from({length: c2}, (_,b) => (
              <line key={`${li}-${a}-${b}`} x1={x1} y1={25+a*(110/(c1-1))} x2={x2} y2={25+b*(110/(c2-1))} stroke="rgba(244,114,182,0.15)" strokeWidth="0.8"/>
            ))
          )
        )}
        <text x="160" y="152" textAnchor="middle" fill="rgba(244,114,182,0.5)" fontSize="9" fontFamily="sans-serif">input → hidden layers → output</text>
      </svg>
    ),
  },
  {
    id: 4,
    badge: "LLMs",
    title: "Large Language Models",
    color: "#fb923c",
    bg: "rgba(251,146,60,0.10)",
    readMore: "https://huggingface.co/learn/nlp-course",
    description: `Large Language Models (LLMs) are deep learning models trained on massive text corpora to understand and generate human-like text. Models like GPT-4, Claude, Gemini, and Llama have billions to trillions of parameters and demonstrate emergent capabilities that weren't explicitly programmed.\n\nLLMs are trained using a self-supervised objective — predicting the next token in a sequence — allowing them to learn grammar, facts, reasoning patterns, and code from raw text. After pre-training, they are fine-tuned with RLHF to align with human preferences.\n\nLLMs power chatbots, code completion, content generation, summarisation, and question-answering. Key challenges include hallucination, bias, safety alignment, and the substantial compute required.`,
    svg: (
      <svg viewBox="0 0 320 160" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
        <defs><marker id="arr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="rgba(251,146,60,0.6)"/></marker></defs>
        <rect width="320" height="160" fill="rgba(251,146,60,0.07)" />
        <rect x="95" y="48" width="130" height="64" rx="10" fill="rgba(251,146,60,0.15)" stroke="rgba(251,146,60,0.45)" strokeWidth="1.5"/>
        <text x="160" y="76" textAnchor="middle" fill="#fb923c" fontSize="12" fontFamily="sans-serif" fontWeight="bold">LLM</text>
        <text x="160" y="95" textAnchor="middle" fill="rgba(251,146,60,0.65)" fontSize="8.5" fontFamily="sans-serif">billions of parameters</text>
        <text x="36" y="74" textAnchor="middle" fill="rgba(255,255,255,0.45)" fontSize="9" fontFamily="sans-serif">"Explain</text>
        <text x="36" y="86" textAnchor="middle" fill="rgba(255,255,255,0.45)" fontSize="9" fontFamily="sans-serif">ML to me"</text>
        <path d="M66 80 L93 80" fill="none" stroke="rgba(251,146,60,0.55)" strokeWidth="1.5" markerEnd="url(#arr)"/>
        <path d="M227 80 L254 80" fill="none" stroke="rgba(251,146,60,0.55)" strokeWidth="1.5" markerEnd="url(#arr)"/>
        <text x="284" y="72" textAnchor="middle" fill="rgba(255,255,255,0.45)" fontSize="9" fontFamily="sans-serif">"Machine</text>
        <text x="284" y="83" textAnchor="middle" fill="rgba(255,255,255,0.45)" fontSize="9" fontFamily="sans-serif">learning</text>
        <text x="284" y="94" textAnchor="middle" fill="rgba(255,255,255,0.45)" fontSize="9" fontFamily="sans-serif">is..."</text>
      </svg>
    ),
  },
  {
    id: 5,
    badge: "CV",
    title: "Computer Vision",
    color: "#34d399",
    bg: "rgba(52,211,153,0.10)",
    readMore: "https://opencv.org/university/",
    description: `Computer Vision (CV) enables machines to interpret and understand the visual world. By processing digital images and video, CV systems can identify objects, detect anomalies, track motion, and reconstruct 3D scenes.\n\nCore tasks include image classification, object detection (YOLO, Faster R-CNN), semantic segmentation, instance segmentation, and pose estimation. CNNs transformed the field, and Vision Transformers (ViT) are the current state of the art.\n\nCV powers facial recognition, self-driving cars, medical imaging diagnostics, quality control in manufacturing, and augmented reality. It increasingly combines with NLP through multimodal models like GPT-4V and CLIP.`,
    svg: (
      <svg viewBox="0 0 320 160" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
        <rect width="320" height="160" fill="rgba(52,211,153,0.07)" />
        <rect x="75" y="25" width="170" height="110" rx="6" fill="rgba(52,211,153,0.08)" stroke="rgba(52,211,153,0.25)" strokeWidth="1"/>
        <ellipse cx="145" cy="80" rx="34" ry="34" fill="rgba(52,211,153,0.12)" stroke="rgba(52,211,153,0.4)" strokeWidth="1.5"/>
        <circle cx="145" cy="80" r="15" fill="rgba(52,211,153,0.3)" stroke="#34d399" strokeWidth="1.5"/>
        <circle cx="145" cy="80" r="6" fill="#34d399"/>
        <line x1="179" y1="52" x2="212" y2="36" stroke="rgba(52,211,153,0.5)" strokeWidth="1"/>
        <rect x="212" y="26" width="76" height="17" rx="4" fill="rgba(52,211,153,0.18)" stroke="rgba(52,211,153,0.35)" strokeWidth="0.8"/>
        <text x="250" y="39" textAnchor="middle" fill="#34d399" fontSize="8.5" fontFamily="sans-serif">Person 98%</text>
        <line x1="179" y1="108" x2="212" y2="120" stroke="rgba(52,211,153,0.5)" strokeWidth="1"/>
        <rect x="212" y="112" width="76" height="17" rx="4" fill="rgba(52,211,153,0.18)" stroke="rgba(52,211,153,0.35)" strokeWidth="0.8"/>
        <text x="250" y="125" textAnchor="middle" fill="#34d399" fontSize="8.5" fontFamily="sans-serif">Object 87%</text>
      </svg>
    ),
  },
  {
    id: 6,
    badge: "AI",
    title: "Artificial Intelligence",
    color: "#a78bfa",
    bg: "rgba(167,139,250,0.10)",
    readMore: "https://ai.google/education/",
    description: `Artificial Intelligence (AI) is the broad field of computer science dedicated to creating systems that perform tasks typically requiring human intelligence — reasoning, learning, perception, language understanding, and problem-solving.\n\nAI encompasses multiple subfields: machine learning, computer vision, NLP, robotics, expert systems, and planning. Approaches range from symbolic AI (rules and logic) to connectionist AI (neural networks) to hybrid systems.\n\nAI is categorised as Narrow AI (specialised, like a chess engine), General AI (hypothetical human-level reasoning), and Super AI (theoretical beyond-human capability). All current systems are narrow. AI raises profound questions about employment, bias, privacy, and society's future.`,
    svg: (
      <svg viewBox="0 0 320 160" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
        <rect width="320" height="160" fill="rgba(167,139,250,0.07)" />
        <circle cx="160" cy="75" r="56" fill="none" stroke="rgba(167,139,250,0.12)" strokeWidth="38"/>
        <circle cx="160" cy="75" r="30" fill="none" stroke="rgba(167,139,250,0.22)" strokeWidth="20"/>
        <circle cx="160" cy="75" r="14" fill="rgba(167,139,250,0.5)"/>
        <text x="160" y="79" textAnchor="middle" fill="white" fontSize="9" fontFamily="sans-serif" fontWeight="bold">AI</text>
        <text x="160" y="118" textAnchor="middle" fill="rgba(167,139,250,0.55)" fontSize="8.5" fontFamily="sans-serif">ML</text>
        <text x="160" y="140" textAnchor="middle" fill="rgba(167,139,250,0.35)" fontSize="8" fontFamily="sans-serif">Deep Learning · LLMs</text>
      </svg>
    ),
  },
  {
    id: 7,
    badge: "NN",
    title: "Neural Networks",
    color: "#60a5fa",
    bg: "rgba(96,165,250,0.10)",
    readMore: "https://playground.tensorflow.org/",
    description: `Neural Networks are computational models loosely inspired by biological brains. They consist of layers of interconnected nodes (neurons), where each connection has a weight adjusted during training to minimise prediction error.\n\nA basic feedforward network has an input layer, one or more hidden layers, and an output layer. Each neuron applies a non-linear activation function (ReLU, sigmoid, tanh) to a weighted sum of its inputs. Training uses backpropagation and gradient descent.\n\nSpecialised architectures include CNNs (spatial data), RNNs and LSTMs (sequential data), Transformers (attention), GANs (generative models), and Graph Neural Networks (relational data). Neural networks underpin virtually all modern AI advances.`,
    svg: (
      <svg viewBox="0 0 320 160" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
        <rect width="320" height="160" fill="rgba(96,165,250,0.07)" />
        {[[50,3],[120,4],[200,4],[270,3]].map(([x,c],li) =>
          Array.from({length:c},(_,n)=>(
            <circle key={`n${li}${n}`} cx={x} cy={25+n*(110/(c-1))} r="10" fill="rgba(96,165,250,0.2)" stroke="#60a5fa" strokeWidth="1.5"/>
          ))
        )}
        {[[50,3,120,4],[120,4,200,4],[200,4,270,3]].map(([x1,c1,x2,c2],li)=>
          Array.from({length:c1},(_,a)=>
            Array.from({length:c2},(_,b)=>(
              <line key={`l${li}${a}${b}`} x1={x1} y1={25+a*(110/(c1-1))} x2={x2} y2={25+b*(110/(c2-1))} stroke="rgba(96,165,250,0.15)" strokeWidth="0.8"/>
            ))
          )
        )}
        <text x="50" y="150" textAnchor="middle" fill="rgba(96,165,250,0.45)" fontSize="8" fontFamily="sans-serif">Input</text>
        <text x="160" y="150" textAnchor="middle" fill="rgba(96,165,250,0.45)" fontSize="8" fontFamily="sans-serif">Hidden</text>
        <text x="270" y="150" textAnchor="middle" fill="rgba(96,165,250,0.45)" fontSize="8" fontFamily="sans-serif">Output</text>
      </svg>
    ),
  },
  {
    id: 8,
    badge: "Ethics",
    title: "AI Ethics",
    color: "#fbbf24",
    bg: "rgba(251,191,36,0.10)",
    readMore: "https://www.partnershiponai.org/",
    description: `As AI systems become more powerful and pervasive, ethical considerations have become central to responsible development. AI ethics encompasses principles for building systems that are fair, transparent, accountable, and beneficial.\n\nKey concerns include: Bias and fairness — AI trained on biased data can perpetuate discrimination in hiring, lending, or criminal justice. Transparency — black-box models make decisions that are difficult to explain. Privacy — AI systems often require large personal datasets. Safety — ensuring AI behaves reliably. Accountability — determining responsibility when AI fails.\n\nThe EU AI Act is the world's first comprehensive AI regulation. Practitioners should actively consider these dimensions throughout the entire development lifecycle.`,
    svg: (
      <svg viewBox="0 0 320 160" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
        <rect width="320" height="160" fill="rgba(251,191,36,0.07)" />
        <line x1="160" y1="20" x2="160" y2="135" stroke="rgba(251,191,36,0.25)" strokeWidth="1.5"/>
        {[["Fairness",55,42],["Transparency",230,42],["Safety",55,85],["Accountability",230,85],["Privacy",55,128],["Inclusion",230,128]].map(([label,x,y],i)=>(
          <g key={i}>
            <rect x={x-52} y={y-15} width="104" height="26" rx="5" fill="rgba(251,191,36,0.12)" stroke="rgba(251,191,36,0.3)" strokeWidth="1"/>
            <text x={x} y={y+3} textAnchor="middle" fill="#fbbf24" fontSize="9.5" fontFamily="sans-serif">{label}</text>
          </g>
        ))}
      </svg>
    ),
  },
  {
    id: 9,
    badge: "Applied",
    title: "Real-World Applications",
    color: "#e879f9",
    bg: "rgba(232,121,249,0.10)",
    readMore: "https://ai.google/impact/",
    description: `Data science and AI are being applied across virtually every sector, transforming how organisations operate and how people interact with technology.\n\nHealthcare: AI detects cancer in medical images and accelerates drug discovery. Finance: ML powers fraud detection, algorithmic trading, and credit scoring. Transportation: Autonomous vehicles use CV and reinforcement learning. Retail: Recommendation engines (Netflix, Spotify, Amazon) use collaborative filtering. Agriculture: Drones and CV monitor crop health.\n\nEmerging applications include AI-generated code (GitHub Copilot), scientific acceleration (AlphaFold for protein folding), and climate modelling. The common thread is using data to surface patterns humans would miss and automate complex decisions at scale.`,
    svg: (
      <svg viewBox="0 0 320 160" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
        <rect width="320" height="160" fill="rgba(232,121,249,0.07)" />
        {[["Health",62,42],["Finance",148,28],["Transport",234,42],["Retail",258,105],["Science",160,118],["Agri",62,105]].map(([label,x,y],i)=>(
          <g key={i}>
            <circle cx={x} cy={y} r="24" fill="rgba(232,121,249,0.12)" stroke="rgba(232,121,249,0.35)" strokeWidth="1"/>
            <text x={x} y={y+4} textAnchor="middle" fill="#e879f9" fontSize="9" fontFamily="sans-serif">{label}</text>
          </g>
        ))}
        <circle cx="160" cy="78" r="18" fill="rgba(232,121,249,0.35)" stroke="#e879f9" strokeWidth="1.5"/>
        <text x="160" y="82" textAnchor="middle" fill="white" fontSize="9" fontFamily="sans-serif" fontWeight="bold">AI</text>
      </svg>
    ),
  },
];

/* ─────────────────────────────────────────────────────
   TOPIC CARD
───────────────────────────────────────────────────── */
function TopicCard({ topic }) {
  const isMobile = useIsMobile();
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        borderRadius: "16px",
        overflow: "hidden",
        background: "#13131a",
        border: `1px solid ${hovered ? "rgba(255,255,255,0.18)" : "rgba(255,255,255,0.07)"}`,
        transition: "border-color 0.25s, transform 0.25s",
        transform: hovered && !isMobile ? "translateY(-3px)" : "translateY(0)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Illustration */}
      <div style={{ height: "160px", width: "100%", flexShrink: 0, overflow: "hidden" }}>
        {topic.svg}
      </div>

      {/* Body — full height on mobile, scrollable on desktop */}
      <div
        style={{
          padding: "20px 20px 8px 20px",
          overflowY: isMobile ? "visible" : "auto",
          maxHeight: isMobile ? "none" : "220px",
          flex: isMobile ? "none" : "1",
          scrollbarWidth: "thin",
          scrollbarColor: "rgba(255,255,255,0.15) transparent",
        }}
      >
        <span style={{
          display: "inline-block", fontSize: "10px", fontWeight: 500,
          letterSpacing: "0.12em", textTransform: "uppercase",
          padding: "3px 10px", borderRadius: "5px", marginBottom: "10px",
          background: topic.bg, color: topic.color,
          fontFamily: "'DM Sans', sans-serif",
        }}>
          {topic.badge}
        </span>

        <h2 style={{
          fontFamily: "'Syne', sans-serif", color: "#f0eee8",
          fontSize: "1.1rem", fontWeight: 700, lineHeight: 1.25,
          marginBottom: "10px", marginTop: 0,
        }}>
          {topic.title}
        </h2>

        <p style={{
          fontFamily: "'DM Sans', sans-serif", color: "#8a8899",
          fontSize: "0.875rem", lineHeight: 1.75,
          whiteSpace: "pre-line", paddingBottom: "12px",
          margin: 0,
        }}>
          {topic.description}
        </p>
      </div>

      {/* Footer */}
      <div style={{
        padding: "14px 20px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        borderTop: "1px solid rgba(255,255,255,0.07)",
        flexShrink: 0,
      }}>
        <a
          href={topic.readMore}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex", alignItems: "center", gap: "4px",
            fontSize: "0.85rem", fontWeight: 500,
            color: topic.color, fontFamily: "'DM Sans', sans-serif",
            textDecoration: "none", transition: "gap 0.2s",
          }}
          onMouseEnter={e => e.currentTarget.style.gap = "8px"}
          onMouseLeave={e => e.currentTarget.style.gap = "4px"}
        >
          Read more
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>

        {!isMobile && (
          <span style={{
            fontSize: "0.7rem", color: "rgba(255,255,255,0.2)",
            display: "flex", alignItems: "center", gap: "3px",
          }}>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="7 13 12 18 17 13" />
              <polyline points="7 6 12 11 17 6" />
            </svg>
            scroll
          </span>
        )}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────
   CAPABLE BOT
───────────────────────────────────────────────────── */
const QUICK_PROMPTS = [
  "What is Machine Learning?",
  "Explain LLMs simply",
  "NLP use cases",
  "AI vs ML difference",
  "What is Computer Vision?",
];

const GEMINI_API_KEY = "REDACTED"; // 🔑 Replace with your key
const GEMINI_MODEL = "gemini-3-flash-preview"; // Use a stable, available model

// Inject typing dot animation once
if (typeof document !== "undefined" && !document.getElementById("capable-typing-style")) {
  const s = document.createElement("style");
  s.id = "capable-typing-style";
  s.textContent = `
    @keyframes typingDot {
      0%, 60%, 100% { opacity: 0.2; transform: translateY(0); }
      30% { opacity: 1; transform: translateY(-4px); }
    }
  `;
  document.head.appendChild(s);
}

const SYSTEM_INSTRUCTION = `You are Capable, a Data Science assistant embedded in a learning web page.
You answer questions strictly based on your knowledge of the following topics.
Topics you cover:
- Machine Learning (ML)
- Natural Language Processing (NLP)
- Deep Learning
- Large Language Models (LLMs)
- Computer Vision
- Artificial Intelligence (AI)
- Neural Networks
- AI Ethics
- Real-World Applications of AI
If a user asks a question that is outside these topics, do NOT make up an answer.
Instead respond with:
"That question is outside my current scope. Would you like me to submit it directly to the development team for you?"
Keep your answers clear, friendly, and concise.`;

function CapableBot() {
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "bot", text: "Hi! I'm Capable 👋 Your Data Science assistant. Ask me anything about ML, NLP, AI, deep learning, and more." },
    { role: "bot", text: "What would you like to explore today?" },
  ]);
  const [input, setInput] = useState("");
  const [chipsVisible, setChipsVisible] = useState(true);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  // Keep conversation history for multi-turn chat (Gemini format)
  const conversationHistory = useRef([]);

  useEffect(() => {
    if (open) messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open, isTyping]);

  const sendMessage = async (text) => {
    const msg = text || input.trim();
    if (!msg || isTyping) return;
    setInput("");
    setChipsVisible(false);

    // Add user message to UI
    setMessages(prev => [...prev, { role: "user", text: msg }]);

    // Add to conversation history (Gemini format)
    conversationHistory.current.push({
      role: "user",
      parts: [{ text: msg }],
    });

    setIsTyping(true);

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${GEMINI_API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            system_instruction: {
              parts: [{ text: SYSTEM_INSTRUCTION }],
            },
            contents: conversationHistory.current,
            generationConfig: {
              temperature: 0.2,
              maxOutputTokens: 1024,
            },
          }),
        }
      );

      if (!response.ok) {
        const err = await response.json();
        throw new Error(err?.error?.message || `API error ${response.status}`);
      }

      const data = await response.json();
      const botText =
        data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "Sorry, I couldn't generate a response. Please try again.";

      // Add bot reply to conversation history
      conversationHistory.current.push({
        role: "model",
        parts: [{ text: botText }],
      });

      setMessages(prev => [...prev, { role: "bot", text: botText }]);
    } catch (err) {
      console.error("Gemini API error:", err);
      setMessages(prev => [
        ...prev,
        {
          role: "bot",
          text: `⚠️ ${
            err.message.includes("API_KEY_INVALID") || err.message.includes("400")
              ? "Invalid API key. Please set a valid Gemini API key in the code."
              : `Something went wrong: ${err.message}`
          }`,
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const btnSize = isMobile ? 52 : 64;
  const iconSize = isMobile ? 22 : 28;

  return (
    <>
      {/* Floating trigger button */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Open Capable bot"
        className="capable-pulse"
        style={{
          position: "fixed",
          bottom: isMobile ? "20px" : "28px",
          right: isMobile ? "16px" : "28px",
          width: `${btnSize}px`,
          height: `${btnSize}px`,
          borderRadius: "50%",
          background: "linear-gradient(135deg, #7c6af7, #5b4de0)",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 100,
          boxShadow: "0 4px 24px rgba(124,106,247,0.5)",
          transition: "transform 0.2s",
        }}
        onMouseEnter={e => e.currentTarget.style.transform = "scale(1.1)"}
        onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
      >
        <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"/>
          <circle cx="9" cy="14" r="1" fill="white" stroke="none"/>
          <circle cx="15" cy="14" r="1" fill="white" stroke="none"/>
        </svg>
      </button>

      {/* Backdrop + Modal */}
      {open && (
        <div
          onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }}
          style={{
            position: "fixed", inset: 0, zIndex: 200,
            background: "rgba(0,0,0,0.7)",
            backdropFilter: "blur(4px)",
            display: "flex",
            alignItems: isMobile ? "flex-end" : "center",
            justifyContent: "center",
            padding: isMobile ? "0" : "16px",
          }}
        >
          <div
            className="modal-in"
            style={{
              width: "100%",
              maxWidth: isMobile ? "100%" : "480px",
              height: isMobile ? "88vh" : "min(580px, 90vh)",
              background: "#13131a",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: isMobile ? "20px 20px 0 0" : "20px",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
            }}
          >
            {/* Header */}
            <div style={{
              display: "flex", alignItems: "center", gap: "12px",
              padding: "16px 20px",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
              flexShrink: 0,
            }}>
              <div style={{
                width: "38px", height: "38px", borderRadius: "50%", flexShrink: 0,
                background: "linear-gradient(135deg, #7c6af7, #5b4de0)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"/>
                  <circle cx="9" cy="14" r="1" fill="white" stroke="none"/>
                  <circle cx="15" cy="14" r="1" fill="white" stroke="none"/>
                </svg>
              </div>
              <div>
                <p style={{ color: "#f0eee8", fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "0.95rem", margin: 0 }}>Capable</p>
                <p style={{ color: "#2dd4bf", fontSize: "0.75rem", margin: 0 }}>● Online · Data Science Assistant</p>
              </div>
              <button
                onClick={() => setOpen(false)}
                style={{
                  marginLeft: "auto", background: "none", border: "none",
                  color: "#8a8899", cursor: "pointer", fontSize: "1.1rem",
                  padding: "6px 10px", borderRadius: "8px", lineHeight: 1,
                  transition: "background 0.15s, color 0.15s",
                }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.06)"; e.currentTarget.style.color = "#f0eee8"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "none"; e.currentTarget.style.color = "#8a8899"; }}
              >
                ✕
              </button>
            </div>

            {/* Messages */}
            <div style={{
              flex: 1, overflowY: "auto",
              padding: "16px 20px",
              display: "flex", flexDirection: "column", gap: "12px",
              scrollbarWidth: "thin", scrollbarColor: "rgba(255,255,255,0.1) transparent",
            }}>
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className="msg-in"
                  style={{
                    alignSelf: msg.role === "user" ? "flex-end" : "flex-start",
                    maxWidth: "80%",
                    padding: "12px 16px",
                    borderRadius: msg.role === "user" ? "18px 18px 4px 18px" : "18px 18px 18px 4px",
                    background: msg.role === "user" ? "#7c6af7" : "#1c1c26",
                    color: msg.role === "user" ? "#fff" : "#d4d0e8",
                    border: msg.role === "bot" ? "1px solid rgba(255,255,255,0.07)" : "none",
                    fontSize: "0.875rem", lineHeight: 1.6,
                    fontFamily: "'DM Sans', sans-serif",
                    whiteSpace: "pre-wrap",
                  }}
                >
                  {msg.text}
                </div>
              ))}
              {isTyping && (
                <div style={{
                  alignSelf: "flex-start",
                  padding: "12px 18px",
                  borderRadius: "18px 18px 18px 4px",
                  background: "#1c1c26",
                  border: "1px solid rgba(255,255,255,0.07)",
                  display: "flex", gap: "5px", alignItems: "center",
                }}>
                  {[0, 1, 2].map(i => (
                    <span key={i} style={{
                      width: "7px", height: "7px", borderRadius: "50%",
                      background: "#7c6af7",
                      animation: "typingDot 1.2s infinite",
                      animationDelay: `${i * 0.2}s`,
                      display: "inline-block",
                    }} />
                  ))}
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick chips */}
            {chipsVisible && (
              <div style={{
                padding: "8px 20px 10px",
                display: "flex", flexWrap: "wrap", gap: "8px", flexShrink: 0,
              }}>
                {QUICK_PROMPTS.map((q, i) => (
                  <button
                    key={i}
                    onClick={() => sendMessage(q)}
                    style={{
                      fontSize: "0.75rem", padding: "6px 12px", borderRadius: "20px",
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      color: "#8a8899", cursor: "pointer",
                      fontFamily: "'DM Sans', sans-serif",
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = "#7c6af7"; e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "#7c6af7"; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.color = "#8a8899"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; }}
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {/* Input row */}
            <div style={{
              padding: "12px 20px 20px",
              display: "flex", gap: "10px", flexShrink: 0,
              borderTop: "1px solid rgba(255,255,255,0.07)",
            }}>
              <input
                type="text"
                value={input}
                disabled={isTyping}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === "Enter" && !isTyping && sendMessage()}
                placeholder={isTyping ? "Capable is thinking..." : "Ask Capable anything..."}
                style={{
                  flex: 1, borderRadius: "12px", padding: "10px 16px",
                  background: "#1c1c26",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "#f0eee8", fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.875rem", outline: "none",
                  transition: "border-color 0.2s",
                  opacity: isTyping ? 0.6 : 1,
                }}
                onFocus={e => { if (!isTyping) e.target.style.borderColor = "#7c6af7"; }}
                onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
              />
              <button
                onClick={() => sendMessage()}
                style={{
                  width: "42px", height: "42px", borderRadius: "12px",
                  background: "#7c6af7", border: "none", cursor: "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0, transition: "transform 0.15s, background 0.15s",
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.05)"; e.currentTarget.style.background = "#6a59e0"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.background = "#7c6af7"; }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"/>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/* ─────────────────────────────────────────────────────
   MAIN APP
───────────────────────────────────────────────────── */
export default function App() {
  const isMobile = useIsMobile();

  return (
    <div style={{ minHeight: "100vh", background: "#0a0a0f" }}>

      {/* ── HERO ── */}
      <header style={{ width: "100%", paddingTop: "72px", paddingBottom: "48px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: isMobile ? "0 20px" : "0 32px", textAlign: "center" }}>

          <p style={{
            display: "flex", alignItems: "center", justifyContent: "center",
            gap: "10px", fontSize: "11px", fontWeight: 500, letterSpacing: "0.15em",
            textTransform: "uppercase", color: "#2dd4bf",
            fontFamily: "'DM Sans', sans-serif", marginBottom: "20px",
          }}>
            <span style={{ display: "inline-block", width: "24px", height: "1px", background: "#2dd4bf" }} />
            Knowledge Hub
            <span style={{ display: "inline-block", width: "24px", height: "1px", background: "#2dd4bf" }} />
          </p>

          <h1 style={{
            fontFamily: "'Syne', sans-serif", color: "#f0eee8",
            fontSize: "clamp(2.2rem, 5vw, 4.5rem)",
            fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em",
            margin: "0 auto 24px auto", maxWidth: "900px",
          }}>
            Explore{" "}
            <span style={{
              background: "linear-gradient(135deg, #7c6af7, #2dd4bf)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>
              Data Science
            </span>
            {" "}& AI Concepts
          </h1>

          <p style={{
            fontSize: "clamp(1rem, 1.5vw, 1.125rem)", color: "#8a8899",
            fontFamily: "'DM Sans', sans-serif", fontWeight: 300, lineHeight: 1.7,
            maxWidth: "560px", margin: "0 auto 40px auto",
          }}>
            Browse essential topics in modern data science, machine learning, and artificial intelligence.
            Use{" "}
            <span style={{ color: "#7c6af7", fontWeight: 500 }}>Capable</span>
            {" "}— our AI assistant — to ask any question.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px" }}>
            {[
              { label: "Topics covered", value: "9" },
              { label: "Fields of AI", value: "ML · NLP · CV · DL" },
              { label: "Ask the bot", value: "Capable ↗" },
            ].map(({ label, value }) => (
              <div key={label} style={{
                padding: "10px 20px", borderRadius: "12px",
                background: "#13131a", border: "1px solid rgba(255,255,255,0.08)",
              }}>
                <p style={{ fontSize: "11px", color: "#8a8899", fontFamily: "'DM Sans', sans-serif", marginBottom: "2px" }}>{label}</p>
                <p style={{ fontSize: "13px", fontWeight: 500, color: "#f0eee8", fontFamily: "'Syne', sans-serif", margin: 0 }}>{value}</p>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* ── CARDS ── */}
      <main style={{
        maxWidth: "1280px",
        margin: "0 auto",
        padding: isMobile ? "0 16px 120px 16px" : "0 32px 120px 32px",
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
          gap: isMobile ? "20px" : "24px",
        }}>
          {topics.map((topic, i) => (
            <div key={topic.id} className="card-anim" style={{ animationDelay: `${i * 0.07}s` }}>
              <TopicCard topic={topic} />
            </div>
          ))}
        </div>
      </main>

      {/* ── CAPABLE BOT ── */}
      <CapableBot />
    </div>
  );
}