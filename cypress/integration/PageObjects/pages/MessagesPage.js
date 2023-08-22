///<reference types = 'Cypress' />
import BasePage from "./BasePage";
import Header from "../page_components/Header";
import ToolBar from "../page_components/ToolBar";
import MainArea from "../page_components/MainArea";
import UserMenu from "../page_components/UserMenu";
import MessagesNavBar from "../page_components/navigation_bars/MessagesNavBar";
import MailList from "../page_components/lists/MailList";
import DocList from "../page_components/lists/DocList";
import ConfirmDeletionWindow from  "../page_components/modal_windows/ConfirmDeletionWindow";
import AddDocumentToEmailWindow from  "../page_components/modal_windows/AddDocumentToEmailWindow";
import DownloadDocumentFromEmailWindow from  "../page_components/modal_windows/DownloadDocumentFromEmailWindow";
import ExistedEmailForm from "../page_components/email_forms/ExistedEmailForm";
import NewEmailForm from "../page_components/email_forms/NewEmailForm";



class MessagesPage extends BasePage {

    constructor(locator) {
        super(locator, `Messages Page`);
        this.header = new Header();
        this.toolBar = new ToolBar();
        this.mainArea = new MainArea();
        this.userMenu = new UserMenu();
        this.messagesNavBar = new MessagesNavBar();
        this.mailList =  new MailList();
        this.docList =  new DocList();
        this.confirmDeletionWindow = new ConfirmDeletionWindow();
        this.addDocumentToEmailWindow = new AddDocumentToEmailWindow();
        this.downloadDocumentFromEmailWindow = new DownloadDocumentFromEmailWindow();
        this.existedEmailForm = new ExistedEmailForm();
        this.newEmailForm = new NewEmailForm();  
    }
    
}

export default MessagesPage;