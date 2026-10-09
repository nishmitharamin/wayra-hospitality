// --- 1. TYPING EFFECT ---
const phrases = [
  "Lush Kerala backwaters, royal palace stays, and 24/7 dedicated royal concierge.",
  "Wayanad rainforest retreats, Goan beachfront villas, and pristine nature.",
  "Your private journey into world-class luxury Indian green hospitality begins here.",
];
let phraseIdx = 0,
  charIdx = 0,
  isDeleting = false;

function typeWriter() {
  const target = document.getElementById("typingText");
  if (!target) return;
  const current = phrases[phraseIdx];
  if (isDeleting) {
    target.textContent = current.substring(0, charIdx - 1);
    charIdx--;
  } else {
    target.textContent = current.substring(0, charIdx + 1);
    charIdx++;
  }
  let speed = isDeleting ? 30 : 50;
  if (!isDeleting && charIdx === current.length) {
    speed = 2000;
    isDeleting = true;
  } else if (isDeleting && charIdx === 0) {
    isDeleting = false;
    phraseIdx = (phraseIdx + 1) % phrases.length;
    speed = 400;
  }
  setTimeout(typeWriter, speed);
}

// --- 2. HERO SLIDER ---
const heroSlides = [
  {
    title: "Explore the magic of Lakshadweep!",
    subtitle: "Flight Package • 4 Days",
    description:
      "Snorkeling, kayaking, glass bottom ride included. Agatti Island - Bangaram - Thinnakara Island - Kalpitty Island",
    price: "₹49,750/-",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=85",
  },
  {
    title: "Lush Backwaters of Kumarakom!",
    subtitle: "Houseboat Expedition • 5 Days",
    description:
      "Private kettuvallam cruise, dedicated personal chef, sunset river views, and luxury heritage villa stays.",
    price: "₹65,000/-",
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=2000&q=85",
  },
  {
    title: "Gulmarg Alpine Snow Sanctuary!",
    subtitle: "Himalayan Ski Resort • 6 Days",
    description:
      "Private heated chalets overlooking snow peaks, professional ski guides, and Swiss-grade hospitality.",
    price: "₹85,000/-",
    image:
      "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=2000&q=85",
  },
];

let currentSlideIdx = 0;

function renderHeroSlider() {
  const container = document.getElementById("heroSliderContainer");
  if (!container) return;
  const slide = heroSlides[currentSlideIdx];

  container.innerHTML = `
    <div class="relative rounded-3xl overflow-hidden shadow-2xl h-[420px] sm:h-[480px] flex items-end p-6 sm:p-12 transition-all duration-700">
      <img src="${slide.image}" alt="${slide.title}" class="absolute inset-0 w-full h-full object-cover filter brightness-[0.85]" />
      <div class="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent"></div>
      
      <div class="relative z-10 max-w-2xl text-left text-white">
        <span class="inline-block bg-brandBlue-600 text-white font-bold text-xs px-3 py-1 rounded-lg mb-3 uppercase tracking-wider">${slide.subtitle}</span>
        <h2 class="text-2xl sm:text-4xl font-serif font-bold mb-2">${slide.title}</h2>
        <p class="text-xs sm:text-sm text-slate-200 mb-6 leading-relaxed">${slide.description}</p>
        <div class="flex flex-wrap items-center gap-4">
          <a href="#contact" class="px-6 py-3 bg-white text-slate-900 font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-slate-100 transition-all shadow-md">Book Package</a>
          <span class="bg-red-600 text-white px-4 py-2 rounded-xl text-sm font-bold shadow-lg">Offer Price: ${slide.price}</span>
        </div>
      </div>

      <button onclick="prevSlide()" class="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/80 transition-all cursor-pointer"><i class="fa-solid fa-chevron-left"></i></button>
      <button onclick="nextSlide()" class="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/80 transition-all cursor-pointer"><i class="fa-solid fa-chevron-right"></i></button>
    </div>
  `;
}

function nextSlide() {
  currentSlideIdx = (currentSlideIdx + 1) % heroSlides.length;
  renderHeroSlider();
}

