/**
 * Main JavaScript for the Robert Robinson Living Biography prototype
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize with the first section or from URL hash
    const hash = window.location.hash.substring(1);
    if (hash && document.getElementById(hash + '-section')) {
        showSection(hash);
    } else {
        showSection('story');
    }

    // Set up modal functionality for photos
    const modal = document.getElementById('photo-modal');
    const modalImage = document.getElementById('modal-image');
    const closeBtn = document.querySelector('.modal-close');

    // Setup photo click handlers
    document.querySelectorAll('.photo').forEach(photo => {
        photo.addEventListener('click', function() {
            // In a real implementation, this would use the photo's actual image source
            modalImage.src = 'assets/images/placeholder.jpg'; // Placeholder image path
            modal.classList.add('active');
        });
    });

    // Close modal when clicking the close button
    closeBtn.addEventListener('click', function() {
        modal.classList.remove('active');
    });

    // Close modal when clicking outside the content
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });

    // Handle the chat form submission (placeholder functionality)
    const chatForm = document.querySelector('.chat-input-container');
    if (chatForm) {
        chatForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('In a full implementation, this would process your question and generate a response from Robert.');
        });
    }

    // Add sticky navigation effect
    window.addEventListener('scroll', function() {
        const navBar = document.querySelector('.nav-bar');
        if (window.scrollY > 100) {
            navBar.classList.add('scrolled');
        } else {
            navBar.classList.remove('scrolled');
        }
    });

    // Add click functionality to voice players
    document.querySelectorAll('.voice-player').forEach(player => {
        player.addEventListener('click', function() {
            alert('In a full implementation, this would play an audio clip of Robert speaking.');
        });
    });
});

// Section Navigation
function showSection(sectionName) {
    // Hide all content sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.style.display = 'none';
    });
    
    // Show the selected section
    document.getElementById(sectionName + '-section').style.display = 'block';
    
    // Update active navigation item
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    
    document.querySelector('.nav-item[data-section="' + sectionName + '"]').classList.add('active');

    // Update URL hash for bookmarking
    window.location.hash = sectionName;
}
