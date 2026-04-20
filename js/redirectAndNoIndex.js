// If the path ends with index.html cheate meta data for no index and follow
if (window.location.pathname.endsWith("index.html")) {
    // Add noindex meta
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex, follow";
    document.head.appendChild(meta);
    // Redirect to root page
    window.location.replace("/");
}