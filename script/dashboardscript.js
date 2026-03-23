        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({canvas: document.getElementById("bg3d"), alpha: true});
        renderer.setSize(window.innerWidth, window.innerHeight);
        const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
        const material = new THREE.MeshStandardMaterial({color: 0x00ffff, wireframe: true});
        const torusKnot = new THREE.Mesh(geometry, material);
        scene.add(torusKnot);
        const light = new THREE.PointLight(0xffffff, 1);
        light.position.set(25, 25, 25);
        scene.add(light);
        camera.position.z = 50;
        function animate() {
            requestAnimationFrame(animate);
            torusKnot.rotation.x += 0.01;
            torusKnot.rotation.y += 0.01;
            renderer.render(scene, camera);
        }
        animate();
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('year').textContent = new Date().getFullYear();
  document.querySelectorAll('.apply-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const course = btn.dataset.course || '';
      const fee = btn.dataset.fee || '';
      document.getElementById('studentCourse').value = course;
      document.getElementById('studentFee').value = fee;
      location.hash = '#admission';
      setTimeout(()=> document.getElementById('studentName').focus(), 300);
    });
  });
  const form = document.getElementById('admissionForm');
  const message = document.getElementById('formMessage');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const course = form.course.value.trim();
    const fee = form.fee.value.trim();
    if (!name || !email || !course || !fee) {
      message.style.color = 'crimson';
      message.textContent = 'Please fill all required fields.';
      return;
    }
    const submissions = JSON.parse(localStorage.getItem('rioce_submissions') || '[]');
    submissions.push({ name, email, course, fee, date: new Date().toISOString() });
    localStorage.setItem('rioce_submissions', JSON.stringify(submissions));
    message.style.color = 'green';
    message.textContent = 'Thank you! Your application has been received. We will contact you soon.';
    setTimeout(() => {
      form.reset();
      document.getElementById('studentCourse').value = course;
      document.getElementById('studentFee').value = fee;
    }, 800);
  });
  document.getElementById('resetForm').addEventListener('click', () => {
    form.reset();
    message.textContent = '';
  });
});
document.addEventListener("contextmenu", function(event) {
    event.preventDefault();
  }); 
  document.getElementById("resetForm").addEventListener("click", function () {
    document.getElementById("admissionForm").reset();
  });
      document.addEventListener("contextmenu", function(event) {
    event.preventDefault();
  });
  document.addEventListener("keydown", function(event) {
    if (event.ctrlKey && (event.key === "u" || event.key === "U")) {
      event.preventDefault();
    }
  });
  document.addEventListener("keydown", function(event) {
    if (event.ctrlKey && event.shiftKey && event.key === "I") {
      event.preventDefault();
    }
    if (event.ctrlKey && event.shiftKey && event.key === "J") {
      event.preventDefault();
    }
    if (event.ctrlKey && event.key === "S") {
      event.preventDefault();
    }
    if (event.ctrlKey && event.key === "H") {
      event.preventDefault();
    }
    if (event.key === "F12") {
      event.preventDefault();
    }
  }); 
   emailjs.init("SzxlHRy5_sMUejOLM");
  document.getElementById("admissionForm").addEventListener("submit", function (e) {
    e.preventDefault();
    emailjs.sendForm("service_rtu5a8u", "template_ggh66xc", this)
      .then(() => {
        alert("✅ Admission form submitted successfully! Check your email.");
        document.getElementById("admissionForm").reset();
      }, (error) => {
        alert("❌ Failed to send form: " + JSON.stringify(error));
      });
  });