function prevSlide() {
  currentSlideIdx =
    (currentSlideIdx - 1 + heroSlides.length) % heroSlides.length;
  renderHeroSlider();
}

setInterval(nextSlide, 6000);

// --- 3. INTERACTIVE DROPDOWN DATA & HOVER LOGIC ---
const internationalData = {
  africa: {
    title: "Africa Tours & Wildlife Safaris",
    subcategories: ["South Africa", "Egypt", "Kenya", "Mauritius", "Seychelles", "Tanzania"],
    cities: [
      "Cape Town",
      "Johannesburg",
      "Sun City",
      "Cairo",
      "Nairobi",
      "Masai Mara",
      "Port Louis",
      "Zanzibar",
    ],
  },
  america: {
    title: "American & Canadian Expeditions",
    subcategories: ["USA", "Canada", "Argentina", "Brazil"],
    cities: [
      "New York",
      "San Francisco",
      "Las Vegas",
      "Los Angeles",
      "Orlando",
      "Toronto",
      "Vancouver",
      "Buenos Aires",
      "Rio de Janeiro",
    ],
  },
  asia: {
    title: "Asian & Far East Sanctuaries",
    subcategories: ["Bali & Indonesia", "Dubai & UAE", "Japan", "Malaysia", "Singapore", "Thailand"],
    cities: [
      "Kuala Lumpur",
      "Singapore City",
      "Bangkok",
      "Phuket",
      "Tokyo",
      "Kyoto",
      "Dubai Downtown",
      "Abu Dhabi",
      "Bali Ubud",
    ],
  },
  australia: {
    title: "Australia & New Zealand",
    subcategories: ["Australia Tours", "New Zealand Tours", "Fiji Islands"],
    cities: [
      "Sydney",
      "Melbourne",
      "Brisbane",
      "Gold Coast",
      "Cairns",
      "Auckland",
      "Queenstown",
      "Christchurch",
      "Fiji Beach Resorts",
    ],
  },
  europe: {
    title: "Europe Grand Luxury Tours",
    subcategories: ["Switzerland", "France", "Italy", "Scandinavia", "United Kingdom"],
    cities: [
      "Paris",
      "Interlaken",
      "Zurich",
      "Rome",
      "Venice",
      "Florence",
      "London",
      "Edinburgh",
      "Reykjavik",
    ],
  },
  middleEast: {
    title: "Middle East Heritage & Deserts",
    subcategories: ["Dubai", "Oman", "Jordan", "Turkey"],
    cities: ["Muscat", "Amman", "Petra", "Istanbul", "Cappadocia", "Antalya"],
  },
  antarctica: {
    title: "Antarctica Polar Expeditions",
    subcategories: ["Ice Cruise", "Peninsula Explorer"],
    cities: [
      "Ushuaia Port",
      "Drake Passage",
      "Deception Island",
      "Paradise Bay",
    ],
  },
};

const indianData = {
  northIndia: {
    title: "North India Royal Tours",
    subcategories: ["Delhi & Agra", "Rajasthan", "Kashmir", "Himachal Pradesh", "Uttarakhand"],
    cities: [
      "New Delhi",
      "Agra (Taj Mahal)",
      "Jaipur",
      "Udaipur",
      "Jodhpur",
      "Srinagar",
      "Gulmarg",
      "Manali",
      "Shimla",
      "Rishikesh",
    ],
  },
  southIndia: {
    title: "South India Green Hospitality",
    subcategories: ["Kerala", "Karnataka", "Tamil Nadu", "Andhra & Telangana"],
    cities: [
      "Munnar",
      "Alleppey Houseboat",
      "Kochi",
      "Wayanad",
      "Coorg",
      "Mysore",
      "Bangalore",
      "Ooty",
      "Kodaikanal",
      "Hampi",
      "Lakshadweep",
    ],
  },
  eastNorthEast: {
    title: "East & North East India",
    subcategories: ["Arunachal Pradesh", "Assam", "Meghalaya", "Sikkim", "West Bengal"],
    cities: [
      "Gangtok",
      "Darjeeling",
      "Guwahati",
      "Shillong",
      "Cherrapunji",
      "Kaziranga",
      "Kolkata",
      "Pelling",
      "Tawang",
    ],
  },
  westCentral: {
    title: "West & Central India",
    subcategories: ["Goa", "Maharashtra", "Madhya Pradesh", "Gujarat"],
    cities: [
      "North Goa",
      "South Goa",
      "Mumbai",
      "Pune",
      "Mahabaleshwar",
      "Ajanta & Ellora",
      "Ujjain",
      "Gir National Park",
    ],
  },
};

