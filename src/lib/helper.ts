/**
 * Scroll to a section by its id
 * @param id - The id of the section to scroll to
 */
export const scrollToSection = (id: string) => {
  const section = document.getElementById(id)
  if (section) {
    const headerHeight = 80; // Account for sticky header
    const sectionTop = section.offsetTop - headerHeight;
    
    window.scrollTo({
      top: sectionTop,
      behavior: "smooth"
    });
  }
  else {
    window.location.href = `/#${id}`
  }
};