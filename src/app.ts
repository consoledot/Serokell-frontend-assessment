// Declare varibales
const navigation: HTMLElement | any = document.getElementById("navigation");
const contactButton: HTMLElement | any =
  document.getElementById("contact-button");
const fixedBackground: string = "navigation__fixed-background";

// Function to add background color to navigation
window.addEventListener("scroll", (): void => {
  window.scrollY > 30
    ? navigation.classList.add(fixedBackground)
    : navigation.classList.remove(fixedBackground);
});

// Function to scroll to specific id on a page
const scrollToView = (ref: string): void => {
  const element: HTMLElement | any = document.getElementById(ref);
  element.scrollIntoView({ behavior: "smooth", block: "start", inline: "end" });
};

contactButton.addEventListener("click", (): void => {
  scrollToView("section-contact");
});
