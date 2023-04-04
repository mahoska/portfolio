/**
 * @description       : 
 * @author            : Anna Makhovskaya
 * @group             : 
 * @last modified on  : 04-04-2023
 * @last modified by  : Anna Makhovskaya
**/
public without sharing class NoteTakingController {
    
    @AuraEnabled
    public static Boolean createNoteRecord(String title, string description){
        try{
            if(!String.isBlank(title)){
                My_Note__c noteRec = new My_Note__c(Name=title, Note_Description__c=description);
                insert noteRec;
                return true;
            }
            return false;
        }catch(Exception e){
            throw new  AuraHandledException('e.getMessage');
        }
    }

    @AuraEnabled(cacheable=true)
    public static List<My_Note__c> getNotes(){
        return [SELECT Id, Name, Note_Description__c, LastModifiedDate FROM My_Note__c ORDER BY LastModifiedDate DESC];
    }

    @AuraEnabled
    public static Boolean updateNoteRecord(String noteId, String title, String description){
        try {
            if(!String.isBlank(noteId)){
                My_Note__c note = [SELECT Id, Name, Note_Description__c, LastModifiedDate FROM My_Note__c WHERE Id=:noteId];
                note.Name = title;
                note.Note_Description__c = description;
                update note;
                return true;
            }
            return false;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled
    public static Boolean deleteNoteHandler(String noteId){
        try {
            if(!String.isBlank(noteId)){
                My_Note__c noteRec = new My_Note__c(Id=noteId);
                delete noteRec;
                return true;
            }
            return false;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}