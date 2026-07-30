/* Pathway Global — Interactive Features & Data Feeds */

// Toggle Mobile Navigation Drawer
function toggleDrawer() {
    const drawer = document.getElementById('drawer');
    if (drawer) {
        drawer.classList.toggle('hidden');
    }
}

// Animate Statistics Counter
function animateStats(id, end, suffix = "") {
    let current = 0;
    const duration = 2000; // Animation duration in milliseconds
    const frameRate = 60; // Frames per second
    const totalFrames = (duration / 1000) * frameRate;
    const step = end / totalFrames;
    const element = document.getElementById(id);
    
    if (!element) return;
    
    let frame = 0;
    const timer = setInterval(() => {
        frame++;
        current += step;
        if (frame >= totalFrames) {
            element.innerText = Math.floor(end) + suffix;
            clearInterval(timer);
        } else {
            element.innerText = Math.floor(current) + suffix;
        }
    }, 1000 / frameRate);
}

// Country Information Tab Data
const countryData = {
    canada: {
        title: "Canada",
        bgImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuA2JCVLRnwP5HUQobX9G9U_V6BPPERcq2EWQBvEXd2voz-J9DkrqV8cBOFEd8-wHV2DUux7BH2VJyOiKw1MqDomgcsZJL7JwACyYyuJG-r5UDMVHRFFsjvk5MJpKIW2F-s_SkZe2qMDoIRZi68ZBubc1mv6ep1Z6kAshW2JeeAxfVfq-ZBk8TGHA8cPYINBiw55UrTDVn2iAfwwCavF0yZkMkCxWrMVp3u6WwOV2AbwXB6odUsKdS_Y",
        universities: "University of Toronto, McGill, UBC",
        successRate: "85% — Highest in region",
        postStudyWork: "Up to 3 Years PGWP",
        stamp: "APPROVED IND → CA"
    },
    uk: {
        title: "United Kingdom",
        bgImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuC8ym4f-tjbZF431A1zOsp1Uzh7j6JD-koHwFuISEXqcbidzL_dIET1caQZfmd_RnwibeOCehqrEG5JZmmsXAb7_yP7dy4ixpEy_Bj2bkDzNc0de2dVxN3EDm8VWRLSjXxzATYn4w2FS0ENqDwgyKJA8lg39-KjGK0KrakhpunGpUY0LIKxHBfXx5mrdZBxlFYH-_YP1RHYIOLa9uN8qWfwqwHe6Hi93F2NV_cEkbKh2PI3lsIJyU6i",
        universities: "King's College, Greenwich, Hull",
        successRate: "95% — Exceptional processing",
        postStudyWork: "2 Years Graduate Route",
        stamp: "APPROVED IND → UK"
    },
    germany: {
        title: "Germany",
        bgImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAtglLFeLlI8R4694XT9PofTbg7cs__asjUXSU-9vz-tdRraZ_W2aFM6EJ2rkTb4vg9ima75OyDJBAagjEssiu5p9ivhSi_69M3SQmTuWIEi-PZpdYUlQk_ZDY9q4vYFMqAUCjRSFPQ3eI3wAQx3IlB3vDnHK4CrlqgzdFo0KcypwpxP4CjCVX-8gfLpEPVFgjx16Cy3A3O571SQiAJt1Z7WHgOuvFxTstIChoMWWYj0lWE47tixqaj",
        universities: "TU Munich, RWTH Aachen, LMU Berlin",
        successRate: "98% — Precision filings",
        postStudyWork: "18 Months Job Seeker",
        stamp: "APPROVED IND → DE"
    },
    georgia: {
        title: "Georgia",
        bgImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBRQzbTktOBQ9DJxUh3e6H40cBO7QKQXLMuS_ZjXmAKNPCVvysq8xFeBEtwyu6uAK2RRDrSGTPGt25ullPS8114_aX8S1Z13cNjUgMUJ4l5OnXabO3IJLwKmV5dfbrMV8vA6FToeMinQPv4hAhOxw7Sl2WY5VjxMRSetHLsyjDUVv3w-O5JwMP3ZcGpv0l0qARMvVhVnQDR8k4G8Jt77QHr0Q5a_FEg63KyIV9vAUm7r2jEHO6jJvi4",
        universities: "Tbilisi State Medical University",
        successRate: "98.2% — WHO & NMC Approved",
        postStudyWork: "European Internship Pathways",
        stamp: "APPROVED IND → GE"
    }
};

