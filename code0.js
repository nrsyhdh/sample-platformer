gdjs.New_32sceneCode = {};
gdjs.New_32sceneCode.GDCloudObjects1= [];
gdjs.New_32sceneCode.GDCloudObjects2= [];
gdjs.New_32sceneCode.GDPlayerObjects1= [];
gdjs.New_32sceneCode.GDPlayerObjects2= [];
gdjs.New_32sceneCode.GDGrassPlatformObjects1= [];
gdjs.New_32sceneCode.GDGrassPlatformObjects2= [];
gdjs.New_32sceneCode.GDSmallBridgeObjects1= [];
gdjs.New_32sceneCode.GDSmallBridgeObjects2= [];
gdjs.New_32sceneCode.GDCoinObjects1= [];
gdjs.New_32sceneCode.GDCoinObjects2= [];
gdjs.New_32sceneCode.GDScoreObjects1= [];
gdjs.New_32sceneCode.GDScoreObjects2= [];
gdjs.New_32sceneCode.GDSlimeObjects1= [];
gdjs.New_32sceneCode.GDSlimeObjects2= [];
gdjs.New_32sceneCode.GDLeftObjects1= [];
gdjs.New_32sceneCode.GDLeftObjects2= [];
gdjs.New_32sceneCode.GDRightObjects1= [];
gdjs.New_32sceneCode.GDRightObjects2= [];
gdjs.New_32sceneCode.GDCheckpointObjects1= [];
gdjs.New_32sceneCode.GDCheckpointObjects2= [];

gdjs.New_32sceneCode.conditionTrue_0 = {val:false};
gdjs.New_32sceneCode.condition0IsTrue_0 = {val:false};
gdjs.New_32sceneCode.condition1IsTrue_0 = {val:false};
gdjs.New_32sceneCode.condition2IsTrue_0 = {val:false};


gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.New_32sceneCode.GDPlayerObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDCoinObjects1Objects = Hashtable.newFrom({"Coin": gdjs.New_32sceneCode.GDCoinObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDSlimeObjects1Objects = Hashtable.newFrom({"Slime": gdjs.New_32sceneCode.GDSlimeObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDLeftObjects1Objects = Hashtable.newFrom({"Left": gdjs.New_32sceneCode.GDLeftObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDSlimeObjects1Objects = Hashtable.newFrom({"Slime": gdjs.New_32sceneCode.GDSlimeObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDRightObjects1Objects = Hashtable.newFrom({"Right": gdjs.New_32sceneCode.GDRightObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.New_32sceneCode.GDPlayerObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDSlimeObjects1Objects = Hashtable.newFrom({"Slime": gdjs.New_32sceneCode.GDSlimeObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.New_32sceneCode.GDPlayerObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDSlimeObjects1Objects = Hashtable.newFrom({"Slime": gdjs.New_32sceneCode.GDSlimeObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.New_32sceneCode.GDPlayerObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDCheckpointObjects1Objects = Hashtable.newFrom({"Checkpoint": gdjs.New_32sceneCode.GDCheckpointObjects1});gdjs.New_32sceneCode.eventsList0 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.New_32sceneCode.GDPlayerObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.New_32sceneCode.GDPlayerObjects1.length !== 0 ? gdjs.New_32sceneCode.GDPlayerObjects1[0] : null), true, "", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.New_32sceneCode.GDPlayerObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDPlayerObjects1[k] = gdjs.New_32sceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDPlayerObjects1.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDPlayerObjects1[i].setAnimationName("Jumping");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.New_32sceneCode.GDPlayerObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
gdjs.New_32sceneCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDPlayerObjects1[k] = gdjs.New_32sceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDPlayerObjects1.length = k;}if ( gdjs.New_32sceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.New_32sceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.New_32sceneCode.condition1IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDPlayerObjects1[k] = gdjs.New_32sceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDPlayerObjects1.length = k;}}
if (gdjs.New_32sceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDPlayerObjects1[i].setAnimationName("Idle");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.New_32sceneCode.GDPlayerObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
gdjs.New_32sceneCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDPlayerObjects1[k] = gdjs.New_32sceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDPlayerObjects1.length = k;}if ( gdjs.New_32sceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.New_32sceneCode.condition1IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDPlayerObjects1[k] = gdjs.New_32sceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDPlayerObjects1.length = k;}}
if (gdjs.New_32sceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDPlayerObjects1[i].setAnimationName("Running");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Coin"), gdjs.New_32sceneCode.GDCoinObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.New_32sceneCode.GDPlayerObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDPlayerObjects1Objects, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDCoinObjects1Objects, false, runtimeScene, false);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDCoinObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDCoinObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDCoinObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "C:\\Users\\USER\\Downloads\\PlatformerTutorialResources\\coin.wav", false, 100, 1);
}{runtimeScene.getVariables().get("Score").add(1);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.New_32sceneCode.GDScoreObjects1);
{for(var i = 0, len = gdjs.New_32sceneCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDScoreObjects1[i].setString("Score: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Score"))));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Slime"), gdjs.New_32sceneCode.GDSlimeObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDSlimeObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDSlimeObjects1[i].getVariableString(gdjs.New_32sceneCode.GDSlimeObjects1[i].getVariables().getFromIndex(0)) == "left" ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDSlimeObjects1[k] = gdjs.New_32sceneCode.GDSlimeObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDSlimeObjects1.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDSlimeObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDSlimeObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDSlimeObjects1[i].addPolarForce(0, 100, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Left"), gdjs.New_32sceneCode.GDLeftObjects1);
gdjs.copyArray(runtimeScene.getObjects("Slime"), gdjs.New_32sceneCode.GDSlimeObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDSlimeObjects1Objects, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDLeftObjects1Objects, false, runtimeScene, false);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDSlimeObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDSlimeObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDSlimeObjects1[i].returnVariable(gdjs.New_32sceneCode.GDSlimeObjects1[i].getVariables().getFromIndex(0)).setString("right");
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDSlimeObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDSlimeObjects1[i].flipX(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Slime"), gdjs.New_32sceneCode.GDSlimeObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDSlimeObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDSlimeObjects1[i].getVariableString(gdjs.New_32sceneCode.GDSlimeObjects1[i].getVariables().getFromIndex(0)) == "right" ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDSlimeObjects1[k] = gdjs.New_32sceneCode.GDSlimeObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDSlimeObjects1.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDSlimeObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDSlimeObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDSlimeObjects1[i].addPolarForce(180, 100, 0);
}
}}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Left"), gdjs.New_32sceneCode.GDLeftObjects1);
gdjs.copyArray(runtimeScene.getObjects("Right"), gdjs.New_32sceneCode.GDRightObjects1);
{for(var i = 0, len = gdjs.New_32sceneCode.GDLeftObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDLeftObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDRightObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDRightObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Right"), gdjs.New_32sceneCode.GDRightObjects1);
gdjs.copyArray(runtimeScene.getObjects("Slime"), gdjs.New_32sceneCode.GDSlimeObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDSlimeObjects1Objects, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDRightObjects1Objects, false, runtimeScene, false);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDSlimeObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDSlimeObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDSlimeObjects1[i].returnVariable(gdjs.New_32sceneCode.GDSlimeObjects1[i].getVariables().getFromIndex(0)).setString("left");
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDSlimeObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDSlimeObjects1[i].flipX(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.New_32sceneCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Slime"), gdjs.New_32sceneCode.GDSlimeObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
gdjs.New_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDPlayerObjects1Objects, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDSlimeObjects1Objects, false, runtimeScene, false);
}if ( gdjs.New_32sceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.New_32sceneCode.condition1IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDPlayerObjects1[k] = gdjs.New_32sceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDPlayerObjects1.length = k;}}
if (gdjs.New_32sceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDPlayerObjects1[i].setPosition(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("CheckpointX")),gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("CheckpointY")));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.New_32sceneCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Slime"), gdjs.New_32sceneCode.GDSlimeObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
gdjs.New_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDPlayerObjects1Objects, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDSlimeObjects1Objects, false, runtimeScene, false);
}if ( gdjs.New_32sceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.New_32sceneCode.condition1IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDPlayerObjects1[k] = gdjs.New_32sceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDPlayerObjects1.length = k;}}
if (gdjs.New_32sceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDPlayerObjects1 */
/* Reuse gdjs.New_32sceneCode.GDSlimeObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDSlimeObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDSlimeObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Checkpoint"), gdjs.New_32sceneCode.GDCheckpointObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.New_32sceneCode.GDPlayerObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDPlayerObjects1Objects, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDCheckpointObjects1Objects, false, runtimeScene, false);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDCheckpointObjects1 */
{runtimeScene.getVariables().get("CheckpointX").setNumber((( gdjs.New_32sceneCode.GDCheckpointObjects1.length === 0 ) ? 0 :gdjs.New_32sceneCode.GDCheckpointObjects1[0].getPointX("")));
}{runtimeScene.getVariables().get("CheckpointY").setNumber((( gdjs.New_32sceneCode.GDCheckpointObjects1.length === 0 ) ? 0 :gdjs.New_32sceneCode.GDCheckpointObjects1[0].getPointY("")));
}}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.New_32sceneCode.GDPlayerObjects1);
{runtimeScene.getVariables().get("CheckpointX").setNumber((( gdjs.New_32sceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.New_32sceneCode.GDPlayerObjects1[0].getPointX("")));
}{runtimeScene.getVariables().get("CheckpointY").setNumber((( gdjs.New_32sceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.New_32sceneCode.GDPlayerObjects1[0].getPointY("")));
}}

}


};

gdjs.New_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.New_32sceneCode.GDCloudObjects1.length = 0;
gdjs.New_32sceneCode.GDCloudObjects2.length = 0;
gdjs.New_32sceneCode.GDPlayerObjects1.length = 0;
gdjs.New_32sceneCode.GDPlayerObjects2.length = 0;
gdjs.New_32sceneCode.GDGrassPlatformObjects1.length = 0;
gdjs.New_32sceneCode.GDGrassPlatformObjects2.length = 0;
gdjs.New_32sceneCode.GDSmallBridgeObjects1.length = 0;
gdjs.New_32sceneCode.GDSmallBridgeObjects2.length = 0;
gdjs.New_32sceneCode.GDCoinObjects1.length = 0;
gdjs.New_32sceneCode.GDCoinObjects2.length = 0;
gdjs.New_32sceneCode.GDScoreObjects1.length = 0;
gdjs.New_32sceneCode.GDScoreObjects2.length = 0;
gdjs.New_32sceneCode.GDSlimeObjects1.length = 0;
gdjs.New_32sceneCode.GDSlimeObjects2.length = 0;
gdjs.New_32sceneCode.GDLeftObjects1.length = 0;
gdjs.New_32sceneCode.GDLeftObjects2.length = 0;
gdjs.New_32sceneCode.GDRightObjects1.length = 0;
gdjs.New_32sceneCode.GDRightObjects2.length = 0;
gdjs.New_32sceneCode.GDCheckpointObjects1.length = 0;
gdjs.New_32sceneCode.GDCheckpointObjects2.length = 0;

gdjs.New_32sceneCode.eventsList0(runtimeScene);
return;

}

gdjs['New_32sceneCode'] = gdjs.New_32sceneCode;
