let  = JSON.parse(localStorage.getItem("currentUser") || "{}");
  if (!u.name) { window.location = "index.html"; }
  else {
    document.getElementById("username").textContent = u.name;
    loadProfilePic();
  }
  function saveUser() {
    localStorage.setItem("currentUser", JSON.stringify(u));
  }
  function logout() {
    localStorage.removeItem("currentUser");
    window.location = "index.html";
  }
  function fee(){ 
  window.location = "payment.html"; 
  }
  function previewImage(event) {
    let reader = new FileReader();
    reader.onload = function() {
      document.getElementById("profilePic").src = reader.result;
      if (u.email) {
        localStorage.setItem("profilePic_" + u.email, reader.result);
      }
    }
    reader.readAsDataURL(event.target.files[0]);
  }
  function loadProfilePic() {
    if (u.email) {
      let savedPic = localStorage.getItem("profilePic_" + u.email);
      if (savedPic) {
        document.getElementById("profilePic").src = savedPic;
      }
    }
  }
  function changeEmail() {
    let newEmail = document.getElementById("newEmail").value.trim();
    if (newEmail) {
      u.email = newEmail;
      saveUser();
      alert("Email updated!");
      document.getElementById("newEmail").value = "";
    }
  }
  function changePassword() {
    let newPass = document.getElementById("newPassword").value.trim();
    if (newPass) {
      u.password = newPass;
      saveUser();
      alert("Password updated!");
      document.getElementById("newPassword").value = "";
    }
  }
  function toggleCourseSectionUnique() {
  const box = document.getElementById("student-course-wrapper-unique");
  box.style.display = (box.style.display === "none" || box.style.display === "") ? "block" : "none";
}
function initStudentCourseUnique() {
  const savedCourse = localStorage.getItem("studentCourseUnique");
  if (savedCourse) {
    document.getElementById("student-course-select-unique").value = savedCourse;
    document.getElementById("student-course-display-unique").innerText = "📘 Current Course: " + savedCourse;
  }
}
function saveStudentCourseUnique() {
  const course = document.getElementById("student-course-select-unique").value;
  if (!course) {
    alert("⚠️ Please select a course first!");
    return;
  }
  localStorage.setItem("studentCourseUnique", course);
  document.getElementById("student-course-display-unique").innerText = "📘 Current Course: " + course;
}
let  = JSON.parse(localStorage.getItem("currentUser") || "{}");
  if (!u.name) {
    window.location = "index.html";
  } else {
    document.getElementById("username").textContent = u.name;
    loadProfilePic();
  }
  function saveUser() {
    localStorage.setItem("currentUser", JSON.stringify(u));
  }
  function logout() {
    localStorage.removeItem("currentUser");
    window.location = "index.html";
  }
  function fee() {
    window.location = "payment.html";
  }
  function previewImage(event) {
    let reader = new FileReader();
    reader.onload = function () {
      document.getElementById("profilePic").src = reader.result;
      if (u.email) {
        localStorage.setItem("profilePic_" + u.email, reader.result);
      }
    };
    reader.readAsDataURL(event.target.files[0]);
  }
  function loadProfilePic() {
    if (u.email) {
      let savedPic = localStorage.getItem("profilePic_" + u.email);
      if (savedPic) {
        document.getElementById("profilePic").src = savedPic;
      }
    }
  }
  function changeEmail() {
    let newEmail = document.getElementById("newEmail").value.trim();
    if (newEmail) {
      let oldPic = localStorage.getItem("profilePic_" + u.email);
      if (oldPic) {
        localStorage.setItem("profilePic_" + newEmail, oldPic);
        localStorage.removeItem("profilePic_" + u.email);
      }
      u.email = newEmail;
      saveUser();
      alert("Email updated!");
      document.getElementById("newEmail").value = "";
    }
  }
  function changePassword() {
    let newPass = document.getElementById("newPassword").value.trim();
    if (newPass) {
      u.password = newPass;
      saveUser();
      alert("Password updated!");
      document.getElementById("newPassword").value = "";
    }
  }
  function toggleCourseSectionUnique() {
    const box = document.getElementById("student-course-wrapper-unique");
    box.style.display =
      box.style.display === "none" || box.style.display === ""
        ? "block"
        : "none";
  }
  function initStudentCourseUnique() {
    const savedCourse = localStorage.getItem("studentCourseUnique");
    if (savedCourse) {
      document.getElementById("student-course-select-unique").value =
        savedCourse;
      document.getElementById("student-course-display-unique").innerText =
        "📘 Current Course: " + savedCourse;
    }
  }
  function saveStudentCourseUnique() {
    const course =
      document.getElementById("student-course-select-unique").value;
    if (!course) {
      alert("⚠️ Please select a course first!");
      return;
    }
    localStorage.setItem("studentCourseUnique", course);
    document.getElementById("student-course-display-unique").innerText =
      "📘 Current Course: " + course;
  }
  document.addEventListener("DOMContentLoaded", initStudentCourseUnique);
document.addEventListener("DOMContentLoaded", initStudentCourseUnique);