// Switch Active Country Card details
function switchCountry(countryKey) {
    const data = countryData[countryKey];
    if (!data) return;

    // Toggle active classes on tab buttons
    document.querySelectorAll('.country-tab-btn').forEach(btn => {
        if (btn.dataset.country === countryKey) {
            btn.classList.remove('bg-slate-100', 'text-slate-600');
            btn.classList.add('bg-primary', 'text-white');
        } else {
            btn.classList.remove('bg-primary', 'text-white');
            btn.classList.add('bg-slate-100', 'text-slate-600');
        }
    });

    // Update Card Content
    const titleEl = document.getElementById('country-card-title');
    const imageEl = document.getElementById('country-card-image');
    const universitiesEl = document.getElementById('country-card-universities');
    const successEl = document.getElementById('country-card-success');
    const pswEl = document.getElementById('country-card-psw');
    const stampEl = document.getElementById('country-card-stamp');

    if (titleEl) titleEl.innerText = data.title;
    if (imageEl) imageEl.style.backgroundImage = `url('${data.bgImage}')`;
    if (universitiesEl) universitiesEl.innerText = data.universities;
    if (successEl) successEl.innerText = data.successRate;
    if (pswEl) pswEl.innerText = data.postStudyWork;
    if (stampEl) stampEl.innerText = data.stamp;
}

// Live Admissions Feed Data
const liveAdmits = [
    { name: "Aarav S.", dest: "Stanford University, USA", course: "MS Computer Science", value: "$42K Scholarship", status: "Approved" },
    { name: "Rahul S.", dest: "Technical University of Munich", course: "MD / MBBS Medicine", value: "Tuition-Free", status: "Visa Issued" },
    { name: "Aanya M.", dest: "Greenwich University, London", course: "BSc Nursing (Hons)", value: "Placement Confirmed", status: "Approved" },
    { name: "Karan R.", dest: "University of Toronto, Canada", course: "M.Eng Data Science", value: "$28K Scholarship", status: "Approved" },
    { name: "Meera V.", dest: "TU Berlin, Germany", course: "MSc Automotive Eng", value: "Tuition-Free", status: "Visa Issued" }
];

let feedIndex = 0;
function rotateAdmissionsFeed() {
    const feedContainer = document.getElementById('live-admits-feed');
    if (!feedContainer) return;

    feedIndex = (feedIndex + 1) % liveAdmits.length;
    const item = liveAdmits[feedIndex];

    feedContainer.style.opacity = 0;
    setTimeout(() => {
        feedContainer.innerHTML = `
            <div class="flex items-center justify-between p-3.5 bg-white rounded-xl border border-slate-100 shadow-sm hover-lift">
                <div class="flex items-center gap-3">
                    <span class="pulse-dot text-emerald-500"></span>
                    <div>
                        <p class="text-xs font-extrabold text-slate-800">${item.name} → ${item.dest}</p>
                        <p class="text-[10px] text-slate-400 font-semibold mt-0.5">${item.course}</p>
                    </div>
                </div>
                <div class="text-right">
                    <p class="text-xs font-bold text-primary">${item.value}</p>
                    <span class="inline-block text-[9px] bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider mt-0.5">${item.status}</span>
                </div>
            </div>
        `;
        feedContainer.style.opacity = 1;
    }, 400);
}

// Initialize Interactive Components
document.addEventListener('DOMContentLoaded', () => {
    // 1. Stats Counter Animation on view
    const statsContainer = document.getElementById('stats-container');
    if (statsContainer) {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                animateStats('stat-placements', 5240, '+');
                animateStats('stat-success', 98, '.2%');
                animateStats('stat-countries', 9, '+');
                animateStats('stat-partners', 700, '+');
                observer.disconnect();
            }
        }, { threshold: 0.1 });
        observer.observe(statsContainer);
    }

    // 2. Budget sliders
    const budgetSlider = document.getElementById('budget-slider');
    const budgetVal = document.getElementById('budget-val');
    if (budgetSlider && budgetVal) {
        budgetSlider.addEventListener('input', (e) => {
            budgetVal.innerText = '$' + e.target.value + 'k';
        });
    }

    // 3. Header Shadow Scroll effect
    window.addEventListener('scroll', () => {
        const header = document.getElementById('main-nav');
        if (!header) return;
        if (window.scrollY > 20) {
            header.classList.add('shadow-md', 'bg-white/95');
            header.classList.remove('shadow-sm', 'bg-white/85');
        } else {
            header.classList.add('shadow-sm', 'bg-white/85');
            header.classList.remove('shadow-md', 'bg-white/95');
        }
    });

    // 4. Country Tab Switches Listener
    document.querySelectorAll('.country-tab-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            switchCountry(e.currentTarget.dataset.country);
        });
    });

    // 5. Accordion Toggling
    document.querySelectorAll('.faq-trigger').forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            const faqItem = e.currentTarget.closest('.faq-item');
            const answer = faqItem.querySelector('.faq-answer');
            const icon = faqItem.querySelector('.faq-icon');
            
            // Toggle active state
            if (answer.classList.contains('hidden')) {
                answer.classList.remove('hidden');
                icon.style.transform = 'rotate(180deg)';
                faqItem.classList.add('border-primary/30', 'bg-slate-50/50');
            } else {
                answer.classList.add('hidden');
                icon.style.transform = 'rotate(0deg)';
                faqItem.classList.remove('border-primary/30', 'bg-slate-50/50');
            }
        });
    });

    // 6. Live Admit Feed loop
    setInterval(rotateAdmissionsFeed, 4000);
});

