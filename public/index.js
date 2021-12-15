const puppeteer = require("puppeteer");
// Thay FB_EMAIL bằng email hoặc tên đăng nhập của ban nhé
var username = "nhokul123@gmail.com";
//Thay FB_PASSWORD bằng passoword của bạn nhé
var password = "";

(async () => {
  // Chạy browser với chế độ headless:false, tức là có giao diện
  const browser = await puppeteer.launch({ headless: false });

  const page = await browser.newPage();
  // Truy cập vào trang m.facebook.com
  await page.goto("https://m.facebook.com/");
  // Nhập email vào ô đăng nhập
  await page.type("#m_login_email", username);
  // Nhập password vào ô đăng nhập
  await page.type("#m_login_password", password);
  // Click nút đăng nhập
  await page.click("button[name='login']");
  // Đợi trang tải xong
  await page.waitForNavigation();

  //Truy cập đến của sổ chat của bạn bè ( Bạn tự thay ID người nhận nha hoặc Id của bạn để test cũng được )
  await page.goto("https://m.facebook.com/messages/thread/100001609214600");
  // Nhập "Hello bạn" vào ô input
  const messages = ["dm", "dmm", "super dmm"];
  await messages.forEach(async function (data, index) {
    await setTimeout(async function () {
      //Thông báo tin nhắn đã gửi ra console
      await console.log("Đã chửi :'" + data + "'");
      await page.type("#composerInput", data);
      await page.click("button[value='Gửi']");
    }, index * 1000);
  });
})();
