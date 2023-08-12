import LandingPage from "../integration/PageObjects/landing/LandingPage";
import LoginToMailPage from "../integration/PageObjects/login/LoginToMailPage";
import MailBoxHeader from "../integration/PageObjects/mail_box/MailBoxHeader";
import MailBoxUserMenu from "../integration/PageObjects/mail_box/MailBoxUserMenu";
import MessagesNavBar from "../integration/PageObjects/navigation_bars/MessagesNavBar";
import DocumentsNavBar from "../integration/PageObjects/navigation_bars/DocumentsNavBar";
import MailList from "../integration/PageObjects/lists/MailList";
import DocList from "../integration/PageObjects/lists/DocList";


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
    const documentsNavBar = new DocumentsNavBar();
    const mailList = new MailList();
    const docList = new DocList();
  

    landingPage.openAndClickMailBtn();
    cy.intercept(`POST`, `/gwt`, (request) => {
        if (request.body.includes(`getFolderMessages`)) {
            request.alias = 'getFolderMessages';
        }
      });
    loginToMailPage.logInToMail(login, password);
    cy.wait(`@getFolderMessages`, {timeout: 30000});
    mailList.moveToTrashAllIfNotEmpty();
    messagesNavBar.clickSentBtn();
    cy.wait(`@getFolderMessages`, {timeout: 30000});
    mailList.moveToTrashAllIfNotEmpty();
    messagesNavBar.clickDraftsBtn();
    cy.wait(`@getFolderMessages`, {timeout: 30000});
    mailList.moveToTrashAllIfNotEmpty();
    messagesNavBar.clickSpamBtn();
    cy.wait(`@getFolderMessages`, {timeout: 30000});
    mailList.deleteAllIfNotEmpty();
    messagesNavBar.clickTrashBtn();
    cy.wait(`@getFolderMessages`, {timeout: 30000});
    mailList.deleteAllIfNotEmpty();
    mailBoxHeader.clickDocumentsBtn();
    cy.intercept(`POST`, `/gwt`, (request) => {
        if (request.body.includes(`getDocuments`)) {
            request.alias = 'getDocuments';
        }
      });
    documentsNavBar.clickMyDocumentsBtn();
    cy.wait(`@getDocuments`, {timeout: 30000});
    docList.moveToTrashAllIfNotEmpty();
    documentsNavBar.clickTrashBtn();
    cy.wait(`@getDocuments`, {timeout: 30000});
    docList.deleteAllIfNotEmpty();
    mailBoxHeader.clickUserBtn();
    mailBoxUserMenu.clickLogOutBtn();
  })


Cypress.Commands.add("uploadNewDocumentOnDocumentPage", (path, url) => {
    url = `/sw?type=doc&state=26&gwt=1&oidDir=439327776`;
    cy.intercept(url).as(`uploadDocument`);
    cy.get("#new_doc input[type=file]", {timeout: 10000}).selectFile(path, { action: "select", force: true });
    cy.wait(`@uploadDocument`);
  })

  Cypress.Commands.add('setCurrentCount', (currentCount) => {
    cy.wrap(currentCount).as('currentCount');
  });
  