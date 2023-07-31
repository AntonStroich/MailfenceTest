import LandingPage from "../integration/PageObjects/landing/LandingPage";
import LoginToMailPage from "../integration/PageObjects/login/LoginToMailPage";
import MailBoxHeader from "../integration/PageObjects/mail_box/MailBoxHeader";
import MailBoxUserMenu from "../integration/PageObjects/mail_box/MailBoxUserMenu";
import MessagesToolBar from "../integration/PageObjects/tool_bars/MessagesToolBar";
import MessagesTabToolBarWithDeleteBtn from "../integration/PageObjects/tool_bars/MessagesTabToolBarWithDeleteBtn";
import MessagesNavBar from "../integration/PageObjects/navigation_bars/MessagesNavBar";
import DocumentsNavBar from "../integration/PageObjects/navigation_bars/DocumentsNavBar";
import DocumentsToolBar  from "../integration/PageObjects/tool_bars/DocumentsToolBar";
import DocumentsTabToolBarWithDeleteBtn from "../integration/PageObjects/tool_bars/DocumentsTabToolBarWithDeleteBtn";
import { FILE_UPLOAD_ON_DOCUMENTS_PAGE_REQUEST} from "../integration/PageObjects/base_variables";


  Cypress.Commands.add("generateAttachment", (filePath, attachmentName, attachmentExtension, attachmentText)=> { 
    cy.writeFile(`${filePath}\\${attachmentName}.${attachmentExtension}`, `${attachmentText}`);
    cy.readFile(`${filePath}\\${attachmentName}.${attachmentExtension}`).should("not.be.null");
  })

  Cypress.Commands.add('dragAndDrop', (subject, subjectIndex, target) => {
    cy.get(subject).should('be.visible', { timeout: 30000 });
    Cypress.log({
        name: 'DRAGNDROP',
        message: `Dragging element ${subject} to ${target}`,
        consoleProps: () => {
            return {
                subject: subject,
                target: target
            };
        }
    });
    const BUTTON_INDEX = 0;
    cy.get(target)
        .first()
        .then($target => {
            let coordsDrop = $target[0].getBoundingClientRect();
            cy.get(subject)
                .eq(subjectIndex)
                .then(subject => {
                    const coordsDrag = subject[0].getBoundingClientRect();
                    cy.wrap(subject)
                        .trigger('mousedown', {
                            button: BUTTON_INDEX,
                            clientX: coordsDrag.x,
                            clientY: coordsDrag.y,
                            force: true
                        })
                        .trigger('mousemove', {
                            button: BUTTON_INDEX,
                            clientX: coordsDrag.x - 5,
                            clientY: coordsDrag.y - 5,
                            force: true
                        }).wait(1000);
                    cy.get(target)
                        .trigger('mousemove', {
                            button: BUTTON_INDEX,
                            clientX: coordsDrop.x,
                            clientY: coordsDrop.y,
                            force: true
                        })
                        .trigger('mouseup', {force: true});
                });
        });
});

  Cypress.Commands.add("loginAndClearAll", (login, password)=> {
    const landingPage = new LandingPage();
    const loginToMailPage = new LoginToMailPage();
    const mailBoxHeader = new MailBoxHeader();
    const mailBoxUserMenu = new MailBoxUserMenu();
    const messagesNavBar = new MessagesNavBar();
    const messagesToolBar = new MessagesToolBar();
    const messagesTabToolBarWithDeleteBtn = new MessagesTabToolBarWithDeleteBtn();
    const documentsNavBar = new DocumentsNavBar();
    const documentsToolBar = new DocumentsToolBar();
    const documentsTabToolBarWithDeleteBtn = new DocumentsTabToolBarWithDeleteBtn();

    landingPage.openAndClickMailBtn();
    loginToMailPage.logInToMail(login, password);
    mailBoxHeader.clickMessagesBtn();
    messagesNavBar.clickInboxBtn();
    messagesToolBar.deleteAllIfNotEmpty();
    messagesNavBar.clickSentBtn();
    messagesToolBar.deleteAllIfNotEmpty();
    messagesNavBar.clickDraftsBtn();
    messagesToolBar.deleteAllIfNotEmpty();
    messagesNavBar.clickSpamBtn();
    messagesTabToolBarWithDeleteBtn.deleteAllIfNotEmpty();
    messagesNavBar.clickTrashBtn();
    messagesTabToolBarWithDeleteBtn.deleteAllIfNotEmpty();
    mailBoxHeader.clickDocumentsBtn();
    documentsNavBar.clickMyDocumentsBtn();
    documentsToolBar.deleteAllIfNotEmpty();
    documentsNavBar.clickTrashBtn();
    documentsTabToolBarWithDeleteBtn.deleteAllIfNotEmpty();
    mailBoxHeader.clickUserBtn();
    mailBoxUserMenu.clickLogOutBtn();
  })


  Cypress.Commands.add("waitForRequestToComplete", (url)=> {
    cy.intercept(url).as(`alias`);
    cy.wait(`@alias`);
  })

  Cypress.Commands.add("uploadNewDocumentOnDocumentPage", (path, url =  FILE_UPLOAD_ON_DOCUMENTS_PAGE_REQUEST)=> {
    cy.get("#new_doc input[type=file]", {timeout: 1000}).selectFile(path, { action: "select", force: true });
    cy.waitForRequestToComplete(url);
  })

  