// Interactive Comparison Advisor
function calculateAdvisor() {
    const country = document.getElementById('advisor-country').value;
    const level = document.getElementById('advisor-level').value;
    const outputContainer = document.getElementById('advisor-output');
    const textEl = document.getElementById('advisor-text');
    
    if (!outputContainer || !textEl) return;
    
    let advice = "";
    
    if (country === 'georgia') {
        if (level === 'mbbs') {
            advice = `<strong>Recommendation: Pathway Global (Highly Recommended)</strong><br><br>
            Georgia is a premium medical study hub with WHO & NMC approved medical colleges. 
            <ul class="list-disc pl-5 mt-2 space-y-1 text-slate-500">
                <li><strong>Pathway Global Advantage:</strong> Unlike general placement agencies (such as IDP or Edwise) who only process admissions, Pathway Global has direct affiliations with Tbilisi State Medical University and other top institutions. We manage your direct enrollment, NMC screening preparations, and pre-departure medical orientations.</li>
                <li><strong>Local Support:</strong> Pathway provides full on-ground support in Tbilisi including hostel check-ins, local residency permit registration, and post-arrival tutoring.</li>
            </ul>`;
        } else {
            advice = `<strong>Recommendation: Pathway Global (Specialist Services)</strong><br><br>
            While Georgia is primarily known for medical courses (MBBS/MD), Pathway Global can help you coordinate with private institutes for other streams. However, we suggest considering Germany or Ireland for general degree programs.`;
        }
    } else if (country === 'uk' && level === 'nursing') {
        advice = `<strong>Recommendation: Pathway Global (Highly Recommended)</strong><br><br>
        The United Kingdom has a high demand for nursing professionals.
        <ul class="list-disc pl-5 mt-2 space-y-1 text-slate-500">
            <li><strong>Pathway Global Advantage:</strong> We provide specialized nursing placements directly connected to NHS hospital trusts. While larger chains like IDP Education provide general university placement services, Pathway Global guides you through direct OSCE registration guidance, practice placement tracking, and local post-landing support in the UK.</li>
            <li><strong>IELTS/OET Support:</strong> Certified expert test tutoring is provided directly in our local hubs.</li>
        </ul>`;
    } else if (country === 'germany') {
        advice = `<strong>Recommendation: Pathway Global (SOP & Visa Specialists)</strong><br><br>
        Germany offers tuition-free higher education, making it highly competitive.
        <ul class="list-disc pl-5 mt-2 space-y-1 text-slate-500">
            <li><strong>Pathway Global Advantage:</strong> Because admissions are based strictly on profile strength, Pathway Global's team does up to 5 rounds of Statement of Purpose (SOP) reviews. Large general consultancies like Edwise or SIEC process high volumes of templated applications; Pathway Global operates as a boutique admissions lab, verifying every detail using ex-consulate officer audits.</li>
            <li><strong>Post-Study Work:</strong> You receive 18 months of Job Seeker Visa mapping.</li>
        </ul>`;
    } else {
        // General Canada / USA / Australia
        advice = `<strong>Recommendation: Balanced (IDP / Edwise for mass volume, Pathway Global for premium, high-converting visa support)</strong><br><br>
        For general undergraduate and postgraduate degrees in Canada, USA, and Australia:
        <ul class="list-disc pl-5 mt-2 space-y-1 text-slate-500">
            <li><strong>IDP Education:</strong> Offers co-ownership of the IELTS test and physical branch networks across major cities like Chennai. Ideal for standard admissions tracking.</li>
            <li><strong>Edwise / SIEC:</strong> Provide wide ranges of university options and coordinates bank education loan assistance.</li>
            <li><strong>Pathway Global:</strong> If you have minor profile gaps, past visa rejections, or require intensive personal Statement of Purpose (SOP) writing sessions, Pathway Global provides boutique 1-to-1 assistance. Our ex-consulate visa filing checks secure a 98.2% approval rate.</li>
        </ul>`;
    }
    
    textEl.innerHTML = advice;
    outputContainer.classList.remove('hidden');
}

// Show Delayed Intake Urgency Popup after 15 seconds (15000ms)
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        if (sessionStorage.getItem('intake_popup_closed') === 'true') return;
        const popup = document.getElementById('intake-urgency-popup');
        if (popup) {
            popup.classList.remove('translate-y-full', 'opacity-0', 'pointer-events-none');
            popup.classList.add('translate-y-0', 'opacity-100');
        }
    }, 15000);
});

// Close Urgency Popup globally accessible
window.closeIntakePopup = function() {
    const popup = document.getElementById('intake-urgency-popup');
    if (popup) {
        popup.classList.remove('translate-y-0', 'opacity-100');
        popup.classList.add('translate-y-full', 'opacity-0', 'pointer-events-none');
        sessionStorage.setItem('intake_popup_closed', 'true');
    }
};

// Scroll to enquiry form and close popup
window.scrollToEnquiry = function() {
    window.closeIntakePopup();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
    }
};

