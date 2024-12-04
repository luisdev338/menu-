class mobileNavbar{
    constructor(mobileMenu, navList, navLinks){
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks(){
        this.navLinks.forEach((link, index)=> {
            link.style.animation
            ? (link.style.animation = "")
            : (link.style.aniation = `navLinkfade 0.5s ease forwards ${index / 7 + 0.3}s`);
        });
    }
    handleClick() {
        this.navList.classList.tpggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addclickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init() {
        if(this.mobileMenu){
            this.addclickEvent();
        }
        return this;
    }
}

const mobileNavebar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);

mobileNavbar.init();
