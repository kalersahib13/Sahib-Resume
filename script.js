document.addEventListener('DOMContentLoaded', function(){
	const printBtn = document.getElementById('printBtn');
	if(printBtn){
		printBtn.addEventListener('click', ()=>{
			window.print();
		});
	}
});
const cursorGlow = document.getElementById("cursorGlow");
let mouse = { x: 0, y: 0 };
let glowPos = { x: 0, y: 0 };
let glowRAF;

function animateGlow() {
  const speed = 0.1;
  glowPos.x += (mouse.x - glowPos.x) * speed;
  glowPos.y += (mouse.y - glowPos.y) * speed;
  cursorGlow.style.left = glowPos.x + "px";
  cursorGlow.style.top  = glowPos.y + "px";
  glowRAF = requestAnimationFrame(animateGlow);
}

document.addEventListener("mousemove", (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;

  if (!cursorGlow.classList.contains("visible")) {
    cursorGlow.classList.add("visible");
    glowPos = { x: e.clientX, y: e.clientY };
    animateGlow();
  }
});

document.addEventListener("mouseleave", () => {
  cursorGlow.classList.remove("visible");
  cancelAnimationFrame(glowRAF);
});
// Sidebar Mobile Flip Logic
const flipTo2 = document.getElementById('flipTo2');
const flipTo1 = document.getElementById('flipTo1');
const sidebar = document.getElementById('sidebar');

if (flipTo2 && flipTo1 && sidebar) {
    flipTo2.addEventListener('click', () => {
        sidebar.classList.add('flipped');
    });
    
    flipTo1.addEventListener('click', () => {
        sidebar.classList.remove('flipped');
    });
}
// Function to dynamically adjust content top padding based on sidebar height
// Mobile Sidebar Flip Logic (CSS handles all the spacing now)
document.addEventListener('DOMContentLoaded', function() {
    const flipTo2 = document.getElementById('flipTo2');
    const flipTo1 = document.getElementById('flipTo1');
    const sidebar = document.getElementById('sidebar');

    if (flipTo2 && flipTo1 && sidebar) {
        flipTo2.addEventListener('click', () => sidebar.classList.add('flipped'));
        flipTo1.addEventListener('click', () => sidebar.classList.remove('flipped'));
    }
});