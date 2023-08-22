///<reference types = 'Cypress' />
import BasePage from "./BasePage";
import Header from "../page_components/Header";
import ToolBar from "../page_components/ToolBar";
import MainArea from "../page_components/MainArea";
import UserMenu from "../page_components/UserMenu";
import DocList from "../page_components/lists/DocList";
import ConfirmDeletionWindow from  "../page_components/modal_windows/ConfirmDeletionWindow";
import DocumentsNavBar from "../page_components/navigation_bars/DocumentsNavBar";



class DocumentsPage extends BasePage {

    constructor(locator) {
        super(locator, `Documents Page`);
        this.header = new Header();
        this.toolBar = new ToolBar();
        this.mainArea = new MainArea();
        this.userMenu = new UserMenu();
        this.docList =  new DocList();
        this.confirmDeletionWindow = new ConfirmDeletionWindow();
        this.documentsNavBar = new DocumentsNavBar();
    }
    
}

export default DocumentsPage;