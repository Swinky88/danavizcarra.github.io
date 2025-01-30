class Navigation {
    private navToggle: HTMLElement;
    private navMenu: HTMLElement;

    constructor() {
        this.navToggle = document.querySelector('.nav-toggle') as HTMLElement;
        this.navMenu = document.querySelector('.nav-menu') as HTMLElement;
        this.setupEventListeners();
    }

    private setupEventListeners(): void {
        this.navToggle.addEventListener('click', () => this.toggleMenu());
    }

    private toggleMenu(): void {
        this.navMenu.classList.toggle('active');
    }
}

class ContactForm {
    private form: HTMLFormElement | null;

    constructor() {
        this.form = document.getElementById('contactForm') as HTMLFormElement;
        if (this.form) {
            this.setupEventListeners();
        }
    }

    private setupEventListeners(): void {
        this.form?.addEventListener('submit', (e) => this.handleSubmit(e));
    }

    private handleSubmit(e: Event): void {
        e.preventDefault();
        const subject = (document.getElementById('subject') as HTMLInputElement).value;
        const message = (document.getElementById('message') as HTMLTextAreaElement).value;
        
        // Create mailto link
        const mailtoLink = `mailto:your-email@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
        window.location.href = mailtoLink;
    }
}

// Initialize both Navigation and ContactForm
document.addEventListener('DOMContentLoaded', () => {
    new Navigation();
    new ContactForm();
}); 