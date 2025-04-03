document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");  // ปุ่ม hamburger
    const navMenu = document.querySelector(".nav-menu");     // เมนูที่ซ่อน
    const closeBtn = document.querySelector(".nav-close");   // ปุ่มกากบาท
    const icon = hamburger.querySelector("i");                // ไอคอนภายใน hamburger

    // เมื่อคลิกที่ hamburger ให้เปิด/ปิดเมนู และเปลี่ยนไอคอน
    hamburger.addEventListener("click", function () {
        navMenu.classList.toggle("active"); // เปิด/ปิดเมนู
        closeBtn.style.display = "block";   // แสดงปุ่มกากบาท
        hamburger.style.display = "none";  // ซ่อนปุ่ม hamburger
    });

    // เมื่อคลิกที่ปุ่มกากบาท ให้ปิดเมนู และแสดงปุ่ม hamburger
    closeBtn.addEventListener("click", function () {
        navMenu.classList.remove("active"); // ปิดเมนู
        closeBtn.style.display = "none";    // ซ่อนปุ่มกากบาท
        hamburger.style.display = "block";  // แสดงปุ่ม hamburger
    });

    
});
