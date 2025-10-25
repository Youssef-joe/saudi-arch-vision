const GEMINI_API_KEY = "AIzaSyBNwzVAheMEv6oOTvpoWPz9ViCl8Gj3UEM";
const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent";

// Rate limiting
let lastRequestTime = 0;
const MIN_REQUEST_INTERVAL = 5000; // 5 seconds between requests

// Mock responses for when API is unavailable
const MOCK_RESPONSES_AR = [
  "بناءً على كود البناء السعودي، أنصح بضمان أنظمة تهوية مناسبة تتوافق مع متطلبات المناخ الصحراوي. يجب إعطاء الأولوية للتهوية الطبيعية حيثما أمكن.",
  "لكفاءة الطاقة في المملكة العربية السعودية، فكر في تطبيق العزل المناسب، ومواد الأسقف العاكسة، والتوجه الذي يقلل من اكتساب الحرارة خلال ساعات الذروة.",
  "تتطلب لوائح السلامة من الحرائق في المملكة العربية السعودية عروض مخارج محددة، ومواد مقاومة للحريق، وأنظمة الرش. يرجى الرجوع إلى أحدث إرشادات كود البناء السعودي.",
  "معايير إمكانية الوصول في المملكة العربية السعودية تتبع أفضل الممارسات الدولية. تأكد من أن المنحدرات لها ميول مناسبة (1:12 كحد أقصى)، والمداخل بعرض 850 مم كحد أدنى."
];

const MOCK_RESPONSES_EN = [
  "Based on Saudi Building Code (SBC), I recommend ensuring proper ventilation systems that comply with desert climate requirements. Natural ventilation should be prioritized where possible.",
  "For energy efficiency in Saudi Arabia, consider implementing proper insulation, reflective roofing materials, and orientation that minimizes heat gain during peak hours.",
  "Fire safety regulations in Saudi Arabia require specific egress widths, fire-resistant materials, and sprinkler systems. Please consult the latest SBC guidelines for detailed requirements.",
  "Accessibility standards in Saudi Arabia follow international best practices. Ensure ramps have proper slopes (1:12 max), doorways are minimum 850mm wide, and accessible parking is provided."
];

function getArchitecturalContext(isArabic: boolean) {
  if (isArabic) {
    return `أنت سيما، مساعد ذكي خبير متخصص في إرشادات التصميم المعماري السعودي وأكواد البناء. تقدم إرشادات مهنية حول:

- امتثال كود البناء السعودي (SBC)
- معايير كفاءة الطاقة في المملكة العربية السعودية
- إرشادات ولوائح السلامة من الحرائق
- متطلبات إمكانية الوصول (المعايير السعودية)
- ممارسات الاستدامة للمناخ السعودي
- أفضل ممارسات التصميم المعماري
- مواد البناء المناسبة للبيئة السعودية
- أنظمة التكييف والتهوية للمناخ الصحراوي
- متطلبات الإضاءة والتهوية الطبيعية

قدم دائماً إجابات دقيقة ومهنية تركز على المعايير المعمارية السعودية. اجعل الإجابات مختصرة جداً (3-4 جمل فقط) وقابلة للتطبيق. أجب باللغة العربية.`;
  } else {
    return `You are SIMA, an expert AI assistant specialized in Saudi Arabian architectural design guidelines and building codes. You provide professional guidance on:

- Saudi Building Code (SBC) compliance
- Energy efficiency standards in Saudi Arabia
- Fire safety guidelines and regulations
- Accessibility requirements (Saudi standards)
- Sustainability practices for Saudi climate
- Architectural design best practices
- Building materials suitable for Saudi environment
- HVAC systems for desert climate
- Natural lighting and ventilation requirements

Always provide accurate, professional responses focused on Saudi architectural standards. Keep responses very brief (3-4 sentences only) and actionable. Respond in English.`;
  }
}

function isArabicText(text: string): boolean {
  const arabicRegex = /[\u0600-\u06FF]/;
  return arabicRegex.test(text);
}

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export async function sendMessageToGemini(
  message: string,
  conversationHistory: ChatMessage[] = []
): Promise<string> {
  // Rate limiting
  const now = Date.now();
  const timeSinceLastRequest = now - lastRequestTime;
  if (timeSinceLastRequest < MIN_REQUEST_INTERVAL) {
    await new Promise(resolve => setTimeout(resolve, MIN_REQUEST_INTERVAL - timeSinceLastRequest));
  }
  lastRequestTime = Date.now();

  try {
    const isArabic = isArabicText(message);
    const context = getArchitecturalContext(isArabic);
    const prompt = `${context}

${isArabic ? 'سؤال المستخدم' : 'User question'}: ${message}

${isArabic ? 'يرجى تقديم إجابة مفيدة حول الإرشادات المعمارية السعودية:' : 'Please provide a helpful response about Saudi architectural guidelines:'}`;

    const response = await fetch(GEMINI_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-goog-api-key": GEMINI_API_KEY,
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: prompt,
              },
            ],
          },
        ],
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 200,
        }
      }),
    });

    if (!response.ok) {
      console.log("API request failed, using fallback response");
      
      // Always return mock response for any API failure
      const isArabic = isArabicText(message);
      const mockResponses = isArabic ? MOCK_RESPONSES_AR : MOCK_RESPONSES_EN;
      const mockResponse = mockResponses[Math.floor(Math.random() * mockResponses.length)];
      const note = isArabic 
        ? "*ملاحظة: أواجه حالياً طلبات كثيرة. هذه إجابة عامة بناءً على الإرشادات المعمارية السعودية. للمتطلبات المحددة، يرجى الرجوع إلى كود البناء السعودي الرسمي.*"
        : "*Note: I'm currently experiencing high demand. This is a general response based on Saudi architectural guidelines. For specific requirements, please consult the official Saudi Building Code.*";
      return `${mockResponse}\n\n${note}`;
    }

    const data = await response.json();
    console.log("API Response:", data);
    
    if (data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts) {
      return data.candidates[0].content.parts[0].text;
    } else if (data.error) {
      throw new Error(`API Error: ${data.error.message}`);
    } else {
      throw new Error("Invalid response format from Gemini API");
    }
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw error;
  }
}