function showLesson(id) {
  const content = document.getElementById("content");

  if (id === 1) {
    content.innerHTML = `
      <h2>CPU (Central Processing Unit)</h2>
      <img src="images/cpu.png" width="250">
      <p>CPU เป็นหน่วยประมวลผลหลักของคอมพิวเตอร์</p>
      <ol>
        <li>เปิด Socket บนเมนบอร์ด</li>
        <li>วาง CPU ให้ตรงตำแหน่ง</li>
        <li>ล็อกตัว CPU</li>
      </ol>
    `;
  }

  if (id === 2) {
    content.innerHTML = `
      <h2>RAM</h2>
      <img src="images/ram.png" width="250">
      <p>RAM ใช้เก็บข้อมูลชั่วคราว</p>
      <ol>
        <li>เปิดตัวล็อกสล็อต</li>
        <li>ใส่ RAM ให้ตรงร่อง</li>
      </ol>
    `;
  }

  if (id === 3) {
    content.innerHTML = `
      <h2>Storage (SSD / HDD)</h2>
      <img src="images/ssd.png" width="250">
      <p>ใช้เก็บข้อมูลถาวร</p>
    `;
  }
}
