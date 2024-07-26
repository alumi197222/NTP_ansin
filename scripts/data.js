
//--- Common
var menuIdentifier="mainMenu";
var isHorizontal=1;
var smColumns=1;
var smOrientation=0;
var dmRTL=0;
var pressedItem=-2;
var itemCursor="default";
var itemTarget="_self";
var statusString="link";
var blankImage="blank.gif";
var pathPrefix_img="images/";
var pathPrefix_link="";

//--- Dimensions
var menuWidth="";
var menuHeight="";
var smWidth="";
var smHeight="";

//--- Positioning
var absolutePos=0;
var posX="0px";
var posY="0px";
var topDX=-10;
var topDY=6;
var DX=0;
var DY=0;
var subMenuAlign="left";
var subMenuVAlign="top";

//--- Font
var fontStyle=["normal 12px Trebuchet MS, Tahoma, Arial, Helvetica","normal 12px Trebuchet MS, Tahoma, Arial, Helvetica"];
var fontColor=["",""];
var fontDecoration=["none","none"];
var fontColorDisabled="#AAAAAA";

//--- Appearance
var menuBackColor="#FFFFFF";
var menuBackImage="";
var menuBackRepeat="repeat";
var menuBorderColor="#999999";
var menuBorderWidth="1px";
var menuBorderStyle="solid";
var smFrameImage="";
var smFrameWidth=0;

//--- Item Appearance
var itemBackColor=["",""];
var itemBackImage=["",""];
var itemSlideBack=0;
var beforeItemImage=["",""];
var afterItemImage=["",""];
var beforeItemImageW="";
var afterItemImageW="";
var beforeItemImageH="";
var afterItemImageH="";
var itemBorderWidth="";
var itemBorderColor=["#6655FF","#665500"];
var itemBorderStyle=["none","none"];
var itemSpacing=1;
var itemPadding="3px";
var itemAlignTop="left";
var itemAlign="left";

//--- Icons
var iconTopWidth="";
var iconTopHeight="";
var iconWidth=16;
var iconHeight=16;
var arrowWidth="";
var arrowHeight="";
var arrowImageMain=["",""];
var arrowWidthSub=11;
var arrowHeightSub=12;
var arrowImageSub=["arrow1.gif","arrow1.gif"];

//--- Separators
var separatorImage="";
var separatorColor="";
var separatorWidth="100%";
var separatorHeight="3px";
var separatorAlignment="left";
var separatorVImage="";
var separatorVColor="";
var separatorVWidth="3px";
var separatorVHeight="100%";
var separatorPadding="0px";

//--- Floatable Menu
var floatable=0;
var floatIterations=6;
var floatableX=1;
var floatableY=1;
var floatableDX=15;
var floatableDY=15;

//--- Movable Menu
var movable=0;
var moveWidth=12;
var moveHeight=20;
var moveColor="#AA0000";
var moveImage="";
var moveCursor="default";
var smMovable=0;
var closeBtnW=15;
var closeBtnH=15;
var closeBtn="";

//--- Transitional Effects & Filters
var transparency="100";
var transition=103;
var transOptions="";
var transDuration=200;
var transDuration2=200;
var shadowLen=3;
var shadowColor="#777777";
var shadowTop=0;

//--- CSS Support (CSS-based Menu)
var cssStyle=1;
var cssSubmenu="dmSubmenu";
var cssItem=["dmItem1","dmItem2"];
var cssItemText=["dmText1","dmText2"];

//--- Advanced
var dmObjectsCheck=0;
var saveNavigationPath=1;
var showByClick=0;
var noWrap=1;
var smShowPause=200;
var smHidePause=1000;
var smSmartScroll=1;
var topSmartScroll=0;
var smHideOnClick=1;
var dm_writeAll=0;
var useIFRAME=0;
var dmSearch=0;

//--- AJAX-like Technology
var dmAJAX=0;
var dmAJAXCount=0;
var ajaxReload=0;

//--- Dynamic Menu
var dynamic=0;

//--- Popup Menu
var popupMode=0;

//--- Keystrokes Support
var keystrokes=0;
var dm_focus=1;
var dm_actKey=113;

//--- Sound
var onOverSnd="";
var onClickSnd="";

var itemStyles = [
    ["CSS=dmItemTop11,dmItemTop12","CSSText=dmTextTop1,dmTextTop2"],
    ["CSS=dmItemTop21,dmItemTop22","CSSText=dmTextTop1,dmTextTop2"],
    ["CSS=dmItemTop31,dmItemTop32","CSSText=dmTextTop1,dmTextTop2"],
    ["CSS=dmItemTop41,dmItemTop42","CSSText=dmTextTop1,dmTextTop2"],
    ["CSS=dmItemTop51,dmItemTop52","CSSText=dmTextTop1,dmTextTop2"],
    ["CSS=dmItemTop61,dmItemTop62","CSSText=dmTextTop1,dmTextTop2"],
];
var menuStyles = [
    ["menuBackColor=transparent","menuBorderWidth=0px","menuBorderStyle=none","itemSpacing=0","CSS=dmSubmenuTop"],
];
