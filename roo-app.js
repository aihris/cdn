function getFullUrl(relativePath) {
    const domain = window.location.origin;
    return `${domain}/${relativePath}`;
}

serverConfig.forEach(config => {
    if (config.imgServer) {
        const fullUrl = getFullUrl(config.imgServer);
    }
});
