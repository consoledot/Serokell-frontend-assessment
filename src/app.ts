// Declare varibales
const navigation: HTMLElement | any = document.getElementById("navigation");
const contactButton: HTMLElement | any =
  document.getElementById("contact-button");
const menu: HTMLElement | any = document.getElementById("menu");
const dropdownList: HTMLElement | any =
  document.getElementById("dropdown-list");
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

// Function to show dropdown
const ToggleShow = (): void => {
  navigation.classList.toggle("show");
  menu.classList.toggle("show");
  dropdownList.classList.toggle("show");
};

menu.addEventListener("click", ToggleShow);
