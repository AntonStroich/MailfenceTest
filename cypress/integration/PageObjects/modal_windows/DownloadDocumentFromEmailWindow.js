///<reference types = 'Cypress' />
import DocumentsWindow from "./DocumentsWindow";


class DownloadDocumentFromEmailWindow extends DocumentsWindow {

    constructor() {
        super(`.GCSDBRWBJY.GCSDBRWBKY.GCSDBRWBOD.GCSDBRWBFMB`, `Window with documents attached to an email to download them`);
    }
    
}

export default DownloadDocumentFromEmailWindow;