// ==========================================================================
// SkillSphere Online Course Platform - Interactivity
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  // Course Category Tab Filtering
  const tabBtns = document.querySelectorAll('.tab-btn');
  const courseCards = document.querySelectorAll('.course-card');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      courseCards.forEach(card => {
        const cat = card.getAttribute('data-cat');
        if (filter === 'all' || cat === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Course Search Bar Filter
  const searchInput = document.getElementById('course-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      courseCards.forEach(card => {
        const title = card.querySelector('.course-title').textContent.toLowerCase();
        if (title.includes(query)) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  }

  // Enrollment Modal Logic
  const modal = document.getElementById('enroll-modal');
  const modalClose = document.getElementById('modal-close-btn');
  const enrollBtns = document.querySelectorAll('.enroll-trigger-btn');
  const modalCourseTitle = document.getElementById('modal-course-title');
  const modalPriceTag = document.getElementById('modal-price-tag');
  const enrollForm = document.getElementById('enroll-form');
  const modalFeedback = document.getElementById('modal-feedback');

  enrollBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const courseName = btn.getAttribute('data-course');
      const coursePrice = btn.getAttribute('data-price');
      modalCourseTitle.textContent = `Enroll in: ${courseName}`;
      modalPriceTag.textContent = coursePrice;
      modal.classList.add('open');
      modalFeedback.textContent = '';
    });
  });

  const enrollAllBtn = document.getElementById('enroll-all-btn');
  if (enrollAllBtn) {
    enrollAllBtn.addEventListener('click', () => {
      modalCourseTitle.textContent = 'SkillSphere All-Access Membership';
      modalPriceTag.textContent = '$19.00 / month';
      modal.classList.add('open');
    });
  }

  if (modalClose) {
    modalClose.addEventListener('click', () => {
      modal.classList.remove('open');
    });
  }

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('open');
    }
  });

  if (enrollForm) {
    enrollForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('student-name').value;
      modalFeedback.textContent = `🎉 Welcome aboard, ${name}! Your student dashboard credentials have been sent to your email.`;
      setTimeout(() => {
        enrollForm.reset();
        modal.classList.remove('open');
      }, 3500);
    });
  }

  // Newsletter Subscription
  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you for subscribing to SkillSphere Weekly!');
      newsletterForm.reset();
    });
  }
});
