document.addEventListener('DOMContentLoaded', function() {
    // Get all More Info buttons
    const moreInfoButtons = document.querySelectorAll('.service-more-info-btn');
    const servicePopup = document.getElementById('service-popup');
    const popupClose = document.querySelector('.service-popup-close');
    const popupTitle = document.querySelector('.service-popup-title');
    const popupDescription = document.querySelector('.service-popup-description');
    const popupGallery = document.querySelector('.service-popup-gallery');

    // Service data (you can expand this with more services and details)
    let serviceData = {
        'luxury_accommodation': {
            title: 'LUXURY ACCOMMODATION',
            description: 'Welcome your guests to the pinnacle of comfort and luxury. With 40 well-appointed rooms, including exquisite bridal and groom suites, Aarya Convention offers an unmatched stay experience. Each room is thoughtfully designed to provide privacy, relaxation, and a touch of opulence.',
            features: [
                'Premium interiors with modern amenities',
                'Exclusive bridal and groom suites for a special touch',
                'Personalized hospitality services to make every stay memorable'
            ],
            images: []
        },
        'catering': {
            title: 'IN-HOUSE CATERING & DECOR',
            description: 'Delight your guests with an unmatched culinary experience and breathtaking decor, all crafted in-house to suit your unique vision. Our expert chefs curate diverse menus that cater to every palate, while our decor team transforms spaces into masterpieces of elegance and charm.',
            features: [
                'Diverse and customizable menu options for every cuisine',
                'Stunning decor tailored to match your theme and style',
                'Experienced professionals ensuring perfection at every step'
            ],
            images: []
        },
        'corporate': {
            title: 'CORPORATE-FRIENDLY SPACES',
            description: 'Host your business events in style with our fully equipped, modern spaces tailored to meet the demands of corporate gatherings. From expos and conferences to boardroom meetings, Aarya Convention ensures a professional and seamless experience.',
            features: [
                'Advanced audiovisual systems for impactful presentations',
                'Flexible layouts to accommodate events of any scale',
                'Professional ambiance designed to inspire productivity and collaboration'
            ],
            images: []
        },
        'parking': {
            title: 'EXPANSIVE PARKING SPACE',
            description: 'Say goodbye to parking hassles! Aarya Convention boasts a massive 8-acre parking facility that ensures smooth and convenient access for all your guests. Whether it\'s a wedding, corporate event, or expo, we\'ve got ample space to accommodate vehicles of any size.',
            features: [
                'Hassle-free parking for events big and small',
                'Secure, well-organized, and easy to navigate',
                'Designed for seamless traffic flow, saving your guests time and effort'
            ],
            images: []
        }
    };

    // Fetch gallery-images.json and update serviceData
    fetch('gallery-images.json')
        .then(res => res.json())
        .then(galleryImages => {
            // Map galleryImages keys to serviceData keys
            const mapping = {
                'luxury_accomodation': { serviceKey: 'luxury_accommodation', folder: 'luxury_accomodation' },
                'in_house_catering_n_Decor': { serviceKey: 'catering', folder: 'in_house_catering_n_Decor' },
                'corporate_space': { serviceKey: 'corporate', folder: 'corporate_space' },
                'parking_space': { serviceKey: 'parking', folder: 'parking_space' }
            };
            Object.entries(mapping).forEach(([galleryKey, {serviceKey, folder}]) => {
                if (serviceData[serviceKey] && galleryImages[galleryKey]) {
                    serviceData[serviceKey].images = galleryImages[galleryKey].map(filename => `assets/photos/${folder}/${filename}`);
                }
            });
        })
        .catch(error => console.error('Error fetching gallery images:', error));

    // Function to open the popup
    function openPopup(serviceId) {
        const service = serviceData[serviceId];
        if (!service) return;

        // Update popup content
        popupTitle.textContent = service.title;
        
        // Update description and features
        let descriptionHTML = `<p>${service.description}</p>`;
        
        // Add features list if available
        if (service.features && service.features.length > 0) {
            descriptionHTML += '<ul class="service-features-list">';
            service.features.forEach(feature => {
                descriptionHTML += `<li>${feature}</li>`;
            });
            descriptionHTML += '</ul>';
        }
        
        popupDescription.innerHTML = descriptionHTML;
        
        // Update gallery
        popupGallery.innerHTML = '';
        service.images.forEach((imageSrc, index) => {
            const img = document.createElement('img');
            img.src = imageSrc;
            img.alt = `${service.title} - Image ${index + 1}`;
            img.loading = 'lazy';
            popupGallery.appendChild(img);
        });

        // Show the popup
        servicePopup.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Prevent scrolling
        
        // Scroll to top of popup content
        servicePopup.scrollTop = 0;
    }

    // Function to close the popup
    function closePopup() {
        servicePopup.style.display = 'none';
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    }

    // Add click event to all More Info buttons
    moreInfoButtons.forEach(button => {
        button.addEventListener('click', function() {
            const serviceId = this.getAttribute('data-service');
            openPopup(serviceId);
        });
    });

    // Close popup when clicking the close button
    popupClose.addEventListener('click', closePopup);

    // Close popup when clicking outside the content
    servicePopup.addEventListener('click', function(e) {
        if (e.target === servicePopup) {
            closePopup();
        }
    });

    // Close popup with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && servicePopup.style.display === 'flex') {
            closePopup();
        }
    });
});
