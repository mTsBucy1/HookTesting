/*TC*******************************************************************************************************************
* @name           TC_Test_1
* @desc           Dieser Testfall legt eine neue Version für das Formular "AT_K00" an und prüft 
                  die Funktionalitäten dazu.
*
* @autor          me 
* @creationDate   10/07/2023
* 
* @qacProject     tp_Test           
* @qacFolder		  4.1_Release/03_ART-Test/01_Mobile-Forms/01_FunctionalityTest
* @qacTestType    FunctionalityTest
* @qacTestSet     TS_Test_Generiertes_Testset_RQ
* @qacParam       custom_args:/CArgs:Environment=%Environment% /CArgs:Browser=%Browser%
* @priority			  2-Medium
* @timeout			  240
**********************************************************************************************************************/
function TC_Test_1() {

    TS_General_Test_Action_TestBlockStart("Starten der Anwendung");
    TS_TestC_Execution_StartApplikation();
    TS_General_Test_Action_TestBlockEnd();

    /*******************************************************************************************************************/
    TS_General_Test_Action_TestBlockStart("Beenden der Anwendung");
    TS_TestC_Execution_CloseApplikation();
    
