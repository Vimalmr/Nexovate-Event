document.addEventListener('DOMContentLoaded', function() {
    const modalTrigger = document.querySelectorAll('.modal-trigger');
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    const cancelBtn = document.getElementById('cancel-btn');
  
    modalTrigger.forEach(function(trigger) {
      trigger.addEventListener('click', function(e) {
        e.preventDefault();
        const imageUrl = this.getAttribute('data-image');
        modalImage.setAttribute('src', imageUrl);
        modal.style.display = 'block';
      });
    });
  
    cancelBtn.addEventListener('click', function() {
      modal.style.display = 'none';
    });
  
    // Close modal when clicking outside of the modal content
    window.addEventListener('click', function(e) {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  });

document.addEventListener('DOMContentLoaded', function() {
    const modalTrigger = document.querySelectorAll('.modal-trigger1');
    const modal = document.getElementById('modal1');
    const modalImage = document.getElementById('modal-image1');
    const cancelBtn = document.getElementById('cancel-btn1');
  
    modalTrigger.forEach(function(trigger) {
      trigger.addEventListener('click', function(e) {
        e.preventDefault();
        const imageUrl = this.getAttribute('data-image');
        modalImage.setAttribute('src', imageUrl);
        modal.style.display = 'block';
      });
    });
  
    cancelBtn.addEventListener('click', function() {
      modal.style.display = 'none';
    });
  
    // Close modal when clicking outside of the modal content
    window.addEventListener('click', function(e) {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  });
  
  document.addEventListener('DOMContentLoaded', function() {
      const modalTrigger = document.querySelectorAll('.modal-trigger2');
      const modal = document.getElementById('modal2');
      const modalImage = document.getElementById('modal-image2');
      const cancelBtn = document.getElementById('cancel-btn2');
    
      modalTrigger.forEach(function(trigger) {
        trigger.addEventListener('click', function(e) {
          e.preventDefault();
          const imageUrl = this.getAttribute('data-image');
          modalImage.setAttribute('src', imageUrl);
          modal.style.display = 'block';
        });
      });
    
      cancelBtn.addEventListener('click', function() {
        modal.style.display = 'none';
      });
    
      // Close modal when clicking outside of the modal content
      window.addEventListener('click', function(e) {
        if (e.target === modal) {
          modal.style.display = 'none';
        }
      });
    });