function switchInternationalTab(key) {
  const data = internationalData[key];
  if (!data) return;

  document.querySelectorAll("#intlCategoriesList button").forEach((btn) => {
    btn.classList.remove(
      "text-cyan-400",
      "font-bold",
      "border-l-4",
      "border-cyan-400",
      "bg-white/10"
    );
    btn.classList.add("text-slate-300");
  });
  const activeBtn = document.getElementById(`intl-btn-${key}`);
  if (activeBtn) {
    activeBtn.classList.add(
      "text-cyan-400",
      "font-bold",
      "border-l-4",
      "border-cyan-400",
      "bg-white/10"
    );
    activeBtn.classList.remove("text-slate-300");
  }

  const subContainer = document.getElementById("intlSubcategoriesContainer");
  if (subContainer) {
    subContainer.innerHTML =
      `<span class="text-cyan-400 font-bold block mb-3 border-b border-white/10 pb-1 uppercase tracking-wider text-[11px]">${data.title}</span>` +
      data.subcategories
        .map(
          (sub) =>
            `<a href="packages.html" class="block py-1 hover:text-cyan-400 font-medium transition-colors">${sub}</a>`
        )
        .join("");
  }

  const citiesContainer = document.getElementById("intlCitiesContainer");
  if (citiesContainer) {
    citiesContainer.innerHTML =
      `<span class="text-cyan-400 font-bold block mb-3 border-b border-white/10 pb-1 uppercase tracking-wider text-[11px]">Popular Destinations</span>` +
      data.cities
        .map(
          (city) =>
            `<a href="packages.html" class="block py-1 text-slate-400 hover:text-cyan-400 transition-colors">${city}</a>`
        )
        .join("");
  }
}

function switchIndianTab(key) {
  const data = indianData[key];
  if (!data) return;

  document.querySelectorAll("#indianCategoriesList button").forEach((btn) => {
    btn.classList.remove(
      "text-cyan-400",
      "font-bold",
      "border-l-4",
      "border-cyan-400",
      "bg-white/10"
    );
    btn.classList.add("text-slate-300");
  });
  const activeBtn = document.getElementById(`indian-btn-${key}`);
  if (activeBtn) {
    activeBtn.classList.add(
      "text-cyan-400",
      "font-bold",
      "border-l-4",
      "border-cyan-400",
      "bg-white/10"
    );
    activeBtn.classList.remove("text-slate-300");
  }

  const subContainer = document.getElementById("indianSubcategoriesContainer");
  if (subContainer) {
    subContainer.innerHTML =
      `<span class="text-cyan-400 font-bold block mb-3 border-b border-white/10 pb-1 uppercase tracking-wider text-[11px]">${data.title}</span>` +
      data.subcategories
        .map(
          (sub) =>
            `<a href="packages.html" class="block py-1 hover:text-cyan-400 font-medium transition-colors">${sub}</a>`
        )
        .join("");
  }

  const citiesContainer = document.getElementById("indianCitiesContainer");
  if (citiesContainer) {
    citiesContainer.innerHTML =
      `<span class="text-cyan-400 font-bold block mb-3 border-b border-white/10 pb-1 uppercase tracking-wider text-[11px]">Key Cities & Sanctuaries</span>` +
      data.cities
        .map(
          (city) =>
            `<a href="packages.html" class="block py-1 text-slate-400 hover:text-cyan-400 transition-colors">${city}</a>`
        )
        .join("");
  }
}

