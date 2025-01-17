// Select all "Learn More" buttons
const learnMoreButtons = document.querySelectorAll('.learn-more-btn');

// Modal Elements
const modal = document.createElement('div');
modal.classList.add('modal');
document.body.appendChild(modal);

modal.innerHTML = `
    <div class="modal-content">
        <span class="close-modal">&times;</span>
        <h2 id="modal-title">Service Title</h2>
        <p id="modal-description">Service Description</p>
    </div>
`;

// Modal Functionality
const modalTitle = modal.querySelector('#modal-title');
const modalDescription = modal.querySelector('#modal-description');
const closeModal = modal.querySelector('.close-modal');

// Service Data (Example Data)
const serviceDetails = {
    cleaning: {
        title: "Teeth Cleaning",
        description: "Professional teeth cleaning to remove plaque and tartar for a healthier smile."
    },
    whitening: {
        title: "Teeth Whitening",
        description: "Brighten your teeth with our advanced and safe whitening treatments."
    },
    fillings: {
        title: "Dental Fillings",
        description: "Restore damaged teeth with our durable and aesthetic fillings."
    },
    "root-canal": {
        title: "Root Canal",
        description: "Save your natural teeth with our painless root canal treatments."
    },
    "Laser Gum Therapy": {
        title: "Laser Gum Therapy",
        description: "Treat gum disease with minimally invasive laser technology."
    },
    "Tooth Extractions": {
        title: "Tooth Extractions",
        description: "Safe and comfortable tooth removal procedures."
    },
    "Gum Grafting": {
        title: "Gum Grafting",
        description: "Restore your gumline with this effective procedure."
    },
    Braces: {
        title: "Braces",
        description: "Straighten your teeth with modern orthodontic solutions."
    },
    Veneers: {
        title: "Veneers",
        description: "Improve your smile with custom-made dental veneers."
    }
};

// Event Listener for "Learn More" Buttons
learnMoreButtons.forEach(button => {
    button.addEventListener('click', () => {
        const service = button.dataset.service;
        if (serviceDetails[service]) {
            modalTitle.textContent = serviceDetails[service].title;
            modalDescription.textContent = serviceDetails[service].description;
            modal.style.display = 'flex';
        }
    });
});

// Close Modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close Modal When Clicking Outside of Content
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
