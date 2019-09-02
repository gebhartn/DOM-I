const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

// Create elements
const help = document.createElement("a");
const please = document.createElement("a");
please.textContent = "Please";
please.style.color = "green";
help.textContent = "Help";
help.style.color = "green";

// Add navigation content
const navigation = document.querySelectorAll("a");
const nav = document.querySelector("nav");
nav.appendChild(help);
nav.prepend(please);

for (let i = 0; i < navigation.length; i++) {
  navigation[i].textContent = siteContent.nav[`nav-item-${i + 1}`];
  navigation[i].style.color = "green";
}

// Add CTA Content
const ctaText = document.querySelector(".cta h1");
ctaText.textContent = siteContent["cta"]["h1"];

const ctaButton = document.querySelector(".cta button");
ctaButton.textContent = siteContent.cta.button;

const ctaImage = document.querySelector(".cta img");
ctaImage.setAttribute("src", siteContent.cta["img-src"]);

// Add Main section content
const mainImage = document.querySelector(".main-content img");
mainImage.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

const mainHeader = document.querySelectorAll(".main-content h4");
const mainParagraph = document.querySelectorAll(".main-content p");

mainHeader[0].textContent = siteContent["main-content"]["features-h4"];
mainHeader[1].textContent = siteContent["main-content"]["about-h4"];
mainHeader[2].textContent = siteContent["main-content"]["services-h4"];
mainHeader[3].textContent = siteContent["main-content"]["product-h4"];
mainHeader[4].textContent = siteContent["main-content"]["vision-h4"];

mainParagraph[0].textContent = siteContent["main-content"]["features-content"];
mainParagraph[1].textContent = siteContent["main-content"]["about-content"];
mainParagraph[2].textContent = siteContent["main-content"]["services-content"];
mainParagraph[3].textContent = siteContent["main-content"]["product-content"];
mainParagraph[4].textContent = siteContent["main-content"]["vision-content"];

// Add contact content
const contactHeader = document.querySelector(".contact h4");
contactHeader.textContent = siteContent.contact["contact-h4"];

const contactParagraphs = document.querySelectorAll(".contact p");
contactParagraphs[0].textContent = siteContent["contact"]["address"];
contactParagraphs[1].textContent = siteContent.contact.phone;
contactParagraphs[2].textContent = siteContent.contact.email;

// Add footer content
const footerContent = document.querySelector("footer p");
footerContent.textContent = siteContent.footer.copyright;