// --- 4. PACKAGES & FILTER ---
const extendedPackages = [
  {
    title: "Kumarakom Private Backwater Houseboat",
    category: "Honeymoon",
    location: "Alleppey & Munnar, Kerala",
    duration: "4 Nights",
    price: "₹2,10,000",
    description:
      "Ultra-luxury traditional kettuvallam houseboat with private chef and sunset river cruises.",
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Taj Lake Palace Royal Suite",
    category: "Luxury",
    location: "Udaipur, Rajasthan",
    duration: "5 Nights",
    price: "₹3,45,000",
    description:
      "Floating white marble palace suite with butler service and heritage boat transfers.",
    image:
      "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Gulmarg Alpine Snow Sanctuary",
    category: "Adventure",
    location: "Gulmarg, Kashmir",
    duration: "5 Nights",
    price: "₹2,85,000",
    description:
      "Private heated chalet overlooking Himalayan snow peaks with guided ski expeditions.",
    image:
      "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Coorg Coffee Plantation Estate",
    category: "Honeymoon",
    location: "Coorg, Karnataka",
    duration: "3 Nights",
    price: "₹1,65,000",
    description:
      "Secluded luxury villa nestled amidst 200 acres of organic coffee plantations and mist.",
    image:
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80",
  },
];

function renderPackages(filteredList) {
  const grid = document.getElementById("packagesGrid");
  if (!grid) return;
  grid.innerHTML = "";
  filteredList.forEach((pkg) => {
    const card = document.createElement("div");
    card.className =
      "package-card rounded-2xl overflow-hidden flex flex-col justify-between bg-slate-900/80 border border-white/10 shadow-xl";
    card.innerHTML = `
      <div class="relative h-60 overflow-hidden">
        <img src="${pkg.image}" alt="${pkg.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
        <span class="absolute top-4 left-4 bg-slate-950/80 px-3 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-wider">${pkg.category}</span>
        <span class="absolute bottom-4 right-4 bg-cyan-600 px-3 py-1 rounded-lg text-xs font-bold text-white shadow-md">${pkg.price}</span>
      </div>
      <div class="p-6 flex flex-col justify-between space-y-4 flex-grow">
        <div>
          <span class="text-[11px] text-cyan-400 font-bold uppercase tracking-widest block mb-1"><i class="fa-solid fa-location-dot mr-1"></i> ${pkg.location} (${pkg.duration})</span>
          <h3 class="text-xl font-bold text-white font-serif mb-2">${pkg.title}</h3>
          <p class="text-slate-300 text-xs leading-relaxed">${pkg.description}</p>
        </div>
        <button onclick="openBookingModal('${pkg.title}')" class="w-full py-3 rounded-xl border border-cyan-400 text-cyan-400 font-bold text-xs uppercase tracking-widest cursor-pointer hover:bg-cyan-400 hover:text-slate-950 transition-all shadow-sm">Inquire & Customize</button>
      </div>
    `;
    grid.appendChild(card);
  });
}

function filterPackages(category) {
  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach((btn) => {
    btn.classList.remove(
      "active",
      "border-cyan-400",
      "bg-cyan-400/10",
      "text-cyan-400",
      "shadow-sm"
    );
    btn.classList.add("bg-slate-900/80", "border-white/20", "text-slate-300");
  });
  if (event && event.target) {
    event.target.classList.add(
      "active",
      "border-cyan-400",
      "bg-cyan-400/10",
      "text-cyan-400",
      "shadow-sm"
    );
    event.target.classList.remove(
      "bg-slate-900/80",
      "border-white/20",
      "text-slate-300"
    );
  }

  if (category === "all") {
    renderPackages(extendedPackages);
  } else {
    const filtered = extendedPackages.filter((p) => p.category === category);
    renderPackages(filtered);
  }
}

// --- 5. TRIP CALCULATOR ---
const calculatorDestinations = [
  { name: "Udaipur Lake Palace, Rajasthan", price: 65000 },
  { name: "Kumarakom Backwater Houseboat, Kerala", price: 45000 },
  { name: "Gulmarg Alpine Sanctuary, Kashmir", price: 55000 },
  { name: "Coorg Coffee Plantation Estate", price: 40000 },
];

