const Footer = () => {
  return (
    <footer className="border-t border-border py-8 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-body text-xs text-muted-foreground">
          © {new Date().getFullYear()} · All rights reserved
        </p>
        <div className="flex gap-6">
          <a href="#" className="font-body text-xs text-muted-foreground hover:text-foreground transition-colors">
            LinkedIn
          </a>
          <a href="#" className="font-body text-xs text-muted-foreground hover:text-foreground transition-colors">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
