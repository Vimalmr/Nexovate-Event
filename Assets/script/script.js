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