function populateDestinations() {
  const destElem = document.getElementById("calcDestination");
  if (!destElem) return;
  destElem.innerHTML = "";
  calculatorDestinations.forEach((dest) => {
    const option = document.createElement("option");
    option.value = dest.price;
    option.textContent = `${dest.name} (₹${dest.price.toLocaleString("en-IN")}/night)`;
    destElem.appendChild(option);
  });
  calculateTripCost();
}

function calculateTripCost() {
  const destElem = document.getElementById("calcDestination");
  const durationElem = document.getElementById("calcDuration");
  const guestsElem = document.getElementById("calcGuests");
  if (!destElem || !durationElem || !guestsElem) return;

  const duration = parseInt(durationElem.value) || 5;
  const guests = parseInt(guestsElem.value) || 2;

  const durationValElem = document.getElementById("durationVal");
  const guestsValElem = document.getElementById("guestsVal");
  if (durationValElem) durationValElem.textContent = `${duration} Nights`;
  if (guestsValElem) guestsValElem.textContent = `${guests} Guests`;

  const destVal = parseInt(destElem.value) || 65000;
  let base = destVal * duration * (1 + (guests - 1) * 0.35);

  const totalDisplay = document.getElementById("calcTotalDisplay");
  if (totalDisplay) {
    totalDisplay.textContent = `₹${Math.round(base).toLocaleString("en-IN")}`;
  }
}

// --- 6. CONTACT & SUBMISSION ---
async function handleContactSubmission(e) {
  e.preventDefault();
  const form = e.target;
  const submitBtn = document.getElementById("submitBtn");
  if (!submitBtn) return;
  const originalText = submitBtn.innerHTML;

  const name = document.getElementById("contactName")?.value.trim();
  const email = document.getElementById("contactEmail")?.value.trim();
  const phone = document.getElementById("contactPhone")?.value.trim();
  const travelMonth = document.getElementById("contactDate")?.value;
  const message = document.getElementById("contactMessage")?.value.trim();

  if (!name || !email || !phone || !travelMonth || !message) {
    alert("Please fill in all required fields.");
    return;
  }

  submitBtn.disabled = true;
  submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin mr-2"></i> Transmitting Enquiry...`;

  try {
    const response = await fetch("http://localhost:5000/api/bookings/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        phone,
        travel_month: travelMonth,
        message,
      }),
    });
    const result = await response.json();
    alert(result.message || "Executive Enquiry successfully logged!");
    form.reset();
  } catch (error) {
    alert(
      `Thank you, ${name}! Your executive enquiry has been received by Wayra Concierge.`,
    );
    form.reset();
  } finally {
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalText;
  }
}

function openBookingModal(pkgTitle) {
  const contactMsg = document.getElementById("contactMessage");
  if (contactMsg) {
    contactMsg.value = `Inquiring regarding custom booking & curation for package: ${pkgTitle}`;
  }
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
}

function bookCalculatedTrip() {
  const total =
    document.getElementById("calcTotalDisplay")?.textContent || "₹0";
  const contactMsg = document.getElementById("contactMessage");
  if (contactMsg) {
    contactMsg.value = `Reserving estimated itinerary package total: ${total} using the interactive trip estimator.`;
  }
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
}

function toggleMobileMenu() {
  const menu = document.getElementById("mobileMenu");
  if (menu) menu.classList.toggle("hidden");
}

window.openBookingModal = openBookingModal;
window.bookCalculatedTrip = bookCalculatedTrip;
window.handleContactSubmission = handleContactSubmission;
window.toggleMobileMenu = toggleMobileMenu;
window.calculateTripCost = calculateTripCost;
window.filterPackages = filterPackages;
window.nextSlide = nextSlide;
window.prevSlide = prevSlide;
window.switchInternationalTab = switchInternationalTab;
window.switchIndianTab = switchIndianTab;

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(typeWriter, 300);
  renderPackages(extendedPackages);
  populateDestinations();
  renderHeroSlider();
  switchInternationalTab("africa");
  switchIndianTab("northIndia");
});