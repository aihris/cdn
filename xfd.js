function generateDownloadBlocks() {
    const container = document.getElementById('downloads-hkk');

    if (!container) return;

    appDl.forEach(file => {
        const downloadContainer = document.createElement('div');
        downloadContainer.classList.add('download-container');

        const fileInfo = document.createElement('div');
        fileInfo.classList.add('file-info');

        const iconFile = document.createElement('img');
        iconFile.classList.add('icon-file');
        iconFile.src = file.imgServer;
        iconFile.alt = "Icono archivo";

        const fileDetails = document.createElement('div');
        fileDetails.classList.add('file-details');

        const fileName = document.createElement('p');
        fileName.classList.add('file-name');
        fileName.textContent = file.fileName;

        const fileMeta = document.createElement('p');
        fileMeta.classList.add('file-meta', 'nnlk');

        const spanFileNumber = document.createElement('span');
        const iconCopy = document.createElement('i');
        iconCopy.classList.add('fas', 'fa-copy');
        spanFileNumber.appendChild(iconCopy);
        spanFileNumber.appendChild(document.createTextNode(` ${file.numberFile}`));

        const spanFileSize = document.createElement('span');
        spanFileSize.classList.add('hglx');
        const iconHdd = document.createElement('i');
        iconHdd.classList.add('fas', 'fa-hdd', 'ml-3');
        spanFileSize.appendChild(iconHdd);
        spanFileSize.appendChild(document.createTextNode(` ${file.sizeFile}`));

        const downloadButton = document.createElement('a');
        downloadButton.href = file.linkDonwload;
        downloadButton.classList.add('download-button');
        downloadButton.textContent = 'Descargar';

        fileMeta.appendChild(spanFileNumber);
        fileMeta.appendChild(spanFileSize);

        fileDetails.appendChild(fileName);
        fileDetails.appendChild(fileMeta);

        fileInfo.appendChild(iconFile);
        fileInfo.appendChild(fileDetails);

        downloadContainer.appendChild(fileInfo);
        downloadContainer.appendChild(downloadButton);

        container.appendChild(downloadContainer);
    });
}

window.onload = generateDownloadBlocks;

window.onload = generateDownloadBlocks;


const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css';
link.type = 'text/css';
document.head.appendChild(link);


const stylesArray = [
    '.download-container { display: flex; justify-content: space-between; align-items: center; border: 1px solid #ddd; padding: 10px; border-radius: 8px; margin-bottom: 10px; background-color: #f9f9f9; }',
    '.file-info { display: flex; align-items: center; }',
    '.file-info img { width: 50px; height: 50px; margin-right: 8px; border: solid 1px #4285f4; border-radius: 5px; }',
    '.file-details { display: flex; flex-direction: column; padding: 4px; }',
    '.file-details .file-name { font-weight: bold; color: #1565c0; margin: 0; }',
    '.file-details .file-meta { font-size: 12px; font-weight: 800; color: #6c757d; }',
    '.download-button { background-color: #4285f4; color: white; padding: 10px 20px; border: none; border-radius: 4px; text-decoration: none; font-size: 14px; transition: background-color 0.3s; }',
    '.download-button:hover { background-color: #357ae8; }',
    '.nnlk { margin-top: 2px; }',
    '.hglx { margin-left: 20px; }'
];

const styleElement = document.createElement('style');
styleElement.type = 'text/css';

styleElement.appendChild(document.createTextNode(stylesArray.join(' ')));

document.head.appendChild(styleElement);
